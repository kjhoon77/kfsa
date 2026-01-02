// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6520MFPISDataConnectionReport } from './useFrmcust6520MFPISDataConnectionReport';
import * as Frmcust6520MFPISDataConnectionReportData from './Frmcust6520MFPISDataConnectionReportData';

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
                    <Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained"  onClick={hook.lfn_Print}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>출력물</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회 조건</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소방본부</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6520MFPISDataConnectionReportData.ds_ds_oBonbu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>소방서</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6520MFPISDataConnectionReportData.ds_ds_oFireStation || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>연계대상</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6520MFPISDataConnectionReportData.ds_ds_ioCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>처리구분</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>연계제외사유구분</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>정렬순서</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={6}><Box></Box></Grid></Grid>

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