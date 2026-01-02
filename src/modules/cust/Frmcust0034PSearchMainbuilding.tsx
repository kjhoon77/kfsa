// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0034PSearchMainbuilding } from './useFrmcust0034PSearchMainbuilding';
import * as Frmcust0034PSearchMainbuildingData from './Frmcust0034PSearchMainbuildingData';

export const Frmcust0034PSearchMainbuilding = () => {
    const hook = useFrmcust0034PSearchMainbuilding();
    const columns_gdSubCustList = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CGTMGNO', headerName: '지부', width: 70 },
        { field: 'CNO', headerName: '관리번호', width: 67 },
        { field: 'GUBUN', headerName: '상태', width: 20 },
        { field: 'CDELGUBUN', headerName: 'CDELGUBUN', width: 60 },
        { field: 'RCNM', headerName: '지역', width: 60 },
        { field: 'CCOURSECD', headerName: '직능', width: 80 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 60 },
        { field: 'FMNM', headerName: '성명', width: 60 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 100 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 0 },
        { field: 'MINAP', headerName: '미납회비', width: 0 },
        { field: 'COVERCMGNO', headerName: '겸직구분', width: 65 },
        { field: 'OLHNM', headerName: '자격구분', width: 0 },
        { field: 'CFIREMGNO', headerName: '소방관리번호', width: 88 },
    ];
    const columns_gdMainCustList = [
        { field: 'id', headerName: '순번', width: 32, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CGTMGNO', headerName: '지부', width: 53 },
        { field: 'CNO', headerName: '관리번호', width: 59 },
        { field: 'BNM', headerName: '대상물명', width: 148 },
        { field: 'RCNM', headerName: '지역', width: 60 },
        { field: 'CCOURSECD', headerName: '직능', width: 80 },
        { field: 'BADDR', headerName: '주소', width: 287 },
        { field: 'FMNM', headerName: '성명', width: 60 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 100 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 0 },
        { field: 'MINAP', headerName: '미납회비', width: 0 },
        { field: 'OLHNM', headerName: '자격구분', width: 0 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box> ① 메인 소방안전관리자 선택</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_MainSearch}>조  회</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnMainSelect_OnClick}>선택</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={8}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>도로명 or 읍면동</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>건물번호 or 번지</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oMainCustList} columns={columns_gdMainCustList} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>메인 소방안전관리 대상물명</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관리번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box> ② 소방안전관리보조자 선택 또는 신규등록</Box></Grid><Grid item xs={12} md={5}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물명</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_SubSearch}>조  회</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSubSelect_OnClick}>선택</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnNewAdd_OnClick}>신규추가</Button></Grid><Grid item xs={12} md={2}><Box>삭제자료포함</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oSubCustList} columns={columns_gdSubCustList} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0034PSearchMainbuilding;

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