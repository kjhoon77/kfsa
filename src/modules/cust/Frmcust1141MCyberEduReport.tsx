// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1141MCyberEduReport } from './useFrmcust1141MCyberEduReport';
import * as Frmcust1141MCyberEduReportData from './Frmcust1141MCyberEduReportData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust1141MCyberEduReport = () => {
    const hook = useFrmcust1141MCyberEduReport();
    const columns_gdList = [
        { field: 'MEMBER_GUBUN_NM', headerName: '순번', width: 50 },
        { field: 'MGNO', headerName: '고객번호', width: 200 },
        { field: 'EPPERSONNM', headerName: '성명', width: 61 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'ADDR', headerName: '주소', width: 321 },
        { field: 'BNM', headerName: '근무처', width: 183 },
        { field: 'PASSDATE', headerName: '교육일자', width: 90 },
        { field: 'MINAPAMT', headerName: '미납액', width: 90 },
        { field: 'TAJIBU', headerName: '타지부', width: 70 },
    ];
    const columns_gdList2 = [
        { field: 'CGROUPNM', headerName: '직능', width: 120 },
        { field: 'PASSDATE', headerName: '일자 / 지역', width: 120 },
        { field: 'CNTSUM', headerName: '합계', width: 80 },
        { field: 'CNT1', headerName: 'CNT1', width: 80 },
        { field: 'CNT2', headerName: 'CNT2', width: 80 },
        { field: 'CNT3', headerName: 'CNT3', width: 80 },
        { field: 'CNT4', headerName: 'CNT4', width: 80 },
        { field: 'CNT5', headerName: '5', width: 80 },
        { field: 'CNT6', headerName: 'CNT6', width: 80 },
        { field: 'CNT7', headerName: 'CNT7', width: 80 },
        { field: 'CNT8', headerName: 'CNT8', width: 80 },
        { field: 'CNT9', headerName: 'CNT9', width: 80 },
        { field: 'CNT10', headerName: 'CNT10', width: 80 },
        { field: 'CNT11', headerName: 'CNT11', width: 80 },
        { field: 'CNT12', headerName: 'CNT12', width: 80 },
        { field: 'CNT13', headerName: 'CNT13', width: 80 },
        { field: 'CNT14', headerName: 'CNT14', width: 80 },
        { field: 'CNT15', headerName: 'CNT15', width: 80 },
        { field: 'CNT16', headerName: 'CNT16', width: 80 },
        { field: 'CNT17', headerName: 'CNT17', width: 80 },
        { field: 'CNT18', headerName: 'CNT18', width: 80 },
        { field: 'CNT19', headerName: 'CNT19', width: 80 },
        { field: 'CNT20', headerName: 'CNT20', width: 80 },
        { field: 'CNT21', headerName: 'CNT21', width: 80 },
        { field: 'CNT22', headerName: 'CNT22', width: 80 },
        { field: 'CNT23', headerName: 'CNT23', width: 80 },
        { field: 'CNT24', headerName: 'CNT24', width: 80 },
        { field: 'CNT25', headerName: 'CNT25', width: 80 },
        { field: 'CNT26', headerName: 'CNT26', width: 80 },
        { field: 'CNT27', headerName: 'CNT27', width: 80 },
        { field: 'CNT28', headerName: 'CNT28', width: 80 },
        { field: 'CNT29', headerName: 'CNT29', width: 80 },
        { field: 'CNT30', headerName: 'CNT30', width: 80 },
        { field: 'CNT31', headerName: 'CNT31', width: 80 },
        { field: 'CNT32', headerName: 'CNT32', width: 80 },
        { field: 'CNT33', headerName: 'CNT33', width: 80 },
        { field: 'CNT34', headerName: 'CNT34', width: 80 },
        { field: 'CNT35', headerName: 'CNT35', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel2}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>출력물</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={6}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회 조건</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1141MCyberEduReportData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>고객구분</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1141MCyberEduReportData.ds_ds_ioMemberGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1141MCyberEduReportData.ds_ds_ioCourseYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>이수일자</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1141MCyberEduReportData.ds_ds_ioChoiceYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_Static4 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>출력구분</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_Static5 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>직능구분</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_radPrintGubun1 && (
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_radPrintGubun2 && (
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdList && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdList2 && (
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
export default Frmcust1141MCyberEduReport;

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