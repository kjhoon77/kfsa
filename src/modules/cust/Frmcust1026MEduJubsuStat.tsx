// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1026MEduJubsuStat } from './useFrmcust1026MEduJubsuStat';
import * as Frmcust1026MEduJubsuStatData from './Frmcust1026MEduJubsuStatData';

export const Frmcust1026MEduJubsuStat = () => {
    const hook = useFrmcust1026MEduJubsuStat();
    const columns_gdEduJubsu = [
        { field: 'ESGTMGNO', headerName: '지부', width: 60 },
        { field: 'JUBSUCNT', headerName: '합계', width: 65 },
        { field: 'B10MEMCNT', headerName: '직원', width: 50 },
        { field: 'B10CALLCNT', headerName: '콜센터', width: 50 },
        { field: 'B10INETCNT', headerName: '인터넷', width: 50 },
        { field: 'B20MEMCNT', headerName: '직원', width: 50 },
        { field: 'B20CALLCNT', headerName: '콜센터', width: 50 },
        { field: 'B20INETCNT', headerName: '인터넷', width: 50 },
        { field: 'B30MEMCNT', headerName: '직원', width: 50 },
        { field: 'B30CALLCNT', headerName: '콜센터', width: 50 },
        { field: 'B30INETCNT', headerName: '인터넷', width: 50 },
        { field: 'B50MEMCNT', headerName: '직원', width: 50 },
        { field: 'B50CALLCNT', headerName: '콜센터', width: 50 },
        { field: 'B50INETCNT', headerName: '인터넷', width: 50 },
        { field: 'B50MEMCNT_NEW', headerName: '양성교육', width: 80 },
        { field: 'B80MEMCNT', headerName: '직원', width: 50 },
        { field: 'B80CALLCNT', headerName: '콜센터', width: 50 },
        { field: 'B80INETCNT', headerName: '인터넷', width: 50 },
        { field: 'B40MEMCNT', headerName: '직원', width: 50 },
        { field: 'B40CALLCNT', headerName: '콜센터', width: 50 },
        { field: 'B40INETCNT', headerName: '인터넷', width: 50 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained"  onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회구분</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회차</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>교육일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oEduJubsuStat} columns={columns_gdEduJubsu} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1026MEduJubsuStat;

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