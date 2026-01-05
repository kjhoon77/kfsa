// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu0251PLicenseIssueHist } from './useFrmspcledu0251PLicenseIssueHist';
import * as Frmspcledu0251PLicenseIssueHistData from './Frmspcledu0251PLicenseIssueHistData';

export const Frmspcledu0251PLicenseIssueHist = () => {
    const hook = useFrmspcledu0251PLicenseIssueHist();
    const columns_gdLcsHistory = [
        { field: 'LHPERSONNM', headerName: '성명', width: 93 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 96 },
        { field: 'LHLLCSNO', headerName: '수첩번호', width: 143 },
        { field: 'LHISSUEREASON', headerName: '발급구분', width: 87 },
        { field: 'LHPRTDATE', headerName: '발급일자', width: 76 },
        { field: 'LHTEL', headerName: '전화번호', width: 109 },
        { field: 'LHADDR1', headerName: '주소1', width: 190 },
        { field: 'LHADDR2', headerName: '주소2', width: 192 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">수첩발급이력팝업</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnLcsImage_OnClick}>이미지보기</Button>
<Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdLcsHistory ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '382px', width: '100%', height: 'auto', minHeight: '382px' }}><DataGridWrapper rows={hook.ds_oLicenseH} columns={columns_gdLcsHistory} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu0251PLicenseIssueHist;

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