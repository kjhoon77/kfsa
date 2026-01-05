// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM3011SPOS } from './useFrmCOM3011SPOS';
import * as FrmCOM3011SPOSData from './FrmCOM3011SPOSData';

export const FrmCOM3011SPOS = () => {
    const hook = useFrmCOM3011SPOS();
    const columns_Grid1 = [
        { field: 'PMYEAR', headerName: 'PMYEAR', width: 80 },
        { field: 'PMMGNO', headerName: 'PMMGNO', width: 80 },
        { field: 'PMPCORDERNO', headerName: 'PMPCORDERNO', width: 119 },
        { field: 'STATUS', headerName: 'STATUS', width: 57 },
        { field: 'LGD_CASHRECEIPTYN', headerName: 'LGD_CASHRECEIPTYN', width: 126 },
        { field: 'CASHFLAG', headerName: 'CASHFLAG', width: 100 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">가상계좌할당(세틀뱅크)DIV</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.Button0_OnClick}>결제요청</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "27px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid1 ? undefined : 'none' }}><Paper sx={{ width: '590px', height: '98px', width: '100%', height: 'auto', minHeight: '98px' }}><DataGridWrapper rows={hook.ds_ioPosInput} columns={columns_Grid1} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '104px', height: '23px' }}><Typography variant="body2">ds_ioPosOutput</Typography></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM3011SPOS;

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