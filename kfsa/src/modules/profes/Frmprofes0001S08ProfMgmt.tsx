// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0001S08ProfMgmt } from './useFrmprofes0001S08ProfMgmt';
import * as Frmprofes0001S08ProfMgmtData from './Frmprofes0001S08ProfMgmtData';

export const Frmprofes0001S08ProfMgmt = () => {
    const hook = useFrmprofes0001S08ProfMgmt();
    const columns_gdProfPrize = [
        { field: 'id', headerName: '순번', width: 30, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'PPYEAR', headerName: '연도', width: 80 },
        { field: 'PPTITLE', headerName: '행사명', width: 300 },
        { field: 'PPCONTENT', headerName: '시상내역', width: 300 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">강의시상(년도는 4자리 숫자로 입력)</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Add />} onClick={hook.btnAdd_OnClick}>행 추가</Button>
<Button variant="contained" startIcon={<Delete />} onClick={hook.btnDel_OnClick}>행 삭제</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "38px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdProfPrize ? undefined : 'none' }}><Paper sx={{ width: '764px', height: '184px', width: '100%', height: 'auto', minHeight: '184px' }}><DataGridWrapper rows={hook.ds_ioProfPrize} columns={columns_gdProfPrize} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0001S08ProfMgmt;

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