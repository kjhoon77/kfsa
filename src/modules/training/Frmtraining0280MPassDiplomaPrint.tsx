// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0280MPassDiplomaPrint } from './useFrmtraining0280MPassDiplomaPrint';
import * as Frmtraining0280MPassDiplomaPrintData from './Frmtraining0280MPassDiplomaPrintData';

export const Frmtraining0280MPassDiplomaPrint = () => {
    const hook = useFrmtraining0280MPassDiplomaPrint();
    const columns_gdTrainingPass = [
        { field: 'SEL', headerName: 'SEL', width: 29 },
        { field: 'TOMGGTMGNO', headerName: '지부', width: 79 },
        { field: 'TPPASSNO', headerName: '수료번호', width: 146 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 69 },
        { field: 'TJPERSONNM', headerName: '성명', width: 71 },
        { field: 'TJBIRTHDAY_SANG', headerName: '생년월일', width: 91 },
        { field: 'TPPASSDATE_A', headerName: '수료일자', width: 95 },
        { field: 'TJZIPCD', headerName: '우편번호', width: 71 },
        { field: 'JUBSUADDR', headerName: '주소', width: 335 },
        { field: 'ERPASSYN', headerName: '합격여부', width: 94 },
        { field: 'TOONLINEGUBUN', headerName: '온라인구분', width: 110 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained"  onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_localExcel}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회구분</Box></Grid><Grid item xs={12} md={8}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회조건</Box></Grid><Grid item xs={12} md={7}><Box>Div0</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>출력☞</Box></Grid><Grid item xs={12} md={2}><Button variant="contained">수료증(테두리有)</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">수료증(테두리無)</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">수료증(상장양식지)</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">수료대장</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">참가증</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">노동부제출용 수료증</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>수료인원</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained">수료증(테두리有)미리보기</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">수료증(테두리無)미리보기</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">수료증(상장양식지) 미리보기</Button></Grid><Grid item xs={12} md={2}><Button variant="contained"></Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioTrainingPass} columns={columns_gdTrainingPass} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0280MPassDiplomaPrint;

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