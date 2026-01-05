// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining1000EXamConfirm } from './useFrmtraining1000EXamConfirm';
import * as Frmtraining1000EXamConfirmData from './Frmtraining1000EXamConfirmData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining1000EXamConfirm = () => {
    const hook = useFrmtraining1000EXamConfirm();
    const columns_gdProfessor = [
        { field: 'SEL', headerName: '', width: 30 },
        { field: 'col_1', headerName: '순번', width: 35 },
        { field: 'EASTATUS', headerName: '신청상태', width: 72 },
        { field: 'EAMGGTMGNO', headerName: '지부', width: 60 },
        { field: 'PERSONNM', headerName: '성명', width: 59 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 88 },
        { field: 'HPTEL', headerName: '휴대폰', width: 0 },
        { field: 'ADRESS', headerName: '주소', width: 0 },
        { field: 'EATCCOURSENM', headerName: '직능', width: 165 },
        { field: 'EADATE', headerName: '신청일', width: 100 },
        { field: 'SITEGUBUNNM', headerName: '처리자', width: 100 },
        { field: 'EAJUBSUGUBUN', headerName: '응시자격', width: 200 },
        { field: 'EAREMARK', headerName: '사유 승인사유', width: 130 },
        { field: 'EAMODREASON', headerName: '보완사유', width: 130 },
        { field: 'EAREASON', headerName: '반려사유', width: 130 },
        { field: 'EACANCELL', headerName: '신청취소사유', width: 130 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">응시자격심사</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>신청서출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "44px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '203px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining1000EXamConfirmData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '190px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청일자</Typography>
                    <DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '112px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '158px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 64, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청상태</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining1000EXamConfirmData.ds_ds_status || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '139px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 40, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btn_masterSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btn_masterSave_OnClick} sx={{ width: '118px', height: '24px', whiteSpace: "nowrap" }}>저장(평가관리과)</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '203px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>접수구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining1000EXamConfirmData.ds_ds_KemsOnline || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '180px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '180px', height: '22px', display: 'flex', alignItems: 'center', ml: '29px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선택건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btConfirmCancell ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btConfirmCancell_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>승인취소</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edCheckCount ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '24px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnRemark ? undefined : 'none' }}><Button variant="contained" color="secondary"  onClick={hook.btnRemark_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>사유전체보기</Button></Box><Box sx={{ display: hook.isVisible_btnInput ? undefined : 'none' }}><Button variant="contained"  startIcon={<Add />} onClick={hook.lfn_Input} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>추가 저장</Button></Box><Box sx={{ display: hook.isVisible_btnSave ? undefined : 'none' }}><Button variant="contained"  startIcon={<Save />} onClick={hook.lfn_Save} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>수정 저장</Button></Box><Box sx={{ display: hook.isVisible_btnJubsu ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnJubsu_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>접수시작</Button></Box><Box sx={{ display: hook.isVisible_btn_Cancell ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btn_Cancell_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>접수취소</Button></Box><Box sx={{ display: hook.isVisible_btnMod ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnMod_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>보완</Button></Box><Box sx={{ display: hook.isVisible_btnApprove ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnApprove_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>승인</Button></Box><Box sx={{ display: hook.isVisible_btnReject ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnReject_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>반려</Button></Box><Box sx={{ display: hook.isVisible_btCanCell ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btCanCell_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>신청취소</Button></Box><Box sx={{ display: hook.isVisible_btnDelete ? undefined : 'none' }}><Button variant="contained"  startIcon={<Delete />} onClick={hook.lfn_Delete} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>삭제 저장</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdProfessor ? undefined : 'none' }}><Paper sx={{ width: '985px', height: '293px', width: '100%', height: 'auto', minHeight: '293px' }}><MultiDataGridWrapper rows={hook.ds_ioProfessor} columns={columns_gdProfessor} rowHeight={20} headerHeight={40} hideFooter={true} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radChangeTpmgno ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '200px', height: '22px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining1000EXamConfirmData.ds_ds_oChangeTpmgno || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "20px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static14 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '830px', height: '15px' }}><Typography variant="body2">※ 수정하려는 대상자를 선택(체크)하셔야 수정이 가능합니다.</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbExamPersonInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">접수자 기본 정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.PERSONKEY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_cbxAddrGubun ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '89px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining1000EXamConfirmData.ds_ds_oAddr || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbx_jibu ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '139px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioExamJubsu?.EAMGGTMGNO || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining1000EXamConfirmData.ds_ds_oJibu2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '205px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청상태</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_imgPicture ? undefined : 'none' }}><Box sx={{ width: '92px', height: '90px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgPicture</Box></Box><Box sx={{ display: hook.isVisible_imgLastestPicture ? undefined : 'none' }}><Box sx={{ width: '123px', height: '137px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgLastestPicture</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static13 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">지부</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '196px', height: '22px', display: 'flex', alignItems: 'center', ml: '145px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청일자</Typography>
                    <DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '151px', height: '22px', display: 'flex', alignItems: 'center', ml: '155px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>EATPMGNO</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.EATPMGNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '227px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioExamJubsu?.EATCCOURSECD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining1000EXamConfirmData.ds_ds_oJubsuGubunCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_lbModetest ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '143px', height: '26px' }}><Typography variant="body2">신규입력모드</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnApplyPicture ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnApplyPicture_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>최근사진반영</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '149px', height: '22px', display: 'flex', alignItems: 'center', ml: '600px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>EAMGNO</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.EAMGNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '195px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.PERSONNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchPersonInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearchPersonInfo_OnClick} sx={{ width: '118px', height: '24px', whiteSpace: "nowrap" }}>접수자  검색</Button></Box><Box sx={{ display: hook.isVisible_btnAuthBIRTHDAY ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnAuthBIRTHDAY_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>실명인증</Button></Box><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearchPersonInfoChange_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>접수자정보변경</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '195px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주민등록번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.BIRTHDAY7 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchRegPicture ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearchRegPicture_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>등록사진조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '195px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>휴대폰</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.HPTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '193px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.TEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnImageZoom ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnImageZoom_OnClick} sx={{ width: '79px', height: '24px', whiteSpace: "nowrap" }}>이미지확대</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '140px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.ZIPCD || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchZipCode ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchZipCode_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.ADDR1 || ''} sx={{ width: '413px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioExamJubsu?.ADDR2 || ''} sx={{ width: '576px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_cbxForm ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '172px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining1000EXamConfirmData.ds_ds_oForm || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_btnPhotoScan ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPhotoScan_OnClick} sx={{ width: '95px', height: '24px', whiteSpace: "nowrap" }}>D400사진스캔</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '197px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>응시자격구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioExamJubsu?.EAJUBSUGUBUN2 || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining1000EXamConfirmData.ds_ds_oJubsuGubunCheck || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static11 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '270px', height: '15px' }}><Typography variant="body2">◀-- 응시자격 선택 시 자동 선택됩니다. </Typography></Box></Box><Box sx={{ display: hook.isVisible_btnScanPicture ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnScanPicture_OnClick} sx={{ width: '106px', height: '24px', whiteSpace: "nowrap" }}>SVP5300사진스캔</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '814px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>응시자격</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioExamJubsu?.EAJUBSUGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining1000EXamConfirmData.ds_ds_oJubsuGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_btnLoadScanPicture ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnLoadScanPicture_OnClick} sx={{ width: '119px', height: '24px', whiteSpace: "nowrap" }}>스캔사진불러오기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '136px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>민원서류등록</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSeverFormView ? undefined : 'none' }}><Button variant="outlined" color="secondary" onClick={hook.btnSeverFormView_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnScan ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnScan_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>①스캔실행</Button></Box><Box sx={{ display: hook.isVisible_btnScanSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnScanSearch_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>②불러오기</Button></Box><Box sx={{ display: hook.isVisible_edScanFileName ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '74px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnLocalFormView ? undefined : 'none' }}><Button variant="outlined" color="secondary" onClick={hook.btnLocalFormView_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnScanSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnScanSave_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>③서류저장</Button></Box><Box sx={{ display: hook.isVisible_btnFormDelete ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnFormDelete_OnClick} sx={{ width: '16px', height: '22px', whiteSpace: "nowrap" }}>서류삭제</Button></Box><Box sx={{ display: hook.isVisible_fdImage2 ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fdImage2</Button></Box><Box sx={{ display: hook.isVisible_hfImage2 ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>hfImage2</Button></Box><Box sx={{ display: hook.isVisible_fiImageFile2 ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fiImageFile2</Button></Box><Box sx={{ display: hook.isVisible_btnLoadPicture ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnLoadPicture_OnClick} sx={{ width: '119px', height: '24px', whiteSpace: "nowrap" }}>사진찾기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '246px', height: '17px' }}><Typography variant="body2">※ 민원서류(민원인 등록)</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '393px', height: '23px', display: 'flex', alignItems: 'center', ml: '18px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>응시서류</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnDownload ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnDownload_OnClick} sx={{ width: '65px', height: '23px', whiteSpace: "nowrap" }}> 다운로드 </Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '282px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>파일경로</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining1000EXamConfirm;

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