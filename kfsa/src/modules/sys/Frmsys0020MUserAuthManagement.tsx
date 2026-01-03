// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmsys0020MUserAuthManagement } from './useFrmsys0020MUserAuthManagement';
import * as Frmsys0020MUserAuthManagementData from './Frmsys0020MUserAuthManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

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
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.btnSearchUser_OnClick}></Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "34px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tvMenu ? undefined : 'none' }}><Box sx={{ width: '312px', height: '554px', border: '1px dashed grey' }}>Unknown: TreeView</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbDeleteUserAuthYn ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">권한삭제여부</Typography></Box></Box><Box sx={{ display: hook.isVisible_chkDeleteUserAuthYn ? undefined : 'none' }}><Box sx={{ width: '256px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_btnDeleteKemsAuth ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnDeleteKemsAuth_OnClick} sx={{ width: '85px', height: '24px' }}>권한삭제</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdUserAuth ? undefined : 'none' }}><Paper sx={{ width: '476px', height: '538px', width: '100%', height: 'auto', minHeight: '538px' }}><DataGridWrapper rows={hook.ds_ioUserAuth} columns={columns_gdUserAuth} /></Paper></Box></Stack>

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