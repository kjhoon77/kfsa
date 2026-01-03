// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2080MDailyFeeReportGateway } from './useFrmcust2080MDailyFeeReportGateway';
import * as Frmcust2080MDailyFeeReportGatewayData from './Frmcust2080MDailyFeeReportGatewayData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

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
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "56px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '167px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2080MDailyFeeReportGatewayData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_lbTextBlue ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '400px', height: '42px' }}><Typography variant="body2"> 전자결재 연동 시 첨부파일(해당일자의 수납내역 리스트[PDF파일])</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '372px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>처리구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2080MDailyFeeReportGatewayData.ds_ds_ioGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static6 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '400px', height: '26px' }}><Typography variant="body2">
을 미리 생성해 놓으신 후 전자결재 연동처리(기안) 시에 리스트를</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '372px', height: '52px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수납구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust2080MDailyFeeReportGatewayData.ds_ds_ioSunap || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static7 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '400px', height: '30px' }}><Typography variant="body2">첨부하시기 바랍니다.</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbText ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '20px', height: '22px' }}><Typography variant="body2">1)</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnCreateList ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnCreateList_OnClick} sx={{ width: '384px', height: '22px', whiteSpace: "nowrap" }}>수납내역 리스트 생성(전자결재 첨부용)</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수납일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnPrint ? undefined : 'none' }}><Button variant="contained"  startIcon={<Print />} onClick={hook.btnCreateListTotaling_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>출력</Button></Box><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '20px', height: '22px' }}><Typography variant="body2">2)</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnProcElecApv ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnProcElecApv_OnClick} sx={{ width: '384px', height: '22px', whiteSpace: "nowrap" }}>전자결재 연동 처리(기안)</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '22px' }}><Typography variant="body2">조회 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnSelect ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSelect_OnClick} sx={{ width: '106px', height: '24px', whiteSpace: "nowrap" }}>진행현황 재조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSMS ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '270px', height: '19px' }}><Typography variant="body2">※ 더블클릭 시 결재문서를 보실 수 있습니다.</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdElecAppr ? undefined : 'none' }}><Paper sx={{ width: '784px', height: '406px', width: '100%', height: 'auto', minHeight: '406px' }}><DataGridWrapper rows={hook.ds_ioElecApprConnection} columns={columns_gdElecAppr} /></Paper></Box></Stack>

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