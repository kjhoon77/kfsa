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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "35px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '25px', height: '105px' }}><Typography variant="body2">조


회</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"  onClick={hook.lfn_Search} sx={{ width: '85px', height: '92px' }}>조회(F2)</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMemJoinH ? undefined : 'none' }}><Paper sx={{ width: '671px', height: '142px', width: '100%', height: 'auto', minHeight: '142px' }}><DataGridWrapper rows={hook.ds_oMemJoinH} columns={columns_gdMemJoinH} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '133px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '183px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '133px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '168px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회원식별번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "15px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '108px', height: '22px' }}><Typography variant="body2">회원정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '181px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리바코드</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnOverbiz ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnConcurrentH_OnClick} sx={{ width: '80px', height: '24px' }}>겸직정보</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMemberInfo ? undefined : 'none' }}><Paper sx={{ width: '980px', height: '258px', width: '100%', height: 'auto', minHeight: '258px' }}><DataGridWrapper rows={hook.ds_oMemberInfo} columns={columns_gdMemberInfo} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '108px', height: '22px' }}><Typography variant="body2">회비정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnFeeDetailInfo ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnFeeDetailInfo_OnClick} sx={{ width: '66px', height: '24px' }}>상세정보</Button></Box><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '108px', height: '22px' }}><Typography variant="body2">실무교육정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnEduDataHList ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnEduDataHList_OnClick} sx={{ width: '105px', height: '24px' }}>안내문 발행이력</Button></Box><Box sx={{ display: hook.isVisible_btnEduDetailInfo ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnEduDetailInfo_OnClick} sx={{ width: '66px', height: '24px' }}>상세정보</Button></Box><Box sx={{ display: hook.isVisible_btnEduDataPrint ? undefined : 'none' }}><Button variant="contained"  onClick={hook.lfn_EduDataPrint} sx={{ width: '105px', height: '24px' }}>교육안내문 출력</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid1 ? undefined : 'none' }}><Paper sx={{ width: '476px', height: '167px', width: '100%', height: 'auto', minHeight: '167px' }}><DataGridWrapper rows={hook.ds_ioCustomerFeeInfo} columns={columns_Grid1} /></Paper></Box><Box sx={{ display: hook.isVisible_gdEduInfo ? undefined : 'none' }}><Paper sx={{ width: '496px', height: '196px', width: '100%', height: 'auto', minHeight: '196px' }}><DataGridWrapper rows={hook.ds_ioEducationPassInfo} columns={columns_gdEduInfo} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbAccountNo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '133px', height: '22px' }}><Typography variant="body2">고객 은행 가상계좌</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnShowVirtualAccount ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnShowVirtualAccount_OnClick} sx={{ width: '134px', height: '24px' }}>은행 가상계좌 보기</Button></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

                    <Dialog open={hook.isPopDiv0Open} onClose={hook.closePopDiv0} maxWidth="md" fullWidth>
                        <DialogTitle>PopDiv0</DialogTitle>
                        <DialogContent>
                            <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btn_EduDetailClose ? undefined : 'none' }}><Button variant="contained"  onClick={hook.Div3_btn_EduDetailClose_OnClick} sx={{ width: '38px', height: '24px' }}>닫기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdOverBizInfo ? undefined : 'none' }}><Paper sx={{ width: '490px', height: '187px', width: '100%', height: 'auto', minHeight: '187px' }}><DataGridWrapper rows={hook.ds_ioOverBizInfo} columns={columns_gdOverBizInfo} /></Paper></Box></Stack>

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