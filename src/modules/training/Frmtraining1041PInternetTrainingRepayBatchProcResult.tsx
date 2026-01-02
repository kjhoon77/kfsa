// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining1041PInternetTrainingRepayBatchProcResult } from './useFrmtraining1041PInternetTrainingRepayBatchProcResult';
import * as Frmtraining1041PInternetTrainingRepayBatchProcResultData from './Frmtraining1041PInternetTrainingRepayBatchProcResultData';

export const Frmtraining1041PInternetTrainingRepayBatchProcResult = () => {
    const hook = useFrmtraining1041PInternetTrainingRepayBatchProcResult();
    const columns_gdRepayResult = [
        { field: 'CHK', headerName: '처리결과', width: 80 },
        { field: 'TOMGGTMGNO', headerName: '지부', width: 80 },
        { field: 'TOYEAR', headerName: '년도', width: 60 },
        { field: 'TOTCCOURSECD', headerName: '직능', width: 130 },
        { field: 'TOTRAININGORDER', headerName: '회차', width: 60 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 80 },
        { field: 'TJPERSONNM', headerName: '성명', width: 80 },
        { field: 'REPAYAMT', headerName: '환불금액', width: 80 },
        { field: 'PPABANKNM', headerName: '입금은행', width: 80 },
        { field: 'PPACCOUNT', headerName: '계좌번호', width: 130 },
        { field: 'PPAOWNER', headerName: '예금주', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_iBatchPorcResult} columns={columns_gdRepayResult} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining1041PInternetTrainingRepayBatchProcResult;

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