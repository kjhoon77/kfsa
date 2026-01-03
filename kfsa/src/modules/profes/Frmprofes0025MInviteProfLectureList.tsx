// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0025MInviteProfLectureList } from './useFrmprofes0025MInviteProfLectureList';
import * as Frmprofes0025MInviteProfLectureListData from './Frmprofes0025MInviteProfLectureListData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0025MInviteProfLectureList = () => {
    const hook = useFrmprofes0025MInviteProfLectureList();
    const columns_gdList = [
        { field: 'id', headerName: '순번', width: 38, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LTEDUDATE', headerName: '강의일자', width: 75 },
        { field: 'LPSOSOK', headerName: '소속', width: 133 },
        { field: 'LPPFJIKWINM', headerName: '직위/계급', width: 82 },
        { field: 'LPPFNM', headerName: '성명', width: 56 },
        { field: 'GTDEPTNM', headerName: '지부', width: 55 },
        { field: 'LGUBUN', headerName: '과정', width: 43 },
        { field: 'ORD', headerName: '회차', width: 39 },
        { field: 'CLASNM', headerName: '직능', width: 119 },
        { field: 'SJTITLE', headerName: '과목', width: 119 },
        { field: 'TIMESE', headerName: '강의시간', width: 90 },
        { field: 'LPEDUTIME', headerName: '시간', width: 31 },
        { field: 'LPSPEAKERPAY', headerName: '강사료', width: 64 },
        { field: 'STDATE', headerName: '위촉기간', width: 147 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "66px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '939px', height: '562px', width: '100%', height: 'auto', minHeight: '562px' }}><DataGridWrapper rows={hook.ds_ProfesList} columns={columns_gdList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0025MInviteProfLectureList;

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