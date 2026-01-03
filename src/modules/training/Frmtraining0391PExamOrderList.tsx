// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0391PExamOrderList } from './useFrmtraining0391PExamOrderList';
import * as Frmtraining0391PExamOrderListData from './Frmtraining0391PExamOrderListData';

export const Frmtraining0391PExamOrderList = () => {
    const hook = useFrmtraining0391PExamOrderList();
    const columns_gdExamOrder = [
        { field: 'EOMGGTMGNO', headerName: '지부', width: 60 },
        { field: 'EOTCCOURSECD', headerName: '직능', width: 94 },
        { field: 'EOYEAR', headerName: '년도', width: 53 },
        { field: 'EOEXAMORDER', headerName: '회차', width: 43 },
        { field: 'EOEXAMDATE', headerName: '시험일자', width: 93 },
        { field: 'EOSEATCNT', headerName: '시험 정원', width: 40 },
        { field: 'EOJUBSUCNT', headerName: '접수 완료', width: 40 },
        { field: 'JUBSUPOSSIBLECNT', headerName: '내방접수 가능인원', width: 60 },
        { field: 'EOINETJUBSUCNT', headerName: 'ⓘ접수 가능수', width: 45 },
        { field: 'EOINETINGCNT', headerName: 'ⓘ접수 진행', width: 45 },
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
                        <DataGridWrapper rows={hook.ds_oExamOrder} columns={columns_gdExamOrder} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0391PExamOrderList;

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