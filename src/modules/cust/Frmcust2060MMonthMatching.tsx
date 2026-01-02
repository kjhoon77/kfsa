// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2060MMonthMatching } from './useFrmcust2060MMonthMatching';
import * as Frmcust2060MMonthMatchingData from './Frmcust2060MMonthMatchingData';

export const Frmcust2060MMonthMatching = () => {
    const hook = useFrmcust2060MMonthMatching();
    const columns_gdCloseCheck = [
        { field: 'GTDEPTNM', headerName: '지부', width: 81 },
        { field: 'CFCCHKGUBUN', headerName: '확인여부', width: 68 },
        { field: 'CFCSABUN', headerName: '확인자', width: 68 },
        { field: 'CFCDATE', headerName: '확인일자', width: 87 },
        { field: 'CFCCLOSEGUBUN', headerName: '관리자 마감여부', width: 108 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>년월</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2060MMonthMatchingData.ds_ds_ioYear || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained">조회</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">일치</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">불일치</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioCusFeeChk} columns={columns_gdCloseCheck} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={5}><Box>월보 출력 후 반드시 확인 바랍니다.

수납현황과 회계와의 금액이 일치하면 &apos;일치&apos;를 눌러 주시고,

금액이 일치하지 않으면 &apos;불일치&apos;를 누르신 후 금액을 맞추시고

&apos;일치&apos;를 눌러 주십시오</Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust2060MMonthMatching;

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