// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0019MTrainningEduRep } from './useFrmprofes0019MTrainningEduRep';
import * as Frmprofes0019MTrainningEduRepData from './Frmprofes0019MTrainningEduRepData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0019MTrainningEduRep = () => {
    const hook = useFrmprofes0019MTrainningEduRep();
    const columns_gdListH = [
        { field: 'col_0', headerName: '구분', width: 90, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>전임</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>겸임</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>초빙</Box></Stack>, sortable: false },
        { field: 'TOTCNT_1', headerName: '합계', width: 70, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.TOTCNT_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.TOTCNT_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.TOTCNT_3}</Box></Stack>, sortable: false },
        { field: 'CNT220_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT220_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT220_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT220_3}</Box></Stack>, sortable: false },
        { field: 'CNT210_1', headerName: '특급소관', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT210_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT210_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT210_3}</Box></Stack>, sortable: false },
        { field: 'CNT221_1', headerName: '1급소관', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT221_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT221_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT221_3}</Box></Stack>, sortable: false },
        { field: 'CNT222N_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT222N_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT222N_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT222N_3}</Box></Stack>, sortable: false },
        { field: 'CNT222Y_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT222Y_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT222Y_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT222Y_3}</Box></Stack>, sortable: false },
        { field: 'CNT223_1', headerName: '3급소관', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT223_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT223_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT223_3}</Box></Stack>, sortable: false },
        { field: 'CNT224_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT224_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT224_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT224_3}</Box></Stack>, sortable: false },
        { field: 'CNT228_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT228_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT228_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT228_3}</Box></Stack>, sortable: false },
        { field: 'CNT229_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT229_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT229_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT229_3}</Box></Stack>, sortable: false },
        { field: 'CNT227_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT227_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT227_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT227_3}</Box></Stack>, sortable: false },
        { field: 'CNT253_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT253_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT253_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT253_3}</Box></Stack>, sortable: false },
        { field: 'CNT254_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT254_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT254_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT254_3}</Box></Stack>, sortable: false },
        { field: 'CNT250_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT250_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT250_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT250_3}</Box></Stack>, sortable: false },
        { field: 'CNT251_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT251_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT251_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT251_3}</Box></Stack>, sortable: false },
        { field: 'CNT252_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT252_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT252_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT252_3}</Box></Stack>, sortable: false },
        { field: 'CNT255_1', headerName: '', width: 64, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT255_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT255_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT255_3}</Box></Stack>, sortable: false },
    ];
    const columns_gdListD = [
        { field: 'SEQ', headerName: '순번', width: 39 },
        { field: 'LDPFNAME', headerName: '교수', width: 88 },
        { field: 'TP', headerName: '직책', width: 60 },
        { field: 'TOT', headerName: '합계', width: 29 },
        { field: 'SUMCNT', headerName: '', width: 29 },
        { field: 'CNT220', headerName: '', width: 64 },
        { field: 'CNT210', headerName: '특급소관', width: 62 },
        { field: 'CNT221', headerName: '1급소관', width: 55 },
        { field: 'CNT222N', headerName: '', width: 56 },
        { field: 'CNT222Y', headerName: '', width: 59 },
        { field: 'CNT223', headerName: '3급소관', width: 53 },
        { field: 'CNT224', headerName: '', width: 76 },
        { field: 'CNT228', headerName: '', width: 53 },
        { field: 'CNT229', headerName: '', width: 48 },
        { field: 'CNT227', headerName: '', width: 49 },
        { field: 'CNT253', headerName: '', width: 57 },
        { field: 'CNT254', headerName: '', width: 62 },
        { field: 'CNT250', headerName: '', width: 62 },
        { field: 'CNT251', headerName: '', width: 62 },
        { field: 'CNT252', headerName: '', width: 62 },
        { field: 'CNT255', headerName: '', width: 62 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">업무보고용(강습교육)</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "63px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '190px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육시작일</Typography>
                    <DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '114px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '19px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회차</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '44px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbTrainingPersonInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '188px', height: '22px' }}><Typography variant="body2">강습교육 실시 전체 현황</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdListH ? undefined : 'none' }}><Paper sx={{ width: '879px', height: '188px', width: '100%', height: 'auto', minHeight: '188px' }}><MultiDataGridWrapper rows={hook.ds_ProfesListH} columns={columns_gdListH} rowHeight={60} headerHeight={40} hideFooter={true} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbTrainingPersonInfoDetail ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '188px', height: '22px' }}><Typography variant="body2">강습교육 실시 개인별 현황</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdListD ? undefined : 'none' }}><Paper sx={{ width: '879px', height: '353px', width: '100%', height: 'auto', minHeight: '353px' }}><MultiDataGridWrapper rows={hook.ds_ProfesListD} columns={columns_gdListD} rowHeight={20} headerHeight={40} hideFooter={true} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0019MTrainningEduRep;

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