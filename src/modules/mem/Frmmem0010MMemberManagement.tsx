// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmmem0010MMemberManagement } from './useFrmmem0010MMemberManagement';
import * as Frmmem0010MMemberManagementData from './Frmmem0010MMemberManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmmem0010MMemberManagement = () => {
    const hook = useFrmmem0010MMemberManagement();
    const columns_gdMemberInfo = [
        { field: 'id', headerName: '순번', width: 38, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTDEPTNM', headerName: '지부', width: 58 },
        { field: 'CNO', headerName: '관리번호', width: 70 },
        { field: 'RCNM', headerName: '지역', width: 56 },
        { field: 'CNICKNM', headerName: '직능', width: 89 },
        { field: 'MBNM', headerName: '대상물명', width: 138 },
        { field: 'MNAME', headerName: '성명', width: 63 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 78 },
        { field: 'MPERSONKEY', headerName: '회원식별번호', width: 100 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 79 },
        { field: 'CFEEYYMM', headerName: '회비부과년월', width: 90 },
        { field: 'OVERGUBUN', headerName: '겸직', width: 38 },
        { field: 'MADDR', headerName: '대상물주소', width: 428 },
    ];
    const columns_Grid1 = [
        { field: 'CFGYEAR', headerName: '년도', width: 63 },
        { field: 'CFCCGUBUN', headerName: '회비구분', width: 72 },
        { field: 'MINAPFEE', headerName: '미납금액', width: 100 },
        { field: 'SUNAPFEE', headerName: '수납금액', width: 100 },
    ];
    const columns_gdEduInfo = [
        { field: 'id', headerName: '이수확인증', width: 65, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'EPYEAR', headerName: '년도', width: 37 },
        { field: 'ESSTUDENT', headerName: '교육', width: 60 },
        { field: 'EPSUCCESSIONGUBUN', headerName: '구분', width: 70 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 76 },
        { field: 'EPPERSONNM', headerName: '성명', width: 56 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 83 },
        { field: 'EPPERSONKEY', headerName: '회원식별번호', width: 92 },
        { field: 'EPPROCGTMGNO', headerName: '교육지부', width: 70 },
        { field: 'ESGUBUN', headerName: '교육구분', width: 60 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 200 },
        { field: 'EPPASSREMARK', headerName: '중복 이수처리 사유', width: 278 },
    ];
    const columns_gdOverBizInfo = [
        { field: 'CGTMGNO', headerName: '지부', width: 50 },
        { field: 'CNO', headerName: '회원번호', width: 60 },
        { field: 'CNICKFULLNM', headerName: '직능', width: 100 },
        { field: 'COVERGUBUN', headerName: '면제여부', width: 60 },
        { field: 'BNM', headerName: '업체명', width: 140 },
        { field: 'MINAPFEE', headerName: '미납금액', width: 61 },
        { field: 'BBIZCD', headerName: '업종', width: 80 },
    ];
    const columns_gdMemJoinH = [
        { field: 'id', headerName: '순번', width: 45, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'STATUSGUBUN', headerName: '가입/탈퇴구분', width: 124 },
        { field: 'STATUSREASON', headerName: '가입/탈퇴사유', width: 150 },
        { field: 'PROCDATE', headerName: '처리일시', width: 199 },
        { field: 'PROCNM', headerName: '처리자', width: 131 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조


회</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_Search}>조회(F2)</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관리번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>{ hook.isVisible_gdMemJoinH && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>성명</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>생년월일</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회원식별번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>회원정보</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관리바코드</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" color="secondary" onClick={hook.openPopDiv0}>겸직정보</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oMemberInfo} columns={columns_gdMemberInfo} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>회비정보</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnFeeDetailInfo_OnClick}>상세정보</Button></Grid><Grid item xs={12} md={2}><Box>실무교육정보</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnEduDataHList_OnClick}>안내문 발행이력</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnEduDetailInfo_OnClick}>상세정보</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_EduDataPrint}>교육안내문 출력</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioCustomerFeeInfo} columns={columns_Grid1} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioEducationPassInfo} columns={columns_gdEduInfo} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>고객 은행 가상계좌</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnShowVirtualAccount_OnClick}>은행 가상계좌 보기</Button></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

                    <Dialog open={hook.isPopDiv0Open} onClose={hook.closePopDiv0} maxWidth="md" fullWidth>
                        <DialogTitle>PopDiv0</DialogTitle>
                        <DialogContent>
                            <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.Div3_btn_EduDetailClose_OnClick}>닫기</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioOverBizInfo} columns={columns_gdOverBizInfo} />
                    </Paper>
                </Grid></Grid>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={hook.closePopDiv0}>Close</Button>
                        </DialogActions>
                    </Dialog>
        </PageContainer>
    );
};
export default Frmmem0010MMemberManagement;

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