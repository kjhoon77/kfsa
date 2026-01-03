// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2180MAccountSearch } from './useFrmcust2180MAccountSearch';
import * as Frmcust2180MAccountSearchData from './Frmcust2180MAccountSearchData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust2180MAccountSearch = () => {
    const hook = useFrmcust2180MAccountSearch();
    const columns_dsError = [
        { field: 'SEQ', headerName: '순번', width: 30 },
        { field: 'TR_IL', headerName: '입금일자', width: 76 },
        { field: 'CGTMGNO', headerName: '지부', width: 51 },
        { field: 'CNO', headerName: '관리번호', width: 59 },
        { field: 'TR_AMT', headerName: '금액', width: 62 },
        { field: 'INP_ST', headerName: '입금상태', width: 57 },
        { field: 'ER_GUBUN', headerName: '오류상태', width: 80 },
        { field: 'ER_MSG', headerName: '오류 내용', width: 335 },
        { field: 'BANK_NM', headerName: '은행', width: 57 },
        { field: 'IACCT_NO', headerName: '가상계좌', width: 121 },
    ];
    const columns_gdChange = [
        { field: 'SEQ', headerName: '순번', width: 36 },
        { field: 'CGTMGNO', headerName: '지부', width: 60 },
        { field: 'CNO', headerName: '관리번호', width: 64 },
        { field: 'TR_AMT', headerName: '금액', width: 68 },
        { field: 'BNM', headerName: '대상물명', width: 107 },
    ];
    const columns_gdProc = [
        { field: 'SEQ', headerName: '순번', width: 40 },
        { field: 'TR_IL', headerName: '입금일자', width: 90 },
        { field: 'CGTMGNO', headerName: '지부', width: 60 },
        { field: 'CNO', headerName: '관리번호', width: 68 },
        { field: 'CNICKNM', headerName: '직능', width: 81 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 64 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 166 },
        { field: 'TR_AMT', headerName: '금액', width: 64 },
        { field: 'BANK_NM', headerName: '은행', width: 63 },
        { field: 'IACCT_NO', headerName: '가상계좌', width: 143 },
        { field: 'INP_ST', headerName: '입금상태', width: 58 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '184px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2180MAccountSearchData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '190px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>은행</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2180MAccountSearchData.ds_ds_oBank || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '320px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2180MAccountSearchData.ds_ds_oMemberFee || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>입금일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '115px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '360px', height: '22px', display: 'flex', alignItems: 'center', ml: '91px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>정렬순서</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2180MAccountSearchData.ds_ds_oSort || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '124px', height: '22px' }}><Typography variant="body2">정상처리 목록</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '208px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>정상 건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '208px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>정상 처리 금액</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdProc ? undefined : 'none' }}><Paper sx={{ width: '784px', height: '262px', width: '100%', height: 'auto', minHeight: '262px' }}><DataGridWrapper rows={hook.ds_oAccount} columns={columns_gdProc} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static9 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '124px', height: '22px' }}><Typography variant="body2">오류 목록</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static10 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '264px', height: '22px' }}><Typography variant="body2">정상처리 목록 중 비회원 → 회원 변경 내역</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '136px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 64, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>오류 건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '156px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 64, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>오류 금액</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '129px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회원 변경 건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '176px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>금액</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_dsError ? undefined : 'none' }}><Paper sx={{ width: '416px', height: '190px', width: '100%', height: 'auto', minHeight: '190px' }}><DataGridWrapper rows={hook.ds_oError} columns={columns_dsError} /></Paper></Box><Box sx={{ display: hook.isVisible_gdChange ? undefined : 'none' }}><Paper sx={{ width: '356px', height: '190px', width: '100%', height: 'auto', minHeight: '190px' }}><DataGridWrapper rows={hook.ds_oChange} columns={columns_gdChange} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust2180MAccountSearch;

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