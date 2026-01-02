// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0030MTrainingJubsuList } from './useFrmtraining0030MTrainingJubsuList';
import * as Frmtraining0030MTrainingJubsuListData from './Frmtraining0030MTrainingJubsuListData';

export const Frmtraining0030MTrainingJubsuList = () => {
    const hook = useFrmtraining0030MTrainingJubsuList();
    const columns_Grid0 = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOMGGTMGNO', headerName: '지부', width: 60 },
        { field: 'TOYEAR', headerName: '년도', width: 35 },
        { field: 'TOTRAININGORDER', headerName: '회차', width: 34 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'TJLASTSUNAPGUBUN', headerName: '수납', width: 61 },
        { field: 'TJPASSYN', headerName: '수료', width: 40 },
        { field: 'TOTCCOURSECD', headerName: '직능', width: 105 },
        { field: 'TOMUNJEGUBUNNM', headerName: '상세구분', width: 61 },
        { field: 'TJPERSONNM', headerName: '성명', width: 64 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 107 },
        { field: 'TSPROCAMOUNT', headerName: '총수납금액', width: 80 },
        { field: 'TOSTARTDATE', headerName: '교육시작일자', width: 90 },
        { field: 'TOENDDATE', headerName: '교육종료일자', width: 90 },
        { field: 'CYBERDATE', headerName: '사이버교육기간', width: 105 },
        { field: 'TJZIPCD', headerName: '우편번호', width: 70 },
        { field: 'TJADDR', headerName: '주소', width: 230 },
        { field: 'TPHPTEL', headerName: '휴대폰', width: 100 },
        { field: 'TPEMAIL', headerName: '이메일', width: 150 },
        { field: 'BOOKADDR', headerName: '교재수령지', width: 273 },
        { field: 'TJCOMPNM', headerName: '근무처', width: 150 },
    ];
    const columns_gdTrainingJubsu = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'SEL', headerName: 'SEL', width: 60 },
        { field: 'TOMGGTMGNO', headerName: '지부', width: 60 },
        { field: 'TOYEAR', headerName: '년도', width: 35 },
        { field: 'TOTRAININGORDER', headerName: '회차', width: 34 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'TJLASTSUNAPGUBUN', headerName: '수납', width: 61 },
        { field: 'TJPASSYN', headerName: '수료', width: 40 },
        { field: 'TOTCCOURSECD', headerName: '직능', width: 105 },
        { field: 'TOMUNJEGUBUNNM', headerName: '상세구분', width: 61 },
        { field: 'TJPERSONNM', headerName: '성명', width: 64 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 107 },
        { field: 'TSPROCAMOUNT', headerName: '총수납금액', width: 80 },
        { field: 'TOSTARTDATE', headerName: '교육시작일자', width: 90 },
        { field: 'TOENDDATE', headerName: '교육종료일자', width: 90 },
        { field: 'CYBERDATE', headerName: '사이버교육기간', width: 105 },
        { field: 'TJZIPCD', headerName: '우편번호', width: 70 },
        { field: 'TJADDR', headerName: '주소', width: 230 },
        { field: 'TPHPTEL', headerName: '휴대폰', width: 100 },
        { field: 'TPEMAIL', headerName: '이메일', width: 150 },
        { field: 'BOOKADDR', headerName: '교재수령지', width: 273 },
        { field: 'TJCOMPNM', headerName: '근무처', width: 150 },
    ];
    const columns_gdBookSend = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTTEAMNM', headerName: '지부', width: 100 },
        { field: 'TCCOURSENM', headerName: '교육과정', width: 152 },
        { field: 'STARTDATE', headerName: '교육시작일', width: 90 },
        { field: 'ENDDATE', headerName: '교육종료일', width: 90 },
        { field: 'JUBSUNO', headerName: '접수번호', width: 159 },
        { field: 'TJPERSONNM', headerName: '성명', width: 74 },
        { field: 'TPBOOKZIPCD', headerName: '수신자 우편번호', width: 113 },
        { field: 'TPBOOKADDR1', headerName: '수신자 주소1', width: 268 },
        { field: 'TPBOOKADDR2', headerName: '수신자 주소2', width: 268 },
        { field: 'TPHPTEL', headerName: '수신자 휴대폰', width: 100 },
        { field: 'GTZIPCODE', headerName: '발신자 우편번호', width: 113 },
        { field: 'GTADDR1', headerName: '발신자 주소1', width: 268 },
        { field: 'GTADDR2', headerName: '발신자 주소2', width: 268 },
        { field: 'GTTELEPHONENUMBER', headerName: '발신자 전화번호', width: 150 },
        { field: 'COURSEBOOK', headerName: '내용물', width: 214 },
        { field: 'SENDCOUNT', headerName: '수량', width: 47 },
        { field: 'BARCODE', headerName: '우편반송바코드', width: 150 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained"  onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Print}>접수자목록출력</Button>
<Button variant="contained"  onClick={hook.lfn_PrintAll}>수강증일괄출력</Button>
<Button variant="contained"  onClick={hook.lfn_PrintName}>강습접수자명단</Button>
<Button variant="contained"  onClick={hook.lfn_PrintNameBoard}>강습접수자명단(게시판용)</Button>
<Button variant="contained"  onClick={hook.lfn_PrintEvaluation}>생활안전강사 평가표</Button>
<Button variant="contained"  onClick={hook.lfn_PrintEvaluation53}>심폐소생술전문자격 평가표</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained">이메일출력(TXT파일)</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">교재수령지출력</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">교재수령지출력(전체)</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">Formtec(3107) 주소 출력</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">영수증재발행(PDF용)</Button></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0030MTrainingJubsuListData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>년도</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0030MTrainingJubsuListData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>선택</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회차</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>교육종료일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>수납여부</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Box>실시간 온라인 구분</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>수료여부</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={2}><Box>선·후불구분</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>회차변경여부</Box></Grid><Grid item xs={12} md={5}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>수첩비선수납여부</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>접수자수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>영수증수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained"></Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oTrainingJubsu_Filter} columns={columns_Grid0} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oTrainingJubsu} columns={columns_gdTrainingJubsu} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0030MTrainingJubsuList;

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