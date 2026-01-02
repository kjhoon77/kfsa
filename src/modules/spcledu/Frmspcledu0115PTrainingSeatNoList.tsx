// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu0115PTrainingSeatNoList } from './useFrmspcledu0115PTrainingSeatNoList';
import * as Frmspcledu0115PTrainingSeatNoListData from './Frmspcledu0115PTrainingSeatNoListData';

export const Frmspcledu0115PTrainingSeatNoList = () => {
    const hook = useFrmspcledu0115PTrainingSeatNoList();
    const columns_gdTrainingSeatNo = [
        { field: 'SEATNO', headerName: '좌석번호', width: 70 },
        { field: 'GTDEPTNM', headerName: '지부', width: 60 },
        { field: 'TOYEAR', headerName: '년도', width: 40 },
        { field: 'TOTRAININGORDER', headerName: '회차', width: 50 },
        { field: 'TCCOURSENM', headerName: '직능', width: 120 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 70 },
        { field: 'TJPERSONNM', headerName: '성명', width: 70 },
        { field: 'TJRESIDENTNO', headerName: '주민번호', width: 110 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oTrainingSeatNo} columns={columns_gdTrainingSeatNo} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu0115PTrainingSeatNoList;

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