// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0001ProfessorpfDelete } from './useFrmprofes0001ProfessorpfDelete';
import * as Frmprofes0001ProfessorpfDeleteData from './Frmprofes0001ProfessorpfDeleteData';

export const Frmprofes0001ProfessorpfDelete = () => {
    const hook = useFrmprofes0001ProfessorpfDelete();
    const columns_gdProfUser = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'PFTEAM', headerName: '배정지부', width: 100 },
        { field: 'PFNM', headerName: '성명', width: 80 },
        { field: 'JIKRYUL', headerName: '직위', width: 80 },
        { field: 'PFGUBUN', headerName: '구분', width: 80 },
        { field: 'PFGUBUN2', headerName: '전임상세', width: 90 },
        { field: 'PFGUBUN3', headerName: '강의전담', width: 90 },
        { field: 'PFSTARTDATE', headerName: '지정일', width: 90 },
        { field: 'PFENDDATE', headerName: '종료일', width: 90 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">교수 강의전담/전임상세 내역</Typography>
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
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>성명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioProfBasicInfo?.PFNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained">조회</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">삭제 저장</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">닫기</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioListDelete} columns={columns_gdProfUser} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0001ProfessorpfDelete;

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