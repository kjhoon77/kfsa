// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2160MEGrioGenerate } from './useFrmcust2160MEGrioGenerate';
import * as Frmcust2160MEGrioGenerateData from './Frmcust2160MEGrioGenerateData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust2160MEGrioGenerate = () => {
    const hook = useFrmcust2160MEGrioGenerate();
    const columns_grdExport = [
        { field: 'FJBZIPNO', headerName: '우편번호', width: 80 },
        { field: 'FJBADDR', headerName: '지부주소', width: 360 },
        { field: 'FJBFULLNM', headerName: '지부명', width: 158 },
        { field: 'FJBTEL', headerName: '지부전화번호', width: 209 },
        { field: 'FJBFAX', headerName: '지부팩스번호', width: 189 },
        { field: 'FICNO', headerName: '관리번호', width: 370 },
        { field: 'FBARCODE', headerName: '바코드', width: 243 },
        { field: 'FCUSTADDR1', headerName: '받는이주소1', width: 450 },
        { field: 'FCUSTADDR2', headerName: '받는이주소2', width: 329 },
        { field: 'FCUSTNM', headerName: '받는이성명', width: 377 },
        { field: 'FETC', headerName: '관계인', width: 508 },
        { field: 'FCUSTZIPNO', headerName: '우편번호', width: 80 },
        { field: 'FCMGNO', headerName: '바코드번호', width: 80 },
        { field: 'FJBJIRO', headerName: '지로번호', width: 80 },
        { field: 'FTOTAL', headerName: '금액', width: 80 },
        { field: 'FGROUPNM', headerName: '구분직능', width: 176 },
        { field: 'FBNM', headerName: '업체명', width: 365 },
        { field: 'FCUSTNO', headerName: '관리번호', width: 352 },
        { field: 'FGIJUN4YY', headerName: '년도1', width: 80 },
        { field: 'FGIJUN4', headerName: '년도1고지금액', width: 139 },
        { field: 'FGIJUN3YY', headerName: '년도2', width: 80 },
        { field: 'FGIJUN3', headerName: '년도2고지금액', width: 156 },
        { field: 'FGIJUN2YY', headerName: '년도3', width: 80 },
        { field: 'FGIJUN2', headerName: '년도3고지금액', width: 132 },
        { field: 'FGIJUN1YY', headerName: '년도4', width: 80 },
        { field: 'FGIJUN1', headerName: '년도4고지금액', width: 143 },
        { field: 'FTOTAL', headerName: '합계금액', width: 80 },
        { field: 'FJBFULLNM', headerName: '지부명', width: 114 },
        { field: 'FJBNMTEL', headerName: '지부명+전화번호', width: 363 },
        { field: 'FJBJIRO', headerName: '지로번호', width: 80 },
        { field: 'FTOTAL', headerName: '총 고지금액', width: 80 },
        { field: 'FGROUPNM', headerName: '구분직능', width: 103 },
        { field: 'FBNM', headerName: '업체명', width: 331 },
        { field: 'FCUSTNO', headerName: '관리번호', width: 338 },
        { field: 'FTOTAL', headerName: '납부총액', width: 103 },
        { field: 'FJBFULLNM', headerName: '지부명', width: 103 },
        { field: 'FJBJIROARVNO', headerName: '지로승인번호', width: 103 },
        { field: 'FJBJIRO', headerName: '지로번호', width: 80 },
        { field: 'FTOTAL', headerName: '총 고지금액', width: 80 },
        { field: 'FJIRONOINFO1', headerName: '지로코드1', width: 268 },
        { field: 'FJIRONOINFO2', headerName: '지로코드2', width: 295 },
        { field: 'FJIRONOINFO3', headerName: '지로코드3', width: 289 },
        { field: 'FJIRONOINFO4', headerName: '지로코드4', width: 226 },
        { field: 'FGROUPNM', headerName: '구분직능', width: 150 },
        { field: 'FCUSTNO', headerName: '관리번호', width: 406 },
        { field: 'FBNM', headerName: '업체명', width: 449 },
        { field: 'FTOTAL', headerName: '납부총액원표시', width: 108 },
        { field: 'FJBFULLNM', headerName: '지부명', width: 177 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 73 },
        { field: 'FVIRTUALACCOUNT1', headerName: '국민은행 가상계좌', width: 177 },
        { field: 'FVIRTUALACCOUNT2', headerName: '신한은행 가상계좌', width: 177 },
        { field: 'FVIRTUALACCOUNT3', headerName: '우리은행 가상계좌', width: 177 },
        { field: 'FVIRTUALACCOUNT4', headerName: '농협은행 가상계좌', width: 177 },
        { field: 'FOWNERNM', headerName: '예금주', width: 177 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_localExcel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Save}>파일생성(F4)</Button>
<Button variant="contained"  onClick={hook.lfn_Print}>집계(F9)</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print_A}>지로출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '204px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>기준년도</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '248px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 64, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회원</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '248px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 64, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>비회원</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '528px', height: '28px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비고지방식</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_oFeemode || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ ml: "8px", minWidth: "448px" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '448px', height: '24px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회원구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_oRadioGubun2 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_radMemberGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '288px', height: '24px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_oRadioGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Box><Box sx={{ display: hook.isVisible_Static13 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '72px', height: '22px' }}><Typography variant="body2">비회원</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbText ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '144px', height: '22px' }}><Typography variant="body2">※ 신규등록일 체크</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static12 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '72px', height: '22px' }}><Typography variant="body2">회원</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '232px', height: '22px', display: 'flex', alignItems: 'center', ml: '208px' }}>
                    <Typography variant="body2" sx={{ minWidth: 104, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신규등록일</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_oSelectYN3 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '164px', height: '66px' }}><Typography variant="body2">체크하지 않으면
회원/비회원에 대한 
전체자료 조회 후 회비통지
자료가 생성됩니다.</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '246px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 120, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신규등록일</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_oSelectYN3 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_calStartDate2 ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '106px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '126px', height: '22px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 14, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_calStartDate1 ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '106px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '119px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '304px', height: '22px', display: 'flex', alignItems: 'center', ml: '64px' }}>
                    <Typography variant="body2" sx={{ minWidth: 104, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비부과구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_oNotMemberFirsSecondHalf || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '246px', height: '22px', display: 'flex', alignItems: 'center', ml: '172px' }}>
                    <Typography variant="body2" sx={{ minWidth: 120, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>실무교육유효기간</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_oSelectYN3 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '304px', height: '22px', display: 'flex', alignItems: 'center', ml: '464px' }}>
                    <Typography variant="body2" sx={{ minWidth: 104, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>탈퇴비회원 고지</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_oNotification || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_CalEuFromDate ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '106px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '119px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '333px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2160MEGrioGenerateData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '193px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 18, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2160MEGrioGenerateData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '392px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_ioCourseYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxCourse_1 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2160MEGrioGenerateData.ds_ds_oCourse_Minus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxCourse_2 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2160MEGrioGenerateData.ds_ds_oCourse_Minus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxCourse_3 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2160MEGrioGenerateData.ds_ds_oCourse_Minus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxCourse1 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '153px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2160MEGrioGenerateData.ds_ds_oCourse_Minus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxCourse_4 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2160MEGrioGenerateData.ds_ds_oCourse_Minus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxCourse_5 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2160MEGrioGenerateData.ds_ds_oCourse_Minus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxCourse_6 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2160MEGrioGenerateData.ds_ds_oCourse_Minus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '764px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>재고지(반송구분)</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_oReturn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '281px', height: '23px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>장기미납</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2160MEGrioGenerateData.ds_ds_oSelectYN1 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cboNotYear ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2160MEGrioGenerateData.ds_ds_oLongNotSunap || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '23px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>납부마감일</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '280px', height: '23px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년도별 미납</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2160MEGrioGenerateData.ds_ds_oSelectYN2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_chkYearNotSunap1 ? undefined : 'none' }}><Box sx={{ width: '56px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_chkYearNotSunap2 ? undefined : 'none' }}><Box sx={{ width: '56px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_chkYearNotSunap3 ? undefined : 'none' }}><Box sx={{ width: '56px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_chkYearNotSunap4 ? undefined : 'none' }}><Box sx={{ width: '56px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '380px', height: '34px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>공공기관 기관장
선임자료 고지여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_oNotification2 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '380px', height: '34px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리제외대상
회비고지 여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_oNotification3 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>정렬순서</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2160MEGrioGenerateData.ds_ds_oOrderBy || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "12px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '244px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 156, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>처리대상수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '220px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 132, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회 총 대상수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static27 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '143px' }}><Typography variant="body2">징
수
할
회
비</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static23 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '204px', height: '22px' }}><Typography variant="body2">합 계</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static24 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '196px', height: '22px' }}><Typography variant="body2">상반기</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static25 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '196px', height: '22px' }}><Typography variant="body2">하반기</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 128, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비총액</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edMemberFeeFirst ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '196px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edMemberFeeSceond ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '196px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 128, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edMemberFeeYearFirst1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '196px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edMemberFeeYearSceond1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '196px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 128, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edMemberFeeYearFirst2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '196px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edMemberFeeYearSceond2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '196px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 128, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edMemberFeeYearFirst3 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '196px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edMemberFeeYearSceond3 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '196px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 128, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edMemberFeeYearFirst4 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '196px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edMemberFeeYearSceond4 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '196px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "18px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport ? undefined : 'none' }}><Paper sx={{ width: '424px', height: '134px', width: '100%', height: 'auto', minHeight: '134px' }}><DataGridWrapper rows={hook.ds_ioCreateNotification} columns={columns_grdExport} /></Paper></Box><Box sx={{ display: hook.isVisible_fdImport ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fdImport</Button></Box><Box sx={{ display: hook.isVisible_fdExport ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fdExport</Button></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust2160MEGrioGenerate;

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