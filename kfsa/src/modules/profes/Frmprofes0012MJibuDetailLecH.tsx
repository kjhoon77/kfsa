// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0012MJibuDetailLecH } from './useFrmprofes0012MJibuDetailLecH';
import * as Frmprofes0012MJibuDetailLecHData from './Frmprofes0012MJibuDetailLecHData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0012MJibuDetailLecH = () => {
    const hook = useFrmprofes0012MJibuDetailLecH();
    const columns_gdList = [
        { field: 'GTDEPTNM', headerName: '지부', width: 80 },
        { field: 'col_1', headerName: '구분', width: 38, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>전임</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>겸임</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>초빙</Box></Stack>, sortable: false },
        { field: 'SUMCNT1_1', headerName: '합계', width: 80, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.SUMCNT1_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.SUMCNT1_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.SUMCNT1_3}</Box></Stack>, sortable: false },
        { field: 'CNT120_1', headerName: '실무', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT120_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT120_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT120_3}</Box></Stack>, sortable: false },
        { field: 'CNT121_1', headerName: '', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT121_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT121_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT121_3}</Box></Stack>, sortable: false },
        { field: 'CNT124_1', headerName: '', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT124_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT124_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT124_3}</Box></Stack>, sortable: false },
        { field: 'CNT126_1', headerName: '소방기술자', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT126_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT126_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT126_3}</Box></Stack>, sortable: false },
        { field: 'CNT128_1', headerName: '', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT128_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT128_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT128_3}</Box></Stack>, sortable: false },
        { field: 'CNT129_1', headerName: '소방기술자', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT129_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT129_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT129_3}</Box></Stack>, sortable: false },
        { field: 'CNT220_1', headerName: '강습', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT220_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT220_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT220_3}</Box></Stack>, sortable: false },
        { field: 'CNT210_1', headerName: '특급소관', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT210_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT210_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT210_3}</Box></Stack>, sortable: false },
        { field: 'CNT221_1', headerName: '1급소관', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT221_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT221_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT221_3}</Box></Stack>, sortable: false },
        { field: 'CNT222N_1', headerName: '', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT222N_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT222N_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT222N_3}</Box></Stack>, sortable: false },
        { field: 'CNT222Y_1', headerName: '', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT222Y_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT222Y_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT222Y_3}</Box></Stack>, sortable: false },
        { field: 'CNT223_1', headerName: '3급소관', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT223_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT223_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT223_3}</Box></Stack>, sortable: false },
        { field: 'CNT224_1', headerName: '', width: 75, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT224_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT224_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT224_3}</Box></Stack>, sortable: false },
        { field: 'CNT228_1', headerName: '', width: 70, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT228_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT228_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT228_3}</Box></Stack>, sortable: false },
        { field: 'CNT229_1', headerName: '', width: 70, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT229_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT229_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT229_3}</Box></Stack>, sortable: false },
        { field: 'CNT227_1', headerName: '', width: 70, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT227_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT227_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT227_3}</Box></Stack>, sortable: false },
        { field: 'CNT253_1', headerName: '', width: 70, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT253_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT253_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT253_3}</Box></Stack>, sortable: false },
        { field: 'CNT254_1', headerName: '', width: 70, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT254_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT254_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT254_3}</Box></Stack>, sortable: false },
        { field: 'CNT250_1', headerName: '전문교육', width: 70, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT250_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT250_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT250_3}</Box></Stack>, sortable: false },
        { field: 'CNT251_1', headerName: '', width: 70, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT251_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT251_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT251_3}</Box></Stack>, sortable: false },
        { field: 'CNT252_1', headerName: '', width: 70, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT252_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT252_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT252_3}</Box></Stack>, sortable: false },
        { field: 'CNT255_1', headerName: '', width: 70, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT255_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT255_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT255_3}</Box></Stack>, sortable: false },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">지부별 교육현황(상세)</Typography>
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
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "66px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '785px', height: '560px', width: '100%', height: 'auto', minHeight: '560px' }}><MultiDataGridWrapper rows={hook.ds_ProfesList} columns={columns_gdList} rowHeight={60} headerHeight={40} hideFooter={true} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0012MJibuDetailLecH;

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