// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmsys0056MDeliveryCodeManagement } from './useFrmsys0056MDeliveryCodeManagement';
import * as Frmsys0056MDeliveryCodeManagementData from './Frmsys0056MDeliveryCodeManagementData';

export const Frmsys0056MDeliveryCodeManagement = () => {
    const hook = useFrmsys0056MDeliveryCodeManagement();
    const columns_gdExcel = [
        { field: 'RZIPCD', headerName: '고객바코드', width: 119 },
        { field: 'DeliveryCode', headerName: '집배코드', width: 543 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_ExcelLoad}>엑셀파일로딩</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>집배코드
등록대상
추출</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmsys0056MDeliveryCodeManagementData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>고객구분</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmsys0056MDeliveryCodeManagementData.ds_ds_ioMemberGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>엑셀 자료</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oRoadList} columns={columns_gdExcel} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSave_OnClick}>집배코드 적용(F4)</Button></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmsys0056MDeliveryCodeManagement;

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