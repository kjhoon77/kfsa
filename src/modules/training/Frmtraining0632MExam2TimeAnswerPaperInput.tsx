// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0632MExam2TimeAnswerPaperInput } from './useFrmtraining0632MExam2TimeAnswerPaperInput';
import * as Frmtraining0632MExam2TimeAnswerPaperInputData from './Frmtraining0632MExam2TimeAnswerPaperInputData';

export const Frmtraining0632MExam2TimeAnswerPaperInput = () => {
    const hook = useFrmtraining0632MExam2TimeAnswerPaperInput();
    const columns_gdExamJubsu = [
        { field: 'GTDEPTNM', headerName: '지부', width: 50 },
        { field: 'EOEXAMORDER', headerName: '회차', width: 33 },
        { field: 'EOHJUBSUNO', headerName: '응시번호', width: 62 },
        { field: 'CHASUGUBUN', headerName: '시험차수', width: 62 },
        { field: 'EJPERSONNM', headerName: '성명', width: 67 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 89 },
        { field: 'EOEXAMDATE', headerName: '시험일자', width: 74 },
        { field: 'EO1OPENDATE', headerName: '1차합격일자', width: 82 },
        { field: 'EISITEMSCORE', headerName: '평균점수', width: 62 },
        { field: 'SUBJECT1SCORE', headerName: '1과목점수', width: 70 },
        { field: 'SUBJECT2SCORE', headerName: '2과목점수', width: 70 },
        { field: 'EISRESULT', headerName: '결과', width: 53 },
    ];
    const columns_gdExcel = [
        { field: 'EISEOMGNO', headerName: '지부', width: 120 },
        { field: 'EISAPLEXAMNO', headerName: '수험번호', width: 120 },
        { field: 'EISPERSONNM', headerName: '성명', width: 98 },
        { field: 'EISSUBJECTGUBUN', headerName: '과목', width: 83 },
        { field: 'EISITEMSCORE', headerName: '점수', width: 108 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained"  onClick={hook.lfn_Init}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_localExcel}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Save}>답안점수입력(F4)</Button>
<Button variant="contained" startIcon={<Delete />} onClick={hook.lfn_Delete}>삭제 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>시험응시건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={4}><Box>※ 회차를 먼저 조회하신 후 답안점수를 입력하세요!</Box></Grid><Grid item xs={12} md={2}><Button variant="contained"></Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioExamJubsu2Score} columns={columns_gdExamJubsu} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0632MExam2TimeAnswerPaperInput;

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