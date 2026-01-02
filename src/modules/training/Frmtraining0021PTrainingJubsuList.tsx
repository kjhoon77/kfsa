// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0021PTrainingJubsuList } from './useFrmtraining0021PTrainingJubsuList';
import * as Frmtraining0021PTrainingJubsuListData from './Frmtraining0021PTrainingJubsuListData';

export const Frmtraining0021PTrainingJubsuList = () => {
    const hook = useFrmtraining0021PTrainingJubsuList();
    const columns_gdTrainingJubsu = [
        { field: 'id', headerName: '순번', width: 38, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'MGJIBUNICK', headerName: '지부', width: 60 },
        { field: 'YEAR', headerName: '년도', width: 40 },
        { field: 'TORDER', headerName: '회차', width: 50 },
        { field: 'COURSENM', headerName: '직능', width: 120 },
        { field: 'JUBSUNO', headerName: '접수번호', width: 70 },
        { field: 'PERSONNM', headerName: '성명', width: 70 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 93 },
        { field: 'PASSYN', headerName: '수료여부', width: 63 },
        { field: 'PICTUREYN', headerName: '사진등록여부', width: 89 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnSelect_OnClick}>선택</Button>
<Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
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
                        <DataGridWrapper rows={hook.ds_oTrainingJubsu} columns={columns_gdTrainingJubsu} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0021PTrainingJubsuList;

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