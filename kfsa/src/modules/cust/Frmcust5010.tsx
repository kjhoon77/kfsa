// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust5010 } from './useFrmcust5010';
import * as Frmcust5010Data from './Frmcust5010Data';

export const Frmcust5010 = () => {
    const hook = useFrmcust5010();
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const [tabValue_tabTab2, setTabValue_tabTab2] = useState(0);
    const columns_gdAdminList = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'NM', headerName: '성명', width: 80 },
        { field: 'OFCPS', headerName: '직위', width: 91 },
        { field: 'IHIDNUM', headerName: '생년월일', width: 87 },
        { field: 'BASS_ADRES', headerName: '주소', width: 246 },
        { field: 'APNT_DE_8', headerName: '선임일자', width: 100 },
        { field: 'RLSOFC_DE_8', headerName: '해임일자', width: 100 },
        { field: 'TLPHON_NO', headerName: '전화번호', width: 100 },
        { field: 'MANAGE_ENTRPS_VRSC_AT', headerName: '업무대행여부', width: 99 },
    ];
    const columns_gdLicense = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CODE_NM', headerName: '자격증명', width: 200 },
        { field: 'CRQFC_NO', headerName: '자격증번호', width: 136 },
        { field: 'DELVRY_DE', headerName: '교부일자', width: 100 },
        { field: 'ARSON_MANAGE_PKTBUK_NO', headerName: '안전원수첩정보', width: 183 },
        { field: 'QUALF_FRFTR_ENNC', headerName: '자격상실유무', width: 99 },
    ];
    const columns_gdAdminList_1 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'NM', headerName: '성명', width: 88 },
        { field: 'OFCPS', headerName: '직위', width: 82 },
        { field: 'IHIDNUM', headerName: '생년월일', width: 89 },
        { field: 'BASS_ADRES', headerName: '주소', width: 245 },
        { field: 'APNT_DE_8', headerName: '선임일자', width: 100 },
        { field: 'RLSOFC_DE_8', headerName: '해임일자', width: 100 },
        { field: 'TLPHON_NO', headerName: '전화번호', width: 100 },
    ];
    const columns_gdLicense_1 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CODE_NM', headerName: '자격증명', width: 200 },
        { field: 'CRQFC_NO', headerName: '자격증번호', width: 136 },
        { field: 'DELVRY_DE', headerName: '교부일자', width: 100 },
        { field: 'ARSON_MANAGE_PKTBUK_NO', headerName: '안전원수첩정보', width: 183 },
        { field: 'QUALF_FRFTR_ENNC', headerName: '자격상실유무', width: 99 },
    ];
    const columns_gdRelation = [
        { field: 'PARTCPNT_SN', headerName: '순번', width: 94 },
        { field: 'PARTCPNT_CODE', headerName: '구분', width: 153 },
        { field: 'PARTCPNT', headerName: '성명', width: 177 },
        { field: 'TLPHON_NO', headerName: '전화번호', width: 197 },
    ];
    const columns_gdDongStatus = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'BULDDONG_NM', headerName: '동명칭', width: 138 },
        { field: 'BULDDONG_MAIN_PRPOS_CODE', headerName: '주용도', width: 120 },
        { field: 'BULDDONG_SEC_PRPOS_CODE', headerName: '부용도', width: 187 },
        { field: 'TRRPHNM_FLOOR_QT', headerName: '지상층', width: 73 },
        { field: 'UNDGRND_FLOOR_QT', headerName: '지하층', width: 73 },
        { field: 'PLOT_AR', headerName: '부지면적', width: 71 },
        { field: 'BOTTOM_AR', headerName: '바닥면적', width: 71 },
        { field: 'TOTAR', headerName: '연면적', width: 71 },
        { field: 'BULDDONG_HG', headerName: '높이', width: 71 },
        { field: 'ADDR', headerName: '주소', width: 362 },
    ];
    const columns_gdFloorStatus = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'FLOOR', headerName: '층', width: 51 },
        { field: 'MAIN_PROPS', headerName: '용도', width: 77 },
        { field: 'AR', headerName: '면적', width: 48 },
        { field: 'ARSON_CMPRT_QT', headerName: '방화구획수', width: 80 },
        { field: 'ITRDECO_MATRL', headerName: '내장재료', width: 87 },
        { field: 'USE_AT', headerName: '사용여부', width: 89 },
        { field: 'RM', headerName: '비고', width: 111 },
        { field: 'regdate', headerName: '최초등록일', width: 90 },
        { field: 'moddate', headerName: '최종수정일', width: 90 },
    ];
    const columns_gdSFloorStatus = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'FLOOR', headerName: '층', width: 76 },
        { field: 'SPCL_PRPOS_SE_CODE', headerName: '특수용도', width: 139 },
        { field: 'AR', headerName: '면적', width: 101 },
        { field: 'USE_AT', headerName: '사용여부', width: 80 },
        { field: 'RM', headerName: '비고', width: 126 },
        { field: 'regdate', headerName: '최초등록일', width: 100 },
        { field: 'moddate', headerName: '최종수정일', width: 100 },
    ];
    const columns_gdFloorE = [
        { field: 'FLOOR_SE', headerName: '시설별', width: 80 },
        { field: 'FLOOR', headerName: '층', width: 80 },
        { field: 'GUBUN', headerName: '구분', width: 108 },
        { field: 'EXTSHR_STDR', headerName: '소화설비', width: 30 },
        { field: 'SIMPLCTY_FREXT_EQPMT_STDR', headerName: 'SIMPLCTY_FREXT_EQPMT_STDR', width: 30 },
        { field: 'INSDHOUS_FRPLG_STDR', headerName: 'INSDHOUS_FRPLG_STDR', width: 30 },
        { field: 'OUTHOUS_FRPLG_STDR', headerName: 'OUTHOUS_FRPLG_STDR', width: 30 },
        { field: 'POWER_FGT_PUMP_STDR', headerName: 'POWER_FGT_PUMP_STDR', width: 30 },
        { field: 'SPRINKLER_H_STDR', headerName: 'H', width: 30 },
        { field: 'SPRINKLER_AV_STDR', headerName: 'AV', width: 30 },
        { field: 'WATER_SPRAY_FREXT_H_STDR', headerName: 'H', width: 30 },
        { field: 'WATER_SPRAY_FREXT_AV_STDR', headerName: 'AV', width: 30 },
        { field: 'CANNON_FREXT_H_STDR', headerName: 'H', width: 30 },
        { field: 'CANNON_FREXT_AV_STDR', headerName: 'AV', width: 30 },
        { field: 'CARBON_DIOX_H_STDR', headerName: 'H', width: 30 },
        { field: 'CARBON_DIOX_AV_STDR', headerName: 'AV', width: 30 },
        { field: 'HALOGEN_COMP_H_STDR', headerName: 'H', width: 30 },
        { field: 'HALOGEN_COMP_AV_STDR', headerName: 'AV', width: 30 },
        { field: 'POWDER_FREXT_H_STDR', headerName: 'H', width: 30 },
        { field: 'POWDER_FREXT_AV_STDR', headerName: 'AV', width: 30 },
        { field: 'EMGNC_ALARM_STDR', headerName: '경보설비', width: 30 },
        { field: 'EMGNC_BRDCST_STDR', headerName: 'EMGNC_BRDCST_STDR', width: 30 },
        { field: 'SHCI_ALARM_STDR', headerName: 'SHCI_ALARM_STDR', width: 30 },
        { field: 'ATMC_FIRE_DETCT_SENSOR_STDR', headerName: '감', width: 30 },
        { field: 'ATMC_FIRE_DETCT_CRCT_STDR', headerName: '회', width: 30 },
        { field: 'ATMC_FIRE_FNEWS_STDR', headerName: 'ATMC_FIRE_FNEWS_STDR', width: 30 },
        { field: 'GAS_LKGE_ALARM_STDR', headerName: 'GAS_LKGE_ALARM_STDR', width: 30 },
        { field: 'SLIDE_STDR', headerName: '피난설비', width: 30 },
        { field: 'REFGE_LADDER_STDR', headerName: 'REFGE_LADDER_STDR', width: 30 },
        { field: 'RSCUNT_STDR', headerName: 'RSCUNT_STDR', width: 30 },
        { field: 'SLOW_DES_MCHN_STDR', headerName: 'SLOW_DES_MCHN_STDR', width: 30 },
        { field: 'REFGE_BRIDGE_STDR', headerName: 'REFGE_BRIDGE_STDR', width: 30 },
        { field: 'REFGE_ROPE_STDR', headerName: 'REFGE_ROPE_STDR', width: 30 },
        { field: 'AIR_SAFE_MAT_STDR', headerName: 'AIR_SAFE_MAT_STDR', width: 30 },
        { field: 'HNL_RESCUE_UTNSIL_STDR', headerName: 'HNL_RESCUE_UTNSIL_STDR', width: 30 },
        { field: 'DLAMP_STDR', headerName: 'DLAMP_STDR', width: 30 },
        { field: 'DERIVE_SGNAL_STDR', headerName: 'DERIVE_SGNAL_STDR', width: 30 },
        { field: 'EMGNC_LLAMP_STDR', headerName: 'EMGNC_LLAMP_STDR', width: 30 },
        { field: 'WRPP_FREXT_USWTR_STDR', headerName: '소방용수설비', width: 30 },
        { field: 'FREXT_WTR_STDR', headerName: 'FREXT_WTR_STDR', width: 30 },
        { field: 'WTRTNK_STDR', headerName: 'WTRTNK_STDR', width: 30 },
        { field: 'FGT_USWTR_EQP_ETC_STDR', headerName: 'FGT_USWTR_EQP_ETC_STDR', width: 30 },
        { field: 'RESMOKE_STDR', headerName: '소화활동상필요한설비', width: 30 },
        { field: 'CNNC_WTRPIPE_STDR', headerName: 'CNNC_WTRPIPE_STDR', width: 30 },
        { field: 'CNNC_SPRK_STDR', headerName: 'CNNC_SPRK_STDR', width: 30 },
        { field: 'EMGNC_CNCNT_STDR', headerName: 'EMGNC_CNCNT_STDR', width: 30 },
        { field: 'WLMC_ASSTN_STDR', headerName: 'WLMC_ASSTN_STDR', width: 30 },
        { field: 'CURTAIN_STDR', headerName: '방염', width: 30 },
        { field: 'CASSETTE_STDR', headerName: 'CASSETTE_STDR', width: 30 },
        { field: 'RSTPRT_ETC_STDR', headerName: 'RSTPRT_ETC_STDR', width: 30 },
    ];
    const columns_gdAdminList_2 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'NM', headerName: '성명', width: 80 },
        { field: 'OFCPS', headerName: '직위', width: 91 },
        { field: 'IHIDNUM', headerName: '생년월일', width: 87 },
        { field: 'BASS_ADRES', headerName: '주소', width: 246 },
        { field: 'APNT_DE_8', headerName: '선임일자', width: 100 },
        { field: 'RLSOFC_DE_8', headerName: '해임일자', width: 100 },
        { field: 'TLPHON_NO', headerName: '전화번호', width: 100 },
        { field: 'MANAGE_ENTRPS_VRSC_AT', headerName: '업무대행여부', width: 99 },
    ];
    const columns_gdLicense_2 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CODE_NM', headerName: '자격증명', width: 200 },
        { field: 'CRQFC_NO', headerName: '자격증번호', width: 136 },
        { field: 'DELVRY_DE', headerName: '교부일자', width: 100 },
        { field: 'ARSON_MANAGE_PKTBUK_NO', headerName: '안전원수첩정보', width: 183 },
        { field: 'QUALF_FRFTR_ENNC', headerName: '자격상실유무', width: 99 },
    ];
    const columns_gdAdminList_3 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'NM', headerName: '성명', width: 88 },
        { field: 'OFCPS', headerName: '직위', width: 82 },
        { field: 'IHIDNUM', headerName: '생년월일', width: 89 },
        { field: 'BASS_ADRES', headerName: '주소', width: 245 },
        { field: 'APNT_DE_8', headerName: '선임일자', width: 100 },
        { field: 'RLSOFC_DE_8', headerName: '해임일자', width: 100 },
        { field: 'TLPHON_NO', headerName: '전화번호', width: 100 },
    ];
    const columns_gdLicense_3 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CODE_NM', headerName: '자격증명', width: 200 },
        { field: 'CRQFC_NO', headerName: '자격증번호', width: 136 },
        { field: 'DELVRY_DE', headerName: '교부일자', width: 100 },
        { field: 'ARSON_MANAGE_PKTBUK_NO', headerName: '안전원수첩정보', width: 183 },
        { field: 'QUALF_FRFTR_ENNC', headerName: '자격상실유무', width: 99 },
    ];
    const columns_gdRelation_1 = [
        { field: 'PARTCPNT_SN', headerName: '순번', width: 94 },
        { field: 'PARTCPNT_CODE', headerName: '구분', width: 153 },
        { field: 'PARTCPNT', headerName: '성명', width: 177 },
        { field: 'TLPHON_NO', headerName: '전화번호', width: 197 },
    ];
    const columns_gdDongStatus_1 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'BULDDONG_NM', headerName: '동명칭', width: 138 },
        { field: 'BULDDONG_MAIN_PRPOS_CODE', headerName: '주용도', width: 120 },
        { field: 'BULDDONG_SEC_PRPOS_CODE', headerName: '부용도', width: 187 },
        { field: 'TRRPHNM_FLOOR_QT', headerName: '지상층', width: 73 },
        { field: 'UNDGRND_FLOOR_QT', headerName: '지하층', width: 73 },
        { field: 'PLOT_AR', headerName: '부지면적', width: 71 },
        { field: 'BOTTOM_AR', headerName: '바닥면적', width: 71 },
        { field: 'TOTAR', headerName: '연면적', width: 71 },
        { field: 'BULDDONG_HG', headerName: '높이', width: 71 },
        { field: 'ADDR', headerName: '주소', width: 362 },
    ];
    const columns_gdStatusSucces = [
        { field: 'FC_NM', headerName: '관할서/센터', width: 122 },
        { field: 'POSIT_SUCCS_DE', headerName: '승계일자', width: 100 },
        { field: 'PROCESS_DE', headerName: '신고일자', width: 100 },
        { field: 'BEFINSTLR_CPR_NM', headerName: '전 설치 법인명', width: 138 },
        { field: 'BEFINSTLR_NM', headerName: '전 설치자 명', width: 118 },
        { field: 'BEFINSTLR_TELNO', headerName: '전화번호', width: 87 },
        { field: 'REGIST_DE_14', headerName: '최초등록일', width: 100 },
        { field: 'UPDT_DE_14', headerName: '최종수정일', width: 100 },
    ];
    const columns_gdManagerInfo = [
        { field: 'NM', headerName: '선임자명', width: 122 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'CRQFC_CODE_NM', headerName: '자격증종류', width: 110 },
        { field: 'DMCRQFC_NO', headerName: '자격증번호', width: 138 },
        { field: 'AP_APNTRLSOFC_DE', headerName: '선임일자', width: 100 },
        { field: 'AP_PROCESS_DE', headerName: '선임신고일자', width: 100 },
        { field: 'RL_APNTRLSOFC_DE', headerName: '해임일자', width: 100 },
        { field: 'RL_PROCESS_DE', headerName: '해임신고일자', width: 100 },
    ];
    const columns_gdManagerInfo_1 = [
        { field: 'NM', headerName: '선임자명', width: 92 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'CRQFC_CODE_NM', headerName: '자격증종류', width: 110 },
        { field: 'DMCRQFC_NO', headerName: '자격증번호', width: 138 },
        { field: 'TELNO', headerName: '연락처', width: 101 },
        { field: 'AP_APNTRLSOFC_DE', headerName: '선임일자', width: 100 },
        { field: 'RL_APNTRLSOFC_DE', headerName: '해임일자', width: 100 },
        { field: 'AP_PROCESS_DE', headerName: '선임신고일자', width: 100 },
        { field: 'RL_PROCESS_DE', headerName: '해임신고일자', width: 100 },
    ];
    const columns_gdTankInfo = [
        { field: 'OKND_CODE_NM', headerName: '유별', width: 59 },
        { field: 'PRDNM_CODE_NM', headerName: '품명', width: 178 },
        { field: 'PRDNM_DETAIL', headerName: '품명상세', width: 104 },
        { field: 'APPN_QT', headerName: '지정수량', width: 81 },
        { field: 'MXMM_QT', headerName: '최대수량', width: 80 },
        { field: 'ANTY_MUL', headerName: '배수', width: 58 },
        { field: 'REGIST_DE_14', headerName: '최초등록일', width: 100 },
        { field: 'UPDT_DE_14', headerName: '최종수정일', width: 100 },
    ];
    const columns_gdStatusSucces_1 = [
        { field: 'FC_NM', headerName: '관할서/센터', width: 122 },
        { field: 'POSIT_SUCCS_DE', headerName: '승계일자', width: 100 },
        { field: 'PROCESS_DE', headerName: '신고일자', width: 100 },
        { field: 'BEFINSTLR_CPR_NM', headerName: '전 설치 법인명', width: 138 },
        { field: 'BEFINSTLR_NM', headerName: '전 설치자 명', width: 118 },
        { field: 'BEFINSTLR_TELNO', headerName: '전화번호', width: 87 },
        { field: 'REGIST_DE_14', headerName: '최초등록일', width: 100 },
        { field: 'UPDT_DE_14', headerName: '최종수정일', width: 100 },
    ];
    const columns_gdPHuman = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'NM', headerName: '성명', width: 83 },
        { field: 'HNF_SE_NM', headerName: '인력구분', width: 107 },
        { field: 'BIRTHDATE', headerName: '생년월일', width: 80 },
        { field: 'TLPHON_NO', headerName: '연락처', width: 80 },
        { field: 'ADDR', headerName: '주소', width: 254 },
        { field: 'APNT_DE', headerName: '선임일', width: 80 },
        { field: 'RLSOFC_DE', headerName: '해임일', width: 80 },
        { field: 'REGDATE	', headerName: '최초등록일', width: 80 },
        { field: 'MODDATE', headerName: '최근수정일', width: 80 },
    ];
    const columns_gdLicenscInfo = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CRQFC_NM', headerName: '자격증명', width: 129 },
        { field: 'CRQFC_DETAIL_SE_NM', headerName: '상세자격증명', width: 122 },
        { field: 'CRQFC_NO', headerName: '자격증번호', width: 101 },
        { field: 'DELVRY_DE', headerName: '교부일자', width: 80 },
        { field: 'DELVRY_INSTT', headerName: '교부처', width: 130 },
        { field: 'QUALF_FRFTR_ENNC', headerName: '상실여부', width: 80 },
        { field: 'REGDATE', headerName: '최초등록일', width: 80 },
        { field: 'MODDATE', headerName: '최근수정일', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnMatchCancel_OnClick}>연계 해지</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "42px", py: 0.5, width: "100%" }}><Box sx={{ ml: "2px", minWidth: "358px" }}><Box sx={{ display: hook.isVisible_edTObjNm ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '238px', height: '23px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edTObjCnt ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '30px', height: '23px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_cbxTObjNm ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '328px', height: '23px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust5010Data.ds_ds_ioFireMapping || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust5010;

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