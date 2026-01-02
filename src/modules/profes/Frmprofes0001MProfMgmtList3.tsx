// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0001MProfMgmtList3 } from './useFrmprofes0001MProfMgmtList3';
import * as Frmprofes0001MProfMgmtList3Data from './Frmprofes0001MProfMgmtList3Data';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0001MProfMgmtList3 = () => {
    const hook = useFrmprofes0001MProfMgmtList3();
    const columns_gdList = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTTEAMNM', headerName: '지부', width: 100 },
        { field: 'APFGUBUNNM', headerName: '강의전담 교수', width: 100 },
        { field: 'TIME2_A', headerName: '시간', width: 98 },
        { field: 'ATIME', headerName: '강의시간', width: 103 },
        { field: 'TIME_A', headerName: '월 강의시간', width: 103 },
        { field: 'BPFGUBUNNM', headerName: '강의전담 부교수', width: 100 },
        { field: 'TIME2_B', headerName: '시간', width: 100 },
        { field: 'BTIME', headerName: '강의시간', width: 100 },
        { field: 'TIME_B', headerName: '월 강의시간', width: 100 },
        { field: 'CPFGUBUNNM', headerName: '기타교수', width: 100 },
        { field: 'TIME2_C', headerName: '시간', width: 100 },
        { field: 'CTIME', headerName: '강의시간', width: 100 },
        { field: 'TIME_C', headerName: '월 강의시간', width: 100 },
        { field: 'REMARK', headerName: '자격유지시간', width: 110 },
    ];
    const columns_Grid0 = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LPPFNM', headerName: '성명', width: 80 },
        { field: 'GTDEPTNM', headerName: '지부', width: 80 },
        { field: 'PFGUBUN3', headerName: '구분', width: 80 },
        { field: 'M01', headerName: '1분기', width: 80 },
        { field: 'M02', headerName: '2월', width: 80 },
        { field: 'M03', headerName: '3월', width: 80 },
        { field: 'Q1', headerName: '소계', width: 80 },
        { field: 'M04', headerName: '2분기', width: 80 },
        { field: 'M05', headerName: '5월', width: 80 },
        { field: 'M06', headerName: '6월', width: 80 },
        { field: 'Q2', headerName: '소계', width: 80 },
        { field: 'M07', headerName: '3분기', width: 80 },
        { field: 'M08', headerName: '8월', width: 80 },
        { field: 'M09', headerName: '9월', width: 80 },
        { field: 'Q3', headerName: '소계', width: 80 },
        { field: 'M10', headerName: '4분기', width: 80 },
        { field: 'M11', headerName: '11월', width: 80 },
        { field: 'M12', headerName: '12월', width: 80 },
        { field: 'Q4', headerName: '소계', width: 80 },
        { field: 'TTOTAL', headerName: '평가', width: 110 },
        { field: 'TOTALSUM', headerName: '강의시간', width: 100 },
        { field: 'REMARK', headerName: '자격유지시간', width: 150 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>조회일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>교수명</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>자격유지시간</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmprofes0001MProfMgmtList3Data.ds_ds_oRepayYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>※ 임시시간설정</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmprofes0001MProfMgmtList3Data.ds_ds_TimeChage || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>배정지부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmprofes0001MProfMgmtList3Data.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioList} columns={columns_gdList} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>구분</Box></Grid><Grid item xs={12} md={2}><Box>월(h)</Box></Grid><Grid item xs={12} md={2}><Box>분기(h)</Box></Grid><Grid item xs={12} md={2}><Box>반기(h)</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>교수</Box></Grid><Grid item xs={12} md={2}><Box>22.7</Box></Grid><Grid item xs={12} md={2}><Box>16.7</Box></Grid><Grid item xs={12} md={2}><Box>50</Box></Grid><Grid item xs={12} md={2}><Box>100</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>부교수</Box></Grid><Grid item xs={12} md={2}><Box>15.7</Box></Grid><Grid item xs={12} md={2}><Box>12.5</Box></Grid><Grid item xs={12} md={2}><Box>37.5</Box></Grid><Grid item xs={12} md={2}><Box>75</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>기타교수</Box></Grid><Grid item xs={12} md={2}><Box>8.7</Box></Grid><Grid item xs={12} md={2}><Box>3.3</Box></Grid><Grid item xs={12} md={2}><Box>10</Box></Grid><Grid item xs={12} md={2}><Box>20</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioList3} columns={columns_Grid0} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0001MProfMgmtList3;

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