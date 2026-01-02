// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust3040PLicenseList } from './useFrmcust3040PLicenseList';
import * as Frmcust3040PLicenseListData from './Frmcust3040PLicenseListData';

export const Frmcust3040PLicenseList = () => {
    const hook = useFrmcust3040PLicenseList();
    const columns_gdTraining = [
        { field: 'SEL', headerName: 'SEL', width: 28 },
        { field: 'TCCOURSENM', headerName: '직능', width: 165 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 90 },
        { field: 'TJREGDATE', headerName: '접수일자', width: 112 },
        { field: 'TOSTARTDATE', headerName: '교육기간', width: 93 },
        { field: 'TOENDDATE', headerName: 'TOENDDATE', width: 92 },
    ];
    const columns_gdExam = [
        { field: 'SEL', headerName: 'SEL', width: 28 },
        { field: 'TCCOURSENM', headerName: '직능', width: 189 },
        { field: 'EOHJUBSUNO', headerName: '응시번호', width: 90 },
        { field: 'EJREGDATE', headerName: '접수일자', width: 108 },
        { field: 'EOEXAMDATE', headerName: '시험일', width: 189 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnSelect_OnClick}>확인</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>강습교육</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oTrainingList} columns={columns_gdTraining} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>시험접수</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oExamList} columns={columns_gdExam} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust3040PLicenseList;

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