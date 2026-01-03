// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0001MProfMgmtList5 } from './useFrmprofes0001MProfMgmtList5';
import * as Frmprofes0001MProfMgmtList5Data from './Frmprofes0001MProfMgmtList5Data';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0001MProfMgmtList5 = () => {
    const hook = useFrmprofes0001MProfMgmtList5();
    const columns_gdList = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTDEPTNM', headerName: '지부', width: 127 },
        { field: 'MQTIMECOUNT', headerName: '교수 자격별 기준 미준수', width: 70 },
        { field: 'LPPFNM', headerName: '성명', width: 100 },
        { field: 'MQ_REMARK', headerName: '자격유지시간', width: 110 },
    ];
    const columns_gdList2 = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTDEPTNM', headerName: '지부', width: 127 },
        { field: 'CB_CNT', headerName: '강의시간 배정 위반', width: 134 },
        { field: 'CA_CNT', headerName: '기타교수 > 교수 ', width: 120 },
        { field: 'BA_CNT', headerName: '부교수 > 교수', width: 120 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Detailed Info</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '190px', height: '24px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '116px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnToExcel ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Save />} onClick={hook.btnToExcel_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>엑셀로 저장</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '484px', height: '587px', width: '100%', height: 'auto', minHeight: '587px' }}><DataGridWrapper rows={hook.ds_ioList} columns={columns_gdList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>List</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnToExcel2 ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Save />} onClick={hook.btnToExcel2_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>엑셀로 저장</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList2 ? undefined : 'none' }}><Paper sx={{ width: '600px', height: '587px', width: '100%', height: 'auto', minHeight: '587px' }}><DataGridWrapper rows={hook.ds_ioList2} columns={columns_gdList2} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0001MProfMgmtList5;

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