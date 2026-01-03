// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcti0010PCallTransfer } from './useFrmcti0010PCallTransfer';
import * as Frmcti0010PCallTransferData from './Frmcti0010PCallTransferData';

export const Frmcti0010PCallTransfer = () => {
    const hook = useFrmcti0010PCallTransfer();
    const columns_gdDeptList = [
        { field: 'S_GTDEPTNM', headerName: '부서', width: 120 },
        { field: 'GTDEPTNM', headerName: '과', width: 120 },
    ];
    const columns_gdUserList = [
        { field: 'id', headerName: '즐겨찾기', width: 0, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'PPERSONNM', headerName: '담당자', width: 68 },
        { field: 'PPOSITNNM', headerName: '직위', width: 58 },
        { field: 'IPDN', headerName: '내선번호', width: 62 },
        { field: 'IPSTATE', headerName: '상태', width: 64 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnSelect_OnClick}>호전환(즉시전달)</Button>
<Button variant="contained"  onClick={hook.btnSelect3_OnClick}>호전환(통화후)</Button>
<Button variant="contained" startIcon={<Refresh />} onClick={hook.btnSelect3Cancel_OnClick}>호전환취소</Button>
<Button variant="contained"  onClick={hook.btnSelect3Transfer_OnClick}>호전환전달</Button>
<Button variant="contained"  onClick={hook.btnCall_OnClick}>내선전환</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.btnSearch_OnClick}>조회</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "74px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbJubsu ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">부서 담당자 현황</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdDeptList ? undefined : 'none' }}><Paper sx={{ width: '264px', height: '434px', width: '100%', height: 'auto', minHeight: '434px' }}><DataGridWrapper rows={hook.ds_oDept} columns={columns_gdDeptList} /></Paper></Box><Box sx={{ display: hook.isVisible_btnRe ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnRe_OnClick} sx={{ width: '55px', height: '24px', whiteSpace: "nowrap" }}>재조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdUserList ? undefined : 'none' }}><Paper sx={{ width: '392px', height: '402px', width: '100%', height: 'auto', minHeight: '402px' }}><DataGridWrapper rows={hook.ds_oUser} columns={columns_gdUserList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcti0010PCallTransfer;

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