// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1025MEduJubsuManagement } from './useFrmcust1025MEduJubsuManagement';
import * as Frmcust1025MEduJubsuManagementData from './Frmcust1025MEduJubsuManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust1025MEduJubsuManagement = () => {
    const hook = useFrmcust1025MEduJubsuManagement();
    const columns_gdJubsuInfo = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'ESGTMGNO', headerName: '지부', width: 60 },
        { field: 'ESYEAR', headerName: '년도', width: 36 },
        { field: 'ESCOUSECD', headerName: '직능', width: 109 },
        { field: 'ESEDUORDER', headerName: '회차', width: 31 },
        { field: 'EJHJUBSUNO', headerName: '접수번호', width: 58 },
        { field: 'ISUDATE', headerName: '이수일자', width: 83 },
        { field: 'SUNAPGUBUN', headerName: '수납여부', width: 59 },
        { field: 'PROCDATE', headerName: '접수일자', width: 83 },
        { field: 'EJHSABUN', headerName: '접수자', width: 83 },
    ];
    const columns_gdOrderHist = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'STATUS', headerName: '접수상태', width: 85 },
        { field: 'BEFORJIBU', headerName: '지부', width: 70 },
        { field: 'BEFORORDER', headerName: '회차', width: 50 },
        { field: 'BEFORJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'AFTERJIBU', headerName: '변경 후', width: 70 },
        { field: 'AFTERORDER', headerName: '회차', width: 50 },
        { field: 'AFTERJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'PROCDATE', headerName: '처리일자', width: 85 },
        { field: 'EJHSABUN', headerName: '처리자', width: 85 },
        { field: 'EJHREASON', headerName: '사유', width: 189 },
        { field: 'SUNAPGUBUN', headerName: '수납여부', width: 60 },
    ];
    const columns_gdMemFee = [
        { field: 'CFGYEAR', headerName: '년도', width: 38 },
        { field: 'CFCCGUBUN', headerName: '구분', width: 46 },
        { field: 'MINAPFEE', headerName: '미납금액', width: 78 },
        { field: 'SUNAPFEE', headerName: '수납금액', width: 80 },
    ];
    const columns_gdSunap = [
        { field: 'id', headerName: 'No', width: 24, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'SUNAPYEAR', headerName: '년월', width: 95 },
        { field: 'SETLMGUBUNNM', headerName: '결제', width: 39 },
        { field: 'CFGUBUN', headerName: '결제구분', width: 65 },
        { field: 'CFGUBUNCDNM', headerName: '결제방법', width: 103 },
        { field: 'SUNAPFEE', headerName: '금액', width: 54 },
        { field: 'PROCDATE', headerName: '처리일자', width: 76 },
        { field: 'PONYDATE', headerName: '정산일자', width: 78 },
        { field: 'PVINFO', headerName: '계산서', width: 55 },
        { field: 'CFREGNM', headerName: '처리자', width: 65 },
        { field: 'PROCGTNM', headerName: '처리지부', width: 65 },
        { field: 'MGGTNM', headerName: '관리지부', width: 65 },
        { field: 'POSGTNM', headerName: 'POS지부', width: 65 },
        { field: 'PMPCORDERNO', headerName: '주문번호', width: 102 },
        { field: 'CFREMARK', headerName: '비고', width: 296 },
    ];
    const columns_gdReady = [
        { field: 'SEL', headerName: 'SEL', width: 20 },
        { field: 'CFMGGTNM', headerName: '지부', width: 70 },
        { field: 'CNO', headerName: '관리번호', width: 69 },
        { field: 'CREGCD', headerName: '지역', width: 57 },
        { field: 'CCOURSENM', headerName: '직능', width: 96 },
        { field: 'CFMEMBERNM', headerName: '고객구분', width: 58 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 154 },
        { field: 'FMNM', headerName: '선임자명', width: 65 },
        { field: 'CFPROCAMOUNT', headerName: '금액', width: 80 },
        { field: 'CFREMARK', headerName: '사유(비고)', width: 233 },
    ];
    const columns_gdExcel = [
        { field: 'EPCOURSECD', headerName: 'PERSONKEY', width: 120 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Delete}>삭제 저장</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.btnPrintJubsu_OnClick}>참가원출력</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.btnPrint_OnClick}>신청확인증 출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "42px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.Button0_OnClick} sx={{ width: '105px', height: '24px' }}>엑셀업로드저장</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '179px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1025MEduJubsuManagementData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '128px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년도</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '180px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1025MEduJubsuManagementData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '140px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnCustNo ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnCustNo_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '35px', height: '24px' }}><TouchApp fontSize="small" /></Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리바코드</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnCmgno ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnCmgno_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '35px', height: '24px' }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdExcel ? undefined : 'none' }}><Paper sx={{ width: '271px', height: '274px', width: '100%', height: 'auto', minHeight: '274px' }}><DataGridWrapper rows={hook.ds_ioExcel} columns={columns_gdExcel} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '322px', height: '74px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 16, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1025MEduJubsuManagementData.ds_ds_oCourse || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '320px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임대상물</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnBnm ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnBnm_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '35px', height: '24px' }}><TouchApp fontSize="small" /></Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '289px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduJubsu?.CCOURSECD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1025MEduJubsuManagementData.ds_ds_oDetailCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '336px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJZIP || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.ADDR1 || ''} sx={{ width: '260px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ ml: "3px", minWidth: "249px" }}><Box sx={{ display: hook.isVisible_edAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.ADDR2 || ''} sx={{ width: '247px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_cbxAddrGubun ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '89px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioEduJubsu?.EJADDRGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1025MEduJubsuManagementData.ds_ds_oAddr || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbTrainingPersonInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">선임자 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btn_ExcelUpload ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btn_ExcelUpload_OnClick} sx={{ width: '80px', height: '24px' }}>엑셀업로드</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnSearchPersonInfoChange ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSearchPersonInfoChange_OnClick} sx={{ width: '105px', height: '24px' }}>접수자정보변경</Button></Box><Box sx={{ display: hook.isVisible_radChangeTpmgno ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '96px', height: '22px' }}><RadioGroup row >{ (Frmcust1025MEduJubsuManagementData.ds_ds_oChangeTpmgno || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '336px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnNm ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnNm_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '35px', height: '24px' }}><TouchApp fontSize="small" /></Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '156px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJPERSONKEY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '137px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주민번호대체키</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.PDI || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회차</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchEduOrder ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSearchEduOrder_OnClick} sx={{ width: '92px', height: '24px' }}>접수가능회차</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnJubsuNo ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnJubsuNo_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '35px', height: '24px' }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnSeqList ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSeqList_OnClick} sx={{ width: '66px', height: '24px' }}>접수목록</Button></Box><Box sx={{ display: hook.isVisible_btnUnUseJubsuNo ? undefined : 'none' }}><Button variant="contained"  onClick={hook.lfn_SearchUnUseJubsuNo} sx={{ width: '53px', height: '24px' }}>빈번호</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '157px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJBIRTHDAY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSmsStat ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSmsStat_OnClick} sx={{ width: '66px', height: '24px' }}>문자현황</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '208px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 110, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>실무교육 유효기간</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_calEduExpireDate1yearold ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '96px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>접수번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '336px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연락처</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJPHONE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSendSms ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSendSms_OnClick} sx={{ width: '66px', height: '24px' }}>문자발송</Button></Box><Box sx={{ display: hook.isVisible_btnAutologinSms ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnAutologinSms_OnClick} sx={{ width: '131px', height: '24px' }}>간편로그인 문자발송</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static10 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">상태</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbInputStatus ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '131px', height: '25px' }}><Typography variant="body2">신규/수정</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbJubsuStatus ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '131px', height: '25px' }}><Typography variant="body2">접수상태</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '186px', height: '22px', display: 'flex', alignItems: 'center', ml: '337px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>E-Mail</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJEMAILID || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '118px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 16, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>@</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJEMAILDOMAIN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_cbxEmailDomain ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '92px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1025MEduJubsuManagementData.ds_ds_oEmailDomain || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbTrainingInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '48px' }}><Typography variant="body2">회차정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbEduInfo1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '272px', height: '24px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbEduInfo2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '272px', height: '24px' }}><Typography variant="body2"></Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '652px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>비고(사유 등)</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJHREASON || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnEduJubsuModify ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnEduJubsuModify_OnClick} sx={{ width: '85px', height: '24px' }}>회차변경</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '145px', height: '46px', display: 'flex', alignItems: 'center', ml: '151px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교재수령지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJBOOKZIPCD || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchZipCode2 ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnSearchZipCode2_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px' }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edBookAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJBOOKADDR1 || ''} sx={{ width: '335px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '147px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 115, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교재수령지 출력여부</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJBOOKPRINTESMGNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbOrderChange ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">회차변경</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '127px', height: '22px', display: 'flex', alignItems: 'center', ml: '92px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회차변경횟수</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJCHANGECNT || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnBAddrSame ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnBAddrSame_OnClick} sx={{ width: '92px', height: '24px' }}>대상물주소 반영</Button></Box><Box sx={{ display: hook.isVisible_edBookAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJBOOKADDR2 || ''} sx={{ width: '310px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '163px', height: '24px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 55, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교재반송</Typography>
                    <FormControl component="fieldset"><RadioGroup row value={hook.ds_ioEduJubsu?.EJBOOKRETURNYN || ''}>{ (Frmcust1025MEduJubsuManagementData.ds_ds_oBookReturn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "8px", minWidth: "88px" }}><Box sx={{ display: hook.isVisible_lbPassYn ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">이수여부</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnIssue ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnIssue_OnClick} sx={{ width: '30px', height: '24px' }}>이수</Button></Box></Box><Box sx={{ display: hook.isVisible_edPassYn ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJISUGUBUN || ''} sx={{ width: '28px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '79px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 40, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>사이버</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.CYBERISUGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnCyberInfo ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnCyberInfo_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px' }}><Search fontSize="small" /></Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '79px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 40, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소집</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJISUGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '156px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>결강여부</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.ABSENTYN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnJubsuHistory ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnJubsuHistory_OnClick} sx={{ width: '66px', height: '24px' }}>접수이력</Button></Box><Box sx={{ display: hook.isVisible_btnModifyHistory ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnModifyHistory_OnClick} sx={{ width: '66px', height: '24px' }}>변경이력</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '262px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>민원서류 등록</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1025MEduJubsuManagementData.ds_ds_oForm || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edFormResult ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '45px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSeverFormView ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnSeverFormView_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px' }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnScan ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnScan_OnClick} sx={{ width: '66px', height: '24px' }}>①스캔실행</Button></Box><Box sx={{ display: hook.isVisible_btnScanSearch ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnScanSearch_OnClick} sx={{ width: '66px', height: '24px' }}>②불러오기</Button></Box><Box sx={{ display: hook.isVisible_edScanFileName ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '74px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnLocalFormView ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnLocalFormView_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px' }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnScanSave ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnScanSave_OnClick} sx={{ width: '66px', height: '24px' }}>③서류저장</Button></Box><Box sx={{ display: hook.isVisible_btnFormDelete ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnFormDelete_OnClick} sx={{ width: '16px', height: '22px' }}>서류삭제</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnDeleteSettlement ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnDeleteSettlement_OnClick} sx={{ width: '81px', height: '24px' }}>결제삭제</Button></Box><Box sx={{ display: hook.isVisible_Static9 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '220px', height: '17px' }}><Typography variant="body2">※ 접수시 결제한 내역만 표시됩니다.</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '110px', height: '22px' }}><Typography variant="body2">기존 접수자 조회</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnAbsentManageLink ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnAbsentManageLink_OnClick} sx={{ width: '79px', height: '24px' }}>결강자관리</Button></Box><Box sx={{ display: hook.isVisible_lbSetlmt ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">회비/교육비 내역</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '220px', height: '20px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>겸직자료 미납액</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '384px' }}>
                    <Typography variant="body2" sx={{ minWidth: 126, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육년도 기준 미납액</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSetlmt ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSetlmt_OnClick} sx={{ width: '170px', height: '24px' }}>회비/교육비 결제하기</Button></Box><Box sx={{ display: hook.isVisible_btnPrintReRct ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnPrintReRct_OnClick} sx={{ width: '92px', height: '24px' }}>영수증재발행</Button></Box><Box sx={{ display: hook.isVisible_btnPrintReRctPDF ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnPrintReRctPDF_OnClick} sx={{ width: '92px', height: '24px' }}>영수증PDF</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '177px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnExistNM ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnExistNM_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '35px', height: '24px' }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMemFee ? undefined : 'none' }}><Paper sx={{ width: '248px', height: '136px', width: '100%', height: 'auto', minHeight: '136px' }}><DataGridWrapper rows={hook.ds_oFee} columns={columns_gdMemFee} /></Paper></Box><Box sx={{ display: hook.isVisible_gdSunap ? undefined : 'none' }}><Paper sx={{ width: '406px', height: '162px', width: '100%', height: 'auto', minHeight: '162px' }}><DataGridWrapper rows={hook.ds_oSunap} columns={columns_gdSunap} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '179px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부+관리번호</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1025MEduJubsuManagementData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_medExistCustNo ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '50px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnExistCustNo ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnExistCustNo_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '35px', height: '24px' }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '276px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임대상물</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnExistBnm ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnExistBnm_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '35px', height: '24px' }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "47px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnShowVirtualAccount ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnShowVirtualAccount_OnClick} sx={{ width: '212px', height: '24px' }}>가상계좌(유효기간 부여&문자발송) </Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "14px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbJubsuInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">최종접수정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbJubsuHist ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">접수이력</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '117px', height: '22px', display: 'flex', alignItems: 'center', ml: '25px' }}>
                    <Typography variant="body2" sx={{ minWidth: 55, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>EJMGNO</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduJubsu?.EJMGNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "4px", minWidth: "492px" }}><Box sx={{ display: hook.isVisible_gdJubsuInfo ? undefined : 'none' }}><Paper sx={{ width: '492px', height: '150px', width: '100%', height: 'auto', minHeight: '150px' }}><DataGridWrapper rows={hook.ds_oJubsuAllInfo} columns={columns_gdJubsuInfo} /></Paper></Box><Box sx={{ display: hook.isVisible_btnEduJubsuinfo ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnEduJubsuinfo_OnClick} sx={{ width: '158px', height: '24px' }}>개인접수정보 상세보기</Button></Box></Box><Box sx={{ display: hook.isVisible_gdOrderHist ? undefined : 'none' }}><Paper sx={{ width: '496px', height: '150px', width: '100%', height: 'auto', minHeight: '150px' }}><DataGridWrapper rows={hook.ds_oOrderHist} columns={columns_gdOrderHist} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdReady ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '134px', width: '100%', height: 'auto', minHeight: '134px' }}><DataGridWrapper rows={hook.ds_iReady} columns={columns_gdReady} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1025MEduJubsuManagement;

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