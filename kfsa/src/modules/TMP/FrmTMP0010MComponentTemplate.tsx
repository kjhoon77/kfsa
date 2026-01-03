// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmTMP0010MComponentTemplate } from './useFrmTMP0010MComponentTemplate';
import * as FrmTMP0010MComponentTemplateData from './FrmTMP0010MComponentTemplateData';

export const FrmTMP0010MComponentTemplate = () => {
    const hook = useFrmTMP0010MComponentTemplate();
    const [tabValue_tabTab, setTabValue_tabTab] = useState(0);
    const [chk_chkCheckbox, setChk_chkCheckbox] = useState('0');
    const columns_gdGrid = [
        { field: 'id', headerName: 'No', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'HGUL_NM', headerName: '성명', width: 100 },
        { field: 'PRESIDENTNO', headerName: '주민번호', width: 120 },
        { field: 'SEX', headerName: '성별', width: 236 },
    ];
    const columns_gdGridSum = [
        { field: 'id', headerName: 'No', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'HGUL_NM', headerName: '성명', width: 100 },
        { field: 'PRESIDENTNO', headerName: '주민번호', width: 120 },
        { field: 'SEX', headerName: '성별', width: 104 },
        { field: 'COUNT', headerName: '갯수', width: 104 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    
                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbText ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">※ 흑색 정보 문자열</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbTextBlue ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">※ 파란 정보 문자열</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medMask ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '106px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbGroupbox ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '200px', height: '102px' }}><Typography variant="body2">그룹박스</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbTime ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">시간형 MaskEdit 예</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medMaskReadOnly ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '106px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_calCalendar ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ minWidth: "120px", width: '98px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edEditReadOnly ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '120px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_tmTime4 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '40px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_tmTime6 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '58px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tmTime4ReadOnly ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '40px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_tmTime6ReadOnly ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '58px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnButton ? undefined : 'none' }}><Button variant="contained"    sx={{ width: '118px', height: '24px', whiteSpace: "nowrap" }}>글자입력형버튼</Button></Box><Box sx={{ display: hook.isVisible_spSpin ? undefined : 'none' }}><Box sx={{ width: '55px', height: '22px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box><Box sx={{ display: hook.isVisible_cbxCombo ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '88px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmTMP0010MComponentTemplateData.ds_ds_oCombo || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgImage ? undefined : 'none' }}><Box sx={{ width: '32px', height: '34px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgImage</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbZipCode ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">우편번호형 MaskEdit 예</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medZipCode ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '58px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_lstList ? undefined : 'none' }}><Box sx={{ width: '100px', height: '42px', border: '1px dashed grey' }}>Unknown: List</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radRadioV ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '50px', height: '42px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (FrmTMP0010MComponentTemplateData.ds_ds_oRadio || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radRadioH ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '100px', height: '22px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (FrmTMP0010MComponentTemplateData.ds_ds_oRadio || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box><Box sx={{ display: hook.isVisible_btnSearchCode ? undefined : 'none' }}><Button variant="outlined"   size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lgLogout ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '152px', height: '22px' }}><Typography variant="body2">클릭이벤트있는이미지 예</Typography></Box></Box><Box sx={{ display: hook.isVisible_imgLogout ? undefined : 'none' }}><Box sx={{ width: '45px', height: '17px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgLogout</Box></Box><Box sx={{ display: hook.isVisible_medZipCodeReadOnly ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '58px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "40px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_taTextArea ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '200px', height: '102px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_taTextAreaReadOnly ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '200px', height: '102px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_divDiv ? undefined : 'none' }}><Paper sx={{ p: 2, width: '180px', height: '142px', width: '100%', height: 'auto', minHeight: '142px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}></Stack></Paper></Box><Box sx={{ display: hook.isVisible_tvTreeView ? undefined : 'none' }}><Box sx={{ width: '180px', height: '102px', border: '1px dashed grey' }}>Unknown: TreeView</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab ? undefined : 'none' }}><Box sx={{ width: '300px', height: '242px', width: "100%", height: "auto", minHeight: "242px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab} onChange={(e, v) => setTabValue_tabTab(v)} aria-label="tabTab"><Tab label="기본" /><Tab label="상세" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab} index={0}></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={1}></CustomTabPanel></Box></Box><Box sx={{ display: hook.isVisible_gdGrid ? undefined : 'none' }}><Paper sx={{ width: '400px', height: '142px', width: '100%', height: 'auto', minHeight: '142px' }}><DataGridWrapper rows={hook.ds_oGrid} columns={columns_gdGrid} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdGridSum ? undefined : 'none' }}><Paper sx={{ width: '400px', height: '162px', width: '100%', height: 'auto', minHeight: '162px' }}><DataGridWrapper rows={hook.ds_oGrid} columns={columns_gdGridSum} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmTMP0010MComponentTemplate;

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