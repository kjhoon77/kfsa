// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2060MMonthMatching } from './useFrmcust2060MMonthMatching';
import * as Frmcust2060MMonthMatchingData from './Frmcust2060MMonthMatchingData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

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
                <Typography variant="h5">수납현황 회계와 일치여부 확인</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '137px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년월</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2060MMonthMatchingData.ds_ds_ioYear || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxMonth ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '50px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2060MMonthMatchingData.ds_ds_ioMonth || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"  startIcon={<Search />} onClick={hook.lfn_Search} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box><Box sx={{ display: hook.isVisible_btnMatched ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnMatched_OnClick} sx={{ width: '79px', height: '24px', whiteSpace: "nowrap" }}>일치</Button></Box><Box sx={{ display: hook.isVisible_btnUnmatched ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnUnmatched_OnClick} sx={{ width: '79px', height: '24px', whiteSpace: "nowrap" }}>불일치</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdCloseCheck ? undefined : 'none' }}><Paper sx={{ width: '448px', height: '85px', width: '100%', height: 'auto', minHeight: '85px' }}><DataGridWrapper rows={hook.ds_ioCusFeeChk} columns={columns_gdCloseCheck} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbTextBlue ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '436px', height: '94px' }}><Typography variant="body2">월보 출력 후 반드시 확인 바랍니다.

수납현황과 회계와의 금액이 일치하면 &apos;일치&apos;를 눌러 주시고,

금액이 일치하지 않으면 &apos;불일치&apos;를 누르신 후 금액을 맞추시고

&apos;일치&apos;를 눌러 주십시오</Typography></Box></Box></Stack>

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