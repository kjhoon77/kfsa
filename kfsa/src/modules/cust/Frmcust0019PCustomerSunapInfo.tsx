// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0019PCustomerSunapInfo } from './useFrmcust0019PCustomerSunapInfo';
import * as Frmcust0019PCustomerSunapInfoData from './Frmcust0019PCustomerSunapInfoData';

export const Frmcust0019PCustomerSunapInfo = () => {
    const hook = useFrmcust0019PCustomerSunapInfo();
    const columns_gdSunap = [
        { field: 'id', headerName: '순번', width: 30, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'SUNAPYEAR', headerName: '년월', width: 97 },
        { field: 'MEMBERGUBUNNM', headerName: '구분', width: 47 },
        { field: 'SETLMGUBUNNM', headerName: '결제', width: 44 },
        { field: 'PMRESULT', headerName: 'POS', width: 44 },
        { field: 'CFGUBUN', headerName: '결제구분', width: 85 },
        { field: 'CFGUBUNCDNM', headerName: '결제방법', width: 134 },
        { field: 'SUNAPFEE', headerName: '금액', width: 64 },
        { field: 'PROCDATE', headerName: '처리일자', width: 78 },
        { field: 'PVINFO', headerName: '계산서', width: 55 },
        { field: 'PROCGTNM', headerName: '처리지부', width: 65 },
        { field: 'CFREGNM', headerName: '처리자', width: 65 },
        { field: 'MGGTNM', headerName: '관리지부', width: 65 },
        { field: 'POSGTNM', headerName: 'POS지부', width: 65 },
        { field: 'PMPCORDERNO', headerName: '주문번호', width: 102 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "45px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxMonthGubun ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '78px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0019PCustomerSunapInfoData.ds_ds_oMonthGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px' }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdSunap ? undefined : 'none' }}><Paper sx={{ width: '684px', height: '366px', width: '100%', height: 'auto', minHeight: '366px' }}><DataGridWrapper rows={hook.ds_oSunap} columns={columns_gdSunap} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0019PCustomerSunapInfo;

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