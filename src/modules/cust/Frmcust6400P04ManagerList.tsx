// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6400P04ManagerList } from './useFrmcust6400P04ManagerList';
import * as Frmcust6400P04ManagerListData from './Frmcust6400P04ManagerListData';

export const Frmcust6400P04ManagerList = () => {
    const hook = useFrmcust6400P04ManagerList();
    const columns_gdManager = [
        { field: 'id', headerName: '순번', width: 36, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
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
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oFireManagerInfo} columns={columns_gdManager} />
                    </Paper>
                </Grid></Grid>

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