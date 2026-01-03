// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6520MFPISDataConnectionReport } from './useFrmcust6520MFPISDataConnectionReport';
import * as Frmcust6520MFPISDataConnectionReportData from './Frmcust6520MFPISDataConnectionReportData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust6520MFPISDataConnectionReport = () => {
    const hook = useFrmcust6520MFPISDataConnectionReport();
    const columns_gdList1 = [
        { field: 'RCCDNM', headerName: '(소방안전관리자) 소방청 데이터연계 소방서별 집계현황', width: 60 },
        { field: 'TOT', headerName: '총 계', width: 50 },
        { field: 'TOT_MATCH', headerName: '일치완료', width: 54 },
        { field: 'TOT_NEMA', headerName: '교육대상', width: 63 },
        { field: 'TOT_NOT', headerName: '미일치', width: 50 },
        { field: 'TOT_1', headerName: '1급소관', width: 50 },
        { field: 'MATCH_1', headerName: '일치완료', width: 57 },
        { field: 'NEMA_1', headerName: '교육대상', width: 64 },
        { field: 'NOT_1', headerName: '미일치', width: 50 },
        { field: 'TOT_2', headerName: '2급소관', width: 50 },
        { field: 'MATCH_2', headerName: '일치완료', width: 60 },
        { field: 'NEMA_2', headerName: '교육대상', width: 64 },
        { field: 'NOT_2', headerName: '미일치', width: 50 },
        { field: 'TOT_3', headerName: '공공1급', width: 50 },
        { field: 'MATCH_3', headerName: '일치완료', width: 54 },
        { field: 'NEMA_3', headerName: '교육대상', width: 61 },
        { field: 'NOT_3', headerName: '미일치', width: 50 },
        { field: 'TOT_4', headerName: '공공2급', width: 50 },
        { field: 'MATCH_4', headerName: '일치완료', width: 60 },
        { field: 'NEMA_4', headerName: '교육대상', width: 65 },
        { field: 'NOT_4', headerName: '미일치', width: 50 },
        { field: 'TOT_5', headerName: '일반대상', width: 50 },
        { field: 'MATCH_5', headerName: '일치완료', width: 60 },
        { field: 'NEMA_5', headerName: '교육대상', width: 65 },
        { field: 'NOT_5', headerName: '미일치', width: 50 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "50px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">출력물</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radPrtGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '301px', height: '22px' }}><RadioGroup row >{ (Frmcust6520MFPISDataConnectionReportData.ds_ds_ioReport || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "20px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">조회 조건</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '232px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방본부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6520MFPISDataConnectionReportData.ds_ds_oBonbu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '236px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방서</Typography>
                    <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6520MFPISDataConnectionReportData.ds_ds_ioChoiceYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxFireStation1 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '121px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6520MFPISDataConnectionReportData.ds_ds_oFireStation || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '140px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6520MFPISDataConnectionReportData.ds_ds_oFireStation || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '249px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계대상</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6520MFPISDataConnectionReportData.ds_ds_ioCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '499px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>처리구분</Typography>
                    <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6520MFPISDataConnectionReportData.ds_ds_ioMatch || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "9px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '499px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계제외사유구분</Typography>
                    <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6520MFPISDataConnectionReportData.ds_ds_ioExceptGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "18px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static13 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">정렬순서</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "12px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radOrder ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '487px', height: '86px' }}><RadioGroup row >{ (Frmcust6520MFPISDataConnectionReportData.ds_ds_ioOrder || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList1 ? undefined : 'none' }}><Paper sx={{ width: '759px', height: '207px', width: '100%', height: 'auto', minHeight: '207px' }}><DataGridWrapper rows={hook.ds_oDATA} columns={columns_gdList1} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6520MFPISDataConnectionReport;

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