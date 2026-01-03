// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining1051PInternetTrainingRepayBatchProcResult } from './useFrmtraining1051PInternetTrainingRepayBatchProcResult';
import * as Frmtraining1051PInternetTrainingRepayBatchProcResultData from './Frmtraining1051PInternetTrainingRepayBatchProcResultData';

export const Frmtraining1051PInternetTrainingRepayBatchProcResult = () => {
    const hook = useFrmtraining1051PInternetTrainingRepayBatchProcResult();
    const columns_gdRepayResult = [
        { field: 'CHK', headerName: '처리결과', width: 80 },
        { field: 'EOMGGTMGNO', headerName: '지부', width: 80 },
        { field: 'EOYEAR', headerName: '년도', width: 60 },
        { field: 'EOTCCOURSECD', headerName: '직능', width: 130 },
        { field: 'EOEXAMORDER', headerName: '회차', width: 60 },
        { field: 'EOHJUBSUNO', headerName: '접수번호', width: 80 },
        { field: 'EJPERSONNM', headerName: '성명', width: 80 },
        { field: 'PMAMT', headerName: '환불금액', width: 80 },
        { field: 'PPABANKNM', headerName: '입금은행', width: 80 },
        { field: 'PPACCOUNT', headerName: '계좌번호', width: 130 },
        { field: 'PPAOWNER', headerName: '예금주', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdRepayResult ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '382px', width: '100%', height: 'auto', minHeight: '382px' }}><DataGridWrapper rows={hook.ds_iBatchPorcResult} columns={columns_gdRepayResult} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining1051PInternetTrainingRepayBatchProcResult;

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