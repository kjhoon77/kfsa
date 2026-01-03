// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM9070MPersonalDownloadResult } from './useFrmCOM9070MPersonalDownloadResult';
import * as FrmCOM9070MPersonalDownloadResultData from './FrmCOM9070MPersonalDownloadResultData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const FrmCOM9070MPersonalDownloadResult = () => {
    const hook = useFrmCOM9070MPersonalDownloadResult();
    const columns_dsCloseCheck = [
        { field: 'SEL', headerName: 'SEL', width: 22 },
        { field: 'GTDEPTNM', headerName: '지부', width: 81 },
        { field: 'CHKGUBUN', headerName: '점검결과', width: 68 },
        { field: 'PDCCHKREMARK', headerName: '조치사항', width: 327 },
        { field: 'PNM', headerName: '점검자', width: 68 },
        { field: 'REGDATE', headerName: '점검일자', width: 87 },
        { field: 'CLOSEGUBUN', headerName: '정보지원과 확인여부', width: 136 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "42px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">조회 조건</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '181px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmCOM9070MPersonalDownloadResultData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년월</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmCOM9070MPersonalDownloadResultData.ds_ds_ioYear || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxMonth ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '50px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmCOM9070MPersonalDownloadResultData.ds_ds_ioMonth || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"  startIcon={<Search />} onClick={hook.lfn_Search} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box><Box sx={{ display: hook.isVisible_btnProc ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnProc_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>확인처리</Button></Box><Box sx={{ display: hook.isVisible_btnProcCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnProcCancel_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>확인취소</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "18px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_dsCloseCheck ? undefined : 'none' }}><Paper sx={{ width: '784px', height: '530px', width: '100%', height: 'auto', minHeight: '530px' }}><DataGridWrapper rows={hook.ds_oDownloadChk} columns={columns_dsCloseCheck} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM9070MPersonalDownloadResult;

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