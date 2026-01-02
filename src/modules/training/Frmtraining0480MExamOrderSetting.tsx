// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0480MExamOrderSetting } from './useFrmtraining0480MExamOrderSetting';
import * as Frmtraining0480MExamOrderSettingData from './Frmtraining0480MExamOrderSettingData';

export const Frmtraining0480MExamOrderSetting = () => {
    const hook = useFrmtraining0480MExamOrderSetting();
    const columns_gdLocalExamOrder = [
        { field: 'GTTEAMNM', headerName: '지부', width: 120 },
        { field: 'TCCOURSENM', headerName: '직능', width: 220 },
        { field: 'EOYEAR', headerName: '년도', width: 80 },
        { field: 'EOEXAMORDER', headerName: '회차', width: 70 },
        { field: 'EOEXAMDATE', headerName: '시험일', width: 118 },
        { field: 'EREXAMROOM', headerName: '시험장소', width: 178 },
    ];
    const columns_gdExamOrder = [
        { field: 'GTTEAMNM', headerName: '지부', width: 120 },
        { field: 'TCCOURSENM', headerName: '직능', width: 220 },
        { field: 'EOYEAR', headerName: '년도', width: 80 },
        { field: 'EOEXAMORDER', headerName: '회차', width: 70 },
        { field: 'EOEXAMDATE', headerName: '시험일', width: 118 },
        { field: 'EREXAMROOM', headerName: '시험장소', width: 178 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained"  onClick={hook.btnNext_OnClick}>다음 ▶</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioLocalExamOrder} columns={columns_gdExamOrder} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>선택할 시험목록</Box></Grid><Grid item xs={12} md={5}><Box>※ 추가 후 선택저장 버튼을 클릭하시기 바랍니다.</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained">▲ 삭제</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">추가 ▼</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">선택저장(F4)</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_LocalExamOrder} columns={columns_gdLocalExamOrder} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0480MExamOrderSetting;

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