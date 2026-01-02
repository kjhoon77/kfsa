// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu0250MLicenseIssueManagement } from './useFrmspcledu0250MLicenseIssueManagement';
import * as Frmspcledu0250MLicenseIssueManagementData from './Frmspcledu0250MLicenseIssueManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmspcledu0250MLicenseIssueManagement = () => {
    const hook = useFrmspcledu0250MLicenseIssueManagement();
    const columns_gdLcsInfo = [
        { field: 'id', headerName: '순번', width: 34, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TCCOURSENM', headerName: '직능', width: 112 },
        { field: 'LLCSNO', headerName: '수첩번호', width: 139 },
        { field: 'LISSUEDATE', headerName: '취득일', width: 72 },
        { field: 'LCANCELDATE', headerName: '폐기일', width: 72 },
        { field: 'LISSUEGUBUNNM', headerName: '취득구분', width: 95 },
        { field: 'LCANCELREASON', headerName: '폐기사유', width: 207 },
    ];
    const columns_gdSetlmt = [
        { field: 'id', headerName: '순번', width: 41, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LSLHSEQ', headerName: '발급구분', width: 65 },
        { field: 'LSPROCDATE', headerName: '처리일자', width: 82 },
        { field: 'LSSUNAPGUBUN', headerName: '선수납', width: 55 },
        { field: 'LSGUBUNCDNM', headerName: '결제구분', width: 96 },
        { field: 'LSGUBUNNM', headerName: '결제방법', width: 158 },
        { field: 'LSPROCAMOUNT', headerName: '금액(원)', width: 64 },
        { field: 'LSREPAYREF', headerName: '환불No', width: 58 },
        { field: 'LSREGSABUNNM', headerName: '처리자', width: 73 },
        { field: 'TSJUMUNNO', headerName: '주문번호', width: 106 },
    ];
    const columns_gdLcsHistory = [
        { field: 'id', headerName: '순번', width: 32, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LHISSUEREASON', headerName: '발급구분', width: 68 },
        { field: 'LHPRTDATE', headerName: '발급일자', width: 76 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_InfoSave}>수첩정보 및 바코드 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>최근사진</Box></Grid><Grid item xs={12} md={2}><Box>사진</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>성명</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSearchPersonInfo_OnClick}>기본정보조회</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnTPModify_OnClick}>접수자 정보 변경</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주민번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnAuthResidentNo_OnClick}>실명인증</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>수첩번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_Search}>번호조회</Button></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>바코드</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnBarCodeSearch_OnClick}>바코드조회</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>개인정보</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnSearchZipCode_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={5}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnApplyPicture_OnClick}>최근사진반영</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnScanPicture_OnClick}>사진스캔실행</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전화번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>휴대폰</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSearchRegPicture_OnClick}>등록사진조회</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnLoadScanPicture_OnClick}>스캔사진불러오기</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>근무처</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPictureManagement_OnClick}>사진관리</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnLoadPicture_OnClick}>사진찾기</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>수첩정보</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>최초취득일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>교육기간</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>발급일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_Save}>수첩 재발급</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmspcledu0250MLicenseIssueManagementData.ds_ds_oCourse || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>구분</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmspcledu0250MLicenseIssueManagementData.ds_ds_oIssueGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_Print}>수첩 출력</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_Delete}>수첩 폐기</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>수첩보유현황</Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oLicense} columns={columns_gdLcsInfo} />
                    </Paper>
                </Grid><Grid item xs={12} md={2}><Box>수첩발급이력</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnLcsImage_OnClick}>이미지보기</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oLicenseH} columns={columns_gdLcsHistory} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>결제내역</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSetlmt_OnClick}>결제(POS)</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPosReport_OnClick}>통합영수증조회</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPosResultList_OnClick}>결제처리결과조회</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSeqList_OnClick}>처리일자변경</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnProcRct_OnClick}>현금영수증처리/취소</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPrintReRct_OnClick}>영수증재발행</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oSetlmentHist} columns={columns_gdSetlmt} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu0250MLicenseIssueManagement;

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