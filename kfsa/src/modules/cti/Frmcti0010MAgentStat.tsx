// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmcti0010MAgentStat } from './useFrmcti0010MAgentStat';
import * as Frmcti0010MAgentStatData from './Frmcti0010MAgentStatData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcti0010MAgentStat = () => {
    const hook = useFrmcti0010MAgentStat();
    const [chk_cbChk, setChk_cbChk] = useState('0');
    const columns_gdList = [
        { field: 'ASDATE', headerName: '상담일자', width: 83 },
        { field: 'SABUNNM', headerName: '상담사', width: 88 },
        { field: 'ASSTATCD', headerName: '상태', width: 109 },
        { field: 'ASSUBNAME', headerName: '상세', width: 109 },
        { field: 'SUBCNT', headerName: '횟수', width: 109 },
        { field: 'STATTIME', headerName: '시간', width: 109 },
        { field: 'STATTIME_TOT', headerName: '개인별 총 시간', width: 109 },
    ];
    const columns_gdListSub = [
        { field: 'ASDATE', headerName: '상담일자', width: 83 },
        { field: 'SABUNNM', headerName: '상담사', width: 88 },
        { field: 'ASSTATCD', headerName: '상태', width: 109 },
        { field: 'ASSUBNAME', headerName: '상세', width: 109 },
        { field: 'ASSEQ', headerName: '순번', width: 109 },
        { field: 'ASSTARTDATE', headerName: '시작일시', width: 109 },
        { field: 'ASENDDATE', headerName: '종료일시', width: 109 },
        { field: 'STATTIME', headerName: '시간', width: 109 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">Agent상태조회</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "90px", py: 0.5, width: "100%" }}><Box sx={{ ml: "3px", minWidth: "1181px" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '1181px', height: '650px', width: '100%', height: 'auto', minHeight: '650px' }}><DataGridWrapper rows={hook.ds_oAgentStatList} columns={columns_gdList} /></Paper></Box><Box sx={{ display: hook.isVisible_gdListSub ? undefined : 'none' }}><Paper sx={{ width: '1181px', height: '650px', width: '100%', height: 'auto', minHeight: '650px' }}><DataGridWrapper rows={hook.ds_oAgentStatSubList} columns={columns_gdListSub} /></Paper></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcti0010MAgentStat;

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