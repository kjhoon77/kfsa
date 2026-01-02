// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0012MJibuDetailLecH } from './useFrmprofes0012MJibuDetailLecH';
import * as Frmprofes0012MJibuDetailLecHData from './Frmprofes0012MJibuDetailLecHData';

export const Frmprofes0012MJibuDetailLecH = () => {
    const hook = useFrmprofes0012MJibuDetailLecH();
    const columns_gdList = [
        { field: 'GTDEPTNM', headerName: '지부', width: 80 },
        { field: 'SUMCNT1_3', headerName: '합계', width: 80 },
        { field: 'CNT120_3', headerName: '실무', width: 75 },
        { field: 'CNT121_3', headerName: 'CNT121_3', width: 75 },
        { field: 'CNT124_3', headerName: 'CNT124_3', width: 75 },
        { field: 'CNT126_3', headerName: '소방기술자', width: 75 },
        { field: 'CNT128_3', headerName: 'CNT128_3', width: 75 },
        { field: 'CNT129_3', headerName: '소방기술자', width: 75 },
        { field: 'CNT220_3', headerName: '강습', width: 75 },
        { field: 'CNT210_3', headerName: '특급소관', width: 75 },
        { field: 'CNT221_3', headerName: '1급소관', width: 75 },
        { field: 'CNT222N_3', headerName: 'CNT222N_3', width: 75 },
        { field: 'CNT222Y_3', headerName: 'CNT222Y_3', width: 75 },
        { field: 'CNT223_3', headerName: '3급소관', width: 75 },
        { field: 'CNT224_3', headerName: 'CNT224_3', width: 75 },
        { field: 'CNT228_3', headerName: 'CNT228_3', width: 70 },
        { field: 'CNT229_3', headerName: 'CNT229_3', width: 70 },
        { field: 'CNT227_3', headerName: 'CNT227_3', width: 70 },
        { field: 'CNT253_3', headerName: 'CNT253_3', width: 70 },
        { field: 'CNT254_3', headerName: 'CNT254_3', width: 70 },
        { field: 'CNT250_3', headerName: '전문교육', width: 70 },
        { field: 'CNT251_3', headerName: 'CNT251_3', width: 70 },
        { field: 'CNT252_3', headerName: 'CNT252_3', width: 70 },
        { field: 'CNT255_3', headerName: 'CNT255_3', width: 70 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained"  onClick={hook.lfn_Print}>출력</Button>

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
export default Frmprofes0012MJibuDetailLecH;

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