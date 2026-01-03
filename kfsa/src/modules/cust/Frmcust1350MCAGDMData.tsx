// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1350MCAGDMData } from './useFrmcust1350MCAGDMData';
import * as Frmcust1350MCAGDMDataData from './Frmcust1350MCAGDMDataData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust1350MCAGDMData = () => {
    const hook = useFrmcust1350MCAGDMData();
    const columns_gdExamOrder = [
        { field: 'SELA', headerName: 'SELA', width: 50 },
        { field: 'GTTEAMNM', headerName: '지부', width: 80 },
        { field: 'RCNM', headerName: '지역', width: 80 },
        { field: 'CNICKNM', headerName: '직능', width: 80 },
        { field: 'CNO', headerName: '관리번호', width: 63 },
        { field: 'BNM', headerName: '대상물명', width: 190 },
        { field: 'FMNM', headerName: '이름', width: 69 },
        { field: 'BADDR', headerName: '주소', width: 200 },
        { field: 'BTEL', headerName: '전화번호', width: 100 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 100 },
        { field: 'CCCDNM', headerName: '용도', width: 122 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 100 },
        { field: 'TRAININGEXPIREDATE', headerName: 'TRAININGEXPIREDATE', width: 128 },
        { field: 'TJREGDATE', headerName: 'TJREGDATE', width: 133 },
        { field: 'TPPASSDATE', headerName: 'TPPASSDATE', width: 133 },
    ];
    const columns_Grid1 = [
        { field: 'SEL', headerName: 'SEL', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '254px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 104, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1350MCAGDMDataData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static9 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '22px' }}><Typography variant="body2">자료 생성 결과</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '299px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 104, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일</Typography>
                    <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1350MCAGDMDataData.ds_ds_oCourse || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cldAPNT_DE_8 ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '99px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '113px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>/</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '114px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '172px', height: '22px', display: 'flex', alignItems: 'center', ml: '40px' }}>
                    <Typography variant="body2" sx={{ minWidth: 116, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>추출 대상자수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static27 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '17px', height: '22px' }}><Typography variant="body2">명</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '299px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 104, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수료구분</Typography>
                    <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1350MCAGDMDataData.ds_ds_2 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_radGUBUN2 ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '320px', height: '22px' }}><RadioGroup row >{ (Frmcust1350MCAGDMDataData.ds_ds_3 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl></Box><Box sx={{ display: hook.isVisible_btnExcelPrint1 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnExcelPrint1_OnClick} sx={{ width: '184px', height: '49px' }}>출력(EXCEL)</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '299px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 104, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>강습교육접수자</Typography>
                    <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1350MCAGDMDataData.ds_ds_oTJubsu || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbTextBlue ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '524px', height: '55px' }}><Typography variant="body2">※ 유효기간 선택은 수료구분이 [ 수료 ] 일때만 선택이 가능합니다.
 
 조회 DATA중 빨간색 글씨는 유효기간 경과를 의미합니다.</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSms ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSms_OnClick} sx={{ width: '184px', height: '49px' }}>문자발송</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '170px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 116, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>발송 대상건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static6 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '17px', height: '22px' }}><Typography variant="body2">건</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdExamOrder ? undefined : 'none' }}><Paper sx={{ width: '864px', height: '474px', width: '100%', height: 'auto', minHeight: '474px' }}><DataGridWrapper rows={hook.ds_ioDMList} columns={columns_gdExamOrder} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid1 ? undefined : 'none' }}><Paper sx={{ width: '223px', height: '240px', width: '100%', height: 'auto', minHeight: '240px' }}><DataGridWrapper rows={hook.ds_ioDMList1} columns={columns_Grid1} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1350MCAGDMData;

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