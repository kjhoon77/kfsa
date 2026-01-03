// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0030MTrainingCyberJubsuList } from './useFrmtraining0030MTrainingCyberJubsuList';
import * as Frmtraining0030MTrainingCyberJubsuListData from './Frmtraining0030MTrainingCyberJubsuListData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining0030MTrainingCyberJubsuList = () => {
    const hook = useFrmtraining0030MTrainingCyberJubsuList();
    const columns_gdTrainingJubsu = [
        { field: 'TOMGGTMGNO', headerName: '지부', width: 60 },
        { field: 'TOYEAR', headerName: '년도', width: 40 },
        { field: 'TOTCCOURSECD', headerName: '직능', width: 105 },
        { field: 'TOMUNJEGUBUNNM', headerName: '상세구분', width: 61 },
        { field: 'TOTRAININGORDER', headerName: '회차', width: 40 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'TJPERSONNM', headerName: '성명', width: 64 },
        { field: 'CPPASSSTATUS', headerName: '수료', width: 40 },
        { field: 'CLPASSSCORE', headerName: '수료점수', width: 64 },
        { field: 'CLPROGRESSPCT', headerName: '진도율', width: 64 },
        { field: 'CLPROGRESSSCORE', headerName: '진도점수', width: 64 },
        { field: 'CLHOMEWORKSCORE', headerName: '과제점수', width: 64 },
        { field: 'CLEXAMSCORE', headerName: '평가점수', width: 64 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 90 },
        { field: 'CYBERDATE', headerName: '사이버교육기간', width: 105 },
        { field: 'TOSTARTDATE', headerName: '교육시작일자', width: 90 },
        { field: 'TOENDDATE', headerName: '교육종료일자', width: 90 },
        { field: 'TJZIPCD', headerName: '우편번호', width: 70 },
        { field: 'TJADDR', headerName: '주소', width: 230 },
        { field: 'TPHPTEL', headerName: '휴대폰', width: 100 },
        { field: 'TPEMAIL', headerName: '이메일', width: 150 },
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
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "67px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '437px', height: '24px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수료여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0030MTrainingCyberJubsuListData.ds_ds_oPassYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "9px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '180px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>접수자수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdTrainingJubsu ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '506px', width: '100%', height: 'auto', minHeight: '506px' }}><DataGridWrapper rows={hook.ds_oTrainingCyberJubsu} columns={columns_gdTrainingJubsu} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0030MTrainingCyberJubsuList;

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