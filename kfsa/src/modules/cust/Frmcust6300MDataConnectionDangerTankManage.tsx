// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6300MDataConnectionDangerTankManage } from './useFrmcust6300MDataConnectionDangerTankManage';
import * as Frmcust6300MDataConnectionDangerTankManageData from './Frmcust6300MDataConnectionDangerTankManageData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust6300MDataConnectionDangerTankManage = () => {
    const hook = useFrmcust6300MDataConnectionDangerTankManage();
    const [tabValue_tab, setTabValue_tab] = useState(0);
    const [chk_chkMFPerson, setChk_chkMFPerson] = useState('0');
    const [chk_chkKFPerson, setChk_chkKFPerson] = useState('0');
    const [chk_chkKFDelUser, setChk_chkKFDelUser] = useState('0');
    const [chk_chkMFPerson_2, setChk_chkMFPerson_2] = useState('0');
    const [chk_chkKFPerson_2, setChk_chkKFPerson_2] = useState('0');
    const [chk_chkKFDelUser_2, setChk_chkKFDelUser_2] = useState('0');
    const columns_gdKFOBJList = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOTSUM', headerName: '매칭율', width: 50 },
        { field: 'BNM', headerName: '대상물명', width: 79 },
        { field: 'TCARNO', headerName: '차량번호', width: 97 },
        { field: 'TPERMISSIONNO', headerName: '허가번호', width: 67 },
        { field: 'TADDRDONGFNM', headerName: '동명', width: 80 },
        { field: 'TADDRMAINNM', headerName: '주번지', width: 51 },
        { field: 'TADDRSUBNM', headerName: '부번지', width: 46 },
        { field: 'TPARKPLACEADDR', headerName: '상치장소', width: 80 },
        { field: 'RCCDNM', headerName: '지역', width: 80 },
        { field: 'DELGUBUN', headerName: '삭제여부', width: 80 },
    ];
    const columns_gdMFOBJList = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'OBJ_NM', headerName: '대상명', width: 97 },
        { field: 'VHCLE_NO', headerName: '차량번호', width: 97 },
        { field: 'PRMISN_NO', headerName: '허가번호', width: 60 },
        { field: 'DMADDRDONGFNM', headerName: '동주소', width: 80 },
        { field: 'DMADDMAINNM', headerName: '주번지', width: 40 },
        { field: 'DMADDSUBNM', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 151 },
    ];
    const columns_gdKFOBJList_2 = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'BNM', headerName: '대상물명', width: 71 },
        { field: 'TCARNO', headerName: '차량번호', width: 84 },
        { field: 'TPERMISSIONNO', headerName: '허가번호', width: 67 },
        { field: 'TADDRDONGFNM', headerName: '동명', width: 80 },
        { field: 'TADDRMAINNM', headerName: '주번지', width: 51 },
        { field: 'TADDRSUBNM', headerName: '부번지', width: 46 },
        { field: 'TPARKPLACEADDR', headerName: '상치장소', width: 80 },
        { field: 'RCCDNM', headerName: '지역', width: 80 },
    ];
    const columns_gdMFOBJList_2 = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOTSUM', headerName: '매칭율', width: 56 },
        { field: 'OBJ_NM', headerName: '대상명', width: 94 },
        { field: 'VHCLE_NO', headerName: '차량번호', width: 111 },
        { field: 'PRMISN_NO', headerName: '허가번호', width: 60 },
        { field: 'DMADDRDONGFNM', headerName: '동주소', width: 80 },
        { field: 'DMADDMAINNM', headerName: '주번지', width: 40 },
        { field: 'DMADDSUBNM', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 151 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.btnDataHistory_OnClick}>데이터조회이력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "26px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tab ? undefined : 'none' }}><Box sx={{ width: '1056px', height: '738px', width: "100%", height: "auto", minHeight: "738px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tab} onChange={(e, v) => setTabValue_tab(v)} aria-label="tab"><Tab label=" 청기준 " /><Tab label="안전원기준" /></Tabs></Box><CustomTabPanel value={tabValue_tab} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbJubsu ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '284px', height: '24px' }}><Typography variant="body2">소방청(소방민원정보시스템) 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '226px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>처리구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '215px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방관서</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oFireHead || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxMFStation ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '134px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oFireCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxMFCenter ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '157px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oFireCenterCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>안전원수신일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '139px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static10 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '59px', height: '24px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spMFRowNum ? undefined : 'none' }}><Box sx={{ width: '94px', height: '24px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '511px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '162px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edMFKeyword ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '176px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnMFSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_MFSearch} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>청자료조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkMFPerson === '1'} onChange={(e) => setChk_chkMFPerson(e.target.checked ? '1' : '0')} />} label="문자열포함" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '98px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "249px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnMFMatchCancel ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExceptCancel} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnMFMatchExcept ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExcept} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Box sx={{ display: hook.isVisible_btnMFExcel ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tab_page1_btnMFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMFOBJList ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '280px', width: '100%', height: 'auto', minHeight: '280px' }}><DataGridWrapper rows={hook.ds_ioMFFireObj} columns={columns_gdMFOBJList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static60 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '514px', height: '24px' }}><Typography variant="body2">※ 대상물 또는 선임자 정보를 더블클릭 시 우측 안전원자료 자동조회</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static15 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">제조소등 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnFPISInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_page1_btnFPISInfo_OnClick} sx={{ width: '132px', height: '26px', whiteSpace: "nowrap" }}>청시스템상세보기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '366px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.OBJ_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 57, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '512px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static19 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '48px' }}><Typography variant="body2">매칭주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 34, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.DMADDRDONGFNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edMFDong ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.DMADDRDONGNM || ''} sx={{ width: '87px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '97px', height: '22px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.DMADDMAINNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '96px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.DMADDSUBNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '239px', height: '22px', display: 'flex', alignItems: 'center', ml: '95px' }}>
                    <Typography variant="body2" sx={{ minWidth: 36, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>도로명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ROAD_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '113px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.MAIN_BDNBR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '68px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 14, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>-</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.SEC_BDNBR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '512px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방관서</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.CMPN119SC_ID || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치법인명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.INSTLR_CPR_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.INSTLR_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '512px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ADDR2 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.INSTLR_TELNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>완공일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.COMPET_DE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static6 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">차량 정보 </Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.VHCLE_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년식</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.VHCLE_YEAR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.PRMISN_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차종</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.CARNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.REGIST_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최종수정일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.UPDT_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '284px', height: '24px' }}><Typography variant="body2">안전원(교육종합관리시스템) 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부명</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static11 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '56px', height: '24px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spKFRowNum ? undefined : 'none' }}><Box sx={{ width: '89px', height: '24px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '510px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '200px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edKFKeyword ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '219px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnKFSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_page1_btnKFSearch_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>안전원자료조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkKFDelUser === '1'} onChange={(e) => setChk_chkKFDelUser(e.target.checked ? '1' : '0')} />} label="삭제자포함" /><FormControlLabel control={<Checkbox checked={chk_chkKFPerson === '1'} onChange={(e) => setChk_chkKFPerson(e.target.checked ? '1' : '0')} />} label="문자열 포함" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "14px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '98px', height: '22px', display: 'flex', alignItems: 'center', ml: '523px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "247px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnKFMatchCancel ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_KFMatchExceptCancel} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnKFMatchExcept ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_KFMatchExcept} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Box sx={{ display: hook.isVisible_btnKFExcel ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tab_page1_btnKFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdKFOBJList ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '280px', width: '100%', height: 'auto', minHeight: '280px' }}><DataGridWrapper rows={hook.ds_ioKFFireObj} columns={columns_gdKFOBJList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnMatchCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_CancelMatch} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>연계해지처리</Button></Box><Box sx={{ display: hook.isVisible_btnMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_NowMatch} sx={{ width: '119px', height: '26px', whiteSpace: "nowrap" }}>수정없이연계처리</Button></Box><Box sx={{ display: hook.isVisible_btnNewMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnNewMatch_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>신규연계등록</Button></Box><Box sx={{ display: hook.isVisible_btnModMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnModMatch_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>수정연계처리</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static16 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">고객 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '367px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 57, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상치장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TPARKPLACEADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static30 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '48px' }}><Typography variant="body2">매칭주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 34, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TADDRDONGFNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edKFDong ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TADDRDONGNM || ''} sx={{ width: '87px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '97px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TADDRMAINNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '99px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 46, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TADDRSUBNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '239px', height: '22px', display: 'flex', alignItems: 'center', ml: '619px' }}>
                    <Typography variant="body2" sx={{ minWidth: 36, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>도로명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RROADNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '113px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RBUILDMAINNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '67px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 14, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>-</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RBUILDSUBNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RCCDNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.COURSENM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호 </Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상태</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.DELGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TINSTLRADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "15px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static40 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">차량 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TCARNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년식</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TCARYEAR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TPERMISSIONNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>기타사항</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TREMARK || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tab} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static5_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '284px', height: '24px' }}><Typography variant="body2">안전원(교육종합관리시스템) 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbJubsu_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '284px', height: '24px' }}><Typography variant="body2">소방청(소방민원정보시스템) 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부명</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioJibu2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '215px', height: '22px', display: 'flex', alignItems: 'center', ml: '306px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방관서</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oFireHead2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxMFStation_2 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '134px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oFireCd2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxMFCenter_2 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '157px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oFireCenterCd2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oRegion2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oRegion2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static11_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '56px', height: '24px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spKFRowNum_2 ? undefined : 'none' }}><Box sx={{ width: '89px', height: '24px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>안전원수신일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '139px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static10_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '59px', height: '24px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spMFRowNum_2 ? undefined : 'none' }}><Box sx={{ width: '94px', height: '24px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '510px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioSelectGubun2 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '511px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioSelectGubun2 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '200px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edKFKeyword_2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '219px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnKFSearch_2 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_KFSearch2} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>안전원자료조회</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '162px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edMFKeyword_2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '262px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnMFSearch_2 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_page2_btnMFSearch_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkKFDelUser_2 === '1'} onChange={(e) => setChk_chkKFDelUser_2(e.target.checked ? '1' : '0')} />} label="삭제자포함" /><FormControlLabel control={<Checkbox checked={chk_chkKFPerson_2 === '1'} onChange={(e) => setChk_chkKFPerson_2(e.target.checked ? '1' : '0')} />} label="문자열 포함" /><FormControlLabel control={<Checkbox checked={chk_chkMFPerson_2 === '1'} onChange={(e) => setChk_chkMFPerson_2(e.target.checked ? '1' : '0')} />} label="문자열포함" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "14px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '98px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "247px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnKFMatchCancel_2 ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_KFMatchExceptCancel2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnKFMatchExcept_2 ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_KFMatchExcept2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Box sx={{ display: hook.isVisible_btnKFExcel_2 ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tab_page2_btnKFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '98px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "246px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnMFMatchCancel_2 ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExceptCancel2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnMFMatchExcept_2 ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExcept2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Box sx={{ display: hook.isVisible_btnMFExcel_2 ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tab_page2_btnMFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdKFOBJList_2 ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '280px', width: '100%', height: 'auto', minHeight: '280px' }}><DataGridWrapper rows={hook.ds_ioKFFireObj2} columns={columns_gdKFOBJList_2} /></Paper></Box><Box sx={{ display: hook.isVisible_gdMFOBJList_2 ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '280px', width: '100%', height: 'auto', minHeight: '280px' }}><DataGridWrapper rows={hook.ds_ioMFFireObj2} columns={columns_gdMFOBJList_2} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbsearchNotice ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '514px', height: '24px' }}><Typography variant="body2">※ 대상물 또는 선임자 정보를 더블클릭 시 우측 소방청 자료 자동조회</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnMatchCancel_2 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_CancelMatch2} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>연계해지처리</Button></Box><Box sx={{ display: hook.isVisible_btnMatch_2 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_NowMatch2} sx={{ width: '119px', height: '26px', whiteSpace: "nowrap" }}>수정없이연계처리</Button></Box><Box sx={{ display: hook.isVisible_btnModMatch_2 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnModMatch_OnClick2} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>수정연계처리</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static16_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">고객 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static15_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">제조소등 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnFPISInfo_2 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_page2_btnFPISInfo_OnClick} sx={{ width: '132px', height: '26px', whiteSpace: "nowrap" }}>청시스템상세보기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '367px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 57, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '366px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.OBJ_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 57, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상치장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TPARKPLACEADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '512px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static30_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '47px' }}><Typography variant="body2">매칭주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 34, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TADDRDONGFNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edKFDong_2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TADDRDONGNM || ''} sx={{ width: '87px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '97px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TADDRMAINNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '99px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 46, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TADDRSUBNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static19_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '47px' }}><Typography variant="body2">매칭주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 34, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.DMADDRDONGFNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edMFDong_2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.DMADDRDONGNM || ''} sx={{ width: '87px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '97px', height: '22px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.DMADDMAINNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '96px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.DMADDSUBNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '239px', height: '22px', display: 'flex', alignItems: 'center', ml: '96px' }}>
                    <Typography variant="body2" sx={{ minWidth: 36, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>도로명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RROADNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '113px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RBUILDMAINNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '67px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 14, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>-</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RBUILDSUBNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '239px', height: '22px', display: 'flex', alignItems: 'center', ml: '100px' }}>
                    <Typography variant="body2" sx={{ minWidth: 36, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>도로명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ROAD_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '113px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.MAIN_BDNBR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '68px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 14, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>-</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.SEC_BDNBR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RCCDNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.COURSENM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '512px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방관서</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.CMPN119SC_ID || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호 </Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상태</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.DELGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치법인명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.INSTLR_CPR_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.INSTLR_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TINSTLRADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '512px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ADDR2 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '526px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.INSTLR_TELNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>완공일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.COMPET_DE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static40_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">차량 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static6_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">차량 정보 </Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TCARNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년식</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TCARYEAR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.VHCLE_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년식</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.VHCLE_YEAR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TPERMISSIONNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '267px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.PRMISN_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차종</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.CARNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>기타사항</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TREMARK || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.REGIST_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최종수정일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.UPDT_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6300MDataConnectionDangerTankManage;

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