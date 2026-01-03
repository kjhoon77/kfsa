// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust3040MFireManagerPstponeManagement } from './useFrmcust3040MFireManagerPstponeManagement';
import * as Frmcust3040MFireManagerPstponeManagementData from './Frmcust3040MFireManagerPstponeManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust3040MFireManagerPstponeManagement = () => {
    const hook = useFrmcust3040MFireManagerPstponeManagement();
    const columns_gdList = [
        { field: 'AJMGNO_MASK', headerName: '접수번호', width: 67 },
        { field: 'AJDATE', headerName: '신청일자', width: 80 },
        { field: 'AJSTATUSNM', headerName: '상태', width: 100 },
        { field: 'AJMOTHODNM', headerName: '접수방법', width: 63 },
        { field: 'OBJ_NM', headerName: '소방대상물명', width: 140 },
        { field: 'ASAJCOURSECDNM', headerName: '직능', width: 126 },
        { field: 'AJBIZGUBUNNM', headerName: '신청구분', width: 66 },
        { field: 'AJSTRDATE', headerName: '접수일자', width: 91 },
        { field: 'I_NM', headerName: '선임자명', width: 66 },
        { field: 'I_IHIDNUM', headerName: '생년월일', width: 62 },
        { field: 'FSTNSMALL_NM', headerName: '소방관서', width: 126 },
    ];
    const columns_gdFile = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'AJFREALFILENM', headerName: '첨부파일명', width: 313 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "61px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '992px', height: '147px', width: '100%', height: 'auto', minHeight: '147px' }}><DataGridWrapper rows={hook.ds_oJubsuList} columns={columns_gdList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnNewJubsu ? undefined : 'none' }}><Button variant="contained"  onClick={hook.lfnBtnClick} sx={{ width: '69px', height: '24px' }}>신규접수</Button></Box><Box sx={{ display: hook.isVisible_btnSave ? undefined : 'none' }}><Button variant="contained" startIcon={<Save />} onClick={hook.lfnBtnClick} sx={{ width: '85px', height: '24px' }}>수정 저장</Button></Box><Box sx={{ display: hook.isVisible_btnJubsuStart ? undefined : 'none' }}><Button variant="contained"  onClick={hook.lfnBtnClick} sx={{ width: '69px', height: '24px' }}>접수시작</Button></Box><Box sx={{ display: hook.isVisible_btnJubsuEnd ? undefined : 'none' }}><Button variant="contained"  onClick={hook.lfnBtnClick} sx={{ width: '69px', height: '24px' }}>접수완료</Button></Box><Box sx={{ display: hook.isVisible_btnJubsuCancle ? undefined : 'none' }}><Button variant="contained"  onClick={hook.lfnBtnClick} sx={{ width: '69px', height: '24px' }}>반려</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '159px', height: '24px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>접수번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.AJMGNO_MASK || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '166px', height: '24px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 64, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청일</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '24px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상태</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioMaster?.AJSTATUS || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oStatus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '166px', height: '24px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 89, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>접수방법</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioMaster?.AJMOTHOD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oMethod || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '251px', height: '24px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방대상물</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.OBJ_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '159px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청인</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.AJNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '206px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 104, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청자연락처</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.AJHP || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '193px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신청지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioMaster?.AJGTMGNO || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '251px', height: '24px', display: 'flex', alignItems: 'center', ml: '71px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.BILD_SN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static9 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '110px', height: '22px' }}><Typography variant="body2">관계인정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '219px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관계인구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioMaster?.PARTCPNT_CODE || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oOwnerGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '175px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 48, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명   </Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.PARTCPNT || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.IHIDNUM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '193px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}> 연락처   </Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.TLPHON_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '121px', height: '22px', display: 'flex', alignItems: 'center', ml: '60px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관계자순번</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.PARTCPNT_SN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "11px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static10 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '110px', height: '22px' }}><Typography variant="body2">선임자정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '236px', height: '22px', display: 'flex', alignItems: 'center', ml: '249px' }}>
                    <Typography variant="body2" sx={{ minWidth: 104, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>식별번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.I_PERSONKEY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '236px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 104, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>자격자일련번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.QUALFUSER_SN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '154px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.I_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '195px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주민등록번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.I_IHIDNUM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '180px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>휴대폰</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.I_HPNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '405px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>이메일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.EMAIL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.ZIP || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchZipCode ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnSearchZipCode_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px' }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edBookAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioMaster?.BASS_ADRES || ''} sx={{ width: '405px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edBookAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioMaster?.ETC_ADRES || ''} sx={{ width: '404px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '549px', height: '22px', display: 'flex', alignItems: 'center', ml: '13px' }}>
                    <Typography variant="body2" sx={{ minWidth: 66, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임분야</Typography>
                    <FormControl component="fieldset"><RadioGroup row value={hook.ds_ioMaster?.ETC_MATTER || ''}>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oEtcCourse || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '733px', height: '22px', display: 'flex', alignItems: 'center', ml: '13px' }}>
                    <Typography variant="body2" sx={{ minWidth: 66, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임사유</Typography>
                    <FormControl component="fieldset"><RadioGroup row value={hook.ds_ioMaster?.APNT_PSTPONE_CODE || ''}>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oResn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edAPNT_PSTPONE_RESN ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioMaster?.APNT_PSTPONE_RESN || ''} sx={{ width: '216px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnCheck ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnCheck_OnClick} sx={{ width: '337px', height: '24px' }}> 안전원 보유정보 확인</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '171px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oTEGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '211px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>접수지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioMaster?.JUBSUJIBU || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbLcsInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '32px', height: '42px' }}><Typography variant="body2">강습교육</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '177px', height: '22px', display: 'flex', alignItems: 'center', ml: '49px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>접수일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.EDC_RCEPT_DE_8 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '204px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>접수번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.EDC_RCEPT_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '177px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육기간</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.TNCRS_PD_BEGIN_DE_8 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edTNCRS_TIME_END_DE_8 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioMaster?.TNCRS_TIME_END_DE_8 || ''} sx={{ width: '95px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static63 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '15px', height: '11px' }}><Typography variant="body2"> ~</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "25px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static23 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '32px', height: '42px' }}><Typography variant="body2">시험접수</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '177px', height: '22px', display: 'flex', alignItems: 'center', ml: '49px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>응시일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.APYEXM_RCEPT_DE_8 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '204px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>응시번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.APYEXM_RCEPT_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '177px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>시험일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioMaster?.APYEXM_DE_8 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button1 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.Button1_OnClick} sx={{ width: '104px', height: '23px' }}>저장검증</Button></Box><Box sx={{ display: hook.isVisible_btnSaveXml ? undefined : 'none' }}><Button variant="contained" startIcon={<Save />} onClick={hook.btnSaveXml_OnClick} sx={{ width: '104px', height: '23px' }}>saveXml</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static28 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '110px', height: '22px' }}><Typography variant="body2">첨부관리</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tx_xmlTest ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '233px', height: '82px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdFile ? undefined : 'none' }}><Paper sx={{ width: '517px', height: '111px', width: '100%', height: 'auto', minHeight: '111px' }}><DataGridWrapper rows={hook.ds_oFileList} columns={columns_gdFile} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnDownload ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnDownload_OnClick} sx={{ width: '66px', height: '24px' }}>다운로드</Button></Box><Box sx={{ display: hook.isVisible_btnUpload ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnUpload_OnClick} sx={{ width: '66px', height: '24px' }}>업로드</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_fiAttachFile ? undefined : 'none' }}><Box sx={{ width: '24px', height: '26px', border: '1px dashed grey' }}>Unknown: File</Box></Box><Box sx={{ display: hook.isVisible_fdAttachFile ? undefined : 'none' }}><Box sx={{ width: '24px', height: '26px', border: '1px dashed grey' }}>Unknown: FileDialog</Box></Box><Box sx={{ display: hook.isVisible_hfAttachFile ? undefined : 'none' }}><Box sx={{ width: '24px', height: '26px', border: '1px dashed grey' }}>Unknown: HttpFile</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button2 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.Button2_OnClick} sx={{ width: '104px', height: '23px' }}>Button2</Button></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust3040MFireManagerPstponeManagement;

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