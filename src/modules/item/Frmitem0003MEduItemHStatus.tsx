// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmitem0003MEduItemHStatus } from './useFrmitem0003MEduItemHStatus';
import * as Frmitem0003MEduItemHStatusData from './Frmitem0003MEduItemHStatusData';

export const Frmitem0003MEduItemHStatus = () => {
    const hook = useFrmitem0003MEduItemHStatus();
    const columns_gdYearList = [
        { field: 'EIKINDGUBUNNM', headerName: '교보재분류', width: 0 },
        { field: 'EIMNM', headerName: '제작년도', width: 61 },
        { field: 'EISNM', headerName: '교재명', width: 188 },
        { field: 'GTDEPTNM', headerName: '지부', width: 65 },
        { field: 'TOTRECEIPT_CNT', headerName: '수령', width: 63 },
        { field: 'RECEIPT_CNT', headerName: '수령', width: 62 },
        { field: 'TAJIBURECEIPT_CNT', headerName: '타지부 수령', width: 70 },
        { field: 'TAJIBUUSE_CNT', headerName: '타지부 지원', width: 70 },
        { field: 'TOTUSE_CNT', headerName: '사용', width: 63 },
        { field: 'USEEDU_CNT', headerName: '교육', width: 62 },
        { field: 'USEETC_CNT', headerName: '기타', width: 62 },
        { field: 'SUPPLY_CNT', headerName: '재고', width: 65 },
    ];
    const columns_gdJibuItemList = [
        { field: 'EIKINDGUBUNNM', headerName: '교보재분류', width: 1 },
        { field: 'GTDEPTNM', headerName: '지부', width: 70 },
        { field: 'EISNM', headerName: '교재명', width: 184 },
        { field: 'TOTRECEIPT_CNT', headerName: '수령', width: 70 },
        { field: 'RECEIPT_CNT', headerName: '수령', width: 70 },
        { field: 'TAJIBURECEIPT_CNT', headerName: '타지부 수령', width: 70 },
        { field: 'TAJIBUUSE_CNT', headerName: '타지부 지원', width: 70 },
        { field: 'TOTUSE_CNT', headerName: '사용', width: 70 },
        { field: 'USEEDU_CNT', headerName: '교육', width: 70 },
        { field: 'USEETC_CNT', headerName: '기타', width: 70 },
        { field: 'SUPPLY_CNT', headerName: '재고', width: 70 },
    ];
    const columns_gdItemJibuList = [
        { field: 'EIKINDGUBUNNM', headerName: '교보재분류', width: 0 },
        { field: 'EISNM', headerName: '교재명', width: 209 },
        { field: 'GTDEPTNM', headerName: '지부', width: 70 },
        { field: 'TOTRECEIPT_CNT', headerName: '수령', width: 60 },
        { field: 'RECEIPT_CNT', headerName: '수령', width: 60 },
        { field: 'TAJIBURECEIPT_CNT', headerName: '타지부 수령', width: 60 },
        { field: 'TAJIBUUSE_CNT', headerName: '타지부 지원', width: 60 },
        { field: 'TOTUSE_CNT', headerName: '사용', width: 60 },
        { field: 'USEEDU_CNT', headerName: '교육', width: 60 },
        { field: 'USEETC_CNT', headerName: '기타', width: 60 },
        { field: 'SUPPLY_CNT', headerName: '재고', width: 60 },
    ];
    const columns_gdYmdList = [
        { field: 'EIKINDGUBUNNM', headerName: '교보재분류', width: 0 },
        { field: 'EISNM', headerName: '교재명', width: 183 },
        { field: 'EHSUBULDATE', headerName: '수불일자', width: 77 },
        { field: 'GTDEPTNM', headerName: '지부', width: 55 },
        { field: 'TOTRECEIPT_CNT', headerName: '수령', width: 60 },
        { field: 'RECEIPT_CNT', headerName: '수령', width: 60 },
        { field: 'TAJIBURECEIPT_CNT', headerName: '타지부 수령', width: 60 },
        { field: 'TAJIBUUSE_CNT', headerName: '타지부 지원', width: 60 },
        { field: 'TOTUSE_CNT', headerName: '사용', width: 60 },
        { field: 'USEEDU_CNT', headerName: '교육', width: 60 },
        { field: 'USEETC_CNT', headerName: '기타', width: 60 },
        { field: 'SUPPLY_CNT', headerName: '재고', width: 53 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained"  onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>출력구분</Box></Grid><Grid item xs={12} md={8}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>부서/지부</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oJibuAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>수불년도</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>수불일자</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oYearAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>교육구분</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oBCodeAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>제작년도</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oMCodeAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>교재명</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oSCodeAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>총건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained"></Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioYearList} columns={columns_gdYearList} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioJibuItemList} columns={columns_gdJibuItemList} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioItemJibuList} columns={columns_gdItemJibuList} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioYmdList} columns={columns_gdYmdList} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmitem0003MEduItemHStatus;

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