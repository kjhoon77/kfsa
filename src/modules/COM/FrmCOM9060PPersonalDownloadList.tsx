// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM9060PPersonalDownloadList } from './useFrmCOM9060PPersonalDownloadList';
import * as FrmCOM9060PPersonalDownloadListData from './FrmCOM9060PPersonalDownloadListData';

export const FrmCOM9060PPersonalDownloadList = () => {
    const hook = useFrmCOM9060PPersonalDownloadList();
    const columns_cbxYear = [
        { field: 'id', headerName: '순번', width: 48, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'PCMENU', headerName: '메뉴', width: 173 },
        { field: 'PCTITLE', headerName: '제목', width: 147 },
        { field: 'PDHREASON', headerName: '사유', width: 217 },
        { field: 'PDHDWLDCNT', headerName: '건수', width: 51 },
        { field: 'PDHREGDATE', headerName: '일시', width: 159 },
        { field: 'PNM', headerName: '사용자', width: 62 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oDownloadPopup} columns={columns_cbxYear} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM9060PPersonalDownloadList;

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