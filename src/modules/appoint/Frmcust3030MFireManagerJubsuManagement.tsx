// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust3030MFireManagerJubsuManagement } from './useFrmcust3030MFireManagerJubsuManagement';
import * as Frmcust3030MFireManagerJubsuManagementData from './Frmcust3030MFireManagerJubsuManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust3030MFireManagerJubsuManagement = () => {
    const hook = useFrmcust3030MFireManagerJubsuManagement();
    const [tabValue_tabTab3, setTabValue_tabTab3] = useState(0);
    const columns_gdList = [
        { field: 'AJMGNO', headerName: '접수번호', width: 100 },
        { field: 'AJDATE', headerName: '신청일자', width: 100 },
        { field: 'AJSTATUS', headerName: '상태', width: 80 },
        { field: 'AJMOTHOD', headerName: '접수방법', width: 100 },
        { field: 'BILD_NM', headerName: '소방대상물명', width: 120 },
        { field: 'ARSON_COURSECD', headerName: '직능', width: 200 },
        { field: 'AJBIZGUBUN', headerName: '신청구분', width: 100 },
        { field: 'MANAGE_ENTRPS_VRSC_AT', headerName: '업무대행', width: 100 },
        { field: 'AJSTRDATE', headerName: '접수일자', width: 100 },
        { field: 'I_NM', headerName: '선임자명', width: 100 },
        { field: 'I_APNT_DE_8', headerName: '선임일자', width: 100 },
        { field: 'O_NM', headerName: '해임자명', width: 100 },
        { field: 'O_APNT_DE_8', headerName: '해임일자', width: 100 },
        { field: 'FSTNSMALL_NM', headerName: '소방관서', width: 100 },
    ];
    const columns_gdAttachFileList = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
    ];
    const columns_gdKwanList = [
        { field: 'MNGT_SEQ', headerName: '순번', width: 50 },
        { field: 'MNGT_NM', headerName: '권리권원명', width: 80 },
        { field: 'GNRL_FIRE_SAFT_AT', headerName: '총괄여부', width: 69 },
        { field: 'O_NM', headerName: '현재선임자명', width: 100 },
        { field: 'MNGT_CEONM', headerName: '대표자명', width: 69 },
        { field: 'I_NM', headerName: '신규선임자명', width: 90 },
    ];
    const columns_Grid1 = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
    ];
    const columns_gdList_1 = [
        { field: 'MNGT_SEQ', headerName: '권리권원', width: 80 },
        { field: 'NM', headerName: '소방안전관리자명', width: 124 },
        { field: 'IHIDNUM', headerName: '생년월일', width: 69 },
        { field: 'HP', headerName: '연락처', width: 90 },
        { field: 'ARSON_MANAGE_TRGET_GRAD', headerName: '자격등급', width: 90 },
    ];
    const columns_gdList2 = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'O_NM', headerName: '현재선임자명', width: 100 },
        { field: 'O_IHIDNUM', headerName: '생년월일', width: 100 },
        { field: 'I_NM', headerName: '신규선임자명', width: 100 },
    ];
    const columns_Grid2 = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
    ];
    const columns_grdOList = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CNTRWK_NM1', headerName: '상호', width: 230 },
        { field: 'MAIN_PRPOS_CODE', headerName: '용도', width: 100 },
        { field: 'STRWRK_DE_8', headerName: '소방시설착공일', width: 100 },
        { field: 'USE_CONFM_DE_8', headerName: '사용승인예정일', width: 100 },
        { field: 'CNTRWK_SPRVISOR_SE', headerName: '공사구분', width: 130 },
        { field: 'CNTRWK_EVNC', headerName: '공사규모', width: 130 },
        { field: 'RCEPT_BASS_ADRES', headerName: '소재지', width: 200 },
        { field: 'RCEPT_ETC_ADRES', headerName: '상세주소', width: 200 },
        { field: 'REGISTER_ID', headerName: '등록자', width: 100 },
    ];
    const columns_Grid2_1 = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search_main}>조회</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.Button0_OnClick}>테스트</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oMaster} columns={columns_gdList} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={5}><Box> ※ 신규등록방법 :  ① 신규접수 ▶ 대상물선택 ▶ 정보입력 ▶ 저장(F4) ▶ 접수시작</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnNewJubsu_OnClick}>신규접수</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfnBtnClick}>접수시작</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfnBtnClick}>반려</Button></Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfnBtnClick}>승인완료</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>접수번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.AJMGNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>신청일</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상태</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.AJSTATUS || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_chk4 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>접수방법</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.AJMOTHOD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_SiteGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소방대상물</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.BILD_NM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSendSms_OnClick}>SMS발송</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSendSms_OnClick}> 선임증발급</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>신청인</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.AJNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>신청인 HP</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.AJHP || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 신청지부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.AJGTMGNO || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.BILD_SN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab3} onChange={(e, v) => setTabValue_tabTab3(v)} aria-label="tabTab3"><Tab label="소방안전관리자" /><Tab label="소방안전관리보조자" /><Tab label="건설현장 소방안전관리자" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab3} index={0}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 생년월일   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 연락처   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.TLPHON_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 해임일자   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 휴대폰   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.O_HPNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 생년월일   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관리권원여부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.USE_AT || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_USEYN || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관리법적근거</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.MNGT_AUTH_EVNC || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_KwanYN || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 해임유형   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.RLSOFC_STTUS_CODE || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_RLSOFC_STTUS_CODE || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 해임사유   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.RLSOFC_RESN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>권리권원별 소방안전관리자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.TOT_MNGT_AUTH_NO || ''} />
                    </Stack>
                </Grid>{ hook.isVisible_edFIRE_SAFT_ASSI_NO && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_btn_KwanExcel && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>엑셀</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Box> 선임정보</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>식별번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_PERSONKEY || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>자격자일련번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_QUALFUSER_SN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdKwanList && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 직능   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.ARSON_COURSECD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>공공기관여부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.PUBLIC_AT || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_PublicAT || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 선임구분   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.ARSON_GUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_ARSON_GUBUN || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 선임자명   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주민등록번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_IHIDNUM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 휴대폰   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_HPNO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={4}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page1_Button4_OnClick}> 안전원 보유정보 확인</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 자격연동   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.I_LIC_GUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_dsI_LIC_GUBUN || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 자격등급   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.IRGRADE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 자격번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.ARSON_MANAGE_PKTBUK_NO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 최종교육일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 선임일자   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 전화번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_TLPHON_NO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 겸직여부   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.DOUBLE_AT || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_DoubleAT || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 경력   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.CAREER || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 이메일   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.EMAIL || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_Static12 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>관리권원 정보</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_btn_KwanNew && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>신규</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_btn_KwanSave && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>저장</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 주소   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_oAddr2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 공동선임여부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.MANY_ARSON_AT || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_MANY_ARSON_AT || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>순번   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.MNGT_SEQ || ''} />
                    </Stack>
                </Grid>{ hook.isVisible_Static72 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}> 자동채번</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>사용여부   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.MNGT_USE_AT || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_USEYN || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab3_tabpgTab3Page1_Button6_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>* 공동선임 선택시 중복선임허용</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 명칭   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.MNGT_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>등급   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.MNGT_SE || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_MNGT_SE || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box> 업무대행</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 업체일련번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.ENTRPS_SN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대표자   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.MNGT_CEONM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.MNGT_TEPHON || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 상호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.ENTRPSNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page1_Button7_OnClick}>검색</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page1_btnSendSms_OnClick}>그룹검색</Button></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 전화번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.TELNO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 지하층   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.UNDERND_FOOR_QT || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지상층   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.TRRPHNM_FLOOR_QT || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 면허번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.REGISTNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 사업자번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.BSNM_REIST_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 대표자   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.RPRSNTV || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 연면적   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.TORAR || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>바닥면적   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.BOTTOM_AR || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 주소   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_oAddr2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 기술자명   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.ENG_NM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 동수   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.DONG_QT || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab3_tabpgTab3Page1_Button0_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 기술자격등급</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.ENG_GRADE || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_Static25 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>관리권원첨부파일</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_btnDownLoad_Tab3 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>다운로드</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_btnUpLoad_Tab3 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>업로드</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 계약기간   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> ~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdAttachFileList && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Box> 첨부관리</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page1_Button13_OnClick}>다운로드</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page1_Button14_OnClick}>업로드</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oFileList_2} columns={columns_Grid1} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab3} index={1}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 생년월일   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>휴대폰  </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.TLPHON_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 성명   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.O_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 생년월일   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.O_IHIDNUM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 해임일자   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 소방안전관리자현황</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.TOT_MNGT_AUTH_NO || ''} />
                    </Stack>
                </Grid>{ hook.isVisible_edTabFIRE_SAFT_ASSI_NO && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page1_btnSendSms_OnClick}>엑셀</Button></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 신청구분   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.AJBIZGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_Ajbizgubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 해임유형   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.RLSOFC_STTUS_CODE || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_RLSOFC_STTUS_CODE || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_SBList} columns={columns_gdList_1} />
                    </Paper>
                </Grid><Grid item xs={12} md={2}><Box> 선임정보</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 식별/일련번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_QUALFUSER_SN || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 직능   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.ARSON_COURSECD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 휴대폰   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_HPNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 전화번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_TLPHON_NO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 선임자명   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 주민번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_IHIDNUM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={4}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page2_btnCheck_OnClick}> 안전원 보유정보 확인</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 선임유형   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.I_ARSON_TYPE || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_iGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 자격등급   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.IRGRADE || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 자격연동   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.I_LIC_GUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_dsI_LIC_GUBUN || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 자격번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.ARSON_MANAGE_PKTBUK_NO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 주소   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_oAddr2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab3_tabpgTab3Page2_Button6_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 경력기간   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.CAREER || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 최종교육일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box> 소방안전관리보조자현황</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page1_btnSendSms_OnClick}>엑셀</Button></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 이메일   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.EMAIL || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 선임일자   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_SBBList} columns={columns_gdList2} />
                    </Paper>
                </Grid><Grid item xs={12} md={2}><Box> 첨부관리</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_grid} columns={columns_Grid2} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page1_btnSendSms_OnClick}>다운로드</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page1_btnSendSms_OnClick}>업로드</Button></Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab3} index={2}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oList} columns={columns_grdOList} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>건설현장 개황</Box></Grid><Grid item xs={12} md={2}><Box>해임정보</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 해임 KEY정보 </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 상호   </Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 성명   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.O_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 생년월일   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 용도   </Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 휴대폰   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.O_HPNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 해임일자   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 착공신고일   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 해임유형   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.RLSOFC_STTUS_CODE || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_RLSOFC_STTUS_CODE || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 사용승인예정일</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> KEY정보</Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_QUALFUSER_SN || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 공사구분   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_CNTRWK_SPRVISOR_SE || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>선임정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 공사규모   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_CNTRWK_EVNC || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 선임자명   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 주민등록번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_IHIDNUM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box> 공사시공자</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 휴대폰   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_HPNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 전화번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.I_TLPHON_NO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 회사명   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.CNTRWK_COMPANY || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={4}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page1_btnSendSms_OnClick}> 안전원 보유정보 확인</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 시공분야   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.CNTRWK_TYPE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 자격연동   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.I_LIC_GUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_dsI_LIC_GUBUN || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 자격등급   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.IRGRADE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 자격번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.ARSON_MANAGE_PKTBUK_NO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 대표자명   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.CNTRWK_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 이메일   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.EMAIL || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 교육수료일   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 생년월일   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 직능   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_iMaster?.ARSON_COURSECD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 선임일자   </Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 법인번호/법인여부   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.CNTRWK_JURIRNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 주소   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_oAddr2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>법인여부</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab3_tabpgTab3Page3_Button0_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 전화번호   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_iMaster?.CNTRWK_TELNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_grid} columns={columns_Grid2_1} />
                    </Paper>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page1_btnSendSms_OnClick}>다운로드</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab3_tabpgTab3Page1_btnSendSms_OnClick}>업로드</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 주소   </Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3030MFireManagerJubsuManagementData.ds_ds_oAddr2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab3_tabpgTab3Page3_Button6_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
</CustomTabPanel></Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust3030MFireManagerJubsuManagement;

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