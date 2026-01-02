// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6400MDataConnectionChangeManage } from './useFrmcust6400MDataConnectionChangeManage';
import * as Frmcust6400MDataConnectionChangeManageData from './Frmcust6400MDataConnectionChangeManageData';

export const Frmcust6400MDataConnectionChangeManage = () => {
    const hook = useFrmcust6400MDataConnectionChangeManage();
    const columns_gdTankChangeHList = [
        { field: 'RNUM', headerName: '순번', width: 30 },
        { field: 'SEL', headerName: '반영', width: 46 },
        { field: 'SEL2', headerName: '미반영', width: 46 },
        { field: 'MMREGDATE', headerName: '안전원전송일시', width: 127 },
        { field: 'MCPROCNM', headerName: '변경항목', width: 111 },
        { field: 'MHAPPLYGUBUN', headerName: '반영여부', width: 60 },
        { field: 'MHBEFORE', headerName: '변경 전', width: 150 },
        { field: 'MHAFTER', headerName: '변경 후', width: 180 },
        { field: 'PROCVALUE', headerName: '적용 값', width: 181 },
    ];
    const columns_gdSokiChangeHList = [
        { field: 'RNUM', headerName: '순번', width: 30 },
        { field: 'SEL', headerName: '반영', width: 46 },
        { field: 'SEL2', headerName: '미반영', width: 46 },
        { field: 'MMREGDATE', headerName: '안전원전송일시', width: 127 },
        { field: 'MCPROCNM', headerName: '변경항목', width: 111 },
        { field: 'MHAPPLYGUBUN', headerName: '반영여부', width: 60 },
        { field: 'MHBEFORE', headerName: '변경 전', width: 150 },
        { field: 'MHAFTER', headerName: '변경 후', width: 180 },
        { field: 'PROCVALUE', headerName: '적용 값', width: 181 },
    ];
    const columns_gdDangerChangeHList = [
        { field: 'RNUM', headerName: '순번', width: 30 },
        { field: 'SEL', headerName: '반영', width: 46 },
        { field: 'SEL2', headerName: '미반영', width: 46 },
        { field: 'MMREGDATE', headerName: '안전원전송일시', width: 127 },
        { field: 'MCPROCNM', headerName: '변경항목', width: 111 },
        { field: 'MHAPPLYGUBUN', headerName: '반영여부', width: 60 },
        { field: 'MHBEFORE', headerName: '변경 전', width: 150 },
        { field: 'MHAFTER', headerName: '변경 후', width: 180 },
        { field: 'PROCVALUE', headerName: '적용 값', width: 181 },
    ];
    const columns_gdBangChangeHList = [
        { field: 'RNUM', headerName: '순번', width: 30 },
        { field: 'SEL', headerName: '반영', width: 46 },
        { field: 'SEL2', headerName: '미반영', width: 46 },
        { field: 'MMREGDATE', headerName: '안전원전송일시', width: 127 },
        { field: 'MCPROCNM', headerName: '변경항목', width: 100 },
        { field: 'MHAPPLYGUBUN', headerName: '반영여부', width: 60 },
        { field: 'MHBEFORE', headerName: '변경 전', width: 150 },
        { field: 'PROCVALUE', headerName: '적용 값', width: 181 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.fn_Excel}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부명</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6400MDataConnectionChangeManageData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지역</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6400MDataConnectionChangeManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6400MDataConnectionChangeManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>회</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6400MDataConnectionChangeManageData.ds_ds_ioCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>변경일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>조회건수</Box></Grid><Grid item xs={12} md={2}><Box>1000</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>DB적용여부</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>조회조건선택</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6400MDataConnectionChangeManageData.ds_ds_oSearchChoice || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={11}><Box>Div0</Box></Grid><Grid item xs={12} md={11}><Box>Div0</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>변경내역 처리</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>총건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>처리대상</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.BNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained">변경내역 저장(F4)</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioTankChangeHList} columns={columns_gdTankChangeHList} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioSokiChangeHList} columns={columns_gdSokiChangeHList} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioBangChangeHList} columns={columns_gdBangChangeHList} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6400MDataConnectionChangeManage;

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