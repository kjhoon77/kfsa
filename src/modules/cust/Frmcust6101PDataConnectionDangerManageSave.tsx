// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6101PDataConnectionDangerManageSave } from './useFrmcust6101PDataConnectionDangerManageSave';
import * as Frmcust6101PDataConnectionDangerManageSaveData from './Frmcust6101PDataConnectionDangerManageSaveData';

export const Frmcust6101PDataConnectionDangerManageSave = () => {
    const hook = useFrmcust6101PDataConnectionDangerManageSave();
    const columns_gdFPISFireManager = [
        { field: 'SEL', headerName: 'SEL', width: 24 },
        { field: 'NM', headerName: '선임자명', width: 73 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 112 },
        { field: 'AP_APNTRLSOFC_DE', headerName: '선임일자', width: 89 },
        { field: 'AP_PROCESS_DE', headerName: '선임처리일자', width: 93 },
        { field: 'MOBLPHON', headerName: '휴대폰', width: 96 },
    ];
    const columns_gdFPISLicense = [
        { field: 'CRQFC_CODE_NM', headerName: '자격증명', width: 166 },
        { field: 'CRQFC_NO', headerName: '자격증번호', width: 136 },
        { field: 'CRQFC_ACQDT', headerName: '발급일자', width: 116 },
    ];
    const columns_gdDanger = [
        { field: 'SEL', headerName: 'SEL', width: 23 },
        { field: 'DSEQ', headerName: '순번', width: 35 },
        { field: 'DPERMISSIONNO', headerName: '허가번호', width: 138 },
        { field: 'DREMARK', headerName: '기타사항', width: 277 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>연계처리(저장)</Button>
<Button variant="contained"  onClick={hook.btnFPISInfo_OnClick}>청시스템 상세보기</Button>

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
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.OBJ_NM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>지부</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관리번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>지역</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>직능</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>세부직능</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치장소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ITLPCADDR1 || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box> 대상물정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={5}><Box></Box></Grid><Grid item xs={12} md={2}><Box>대상물명</Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnBuildingSearch_OnClick}>대상물검색</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소방관서</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.CMPFRSTT_CMPN119SC_NM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnApply_OnClick}>적용</Button></Grid><Grid item xs={12} md={2}><Box>주소</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>제조소 구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.MNFCTRETC_SE_CODE_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>제조소상세구분</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.MNFCTRETC_DETAIL_SE_CODE_NM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnSearchZipCode1_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={5}><Box></Box></Grid><Grid item xs={12} md={5}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>설치자 정보</Box></Grid><Grid item xs={12} md={2}><Box>소방관서</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치자명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치자법인명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_CPR_NM || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>전화번호</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치자주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLRADDR1 || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box> 고객정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={5}><Box></Box></Grid><Grid item xs={12} md={2}><Box>등록년월</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>회비부과년월</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.INSTLR_TELNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>고객상태</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioCustomerInfo?.CSTATUSGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6101PDataConnectionDangerManageSaveData.ds_ds_oCustomerStatus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>인력구분</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>선임자정보</Box></Grid><Grid item xs={12} md={2}><Box>청구지주소</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioDanManagerInfo} columns={columns_gdFPISFireManager} />
                    </Paper>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnSearchZipCode2_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={4}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>투입장소</Box></Grid><Grid item xs={12} md={5}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box> 선임자정보</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>개인식별번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioManagerInfo?.FMPERSONKEY || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>기존 선임대상물 해임처리</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>자격증</Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioDanManagerInfo} columns={columns_gdFPISLicense} />
                    </Paper>
                </Grid><Grid item xs={12} md={2}><Box>성명</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>주민번호</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnAuthResidentNo_OnClick}>실명인증</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>정보</Box></Grid><Grid item xs={12} md={2}><Box>휴대폰</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnLicenseList_OnClick}>자격·수료정보조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>선임일자</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>해임여부</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>해임</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>허가정보</Box></Grid><Grid item xs={12} md={2}><Box>허가정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>설치(변경)허가번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.ITL_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>허가번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.PRMISN_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioDangerInfo} columns={columns_gdDanger} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최초착공일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.FRST_STRWRK_DE || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>완공일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioDanMnfctretcInfo?.COMPET_DE || ''} />
                    </Stack>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6101PDataConnectionDangerManageSave;

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