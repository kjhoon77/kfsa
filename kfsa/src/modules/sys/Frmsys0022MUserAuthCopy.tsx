// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmsys0022MUserAuthCopy } from './useFrmsys0022MUserAuthCopy';
import * as Frmsys0022MUserAuthCopyData from './Frmsys0022MUserAuthCopyData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmsys0022MUserAuthCopy = () => {
    const hook = useFrmsys0022MUserAuthCopy();
    const columns_gdUserAuth = [
        { field: 'MMENUNM', headerName: '메뉴명', width: 172 },
        { field: 'USE_YN', headerName: '사용유무', width: 95 },
        { field: 'UAAUTH', headerName: '읽기쓰기권한', width: 95 },
        { field: 'UAAUTH', headerName: '읽기권한', width: 95 },
        { field: 'MURL', headerName: 'URL', width: 205 },
        { field: 'MORDERSEQ', headerName: '정렬순서', width: 75 },
    ];
    const columns_gdUser = [
        { field: 'SEL', headerName: 'SEL', width: 29 },
        { field: 'PDEPTCD', headerName: '부서코드', width: 70 },
        { field: 'PDEPTNM', headerName: '부서명', width: 112 },
        { field: 'PPOSITNNM', headerName: '직책', width: 70 },
        { field: 'PSABUN', headerName: '사번', width: 80 },
        { field: 'PPERSONNM', headerName: '성명', width: 74 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained"  onClick={hook.lfn_Save}>복사</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Detailed Info</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "61px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '190px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>사용자</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edPositnCopyOrg ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '80px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edUserId ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '80px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edUserName ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '70px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnSearchUser ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnSearchUser_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px' }}><Search fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdUserAuth ? undefined : 'none' }}><Paper sx={{ width: '457px', height: '538px', width: '100%', height: 'auto', minHeight: '538px' }}><DataGridWrapper rows={hook.ds_oUserAuth} columns={columns_gdUserAuth} /></Paper></Box></Stack>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>List</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '324px', height: '22px', display: 'flex', alignItems: 'center', ml: '468px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>사번/사용자</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button1 ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px' }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdUser ? undefined : 'none' }}><Paper sx={{ width: '528px', height: '514px', width: '100%', height: 'auto', minHeight: '514px' }}><DataGridWrapper rows={hook.ds_ioUser} columns={columns_gdUser} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmsys0022MUserAuthCopy;

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