// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu0402PExamOrderChange } from './useFrmspcledu0402PExamOrderChange';
import * as Frmspcledu0402PExamOrderChangeData from './Frmspcledu0402PExamOrderChangeData';

export const Frmspcledu0402PExamOrderChange = () => {
    const hook = useFrmspcledu0402PExamOrderChange();
    const columns_gdExamOrder = [
        { field: 'EOMGGTMGNO', headerName: '지부', width: 66 },
        { field: 'EOYEAR', headerName: '년도', width: 38 },
        { field: 'EOTCCOURSECD', headerName: '직능', width: 146 },
        { field: 'EOEXAMORDER', headerName: '회차', width: 37 },
        { field: 'EOSEATCNT', headerName: '좌석수', width: 47 },
        { field: 'EOJUBSUCNT', headerName: '현인원수', width: 62 },
        { field: 'EOEXAMDATE', headerName: '시험일', width: 90 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>변경가능회차조회(F2)</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Save}>회차변경(F4)</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "34px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdExamOrder ? undefined : 'none' }}><Paper sx={{ width: '556px', height: '402px', width: '100%', height: 'auto', minHeight: '402px' }}><DataGridWrapper rows={hook.ds_oExamOrder} columns={columns_gdExamOrder} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbBefore ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '230px', height: '114px' }}><Typography variant="body2"> 변경 전 </Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '222px', height: '22px', display: 'flex', alignItems: 'center', ml: '570px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '222px', height: '22px', display: 'flex', alignItems: 'center', ml: '570px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '222px', height: '22px', display: 'flex', alignItems: 'center', ml: '570px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년도</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '222px', height: '22px', display: 'flex', alignItems: 'center', ml: '570px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회차</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "32px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbAfter ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '230px', height: '114px' }}><Typography variant="body2"> 변경 후 </Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '223px', height: '22px', display: 'flex', alignItems: 'center', ml: '570px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_oExamOrder?.EOMGGTMGNO || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmspcledu0402PExamOrderChangeData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '223px', height: '22px', display: 'flex', alignItems: 'center', ml: '570px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_oExamOrder?.EOTCCOURSECD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmspcledu0402PExamOrderChangeData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '222px', height: '22px', display: 'flex', alignItems: 'center', ml: '570px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년도</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oExamOrder?.EOYEAR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '222px', height: '22px', display: 'flex', alignItems: 'center', ml: '570px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회차</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oExamOrder?.EOEXAMORDER || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu0402PExamOrderChange;

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