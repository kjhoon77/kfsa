// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0001MProfMgmtList4 } from './useFrmprofes0001MProfMgmtList4';
import * as Frmprofes0001MProfMgmtList4Data from './Frmprofes0001MProfMgmtList4Data';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0001MProfMgmtList4 = () => {
    const hook = useFrmprofes0001MProfMgmtList4();
    const [tabValue_TAB_Profes, setTabValue_TAB_Profes] = useState(0);
    const columns_gdList = [
        { field: 'GTGUBUNNM', headerName: '구분', width: 100 },
        { field: 'TOTALTEAM', headerName: 'TOTALTEAM', width: 100 },
        { field: 'STOTALTEAM', headerName: '전임교수', width: 120 },
        { field: 'ATEAM', headerName: '교수', width: 120 },
        { field: 'BTEAM', headerName: '부교수', width: 120 },
        { field: 'CTEAM', headerName: '조교수', width: 120 },
        { field: 'DTEAM', headerName: '겸임교수', width: 120 },
    ];
    const columns_Grid0 = [
        { field: 'PFYEAR', headerName: '구분', width: 100 },
        { field: 'TOTALTEAM', headerName: '총계', width: 100 },
        { field: 'STOTALTEAM', headerName: '전임교수', width: 120 },
        { field: 'ATEAM', headerName: '교수', width: 120 },
        { field: 'BTEAM', headerName: '부교수', width: 120 },
        { field: 'CTEAM', headerName: '조교수', width: 120 },
        { field: 'DTEAM', headerName: '겸임교수', width: 120 },
    ];
    const columns_Grid1 = [
        { field: 'PFNAME', headerName: '교수등급', width: 100 },
        { field: 'PFQTY', headerName: '분석내용', width: 120 },
        { field: 'LTIME', headerName: '강의시간', width: 120 },
        { field: 'TIMESHARE', headerName: '강의시간점유율', width: 120 },
        { field: 'INDISTRIVUTIONRATE', headerName: '인원분포율', width: 120 },
        { field: 'INTIME', headerName: '1인당 강의시간', width: 120 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "51px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbTrainingOrderUseYnLabel ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '306px', height: '22px' }}><Typography variant="body2">□ 평가결과</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '126px', height: '22px', display: 'flex', alignItems: 'center', ml: '322px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회일자</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search} sx={{ width: '85px', height: '24px' }}>조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '842px', height: '144px', width: '100%', height: 'auto', minHeight: '144px' }}><DataGridWrapper rows={hook.ds_ioList} columns={columns_gdList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '306px', height: '22px' }}><Typography variant="body2">□ 전년 대비 교수 등급변동 현황</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '126px', height: '22px', display: 'flex', alignItems: 'center', ml: '268px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회일자</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '50px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search2} sx={{ width: '85px', height: '24px' }}>조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "11px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid0 ? undefined : 'none' }}><Paper sx={{ width: '842px', height: '144px', width: '100%', height: 'auto', minHeight: '144px' }}><DataGridWrapper rows={hook.ds_ioList2} columns={columns_Grid0} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '306px', height: '22px' }}><Typography variant="body2">□ 등급별 교수현황 및 강의시간</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '126px', height: '22px', display: 'flex', alignItems: 'center', ml: '323px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회일자</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Button1 ? undefined : 'none' }}><Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search3} sx={{ width: '85px', height: '24px' }}>조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_TAB_Profes ? undefined : 'none' }}><Box sx={{ width: '842px', height: '567px', width: "100%", height: "auto", minHeight: "567px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_TAB_Profes} onChange={(e, v) => setTabValue_TAB_Profes(v)} aria-label="TAB_Profes"><Tab label="    현    황    " /></Tabs></Box><CustomTabPanel value={tabValue_TAB_Profes} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid1 ? undefined : 'none' }}><Paper sx={{ width: '833px', height: '228px', width: '100%', height: 'auto', minHeight: '228px' }}><DataGridWrapper rows={hook.ds_ioList3} columns={columns_Grid1} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_XChart1 ? undefined : 'none' }}><Box sx={{ width: '831px', height: '345px', border: '1px dashed grey' }}>Unknown: XChart</Box></Box></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0001MProfMgmtList4;

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