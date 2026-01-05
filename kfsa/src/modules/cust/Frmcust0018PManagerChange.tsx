// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0018PManagerChange } from './useFrmcust0018PManagerChange';
import * as Frmcust0018PManagerChangeData from './Frmcust0018PManagerChangeData';

export const Frmcust0018PManagerChange = () => {
    const hook = useFrmcust0018PManagerChange();
    const columns_gdManagerList = [
        { field: 'SEL', headerName: '해임여부', width: 70 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 90 },
        { field: 'CGTMGNO', headerName: '지부', width: 70 },
        { field: 'CNO', headerName: '관리번호', width: 67 },
        { field: 'RCNM', headerName: '지역', width: 60 },
        { field: 'BNM', headerName: '대상물(업체명)', width: 140 },
        { field: 'CCOURSECD', headerName: '직능', width: 80 },
        { field: 'BADDR', headerName: '주소', width: 240 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 60 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'COVERCMGNO', headerName: '겸직구분', width: 70 },
    ];
    const columns_Grid0 = [
        { field: 'FMRESIDENTERR', headerName: 'FMRESIDENTERR', width: 80 },
        { field: 'CCOURSECD', headerName: 'CCOURSECD', width: 80 },
        { field: 'BNM', headerName: 'BNM', width: 80 },
        { field: 'BADDR1', headerName: 'BADDR1', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">선임자정보변경</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Save}>선임정보변경</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "44px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbModifyGubun ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '419px', height: '24px' }}><Typography variant="body2">Static6</Typography></Box></Box><Box sx={{ display: hook.isVisible_radModifyGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '300px', height: '22px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust0018PManagerChangeData.ds_ds_ModifyGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "117px", minWidth: "450px" }}><Box sx={{ display: hook.isVisible_lbText01 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '450px', height: '46px' }}><Typography variant="body2">동일인에 대한 이름 또는 주민번호를 변경합니다.
기존 정보가 변경되오니 신중히 변경하시기 바랍니다.</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbText02 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '450px', height: '32px' }}><Typography variant="body2">선임자를 잘못 선임한 경우 선임대상자를 변경합니다.
선임자가 타인으로 변경되오니 신중히 변경하시기 바랍니다.</Typography></Box></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "23px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbPersonInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">기존정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">변경정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '156px', height: '17px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '14px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearch_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>선임현황조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '142px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "70px", minWidth: "91px" }}><Box sx={{ display: hook.isVisible_lbResidentNo2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">   주민번호</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnKeyinJumin ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnKeyinJumin_OnClick} sx={{ width: '26px', height: '24px', whiteSpace: "nowrap" }}>KEY
IN</Button></Box></Box><Box sx={{ display: hook.isVisible_medResidentNo2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '106px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_lbResidentNoError ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '82px', height: '22px' }}><Typography variant="body2">주민번호등록됨</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnAuthResidentNo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnAuthResidentNo_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>실명인증</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '178px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "34px", minWidth: "91px" }}><Box sx={{ display: hook.isVisible_lbPTel ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">휴대폰</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnKeyinHP ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnKeyinHP_OnClick} sx={{ width: '26px', height: '24px', whiteSpace: "nowrap" }}>KEY
IN</Button></Box></Box><Box sx={{ display: hook.isVisible_edPTel ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '108px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnLicenseList ? undefined : 'none' }}><Button variant="contained" color="secondary"  onClick={hook.btnLicenseList_OnClick} sx={{ width: '118px', height: '24px', whiteSpace: "nowrap" }}>자격·수료정보조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '219px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일</Typography>
                    <DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '234px', height: '22px', display: 'flex', alignItems: 'center', ml: '205px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수첩번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "7px", minWidth: "587px" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '308px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 140, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회원가입동의 상태</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust0018PManagerChangeData.ds_ds_MemberGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Div0 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '378px', height: '47px', width: '100%', height: 'auto', minHeight: '47px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}></Stack></Paper></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '197px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동의일자</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '584px', height: '22px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '240px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 140, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>해임일지정(선택사항)</Typography>
                    <DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSaveManager ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSaveManager_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>해임처리</Button></Box><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdManagerList ? undefined : 'none' }}><Paper sx={{ width: '584px', height: '244px', width: '100%', height: 'auto', minHeight: '244px' }}><DataGridWrapper rows={hook.ds_oManagerList} columns={columns_gdManagerList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radMember ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '260px', height: '22px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust0018PManagerChangeData.ds_ds_MemberGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnMemberSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnMemberSave_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>회원상태저장</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "29px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid0 ? undefined : 'none' }}><Paper sx={{ width: '590px', height: '104px', width: '100%', height: 'auto', minHeight: '104px' }}><DataGridWrapper rows={hook.ds_oOldInfo} columns={columns_Grid0} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0018PManagerChange;

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