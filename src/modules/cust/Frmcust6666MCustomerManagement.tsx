// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6666MCustomerManagement } from './useFrmcust6666MCustomerManagement';
import * as Frmcust6666MCustomerManagementData from './Frmcust6666MCustomerManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust6666MCustomerManagement = () => {
    const hook = useFrmcust6666MCustomerManagement();
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
        { field: 'TCARNO', headerName: '차량번호', width: 102 },
        { field: 'TCARYEAR', headerName: '차량년도', width: 60 },
        { field: 'TPERMISSIONNO', headerName: '허가번호', width: 108 },
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
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>구시스템번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.COLDMGNO || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_MOVE_RIGHT"><Button variant="outlined" size="small" color="primary" onClick={hook.btn_NextOldCNo_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>변경사유</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioCustomerInfo?.CSTATUSREASONCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6666MCustomerManagementData.ds_ds_oStatusReason || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSearchChangeH_OnClick}>변경이력</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>지역</Box></Grid><Grid item xs={12} md={2}><Box>직능</Box></Grid><Grid item xs={12} md={2}><Box>세부직능</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>등록년월</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CREGISTERYYMM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회비부과년월</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CFEEYYMM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>고객상태</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioCustomerInfo?.CSTATUSGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6666MCustomerManagementData.ds_ds_oCustomerStatus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>대상물 정보</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnChangeBuilding_OnClick}>대상물변경</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSearchManagerList_OnClick}>선임현황</Button></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={5}><Box>Div0</Box></Grid>{ hook.isVisible_Div4 && (
                <Grid item xs={12} md={5}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography>
                        <Grid container spacing={2}>
                            <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>투입장소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CEDUPOSTPLACE || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.Div4_btnSearchEduReturnPostH_OnClick}>우편반송이력</Button></Grid></Grid>

                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnSearchBuilding_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Box>용도</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>개인회원의 대상물정보는
안전원정보를 사용합니다.</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioBuildingInfo?.BBIZCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6666MCustomerManagementData.ds_ds_oBizCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>{ hook.isVisible_btnCustFee && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>회비고지서</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소방관서</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioBuildingInfo?.BFIREUPCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6666MCustomerManagementData.ds_ds_oFireCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>담당</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BFIREMAN || ''} />
                    </Stack>
                </Grid>{ hook.isVisible_btnEduNoti && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>교육통지서</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>대표주소</Box></Grid>
                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>구주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BADDR1 || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>인력구분</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioCustomerInfo?.CPERSONGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6666MCustomerManagementData.ds_ds_oPersonGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관리제외</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioCustomerInfo?.CEXCEPTGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6666MCustomerManagementData.ds_ds_ioYn || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnSearchOldZipCode_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={4}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>겸직회비면제</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioCustomerInfo?.COVERGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6666MCustomerManagementData.ds_ds_ioYn || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnConcurrentH_OnClick}>겸직이력</Button></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상태구분</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioCustomerInfo?.CDELGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6666MCustomerManagementData.ds_ds_ioDelete || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>신주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>청시스템연계</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.MMCNT || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSearchCivilAppeal_OnClick}>연계정보</Button></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소방본부연계</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioCustomerInfo?.CFIREMGNO || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnSearchFireDept_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnFireDeptList_OnClick}>현황</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnSearchNewZipCode_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={4}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>업무대행</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioCustomerInfo?.CAGGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6666MCustomerManagementData.ds_ds_oAgencyYn || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnSearchAgency_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BTEL || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>팩스번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioBuildingInfo?.BFAX || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>동일대상물 계속입력</Box></Grid><Grid item xs={12} md={2}><Box>부가

정보</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>구분</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioAdditionInfo?.ADCD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6666MCustomerManagementData.ds_ds_oAddition || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSaveAddInfo_OnClick}>추가입력</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSearchAddInfoH_OnClick}>부가정보이력</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={6}><Box>Div0</Box></Grid><Grid item xs={12} md={6}><Box>Div0</Box></Grid>
                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>내용</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioAdditionInfo?.ADCONTENT || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_Div6 && (
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography>
                        <Grid container spacing={2}>
                            <Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="관계자정보" /><Tab label="위험물부가정보" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioOwnerInfo} columns={columns_gdConnections} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioDangerInfo} columns={columns_gdDangerInfo} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel></Box></Grid></Grid>

                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Box>선임자 정보</Box></Grid><Grid item xs={12} md={2}><Box>신규상태</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>성명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btn_SearchFireManager_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnUpdateManagerInfo_OnClick}>선임자 정보변경</Button></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>선임일</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>해임처리일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주민번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMRESIDENTNO || ''} />
                    </Stack>
                </Grid>{ hook.isVisible_lbResidentNoError && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>오류</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnAuthResidentNo_OnClick}>실명인증</Button></Grid><Grid item xs={12} md={2}><Box>해임상태</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>해임</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab3} onChange={(e, v) => setTabValue_tabTab3(v)} aria-label="tabTab3"><Tab label="기본정보" /><Tab label="겸직정보" /><Tab label="보유자격" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab3} index={0}><Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>사진</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>이메일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHEMAILID || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>@</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHEMAILDOMAIN || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>대표주소</Box></Grid>
                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>구주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMHADDR1 || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab3_tabpgTab3Page1_btnSearchOldPostZipCode_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>신주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab3_tabpgTab3Page1_btnSearchNewPostZipCode_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab3} index={1}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioOverBizInfo} columns={columns_gdOverBizInfo} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab3} index={2}><Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>타
자
격</Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioLicenseInfo} columns={columns_gdLicenseInfo} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnDelRow2_OnClick}>-</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>협
회
자
격</Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oLicenseInfo} columns={columns_Grid0} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>해임처리일:</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab2} onChange={(e, v) => setTabValue_tabTab2(v)} aria-label="tabTab2"><Tab label="회비/교육비" /><Tab label="실무교육" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab2} index={0}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioCustomerFeeInfo} columns={columns_gdMemFee} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab2} index={1}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioEducationPassInfo} columns={columns_gdEduInfo} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>미납액</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>{ hook.isVisible_btnEduPrtH && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>교육통지서 발행이력</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnEducationInfo_OnClick}>실무교육&gt;&gt;</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnCustomerFee_OnClick}>회비/교육비</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnEduDetailInfo1_OnClick}>상세정보</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_Div3 && (
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div3</Typography>
                        <Grid container spacing={2}>
                            <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioEducationPassInfo} columns={columns_gdEduInfo_1} />
                    </Paper>
                </Grid></Grid>

                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_Div7 && (
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography>
                        <Grid container spacing={2}>
                            <Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="관계자정보" /><Tab label="이동탱크부가정보" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioOwnerInfo} columns={columns_gdConnections_1} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioTankInfo} columns={columns_gdTankInfo} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel></Box></Grid></Grid>

                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_Div8 && (
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography>
                        <Grid container spacing={2}>
                            <Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="관계자정보" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioOwnerInfo} columns={columns_gdConnections_2} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel></Box></Grid></Grid>

                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6666MCustomerManagement;

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