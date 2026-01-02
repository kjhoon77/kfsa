// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0100MCustomerListReport } from './useFrmcust0100MCustomerListReport';
import * as Frmcust0100MCustomerListReportData from './Frmcust0100MCustomerListReportData';

export const Frmcust0100MCustomerListReport = () => {
    const hook = useFrmcust0100MCustomerListReport();
    const columns_gdList3 = [
        { field: 'id', headerName: '순서', width: 45, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CNO_BUNHO', headerName: '관리번호', width: 168 },
        { field: 'FMBUILDINGNM', headerName: '업체명', width: 208 },
        { field: 'FMNM', headerName: '선임자명', width: 78 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 90 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 90 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 100 },
        { field: 'FMHTEL', headerName: '전화번호', width: 95 },
        { field: 'POCOUNT', headerName: '반송수', width: 49 },
        { field: 'BZIPCD', headerName: '우편번호', width: 70 },
        { field: 'FMHADDR', headerName: '주소', width: 250 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 112 },
        { field: 'FMHMAIL', headerName: '이메일', width: 179 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 100 },
        { field: 'CEDUEXPIREDATE', headerName: '교육유효기간', width: 100 },
        { field: 'ADCONTENT', headerName: '관리제외사유', width: 149 },
        { field: 'ADREGDATE', headerName: '관리제외일자', width: 91 },
        { field: 'FSTNSMALL_NM', headerName: '소방관서', width: 150 },
        { field: 'FPISMGNO', headerName: '본부 대상물관리번호', width: 160 },
    ];
    const columns_gdList2 = [
        { field: 'id', headerName: '순서', width: 45, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CNO_BUNHO', headerName: '관리번호', width: 168 },
        { field: 'FMBUILDINGNM', headerName: '업체명', width: 208 },
        { field: 'FMNM', headerName: '선임자명', width: 78 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 90 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 90 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 100 },
        { field: 'FMHTEL', headerName: '전화번호', width: 95 },
        { field: 'POCOUNT', headerName: '반송수', width: 49 },
        { field: 'BZIPCD', headerName: '우편번호', width: 70 },
        { field: 'FMHADDR', headerName: '주소', width: 250 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 112 },
        { field: 'FMHMAIL', headerName: '이메일', width: 179 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 100 },
        { field: 'CEDUEXPIREDATE', headerName: '교육유효기간', width: 100 },
        { field: 'MINAPFEE', headerName: '미납금액', width: 100 },
        { field: 'FSTNSMALL_NM', headerName: '소방관서', width: 150 },
        { field: 'FPISMGNO', headerName: '본부 대상물관리번호', width: 160 },
    ];
    const columns_gdList4 = [
        { field: 'id', headerName: '순서', width: 45, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CNO_BUNHO', headerName: '관리번호', width: 168 },
        { field: 'FMBUILDINGNM', headerName: '업체명', width: 208 },
        { field: 'FMNM', headerName: '선임자명', width: 78 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 90 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 90 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 100 },
        { field: 'FMHTEL', headerName: '전화번호', width: 95 },
        { field: 'POCOUNT', headerName: '반송수', width: 49 },
        { field: 'BZIPCD', headerName: '우편번호', width: 70 },
        { field: 'FMHADDR', headerName: '주소', width: 250 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 112 },
        { field: 'FMHMAIL', headerName: '이메일', width: 179 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 100 },
        { field: 'CEDUEXPIREDATE', headerName: '교육유효기간', width: 100 },
        { field: 'MINAPFEE', headerName: '미납금액', width: 100 },
        { field: 'ADCONTENT', headerName: '관리제외사유', width: 149 },
        { field: 'ADREGDATE', headerName: '관리제외일자', width: 91 },
        { field: 'FSTNSMALL_NM', headerName: '소방관서', width: 150 },
        { field: 'FPISMGNO', headerName: '본부 대상물관리번호', width: 160 },
    ];
    const columns_gdList1 = [
        { field: 'id', headerName: '순서', width: 45, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CNO_BUNHO', headerName: '관리번호', width: 168 },
        { field: 'FMBUILDINGNM', headerName: '업체명', width: 208 },
        { field: 'FMNM', headerName: '선임자명', width: 78 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 90 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 90 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 100 },
        { field: 'FMHTEL', headerName: '전화번호', width: 95 },
        { field: 'POCOUNT', headerName: '반송수', width: 49 },
        { field: 'BZIPCD', headerName: '우편번호', width: 70 },
        { field: 'FMHADDR', headerName: '주소', width: 250 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 112 },
        { field: 'FMHMAIL', headerName: '이메일', width: 179 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 100 },
        { field: 'CEDUEXPIREDATE', headerName: '교육유효기간', width: 100 },
        { field: 'FSTNSMALL_NM', headerName: '소방관서', width: 150 },
        { field: 'FPISMGNO', headerName: '본부 대상물관리번호', width: 160 },
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
<Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회 조건</Box></Grid><Grid item xs={12} md={2}><Box>정렬순서</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조건</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>자료유형</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>지부</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>지역</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0100MCustomerListReportData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>고객구분</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>대표직능</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>세부직능</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>인력구분</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>용도</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0100MCustomerListReportData.ds_ds_oAdditionInfo || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>관리번호</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>선임일자</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>등록년월</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>관리제외</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>대상</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>업무대행</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>미납금액</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0100MCustomerListReport;

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