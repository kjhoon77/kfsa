// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM1050PCustomerList } from './useFrmCOM1050PCustomerList';
import * as FrmCOM1050PCustomerListData from './FrmCOM1050PCustomerListData';

export const FrmCOM1050PCustomerList = () => {
    const hook = useFrmCOM1050PCustomerList();
    const columns_gdCustomer = [
        { field: 'GTDEPTNM', headerName: '지부', width: 61 },
        { field: 'CNO', headerName: '관리번호', width: 61 },
        { field: 'CNM', headerName: '직능', width: 138 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 139 },
        { field: 'FMNM', headerName: '성명', width: 61 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 89 },
        { field: 'ADDR', headerName: '주소', width: 307 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnSelect_OnClick}>선택</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "34px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdCustomer ? undefined : 'none' }}><Paper sx={{ width: '692px', height: '338px', width: '100%', height: 'auto', minHeight: '338px' }}><DataGridWrapper rows={hook.ds_oCustomer} columns={columns_gdCustomer} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM1050PCustomerList;

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