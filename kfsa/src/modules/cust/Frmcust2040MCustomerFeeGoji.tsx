// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2040MCustomerFeeGoji } from './useFrmcust2040MCustomerFeeGoji';
import * as Frmcust2040MCustomerFeeGojiData from './Frmcust2040MCustomerFeeGojiData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust2040MCustomerFeeGoji = () => {
    const hook = useFrmcust2040MCustomerFeeGoji();
    const columns_grdExport = [
        { field: 'FJBZIPNO', headerName: '우편번호', width: 80 },
        { field: 'FJBADDR', headerName: '지부주소', width: 360 },
        { field: 'FJBFULLNM', headerName: '지부명', width: 158 },
        { field: 'FJBTEL', headerName: '지부전화번호', width: 209 },
        { field: 'FJBFAX', headerName: '지부팩스번호', width: 189 },
        { field: 'FICNO', headerName: '관리번호', width: 80 },
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
        { field: 'FICNO', headerName: '관리번호', width: 80 },
        { field: 'FGIJUN1YY', headerName: '년도1', width: 80 },
        { field: 'FGIJUN1', headerName: '년도1고지금액', width: 139 },
        { field: 'FGIJUN2YY', headerName: '년도2', width: 80 },
        { field: 'FGIJUN2', headerName: '년도2고지금액', width: 156 },
        { field: 'FGIJUN3YY', headerName: '년도3', width: 80 },
        { field: 'FGIJUN3', headerName: '년도3고지금액', width: 132 },
        { field: 'FGIJUN4YY', headerName: '년도4', width: 80 },
        { field: 'FGIJUN4', headerName: '년도4고지금액', width: 143 },
        { field: 'FTOTAL', headerName: '합계금액', width: 80 },
        { field: 'FJBFULLNM', headerName: '지부명', width: 114 },
        { field: 'FJBNMTEL', headerName: '지부명+전화번호', width: 363 },
        { field: 'FJBJIRO', headerName: '지로번호', width: 80 },
        { field: 'FTOTAL', headerName: '총 고지금액', width: 80 },
        { field: 'FGROUPNM', headerName: '구분직능', width: 103 },
        { field: 'FBNM', headerName: '업체명', width: 331 },
        { field: 'FICNO', headerName: '관리번호', width: 103 },
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
        { field: 'FICNO', headerName: '관리번호', width: 80 },
        { field: 'FBNM', headerName: '업체명', width: 449 },
        { field: 'FTOTAL', headerName: '납부총액원표시', width: 108 },
        { field: 'FJBFULLNM', headerName: '지부명', width: 146 },
        { field: 'FVIRTUALACCOUNT1', headerName: '국민은행 가상계좌', width: 146 },
        { field: 'FVIRTUALACCOUNT2', headerName: '신한은행 가상계좌', width: 146 },
        { field: 'FVIRTUALACCOUNT3', headerName: '우리은행 가상계좌', width: 146 },
        { field: 'FVIRTUALACCOUNT4', headerName: '농협은행 가상계좌', width: 146 },
        { field: 'FOWNERNM', headerName: '예금주', width: 146 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_localExcel}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "50px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static14 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">조회 조건</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년도</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioYear || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '167px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '172px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioChoiceYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxRegion2 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '121px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '141px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '238px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회원구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '304px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioCourseYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxCourse1 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '121px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxCourse_1 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxCourse_2 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxCourse_3 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxCourse_4 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxCourse_5 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxCourse_6 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '472px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>납부범위</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '242px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리번호</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioChoiceYn_Num || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_meNum1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '52px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '72px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '264px', height: '26px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 144, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동일 대상물명 발행여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioApply || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edBuliding ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '174px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ ml: "8px", minWidth: "244px" }}><Box sx={{ display: hook.isVisible_Static28 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '244px', height: '22px' }}><Typography variant="body2">비회원 회비부과 상하반기 선택</Typography></Box></Box><Box sx={{ display: hook.isVisible_Div0 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '172px', height: '158px', width: '100%', height: 'auto', minHeight: '158px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "43px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edMumber4 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '52px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edMumber5 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '52px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edMumber6 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '52px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edMumber7 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '52px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edMumber8 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '52px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edMumber9 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '52px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.Div0_Button4Yes_OnClick} sx={{ width: '38px', height: '26px', whiteSpace: "nowrap" }}>확인</Button></Box><Box sx={{ display: hook.isVisible_Button4 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.Div0_Button4_OnClick} sx={{ width: '38px', height: '26px', whiteSpace: "nowrap" }}>취소</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "221px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_MaskEdit3 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '52px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "72px", py: 0.5, width: "100%" }}><Box sx={{ ml: "196px", minWidth: "52px" }}><Box sx={{ display: hook.isVisible_MaskEdit0 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '52px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_MaskEdit1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '52px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Box></Stack>
</Stack></Paper></Box></Box><Box sx={{ display: hook.isVisible_radNotMemberFirsSecondHalf ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '192px', height: '22px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioUpDown || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '440px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 244, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>탈퇴신청한 비회원 회비고지 여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '440px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 244, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리제외 대상 회비고지 여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '440px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 244, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>공공기관 기관장 선임자료 회비고지 여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "13px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static43 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">출력 조건</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '440px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 244, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부주소, 지로번호, 지부명 출력여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '440px', height: '46px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 244, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>통지서 출력 범위조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun_1_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>납부일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static26 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '100px', height: '22px' }}><Typography variant="body2">통지서 여백조정</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '108px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상단여백</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static32 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '28px', height: '22px' }}><Typography variant="body2">mm</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '108px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>출력갯수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '108px', height: '22px', display: 'flex', alignItems: 'center', ml: '112px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>왼쪽여백</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static33 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '28px', height: '22px' }}><Typography variant="body2">mm</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '176px', height: '25px' }}><Typography variant="body2">상단, 왼쪽 여백 50은 기본값입니다.</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static27 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">정렬순서</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radOrderBy ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '440px', height: '22px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun_1 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "19px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '163px', height: '22px', display: 'flex', alignItems: 'center', ml: '288px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>발행일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "26px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport ? undefined : 'none' }}><Paper sx={{ width: '384px', height: '194px', width: '100%', height: 'auto', minHeight: '194px' }}><DataGridWrapper rows={hook.ds_ioMCustomerFeeGoji} columns={columns_grdExport} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust2040MCustomerFeeGoji;

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