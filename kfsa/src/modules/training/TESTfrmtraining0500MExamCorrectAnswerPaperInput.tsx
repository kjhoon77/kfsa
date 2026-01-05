// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useTESTfrmtraining0500MExamCorrectAnswerPaperInput } from './useTESTfrmtraining0500MExamCorrectAnswerPaperInput';
import * as TESTfrmtraining0500MExamCorrectAnswerPaperInputData from './TESTfrmtraining0500MExamCorrectAnswerPaperInputData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const TESTfrmtraining0500MExamCorrectAnswerPaperInput = () => {
    const hook = useTESTfrmtraining0500MExamCorrectAnswerPaperInput();
    const columns_gdExcel = [
        { field: 'EPCOURSECD', headerName: '과목명', width: 120 },
        { field: 'EPCOURSECD', headerName: '과목코드', width: 120 },
        { field: 'EPNUMTYPE', headerName: '종별', width: 60 },
        { field: 'EPALPHATYPE', headerName: '유형', width: 60 },
        { field: 'CAITEMNO', headerName: '문항번호', width: 60 },
        { field: 'CACORRECTANSWER', headerName: '정답', width: 60 },
        { field: 'CACORRECTCNT', headerName: '정답개수', width: 60 },
        { field: 'CAITEMSCORE', headerName: '배점', width: 60 },
        { field: 'EPCHASUGUBUN', headerName: '차수', width: 60 },
        { field: 'EPSUBJECTGUBUN', headerName: '과목', width: 60 },
    ];
    const columns_gdLoadedAnswer = [
        { field: 'TCCOURSENM', headerName: '직능', width: 120 },
        { field: 'SUBJECTGUBUN', headerName: '과목', width: 36 },
        { field: 'EPNUMTYPE', headerName: '종별', width: 36 },
        { field: 'EPALPHATYPE', headerName: '유형', width: 36 },
        { field: 'WRITEYN', headerName: '작성여부', width: 36 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">정답지관리</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Delete}>삭제 저장</Button>
<Button variant="contained"  onClick={hook.lfn_Save}>정답파일로딩(F4)</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Delete />} onClick={hook.lfn_DeleteAll}>일괄삭제(F6)</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdExcel ? undefined : 'none' }}><Paper sx={{ width: '16px', height: '50px', width: '100%', height: 'auto', minHeight: '50px' }}><DataGridWrapper rows={hook.ds_ioExcel} columns={columns_gdExcel} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdLoadedAnswer ? undefined : 'none' }}><Paper sx={{ width: '404px', height: '562px', width: '100%', height: 'auto', minHeight: '562px' }}><DataGridWrapper rows={hook.ds_ioLoadedAnswer} columns={columns_gdLoadedAnswer} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default TESTfrmtraining0500MExamCorrectAnswerPaperInput;

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