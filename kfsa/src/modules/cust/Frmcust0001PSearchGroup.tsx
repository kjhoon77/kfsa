// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0001PSearchGroup } from './useFrmcust0001PSearchGroup';
import * as Frmcust0001PSearchGroupData from './Frmcust0001PSearchGroupData';

export const Frmcust0001PSearchGroup = () => {
    const hook = useFrmcust0001PSearchGroup();
    const [chk_chkCust, setChk_chkCust] = useState('0');
    const columns_gdGroupList = [
        { field: 'id', headerName: '순번', width: 30, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CGTMGNO', headerName: '지부', width: 55 },
        { field: 'RCNM', headerName: '지역', width: 70 },
        { field: 'CDELGUBUN', headerName: '상태', width: 60 },
        { field: 'CNO', headerName: '관리번호', width: 60 },
        { field: 'CCOURSECD', headerName: '직능', width: 70 },
        { field: 'BCONO', headerName: '사업자번호', width: 91 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 116 },
        { field: 'MADDR', headerName: '주소', width: 203 },
        { field: 'FMNM', headerName: '성명', width: 60 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 92 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 56 },
        { field: 'FMHHPTEL', headerName: '연락처(휴대폰)', width: 121 },
        { field: 'FMHTEL', headerName: '전화번호', width: 0 },
        { field: 'BBIZCD', headerName: '용도', width: 106 },
        { field: 'BMGNO', headerName: '대상물No.', width: 68 },
        { field: 'CREGISTERYYMM', headerName: '등록년월', width: 77 },
        { field: 'CDELDATE', headerName: '삭제일자', width: 77 },
        { field: 'CFEEYYMM', headerName: '회비부과년월', width: 90 },
        { field: 'MINAP', headerName: '미납회비', width: 70 },
        { field: 'EDU', headerName: '최종교육일자', width: 89 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnSelect_OnClick}>선택</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회(F6)</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "63px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '856px', height: '94px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색항목선택</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust0001PSearchGroupData.ds_ds_ioGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Div0 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '118px', height: '61px', width: '100%', height: 'auto', minHeight: '61px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}></Stack></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">운송자항목선택</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '141px', height: '14px' }}><Typography variant="body2">(                      ,        )</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '116px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ ml: "8px", minWidth: "640px" }}><Box sx={{ display: hook.isVisible_lbKeyword ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">검색어</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbAddr1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">주소(동)</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '640px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소(도로명)</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '288px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edRoadKeyWord ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '548px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>번지</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Box><FormControlLabel control={<Checkbox checked={chk_chkCust === '1'} onChange={(e) => setChk_chkCust(e.target.checked ? '1' : '0')} />} label="해당 문자열 포함" /><Box sx={{ display: hook.isVisible_cbxYear ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '118px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0001PSearchGroupData.ds_ds_ioa || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "13px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdGroupList ? undefined : 'none' }}><Paper sx={{ width: '976px', height: '462px', width: '100%', height: 'auto', minHeight: '462px' }}><DataGridWrapper rows={hook.ds_oGroupList} columns={columns_gdGroupList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0001PSearchGroup;

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