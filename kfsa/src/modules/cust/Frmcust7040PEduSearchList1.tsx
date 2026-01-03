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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "66px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbJubsu ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '300px', height: '22px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px' }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "10px", minWidth: "786px" }}><Box sx={{ display: hook.isVisible_gdCommonCode3 ? undefined : 'none' }}><Paper sx={{ width: '786px', height: '522px', width: '100%', height: 'auto', minHeight: '522px' }}><DataGridWrapper rows={hook.ds_ioTrainingOrder3} columns={columns_gdCommonCode3} /></Paper></Box><Box sx={{ display: hook.isVisible_gdCommonCode2 ? undefined : 'none' }}><Paper sx={{ width: '786px', height: '522px', width: '100%', height: 'auto', minHeight: '522px' }}><DataGridWrapper rows={hook.ds_ioTrainingOrder2} columns={columns_gdCommonCode2} /></Paper></Box><Box sx={{ display: hook.isVisible_gdCommonCode1 ? undefined : 'none' }}><Paper sx={{ width: '786px', height: '522px', width: '100%', height: 'auto', minHeight: '522px' }}><DataGridWrapper rows={hook.ds_ioTrainingOrder1} columns={columns_gdCommonCode1} /></Paper></Box><Box sx={{ display: hook.isVisible_gdCommonCode4 ? undefined : 'none' }}><Paper sx={{ width: '786px', height: '522px', width: '100%', height: 'auto', minHeight: '522px' }}><DataGridWrapper rows={hook.ds_ioTrainingOrder4} columns={columns_gdCommonCode4} /></Paper></Box></Box></Stack>

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