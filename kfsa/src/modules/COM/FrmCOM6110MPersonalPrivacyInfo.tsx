// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM6110MPersonalPrivacyInfo } from './useFrmCOM6110MPersonalPrivacyInfo';
import * as FrmCOM6110MPersonalPrivacyInfoData from './FrmCOM6110MPersonalPrivacyInfoData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const FrmCOM6110MPersonalPrivacyInfo = () => {
    const hook = useFrmCOM6110MPersonalPrivacyInfo();
    const columns_gdPrivacyAgreeH = [
        { field: 'id', headerName: '순번', width: 45, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'PHPROCSTATUS', headerName: '동의여부', width: 76 },
        { field: 'PHPROCMETHOD', headerName: '처리방법', width: 82 },
        { field: 'PHPROCDATE', headerName: '처리일자', width: 79 },
        { field: 'PHREGSABUN', headerName: '등록자', width: 66 },
        { field: 'PHREGDATE', headerName: '등록일시', width: 135 },
        { field: 'RUMGNO', headerName: '동의서', width: 81 },
    ];
    const columns_gdPrivacyAgree = [
        { field: 'id', headerName: '순번', width: 45, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'BIZCD', headerName: '업무구분', width: 85 },
        { field: 'COURSECD', headerName: '직능', width: 202 },
        { field: 'PHPROCSTATUS', headerName: '동의여부', width: 85 },
        { field: 'PHPROCDATE', headerName: '처리일자', width: 86 },
        { field: 'RUMGNO', headerName: '동의서', width: 63 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "43px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주민번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_lbResidentNoError ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '30px', height: '22px' }}><Typography variant="body2">오류</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "11px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '273px', height: '22px' }}><Typography variant="body2">   ▶ 업무별 개인정보동의서 등록 현황</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdPrivacyAgree ? undefined : 'none' }}><Paper sx={{ width: '610px', height: '167px', width: '100%', height: 'auto', minHeight: '167px' }}><DataGridWrapper rows={hook.ds_ioPrivacyAgree} columns={columns_gdPrivacyAgree} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbJubsuInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '225px', height: '22px' }}><Typography variant="body2">    ▶▶ 개인정보동의서 등록 이력</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">업무구분</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbBizGubun ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '115px', height: '22px' }}><Typography variant="body2"></Typography></Box></Box><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">직능</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbCourseGubun ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '187px', height: '22px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdPrivacyAgreeH ? undefined : 'none' }}><Paper sx={{ width: '610px', height: '187px', width: '100%', height: 'auto', minHeight: '187px' }}><DataGridWrapper rows={hook.ds_ioPrivacyAgreeH} columns={columns_gdPrivacyAgreeH} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM6110MPersonalPrivacyInfo;

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