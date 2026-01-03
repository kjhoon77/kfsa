// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0660MExamScoreStatistics } from './useFrmtraining0660MExamScoreStatistics';
import * as Frmtraining0660MExamScoreStatisticsData from './Frmtraining0660MExamScoreStatisticsData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining0660MExamScoreStatistics = () => {
    const hook = useFrmtraining0660MExamScoreStatistics();
    const columns_grdExport = [
        { field: 'AACAEPNUMTYPE', headerName: '종별', width: 86 },
        { field: 'AACAEPALPHATYPE', headerName: '유형', width: 86 },
        { field: 'AACAITEMNO', headerName: '문항번호', width: 86 },
        { field: 'AAMARKINGCNT', headerName: '응시자수', width: 86 },
        { field: 'AACORRECTCNT', headerName: '정답자수', width: 86 },
    ];
    const columns_grdOrderExport = [
        { field: 'GTTEAMNM', headerName: '지부', width: 118 },
        { field: 'TCCOURSENM', headerName: '과정', width: 119 },
        { field: 'EOEXAMORDER', headerName: '회차', width: 63 },
        { field: 'EOEXAMDATE', headerName: '시험일자', width: 99 },
        { field: 'JUBSUNUM_TOTAL', headerName: '접수자수', width: 70 },
        { field: 'APPLYING_TOTAL', headerName: '응시자수', width: 70 },
        { field: 'PASSNUM_TOTAL', headerName: '합격자수', width: 70 },
        { field: 'FAILNUM_TOTAL', headerName: '불합격자수', width: 80 },
        { field: 'NOAPPLYING_TOTAL', headerName: '미응시자수', width: 80 },
        { field: 'ALLAVG', headerName: '전체평균', width: 70 },
        { field: 'PASSAVG', headerName: '합격자평균', width: 80 },
        { field: 'PASSPER', headerName: '합격률', width: 70 },
    ];
    const columns_grdScoreExport = [
        { field: 'id', headerName: '연번', width: 46, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTDEPTNM', headerName: '지부', width: 67 },
        { field: 'TCCOURSENICK', headerName: '과정', width: 103 },
        { field: 'EOEXAMDATE', headerName: '시험일자', width: 99 },
        { field: 'NUMTYPE', headerName: '종별', width: 63 },
        { field: 'EOEXAMORDER', headerName: '시험회차', width: 68 },
        { field: 'ERAPLEXAMNO', headerName: '응시번호', width: 82 },
        { field: 'EJPERSONNMSTAR', headerName: '성명', width: 84 },
        { field: 'BIRTHDAY6', headerName: '생년월일', width: 77 },
        { field: 'SEX', headerName: '성별', width: 40 },
        { field: 'ER1CHASU1SUBJECTSCORE', headerName: '1과목점수', width: 70 },
        { field: 'ER1CHASU2SUBJECTSCORE', headerName: '2과목점수', width: 70 },
        { field: 'ERSCORE', headerName: '평균점수', width: 70 },
        { field: 'PASSYN', headerName: '판정', width: 70 },
    ];
    const columns_Grid0 = [
        { field: 'GTTEAMNM', headerName: '지부', width: 118 },
        { field: 'TCCOURSENM', headerName: '과정', width: 119 },
        { field: 'EOEXAMORDER', headerName: '회차', width: 63 },
        { field: 'EOEXAMDATE', headerName: '시험일자', width: 99 },
        { field: 'NUMTYPE', headerName: '종별', width: 99 },
        { field: 'JUBSUNUM_TOTAL', headerName: '접수자수', width: 70 },
        { field: 'JUBSUNUM', headerName: '강습수료', width: 70 },
        { field: 'JUBSUNUM_K', headerName: '경력 등', width: 70 },
        { field: 'APPLYING_TOTAL', headerName: '응시자수', width: 70 },
        { field: 'APPLYING', headerName: '강습수료', width: 70 },
        { field: 'APPLYING_K', headerName: '경력 등', width: 70 },
        { field: 'PASSNUM_TOTAL', headerName: '합격자수', width: 70 },
        { field: 'PASSNUM', headerName: '강습수료', width: 70 },
        { field: 'PASSNUM_K', headerName: '경력 등', width: 70 },
        { field: 'FAILNUM_TOTAL', headerName: '불합격자수', width: 80 },
        { field: 'FAILNUM', headerName: '강습수료', width: 80 },
        { field: 'FAILNUM_K', headerName: '경력 등', width: 80 },
        { field: 'NOAPPLYING_TOTAL', headerName: '미응시자수', width: 80 },
        { field: 'NOAPPLYING', headerName: '강습수료', width: 80 },
        { field: 'NOAPPLYING_K', headerName: '경력 등', width: 80 },
        { field: 'PASSPER_TOTAL', headerName: '합격률', width: 70 },
        { field: 'PASSPER', headerName: '강습수료', width: 70 },
        { field: 'PASSPER_K', headerName: '경력 등', width: 70 },
        { field: 'ALLAVG', headerName: '전체평균', width: 70 },
        { field: 'PASSAVG', headerName: '합격자평균', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radSearchGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '76px', height: '42px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0660MExamScoreStatisticsData.ds_ds_oSearchGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회차</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '44px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '160px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>종별</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0660MExamScoreStatisticsData.ds_ds_oExamNumberType || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '190px', height: '22px', display: 'flex', alignItems: 'center', ml: '84px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>시험일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '114px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '181px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>평가차수</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0660MExamScoreStatisticsData.ds_ds_oExamRepeat || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbGubun ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">구분</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radPrintGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '704px', height: '92px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0660MExamScoreStatisticsData.ds_ds_oPrintGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "28px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdScoreExport ? undefined : 'none' }}><Paper sx={{ width: '716px', height: '98px', width: '100%', height: 'auto', minHeight: '98px' }}><DataGridWrapper rows={hook.ds_oExamScoreOrderNo} columns={columns_grdScoreExport} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdOrderExport ? undefined : 'none' }}><Paper sx={{ width: '716px', height: '98px', width: '100%', height: 'auto', minHeight: '98px' }}><DataGridWrapper rows={hook.ds_oExamOrderScoreStat} columns={columns_grdOrderExport} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport ? undefined : 'none' }}><Paper sx={{ width: '716px', height: '98px', width: '100%', height: 'auto', minHeight: '98px' }}><DataGridWrapper rows={hook.ds_oExamQuestionItemCorrectAnswer} columns={columns_grdExport} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid0 ? undefined : 'none' }}><Paper sx={{ width: '1408px', height: '226px', width: '100%', height: 'auto', minHeight: '226px' }}><DataGridWrapper rows={hook.ds_oExamOrderScoreStat} columns={columns_Grid0} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0660MExamScoreStatistics;

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