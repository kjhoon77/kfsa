// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu0280MPassDiplomaPrint } from './useFrmspcledu0280MPassDiplomaPrint';
import * as Frmspcledu0280MPassDiplomaPrintData from './Frmspcledu0280MPassDiplomaPrintData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';
import { Frmspcledu0280S01PassDiplomaPrint } from '../spcledu/Frmspcledu0280S01PassDiplomaPrint';

export const Frmspcledu0280MPassDiplomaPrint = () => {
    const hook = useFrmspcledu0280MPassDiplomaPrint();
    const columns_gdTrainingPass = [
        { field: 'SEL', headerName: 'SEL', width: 29 },
        { field: 'TOMGGTMGNO', headerName: '지부', width: 79 },
        { field: 'TPPASSNO', headerName: '수료번호', width: 146 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 69 },
        { field: 'TJPERSONNM', headerName: '성명', width: 71 },
        { field: 'TJRESIDENTNO_SANG', headerName: '생년월일', width: 91 },
        { field: 'TPPASSDATE_A', headerName: '수료일자', width: 95 },
        { field: 'TJZIPCD', headerName: '우편번호', width: 94 },
        { field: 'JUBSUADDR', headerName: '주소', width: 335 },
        { field: 'ERPASSYN', headerName: '합격여부', width: 94 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '784px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmspcledu0280MPassDiplomaPrintData.ds_ds_oSearchGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSearchValue ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">조회조건</Typography></Box></Box><Box sx={{ display: hook.isVisible_divSearchGubun ? undefined : 'none' }}><Paper sx={{ p: 2, width: '692px', height: '64px', width: '100%', height: 'auto', minHeight: '64px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Frmspcledu0280S01PassDiplomaPrint /></Stack></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '180px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수료인원</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "1px", minWidth: "166px" }}><Box sx={{ display: hook.isVisible_btnPass ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPass_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>수료증미리보기</Button></Box><Box sx={{ display: hook.isVisible_btnPassPrint ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPassPrint} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>수료증출력</Button></Box></Box><Box sx={{ display: hook.isVisible_btnPassList ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPassList_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>수료대장출력</Button></Box><Box sx={{ display: hook.isVisible_btnAttend ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnAttend_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>참가증출력</Button></Box><Box sx={{ display: hook.isVisible_btnMolPass ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnMolPass_OnClick} sx={{ width: '170px', height: '24px', whiteSpace: "nowrap" }}>노동부제출용 수료증출력</Button></Box><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdTrainingPass ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '490px', width: '100%', height: 'auto', minHeight: '490px' }}><DataGridWrapper rows={hook.ds_ioTrainingPass} columns={columns_gdTrainingPass} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu0280MPassDiplomaPrint;

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