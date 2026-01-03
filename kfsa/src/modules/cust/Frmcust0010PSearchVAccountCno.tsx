// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0010PSearchVAccountCno } from './useFrmcust0010PSearchVAccountCno';
import * as Frmcust0010PSearchVAccountCnoData from './Frmcust0010PSearchVAccountCnoData';

export const Frmcust0010PSearchVAccountCno = () => {
    const hook = useFrmcust0010PSearchVAccountCno();
    const columns_gdVAccount = [
        { field: 'GTDEPTNM', headerName: '지부', width: 63 },
        { field: 'CNO', headerName: '관리번호', width: 63 },
        { field: 'CGROUPNICKNM', headerName: '직능', width: 69 },
        { field: 'BNM', headerName: '업체명', width: 136 },
        { field: 'FMNM', headerName: '선임자', width: 67 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ ml: "9px", minWidth: "382px" }}><Box sx={{ display: hook.isVisible_lbNotice ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '382px', height: '32px' }}><Typography variant="body2"></Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '211px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>가상계좌</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"  startIcon={<Search />} onClick={hook.lfn_Search} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdVAccount ? undefined : 'none' }}><Paper sx={{ width: '384px', height: '119px', width: '100%', height: 'auto', minHeight: '119px' }}><DataGridWrapper rows={hook.ds_ioVAccountCno} columns={columns_gdVAccount} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static9 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '365px', height: '19px' }}><Typography variant="body2">※ 리스트에서 더블클릭시 고객정보관리에서 상세 조회됩니다.</Typography></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0010PSearchVAccountCno;

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