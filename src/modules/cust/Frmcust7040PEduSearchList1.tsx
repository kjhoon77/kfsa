// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust7040PEduSearchList1 } from './useFrmcust7040PEduSearchList1';
import * as Frmcust7040PEduSearchList1Data from './Frmcust7040PEduSearchList1Data';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust7040PEduSearchList1 = () => {
    const hook = useFrmcust7040PEduSearchList1();
    const columns_gdCommonCode3 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTTEAMNM', headerName: '타지부', width: 76 },
        { field: 'MEMNUM', headerName: '관리번호', width: 76 },
        { field: 'BNM', headerName: '업체명3', width: 240 },
        { field: 'EPPERSONNM', headerName: '성명', width: 85 },
        { field: 'ESYEAR', headerName: '교육년도', width: 60 },
        { field: 'ESDATE', headerName: '교육일자', width: 75 },
        { field: 'GTTEAMNM', headerName: '처리지부', width: 90 },
        { field: 'PNM', headerName: '처리자', width: 90 },
    ];
    const columns_gdCommonCode2 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTTEAMNM', headerName: '타지부', width: 76 },
        { field: 'MEMNUM', headerName: '관리번호', width: 76 },
        { field: 'BNM', headerName: '업체명2', width: 240 },
        { field: 'EPPERSONNM', headerName: '성명', width: 85 },
        { field: 'ESYEAR', headerName: '교육년도', width: 60 },
        { field: 'ESDATE', headerName: '교육일자', width: 75 },
        { field: 'GTTEAMNM', headerName: '처리지부', width: 90 },
        { field: 'PNM', headerName: '처리자', width: 90 },
    ];
    const columns_gdCommonCode1 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTTEAMNM', headerName: '타지부', width: 117 },
        { field: 'MEMNUM', headerName: '관리번호', width: 76 },
        { field: 'BNM', headerName: '업체명1', width: 240 },
        { field: 'EPPERSONNM', headerName: '성명', width: 85 },
        { field: 'ESYEAR', headerName: '교육년도', width: 60 },
        { field: 'ESDATE', headerName: '교육일자', width: 75 },
        { field: 'PNM', headerName: '처리자', width: 90 },
    ];
    const columns_gdCommonCode4 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'MEMNUM', headerName: '관리번호', width: 76 },
        { field: 'BNM', headerName: '업체명4', width: 240 },
        { field: 'EPPERSONNM', headerName: '성명', width: 85 },
        { field: 'ESYEAR', headerName: '교육년도', width: 60 },
        { field: 'ESDATE', headerName: '교육일자', width: 75 },
        { field: 'GTTEAMNM', headerName: '처리지부', width: 90 },
        { field: 'PNM', headerName: '처리자', width: 90 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_MULTI_SORT"><Button variant="outlined" size="small" color="primary" onClick={hook.btnMutilSort_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Sort fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioTrainingOrder3} columns={columns_gdCommonCode3} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioTrainingOrder2} columns={columns_gdCommonCode2} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioTrainingOrder1} columns={columns_gdCommonCode1} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioTrainingOrder4} columns={columns_gdCommonCode4} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust7040PEduSearchList1;

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