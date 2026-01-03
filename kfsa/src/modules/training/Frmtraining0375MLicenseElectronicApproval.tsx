// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0375MLicenseElectronicApproval } from './useFrmtraining0375MLicenseElectronicApproval';
import * as Frmtraining0375MLicenseElectronicApprovalData from './Frmtraining0375MLicenseElectronicApprovalData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining0375MLicenseElectronicApproval = () => {
    const hook = useFrmtraining0375MLicenseElectronicApproval();
    const columns_gdElecAppr = [
        { field: 'ROWNUM', headerName: '순번', width: 39 },
        { field: 'PROCDATE', headerName: '발급일자(기간)', width: 148 },
        { field: 'RE_PC_DEPARTMENT', headerName: '처리부서', width: 76 },
        { field: 'RE_PC_POSITION', headerName: '직위', width: 75 },
        { field: 'RE_APPROVER_NAME', headerName: '결재자', width: 69 },
        { field: 'RE_APPROVER_DATE', headerName: '결재일자', width: 132 },
        { field: 'RE_APPROVER_KIND', headerName: '결재유형', width: 66 },
        { field: 'RE_APPROVER_STATUS', headerName: '결재상태', width: 70 },
    ];
    const columns_gdLicenseList = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TCCOURSENM', headerName: '직능', width: 195 },
        { field: 'NEWL', headerName: '신규', width: 70 },
        { field: 'PRTL', headerName: '교부', width: 70 },
        { field: 'REPRTL', headerName: '재교부', width: 70 },
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

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '179px', height: '22px', display: 'flex', alignItems: 'center', ml: '14px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0375MLicenseElectronicApprovalData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_gdLicenseList ? undefined : 'none' }}><Paper sx={{ width: '448px', height: '204px', width: '100%', height: 'auto', minHeight: '204px' }}><DataGridWrapper rows={hook.ds_ioLicenseList_A} columns={columns_gdLicenseList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '190px', height: '22px', display: 'flex', alignItems: 'center', ml: '14px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>발급일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '116px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnCreateList ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnCreateList_OnClick} sx={{ width: '314px', height: '24px' }}>      (1) 수첩발급현황 보기 ☞☞☞</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnProcElecApv ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnProcElecApv_OnClick} sx={{ width: '314px', height: '24px' }}>      (2) 전자결재 연동 처리 (기안)</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "60px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '128px', height: '22px' }}><Typography variant="body2">결재진행현황</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSMS ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '270px', height: '19px' }}><Typography variant="body2">※ 더블클릭 시 결재문서를 보실 수 있습니다.</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"  onClick={hook.lfn_Search} sx={{ width: '144px', height: '24px' }}>결재진행현황조회(F2)</Button></Box><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px' }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdElecAppr ? undefined : 'none' }}><Paper sx={{ width: '785px', height: '366px', width: '100%', height: 'auto', minHeight: '366px' }}><DataGridWrapper rows={hook.ds_ioElecApprLicenseConnection} columns={columns_gdElecAppr} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0375MLicenseElectronicApproval;

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