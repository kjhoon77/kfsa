// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1111PTaEduSearchList } from './useFrmcust1111PTaEduSearchList';
import * as Frmcust1111PTaEduSearchListData from './Frmcust1111PTaEduSearchListData';

export const Frmcust1111PTaEduSearchList = () => {
    const hook = useFrmcust1111PTaEduSearchList();
    const columns_gdCommonCode1 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTTEAMNM', headerName: '타지부', width: 117 },
        { field: 'MEMNUM', headerName: '관리번호', width: 76 },
        { field: 'BNM', headerName: '업체명', width: 240 },
        { field: 'EPPERSONNM', headerName: '성명', width: 85 },
        { field: 'ESYEAR', headerName: '교육년도', width: 60 },
        { field: 'ESDATE', headerName: '교육일자', width: 80 },
        { field: 'PNM', headerName: '처리자', width: 90 },
    ];
    const columns_gdCommonCode2 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTTEAMNM', headerName: '현지부', width: 76 },
        { field: 'MEMNUM', headerName: '관리번호', width: 76 },
        { field: 'BNM', headerName: '업체명', width: 240 },
        { field: 'EPPERSONNM', headerName: '성명', width: 85 },
        { field: 'ESYEAR', headerName: '교육년도', width: 60 },
        { field: 'ESDATE', headerName: '교육일자', width: 80 },
        { field: 'GTTEAMNM', headerName: '처리지부', width: 90 },
        { field: 'PNM', headerName: '처리자', width: 90 },
    ];
    const columns_gdCommonCode3 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTTEAMNM', headerName: '현지부', width: 76 },
        { field: 'MEMNUM', headerName: '관리번호', width: 76 },
        { field: 'BNM', headerName: '업체명', width: 240 },
        { field: 'EPPERSONNM', headerName: '성명', width: 85 },
        { field: 'ESYEAR', headerName: '교육년도', width: 60 },
        { field: 'ESDATE', headerName: '교육일자', width: 80 },
        { field: 'GTTEAMNM2', headerName: '처리지부', width: 90 },
        { field: 'PNM', headerName: '처리자', width: 90 },
    ];
    const columns_gdCommonCode4 = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'MEMNUM', headerName: '관리번호', width: 76 },
        { field: 'BNM', headerName: '업체명', width: 240 },
        { field: 'EPPERSONNM', headerName: '성명', width: 85 },
        { field: 'ESYEAR', headerName: '교육년도', width: 60 },
        { field: 'ESDATE', headerName: '교육일자', width: 80 },
        { field: 'GTTEAMNM2', headerName: '처리지부', width: 90 },
        { field: 'PNM', headerName: '처리자', width: 90 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnAttend_OnClick}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={7}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}></Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained"></Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioTrainingOrder1} columns={columns_gdCommonCode1} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioTrainingOrder2} columns={columns_gdCommonCode2} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioTrainingOrder3} columns={columns_gdCommonCode3} />
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
export default Frmcust1111PTaEduSearchList;

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