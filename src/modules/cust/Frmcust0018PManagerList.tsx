// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0018PManagerList } from './useFrmcust0018PManagerList';
import * as Frmcust0018PManagerListData from './Frmcust0018PManagerListData';

export const Frmcust0018PManagerList = () => {
    const hook = useFrmcust0018PManagerList();
    const columns_gdManagerList = [
        { field: 'FMNM', headerName: '성명', width: 82 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 125 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 123 },
        { field: 'FMHHPTEL', headerName: '휴대폰', width: 95 },
        { field: 'FMAUTHGUBUN', headerName: '실명인증여부', width: 95 },
        { field: 'FMRESIDENTERR', headerName: '주민번호 오류여부', width: 123 },
    ];
    const columns_gdManagerInfo = [
        { field: 'SEL', headerName: '해임여부', width: 70 },
        { field: 'CGTMGNO', headerName: '지부', width: 70 },
        { field: 'CNO', headerName: '관리번호', width: 67 },
        { field: 'RCNM', headerName: '지역', width: 60 },
        { field: 'BNM', headerName: '대상물(업체명)', width: 140 },
        { field: 'CCOURSECD', headerName: '직능', width: 80 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 60 },
        { field: 'BADDR', headerName: '주소', width: 240 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'COVERCMGNO', headerName: '겸직구분', width: 70 },
    ];
    const columns_gdLicenseList = [
        { field: 'LPERSONNM', headerName: '성명', width: 75 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 87 },
        { field: 'PERSONKEY', headerName: '개인식별번호', width: 88 },
        { field: 'LTCCOURSENM', headerName: '구분', width: 107 },
        { field: 'LLCSNO', headerName: '자격 및 수료번호', width: 124 },
        { field: 'LHPTEL', headerName: '휴대폰', width: 97 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.btnNew_OnClick}>신규추가(F3)</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>휴대폰</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부선택</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust0018PManagerListData.ds_ds_oJibu || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>선임자현황</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSelect_OnClick}>선택</Button></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_MULTI_SORT"><Button variant="outlined" size="small" color="primary" onClick={hook.btnMutilSort_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Sort fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oManagerChange} columns={columns_gdManagerList} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={7}><Box>기존 선임정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>해임일지정(선택사항)</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSaveManager_OnClick}>해임처리</Button></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_MULTI_SORT"><Button variant="outlined" size="small" color="primary" onClick={hook.btnMutilSort2_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Sort fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oManagerList} columns={columns_gdManagerInfo} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>자격 및 수료정보</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSelectLicense_OnClick}>선택</Button></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_MULTI_SORT"><Button variant="outlined" size="small" color="primary" onClick={hook.btnMutilSort_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Sort fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oLicenseList} columns={columns_gdLicenseList} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0018PManagerList;

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