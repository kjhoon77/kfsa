// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0444MTrainingEvaluationCorrectInput } from './useFrmtraining0444MTrainingEvaluationCorrectInput';
import * as Frmtraining0444MTrainingEvaluationCorrectInputData from './Frmtraining0444MTrainingEvaluationCorrectInputData';

export const Frmtraining0444MTrainingEvaluationCorrectInput = () => {
    const hook = useFrmtraining0444MTrainingEvaluationCorrectInput();
    const columns_gdExcel = [
        { field: 'EECPTCCOURSECD', headerName: '과정', width: 90 },
        { field: 'EECPSUBJECTCD', headerName: '과목', width: 90 },
        { field: 'EECPEVALGUBUN', headerName: '평가구분', width: 90 },
        { field: 'EECPITEMNO', headerName: '문항번호', width: 90 },
        { field: 'EECPCORRECTCNT', headerName: '정답개수', width: 90 },
        { field: 'EECPITEMSCORE', headerName: '배점', width: 90 },
        { field: 'EECPCORRECTANSWER', headerName: '정답', width: 90 },
    ];
    const columns_gdLoadedCorrect = [
        { field: 'TCCOURSENM', headerName: '과정', width: 165 },
        { field: 'EESCSUBJECTNM', headerName: '과목', width: 71 },
        { field: 'EVALGUBUN', headerName: '평가구분', width: 75 },
        { field: 'WRITEYN', headerName: '작성여부', width: 72 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Delete />} onClick={hook.lfn_Delete}>삭제 저장</Button>
<Button variant="contained"  onClick={hook.lfn_Save}>정답파일로딩(F4)</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Delete />} onClick={hook.lfn_DeleteAll}>일괄삭제(F6)</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioLoadedCorrect} columns={columns_gdLoadedCorrect} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0444MTrainingEvaluationCorrectInput;

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