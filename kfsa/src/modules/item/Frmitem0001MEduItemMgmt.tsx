// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmitem0001MEduItemMgmt } from './useFrmitem0001MEduItemMgmt';
import * as Frmitem0001MEduItemMgmtData from './Frmitem0001MEduItemMgmtData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmitem0001MEduItemMgmt = () => {
    const hook = useFrmitem0001MEduItemMgmt();
    const [tabValue_tabTab, setTabValue_tabTab] = useState(0);
    const columns_gdEduItemR = [
        { field: 'id_seq', headerName: '순번', width: 80, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1, sortable: false },
        { field: 'EIKINDGUBUN', headerName: '교보재분류코드', width: 120 },
        { field: 'EIKINDGUBUNNM', headerName: '교보재분류명', width: 300 },
        { field: 'EIKINDUSELEVEL', headerName: '사용레벨', width: 80 },
    ];
    const columns_gdEduItemB = [
        { field: 'id_seq', headerName: '순번', width: 80, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1, sortable: false },
        { field: 'EIKINDGUBUNNM', headerName: '교보재분류명', width: 250 },
        { field: 'EIBCD', headerName: '대분류코드', width: 120 },
        { field: 'EIBNM', headerName: '대분류명', width: 300 },
    ];
    const columns_gdEduItemM = [
        { field: 'id_seq', headerName: '순번', width: 80, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1, sortable: false },
        { field: 'EIKINDGUBUNNM', headerName: '교보재분류명', width: 120 },
        { field: 'EIBNM', headerName: '대분류명', width: 120 },
        { field: 'EIMCD', headerName: '중분류코드', width: 120 },
        { field: 'EIMNM', headerName: '중분류명', width: 300 },
    ];
    const columns_gdEduItemS = [
        { field: 'id_seq', headerName: '순번', width: 80, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1, sortable: false },
        { field: 'EIKINDGUBUNNM', headerName: '교보재분류명', width: 120 },
        { field: 'EIBNM', headerName: '대분류명', width: 120 },
        { field: 'EIMNM', headerName: '중분류명', width: 120 },
        { field: 'EISCD', headerName: '소분류코드', width: 80 },
        { field: 'EISNM', headerName: '소분류명', width: 250 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">코드관리</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Input}>추가 저장</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Delete}>삭제 저장</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "45px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab ? undefined : 'none' }}><Box sx={{ width: '791px', height: '538px', width: "100%", height: "auto", minHeight: "538px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab} onChange={(e, v) => setTabValue_tabTab(v)} aria-label="tabTab"><Tab label="교보재분류" /><Tab label="대분류코드" /><Tab label="중분류코드" /><Tab label="소분류코드" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdEduItemR ? undefined : 'none' }}><Paper sx={{ width: '780px', height: '418px', width: '100%', height: 'auto', minHeight: '418px' }}><DataGridWrapper rows={hook.ds_ioEduItemR} columns={columns_gdEduItemR} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교보재분류코드</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduItemRUnit?.EIKINDGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_lbStatusR ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '76px', height: '24px' }}><Typography variant="body2">초기모드</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '347px', height: '22px', display: 'flex', alignItems: 'center', ml: '76px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대분류 제목</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduItemRUnit?.EIBTITLE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '347px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교보재분류명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduItemRUnit?.EIKINDGUBUNNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '347px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>중분류 제목</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduItemRUnit?.EIMTITLE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교보재분류사용레벨</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduItemRUnit?.EIKINDUSELEVEL || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0001MEduItemMgmtData.ds_ds_oEduItemLevel || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '347px', height: '22px', display: 'flex', alignItems: 'center', ml: '156px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소분류 제목</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduItemRUnit?.EISTITLE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdEduItemB ? undefined : 'none' }}><Paper sx={{ width: '780px', height: '418px', width: '100%', height: 'auto', minHeight: '418px' }}><DataGridWrapper rows={hook.ds_ioEduItemB} columns={columns_gdEduItemB} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '348px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교보재분류</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduItemBUnit?.EIKINDGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0001MEduItemMgmtData.ds_ds_oEduItemKindGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_lbStatusB ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '76px', height: '24px' }}><Typography variant="body2">초기모드</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '347px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대분류코드</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduItemBUnit?.EIBCD || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '348px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대분류명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduItemBUnit?.EIBNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={2}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdEduItemM ? undefined : 'none' }}><Paper sx={{ width: '779px', height: '418px', width: '100%', height: 'auto', minHeight: '418px' }}><DataGridWrapper rows={hook.ds_ioEduItemM} columns={columns_gdEduItemM} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '345px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교보재분류</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduItemMUnit?.EIKINDGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0001MEduItemMgmtData.ds_ds_oEduItemKindGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_lbStatusM ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '76px', height: '24px' }}><Typography variant="body2">초기모드</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '345px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대분류</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduItemMUnit?.EIBCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0001MEduItemMgmtData.ds_ds_oEduItemBCode || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '344px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>중분류코드</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduItemMUnit?.EIMCD || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '344px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>중분류명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduItemMUnit?.EIMNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={3}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdEduItemS ? undefined : 'none' }}><Paper sx={{ width: '779px', height: '418px', width: '100%', height: 'auto', minHeight: '418px' }}><DataGridWrapper rows={hook.ds_ioEduItemS} columns={columns_gdEduItemS} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '348px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교보재분류</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduItemSUnit?.EIKINDGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0001MEduItemMgmtData.ds_ds_oEduItemKindGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_lbStatusS ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '76px', height: '24px' }}><Typography variant="body2">초기모드</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '348px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대분류</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduItemSUnit?.EIBCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0001MEduItemMgmtData.ds_ds_oEduItemBCode || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '348px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>중분류</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduItemSUnit?.EIMCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0001MEduItemMgmtData.ds_ds_oEduItemMCode || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '347px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소분류코드</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduItemSUnit?.EISCD || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '347px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소분류명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduItemSUnit?.EISNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmitem0001MEduItemMgmt;

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
}