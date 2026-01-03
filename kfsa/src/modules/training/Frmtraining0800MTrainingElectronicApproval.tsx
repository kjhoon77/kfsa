// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0800MTrainingElectronicApproval } from './useFrmtraining0800MTrainingElectronicApproval';
import * as Frmtraining0800MTrainingElectronicApprovalData from './Frmtraining0800MTrainingElectronicApprovalData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining0800MTrainingElectronicApproval = () => {
    const hook = useFrmtraining0800MTrainingElectronicApproval();
    const columns_gdElecAppr = [
        { field: 'ROWNUM', headerName: '순번', width: 39 },
        { field: 'PROCDATE', headerName: '수납일자(기간)', width: 148 },
        { field: 'RE_PC_DEPARTMENT', headerName: '처리부서', width: 76 },
        { field: 'RE_PC_POSITION', headerName: '직위', width: 76 },
        { field: 'RE_APPROVER_NAME', headerName: '결재자', width: 61 },
        { field: 'RE_APPROVER_DATE', headerName: '결재일자', width: 132 },
        { field: 'RE_APPROVER_KIND', headerName: '결재유형', width: 66 },
        { field: 'RE_APPROVER_STATUS', headerName: '결재상태', width: 70 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_localExcel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>진행현황조회(F2)</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbProcMsg1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '444px', height: '22px' }}><Typography variant="body2">1. 강습교육수수료 : 일일결산서</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '179px', height: '22px', display: 'flex', alignItems: 'center', ml: '18px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0800MTrainingElectronicApprovalData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbProcMsg2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '444px', height: '22px' }}><Typography variant="body2">2. 시험응시수수료 : 일일결산서</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '190px', height: '22px', display: 'flex', alignItems: 'center', ml: '18px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>처리일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '116px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbProcMsg3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '444px', height: '22px' }}><Typography variant="body2">3. 인터넷 환불 현황</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnCreateList ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnCreateList_OnClick} sx={{ width: '314px', height: '24px', whiteSpace: "nowrap" }}>      (1)  세부내역 리스트 생성 (전자결재 첨부용)</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbProcMsg4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '444px', height: '22px' }}><Typography variant="body2">4. 인터넷 회차변경 현황</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnProcElecApv ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnProcElecApv_OnClick} sx={{ width: '314px', height: '24px', whiteSpace: "nowrap" }}>      (2) 전자결재 연동 처리 (기안)</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbProcMsg6 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '15px', height: '22px' }}><Typography variant="body2">※</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbProcMsg7 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '420px', height: '22px' }}><Typography variant="body2">1, 2, 3, 4에 대한 세부내역 리스트를 PDF 파일로 미리 생성해 놓으신 후</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbProcMsg8 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '420px', height: '22px' }}><Typography variant="body2">전자결재 연동처리(기안) 시에 리스트를 첨부하시기 바랍니다.</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSMS ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '270px', height: '19px' }}><Typography variant="body2">※ 더블클릭 시 결재문서를 보실 수 있습니다.</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdElecAppr ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '410px', width: '100%', height: 'auto', minHeight: '410px' }}><DataGridWrapper rows={hook.ds_ioElecApprConnection} columns={columns_gdElecAppr} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0800MTrainingElectronicApproval;

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