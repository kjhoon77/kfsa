// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0005MLecHistory } from './useFrmprofes0005MLecHistory';
import * as Frmprofes0005MLecHistoryData from './Frmprofes0005MLecHistoryData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';
import { Frmprofes0005S01LecHistory } from './Frmprofes0005S01LecHistory';
import { Frmprofes0005S02LecHistory } from './Frmprofes0005S02LecHistory';
import { Frmprofes0005S03LecHistory } from './Frmprofes0005S03LecHistory';

export const Frmprofes0005MLecHistory = () => {
    const hook = useFrmprofes0005MLecHistory();
    const [tabValue_tabTab, setTabValue_tabTab] = useState(0);
    const columns_gdStudyCourse = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'EDUTEAMNM', headerName: '지부', width: 50 },
        { field: 'EDUYEAR', headerName: '년도', width: 44 },
        { field: 'EDUGUBUN', headerName: '구분', width: 70 },
        { field: 'EDUCOURSENM', headerName: '교육과정', width: 140 },
        { field: 'EDUORDER', headerName: '교육회차', width: 65 },
        { field: 'EDUDATE', headerName: '교육일자', width: 180 },
        { field: 'EDUSTATUS', headerName: '상태', width: 80 },
        { field: 'EDULOWTIME', headerName: '법정시간', width: 65 },
        { field: 'EDUWRTTIME', headerName: '입력시간', width: 60 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Delete}>삭제 저장</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.btnCreate_OnClick}>시간표출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '132px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 52, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmprofes0005MLecHistoryData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '148px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmprofes0005MLecHistoryData.ds_ds_oGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '286px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육과정</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmprofes0005MLecHistoryData.ds_ds_oCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '84px', height: '22px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 52, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회차</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_chkEduUnion ? undefined : 'none' }}><Box sx={{ width: '72px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '132px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 52, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상태</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmprofes0005MLecHistoryData.ds_ds_Status || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '170px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육일</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '116px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 16, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_chkStudy ? undefined : 'none' }}><Box sx={{ width: '175px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdStudyCourse ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '223px', width: '100%', height: 'auto', minHeight: '223px' }}><DataGridWrapper rows={hook.ds_ioStudyCourse} columns={columns_gdStudyCourse} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btn_apprReq ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btn_apprReq_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>승인요청</Button></Box><Box sx={{ display: hook.isVisible_btn_modAppr ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btn_modAppr_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>수정허가</Button></Box><Box sx={{ display: hook.isVisible_btn_appr ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btn_appr_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>승인</Button></Box><Box sx={{ display: hook.isVisible_btnEduUnion ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnEduUnion_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>통합강의적용</Button></Box><Box sx={{ display: hook.isVisible_btnOldLecture ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnOldLecture_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>기존자료적용</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab ? undefined : 'none' }}><Box sx={{ width: '792px', height: '297px', width: "100%", height: "auto", minHeight: "297px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab} onChange={(e, v) => setTabValue_tabTab(v)} aria-label="tabTab"><Tab label="시간표배정" /><Tab label="교수배정" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab} index={0}><Frmprofes0005S01LecHistory /></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={1}><Frmprofes0005S03LecHistory /></CustomTabPanel></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_div1 ? undefined : 'none' }}><Paper sx={{ p: 2, width: '792px', height: '278px', width: '100%', height: 'auto', minHeight: '278px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Frmprofes0005S02LecHistory /></Stack></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0005MLecHistory;

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