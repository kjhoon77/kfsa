// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1108MEduDataH } from './useFrmcust1108MEduDataH';
import * as Frmcust1108MEduDataHData from './Frmcust1108MEduDataHData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust1108MEduDataH = () => {
    const hook = useFrmcust1108MEduDataH();
    const columns_gdCommonCode = [
        { field: 'sel', headerName: '순번', width: 41 },
        { field: 'EHCOURSENM', headerName: '직능', width: 130 },
        { field: 'EHPROCDATE_A', headerName: '발행 일자', width: 196 },
        { field: 'TOTALCOUNT', headerName: '추출대상자수', width: 136 },
        { field: 'CREATCOUNT', headerName: '교육안내문발행수', width: 137 },
        { field: 'GPNAME', headerName: '생성자', width: 114 },
    ];
    const columns_gdHistory = [
        { field: 'sel', headerName: '순번', width: 37 },
        { field: 'EHYEAR', headerName: '년도', width: 44 },
        { field: 'CUSTFMNM', headerName: '안내자성명', width: 76 },
        { field: 'EPPASSDATE', headerName: '이수일자', width: 74 },
        { field: 'EPPERSONNM', headerName: '이수자성명', width: 75 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 86 },
        { field: 'EHJBFULLNNM', headerName: '지부', width: 88 },
        { field: 'EHCUSTNO', headerName: '고객번호', width: 105 },
        { field: 'RCNM', headerName: '지역', width: 68 },
        { field: 'FSTNSMALL_NM', headerName: '119안전센터', width: 112 },
        { field: 'EHCOURSENM', headerName: '직능', width: 115 },
        { field: 'STATUSGUBUN', headerName: '고객구분', width: 76 },
        { field: 'EHCUSTBNM', headerName: '업체명', width: 188 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_EduDataHistorySearch}>이력조회</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>지부</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>발행일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>교육안내문 발행 이력</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioHistorySearch} columns={columns_gdCommonCode} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>발행 이력별 교육안내대상자</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnToExcel_OnClick}>엑셀자료생성</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioEduDataHistoryResearchEduList1} columns={columns_gdHistory} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1108MEduDataH;

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