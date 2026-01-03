// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdIncomePayment ? undefined : 'none' }}><Paper sx={{ width: '730px', height: '292px', width: '100%', height: 'auto', minHeight: '292px' }}><DataGridWrapper rows={hook.ds_oSearchotherincome} columns={columns_gdIncomePayment} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '22px' }}><Typography variant="body2">조회대상</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edsRange1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '116px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '453px', height: '27px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (FrmCOM1000PIncomePaymentListData.ds_ds_ioSearchGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"  startIcon={<Search />} onClick={hook.lfn_Search} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edsRange2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '116px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbOiyear ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '65px', height: '22px' }}><Typography variant="body2">적용년도</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbRange ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '250px', height: '22px' }}><Typography variant="body2"></Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSelect ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSelect_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>선택</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medsRange1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '116px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medYear ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '65px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_lbs ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '10px', height: '22px' }}><Typography variant="body2">~</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnEnd ? undefined : 'none' }}><Button variant="contained"  startIcon={<Close />} onClick={hook.lfn_End} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>닫기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medsRange2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '116px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>

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