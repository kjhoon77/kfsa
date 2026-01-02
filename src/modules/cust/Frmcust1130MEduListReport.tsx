// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1130MEduListReport } from './useFrmcust1130MEduListReport';
import * as Frmcust1130MEduListReportData from './Frmcust1130MEduListReportData';

export const Frmcust1130MEduListReport = () => {
    const hook = useFrmcust1130MEduListReport();
    const columns_gdList1N = [
        { field: 'GTTEAMNM', headerName: '지부', width: 68 },
        { field: 'RCNM', headerName: '지역', width: 61 },
        { field: 'CNO', headerName: '관리번호', width: 92 },
        { field: 'CNICKNM', headerName: '직능', width: 98 },
        { field: 'BNM', headerName: '업체명', width: 147 },
        { field: 'EPPERSONNM', headerName: '이름', width: 61 },
        { field: 'ADDR', headerName: '주소', width: 183 },
        { field: 'EPYEAR', headerName: 'EPYEAR', width: 54 },
        { field: 'BTEL', headerName: '전화번호', width: 90 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 100 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 96 },
        { field: 'CCCDNM', headerName: '용도', width: 96 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 89 },
        { field: 'SUCCESSIONGUBUN', headerName: '교육구분', width: 90 },
        { field: 'FMHMAIL', headerName: '이메일', width: 129 },
        { field: 'FSTNSMALL_NM', headerName: '119안전센터', width: 133 },
    ];
    const columns_gdList2 = [
        { field: 'GTTEAMNM', headerName: '지부', width: 68 },
        { field: 'RCNM', headerName: '지역', width: 61 },
        { field: 'CNO', headerName: '관리번호', width: 171 },
        { field: 'BNM', headerName: '업체명', width: 147 },
        { field: 'EPPERSONNM', headerName: '이름', width: 61 },
        { field: 'ADDR', headerName: '주소', width: 183 },
        { field: 'YEAR2', headerName: 'YEAR2', width: 54 },
        { field: 'YEAR3', headerName: 'YEAR3', width: 54 },
        { field: 'BTEL', headerName: '전화번호', width: 90 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 95 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 97 },
        { field: 'CCCDNM', headerName: '용도', width: 94 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 100 },
        { field: 'FMHMAIL', headerName: '이메일', width: 129 },
        { field: 'FSTNSMALL_NM', headerName: '119안전센터', width: 133 },
    ];
    const columns_gdList3 = [
        { field: 'GTTEAMNM', headerName: '지부', width: 68 },
        { field: 'RCNM', headerName: '지역', width: 61 },
        { field: 'CNO', headerName: '관리번호', width: 171 },
        { field: 'BNM', headerName: '업체명', width: 147 },
        { field: 'EPPERSONNM', headerName: '이름', width: 61 },
        { field: 'ADDR', headerName: '주소', width: 183 },
        { field: 'YEAR1', headerName: 'YEAR1', width: 54 },
        { field: 'YEAR2', headerName: 'YEAR2', width: 54 },
        { field: 'YEAR3', headerName: 'YEAR3', width: 54 },
        { field: 'BTEL', headerName: '전화번호', width: 90 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 85 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 97 },
        { field: 'CCCDNM', headerName: '용도', width: 78 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 100 },
        { field: 'FMHMAIL', headerName: '이메일', width: 129 },
        { field: 'FSTNSMALL_NM', headerName: '119안전센터', width: 133 },
    ];
    const columns_gdList1Y = [
        { field: 'GTTEAMNM', headerName: '지부', width: 68 },
        { field: 'RCNM', headerName: '지역', width: 61 },
        { field: 'CNO', headerName: '관리번호', width: 75 },
        { field: 'CNICKNM', headerName: '직능', width: 111 },
        { field: 'BNM', headerName: '업체명', width: 147 },
        { field: 'EPPERSONNM', headerName: '이름', width: 61 },
        { field: 'ADDR', headerName: '주소', width: 183 },
        { field: 'EPYEAR', headerName: 'EPYEAR', width: 54 },
        { field: 'BTEL', headerName: '전화번호', width: 90 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 100 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 96 },
        { field: 'CCCDNM', headerName: '용도', width: 96 },
        { field: 'STARTDATE', headerName: '선임일자', width: 89 },
        { field: 'FMHSTARTDATE', headerName: '교육일자', width: 89 },
        { field: 'SUCCESSIONGUBUN', headerName: '교육구분', width: 90 },
        { field: 'FMHMAIL', headerName: '이메일', width: 129 },
        { field: 'FSTNSMALL_NM', headerName: '119안전센터', width: 133 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnExcell_OnClick}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_Print}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={6}><Box></Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>Div0</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회 조건</Box></Grid><Grid item xs={12} md={2}><Box>출력구분</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상년도</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_ioYear || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_ioCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>지부</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>미이수 횟수 선택</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>지역</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>안전센터</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>제외조건</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_oFireCenterCd2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>이전년도 교육이수자 제외</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>고객구분</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>용도</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_oAdditionInfo || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Box>강습교육수료자(1년이내) 제외</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>관리번호</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>선임일자</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>관리제외대상</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>가입년월</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>※ 이전자료</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>삭제자출력</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>관리번호출력선택</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>이수구분</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>( 지역-직능 )</Box></Grid><Grid item xs={12} md={2}><Box>업무대행</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>교육이관여부</Box></Grid><Grid item xs={12} md={5}><Box></Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>교육대상</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={2}><Box>공공기관선임자 미이수자 자료</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>교육년도</Box></Grid><Grid item xs={12} md={2}><Box>기관장</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={6}><Box></Box></Grid><Grid item xs={12} md={2}><Box>감독적직위</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>기타</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1130MEduListReport;

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