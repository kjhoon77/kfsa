// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6000MDataConnectionBuildingManage } from './useFrmcust6000MDataConnectionBuildingManage';
import * as Frmcust6000MDataConnectionBuildingManageData from './Frmcust6000MDataConnectionBuildingManageData';

export const Frmcust6000MDataConnectionBuildingManage = () => {
    const hook = useFrmcust6000MDataConnectionBuildingManage();
    const [tabValue_tab, setTabValue_tab] = useState(0);
    const columns_grid2 = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CONDITION1', headerName: '안전원 정보', width: 118 },
        { field: 'CONDITION2', headerName: '선임자(조회)', width: 118 },
        { field: 'BIRTH', headerName: '생년월일', width: 118 },
        { field: 'BNM', headerName: '소방본부', width: 118 },
        { field: 'FMNM', headerName: '선임자', width: 120 },
        { field: 'BIRTH2', headerName: '생년월일', width: 118 },
    ];
    const columns_grid1 = [
        { field: 'id', headerName: '순번', width: 33, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CONDITION1', headerName: '소방본부', width: 118 },
        { field: 'CONDITION2', headerName: '선임자(조회)', width: 118 },
        { field: 'BIRTH', headerName: '생년월일', width: 118 },
        { field: 'BNM', headerName: '안전원 정보', width: 118 },
        { field: 'FMNM', headerName: '선임자', width: 120 },
        { field: 'BIRTH2', headerName: '생년월일', width: 118 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.btnDataHistory_OnClick}>데이터조회이력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Detailed Info</Typography>
                        
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>List</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ResultExcel} columns={columns_grid1} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ResultExcel2} columns={columns_grid2} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6000MDataConnectionBuildingManage;

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