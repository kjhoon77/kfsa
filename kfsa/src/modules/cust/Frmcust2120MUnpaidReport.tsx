// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2120MUnpaidReport } from './useFrmcust2120MUnpaidReport';
import * as Frmcust2120MUnpaidReportData from './Frmcust2120MUnpaidReportData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust2120MUnpaidReport = () => {
    const hook = useFrmcust2120MUnpaidReport();
    const columns_gdList = [
        { field: 'CNICKNM', headerName: '순번', width: 47 },
        { field: 'JIFULLNM', headerName: '지부', width: 69 },
        { field: 'CNO', headerName: '회원번호', width: 128 },
        { field: 'BNM', headerName: '업체명', width: 136 },
        { field: 'FMNM', headerName: '성명', width: 69 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 100 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 102 },
        { field: 'ZIPCD', headerName: '우편번호', width: 85 },
        { field: 'BADDR', headerName: '주소', width: 230 },
        { field: 'COVER_GUBUN', headerName: '겸직구분', width: 66 },
        { field: 'CREGISTERYYMM', headerName: '입회년월', width: 64 },
        { field: 'CFEEYYMM', headerName: '회비부과년월', width: 94 },
        { field: 'FMHHPTEL', headerName: '휴대폰', width: 100 },
        { field: 'EMAIL', headerName: '이메일', width: 215 },
        { field: 'CNT3', headerName: 'CNT3', width: 80 },
        { field: 'CNT2', headerName: 'CNT2', width: 80 },
        { field: 'CNT1', headerName: 'CNT1', width: 80 },
        { field: 'CNT0', headerName: 'CNT0', width: 80 },
        { field: 'AMT', headerName: '미납금액', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnExcell_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_CancelL}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "50px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">조회 조건</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '205px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2120MUnpaidReportData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radMinapGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '16px', height: '46px' }}><RadioGroup row >{ (Frmcust2120MUnpaidReportData.ds_ds_MinapGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl></Box><Box sx={{ display: hook.isVisible_lbYear ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '80px', height: '22px' }}><Typography variant="body2">년도별 미납</Typography></Box></Box><Box sx={{ display: hook.isVisible_chkYearMinap4 ? undefined : 'none' }}><Box sx={{ width: '60px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_chkYearMinap3 ? undefined : 'none' }}><Box sx={{ width: '60px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_chkYearMinap2 ? undefined : 'none' }}><Box sx={{ width: '60px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_chkYearMinap1 ? undefined : 'none' }}><Box sx={{ width: '60px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '416px', height: '22px', display: 'flex', alignItems: 'center', ml: '28px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>장기미납</Typography>
                    <FormControl component="fieldset"><RadioGroup row >{ (Frmcust2120MUnpaidReportData.ds_ds_ioYear || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "16px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '540px', height: '170px', width: '100%', height: 'auto', minHeight: '170px' }}><DataGridWrapper rows={hook.ds_MinapListExcel} columns={columns_gdList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust2120MUnpaidReport;

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