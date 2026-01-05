// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM9060MPersonalDownloadConfirm } from './useFrmCOM9060MPersonalDownloadConfirm';
import * as FrmCOM9060MPersonalDownloadConfirmData from './FrmCOM9060MPersonalDownloadConfirmData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const FrmCOM9060MPersonalDownloadConfirm = () => {
    const hook = useFrmCOM9060MPersonalDownloadConfirm();
    const columns_gdDownloadList1 = [
        { field: 'id_seq', headerName: '순번', width: 48, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1, sortable: false },
        { field: 'PCMENU', headerName: '메뉴', width: 179 },
        { field: 'PCTITLE', headerName: '제목', width: 169 },
        { field: 'PDHREASON', headerName: '사유', width: 253 },
        { field: 'PDHDWLDCNT', headerName: '건수', width: 51 },
        { field: 'PDHREGDATE', headerName: '일시', width: 129 },
        { field: 'PNM', headerName: '사용자', width: 62 },
    ];
    const columns_gdDownloadList2 = [
        { field: 'id_seq', headerName: '순번', width: 48, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1, sortable: false },
        { field: 'CNT', headerName: '다운로드 횟수', width: 155 },
        { field: 'REGHH', headerName: '다운로드 일시', width: 180 },
        { field: 'PNM', headerName: '사용자', width: 158 },
        { field: 'col_4', headerName: '내역보기', width: 86 },
    ];
    const columns_gdDownloadList3 = [
        { field: 'id_seq', headerName: '순번', width: 48, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1, sortable: false },
        { field: 'PCMENU', headerName: '메뉴', width: 177 },
        { field: 'PCTITLE', headerName: '제목', width: 162 },
        { field: 'PDHREASON', headerName: '사유', width: 193 },
        { field: 'ETC', headerName: '구분', width: 73 },
        { field: 'PDHDWLDCNT', headerName: '건수', width: 54 },
        { field: 'PDHREGDATE', headerName: '일시', width: 134 },
        { field: 'PNM', headerName: '사용자', width: 61 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">개인정보 다운로드 자료 점검</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "54px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '177px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmCOM9060MPersonalDownloadConfirmData.ds_ds_ioJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '143px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>년월</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmCOM9060MPersonalDownloadConfirmData.ds_ds_ioYear || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_cbxMonth ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '50px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmCOM9060MPersonalDownloadConfirmData.ds_ds_ioMonth || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Search} sx={{ width: '112px', height: '34px', whiteSpace: "nowrap" }}>  전체조회</Button></Box><Box sx={{ display: hook.isVisible_lbChk ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '249px', height: '29px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "13px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSearch1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '364px', height: '29px' }}><Typography variant="body2">과다 개인정보 다운로드(정보주체 100건 이상)</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '149px', height: '22px', display: 'flex', alignItems: 'center', ml: '456px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>정보주체 건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static8 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '44px', height: '22px' }}><Typography variant="body2">건 이상</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSearch1 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Search1} sx={{ width: '80px', height: '30px', whiteSpace: "nowrap" }}>조 회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdDownloadList1 ? undefined : 'none' }}><Paper sx={{ width: '880px', height: '164px', width: '100%', height: 'auto', minHeight: '164px' }}><DataGridWrapper rows={hook.ds_oDownloadList1} columns={columns_gdDownloadList1} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSearch2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '332px', height: '29px' }}><Typography variant="body2">1시간 내 과다 다운로드 횟수(20회 이상)</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '149px', height: '22px', display: 'flex', alignItems: 'center', ml: '456px' }}>
                    <Typography variant="body2" sx={{ minWidth: 90, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>다운로드 횟수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static10 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '44px', height: '22px' }}><Typography variant="body2">회 이상</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSearch2 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Search2} sx={{ width: '80px', height: '30px', whiteSpace: "nowrap" }}>조 회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdDownloadList2 ? undefined : 'none' }}><Paper sx={{ width: '880px', height: '164px', width: '100%', height: 'auto', minHeight: '164px' }}><DataGridWrapper rows={hook.ds_oDownloadList2} columns={columns_gdDownloadList2} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSearch3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '452px', height: '29px' }}><Typography variant="body2">비 업무시간 내 다운로드[근무일(21시~익일07시), 휴일]</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '147px', height: '22px', display: 'flex', alignItems: 'center', ml: '403px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>근무일 비업무시간</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '81px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 58, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>시 ~ 익일</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '15px', height: '22px' }}><Typography variant="body2">시</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSearch3 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Search3} sx={{ width: '80px', height: '30px', whiteSpace: "nowrap" }}>조 회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdDownloadList3 ? undefined : 'none' }}><Paper sx={{ width: '880px', height: '164px', width: '100%', height: 'auto', minHeight: '164px' }}><DataGridWrapper rows={hook.ds_oDownloadList3} columns={columns_gdDownloadList3} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '99px', height: '69px' }}><Typography variant="body2">다운로드
점검결과
전송</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '230px', height: '64px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>확인여부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (FrmCOM9060MPersonalDownloadConfirmData.ds_ds_ioChoiceGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '465px', height: '64px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 75, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조치사항</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSave_OnClick} sx={{ width: '77px', height: '68px', whiteSpace: "nowrap" }}>등록</Button></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM9060MPersonalDownloadConfirm;

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