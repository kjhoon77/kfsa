// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0144MTrainingEvaluationAnswerInput } from './useFrmtraining0144MTrainingEvaluationAnswerInput';
import * as Frmtraining0144MTrainingEvaluationAnswerInputData from './Frmtraining0144MTrainingEvaluationAnswerInputData';

export const Frmtraining0144MTrainingEvaluationAnswerInput = () => {
    const hook = useFrmtraining0144MTrainingEvaluationAnswerInput();
    const columns_gdExcel = [
        { field: 'id', headerName: '순번', width: 53, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'EAPJUBSUNONAME', headerName: '수강번호-성명', width: 113 },
        { field: 'EAPITEMNO1', headerName: '문항1', width: 80 },
        { field: 'EAPANSWER1', headerName: '답안1', width: 80 },
        { field: 'EAPITEMNO2', headerName: '문항2', width: 80 },
        { field: 'EAPANSWER2', headerName: '답안2', width: 80 },
        { field: 'EAPITEMNO3', headerName: '문항3', width: 80 },
        { field: 'EAPANSWER3', headerName: '답안3', width: 80 },
        { field: 'EAPITEMNO4', headerName: '문항4', width: 80 },
        { field: 'EAPANSWER4', headerName: '답안4', width: 80 },
        { field: 'EAPITEMNO5', headerName: '문항5', width: 80 },
        { field: 'EAPANSWER5', headerName: '답안5', width: 80 },
        { field: 'EAPITEMNO6', headerName: '문항6', width: 80 },
        { field: 'EAPANSWER6', headerName: '답안6', width: 80 },
        { field: 'EAPITEMNO7', headerName: '문항7', width: 80 },
        { field: 'EAPANSWER7', headerName: '답안7', width: 80 },
        { field: 'EAPITEMNO8', headerName: '문항8', width: 80 },
        { field: 'EAPANSWER8', headerName: '답안8', width: 80 },
        { field: 'EAPITEMNO9', headerName: '문항9', width: 80 },
        { field: 'EAPANSWER9', headerName: '답안9', width: 80 },
        { field: 'EAPITEMNO10', headerName: '문항10', width: 80 },
        { field: 'EAPANSWER10', headerName: '답안10', width: 80 },
        { field: 'EAPITEMNO11', headerName: '문항11', width: 80 },
        { field: 'EAPANSWER11', headerName: '답안11', width: 80 },
        { field: 'EAPITEMNO12', headerName: '문항12', width: 80 },
        { field: 'EAPANSWER12', headerName: '답안12', width: 80 },
        { field: 'EAPITEMNO13', headerName: '문항13', width: 80 },
        { field: 'EAPANSWER13', headerName: '답안13', width: 80 },
        { field: 'EAPITEMNO14', headerName: '문항14', width: 80 },
        { field: 'EAPANSWER14', headerName: '답안14', width: 80 },
        { field: 'EAPITEMNO15', headerName: '문항15', width: 80 },
        { field: 'EAPANSWER15', headerName: '답안15', width: 80 },
        { field: 'EAPITEMNO16', headerName: '문항16', width: 80 },
        { field: 'EAPANSWER16', headerName: '답안16', width: 80 },
        { field: 'EAPITEMNO17', headerName: '문항17', width: 80 },
        { field: 'EAPANSWER17', headerName: '답안17', width: 80 },
        { field: 'EAPITEMNO18', headerName: '문항18', width: 80 },
        { field: 'EAPANSWER18', headerName: '답안18', width: 80 },
        { field: 'EAPITEMNO19', headerName: '문항19', width: 80 },
        { field: 'EAPANSWER19', headerName: '답안19', width: 80 },
        { field: 'EAPITEMNO20', headerName: '문항20', width: 80 },
        { field: 'EAPANSWER20', headerName: '답안20', width: 80 },
        { field: 'EAPITEMNO21', headerName: '문항21', width: 80 },
        { field: 'EAPANSWER21', headerName: '답안21', width: 80 },
        { field: 'EAPITEMNO22', headerName: '문항22', width: 80 },
        { field: 'EAPANSWER22', headerName: '답안22', width: 80 },
        { field: 'EAPITEMNO23', headerName: '문항23', width: 80 },
        { field: 'EAPANSWER23', headerName: '답안23', width: 80 },
        { field: 'EAPITEMNO24', headerName: '문항24', width: 80 },
        { field: 'EAPANSWER24', headerName: '답안24', width: 80 },
        { field: 'EAPITEMNO25', headerName: '문항25', width: 80 },
        { field: 'EAPANSWER25', headerName: '답안25', width: 80 },
        { field: 'EAPITEMNO26', headerName: '문항26', width: 80 },
        { field: 'EAPANSWER26', headerName: '답안26', width: 80 },
        { field: 'EAPITEMNO27', headerName: '문항27', width: 80 },
        { field: 'EAPANSWER27', headerName: '답안27', width: 80 },
        { field: 'EAPITEMNO28', headerName: '문항28', width: 80 },
        { field: 'EAPANSWER28', headerName: '답안28', width: 80 },
        { field: 'EAPITEMNO29', headerName: '문항29', width: 80 },
        { field: 'EAPANSWER29', headerName: '답안29', width: 80 },
        { field: 'EAPITEMNO30', headerName: '문항30', width: 80 },
        { field: 'EAPANSWER30', headerName: '답안30', width: 80 },
        { field: 'EAPITEMNO31', headerName: '문항31', width: 80 },
        { field: 'EAPANSWER31', headerName: '답안31', width: 80 },
        { field: 'EAPITEMNO32', headerName: '문항32', width: 80 },
        { field: 'EAPANSWER32', headerName: '답안32', width: 80 },
        { field: 'EAPITEMNO33', headerName: '문항33', width: 80 },
        { field: 'EAPANSWER33', headerName: '답안33', width: 80 },
        { field: 'EAPITEMNO34', headerName: '문항34', width: 80 },
        { field: 'EAPANSWER34', headerName: '답안34', width: 80 },
        { field: 'EAPITEMNO35', headerName: '문항35', width: 80 },
        { field: 'EAPANSWER35', headerName: '답안35', width: 80 },
        { field: 'EAPITEMNO36', headerName: '문항36', width: 80 },
        { field: 'EAPANSWER36', headerName: '답안36', width: 80 },
        { field: 'EAPITEMNO37', headerName: '문항37', width: 80 },
        { field: 'EAPANSWER37', headerName: '답안37', width: 80 },
        { field: 'EAPITEMNO38', headerName: '문항38', width: 80 },
        { field: 'EAPANSWER38', headerName: '답안38', width: 80 },
        { field: 'EAPITEMNO39', headerName: '문항39', width: 80 },
        { field: 'EAPANSWER39', headerName: '답안39', width: 80 },
        { field: 'EAPITEMNO40', headerName: '문항40', width: 80 },
        { field: 'EAPANSWER40', headerName: '답안40', width: 80 },
        { field: 'EAPITEMNO41', headerName: '문항41', width: 80 },
        { field: 'EAPANSWER41', headerName: '답안41', width: 80 },
        { field: 'EAPITEMNO42', headerName: '문항42', width: 80 },
        { field: 'EAPANSWER42', headerName: '답안42', width: 80 },
        { field: 'EAPITEMNO43', headerName: '문항43', width: 80 },
        { field: 'EAPANSWER43', headerName: '답안43', width: 80 },
        { field: 'EAPITEMNO44', headerName: '문항44', width: 80 },
        { field: 'EAPANSWER44', headerName: '답안44', width: 80 },
        { field: 'EAPITEMNO45', headerName: '문항45', width: 80 },
        { field: 'EAPANSWER45', headerName: '답안45', width: 80 },
        { field: 'EAPITEMNO46', headerName: '문항46', width: 80 },
        { field: 'EAPANSWER46', headerName: '답안46', width: 80 },
        { field: 'EAPITEMNO47', headerName: '문항47', width: 80 },
        { field: 'EAPANSWER47', headerName: '답안47', width: 80 },
        { field: 'EAPITEMNO48', headerName: '문항48', width: 80 },
        { field: 'EAPANSWER48', headerName: '답안48', width: 80 },
        { field: 'EAPITEMNO49', headerName: '문항49', width: 80 },
        { field: 'EAPANSWER49', headerName: '답안49', width: 80 },
        { field: 'EAPITEMNO50', headerName: '문항50', width: 80 },
        { field: 'EAPANSWER50', headerName: '답안50', width: 80 },
    ];
    const columns_gdEvalList = [
        { field: 'GTDEPTNM', headerName: '지부', width: 50 },
        { field: 'TCCOURSENICK', headerName: '과정', width: 55 },
        { field: 'ORDERJUBSUNO', headerName: '수강번호', width: 60 },
        { field: 'TJPERSONNM', headerName: '성명', width: 70 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 92 },
        { field: 'RESULT', headerName: '결과', width: 55 },
        { field: 'SUBJECT11', headerName: '소화기', width: 40 },
        { field: 'SUBJECT12', headerName: '재평1', width: 40 },
        { field: 'SUBJECT13', headerName: '재평2', width: 40 },
        { field: 'SUBJECT21', headerName: '옥내', width: 40 },
        { field: 'SUBJECT22', headerName: '재평1', width: 40 },
        { field: 'SUBJECT23', headerName: '재평2', width: 40 },
        { field: 'SUBJECT31', headerName: 'SP', width: 40 },
        { field: 'SUBJECT32', headerName: '재평1', width: 40 },
        { field: 'SUBJECT33', headerName: '재평2', width: 40 },
        { field: 'SUBJECT41', headerName: '가스계', width: 40 },
        { field: 'SUBJECT42', headerName: '재평1', width: 40 },
        { field: 'SUBJECT43', headerName: '재평2', width: 40 },
        { field: 'SUBJECT51', headerName: '경보', width: 40 },
        { field: 'SUBJECT52', headerName: '재평1', width: 40 },
        { field: 'SUBJECT53', headerName: '재평2', width: 40 },
        { field: 'SUBJECT61', headerName: '응급', width: 40 },
        { field: 'SUBJECT62', headerName: '재평1', width: 40 },
        { field: 'SUBJECT63', headerName: '재평2', width: 40 },
        { field: 'SUBJECT71', headerName: '제연', width: 40 },
        { field: 'SUBJECT72', headerName: '재평1', width: 40 },
        { field: 'SUBJECT73', headerName: '재평2', width: 40 },
    ];
    const columns_gdNewExcel = [
        { field: 'id', headerName: '순번', width: 53, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'EAPJUBSUNONAME', headerName: '수강번호-성명', width: 113 },
        { field: 'EAPANSWER1', headerName: '답안1', width: 80 },
        { field: 'EAPANSWER2', headerName: '답안2', width: 80 },
        { field: 'EAPANSWER3', headerName: '답안3', width: 80 },
        { field: 'EAPANSWER4', headerName: '답안4', width: 80 },
        { field: 'EAPANSWER5', headerName: '답안5', width: 80 },
        { field: 'EAPANSWER6', headerName: '답안6', width: 80 },
        { field: 'EAPANSWER7', headerName: '답안7', width: 80 },
        { field: 'EAPANSWER8', headerName: '답안8', width: 80 },
        { field: 'EAPANSWER9', headerName: '답안9', width: 80 },
        { field: 'EAPANSWER10', headerName: '답안10', width: 80 },
        { field: 'EAPANSWER11', headerName: '답안11', width: 80 },
        { field: 'EAPANSWER12', headerName: '답안12', width: 80 },
        { field: 'EAPANSWER13', headerName: '답안13', width: 80 },
        { field: 'EAPANSWER14', headerName: '답안14', width: 80 },
        { field: 'EAPANSWER15', headerName: '답안15', width: 80 },
        { field: 'EAPANSWER16', headerName: '답안16', width: 80 },
        { field: 'EAPANSWER17', headerName: '답안17', width: 80 },
        { field: 'EAPANSWER18', headerName: '답안18', width: 80 },
        { field: 'EAPANSWER19', headerName: '답안19', width: 80 },
        { field: 'EAPANSWER20', headerName: '답안20', width: 80 },
        { field: 'EAPANSWER21', headerName: '답안21', width: 80 },
        { field: 'EAPANSWER22', headerName: '답안22', width: 80 },
        { field: 'EAPANSWER23', headerName: '답안23', width: 80 },
        { field: 'EAPANSWER24', headerName: '답안24', width: 80 },
        { field: 'EAPANSWER25', headerName: '답안25', width: 80 },
        { field: 'EAPANSWER26', headerName: '답안26', width: 80 },
        { field: 'EAPANSWER27', headerName: '답안27', width: 80 },
        { field: 'EAPANSWER28', headerName: '답안28', width: 80 },
        { field: 'EAPANSWER29', headerName: '답안29', width: 80 },
        { field: 'EAPANSWER30', headerName: '답안30', width: 80 },
        { field: 'EAPANSWER31', headerName: '답안31', width: 80 },
        { field: 'EAPANSWER32', headerName: '답안32', width: 80 },
        { field: 'EAPANSWER33', headerName: '답안33', width: 80 },
        { field: 'EAPANSWER34', headerName: '답안34', width: 80 },
        { field: 'EAPANSWER35', headerName: '답안35', width: 80 },
        { field: 'EAPANSWER36', headerName: '답안36', width: 80 },
        { field: 'EAPANSWER37', headerName: '답안37', width: 80 },
        { field: 'EAPANSWER38', headerName: '답안38', width: 80 },
        { field: 'EAPANSWER39', headerName: '답안39', width: 80 },
        { field: 'EAPANSWER40', headerName: '답안40', width: 80 },
        { field: 'EAPANSWER41', headerName: '답안41', width: 80 },
        { field: 'EAPANSWER42', headerName: '답안42', width: 80 },
        { field: 'EAPANSWER43', headerName: '답안43', width: 80 },
        { field: 'EAPANSWER44', headerName: '답안44', width: 80 },
        { field: 'EAPANSWER45', headerName: '답안45', width: 80 },
        { field: 'EAPANSWER46', headerName: '답안46', width: 80 },
        { field: 'EAPANSWER47', headerName: '답안47', width: 80 },
        { field: 'EAPANSWER48', headerName: '답안48', width: 80 },
        { field: 'EAPANSWER49', headerName: '답안49', width: 80 },
        { field: 'EAPANSWER50', headerName: '답안50', width: 80 },
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
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0144MTrainingEvaluationAnswerInputData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
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
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>과정</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0144MTrainingEvaluationAnswerInputData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회차</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>평가구분</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained">① 답안엑셀등록</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">② 채점</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>평가응시건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={4}><Box>※ 회차를 먼저 조회하신 후 엑셀답안을 등록하세요!</Box></Grid><Grid item xs={12} md={2}><Button variant="contained"></Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioEvaluationAnswerInput} columns={columns_gdEvalList} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0144MTrainingEvaluationAnswerInput;

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