// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0680MSMSSendManagement } from './useFrmtraining0680MSMSSendManagement';
import * as Frmtraining0680MSMSSendManagementData from './Frmtraining0680MSMSSendManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining0680MSMSSendManagement = () => {
    const hook = useFrmtraining0680MSMSSendManagement();
    const [chk_chkReseve, setChk_chkReseve] = useState('0');
    const columns_gdSms = [
        { field: 'SEL', headerName: 'SEL', width: 29 },
        { field: 'TOYEAR', headerName: '년도', width: 49 },
        { field: 'TOTCCOURSECD', headerName: '분야', width: 132 },
        { field: 'TOTRAININGORDER', headerName: '회차', width: 42 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 63 },
        { field: 'TJPERSONNM', headerName: '성명', width: 64 },
        { field: 'TPHPTEL', headerName: '휴대폰', width: 99 },
        { field: 'TOSTARTDATE', headerName: '교육시작일', width: 85 },
        { field: 'TOENDDATE', headerName: '교육종료일', width: 84 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_SendList}>발송이력조회</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "65px", py: 0.5, width: "100%" }}><Box sx={{ ml: "4px", minWidth: "708px" }}><Box sx={{ display: hook.isVisible_divWork4 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '624px', height: '146px', width: '100%', height: 'auto', minHeight: '146px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}></Stack></Paper></Box><Box sx={{ display: hook.isVisible_divWork3 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '624px', height: '146px', width: '100%', height: 'auto', minHeight: '146px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "54px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '392px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>위촉여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0680MSMSSendManagementData.ds_ds_SendYN || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
</Stack></Paper></Box><Box sx={{ display: hook.isVisible_divWork1 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '708px', height: '171px', width: '100%', height: 'auto', minHeight: '171px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "54px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '568px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수납여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0680MSMSSendManagementData.ds_ds_oSunapYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ ml: "2px", minWidth: "568px" }}><Box sx={{ display: hook.isVisible_lbExamPassYn ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '24px' }}><Typography variant="body2">합격여부</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '492px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 220, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>실시간온라인 실무능력평가 합격여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0680MSMSSendManagementData.ds_ds_oExamPassYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_radEvaluationPassYn ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '345px', height: '24px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0680MSMSSendManagementData.ds_ds_oEvaluationPassYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '392px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수료여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0680MSMSSendManagementData.ds_ds_oTrainingPassYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
</Stack></Paper></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static14 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '263px', height: '74px' }}><Typography variant="body2">＃ 재 조회 시 작성문자 초기화 됩니다.

   필요시 조회 전에 복사하여 사용 

   하시기 바랍니다. </Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '146px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '146px', height: '22px', display: 'flex', alignItems: 'center', ml: '14px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선택건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgSmsTraining ? undefined : 'none' }}><Box sx={{ width: '287px', height: '489px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgSmsTraining</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdSms ? undefined : 'none' }}><Paper sx={{ width: '708px', height: '520px', width: '100%', height: 'auto', minHeight: '520px' }}><DataGridWrapper rows={hook.ds_ioSmsTraining} columns={columns_gdSms} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnSearchSmsPattern ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_SMSPatternList} sx={{ width: '112px', height: '27px', whiteSpace: "nowrap" }}>    문자유형 선택</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "28px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_taMessage ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '226px', height: '263px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbLength ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '30px', height: '18px' }}><Typography variant="body2">0</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbTotalLength ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '30px', height: '18px' }}><Typography variant="body2">Byte</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "12px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edReplyNumber ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '122px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "19px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkReseve === '1'} onChange={(e) => setChk_chkReseve(e.target.checked ? '1' : '0')} />} label="" /><Box sx={{ display: hook.isVisible_calReserveDate ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ minWidth: "120px", width: '94px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_medReserveTime ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '40px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "21px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnSend ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Send} sx={{ width: '112px', height: '27px', whiteSpace: "nowrap" }}>   보 내 기</Button></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0680MSMSSendManagement;

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