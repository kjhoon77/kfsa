// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmitem0003MEduItemHStatus } from './useFrmitem0003MEduItemHStatus';
import * as Frmitem0003MEduItemHStatusData from './Frmitem0003MEduItemHStatusData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '776px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>출력구분</Typography>
                    <FormControl component="fieldset"><RadioGroup row >{ (Frmitem0003MEduItemHStatusData.ds_ds_oReportGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '170px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부서/지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oJibuAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ ml: "4px", minWidth: "176px" }}><Box sx={{ display: hook.isVisible_lbYear ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '72px', height: '22px' }}><Typography variant="body2">수불년도</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '170px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수불일자</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oYearAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_calSubulDateSearchFr ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '100px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '116px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '171px', height: '22px', display: 'flex', alignItems: 'center', ml: '145px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교재분류</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oRCodeAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '170px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oBCodeAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '171px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>제작년도</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oMCodeAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '119px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oMCodeAll2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '288px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교재명</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oSCodeAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxJibu ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '8px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0003MEduItemHStatusData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '139px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px' }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ ml: "4px", minWidth: "792px" }}><Box sx={{ display: hook.isVisible_gdYearList ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '484px', width: '100%', height: 'auto', minHeight: '484px' }}><DataGridWrapper rows={hook.ds_ioYearList} columns={columns_gdYearList} /></Paper></Box><Box sx={{ display: hook.isVisible_gdJibuItemList ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '484px', width: '100%', height: 'auto', minHeight: '484px' }}><DataGridWrapper rows={hook.ds_ioJibuItemList} columns={columns_gdJibuItemList} /></Paper></Box><Box sx={{ display: hook.isVisible_gdItemJibuList ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '484px', width: '100%', height: 'auto', minHeight: '484px' }}><DataGridWrapper rows={hook.ds_ioItemJibuList} columns={columns_gdItemJibuList} /></Paper></Box><Box sx={{ display: hook.isVisible_gdYmdList ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '484px', width: '100%', height: 'auto', minHeight: '484px' }}><DataGridWrapper rows={hook.ds_ioYmdList} columns={columns_gdYmdList} /></Paper></Box></Box></Stack>

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