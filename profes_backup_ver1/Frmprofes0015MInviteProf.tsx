// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0015MInviteProf } from './useFrmprofes0015MInviteProf';
import * as Frmprofes0015MInviteProfData from './Frmprofes0015MInviteProfData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0015MInviteProf = () => {
    const hook = useFrmprofes0015MInviteProf();
    const [tabValue_TAB_Profes, setTabValue_TAB_Profes] = useState(0);
    const columns_gdList = [
        { field: 'id', headerName: '순번', width: 52, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTDEPTNM', headerName: '지부', width: 72 },
        { field: 'NAME', headerName: '교수', width: 88 },
        { field: 'SOSOK', headerName: '소속', width: 189 },
        { field: 'JIKWI', headerName: '직위/계급', width: 129 },
        { field: 'SUMCNT', headerName: '합계', width: 75 },
        { field: 'CNT1', headerName: '실무', width: 75 },
        { field: 'CNT2', headerName: '강습', width: 75 },
        { field: 'CNT3', headerName: '전문교육', width: 75 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel}>엑셀로 저장</Button>
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "66px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_TAB_Profes ? undefined : 'none' }}><Box sx={{ width: '792px', height: '562px', width: "100%", height: "auto", minHeight: "562px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_TAB_Profes} onChange={(e, v) => setTabValue_TAB_Profes(v)} aria-label="TAB_Profes"><Tab label="    현    황    " /><Tab label="     Chart     " /></Tabs></Box><CustomTabPanel value={tabValue_TAB_Profes} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '785px', height: '579px', width: '100%', height: 'auto', minHeight: '579px' }}><DataGridWrapper rows={hook.ds_ProfesList} columns={columns_gdList} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Profes} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_XChart1 ? undefined : 'none' }}><Box sx={{ width: '784px', height: '494px', border: '1px dashed grey' }}>Unknown: XChart</Box></Box></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0015MInviteProf;

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