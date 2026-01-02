// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0028PTrainingJubsuHistory } from './useFrmtraining0028PTrainingJubsuHistory';
import * as Frmtraining0028PTrainingJubsuHistoryData from './Frmtraining0028PTrainingJubsuHistoryData';

export const Frmtraining0028PTrainingJubsuHistory = () => {
    const hook = useFrmtraining0028PTrainingJubsuHistory();
    const columns_gdJubsuHist = [
        { field: 'TJHSEQ', headerName: '결제순번', width: 58 },
        { field: 'TPPERSONNM', headerName: '성명', width: 70 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 115 },
        { field: 'TJHSTATUS', headerName: '상태', width: 97 },
        { field: 'TJHPROCJIBU', headerName: '관리지부', width: 62 },
        { field: 'TJHPROCDATE', headerName: '처리일자', width: 82 },
        { field: 'TJHSABUNNM', headerName: '처리자', width: 79 },
        { field: 'TJHREASON', headerName: '처리사유', width: 0 },
        { field: 'TJHREASON', headerName: '사유', width: 150 },
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
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oJubsuHist} columns={columns_gdJubsuHist} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0028PTrainingJubsuHistory;

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