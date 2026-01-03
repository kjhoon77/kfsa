// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0010PSupporterList } from './useFrmcust0010PSupporterList';
import * as Frmcust0010PSupporterListData from './Frmcust0010PSupporterListData';

export const Frmcust0010PSupporterList = () => {
    const hook = useFrmcust0010PSupporterList();
    const columns_gdSuppoterList = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTDEPTNM', headerName: '지부', width: 55 },
        { field: 'CNO', headerName: '고객번호', width: 72 },
        { field: 'BNM', headerName: '대상물명', width: 181 },
        { field: 'FMNM', headerName: '보조자명', width: 75 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 111 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 95 },
        { field: 'FMSTARTDATE', headerName: '선임일자', width: 105 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnSelect_OnClick}>선택</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "38px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdSuppoterList ? undefined : 'none' }}><Paper sx={{ width: '692px', height: '262px', width: '100%', height: 'auto', minHeight: '262px' }}><DataGridWrapper rows={hook.ds_oSupporterList} columns={columns_gdSuppoterList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0010PSupporterList;

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