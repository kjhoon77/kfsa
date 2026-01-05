// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { use수정연계Frmcust6301PDataConnectionTankManageSave } from './use수정연계Frmcust6301PDataConnectionTankManageSave';
import * as 수정연계Frmcust6301PDataConnectionTankManageSaveData from './수정연계Frmcust6301PDataConnectionTankManageSaveData';

export const 수정연계Frmcust6301PDataConnectionTankManageSave = () => {
    const hook = use수정연계Frmcust6301PDataConnectionTankManageSave();
    const [chk_chkBuilding, setChk_chkBuilding] = useState('0');
    const [chk_chkBNM, setChk_chkBNM] = useState('0');
    const [chk_chkAddr, setChk_chkAddr] = useState('0');
    const [chk_chkFireCenter, setChk_chkFireCenter] = useState('0');
    const [chk_chkTel, setChk_chkTel] = useState('0');
    const [chk_chkCustomer, setChk_chkCustomer] = useState('0');
    const [chk_chkRegYYMM, setChk_chkRegYYMM] = useState('0');
    const [chk_chkFeeYYMM, setChk_chkFeeYYMM] = useState('0');
    const [chk_chkFMNM, setChk_chkFMNM] = useState('0');
    const [chk_chkFMResidentno, setChk_chkFMResidentno] = useState('0');
    const [chk_chkFMStartDate, setChk_chkFMStartDate] = useState('0');
    const [chk_chkFireManager, setChk_chkFireManager] = useState('0');
    const [chk_chkRegion, setChk_chkRegion] = useState('0');
    const [chk_chkDetailCourse, setChk_chkDetailCourse] = useState('0');
    const [chk_chkCourse, setChk_chkCourse] = useState('0');
    const [chk_chkoldBuildingEndProc, setChk_chkoldBuildingEndProc] = useState('0');
    const columns_gdDanger = [
        { field: 'SEL', headerName: '', width: 23 },
        { field: 'DSEQ', headerName: '순번', width: 33 },
        { field: 'DPERMISSIONNO', headerName: '차량번호', width: 113 },
        { field: 'DPERMISSIONNO', headerName: '차량년도', width: 71 },
        { field: 'DPERMISSIONNO', headerName: '허가번호', width: 129 },
        { field: 'DREMARK', headerName: '기타사항', width: 110 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">위험물운송자 일치화관리</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>연계처리(저장)</Button>
<Button variant="contained"  onClick={hook.btnFPISInfo_OnClick}>청시스템 상세보기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "42px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbJibu ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '22px' }}><Typography variant="body2">지부</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '145px', height: '22px', display: 'flex', alignItems: 'center', ml: '85px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><FormControlLabel control={<Checkbox checked={chk_chkRegion === '1'} onChange={(e) => setChk_chkRegion(e.target.checked ? '1' : '0')} />} label="지역" /><Box sx={{ display: hook.isVisible_cbxRegion ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '89px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (수정연계Frmcust6301PDataConnectionTankManageSaveData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.OBJ_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><FormControlLabel control={<Checkbox checked={chk_chkCourse === '1'} onChange={(e) => setChk_chkCourse(e.target.checked ? '1' : '0')} />} label="직능" /><Box sx={{ display: hook.isVisible_cbxCourse ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '124px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (수정연계Frmcust6301PDataConnectionTankManageSaveData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><FormControlLabel control={<Checkbox checked={chk_chkDetailCourse === '1'} onChange={(e) => setChk_chkDetailCourse(e.target.checked ? '1' : '0')} />} label="세부직능" /><Box sx={{ display: hook.isVisible_cbxDetailCourse ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '193px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (수정연계Frmcust6301PDataConnectionTankManageSaveData.ds_ds_oDetailCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ITLPCADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medFPISZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ITLPC_ZIP || ''} sx={{ width: '55px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edFPISAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ITLPCADDR2 || ''} sx={{ width: '410px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><FormControlLabel control={<Checkbox checked={chk_chkBuilding === '1'} onChange={(e) => setChk_chkBuilding(e.target.checked ? '1' : '0')} />} label="   업체정보" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방관서</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.CMPFRSTT_CMPN119SC_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnApply ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnApply_OnClick} sx={{ width: '29px', height: '354px', whiteSpace: "nowrap" }}>적용</Button></Box><FormControlLabel control={<Checkbox checked={chk_chkBNM === '1'} onChange={(e) => setChk_chkBNM(e.target.checked ? '1' : '0')} />} label="업체명" /><Box sx={{ display: hook.isVisible_edBNM ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BNM || ''} sx={{ width: '328px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnBuildingSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnBuildingSearch_OnClick} sx={{ width: '79px', height: '24px', whiteSpace: "nowrap" }}>대상물검색</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>제조소 구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.MNFCTRETC_SE_CODE_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><FormControlLabel control={<Checkbox checked={chk_chkAddr === '1'} onChange={(e) => setChk_chkAddr(e.target.checked ? '1' : '0')} />} label="주소" /><Box sx={{ display: hook.isVisible_edAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BADDR1 || ''} sx={{ width: '410px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 99, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>제조소상세구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.MNFCTRETC_DETAIL_SE_CODE_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_medZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BZIPCD || ''} sx={{ width: '55px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearchZipCode1 ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchZipCode1_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BADDR2 || ''} sx={{ width: '410px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkFireCenter === '1'} onChange={(e) => setChk_chkFireCenter(e.target.checked ? '1' : '0')} />} label="소방관서" /><Box sx={{ display: hook.isVisible_cbxBonbu ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '80px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioBuildingInfo?.BFIREBONBUCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (수정연계Frmcust6301PDataConnectionTankManageSaveData.ds_ds_oFireBonbuCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxStation ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '120px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioBuildingInfo?.BFIREUPCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (수정연계Frmcust6301PDataConnectionTankManageSaveData.ds_ds_oFireCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxCenter ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '212px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioBuildingInfo?.BFIRECD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (수정연계Frmcust6301PDataConnectionTankManageSaveData.ds_ds_oFireCenterCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '110px', height: '22px' }}><Typography variant="body2">설치자 정보</Typography></Box></Box><FormControlLabel control={<Checkbox checked={chk_chkTel === '1'} onChange={(e) => setChk_chkTel(e.target.checked ? '1' : '0')} />} label="전화번호" /><Box sx={{ display: hook.isVisible_edTel ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BTEL || ''} sx={{ width: '222px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자법인명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_CPR_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><FormControlLabel control={<Checkbox checked={chk_chkCustomer === '1'} onChange={(e) => setChk_chkCustomer(e.target.checked ? '1' : '0')} />} label="   고객정보" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLRADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><FormControlLabel control={<Checkbox checked={chk_chkRegYYMM === '1'} onChange={(e) => setChk_chkRegYYMM(e.target.checked ? '1' : '0')} />} label="등록년월" /><Box sx={{ display: hook.isVisible_medRegYYMM ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CREGISTERYYMM || ''} sx={{ width: '56px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><FormControlLabel control={<Checkbox checked={chk_chkFeeYYMM === '1'} onChange={(e) => setChk_chkFeeYYMM(e.target.checked ? '1' : '0')} />} label="회비부과년월" /><Box sx={{ display: hook.isVisible_medFeeYYMM ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CFEEYYMM || ''} sx={{ width: '56px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '187px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>고객상태</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioCustomerInfo?.CSTATUSGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (수정연계Frmcust6301PDataConnectionTankManageSaveData.ds_ds_oCustomerStatus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medFPISINSTLRZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_ZIP || ''} sx={{ width: '55px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edFPISINSTLRAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLRADDR2 || ''} sx={{ width: '410px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><FormControlLabel control={<Checkbox checked={chk_chkFireManager === '1'} onChange={(e) => setChk_chkFireManager(e.target.checked ? '1' : '0')} />} label=" 선임자정보" /><FormControlLabel control={<Checkbox checked={chk_chkoldBuildingEndProc === '1'} onChange={(e) => setChk_chkoldBuildingEndProc(e.target.checked ? '1' : '0')} />} label="기존 선임대상물 해임처리" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_TELNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><FormControlLabel control={<Checkbox checked={chk_chkFMNM === '1'} onChange={(e) => setChk_chkFMNM(e.target.checked ? '1' : '0')} />} label="성명" /><Box sx={{ display: hook.isVisible_edFMNM ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMNM || ''} sx={{ width: '108px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><FormControlLabel control={<Checkbox checked={chk_chkFMResidentno === '1'} onChange={(e) => setChk_chkFMResidentno(e.target.checked ? '1' : '0')} />} label="주민번호" /><Box sx={{ display: hook.isVisible_medFMResidentno ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMRESIDENTNO || ''} sx={{ width: '108px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnAuthResidentNo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnAuthResidentNo_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>실명인증</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static17 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '110px', height: '20px' }}><Typography variant="body2">차량정보</Typography></Box></Box><FormControlLabel control={<Checkbox checked={chk_chkFMStartDate === '1'} onChange={(e) => setChk_chkFMStartDate(e.target.checked ? '1' : '0')} />} label="선임일자" /><Box sx={{ display: hook.isVisible_calFMStartDate ? undefined : 'none' }}><DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} /></Box><Box sx={{ display: hook.isVisible_lbFMEndStatustitle ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '22px' }}><Typography variant="body2">해임여부</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '128px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 30, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>해임</Typography>
                    <DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.FRST_STRWRK_DE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '129px', height: '22px' }}><Typography variant="body2">이동탱크부가정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량년도</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.COMPET_DE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '189px', height: '22px', display: 'flex', alignItems: 'center', ml: '38px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '127px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량년도</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '183px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>허가번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차종</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.FRST_STRWRK_DE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '505px', height: '22px', display: 'flex', alignItems: 'center', ml: '38px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>기타정보</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '494px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 120, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치(변경)허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ITL_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '274px', height: '22px', display: 'flex', alignItems: 'center', ml: '38px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>우편청구구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (수정연계Frmcust6301PDataConnectionTankManageSaveData.ds_ds_oGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '493px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.PRMISN_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '147px', height: '22px', display: 'flex', alignItems: 'center', ml: '38px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상치장소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchParkZipCode ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchParkZipCode_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edParkAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '324px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edParkAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '412px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '147px', height: '22px', display: 'flex', alignItems: 'center', ml: '539px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchInstlrZipCode ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchInstlrZipCode_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edInstlrAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '324px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edInstlrAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '412px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "87px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdDanger ? undefined : 'none' }}><Paper sx={{ width: '503px', height: '119px', width: '100%', height: 'auto', minHeight: '119px' }}><DataGridWrapper rows={hook.ds_ioDangerInfo} columns={columns_gdDanger} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default 수정연계Frmcust6301PDataConnectionTankManageSave;

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