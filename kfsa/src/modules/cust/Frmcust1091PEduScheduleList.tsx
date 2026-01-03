// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1091PEduScheduleList } from './useFrmcust1091PEduScheduleList';
import * as Frmcust1091PEduScheduleListData from './Frmcust1091PEduScheduleListData';

export const Frmcust1091PEduScheduleList = () => {
    const hook = useFrmcust1091PEduScheduleList();
    const columns_gdEduSchedule = [
        { field: 'ESGTMGNO', headerName: '지부', width: 55 },
        { field: 'ESYEAR', headerName: '년도', width: 36 },
        { field: 'ESCOUSECD', headerName: '직능', width: 110 },
        { field: 'CYBERGUBUN', headerName: '사이버', width: 56 },
        { field: 'ESEDUORDER', headerName: '회차', width: 35 },
        { field: 'ESDATE', headerName: '교육일자', width: 113 },
        { field: 'edutime', headerName: '교육시간', width: 84 },
        { field: 'ESEDUTYPE', headerName: '교육유형', width: 76 },
        { field: 'ESSEATCNT', headerName: '좌석수', width: 50 },
        { field: 'ESINETJUBSUCNT', headerName: 'ESINETJUBSUCNT', width: 76 },
        { field: 'ESACCESSCNT', headerName: '접수자수', width: 60 },
        { field: 'ESINETOPENGUBUN', headerName: 'ESINETOPENGUBUN', width: 65 },
        { field: 'ESEDUREGION', headerName: '지역', width: 50 },
        { field: 'EPNM', headerName: '교육장소', width: 373 },
        { field: 'ESGUBUN', headerName: '교육구분', width: 65 },
        { field: 'ESSTUDENT', headerName: '교육대상', width: 80 },
        { field: 'ESSUBJECTGUBUN', headerName: '교육과정', width: 70 },
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdEduSchedule ? undefined : 'none' }}><Paper sx={{ width: '972px', height: '482px', width: '100%', height: 'auto', minHeight: '482px' }}><DataGridWrapper rows={hook.ds_oEduSchedule} columns={columns_gdEduSchedule} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1091PEduScheduleList;

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