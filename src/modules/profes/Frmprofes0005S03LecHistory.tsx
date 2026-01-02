// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0005S03LecHistory } from './useFrmprofes0005S03LecHistory';
import * as Frmprofes0005S03LecHistoryData from './Frmprofes0005S03LecHistoryData';

export const Frmprofes0005S03LecHistory = () => {
    const hook = useFrmprofes0005S03LecHistory();
    const columns_gdProfesAssign = [
        { field: 'LTEDUDAYS', headerName: '일차', width: 35 },
        { field: 'TSTIME', headerName: '교시', width: 52 },
        { field: 'PSTITLE', headerName: '과목', width: 195 },
        { field: 'PSTN', headerName: '직책', width: 70 },
        { field: 'LPPFNM', headerName: '교수명', width: 60 },
        { field: 'LPPFJIKWINM', headerName: '직위', width: 80 },
        { field: 'LPPFGUBUN', headerName: '구분', width: 60 },
        { field: 'EDUTIME', headerName: '교육시간', width: 90 },
        { field: 'EDUTEAMNM', headerName: '지부명', width: 60 },
        { field: 'LPSPEAKERPAY', headerName: '강사료', width: 60 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.btnSave_OnClick}>저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioProfesAssign} columns={columns_gdProfesAssign} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0005S03LecHistory;

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