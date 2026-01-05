// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmcust4020MBrochuresSendReport } from './useFrmcust4020MBrochuresSendReport';
import * as Frmcust4020MBrochuresSendReportData from './Frmcust4020MBrochuresSendReportData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust4020MBrochuresSendReport = () => {
    const hook = useFrmcust4020MBrochuresSendReport();
    const [chk_chkAll, setChk_chkAll] = useState('0');
    const [chk_chkBang1, setChk_chkBang1] = useState('0');
    const [chk_chkSobang, setChk_chkSobang] = useState('0');
    const [chk_chkDanger, setChk_chkDanger] = useState('0');
    const [chk_chkDanche, setChk_chkDanche] = useState('0');
    const [chk_chkPerson, setChk_chkPerson] = useState('0');
    const [chk_chkBang2, setChk_chkBang2] = useState('0');
    const [chk_chkGong1, setChk_chkGong1] = useState('0');
    const [chk_chkGong2, setChk_chkGong2] = useState('0');
    const [chk_chkSpecialBang, setChk_chkSpecialBang] = useState('0');
    const [chk_chkDateChoice, setChk_chkDateChoice] = useState('0');
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">홍보과 회지발송자료</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.textSave_OnClick}>2.Text파일변환</Button>
<Button variant="contained"  onClick={hook.lfn_Print2}>4.보고서(중복)</Button>
<Button variant="contained"  onClick={hook.lfn_Print1}>3.보고서(발송)</Button>
<Button variant="contained"  onClick={hook.lfn_Search}>1.자료생성</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '376px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust4020MBrochuresSendReportData.ds_ds_ioBizGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_fdOpenFile ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fdOpenFile</Button></Box><Box sx={{ display: hook.isVisible_filSaveFile_D ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>filSaveFile_D</Button></Box><Box sx={{ display: hook.isVisible_filSaveFile ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>filSaveFile</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '408px', height: '50px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생성방식</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust4020MBrochuresSendReportData.ds_ds_oCreateMode || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '165px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust4020MBrochuresSendReportData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '60px', height: '22px' }}><Typography variant="body2">직능</Typography></Box></Box><FormControlLabel control={<Checkbox checked={chk_chkAll === '1'} onChange={(e) => setChk_chkAll(e.target.checked ? '1' : '0')} />} label="전체" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkBang1 === '1'} onChange={(e) => setChk_chkBang1(e.target.checked ? '1' : '0')} />} label="1급소방안전관리자" /><FormControlLabel control={<Checkbox checked={chk_chkBang2 === '1'} onChange={(e) => setChk_chkBang2(e.target.checked ? '1' : '0')} />} label="2급소방안전관리자" /><FormControlLabel control={<Checkbox checked={chk_chkGong1 === '1'} onChange={(e) => setChk_chkGong1(e.target.checked ? '1' : '0')} />} label="공공1급소방안전관리자" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkGong2 === '1'} onChange={(e) => setChk_chkGong2(e.target.checked ? '1' : '0')} />} label="공공2급소방안전관리자" /><FormControlLabel control={<Checkbox checked={chk_chkSpecialBang === '1'} onChange={(e) => setChk_chkSpecialBang(e.target.checked ? '1' : '0')} />} label="특급소방안전관리자" /><FormControlLabel control={<Checkbox checked={chk_chkDanger === '1'} onChange={(e) => setChk_chkDanger(e.target.checked ? '1' : '0')} />} label="위험물안전관리자" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkSobang === '1'} onChange={(e) => setChk_chkSobang(e.target.checked ? '1' : '0')} />} label="소방기술자" /><FormControlLabel control={<Checkbox checked={chk_chkPerson === '1'} onChange={(e) => setChk_chkPerson(e.target.checked ? '1' : '0')} />} label="개인회원" /><FormControlLabel control={<Checkbox checked={chk_chkDanche === '1'} onChange={(e) => setChk_chkDanche(e.target.checked ? '1' : '0')} />} label="단체회원" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "13px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '128px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>반송체크</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '84px', height: '22px' }}><Typography variant="body2">번 이하 반송</Typography></Box></Box><FormControlLabel control={<Checkbox checked={chk_chkDateChoice === '1'} onChange={(e) => setChk_chkDateChoice(e.target.checked ? '1' : '0')} />} label="수령희망 날자지정" /><Box sx={{ display: hook.isVisible_CalDate ? undefined : 'none' }}><DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} /></Box><Box sx={{ display: hook.isVisible_lbDate ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '55px', height: '15px' }}><Typography variant="body2">이후자료</Typography></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust4020MBrochuresSendReport;

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