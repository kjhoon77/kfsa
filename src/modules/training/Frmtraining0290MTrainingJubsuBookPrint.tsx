// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0290MTrainingJubsuBookPrint } from './useFrmtraining0290MTrainingJubsuBookPrint';
import * as Frmtraining0290MTrainingJubsuBookPrintData from './Frmtraining0290MTrainingJubsuBookPrintData';

export const Frmtraining0290MTrainingJubsuBookPrint = () => {
    const hook = useFrmtraining0290MTrainingJubsuBookPrint();
    const columns_grdBook = [
        { field: 'SEL', headerName: 'SEL', width: 29 },
        { field: 'TBPSEQ', headerName: '순번', width: 32 },
        { field: 'TBPCOL1', headerName: '등기번호', width: 102 },
        { field: 'TBPCOL2', headerName: '상태', width: 33 },
        { field: 'TBPCOL3', headerName: '배달우체국', width: 80 },
        { field: 'TBPCOL4', headerName: '수취인명', width: 60 },
        { field: 'TBPCOL5', headerName: '우편번호', width: 0 },
        { field: 'TBPCOL6', headerName: '수취인주소', width: 0 },
        { field: 'TBPCOL7', headerName: '상세주소', width: 0 },
        { field: 'TBPCOL8', headerName: '전화번호', width: 100 },
        { field: 'TBPCOL9', headerName: '상품명', width: 112 },
        { field: 'TBPCOL10', headerName: '공급지', width: 120 },
        { field: 'REGYN', headerName: '접수여부', width: 60 },
        { field: 'TOTRAININGORDER', headerName: '접수회차', width: 60 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'TOMGNO', headerName: '강습회차관리번호', width: 0 },
        { field: 'TJBOOKREGNO', headerName: '등록된등기번호', width: 114 },
    ];
    const columns_Grid0 = [
        { field: 'id', headerName: 'No', width: 0, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'COL01', headerName: '등기번호', width: 104 },
        { field: 'COL02', headerName: '상태', width: 37 },
        { field: 'COL03', headerName: '배달우체국', width: 84 },
        { field: 'COL04', headerName: '수취인명', width: 60 },
        { field: 'COL05', headerName: '우편번호', width: 61 },
        { field: 'COL06', headerName: '수취인주소', width: 84 },
        { field: 'COL07', headerName: '상세주소', width: 78 },
        { field: 'COL08', headerName: '전화번호', width: 117 },
        { field: 'COL09', headerName: '상품명', width: 174 },
        { field: 'COL10', headerName: '공급지', width: 129 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Cancel}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>교재발송명단 등기정보 엑셀 업로드</Box></Grid><Grid item xs={12} md={2}><Button variant="contained">이력 확인</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>엑셀 업로드 건수 :</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained">①엑셀 자료 불러오기</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_iExcelLoad} columns={columns_Grid0} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>자료 확인 건수 :</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained">②자료 확인 하기</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">③등기정보 반영</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">문자메시지발송</Button></Grid><Grid item xs={12} md={2}><Box>TBPMGNO</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioBook} columns={columns_grdBook} />
                    </Paper>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained">btnSearchMgno</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0290MTrainingJubsuBookPrint;

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