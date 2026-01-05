// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu1041PInternetTrainingRepayBatchProcResult } from './useFrmspcledu1041PInternetTrainingRepayBatchProcResult';
import * as Frmspcledu1041PInternetTrainingRepayBatchProcResultData from './Frmspcledu1041PInternetTrainingRepayBatchProcResultData';

export const Frmspcledu1041PInternetTrainingRepayBatchProcResult = () => {
    const hook = useFrmspcledu1041PInternetTrainingRepayBatchProcResult();
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
                <Typography variant="h5">인터넷강습환불일괄처리 결과팝업</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdRepayResult ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '382px', width: '100%', height: 'auto', minHeight: '382px' }}><DataGridWrapper rows={hook.ds_iBatchPorcResult} columns={columns_gdRepayResult} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu1041PInternetTrainingRepayBatchProcResult;

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