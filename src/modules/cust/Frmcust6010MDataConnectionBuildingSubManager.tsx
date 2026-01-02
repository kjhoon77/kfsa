// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6010MDataConnectionBuildingSubManager } from './useFrmcust6010MDataConnectionBuildingSubManager';
import * as Frmcust6010MDataConnectionBuildingSubManagerData from './Frmcust6010MDataConnectionBuildingSubManagerData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust6010MDataConnectionBuildingSubManager = () => {
    const hook = useFrmcust6010MDataConnectionBuildingSubManager();
    const [tabValue_tab, setTabValue_tab] = useState(0);
    const columns_gdMFOBJList = [
        { field: 'id', headerName: '순번', width: 30, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'USE_AT', headerName: '사용구분', width: 58 },
        { field: 'OBJ_NM', headerName: '대상물명', width: 145 },
        { field: 'NM', headerName: '보조자명', width: 66 },
        { field: 'OBJ_SE_CODE', headerName: '대상구분', width: 66 },
        { field: 'ROAD_NM', headerName: '도로명', width: 70 },
        { field: 'BDNBR', headerName: '건물번호', width: 59 },
        { field: 'SEARCHDONGFNM', headerName: '동주소', width: 62 },
        { field: 'SEARCHMAINADDR', headerName: '주번지', width: 40 },
        { field: 'SEARCHSUBADDR', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 151 },
    ];
    const columns_gdKFOBJList = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOTSUM', headerName: '매칭율', width: 50 },
        { field: 'BNM', headerName: '대상물명', width: 80 },
        { field: 'CNICKNM', headerName: '직능', width: 80 },
        { field: 'FMNM', headerName: '선임자', width: 80 },
        { field: 'BADDRDONGFNM', headerName: '동명', width: 80 },
        { field: 'BADDRMAINNM', headerName: '주번지', width: 40 },
        { field: 'BADDRSUBNM', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 80 },
        { field: 'RCNM', headerName: '지역', width: 78 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'CNO', headerName: '고객번호', width: 80 },
        { field: 'DELGUBUN', headerName: '삭제여부', width: 63 },
    ];
    const columns_gdMFManager = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'NM', headerName: '선임자명', width: 89 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 105 },
        { field: 'APNT_DE_8', headerName: '선임일자', width: 100 },
        { field: 'RLSOFC_DE_8', headerName: '해임일자', width: 100 },
        { field: 'BASS_ADRES', headerName: '주소', width: 200 },
        { field: 'MANAGE_ENTRPS_VRSC_AT', headerName: '업무대행여부', width: 105 },
    ];
    const columns_gdMFOBJList_1 = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOTSUM', headerName: '매칭율', width: 56 },
        { field: 'OBJ_NM', headerName: '대상물명', width: 96 },
        { field: 'NM', headerName: '선임자명', width: 63 },
        { field: 'OBJ_SE_CODE', headerName: '대상구분', width: 80 },
        { field: 'SEARCHDONGFNM', headerName: '동주소', width: 72 },
        { field: 'SEARCHMAINADDR', headerName: '주번지', width: 40 },
        { field: 'SEARCHSUBADDR', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 151 },
    ];
    const columns_gdMFManager_1 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'NM', headerName: '선임자명', width: 96 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 110 },
        { field: 'APNT_DE_8', headerName: '선임일자', width: 100 },
        { field: 'RLSOFC_DE_8', headerName: '해임일자', width: 100 },
        { field: 'BASS_ADRES', headerName: '주소', width: 200 },
    ];
    const columns_gdKFOBJList_1 = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'DELGUBUN', headerName: '상태', width: 36 },
        { field: 'BNM', headerName: '대상물명', width: 80 },
        { field: 'CNICKNM', headerName: '직능', width: 80 },
        { field: 'FMNM', headerName: '선임자', width: 80 },
        { field: 'BADDRDONGFNM', headerName: '동명', width: 80 },
        { field: 'BADDRMAINNM', headerName: '주번지', width: 40 },
        { field: 'BADDRSUBNM', headerName: '부번지', width: 40 },
        { field: 'ADDR', headerName: '주소', width: 80 },
        { field: 'RCNM', headerName: '지역', width: 78 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'CNO', headerName: '고객번호', width: 80 },
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

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상구분</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioObjGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지역</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

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
                </Grid><Grid item xs={12} md={2}><Box>조회건수</Box></Grid><Grid item xs={12} md={2}><Box>1000</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>세부직능</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioCourseD || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>조회건수</Box></Grid><Grid item xs={12} md={2}><Box>1000</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>사용구분</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioUSEAT || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색조건</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색조건</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색어</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tab_page1_btnKFSearch_OnClick}>안전원자료조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색어</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>문자열포함</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_MFSearch}>조회</Button></Grid><Grid item xs={12} md={2}><Box>삭제자포함</Box></Grid><Grid item xs={12} md={2}><Box>문자열 포함</Box></Grid></Grid>
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
                ) }<Grid item xs={12} md={2}><Tooltip title="엑셀"><Button variant="outlined" size="small" color="primary" onClick={hook.tab_page1_btnMFExcel_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid>
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
                        <DataGridWrapper rows={hook.ds_ioMFFireObj} columns={columns_gdMFOBJList} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioKFFireObj} columns={columns_gdKFOBJList} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={6}><Box>※ 대상물 또는 선임자 정보를 더블클릭 시 우측 안전원 매칭자료 자동조회</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_CancelMatch}>연계해지처리</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_NowMatch}>수정없이연계처리</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnNewMatch_OnClick}>신규연계등록</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnModMatch_OnClick}>수정연계처리</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>소방대상물 정보</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tab_page1_btnFPISInfo_OnClick}>청시스템상세보기</Button></Grid><Grid item xs={12} md={2}><Box>고객 정보</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_SunapEduInfo}>회비/교육정보</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.OBJ_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물명</Typography>
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

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.ADDR || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.ADDR || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>매칭주소</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>동명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.SEARCHDONGFNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.SEARCHMAINADDR || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>부번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.SEARCHSUBADDR || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>매칭주소</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>동명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BADDRDONGFNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BADDRMAINNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>부번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BADDRSUBNM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
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
                </Grid>
                <Grid item xs={12} md={4}>
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
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소방관서</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.CMPN119SC_ID || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지역</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.RCNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회원구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CSTATUSGUBUN || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상태</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.DELGUBUN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.OBJ_SE_CODE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>공공기관</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.PBLINSTT_AT || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CGROUPNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>세부직능</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CNM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>용도</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.MAIN_PRPOS_CODE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>사용구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.USE_AT || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>용도</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CCCDNM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.DYTM_TLPHON || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최초등록일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.REGIST_DE_14 || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최종수정일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD?.UPDT_DE_14 || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.BTEL || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>업무대행</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CAGGUBUN || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>인력구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CPERSONGUBUN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>보조자 정보</Box></Grid>{ hook.isVisible_btnMFMatchExceptCancelM && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_btnMFMatchExceptM && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>안전원등록년월</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CREGISTERYYMM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회비부과월</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CFEEYYMM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>고객번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CNO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioFireManagerInfo} columns={columns_gdMFManager} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최초등록일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CREGDATE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최종수정일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CMODDATE || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>보조자 정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>선임자명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FMNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>생년월일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FBIRTHDAY || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>개인식별번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FMPERSONKEY || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>선임일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FMHSTARTDATE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>해임일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.FMHENDDATE || ''} />
                    </Stack>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tab} index={1}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지역</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>세부직능</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioCourseD || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>조회건수</Box></Grid><Grid item xs={12} md={2}><Box>1000</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색조건</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색어</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={5}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_KFSearch2}>안전원자료조회</Button></Grid></Grid>
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
                ) }<Grid item xs={12} md={2}><Tooltip title="엑셀"><Button variant="outlined" size="small" color="primary" onClick={hook.tab_page2_btnKFExcel_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioKFFireObj2} columns={columns_gdKFOBJList_1} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={12}><Box>※ 위 리스트의 고객 정보를 더블클릭 시 우측 소방청 자료 자동조회</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>고객 정보</Box></Grid><Grid item xs={12} md={3}><Button variant="contained" onClick={hook.lfn_SunapEduInfo2}>회비/교육정보</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={8}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BNM || ''} />
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
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.ADDR || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>매칭주소</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>동명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BADDRDONGFNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BADDRMAINNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>부번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BADDRSUBNM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
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
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지역</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.RCNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회원구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CSTATUSGUBUN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CGROUPNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>세부직능</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CNM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>용도</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CCCDNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상태</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.DELGUBUN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.BTEL || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>업무대행</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CAGGUBUN || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>인력구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CPERSONGUBUN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>안전원등록년월</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CREGISTERYYMM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회비부과월</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CFEEYYMM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>고객번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.CNO || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최초등록일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CREGDATE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최종수정일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj?.CMODDATE || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>선임자정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>선임자명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FMNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>생년월일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FBIRTHDAY || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>개인식별번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FMPERSONKEY || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>선임일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FMHSTARTDATE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>해임일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioKFFireObj2?.FMHENDDATE || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상구분</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioObjGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>공공기관여부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioPBLINSTT || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>변경일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>조회건수</Box></Grid><Grid item xs={12} md={2}><Box>1000</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색조건</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioSelectGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색어</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6010MDataConnectionBuildingSubManagerData.ds_ds_ioMFKeyfield || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={5}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tab_page2_btnMFSearch_OnClick}>조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>문자열 포함</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

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
                        <DataGridWrapper rows={hook.ds_ioMFFireObj2} columns={columns_gdMFOBJList_1} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Button variant="contained" onClick={hook.lfn_CancelMatch2}>연계해지처리</Button></Grid><Grid item xs={12} md={3}><Button variant="contained" onClick={hook.lfn_NowMatch2}>수정없이연계처리</Button></Grid><Grid item xs={12} md={3}><Button variant="contained" onClick={hook.btnModMatch_OnClick2}>수정연계처리</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>소방대상물 정보</Box></Grid><Grid item xs={12} md={3}><Button variant="contained" onClick={hook.tab_page2_btnFPISInfo_OnClick}>청시스템상세보기</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={8}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.OBJ_NM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.ADDR || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>매칭주소</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>동명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.SEARCHDONGFNM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.SEARCHMAINADDR || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>부번지</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.SEARCHSUBADDR || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
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

                <Grid item xs={12} md={12}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소방관서</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.CMPN119SC_ID || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={8}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.OBJ_SE_CODE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>공공기관</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.PBLINSTT_AT || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={8}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>용도</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.MAIN_PRPOS_CODE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>사용구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.USE_AT || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={8}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.DYTM_TLPHON || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>업무대행</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.MANAGE_ENTRPS_VRSC_AT || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최초등록일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.REGIST_DE_14 || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최종수정일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMFFireObjD2?.UPDT_DE_14 || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>선임자 정보</Box></Grid>{ hook.isVisible_btnMFMatchExceptCancelM && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_btnMFMatchExceptM && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioFireManagerInfo2} columns={columns_gdMFManager_1} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel></Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6010MDataConnectionBuildingSubManager;

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