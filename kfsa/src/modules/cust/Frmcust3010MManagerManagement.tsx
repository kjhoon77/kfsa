// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust3010MManagerManagement } from './useFrmcust3010MManagerManagement';
import * as Frmcust3010MManagerManagementData from './Frmcust3010MManagerManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust3010MManagerManagement = () => {
    const hook = useFrmcust3010MManagerManagement();
    const columns_gdManagerList = [
        { field: 'id', headerName: '순번', width: 39, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'FMNM', headerName: '성명', width: 50 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 98 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 98 },
        { field: 'CGTMGNO', headerName: '관리지부', width: 60 },
        { field: 'CNO', headerName: '관리번호', width: 60 },
        { field: 'RCNM', headerName: '지역', width: 60 },
        { field: 'CCOURSECD', headerName: '직능', width: 100 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 61 },
        { field: 'FMHHPTEL', headerName: '휴대폰', width: 100 },
        { field: 'EMAILID', headerName: '이메일', width: 110 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 160 },
        { field: 'BBIZCD', headerName: '용도', width: 140 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'FMHENDDATE', headerName: '해임일자', width: 80 },
        { field: 'FMHADDR', headerName: '주소', width: 240 },
        { field: 'FMHREGSABUN', headerName: '등록자', width: 80 },
        { field: 'FMHREGDATE', headerName: '등록일', width: 80 },
        { field: 'FMHMODSABUN', headerName: '수정자', width: 80 },
        { field: 'FMHMODDATE', headerName: '수정일', width: 80 },
    ];
    const columns_gdManagerPassList = [
        { field: 'EPYEAR', headerName: '년도', width: 60 },
        { field: 'ESGUBUN', headerName: '구분', width: 60 },
        { field: 'EPPERSONNM', headerName: '성명', width: 80 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 98 },
        { field: 'EPPERSONKEY', headerName: '개인식별번호', width: 98 },
        { field: 'EPPROCGTMGNO', headerName: '교육지부', width: 60 },
        { field: 'ESSTUDENT', headerName: '교육대상', width: 63 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 90 },
        { field: 'CGTMGNO', headerName: '관리지부', width: 60 },
        { field: 'CNO', headerName: '관리번호', width: 60 },
        { field: 'RCNM', headerName: '지역', width: 60 },
        { field: 'CCOURSECD', headerName: '직능', width: 100 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 61 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 200 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.btn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "66px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbJubsu ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">선임자 관리</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdManagerList ? undefined : 'none' }}><Paper sx={{ width: '784px', height: '354px', width: '100%', height: 'auto', minHeight: '354px' }}><DataGridWrapper rows={hook.ds_oManagerList} columns={columns_gdManagerList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '124px', height: '22px' }}><Typography variant="body2">개인 교육 관리</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnMutilSort2 ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdManagerPassList ? undefined : 'none' }}><Paper sx={{ width: '784px', height: '166px', width: '100%', height: 'auto', minHeight: '166px' }}><DataGridWrapper rows={hook.ds_oManagerPassList} columns={columns_gdManagerPassList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust3010MManagerManagement;

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