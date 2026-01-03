// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0001MProfMgmt } from './useFrmprofes0001MProfMgmt';
import * as Frmprofes0001MProfMgmtData from './Frmprofes0001MProfMgmtData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';
import { Frmprofes0001S01ProfMgmt } from './Frmprofes0001S01ProfMgmt';
import { Frmprofes0001S02ProfMgmt } from './Frmprofes0001S02ProfMgmt';
import { Frmprofes0001S03ProfMgmt } from './Frmprofes0001S03ProfMgmt';
import { Frmprofes0001S04ProfMgmt } from './Frmprofes0001S04ProfMgmt';
import { Frmprofes0001S05ProfMgmt } from './Frmprofes0001S05ProfMgmt';
import { Frmprofes0001S07ProfMgmt } from './Frmprofes0001S07ProfMgmt';
import { Frmprofes0001S08ProfMgmt } from './Frmprofes0001S08ProfMgmt';
import { Frmprofes0001S09ProfMgmt } from './Frmprofes0001S09ProfMgmt';

export const Frmprofes0001MProfMgmt = () => {
    const hook = useFrmprofes0001MProfMgmt();
    const [tabValue_tabTab, setTabValue_tabTab] = useState(0);
    const columns_gdProfUser = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'SEL', headerName: 'SEL', width: 0 },
        { field: 'PFTEAM', headerName: '부서/지부', width: 100 },
        { field: 'PFNM', headerName: '성명', width: 80 },
        { field: 'JIKRYUL', headerName: '직위', width: 80 },
        { field: 'PFGUBUN', headerName: '구분', width: 80 },
        { field: 'PFEDATE', headerName: '교수임용일', width: 90 },
        { field: 'PFREMARK', headerName: '비고', width: 300 },
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
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.btnReport_OnClick}>교수평가관리출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '168px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부서/지부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmprofes0001MProfMgmtData.ds_ds_oJibuGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '168px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교수구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmprofes0001MProfMgmtData.ds_ds_oProfGubunAll || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '169px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전임</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>겸임</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px' }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdProfUser ? undefined : 'none' }}><Paper sx={{ width: '1059px', height: '284px', width: '100%', height: 'auto', minHeight: '284px' }}><DataGridWrapper rows={hook.ds_ioProfUser} columns={columns_gdProfUser} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab ? undefined : 'none' }}><Box sx={{ width: '1060px', height: '226px', width: "100%", height: "auto", minHeight: "226px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab} onChange={(e, v) => setTabValue_tabTab(v)} aria-label="tabTab"><Tab label="기본정보" /><Tab label="국가기술자격현황" /><Tab label="학술 및 세미나발표" /><Tab label="논문 및 연구실적" /><Tab label="교육훈련" /><Tab label="강의실적" /><Tab label="교수전문화" /><Tab label="강의시상" /><Tab label="교안실적" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab} index={0}><Frmprofes0001S01ProfMgmt /></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={1}><Frmprofes0001S02ProfMgmt /></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={2}><Frmprofes0001S03ProfMgmt /></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={3}><Frmprofes0001S04ProfMgmt /></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={4}><Frmprofes0001S05ProfMgmt /></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={5}></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={6}><Frmprofes0001S07ProfMgmt /></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={7}><Frmprofes0001S08ProfMgmt /></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={8}><Frmprofes0001S09ProfMgmt /></CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0001MProfMgmt;

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