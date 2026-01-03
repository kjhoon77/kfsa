// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmotherincome0010MOtherincomeManagement } from './useFrmotherincome0010MOtherincomeManagement';
import * as Frmotherincome0010MOtherincomeManagementData from './Frmotherincome0010MOtherincomeManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmotherincome0010MOtherincomeManagement = () => {
    const hook = useFrmotherincome0010MOtherincomeManagement();
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const columns_gdOtherIncome = [
        { field: 'OIMGNO', headerName: '관리번호', width: 65 },
        { field: 'BIZGUBUN', headerName: '소득구분', width: 65 },
        { field: 'STATUS', headerName: '상태', width: 45 },
        { field: 'JIBU', headerName: '등록지부', width: 85 },
        { field: 'OIPRTNO', headerName: '발급번호', width: 65 },
        { field: 'OIINCOMECD', headerName: '소득코드', width: 105 },
        { field: 'PAYMENTDATE', headerName: '지급일자', width: 85 },
        { field: 'REVERTMONTH', headerName: '귀속년월', width: 85 },
        { field: 'OIPAYMENT', headerName: '지급총액', width: 85 },
        { field: 'OIINCOME', headerName: '소득금액', width: 85 },
        { field: 'OIOINCOME', headerName: '원천소득세', width: 85 },
        { field: 'OIOJUMIN', headerName: '원천주민세', width: 85 },
        { field: 'OIOTOTAL', headerName: '원천세총계', width: 85 },
        { field: 'OIREFKEY', headerName: '관리키', width: 110 },
    ];
    const columns_gdOtherExcel1 = [
        { field: 'OIJIBU', headerName: '지부코드', width: 70 },
        { field: 'JIBU_NAME', headerName: '지부명', width: 70 },
        { field: 'OIPAYMENTYEAR', headerName: '발급년도', width: 70 },
        { field: 'OIPRTNO', headerName: '발급번호', width: 70 },
        { field: 'OPNM', headerName: '발급자명', width: 70 },
        { field: 'OIRESIDENT', headerName: '주민등록번호', width: 120 },
        { field: 'OIPAYMENTDATE', headerName: '지급일자', width: 80 },
        { field: 'OIPAYMENT', headerName: '지급총액', width: 80 },
        { field: 'OINEEDCOST', headerName: '필요경비', width: 80 },
        { field: 'OIINCOME', headerName: '소득금액', width: 80 },
        { field: 'OIOINCOME', headerName: '원천소득세', width: 80 },
        { field: 'OIOJUMIN', headerName: '원천주민세', width: 80 },
        { field: 'TOTAL', headerName: '원천세총계', width: 80 },
        { field: 'OIREMARK', headerName: '비고', width: 200 },
    ];
    const columns_gdOtherExcel2 = [
        { field: 'OIJIBU', headerName: '지부코드', width: 70 },
        { field: 'JIBU_NAME', headerName: '지부명', width: 70 },
        { field: 'OIPAYMENTYEAR', headerName: '발급년도', width: 70 },
        { field: 'OIPRTNO', headerName: '발급번호', width: 70 },
        { field: 'OPNM', headerName: '발급자명', width: 70 },
        { field: 'OIRESIDENT', headerName: '주민등록번호', width: 120 },
        { field: 'OIPAYMENTDATE', headerName: '지급일자', width: 80 },
        { field: 'OIPAYMENT', headerName: '지급총액', width: 80 },
        { field: 'OIOINCOME', headerName: '원천소득세', width: 80 },
        { field: 'OIOJUMIN', headerName: '원천주민세', width: 80 },
        { field: 'TOTAL', headerName: '원천세총계', width: 80 },
        { field: 'OIREMARK', headerName: '비고', width: 200 },
    ];
    const columns_gdOtherbiz = [
        { field: 'OPNM', headerName: '이름', width: 125 },
        { field: 'JUMIN', headerName: '생년월일', width: 175 },
        { field: 'ODATE', headerName: '변경일자', width: 175 },
    ];
    const columns_gdOtherbizExcel = [
        { field: 'OPNM', headerName: '성명', width: 75 },
        { field: 'JUMIN', headerName: '생년월일', width: 100 },
        { field: 'TOTPAYMENT', headerName: '지급총액', width: 90 },
        { field: 'OTHERINCOME', headerName: 'OTHERINCOME', width: 95 },
        { field: 'OTHERJUMIN', headerName: 'OTHERJUMIN', width: 120 },
        { field: 'BIZINCOME', headerName: 'BIZINCOME', width: 95 },
        { field: 'BIZJUMIN', headerName: 'BIZJUMIN', width: 120 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "32px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab1 ? undefined : 'none' }}><Box sx={{ width: '718px', height: '631px', width: "100%", height: "auto", minHeight: "631px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="   지급조서 관리   " /><Tab label="   지급조서 발급현황   " /><Tab label="   사업소득자 관리   " /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbPerson ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '24px' }}><Typography variant="body2">소득자 검색</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '148px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>적용년도</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '284px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 175, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>키워드(이름 또는 주민번호)</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioIncomeKey?.KEYWORD || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnOtherPerson ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btn_SearchOtherIncome_OnClick} sx={{ width: '105px', height: '28px', whiteSpace: "nowrap" }}>조 회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbPersonSearch ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '24px' }}><Typography variant="body2">소득자 검색</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edOpmgno ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_oOneOtherPerson?.OPMGNO || ''} sx={{ width: '63px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnPersonNew ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab1_tab1_btnPersonNew_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '92px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnPersonChg ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab1_tab1_btnPersonChg_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '92px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnPersonDel ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab1_tab1_btnPersonDel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '92px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnPersonSave ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab1_tab1_btnPersonSave_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '92px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '208px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>이 름</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '177px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주민등록번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '84px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>-</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnJuminchk ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tabTab1_tab1_btnJuminchk_OnClick} sx={{ width: '75px', height: '28px', whiteSpace: "nowrap" }}>실명확인</Button></Box><Box sx={{ display: hook.isVisible_lbResidentNoError ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '82px', height: '24px' }}><Typography variant="body2">주민번호등록됨</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '209px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>국 적</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmotherincome0010MOtherincomeManagementData.ds_ds_ioOtherCode || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>거 주</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmotherincome0010MOtherincomeManagementData.ds_ds_ioGujuGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '218px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>내/외국인</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmotherincome0010MOtherincomeManagementData.ds_ds_ioLocalGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '696px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주 소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "13px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbIncomepayment ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '24px' }}><Typography variant="body2">지급조서 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edOimgno ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '63px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnIncomepaymentNew ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab1_tab1_btnIncomepaymentNew_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '92px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnIncomepaymentSave ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab1_tab1_btnIncomepaymentSave_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '92px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnIncomepaymentPrint ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab1_tab1_btnIncomepaymentPrint_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '92px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnIncomepaymentFall ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab1_tab1_btnIncomepaymentFall_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '92px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnIncomepaymentDel ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab1_tab1_btnIncomepaymentDel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '92px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edOiyear ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '70px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '248px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소득구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmotherincome0010MOtherincomeManagementData.ds_ds_ioBizGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edJibu ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '100px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '143px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>발급번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '128px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상태</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '178px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지급일자</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnOipaymentdate ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tabTab1_tab1_btnOipaymentdate_OnClick} sx={{ width: '66px', height: '28px', whiteSpace: "nowrap" }}>일자조회</Button></Box><Box sx={{ display: hook.isVisible_edOijibu ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '70px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '143px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>귀속년월</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소득코드</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmotherincome0010MOtherincomeManagementData.ds_ds_ioIncomecdG || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '178px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지급액</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '169px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 66, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>원천세액</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '343px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>비고</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbtotal ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '75px', height: '44px' }}><Typography variant="body2">산출             내역</Typography></Box></Box><Box sx={{ ml: "3px", minWidth: "618px" }}><Box sx={{ display: hook.isVisible_lbincome ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '618px', height: '44px' }}><Typography variant="body2">[지급총액안분] 지급총액(0000000 원,100%), 필요경비(0000000 원,80%), 소득금액(0000000 원,20%)
[원천징수세액] 소득세율(000 %), 원천세액 000000 원[소득세(000000 원) + 지방소득세(000000 원)]</Typography></Box></Box><Box sx={{ display: hook.isVisible_sOipayment ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '50px', height: '20px' }}><Typography variant="body2"></Typography></Box></Box><Box sx={{ display: hook.isVisible_sOineedcost ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '50px', height: '20px' }}><Typography variant="body2"></Typography></Box></Box><Box sx={{ display: hook.isVisible_sOineedpct ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '28px', height: '19px' }}><Typography variant="body2"></Typography></Box></Box><Box sx={{ display: hook.isVisible_sOiincome ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '50px', height: '20px' }}><Typography variant="body2"></Typography></Box></Box><Box sx={{ display: hook.isVisible_sOiincomepct ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '27px', height: '18px' }}><Typography variant="body2"></Typography></Box></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_sincomerate ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '20px', height: '20px' }}><Typography variant="body2"></Typography></Box></Box><Box sx={{ display: hook.isVisible_sOiototal ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '45px', height: '20px' }}><Typography variant="body2"></Typography></Box></Box><Box sx={{ display: hook.isVisible_sOioincome ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '45px', height: '20px' }}><Typography variant="body2"></Typography></Box></Box><Box sx={{ display: hook.isVisible_sOiojumin ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '45px', height: '20px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "15px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbIncomepaymentprint ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '24px' }}><Typography variant="body2">지급조서 발급이력</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '219px', height: '22px', display: 'flex', alignItems: 'center', ml: '146px' }}>
                    <Typography variant="body2" sx={{ minWidth: 65, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmotherincome0010MOtherincomeManagementData.ds_ds_ioJibuGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '229px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 65, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>자료구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmotherincome0010MOtherincomeManagementData.ds_ds_ioDataGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_btnToExcel ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tabTab1_tab1_btnToExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '92px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdOtherIncome ? undefined : 'none' }}><Paper sx={{ width: '694px', height: '230px', width: '100%', height: 'auto', minHeight: '230px' }}><DataGridWrapper rows={hook.ds_ioOtherIncomePayment} columns={columns_gdOtherIncome} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbPerson_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '24px' }}><Typography variant="body2">소득구분</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '479px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소득구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmotherincome0010MOtherincomeManagementData.ds_ds_inBizGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "20px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '24px' }}><Typography variant="body2">출력구분</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '479px', height: '57px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>출력구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmotherincome0010MOtherincomeManagementData.ds_ds_inPrtGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "20px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static2_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '24px' }}><Typography variant="body2">출력기준</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edsRange1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '116px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '479px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>출력기준</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmotherincome0010MOtherincomeManagementData.ds_ds_inPrtStandard || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edsRange2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '116px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbOiyear ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '65px', height: '24px' }}><Typography variant="body2">적용년도</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbRange ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '250px', height: '24px' }}><Typography variant="body2"></Typography></Box></Box><Box sx={{ display: hook.isVisible_medsRange1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '116px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medYear ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '65px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_lbs ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '10px', height: '24px' }}><Typography variant="body2">~</Typography></Box></Box><Box sx={{ display: hook.isVisible_medsRange2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '116px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "26px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '24px' }}><Typography variant="body2">지부선택</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '479px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부선택</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmotherincome0010MOtherincomeManagementData.ds_ds_inJibu || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxFrjibu ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '116px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmotherincome0010MOtherincomeManagementData.ds_ds_inFrjibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "28px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnpaymentprint ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab1_tab3_btnpaymentprint_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '112px', height: '36px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnpaymentexcel ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tabTab1_tab3_btnpaymentexcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '112px', height: '36px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdOtherExcel1 ? undefined : 'none' }}><Paper sx={{ width: '495px', height: '114px', width: '100%', height: 'auto', minHeight: '114px' }}><DataGridWrapper rows={hook.ds_oExcelcreate} columns={columns_gdOtherExcel1} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdOtherExcel2 ? undefined : 'none' }}><Paper sx={{ width: '495px', height: '114px', width: '100%', height: 'auto', minHeight: '114px' }}><DataGridWrapper rows={hook.ds_oExcelcreate} columns={columns_gdOtherExcel2} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={2}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbPerson_3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '24px' }}><Typography variant="body2">소득자 관리</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '168px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>적용년도</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnPersonSearch ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab1_tab2_btnPersonSearch_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '118px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '168px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>변경기간</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '104px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnErrorPerson ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab1_tab2_btnErrorPerson_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '118px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnToExcel_2 ? undefined : 'none' }}><Button variant="outlined" color="success" onClick={hook.tabTab1_tab2_btnToExcel_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '92px', height: '28px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_medJubsuCnt ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '72px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "9px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbtotal_2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '585px', height: '44px' }}><Typography variant="body2">소득자 조회</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdOtherbiz ? undefined : 'none' }}><Paper sx={{ width: '585px', height: '230px', width: '100%', height: 'auto', minHeight: '230px' }}><DataGridWrapper rows={hook.ds_oOtherbiz} columns={columns_gdOtherbiz} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '289px', height: '27px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 110, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전체 사업소득자</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnOtherbizTrans ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tabTab1_tab2_btnOtherbizTrans_OnClick} sx={{ width: '180px', height: '29px', whiteSpace: "nowrap" }}>사업소득 ⇒ 기타소득 전환</Button></Box><Box sx={{ display: hook.isVisible_btnOtherbizTotal ? undefined : 'none' }}><Button variant="contained"   onClick={hook.tabTab1_tab2_btnOtherbizTotal_OnClick} sx={{ width: '110px', height: '29px', whiteSpace: "nowrap" }}>소득자 집계현황</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "19px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdOtherbizExcel ? undefined : 'none' }}><Paper sx={{ width: '585px', height: '230px', width: '100%', height: 'auto', minHeight: '230px' }}><DataGridWrapper rows={hook.ds_oOtherbiz} columns={columns_gdOtherbizExcel} /></Paper></Box><Box sx={{ display: hook.isVisible_edObopmgno ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '80px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edObkey ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '80px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edObdate ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '80px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmotherincome0010MOtherincomeManagement;

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