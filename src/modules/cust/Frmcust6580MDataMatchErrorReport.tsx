// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6580MDataMatchErrorReport } from './useFrmcust6580MDataMatchErrorReport';
import * as Frmcust6580MDataMatchErrorReportData from './Frmcust6580MDataMatchErrorReportData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust6580MDataMatchErrorReport = () => {
    const hook = useFrmcust6580MDataMatchErrorReport();
    const columns_gdList1 = [
        { field: 'RCCDNM', headerName: '데이터 연계분 연계 오류현황(소방안전관리자)', width: 34 },
        { field: 'MREGDATE', headerName: '연계일자', width: 79 },
        { field: 'SERCHNM', headerName: '청정보', width: 180 },
        { field: 'COURSENM', headerName: '대상구분', width: 80 },
        { field: 'NM', headerName: '선임자', width: 70 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'ADDRESS1', headerName: '주소', width: 150 },
        { field: 'BSEARCHNM', headerName: '안전원정보', width: 180 },
        { field: 'COURSENM2', headerName: '직능', width: 80 },
        { field: 'FMNM', headerName: '선임자', width: 70 },
        { field: 'FBIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'ADDRESS2', headerName: '주소', width: 150 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>

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
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지 부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6580MDataMatchErrorReportData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직 능</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6580MDataMatchErrorReportData.ds_ds_ioCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>처리일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>비교조건</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6580MDataMatchErrorReportData.ds_ds_ioChoiceYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>직능</Box></Grid><Grid item xs={12} md={2}><Box>대상물명</Box></Grid><Grid item xs={12} md={2}><Box>주소(동,번지)</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>선임자명</Box></Grid><Grid item xs={12} md={2}><Box>선임자주민번호</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>정렬순서</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={6}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdList1 && (
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
export default Frmcust6580MDataMatchErrorReport;

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