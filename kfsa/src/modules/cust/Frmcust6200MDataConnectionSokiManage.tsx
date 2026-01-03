// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6200MDataConnectionSokiManage } from './useFrmcust6200MDataConnectionSokiManage';
import * as Frmcust6200MDataConnectionSokiManageData from './Frmcust6200MDataConnectionSokiManageData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust6200MDataConnectionSokiManage = () => {
    const hook = useFrmcust6200MDataConnectionSokiManage();
    const [tabValue_tab, setTabValue_tab] = useState(0);
    const columns_gdMFOBJList = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'STTUS_NM', headerName: '상태', width: 36 },
        { field: 'ENTRPS_NM', headerName: '업체명', width: 145 },
        { field: 'ENTRPSSE_NM', headerName: '업체구분', width: 80 },
        { field: 'NM', headerName: '기술자', width: 80 },
        { field: 'CFADDRDONGFNM', headerName: '동주소', width: 80 },
        { field: 'CFADDMAINNM', headerName: '주번지', width: 40 },
        { field: 'CFADDSUBNM', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 151 },
    ];
    const columns_gdKFOBJList = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOTSUM', headerName: '매칭율', width: 50 },
        { field: 'BNM', headerName: '업체명', width: 80 },
        { field: 'CNICKNM', headerName: '직능', width: 60 },
        { field: 'FMNM', headerName: '선임자', width: 67 },
        { field: 'COMPANYGUBUN', headerName: '업체구분', width: 62 },
        { field: 'BADDRDONGFNM', headerName: '동명', width: 77 },
        { field: 'BADDRMAINNM', headerName: '주번지', width: 40 },
        { field: 'BADDRSUBNM', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 80 },
        { field: 'RCNM', headerName: '지역', width: 78 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'CNO', headerName: '고객번호', width: 80 },
        { field: 'DELGUBUN', headerName: '삭제여부', width: 62 },
    ];
    const columns_gdMFOBJList_1 = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOTSUM', headerName: '매칭율', width: 56 },
        { field: 'ENTRPS_NM', headerName: '업체명', width: 145 },
        { field: 'ENTRPSSE_NM', headerName: '업체구분', width: 80 },
        { field: 'NM', headerName: '기술자', width: 80 },
        { field: 'CFADDRDONGFNM', headerName: '동주소', width: 80 },
        { field: 'CFADDMAINNM', headerName: '주번지', width: 40 },
        { field: 'CFADDSUBNM', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 151 },
    ];
    const columns_gdKFOBJList_1 = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'DELGUBUN', headerName: '상태', width: 35 },
        { field: 'BNM', headerName: '업체명', width: 80 },
        { field: 'CNICKNM', headerName: '직능', width: 69 },
        { field: 'FMNM', headerName: '선임자', width: 65 },
        { field: 'COMPANYGUBUN', headerName: '업체구분', width: 62 },
        { field: 'BADDRDONGFNM', headerName: '동명', width: 80 },
        { field: 'BADDRMAINNM', headerName: '주번지', width: 40 },
        { field: 'BADDRSUBNM', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 80 },
        { field: 'RCNM', headerName: '지역', width: 78 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'CNO', headerName: '고객번호', width: 80 },
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "33px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tab ? undefined : 'none' }}><Box sx={{ width: '1056px', height: '738px', width: "100%", height: "auto", minHeight: "738px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tab} onChange={(e, v) => setTabValue_tab(v)} aria-label="tab"><Tab label=" 청기준 " /><Tab label="안전원기준" /></Tabs></Box><CustomTabPanel value={tabValue_tab} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '215px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방관서</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_oFireHead || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxMFStation ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '134px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_oFireCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxMFCenter ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '157px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_oFireCenterCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '215px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_ioObjGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '308px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_ioCourseD || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static11 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '56px', height: '24px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spKFRowNum ? undefined : 'none' }}><Box sx={{ width: '89px', height: '24px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>안전원수신일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static10 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '56px', height: '24px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spMFRowNum ? undefined : 'none' }}><Box sx={{ width: '89px', height: '24px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '511px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '511px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '200px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edKFKeyword ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '219px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnKFSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_page1_btnKFSearch_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>안전원자료조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '170px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edMFKeyword ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '160px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_chkMFPerson ? undefined : 'none' }}><Box sx={{ width: '84px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_btnMFSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_MFSearch} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box><Box sx={{ display: hook.isVisible_chkKFDelUser ? undefined : 'none' }}><Box sx={{ width: '92px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_chkKFPerson ? undefined : 'none' }}><Box sx={{ width: '92px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edMFCount ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '41px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ ml: "249px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnMFMatchCancel ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExceptCancel} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnMFMatchExcept ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExcept} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Box sx={{ display: hook.isVisible_btnMFExcel ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tab_page1_btnMFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '98px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "248px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnKFMatchCancel ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_KFMatchExceptCancel} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnKFMatchExcept ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_KFMatchExcept} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Box sx={{ display: hook.isVisible_btnKFExcel ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tab_page1_btnKFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMFOBJList ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '225px', width: '100%', height: 'auto', minHeight: '225px' }}><DataGridWrapper rows={hook.ds_ioMFFireObj} columns={columns_gdMFOBJList} /></Paper></Box><Box sx={{ display: hook.isVisible_gdKFOBJList ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '225px', width: '100%', height: 'auto', minHeight: '225px' }}><DataGridWrapper rows={hook.ds_ioKFFireObj} columns={columns_gdKFOBJList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static60 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '514px', height: '24px' }}><Typography variant="body2">※ 대상물 또는 선임자 정보를 더블클릭 시 우측 안전원자료 자동조회</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnMatchCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_CancelMatch} sx={{ width: '119px', height: '26px', whiteSpace: "nowrap" }}>연계해지처리</Button></Box><Box sx={{ display: hook.isVisible_btnMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_NowMatch} sx={{ width: '119px', height: '26px', whiteSpace: "nowrap" }}>수정없이연계처리</Button></Box><Box sx={{ display: hook.isVisible_btnNewMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnNewMatch_OnClick} sx={{ width: '119px', height: '26px', whiteSpace: "nowrap" }}>신규연계등록</Button></Box><Box sx={{ display: hook.isVisible_btnModMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnModMatch_OnClick} sx={{ width: '119px', height: '26px', whiteSpace: "nowrap" }}>수정연계처리</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static15 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">소방업체 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnFPISInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_page1_btnFPISInfo_OnClick} sx={{ width: '132px', height: '26px', whiteSpace: "nowrap" }}>청시스템상세보기</Button></Box><Box sx={{ display: hook.isVisible_Static16 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">고객 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnKFSunapEduInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_SunapEduInfo} sx={{ width: '132px', height: '26px', whiteSpace: "nowrap" }}>회비/교육정보</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ENTRPS_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '346px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.ADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static19 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '48px' }}><Typography variant="body2">매칭주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 34, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.CFADDRDONGFNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edMFDong ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.CFADDRDONGNM || ''} sx={{ width: '87px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '97px', height: '22px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.CFADDMAINNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '96px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.CFADDSUBNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static30 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '48px' }}><Typography variant="body2">매칭주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
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
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '239px', height: '22px', display: 'flex', alignItems: 'center', ml: '103px' }}>
                    <Typography variant="body2" sx={{ minWidth: 36, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>도로명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RROADNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '113px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RBUILDMAINNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '67px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 14, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>-</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RBUILDSUBNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방관서</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.CMPN119SC_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RCNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회원구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CSTATUSGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '254px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ENTRPSSE_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체상세구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ENTRPSDETAILSE_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.COMPANYGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '254px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>사업자등록번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.BSNM_REGIST_NO2 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체상태</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ENTRPSSTTUS_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>사업자등록번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BCONO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상태</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.DELGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '254px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.TLPHON_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대표자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.RPRSNTV || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>고객번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>안전원등록년월</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CREGISTERYYMM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '254px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비부과월</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CFEEYYMM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static24 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">기술자 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CREGDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최종수정일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CMODDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '159px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '136px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static40 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">선임자정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '254px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>인력구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.HNFSE_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.APNT_DE_8 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '158px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FMNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '178px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 65, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FBIRTHDAY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '167px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FMPERSONKEY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '254px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.REGIST_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최종수정일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.UPDT_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '189px', height: '22px', display: 'flex', alignItems: 'center', ml: '527px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>인력구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CPERSONGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '160px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FMHSTARTDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '159px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>해임일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FMHENDDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tab} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_oRegion2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_oRegion2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_ioCourseD2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static11 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '56px', height: '24px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spKFRowNum ? undefined : 'none' }}><Box sx={{ width: '89px', height: '24px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '511px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_ioSelectGubun2 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '200px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edKFKeyword ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '219px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnKFSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_KFSearch2} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>안전원자료조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_chkKFDelUser ? undefined : 'none' }}><Box sx={{ width: '92px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_chkKFPerson ? undefined : 'none' }}><Box sx={{ width: '92px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "13px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '98px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "248px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnKFMatchExcept ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_KFMatchExcept2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnKFMatchCancel ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_KFMatchExceptCancel2} size="small" sx={{ minWidth: 26, p: 0.2, width: '95px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Box sx={{ display: hook.isVisible_btnKFExcel ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tab_page2_btnKFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdKFOBJList ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '225px', width: '100%', height: 'auto', minHeight: '225px' }}><DataGridWrapper rows={hook.ds_ioKFFireObj2} columns={columns_gdKFOBJList_1} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbsearchNotice ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '514px', height: '24px' }}><Typography variant="body2">※ 대상물 또는 선임자 정보를 더블클릭 시 우측 국민안전처 자료 자동조회</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static16 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">고객 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnKFSunapEduInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_SunapEduInfo2} sx={{ width: '132px', height: '26px', whiteSpace: "nowrap" }}>회비/교육정보</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '346px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.ADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static30 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '47px' }}><Typography variant="body2">매칭주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 34, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BADDRDONGFNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edKFDong ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BADDRDONGNM || ''} sx={{ width: '87px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '97px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BADDRMAINNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '99px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 46, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BADDRSUBNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '239px', height: '22px', display: 'flex', alignItems: 'center', ml: '97px' }}>
                    <Typography variant="body2" sx={{ minWidth: 36, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>도로명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RROADNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '113px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RBUILDMAINNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '67px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 14, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>-</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RBUILDSUBNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RCNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회원구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CSTATUSGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.COMPANYGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>사업자등록번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BCONO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상태</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.DELGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>고객번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>안전원등록년월</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CREGISTERYYMM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '254px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비부과월</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CFEEYYMM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CREGDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '255px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최종수정일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CMODDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static40 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">선임자정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '157px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FMNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '178px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 65, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FBIRTHDAY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '168px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FMPERSONKEY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '189px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>인력구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CPERSONGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '160px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FMHSTARTDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '159px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>해임일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FMHENDDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '215px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_ioObjGubun2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>안전원수신일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static10 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '56px', height: '24px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spMFRowNum ? undefined : 'none' }}><Box sx={{ width: '89px', height: '24px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '511px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_ioSelectGubun2 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '170px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6200MDataConnectionSokiManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edMFKeyword ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '251px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnMFSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_page2_btnMFSearch_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_chkMFPerson ? undefined : 'none' }}><Box sx={{ width: '84px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "12px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '98px', height: '22px', display: 'flex', alignItems: 'center', ml: '523px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "249px", minWidth: "98px" }}><Box sx={{ display: hook.isVisible_btnMFMatchCancel ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExceptCancel2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnMFMatchExcept ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.lfn_MFMatchExcept2} size="small" sx={{ minWidth: 26, p: 0.2, width: '98px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Box><Box sx={{ display: hook.isVisible_btnMFExcel ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tab_page2_btnMFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '24px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMFOBJList ? undefined : 'none' }}><Paper sx={{ width: '519px', height: '225px', width: '100%', height: 'auto', minHeight: '225px' }}><DataGridWrapper rows={hook.ds_ioMFFireObj2} columns={columns_gdMFOBJList_1} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnMatchCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_CancelMatch2} sx={{ width: '119px', height: '26px', whiteSpace: "nowrap" }}>연계해지처리</Button></Box><Box sx={{ display: hook.isVisible_btnMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_NowMatch2} sx={{ width: '119px', height: '26px', whiteSpace: "nowrap" }}>수정없이연계처리</Button></Box><Box sx={{ display: hook.isVisible_btnModMatch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnModMatch_OnClick2} sx={{ width: '119px', height: '26px', whiteSpace: "nowrap" }}>수정연계처리</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static15 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">소방업체 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnFPISInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_page2_btnFPISInfo_OnClick} sx={{ width: '132px', height: '26px', whiteSpace: "nowrap" }}>청시스템상세보기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ENTRPS_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static19 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '90px', height: '47px' }}><Typography variant="body2">매칭주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 34, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.CFADDRDONGFNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edMFDong ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.CFADDRDONGNM || ''} sx={{ width: '87px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '97px', height: '22px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.CFADDMAINNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '96px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부번지</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.CFADDSUBNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '239px', height: '22px', display: 'flex', alignItems: 'center', ml: '620px' }}>
                    <Typography variant="body2" sx={{ minWidth: 36, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>도로명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ROAD_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '113px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.MAIN_BDNBR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '68px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 14, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>-</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.SEC_BDNBR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '513px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방관서</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.CMPN119SC_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ENTRPSSE_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체상세구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ENTRPSDETAILSE_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>사업자등록번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.BSNM_REGIST_NO2 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체상태</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ENTRPSSTTUS_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.TLPHON_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대표자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.RPRSNTV || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "19px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static24 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">기술자 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '159px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '136px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '254px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>인력구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.HNFSE_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.APNT_DE_8 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '254px', height: '22px', display: 'flex', alignItems: 'center', ml: '529px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.REGIST_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '256px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
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
export default Frmcust6200MDataConnectionSokiManage;

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