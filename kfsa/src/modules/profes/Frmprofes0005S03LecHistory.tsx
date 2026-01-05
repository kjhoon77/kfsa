// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0005S03LecHistory } from './useFrmprofes0005S03LecHistory';
import * as Frmprofes0005S03LecHistoryData from './Frmprofes0005S03LecHistoryData';

export const Frmprofes0005S03LecHistory = () => {
    const hook = useFrmprofes0005S03LecHistory();
    const columns_gdProfesAssign = [
        { field: 'LTEDUDAYS', headerName: '일차', width: 35 },
        { field: 'TSTIME', headerName: '교시', width: 52 },
        { field: 'PSTITLE', headerName: '과목', width: 195 },
        { field: 'col_3', headerName: '', width: 28 },
        { field: 'PSTN', headerName: '직책', width: 70 },
        { field: 'LPPFNM', headerName: '교수명', width: 60 },
        { field: 'col_6', headerName: '', width: 28 },
        { field: 'LPPFJIKWINM', headerName: '직위', width: 80 },
        { field: 'LPPFGUBUN', headerName: '구분', width: 60 },
        { field: 'EDUTIME', headerName: '교육시간', width: 90 },
        { field: 'EDUTEAMNM', headerName: '지부명', width: 60 },
        { field: 'LPSPEAKERPAY', headerName: '강사료', width: 60 },
        { field: 'col_12', headerName: '교수추가', width: 35, renderCell: () => "추가", sortable: false },
        { field: 'col_13', headerName: '', width: 35, renderCell: () => "삭제", sortable: false },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">강의실적_교수배정</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.btnSave_OnClick}>저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdProfesAssign ? undefined : 'none' }}><Paper sx={{ width: '764px', height: '224px', width: '100%', height: 'auto', minHeight: '224px' }}><DataGridWrapper rows={hook.ds_ioProfesAssign} columns={columns_gdProfesAssign} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0005S03LecHistory;

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