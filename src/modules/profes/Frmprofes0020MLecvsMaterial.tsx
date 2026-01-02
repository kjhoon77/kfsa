// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0020MLecvsMaterial } from './useFrmprofes0020MLecvsMaterial';
import * as Frmprofes0020MLecvsMaterialData from './Frmprofes0020MLecvsMaterialData';

export const Frmprofes0020MLecvsMaterial = () => {
    const hook = useFrmprofes0020MLecvsMaterial();
    const columns_gdList = [
        { field: 'id', headerName: '순번', width: 37, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'NAME', headerName: '교수', width: 107 },
        { field: 'GUBUN', headerName: '구분', width: 48 },
        { field: 'TPCNT', headerName: '교안', width: 65 },
        { field: 'TOT', headerName: '강의실적', width: 65 },
        { field: 'TOT_1', headerName: '실무', width: 65 },
        { field: 'TOT_2', headerName: '강습', width: 65 },
        { field: 'YES', headerName: '교안 일치', width: 65 },
        { field: 'YES_1', headerName: '실무', width: 65 },
        { field: 'YES_2', headerName: '강습', width: 65 },
        { field: 'NO', headerName: '교안 불일치', width: 65 },
        { field: 'NO_1', headerName: '실무', width: 65 },
        { field: 'NO_2', headerName: '강습', width: 65 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.btnExcell_OnClick}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.btnPrintWarmun_OnClick}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained"  onClick={hook.lfn_Print}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>교육시작일</Typography>
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
<Grid item xs={12} md={6}><Box>※ 1. 강의실적 및 교안은 교육팀 승인 받은 자료에 한하여 집계</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={7}><Box>    2. 교육시작일이 교안의 승인일과 유효일을 사이에 존재하면 &apos;교안일치&apos;, 벗어나면 &apos;교안불일치&apos;로 집계</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ProfesList} columns={columns_gdList} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0020MLecvsMaterial;

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