// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM3010SPOS } from './useFrmCOM3010SPOS';
import * as FrmCOM3010SPOSData from './FrmCOM3010SPOSData';

export const FrmCOM3010SPOS = () => {
    const hook = useFrmCOM3010SPOS();
    const columns_Grid1 = [
        { field: 'PMYEAR', headerName: 'PMYEAR', width: 80 },
        { field: 'PMMGNO', headerName: 'PMMGNO', width: 80 },
        { field: 'STATUS', headerName: 'STATUS', width: 57 },
        { field: 'LGD_PAN', headerName: 'LGD_PAN', width: 207 },
        { field: 'LGD_CASHRECEIPTYN', headerName: 'LGD_CASHRECEIPTYN', width: 80 },
        { field: 'CASHFLAG', headerName: 'CASHFLAG', width: 80 },
    ];
    const columns_Grid0 = [
        { field: 'MI_PMYEAR', headerName: 'MI_PMYEAR', width: 80 },
        { field: 'MI_PMMGNO', headerName: 'MI_PMMGNO', width: 80 },
        { field: 'MI_PRMGUBUN', headerName: 'MI_PRMGUBUN', width: 80 },
        { field: 'LGD_RESPCODE', headerName: 'LGD_RESPCODE', width: 80 },
        { field: 'LGD_CASHRECEIPTNUM', headerName: 'LGD_CASHRECEIPTNUM', width: 80 },
        { field: 'LGD_RESPMSG', headerName: 'LGD_RESPMSG', width: 80 },
        { field: 'LGD_OID', headerName: 'LGD_OID', width: 80 },
        { field: 'LGD_TID', headerName: 'LGD_TID', width: 80 },
        { field: 'LGD_AMOUNT', headerName: 'LGD_AMOUNT', width: 80 },
        { field: 'LGD_ACCOUNTNUM', headerName: 'LGD_ACCOUNTNUM', width: 80 },
        { field: 'LGD_FINANCECODE', headerName: 'LGD_FINANCECODE', width: 80 },
        { field: 'LGD_CASFLAG', headerName: 'LGD_CASFLAG', width: 80 },
        { field: 'LGD_FINANCENAME', headerName: 'LGD_FINANCENAME', width: 80 },
        { field: 'MI_RSCODE', headerName: 'MI_RSCODE', width: 80 },
        { field: 'MI_RSMSG', headerName: 'MI_RSMSG', width: 80 },
    ];
    const columns_Grid2 = [
        { field: 'MI_PMYEAR', headerName: 'MI_PMYEAR', width: 80 },
        { field: 'MI_PMMGNO', headerName: 'MI_PMMGNO', width: 80 },
        { field: 'MI_PRMGUBUN', headerName: 'MI_PRMGUBUN', width: 80 },
        { field: 'LGD_RESPCODE', headerName: 'LGD_RESPCODE', width: 80 },
        { field: 'LGD_CASHRECEIPTNUM', headerName: 'LGD_CASHRECEIPTNUM', width: 80 },
        { field: 'LGD_RESPMSG', headerName: 'LGD_RESPMSG', width: 80 },
        { field: 'LGD_OID', headerName: 'LGD_OID', width: 80 },
        { field: 'LGD_TID', headerName: 'LGD_TID', width: 80 },
        { field: 'LGD_AMOUNT', headerName: 'LGD_AMOUNT', width: 80 },
        { field: 'LGD_ACCOUNTNUM', headerName: 'LGD_ACCOUNTNUM', width: 80 },
        { field: 'LGD_FINANCECODE', headerName: 'LGD_FINANCECODE', width: 80 },
        { field: 'LGD_CASFLAG', headerName: 'LGD_CASFLAG', width: 80 },
        { field: 'LGD_FINANCENAME', headerName: 'LGD_FINANCENAME', width: 80 },
        { field: 'MI_RSCODE', headerName: 'MI_RSCODE', width: 80 },
        { field: 'MI_RSMSG', headerName: 'MI_RSMSG', width: 80 },
    ];
    const columns_Grid3 = [
        { field: 'Respcode', headerName: 'Respcode', width: 80 },
        { field: 'Trancode', headerName: 'Trancode', width: 80 },
        { field: 'Mid', headerName: 'Mid', width: 80 },
        { field: 'Oid', headerName: 'Oid', width: 80 },
        { field: 'Tamt', headerName: 'Tamt', width: 80 },
        { field: 'Tran_serial', headerName: 'Tran_serial', width: 80 },
        { field: 'Trandate', headerName: 'Trandate', width: 80 },
        { field: 'Financecode', headerName: 'Financecode', width: 80 },
        { field: 'Financename', headerName: 'Financename', width: 80 },
        { field: 'Cardno', headerName: 'Cardno', width: 80 },
        { field: 'Halbu', headerName: 'Halbu', width: 80 },
        { field: 'Authno', headerName: 'Authno', width: 80 },
        { field: 'Stlinst', headerName: 'Stlinst', width: 80 },
        { field: 'Reqinst', headerName: 'Reqinst', width: 80 },
        { field: 'Merno', headerName: 'Merno', width: 80 },
        { field: 'Cardgubun', headerName: 'Cardgubun', width: 80 },
        { field: 'Giftchange', headerName: 'Giftchange', width: 80 },
        { field: 'Signpath', headerName: 'Signpath', width: 80 },
        { field: 'Msg', headerName: 'Msg', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">결제(POS)DIV</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.Button0_OnClick}>결제요청</Button>
<Button variant="contained"  onClick={hook.Button1_OnClick}>승인확인</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "27px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid1 ? undefined : 'none' }}><Paper sx={{ width: '590px', height: '98px', width: '100%', height: 'auto', minHeight: '98px' }}><DataGridWrapper rows={hook.ds_ioPosInput} columns={columns_Grid1} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '104px', height: '23px' }}><Typography variant="body2">ds_ioPosOutput</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid0 ? undefined : 'none' }}><Paper sx={{ width: '590px', height: '106px', width: '100%', height: 'auto', minHeight: '106px' }}><DataGridWrapper rows={hook.ds_ioPosOutput} columns={columns_Grid0} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '180px', height: '23px' }}><Typography variant="body2">ds_ioPosOutputJVM(Temp)</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid2 ? undefined : 'none' }}><Paper sx={{ width: '590px', height: '106px', width: '100%', height: 'auto', minHeight: '106px' }}><DataGridWrapper rows={hook.ds_ioPosOutputJVM} columns={columns_Grid2} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '156px', height: '23px' }}><Typography variant="body2">ds_ioOfflinePosOutput</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid3 ? undefined : 'none' }}><Paper sx={{ width: '591px', height: '118px', width: '100%', height: 'auto', minHeight: '118px' }}><DataGridWrapper rows={hook.ds_grid} columns={columns_Grid3} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM3010SPOS;

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