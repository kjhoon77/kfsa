// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0630MExamMarkingResultSend } from './useFrmtraining0630MExamMarkingResultSend';
import * as Frmtraining0630MExamMarkingResultSendData from './Frmtraining0630MExamMarkingResultSendData';

export const Frmtraining0630MExamMarkingResultSend = () => {
    const hook = useFrmtraining0630MExamMarkingResultSend();
    const columns_gdExam = [
        { field: 'EXAMNM', headerName: 'EXAMNM', width: 330 },
        { field: 'EOEXAMDATE', headerName: 'EOEXAMDATE', width: 0 },
        { field: 'TCCOURSECD', headerName: 'TCCOURSECD', width: 0 },
    ];
    const columns_gdServerSendH = [
        { field: 'SEL', headerName: 'SEL', width: 29 },
        { field: 'SSHREPEATNO', headerName: '평가차수', width: 67 },
        { field: 'SSHSENDYN', headerName: '전송여부', width: 67 },
        { field: 'JUBSUCNT', headerName: '접수인원', width: 67 },
        { field: 'EXAMCNT', headerName: '응시인원', width: 67 },
        { field: 'MARKCNT', headerName: '채점인원', width: 67 },
        { field: 'SENDCNT', headerName: '전송인원', width: 67 },
    ];
    const columns_gdServerSendOmr = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Save}>결과전송(데이터&답안지)</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>결과데이터
전송</Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioServerSendH} columns={columns_gdServerSendH} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>답안지 전송</Box></Grid><Grid item xs={12} md={6}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioInsertOmrFile} columns={columns_gdServerSendOmr} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0630MExamMarkingResultSend;

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