// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0024PTrainingJubsuHistList } from './useFrmtraining0024PTrainingJubsuHistList';
import * as Frmtraining0024PTrainingJubsuHistListData from './Frmtraining0024PTrainingJubsuHistListData';

export const Frmtraining0024PTrainingJubsuHistList = () => {
    const hook = useFrmtraining0024PTrainingJubsuHistList();
    const columns_gdJubsuInfo = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'MGJIBUCD', headerName: '지부', width: 58 },
        { field: 'YEAR', headerName: '년도', width: 36 },
        { field: 'COURSEMUNJECD', headerName: '직능', width: 134 },
        { field: 'TORDER', headerName: '회차', width: 31 },
        { field: 'JUBSUNO', headerName: '접수번호', width: 58 },
        { field: 'TPNM', headerName: '성명', width: 58 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 94 },
        { field: 'PASSDATE', headerName: '수료일자', width: 83 },
        { field: 'LASTSUNAPGUBUN', headerName: '결제', width: 47 },
        { field: 'FIRSTREGDATE', headerName: '접수일자', width: 83 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnSelect_OnClick}>선택</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdJubsuInfo ? undefined : 'none' }}><Paper sx={{ width: '736px', height: '382px', width: '100%', height: 'auto', minHeight: '382px' }}><DataGridWrapper rows={hook.ds_oJubsuAllInfo} columns={columns_gdJubsuInfo} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0024PTrainingJubsuHistList;

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