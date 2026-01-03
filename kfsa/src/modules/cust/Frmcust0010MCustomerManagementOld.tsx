// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0010MCustomerManagementOld } from './useFrmcust0010MCustomerManagementOld';
import * as Frmcust0010MCustomerManagementOldData from './Frmcust0010MCustomerManagementOldData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust0010MCustomerManagementOld = () => {
    const hook = useFrmcust0010MCustomerManagementOld();
    const [tabValue_tabTab3, setTabValue_tabTab3] = useState(0);
    const [tabValue_tabTab2, setTabValue_tabTab2] = useState(0);
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const columns_gdOverBizInfo = [
        { field: 'CGTMGNO', headerName: '지부', width: 50 },
        { field: 'CNO', headerName: '회원번호', width: 60 },
        { field: 'CNICKFULLNM', headerName: '직능', width: 100 },
        { field: 'COVERGUBUN', headerName: '면제여부', width: 60 },
        { field: 'BNM', headerName: '업체명', width: 140 },
        { field: 'MINAPFEE', headerName: '미납금액', width: 61 },
        { field: 'BBIZCD', headerName: '업종', width: 80 },
    ];
    const columns_gdLicenseInfo = [
        { field: 'OLHCD', headerName: '자격증명', width: 200 },
        { field: 'OLNO', headerName: '자격증등록번호', width: 120 },
        { field: 'OLDATE', headerName: '자격증등록일자', width: 100 },
    ];
    const columns_Grid0 = [
        { field: 'TCCOURSENM', headerName: '자격증명', width: 210 },
        { field: 'LLCSNO', headerName: '자격증번호', width: 150 },
        { field: 'LISSUEDATE', headerName: '등록일자', width: 100 },
    ];
    const columns_gdMemFee = [
        { field: 'CFGYEAR', headerName: '년도', width: 63 },
        { field: 'CFCCGUBUN', headerName: '회비구분', width: 72 },
        { field: 'MINAPFEE', headerName: '미납금액', width: 100 },
        { field: 'SUNAPFEE', headerName: '수납금액', width: 100 },
    ];
    const columns_gdEduInfo = [
        { field: 'id', headerName: '이수확인증', width: 65, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'EPYEAR', headerName: '년도', width: 40 },
        { field: 'ESSTUDENT', headerName: '교육', width: 60 },
        { field: 'EPSUCCESSIONGUBUN', headerName: '구분', width: 70 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 80 },
        { field: 'EPPERSONNM', headerName: '성명', width: 50 },
        { field: 'EPRESIDENTNO', headerName: '주민번호', width: 110 },
        { field: 'EPPROCGTMGNO', headerName: '교육지부', width: 70 },
        { field: 'ESGUBUN', headerName: '교육구분', width: 60 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 200 },
    ];
    const columns_gdEduInfo_1 = [
        { field: 'id', headerName: '이수확인증', width: 65, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'EPYEAR', headerName: '년도', width: 40 },
        { field: 'ESSTUDENT', headerName: '교육', width: 60 },
        { field: 'EPSUCCESSIONGUBUN', headerName: '구분', width: 70 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 80 },
        { field: 'EPPERSONNM', headerName: '성명', width: 60 },
        { field: 'EPRESIDENTNO', headerName: '주민번호', width: 110 },
        { field: 'EPPROCGTMGNO', headerName: '교육지부', width: 70 },
        { field: 'ESGUBUN', headerName: '교육구분', width: 60 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 200 },
    ];
    const columns_gdConnections = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'OREMARK', headerName: '구분', width: 96 },
        { field: 'ONM', headerName: '성명', width: 111 },
        { field: 'OTEL', headerName: '전화번호', width: 109 },
        { field: 'OHPTEL', headerName: '핸드폰번호', width: 103 },
    ];
    const columns_gdDangerInfo = [
        { field: 'DPERMISSIONNO', headerName: '허가번호', width: 97 },
        { field: 'DREMARK', headerName: '기타사항', width: 182 },
    ];
    const columns_gdConnections_1 = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'OREMARK', headerName: '구분', width: 96 },
        { field: 'ONM', headerName: '성명', width: 111 },
        { field: 'OTEL', headerName: '전화번호', width: 109 },
        { field: 'OHPTEL', headerName: '핸드폰번호', width: 103 },
    ];
    const columns_gdTankInfo = [
        { field: 'id', headerName: '순번', width: 29, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'POSTPLACE', headerName: '차량년도', width: 62 },
        { field: 'TPERMISSIONNO', headerName: '허가번호', width: 66 },
        { field: 'TMATCHSTATUS', headerName: '청연계', width: 39 },
        { field: 'TREMARK', headerName: '기타사항', width: 170 },
    ];
    const columns_gdConnections_2 = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'OREMARK', headerName: '구분', width: 70 },
        { field: 'ONM', headerName: '성명', width: 110 },
        { field: 'OTEL', headerName: '전화번호', width: 125 },
        { field: 'OHPTEL', headerName: '핸드폰번호', width: 125 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Input}>추가 저장</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_GroupSearch}>그룹조회(F6)</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btn_NextCNo_OnClick}></Button>
<Button variant="contained"  onClick={hook.btn_BeforeCNo_OnClick}></Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.btnFireSearch_OnClick}>청시스템조회</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '172px', height: '22px', display: 'flex', alignItems: 'center', ml: '565px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구시스템번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.COLDMGNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btn_NextOldCNo ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btn_NextOldCNo_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '22px', whiteSpace: "nowrap" }}><TouchApp fontSize="small" /></Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '156px', height: '22px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>변경사유</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioCustomerInfo?.CSTATUSREASONCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oStatusReason || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchChangeH ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearchChangeH_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>변경이력</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '129px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 48, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '165px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 44, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '180px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oDetailCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '500px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>등록년월</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CREGISTERYYMM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비부과년월</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CFEEYYMM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>고객상태</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioCustomerInfo?.CSTATUSGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oCustomerStatus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_medMemStatusDate ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CSTATUSDATE || ''} sx={{ width: '76px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbBuildingInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '22px' }}><Typography variant="body2">대상물 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnChangeBuilding ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnChangeBuilding_OnClick} sx={{ width: '79px', height: '24px', whiteSpace: "nowrap" }}>대상물변경</Button></Box><Box sx={{ display: hook.isVisible_btnSearchManagerList ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearchManagerList_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>선임현황</Button></Box><Box sx={{ display: hook.isVisible_cbxAddPost ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '62px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioCustomerInfo?.CPOSTREQGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oAddPost || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ ml: "0px", minWidth: "433px" }}><Box sx={{ display: hook.isVisible_Div0 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '433px', height: '115px', width: '100%', height: 'auto', minHeight: '115px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "50px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '332px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>투입장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CFEEPOSTPLACE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchReturnPostH ? undefined : 'none' }}><Button variant="contained"   onClick={hook.Div0_btnSearchReturnPostH_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>우편반송이력</Button></Box></Stack>
</Stack></Paper></Box><Box sx={{ display: hook.isVisible_Div4 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '433px', height: '115px', width: '100%', height: 'auto', minHeight: '115px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "50px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '332px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>투입장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CEDUPOSTPLACE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchEduReturnPostH ? undefined : 'none' }}><Button variant="contained"   onClick={hook.Div4_btnSearchEduReturnPostH_OnClick} sx={{ width: '92px', height: '26px', whiteSpace: "nowrap" }}>우편반송이력</Button></Box></Stack>
</Stack></Paper></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbBuildingName ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '368px', height: '18px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '260px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchBuilding ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchBuilding_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ ml: "3px", minWidth: "193px" }}><Box sx={{ display: hook.isVisible_lbBusiness ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '60px', height: '22px' }}><Typography variant="body2">용도</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '189px', height: '26px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 140, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인회원의 대상물정보는
안전원정보를 사용합니다.</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioBuildingInfo?.BBIZCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oBizCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Box><Box sx={{ display: hook.isVisible_btnCustFee ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnCustFee_OnClick} sx={{ width: '60px', height: '22px', whiteSpace: "nowrap" }}>회비고지서</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '133px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방관서</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioBuildingInfo?.BFIREBONBUCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oFireBonbu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxStation ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '98px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioBuildingInfo?.BFIREUPCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oFireCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_cbxCenter ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '131px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioBuildingInfo?.BFIRECD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oFireCenterCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '116px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>담당</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BFIREMAN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnEduNoti ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnEduNoti_OnClick} sx={{ width: '60px', height: '22px', whiteSpace: "nowrap" }}>교육통지서</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbDelegateAddr ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '60px', height: '22px' }}><Typography variant="body2">대표주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '416px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '246px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>인력구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioCustomerInfo?.CPERSONGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oPersonGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '141px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리제외</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioCustomerInfo?.CEXCEPTGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_ioYn || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_calExclusionDate ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '101px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radAddrGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '62px', height: '46px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust0010MCustomerManagementOldData.ds_ds_oAddr || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box><Box sx={{ display: hook.isVisible_medOldZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BZIPCD || ''} sx={{ width: '54px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearchOldZipCode ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchOldZipCode_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edOldAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BADDR2 || ''} sx={{ width: '336px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '161px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>겸직회비면제</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioCustomerInfo?.COVERGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_ioYn || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_btnConcurrentH ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnConcurrentH_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>겸직이력</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '141px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상태구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioCustomerInfo?.CDELGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_ioDelete || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_calDelDate ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '101px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '416px', height: '22px', display: 'flex', alignItems: 'center', ml: '72px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "12px", minWidth: "162px" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '162px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>청시스템연계</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.MMCNT || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edCivilAppeal ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.MMCNT || ''} sx={{ width: '70px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Box><Box sx={{ display: hook.isVisible_btnSearchCivilAppeal ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearchCivilAppeal_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>연계정보</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '175px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소방본부연계</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CFIREMGNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchFireDept ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchFireDept_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnFireDeptList ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnFireDeptList_OnClick} sx={{ width: '38px', height: '24px', whiteSpace: "nowrap" }}>현황</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medNewZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.ZIPCD || ''} sx={{ width: '54px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearchNewZipCode ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchNewZipCode_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edNewAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '336px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '161px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>업무대행</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioCustomerInfo?.CAGGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oAgencyYn || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_edAgencyNm ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.AGNM || ''} sx={{ width: '304px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearchAgency ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchAgency_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BTEL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '166px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>팩스번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BFAX || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_chkSameBuilding ? undefined : 'none' }}><Box sx={{ width: '139px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_cbxAddGubun ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '166px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioAdditionInfo?.ADCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oAddition || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_btnSaveAddInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSaveAddInfo_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>추가입력</Button></Box><Box sx={{ display: hook.isVisible_btnSearchAddInfoH ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearchAddInfoH_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>부가정보이력</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbAddInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '32px', height: '46px' }}><Typography variant="body2">부가

정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbAddGubun ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '52px', height: '22px' }}><Typography variant="body2">구분</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "6px", minWidth: "484px" }}><Box sx={{ display: hook.isVisible_div2 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '484px', height: '68px', width: '100%', height: 'auto', minHeight: '68px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}></Stack></Paper></Box><Box sx={{ display: hook.isVisible_div1 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '484px', height: '68px', width: '100%', height: 'auto', minHeight: '68px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}></Stack></Paper></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '456px', height: '22px', display: 'flex', alignItems: 'center', ml: '536px' }}>
                    <Typography variant="body2" sx={{ minWidth: 52, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>내용</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioAdditionInfo?.ADCONTENT || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Div6 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '484px', height: '151px', width: '100%', height: 'auto', minHeight: '151px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab1 ? undefined : 'none' }}><Box sx={{ width: '480px', height: '272px', width: "100%", height: "auto", minHeight: "272px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="관계자정보" /><Tab label="위험물부가정보" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdConnections ? undefined : 'none' }}><Paper sx={{ width: '472px', height: '413px', width: '100%', height: 'auto', minHeight: '413px' }}><DataGridWrapper rows={hook.ds_ioOwnerInfo} columns={columns_gdConnections} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdDangerInfo ? undefined : 'none' }}><Paper sx={{ width: '472px', height: '413px', width: '100%', height: 'auto', minHeight: '413px' }}><DataGridWrapper rows={hook.ds_ioDangerInfo} columns={columns_gdDangerInfo} /></Paper></Box></Stack>
</CustomTabPanel></Box></Box></Stack>
</Stack></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbAppointInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '22px' }}><Typography variant="body2">선임자 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbNewFMGubun ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '68px', height: '22px' }}><Typography variant="body2">신규상태</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '184px', height: '22px', display: 'flex', alignItems: 'center', ml: '1006px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>해임처리일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '172px', height: '22px', display: 'flex', alignItems: 'center', ml: '500px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btn_SearchFireManager ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btn_SearchFireManager_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_btnUpdateManagerInfo ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnUpdateManagerInfo_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>선임자 정보변경</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '160px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '172px', height: '22px', display: 'flex', alignItems: 'center', ml: '500px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주민번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMRESIDENTNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_lbResidentNoError ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '30px', height: '22px' }}><Typography variant="body2">오류</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnAuthResidentNo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnAuthResidentNo_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>실명인증</Button></Box><Box sx={{ display: hook.isVisible_lbEndStatus ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '60px', height: '22px' }}><Typography variant="body2">해임상태</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '128px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 30, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>해임</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "500px", minWidth: "492px" }}><Box sx={{ display: hook.isVisible_tabTab3 ? undefined : 'none' }}><Box sx={{ width: '492px', height: '235px', width: "100%", height: "auto", minHeight: "235px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab3} onChange={(e, v) => setTabValue_tabTab3(v)} aria-label="tabTab3"><Tab label="기본정보" /><Tab label="겸직정보" /><Tab label="보유자격" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab3} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgPicture ? undefined : 'none' }}><Box sx={{ width: '70px', height: '70px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgPicture</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '172px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>이메일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHEMAILID || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '112px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 12, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>@</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHEMAILDOMAIN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_cbxEMailDomain ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '120px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioManagerInfo?.FMHEMAILDOMAIN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oEmailDomain || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbPostAddr ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '60px', height: '22px' }}><Typography variant="body2">대표주소</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '416px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radPostAddrGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '62px', height: '46px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} value={hook.ds_ioManagerInfo?.FMHADDRGUBUN || ''}>{ (Frmcust0010MCustomerManagementOldData.ds_ds_oAddr || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box><Box sx={{ display: hook.isVisible_medOldPostZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHZIPCD || ''} sx={{ width: '54px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearchOldPostZipCode ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab3_tabpgTab3Page1_btnSearchOldPostZipCode_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edOldPostAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHADDR2 || ''} sx={{ width: '336px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '416px', height: '22px', display: 'flex', alignItems: 'center', ml: '68px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medNewPostZipCode ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.ZIPCD || ''} sx={{ width: '54px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearchNewPostZipCode ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.tabTab3_tabpgTab3Page1_btnSearchNewPostZipCode_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edNewPostAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '336px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab3} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdOverBizInfo ? undefined : 'none' }}><Paper sx={{ width: '490px', height: '211px', width: '100%', height: 'auto', minHeight: '211px' }}><DataGridWrapper rows={hook.ds_ioOverBizInfo} columns={columns_gdOverBizInfo} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab3} index={2}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbLicense2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '20px', height: '85px' }}><Typography variant="body2">타
자
격</Typography></Box></Box><Box sx={{ display: hook.isVisible_gdLicenseInfo ? undefined : 'none' }}><Paper sx={{ width: '443px', height: '125px', width: '100%', height: 'auto', minHeight: '125px' }}><DataGridWrapper rows={hook.ds_ioLicenseInfo} columns={columns_gdLicenseInfo} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnDelRow ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnDelRow2_OnClick} sx={{ width: '20px', height: '44px', whiteSpace: "nowrap" }}>-</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbLicense1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '20px', height: '85px' }}><Typography variant="body2">협
회
자
격</Typography></Box></Box><Box sx={{ display: hook.isVisible_Grid0 ? undefined : 'none' }}><Paper sx={{ width: '465px', height: '125px', width: '100%', height: 'auto', minHeight: '125px' }}><DataGridWrapper rows={hook.ds_oLicenseInfo} columns={columns_Grid0} /></Paper></Box></Stack>
</CustomTabPanel></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '153px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 83, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>해임처리일:</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "8px", minWidth: "482px" }}><Box sx={{ display: hook.isVisible_tabTab2 ? undefined : 'none' }}><Box sx={{ width: '480px', height: '198px', width: "100%", height: "auto", minHeight: "198px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab2} onChange={(e, v) => setTabValue_tabTab2(v)} aria-label="tabTab2"><Tab label="회비/교육비" /><Tab label="실무교육" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab2} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMemFee ? undefined : 'none' }}><Paper sx={{ width: '476px', height: '174px', width: '100%', height: 'auto', minHeight: '174px' }}><DataGridWrapper rows={hook.ds_ioCustomerFeeInfo} columns={columns_gdMemFee} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab2} index={1}></CustomTabPanel></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '116px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 44, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>미납액</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnEduPrtH ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnEduPrtH_OnClick} sx={{ width: '131px', height: '24px', whiteSpace: "nowrap" }}>교육통지서 발행이력</Button></Box><Box sx={{ display: hook.isVisible_btnEducationInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnEducationInfo_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>실무교육&gt;&gt;</Button></Box><Box sx={{ display: hook.isVisible_btnCustomerFee ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnCustomerFee_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>회비/교육비</Button></Box><Box sx={{ display: hook.isVisible_btnEduDetailInfo1 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnEduDetailInfo1_OnClick} sx={{ width: '65px', height: '24px', whiteSpace: "nowrap" }}>상세정보</Button></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "15px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Div3 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '500px', height: '206px', width: '100%', height: 'auto', minHeight: '206px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div3</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "26px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdEduInfo ? undefined : 'none' }}><Paper sx={{ width: '496px', height: '307px', width: '100%', height: 'auto', minHeight: '307px' }}><DataGridWrapper rows={hook.ds_ioEducationPassInfo} columns={columns_gdEduInfo_1} /></Paper></Box></Stack>
</Stack></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Div7 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '484px', height: '151px', width: '100%', height: 'auto', minHeight: '151px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab1 ? undefined : 'none' }}><Box sx={{ width: '480px', height: '272px', width: "100%", height: "auto", minHeight: "272px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="관계자정보" /><Tab label="이동탱크부가정보" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdConnections ? undefined : 'none' }}><Paper sx={{ width: '472px', height: '413px', width: '100%', height: 'auto', minHeight: '413px' }}><DataGridWrapper rows={hook.ds_ioOwnerInfo} columns={columns_gdConnections_1} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdTankInfo ? undefined : 'none' }}><Paper sx={{ width: '472px', height: '413px', width: '100%', height: 'auto', minHeight: '413px' }}><DataGridWrapper rows={hook.ds_ioTankInfo} columns={columns_gdTankInfo} /></Paper></Box></Stack>
</CustomTabPanel></Box></Box></Stack>
</Stack></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Div8 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '484px', height: '151px', width: '100%', height: 'auto', minHeight: '151px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab1 ? undefined : 'none' }}><Box sx={{ width: '480px', height: '272px', width: "100%", height: "auto", minHeight: "272px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="관계자정보" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdConnections ? undefined : 'none' }}><Paper sx={{ width: '472px', height: '413px', width: '100%', height: 'auto', minHeight: '413px' }}><DataGridWrapper rows={hook.ds_ioOwnerInfo} columns={columns_gdConnections_2} /></Paper></Box></Stack>
</CustomTabPanel></Box></Box></Stack>
</Stack></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0010MCustomerManagementOld;

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