// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0030MTrainingJubsuList } from './useFrmtraining0030MTrainingJubsuList';
import * as Frmtraining0030MTrainingJubsuListData from './Frmtraining0030MTrainingJubsuListData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining0030MTrainingJubsuList = () => {
    const hook = useFrmtraining0030MTrainingJubsuList();
    const columns_Grid0 = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TOMGGTMGNO', headerName: '지부', width: 60 },
        { field: 'TOYEAR', headerName: '년도', width: 35 },
        { field: 'TOTRAININGORDER', headerName: '회차', width: 34 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'TJLASTSUNAPGUBUN', headerName: '수납', width: 61 },
        { field: 'TJPASSYN', headerName: '수료', width: 40 },
        { field: 'TOTCCOURSECD', headerName: '직능', width: 105 },
        { field: 'TOMUNJEGUBUNNM', headerName: '상세구분', width: 61 },
        { field: 'TJPERSONNM', headerName: '성명', width: 64 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 107 },
        { field: 'TSPROCAMOUNT', headerName: '총수납금액', width: 80 },
        { field: 'TOSTARTDATE', headerName: '교육시작일자', width: 90 },
        { field: 'TOENDDATE', headerName: '교육종료일자', width: 90 },
        { field: 'CYBERDATE', headerName: '사이버교육기간', width: 105 },
        { field: 'TJZIPCD', headerName: '우편번호', width: 70 },
        { field: 'TJADDR', headerName: '주소', width: 230 },
        { field: 'TPHPTEL', headerName: '휴대폰', width: 100 },
        { field: 'TPEMAIL', headerName: '이메일', width: 150 },
        { field: 'BOOKADDR', headerName: '교재수령지', width: 273 },
        { field: 'TJCOMPNM', headerName: '근무처', width: 150 },
    ];
    const columns_gdTrainingJubsu = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'SEL', headerName: 'SEL', width: 60 },
        { field: 'TOMGGTMGNO', headerName: '지부', width: 60 },
        { field: 'TOYEAR', headerName: '년도', width: 35 },
        { field: 'TOTRAININGORDER', headerName: '회차', width: 34 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'TJLASTSUNAPGUBUN', headerName: '수납', width: 61 },
        { field: 'TJPASSYN', headerName: '수료', width: 40 },
        { field: 'TOTCCOURSECD', headerName: '직능', width: 105 },
        { field: 'TOMUNJEGUBUNNM', headerName: '상세구분', width: 61 },
        { field: 'TJPERSONNM', headerName: '성명', width: 64 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 107 },
        { field: 'TSPROCAMOUNT', headerName: '총수납금액', width: 80 },
        { field: 'TOSTARTDATE', headerName: '교육시작일자', width: 90 },
        { field: 'TOENDDATE', headerName: '교육종료일자', width: 90 },
        { field: 'CYBERDATE', headerName: '사이버교육기간', width: 105 },
        { field: 'TJZIPCD', headerName: '우편번호', width: 70 },
        { field: 'TJADDR', headerName: '주소', width: 230 },
        { field: 'TPHPTEL', headerName: '휴대폰', width: 100 },
        { field: 'TPEMAIL', headerName: '이메일', width: 150 },
        { field: 'BOOKADDR', headerName: '교재수령지', width: 273 },
        { field: 'TJCOMPNM', headerName: '근무처', width: 150 },
    ];
    const columns_gdBookSend = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTTEAMNM', headerName: '지부', width: 100 },
        { field: 'TCCOURSENM', headerName: '교육과정', width: 152 },
        { field: 'STARTDATE', headerName: '교육시작일', width: 90 },
        { field: 'ENDDATE', headerName: '교육종료일', width: 90 },
        { field: 'JUBSUNO', headerName: '접수번호', width: 159 },
        { field: 'TJPERSONNM', headerName: '성명', width: 74 },
        { field: 'TPBOOKZIPCD', headerName: '수신자 우편번호', width: 113 },
        { field: 'TPBOOKADDR1', headerName: '수신자 주소1', width: 268 },
        { field: 'TPBOOKADDR2', headerName: '수신자 주소2', width: 268 },
        { field: 'TPHPTEL', headerName: '수신자 휴대폰', width: 100 },
        { field: 'GTZIPCODE', headerName: '발신자 우편번호', width: 113 },
        { field: 'GTADDR1', headerName: '발신자 주소1', width: 268 },
        { field: 'GTADDR2', headerName: '발신자 주소2', width: 268 },
        { field: 'GTTELEPHONENUMBER', headerName: '발신자 전화번호', width: 150 },
        { field: 'COURSEBOOK', headerName: '내용물', width: 214 },
        { field: 'SENDCOUNT', headerName: '수량', width: 47 },
        { field: 'BARCODE', headerName: '우편반송바코드', width: 150 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>접수자목록출력</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintAll}>수강증일괄출력</Button>
<Button variant="contained"  onClick={hook.lfn_PrintName}>강습접수자명단</Button>
<Button variant="contained"  onClick={hook.lfn_PrintNameBoard}>강습접수자명단(게시판용)</Button>
<Button variant="contained"  onClick={hook.lfn_PrintEvaluation}>생활안전강사 평가표</Button>
<Button variant="contained"  onClick={hook.lfn_PrintEvaluation53}>심폐소생술전문자격 평가표</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "57px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnPrintEmail ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnPrintEmail_OnClick} sx={{ width: '157px', height: '24px', whiteSpace: "nowrap" }}>이메일출력(TXT파일)</Button></Box><Box sx={{ display: hook.isVisible_btnPrintBookAddr ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_PrintBookAddr} sx={{ width: '106px', height: '24px', whiteSpace: "nowrap" }}>교재수령지출력</Button></Box><Box sx={{ display: hook.isVisible_btnPrintBookAddrAll ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_PrintBookAddr} sx={{ width: '132px', height: '24px', whiteSpace: "nowrap" }}>교재수령지출력(전체)</Button></Box><Box sx={{ display: hook.isVisible_btnFortec ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnFortec_OnClick} sx={{ width: '157px', height: '24px', whiteSpace: "nowrap" }}>Formtec(3107) 주소 출력</Button></Box><Box sx={{ display: hook.isVisible_btnPrintReRctPDF ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintReRct_OnClick} sx={{ width: '133px', height: '24px', whiteSpace: "nowrap" }}>영수증재발행(PDF용)</Button></Box><Box sx={{ display: hook.isVisible_fdOpenFile ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fdOpenFile</Button></Box><Box sx={{ display: hook.isVisible_filSaveFile ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>filSaveFile</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '179px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0030MTrainingJubsuListData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '128px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년도</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '273px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0030MTrainingJubsuListData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '269px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선택</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0030MTrainingJubsuListData.ds_ds_oSearchGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회차</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '44px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '192px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육종료일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '116px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '445px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수납여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0030MTrainingJubsuListData.ds_ds_oRepayYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '427px', height: '23px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 125, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>실시간 온라인 구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0030MTrainingJubsuListData.ds_ds_oOnlineGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '392px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수료여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0030MTrainingJubsuListData.ds_ds_oPassYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '356px', height: '22px', display: 'flex', alignItems: 'center', ml: '17px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선·후불구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0030MTrainingJubsuListData.ds_ds_oAmountGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '496px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회차변경여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0030MTrainingJubsuListData.ds_ds_oLastGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '496px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 116, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수첩비선수납여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmtraining0030MTrainingJubsuListData.ds_ds_oLicenseYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '180px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>접수자수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '177px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>영수증수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ ml: "4px", minWidth: "891px" }}><Box sx={{ display: hook.isVisible_Grid0 ? undefined : 'none' }}><Paper sx={{ width: '891px', height: '482px', width: '100%', height: 'auto', minHeight: '482px' }}><DataGridWrapper rows={hook.ds_oTrainingJubsu_Filter} columns={columns_Grid0} /></Paper></Box><Box sx={{ display: hook.isVisible_gdTrainingJubsu ? undefined : 'none' }}><Paper sx={{ width: '891px', height: '482px', width: '100%', height: 'auto', minHeight: '482px' }}><DataGridWrapper rows={hook.ds_oTrainingJubsu} columns={columns_gdTrainingJubsu} /></Paper></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdBookSend ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '130px', width: '100%', height: 'auto', minHeight: '130px' }}><DataGridWrapper rows={hook.ds_ioBookFilter} columns={columns_gdBookSend} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0030MTrainingJubsuList;

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