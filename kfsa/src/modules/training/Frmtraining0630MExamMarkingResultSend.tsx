// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0630MExamMarkingResultSend } from './useFrmtraining0630MExamMarkingResultSend';
import * as Frmtraining0630MExamMarkingResultSendData from './Frmtraining0630MExamMarkingResultSendData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

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
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Save}>결과전송(데이터&답안지)</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "38px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdExam ? undefined : 'none' }}><Paper sx={{ width: '548px', height: '94px', width: '100%', height: 'auto', minHeight: '94px' }}><DataGridWrapper rows={hook.ds_ioExamList} columns={columns_gdExam} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '38px' }}><Typography variant="body2">결과데이터
전송</Typography></Box></Box><Box sx={{ display: hook.isVisible_gdServerSendH ? undefined : 'none' }}><Paper sx={{ width: '548px', height: '166px', width: '100%', height: 'auto', minHeight: '166px' }}><DataGridWrapper rows={hook.ds_ioServerSendH} columns={columns_gdServerSendH} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">답안지 전송</Typography></Box></Box><Box sx={{ display: hook.isVisible_prog_bar ? undefined : 'none' }}><Box sx={{ width: '548px', height: '24px', border: '1px dashed grey' }}>Unknown: Progressbar</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdServerSendOmr ? undefined : 'none' }}><Paper sx={{ width: '547px', height: '137px', width: '100%', height: 'auto', minHeight: '137px' }}><DataGridWrapper rows={hook.ds_ioInsertOmrFile} columns={columns_gdServerSendOmr} /></Paper></Box></Stack>

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