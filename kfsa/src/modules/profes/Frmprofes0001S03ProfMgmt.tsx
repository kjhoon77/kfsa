// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0001S03ProfMgmt } from './useFrmprofes0001S03ProfMgmt';
import * as Frmprofes0001S03ProfMgmtData from './Frmprofes0001S03ProfMgmtData';

export const Frmprofes0001S03ProfMgmt = () => {
    const hook = useFrmprofes0001S03ProfMgmt();
    const columns_gdProfSeminar = [
        { field: 'id', headerName: '순번', width: 30, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'PSINDATE', headerName: '발표일자', width: 80 },
        { field: 'PSCONTENT', headerName: '발표내용', width: 300 },
        { field: 'PSOFFICE', headerName: '개최기관', width: 300 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">학술 및 세미나 발표(발표일자는 '-' 제외한 8자리 숫자로 입력</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Add />} onClick={hook.btnAdd_OnClick}>행 추가</Button>
<Button variant="contained" startIcon={<Delete />} onClick={hook.btnDel_OnClick}>행 삭제</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "38px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdProfSeminar ? undefined : 'none' }}><Paper sx={{ width: '764px', height: '184px', width: '100%', height: 'auto', minHeight: '184px' }}><DataGridWrapper rows={hook.ds_ioProfSeminar} columns={columns_gdProfSeminar} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0001S03ProfMgmt;

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