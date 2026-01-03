// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6580MDataMatchErrorReport } from './useFrmcust6580MDataMatchErrorReport';
import * as Frmcust6580MDataMatchErrorReportData from './Frmcust6580MDataMatchErrorReportData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust6580MDataMatchErrorReport = () => {
    const hook = useFrmcust6580MDataMatchErrorReport();
    const [chk_chkObjNm, setChk_chkObjNm] = useState('0');
    const [chk_chkCourse, setChk_chkCourse] = useState('0');
    const [chk_chkManagerJumin, setChk_chkManagerJumin] = useState('0');
    const [chk_chkAddress, setChk_chkAddress] = useState('0');
    const [chk_chkManagerNm, setChk_chkManagerNm] = useState('0');
    const columns_gdList1 = [
        { field: 'RCCDNM', headerName: '데이터 연계분 연계 오류현황(소방안전관리자)', width: 34 },
        { field: 'MREGDATE', headerName: '연계일자', width: 79 },
        { field: 'SERCHNM', headerName: '청정보', width: 180 },
        { field: 'COURSENM', headerName: '대상구분', width: 80 },
        { field: 'NM', headerName: '선임자', width: 70 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'ADDRESS1', headerName: '주소', width: 150 },
        { field: 'BSEARCHNM', headerName: '안전원정보', width: 180 },
        { field: 'COURSENM2', headerName: '직능', width: 80 },
        { field: 'FMNM', headerName: '선임자', width: 70 },
        { field: 'FBIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'ADDRESS2', headerName: '주소', width: 150 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "54px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">조회 조건</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "11px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '249px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지 부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6580MDataMatchErrorReportData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '249px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직 능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6580MDataMatchErrorReportData.ds_ds_ioCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '228px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>처리일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '121px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '352px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>비교조건</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6580MDataMatchErrorReportData.ds_ds_ioChoiceYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkCourse === '1'} onChange={(e) => setChk_chkCourse(e.target.checked ? '1' : '0')} />} label="직능" /><FormControlLabel control={<Checkbox checked={chk_chkObjNm === '1'} onChange={(e) => setChk_chkObjNm(e.target.checked ? '1' : '0')} />} label="대상물명" /><FormControlLabel control={<Checkbox checked={chk_chkAddress === '1'} onChange={(e) => setChk_chkAddress(e.target.checked ? '1' : '0')} />} label="주소(동,번지)" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkManagerNm === '1'} onChange={(e) => setChk_chkManagerNm(e.target.checked ? '1' : '0')} />} label="선임자명" /><FormControlLabel control={<Checkbox checked={chk_chkManagerJumin === '1'} onChange={(e) => setChk_chkManagerJumin(e.target.checked ? '1' : '0')} />} label="선임자주민번호" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radSearchGubn ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '340px', height: '47px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6580MDataMatchErrorReportData.ds_ds_ioGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "15px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static13 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">정렬순서</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radOrder ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '487px', height: '92px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6580MDataMatchErrorReportData.ds_ds_ioOrder || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "190px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList1 ? undefined : 'none' }}><Paper sx={{ width: '759px', height: '207px', width: '100%', height: 'auto', minHeight: '207px' }}><DataGridWrapper rows={hook.ds_oDATA} columns={columns_gdList1} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6580MDataMatchErrorReport;

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