// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu0400MExamJubsuManagement } from './useFrmspcledu0400MExamJubsuManagement';
import * as Frmspcledu0400MExamJubsuManagementData from './Frmspcledu0400MExamJubsuManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmspcledu0400MExamJubsuManagement = () => {
    const hook = useFrmspcledu0400MExamJubsuManagement();
    const columns_gdSetlmentHist = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'ESPROCDATE', headerName: '처리일자', width: 77 },
        { field: 'ESSETLMTYN', headerName: '결제', width: 47 },
        { field: 'EARLYGUBUNNAME', headerName: '선수납', width: 47 },
        { field: 'ESGUBUNCDNM', headerName: '결제구분', width: 98 },
        { field: 'ESGUBUNNM', headerName: '결제방법', width: 106 },
        { field: 'ESPROCAMOUNT', headerName: '금액(원)', width: 70 },
        { field: 'ESREPAYREF', headerName: '환불No.', width: 65 },
        { field: 'ESPROCGTMGNM', headerName: '처리지부', width: 73 },
        { field: 'PROCSABUN', headerName: '처리자', width: 73 },
        { field: 'ESJUMUNNO', headerName: '주문번호', width: 94 },
        { field: 'TAXRCPTYN', headerName: '세금계산서발행여부', width: 0 },
        { field: 'ESPOSGTMGNM', headerName: 'POS지부', width: 94 },
        { field: 'ESMGGTMGNM', headerName: '관리지부', width: 94 },
        { field: 'EARLYGUBUN', headerName: '선수납여부', width: 1 },
    ];
    const columns_gdJubsuInfo = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'MGJIBUCD', headerName: '지부', width: 68 },
        { field: 'YEAR', headerName: '년도', width: 36 },
        { field: 'COURSEMUNJECD', headerName: '직능', width: 134 },
        { field: 'EORDER', headerName: '회차', width: 31 },
        { field: 'JUBSUNO', headerName: '접수번호', width: 58 },
        { field: 'PASSDATE', headerName: '합격일자', width: 83 },
        { field: 'LASTSUNAPGUBUN', headerName: '환불', width: 47 },
    ];
    const columns_gdOrderHist = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'BEFORJIBU', headerName: '지부', width: 70 },
        { field: 'BEFORORDER', headerName: '회차', width: 50 },
        { field: 'BEFORJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'AFTERJIBU', headerName: '변경 후', width: 70 },
        { field: 'AFTERORDER', headerName: '회차', width: 50 },
        { field: 'AFTERJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'EOHPROCDATE', headerName: '처리일자', width: 79 },
        { field: 'LASTSUNAPGUBUN', headerName: '환불여부', width: 60 },
        { field: 'EJHPROCREASON', headerName: '변경사유', width: 200 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Delete}>삭제 저장</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>응시원서출력(F9)</Button>
<Button variant="contained"  onClick={hook.btnSearchPersonInfoChange_OnClick}>접수자정보변경</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Detailed Info</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '179px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmspcledu0400MExamJubsuManagementData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '128px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년도</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_lbPersonNm ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">성명</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '312px', height: '84px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl component="fieldset"><RadioGroup row >{ (Frmspcledu0400MExamJubsuManagementData.ds_ds_oCourse || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_lbResidentNo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">주민번호</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbAddr ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">주소</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "41px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회차</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchExamOrder ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSearchExamOrder_OnClick} sx={{ width: '92px', height: '24px' }}>접수가능회차</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbTel ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">전화번호</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>접수번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSeqList ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSeqList_OnClick} sx={{ width: '92px', height: '24px' }}>접수목록</Button></Box><Box sx={{ display: hook.isVisible_btnUnUseJubsuNo ? undefined : 'none' }}><Button variant="contained"  onClick={hook.lfn_SearchUnUseJubsuNo} sx={{ width: '66px', height: '24px' }}>빈번호</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbEmail ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">E-Mail</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>좌석번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbExpYn ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">경력자여부</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbExamInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '48px' }}><Typography variant="body2">회차정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbExamInfo1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '272px', height: '24px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbExamInfo2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '272px', height: '24px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbOrderChange ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">회차변경</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnExamJubsuModify ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnExamJubsuModify_OnClick} sx={{ width: '85px', height: '24px' }}>회차변경</Button></Box><Box sx={{ display: hook.isVisible_lbSetlmt ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">결제내역</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '128px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>합격여부</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnModifyHistory ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnModifyHistory_OnClick} sx={{ width: '66px', height: '24px' }}>변경이력</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>점수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnExamCheatingManageLink ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnExamCheatingManageLink_OnClick} sx={{ width: '92px', height: '24px' }}>부정행위관리</Button></Box><Box sx={{ display: hook.isVisible_btnJubsuHistory ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnJubsuHistory_OnClick} sx={{ width: '66px', height: '24px' }}>접수이력</Button></Box><Box sx={{ display: hook.isVisible_btnSetlmt ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSetlmt_OnClick} sx={{ width: '96px', height: '99px' }}>결제(POS)</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "21px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbJubsuInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">개인접수정보</Typography></Box></Box></Stack>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>List</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "49px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgLastestPicture ? undefined : 'none' }}><Box sx={{ width: '94px', height: '122px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgLastestPicture</Box></Box><Box sx={{ display: hook.isVisible_imgPicture ? undefined : 'none' }}><Box sx={{ width: '112px', height: '146px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgPicture</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edPersonNm ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.PERSONNM || ''} sx={{ width: '106px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearchPersonInfo ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSearchPersonInfo_OnClick} sx={{ width: '93px', height: '24px' }}>기본정보</Button></Box><Box sx={{ display: hook.isVisible_btnSearchRegPicture ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSearchRegPicture_OnClick} sx={{ width: '93px', height: '24px' }}>등록사진조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medResidentNo ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.RESIDENTNO || ''} sx={{ width: '106px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnAuthResidentNo ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnAuthResidentNo_OnClick} sx={{ width: '93px', height: '24px' }}>실명인증</Button></Box><Box sx={{ display: hook.isVisible_btnPictureManagement ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnPictureManagement_OnClick} sx={{ width: '93px', height: '24px' }}>사진관리</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.ZIPCD || ''} sx={{ width: '58px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearchZipCode ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnSearchZipCode_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px' }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnTraingJubsuHist ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnTraingJubsuHist_OnClick} sx={{ width: '92px', height: '24px' }}>접수정보(F6)</Button></Box><Box sx={{ display: hook.isVisible_btnApplyPicture ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnApplyPicture_OnClick} sx={{ width: '93px', height: '24px' }}>최근사진반영</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.ADDR1 || ''} sx={{ width: '436px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.ADDR2 || ''} sx={{ width: '436px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edTel ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.TEL || ''} sx={{ width: '104px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '196px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>휴대폰</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.HPTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSendSms ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSendSms_OnClick} sx={{ width: '66px', height: '24px' }}>SMS발송</Button></Box><Box sx={{ display: hook.isVisible_btnSmsStat ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSmsStat_OnClick} sx={{ width: '66px', height: '24px' }}>SMS현황</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edEmail ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.EMAILID || ''} sx={{ width: '95px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '118px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 16, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>@</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.EMAILDOMAIN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_cbxEmailDomain ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '92px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmspcledu0400MExamJubsuManagementData.ds_ds_oEmailDomain || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_btnSendEmail ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSendEmail_OnClick} sx={{ width: '66px', height: '24px' }}>메일발송</Button></Box><Box sx={{ display: hook.isVisible_btnEmailStat ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnEmailStat_OnClick} sx={{ width: '66px', height: '24px' }}>메일현황</Button></Box><Box sx={{ display: hook.isVisible_btnScanPicture ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnScanPicture_OnClick} sx={{ width: '119px', height: '24px' }}>사진스캔실행</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_chkExpYn ? undefined : 'none' }}><Box sx={{ width: '88px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_btnLoadScanPicture ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnLoadScanPicture_OnClick} sx={{ width: '119px', height: '24px' }}>스캔사진불러오기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Edit0 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.MUNJEGUBUN || ''} sx={{ width: '24px', height: '18px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnLoadPicture ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnLoadPicture_OnClick} sx={{ width: '119px', height: '24px' }}>사진찾기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "40px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnPosReport ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnPosReport_OnClick} sx={{ width: '105px', height: '24px' }}>통합영수증조회</Button></Box><Box sx={{ display: hook.isVisible_btnShowVirtualAccount ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnShowVirtualAccount_OnClick} sx={{ width: '92px', height: '24px' }}>가상계좌보기</Button></Box><Box sx={{ display: hook.isVisible_btnChangeProcDate ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnChangeProcDate_OnClick} sx={{ width: '92px', height: '24px' }}>처리일자변경</Button></Box><Box sx={{ display: hook.isVisible_btnProcRct ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnProcRct_OnClick} sx={{ width: '131px', height: '24px' }}>현금영수증처리/취소</Button></Box><Box sx={{ display: hook.isVisible_btnPrintReRct ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnPrintReRct_OnClick} sx={{ width: '92px', height: '24px' }}>영수증재발행</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdSetlmentHist ? undefined : 'none' }}><Paper sx={{ width: '557px', height: '139px', width: '100%', height: 'auto', minHeight: '139px' }}><DataGridWrapper rows={hook.ds_oSetlmentHist} columns={columns_gdSetlmentHist} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbJubsuHist ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">개인접수회차이력</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdJubsuInfo ? undefined : 'none' }}><Paper sx={{ width: '492px', height: '150px', width: '100%', height: 'auto', minHeight: '150px' }}><DataGridWrapper rows={hook.ds_oJubsuAllInfo} columns={columns_gdJubsuInfo} /></Paper></Box><Box sx={{ display: hook.isVisible_gdOrderHist ? undefined : 'none' }}><Paper sx={{ width: '496px', height: '150px', width: '100%', height: 'auto', minHeight: '150px' }}><DataGridWrapper rows={hook.ds_oOrderHist} columns={columns_gdOrderHist} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu0400MExamJubsuManagement;

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