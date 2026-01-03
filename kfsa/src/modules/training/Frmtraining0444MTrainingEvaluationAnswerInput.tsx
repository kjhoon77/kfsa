// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0444MTrainingEvaluationAnswerInput } from './useFrmtraining0444MTrainingEvaluationAnswerInput';
import * as Frmtraining0444MTrainingEvaluationAnswerInputData from './Frmtraining0444MTrainingEvaluationAnswerInputData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining0444MTrainingEvaluationAnswerInput = () => {
    const hook = useFrmtraining0444MTrainingEvaluationAnswerInput();
    const columns_gdExcel = [
        { field: 'id', headerName: '순번', width: 53, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'EEAPJUBSUNONAME', headerName: '수강번호-성명', width: 113 },
        { field: 'EEAPITEMNO1', headerName: '문항1', width: 80 },
        { field: 'EEAPANSWER1', headerName: '답안1', width: 80 },
        { field: 'EEAPITEMNO2', headerName: '문항2', width: 80 },
        { field: 'EEAPANSWER2', headerName: '답안2', width: 80 },
        { field: 'EEAPITEMNO3', headerName: '문항3', width: 80 },
        { field: 'EEAPANSWER3', headerName: '답안3', width: 80 },
        { field: 'EEAPITEMNO4', headerName: '문항4', width: 80 },
        { field: 'EEAPANSWER4', headerName: '답안4', width: 80 },
        { field: 'EEAPITEMNO5', headerName: '문항5', width: 80 },
        { field: 'EEAPANSWER5', headerName: '답안5', width: 80 },
        { field: 'EEAPITEMNO6', headerName: '문항6', width: 80 },
        { field: 'EEAPANSWER6', headerName: '답안6', width: 80 },
        { field: 'EEAPITEMNO7', headerName: '문항7', width: 80 },
        { field: 'EEAPANSWER7', headerName: '답안7', width: 80 },
        { field: 'EEAPITEMNO8', headerName: '문항8', width: 80 },
        { field: 'EEAPANSWER8', headerName: '답안8', width: 80 },
        { field: 'EEAPITEMNO9', headerName: '문항9', width: 80 },
        { field: 'EEAPANSWER9', headerName: '답안9', width: 80 },
        { field: 'EEAPITEMNO10', headerName: '문항10', width: 80 },
        { field: 'EEAPANSWER10', headerName: '답안10', width: 80 },
        { field: 'EEAPITEMNO11', headerName: '문항11', width: 80 },
        { field: 'EEAPANSWER11', headerName: '답안11', width: 80 },
        { field: 'EEAPITEMNO12', headerName: '문항12', width: 80 },
        { field: 'EEAPANSWER12', headerName: '답안12', width: 80 },
        { field: 'EEAPITEMNO13', headerName: '문항13', width: 80 },
        { field: 'EEAPANSWER13', headerName: '답안13', width: 80 },
        { field: 'EEAPITEMNO14', headerName: '문항14', width: 80 },
        { field: 'EEAPANSWER14', headerName: '답안14', width: 80 },
        { field: 'EEAPITEMNO15', headerName: '문항15', width: 80 },
        { field: 'EEAPANSWER15', headerName: '답안15', width: 80 },
        { field: 'EEAPITEMNO16', headerName: '문항16', width: 80 },
        { field: 'EEAPANSWER16', headerName: '답안16', width: 80 },
        { field: 'EEAPITEMNO17', headerName: '문항17', width: 80 },
        { field: 'EEAPANSWER17', headerName: '답안17', width: 80 },
        { field: 'EEAPITEMNO18', headerName: '문항18', width: 80 },
        { field: 'EEAPANSWER18', headerName: '답안18', width: 80 },
        { field: 'EEAPITEMNO19', headerName: '문항19', width: 80 },
        { field: 'EEAPANSWER19', headerName: '답안19', width: 80 },
        { field: 'EEAPITEMNO20', headerName: '문항20', width: 80 },
        { field: 'EEAPANSWER20', headerName: '답안20', width: 80 },
        { field: 'EEAPITEMNO21', headerName: '문항21', width: 80 },
        { field: 'EEAPANSWER21', headerName: '답안21', width: 80 },
        { field: 'EEAPITEMNO22', headerName: '문항22', width: 80 },
        { field: 'EEAPANSWER22', headerName: '답안22', width: 80 },
        { field: 'EEAPITEMNO23', headerName: '문항23', width: 80 },
        { field: 'EEAPANSWER23', headerName: '답안23', width: 80 },
        { field: 'EEAPITEMNO24', headerName: '문항24', width: 80 },
        { field: 'EEAPANSWER24', headerName: '답안24', width: 80 },
        { field: 'EEAPITEMNO25', headerName: '문항25', width: 80 },
        { field: 'EEAPANSWER25', headerName: '답안25', width: 80 },
        { field: 'EEAPITEMNO26', headerName: '문항26', width: 80 },
        { field: 'EEAPANSWER26', headerName: '답안26', width: 80 },
        { field: 'EEAPITEMNO27', headerName: '문항27', width: 80 },
        { field: 'EEAPANSWER27', headerName: '답안27', width: 80 },
        { field: 'EEAPITEMNO28', headerName: '문항28', width: 80 },
        { field: 'EEAPANSWER28', headerName: '답안28', width: 80 },
        { field: 'EEAPITEMNO29', headerName: '문항29', width: 80 },
        { field: 'EEAPANSWER29', headerName: '답안29', width: 80 },
        { field: 'EEAPITEMNO30', headerName: '문항30', width: 80 },
        { field: 'EEAPANSWER30', headerName: '답안30', width: 80 },
        { field: 'EEAPITEMNO31', headerName: '문항31', width: 80 },
        { field: 'EEAPANSWER31', headerName: '답안31', width: 80 },
        { field: 'EEAPITEMNO32', headerName: '문항32', width: 80 },
        { field: 'EEAPANSWER32', headerName: '답안32', width: 80 },
        { field: 'EEAPITEMNO33', headerName: '문항33', width: 80 },
        { field: 'EEAPANSWER33', headerName: '답안33', width: 80 },
        { field: 'EEAPITEMNO34', headerName: '문항34', width: 80 },
        { field: 'EEAPANSWER34', headerName: '답안34', width: 80 },
        { field: 'EEAPITEMNO35', headerName: '문항35', width: 80 },
        { field: 'EEAPANSWER35', headerName: '답안35', width: 80 },
        { field: 'EEAPITEMNO36', headerName: '문항36', width: 80 },
        { field: 'EEAPANSWER36', headerName: '답안36', width: 80 },
        { field: 'EEAPITEMNO37', headerName: '문항37', width: 80 },
        { field: 'EEAPANSWER37', headerName: '답안37', width: 80 },
        { field: 'EEAPITEMNO38', headerName: '문항38', width: 80 },
        { field: 'EEAPANSWER38', headerName: '답안38', width: 80 },
        { field: 'EEAPITEMNO39', headerName: '문항39', width: 80 },
        { field: 'EEAPANSWER39', headerName: '답안39', width: 80 },
        { field: 'EEAPITEMNO40', headerName: '문항40', width: 80 },
        { field: 'EEAPANSWER40', headerName: '답안40', width: 80 },
        { field: 'EEAPITEMNO41', headerName: '문항41', width: 80 },
        { field: 'EEAPANSWER41', headerName: '답안41', width: 80 },
        { field: 'EEAPITEMNO42', headerName: '문항42', width: 80 },
        { field: 'EEAPANSWER42', headerName: '답안42', width: 80 },
        { field: 'EEAPITEMNO43', headerName: '문항43', width: 80 },
        { field: 'EEAPANSWER43', headerName: '답안43', width: 80 },
        { field: 'EEAPITEMNO44', headerName: '문항44', width: 80 },
        { field: 'EEAPANSWER44', headerName: '답안44', width: 80 },
        { field: 'EEAPITEMNO45', headerName: '문항45', width: 80 },
        { field: 'EEAPANSWER45', headerName: '답안45', width: 80 },
        { field: 'EEAPITEMNO46', headerName: '문항46', width: 80 },
        { field: 'EEAPANSWER46', headerName: '답안46', width: 80 },
        { field: 'EEAPITEMNO47', headerName: '문항47', width: 80 },
        { field: 'EEAPANSWER47', headerName: '답안47', width: 80 },
        { field: 'EEAPITEMNO48', headerName: '문항48', width: 80 },
        { field: 'EEAPANSWER48', headerName: '답안48', width: 80 },
        { field: 'EEAPITEMNO49', headerName: '문항49', width: 80 },
        { field: 'EEAPANSWER49', headerName: '답안49', width: 80 },
        { field: 'EEAPITEMNO50', headerName: '문항50', width: 80 },
        { field: 'EEAPANSWER50', headerName: '답안50', width: 80 },
    ];
    const columns_gdEvalList = [
        { field: 'GTDEPTNM', headerName: '지부', width: 50 },
        { field: 'TCCOURSENICK', headerName: '과정', width: 55 },
        { field: 'ORDERJUBSUNO', headerName: '수강번호', width: 60 },
        { field: 'EJPERSONNM', headerName: '성명', width: 70 },
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
        { field: 'EEAPJUBSUNONAME', headerName: '수강번호-성명', width: 113 },
        { field: 'EEAPANSWER1', headerName: '답안1', width: 80 },
        { field: 'EEAPANSWER2', headerName: '답안2', width: 80 },
        { field: 'EEAPANSWER3', headerName: '답안3', width: 80 },
        { field: 'EEAPANSWER4', headerName: '답안4', width: 80 },
        { field: 'EEAPANSWER5', headerName: '답안5', width: 80 },
        { field: 'EEAPANSWER6', headerName: '답안6', width: 80 },
        { field: 'EEAPANSWER7', headerName: '답안7', width: 80 },
        { field: 'EEAPANSWER8', headerName: '답안8', width: 80 },
        { field: 'EEAPANSWER9', headerName: '답안9', width: 80 },
        { field: 'EEAPANSWER10', headerName: '답안10', width: 80 },
        { field: 'EEAPANSWER11', headerName: '답안11', width: 80 },
        { field: 'EEAPANSWER12', headerName: '답안12', width: 80 },
        { field: 'EEAPANSWER13', headerName: '답안13', width: 80 },
        { field: 'EEAPANSWER14', headerName: '답안14', width: 80 },
        { field: 'EEAPANSWER15', headerName: '답안15', width: 80 },
        { field: 'EEAPANSWER16', headerName: '답안16', width: 80 },
        { field: 'EEAPANSWER17', headerName: '답안17', width: 80 },
        { field: 'EEAPANSWER18', headerName: '답안18', width: 80 },
        { field: 'EEAPANSWER19', headerName: '답안19', width: 80 },
        { field: 'EEAPANSWER20', headerName: '답안20', width: 80 },
        { field: 'EEAPANSWER21', headerName: '답안21', width: 80 },
        { field: 'EEAPANSWER22', headerName: '답안22', width: 80 },
        { field: 'EEAPANSWER23', headerName: '답안23', width: 80 },
        { field: 'EEAPANSWER24', headerName: '답안24', width: 80 },
        { field: 'EEAPANSWER25', headerName: '답안25', width: 80 },
        { field: 'EEAPANSWER26', headerName: '답안26', width: 80 },
        { field: 'EEAPANSWER27', headerName: '답안27', width: 80 },
        { field: 'EEAPANSWER28', headerName: '답안28', width: 80 },
        { field: 'EEAPANSWER29', headerName: '답안29', width: 80 },
        { field: 'EEAPANSWER30', headerName: '답안30', width: 80 },
        { field: 'EEAPANSWER31', headerName: '답안31', width: 80 },
        { field: 'EEAPANSWER32', headerName: '답안32', width: 80 },
        { field: 'EEAPANSWER33', headerName: '답안33', width: 80 },
        { field: 'EEAPANSWER34', headerName: '답안34', width: 80 },
        { field: 'EEAPANSWER35', headerName: '답안35', width: 80 },
        { field: 'EEAPANSWER36', headerName: '답안36', width: 80 },
        { field: 'EEAPANSWER37', headerName: '답안37', width: 80 },
        { field: 'EEAPANSWER38', headerName: '답안38', width: 80 },
        { field: 'EEAPANSWER39', headerName: '답안39', width: 80 },
        { field: 'EEAPANSWER40', headerName: '답안40', width: 80 },
        { field: 'EEAPANSWER41', headerName: '답안41', width: 80 },
        { field: 'EEAPANSWER42', headerName: '답안42', width: 80 },
        { field: 'EEAPANSWER43', headerName: '답안43', width: 80 },
        { field: 'EEAPANSWER44', headerName: '답안44', width: 80 },
        { field: 'EEAPANSWER45', headerName: '답안45', width: 80 },
        { field: 'EEAPANSWER46', headerName: '답안46', width: 80 },
        { field: 'EEAPANSWER47', headerName: '답안47', width: 80 },
        { field: 'EEAPANSWER48', headerName: '답안48', width: 80 },
        { field: 'EEAPANSWER49', headerName: '답안49', width: 80 },
        { field: 'EEAPANSWER50', headerName: '답안50', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Init}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_localExcel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Delete}>삭제 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdExcel ? undefined : 'none' }}><Paper sx={{ width: '16px', height: '50px', width: '100%', height: 'auto', minHeight: '50px' }}><DataGridWrapper rows={hook.ds_ioExcel} columns={columns_gdExcel} /></Paper></Box><Box sx={{ display: hook.isVisible_gdNewExcel ? undefined : 'none' }}><Paper sx={{ width: '16px', height: '50px', width: '100%', height: 'auto', minHeight: '50px' }}><DataGridWrapper rows={hook.ds_ioNewExcel} columns={columns_gdNewExcel} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '184px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0444MTrainingEvaluationAnswerInputData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년도</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '279px', height: '22px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>과정</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0444MTrainingEvaluationAnswerInputData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '112px', height: '22px', display: 'flex', alignItems: 'center', ml: '18px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회차</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "16px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '24px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>평가구분</Typography>
                    <FormControl component="fieldset"><RadioGroup row >{ (Frmtraining0444MTrainingEvaluationAnswerInputData.ds_ds_oEvalGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_btnSave ? undefined : 'none' }}><Button variant="contained"  onClick={hook.lfn_Save} sx={{ width: '145px', height: '24px' }}>① 답안엑셀등록</Button></Box><Box sx={{ display: hook.isVisible_btnMarking ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnMarking_OnClick} sx={{ width: '145px', height: '24px' }}>② 채점</Button></Box><Box sx={{ display: hook.isVisible_progMarkingCheck ? undefined : 'none' }}><Box sx={{ width: '156px', height: '22px', border: '1px dashed grey' }}>Unknown: Progressbar</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '151px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>평가응시건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '382px', height: '22px' }}><Typography variant="body2">※ 회차를 먼저 조회하신 후 엑셀답안을 등록하세요!</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px' }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdEvalList ? undefined : 'none' }}><Paper sx={{ width: '941px', height: '506px', width: '100%', height: 'auto', minHeight: '506px' }}><DataGridWrapper rows={hook.ds_ioEvaluationAnswerInput} columns={columns_gdEvalList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0444MTrainingEvaluationAnswerInput;

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