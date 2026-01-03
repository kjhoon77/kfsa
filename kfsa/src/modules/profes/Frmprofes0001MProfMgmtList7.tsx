// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0001MProfMgmtList7 } from './useFrmprofes0001MProfMgmtList7';
import * as Frmprofes0001MProfMgmtList7Data from './Frmprofes0001MProfMgmtList7Data';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0001MProfMgmtList7 = () => {
    const hook = useFrmprofes0001MProfMgmtList7();
    const [tabValue_TAB_Profes, setTabValue_TAB_Profes] = useState(0);
    const columns_gdList = [
        { field: 'LHPROCGTMGNO', headerName: '지부', width: 0 },
        { field: 'EMSCNM', headerName: '소속', width: 120 },
        { field: 'VAL_TT', headerName: '평균', width: 80 },
        { field: 'TOTALQTY', headerName: '사례수', width: 92 },
    ];
    const columns_gdList_2 = [
        { field: 'LHPROCGTMGNO', headerName: '지부', width: 0 },
        { field: 'EMSCNM', headerName: '소속', width: 100 },
        { field: 'VAL_TT', headerName: '평균', width: 92 },
        { field: 'TOTALQTY', headerName: '사례수', width: 92 },
    ];
    const columns_gdList_3 = [
        { field: 'LHPROCGTMGNO', headerName: '지부', width: 0 },
        { field: 'EMSCNM', headerName: '소속', width: 100 },
        { field: 'VAL_TT', headerName: '평균', width: 92 },
    ];
    const columns_gdList_4 = [
        { field: 'LHPROCGTMGNO', headerName: '지부', width: 0 },
        { field: 'EMSCNM', headerName: '소속', width: 100 },
        { field: 'VAL_TT', headerName: '평균', width: 92 },
    ];
    const columns_gdList_5 = [
        { field: 'LHPROCGTMGNO', headerName: '지부', width: 0 },
        { field: 'EMSCNM', headerName: '소속', width: 100 },
        { field: 'VAL_TT', headerName: '평균', width: 92 },
    ];
    const columns_gdList_6 = [
        { field: 'LHPROCGTMGNO', headerName: '지부', width: 0 },
        { field: 'EMSCNM', headerName: '소속', width: 100 },
        { field: 'VAL_TT', headerName: '평균', width: 92 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '207px', height: '24px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 107, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회년도</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '112px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { minWidth: "120px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '107px', height: '24px' }}><Typography variant="body2">응답인원(응답률)</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '139px', height: '24px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>강습 :</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '139px', height: '24px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 42, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>실무 :</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '211px', height: '24px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 107, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmprofes0001MProfMgmtList7Data.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_TAB_Profes ? undefined : 'none' }}><Box sx={{ width: '1260px', height: '658px', width: "100%", height: "auto", minHeight: "658px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_TAB_Profes} onChange={(e, v) => setTabValue_TAB_Profes(v)} aria-label="TAB_Profes"><Tab label="강습교육만족도(과정별)" /><Tab label="실무교육만족도(과정별)" /><Tab label="강습교육만족도(항목별)" /><Tab label="실무교육만족도(항목별)" /><Tab label="강습교육만족도(지부별)" /><Tab label="실무교육만족도(지부별)" /></Tabs></Box><CustomTabPanel value={tabValue_TAB_Profes} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_XChart1 ? undefined : 'none' }}><Box sx={{ width: '952px', height: '593px', border: '1px dashed grey' }}>Unknown: XChart</Box></Box><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '300px', height: '348px', width: '100%', height: 'auto', minHeight: '348px' }}><DataGridWrapper rows={hook.ds_ioListChart1} columns={columns_gdList} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Profes} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_XChart1_2 ? undefined : 'none' }}><Box sx={{ width: '952px', height: '593px', border: '1px dashed grey' }}>Unknown: XChart</Box></Box><Box sx={{ display: hook.isVisible_gdList_2 ? undefined : 'none' }}><Paper sx={{ width: '300px', height: '235px', width: '100%', height: 'auto', minHeight: '235px' }}><DataGridWrapper rows={hook.ds_ioListChart2} columns={columns_gdList_2} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Profes} index={2}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_XChart1_3 ? undefined : 'none' }}><Box sx={{ width: '952px', height: '593px', border: '1px dashed grey' }}>Unknown: XChart</Box></Box><Box sx={{ display: hook.isVisible_gdList_3 ? undefined : 'none' }}><Paper sx={{ width: '300px', height: '276px', width: '100%', height: 'auto', minHeight: '276px' }}><DataGridWrapper rows={hook.ds_ioListChart3} columns={columns_gdList_3} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Profes} index={3}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_XChart1_4 ? undefined : 'none' }}><Box sx={{ width: '952px', height: '593px', border: '1px dashed grey' }}>Unknown: XChart</Box></Box><Box sx={{ display: hook.isVisible_gdList_4 ? undefined : 'none' }}><Paper sx={{ width: '300px', height: '268px', width: '100%', height: 'auto', minHeight: '268px' }}><DataGridWrapper rows={hook.ds_ioListChart4} columns={columns_gdList_4} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Profes} index={4}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_XChart1_5 ? undefined : 'none' }}><Box sx={{ width: '952px', height: '593px', border: '1px dashed grey' }}>Unknown: XChart</Box></Box><Box sx={{ display: hook.isVisible_gdList_5 ? undefined : 'none' }}><Paper sx={{ width: '300px', height: '476px', width: '100%', height: 'auto', minHeight: '476px' }}><DataGridWrapper rows={hook.ds_ioListChart5} columns={columns_gdList_5} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Profes} index={5}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_XChart1_6 ? undefined : 'none' }}><Box sx={{ width: '952px', height: '593px', border: '1px dashed grey' }}>Unknown: XChart</Box></Box><Box sx={{ display: hook.isVisible_gdList_6 ? undefined : 'none' }}><Paper sx={{ width: '300px', height: '460px', width: '100%', height: 'auto', minHeight: '460px' }}><DataGridWrapper rows={hook.ds_ioListChart6} columns={columns_gdList_6} /></Paper></Box></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0001MProfMgmtList7;

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