// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
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
                <Typography variant="h5">선임자목록팝업</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.btnNew_OnClick}>신규추가(F3)</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '199px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>휴대폰</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '268px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부선택</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust0018PManagerListData.ds_ds_oJibu || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">선임자현황</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSelect ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSelect_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>선택</Button></Box><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdManagerList ? undefined : 'none' }}><Paper sx={{ width: '584px', height: '158px', width: '100%', height: 'auto', minHeight: '158px' }}><DataGridWrapper rows={hook.ds_oManagerChange} columns={columns_gdManagerList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '584px', height: '22px' }}><Typography variant="body2">기존 선임정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '240px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 140, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>해임일지정(선택사항)</Typography>
                    <DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSaveManager ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSaveManager_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>해임처리</Button></Box><Box sx={{ display: hook.isVisible_btnMutilSort2 ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort2_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdManagerInfo ? undefined : 'none' }}><Paper sx={{ width: '584px', height: '139px', width: '100%', height: 'auto', minHeight: '139px' }}><DataGridWrapper rows={hook.ds_oManagerList} columns={columns_gdManagerInfo} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '107px', height: '22px' }}><Typography variant="body2">자격 및 수료정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSelectLicense ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSelectLicense_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>선택</Button></Box><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdLicenseList ? undefined : 'none' }}><Paper sx={{ width: '584px', height: '140px', width: '100%', height: 'auto', minHeight: '140px' }}><DataGridWrapper rows={hook.ds_oLicenseList} columns={columns_gdLicenseList} /></Paper></Box></Stack>

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