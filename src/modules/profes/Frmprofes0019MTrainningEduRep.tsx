// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0019MTrainningEduRep } from './useFrmprofes0019MTrainningEduRep';
import * as Frmprofes0019MTrainningEduRepData from './Frmprofes0019MTrainningEduRepData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0019MTrainningEduRep = () => {
    const hook = useFrmprofes0019MTrainningEduRep();
    const columns_gdListH = [
        { field: 'id', headerName: '구분', width: 90, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOTCNT_3', headerName: '합계', width: 70 },
        { field: 'CNT220_3', headerName: 'CNT220_3', width: 64 },
        { field: 'CNT210_3', headerName: '특급소관', width: 64 },
        { field: 'CNT221_3', headerName: '1급소관', width: 64 },
        { field: 'CNT222N_3', headerName: 'CNT222N_3', width: 64 },
        { field: 'CNT222Y_3', headerName: 'CNT222Y_3', width: 64 },
        { field: 'CNT223_3', headerName: '3급소관', width: 64 },
        { field: 'CNT224_3', headerName: 'CNT224_3', width: 64 },
        { field: 'CNT228_3', headerName: 'CNT228_3', width: 64 },
        { field: 'CNT229_3', headerName: 'CNT229_3', width: 64 },
        { field: 'CNT227_3', headerName: 'CNT227_3', width: 64 },
        { field: 'CNT253_3', headerName: 'CNT253_3', width: 64 },
        { field: 'CNT254_3', headerName: 'CNT254_3', width: 64 },
        { field: 'CNT250_3', headerName: 'CNT250_3', width: 64 },
        { field: 'CNT251_3', headerName: 'CNT251_3', width: 64 },
        { field: 'CNT252_3', headerName: 'CNT252_3', width: 64 },
        { field: 'CNT255_3', headerName: 'CNT255_3', width: 64 },
    ];
    const columns_gdListD = [
        { field: 'SEQ', headerName: '순번', width: 39 },
        { field: 'LDPFNAME', headerName: '교수', width: 88 },
        { field: 'TP', headerName: '정교수', width: 60 },
        { field: 'TOT', headerName: '합계', width: 29 },
        { field: 'SUMCNT', headerName: 'SUMCNT', width: 29 },
        { field: 'CNT220', headerName: 'CNT220', width: 64 },
        { field: 'CNT210', headerName: '특급소관', width: 62 },
        { field: 'CNT221', headerName: '1급소관', width: 55 },
        { field: 'CNT222N', headerName: 'CNT222N', width: 56 },
        { field: 'CNT222Y', headerName: 'CNT222Y', width: 59 },
        { field: 'CNT223', headerName: '3급소관', width: 53 },
        { field: 'CNT224', headerName: 'CNT224', width: 76 },
        { field: 'CNT228', headerName: 'CNT228', width: 53 },
        { field: 'CNT229', headerName: 'CNT229', width: 48 },
        { field: 'CNT227', headerName: 'CNT227', width: 49 },
        { field: 'CNT253', headerName: 'CNT253', width: 57 },
        { field: 'CNT254', headerName: 'CNT254', width: 62 },
        { field: 'CNT250', headerName: 'CNT250', width: 62 },
        { field: 'CNT251', headerName: 'CNT251', width: 62 },
        { field: 'CNT252', headerName: 'CNT252', width: 62 },
        { field: 'CNT255', headerName: 'CNT255', width: 62 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>교육시작일</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회차</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>강습교육 실시 전체 현황</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ProfesListH} columns={columns_gdListH} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>강습교육 실시 개인별 현황</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ProfesListD} columns={columns_gdListD} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0019MTrainningEduRep;

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