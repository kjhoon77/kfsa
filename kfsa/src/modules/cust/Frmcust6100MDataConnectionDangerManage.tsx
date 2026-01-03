// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6100MDataConnectionDangerManage } from './useFrmcust6100MDataConnectionDangerManage';
import * as Frmcust6100MDataConnectionDangerManageData from './Frmcust6100MDataConnectionDangerManageData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust6100MDataConnectionDangerManage = () => {
    const hook = useFrmcust6100MDataConnectionDangerManage();
    const [tabValue_tab, setTabValue_tab] = useState(0);
    const columns_gdKFOBJList = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOTSUM', headerName: '매칭율', width: 50 },
        { field: 'BNM', headerName: '대상물명', width: 93 },
        { field: 'CNICKNM', headerName: '직능', width: 62 },
        { field: 'FMNM', headerName: '선임자', width: 67 },
        { field: 'BADDRDONGNM', headerName: '동명', width: 80 },
        { field: 'BADDRMAINNM', headerName: '주번지', width: 51 },
        { field: 'BADDRSUBNM', headerName: '부번지', width: 46 },
        { field: 'ADDR', headerName: '주소', width: 80 },
        { field: 'RCNM', headerName: '지역', width: 80 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'CNO', headerName: '고객번호', width: 80 },
        { field: 'DELGUBUN', headerName: '삭제여부', width: 80 },
    ];
    const columns_gdMFManager = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'NM', headerName: '선임자명', width: 100 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 106 },
        { field: 'DMINDATE', headerName: '선임일자', width: 100 },
        { field: 'DMOUTDATE', headerName: '해임일자', width: 100 },
        { field: 'ADDR', headerName: '주소', width: 200 },
    ];
    const columns_gdDangerInfo = [
        { field: 'DPERMISSIONNO', headerName: '허가번호', width: 97 },
        { field: 'DREMARK', headerName: '기타사항', width: 182 },
    ];
    const columns_gdMFOBJList = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'DELETE_AT', headerName: '상태', width: 37 },
        { field: 'OBJ_NM2', headerName: '대상물명', width: 145 },
        { field: 'PRMISN_NO', headerName: '허가번호', width: 60 },
        { field: 'MNFCTRETCNM', headerName: '대상구분', width: 80 },
        { field: 'SEARCHDONGFNM', headerName: '동주소', width: 80 },
        { field: 'SEARCHMAINADDR', headerName: '주번지', width: 40 },
        { field: 'SEARCHSUBADDR', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 151 },
        { field: 'ITLPC_ROAD_NM', headerName: '도로명', width: 92 },
    ];
    const columns_gdKFOBJList_1 = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'DELGUBUN', headerName: '상태', width: 33 },
        { field: 'BNM', headerName: '대상물명', width: 111 },
        { field: 'CNICKNM', headerName: '직능', width: 72 },
        { field: 'FMNM', headerName: '선임자', width: 75 },
        { field: 'BADDRDONGNM', headerName: '동명', width: 80 },
        { field: 'BADDRMAINNM', headerName: '주번지', width: 46 },
        { field: 'BADDRSUBNM', headerName: '부번지', width: 43 },
        { field: 'ADDR', headerName: '주소', width: 80 },
        { field: 'RCNM', headerName: '지역', width: 80 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'CNO', headerName: '고객번호', width: 80 },
    ];
    const columns_gdDangerInfo_1 = [
        { field: 'DPERMISSIONNO', headerName: '허가번호', width: 97 },
        { field: 'DREMARK', headerName: '기타사항', width: 182 },
    ];
    const columns_gdMFManager_1 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'NM', headerName: '선임자명', width: 96 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 107 },
        { field: 'DMINDATE', headerName: '선임일자', width: 100 },
        { field: 'DMOUTDATE', headerName: '해임일자', width: 100 },
        { field: 'ADDR', headerName: '주소', width: 200 },
    ];
    const columns_gdMFOBJList_1 = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOTSUM', headerName: '매칭율', width: 46 },
        { field: 'OBJ_NM2', headerName: '대상물명', width: 75 },
        { field: 'PRMISN_NO', headerName: '허가번호', width: 60 },
        { field: 'NM', headerName: '선임자', width: 49 },
        { field: 'MNFCTRETCNM', headerName: '대상구분', width: 71 },
        { field: 'SEARCHDONGFNM', headerName: '동주소', width: 59 },
        { field: 'SEARCHMAINADDR', headerName: '주번지', width: 50 },
        { field: 'SEARCHSUBADDR', headerName: '부번지', width: 50 },
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "26px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tab ? undefined : 'none' }}><Box sx={{ width: '1048px', height: '786px', width: "100%", height: "auto", minHeight: "786px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tab} onChange={(e, v) => setTabValue_tab(v)} aria-label="tab"><Tab label=" 청기준 " /><Tab label="안전원기준" /></Tabs></Box><CustomTabPanel value={tabValue_tab} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "50px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '215px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>제조소구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioMNFCTRETCGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '279px', height: '22px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 119, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>제조소상세구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioMNFCTRETCGubunD || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '23px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>안전원수신일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '139px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static10 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '59px', height: '24px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spMFRowNum ? undefined : 'none' }}><Box sx={{ width: '94px', height: '24px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '14px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioCourseD || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static11 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '56px', height: '24px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spKFRowNum ? undefined : 'none' }}><Box sx={{ width: '89px', height: '24px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '511px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>사용구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioUSEAT || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '510px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '511px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '200px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edKFKeyword ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '219px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnKFSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_page1_btnKFSearch_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>안전원자료조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '162px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edMFKeyword ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '176px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnMFSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_MFSearch} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box><Box sx={{ display: hook.isVisible_chkKFDelUser ? undefined : 'none' }}><Box sx={{ width: '92px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_chkKFPerson ? undefined : 'none' }}><Box sx={{ width: '92px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_chkMFPerson ? undefined : 'none' }}><Box sx={{ width: '84px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edMFCount ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '41px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ ml: "249px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnMFMatchCancel ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExceptCancel} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnMFMatchExcept ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExcept} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Box sx={{ display: hook.isVisible_btnMFExcel ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tab_page1_btnMFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '98px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "247px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnKFMatchCancel ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_KFMatchExceptCancel} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnKFMatchExcept ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_KFMatchExcept} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Box sx={{ display: hook.isVisible_btnKFExcel ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tab_page1_btnKFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMFOBJList ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '280px', width: '100%', height: 'auto', minHeight: '280px' }}><DataGridWrapper rows={hook.ds_ioMFFireObj} columns={columns_gdMFOBJList} /></Paper></Box><Box sx={{ display: hook.isVisible_gdKFOBJList ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '201px', width: '100%', height: 'auto', minHeight: '201px' }}><DataGridWrapper rows={hook.ds_ioKFFireObj} columns={columns_gdKFOBJList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdDangerInfo ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '161px', width: '100%', height: 'auto', minHeight: '161px' }}><DataGridWrapper rows={hook.ds_ioDangerInfo} columns={columns_gdDangerInfo} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static60 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '514px', height: '24px' }}><Typography variant="body2">※ 대상물 또는 선임자 정보를 더블클릭 시 우측 안전원자료 자동조회</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnDanger ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_NowMatch} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>허가번호 추가</Button></Box><Box sx={{ display: hook.isVisible_btnMatchCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_CancelMatch} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>연계해지처리</Button></Box><Box sx={{ display: hook.isVisible_btnMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_NowMatch} sx={{ width: '119px', height: '26px', whiteSpace: "nowrap" }}>수정없이연계처리</Button></Box><Box sx={{ display: hook.isVisible_btnNewMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnNewMatch_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>신규연계등록</Button></Box><Box sx={{ display: hook.isVisible_btnModMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnModMatch_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>수정연계처리</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static15 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">제조소등 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnFPISInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_page1_btnFPISInfo_OnClick} sx={{ width: '132px', height: '26px', whiteSpace: "nowrap" }}>청시스템상세보기</Button></Box><Box sx={{ display: hook.isVisible_btnKFSunapEduInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_SunapEduInfo} sx={{ width: '132px', height: '26px', whiteSpace: "nowrap" }}>회비/교육정보</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static16 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">고객 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '295px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.OBJ_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '119px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 58, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.PRMISN_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '95px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 57, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '346px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '512px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.ADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static19 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '47px' }}><Typography variant="body2">매칭주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 34, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.SEARCHDONGFNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edMFDong ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.SEARCHDONGNM || ''} sx={{ width: '87px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '97px', height: '22px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.SEARCHMAINADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '96px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.SEARCHSUBADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static30 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '45px' }}><Typography variant="body2">매칭주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 34, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BADDRDONGFNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edKFDong ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BADDRDONGNM || ''} sx={{ width: '87px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '97px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BADDRMAINNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '99px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 46, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BADDRSUBNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
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
                 </Stack><Box sx={{ display: hook.isVisible_Static68 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '24px' }}><Typography variant="body2">도로명</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edKFRoadNM ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RROADNM || ''} sx={{ width: '202px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '113px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RBUILDMAINNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '67px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 14, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>-</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RBUILDSUBNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '512px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방관서</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.CMPN119SC_ID || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RCNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회원구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CSTATUSGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>제조소등구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.MNFCTRETCNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 111, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>제조소등상세구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.MNFCTRETCDETAILNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CGROUPNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치법인명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.INSTLR_CPR_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.INSTLR_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>용도</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CCCDNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상태</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.DELGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.INSTLR_TELNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>완공일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.COMPET_DE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '191px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '184px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업무대행</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CAGGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '135px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>인력구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CPERSONGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.REGIST_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최종수정일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.UPDT_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '191px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>안전원등록년월</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CREGISTERYYMM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '184px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비부과월</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CFEEYYMM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '135px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>고객번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static24 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">선임자 정보</Typography></Box></Box><Box sx={{ ml: "289px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnMFMatchExceptCancelM ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExceptCancelM} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnMFMatchExceptM ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExceptM} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CREGDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최종수정일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CMODDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMFManager ? undefined : 'none' }}><Paper sx={{ width: '513px', height: '167px', width: '100%', height: 'auto', minHeight: '167px' }}><DataGridWrapper rows={hook.ds_ioFireManagerInfo} columns={columns_gdMFManager} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static40 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">선임자정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '158px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FMNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '178px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 65, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FBIRTHDAY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '167px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FMPERSONKEY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FMHSTARTDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>해임일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FMHENDDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tab} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "50px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioCourseD || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static11 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '56px', height: '24px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spKFRowNum ? undefined : 'none' }}><Box sx={{ width: '89px', height: '24px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '511px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '200px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edKFKeyword ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '219px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnKFSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_KFSearch2} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>안전원자료조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_chkKFDelUser ? undefined : 'none' }}><Box sx={{ width: '92px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_chkKFPerson ? undefined : 'none' }}><Box sx={{ width: '92px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '98px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "247px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnKFMatchCancel ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_KFMatchExceptCancel2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnKFMatchExcept ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_KFMatchExcept2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Box sx={{ display: hook.isVisible_btnKFExcel ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tab_page2_btnKFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdKFOBJList ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '209px', width: '100%', height: 'auto', minHeight: '209px' }}><DataGridWrapper rows={hook.ds_ioKFFireObj2} columns={columns_gdKFOBJList_1} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdDangerInfo ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '154px', width: '100%', height: 'auto', minHeight: '154px' }}><DataGridWrapper rows={hook.ds_ioDangerInfo2} columns={columns_gdDangerInfo_1} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static16 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">고객 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnKFSunapEduInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_SunapEduInfo2} sx={{ width: '132px', height: '26px', whiteSpace: "nowrap" }}>회비/교육정보</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '346px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.ADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static30 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '48px' }}><Typography variant="body2">매칭주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 34, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BADDRDONGFNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edKFDong ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BADDRDONGNM || ''} sx={{ width: '87px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '97px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BADDRMAINNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '99px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 46, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BADDRSUBNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
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
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RCNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회원구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CSTATUSGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CGROUPNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>용도</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CCCDNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상태</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.DELGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '191px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '184px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업무대행</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CAGGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '135px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>인력구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CPERSONGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '191px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>안전원등록년월</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CREGISTERYYMM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '184px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비부과월</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CFEEYYMM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '135px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>고객번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CREGDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최종수정일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CMODDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static40 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">선임자정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '158px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FMNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '178px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 65, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FBIRTHDAY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '168px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FMPERSONKEY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FMHSTARTDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>해임일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FMHENDDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "50px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '215px', height: '22px', display: 'flex', alignItems: 'center', ml: '524px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>제조소구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioMNFCTRETCGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '279px', height: '22px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 119, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>제조소상세구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioMNFCTRETCGubunD || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '22px', display: 'flex', alignItems: 'center', ml: '524px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>변경일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '139px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static10 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '59px', height: '24px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spMFRowNum ? undefined : 'none' }}><Box sx={{ width: '94px', height: '24px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '510px', height: '22px', display: 'flex', alignItems: 'center', ml: '524px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '524px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6100MDataConnectionDangerManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edMFKeyword ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '219px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnMFSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_page2_btnMFSearch_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_chkMFPerson ? undefined : 'none' }}><Box sx={{ width: '92px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '98px', height: '22px', display: 'flex', alignItems: 'center', ml: '521px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "246px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnMFMatchCancel ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExceptCancel2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnMFMatchExcept ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExcept2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Box sx={{ display: hook.isVisible_btnMFExcel ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tab_page2_btnMFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMFOBJList ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '281px', width: '100%', height: 'auto', minHeight: '281px' }}><DataGridWrapper rows={hook.ds_ioMFFireObj2} columns={columns_gdMFOBJList_1} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnMatchCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_CancelMatch2} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>연계해지처리</Button></Box><Box sx={{ display: hook.isVisible_btnMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_NowMatch2} sx={{ width: '119px', height: '26px', whiteSpace: "nowrap" }}>수정없이연계처리</Button></Box><Box sx={{ display: hook.isVisible_btnModMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnModMatch_OnClick2} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>수정연계처리</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static15 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">제조소등 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnFPISInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_page2_btnFPISInfo_OnClick} sx={{ width: '132px', height: '26px', whiteSpace: "nowrap" }}>청시스템상세보기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '295px', height: '22px', display: 'flex', alignItems: 'center', ml: '525px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.OBJ_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '119px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 58, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.PRMISN_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '95px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 57, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '512px', height: '22px', display: 'flex', alignItems: 'center', ml: '525px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static19 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '48px' }}><Typography variant="body2">매칭주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 34, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.SEARCHDONGFNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edMFDong ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.SEARCHDONGNM || ''} sx={{ width: '87px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '97px', height: '22px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.SEARCHMAINADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '96px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.SEARCHSUBADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '239px', height: '22px', display: 'flex', alignItems: 'center', ml: '616px' }}>
                    <Typography variant="body2" sx={{ minWidth: 36, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>도로명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ROAD_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '113px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.MAIN_BDNBR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '68px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 14, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>-</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.SEC_BDNBR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '512px', height: '22px', display: 'flex', alignItems: 'center', ml: '525px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방관서</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.CMPN119SC_ID || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '525px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>제조소등구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.MNFCTRETCNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 111, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>제조소등상세구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.MNFCTRETCDETAILNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '525px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치법인명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.INSTLR_CPR_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.INSTLR_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '525px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.INSTLR_TELNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>완공일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.COMPET_DE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '258px', height: '22px', display: 'flex', alignItems: 'center', ml: '525px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.REGIST_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '253px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최종수정일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.UPDT_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static24 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">선임자 정보</Typography></Box></Box><Box sx={{ ml: "289px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnMFMatchExceptCancelM ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExceptCancelM2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnMFMatchExceptM ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExceptM2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMFManager ? undefined : 'none' }}><Paper sx={{ width: '513px', height: '160px', width: '100%', height: 'auto', minHeight: '160px' }}><DataGridWrapper rows={hook.ds_ioFireManagerInfo2} columns={columns_gdMFManager_1} /></Paper></Box></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6100MDataConnectionDangerManage;

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