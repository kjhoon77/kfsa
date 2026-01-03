// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmitem0021MEduEquipmentHMgmt } from './useFrmitem0021MEduEquipmentHMgmt';
import * as Frmitem0021MEduEquipmentHMgmtData from './Frmitem0021MEduEquipmentHMgmtData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmitem0021MEduEquipmentHMgmt = () => {
    const hook = useFrmitem0021MEduEquipmentHMgmt();
    const columns_gdEduEquipmentH = [
        { field: 'no', headerName: '순번', width: 40 },
        { field: 'MGGTMGNO', headerName: '관리부서', width: 77 },
        { field: 'EIKINDGUBUNNM', headerName: '교재분류', width: 0 },
        { field: 'EQHCD', headerName: '품목코드', width: 81 },
        { field: 'EQHNM', headerName: '교육기자재명', width: 142 },
        { field: 'EQHQTY', headerName: '수량', width: 57 },
        { field: 'EQHBUYDATE', headerName: '구입일자', width: 80 },
        { field: 'EQHBUYAMOUNT', headerName: '취득금액', width: 90 },
        { field: 'HOLDGUBUN', headerName: '보유상태', width: 82 },
        { field: 'DISCARDGUBUN', headerName: '폐기구분', width: 62 },
        { field: 'EQHDISCARDDATE', headerName: '폐기일자', width: 76 },
        { field: 'EQHREMARK', headerName: '설치위치', width: 178 },
        { field: 'BUYGTMGNO', headerName: '구입부서', width: 91 },
        { field: 'EQHITEMNO', headerName: '품목번호', width: 68 },
        { field: 'EQHBUYSEQ', headerName: '구입순번', width: 71 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Input}>추가 저장</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Delete}>삭제 저장</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '170px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0021MEduEquipmentHMgmtData.ds_ds_oJibuAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '173px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구입일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '1px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '139px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdEduEquipmentH ? undefined : 'none' }}><Paper sx={{ width: '791px', height: '322px', width: '100%', height: 'auto', minHeight: '322px' }}><DataGridWrapper rows={hook.ds_ioEduEquipmentH} columns={columns_gdEduEquipmentH} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '186px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0021MEduEquipmentHMgmtData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_lbStatus ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '94px', height: '28px' }}><Typography variant="body2">추가모드</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '20px', height: '72px' }}><Typography variant="body2">품
목
분
류</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '323px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대분류</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduEquipmentHUnit?.EQHEQCCD1 || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0021MEduEquipmentHMgmtData.ds_ds_oCode1 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '20px', height: '72px' }}><Typography variant="body2">집
기
비
품</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '173px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구입일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '323px', height: '22px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>중분류</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduEquipmentHUnit?.EQHEQCCD2 || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0021MEduEquipmentHMgmtData.ds_ds_oCode2 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '184px', height: '22px', display: 'flex', alignItems: 'center', ml: '52px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구입부서</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0021MEduEquipmentHMgmtData.ds_ds_oBuyJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '323px', height: '22px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 50, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>소분류</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduEquipmentHUnit?.EQHEQCCD3 || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0021MEduEquipmentHMgmtData.ds_ds_oCode3 || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '123px', height: '22px', display: 'flex', alignItems: 'center', ml: '52px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>품목번호</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduEquipmentHUnit?.EQHITEMNO || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '123px', height: '22px', display: 'flex', alignItems: 'center', ml: '60px' }}>
                    <Typography variant="body2" sx={{ minWidth: 70, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구입순번</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduEquipmentHUnit?.EQHBUYSEQ || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '432px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육기자재명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduEquipmentHUnit?.EQHNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static13 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '20px', height: '114px' }}><Typography variant="body2">이

미

지</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static7 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '89px', height: '22px' }}><Typography variant="body2">이미지 파일</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnImage ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnImage_OnClick} sx={{ width: '108px', height: '24px', whiteSpace: "nowrap" }}>이미지 업로드</Button></Box><Box sx={{ display: hook.isVisible_imgPicture ? undefined : 'none' }}><Box sx={{ width: '100px', height: '116px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgPicture</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '152px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수량</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduEquipmentHUnit?.EQHQTY || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0021MEduEquipmentHMgmtData.ds_ds_oQty || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '173px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>취득금액</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select value={hook.ds_ioEduEquipmentHUnit?.EQHBUYGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0021MEduEquipmentHMgmtData.ds_ds_oBuyGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_medBuyAmount ? undefined : 'none' }}><TextField size="small" fullWidth value={hook.ds_ioEduEquipmentHUnit?.EQHBUYAMOUNT || ''} sx={{ width: '86px', height: '23px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_Static12 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '20px', height: '22px' }}><Typography variant="body2">원</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edImageFile ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '212px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '432px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>보유상태</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} value={hook.ds_ioEduEquipmentHUnit?.EQHHOLDGUBUN || ''}>{ (Frmitem0021MEduEquipmentHMgmtData.ds_ds_oHoldGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_fiAttachFile ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fiAttachFile</Button></Box><Box sx={{ display: hook.isVisible_fdAttachFile ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fdAttachFile</Button></Box><Box sx={{ display: hook.isVisible_hfAttachFile ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>hfAttachFile</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnLoadImage ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnLoadImage_OnClick} sx={{ width: '108px', height: '24px', whiteSpace: "nowrap" }}>이미지 확대보기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '432px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>설치위치</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduEquipmentHUnit?.EQHREMARK || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxDiscardGubun ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '92px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.ds_ioEduEquipmentHUnit?.EQHDISCARDGUBUN || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmitem0021MEduEquipmentHMgmtData.ds_ds_oDiscardGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_lbFileSize ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2"></Typography></Box></Box><Box sx={{ display: hook.isVisible_btnImageDownload ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnImageDownload_OnClick} sx={{ width: '108px', height: '24px', whiteSpace: "nowrap" }}>이미지 다운로드</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static16 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '70px', height: '22px' }}><Typography variant="body2">폐기 등</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static17 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '60px', height: '22px' }}><Typography variant="body2">구분</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '183px', height: '22px', display: 'flex', alignItems: 'center', ml: '102px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>폐기일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmitem0021MEduEquipmentHMgmt;

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