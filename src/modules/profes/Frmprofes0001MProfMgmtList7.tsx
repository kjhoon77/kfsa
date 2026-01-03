// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0001MProfMgmtList7 } from './useFrmprofes0001MProfMgmtList7';
import * as Frmprofes0001MProfMgmtList7Data from './Frmprofes0001MProfMgmtList7Data';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0001MProfMgmtList7 = () => {
    const hook = useFrmprofes0001MProfMgmtList7();
    const [tabValue_TAB_Profes, setTabValue_TAB_Profes] = useState(0);
    const columns_gdList = [
        { field: 'LHPROCGTMGNO', headerName: '지부', width: 0 },
        { field: 'EMSCNM', headerName: '소속', width: 120 },
        { field: 'VAL_TT', headerName: '평균', width: 80 },
        { field: 'TOTALQTY', headerName: '사례수', width: 92 },
    ];
    const columns_gdList_1 = [
        { field: 'LHPROCGTMGNO', headerName: '지부', width: 0 },
        { field: 'EMSCNM', headerName: '소속', width: 100 },
        { field: 'VAL_TT', headerName: '평균', width: 92 },
        { field: 'TOTALQTY', headerName: '사례수', width: 92 },
    ];
    const columns_gdList_2 = [
        { field: 'LHPROCGTMGNO', headerName: '지부', width: 0 },
        { field: 'EMSCNM', headerName: '소속', width: 100 },
        { field: 'VAL_TT', headerName: '평균', width: 92 },
    ];
    const columns_gdList_3 = [
        { field: 'LHPROCGTMGNO', headerName: '지부', width: 0 },
        { field: 'EMSCNM', headerName: '소속', width: 100 },
        { field: 'VAL_TT', headerName: '평균', width: 92 },
    ];
    const columns_gdList_4 = [
        { field: 'LHPROCGTMGNO', headerName: '지부', width: 0 },
        { field: 'EMSCNM', headerName: '소속', width: 100 },
        { field: 'VAL_TT', headerName: '평균', width: 92 },
    ];
    const columns_gdList_5 = [
        { field: 'LHPROCGTMGNO', headerName: '지부', width: 0 },
        { field: 'EMSCNM', headerName: '소속', width: 100 },
        { field: 'VAL_TT', headerName: '평균', width: 92 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>조회년도</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>응답인원(응답률)</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>강습 :</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>실무 :</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmprofes0001MProfMgmtList7Data.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_TAB_Profes} onChange={(e, v) => setTabValue_TAB_Profes(v)} aria-label="TAB_Profes"><Tab label="강습교육만족도(과정별)" /><Tab label="실무교육만족도(과정별)" /><Tab label="강습교육만족도(항목별)" /><Tab label="실무교육만족도(항목별)" /><Tab label="강습교육만족도(지부별)" /><Tab label="실무교육만족도(지부별)" /></Tabs></Box><CustomTabPanel value={tabValue_TAB_Profes} index={0}><Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={11}><Box></Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioListChart1} columns={columns_gdList} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Profes} index={1}><Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={11}><Box></Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioListChart2} columns={columns_gdList_1} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Profes} index={2}><Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={11}><Box></Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioListChart3} columns={columns_gdList_2} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Profes} index={3}><Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={11}><Box></Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioListChart4} columns={columns_gdList_3} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Profes} index={4}><Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={11}><Box></Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioListChart5} columns={columns_gdList_4} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Profes} index={5}><Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={11}><Box></Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioListChart6} columns={columns_gdList_5} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel></Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0001MProfMgmtList7;

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