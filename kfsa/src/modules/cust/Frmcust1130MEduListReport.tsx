// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1130MEduListReport } from './useFrmcust1130MEduListReport';
import * as Frmcust1130MEduListReportData from './Frmcust1130MEduListReportData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust1130MEduListReport = () => {
    const hook = useFrmcust1130MEduListReport();
    const columns_gdList1N = [
        { field: 'GTTEAMNM', headerName: '지부', width: 68 },
        { field: 'RCNM', headerName: '지역', width: 61 },
        { field: 'CNO', headerName: '관리번호', width: 92 },
        { field: 'CNICKNM', headerName: '직능', width: 98 },
        { field: 'BNM', headerName: '업체명', width: 147 },
        { field: 'EPPERSONNM', headerName: '이름', width: 61 },
        { field: 'ADDR', headerName: '주소', width: 183 },
        { field: 'EPYEAR', headerName: 'EPYEAR', width: 54 },
        { field: 'BTEL', headerName: '전화번호', width: 90 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 100 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 96 },
        { field: 'CCCDNM', headerName: '용도', width: 96 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 89 },
        { field: 'SUCCESSIONGUBUN', headerName: '교육구분', width: 90 },
        { field: 'FMHMAIL', headerName: '이메일', width: 129 },
        { field: 'FSTNSMALL_NM', headerName: '119안전센터', width: 133 },
    ];
    const columns_gdList2 = [
        { field: 'GTTEAMNM', headerName: '지부', width: 68 },
        { field: 'RCNM', headerName: '지역', width: 61 },
        { field: 'CNO', headerName: '관리번호', width: 171 },
        { field: 'BNM', headerName: '업체명', width: 147 },
        { field: 'EPPERSONNM', headerName: '이름', width: 61 },
        { field: 'ADDR', headerName: '주소', width: 183 },
        { field: 'YEAR2', headerName: 'YEAR2', width: 54 },
        { field: 'YEAR3', headerName: 'YEAR3', width: 54 },
        { field: 'BTEL', headerName: '전화번호', width: 90 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 95 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 97 },
        { field: 'CCCDNM', headerName: '용도', width: 94 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 100 },
        { field: 'FMHMAIL', headerName: '이메일', width: 129 },
        { field: 'FSTNSMALL_NM', headerName: '119안전센터', width: 133 },
    ];
    const columns_gdList3 = [
        { field: 'GTTEAMNM', headerName: '지부', width: 68 },
        { field: 'RCNM', headerName: '지역', width: 61 },
        { field: 'CNO', headerName: '관리번호', width: 171 },
        { field: 'BNM', headerName: '업체명', width: 147 },
        { field: 'EPPERSONNM', headerName: '이름', width: 61 },
        { field: 'ADDR', headerName: '주소', width: 183 },
        { field: 'YEAR1', headerName: 'YEAR1', width: 54 },
        { field: 'YEAR2', headerName: 'YEAR2', width: 54 },
        { field: 'YEAR3', headerName: 'YEAR3', width: 54 },
        { field: 'BTEL', headerName: '전화번호', width: 90 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 85 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 97 },
        { field: 'CCCDNM', headerName: '용도', width: 78 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 100 },
        { field: 'FMHMAIL', headerName: '이메일', width: 129 },
        { field: 'FSTNSMALL_NM', headerName: '119안전센터', width: 133 },
    ];
    const columns_gdList1Y = [
        { field: 'GTTEAMNM', headerName: '지부', width: 68 },
        { field: 'RCNM', headerName: '지역', width: 61 },
        { field: 'CNO', headerName: '관리번호', width: 75 },
        { field: 'CNICKNM', headerName: '직능', width: 111 },
        { field: 'BNM', headerName: '업체명', width: 147 },
        { field: 'EPPERSONNM', headerName: '이름', width: 61 },
        { field: 'ADDR', headerName: '주소', width: 183 },
        { field: 'EPYEAR', headerName: 'EPYEAR', width: 54 },
        { field: 'BTEL', headerName: '전화번호', width: 90 },
        { field: 'FMHHPTEL', headerName: '핸드폰번호', width: 100 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 96 },
        { field: 'CCCDNM', headerName: '용도', width: 96 },
        { field: 'STARTDATE', headerName: '선임일자', width: 89 },
        { field: 'FMHSTARTDATE', headerName: '교육일자', width: 89 },
        { field: 'SUCCESSIONGUBUN', headerName: '교육구분', width: 90 },
        { field: 'FMHMAIL', headerName: '이메일', width: 129 },
        { field: 'FSTNSMALL_NM', headerName: '119안전센터', width: 133 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnExcell_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radReport ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '484px', height: '102px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioReport || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box><Box sx={{ display: hook.isVisible_radOrder ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '248px', height: '102px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioOrder || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Div0 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '294px', height: '72px', width: '100%', height: 'auto', minHeight: '72px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}></Stack></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">조회 조건</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static7 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">출력구분</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '145px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상년도</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_ioYear || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '214px', height: '22px', display: 'flex', alignItems: 'center', ml: '18px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_ioCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_radPrintGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '248px', height: '30px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioOrder_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "8px", minWidth: "320px" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '320px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioGijun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxJibu ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '97px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Box><Box sx={{ display: hook.isVisible_cbxBonbu ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '98px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_oBonbu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static9 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">미이수 횟수 선택</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '274px', height: '46px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioChoice || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxRegion1 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '139px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radNotEduSelect ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '248px', height: '26px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioOrder3 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxRegion2 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '121px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '140px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '273px', height: '46px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>안전센터</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioChoice || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxMFCenter1 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '139px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_oFireCenterCd || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_Static11 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">제외조건</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxMFCenter2 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '142px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_oFireCenterCd2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '162px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_oFireCenterCd2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ ml: "114px", minWidth: "220px" }}><Box sx={{ display: hook.isVisible_chkBfEdu ? undefined : 'none' }}><Box sx={{ width: '194px', height: '25px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_calEduYmdFr ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '100px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '254px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>고객구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioMemberGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_calBfYmdFr ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '100px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>용도</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioChoiceYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxBusinessType1 ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '121px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_oAdditionInfo || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '141px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust1130MEduListReportData.ds_ds_oAdditionInfo || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_chkTrainingExcept ? undefined : 'none' }}><Box sx={{ width: '228px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리번호</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioChoiceYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_medMgno1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '52px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '72px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_CalTrainingStart ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '100px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '188px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일자</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioChoiceYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_calStartDate ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '100px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">관리제외대상</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '148px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>가입년월</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static6 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '128px', height: '22px' }}><Typography variant="body2">※ 이전자료</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radExcept ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '248px', height: '22px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioChoiceYn_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '208px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>삭제자출력</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioPrintGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '244px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 112, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리번호출력선택</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioPrintGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '280px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>이수구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioIssue || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static23 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '124px', height: '22px' }}><Typography variant="body2">( 지역-직능 )</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static26 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">업무대행</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '480px', height: '38px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육이관여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioSuccessionGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_radAgencyGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '248px', height: '42px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioAgencyGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '381px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육대상</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioEduGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static15 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '191px', height: '22px' }}><Typography variant="body2">공공기관선임자 미이수자 자료</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">교육년도</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '248px', height: '22px', display: 'flex', alignItems: 'center', ml: '372px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>기관장</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioChoiceYn_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_stEduYear ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '484px', height: '50px' }}><Typography variant="body2"></Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '248px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>감독적직위</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioChoiceYn_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '248px', height: '22px', display: 'flex', alignItems: 'center', ml: '504px' }}>
                    <Typography variant="body2" sx={{ minWidth: 76, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>기타</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust1130MEduListReportData.ds_ds_ioChoiceYn_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "24px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList1N ? undefined : 'none' }}><Paper sx={{ width: '748px', height: '110px', width: '100%', height: 'auto', minHeight: '110px' }}><DataGridWrapper rows={hook.ds_EduList1} columns={columns_gdList1N} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList1Y ? undefined : 'none' }}><Paper sx={{ width: '748px', height: '110px', width: '100%', height: 'auto', minHeight: '110px' }}><DataGridWrapper rows={hook.ds_EduList1} columns={columns_gdList1Y} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1130MEduListReport;

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