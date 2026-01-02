// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1021MEduScheduleStat } from './useFrmcust1021MEduScheduleStat';
import * as Frmcust1021MEduScheduleStatData from './Frmcust1021MEduScheduleStatData';

export const Frmcust1021MEduScheduleStat = () => {
    const hook = useFrmcust1021MEduScheduleStat();
    const columns_gdEduSchedule = [
        { field: 'TOMGGTMGNO', headerName: '구분', width: 55 },
    ];
    const columns_gdTitle = [
        { field: 'id', headerName: 'No', width: 55, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel2}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색년월</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>교육구분</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>강습 : </Box></Grid><Grid item xs={12} md={2}><Box>공공</Box></Grid><Grid item xs={12} md={2}><Box>특급</Box></Grid><Grid item xs={12} md={2}><Box>1급</Box></Grid><Grid item xs={12} md={2}><Box>2급</Box></Grid><Grid item xs={12} md={2}><Box>3급</Box></Grid><Grid item xs={12} md={2}><Box>위안</Box></Grid><Grid item xs={12} md={2}><Box>운송</Box></Grid><Grid item xs={12} md={2}><Box>운반</Box></Grid><Grid item xs={12} md={2}><Box>통합</Box></Grid><Grid item xs={12} md={2}><Box>생활</Box></Grid><Grid item xs={12} md={2}><Box>심폐</Box></Grid><Grid item xs={12} md={2}><Box>교관</Box></Grid><Grid item xs={12} md={2}><Box>심폐전문</Box></Grid><Grid item xs={12} md={2}><Box>건설현장</Box></Grid><Grid item xs={12} md={2}><Box>업무대행</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>실무 : </Box></Grid><Grid item xs={12} md={2}><Box>소관</Box></Grid><Grid item xs={12} md={2}><Box>위안</Box></Grid><Grid item xs={12} md={2}><Box>소기</Box></Grid><Grid item xs={12} md={2}><Box>운송</Box></Grid><Grid item xs={12} md={2}><Box>소관보조</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oEduScheduleListTmp} columns={columns_gdEduSchedule} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1021MEduScheduleStat;

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