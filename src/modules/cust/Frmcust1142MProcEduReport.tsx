// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1142MProcEduReport } from './useFrmcust1142MProcEduReport';
import * as Frmcust1142MProcEduReportData from './Frmcust1142MProcEduReportData';

export const Frmcust1142MProcEduReport = () => {
    const hook = useFrmcust1142MProcEduReport();
    const columns_gdList = [
        { field: 'MEMBER_GUBUN_NM', headerName: '순번', width: 50 },
        { field: 'GTDEPTNM', headerName: '소속지부', width: 67 },
        { field: 'RCNM', headerName: '지역', width: 67 },
        { field: 'CNICKNM', headerName: '직능', width: 78 },
        { field: 'CNO', headerName: '관리번호', width: 67 },
        { field: 'EPPERSONNM', headerName: '성명', width: 61 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'ADDR', headerName: '주소', width: 321 },
        { field: 'BNM', headerName: '근무처', width: 183 },
        { field: 'EPOLDEDUEXPIREDATE', headerName: '종전교육유효기간', width: 125 },
        { field: 'PASSDATE', headerName: '교육일자', width: 90 },
        { field: 'CEDUEXPIREDATE', headerName: '교육유효기간', width: 90 },
        { field: 'MINAPAMT', headerName: '미납액', width: 90 },
    ];
    const columns_gdList2 = [
        { field: 'GTTEAMNM', headerName: '소속지부', width: 87 },
        { field: 'CGROUPNM', headerName: '직능', width: 120 },
        { field: 'PASSDATE', headerName: '일자 / 지역', width: 120 },
        { field: 'CNTSUM', headerName: '합계', width: 80 },
        { field: 'CNT1', headerName: 'CNT1', width: 80 },
        { field: 'CNT2', headerName: 'CNT2', width: 80 },
        { field: 'CNT3', headerName: 'CNT3', width: 80 },
        { field: 'CNT4', headerName: 'CNT4', width: 80 },
        { field: 'CNT5', headerName: '5', width: 80 },
        { field: 'CNT6', headerName: 'CNT6', width: 80 },
        { field: 'CNT7', headerName: 'CNT7', width: 80 },
        { field: 'CNT8', headerName: 'CNT8', width: 80 },
        { field: 'CNT9', headerName: 'CNT9', width: 80 },
        { field: 'CNT10', headerName: 'CNT10', width: 80 },
        { field: 'CNT11', headerName: 'CNT11', width: 80 },
        { field: 'CNT12', headerName: 'CNT12', width: 80 },
        { field: 'CNT13', headerName: 'CNT13', width: 80 },
        { field: 'CNT14', headerName: 'CNT14', width: 80 },
        { field: 'CNT15', headerName: 'CNT15', width: 80 },
        { field: 'CNT16', headerName: 'CNT16', width: 80 },
        { field: 'CNT17', headerName: 'CNT17', width: 80 },
        { field: 'CNT18', headerName: 'CNT18', width: 80 },
        { field: 'CNT19', headerName: 'CNT19', width: 80 },
        { field: 'CNT20', headerName: 'CNT20', width: 80 },
        { field: 'CNT21', headerName: 'CNT21', width: 80 },
        { field: 'CNT22', headerName: 'CNT22', width: 80 },
        { field: 'CNT23', headerName: 'CNT23', width: 80 },
        { field: 'CNT24', headerName: 'CNT24', width: 80 },
        { field: 'CNT25', headerName: 'CNT25', width: 80 },
        { field: 'CNT26', headerName: 'CNT26', width: 80 },
        { field: 'CNT27', headerName: 'CNT27', width: 80 },
        { field: 'CNT28', headerName: 'CNT28', width: 80 },
        { field: 'CNT29', headerName: 'CNT29', width: 80 },
        { field: 'CNT30', headerName: 'CNT30', width: 80 },
        { field: 'CNT31', headerName: 'CNT31', width: 80 },
        { field: 'CNT32', headerName: 'CNT32', width: 80 },
        { field: 'CNT33', headerName: 'CNT33', width: 80 },
        { field: 'CNT34', headerName: 'CNT34', width: 80 },
        { field: 'CNT35', headerName: 'CNT35', width: 80 },
        { field: 'CNT36', headerName: 'CNT36', width: 80 },
    ];
    const columns_gdList3 = [
        { field: 'GTTEAMNM', headerName: '지부', width: 84 },
        { field: 'TOTCNT', headerName: '계', width: 85 },
        { field: 'S10CNT', headerName: '소방안전관리자', width: 115 },
        { field: 'S20CNT', headerName: '소방안전관리보조자', width: 135 },
        { field: 'D30CNT', headerName: '위험물안전관리자', width: 116 },
        { field: 'K50CNT', headerName: '소방기술자', width: 80 },
        { field: 'W80CNT', headerName: '위험물운송자', width: 91 },
        { field: 'W40CNT', headerName: '위험물운반자', width: 91 },
        { field: 'S91CNT', headerName: '교육희망자_소관', width: 114 },
        { field: 'D92CNT', headerName: '교육희망자_위관', width: 112 },
        { field: 'K93CNT', headerName: '교육희망자_소기', width: 115 },
    ];
    const columns_gdBookSend = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'SOSOKTEAMNM', headerName: '지부', width: 100 },
        { field: 'CGROUPNM', headerName: '교육과정', width: 152 },
        { field: 'PASSDATE', headerName: '교육이수일자', width: 90 },
        { field: 'SOSOKMGNO', headerName: '고객관리번호', width: 159 },
        { field: 'EPPERSONNM', headerName: '성명', width: 74 },
        { field: 'CEDUPOSTZIPCD', headerName: '수신자 우편번호', width: 113 },
        { field: 'BOOKADDR1', headerName: '수신자 주소1', width: 268 },
        { field: 'BOOKADDR2', headerName: '수신자 주소2', width: 268 },
        { field: 'HPTEL', headerName: '수신자 휴대폰', width: 100 },
        { field: 'GTZIPCODE', headerName: '발신자 우편번호', width: 113 },
        { field: 'GTADDR1', headerName: '발신자 주소1', width: 268 },
        { field: 'GTADDR2', headerName: '발신자 주소2', width: 268 },
        { field: 'GTTELEPHONENUMBER', headerName: '발신자 전화번호', width: 150 },
        { field: 'COURSEBOOK', headerName: '내용물', width: 214 },
        { field: 'SENDCOUNT', headerName: '수량', width: 47 },
        { field: 'BARCODE', headerName: '우편반송바코드', width: 225 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel2}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained"  onClick={hook.btnPrintBookAddr_OnClick}>교재수령지 엑셀 출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>출력물</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={7}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회 조건</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상년도</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1142MProcEduReportData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>고객구분</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>직능</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>교육일자</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>회차</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>교육대상</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>교육이수구분</Box></Grid><Grid item xs={12} md={5}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>미납여부</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1142MProcEduReport;

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