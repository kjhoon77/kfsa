// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2120MUnpaidReport } from './useFrmcust2120MUnpaidReport';
import * as Frmcust2120MUnpaidReportData from './Frmcust2120MUnpaidReportData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust2120MUnpaidReport = () => {
    const hook = useFrmcust2120MUnpaidReport();
    const columns_gdList = [
        { field: 'CNICKNM', headerName: '순번', width: 47 },
        { field: 'JIFULLNM', headerName: '지부', width: 69 },
        { field: 'CNO', headerName: '회원번호', width: 128 },
        { field: 'BNM', headerName: '업체명', width: 136 },
        { field: 'FMNM', headerName: '성명', width: 69 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 100 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 102 },
        { field: 'ZIPCD', headerName: '우편번호', width: 85 },
        { field: 'BADDR', headerName: '주소', width: 230 },
        { field: 'COVER_GUBUN', headerName: '겸직구분', width: 66 },
        { field: 'CREGISTERYYMM', headerName: '입회년월', width: 64 },
        { field: 'CFEEYYMM', headerName: '회비부과년월', width: 94 },
        { field: 'FMHHPTEL', headerName: '휴대폰', width: 100 },
        { field: 'EMAIL', headerName: '이메일', width: 215 },
        { field: 'CNT3', headerName: 'CNT3', width: 80 },
        { field: 'CNT2', headerName: 'CNT2', width: 80 },
        { field: 'CNT1', headerName: 'CNT1', width: 80 },
        { field: 'CNT0', headerName: 'CNT0', width: 80 },
        { field: 'AMT', headerName: '미납금액', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnExcell_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_CancelL}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회 조건</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2120MUnpaidReportData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>년도별 미납</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>장기미납</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust2120MUnpaidReportData.ds_ds_ioYear || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdList && (
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
export default Frmcust2120MUnpaidReport;

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