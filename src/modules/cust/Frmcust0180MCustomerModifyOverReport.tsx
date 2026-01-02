// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0180MCustomerModifyOverReport } from './useFrmcust0180MCustomerModifyOverReport';
import * as Frmcust0180MCustomerModifyOverReportData from './Frmcust0180MCustomerModifyOverReportData';

export const Frmcust0180MCustomerModifyOverReport = () => {
    const hook = useFrmcust0180MCustomerModifyOverReport();
    const columns_gdList = [
        { field: 'MEMBER_GUBUN_NM', headerName: '구분', width: 59 },
        { field: 'CLAS_NM', headerName: 'CLAS_NM', width: 165 },
        { field: 'BF_MEMBER_CNT', headerName: '전월', width: 60 },
        { field: 'TO_MEMBER_CNT', headerName: '당월', width: 60 },
        { field: 'ADD_MEMBER_CNT', headerName: '증감', width: 60 },
        { field: 'NEW_MEMBER_CNT', headerName: '신규', width: 60 },
        { field: 'DEL_TOT_CNT', headerName: '대 상 제 외', width: 60 },
        { field: 'DEL_CNT0', headerName: '소멸', width: 60 },
        { field: 'DEL_CNT1', headerName: '용폐', width: 60 },
        { field: 'DEL_CNT2', headerName: '중복', width: 60 },
        { field: 'DEL_CNT3', headerName: '기타', width: 60 },
        { field: 'DEL_CNT4', headerName: '탈퇴', width: 60 },
        { field: 'DEL_CNT5', headerName: '변경', width: 60 },
        { field: 'BF_COVER_CNT', headerName: '겸 직 현 황', width: 60 },
        { field: 'TO_COVER_CNT', headerName: '당월', width: 60 },
        { field: 'ADD_COVER_CNT', headerName: '증감', width: 60 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnExcell_OnClick}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_Save}>생성(F2)</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0180MCustomerModifyOverReportData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>작성년월</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={5}><Box> 해당 월의 자료는 한번만 생성 가능하오니 반드시 월말에 한번 자료 생성을

 해주시기 바랍니다.

 해당월의 자료가 이미 생성되어 있을 경우, 출력 버튼만 누르면 출력이 가능

 합니다.</Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0180MCustomerModifyOverReport;

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