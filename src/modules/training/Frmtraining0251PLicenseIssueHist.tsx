// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0251PLicenseIssueHist } from './useFrmtraining0251PLicenseIssueHist';
import * as Frmtraining0251PLicenseIssueHistData from './Frmtraining0251PLicenseIssueHistData';

export const Frmtraining0251PLicenseIssueHist = () => {
    const hook = useFrmtraining0251PLicenseIssueHist();
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
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnLcsImage_OnClick}>이미지보기</Button>
<Button variant="contained"  onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oLicenseH} columns={columns_gdLcsHistory} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0251PLicenseIssueHist;

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