// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM2000PExcelLoadingNew } from './useFrmCOM2000PExcelLoadingNew';
import * as FrmCOM2000PExcelLoadingNewData from './FrmCOM2000PExcelLoadingNewData';

export const FrmCOM2000PExcelLoadingNew = () => {
    const hook = useFrmCOM2000PExcelLoadingNew();
    const columns_grd_excelLoad = [
    ];
    const columns_grd_parent = [
        { field: 'Title', headerName: 'Title', width: 115 },
        { field: 'CellValue', headerName: 'Excel Column', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnOk_OnClick}>확인</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Delete />} onClick={hook.btnDel_OnClick}>삭제</Button>
<Button variant="contained"  onClick={hook.btnSelectFile_OnClick}>파일선택</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grd_parent ? undefined : 'none' }}><Paper sx={{ width: '265px', height: '570px', width: '100%', height: 'auto', minHeight: '570px' }}><DataGridWrapper rows={hook.DS_PARENT} columns={columns_grd_parent} /></Paper></Box><Box sx={{ display: hook.isVisible_grd_excelLoad ? undefined : 'none' }}><Paper sx={{ width: '724px', height: '570px', width: '100%', height: 'auto', minHeight: '570px' }}><DataGridWrapper rows={hook.ds_grid} columns={columns_grd_excelLoad} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM2000PExcelLoadingNew;

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