// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0291PBookPrintDetail } from './useFrmtraining0291PBookPrintDetail';
import * as Frmtraining0291PBookPrintDetailData from './Frmtraining0291PBookPrintDetailData';

export const Frmtraining0291PBookPrintDetail = () => {
    const hook = useFrmtraining0291PBookPrintDetail();
    const columns_gdList = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TBPREGDATE', headerName: '등록일', width: 134 },
        { field: 'REGCNT', headerName: '엑셀업로드 건수', width: 114 },
        { field: 'TBPMGNO', headerName: '관리번호', width: 0 },
    ];
    const columns_gdDetail = [
        { field: 'TBPSEQ', headerName: '순번', width: 32 },
        { field: 'TBPCOL1', headerName: '등기번호', width: 98 },
        { field: 'TBPCOL2', headerName: '상태', width: 33 },
        { field: 'TBPCOL3', headerName: '배달우체국', width: 76 },
        { field: 'TBPCOL4', headerName: '수취인', width: 52 },
        { field: 'TBPCOL8', headerName: '전화번호', width: 69 },
        { field: 'TBPCOL9', headerName: '상품명', width: 90 },
        { field: 'TBPCOL10', headerName: '공급지', width: 71 },
        { field: 'TJBOOKREGNO', headerName: '등록된등기번호', width: 101 },
        { field: 'REGYN', headerName: '등록여부', width: 60 },
        { field: 'TOTRAININGORDER', headerName: '접수회차', width: 60 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'TOMGNO', headerName: '강습회차관리번호', width: 0 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
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
                        <DataGridWrapper rows={hook.ds_olist} columns={columns_gdList} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_olistDetail} columns={columns_gdDetail} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0291PBookPrintDetail;

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