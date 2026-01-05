// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0029PTrainingAwaiterList } from './useFrmtraining0029PTrainingAwaiterList';
import * as Frmtraining0029PTrainingAwaiterListData from './Frmtraining0029PTrainingAwaiterListData';

export const Frmtraining0029PTrainingAwaiterList = () => {
    const hook = useFrmtraining0029PTrainingAwaiterList();
    const columns_gdAwaiterJubsu = [
        { field: 'id_seq', headerName: '순번', width: 38, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1, sortable: false },
        { field: 'GTDEPTNM', headerName: '지부', width: 57 },
        { field: 'TOYEAR', headerName: '년도', width: 40 },
        { field: 'TOTRAININGORDER', headerName: '회차', width: 36 },
        { field: 'TCCOURSENM', headerName: '직능', width: 120 },
        { field: 'AAGUBUN', headerName: '상태', width: 107 },
        { field: 'AWAITERNO', headerName: '대기번호', width: 60 },
        { field: 'PNM', headerName: '성명', width: 70 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 93 },
        { field: 'HP', headerName: '휴대폰', width: 104 },
        { field: 'LIMITDATE', headerName: '접수기한', width: 104 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">강습접수대기자리스트팝업</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdAwaiterJubsu ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '382px', width: '100%', height: 'auto', minHeight: '382px' }}><DataGridWrapper rows={hook.ds_oAwaiterJubsu} columns={columns_gdAwaiterJubsu} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0029PTrainingAwaiterList;

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