// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
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
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.Button0_OnClick}>결제요청</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>ds_ioPosOutput</Box></Grid></Grid>

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