// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1026MEduJubsuList } from './useFrmcust1026MEduJubsuList';
import * as Frmcust1026MEduJubsuListData from './Frmcust1026MEduJubsuListData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust1026MEduJubsuList = () => {
    const hook = useFrmcust1026MEduJubsuList();
    const columns_gdEduJubsu = [
        { field: 'SEL', headerName: 'SEL', width: 29 },
        { field: 'ESGTMGNO', headerName: '지부', width: 60 },
        { field: 'ESYEAR', headerName: '년도', width: 40 },
        { field: 'ESEDUORDER', headerName: '회차', width: 40 },
        { field: 'EJHJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'PAYGUBUN', headerName: '접수상태', width: 55 },
        { field: 'MFEE', headerName: '미납', width: 51 },
        { field: 'EJISUGUBUN', headerName: '최종이수', width: 61 },
        { field: 'CYBERISUGUBUN', headerName: '사이버', width: 45 },
        { field: 'EDUISUGUBUN', headerName: '소집', width: 47 },
        { field: 'CGROUPNICKNM', headerName: '직능', width: 63 },
        { field: 'EJNM', headerName: '성명', width: 64 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 97 },
        { field: 'ESDATE', headerName: '교육일자', width: 90 },
        { field: 'EJBUILDING', headerName: '대상물(업체)', width: 150 },
        { field: 'JIBUCNO', headerName: '고객관리번호', width: 108 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 90 },
        { field: 'RCNM', headerName: '지역', width: 61 },
        { field: 'EJZIP', headerName: '우편번호', width: 70 },
        { field: 'EJADDR', headerName: '주소', width: 230 },
        { field: 'EJPHONE', headerName: '휴대폰', width: 100 },
        { field: 'EJEMAIL', headerName: '이메일', width: 150 },
    ];
    const columns_gdBookSend = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTTEAMNM', headerName: '지부', width: 100 },
        { field: 'CGROUPNM', headerName: '교육과정', width: 152 },
        { field: 'ESCYBERSTARTDATE', headerName: '교육시작일자', width: 90 },
        { field: 'TEAMNMJUBSUNO', headerName: '접수번호', width: 159 },
        { field: 'EJNM', headerName: '성명', width: 74 },
        { field: 'EJBOOKZIPCD', headerName: '수신자 우편번호', width: 113 },
        { field: 'EJBOOKREGION', headerName: '수신자 지역', width: 86 },
        { field: 'EJBOOKADDR1', headerName: '수신자 주소1', width: 268 },
        { field: 'EJBOOKADDR2', headerName: '수신자 주소2', width: 268 },
        { field: 'CGROUPCD', headerName: '교재구분', width: 77 },
        { field: 'BARCODE', headerName: '우편반송바코드', width: 114 },
        { field: 'DEPTCNO', headerName: '관리번호', width: 186 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>접수자목록출력</Button>
<Button variant="contained"  onClick={hook.lfn_PrintName}>접수자명단</Button>
<Button variant="contained"  onClick={hook.lfn_PrintNameBoard}>접수자명단(게시판용)</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintEdu}>참가원출력</Button>
<Button variant="contained"  onClick={hook.lfn_PrintEdu2}>이수증(1장당 9명)</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.btnPrintEmail_OnClick}>이메일출력(TXT파일)</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1026MEduJubsuListData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>년도</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1026MEduJubsuListData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>선택</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1026MEduJubsuListData.ds_ds_oSearchGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회차</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>이수일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={7}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>접수상태</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1026MEduJubsuListData.ds_ds_oSunapYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최종이수여부</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1026MEduJubsuListData.ds_ds_oPassYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소집이수여부</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1026MEduJubsuListData.ds_ds_oPassYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>사이버이수여부</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1026MEduJubsuListData.ds_ds_oPassYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회차변경여부</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1026MEduJubsuListData.ds_ds_oLastGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>접수자수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_MULTI_SORT"><Button variant="outlined" size="small" color="primary" onClick={hook.btnMutilSort_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Sort fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oEduJubsu} columns={columns_gdEduJubsu} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdBookSend && (
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
export default Frmcust1026MEduJubsuList;

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