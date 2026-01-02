// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM1000PIncomePaymentList } from './useFrmCOM1000PIncomePaymentList';
import * as FrmCOM1000PIncomePaymentListData from './FrmCOM1000PIncomePaymentListData';

export const FrmCOM1000PIncomePaymentList = () => {
    const hook = useFrmCOM1000PIncomePaymentList();
    const columns_gdIncomePayment = [
        { field: 'OPMGNO', headerName: '관리번호', width: 65 },
        { field: 'OPNM', headerName: '소득자', width: 65 },
        { field: 'RESIDENT', headerName: '생년월일', width: 65 },
        { field: 'BIZGUBUN', headerName: '소득구분', width: 65 },
        { field: 'STATUS', headerName: '상태', width: 45 },
        { field: 'JIBU', headerName: '등록지부', width: 85 },
        { field: 'OIPRTNO', headerName: '발급번호', width: 65 },
        { field: 'OIINCOMECD', headerName: '소득코드', width: 65 },
        { field: 'PAYMENTDATE', headerName: '지급일자', width: 85 },
        { field: 'OIPAYMENT', headerName: '지급총액', width: 85 },
        { field: 'OIINCOME', headerName: '소득금액', width: 85 },
        { field: 'OIOTOTAL', headerName: '원천세액', width: 85 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    
                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회대상</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회구분</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained">조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>적용년도</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained">선택</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>~</Box></Grid><Grid item xs={12} md={2}><Button variant="contained">닫기</Button></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM1000PIncomePaymentList;

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