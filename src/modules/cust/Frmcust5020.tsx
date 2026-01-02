// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust5020 } from './useFrmcust5020';
import * as Frmcust5020Data from './Frmcust5020Data';

export const Frmcust5020 = () => {
    const hook = useFrmcust5020();
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const [tabValue_tabTab2, setTabValue_tabTab2] = useState(0);
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
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
        { field: 'CTCD', headerName: '연락처', width: 100 },
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
                    <Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.btnDataHistory_OnClick}>데이터조회이력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>검색조건</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}></Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem></Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색어</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>해당 문자열 포함</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>조회수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>총건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="          소방안전관리대상물          " /><Tab label="                  위험물                 " /><Tab label="              소방기술자              " /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}></CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>허가번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.PRMISN_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>컨테이너허가번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.CNTANR_PRMISN_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최초착공일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.FRST_STRWRK_DE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>완공일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.COMPET_DE || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>위험물임시저장</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.DGST_TMPRSTRE_AT || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>삭제(휴페업)구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.PAUSE_ABL_SE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>삭제(휴페업)일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.PAUSE_ABL_DE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>용도폐지사유</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.PRPOS_ABL_RESN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>설치자 정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>법인구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.CPR_AT_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>법인명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_CPR_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>법인번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_JURIRNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>생년월일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_IHIDNUM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>성명(대표자)</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.edINSTLR_TELNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치자주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_ADRES || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>제조소등 정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관할서/센터</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.CMPFRSTT_CMPN119SC_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.OBJ_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>건물동/층</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치장소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ITLPC_ADRES || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지정수량배수</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ANTY_MUL_SM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>배</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>자체소방대</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ONSLFFBRD_AT || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>군용</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ARMY_DGST_AT || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={11}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>위험물 취급
방법의 개요</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.TRTMNT_SUMRY || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>시스템변경정보</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최초등록일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.REGIST_DE_14 || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최종수정일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.UPDT_DE_14 || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab2} onChange={(e, v) => setTabValue_tabTab2(v)} aria-label="tabTab2"><Tab label="      부가정보      " /><Tab label="       지위승계       " /><Tab label="      선임자정보      " /></Tabs></Box><CustomTabPanel value={tabValue_tabTab2} index={0}><Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>위험물정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>유별</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.OKND_CODE_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>품명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.PRDNM_CODE_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>품명상세</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.PRDNM_DETAIL || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>탱크정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검사일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.BEGIN_DE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검사번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.TANK_INSPCT_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>탱크최대용량</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.TANK_MXMMCPCTY || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>탱크실용량</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.TNKROOM_CPCTY || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최초등록일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.REGIST_DE_14 || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최종수정일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanTankInfo?.UPDT_DE_14 || ''} />
                    </Stack>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab2} index={1}></CustomTabPanel><CustomTabPanel value={tabValue_tabTab2} index={2}></CustomTabPanel></Box></Grid><Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="      선임자정보      " /><Tab label="      설비정보      " /><Tab label="    탱크유별현황    " /><Tab label="       지위승계       " /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}></CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}></CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={2}></CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={3}></CustomTabPanel></Box></Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={2}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대표자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.RPRSNTV || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관할서/센터</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.CMPN119SC_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.ADDR || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.TLPHON_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>팩스번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.FAX_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최초등록일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.regdate || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최종수정일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFightFireCompany?.moddate || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>기술자정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioFightFireCompanyPossessionHuman} columns={columns_ds_ioFightFireCompanyPossessionHuman} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>보유자격정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioFightFireCompanyFireLicenseInfo} columns={columns_ds_ioFightFireCompanyFireLicenseInfo} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel></Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust5020;

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