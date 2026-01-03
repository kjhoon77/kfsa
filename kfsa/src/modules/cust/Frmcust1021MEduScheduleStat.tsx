// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1021MEduScheduleStat } from './useFrmcust1021MEduScheduleStat';
import * as Frmcust1021MEduScheduleStatData from './Frmcust1021MEduScheduleStatData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust1021MEduScheduleStat = () => {
    const hook = useFrmcust1021MEduScheduleStat();
    const columns_gdEduSchedule = [
        { field: 'TOMGGTMGNO', headerName: '구분', width: 55 },
    ];
    const columns_gdTitle = [
        { field: 'id', headerName: 'No', width: 55, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel2}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "42px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '156px', height: '24px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>검색년월</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '368px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1021MEduScheduleStatData.ds_ds_oEduGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbResidentNoError ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '52px', height: '22px' }}><Typography variant="body2">강습 : </Typography></Box></Box><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">공공</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">특급</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">1급</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">2급</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static15 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">3급</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">위안</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static6 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">운송</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static16 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">운반</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static11 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">통합</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static13 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">생활</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static14 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">심폐</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static17 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">교관</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static20 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '60px', height: '22px' }}><Typography variant="body2">심폐전문</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static18 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '64px', height: '22px' }}><Typography variant="body2">건설현장</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static19 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '64px', height: '22px' }}><Typography variant="body2">업무대행</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '52px', height: '22px' }}><Typography variant="body2">실무 : </Typography></Box></Box><Box sx={{ display: hook.isVisible_Static9 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">소관</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static8 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">위안</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static7 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">소기</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static10 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">운송</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static12 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '56px', height: '22px' }}><Typography variant="body2">소관보조</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdEduSchedule ? undefined : 'none' }}><Paper sx={{ width: '992px', height: '510px', width: '100%', height: 'auto', minHeight: '510px' }}><DataGridWrapper rows={hook.ds_oEduScheduleListTmp} columns={columns_gdEduSchedule} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxJibu ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '88px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1021MEduScheduleStatData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdTitle ? undefined : 'none' }}><Paper sx={{ width: '84px', height: '74px', width: '100%', height: 'auto', minHeight: '74px' }}><DataGridWrapper rows={hook.ds_oTitle} columns={columns_gdTitle} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1021MEduScheduleStat;

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