// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu0403PExamJubsuHistList } from './useFrmspcledu0403PExamJubsuHistList';
import * as Frmspcledu0403PExamJubsuHistListData from './Frmspcledu0403PExamJubsuHistListData';

export const Frmspcledu0403PExamJubsuHistList = () => {
    const hook = useFrmspcledu0403PExamJubsuHistList();
    const columns_gdJubsuHist = [
        { field: 'id_seq', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1, sortable: false },
        { field: 'MGJIBUCD', headerName: '지부', width: 68 },
        { field: 'YEAR', headerName: '년도', width: 36 },
        { field: 'EOECCOURSECD', headerName: '직능', width: 134 },
        { field: 'EORDER', headerName: '회차', width: 31 },
        { field: 'JUBSUNO', headerName: '접수번호', width: 58 },
        { field: 'TPPERSONNM', headerName: '성명', width: 58 },
        { field: 'TPRESIDENTNO', headerName: '주민번호', width: 109 },
        { field: 'PASSDATE', headerName: '수료일자', width: 83 },
        { field: 'LASTSUNAPGUBUN', headerName: '환불', width: 47 },
        { field: 'FIRSTREGDATE', headerName: '접수일자', width: 83 },
        { field: 'TJHREASON', headerName: '처리사유', width: 0 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">강습접수이력팝업</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdJubsuHist ? undefined : 'none' }}><Paper sx={{ width: '592px', height: '382px', width: '100%', height: 'auto', minHeight: '382px' }}><DataGridWrapper rows={hook.ds_oJubsuHist} columns={columns_gdJubsuHist} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu0403PExamJubsuHistList;

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