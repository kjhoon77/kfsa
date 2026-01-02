// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0011PTrainingOrderList } from './useFrmtraining0011PTrainingOrderList';
import * as Frmtraining0011PTrainingOrderListData from './Frmtraining0011PTrainingOrderListData';

export const Frmtraining0011PTrainingOrderList = () => {
    const hook = useFrmtraining0011PTrainingOrderList();
    const columns_gdTrainingOrder = [
        { field: 'TOMGGTMGNO', headerName: '지부', width: 60 },
        { field: 'TOYEAR', headerName: '년도', width: 35 },
        { field: 'COURSEMUNJECD', headerName: '직능', width: 95 },
        { field: 'TOTRAININGORDER', headerName: '회차', width: 37 },
        { field: 'TOCOURSEGUBUNNM', headerName: '과정구분', width: 65 },
        { field: 'TOSTARTDATE', headerName: '교육시작일', width: 80 },
        { field: 'TOENDDATE', headerName: '교육종료일', width: 80 },
        { field: 'TOSEATCNT', headerName: '교육 정원', width: 36 },
        { field: 'JUBSUCNT', headerName: '접수 완료', width: 36 },
        { field: 'JUBSUPOSSIBLECNT', headerName: '내방접수 가능인원', width: 60 },
        { field: 'TOINETJUBSUCNT', headerName: 'ⓘ접수 가능수', width: 45 },
        { field: 'TOINETINGCNT', headerName: 'ⓘ접수 진행', width: 45 },
        { field: 'TOAWAITERCNT', headerName: 'ⓘ대기 정원', width: 45 },
        { field: 'TOAWAITERREGCNT', headerName: 'ⓘ대기 완료', width: 45 },
        { field: 'EPNM', headerName: '교육장소', width: 200 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnSelect_OnClick}>선택</Button>
<Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
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
                        <DataGridWrapper rows={hook.ds_oTrainingOrder} columns={columns_gdTrainingOrder} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0011PTrainingOrderList;

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