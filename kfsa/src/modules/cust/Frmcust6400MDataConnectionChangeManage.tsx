// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6400MDataConnectionChangeManage } from './useFrmcust6400MDataConnectionChangeManage';
import * as Frmcust6400MDataConnectionChangeManageData from './Frmcust6400MDataConnectionChangeManageData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust6400MDataConnectionChangeManage = () => {
    const hook = useFrmcust6400MDataConnectionChangeManage();
    const columns_gdTankChangeHList = [
        { field: 'RNUM', headerName: '순번', width: 30 },
        { field: 'SEL', headerName: '반영', width: 46 },
        { field: 'SEL2', headerName: '미반영', width: 46 },
        { field: 'MMREGDATE', headerName: '안전원전송일시', width: 127 },
        { field: 'MCPROCNM', headerName: '변경항목', width: 111 },
        { field: 'MHAPPLYGUBUN', headerName: '반영여부', width: 60 },
        { field: 'MHBEFORE', headerName: '변경 전', width: 150 },
        { field: 'MHAFTER', headerName: '변경 후', width: 180 },
        { field: 'PROCVALUE', headerName: '적용 값', width: 181 },
    ];
    const columns_gdTankChangeMList = [
        { field: 'id', headerName: '순번', width: 34, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'MMDBPROCDATE', headerName: '최종전송일자', width: 94 },
        { field: 'MMAPPLYGUBUNNM', headerName: '반영여부', width: 61 },
        { field: 'OBJ_NM', headerName: '대상물명', width: 118 },
        { field: 'VHCLE_NO', headerName: '차량번호', width: 82 },
        { field: 'ADDR', headerName: '설치장소', width: 201 },
        { field: 'INSTLR_NM', headerName: '설치자', width: 80 },
        { field: 'INSTLR_CPR_NM', headerName: '설치자법인명', width: 94 },
        { field: 'INSTLR_TELNO', headerName: '설치자연락처', width: 95 },
    ];
    const columns_gdSokiChangeHList = [
        { field: 'RNUM', headerName: '순번', width: 30 },
        { field: 'SEL', headerName: '반영', width: 46 },
        { field: 'SEL2', headerName: '미반영', width: 46 },
        { field: 'MMREGDATE', headerName: '안전원전송일시', width: 127 },
        { field: 'MCPROCNM', headerName: '변경항목', width: 111 },
        { field: 'MHAPPLYGUBUN', headerName: '반영여부', width: 60 },
        { field: 'MHBEFORE', headerName: '변경 전', width: 150 },
        { field: 'MHAFTER', headerName: '변경 후', width: 180 },
        { field: 'PROCVALUE', headerName: '적용 값', width: 181 },
    ];
    const columns_gdChangeMList = [
        { field: 'id', headerName: '순번', width: 34, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'MMDBPROCDATE', headerName: '최종전송일자', width: 83 },
        { field: 'MHPROCGUBUN', headerName: '변경항목', width: 57 },
        { field: 'MMAPPLYGUBUNNM', headerName: '반영여부', width: 56 },
        { field: 'OBJ_NM', headerName: '대상물명', width: 117 },
        { field: 'OBJ_COURSE', headerName: '대상구분', width: 73 },
        { field: 'NM', headerName: '선임자', width: 0 },
        { field: 'MANAGE_ENTRPS_VRSC_AT', headerName: '대행', width: 0 },
        { field: 'ADDR', headerName: '주소', width: 122 },
        { field: 'DYTM_TLPHON', headerName: '전화번호', width: 93 },
    ];
    const columns_gdFPISLicense = [
        { field: 'CRQFC_NM', headerName: '자격증명', width: 166 },
        { field: 'CRQFC_NO', headerName: '자격증번호', width: 136 },
        { field: 'DELVRY_DE', headerName: '발급일자', width: 116 },
    ];
    const columns_gdManager = [
        { field: 'id', headerName: '순번', width: 36, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'MANAGE_ENTRPS_VRSC_AT', headerName: '대행', width: 36 },
        { field: 'NM', headerName: '선임자명', width: 90 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 90 },
        { field: 'APNT_DE_8', headerName: '선임일자', width: 90 },
        { field: 'RLSOFC_DE_8', headerName: '해임일자', width: 90 },
        { field: 'MOBLPHON', headerName: '휴대폰', width: 90 },
        { field: 'OFCPS', headerName: '직위', width: 100 },
    ];
    const columns_gdDangerChangeHList = [
        { field: 'RNUM', headerName: '순번', width: 30 },
        { field: 'SEL', headerName: '반영', width: 46 },
        { field: 'SEL2', headerName: '미반영', width: 46 },
        { field: 'MMREGDATE', headerName: '안전원전송일시', width: 127 },
        { field: 'MCPROCNM', headerName: '변경항목', width: 111 },
        { field: 'MHAPPLYGUBUN', headerName: '반영여부', width: 60 },
        { field: 'MHBEFORE', headerName: '변경 전', width: 150 },
        { field: 'MHAFTER', headerName: '변경 후', width: 180 },
        { field: 'PROCVALUE', headerName: '적용 값', width: 181 },
    ];
    const columns_gdBangChangeHList = [
        { field: 'RNUM', headerName: '순번', width: 30 },
        { field: 'SEL', headerName: '반영', width: 46 },
        { field: 'SEL2', headerName: '미반영', width: 46 },
        { field: 'MMREGDATE', headerName: '안전원전송일시', width: 127 },
        { field: 'MCPROCNM', headerName: '변경항목', width: 100 },
        { field: 'MHAPPLYGUBUN', headerName: '반영여부', width: 60 },
        { field: 'MHBEFORE', headerName: '변경 전', width: 150 },
        { field: 'PROCVALUE', headerName: '적용 값', width: 181 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.fn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "44px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbFPISLicense1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '27px', height: '46px' }}><Typography variant="body2">조</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '231px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부명</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6400MDataConnectionChangeManageData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6400MDataConnectionChangeManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6400MDataConnectionChangeManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '231px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6400MDataConnectionChangeManageData.ds_ds_ioCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '213px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>변경일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static11 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '56px', height: '22px' }}><Typography variant="body2">조회건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_spSearchNum ? undefined : 'none' }}><Box sx={{ width: '89px', height: '22px', border: '1px dashed grey' }}>Unknown: Spin</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbFPISLicense2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '27px', height: '41px' }}><Typography variant="body2">회</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '358px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>DB적용여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6400MDataConnectionChangeManageData.ds_ds_ioChangeApplyGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '192px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회조건선택</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6400MDataConnectionChangeManageData.ds_ds_oSearchChoice || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edAddSearch ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '308px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ ml: "1px", minWidth: "991px" }}><Box sx={{ display: hook.isVisible_DivTankChangeM ? undefined : 'none' }}><Paper sx={{ p: 2, width: '991px', height: '300px', width: '100%', height: 'auto', minHeight: '300px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "48px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdTankChangeMList ? undefined : 'none' }}><Paper sx={{ width: '640px', height: '294px', width: '100%', height: 'auto', minHeight: '294px' }}><DataGridWrapper rows={hook.ds_ioTankChangeMList} columns={columns_gdTankChangeMList} /></Paper></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSATankInfo?.RCNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '134px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSATankInfo?.CNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업체명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSATankInfo?.BNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상치장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSATankInfo?.TPARKPLACEADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edKFBADDR2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioKFSATankInfo?.TPARKPLACEADDR2 || ''} sx={{ width: '264px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSATankInfo?.TINSTLRADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSATankInfo?.BTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSATankInfo?.TCARNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '134px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>차량년도</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSATankInfo?.TCARYEAR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSATankInfo?.TPERMISSIONNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>기타사항</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSATankInfo?.TREMARK || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbFMEndStatus ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '30px', height: '24px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "300px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static24 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">선임자 정보</Typography></Box></Box></Stack>
</Stack></Paper></Box><Box sx={{ display: hook.isVisible_DivChangeM ? undefined : 'none' }}><Paper sx={{ p: 2, width: '991px', height: '402px', width: '100%', height: 'auto', minHeight: '402px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "48px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdChangeMList ? undefined : 'none' }}><Paper sx={{ width: '640px', height: '229px', width: '100%', height: 'auto', minHeight: '229px' }}><DataGridWrapper rows={hook.ds_ioChangeMList} columns={columns_gdChangeMList} /></Paper></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '175px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.RCNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '134px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.CNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnCustomerLink ? undefined : 'none' }}><Button variant="contained"   onClick={hook.DivChangeM_btnCustomerLink_OnClick} sx={{ width: '22px', height: '26px', whiteSpace: "nowrap" }}>☞</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.BNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.BADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edKFBADDR2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.BADDR2 || ''} sx={{ width: '264px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.CNICKNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '131px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상태</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.DELGUBUN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '203px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>용도</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.CDNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.BTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '52px', height: '59px' }}><Typography variant="body2">선임자

정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_gdManager ? undefined : 'none' }}><Paper sx={{ width: '587px', height: '186px', width: '100%', height: 'auto', minHeight: '186px' }}><DataGridWrapper rows={hook.ds_oFireManagerInfo} columns={columns_gdManager} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '162px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임자명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.FMNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '172px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '167px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.FBIRTHDAY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '169px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 83, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.FMPERSONKEY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_StFireManagerTitle ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '52px', height: '52px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '178px', height: '22px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>휴대폰</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.FMHHPTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static6 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '30px', height: '24px' }}><Typography variant="body2">해임</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '125px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 25, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}></Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '149px', height: '23px', display: 'flex', alignItems: 'center', ml: '648px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업무대행</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioKFSAInfo?.CAGGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6400MDataConnectionChangeManageData.ds_ds_oAgencyYn || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edAgencyNm ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.AGNM || ''} sx={{ width: '187px', height: '25px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbFPISLicense1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '52px', height: '65px' }}><Typography variant="body2">자격증

정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_gdFPISLicense ? undefined : 'none' }}><Paper sx={{ width: '455px', height: '145px', width: '100%', height: 'auto', minHeight: '145px' }}><DataGridWrapper rows={hook.ds_ioFPISLicenseInfo} columns={columns_gdFPISLicense} /></Paper></Box><Box sx={{ display: hook.isVisible_btnSize ? undefined : 'none' }}><Button variant="contained"   onClick={hook.DivChangeM_btnSize_OnClick} sx={{ width: '80px', height: '26px', whiteSpace: "nowrap" }}>선임자 &gt;&gt;&gt;</Button></Box><Box sx={{ display: hook.isVisible_btnUpdate1 ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.lfn_UpdateCaggubun} sx={{ width: '132px', height: '26px', whiteSpace: "nowrap" }}>업무대행여부일치화</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_StbtnUpdate1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '216px', height: '17px' }}><Typography variant="body2">※ 청자료 기준으로 안전원에 일괄 반영</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "230px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static24 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '24px' }}><Typography variant="body2">선임자 정보</Typography></Box></Box></Stack>
</Stack></Paper></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static16 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '125px', height: '20px' }}><Typography variant="body2">변경내역 처리</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '98px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '400px', height: '22px', display: 'flex', alignItems: 'center', ml: '30px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>처리대상</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioKFSAInfo?.BNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Save} sx={{ width: '120px', height: '24px', whiteSpace: "nowrap" }}>변경내역 저장(F4)</Button></Box><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tab_page1_btnMFExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "8px", minWidth: "978px" }}><Box sx={{ display: hook.isVisible_gdTankChangeHList ? undefined : 'none' }}><Paper sx={{ width: '978px', height: '231px', width: '100%', height: 'auto', minHeight: '231px' }}><DataGridWrapper rows={hook.ds_ioTankChangeHList} columns={columns_gdTankChangeHList} /></Paper></Box><Box sx={{ display: hook.isVisible_gdSokiChangeHList ? undefined : 'none' }}><Paper sx={{ width: '978px', height: '231px', width: '100%', height: 'auto', minHeight: '231px' }}><DataGridWrapper rows={hook.ds_ioSokiChangeHList} columns={columns_gdSokiChangeHList} /></Paper></Box><Box sx={{ display: hook.isVisible_gdDangerChangeHList ? undefined : 'none' }}><Paper sx={{ width: '978px', height: '231px', width: '100%', height: 'auto', minHeight: '231px' }}><DataGridWrapper rows={hook.ds_ioDangerChangeHList} columns={columns_gdDangerChangeHList} /></Paper></Box><Box sx={{ display: hook.isVisible_gdBangChangeHList ? undefined : 'none' }}><Paper sx={{ width: '978px', height: '231px', width: '100%', height: 'auto', minHeight: '231px' }}><DataGridWrapper rows={hook.ds_ioBangChangeHList} columns={columns_gdBangChangeHList} /></Paper></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6400MDataConnectionChangeManage;

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