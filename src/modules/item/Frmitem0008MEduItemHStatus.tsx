// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmitem0008MEduItemHStatus } from './useFrmitem0008MEduItemHStatus';
import * as Frmitem0008MEduItemHStatusData from './Frmitem0008MEduItemHStatusData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmitem0008MEduItemHStatus = () => {
    const hook = useFrmitem0008MEduItemHStatus();
    const columns_gdEduItemH = [
        { field: 'no', headerName: '순번', width: 40 },
        { field: 'EHGTMGNO', headerName: '부서/지부', width: 75 },
        { field: 'EIKINDGUBUNNM', headerName: '제서식분류', width: 77 },
        { field: 'EIBNM', headerName: '교육구분', width: 60 },
        { field: 'EIMNM', headerName: '직능', width: 140 },
        { field: 'EISNM', headerName: '소분류', width: 90 },
        { field: 'MAKE_CNT', headerName: '제작', width: 60 },
        { field: 'RECEIPT_CNT', headerName: '수령', width: 60 },
        { field: 'USE_CNT', headerName: '사용', width: 60 },
        { field: 'USE_CNT0', headerName: '신규', width: 60 },
        { field: 'USE_CNT1', headerName: '사용', width: 60 },
        { field: 'USE_CNT2', headerName: '재교부', width: 60 },
        { field: 'USE_CNT3', headerName: '훼손', width: 60 },
        { field: 'USE_CNT4', headerName: '기타', width: 60 },
        { field: 'SUPPLY_CNT', headerName: '재고', width: 60 },
        { field: 'DEMAND_CNT', headerName: '예상', width: 60 },
        { field: 'DEFICIENCY_CNT', headerName: '과부족', width: 60 },
    ];
    const columns_gdEduItemH2 = [
        { field: 'no', headerName: '순번', width: 40 },
        { field: 'EHGTMGNO', headerName: '부서/지부', width: 75 },
        { field: 'EIKINDGUBUNNM', headerName: '제서식분류', width: 77 },
        { field: 'EIBNM', headerName: '교육구분', width: 60 },
        { field: 'EIMNM', headerName: '직능', width: 140 },
        { field: 'EISNM', headerName: '소분류', width: 90 },
        { field: 'MAKE_CNT', headerName: '제작', width: 60 },
        { field: 'RECEIPT_CNT', headerName: '수령', width: 60 },
        { field: 'USE_CNT', headerName: '사용', width: 60 },
        { field: 'USE_CNT0', headerName: '신규', width: 60 },
        { field: 'USE_CNT1', headerName: '교부', width: 60 },
        { field: 'USE_CNT2', headerName: '재교부', width: 60 },
        { field: 'USE_CNT3', headerName: '훼손', width: 60 },
        { field: 'USE_CNT4', headerName: '기타', width: 60 },
        { field: 'SUPPLY_CNT', headerName: '재고', width: 60 },
        { field: 'DEMAND_CNT', headerName: '예상', width: 60 },
        { field: 'DEFICIENCY_CNT', headerName: '과부족', width: 60 },
    ];
    const columns_gdEduItemH3 = [
        { field: 'no', headerName: '순번', width: 40 },
        { field: 'EHGTMGNO', headerName: '부서/지부', width: 75 },
        { field: 'EIKINDGUBUNNM', headerName: '제서식분류', width: 77 },
        { field: 'EIBNM', headerName: '교육구분', width: 60 },
        { field: 'EIMNM', headerName: '직능', width: 140 },
        { field: 'EISNM', headerName: '소분류', width: 90 },
        { field: 'MAKE_CNT', headerName: '제작', width: 60 },
        { field: 'RECEIPT_CNT', headerName: '수령', width: 60 },
        { field: 'USE_CNT', headerName: '사용', width: 60 },
        { field: 'USE_CNT1', headerName: '사용', width: 60 },
        { field: 'USE_CNT3', headerName: '훼손', width: 60 },
        { field: 'USE_CNT4', headerName: '기타', width: 60 },
        { field: 'SUPPLY_CNT', headerName: '재고', width: 60 },
        { field: 'DEMAND_CNT', headerName: '예상', width: 60 },
        { field: 'DEFICIENCY_CNT', headerName: '과부족', width: 60 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>제서식분류</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0008MEduItemHStatusData.ds_ds_oRCodeAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>교육구분</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0008MEduItemHStatusData.ds_ds_oBCodeAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0008MEduItemHStatusData.ds_ds_oMCodeAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소분류</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0008MEduItemHStatusData.ds_ds_oSCodeAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>총건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_MULTI_SORT"><Button variant="outlined" size="small" color="primary" onClick={hook.btnMutilSort_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Sort fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioEduItemH} columns={columns_gdEduItemH} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioEduItemH} columns={columns_gdEduItemH2} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioEduItemH} columns={columns_gdEduItemH3} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmitem0008MEduItemHStatus;

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