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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '72px' }}><Typography variant="body2">검색
1</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Search} sx={{ width: '85px', height: '69px', whiteSpace: "nowrap" }}>조 회</Button></Box><Box sx={{ display: hook.isVisible_Static6 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '72px' }}><Typography variant="body2">검색
2</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSearchKey ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_SearchKey} sx={{ width: '85px', height: '69px', whiteSpace: "nowrap" }}>조 회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '225px', height: '22px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 116, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>휴대폰</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdTrainingPerson ? undefined : 'none' }}><Paper sx={{ width: '842px', height: '411px', width: '100%', height: 'auto', minHeight: '411px' }}><DataGridWrapper rows={hook.ds_oTrainingPerson} columns={columns_gdTrainingPerson} /></Paper></Box></Stack>

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