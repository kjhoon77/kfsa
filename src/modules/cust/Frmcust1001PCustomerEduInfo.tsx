// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1001PCustomerEduInfo } from './useFrmcust1001PCustomerEduInfo';
import * as Frmcust1001PCustomerEduInfoData from './Frmcust1001PCustomerEduInfoData';

export const Frmcust1001PCustomerEduInfo = () => {
    const hook = useFrmcust1001PCustomerEduInfo();
    const columns_gdEduPassList = [
        { field: 'id', headerName: '순번', width: 36, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CGTMGNO', headerName: '관리지부', width: 60 },
        { field: 'EPPROCGTMGNO', headerName: '교육지부', width: 60 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 80 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 180 },
        { field: 'BBIZCD', headerName: '용도', width: 100 },
        { field: 'EPYEAR', headerName: '년도', width: 46 },
        { field: 'CNO', headerName: '관리번호', width: 60 },
        { field: 'CREGCD', headerName: '지역', width: 60 },
        { field: 'CCOURSECD', headerName: '직능', width: 120 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 60 },
        { field: 'ESGUBUN', headerName: '구분', width: 70 },
        { field: 'ESSTUDENT', headerName: '교육대상', width: 60 },
        { field: 'ESTIME', headerName: '교육시간', width: 90 },
        { field: 'EPNM', headerName: '교육장', width: 200 },
        { field: 'PNM', headerName: '처리자', width: 70 },
    ];
    const columns_gdEduList = [
        { field: 'id', headerName: '순번', width: 36, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CGTMGNO', headerName: '관리지부', width: 60 },
        { field: 'EPPERSONNM', headerName: '성명', width: 60 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'EPPERSONKEY', headerName: '개인식별번호', width: 100 },
        { field: 'EPPROCGTMGNO', headerName: '교육지부', width: 60 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 80 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 180 },
        { field: 'BBIZCD', headerName: '용도', width: 100 },
        { field: 'EPYEAR', headerName: '년도', width: 50 },
        { field: 'ESGUBUN', headerName: '구분', width: 70 },
        { field: 'ESSTUDENT', headerName: '교육대상', width: 60 },
        { field: 'ESTIME', headerName: '교육시간', width: 90 },
        { field: 'EPNM', headerName: '교육장', width: 200 },
        { field: 'PNM', headerName: '처리자', width: 70 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Tooltip title="BTN_MULTI_SORT"><Button variant="outlined" size="small" color="primary" onClick={hook.btnMutilSort_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Sort fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oEduList} columns={columns_gdEduList} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>개인교육이수이력</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_MULTI_SORT"><Button variant="outlined" size="small" color="primary" onClick={hook.btnMutilSort2_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Sort fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oEduPassList} columns={columns_gdEduPassList} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1001PCustomerEduInfo;

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