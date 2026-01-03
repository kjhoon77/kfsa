// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0031PCustomerChange } from './useFrmcust0031PCustomerChange';
import * as Frmcust0031PCustomerChangeData from './Frmcust0031PCustomerChangeData';

export const Frmcust0031PCustomerChange = () => {
    const hook = useFrmcust0031PCustomerChange();
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained"  onClick={hook.btnCustomerLink_OnClick}>고객정보관리 팝업</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "52px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '26px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 55, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청자
식별번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.MPERSONKEY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 55, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.MNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '173px', height: '22px', display: 'flex', alignItems: 'center', ml: '380px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0031PCustomerChangeData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '201px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0031PCustomerChangeData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '233px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0031PCustomerChangeData.ds_ds_oDetailCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 55, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.MBIRTHDAY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 55, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청일시</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCREGDATE2 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbManagerInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '110px', height: '22px' }}><Typography variant="body2">대상물정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnJubsu ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnJubsu_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>접수처리</Button></Box><Box sx={{ display: hook.isVisible_btnDefer ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnDefer_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>보류처리</Button></Box><Box sx={{ display: hook.isVisible_btnCancle ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnCancle_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>신청취소 처리</Button></Box><Box sx={{ display: hook.isVisible_btnComplete ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnComplete_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>완료처리</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '404px', height: '22px', display: 'flex', alignItems: 'center', ml: '380px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물(업체)명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '203px', height: '22px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>용도</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioBuildingInfo?.BBIZCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0031PCustomerChangeData.ds_ds_oBizCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static6 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '110px', height: '22px' }}><Typography variant="body2">기존정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '612px', height: '22px', display: 'flex', alignItems: 'center', ml: '380px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 55, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.JIBUCNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 55, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.OLDCNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxPostGubun1 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '89px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioBuildingInfo?.BADDRGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0031PCustomerChangeData.ds_ds_oAddr || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_medNewZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BZIPCD || ''} sx={{ width: '50px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearchZipCode1 ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchZipCode1_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edNewAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BADDR2 || ''} sx={{ width: '428px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '356px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 55, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.BNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '380px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>팩스번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BFAX || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '185px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연면적</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BAREA || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static18 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '16px', height: '22px' }}><Typography variant="body2">㎡</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbChangeInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '110px', height: '22px' }}><Typography variant="body2">변경신청정보</Typography></Box></Box><Box sx={{ ml: "4px", minWidth: "103px" }}><Box sx={{ display: hook.isVisible_btnElectEnd ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnElectEnd_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>해임처리</Button></Box><Box sx={{ display: hook.isVisible_btnBuildingSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnBuildingSearch_OnClick} sx={{ width: '79px', height: '24px', whiteSpace: "nowrap" }}>대상물검색</Button></Box></Box><Box sx={{ display: hook.isVisible_btnChangeInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnChangeInfo_OnClick} sx={{ width: '132px', height: '24px', whiteSpace: "nowrap" }}>변경내용적용 ▷▶▶</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxFCGTNM ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '75px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_oJubsuInfo?.FCGTMGNO || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0031PCustomerChangeData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_btnChange ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnChange_OnClick} sx={{ width: '38px', height: '24px', whiteSpace: "nowrap" }}>이관</Button></Box><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '110px', height: '22px' }}><Typography variant="body2">고객정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static11 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '70px', height: '22px' }}><Typography variant="body2">지부</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '167px', height: '22px', display: 'flex', alignItems: 'center', ml: '118px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.NEWCNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '160px', height: '22px', display: 'flex', alignItems: 'center', ml: '380px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>등록년월</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CREGISTERYYMM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '160px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비부과년월</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CFEEYYMM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '275px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>인력구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioCustomerInfo?.CPERSONGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0031PCustomerChangeData.ds_ds_oPersonGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '356px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCBULDNAME || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '612px', height: '22px', display: 'flex', alignItems: 'center', ml: '380px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>청구지주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CFEEPOSTADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '356px', height: '46px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxPostGubun2 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '89px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioCustomerInfo?.CFEEPOSTGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0031PCustomerChangeData.ds_ds_oAddrGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_medHopeZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CFEEPOSTZIPCD || ''} sx={{ width: '50px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearchZipCode2 ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchZipCode2_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edHopeAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CFEEPOSTADDR2 || ''} sx={{ width: '427px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medOldZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCPOST || ''} sx={{ width: '50px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edOldAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCADDR2 || ''} sx={{ width: '226px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '612px', height: '22px', display: 'flex', alignItems: 'center', ml: '380px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부가정보</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioAdditionInfo?.ADCONTENT || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '356px', height: '46px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>청구지주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCCADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medHopeZipCodeAfter ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCCPOST || ''} sx={{ width: '50px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edHopeAddr2After ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCCADDR2 || ''} sx={{ width: '226px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '110px', height: '22px' }}><Typography variant="body2">선임자정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '156px', height: '17px', display: 'flex', alignItems: 'center', ml: '495px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMPERSONKEY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '178px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCTELEPHONE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '175px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>팩스번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCFAX || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '212px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '212px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주민번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMBIRTHDAY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '180px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임자격</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioCustomerInfo?.CELECTQUALIFY || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0031PCustomerChangeData.ds_ds_oElectQualify || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '160px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연면적</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCSIZE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_lbText ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '16px', height: '22px' }}><Typography variant="body2">㎡</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '175px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임자격</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.ENTERQUALIFY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '212px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_lbEndStatus ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '100px', height: '22px' }}><Typography variant="body2">해임상태</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '128px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 30, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>해임</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_lbEndDate ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '83px', height: '22px' }}><Typography variant="body2">해임처리일:</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbCancelDate ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '64px', height: '22px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '186px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임자연락처</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCHANDPHONE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '166px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCENTERDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '212px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>휴대폰</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHHPTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "107px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '28px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>이메일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCEMAIL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '212px', height: '22px', display: 'flex', alignItems: 'center', ml: '232px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연락처</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '46px', display: 'flex', alignItems: 'center', ml: '28px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCFMHADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '212px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>이메일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHEMAILID || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '112px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 12, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>@</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHEMAILDOMAIN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_cbxEMailDomain ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '120px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0031PCustomerChangeData.ds_ds_oEmailDomain || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medManagerZipCodeAfter ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCFMHZIPCD || ''} sx={{ width: '50px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edManagerAddr2After ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCFMHADDR2 || ''} sx={{ width: '226px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '456px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbCar ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '20px', height: '46px' }}><Typography variant="body2">차
량</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '166px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCCARNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '166px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량년도</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCCARYEAR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_cbxEduPostGubun3 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '89px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioManagerInfo?.FMHADDRGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0031PCustomerChangeData.ds_ds_oAddr || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_medOldPostZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHZIPCD || ''} sx={{ width: '50px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearchZipCode3 ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchZipCode3_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edOldPostAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHADDR2 || ''} sx={{ width: '336px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '28px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCPERMISSIONNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_lbNewCar ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '70px', height: '22px' }}><Typography variant="body2">차량</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '176px', height: '22px', display: 'flex', alignItems: 'center', ml: '472px' }}>
                    <Typography variant="body2" sx={{ minWidth: 77, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioTankInfo?.TCARNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '117px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 77, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량년도</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioTankInfo?.TCARYEAR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '173px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 77, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioTankInfo?.TPERMISSIONNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '20px', height: '46px' }}><Typography variant="body2">관
계
자</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '166px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCOWNERGUBUN1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '166px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCOWNERNAME || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '166px', height: '22px', display: 'flex', alignItems: 'center', ml: '28px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연락처</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCOWNERTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '166px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>휴대폰</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJubsuInfo?.FCOWNERHP || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0031PCustomerChange;

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