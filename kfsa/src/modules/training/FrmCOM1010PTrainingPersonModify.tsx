// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM1010PTrainingPersonModify } from './useFrmCOM1010PTrainingPersonModify';
import * as FrmCOM1010PTrainingPersonModifyData from './FrmCOM1010PTrainingPersonModifyData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const FrmCOM1010PTrainingPersonModify = () => {
    const hook = useFrmCOM1010PTrainingPersonModify();
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ ml: "96px", minWidth: "356px" }}><Box sx={{ display: hook.isVisible_lbText01 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '320px', height: '30px' }}><Typography variant="body2">동일인에 대한 이름 또는 주민번호를 변경합니다.
기존 정보가 변경되오니 신중히 변경하시기 바랍니다.</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbText02 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '356px', height: '26px' }}><Typography variant="body2">접수자를 잘못 접수한 경우 접수대상자를 변경합니다.
접수자가 타인으로 변경되오니 신중히 변경하시기 바랍니다.</Typography></Box></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbPersonInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '66px' }}><Typography variant="body2">기존
정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Save} sx={{ width: '92px', height: '158px', whiteSpace: "nowrap" }}>변   경</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '46px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '178px', height: '22px', display: 'flex', alignItems: 'center', ml: '46px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "12px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '66px' }}><Typography variant="body2">변경
정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '46px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주민등록번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnAuthResidentNo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnAuthResidentNo_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>실명인증</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '196px', height: '22px', display: 'flex', alignItems: 'center', ml: '46px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>휴대폰</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '485px', height: '41px' }}><Typography variant="body2">※ 수납 후 성명이 변경될 경우 &quot;영수증의 수강자명&quot;, &quot;계산서 발급&quot; 과 연동
    되지 않습니다. 연동을 원할 경우 정보지원과로 연락하여 조치 바랍니다.</Typography></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM1010PTrainingPersonModify;

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