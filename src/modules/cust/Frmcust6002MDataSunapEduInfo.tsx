// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6002MDataSunapEduInfo } from './useFrmcust6002MDataSunapEduInfo';
import * as Frmcust6002MDataSunapEduInfoData from './Frmcust6002MDataSunapEduInfoData';

export const Frmcust6002MDataSunapEduInfo = () => {
    const hook = useFrmcust6002MDataSunapEduInfo();
    const columns_gdSunap = [
        { field: 'id', headerName: '순번', width: 30, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'SUNAPYEAR', headerName: '년월', width: 97 },
        { field: 'MEMBERGUBUNNM', headerName: '구분', width: 47 },
        { field: 'SETLMGUBUNNM', headerName: '결제여부', width: 57 },
        { field: 'CFGUBUN', headerName: '결제구분', width: 85 },
        { field: 'CFGUBUNCDNM', headerName: '결제방법', width: 134 },
        { field: 'SUNAPFEE', headerName: '금액', width: 64 },
        { field: 'PROCDATE', headerName: '처리일자', width: 78 },
        { field: 'PVINFO', headerName: '계산서', width: 55 },
        { field: 'PROCGTNM', headerName: '처리지부', width: 65 },
        { field: 'CFREGNM', headerName: '처리자', width: 65 },
        { field: 'MGGTNM', headerName: '관리지부', width: 65 },
        { field: 'POSGTNM', headerName: 'POS지부', width: 65 },
        { field: 'PMPCORDERNO', headerName: '주문번호', width: 102 },
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
        { field: 'EPREGSABUN', headerName: '처리자', width: 70 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>결제 정보</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained"></Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oSunap} columns={columns_gdSunap} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>실무교육현황</Box></Grid><Grid item xs={12} md={2}><Button variant="contained"></Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oEduList} columns={columns_gdEduList} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6002MDataSunapEduInfo;

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