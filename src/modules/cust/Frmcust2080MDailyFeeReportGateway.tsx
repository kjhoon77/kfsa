// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2080MDailyFeeReportGateway } from './useFrmcust2080MDailyFeeReportGateway';
import * as Frmcust2080MDailyFeeReportGatewayData from './Frmcust2080MDailyFeeReportGatewayData';

export const Frmcust2080MDailyFeeReportGateway = () => {
    const hook = useFrmcust2080MDailyFeeReportGateway();
    const columns_gdElecAppr = [
        { field: 'ROWNUM', headerName: '순번', width: 41 },
        { field: 'PROCDATE', headerName: '수납기간', width: 223 },
        { field: 'RE_PC_DEPARTMENT', headerName: '처리부서', width: 113 },
        { field: 'RE_PC_POSITION', headerName: '직위', width: 71 },
        { field: 'RE_APPROVER_NAME', headerName: '결재자', width: 82 },
        { field: 'RE_APPROVER_DATE', headerName: '결재일자', width: 80 },
        { field: 'RE_APPROVER_KIND', headerName: '결재유형', width: 67 },
        { field: 'RE_APPROVER_STATUS', headerName: '결재상태', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.lfn_localExcel}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Cancel}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" fullWidth><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2080MDailyFeeReportGatewayData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={5}><Box> 전자결재 연동 시 첨부파일(해당일자의 수납내역 리스트[PDF파일])</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>처리구분</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={5}><Box>
을 미리 생성해 놓으신 후 전자결재 연동처리(기안) 시에 리스트를</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>수납구분</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={5}><Box>첨부하시기 바랍니다.</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>1)</Box></Grid><Grid item xs={12} md={4}><Button variant="contained">수납내역 리스트 생성(전자결재 첨부용)</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>수납일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained">출력</Button></Grid><Grid item xs={12} md={2}><Box>2)</Box></Grid><Grid item xs={12} md={4}><Button variant="contained">전자결재 연동 처리(기안)</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회 정보</Box></Grid><Grid item xs={12} md={2}><Button variant="contained">진행현황 재조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>※ 더블클릭 시 결재문서를 보실 수 있습니다.</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioElecApprConnection} columns={columns_gdElecAppr} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust2080MDailyFeeReportGateway;

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