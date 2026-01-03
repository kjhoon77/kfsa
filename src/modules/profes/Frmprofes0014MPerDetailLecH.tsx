// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0014MPerDetailLecH } from './useFrmprofes0014MPerDetailLecH';
import * as Frmprofes0014MPerDetailLecHData from './Frmprofes0014MPerDetailLecHData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0014MPerDetailLecH = () => {
    const hook = useFrmprofes0014MPerDetailLecH();
    const columns_gdList = [
        { field: 'SEQ', headerName: '순번', width: 35 },
        { field: 'NM_GUBUN', headerName: '교수', width: 77 },
        { field: 'TP', headerName: '직책', width: 50 },
        { field: 'TOT', headerName: '합계', width: 32 },
        { field: 'SUMCNT', headerName: 'SUMCNT', width: 32 },
        { field: 'CNT120', headerName: '실무', width: 75 },
        { field: 'CNT121', headerName: 'CNT121', width: 75 },
        { field: 'CNT124', headerName: 'CNT124', width: 75 },
        { field: 'CNT126', headerName: '소방기술자', width: 75 },
        { field: 'CNT128', headerName: 'CNT128', width: 75 },
        { field: 'CNT129', headerName: 'CNT129', width: 75 },
        { field: 'CNT220', headerName: '강습', width: 75 },
        { field: 'CNT210', headerName: '특급소관', width: 75 },
        { field: 'CNT221', headerName: '1급소관', width: 75 },
        { field: 'CNT222N', headerName: 'CNT222N', width: 75 },
        { field: 'CNT222Y', headerName: 'CNT222Y', width: 75 },
        { field: 'CNT223', headerName: '3급소관', width: 75 },
        { field: 'CNT224', headerName: 'CNT224', width: 75 },
        { field: 'CNT228', headerName: 'CNT228', width: 75 },
        { field: 'CNT229', headerName: 'CNT229', width: 75 },
        { field: 'CNT227', headerName: 'CNT227', width: 75 },
        { field: 'CNT253', headerName: 'CNT253', width: 75 },
        { field: 'CNT254', headerName: 'CNT254', width: 75 },
        { field: 'CNT250', headerName: '전문교육', width: 75 },
        { field: 'CNT251', headerName: 'CNT251', width: 75 },
        { field: 'CNT252', headerName: 'CNT252', width: 75 },
        { field: 'CNT255', headerName: 'CNT255', width: 75 },
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
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>

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
export default Frmprofes0014MPerDetailLecH;

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