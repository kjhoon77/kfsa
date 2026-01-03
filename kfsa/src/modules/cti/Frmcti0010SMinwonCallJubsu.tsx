// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcti0010SMinwonCallJubsu } from './useFrmcti0010SMinwonCallJubsu';
import * as Frmcti0010SMinwonCallJubsuData from './Frmcti0010SMinwonCallJubsuData';

export const Frmcti0010SMinwonCallJubsu = () => {
    const hook = useFrmcti0010SMinwonCallJubsu();
    const [tabValue_tab, setTabValue_tab] = useState(0);
    const columns_gdCallList = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CIDATE', headerName: '상담일시', width: 124 },
        { field: 'PROCSABUN', headerName: '상담사', width: 62 },
        { field: 'MWNM', headerName: '성명', width: 97 },
        { field: 'MWHP', headerName: '핸드폰', width: 97 },
        { field: 'MWTEL', headerName: '전화번호', width: 97 },
        { field: 'CIGRCDNM', headerName: '상담분야1', width: 97 },
        { field: 'CICDNM', headerName: '상담분야2', width: 97 },
        { field: 'CIKEMS', headerName: 'KEMS정보', width: 78 },
        { field: 'CIPROCGUBUN', headerName: '처리상태', width: 59 },
        { field: 'CISTATUS', headerName: '통화구분', width: 68 },
        { field: 'CICALLBACKTEL', headerName: '콜백번호', width: 86 },
        { field: 'CICONENTS', headerName: '상담내용', width: 175 },
    ];
    const columns_gdHCallList = [
        { field: 'id', headerName: '순번', width: 30, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CIDATE', headerName: '상담일시', width: 124 },
        { field: 'PROCSABUN', headerName: '상담사', width: 55 },
        { field: 'MWNM', headerName: '성명', width: 92 },
        { field: 'MWRECVTEL', headerName: '수신번호', width: 97 },
        { field: 'MWHP', headerName: '핸드폰', width: 97 },
        { field: 'MWTEL', headerName: '전화번호', width: 80 },
        { field: 'CIKEMS', headerName: 'KEMS정보', width: 78 },
        { field: 'CIGRCDNM', headerName: '상담분야1', width: 84 },
        { field: 'CICDNM', headerName: '상담분야2', width: 86 },
        { field: 'CIPROCGUBUN', headerName: '처리상태', width: 60 },
        { field: 'CISTATUS', headerName: '통화구분', width: 67 },
        { field: 'CICONENTS', headerName: '상담내용', width: 157 },
        { field: 'CICALLBACKTEL', headerName: '콜백번호', width: 86 },
        { field: 'CIREMOTEGUBUN', headerName: '원격요청', width: 60 },
        { field: 'CIREMOTESTATUS', headerName: '처리여부(원격)', width: 109 },
        { field: 'CIREMOTESABUNNM', headerName: '처리자(원격)', width: 94 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    
                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tab ? undefined : 'none' }}><Box sx={{ width: '1206px', height: '790px', width: "100%", height: "auto", minHeight: "790px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tab} onChange={(e, v) => setTabValue_tab(v)} aria-label="tab"><Tab label="민원상담접수" /><Tab label="   상담이력   " /><Tab label="민원상담전광판안내" /><Tab label="   매뉴얼   " /><Tab label="   매뉴얼등록 " /><Tab label="자리비움상태조회" /></Tabs></Box><CustomTabPanel value={tabValue_tab} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "45px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbInfomsg ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '420px', height: '28px' }}><Typography variant="body2">※</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '215px', height: '23px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상담일시</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "1px", minWidth: "80px" }}><Box sx={{ display: hook.isVisible_Static8 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '80px', height: '24px' }}><Typography variant="body2">성명</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnEnableMWNM ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_tabJubsu_btnEnableMWNM_OnClick} sx={{ width: '20px', height: '25px', whiteSpace: "nowrap" }}>...</Button></Box></Box><Box sx={{ ml: "2px", minWidth: "109px" }}><Box sx={{ display: hook.isVisible_edMWNM ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '109px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edSearchMinwon ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '21px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '301px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>민원인성향</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcti0010SMinwonCallJubsuData.ds_ds_ioGubun3 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static7 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '448px', height: '24px' }}><Typography variant="body2">상담내용</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '22px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>핸드폰</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '191px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '752px', height: '186px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 300, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부가정보</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_taMWREMARK ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '300px', height: '58px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '22px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>팩스번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '191px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>이메일</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '22px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별NO</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '191px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수신번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ ml: "17px", minWidth: "96px" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '24px' }}><Typography variant="body2">KEMS정보    </Typography></Box></Box><Box sx={{ display: hook.isVisible_btnEnableCIKEMS ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_tabJubsu_btnEnableCIKEMS_OnClick} sx={{ width: '20px', height: '25px', whiteSpace: "nowrap" }}>...</Button></Box></Box><Box sx={{ display: hook.isVisible_edCIKEMS ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '310px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '301px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>통화구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcti0010SMinwonCallJubsuData.ds_ds_ioGubun2 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '407px', height: '22px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>처리상태</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcti0010SMinwonCallJubsuData.ds_ds_ioGubun1 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '301px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>콜백전화번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '318px', height: '22px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>PC원격</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcti0010SMinwonCallJubsuData.ds_ds_ioGubun5 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '315px', height: '22px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상담분야</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_oCallCode1Cha || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxCICD ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '398px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_oCallCode2Cha || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '163px', height: '22px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>MWMGNO</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '165px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>CIMGNO</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '112px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>호전환구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '153px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>호전환번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '32px' }}><Typography variant="body2">민원인 상담이력</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_taCICONENTS1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '1077px', height: '90px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnExcel ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnExcel_OnClick} sx={{ width: '79px', height: '26px', whiteSpace: "nowrap" }}>엑셀</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdCallList ? undefined : 'none' }}><Paper sx={{ width: '1168px', height: '367px', width: '100%', height: 'auto', minHeight: '367px' }}><DataGridWrapper rows={hook.ds_oMinwonCallList} columns={columns_gdCallList} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tab} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "43px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '193px', height: '22px', display: 'flex', alignItems: 'center', ml: '206px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>처리상태</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_ioGubun1S || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '161px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 64, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>통화구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_ioGubun2S || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbRemoteChk ? undefined : 'none' }}><Box sx={{ width: '89px', height: '25px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '208px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_iSearhGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edSearch ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '202px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_minwonH_btnSearch_OnClick} sx={{ width: '79px', height: '26px', whiteSpace: "nowrap" }}>조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '133px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdHCallList ? undefined : 'none' }}><Paper sx={{ width: '1189px', height: '472px', width: '100%', height: 'auto', minHeight: '472px' }}><DataGridWrapper rows={hook.ds_oHMinwonCallList} columns={columns_gdHCallList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '154px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>CIMGNO</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.CIMGNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '162px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>CIMWMGNO</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.CIMWMGNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '121px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>CIMWSEQ</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.CIMWSEQ || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSaveEnable ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_minwonH_btnSaveEnable_OnClick} sx={{ width: '105px', height: '26px', whiteSpace: "nowrap" }}>저장삭제활성</Button></Box><Box sx={{ display: hook.isVisible_btnDeleteH ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_minwonH_btnDeleteH_OnClick} sx={{ width: '81px', height: '26px', whiteSpace: "nowrap" }}>삭제</Button></Box><Box sx={{ display: hook.isVisible_btnSaveH ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_minwonH_btnSaveH_OnClick} sx={{ width: '81px', height: '26px', whiteSpace: "nowrap" }}>저장</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '13px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>민원명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.MWNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnChgMinwon ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_minwonH_btnChgMinwon_OnClick} sx={{ width: '79px', height: '26px', whiteSpace: "nowrap" }}>민원인변경</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상담사</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.PROCSABUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '231px', height: '22px', display: 'flex', alignItems: 'center', ml: '21px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상담일시</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static7 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '424px', height: '24px' }}><Typography variant="body2">상담내용</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "13px", minWidth: "272px" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수신전화</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.MWRECVTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edMWRECVTELUSER ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.MWRECVTELUSER || ''} sx={{ width: '150px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>핸드폰</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.MWHP || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '231px', height: '22px', display: 'flex', alignItems: 'center', ml: '21px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.MWTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_taCICONENTS ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.CICONENTS || ''} sx={{ width: '424px', height: '134px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '13px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별NO</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.MWPERSONKEY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '85px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>팩스번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.MWFAX || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '231px', height: '22px', display: 'flex', alignItems: 'center', ml: '21px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>이메일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.MWMAIL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '272px', height: '22px', display: 'flex', alignItems: 'center', ml: '13px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>KEMS정보</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.CIKEMS || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>콜백번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.CICALLBACKTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnCall ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tab_minwonH_btnCall_OnClick} sx={{ width: '79px', height: '26px', whiteSpace: "nowrap" }}>콜백전화</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '271px', height: '22px', display: 'flex', alignItems: 'center', ml: '13px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>처리상태</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_oHMinwonCallRow?.CIPROCGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_ioGubun1 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '203px', height: '22px', display: 'flex', alignItems: 'center', ml: '13px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>통화구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_oHMinwonCallRow?.CISTATUS || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_ioGubun2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '235px', height: '22px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>민원인성향</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_oHMinwonCallRow?.MWGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_ioGubun3 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '271px', height: '22px', display: 'flex', alignItems: 'center', ml: '13px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상담분야</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_oHMinwonCallRow?.CIGRCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_oCallCode1ChaH2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxCICD ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '202px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_oHMinwonCallRow?.CICD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_oCallCode2ChaH2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '187px', height: '22px', display: 'flex', alignItems: 'center', ml: '18px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>호전환</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_oHMinwonCallRow?.CICALLGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_ioGubun4 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Edit5 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.CICALLDN || ''} sx={{ width: '45px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '187px', height: '22px', display: 'flex', alignItems: 'center', ml: '13px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>PC원격</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_oHMinwonCallRow?.CIREMOTEGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_ioGubun5 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '196px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>원격처리여부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_oHMinwonCallRow?.CIREMOTESTATUS || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_ioGubun6 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxCIREMOTESABUN ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '100px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_oHMinwonCallRow?.CIREMOTESABUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010SMinwonCallJubsuData.ds_ds_oRemoteUser || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_Edit4 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.CICALLDNUSER || ''} sx={{ width: '150px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "11px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '23px', display: 'flex', alignItems: 'center', ml: '13px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>등록/수정</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.CIREGDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_medCIUPDATE ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.CIUPDATE || ''} sx={{ width: '117px', height: '25px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edCIUPSABUNNM ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oHMinwonCallRow?.CIUPSABUNNM || ''} sx={{ width: '60px', height: '25px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_imgLogSend ? undefined : 'none' }}><Box sx={{ width: '88px', height: '24px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgLogSend</Box></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tab} index={2}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "15px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Div0 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '1192px', height: '781px', width: '100%', height: 'auto', minHeight: '781px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}></Stack></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tab} index={3}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "15px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Div0 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '1193px', height: '789px', width: '100%', height: 'auto', minHeight: '789px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}></Stack></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tab} index={4}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "15px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Div0 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '1192px', height: '781px', width: '100%', height: 'auto', minHeight: '781px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}></Stack></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tab} index={5}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "15px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Div0 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '1192px', height: '781px', width: '100%', height: 'auto', minHeight: '781px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}></Stack></Paper></Box></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcti0010SMinwonCallJubsu;

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