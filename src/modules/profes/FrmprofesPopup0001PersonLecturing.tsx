// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofesPopup0001PersonLecturing } from './useFrmprofesPopup0001PersonLecturing';
import * as FrmprofesPopup0001PersonLecturingData from './FrmprofesPopup0001PersonLecturingData';

export const FrmprofesPopup0001PersonLecturing = () => {
    const hook = useFrmprofesPopup0001PersonLecturing();
    const columns_gdList = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LTEDUDATE', headerName: '강의일자', width: 93 },
        { field: 'GTDEPTNM', headerName: '지부', width: 55 },
        { field: 'LGUBUN', headerName: '과정', width: 39 },
        { field: 'CLASNM', headerName: '직능', width: 141 },
        { field: 'SJTITLE', headerName: '과목', width: 201 },
        { field: 'ORD', headerName: '회차', width: 48 },
        { field: 'TIMESE', headerName: '강의시간', width: 100 },
        { field: 'LDEDUTIME', headerName: '시간', width: 39 },
        { field: 'LPSPEAKERPAY', headerName: '강사료', width: 66 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.btnExcell_OnClick}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.btnSearch_OnClick}>조회</Button>
<Button variant="contained"  onClick={hook.btnPrint_OnClick}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ProfesList} columns={columns_gdList} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmprofesPopup0001PersonLecturing;

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