// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0018MPracEduRep } from './useFrmprofes0018MPracEduRep';
import * as Frmprofes0018MPracEduRepData from './Frmprofes0018MPracEduRepData';

export const Frmprofes0018MPracEduRep = () => {
    const hook = useFrmprofes0018MPracEduRep();
    const columns_gdListH = [
        { field: 'id', headerName: '구분', width: 110, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOTCNT_3', headerName: '합계', width: 100 },
        { field: 'CNT120_3', headerName: '소방안전관리자', width: 110 },
        { field: 'CNT121_3', headerName: '소방안전관리보조자', width: 130 },
        { field: 'CNT124_3', headerName: 'CNT124_3', width: 100 },
        { field: 'CNT126_3', headerName: '소방기술자', width: 100 },
        { field: 'CNT128_3', headerName: '위험물운송자', width: 100 },
        { field: 'CNT129_3', headerName: '위험물운반자', width: 100 },
    ];
    const columns_gdListD = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LDPFNAME', headerName: '교수', width: 100 },
        { field: 'SUMCNT', headerName: '합계', width: 100 },
        { field: 'CNT120', headerName: '소방안전관리자', width: 110 },
        { field: 'CNT121', headerName: '소방안전관리보조자', width: 130 },
        { field: 'CNT124', headerName: 'CNT124', width: 90 },
        { field: 'CNT126', headerName: '소방기술자', width: 90 },
        { field: 'CNT128', headerName: '위험물운송자', width: 90 },
        { field: 'CNT129', headerName: '위험물운반자', width: 90 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
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
<Grid item xs={12} md={2}><Box>실무교육 실시 전체 현황</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ProfesListH} columns={columns_gdListH} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>실무교육 실시 개인별 현황</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ProfesListD} columns={columns_gdListD} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0018MPracEduRep;

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