// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmTrainingStat0020 } from './useFrmTrainingStat0020';
import * as FrmTrainingStat0020Data from './FrmTrainingStat0020Data';

export const FrmTrainingStat0020 = () => {
    const hook = useFrmTrainingStat0020();
    const [tabValue_TAB_Training, setTabValue_TAB_Training] = useState(0);
    const columns_gdList = [
        { field: 'GTTEAMNM', headerName: '지부', width: 81 },
        { field: 'TSPAYAMT', headerName: '총계', width: 160 },
        { field: 'TSPAYPAY_BANG1', headerName: '소방안전관리자', width: 130 },
        { field: 'TSPAYPAY_BANG2', headerName: '2급', width: 138 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    
                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '27px', display: 'flex', alignItems: 'center', ml: '22px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_calDateTo ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ minWidth: "120px", width: '109px', height: '27px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_Button0_2 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearch_OnClick} sx={{ width: '37px', height: '24px', whiteSpace: "nowrap" }}>검색</Button></Box><Box sx={{ display: hook.isVisible_btnExcell ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnExcell_OnClick} sx={{ width: '53px', height: '24px', whiteSpace: "nowrap" }}>엑셀</Button></Box><Box sx={{ display: hook.isVisible_btnPrint ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrint_OnClick} sx={{ width: '65px', height: '24px', whiteSpace: "nowrap" }}>출력</Button></Box><Box sx={{ display: hook.isVisible_btnPrintChart ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintChart_OnClick} sx={{ width: '55px', height: '24px', whiteSpace: "nowrap" }}>화면인쇄</Button></Box><Box sx={{ display: hook.isVisible_btnPrintWarmun ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintWarmun_OnClick} sx={{ width: '55px', height: '24px', whiteSpace: "nowrap" }}>화면인쇄</Button></Box><Box sx={{ display: hook.isVisible_btnClose ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_End} sx={{ width: '55px', height: '24px', whiteSpace: "nowrap" }}>화면인쇄</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '11px', height: '14px' }}><Typography variant="body2">~</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "23px", py: 0.5, width: "100%" }}><Box sx={{ ml: "11px", minWidth: "765px" }}><Box sx={{ display: hook.isVisible_TAB_Training ? undefined : 'none' }}><Box sx={{ width: '760px', height: '724px', width: "100%", height: "auto", minHeight: "724px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_TAB_Training} onChange={(e, v) => setTabValue_TAB_Training(v)} aria-label="TAB_Training"><Tab label="    현    황    " /><Tab label="    Chart    " /></Tabs></Box><CustomTabPanel value={tabValue_TAB_Training} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '750px', height: '686px', width: '100%', height: 'auto', minHeight: '686px' }}><DataGridWrapper rows={hook.ds_exampass} columns={columns_gdList} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Training} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_XChart0 ? undefined : 'none' }}><Box sx={{ width: '408px', height: '298px', border: '1px dashed grey' }}>Unknown: XChart</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_XChart2 ? undefined : 'none' }}><Box sx={{ width: '392px', height: '266px', border: '1px dashed grey' }}>Unknown: XChart</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="contained"    sx={{ width: '47px', height: '22px', whiteSpace: "nowrap" }}>직능</Button></Box><Box sx={{ display: hook.isVisible_cbxBang ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '80px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmTrainingStat0020Data.ds_ds_Bang || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_Button1 ? undefined : 'none' }}><Button variant="contained"    sx={{ width: '47px', height: '22px', whiteSpace: "nowrap" }}>지부</Button></Box><Box sx={{ display: hook.isVisible_cbxJibu ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '80px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmTrainingStat0020Data.ds_ds_Jibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "180px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_XChart1 ? undefined : 'none' }}><Box sx={{ width: '758px', height: '444px', border: '1px dashed grey' }}>Unknown: XChart</Box></Box></Stack>
</CustomTabPanel></Box></Box><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '48px', height: '22px' }}><Typography variant="body2">[단위 :</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '56px', height: '22px' }}><Typography variant="body2"> 건, 원]</Typography></Box></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmTrainingStat0020;

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