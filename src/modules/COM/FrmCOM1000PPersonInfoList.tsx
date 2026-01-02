// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM1000PPersonInfoList } from './useFrmCOM1000PPersonInfoList';
import * as FrmCOM1000PPersonInfoListData from './FrmCOM1000PPersonInfoListData';

export const FrmCOM1000PPersonInfoList = () => {
    const hook = useFrmCOM1000PPersonInfoList();
    const columns_gdTrainingPerson = [
        { field: 'TPNM', headerName: '성명', width: 61 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 118 },
        { field: 'TPHPTEL', headerName: '휴대폰', width: 118 },
        { field: 'PERSONKEY', headerName: '개인식별번호', width: 102 },
        { field: 'TPAUTHYN', headerName: '실명인증', width: 65 },
        { field: 'DIYN', headerName: '주민번호대체키', width: 110 },
        { field: 'TPADDR_A', headerName: '주소', width: 307 },
        { field: 'RECENTLYDATE', headerName: '최근수정일', width: 89 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnSelect_OnClick}>선택</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>검색
1</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_Search}>조 회</Button></Grid><Grid item xs={12} md={2}><Box>검색
2</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_SearchKey}>조 회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>휴대폰</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oTrainingPerson} columns={columns_gdTrainingPerson} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM1000PPersonInfoList;

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