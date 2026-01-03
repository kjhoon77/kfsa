// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust3030 } from './useFrmcust3030';
import * as Frmcust3030Data from './Frmcust3030Data';

export const Frmcust3030 = () => {
    const hook = useFrmcust3030();
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const [tabValue_tabTab2, setTabValue_tabTab2] = useState(0);
    const columns_gdAdminList = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'NM', headerName: '성명', width: 100 },
        { field: 'OFCPS', headerName: '직위', width: 100 },
        { field: 'IHIDNUM', headerName: '생년월일', width: 100 },
        { field: 'BASS_ADRES', headerName: '주소', width: 271 },
        { field: 'TLPHON_NO', headerName: '전화번호', width: 100 },
        { field: 'MANAGE_ENTRPS_VRSC_AT', headerName: '업무대행여부', width: 99 },
        { field: 'APNT_DE_8', headerName: '선임일자', width: 100 },
        { field: 'RLSOFC_DE_8', headerName: '해임일자', width: 100 },
    ];
    const columns_gdLicense = [
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
    const columns_gdSFloorStatus = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'FLOOR', headerName: '층', width: 109 },
        { field: 'SPCL_PRPOS_SE_CODE', headerName: '특수용도', width: 258 },
        { field: 'AR', headerName: '면적', width: 115 },
        { field: 'USE_AT', headerName: '사용여부', width: 112 },
        { field: 'RM', headerName: '비고', width: 124 },
        { field: 'regdate', headerName: '최초등록일', width: 100 },
        { field: 'moddate', headerName: '최종수정일', width: 100 },
    ];
    const columns_gdFloorStatus = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'FLOOR', headerName: '층', width: 51 },
        { field: 'MAIN_PROPS', headerName: '용도', width: 134 },
        { field: 'AR', headerName: '면적', width: 68 },
        { field: 'ARSON_CMPRT_QT', headerName: '방화구획수', width: 113 },
        { field: 'ITRDECO_MATRL', headerName: '내장재료', width: 108 },
        { field: 'USE_AT', headerName: '사용여부', width: 89 },
        { field: 'RM', headerName: '비고', width: 142 },
        { field: 'regdate', headerName: '최초등록일', width: 107 },
        { field: 'moddate', headerName: '최종수정일', width: 107 },
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
        { field: 'NM', headerName: '선임자명', width: 122 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'CRQFC_CODE_NM', headerName: '자격증종류', width: 110 },
        { field: 'DMCRQFC_NO', headerName: '자격증번호', width: 138 },
        { field: 'AP_APNTRLSOFC_DE', headerName: '선임일자', width: 100 },
        { field: 'AP_PROCESS_DE', headerName: '선임신고일자', width: 100 },
        { field: 'RL_APNTRLSOFC_DE', headerName: '해임일자', width: 100 },
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
        { field: 'BIRTHDATE', headerName: '생년월일', width: 101 },
        { field: 'TLPHON_NO', headerName: '연락처', width: 101 },
        { field: 'ADDR', headerName: '주소', width: 289 },
        { field: 'APNT_DE', headerName: '선임일', width: 80 },
        { field: 'RLSOFC_DE', headerName: '해임일', width: 80 },
        { field: 'REGDATE	', headerName: '최초등록일', width: 80 },
        { field: 'MODDATE', headerName: '최근수정일', width: 80 },
    ];
    const columns_gdLicenscInfo = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CRQFC_NM', headerName: '자격증명', width: 83 },
        { field: 'CRQFC_DETAIL_SE_NM', headerName: '상세자격증명', width: 122 },
        { field: 'CRQFC_NO', headerName: '자격증번호', width: 101 },
        { field: 'DELVRY_DE', headerName: '교부일자', width: 151 },
        { field: 'DELVRY_INSTT', headerName: '교부처', width: 130 },
        { field: 'QUALF_FRFTR_ENNC', headerName: '상실여부', width: 80 },
        { field: 'REGDATE', headerName: '최초등록일', width: 80 },
        { field: 'MODDATE', headerName: '최근수정일', width: 80 },
    ];
    const columns_gdList50 = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CNT', headerName: '연계건수', width: 70 },
        { field: 'ENTRPS_NM', headerName: '업체명', width: 144 },
        { field: 'ENTRPS_STTUS_CODE', headerName: '업체상태', width: 66 },
        { field: 'ENTRPS_SE', headerName: '구분', width: 108 },
        { field: 'ENTRPS_DETAIL_SE', headerName: '세부구분', width: 62 },
        { field: 'CMP_FRSTT_N119SC', headerName: '소방서', width: 180 },
        { field: 'NM', headerName: '기술자명', width: 80 },
        { field: 'ADDR', headerName: '주소', width: 294 },
        { field: 'TLPHON_NO', headerName: '연락처', width: 100 },
    ];
    const columns_gdList80 = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CNT', headerName: '연계건수', width: 70 },
        { field: 'ONM', headerName: '대상명', width: 227 },
        { field: 'MNFCTRETC_SE_CODE_NM', headerName: '구분', width: 77 },
        { field: 'CMP_FRSTT_N119SC', headerName: '소방서', width: 157 },
        { field: 'INSTLR_NM', headerName: '설치자', width: 140 },
        { field: 'ADDRESS', headerName: '주소', width: 242 },
        { field: 'TEL', headerName: '연락처', width: 100 },
        { field: 'PRMISN_NO', headerName: '허가번호', width: 71 },
        { field: 'VHCLE_NO', headerName: '차량번호', width: 100 },
        { field: 'COMPET', headerName: '완공검사일', width: 80 },
    ];
    const columns_gdList10 = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CNT', headerName: '연계건수', width: 59 },
        { field: 'OBJ_NM', headerName: '대상물명', width: 242 },
        { field: 'OBJ_SE_CODE', headerName: '대상물구분', width: 112 },
        { field: 'OBJ_STDR_CODE', headerName: '대상물상세구분', width: 127 },
        { field: 'MAIN_PRPOS_NM', headerName: '용도', width: 103 },
        { field: 'FIREOFFICE', headerName: '소방서', width: 129 },
        { field: 'ADDR', headerName: '주소', width: 289 },
        { field: 'DYTM_TLPHON', headerName: '연락처', width: 100 },
        { field: 'DONGCNT', headerName: '동수', width: 48 },
        { field: 'USE_CONFM_DE', headerName: '사용승인일자', width: 100 },
    ];
    const columns_gdList30 = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CNT', headerName: '연계건수', width: 70 },
        { field: 'ONM', headerName: '대상명', width: 144 },
        { field: 'MNFCTRETC_SE_CODE_NM', headerName: '구분', width: 82 },
        { field: 'CMP_FRSTT_N119SC', headerName: '소방서', width: 152 },
        { field: 'INSTLR_NM', headerName: '설치자', width: 113 },
        { field: 'ADDRESS', headerName: '주소', width: 262 },
        { field: 'TEL', headerName: '연락처', width: 100 },
        { field: 'PRMISN_NO', headerName: '허가번호', width: 75 },
        { field: 'COMPET', headerName: '완공검사일', width: 100 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.btnDataHistory_OnClick}>데이터조회이력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '420px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색조건</Typography>
                    <FormControl component="fieldset"><RadioGroup row >{ (Frmcust3030Data.ds_ds_ioSearch || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '225px', height: '22px', display: 'flex', alignItems: 'center', ml: '55px' }}>
                    <Typography variant="body2" sx={{ minWidth: 101, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}></Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem></Select></FormControl>
                 </Stack><Box sx={{ ml: "2px", minWidth: "138px" }}><Box sx={{ display: hook.isVisible_cbxCodeGubunD ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '138px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem></Select></FormControl></Box><Box sx={{ display: hook.isVisible_Static47 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '101px', height: '22px' }}><Typography variant="body2">공공기관여부</Typography></Box></Box></Box><Box sx={{ display: hook.isVisible_cbxMFPBLINSTT ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '141px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030Data.ds_ds_ioPBLINSTT || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '344px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색어</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '175px', height: '22px', display: 'flex', alignItems: 'center', ml: '131px' }}>
                    <Typography variant="body2" sx={{ minWidth: 101, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_chkPerson ? undefined : 'none' }}><Box sx={{ width: '119px', height: '16px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '154px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnApply ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnApply_OnClick} sx={{ width: '105px', height: '23px' }}>대상물선택적용</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "3px", minWidth: "986px" }}><Box sx={{ display: hook.isVisible_gdList50 ? undefined : 'none' }}><Paper sx={{ width: '986px', height: '180px', width: '100%', height: 'auto', minHeight: '180px' }}><DataGridWrapper rows={hook.ds_oList} columns={columns_gdList50} /></Paper></Box><Box sx={{ display: hook.isVisible_gdList80 ? undefined : 'none' }}><Paper sx={{ width: '986px', height: '180px', width: '100%', height: 'auto', minHeight: '180px' }}><DataGridWrapper rows={hook.ds_oList} columns={columns_gdList80} /></Paper></Box><Box sx={{ display: hook.isVisible_gdList10 ? undefined : 'none' }}><Paper sx={{ width: '986px', height: '180px', width: '100%', height: 'auto', minHeight: '180px' }}><DataGridWrapper rows={hook.ds_oList} columns={columns_gdList10} /></Paper></Box><Box sx={{ display: hook.isVisible_gdList30 ? undefined : 'none' }}><Paper sx={{ width: '986px', height: '180px', width: '100%', height: 'auto', minHeight: '180px' }}><DataGridWrapper rows={hook.ds_oList} columns={columns_gdList30} /></Paper></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab1 ? undefined : 'none' }}><Box sx={{ width: '987px', height: '435px', width: "100%", height: "auto", minHeight: "435px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="          소방안전관리대상물          " /><Tab label="                  위험물                 " /><Tab label="              소방기술자              " /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}></CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '287px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.PRMISN_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '282px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 119, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>컨테이너허가번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.CNTANR_PRMISN_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '197px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 103, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초착공일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.FRST_STRWRK_DE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '181px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>완공일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.COMPET_DE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '157px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 124, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>위험물임시저장</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.DGST_TMPRSTRE_AT || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '196px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 106, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>삭제(휴페업)구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.PAUSE_ABL_SE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '216px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 107, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>삭제(휴페업)일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.PAUSE_ABL_DE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '380px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 103, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>용도폐지사유</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.PRPOS_ABL_RESN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '24px' }}><Typography variant="body2">설치자 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '191px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>법인구분</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.CPR_AT_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '325px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>법인명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_CPR_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '227px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>법인번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_JURIRNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '205px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_IHIDNUM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '191px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명(대표자)</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '238px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.edINSTLR_TELNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '520px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치자주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_ADRES || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static14 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '24px' }}><Typography variant="body2">제조소등 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '392px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관할서/센터</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.CMPFRSTT_CMPN119SC_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '390px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.OBJ_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '167px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물동/층</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '478px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ITLPC_ADRES || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지정수량배수</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ANTY_MUL_SM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static19 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '14px', height: '20px' }}><Typography variant="body2">배</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '166px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>자체소방대</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ONSLFFBRD_AT || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '167px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>군용</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ARMY_DGST_AT || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '954px', height: '38px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>위험물 취급
방법의 개요</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.TRTMNT_SUMRY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '24px' }}><Typography variant="body2">시스템변경정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '174px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 78, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.REGIST_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '174px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 78, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최종수정일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.UPDT_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "3px", minWidth: "960px" }}><Box sx={{ display: hook.isVisible_tabTab2 ? undefined : 'none' }}><Box sx={{ width: '960px', height: '301px', width: "100%", height: "auto", minHeight: "301px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab2} onChange={(e, v) => setTabValue_tabTab2(v)} aria-label="tabTab2"><Tab label="      부가정보      " /><Tab label="       지위승계       " /><Tab label="      선임자정보      " /></Tabs></Box><CustomTabPanel value={tabValue_tabTab2} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '24px' }}><Typography variant="body2">위험물정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '168px', height: '22px', display: 'flex', alignItems: 'center', ml: '22px' }}>
                    <Typography variant="body2" sx={{ minWidth: 63, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>유별</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.OKND_CODE_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '168px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 63, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>품명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.PRDNM_CODE_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '168px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 63, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>품명상세</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.PRDNM_DETAIL || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static9 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '24px' }}><Typography variant="body2">탱크정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '200px', height: '22px', display: 'flex', alignItems: 'center', ml: '22px' }}>
                    <Typography variant="body2" sx={{ minWidth: 86, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검사일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.BEGIN_DE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '200px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 86, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검사번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.TANK_INSPCT_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 86, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>탱크최대용량</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.TANK_MXMMCPCTY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '200px', height: '22px', display: 'flex', alignItems: 'center', ml: '22px' }}>
                    <Typography variant="body2" sx={{ minWidth: 86, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>탱크실용량</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.TNKROOM_CPCTY || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '200px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 86, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.REGIST_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 86, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최종수정일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.UPDT_DE_14 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab2} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdStatusSucces ? undefined : 'none' }}><Paper sx={{ width: '764px', height: '265px', width: '100%', height: 'auto', minHeight: '265px' }}><DataGridWrapper rows={hook.ds_ioDanStatusSuccession} columns={columns_gdStatusSucces} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab2} index={2}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdManagerInfo ? undefined : 'none' }}><Paper sx={{ width: '764px', height: '265px', width: '100%', height: 'auto', minHeight: '265px' }}><DataGridWrapper rows={hook.ds_ioDanManagerInfo} columns={columns_gdManagerInfo} /></Paper></Box></Stack>
</CustomTabPanel></Box></Box><Box sx={{ display: hook.isVisible_tabTab1 ? undefined : 'none' }}><Box sx={{ width: '960px', height: '301px', width: "100%", height: "auto", minHeight: "301px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="      선임자정보      " /><Tab label="      설비정보      " /><Tab label="    탱크유별현황    " /><Tab label="       지위승계       " /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdManagerInfo ? undefined : 'none' }}><Paper sx={{ width: '764px', height: '265px', width: '100%', height: 'auto', minHeight: '265px' }}><DataGridWrapper rows={hook.ds_ioDanManagerInfo} columns={columns_gdManagerInfo_1} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}></CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={2}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdTankInfo ? undefined : 'none' }}><Paper sx={{ width: '764px', height: '265px', width: '100%', height: 'auto', minHeight: '265px' }}><DataGridWrapper rows={hook.ds_ioDanTankInfo} columns={columns_gdTankInfo} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={3}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdStatusSucces ? undefined : 'none' }}><Paper sx={{ width: '764px', height: '265px', width: '100%', height: 'auto', minHeight: '265px' }}><DataGridWrapper rows={hook.ds_ioDanStatusSuccession} columns={columns_gdStatusSucces_1} /></Paper></Box></Stack>
</CustomTabPanel></Box></Box></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={2}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "54px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '281px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대표자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.RPRSNTV || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '272px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관할서/센터</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.CMPN119SC_NM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '392px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.ADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '281px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.TLPHON_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '272px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>팩스번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.FAX_NO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '196px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초등록일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.regdate || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '195px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 81, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최종수정일</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.moddate || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static11 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '24px' }}><Typography variant="body2">기술자정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdPHuman ? undefined : 'none' }}><Paper sx={{ width: '960px', height: '211px', width: '100%', height: 'auto', minHeight: '211px' }}><DataGridWrapper rows={hook.ds_ioFightFireCompanyPossessionHuman} columns={columns_gdPHuman} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static12 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '24px' }}><Typography variant="body2">보유자격정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdLicenscInfo ? undefined : 'none' }}><Paper sx={{ width: '960px', height: '179px', width: '100%', height: 'auto', minHeight: '179px' }}><DataGridWrapper rows={hook.ds_ioFightFireCompanyFireLicenseInfo} columns={columns_gdLicenscInfo} /></Paper></Box></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust3030;

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