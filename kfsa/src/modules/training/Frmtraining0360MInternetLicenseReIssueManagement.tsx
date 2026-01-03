// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0360MInternetLicenseReIssueManagement } from './useFrmtraining0360MInternetLicenseReIssueManagement';
import * as Frmtraining0360MInternetLicenseReIssueManagementData from './Frmtraining0360MInternetLicenseReIssueManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';
import { FrmCOM3010SPOS } from '../COM/FrmCOM3010SPOS';

export const Frmtraining0360MInternetLicenseReIssueManagement = () => {
    const hook = useFrmtraining0360MInternetLicenseReIssueManagement();
    const [tabValue_tabSettlement, setTabValue_tabSettlement] = useState(0);
    const columns_gdList = [
        { field: 'LRNM', headerName: '성명', width: 57 },
        { field: 'LRTPRESIDENTNO', headerName: '주민번호', width: 111 },
        { field: 'LTCCOURSECDNICKNM', headerName: '직능', width: 68 },
        { field: 'LRSTATUSNM', headerName: '신청상태', width: 67 },
        { field: 'LRPROCDATE', headerName: '신청일자', width: 84 },
        { field: 'LLCSNO', headerName: '수첩번호', width: 148 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_divPos ? undefined : 'none' }}><Paper sx={{ p: 2, width: '124px', height: '62px', width: '100%', height: 'auto', minHeight: '62px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><FrmCOM3010SPOS /></Stack></Paper></Box><Box sx={{ display: hook.isVisible_hfImageFile ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>hfImageFile</Button></Box><Box sx={{ display: hook.isVisible_imgPicture ? undefined : 'none' }}><Box sx={{ width: '80px', height: '106px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgPicture</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '185px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0360MInternetLicenseReIssueManagementData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_btnPrintAddrAll ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintAddrAll_OnClick} sx={{ width: '119px', height: '24px', whiteSpace: "nowrap" }}>주소라벨일괄출력</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '220px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수첩번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LLCSNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '185px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청상태</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0360MInternetLicenseReIssueManagementData.ds_ds_oStatus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '220px', height: '22px', display: 'flex', alignItems: 'center', ml: '143px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>바코드</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LBARCODE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '192px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '122px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 18, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>취득지부</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LPPROCJIBUNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '204px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LTCCOURSECDNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '200px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"  startIcon={<Search />} onClick={hook.lfn_Search} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '39px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>취득구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LISSUEGUBUNNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '160px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>취득일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LISSUEDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '324px', height: '457px', width: '100%', height: 'auto', minHeight: '457px' }}><DataGridWrapper rows={hook.ds_oList} columns={columns_gdList} /></Paper></Box><Box sx={{ display: hook.isVisible_lbJubsuInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '108px', height: '22px' }}><Typography variant="body2">신청 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '336px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LRNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주민번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LRTPRESIDENTNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_lbNiceCheck ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '72px', height: '22px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '456px', height: '22px', display: 'flex', alignItems: 'center', ml: '336px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LRADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oList?.LRZIPCD || ''} sx={{ width: '56px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oList?.LRADDR2 || ''} sx={{ width: '376px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '336px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LRRTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>휴대폰</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LRHPTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnPrintApplication ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintApplication_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>신청서출력</Button></Box><Box sx={{ display: hook.isVisible_btnJubsu ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnJubsu_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>접수 처리</Button></Box><Box sx={{ display: hook.isVisible_btnReIssue ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnReIssue_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>수첩 재발급</Button></Box><Box sx={{ display: hook.isVisible_btnLicensePrint ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnLicensePrint_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>수첩 출력</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '108px', height: '22px' }}><Typography variant="body2">발송 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '456px', height: '22px', display: 'flex', alignItems: 'center', ml: '336px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>발송주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LRRADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medSendZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oList?.LRRZIPCD || ''} sx={{ width: '56px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edSendAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oList?.LRRADDR2 || ''} sx={{ width: '280px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnPrintAddr ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintAddr_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>주소라벨출력</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '336px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수령자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LRRNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '264px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연락처</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LRRTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '336px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>발행지부</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LRJIBUNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnReturn ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnReturn_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>반송 처리</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '336px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>운송장번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.LRWAYBILLNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '43px', height: '22px' }}><Typography variant="body2">&apos;-&apos;제외</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnTransSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnTransSave_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>운송장번호저장</Button></Box><Box sx={{ display: hook.isVisible_btnTransSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnTransSearch_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>운송장번호조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabSettlement ? undefined : 'none' }}><Box sx={{ width: '464px', height: '162px', width: "100%", height: "auto", minHeight: "162px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabSettlement} onChange={(e, v) => setTabValue_tabSettlement(v)} aria-label="tabSettlement"><Tab label="수납정보" /><Tab label="환불정보" /></Tabs></Box><CustomTabPanel value={tabValue_tabSettlement} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "51px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '224px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>입금일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.PMSUNAPDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnPrintReRct ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tabSettlement_tabSunap_btnPrintReRct_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>영수증재발행</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '224px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>결제방법</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.PMPGMGUBUNNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnVirtualAccount ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tabSettlement_tabSunap_btnVirtualAccount_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>가상계좌보기</Button></Box><Box sx={{ display: hook.isVisible_btnReapy ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tabSettlement_tabSunap_btnReapy_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>환불 신청</Button></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabSettlement} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "52px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '456px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>환불사유</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.PPREASON || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '168px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>환불금액</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oList?.PPAAMT || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnJubsu ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tabSettlement_tabRepay_btnJubsu_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>환불 접수</Button></Box><Box sx={{ display: hook.isVisible_btnRepay ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tabSettlement_tabRepay_btnRepay_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>환불 완료</Button></Box><Box sx={{ display: hook.isVisible_btnCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tabSettlement_tabRepay_btnCancel_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>환불 취소</Button></Box></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0360MInternetLicenseReIssueManagement;

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