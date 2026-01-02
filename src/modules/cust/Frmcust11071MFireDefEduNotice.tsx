// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust11071MFireDefEduNotice } from './useFrmcust11071MFireDefEduNotice';
import * as Frmcust11071MFireDefEduNoticeData from './Frmcust11071MFireDefEduNoticeData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust11071MFireDefEduNotice = () => {
    const hook = useFrmcust11071MFireDefEduNotice();
    const columns_gdCommonCode = [
        { field: 'SELA', headerName: 'SELA', width: 31 },
        { field: 'sel', headerName: '순번', width: 36 },
        { field: 'ECUSTNO', headerName: '고객번호', width: 111 },
        { field: 'ECUSTBNM', headerName: '대상물명', width: 152 },
        { field: 'ECUSTFMNM', headerName: '성명', width: 55 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 103 },
        { field: 'EFMHHPTEL', headerName: '휴대폰번호', width: 118 },
        { field: 'EJBFULLNNM', headerName: '지부', width: 102 },
        { field: 'ECGROUPNM', headerName: '직능', width: 115 },
        { field: 'ECSTATUSGUBUN', headerName: '회원구분', width: 76 },
    ];
    const columns_Grid0 = [
        { field: 'SELA', headerName: 'SELA', width: 44 },
        { field: 'sel', headerName: '순번', width: 44 },
        { field: 'edCustYear_A', headerName: '년도', width: 44 },
        { field: 'ECUSTFMNM', headerName: '성명', width: 59 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 123 },
        { field: 'EJBFULLNNM', headerName: '지부', width: 102 },
        { field: 'ECUSTNO33', headerName: '고객번호', width: 125 },
        { field: 'CREGCD', headerName: '지역', width: 79 },
        { field: 'ECUSTNM4', headerName: '직능', width: 115 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 76 },
        { field: 'EDUGUBUN', headerName: '교육구분', width: 81 },
        { field: 'EDUPERSON', headerName: '교육대상', width: 81 },
        { field: 'EDUDATE', headerName: '교육일자', width: 76 },
        { field: 'ECUSTBNM4', headerName: '업체명', width: 188 },
    ];
    const columns_Grid1 = [
        { field: 'SEL', headerName: 'SEL', width: 80 },
    ];
    const columns_grdExportold = [
        { field: 'EJBFULLNNM', headerName: '지부', width: 88 },
        { field: 'EJBZIPCD', headerName: '발송자우편번호', width: 106 },
        { field: 'EJBJADDR', headerName: '발송자주소', width: 394 },
        { field: 'EJBTEL', headerName: '발송자전화번호', width: 123 },
        { field: 'EJGFAX', headerName: '발송자팩스번호', width: 136 },
        { field: 'EJRTNPLACE', headerName: '반송처', width: 358 },
        { field: 'ECUSTNO', headerName: '관리번호', width: 145 },
        { field: 'ECUSTADDR1', headerName: '받는주소1', width: 188 },
        { field: 'ECUSTADDR2', headerName: '받는주소2', width: 188 },
        { field: 'ECUSTFMNM', headerName: '성명', width: 118 },
        { field: 'ECUSTBNM', headerName: '받는사람', width: 270 },
        { field: 'ECGROUPNM', headerName: '직능', width: 116 },
        { field: 'ECUSTZIPNO', headerName: '우편번호', width: 95 },
        { field: 'ECPOSTBARCODE', headerName: '우편반송바코드', width: 211 },
    ];
    const columns_grdExport = [
        { field: 'EJBFULLNNM', headerName: '지부', width: 88 },
        { field: 'EJBZIPCD', headerName: '발송자우편번호', width: 106 },
        { field: 'EJBJADDR', headerName: '발송자주소', width: 394 },
        { field: 'EJBTEL', headerName: '발송자전화번호', width: 123 },
        { field: 'EJRTNPLACE', headerName: '반송처', width: 358 },
        { field: 'ECPOSTBARCODE', headerName: '우편반송바코드', width: 211 },
        { field: 'ECUSTNO', headerName: '관리번호', width: 145 },
        { field: 'ECUSTADDR1', headerName: '받는주소1', width: 188 },
        { field: 'ECUSTADDR2', headerName: '받는주소2', width: 188 },
        { field: 'ECUSTBNM', headerName: '받는사람', width: 245 },
        { field: 'CUSTNM', headerName: '성명', width: 263 },
        { field: 'ECUSTZIPNO', headerName: '우편번호', width: 95 },
        { field: 'ECGROUPNM', headerName: '교육대상자 정보', width: 131 },
        { field: 'ECUSTFMNM', headerName: '성명1', width: 85 },
        { field: 'CUSTNM2', headerName: '성명2', width: 303 },
        { field: 'ECUSTBNM', headerName: '대상물명', width: 168 },
        { field: 'BADDR1', headerName: '주소1', width: 188 },
        { field: 'BADDR2', headerName: '주소2', width: 188 },
        { field: 'STARTDATE', headerName: '선임일자', width: 94 },
        { field: 'EDUEXPIREDATE1', headerName: '교육이수기한1', width: 116 },
        { field: 'EDUEXPIREDATE2', headerName: '교육이수기한2', width: 189 },
        { field: 'PREPARED', headerName: '준비물', width: 181 },
        { field: 'EFEETITLE', headerName: '납부회비/교육수수료', width: 142 },
        { field: 'ENOTICE', headerName: '안내3', width: 583 },
        { field: 'EFEEYEAR1', headerName: '년도1', width: 188 },
        { field: 'EFEE1', headerName: '회비1', width: 76 },
        { field: 'EFEEYEAR2', headerName: '년도2', width: 81 },
        { field: 'EFEE2', headerName: '회비2', width: 81 },
        { field: 'EFEEYEAR3', headerName: '년도3', width: 131 },
        { field: 'EFEE3', headerName: '회비3', width: 188 },
        { field: 'EFEEYEAR4', headerName: '년도4', width: 76 },
        { field: 'EFEE4', headerName: '회비4', width: 81 },
        { field: 'CTOTALFEE', headerName: '회비합계1', width: 81 },
        { field: 'ESUNAPNOTICE', headerName: '사전납부안내', width: 574 },
        { field: 'QRCODEURL', headerName: '교육접수URL', width: 316 },
    ];
    const columns_old_grdExport = [
        { field: 'EJBFULLNNM', headerName: '지부', width: 88 },
        { field: 'EJBZIPCD', headerName: '발송자우편번호', width: 106 },
        { field: 'EJBJADDR', headerName: '발송자주소', width: 394 },
        { field: 'EJBTEL', headerName: '발송자전화번호', width: 123 },
        { field: 'EJGFAX', headerName: '발송자팩스번호', width: 136 },
        { field: 'EJRTNPLACE', headerName: '반송처', width: 358 },
        { field: 'ECPOSTBARCODE', headerName: '우편반송바코드', width: 211 },
        { field: 'ECUSTNO', headerName: '관리번호', width: 145 },
        { field: 'ECUSTADDR1', headerName: '받는주소1', width: 188 },
        { field: 'ECUSTADDR2', headerName: '받는주소2', width: 188 },
        { field: 'ECUSTFMNM', headerName: '성명', width: 118 },
        { field: 'ECUSTBNM', headerName: '받는사람', width: 270 },
        { field: 'ECUSTZIPNO', headerName: '우편번호', width: 95 },
        { field: 'EFEETITLE', headerName: '납부회비/교육수수료', width: 131 },
        { field: 'ENOTICE', headerName: '안내3', width: 1060 },
        { field: 'EFEEYEAR1', headerName: '년도1', width: 188 },
        { field: 'EFEE1', headerName: '회비1', width: 76 },
        { field: 'EFEEYEAR2', headerName: '년도2', width: 81 },
        { field: 'EFEE2', headerName: '회비2', width: 81 },
        { field: 'EFEEYEAR3', headerName: '년도3', width: 131 },
        { field: 'EFEE3', headerName: '회비3', width: 188 },
        { field: 'EFEEYEAR4', headerName: '년도4', width: 76 },
        { field: 'EFEE4', headerName: '회비4', width: 81 },
        { field: 'CTOTALFEE', headerName: '회비합계1', width: 81 },
        { field: 'EACCOUNT1', headerName: '국민가상계좌', width: 120 },
        { field: 'EACCOUNT2', headerName: '신한가상계좌', width: 120 },
        { field: 'EACCOUNT3', headerName: '우리가상계좌', width: 120 },
        { field: 'EACCOUNT4', headerName: '농협가상계좌', width: 120 },
        { field: 'ESUNAPNOTICE', headerName: '사전납부안내', width: 574 },
        { field: 'QRCODEURL', headerName: '교육접수URL', width: 316 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_EduPrintSave}>안내문 자료생성</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>고객구분</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>교육대상</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>추출 대상자수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>명</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>교육대상자 리스트</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_EduCustSMSSend}>문자메시지발송</Button></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_MULTI_SORT"><Button variant="outlined" size="small" color="primary" onClick={hook.btnMutilSort_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Sort fontSize="small" /></Button></Tooltip></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioEduDay1} columns={columns_Grid0} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioEduDay1} columns={columns_gdCommonCode} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioEduDay2} columns={columns_Grid1} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_grdExport && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_old_grdExport && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_grdExportold && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust11071MFireDefEduNotice;

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