// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6001PDataConnectionBuildingManageSave } from './useFrmcust6001PDataConnectionBuildingManageSave';
import * as Frmcust6001PDataConnectionBuildingManageSaveData from './Frmcust6001PDataConnectionBuildingManageSaveData';

export const Frmcust6001PDataConnectionBuildingManageSave = () => {
    const hook = useFrmcust6001PDataConnectionBuildingManageSave();
    const columns_gdFPISFireManager = [
        { field: 'SEL', headerName: 'SEL', width: 21 },
        { field: 'NM', headerName: '선임자명', width: 78 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 115 },
        { field: 'APNT_DE', headerName: '선임일자', width: 79 },
        { field: 'MANAGE_ENTRPS_VRSC_AT', headerName: '업무대행여부', width: 90 },
        { field: 'MOBLPHON', headerName: '휴대폰', width: 103 },
    ];
    const columns_gdFPISLicense = [
        { field: 'CRQFC_NM', headerName: '자격증명', width: 166 },
        { field: 'CRQFC_NO', headerName: '자격증번호', width: 136 },
        { field: 'DELVRY_DE', headerName: '발급일자', width: 116 },
    ];
    const columns_gdFPISOwner = [
        { field: 'SEL', headerName: 'SEL', width: 23 },
        { field: 'PARTCPNTGUBUN', headerName: '관계자구분', width: 163 },
        { field: 'PARTCPNT', headerName: '성명', width: 131 },
        { field: 'TLPHON_NO', headerName: '전화번호', width: 153 },
    ];
    const columns_gdOwner = [
        { field: 'SEL', headerName: 'SEL', width: 23 },
        { field: 'OGUBUN', headerName: '관계자구분', width: 163 },
        { field: 'ONM', headerName: '성명', width: 138 },
        { field: 'OTEL', headerName: '전화번호', width: 154 },
    ];
    const columns_gdFPISAgency = [
        { field: 'SEL', headerName: 'SEL', width: 23 },
        { field: 'ENTRPSNM', headerName: '업체명', width: 163 },
        { field: 'RPRSNTV', headerName: '대표자', width: 72 },
        { field: 'TELNO', headerName: '전화번호', width: 109 },
        { field: 'ADRES', headerName: '주소', width: 200 },
        { field: 'REGISTNO', headerName: '등록번호', width: 112 },
        { field: 'CNSGNPD_BEGIN_DE', headerName: '위탁시작일', width: 90 },
        { field: 'CNSGNPD_END_DE', headerName: '위탁종료일', width: 90 },
    ];
    const columns_gdAgency = [
        { field: 'SEL', headerName: 'SEL', width: 23 },
        { field: 'AGNM', headerName: '업체명', width: 163 },
        { field: 'AGOWNER', headerName: '대표자', width: 72 },
        { field: 'AGTEL', headerName: '전화번호', width: 109 },
        { field: 'ADDR', headerName: '주소', width: 200 },
        { field: 'AGREGNO', headerName: '등록번호', width: 112 },
        { field: 'AGSTARTDATE', headerName: '위탁시작일', width: 90 },
        { field: 'AGENDDATE', headerName: '위탁종료일', width: 90 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>연계처리(저장)</Button>
<Button variant="contained"  onClick={hook.btnFPISInfo_OnClick}>청시스템 상세보기</Button>
<Button variant="contained"  onClick={hook.btnAllChk_OnClick}>청정보 전체선택</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFPISBuldstaInfo?.OBJ_NM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>직능</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>세부직능</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFPISBuldstaInfo?.LEGALDONG_ADRES_NM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box> 대상물정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={5}><Box></Box></Grid><Grid item xs={12} md={2}><Box>대상물명</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnBuildingSearch_OnClick}>대상물검색</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소방관서</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFPISBuldstaInfo?.CMPN119SC_ID || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnApply_OnClick}>적용</Button></Grid><Grid item xs={12} md={2}><Box>주소</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFPISBuldstaInfo?.OBJ_SE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>공공기관여부</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFPISBuldstaInfo?.PBLINSTT_AT || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnSearchZipCode1_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={5}><Box></Box></Grid><Grid item xs={12} md={5}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>용도</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFPISBuldstaInfo?.MAIN_PRPOS || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>소방관서</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioFPISBuldstaInfo?.DYTM_TLPHON || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>업무대행여부</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>용도</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>전화번호</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>선임자정보</Box></Grid><Grid item xs={12} md={2}><Box> 고객정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioFPISArsonMngrInfo} columns={columns_gdFPISFireManager} />
                    </Paper>
                </Grid><Grid item xs={12} md={2}><Box>등록년월</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>회비부과년월</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>업무대행</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>고객상태</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioCustomerInfo?.CSTATUSGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6001PDataConnectionBuildingManageSaveData.ds_ds_oCustomerStatus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>인력구분</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>청구지주소</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>자격증</Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioFPISLicenseInfo} columns={columns_gdFPISLicense} />
                    </Paper>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnSearchZipCode2_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>정보</Box></Grid><Grid item xs={12} md={2}><Box>투입장소</Box></Grid><Grid item xs={12} md={5}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box> 선임자정보</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>개인식별번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMPERSONKEY || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>기존 선임대상물 해임처리</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>관계자정보</Box></Grid><Grid item xs={12} md={2}><Box>성명</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>주민번호</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnAuthResidentNo_OnClick}>실명인증</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioFPISPartcpntInfo} columns={columns_gdFPISOwner} />
                    </Paper>
                </Grid><Grid item xs={12} md={2}><Box>휴대폰</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnLicenseList_OnClick}>자격·수료정보조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>선임일자</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>해임여부</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>해임</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>관계자정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioOwnerInfo} columns={columns_gdOwner} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>업무대행정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioFPISEntrpsVrscInfo} columns={columns_gdFPISAgency} />
                    </Paper>
                </Grid><Grid item xs={12} md={2}><Box>업무대행정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioAgencyInfo} columns={columns_gdAgency} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6001PDataConnectionBuildingManageSave;

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