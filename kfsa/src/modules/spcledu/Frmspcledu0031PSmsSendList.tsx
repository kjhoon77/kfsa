// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu0031PSmsSendList } from './useFrmspcledu0031PSmsSendList';
import * as Frmspcledu0031PSmsSendListData from './Frmspcledu0031PSmsSendListData';

export const Frmspcledu0031PSmsSendList = () => {
    const hook = useFrmspcledu0031PSmsSendList();
    const columns_gdSmsStat = [
        { field: 'TOMGGTMGNO', headerName: '지부', width: 0 },
        { field: 'TOYEAR', headerName: '년도', width: 0 },
        { field: 'TOTCCOURSECD', headerName: '직능', width: 0 },
        { field: 'TOTRAININGORDER', headerName: '회차', width: 0 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 0 },
        { field: 'TRAN_STATUS', headerName: '전송상태', width: 61 },
        { field: 'TRAN_DATE_A', headerName: '발송일자', width: 108 },
        { field: 'PERSON_NAME', headerName: '발송자', width: 74 },
        { field: 'TRAN_MSG', headerName: '전문내용', width: 339 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "56px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdSmsStat ? undefined : 'none' }}><Paper sx={{ width: '592px', height: '384px', width: '100%', height: 'auto', minHeight: '384px' }}><DataGridWrapper rows={hook.ds_oSmsStat} columns={columns_gdSmsStat} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu0031PSmsSendList;

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