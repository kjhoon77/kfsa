// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmspcleduStat0070 } from './useFrmspcleduStat0070';
import * as FrmspcleduStat0070Data from './FrmspcleduStat0070Data';

export const FrmspcleduStat0070 = () => {
    const hook = useFrmspcleduStat0070();
    const [tabValue_TAB_Training, setTabValue_TAB_Training] = useState(0);
    const columns_gdList = [
        { field: 'GTDEPTNM', headerName: '지부', width: 60 },
        { field: 'BCTHSLATSUM', headerName: '총계', width: 81 },
        { field: 'PCFETHSLAT', headerName: '방화관리자', width: 65 },
        { field: 'FTFETHSLAT', headerName: '1급', width: 65 },
        { field: 'SDFETHSLAT', headerName: '2급정규', width: 65 },
        { field: 'SDFEMUNJETHSLAT', headerName: '2급면제', width: 65 },
        { field: 'DSSETHSLAT', headerName: '위험물', width: 65 },
        { field: 'DSCRTHSLAT', headerName: '운송자', width: 65 },
        { field: 'DSUYTHSLAT', headerName: '통합자', width: 65 },
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "47px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '27px', display: 'flex', alignItems: 'center', ml: '20px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_calDateTo ? undefined : 'none' }}><DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true } }} sx={{ width: '109px', height: '27px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearch_OnClick} sx={{ width: '37px', height: '24px', whiteSpace: "nowrap" }}>검색</Button></Box><Box sx={{ display: hook.isVisible_btnExcell ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnExcell_OnClick} sx={{ width: '53px', height: '24px', whiteSpace: "nowrap" }}>엑셀</Button></Box><Box sx={{ display: hook.isVisible_btnPrint ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrint_OnClick} sx={{ width: '65px', height: '24px', whiteSpace: "nowrap" }}>출력</Button></Box><Box sx={{ display: hook.isVisible_btnPrintChart ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintChart_OnClick} sx={{ width: '55px', height: '24px', whiteSpace: "nowrap" }}>화면인쇄</Button></Box><Box sx={{ display: hook.isVisible_btnPrintWarmun ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintWarmun_OnClick} sx={{ width: '55px', height: '24px', whiteSpace: "nowrap" }}>화면인쇄</Button></Box><Box sx={{ display: hook.isVisible_btnClose ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_End} sx={{ width: '55px', height: '24px', whiteSpace: "nowrap" }}>화면인쇄</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '11px', height: '14px' }}><Typography variant="body2">~</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "25px", py: 0.5, width: "100%" }}><Box sx={{ ml: "8px", minWidth: "760px" }}><Box sx={{ display: hook.isVisible_TAB_Training ? undefined : 'none' }}><Box sx={{ width: '760px', height: '723px', width: "100%", height: "auto", minHeight: "723px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_TAB_Training} onChange={(e, v) => setTabValue_TAB_Training(v)} aria-label="TAB_Training"><Tab label="    현    황    " /><Tab label="    Chart    " /></Tabs></Box><CustomTabPanel value={tabValue_TAB_Training} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '742px', height: '688px', width: '100%', height: 'auto', minHeight: '688px' }}><DataGridWrapper rows={hook.ds_exampass} columns={columns_gdList} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Training} index={1}></CustomTabPanel></Box></Box><Box sx={{ display: hook.isVisible_StartDate ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '76px', height: '14px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">[단위 : 천원]</Typography></Box></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmspcleduStat0070;

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