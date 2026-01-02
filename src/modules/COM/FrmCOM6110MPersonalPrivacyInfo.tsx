// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM6110MPersonalPrivacyInfo } from './useFrmCOM6110MPersonalPrivacyInfo';
import * as FrmCOM6110MPersonalPrivacyInfoData from './FrmCOM6110MPersonalPrivacyInfoData';

export const FrmCOM6110MPersonalPrivacyInfo = () => {
    const hook = useFrmCOM6110MPersonalPrivacyInfo();
    const columns_gdPrivacyAgreeH = [
        { field: 'id', headerName: '순번', width: 45, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'PHPROCSTATUS', headerName: '동의여부', width: 76 },
        { field: 'PHPROCMETHOD', headerName: '처리방법', width: 82 },
        { field: 'PHPROCDATE', headerName: '처리일자', width: 79 },
        { field: 'PHREGSABUN', headerName: '등록자', width: 66 },
        { field: 'PHREGDATE', headerName: '등록일시', width: 135 },
        { field: 'RUMGNO', headerName: '동의서', width: 81 },
    ];
    const columns_gdPrivacyAgree = [
        { field: 'id', headerName: '순번', width: 45, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'BIZCD', headerName: '업무구분', width: 85 },
        { field: 'COURSECD', headerName: '직능', width: 202 },
        { field: 'PHPROCSTATUS', headerName: '동의여부', width: 85 },
        { field: 'PHPROCDATE', headerName: '처리일자', width: 86 },
        { field: 'RUMGNO', headerName: '동의서', width: 63 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained"  onClick={hook.lfn_Cancel}>입력 초기화</Button>

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
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주민번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>   ▶ 업무별 개인정보동의서 등록 현황</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioPrivacyAgree} columns={columns_gdPrivacyAgree} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>    ▶▶ 개인정보동의서 등록 이력</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>업무구분</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>직능</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioPrivacyAgreeH} columns={columns_gdPrivacyAgreeH} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM6110MPersonalPrivacyInfo;

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