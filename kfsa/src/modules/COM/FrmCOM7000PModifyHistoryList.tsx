// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM7000PModifyHistoryList } from './useFrmCOM7000PModifyHistoryList';
import * as FrmCOM7000PModifyHistoryListData from './FrmCOM7000PModifyHistoryListData';

export const FrmCOM7000PModifyHistoryList = () => {
    const hook = useFrmCOM7000PModifyHistoryList();
    const columns_gdModifyHistory = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'MHGUBUNNM', headerName: '구분', width: 50 },
        { field: 'MHPROCDATE', headerName: '처리일시', width: 137 },
        { field: 'PDEPTNM', headerName: '처리지부', width: 68 },
        { field: 'PPERSONNM', headerName: '처리자', width: 60 },
        { field: 'MHCOLUMN', headerName: '변경항목', width: 80 },
        { field: 'MHBEFOREDATA', headerName: '변경 전', width: 145 },
        { field: 'MHAFTERDATA', headerName: '변경 후', width: 145 },
        { field: 'MHPROCIP', headerName: '처리자IP', width: 95 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdModifyHistory ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '382px', width: '100%', height: 'auto', minHeight: '382px' }}><DataGridWrapper rows={hook.ds_oModifyHistory} columns={columns_gdModifyHistory} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM7000PModifyHistoryList;

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