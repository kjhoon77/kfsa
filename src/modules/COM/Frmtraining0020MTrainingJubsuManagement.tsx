// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0020MTrainingJubsuManagement } from './useFrmtraining0020MTrainingJubsuManagement';
import * as Frmtraining0020MTrainingJubsuManagementData from './Frmtraining0020MTrainingJubsuManagementData';

export const Frmtraining0020MTrainingJubsuManagement = () => {
    const hook = useFrmtraining0020MTrainingJubsuManagement();
    const columns_gdSetlmentHist = [
        { field: 'TSSEQ', headerName: '순번', width: 30 },
        { field: 'TSPROCDATE', headerName: '처리일자', width: 71 },
        { field: 'TSSETLMTYN', headerName: '결제여부', width: 62 },
        { field: 'EARLYSUNAPGUBUN', headerName: '선수납', width: 55 },
        { field: 'TSGUBUNCDNM', headerName: '결제구분', width: 70 },
        { field: 'TSGUBUNNM', headerName: '결제방법', width: 106 },
        { field: 'TSPROCAMOUNT', headerName: '금액(원)', width: 62 },
        { field: 'PVINFO', headerName: '계산서', width: 55 },
        { field: 'TAXRCPTYN', headerName: '세금계산서발행여부', width: 0 },
        { field: 'TSPROCGTMGNONM', headerName: '처리지부', width: 70 },
        { field: 'PROCSABUN', headerName: '처리자', width: 73 },
        { field: 'TSJUMUNNO', headerName: '주문번호', width: 94 },
        { field: 'TSREPAYREF', headerName: '환불No', width: 55 },
        { field: 'TSMGGTMGNONM', headerName: '관리지부', width: 70 },
        { field: 'TSPOSGTMGNONM', headerName: 'POS지부', width: 70 },
        { field: 'TSPONYDATE', headerName: '정산일자', width: 77 },
    ];
    const columns_gdJubsuInfo = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'MGJIBUCD', headerName: '지부', width: 60 },
        { field: 'YEAR', headerName: '년도', width: 36 },
        { field: 'COURSEMUNJECD', headerName: '직능', width: 140 },
        { field: 'TORDER', headerName: '회차', width: 31 },
        { field: 'JUBSUNO', headerName: '접수번호', width: 58 },
        { field: 'PASSDATE', headerName: '수료일자', width: 83 },
        { field: 'LASTSUNAPGUBUN', headerName: '환불여부', width: 59 },
        { field: 'FIRSTREGDATE', headerName: '접수일자', width: 83 },
    ];
    const columns_gdOrderHist = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'BEFORJIBU', headerName: '지부', width: 70 },
        { field: 'BEFORORDER', headerName: '회차', width: 50 },
        { field: 'BEFORJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'AFTERJIBU', headerName: '변경 후', width: 70 },
        { field: 'AFTERORDER', headerName: '회차', width: 50 },
        { field: 'AFTERJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'PROCDATE', headerName: '처리일자', width: 85 },
        { field: 'REMARK', headerName: '사유', width: 189 },
        { field: 'LASTSUNAPGUBUN', headerName: '환불여부', width: 60 },
        { field: 'ABSENTYN', headerName: '결강일차', width: 70 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Delete />} onClick={hook.lfn_Delete}>삭제 저장</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained"  onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnPrintJubsu_OnClick}>수강증출력</Button>
<Button variant="contained"  onClick={hook.lfn_Print}>강습원서출력(F9)</Button>
<Button variant="contained"  onClick={hook.btnPrintJubsuResult_OnClick}>접수결과출력</Button>
<Button variant="contained"  onClick={hook.btnSearchPersonInfoChange_OnClick}>접수자정보변경</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Detailed Info</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0020MTrainingJubsuManagementData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>년도</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>성명</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>직능</Box></Grid><Grid item xs={12} md={9}><Box></Box></Grid><Grid item xs={12} md={2}><Box>주민번호</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>주소</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회차</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Button variant="contained">접수가능회차</Button></Grid><Grid item xs={12} md={2}><Box>전화번호</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>접수번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Button variant="contained">접수목록</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">빈번호</Button></Grid><Grid item xs={12} md={2}><Box>E-Mail</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>좌석번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Button variant="contained">좌석목록</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">좌석선택</Button></Grid><Grid item xs={12} md={2}><Box>근무처</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>회차정보</Box></Grid><Grid item xs={12} md={8}><Box></Box></Grid><Grid item xs={12} md={2}><Box>적요</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={8}><Box></Box></Grid><Grid item xs={12} md={2}><Box>선·후불구분</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>회차변경</Box></Grid><Grid item xs={12} md={2}><Button variant="contained">회차변경</Button></Grid><Grid item xs={12} md={3}><Button variant="contained">사이버교육 정보</Button></Grid><Grid item xs={12} md={3}><Box>결제내역</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>실무능력평가 결과</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioTrainingJubsu?.EVALYN || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Button variant="contained">통합영수증조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>수료여부</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioTrainingJubsu?.PASSYN || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Button variant="contained">수첩보유현황</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">변경이력</Button></Grid><Grid item xs={12} md={3}><Button variant="contained">결제(POS)</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>결강여부</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioTrainingJubsu?.ABSENTYN || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained">결강자관리</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">접수이력</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>수강증 바코드</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Button variant="contained">바코드로 조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>개인접수정보</Box></Grid></Grid>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>List</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained">기본정보</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">등록사진조회</Button></Grid><Grid item xs={12} md={2}><Box>최근사진</Box></Grid><Grid item xs={12} md={2}><Box>사진</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained">실명인증</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">사진관리</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><IconButton color="primary"><Search /></IconButton></Tooltip></Grid><Grid item xs={12} md={2}><Button variant="contained">접수정보(F6)</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">최근사진반영</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={9}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={9}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>휴대폰</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioTrainingJubsu?.HPTEL || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained">문자발송</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">문자현황</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>@</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioTrainingJubsu?.EMAILDOMAIN || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained">메일발송</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">메일현황</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">사진스캔실행</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Box>안전원회원가입동의</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained">스캔사진불러오기</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={7}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained">사진찾기</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained">결제삭제</Button></Grid><Grid item xs={12} md={3}><Button variant="contained">영수증재발행(PDF용)</Button></Grid><Grid item xs={12} md={3}><Button variant="contained">작성일자별 계산서발행</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained">결제처리결과조회</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">가상계좌보기</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">처리일자변경</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">현금영수증처리</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">영수증재발행</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">부가세정보</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oSetlmentHist} columns={columns_gdSetlmentHist} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>개인접수회차이력</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>TJMGNO</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioTrainingJubsu?.TJMGNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>TPMGNO</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioTrainingJubsu?.TPMGNO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oJubsuAllInfo} columns={columns_gdJubsuInfo} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oOrderHist} columns={columns_gdOrderHist} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0020MTrainingJubsuManagement;

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