// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0012BuildingHistory } from './useFrmcust0012BuildingHistory';
import * as Frmcust0012BuildingHistoryData from './Frmcust0012BuildingHistoryData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust0012BuildingHistory = () => {
    const hook = useFrmcust0012BuildingHistory();
    const columns_Grid0 = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'EDUYEAR', headerName: '고객번호', width: 63 },
        { field: 'EDUTEAMNM', headerName: '대상물(업체)명', width: 116 },
        { field: 'EDUGUBUNNM', headerName: '성명', width: 40 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물명</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={4}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>허가번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>선임자 정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioStudyCourse} columns={columns_Grid0} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0012BuildingHistory;

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