// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofesPopup0003LecvsMaterial } from './useFrmprofesPopup0003LecvsMaterial';
import * as FrmprofesPopup0003LecvsMaterialData from './FrmprofesPopup0003LecvsMaterialData';

export const FrmprofesPopup0003LecvsMaterial = () => {
    const hook = useFrmprofesPopup0003LecvsMaterial();
    const columns_gdList = [
        { field: 'CGUBUN2', headerName: '구분', width: 39 },
        { field: 'CNM', headerName: '과정명', width: 131 },
        { field: 'SJTITLE', headerName: '과목명', width: 219 },
        { field: 'TP_CNT', headerName: '교안', width: 40 },
        { field: 'TOT', headerName: '강의실적', width: 40 },
        { field: 'TOT_1', headerName: '실무', width: 40 },
        { field: 'TOT_2', headerName: '강습', width: 40 },
        { field: 'YES', headerName: '교안일치', width: 40 },
        { field: 'YES_1', headerName: '실무', width: 40 },
        { field: 'YES_2', headerName: '강습', width: 40 },
        { field: 'NO', headerName: '교안불일치', width: 40 },
        { field: 'NO_1', headerName: '실무', width: 40 },
        { field: 'NO_2', headerName: '강습', width: 40 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.btnExcell_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.btnPrint_OnClick}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "66px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '562px', width: '100%', height: 'auto', minHeight: '562px' }}><DataGridWrapper rows={hook.ds_ProfesList} columns={columns_gdList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmprofesPopup0003LecvsMaterial;

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