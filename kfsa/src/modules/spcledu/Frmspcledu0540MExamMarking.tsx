// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu0540MExamMarking } from './useFrmspcledu0540MExamMarking';
import * as Frmspcledu0540MExamMarkingData from './Frmspcledu0540MExamMarkingData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmspcledu0540MExamMarking = () => {
    const hook = useFrmspcledu0540MExamMarking();
    const columns_gdExam = [
        { field: 'EXAMNM', headerName: 'EXAMNM', width: 330 },
        { field: 'EOEXAMDATE', headerName: 'EOEXAMDATE', width: 0 },
        { field: 'TCCOURSECD', headerName: 'TCCOURSECD', width: 0 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnExcuteMark_OnClick}>채점</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnNext_OnClick}>다음 ▶</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "38px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdExam ? undefined : 'none' }}><Paper sx={{ width: '548px', height: '122px', width: '100%', height: 'auto', minHeight: '122px' }}><DataGridWrapper rows={hook.ds_oExamOrder} columns={columns_gdExam} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbTextBlue ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '267px', height: '22px' }}><Typography variant="body2">※ 선택에 상관없이 모든 회차가 채점 됩니다.</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbProgress ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">진행사항</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbMarkingCheck ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">채점</Typography></Box></Box><Box sx={{ display: hook.isVisible_progMarkingCheck ? undefined : 'none' }}><Box sx={{ width: '180px', height: '22px', border: '1px dashed grey' }}>Unknown: Progressbar</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbAnswerAnalysis ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">문항분석</Typography></Box></Box><Box sx={{ display: hook.isVisible_progAnswerAnalysis ? undefined : 'none' }}><Box sx={{ width: '180px', height: '22px', border: '1px dashed grey' }}>Unknown: Progressbar</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbExamResult ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">결과생성</Typography></Box></Box><Box sx={{ display: hook.isVisible_progExamResult ? undefined : 'none' }}><Box sx={{ width: '180px', height: '22px', border: '1px dashed grey' }}>Unknown: Progressbar</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "1069px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '40px', height: '15px' }}><Typography variant="body2">정답지</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "75px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '40px', height: '15px' }}><Typography variant="body2">답안지</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "75px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '60px', height: '15px' }}><Typography variant="body2">시험결과</Typography></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu0540MExamMarking;

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