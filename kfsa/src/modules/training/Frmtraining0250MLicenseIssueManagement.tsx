// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0250MLicenseIssueManagement } from './useFrmtraining0250MLicenseIssueManagement';
import * as Frmtraining0250MLicenseIssueManagementData from './Frmtraining0250MLicenseIssueManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining0250MLicenseIssueManagement = () => {
    const hook = useFrmtraining0250MLicenseIssueManagement();
    const columns_gdLcsInfo = [
        { field: 'id', headerName: '순번', width: 31, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TCCOURSENM', headerName: '직능', width: 112 },
        { field: 'LLCSNO', headerName: '수첩번호', width: 139 },
        { field: 'LISSUEDATE', headerName: '취득일', width: 70 },
        { field: 'LCANCELDATE', headerName: '수첩폐기일', width: 70 },
        { field: 'LISSUEGUBUNNM', headerName: '취득구분', width: 95 },
        { field: 'LHREMARK', headerName: '발급사유', width: 207 },
        { field: 'LCANCELREASON', headerName: '폐기사유', width: 207 },
    ];
    const columns_gdSetlmt = [
        { field: 'id', headerName: '순번', width: 37, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LSLHSEQ', headerName: '발급구분', width: 60 },
        { field: 'LSPROCDATE', headerName: '처리일자', width: 75 },
        { field: 'LSSUNAPGUBUN', headerName: '선수납', width: 49 },
        { field: 'LSGUBUNCDNM', headerName: '결제구분', width: 84 },
        { field: 'LSGUBUNNM', headerName: '결제방법', width: 144 },
        { field: 'LSPROCAMOUNT', headerName: '금액(원)', width: 64 },
        { field: 'LSLICAMOUNT', headerName: '수첩비', width: 64 },
        { field: 'LSSENDAMOUNT', headerName: '배송비', width: 64 },
        { field: 'LSREPAYREF', headerName: '환불No', width: 58 },
        { field: 'LSREGSABUNNM', headerName: '처리자', width: 73 },
        { field: 'TSJUMUNNO', headerName: '주문번호', width: 106 },
    ];
    const columns_gdLcsHistory = [
        { field: 'id', headerName: '순번', width: 32, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LHISSUEREASON', headerName: '발급구분', width: 81 },
        { field: 'LHPRTDATE', headerName: '발급일자', width: 72 },
        { field: 'LHCANCELREASON', headerName: '발급취소사유', width: 208 },
    ];
    const columns_gdLcsPrtHistory = [
        { field: 'id', headerName: '순번', width: 32, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LPREGDATE', headerName: '출력일자', width: 77 },
        { field: 'LPCANCELDATE', headerName: '출력취소일', width: 73 },
        { field: 'LPCANCELREASON', headerName: '출력취소사유', width: 146 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_InfoSave}>수첩정보 및 바코드 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "34px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgLastestPicture ? undefined : 'none' }}><Box sx={{ width: '89px', height: '114px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgLastestPicture</Box></Box><Box sx={{ display: hook.isVisible_imgPicture ? undefined : 'none' }}><Box sx={{ width: '108px', height: '142px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgPicture</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSearch ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '94px' }}><Typography variant="body2">조회</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '165px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주민번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchPersonInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearchPersonInfo_OnClick} sx={{ width: '106px', height: '24px', whiteSpace: "nowrap" }}>접수자 검색</Button></Box><Box sx={{ display: hook.isVisible_btnAuthBIRTHDAY ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnAuthBIRTHDAY_OnClick} sx={{ width: '106px', height: '24px', whiteSpace: "nowrap" }}>실명인증</Button></Box><Box sx={{ display: hook.isVisible_btnTPModify ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnTPModify_OnClick} sx={{ width: '131px', height: '24px', whiteSpace: "nowrap" }}>접수자 정보 변경</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '196px', height: '22px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연락처(휴대폰)</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '229px', height: '22px', display: 'flex', alignItems: 'center', ml: '118px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>바코드리딩모드</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0250MLicenseIssueManagementData.ds_ds_oBarcodegubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '234px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수첩번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Search} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>번호조회</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '149px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 46, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>바코드</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnBarCodeSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnBarCodeSearch_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>바코드조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "713px", minWidth: "100px" }}><Box sx={{ display: hook.isVisible_lbImgDate ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '91px', height: '22px' }}><Typography variant="body2"></Typography></Box></Box><Box sx={{ display: hook.isVisible_btnApplyPicture ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnApplyPicture_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>최근사진반영</Button></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbPersonInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '62px' }}><Typography variant="body2">개인정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchZipCode ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchZipCode_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '421px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnScanPicture ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnScanPicture_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>SVP5300사진스캔</Button></Box><Box sx={{ display: hook.isVisible_btnPhotoScan ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPhotoScan_OnClick} sx={{ width: '94px', height: '24px', whiteSpace: "nowrap" }}>D400사진스캔</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "127px", minWidth: "498px" }}><Box sx={{ display: hook.isVisible_edAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '497px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_cbxAddrGubun ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '89px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0250MLicenseIssueManagementData.ds_ds_oAddr || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Box><Box sx={{ display: hook.isVisible_btnSearchRegPicture ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearchRegPicture_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>등록사진조회</Button></Box><Box sx={{ display: hook.isVisible_btnLoadScanPicture ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnLoadScanPicture_OnClick} sx={{ width: '119px', height: '24px', whiteSpace: "nowrap" }}>스캔사진불러오기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '589px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>근무처</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnPictureManagement ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPictureManagement_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>사진관리</Button></Box><Box sx={{ display: hook.isVisible_btnLoadPicture ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnLoadPicture_OnClick} sx={{ width: '119px', height: '24px', whiteSpace: "nowrap" }}>사진찾기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbLcsInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '106px' }}><Typography variant="body2">수첩정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '190px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초취득일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnIssuedateModify ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnIssuedateModify_OnClick} sx={{ width: '38px', height: '24px', whiteSpace: "nowrap" }}>수정</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '174px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육기간</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '112px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_fdImage2 ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fdImage2</Button></Box><Box sx={{ display: hook.isVisible_hfImage2 ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>hfImage2</Button></Box><Box sx={{ display: hook.isVisible_fiImageFile2 ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fiImageFile2</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '491px', height: '82px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0250MLicenseIssueManagementData.ds_ds_oCourse || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '391px', height: '82px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0250MLicenseIssueManagementData.ds_ds_oIssueGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_taAjgubun ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '368px', height: '40px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnSearchLcsIssueHist ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnLcsImage_OnClick} sx={{ width: '94px', height: '24px', whiteSpace: "nowrap" }}>이미지보기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSave ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '89px', height: '26px' }}><Typography variant="body2">재발급</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '193px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>발급일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Save} sx={{ width: '118px', height: '24px', whiteSpace: "nowrap" }}>수첩 재발급</Button></Box><Box sx={{ display: hook.isVisible_lbNotice ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '390px', height: '17px' }}><Typography variant="body2">※ (재)발급 순서 : [수첩(재)발급] → [결제] → [수첩출력]</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '262px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>민원서류 등록</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0250MLicenseIssueManagementData.ds_ds_oForm || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edFormResult ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '45px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSeverFormView ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSeverFormView_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnScan ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnScan_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>①스캔실행</Button></Box><Box sx={{ display: hook.isVisible_btnScanSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnScanSearch_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>②불러오기</Button></Box><Box sx={{ display: hook.isVisible_edScanFileName ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '74px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnLocalFormView ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnLocalFormView_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnScanSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnScanSave_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>③서류저장</Button></Box><Box sx={{ display: hook.isVisible_btnFormDelete ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnFormDelete_OnClick} sx={{ width: '16px', height: '22px', whiteSpace: "nowrap" }}>서류삭제</Button></Box><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '70px' }}><Typography variant="body2">수첩출력이력</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnPrint4700 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_PrintNew} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>직인미출력</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnPrint65050New ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_PrintNew} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>직인출력</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbLcsHistInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '26px' }}><Typography variant="body2">수첩보유현황</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '130px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선수납여부</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnDelete ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Delete} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>수첩 폐기</Button></Box><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '26px' }}><Typography variant="body2">수첩발급이력</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnPassPrint ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPassPrint_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>상장 출력</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdLcsInfo ? undefined : 'none' }}><Paper sx={{ width: '436px', height: '154px', width: '100%', height: 'auto', minHeight: '154px' }}><DataGridWrapper rows={hook.ds_oLicense} columns={columns_gdLcsInfo} /></Paper></Box><Box sx={{ display: hook.isVisible_gdLcsHistory ? undefined : 'none' }}><Paper sx={{ width: '270px', height: '153px', width: '100%', height: 'auto', minHeight: '153px' }}><DataGridWrapper rows={hook.ds_oLicenseH} columns={columns_gdLcsHistory} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdLcsPrtHistory ? undefined : 'none' }}><Paper sx={{ width: '190px', height: '137px', width: '100%', height: 'auto', minHeight: '137px' }}><DataGridWrapper rows={hook.ds_oLicensePrtH} columns={columns_gdLcsPrtHistory} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnPassPrintCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPassPrintCancel_OnClick} sx={{ width: '120px', height: '24px', whiteSpace: "nowrap" }}>상장 출력 취소</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "61px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSetlmt ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '126px' }}><Typography variant="body2">결제내역</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSetlmt ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSetlmt_OnClick} sx={{ width: '92px', height: '126px', whiteSpace: "nowrap" }}>결제(POS)</Button></Box><Box sx={{ display: hook.isVisible_btnPosReport ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPosReport_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>통합영수증조회</Button></Box><Box sx={{ display: hook.isVisible_btnPosResultList ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPosResultList_OnClick} sx={{ width: '118px', height: '24px', whiteSpace: "nowrap" }}>결제처리결과조회</Button></Box><Box sx={{ display: hook.isVisible_btnChangeProcDate ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSeqList_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>처리일자변경</Button></Box><Box sx={{ display: hook.isVisible_btnProcRct ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnProcRct_OnClick} sx={{ width: '131px', height: '24px', whiteSpace: "nowrap" }}>현금영수증처리/취소</Button></Box><Box sx={{ display: hook.isVisible_btnPrintReRct ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintReRct_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>영수증재발행</Button></Box><Box sx={{ display: hook.isVisible_btnPrintReRctPDF ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintReRctPDF_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>영수증PDF</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdSetlmt ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '140px', width: '100%', height: 'auto', minHeight: '140px' }}><DataGridWrapper rows={hook.ds_oSetlmentHist} columns={columns_gdSetlmt} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '220px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0250MLicenseIssueManagement;

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