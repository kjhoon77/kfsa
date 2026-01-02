// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6300MDataConnectionDangerTankManage } from './useFrmcust6300MDataConnectionDangerTankManage';
import * as Frmcust6300MDataConnectionDangerTankManageData from './Frmcust6300MDataConnectionDangerTankManageData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust6300MDataConnectionDangerTankManage = () => {
    const hook = useFrmcust6300MDataConnectionDangerTankManage();
    const [tabValue_tab, setTabValue_tab] = useState(0);
    const columns_gdKFOBJList = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOTSUM', headerName: '매칭율', width: 50 },
        { field: 'BNM', headerName: '대상물명', width: 79 },
        { field: 'TCARNO', headerName: '차량번호', width: 97 },
        { field: 'TPERMISSIONNO', headerName: '허가번호', width: 67 },
        { field: 'TADDRDONGFNM', headerName: '동명', width: 80 },
        { field: 'TADDRMAINNM', headerName: '주번지', width: 51 },
        { field: 'TADDRSUBNM', headerName: '부번지', width: 46 },
        { field: 'TPARKPLACEADDR', headerName: '상치장소', width: 80 },
        { field: 'RCCDNM', headerName: '지역', width: 80 },
        { field: 'DELGUBUN', headerName: '삭제여부', width: 80 },
    ];
    const columns_gdMFOBJList = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'OBJ_NM', headerName: '대상명', width: 97 },
        { field: 'VHCLE_NO', headerName: '차량번호', width: 97 },
        { field: 'PRMISN_NO', headerName: '허가번호', width: 60 },
        { field: 'DMADDRDONGFNM', headerName: '동주소', width: 80 },
        { field: 'DMADDMAINNM', headerName: '주번지', width: 40 },
        { field: 'DMADDSUBNM', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 151 },
    ];
    const columns_gdKFOBJList_1 = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'BNM', headerName: '대상물명', width: 71 },
        { field: 'TCARNO', headerName: '차량번호', width: 84 },
        { field: 'TPERMISSIONNO', headerName: '허가번호', width: 67 },
        { field: 'TADDRDONGFNM', headerName: '동명', width: 80 },
        { field: 'TADDRMAINNM', headerName: '주번지', width: 51 },
        { field: 'TADDRSUBNM', headerName: '부번지', width: 46 },
        { field: 'TPARKPLACEADDR', headerName: '상치장소', width: 80 },
        { field: 'RCCDNM', headerName: '지역', width: 80 },
    ];
    const columns_gdMFOBJList_1 = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOTSUM', headerName: '매칭율', width: 56 },
        { field: 'OBJ_NM', headerName: '대상명', width: 94 },
        { field: 'VHCLE_NO', headerName: '차량번호', width: 111 },
        { field: 'PRMISN_NO', headerName: '허가번호', width: 60 },
        { field: 'DMADDRDONGFNM', headerName: '동주소', width: 80 },
        { field: 'DMADDMAINNM', headerName: '주번지', width: 40 },
        { field: 'DMADDSUBNM', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 151 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.btnDataHistory_OnClick}>데이터조회이력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tab} onChange={(e, v) => setTabValue_tab(v)} aria-label="tab"><Tab label=" 청기준 " /><Tab label="안전원기준" /></Tabs></Box><CustomTabPanel value={tabValue_tab} index={0}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소방관서</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oFireHead || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>안전원수신일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>조회건수</Box></Grid><Grid item xs={12} md={2}><Box>500</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색조건</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색어</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Box>문자열포함</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_MFSearch}>청자료조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>0</Box></Grid>{ hook.isVisible_btnMFMatchCancel && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_btnMFMatchExcept && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Tooltip title="엑셀"><Button variant="outlined" size="small" color="primary" onClick={hook.tab_page1_btnMFExcel_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioMFFireObj} columns={columns_gdMFOBJList} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={12}><Box>※ 대상물 또는 선임자 정보를 더블클릭 시 우측 안전원자료 자동조회</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>제조소등 정보</Box></Grid><Grid item xs={12} md={3}><Button variant="contained" onClick={hook.tab_page1_btnFPISInfo_OnClick}>청시스템상세보기</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={9}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.OBJ_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>연계구분</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치장소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ADDR1 || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>매칭주소</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>동명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.DMADDRDONGFNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.DMADDMAINNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>부번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.DMADDSUBNM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>도로명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ROAD_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>건물번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.MAIN_BDNBR || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>-</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.SEC_BDNBR || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소방관서</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.CMPN119SC_ID || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치법인명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.INSTLR_CPR_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치자명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.INSTLR_NM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치자주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ADDR2 || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.INSTLR_TELNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>완공일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.COMPET_DE || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>차량 정보 </Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>차량번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.VHCLE_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>년식</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.VHCLE_YEAR || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>허가번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.PRMISN_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>차종</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.CARNM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최초등록일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.REGIST_DE_14 || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최종수정일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.UPDT_DE_14 || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지역</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>조회건수</Box></Grid><Grid item xs={12} md={2}><Box>500</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색조건</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색어</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={5}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tab_page1_btnKFSearch_OnClick}>안전원자료조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>삭제자포함</Box></Grid><Grid item xs={12} md={2}><Box>문자열 포함</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>총건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>{ hook.isVisible_btnKFMatchCancel && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_btnKFMatchExcept && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Tooltip title="엑셀"><Button variant="outlined" size="small" color="primary" onClick={hook.tab_page1_btnKFExcel_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioKFFireObj} columns={columns_gdKFOBJList} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_CancelMatch}>연계해지처리</Button></Grid><Grid item xs={12} md={3}><Button variant="contained" onClick={hook.lfn_NowMatch}>수정없이연계처리</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnNewMatch_OnClick}>신규연계등록</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnModMatch_OnClick}>수정연계처리</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>고객 정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={8}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>업체명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>연계구분</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상치장소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TPARKPLACEADDR || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>매칭주소</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>동명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TADDRDONGFNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TADDRMAINNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>부번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TADDRSUBNM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>도로명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RROADNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>건물번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RBUILDMAINNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>-</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RBUILDSUBNO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지역</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RCCDNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.COURSENM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호 </Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BTEL || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상태</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.DELGUBUN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치자주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TINSTLRADDR || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>차량 정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>차량번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TCARNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>년식</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TCARYEAR || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>허가번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TPERMISSIONNO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>기타사항</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.TREMARK || ''} />
                    </Stack>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tab} index={1}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지역</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oRegion2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_oRegion2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>조회건수</Box></Grid><Grid item xs={12} md={2}><Box>500</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>안전원수신일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>조회건수</Box></Grid><Grid item xs={12} md={2}><Box>500</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색조건</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioSelectGubun2 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색조건</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioSelectGubun2 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색어</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_KFSearch2}>안전원자료조회</Button></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색어</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6300MDataConnectionDangerTankManageData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tab_page2_btnMFSearch_OnClick}>조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>삭제자포함</Box></Grid><Grid item xs={12} md={2}><Box>문자열 포함</Box></Grid><Grid item xs={12} md={2}><Box>문자열포함</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>총건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>{ hook.isVisible_btnKFMatchCancel && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_btnKFMatchExcept && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Tooltip title="엑셀"><Button variant="outlined" size="small" color="primary" onClick={hook.tab_page2_btnKFExcel_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>총건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>{ hook.isVisible_btnMFMatchCancel && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_btnMFMatchExcept && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Tooltip title="엑셀"><Button variant="outlined" size="small" color="primary" onClick={hook.tab_page2_btnMFExcel_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioKFFireObj2} columns={columns_gdKFOBJList_1} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioMFFireObj2} columns={columns_gdMFOBJList_1} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={6}><Box>※ 대상물 또는 선임자 정보를 더블클릭 시 우측 소방청 자료 자동조회</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_CancelMatch2}>연계해지처리</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_NowMatch2}>수정없이연계처리</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnModMatch_OnClick2}>수정연계처리</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>고객 정보</Box></Grid><Grid item xs={12} md={2}><Box>제조소등 정보</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tab_page2_btnFPISInfo_OnClick}>청시스템상세보기</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>업체명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>연계구분</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.OBJ_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>연계구분</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상치장소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TPARKPLACEADDR || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치장소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ADDR1 || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>매칭주소</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>동명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TADDRDONGFNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TADDRMAINNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>부번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TADDRSUBNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>매칭주소</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>동명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.DMADDRDONGFNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.DMADDMAINNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>부번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.DMADDSUBNM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>도로명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RROADNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>건물번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RBUILDMAINNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>-</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RBUILDSUBNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>도로명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ROAD_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>건물번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.MAIN_BDNBR || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>-</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.SEC_BDNBR || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지역</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RCCDNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.COURSENM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소방관서</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.CMPN119SC_ID || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호 </Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BTEL || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상태</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.DELGUBUN || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치법인명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.INSTLR_CPR_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치자명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.INSTLR_NM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치자주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TINSTLRADDR || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치장소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ADDR2 || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.INSTLR_TELNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>완공일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.COMPET_DE || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>차량 정보</Box></Grid><Grid item xs={12} md={2}><Box>차량 정보 </Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>차량번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TCARNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>년식</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TCARYEAR || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>차량번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.VHCLE_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>년식</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.VHCLE_YEAR || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>허가번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TPERMISSIONNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>허가번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.PRMISN_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>차종</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.CARNM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>기타사항</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.TREMARK || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최초등록일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.REGIST_DE_14 || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최종수정일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.UPDT_DE_14 || ''} />
                    </Stack>
                </Grid></Grid>
</CustomTabPanel></Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6300MDataConnectionDangerTankManage;

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