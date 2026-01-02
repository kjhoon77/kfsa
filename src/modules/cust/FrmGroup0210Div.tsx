// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmGroup0210Div } from './useFrmGroup0210Div';
import * as FrmGroup0210DivData from './FrmGroup0210DivData';

export const FrmGroup0210Div = () => {
    const hook = useFrmGroup0210Div();
    const columns_gdList5 = [
        { field: 'GOGIEAK', headerName: '고지액', width: 100 },
        { field: 'SUEENAP', headerName: '금액', width: 130 },
        { field: 'BANKNAP', headerName: '은행납', width: 99 },
        { field: 'JIEKNAP', headerName: '직납', width: 100 },
        { field: 'GIRONAP', headerName: '(G)', width: 100 },
        { field: 'INTRNAP', headerName: '(I)', width: 100 },
        { field: 'TAGINAP', headerName: '타지부', width: 100 },
        { field: 'WHANBUL', headerName: '환불', width: 100 },
    ];
    const columns_gdList51 = [
        { field: 'GOGIEAK', headerName: '고지액', width: 100 },
        { field: 'SUEENAP', headerName: '금액', width: 130 },
        { field: 'NAP1', headerName: '직납', width: 99 },
        { field: 'NAP2', headerName: '은납', width: 100 },
        { field: 'NAP3', headerName: '지로납', width: 100 },
        { field: 'NAP4', headerName: '카드', width: 100 },
        { field: 'NAP5', headerName: '가상계좌', width: 100 },
        { field: 'NAP6', headerName: '타지부', width: 100 },
        { field: 'NAP7', headerName: '환불', width: 0 },
    ];
    const columns_gdList1 = [
        { field: 'id', headerName: '회비내역', width: 80, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CMAMT0', headerName: '누계(회비+실무 교육비)', width: 181 },
        { field: 'CMAMT1', headerName: '회비', width: 122 },
        { field: 'CMAMT2', headerName: '실무교육비', width: 136 },
    ];
    const columns_gdList2 = [
        { field: 'id', headerName: 'No', width: 104, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'BF_CMAMT', headerName: '금액', width: 154 },
        { field: 'CMAMT', headerName: '금액', width: 122 },
    ];
    const columns_gdList3 = [
        { field: 'id', headerName: '회비내역', width: 84, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'SUM_MINAP', headerName: '계', width: 100 },
        { field: 'MI_BANG4', headerName: '특급', width: 70 },
        { field: 'MI_BANG0', headerName: '1급', width: 70 },
        { field: 'MI_BANG1', headerName: '2급', width: 70 },
        { field: 'MI_BANG2', headerName: '공공1급', width: 70 },
        { field: 'MI_BANG3', headerName: '공공2급', width: 70 },
        { field: 'MI_WEGUN', headerName: 'MI_WEGUN', width: 70 },
        { field: 'MI_SOGIE', headerName: 'MI_SOGIE', width: 70 },
        { field: 'MI_GEEIN', headerName: 'MI_GEEIN', width: 70 },
        { field: 'MI_DNACH', headerName: 'MI_DNACH', width: 70 },
    ];
    const columns_gdList4 = [
        { field: 'id', headerName: '회비내역', width: 100, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'S_CMAMT', headerName: '누계', width: 163 },
        { field: 'CMAMT1', headerName: '미납분', width: 100 },
        { field: 'CMAMT2', headerName: '2007년', width: 100 },
        { field: 'CMAMT3', headerName: '2008년', width: 100 },
        { field: 'CMAMT4', headerName: '당해년', width: 100 },
        { field: 'CMAMT5', headerName: '과오납', width: 100 },
    ];
    const columns_gdList6 = [
        { field: 'id', headerName: '회비내역', width: 100, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'BF_CMAMT', headerName: '금액', width: 154 },
        { field: 'CMAMT', headerName: '금액', width: 122 },
    ];
    const columns_gdList7 = [
        { field: 'id', headerName: 'No', width: 65, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'SUM_MINAP', headerName: '계', width: 70 },
        { field: 'MI_BANG4', headerName: '특급', width: 70 },
        { field: 'MI_BANG0', headerName: '1급', width: 70 },
        { field: 'MI_BANG1', headerName: '2급', width: 70 },
        { field: 'MI_BANG2', headerName: '공공1급', width: 70 },
        { field: 'MI_BANG3', headerName: '공공2급', width: 70 },
        { field: 'MI_BOJO', headerName: 'MI_BOJO', width: 70 },
        { field: 'MI_WEGUN', headerName: 'MI_WEGUN', width: 70 },
        { field: 'MI_SOGIE', headerName: 'MI_SOGIE', width: 70 },
        { field: 'MI_GEEIN', headerName: 'MI_GEEIN', width: 70 },
        { field: 'MI_DNACH', headerName: 'MI_DNACH', width: 70 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    
                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmGroup0210DivData.ds_ds_Jibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>년</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmGroup0210DivData.ds_ds_Month || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>월</Box></Grid><Grid item xs={12} md={2}><Box>※ 2005.1.28 부터 일자별 조회가능</Box></Grid><Grid item xs={12} md={2}><Button variant="contained">검색</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">출력</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">화면인쇄</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">화면인쇄</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>1. 회비/실무교육비 현황</Box></Grid><Grid item xs={12} md={2}><Box>단위: 천원</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_Data1} columns={columns_gdList1} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>단위 : 천원</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>2. 회비 고지 현황</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>2-1 전월대비현황</Box></Grid><Grid item xs={12} md={2}><Box>단위: 천원</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_Data2} columns={columns_gdList2} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>단위 : 천원</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>2-2 지부직능현황</Box></Grid><Grid item xs={12} md={2}><Box>단위: 천원</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_Data3} columns={columns_gdList3} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>2-3 회비고지 현황(년도별)</Box></Grid><Grid item xs={12} md={2}><Box>단위: 천원</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_Data4} columns={columns_gdList4} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>2-4 회비수납현황(납부구분)</Box></Grid><Grid item xs={12} md={2}><Box>단위: 천원</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_Data5} columns={columns_gdList5} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_Data51} columns={columns_gdList51} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>3. 실무교육비현황</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>3-1 전월대비현황</Box></Grid><Grid item xs={12} md={2}><Box>단위: 천원</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_Data6} columns={columns_gdList6} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>3-2 지부직능현황</Box></Grid><Grid item xs={12} md={2}><Box>단위: 천원</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_Data7} columns={columns_gdList7} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmGroup0210Div;

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