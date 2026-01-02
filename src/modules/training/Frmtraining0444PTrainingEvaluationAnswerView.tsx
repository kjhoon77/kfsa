// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0444PTrainingEvaluationAnswerView } from './useFrmtraining0444PTrainingEvaluationAnswerView';
import * as Frmtraining0444PTrainingEvaluationAnswerViewData from './Frmtraining0444PTrainingEvaluationAnswerViewData';

export const Frmtraining0444PTrainingEvaluationAnswerView = () => {
    const hook = useFrmtraining0444PTrainingEvaluationAnswerView();
    const columns_gdEvaluation = [
        { field: 'EEAPRITEMNO', headerName: '문항', width: 45 },
        { field: 'A11', headerName: '과목1', width: 40 },
        { field: 'A12', headerName: '재평1', width: 40 },
        { field: 'A13', headerName: '재평2', width: 40 },
        { field: 'A21', headerName: '과목2', width: 40 },
        { field: 'A22', headerName: '재평1', width: 40 },
        { field: 'A23', headerName: '재평2', width: 40 },
        { field: 'A31', headerName: '과목3', width: 40 },
        { field: 'A32', headerName: '재평1', width: 40 },
        { field: 'A33', headerName: '재평2', width: 40 },
        { field: 'A41', headerName: '과목4', width: 40 },
        { field: 'A42', headerName: '재평1', width: 40 },
        { field: 'A43', headerName: '재평2', width: 40 },
        { field: 'A51', headerName: '과목5', width: 40 },
        { field: 'A52', headerName: '재평1', width: 40 },
        { field: 'A53', headerName: '재평2', width: 40 },
        { field: 'A61', headerName: '과목6', width: 40 },
        { field: 'A62', headerName: '재평1', width: 40 },
        { field: 'A63', headerName: '재평2', width: 40 },
        { field: 'A71', headerName: '과목7', width: 40 },
        { field: 'A72', headerName: '재평1', width: 40 },
        { field: 'A73', headerName: '재평2', width: 40 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oEvaluationAnswer} columns={columns_gdEvaluation} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0444PTrainingEvaluationAnswerView;

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