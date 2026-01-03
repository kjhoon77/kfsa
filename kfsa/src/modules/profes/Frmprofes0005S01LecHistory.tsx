// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0005S01LecHistory } from './useFrmprofes0005S01LecHistory';
import * as Frmprofes0005S01LecHistoryData from './Frmprofes0005S01LecHistoryData';

export const Frmprofes0005S01LecHistory = () => {
    const hook = useFrmprofes0005S01LecHistory();
    const columns_gdTeachingTimeMaster = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LTEDUDAYS', headerName: '일차', width: 60 },
        { field: 'LTEDUDATE', headerName: '날짜', width: 100 },
        { field: 'LTSCHEDULETYPE', headerName: '시간표유형', width: 180 },
        { field: 'TSHOUR', headerName: '시간표시간', width: 80 },
    ];
    const columns_gdTeachingTimeDetail = [
        { field: 'id', headerName: '순번', width: 52, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TSTIME', headerName: '교시', width: 111 },
        { field: 'EDUTIME', headerName: '교육시간', width: 145 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Add />} onClick={hook.btnAdd_OnClick}>행 추가</Button>
<Button variant="contained" startIcon={<Delete />} onClick={hook.btnDel_OnClick}>행 삭제</Button>
<Button variant="contained"  onClick={hook.btnAddBase_OnClick}>일차생성</Button>
<Button variant="contained"  onClick={hook.btnCreateTimeSchedule_OnClick}>지부별 시간표 생성</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnSave_OnClick}>저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdTeachingTimeMaster ? undefined : 'none' }}><Paper sx={{ width: '464px', height: '224px', width: '100%', height: 'auto', minHeight: '224px' }}><DataGridWrapper rows={hook.ds_ioTeachingTimeMaster} columns={columns_gdTeachingTimeMaster} /></Paper></Box><Box sx={{ display: hook.isVisible_gdTeachingTimeDetail ? undefined : 'none' }}><Paper sx={{ width: '284px', height: '224px', width: '100%', height: 'auto', minHeight: '224px' }}><DataGridWrapper rows={hook.ds_ioTeachingTimeDetail} columns={columns_gdTeachingTimeDetail} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0005S01LecHistory;

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