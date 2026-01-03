// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0170MTrainingSettlementTotal } from './useFrmtraining0170MTrainingSettlementTotal';
import * as Frmtraining0170MTrainingSettlementTotalData from './Frmtraining0170MTrainingSettlementTotalData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining0170MTrainingSettlementTotal = () => {
    const hook = useFrmtraining0170MTrainingSettlementTotal();
    const columns_gdTrainingSettlementTotal = [
        { field: 'GTDEPTNM', headerName: '지부', width: 70 },
        { field: 'TCCOURSENICK', headerName: '직능', width: 100 },
        { field: 'COURSEGUBUN', headerName: '과정', width: 50 },
        { field: 'MUNJEGUBUN', headerName: '일반/면제', width: 69 },
        { field: 'TSTINCOME', headerName: '수입금액(A-B)', width: 114 },
        { field: 'TSTPASSAMT', headerName: '수료자수입금액', width: 120 },
        { field: 'TSTBUBUNAMT', headerName: '결강자수입금액', width: 120 },
        { field: 'TSTSUNABAMT', headerName: '수납(A)', width: 132 },
        { field: 'TSTREPAYAMT', headerName: '환불(B)', width: 120 },
        { field: 'TSTBUBUNREPAYAMT', headerName: '결강자환불금액', width: 120 },
        { field: 'TSTAFBUBUNREPAYAMT', headerName: '결강자환불예정금액', width: 134 },
        { field: 'MUNJE', headerName: '비고', width: 60 },
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '296px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>과정</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0170MTrainingSettlementTotalData.ds_ds_ioCourseGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '240px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>일반/면제</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0170MTrainingSettlementTotalData.ds_ds_ioMunjeGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '174px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>집계일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '180px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdTrainingSettlementTotal ? undefined : 'none' }}><Paper sx={{ width: '832px', height: '489px', width: '100%', height: 'auto', minHeight: '489px' }}><DataGridWrapper rows={hook.ds_ioTrainingSettlementTotal} columns={columns_gdTrainingSettlementTotal} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0170MTrainingSettlementTotal;

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