// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmitem0005PEduScheduleList } from './useFrmitem0005PEduScheduleList';
import * as Frmitem0005PEduScheduleListData from './Frmitem0005PEduScheduleListData';

export const Frmitem0005PEduScheduleList = () => {
    const hook = useFrmitem0005PEduScheduleList();
    const columns_gdEduSchedule = [
        { field: 'ESGTMGNO', headerName: '지부', width: 60 },
        { field: 'ESYEAR', headerName: '년도', width: 40 },
        { field: 'ESCOUSECD', headerName: '직능', width: 110 },
        { field: 'ESDATE', headerName: '교육일자', width: 80 },
        { field: 'edutime', headerName: '교육시간', width: 100 },
        { field: 'ESGUBUN', headerName: '교육구분', width: 70 },
        { field: 'ESSTUDENT', headerName: '교육대상', width: 90 },
        { field: 'ESSUBJECTGUBUN', headerName: '교육과정', width: 70 },
        { field: 'ESSEATCNT', headerName: '좌석수', width: 50 },
        { field: 'ESACCESSCNT', headerName: '접수자수', width: 60 },
        { field: 'ESINETJUBSUCNT', headerName: '인터넷접수가능수', width: 120 },
        { field: 'EPNM', headerName: '교육장소', width: 300 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnSelect_OnClick}>선택</Button>
<Button variant="contained"  onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
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
                        <DataGridWrapper rows={hook.ds_oEduSchedule} columns={columns_gdEduSchedule} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmitem0005PEduScheduleList;

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