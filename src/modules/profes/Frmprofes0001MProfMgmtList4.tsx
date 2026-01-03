// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0001MProfMgmtList4 } from './useFrmprofes0001MProfMgmtList4';
import * as Frmprofes0001MProfMgmtList4Data from './Frmprofes0001MProfMgmtList4Data';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0001MProfMgmtList4 = () => {
    const hook = useFrmprofes0001MProfMgmtList4();
    const [tabValue_TAB_Profes, setTabValue_TAB_Profes] = useState(0);
    const columns_gdList = [
        { field: 'GTGUBUNNM', headerName: '구분', width: 100 },
        { field: 'TOTALTEAM', headerName: 'TOTALTEAM', width: 100 },
        { field: 'STOTALTEAM', headerName: '전임교수', width: 120 },
        { field: 'ATEAM', headerName: '교수', width: 120 },
        { field: 'BTEAM', headerName: '부교수', width: 120 },
        { field: 'CTEAM', headerName: '조교수', width: 120 },
        { field: 'DTEAM', headerName: '겸임교수', width: 120 },
    ];
    const columns_Grid0 = [
        { field: 'PFYEAR', headerName: '구분', width: 100 },
        { field: 'TOTALTEAM', headerName: '총계', width: 100 },
        { field: 'STOTALTEAM', headerName: '전임교수', width: 120 },
        { field: 'ATEAM', headerName: '교수', width: 120 },
        { field: 'BTEAM', headerName: '부교수', width: 120 },
        { field: 'CTEAM', headerName: '조교수', width: 120 },
        { field: 'DTEAM', headerName: '겸임교수', width: 120 },
    ];
    const columns_Grid1 = [
        { field: 'PFNAME', headerName: '교수등급', width: 100 },
        { field: 'PFQTY', headerName: '분석내용', width: 120 },
        { field: 'LTIME', headerName: '강의시간', width: 120 },
        { field: 'TIMESHARE', headerName: '강의시간점유율', width: 120 },
        { field: 'INDISTRIVUTIONRATE', headerName: '인원분포율', width: 120 },
        { field: 'INTIME', headerName: '1인당 강의시간', width: 120 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={4}><Box>□ 평가결과</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>조회일자</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioList} columns={columns_gdList} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={4}><Box>□ 전년 대비 교수 등급변동 현황</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>조회일자</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search2}>조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioList2} columns={columns_Grid0} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={4}><Box>□ 등급별 교수현황 및 강의시간</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>조회일자</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search3}>조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_TAB_Profes} onChange={(e, v) => setTabValue_TAB_Profes(v)} aria-label="TAB_Profes"><Tab label="    현    황    " /></Tabs></Box><CustomTabPanel value={tabValue_TAB_Profes} index={0}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioList3} columns={columns_Grid1} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={10}><Box></Box></Grid></Grid>
</CustomTabPanel></Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0001MProfMgmtList4;

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