// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmmem0030MManagerReport } from './useFrmmem0030MManagerReport';
import * as Frmmem0030MManagerReportData from './Frmmem0030MManagerReportData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmmem0030MManagerReport = () => {
    const hook = useFrmmem0030MManagerReport();
    const columns_gdList2 = [
        { field: 'GTDEPTNM', headerName: '지부', width: 61 },
        { field: 'BANG0_CNT', headerName: '소방안전관리자', width: 55 },
        { field: 'BANG1_CNT', headerName: 'BANG1_CNT', width: 55 },
        { field: 'BANG2_CNT', headerName: 'BANG2_CNT', width: 55 },
        { field: 'BANG3_CNT', headerName: 'BANG3_CNT', width: 55 },
        { field: 'GONG1_CNT', headerName: 'GONG1_CNT', width: 55 },
        { field: 'GONG2_CNT', headerName: 'GONG2_CNT', width: 55 },
        { field: 'GONG3_CNT', headerName: 'GONG3_CNT', width: 55 },
        { field: 'DANGER1_CNT', headerName: '위험물안전관리자', width: 55 },
        { field: 'DANGER2_CNT', headerName: 'DANGER2_CNT', width: 55 },
        { field: 'DANGER3_CNT', headerName: 'DANGER3_CNT', width: 55 },
        { field: 'DANGER4_CNT', headerName: 'DANGER4_CNT', width: 55 },
        { field: 'DANGER5_CNT', headerName: '저장소', width: 55 },
        { field: 'DANGER6_CNT', headerName: 'DANGER6_CNT', width: 55 },
        { field: 'SOBANG1_CNT', headerName: '소방기술자', width: 55 },
        { field: 'SOBANG2_CNT', headerName: '공사업', width: 55 },
        { field: 'SOBANG3_CNT', headerName: '감리업', width: 55 },
        { field: 'SOBANG4_CNT', headerName: '관리업', width: 55 },
        { field: 'SOBANG5_CNT', headerName: '방염업', width: 55 },
        { field: 'PERSON_CNT', headerName: 'PERSON_CNT', width: 55 },
        { field: 'DANCHE_CNT', headerName: 'DANCHE_CNT', width: 55 },
        { field: 'COVER_CNT', headerName: 'COVER_CNT', width: 55 },
        { field: 'MEMBER_CNT', headerName: 'MEMBER_CNT', width: 55 },
    ];
    const columns_gdList3 = [
        { field: 'GTDEPTNM', headerName: '지부', width: 58 },
        { field: 'CNICKNM', headerName: '직능', width: 76 },
        { field: 'RCNM', headerName: '지역', width: 70 },
        { field: 'BIZ_CNT1', headerName: '공동', width: 50 },
        { field: 'BIZ_CNT2', headerName: '근린', width: 50 },
        { field: 'BIZ_CNT3', headerName: '문화', width: 50 },
        { field: 'BIZ_CNT4', headerName: '종교', width: 50 },
        { field: 'BIZ_CNT5', headerName: '판매', width: 50 },
        { field: 'BIZ_CNT6', headerName: '운수', width: 50 },
        { field: 'BIZ_CNT7', headerName: '의료', width: 50 },
        { field: 'BIZ_CNT8', headerName: '교육', width: 50 },
        { field: 'BIZ_CNT9', headerName: '노유자', width: 50 },
        { field: 'BIZ_CNT10', headerName: '수련', width: 50 },
        { field: 'BIZ_CNT11', headerName: '업무', width: 50 },
        { field: 'BIZ_CNT12', headerName: '숙박', width: 50 },
        { field: 'BIZ_CNT13', headerName: '위락', width: 50 },
        { field: 'BIZ_CNT14', headerName: '공장', width: 50 },
        { field: 'BIZ_CNT15', headerName: '창고', width: 50 },
        { field: 'BIZ_CNT16', headerName: '위험물', width: 50 },
        { field: 'BIZ_CNT17', headerName: '동식물', width: 50 },
        { field: 'BIZ_CNT18', headerName: '분뇨', width: 50 },
        { field: 'BIZ_CNT19', headerName: '교정', width: 50 },
        { field: 'BIZ_CNT20', headerName: '방송', width: 50 },
        { field: 'BIZ_CNT21', headerName: '발전', width: 50 },
        { field: 'BIZ_CNT22', headerName: '묘지', width: 50 },
        { field: 'BIZ_CNT23', headerName: '관광', width: 50 },
        { field: 'BIZ_CNT24', headerName: '장례식장', width: 50 },
        { field: 'BIZ_CNT25', headerName: '지하가', width: 50 },
        { field: 'BIZ_CNT26', headerName: '지하구', width: 50 },
        { field: 'BIZ_CNT27', headerName: '문화재', width: 50 },
        { field: 'BIZ_CNT28', headerName: '복합', width: 50 },
        { field: 'BIZ_CNT29', headerName: '기타', width: 50 },
        { field: 'BIZ_CNT_TOT', headerName: '합계', width: 50 },
        { field: 'BIZ_COVER_CNT', headerName: '겸직', width: 50 },
    ];
    const columns_gdList4 = [
        { field: 'CNICKNM', headerName: '직능', width: 73 },
        { field: 'GTDEPTNM', headerName: '지부', width: 69 },
        { field: 'BIZ_CNT1', headerName: '공동', width: 50 },
        { field: 'BIZ_CNT2', headerName: '근린', width: 50 },
        { field: 'BIZ_CNT3', headerName: '문화', width: 50 },
        { field: 'BIZ_CNT4', headerName: '종교', width: 50 },
        { field: 'BIZ_CNT5', headerName: '판매', width: 50 },
        { field: 'BIZ_CNT6', headerName: '운수', width: 50 },
        { field: 'BIZ_CNT7', headerName: '의료', width: 50 },
        { field: 'BIZ_CNT8', headerName: '교육', width: 50 },
        { field: 'BIZ_CNT9', headerName: '노유자', width: 50 },
        { field: 'BIZ_CNT10', headerName: '수련', width: 50 },
        { field: 'BIZ_CNT11', headerName: '업무', width: 50 },
        { field: 'BIZ_CNT12', headerName: '숙박', width: 50 },
        { field: 'BIZ_CNT13', headerName: '위락', width: 50 },
        { field: 'BIZ_CNT14', headerName: '공장', width: 50 },
        { field: 'BIZ_CNT15', headerName: '창고', width: 50 },
        { field: 'BIZ_CNT16', headerName: '위험물', width: 50 },
        { field: 'BIZ_CNT17', headerName: '동식물', width: 50 },
        { field: 'BIZ_CNT18', headerName: '분뇨', width: 50 },
        { field: 'BIZ_CNT19', headerName: '교정', width: 50 },
        { field: 'BIZ_CNT20', headerName: '방송', width: 50 },
        { field: 'BIZ_CNT21', headerName: '발전', width: 50 },
        { field: 'BIZ_CNT22', headerName: '묘지', width: 50 },
        { field: 'BIZ_CNT23', headerName: '관광', width: 50 },
        { field: 'BIZ_CNT24', headerName: '장례식장', width: 50 },
        { field: 'BIZ_CNT25', headerName: '지하가', width: 50 },
        { field: 'BIZ_CNT26', headerName: '지하구', width: 50 },
        { field: 'BIZ_CNT27', headerName: '문화재', width: 50 },
        { field: 'BIZ_CNT28', headerName: '복합', width: 50 },
        { field: 'BIZ_CNT29', headerName: '기타', width: 50 },
        { field: 'BIZ_CNT_TOT', headerName: '합계', width: 50 },
        { field: 'BIZ_COVER_CNT', headerName: '겸직', width: 50 },
    ];
    const columns_gdList5 = [
        { field: 'GTDEPTNM', headerName: '지부', width: 61 },
        { field: 'RCNM', headerName: '지역', width: 78 },
        { field: 'TOT_CNT', headerName: '총계', width: 70 },
        { field: 'MEMBER_CNT', headerName: '회원', width: 70 },
        { field: 'COVER_CNT', headerName: '겸직', width: 70 },
    ];
    const columns_gdList6 = [
        { field: 'GTDEPTNM', headerName: '지부', width: 61 },
        { field: 'TOT_CNT', headerName: '총계', width: 70 },
        { field: 'MEMBER_CNT', headerName: '회원', width: 70 },
        { field: 'NMEMBER_CNT', headerName: '비회원', width: 70 },
        { field: 'COVER_CNT', headerName: '겸직', width: 70 },
    ];
    const columns_gdList1 = [
        { field: 'GTDEPTNM', headerName: '지부', width: 61 },
        { field: 'RCNM', headerName: '지역', width: 61 },
        { field: 'BANG0_CNT', headerName: '소방안전관리자', width: 55 },
        { field: 'BANG1_CNT', headerName: 'BANG1_CNT', width: 55 },
        { field: 'BANG2_CNT', headerName: 'BANG2_CNT', width: 55 },
        { field: 'BANG3_CNT', headerName: 'BANG3_CNT', width: 55 },
        { field: 'GONG1_CNT', headerName: 'GONG1_CNT', width: 55 },
        { field: 'GONG2_CNT', headerName: 'GONG2_CNT', width: 55 },
        { field: 'GONG3_CNT', headerName: 'GONG3_CNT', width: 55 },
        { field: 'DANGER1_CNT', headerName: '위험물안전관리자', width: 55 },
        { field: 'DANGER2_CNT', headerName: 'DANGER2_CNT', width: 55 },
        { field: 'DANGER3_CNT', headerName: 'DANGER3_CNT', width: 55 },
        { field: 'DANGER4_CNT', headerName: 'DANGER4_CNT', width: 55 },
        { field: 'DANGER5_CNT', headerName: '저장소', width: 55 },
        { field: 'DANGER6_CNT', headerName: 'DANGER6_CNT', width: 55 },
        { field: 'SOBANG1_CNT', headerName: '소방기술자', width: 55 },
        { field: 'SOBANG2_CNT', headerName: '공사업', width: 55 },
        { field: 'SOBANG3_CNT', headerName: '감리업', width: 55 },
        { field: 'SOBANG4_CNT', headerName: '관리업', width: 55 },
        { field: 'SOBANG5_CNT', headerName: '방염업', width: 55 },
        { field: 'PERSON_CNT', headerName: 'PERSON_CNT', width: 55 },
        { field: 'DANCHE_CNT', headerName: 'DANCHE_CNT', width: 55 },
        { field: 'COVER_CNT', headerName: 'COVER_CNT', width: 55 },
        { field: 'MEMBER_CNT', headerName: 'MEMBER_CNT', width: 55 },
    ];
    const columns_gdList1_1 = [
        { field: 'GTDEPTNM', headerName: '지부', width: 61 },
        { field: 'RCNM', headerName: '지역', width: 61 },
        { field: 'BANG0_CNT', headerName: '소방안전관리자', width: 55 },
        { field: 'BANG1_CNT', headerName: 'BANG1_CNT', width: 55 },
        { field: 'BANG2_CNT', headerName: 'BANG2_CNT', width: 55 },
        { field: 'BANG3_CNT', headerName: 'BANG3_CNT', width: 55 },
        { field: 'GONG1_CNT', headerName: 'GONG1_CNT', width: 55 },
        { field: 'GONG2_CNT', headerName: 'GONG2_CNT', width: 55 },
        { field: 'GONG3_CNT', headerName: 'GONG3_CNT', width: 55 },
        { field: 'DANGER1_CNT', headerName: '위험물안전관리자', width: 55 },
        { field: 'DANGER2_CNT', headerName: 'DANGER2_CNT', width: 55 },
        { field: 'DANGER3_CNT', headerName: 'DANGER3_CNT', width: 55 },
        { field: 'DANGER4_CNT', headerName: 'DANGER4_CNT', width: 55 },
        { field: 'DANGER5_CNT', headerName: '저장소', width: 55 },
        { field: 'DANGER6_CNT', headerName: 'DANGER6_CNT', width: 55 },
        { field: 'SOBANG1_CNT', headerName: '소방기술자', width: 55 },
        { field: 'SOBANG2_CNT', headerName: '공사업', width: 55 },
        { field: 'SOBANG3_CNT', headerName: '감리업', width: 55 },
        { field: 'SOBANG4_CNT', headerName: '관리업', width: 55 },
        { field: 'SOBANG5_CNT', headerName: '방염업', width: 55 },
        { field: 'PERSON_CNT', headerName: 'PERSON_CNT', width: 55 },
        { field: 'DANCHE_CNT', headerName: 'DANCHE_CNT', width: 55 },
        { field: 'COVER_CNT', headerName: 'COVER_CNT', width: 55 },
        { field: 'MEMBER_CNT', headerName: 'MEMBER_CNT', width: 55 },
    ];
    const columns_gdList2_1 = [
        { field: 'GTDEPTNM', headerName: '지부', width: 61 },
        { field: 'BANG0_CNT', headerName: '소방안전관리자', width: 55 },
        { field: 'BANG1_CNT', headerName: 'BANG1_CNT', width: 55 },
        { field: 'BANG2_CNT', headerName: 'BANG2_CNT', width: 55 },
        { field: 'BANG3_CNT', headerName: 'BANG3_CNT', width: 55 },
        { field: 'GONG1_CNT', headerName: 'GONG1_CNT', width: 55 },
        { field: 'GONG2_CNT', headerName: 'GONG2_CNT', width: 55 },
        { field: 'GONG3_CNT', headerName: 'GONG3_CNT', width: 55 },
        { field: 'DANGER1_CNT', headerName: '위험물안전관리자', width: 55 },
        { field: 'DANGER2_CNT', headerName: 'DANGER2_CNT', width: 55 },
        { field: 'DANGER3_CNT', headerName: 'DANGER3_CNT', width: 55 },
        { field: 'DANGER4_CNT', headerName: 'DANGER4_CNT', width: 55 },
        { field: 'DANGER5_CNT', headerName: '저장소', width: 55 },
        { field: 'DANGER6_CNT', headerName: 'DANGER6_CNT', width: 55 },
        { field: 'SOBANG1_CNT', headerName: '소방기술자', width: 55 },
        { field: 'SOBANG2_CNT', headerName: '공사업', width: 55 },
        { field: 'SOBANG3_CNT', headerName: '감리업', width: 55 },
        { field: 'SOBANG4_CNT', headerName: '관리업', width: 55 },
        { field: 'SOBANG5_CNT', headerName: '방염업', width: 55 },
        { field: 'PERSON_CNT', headerName: 'PERSON_CNT', width: 55 },
        { field: 'DANCHE_CNT', headerName: 'DANCHE_CNT', width: 55 },
        { field: 'COVER_CNT', headerName: 'COVER_CNT', width: 55 },
        { field: 'MEMBER_CNT', headerName: 'MEMBER_CNT', width: 55 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_ExcelL}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={8}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회조건</Box></Grid><Grid item xs={12} md={2}><Box>조회조건</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmmem0030MManagerReportData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>인력구분</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmmem0030MManagerReportData.ds_ds_ioPersonYnD || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmmem0030MManagerReportData.ds_ds_ioCourseYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>용도</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmmem0030MManagerReportData.ds_ds_ioChoiceYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmmem0030MManagerReportData.ds_ds_oAdditionInfo || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>집계 정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>총계</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회원</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>겸직</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ManagerStatistics} columns={columns_gdList5} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_CourseStatisticsTotal} columns={columns_gdList1} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_CourseStatisticsTotal} columns={columns_gdList2} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_BizStatistics} columns={columns_gdList3} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_BizStatistics} columns={columns_gdList4} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ManagerStatistics} columns={columns_gdList6} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdList1_1 && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdList2_1 && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
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
export default Frmmem0030MManagerReport;

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