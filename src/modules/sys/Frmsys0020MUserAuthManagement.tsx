// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmsys0020MUserAuthManagement } from './useFrmsys0020MUserAuthManagement';
import * as Frmsys0020MUserAuthManagementData from './Frmsys0020MUserAuthManagementData';

export const Frmsys0020MUserAuthManagement = () => {
    const hook = useFrmsys0020MUserAuthManagement();
    const columns_gdUserAuth = [
        { field: 'MMENUNM', headerName: '메뉴명', width: 172 },
        { field: 'USE_YN', headerName: '사용유무', width: 100 },
        { field: 'UAAUTH', headerName: '읽기쓰기권한', width: 100 },
        { field: 'UAAUTH', headerName: '읽기권한', width: 100 },
        { field: 'MURL', headerName: 'URL', width: 205 },
        { field: 'MORDERSEQ', headerName: '정렬순서', width: 75 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained"  onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnSearchUser_OnClick}></Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>권한삭제여부</Box></Grid><Grid item xs={12} md={3}><Box>교육종합관리시스템 사용권한 삭제여부</Box></Grid><Grid item xs={12} md={2}><Button variant="contained">권한삭제</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioUserAuth} columns={columns_gdUserAuth} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmsys0020MUserAuthManagement;

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