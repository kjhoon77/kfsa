// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "55px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '194px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioProfBasicInfo?.PFNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"  startIcon={<Search />} onClick={hook.lfn_Search} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box><Box sx={{ display: hook.isVisible_btnDelete ? undefined : 'none' }}><Button variant="contained"  startIcon={<Delete />} onClick={hook.lfn_Delete} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>삭제 저장</Button></Box><Box sx={{ display: hook.isVisible_btnEnd ? undefined : 'none' }}><Button variant="contained"  startIcon={<Close />} onClick={hook.lfn_End} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>닫기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdProfUser ? undefined : 'none' }}><Paper sx={{ width: '778px', height: '284px', width: '100%', height: 'auto', minHeight: '284px' }}><DataGridWrapper rows={hook.ds_ioListDelete} columns={columns_gdProfUser} /></Paper></Box></Stack>

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