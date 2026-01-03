// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0013MPersonLecH20240305 } from './useFrmprofes0013MPersonLecH20240305';
import * as Frmprofes0013MPersonLecH20240305Data from './Frmprofes0013MPersonLecH20240305Data';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0013MPersonLecH20240305 = () => {
    const hook = useFrmprofes0013MPersonLecH20240305();
    const [tabValue_TAB_Profes, setTabValue_TAB_Profes] = useState(0);
    const columns_Grid0 = [
        { field: 'id', headerName: '순번', width: 41, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LDPFNAME', headerName: '교수', width: 130 },
        { field: 'GTDEPTNM', headerName: '지부', width: 70 },
        { field: 'GUBUN', headerName: '구분', width: 50 },
        { field: 'SUMCNT', headerName: '건수총합', width: 80 },
        { field: 'SUMTIME', headerName: '시간총합', width: 80 },
        { field: 'CNT1', headerName: '실무', width: 80 },
        { field: 'TIME1', headerName: '시간', width: 80 },
        { field: 'CNT2', headerName: '강습', width: 80 },
        { field: 'TIME2', headerName: '시간', width: 80 },
        { field: 'CNT3', headerName: '전문교육', width: 80 },
        { field: 'TIME3', headerName: '시간', width: 80 },
    ];
    const columns_gdList = [
        { field: 'id', headerName: '순번', width: 41, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LDPFNAME', headerName: '교수', width: 130 },
        { field: 'GTDEPTNM', headerName: '지부', width: 70 },
        { field: 'GUBUN', headerName: '구분', width: 50 },
        { field: 'SUMCNT', headerName: '합계', width: 80 },
        { field: 'CNT1', headerName: '실무', width: 80 },
        { field: 'CNT2', headerName: '강습', width: 80 },
        { field: 'CNT3', headerName: '전문교육', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "66px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_TAB_Profes ? undefined : 'none' }}><Box sx={{ width: '792px', height: '562px', width: "100%", height: "auto", minHeight: "562px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_TAB_Profes} onChange={(e, v) => setTabValue_TAB_Profes(v)} aria-label="TAB_Profes"><Tab label="    현    황    " /><Tab label="     Chart     " /></Tabs></Box><CustomTabPanel value={tabValue_TAB_Profes} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_StartDate ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '76px', height: '16px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ ml: "3px", minWidth: "780px" }}><Box sx={{ display: hook.isVisible_Grid0 ? undefined : 'none' }}><Paper sx={{ width: '780px', height: '578px', width: '100%', height: 'auto', minHeight: '578px' }}><DataGridWrapper rows={hook.ds_ProfesList} columns={columns_Grid0} /></Paper></Box><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '780px', height: '578px', width: '100%', height: 'auto', minHeight: '578px' }}><DataGridWrapper rows={hook.ds_ProfesList} columns={columns_gdList} /></Paper></Box></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Profes} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_XChart1 ? undefined : 'none' }}><Box sx={{ width: '784px', height: '494px', border: '1px dashed grey' }}>Unknown: XChart</Box></Box></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0013MPersonLecH20240305;

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