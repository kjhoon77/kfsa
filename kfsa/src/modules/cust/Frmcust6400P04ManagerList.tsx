// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6400P04ManagerList } from './useFrmcust6400P04ManagerList';
import * as Frmcust6400P04ManagerListData from './Frmcust6400P04ManagerListData';

export const Frmcust6400P04ManagerList = () => {
    const hook = useFrmcust6400P04ManagerList();
    const columns_gdManager = [
        { field: 'id_seq', headerName: '순번', width: 36, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1, sortable: false },
        { field: 'MANAGE_ENTRPS_VRSC_AT', headerName: '대행', width: 36 },
        { field: 'NM', headerName: '선임자명', width: 90 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 90 },
        { field: 'APNT_DE_8', headerName: '선임일자', width: 90 },
        { field: 'RLSOFC_DE_8', headerName: '해임일자', width: 90 },
        { field: 'MOBLPHON', headerName: '휴대폰', width: 90 },
        { field: 'OFCPS', headerName: '직위', width: 100 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">선임자정보팝업</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "34px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdManager ? undefined : 'none' }}><Paper sx={{ width: '644px', height: '394px', width: '100%', height: 'auto', minHeight: '394px' }}><DataGridWrapper rows={hook.ds_oFireManagerInfo} columns={columns_gdManager} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6400P04ManagerList;

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