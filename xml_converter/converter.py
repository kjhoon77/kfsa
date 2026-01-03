import xml.etree.ElementTree as ET
import os
from pathlib import Path
import re
from collections import defaultdict

class XMLToReactConverter:
    def __init__(self, output_dir):
        self.output_dir = Path(output_dir)
        self.menu_items = []

    def convert_directory(self, input_dir, whitelist=None):
        input_path = Path(input_dir)
        if not input_path.exists():
            print(f"Error: Input directory {input_dir} does not exist.")
            return

        for root, dirs, files in os.walk(input_path):
            files.sort()
            rel_path = Path(root).relative_to(input_path)
            
            if whitelist:
                parts = rel_path.parts
                if not parts:
                    dirs[:] = [d for d in dirs if d in whitelist]
                    pass
                else:
                    if parts[0] not in whitelist:
                        continue

            target_dir = self.output_dir / rel_path
            
            if not target_dir.exists():
                target_dir.mkdir(parents=True, exist_ok=True)

            for file in files:
                if file.lower().endswith('.xml'):
                    self.process_file(Path(root) / file, target_dir)
        
        self.generate_menu_file()

    def process_file(self, xml_file, target_dir):
        if not target_dir.exists():
            target_dir.mkdir(parents=True, exist_ok=True)
            
        try:
            content = None
            for encoding in ['utf-8', 'euc-kr', 'cp949']:
                try:
                    with open(xml_file, 'r', encoding=encoding) as f:
                        content = f.read()
                    break
                except UnicodeDecodeError:
                    continue
            
            if content is None:
                print(f"Failed to decode {xml_file}")
                return

            content = re.sub(r'encoding="[^"]+"', '', content, count=1)
            
            try:
                root = ET.fromstring(content)
            except ET.ParseError:
                print(f"Warning: parsing failed for {xml_file}, trying lazy fix")
                return

            file_stem = xml_file.stem
            component_name = self._make_pascal_case(file_stem)
            
            print(f"Converting {xml_file.name} -> {component_name}...")

            datasets = self._parse_datasets(root)
            ui_elements = self._parse_ui_elements(root)
            
            self._generate_hook(component_name, target_dir, datasets, ui_elements)
            # Create case-insensitive map of dataset names
            ds_name_map = {ds['name'].lower(): ds['name'] for ds in datasets}
            
            self._generate_hook(component_name, target_dir, datasets, ui_elements)
            self._generate_data_file(component_name, target_dir, datasets)
            self._generate_view(component_name, target_dir, datasets, ui_elements, ds_name_map, xml_source_path=xml_file)

            rel_path_from_output = target_dir.relative_to(self.output_dir)
            self.menu_items.append({
                'name': component_name,
                'path': str(rel_path_from_output / component_name),
                'file': str(xml_file)
            })

        except Exception as e:
            print(f"Error processing {xml_file}: {e}")

    def _parse_datasets(self, root):
        datasets = []
        ds_root = root.find('.//Datasets')
        if ds_root is None:
            return datasets
            
        seen_ids = set()
        for ds in ds_root.findall('Dataset'):
            ds_name = ds.get('Id')
            if ds_name in seen_ids: continue
            seen_ids.add(ds_name)
            
            columns = []
            records = []
            contents = ds.find('Contents')
            if contents is not None:
                for col in contents.findall('colinfo'):
                    columns.append({
                        'id': col.get('id'),
                        'type': col.get('type'),
                        'size': col.get('size')
                    })
                
                for rec in contents.findall('record'):
                    row_data = {}
                    for field in rec:
                        row_data[field.tag] = field.text or ""
                    records.append(row_data)
                    
            datasets.append({'name': ds_name, 'columns': columns, 'records': records})
        return datasets

    def _parse_ui_elements(self, root):
        form = root.find('.//Form')
        if form is None:
            form = root.find('Form')
        
        if form is None:
            return []

        elements = []
        
        def find_child_nocase(parent, tag_name):
            for child in parent:
                if child.tag.lower() == tag_name.lower():
                    return child
            return None

        def find_children_nocase(parent, tag_name):
            return [child for child in parent if child.tag.lower() == tag_name.lower()]
        
        def get_attr_nocase(element, key):
            if key in element.attrib:
                return element.attrib[key]
            for k, v in element.attrib.items():
                if k.lower() == key.lower():
                    return v
            return ''

        def process_node(node):
            tag = node.tag
            text_val = get_attr_nocase(node, 'Text')
            id_val = get_attr_nocase(node, 'Id')
            left_val = get_attr_nocase(node, 'Left') or '0'
            top_val = get_attr_nocase(node, 'Top') or '0'
            width_val = get_attr_nocase(node, 'Width') or '0'
            height_val = get_attr_nocase(node, 'Height') or '0'
            bind_val = get_attr_nocase(node, 'BindDataset')
            col_val = get_attr_nocase(node, 'Column')
            inner_val = get_attr_nocase(node, 'InnerDataset')
            click_val = get_attr_nocase(node, 'OnClick')
            img_val = get_attr_nocase(node, 'ImageID')
            code_col_val = get_attr_nocase(node, 'CodeColumn')
            data_col_val = get_attr_nocase(node, 'DataColumn')
            col_count_val = get_attr_nocase(node, 'ColumnCount')
            visible_val = get_attr_nocase(node, 'Visible')
            url_val = get_attr_nocase(node, 'Url')
            
            is_visible = True
            if visible_val and visible_val.lower() == 'false':
                is_visible = False
            
            elem = {
                'tag': tag,
                'id': id_val,
                'text': text_val,
                'left': int(left_val),
                'top': int(top_val),
                'width': int(width_val),
                'height': int(height_val),
                'bind_dataset': bind_val,
                'column': col_val,
                'inner_dataset': inner_val,
                'onclick': click_val,
                'image_id': img_val,
                'code_column': code_col_val,
                'data_column': data_col_val,
                'column_count': col_count_val,
                'visible': is_visible,
                'url': url_val,
                'grid_columns': [] 
            }
            if tag == 'Button' and not elem['text']:
                elem['text'] = get_attr_nocase(node, 'ToolTipText')

            if tag == 'Grid':
                contents = find_child_nocase(node, 'contents')
                if contents is not None:
                    format_node = find_child_nocase(contents, 'format')
                    target_node = format_node if format_node is not None else contents

                    col_widths = []
                    cols_node = find_child_nocase(target_node, 'columns')
                    if cols_node is not None:
                        for col in find_children_nocase(cols_node, 'col'):
                            w_str = get_attr_nocase(col, 'width') or '80'
                            col_widths.append(int(w_str))
                    
                    head_texts = []
                    head_node = find_child_nocase(target_node, 'head')
                    if head_node is not None:
                        for cell in find_children_nocase(head_node, 'cell'):
                            c_idx_str = get_attr_nocase(cell, 'col') or '0'
                            c_idx = int(c_idx_str)
                            text = get_attr_nocase(cell, 'text')
                            while len(head_texts) <= c_idx:
                                head_texts.append('')
                            if not head_texts[c_idx]:
                                head_texts[c_idx] = text
                    
                    body_colids = []
                    body_node = find_child_nocase(target_node, 'body')
                    if body_node is not None:
                        for cell in find_children_nocase(body_node, 'cell'):
                            c_idx_str = get_attr_nocase(cell, 'col') or '0'
                            c_idx = int(c_idx_str)
                            colid = get_attr_nocase(cell, 'colid')
                            while len(body_colids) <= c_idx:
                                body_colids.append('')
                            body_colids[c_idx] = colid
                    
                    max_idx = max(len(col_widths), len(head_texts), len(body_colids))
                    for i in range(max_idx):
                        width = col_widths[i] if i < len(col_widths) else 80
                        header = head_texts[i] if i < len(head_texts) else ''
                        field = body_colids[i] if i < len(body_colids) else ''
                        if not header and field: header = field
                        
                        # Handle Index column (typically col=0 with currow expression)
                        is_index = False
                        if i == 0 and not field: 
                             # Check body cell for expression
                             if i < len(body_colids):
                                 # We need to look up if the body cell had an expression actually.
                                 # This simple parser just saw 'body_colids'.
                                 # Let's improve body parsing above slightly or assume first col empty field is index.
                                 is_index = True
                                 field = 'id' # Virtual field name
                                 header = header or 'No'

                        if field or is_index:
                             elem['grid_columns'].append({
                                'field': field,
                                'headerName': header,
                                'width': width,
                                'type': 'index' if is_index else 'string'
                            })
            
            if tag == 'Tab':
                tabs = []
                contents = find_child_nocase(node, 'contents')
                target_node = contents if contents is not None else node
                
                for tab_page in find_children_nocase(target_node, 'tabpage'):
                    tab_title = get_attr_nocase(tab_page, 'Text')
                    tab_url = get_attr_nocase(tab_page, 'Url')
                    tab_children = []
                    for child in tab_page:
                        child_elem = process_node(child)
                        if child_elem:
                             tab_children.append(child_elem)
                    
                    tabs.append({
                        'text': tab_title,
                        'url': tab_url,
                        'children': tab_children
                    })
                
                if tabs:
                    elem['tabs'] = tabs

                if tabs:
                    elem['tabs'] = tabs

            if tag == 'Div':
                contents = find_child_nocase(node, 'contents')
                target_node = contents if contents is not None else node
                div_children = []
                for child in target_node:
                    child_elem = process_node(child)
                    if child_elem:
                        div_children.append(child_elem)
                elem['children'] = div_children
                
            if tag == 'Shape':
                contents = find_child_nocase(node, 'contents')
                target_node = contents if contents is not None else node
                shape_children = []
                for child in target_node:
                    child_elem = process_node(child)
                    if child_elem:
                        shape_children.append(child_elem)
                elem['children'] = shape_children

            if tag == 'PopDiv':
                contents = find_child_nocase(node, 'contents')
                target_node = contents if contents is not None else node
                pop_children = []
                for child in target_node:
                    child_elem = process_node(child)
                    if child_elem:
                        pop_children.append(child_elem)
                elem['children'] = pop_children
            
            return elem

        for child in form:
            processed = process_node(child)
            if processed:
                elements.append(processed)
        return elements

    class LayoutAnalyzer:
        def __init__(self, elements, is_popup=False):
            self.elements = elements
            self.BASE_WIDTH = 1040 
            self.is_popup = is_popup

        def analyze(self):
            # Filter visible items (Allow small negative coords for alignment)
            visible_items = [
                e for e in self.elements 
                if e['tag'] not in ['Datasets', 'Shape', 'PopDiv']
                and e['left'] >= -100 
                and e['top'] >= -100
            ]
            
            if self.is_popup:
                header_items = []
                main_items = visible_items
            else:
                header_items = [e for e in visible_items if e['top'] < 40 and e.get('height', 0) < 60 and e.get('tag') != 'Grid']
                main_items = [e for e in visible_items if e not in header_items]
            
            
            grids = [e for e in main_items if e['tag'] == 'Grid']
            large_grid = None
            if grids:
                large_grid = max(grids, key=lambda x: x['width'] * x['height'])
            
            layout_structure = []
            
            if large_grid and large_grid['width'] > 300 and large_grid['left'] > 400:
                split_x = large_grid['left'] - 10
                
                left_items = [e for e in main_items if e['left'] + e.get('width', 0) <= split_x + 50]
                right_items = [e for e in main_items if e not in left_items]
                
                left_rows = self._cluster_rows(left_items, split_x)
                left_panel = {
                    'tag': 'Paper',
                    'size': 8, 
                    'layout': left_rows,
                    'title': 'Detailed Info'
                }
                
                right_rows = self._cluster_rows(right_items, self.BASE_WIDTH - split_x)
                right_panel = {
                    'tag': 'Paper',
                     'size': 4,
                    'layout': right_rows,
                    'title': 'List'
                }
                
                layout_structure.append([left_panel, right_panel])
            else:
                rows = self._cluster_rows(main_items, self.BASE_WIDTH)
                paper = {
                    'tag': 'Paper',
                    'size': 12,
                    'layout': rows,
                    'title': 'Main Config'
                }
                layout_structure.append([paper])
                
            return {
                'header': header_items,
                'body': layout_structure
            }

        def _cluster_rows(self, items, container_width):
            if not items: return []
            items.sort(key=lambda x: x['top'])
            
            rows = []
            current_row = []
            if items:
                current_top_ref = items[0]['top']
            
            ROW_TOLERANCE = 5 
            
            for item in items:
                if abs(item['top'] - current_top_ref) <= ROW_TOLERANCE:
                    current_row.append(item)
                else:
                    rows.append(current_row)
                    current_row = [item]
                    current_top_ref = item['top']
            if current_row: rows.append(current_row)
            
            final_rows = []
            for row in rows:
                final_rows.append(self._process_row(row, container_width))
            return final_rows

        def _process_row(self, row_items, container_width):
            row_items.sort(key=lambda x: x['left'])
            
            grouped_items = []
            skip_indices = set()
            
            for i in range(len(row_items)):
                if i in skip_indices: continue
                item = row_items[i]
                
                if i < len(row_items) - 1:
                    next_item = row_items[i+1]
                    if item['tag'] == 'Static' and next_item['tag'] in ['Edit', 'MaskEdit', 'Combo', 'Calendar', 'TextArea', 'Radio']:
                        # Tighter grouping tolerance
                        if next_item['left'] - (item['left'] + item['width']) < 20: 
                            grp = {
                                'tag': 'ControlGroup',
                                'label': item,
                                'field': next_item,
                                'width': (next_item['left'] + next_item['width']) - item['left'],
                                'height': max(item.get('height', 20), next_item.get('height', 20)),
                                'left': item['left'],
                                'top': item['top'],
                                'size': 0
                            }
                            grouped_items.append(grp)
                            skip_indices.add(i+1)
                            continue

                grouped_items.append(item)
            
            for item in grouped_items:
                w = item.get('width', 100)
                # Calculate size based on ratio 12 * (width / container_width)
                # Ensure minimum 1
                ratio = (w / container_width) * 12
                # Round to nearest integer? or floor?
                # Given we want to fit multiple items, maybe floor but ensure min 1
                size = max(1, round(ratio))
                item['size'] = size
                
            return grouped_items

    def _generate_layout(self, elements, is_popup=False):
        analyzer = self.LayoutAnalyzer(elements, is_popup)
        return analyzer.analyze()

    def _get_style_props(self, style_name):
        mapping = {
            'sty_Label': "{ backgroundColor: '#f0f0f0', color: '#333', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }",
            'sty_LabelGruopBox': "{ fontWeight: 'bold', mb: 1 }",
            'sty_Button': "{ height: 30 }",
            'sty_Grid': "{ border: '1px solid #e0e0e0' }",
            'sty_Form': "{ p: 2, backgroundColor: '#ffffff' }",
            'sty_Text': "{ fontWeight: 'bold', fontSize: '1.2rem', color: '#1976d2' }"
        }
        return mapping.get(style_name, "{}")

    def _get_icon_from_id(self, image_id):
        if not image_id: return None
        mid = image_id.lower()
        if 'search' in mid or 'inq' in mid or 'sch' in mid: return "<Search />"
        if 'del' in mid: return "<Delete />"
        if 'save' in mid or 'sav' in mid: return "<Save />"
        if 'excel' in mid or 'xls' in mid: return "<Description />"
        if 'copy' in mid: return "<ContentCopy />"
        if 'add' in mid or 'new' in mid: return "<Add />"
        if 'print' in mid: return "<Print />"
        if 'close' in mid: return "<Close />"
        if 'reset' in mid: return "<Refresh />"
        return None

    def _generate_view(self, name, target_dir, datasets, ui_elements, ds_name_map, xml_source_path=None):
        used_mui = {'Box', 'Grid', 'Button', 'Stack', 'Typography', 'Paper', 'TextField', 'FormControl', 'Select', 'MenuItem', 'IconButton', 'Tooltip', 'Dialog', 'DialogTitle', 'DialogContent', 'DialogActions', 'Tabs', 'Tab', 'Radio', 'RadioGroup', 'FormControlLabel', 'Checkbox'}
        used_icons = {'Search', 'Delete', 'Save', 'ContentCopy', 'Description', 'Add', 'Print', 'Close', 'Refresh', 'Check', 'Visibility', 'ZoomIn', 'Help', 'Sort', 'FilterList', 'TouchApp'} 
        
        def scan(els):
            for e in els:

                if 'children' in e: scan(e['children'])
        scan(ui_elements)
        
        # Ensure Unique IDs (Fix for nested tabs with same ID)
        def _ensure_unique_ids(elements, seen_ids=None):
            if seen_ids is None: seen_ids = set()
            
            for elem in elements:
                if 'id' in elem:
                    original_id = elem['id']
                    if original_id in seen_ids:
                        # Conflict detected
                        counter = 2
                        new_id = f"{original_id}_{counter}"
                        while new_id in seen_ids:
                            counter += 1
                            new_id = f"{original_id}_{counter}"
                        elem['id'] = new_id
                        # Also update 'text' if it was just the ID? No, keep text.
                    seen_ids.add(elem['id'])
                
                if 'children' in elem:
                    _ensure_unique_ids(elem['children'], seen_ids)
                
                if 'tabs' in elem:
                    for tab in elem['tabs']:
                        # Tab pages might not have IDs but let's check
                        if 'id' in tab:
                            original_id = tab['id']
                            if original_id in seen_ids:
                                counter = 2
                                new_id = f"{original_id}_{counter}"
                                while new_id in seen_ids:
                                     counter += 1
                                     new_id = f"{original_id}_{counter}"
                                tab['id'] = new_id
                            seen_ids.add(tab['id'])
                        
                        if 'children' in tab:
                             _ensure_unique_ids(tab.get('children', []), seen_ids)

        _ensure_unique_ids(ui_elements)

        # Build Popup Trigger Map
        # Map feature_name (from content inside PopDiv) -> pop_id
        popup_triggers = {}
        for elem in ui_elements:
            if elem['tag'] == 'PopDiv':
                pop_id = elem.get('id')
                def find_features(children):
                    for child in children:
                        cid = child.get('id', '')
                        if cid.lower().startswith('gd'): # Grid
                            feature = cid[2:].lower()
                            popup_triggers[feature] = pop_id
                        elif cid.lower().startswith('grd'):
                             feature = cid[3:].lower()
                             popup_triggers[feature] = pop_id
                        if 'children' in child:
                            find_features(child['children'])
                find_features(elem.get('children', []))
        
        lines = []
        lines.append("// @ts-nocheck")
        lines.append("import React, { useState } from 'react';")
        lines.append(f"import {{ {', '.join(sorted(list(used_mui)))} }} from '@mui/material';")
        lines.append("import { DatePicker } from '@mui/x-date-pickers/DatePicker';")
        lines.append(f"import {{ {', '.join(sorted(list(used_icons)))} }} from '@mui/icons-material';")
        
        # Calculate path to components directory
        # Try to find 'components' dir by walking up
        comp_path = "../components" # Default
        try:
            current_path = target_dir.resolve()
            # Stop if we hit root or find 'components' sibling
            levels_up = 0
            found = False
            # Check up to 5 levels
            temp_path = current_path
            for i in range(5):
                 # Check if 'components' exists in this directory
                 if (temp_path / "components").exists():
                      comp_path = "../" * levels_up + "components"
                      found = True
                      break
                 # Check if 'src' exists here, then components is likely inside src? 
                 # No, we want to find where 'components' IS.
                 
                 # If we are in `src/modules/appoint`, we go up:
                 # 0: appoint/ components? No.
                 # 1: modules/ components? No.
                 # 2: src/ components? YES.
                 
                 temp_path = temp_path.parent
                 levels_up += 1
                 if temp_path == temp_path.parent: break # Root
            
            if not found:
                 # Fallback to logic based on relative path to output_dir if provided, else just ../components
                 try:
                    rel_path = target_dir.relative_to(self.output_dir)
                    depth = len(rel_path.parts)
                    # If direct match, depth 0 -> ../components.
                    # This was the bug. If output_dir=appoint, depth=0. we want ../../components
                    # But we don't know where components is if we don't look for it.
                    # Let's assume standard structure: src/modules/X -> ../../components
                    if 'modules' in target_dir.parts:
                        # Find index of 'modules'
                        idx = target_dir.parts.index('modules')
                        # levels from end to modules
                        # parts: .../src/modules/appoint
                        # len = N. index of modules = N-2. 
                        # we need to go up (N - (N-2)) = 2 levels.
                        # so depth = len(parts) - index_of_modules
                        # wait if index is N-2, then parts[N-2] is modules.
                        # parts[N-1] is appoint.
                        # so we are at appoint.
                        # path to src (modules parent) is ../..
                        # usually components is in src.
                        
                        dist = len(target_dir.parts) - idx
                        comp_path = "../" * dist + "components"
                    else:
                         comp_path = "../" * (depth + 1) + "components"
                 except ValueError:
                    comp_path = "../components"

        except Exception as e:
            print(f"Error calculating component path: {e}")
            comp_path = "../components"
        
        lines.append(f"import DataGridWrapper from '{comp_path}/DataGridWrapper';")
        lines.append(f"import PageContainer from '{comp_path}/PageContainer';")
        lines.append(f"import {{ use{name} }} from './use{name}';")
        lines.append(f"import * as {name}Data from './{name}Data';")
        
        # Linked Component Imports
        component_imports = set()
        def extract_comp_name(url):
            if not url: return None, None
            path = "./"
            fname = url
            if '::' in url:
                parts = url.split('::')
                prefix = parts[0]
                fname = parts[1]
                path = f"../{prefix}/" 
            
            if fname.lower().endswith('.xml'):
                fname = fname[:-4]
            
            if not fname: return None, None
            
            # Check file existence if source path provided
            if xml_source_path:
                 try:
                     # Construct relative path to the target XML
                     # path is like "./" or "../COM/"
                     # target = xml_source_path.parent / path / (fname + ".xml")
                     # We need to being careful with Path concatenation
                     
                     target_xml = xml_source_path.parent.joinpath(path + fname + ".xml").resolve()
                     if not target_xml.exists():
                         print(f"Warning: Linked component source found: {target_xml}")
                         # Check casing issues? (We already handled some, but let's be strict for now to avoid error)
                         # Actually if it doesn't exist, we should NOT import it.
                         return None, None
                 except Exception as e:
                     print(f"Check failed for {url}: {e}")

            cname = fname[0].upper() + fname[1:]
            return cname, path + cname

        def scan_urls(els):
            for e in els:
                if e.get('url'):
                    cname, cpath = extract_comp_name(e['url'])
                    if cname: component_imports.add((cname, cpath))
                
                if 'tabs' in e:
                    for t in e['tabs']:
                        if t.get('url'):
                            cname, cpath = extract_comp_name(t.get('url'))
                            if cname: component_imports.add((cname, cpath))
                        if 'children' in t: scan_urls(t['children'])
                
                if 'children' in e:
                    scan_urls(e['children'])
        
        scan_urls(ui_elements)
        
        for cname, cpath in sorted(list(component_imports)):
            lines.append(f"import {{ {cname} }} from '{cpath}';")

        lines.append("")
        
        lines.append(f"export const {name} = () => {{")
        lines.append(f"    const hook = use{name}();")
        
        all_grids = []
        def collect_grids(els):
            for e in els:
                if e['tag'] == 'Grid':
                    all_grids.append(e)
                if 'children' in e:
                    collect_grids(e['children'])
                if 'tabs' in e:
                    for page in e['tabs']:
                        collect_grids(page.get('children', []))
        collect_grids(ui_elements)
        
        # Collect Tabs for State Generation
        all_tabs = []
        def collect_tabs(els):
            for e in els:
                if e['tag'] == 'Tab':
                    all_tabs.append(e)
                if 'children' in e:
                    collect_tabs(e['children'])
                if 'tabs' in e: # Tabs have 'tabs' list of pages
                    for page in e['tabs']:
                        collect_tabs(page.get('children', []))
        collect_tabs(ui_elements)
        
        seen_tab_ids = set()
        for t in all_tabs:
            tid = t.get('id') or 'tab'
            if tid in seen_tab_ids: continue
            seen_tab_ids.add(tid)
            lines.append(f"    const [tabValue_{tid}, setTabValue_{tid}] = useState(0);")
        
        # Checkbox State Generation (Unbound)
        processed_chk_ids = set()
        def scan_checkboxes(els):
            for e in els:
                if e['tag'] == 'Checkbox' and not e.get('BindDataset'):
                     unique_chk_id = e.get('id')
                     if unique_chk_id and unique_chk_id not in processed_chk_ids:
                         initial_val = e.get('Value', e.get('FalseValue', '0'))
                         processed_chk_ids.add(unique_chk_id)
                         lines.append(f"    const [chk_{unique_chk_id}, setChk_{unique_chk_id}] = useState('{initial_val}');")
                
                if 'children' in e: scan_checkboxes(e['children'])
                if 'tabs' in e:
                    for page in e['tabs']:
                        scan_checkboxes(page.get('children', []))
        scan_checkboxes(ui_elements)
        
        used_col_vars = set()
        for g in all_grids:
            # Generate unique column variable name
            base_id = g.get('id') or 'grid'
            col_var = f"columns_{base_id}"
            counter = 1
            while col_var in used_col_vars:
                col_var = f"columns_{base_id}_{counter}"
                counter += 1
            used_col_vars.add(col_var)
            g['_col_var'] = col_var
            
            lines.append(f"    const {col_var} = [")
            for col in g.get('grid_columns', []):
                safe_header = self._sanitize_js_string(col['headerName'])
                if col.get('type') == 'index':
                     lines.append(f"        {{ field: 'id', headerName: '{safe_header}', width: {col['width']}, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 }},")
                else:
                     lines.append(f"        {{ field: '{col['field']}', headerName: '{safe_header}', width: {col['width']} }},")
            lines.append("    ];")
        
        lines.append("    return (")
        lines.append("        <PageContainer>")
        
        layout_data = self._generate_layout(ui_elements)
        
        def render_header(items):
            title = "기본정보"
            for i in items:
                 if i['tag'] == 'Static' and '■' in i.get('text', ''):
                     title = i['text'].replace('■', '').strip()
            
            btns = [i for i in items if i['tag'] == 'Button']
            btn_jsx = ""
            
            icon_map = {
                '조회': 'Search', 'search': 'Search', 'sch': 'Search', 'inq': 'Search',
                '입력': 'Add', 'input': 'Add', '추가': 'Add', 'add': 'Add', 'new': 'Add', 'insert': 'Add',
                '저장': 'Save', 'save': 'Save', 'sav': 'Save',
                '삭제': 'Delete', 'delete': 'Delete', 'del': 'Delete', 'remove': 'Delete',
                '출력': 'Print', 'print': 'Print', 'prt': 'Print', 'screen': 'Print',
                '엑셀': 'Save', 'excel': 'Save', 'xls': 'Save',
                '닫기': 'Close', 'close': 'Close', 'end': 'Close', 'exit': 'Close',
                '취소': 'Refresh', 'cancel': 'Refresh', 'init': 'Refresh', 'reset': 'Refresh',
                'copy': 'ContentCopy',
                'ok': 'Check',
                'view': 'Visibility',
                'detail': 'ZoomIn',
                'help': 'Help',
                'sort': 'Sort',
                'filter': 'FilterList'
            }

            for btn in btns:
                txt = self._escape_jsx_text(btn.get('text', 'Button'))
                img_id = btn.get('image_id', '').lower()
                
                # Determine Icon
                mapped_icon = None
                # Check text first
                for k, v in icon_map.items():
                    if k in txt:
                        mapped_icon = v
                        break
                # Check image id if no text match or no text
                if not mapped_icon and img_id:
                     for k, v in icon_map.items():
                         if k in img_id:
                             mapped_icon = v
                             break
                
                icon_prop = f"startIcon={{<{mapped_icon} />}}" if mapped_icon else ""
                
                click = btn.get('onclick')
                evt = f"onClick={{hook.{click}}}" if click else ""
                
                # If no text but icon, IconButton?
                if not txt and mapped_icon:
                     # Usually header buttons have text or are consistent. 
                     # For safety in header, keep Button but maybe empty text?
                     # Legacy headers usually have text.
                     pass

                btn_jsx += f"<Button variant=\"contained\" {icon_prop} {evt}>{txt}</Button>\n"
            
            return f"""
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={{2}}>
                <Typography variant="h5">{title}</Typography>
                <Stack direction="row" spacing={{1}}>
                    {btn_jsx}
                </Stack>
            </Stack>"""
            
        lines.append(render_header(layout_data['header']))
        
        def _wrap_visibility(jsx, item):
            div_id = item.get('id')
            
            # 1. Dynamic Visibility (via Hook)
            # Apply to any element with an ID (except PopDiv which has its own dialog logic)
            if div_id and item.get('tag') != 'PopDiv':
                # Use display: none instead of conditional rendering to preserve state
                # undefined allows standard display (block/flex) to apply when visible
                return f"<Box sx={{{{ display: hook.isVisible_{div_id} ? undefined : 'none' }}}}>{jsx}</Box>"
            
            # 2. Static Parsing for items without ID but with visible="false"
            if str(item.get('visible', 'true')).lower() == 'false':
                 return f"<Box sx={{{{ display: 'none' }}}}>{jsx}</Box>"
            
            return jsx

        def render_item(item):
            tag = item.get('tag')
            size = item.get('size', 12)
            w = item.get('width', '100%')
            h = item.get('height', 'auto')
            
            # Normalize dimensions to px if integer
            width_style = f"{w}px" if isinstance(w, int) else w
            height_style = f"{h}px" if isinstance(h, int) else h
            
            content_sx = f"width: '{width_style}', height: '{height_style}'"
            
            # Remove old visibility handling local variables
            # Start tag-based logic
            if tag == 'Div':
                 div_content = ""
                 if item.get('url'):
                      cname, _ = extract_comp_name(item['url'])
                      if cname: div_content = f"<{cname} />"
                 
                 if not div_content:
                     div_children = item.get('children', [])
                     div_layout = self._generate_layout(div_children, is_popup=False)
                     if div_layout['body']:
                         for row_panels in div_layout['body']:
                             for panel in row_panels:
                                 if 'layout' in panel:
                                     div_content += render_rows(panel['layout'])
                 
                 label = item.get('text', '')
                 title_jsx = f'<Typography variant="subtitle2" sx={{{{ mb: 1, fontWeight: "bold" }}}}>{label}</Typography>' if label else ''
                 
                 content_jsx = f"""
                 <Paper sx={{{{ p: 2, {content_sx}, overflow: 'auto' }}}}>
                     {title_jsx}
                     <Grid container spacing={{1}}>
                         {div_content}
                     </Grid>
                 </Paper>"""
            
            elif tag == 'Shape':
                 shape_content = ""
                 shape_children = item.get('children', [])
                 shape_layout = self._generate_layout(shape_children, is_popup=False)
                 if shape_layout['body']:
                     for row_panels in shape_layout['body']:
                         for panel in row_panels:
                             if 'layout' in panel:
                                 shape_content += render_rows(panel['layout'])
                 
                 content_jsx = f"<Box sx={{{{ border: '1px solid #ccc', p: 1, {content_sx} }}}}>{shape_content}</Box>"

            elif tag == 'Grid':
                ds = item.get('bind_dataset') or 'ds_grid'
                col_var = item.get('_col_var') or f"columns_{ds}"
                content_jsx = f"""
                <Paper sx={{{{ {content_sx}, width: '100%' }}}}>
                    <DataGridWrapper rows={{hook.{ds}}} columns={{{col_var}}} />
                </Paper>"""
            


            if tag == 'ControlGroup':
                 # ControlGroup is a virtual container for Label + Input
                 width = item.get('width', 200)
                 height = item.get('height', 20)
                 label = item['label']
                 field = item['field']
                 
                 # Recalculate margins for internal items if needed, or just use simple spacing
                 # For simplicity, we assume the Label and Field are tight.
                 # But we need to respond to the group's 'ml' if set on the group item.
                 
                 group_sx = f"width: '{width}px', height: '{height}px', display: 'flex', alignItems: 'center'"
                 if 'ml' in item:
                     group_sx += f", ml: '{item['ml']}px'"
                 
                 # Render Label
                 lbl_txt = self._escape_jsx_text(label.get('text', ''))
                 lbl_sx = f"minWidth: {label.get('width', 80)}, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1"
                 
                 # Render Field
                 # We can recursively call render_item for the field, but we need to handle its specific properties
                 # Temporarily create a fake item to reuse logic or just render explicitly
                 # Let's render explicitly for clarity and to avoid recursion issues with 'ml'
                 
                 field_tag = field['tag']
                 field_sx = f"width: '100%'" 
                 
                 field_jsx = ""
                 if field_tag in ['Edit', 'MaskEdit', 'TextArea']:
                     val_prop = ""
                     if field.get('bind_dataset') and field.get('column'):
                         val_prop = f"value={{hook.{field['bind_dataset']}?.{field['column']} || ''}}"
                     field_jsx = f'<TextField size="small" fullWidth {val_prop} sx={{{{ "& .MuiOutlinedInput-notchedOutline": {{ borderColor: "rgba(0,0,0,0.4)" }}, "& .MuiInputBase-input": {{ padding: "4px 6px" }} }}}} />'
                 elif field_tag == 'Combo':
                     val_prop = ""
                     if field.get('bind_dataset') and field.get('column'):
                        val_prop = f"value={{hook.{field['bind_dataset']}?.{field['column']} || ''}}"
                     
                     inner_ds_raw = field.get('inner_dataset')
                     menu_items = ""
                     if inner_ds_raw:
                         inner_ds = ds_name_map.get(inner_ds_raw.lower(), inner_ds_raw)
                         menu_items = f"{{ ({name}Data.ds_{inner_ds} || []).map(opt => <MenuItem key={{opt.CD}} value={{opt.CD}}>{{opt.DATA}}</MenuItem>) }}"
                     field_jsx = f'<FormControl size="small" fullWidth sx={{{{ "& .MuiOutlinedInput-notchedOutline": {{ borderColor: "rgba(0,0,0,0.4)" }}, "& .MuiSelect-select": {{ padding: "4px 6px !important" }} }}}}><Select {val_prop} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{menu_items}</Select></FormControl>'
                 elif field_tag == 'Calendar':
                     field_jsx = '<DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />'
                 elif field_tag == 'Radio':
                     val_prop = ""
                     if field.get('bind_dataset') and field.get('column'):
                         val_prop = f"value={{hook.{field['bind_dataset']}?.{field['column']} || ''}}"
                     radio_items = ""
                     inner_ds_raw = field.get('inner_dataset')
                     if inner_ds_raw:
                         inner_ds = ds_name_map.get(inner_ds_raw.lower(), inner_ds_raw)
                         radio_items = f"{{ ({name}Data.ds_{inner_ds} || []).map(opt => <FormControlLabel key={{opt.CD}} value={{opt.CD}} control={{<Radio />}} label={{opt.DATA}} sx={{{{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }}}} />) }}"
                     field_jsx = f'<FormControl component="fieldset" sx={{{{ width: "max-content", whiteSpace: "nowrap" }}}}><RadioGroup row sx={{{{ flexWrap: "nowrap" }}}} {val_prop}>{radio_items}</RadioGroup></FormControl>'
                 else:
                     field_jsx = f"<Box>Unknown: {field_tag}</Box>"

                 content_jsx = f"""<Stack direction="row" alignItems="center" spacing={{0.5}} sx={{{{ {group_sx} }}}}>
                    <Typography variant="body2" sx={{{{ {lbl_sx} }}}}>{lbl_txt}</Typography>
                    {field_jsx}
                 </Stack>"""

            elif tag == 'Tab':
                tabs = item.get('tabs', [])
                tab_id = item.get('id', 'tab1')
                state_var = f"tabValue_{tab_id}"
                setter_var = f"setTabValue_{tab_id}"
                
                tabs_header = f'<Box sx={{{{ borderBottom: 1, borderColor: "divider" }}}}><Tabs value={{{state_var}}} onChange={{(e, v) => {setter_var}(v)}} aria-label="{tab_id}">'
                tabs_panels = ""
                
                for idx, tab in enumerate(tabs):
                     tab_text = self._escape_jsx_text(tab.get('text', f'Tab {idx+1}'))
                     tabs_header += f'<Tab label="{tab_text}" />'
                     
                     # Render Panel Content
                     panel_content = ""
                     if tab.get('url'):
                          cname, _ = extract_comp_name(tab['url'])
                          if cname:
                               panel_content = f"<{cname} />"

                     if not panel_content:
                         tab_layout = self._generate_layout(tab.get('children', []), is_popup=True)
                         if tab_layout['body']:
                             for row_panels in tab_layout['body']:
                                 for panel in row_panels:
                                     if 'layout' in panel:
                                        panel_content += render_rows(panel['layout'])
                     
                     tabs_panels += f'<CustomTabPanel value={{{state_var}}} index={{{idx}}}>{panel_content}</CustomTabPanel>'
                
                tabs_header += '</Tabs></Box>'
                content_jsx = f'<Box sx={{{{ {content_sx}, width: "100%", height: "auto", minHeight: "{item.get("height", 200)}px" }}}}>{tabs_header}{tabs_panels}</Box>'


            elif tag == 'Checkbox':
                 # <Checkbox Id="chkUseYn" BindDataset="ds_info" Column="USE_YN" TrueValue="Y" FalseValue="N" />
                 # <Checkbox FalseValue="0" Height="14" Id="chkPerson" ... TrueValue="1" Value="FALSE" />
                 
                 c_id = item.get('id', 'chk')
                 text = self._escape_jsx_text(item.get('text', ''))
                 true_val = item.get('TrueValue', '1')
                 false_val = item.get('FalseValue', '0')
                 
                 bind_ds = item.get('BindDataset')
                 bind_col = item.get('Column')
                 
                 checked_expr = "false"
                 change_handler = ""
                 
                 if bind_ds and bind_col:
                     # Bound to dataset
                     val_expr = f"hook.ds_{bind_ds}?.{bind_col}"
                     checked_expr = f"{val_expr} === '{true_val}'"
                     # onChange for bound: explicit logic not fully supported for writing back to hook yet, 
                     # but we can try basic or leave empty to be read-only visually (but user wants interaction)
                     # For now, we omit onChange or provide a comment if strict binding is needed.
                     # But realistically, Checkbox without onChange is strict readonly.
                     # We'll assume read-only for bound data for now unless we add a setter to the hook.
                     pass 
                 else:
                     # Unbound -> Local state
                     # State var: chk_{id}
                     val_expr = f"chk_{c_id}"
                     checked_expr = f"{val_expr} === '{true_val}'"
                     change_handler = f" onChange={{(e) => setChk_{c_id}(e.target.checked ? '{true_val}' : '{false_val}')}}"
                 
                 content = (
                     f'<FormControlLabel control={{<Checkbox checked={{{checked_expr}}}{change_handler} />}} label="{text}" />'
                 )
                 
                 # Wrap in Box/Stack if needed for positioning? Default flow is fine.
                 return content

            elif tag == 'Button':
                 text = self._escape_jsx_text(item.get('text'))
                 img_id = item.get('image_id', '').lower()
                 
                 # Icon Mapping ({text or img_id} -> Material Icon Name)
                 icon_map = {
                    'search': 'Search', 'sch': 'Search', 'inq': 'Search',
                    'input': 'Add', 'add': 'Add', 'new': 'Add', 'insert': 'Add',
                    'save': 'Save', 'sav': 'Save',
                    'delete': 'Delete', 'del': 'Delete', 'remove': 'Delete',
                    'print': 'Print', 'prt': 'Print', 'screen': 'Print',
                    'excel': 'Save', 'xls': 'Save',
                    'close': 'Close', 'end': 'Close', 'exit': 'Close',
                    'cancel': 'Refresh', 'init': 'Refresh', 'reset': 'Refresh',
                    'copy': 'ContentCopy',
                    'ok': 'Check',
                    'view': 'Visibility',
                    'detail': 'ZoomIn',
                    'help': 'Help',
                    'sort': 'Sort',
                    'filter': 'FilterList'
                 }

                 mapped_icon = None
                 for k, v in icon_map.items():
                    if k in text: mapped_icon = v; break
                 if not mapped_icon and img_id:
                     for k, v in icon_map.items():
                         if k in img_id: mapped_icon = v; break
                 
                 
                 is_green = False
                 lower_text = text.lower()
                 lower_id = item.get('id', '').lower()
                 if any(k in lower_text or k in lower_id for k in ['file', 'excel', 'down', 'up', 'load', '엑셀', '파일', '업로드', '다운로드']):
                     is_green = True
                     
                 color_prop = 'color="success"' if is_green else ''
                 
                 click = item.get('onclick')
                 evt = f"onClick={{hook.{click.split('(')[0]}}}" if click else ""
                 
                 if not text and img_id:
                      if not mapped_icon: mapped_icon = 'TouchApp'
                      content_jsx = f'<Button variant="outlined" {color_prop} {evt} size="small" sx={{{{ minWidth: 26, p: 0.2, {content_sx}, whiteSpace: "nowrap" }}}}><{mapped_icon} fontSize="small" /></Button>'
                 else:
                      icon_prop = f"startIcon={{<{mapped_icon} />}}" if mapped_icon else ""
                      content_jsx = f'<Button variant="contained" {color_prop} {icon_prop} {evt} sx={{{{ {content_sx}, whiteSpace: "nowrap" }}}}>{text}</Button>'
            
            elif tag == 'Static':
                 label = self._escape_jsx_text(item.get('text', ''))
                 content_jsx = f'<Box sx={{{{ display: "flex", alignItems: "center", {content_sx} }}}}><Typography variant="body2">{label}</Typography></Box>'
            
            elif tag == 'Image':
                 img_id = item.get('id', 'img')
                 content_jsx = f'<Box sx={{{{ {content_sx}, border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}}}>Image: {img_id}</Box>'

            elif tag == 'Calendar':
                 content_jsx = f'<DatePicker format="yyyy/MM/dd" slotProps={{{{ textField: {{ size: "small", fullWidth: true }} }}}} sx={{{{ minWidth: "120px", {content_sx}, "& .MuiOutlinedInput-notchedOutline": {{ borderColor: "rgba(0,0,0,0.4)" }}, "& .MuiInputBase-input": {{ padding: "4px 6px" }}, bgcolor: "#fff" }}}} />'
            
            elif tag in ['Edit', 'MaskEdit', 'TextArea']:
                 val_prop = ""
                 bind_ds = item.get('bind_dataset')
                 col = item.get('column')
                 if bind_ds and col:
                     val_prop = f"value={{hook.{bind_ds}?.{col} || ''}}"
                 content_jsx = f'<TextField size="small" fullWidth {val_prop} sx={{{{ {content_sx}, "& .MuiOutlinedInput-notchedOutline": {{ borderColor: "rgba(0,0,0,0.4)" }}, "& .MuiInputBase-input": {{ padding: "4px 6px" }}, bgcolor: "#fff" }}}} />'

            elif tag == 'Combo':
                 val_prop = ""
                 bind_ds = item.get('bind_dataset')
                 col = item.get('column')
                 if bind_ds and col:
                     val_prop = f"value={{hook.{bind_ds}?.{col} || ''}}"
                 
                 inner_ds_raw = item.get('inner_dataset')
                 menu_items = ""
                 if inner_ds_raw:
                      inner_ds = ds_name_map.get(inner_ds_raw.lower(), inner_ds_raw)
                      menu_items = f"{{ ({name}Data.ds_{inner_ds} || []).map(opt => <MenuItem key={{opt.CD}} value={{opt.CD}}>{{opt.DATA}}</MenuItem>) }}"
                 content_jsx = f'<FormControl size="small" fullWidth sx={{{{ {content_sx}, "& .MuiOutlinedInput-notchedOutline": {{ borderColor: "rgba(0,0,0,0.4)" }}, "& .MuiSelect-select": {{ padding: "4px 6px !important" }}, bgcolor: "#fff" }}}}><Select {val_prop} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{menu_items}</Select></FormControl>'

            elif tag == 'Radio':
                 val_prop = ""
                 bind_ds = item.get('bind_dataset')
                 col = item.get('column')
                 if bind_ds and col:
                     val_prop = f"value={{hook.{bind_ds}?.{col} || ''}}"

                 radio_items = ""
                 inner_ds_raw = item.get('inner_dataset')
                 if inner_ds_raw:
                     inner_ds = ds_name_map.get(inner_ds_raw.lower(), inner_ds_raw)
                     radio_items = f"{{ ({name}Data.ds_{inner_ds} || []).map(opt => <FormControlLabel key={{opt.CD}} value={{opt.CD}} control={{<Radio />}} label={{opt.DATA}} sx={{{{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }}}} />) }}"
                 content_jsx = f'<FormControl component="fieldset" sx={{{{ {content_sx}, width: "max-content", whiteSpace: "nowrap", pr: 2 }}}}><RadioGroup row sx={{{{ flexWrap: "nowrap" }}}} {val_prop}>{radio_items}</RadioGroup></FormControl>'

            elif tag == 'Div':
                 div_content = ""
                 if item.get('url'):
                      cname, _ = extract_comp_name(item['url'])
                      if cname: div_content = f"<{cname} />"
                 
                 if not div_content:
                     div_children = item.get('children', [])
                     div_layout = self._generate_layout(div_children, is_popup=False)
                     if div_layout['body']:
                         for row_panels in div_layout['body']:
                             for panel in row_panels:
                                 if 'layout' in panel:
                                     div_content += render_rows(panel['layout'])
                 
                 label = self._escape_jsx_text(item.get('text', ''))
                 title_jsx = f'<Typography variant="subtitle2" sx={{{{ mb: 1, fontWeight: "bold" }}}}>{label}</Typography>' if label else ''
                 
                 # Force fluid width for container Divs
                 div_sx = content_sx.replace('width:', 'maxWidth:').replace('height:', 'minHeight:') # Simple heuristic? No, explicit override better.
                 # Better: Inject specific overrides
                 # For Div, if we want fluid width:
                 # content_sx usually has "width: '500px'". 
                 # We want to keep MIN width maybe? Or just width: '100%'.
                 
                 content_jsx = f"""<Paper sx={{{{ p: 2, {content_sx}, width: '100%', height: 'auto', minHeight: '{item.get('height', 100)}px', overflow: 'auto' }}}}>{title_jsx}<Stack direction="column" spacing={{0}}>{div_content}</Stack></Paper>"""

            elif tag == 'Shape':
                 shape_content = ""
                 shape_children = item.get('children', [])
                 shape_layout = self._generate_layout(shape_children, is_popup=False)
                 if shape_layout['body']:
                     for row_panels in shape_layout['body']:
                         for panel in row_panels:
                             if 'layout' in panel:
                                 shape_content += render_rows(panel['layout'])
                 content_jsx = f"<Box sx={{{{ border: '1px solid #ccc', p: 1, {content_sx}, width: '100%', minHeight: '{item.get('height', 50)}px' }}}}>{shape_content}</Box>"

            elif tag == 'Grid':
                ds = item.get('bind_dataset') or 'ds_grid'
                col_var = item.get('_col_var') or f"columns_{ds}"
                content_jsx = f"""<Paper sx={{{{ {content_sx}, width: '100%', height: 'auto', minHeight: '{item.get('height', 200)}px' }}}}><DataGridWrapper rows={{hook.{ds}}} columns={{{col_var}}} /></Paper>"""

            elif tag in ['FileDialog', 'HttpFile', 'File']:
                 label = item.get('text') or item.get('id') or tag
                 # Use Description icon for files
                 content_jsx = f'<Button variant="contained" color="success" startIcon={{<Description />}} sx={{{{ {content_sx}, whiteSpace: "nowrap" }}}}>{label}</Button>'

            else:
                 content_jsx = f"<Box sx={{{{ {content_sx}, border: '1px dashed grey' }}}}>Unknown: {tag}</Box>"

            # WRAP VISIBILITY
            final_jsx = _wrap_visibility(content_jsx, item)
            
            # RETURN DIRECT COMPONENT (No Grid Wrapper)
            return final_jsx

        def render_rows(rows):
            out = ""
            prev_row_bottom = 0
            
            for row in rows:
                if not row: continue
                
                item_tops = [x['top'] for x in row]
                row_top = min(item_tops) if item_tops else 0
                mt = max(0, row_top - prev_row_bottom) + 2 # Add breathing room
                
                row_jsx = ""
                
                # Sort items by 'left'
                sorted_row = sorted(row, key=lambda x: x['left'])
                
                # Cluster Overlaps
                # Legacy apps often place multiple controls at the exact same position (or slightly overlapping)
                # to implement "Toggle Visibility" logic (only one shown at a time).
                # In a flow layout, these must be grouped into a single container so they don't render side-by-side.
                clustered_groups = []
                if sorted_row:
                    current_group = [sorted_row[0]]
                    group_right = sorted_row[0]['left'] + sorted_row[0].get('width', 0)
                    
                    for item in sorted_row[1:]:
                        # Check strictly for collision or significant overlap
                        # If item starts BEFORE the previous group ends, it's an overlap/collision.
                        if item['left'] < group_right - 5: # Tolerance of 5px
                             current_group.append(item)
                             group_right = max(group_right, item['left'] + item.get('width', 0))
                        else:
                             clustered_groups.append(current_group)
                             current_group = [item]
                             group_right = item['left'] + item.get('width', 0)
                    clustered_groups.append(current_group)

                
                prev_group_right = 0
                row_bottom_max = 0
                
                for group in clustered_groups:
                    # Height Adjustment (+2px for all items) & ML Calculation
                    group_left = min(item['left'] for item in group)
                    group_width = max((item['left'] + item.get('width', 100)) for item in group) - group_left
                    
                    # Margin Left for the GROUP
                    ml = max(0, group_left - prev_group_right)
                    
                    # Render Items in Group
                    group_content = ""
                    for item in group:
                         # Height Adjustment
                         # Legacy XML heights often exclude modern UI overhead (headers/footers).
                         # We add a buffer to prevent visual overflow/overlap.
                         current_h = int(item.get('height', 20))
                         if item.get('tag') in ['Grid', 'Tab', 'Div', 'Shape']: 
                             current_h += 42 # Add ~40px buffer for headers/padding
                         else:
                             current_h += 2 # Standard buffer
                         
                         item['height'] = current_h
                         
                         # Internal ML is 0 because they are stacked/inside the group box
                         item['ml'] = 0 
                         group_content += render_item(item)
                         row_bottom_max = max(row_bottom_max, item['top'] + item['height'])

                    # If group has multiple items, wrap in a Box (Z-Stack logical equivalent)
                    # Since we use display:none for visibility, simple block flow works.
                    if len(group) > 1:
                        # Use a Box that fits the max dimensions
                        # display: grid allows items to overlap if we used grid-area: 1/1, 
                        # BUT here we rely on "Only one is visible".
                        # So a simple Box works. The visible one will take flow space.
                        # We apply 'ml' to the container.
                         row_jsx += f'<Box sx={{{{ ml: "{ml}px", minWidth: "{group_width}px" }}}}>{group_content}</Box>'
                    else:
                         # Single Item - Inject ML directly
                         group[0]['ml'] = ml
                         # Re-render to capture the injected ml (a bit inefficient but safe)
                         row_jsx += render_item(group[0])
                    
                    prev_group_right = group_left + group_width

                out += f'<Stack direction="row" alignItems="center" spacing={{0}} sx={{{{ mt: "{mt}px", py: 0.5, width: "100%" }}}}>{row_jsx}</Stack>\n'
                
                prev_row_bottom = row_bottom_max
            return out
            
        def render_popups(elements):
            out = ""
            for item in elements:
                if item['tag'] == 'PopDiv':
                    pop_id = item.get('id', 'pop')
                    pop_children = item.get('children', [])
                    
                    # Analyze layout for popup children
                    pop_layout = self._generate_layout(pop_children, is_popup=True)
                    pop_content = ""
                    if pop_layout['body']:
                         for row_panels in pop_layout['body']:
                             for panel in row_panels:
                                 if 'layout' in panel:
                                     pop_content += render_rows(panel['layout'])
                    
                    out += f"""
                    <Dialog open={{hook.is{pop_id}Open}} onClose={{hook.close{pop_id}}} maxWidth="md" fullWidth>
                        <DialogTitle>{pop_id}</DialogTitle>
                        <DialogContent>
                            {pop_content}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={{hook.close{pop_id}}}>Close</Button>
                        </DialogActions>
                    </Dialog>"""
            return out
        
        lines.append("<Grid container spacing={2}>")
        for row_panels in layout_data['body']:
            for panel in row_panels:
                size = panel['size']
                title = panel.get('title', '')
                content = ""
                if 'layout' in panel:
                    content = render_rows(panel['layout'])
                
                lines.append(f"""
                <Grid item xs={{12}} md={{{size}}}>
                    <Paper sx={{{{ p: 2, height: '100%' }}}}>
                        <Typography variant="subtitle2" sx={{{{ mb: 2, fontWeight: 'bold' }}}}>{title}</Typography>
                        {content}
                    </Paper>
                </Grid>""")
        lines.append("</Grid>")
            
        lines.append(render_popups(ui_elements))
        
        lines.append("        </PageContainer>")
        lines.append("    );")
        lines.append("};")
        lines.append(f"export default {name};")

        lines.append("""
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}""")
        
        with open(target_dir / f"{name}.tsx", 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))

    def _generate_hook(self, name, target_dir, datasets, ui_elements):
        hook_name = f"use{name}"
        lines = []
        lines.append("// @ts-nocheck")
        lines.append("import { useState, useEffect } from 'react';")
        ds_interfaces = [f"I{ds['name']}" for ds in datasets]
        lines.append(f"import type {{ {', '.join(ds_interfaces)} }} from './{name}Data';")
        lines.append("")
        
        lines.append(f"export const {hook_name} = () => {{")
        
        return_vars = ["isLoading"]
        for ds in datasets:
            ds_name = ds['name']
            lines.append(f"    const [{ds_name}, set{ds_name}] = useState<I{ds_name}[]>([]);")
            return_vars.append(ds_name)
        
        lines.append("    const [isLoading, setIsLoading] = useState(false);")
        
        # Recursive Collector
        all_pop_divs = []
        all_with_id = []
        all_tabs = []
        
        def collect_elements(els):
            for e in els:
                tag = e['tag']
                if tag == 'PopDiv': all_pop_divs.append(e)
                if 'id' in e: all_with_id.append(e)
                if 'tabs' in e: all_tabs.append(e) # Tab element has 'tabs' property
                
                # Recurse
                if 'children' in e: collect_elements(e['children'])
                if 'tabs' in e: # For Tabs, iterate pages
                    for page in e['tabs']:
                        collect_elements(page.get('children', []))
        
        collect_elements(ui_elements)

        # Geometric Parent-Child Map
        def build_visibility_map(elements):
            containers = [e for e in elements if e.get('tag') in ['Div', 'Shape', 'Group']]
            def get_area(e): return int(e.get('width', 0)) * int(e.get('height', 0))
            containers.sort(key=get_area) # Smallest first? No, we need checking. 
            # Logic: If item is in Small and Small is in Large.
            # We want parent of Item = Small.
            # So iterate containers Small -> Large ?? or Large -> Small?
            # If we check Small first: Item assigned to Small.
            # If we check Large later: Item assigned to Large? We should Prevent overwrite.
            # So Smallest Container first. If assigned, stop.
            
            parent_map = {}
            for container in containers:
                c_left = int(container.get('left', 0))
                c_top = int(container.get('top', 0))
                c_width = int(container.get('width', 0))
                c_height = int(container.get('height', 0))
                c_right = c_left + c_width
                c_bottom = c_top + c_height
                if c_width == 0 or c_height == 0: continue
                
                for item in elements:
                    if item == container: continue
                    if item.get('id') in parent_map: continue
                    
                    i_left = int(item.get('left', 0))
                    i_top = int(item.get('top', 0))
                    i_width = int(item.get('width', 0))
                    i_height = int(item.get('height', 0))
                    i_right = i_left + i_width
                    i_bottom = i_top + i_height
                    
                    if i_left >= c_left and i_top >= c_top and i_right <= c_right and i_bottom <= c_bottom:
                        parent_map[item.get('id')] = container.get('id')
            return parent_map

        # Flatten elements for map building
        flat_elements = []
        def gather(els):
            for e in els:
                flat_elements.append(e)
                if 'children' in e: gather(e['children'])
        gather(ui_elements)
        
        vis_parent_map = build_visibility_map(flat_elements)

        # PopDiv states
        for pop in all_pop_divs:
            pop_id = pop.get('id', 'pop')
            lines.append(f"    const [is{pop_id}Open, setIs{pop_id}Open] = useState(false);")
            lines.append(f"    const open{pop_id} = () => setIs{pop_id}Open(true);")
            lines.append(f"    const close{pop_id} = () => setIs{pop_id}Open(false);")
            return_vars.extend([f"is{pop_id}Open", f"open{pop_id}", f"close{pop_id}"])
            
        # Generic Visibility States (Computed)
        seen_ids = set()
        # Sort by dependency? To ensure parent is defined?
        # Actually we can just define all RAW states first.
        # Then define COMPUTED states.
        
        # 1. Raw States
        for item in all_with_id:
            item_id = item.get('id')
            if not item_id or item_id in seen_ids: continue
            if item['tag'] == 'PopDiv': continue
            
            seen_ids.add(item_id)
            is_visible = str(item.get('visible', 'true')).lower() != 'false'
            js_bool = 'true' if is_visible else 'false'
            lines.append(f"    const [rawVisible_{item_id}, setRawVisible_{item_id}] = useState({js_bool});")

        # 2. Computed States (Effective Visibility)
        seen_computed = set()
        for item in all_with_id:
             item_id = item.get('id')
             if not item_id or item['tag'] == 'PopDiv': continue
             if item_id in seen_computed: continue
             seen_computed.add(item_id)
             
             # Chain parents
             chain = []
             curr = item_id
             while curr in vis_parent_map:
                 pid = vis_parent_map[curr]
                 chain.append(pid)
                 curr = pid # Move up
                 if curr in chain: break # Cycle protection
                 
             conditions = [f"rawVisible_{item_id}"]
             for pid in chain:
                 # Only if parent is a managed ID (not PopDiv, and actually exists)
                 if any(e.get('id') == pid for e in all_with_id):
                      conditions.append(f"rawVisible_{pid}")
             
             lines.append(f"    const isVisible_{item_id} = {' && '.join(conditions)};")
             lines.append(f"    const setIsVisible_{item_id} = setRawVisible_{item_id};")
             return_vars.extend([f"isVisible_{item_id}", f"setIsVisible_{item_id}"])

        # Tab states
        seen_tab_ids = set()
        for t in all_tabs:
            tab_id = t.get('id')
            if tab_id in seen_tab_ids: continue
            seen_tab_ids.add(tab_id)
            
            lines.append(f"    const [tabValue_{tab_id}, setTabValue_{tab_id}] = useState(0);")
            return_vars.append(f"tabValue_{tab_id}")
            return_vars.append(f"setTabValue_{tab_id}")

        lines.append("")
        lines.append("    useEffect(() => {")
        lines.append("        setIsLoading(true);")
        lines.append("        setTimeout(() => {")
        for ds in datasets:
             lines.append(f"            set{ds['name']}([]);")
        lines.append("            setIsLoading(false);")
        lines.append("        }, 500);")
        lines.append("    }, []);")

        handlers = set()
        for el in ui_elements:
             if el.get('onclick'):
                 handlers.add(el['onclick'].split('(')[0])
             if 'tabs' in el:
                 for t in el['tabs']:
                     for c in t.get('children', []):
                         if c.get('onclick'): handlers.add(c['onclick'].split('(')[0])
             if el.get('tag') == 'Div' and 'children' in el:
                 for c in el['children']:
                     if c.get('onclick'): handlers.add(c['onclick'].split('(')[0])

        lines.append("")
        for h in sorted(list(handlers)):
            lines.append(f"    const {h} = () => {{")
            lines.append(f"        console.log('{h} clicked');")
            lines.append("    };")
            return_vars.append(h)
            
        lines.append("")
        lines.append("    return {")
        for v in return_vars:
            lines.append(f"        {v},")
        lines.append("    };")
        lines.append("};")
        
        with open(target_dir / f"{hook_name}.ts", 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))

    def _generate_data_file(self, name, target_dir, datasets):
        lines = []
        lines.append("// @ts-nocheck")
        lines.append(f"export const {name}Data = {{}};")
        lines.append("")
        
        for ds in datasets:
             ds_name = ds['name']
             # Generate Interface
             lines.append(f"export interface I{ds_name} {{")
             for col in ds.get('columns', []):
                 col_id = col['id']
                 col_type = col.get('type', 'STRING').upper()
                 ts_type = 'number' if col_type in ['INT', 'DECIMAL', 'FLOAT', 'NUMBER'] else 'string'
                 lines.append(f"    {col_id}?: {ts_type};")
             lines.append("}")
             lines.append("")

             if ds.get('records'):
                 lines.append(f"export const ds_{ds_name}: I{ds_name}[] = [")
                 for rec in ds['records']:
                     # Convert dict to simple JS object string
                     kv = []
                     for k, v in rec.items():
                         safe_v = self._sanitize_js_string(v)
                         kv.append(f"{k}: '{safe_v}'")
                     lines.append(f"    {{ {', '.join(kv)} }},")
                 lines.append("];")
                 lines.append("")
        
        with open(target_dir / f"{name}Data.ts", 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))

    def generate_menu_file(self):
        menu_content = "export const menuData = [\n"
        categories = defaultdict(list)
        for item in self.menu_items:
            path_parts = Path(item['path']).parts
            if len(path_parts) > 1:
                category = path_parts[0]
                categories[category].append(item)
            else:
                categories['Root'].append(item)

        for category, items in categories.items():
            menu_content += f"  {{\n    title: '{category}',\n    children: [\n"
            for item in items:
                menu_content += f"      {{ title: '{item['name']}', path: '/{item['path']}' }},\n"
            menu_content += "    ]\n  },\n"

        menu_content += "];\n"

        with open(self.output_dir / "menuData.ts", 'w', encoding='utf-8') as f:
            f.write(menu_content)

    def _make_pascal_case(self, text):
        text = text.replace('사본 - ', 'Copy_')
        text = text.replace('사본', 'Copy')
        text = text.replace('수정연계 - ', 'ModLink_')
        text = text.replace('수정연계', 'ModLink')
        
        if '특급분리완료' in text:
             text = text.replace('특급분리완료(접수기간,공고기간)', 'SpecialSepComplete')
             text = text.replace('특급분리완료', 'SpecialSepComplete')

        text = re.sub(r'[\(\)\s\-\,\.]+', '_', text)
        text = text.strip('_')
        
        if not text: return "Component"
        
        if not text[0].isalpha():
            text = 'F' + text
            
        parts = text.split('_')
        pascal_parts = [p[0].upper() + p[1:] for p in parts if p]
        
        return "".join(pascal_parts)

    def _escape_jsx_text(self, text):
        if not text: return ""
        return text.replace('"', '&quot;').replace("'", "&apos;").replace("<", "&lt;").replace(">", "&gt;").replace("{", "&#123;").replace("}", "&#125;")

    def _sanitize_js_string(self, text):
        if not text: return ""
        return text.replace('\\', '\\\\').replace("'", "\\'").replace("\n", " ").replace("\r", "")

if __name__ == '__main__':
    converter = XMLToReactConverter('kfsa/src/modules')
    converter.convert_directory('kems')
