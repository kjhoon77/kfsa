// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0040MTrainingAbsentManagement } from './useFrmtraining0040MTrainingAbsentManagement';
import * as Frmtraining0040MTrainingAbsentManagementData from './Frmtraining0040MTrainingAbsentManagementData';

export const Frmtraining0040MTrainingAbsentManagement = () => {
    const hook = useFrmtraining0040MTrainingAbsentManagement();
    const columns_gdTrainingAbsent = [
        { field: 'SEL', headerName: '결강', width: 40 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 70 },
        { field: 'TJPERSONNM', headerName: '성명', width: 70 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 70 },
        { field: 'TJADDR1', headerName: '주소1', width: 200 },
        { field: 'TJADDR2', headerName: '주소2', width: 143 },
        { field: 'ADAY1', headerName: '1', width: 0 },
        { field: 'ADAY2', headerName: '2', width: 0 },
        { field: 'ADAY3', headerName: '3', width: 0 },
        { field: 'ADAY4', headerName: '4', width: 0 },
        { field: 'ADAY5', headerName: '5', width: 0 },
        { field: 'ADAY6', headerName: '6', width: 0 },
        { field: 'ADAY7', headerName: '7', width: 0 },
        { field: 'ADAY8', headerName: '8', width: 0 },
        { field: 'ADAY9', headerName: '9', width: 0 },
        { field: 'ADAY10', headerName: '10', width: 0 },
        { field: 'ADAY11', headerName: '11', width: 0 },
        { field: 'ADAY12', headerName: '12', width: 0 },
        { field: 'ADAY13', headerName: '13', width: 0 },
        { field: 'ADAY14', headerName: '14', width: 0 },
        { field: 'ADAY15', headerName: '15', width: 0 },
        { field: 'ADAY16', headerName: '16', width: 0 },
        { field: 'ADAY17', headerName: '17', width: 0 },
        { field: 'ADAY18', headerName: '18', width: 0 },
        { field: 'ADAY19', headerName: '19', width: 0 },
        { field: 'ADAY20', headerName: '20', width: 0 },
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
<Button variant="contained"  onClick={hook.lfn_Save}>결강처리(F4)</Button>
<Button variant="contained"  onClick={hook.btnCancelAbsent_OnClick}>결강취소</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>교육일자</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained">출결자료 생성</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>결강일차</Box></Grid><Grid item xs={12} md={6}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전체인원수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>결강자수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained"></Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioTrainingAbsent} columns={columns_gdTrainingAbsent} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0040MTrainingAbsentManagement;

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