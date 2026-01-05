// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6530MTotalDataConnectionReport } from './useFrmcust6530MTotalDataConnectionReport';
import * as Frmcust6530MTotalDataConnectionReportData from './Frmcust6530MTotalDataConnectionReportData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust6530MTotalDataConnectionReport = () => {
    const hook = useFrmcust6530MTotalDataConnectionReport();
    const columns_gdList1 = [
        { field: 'JNM', headerName: '소방안전관리 대상 안전원/청간 비교 현황(안전원 기준) 지부', width: 60 },
        { field: 'col_1', headerName: '구분', width: 60, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>계</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>일치완료</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>연계제외</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>미처리</Box></Stack>, sortable: false },
        { field: 'N_TOT2', headerName: '총 계', width: 60, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.N_TOT2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_TOT2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NE_TOT2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NN_TOT2}</Box></Stack>, sortable: false },
        { field: 'K_TOT', headerName: '', width: 60, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.K_TOT}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KM_TOT}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KE_TOT}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KN_TOT}</Box></Stack>, sortable: false },
        { field: 'col_4', headerName: '', width: 30, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px" }} /><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KMP_TOT}</Box><Box sx={{ height: "20px" }} /><Box sx={{ height: "20px" }} /></Stack>, sortable: false },
        { field: 'N_1', headerName: '1급소관', width: 60, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.N_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NE_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NN_1}</Box></Stack>, sortable: false },
        { field: 'K_1', headerName: '', width: 60, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.K_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KM_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KE_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KN_1}</Box></Stack>, sortable: false },
        { field: 'col_7', headerName: '', width: 30, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px" }} /><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KMP_1}</Box><Box sx={{ height: "20px" }} /><Box sx={{ height: "20px" }} /></Stack>, sortable: false },
        { field: 'N_2', headerName: '2급소관', width: 60, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.N_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NE_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NN_2}</Box></Stack>, sortable: false },
        { field: 'K_2', headerName: '', width: 60, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.K_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KM_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KE_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KN_2}</Box></Stack>, sortable: false },
        { field: 'col_10', headerName: '', width: 30, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px" }} /><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KMP_2}</Box><Box sx={{ height: "20px" }} /><Box sx={{ height: "20px" }} /></Stack>, sortable: false },
        { field: 'N_3', headerName: '공공1급', width: 60, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.N_3}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_3}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NE_3}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NN_3}</Box></Stack>, sortable: false },
        { field: 'K_3', headerName: '', width: 60, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.K_3}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KM_3}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KE_3}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KN_3}</Box></Stack>, sortable: false },
        { field: 'col_13', headerName: '', width: 30, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px" }} /><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KMP_3}</Box><Box sx={{ height: "20px" }} /><Box sx={{ height: "20px" }} /></Stack>, sortable: false },
        { field: 'N_4', headerName: '공공2급', width: 60, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.N_4}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_4}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NE_4}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NN_4}</Box></Stack>, sortable: false },
        { field: 'K_4', headerName: '', width: 60, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.K_4}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KM_4}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KE_4}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KN_4}</Box></Stack>, sortable: false },
        { field: 'col_16', headerName: '', width: 30, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px" }} /><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.KMP_4}</Box><Box sx={{ height: "20px" }} /><Box sx={{ height: "20px" }} /></Stack>, sortable: false },
        { field: 'NM_5', headerName: '일반대상', width: 60, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_5}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_5}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>0</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>0</Box></Stack>, sortable: false },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">전지부 연계 현황</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "62px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">출력물</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "11px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radPrtGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '301px', height: '22px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6530MTotalDataConnectionReportData.ds_ds_ioReport || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "31px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">조회 조건</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "12px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '307px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>미실시 지부</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust6530MTotalDataConnectionReportData.ds_ds_ioStatus || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '307px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연계대상</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6530MTotalDataConnectionReportData.ds_ds_ioCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "24px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList1 ? undefined : 'none' }}><Paper sx={{ width: '759px', height: '266px', width: '100%', height: 'auto', minHeight: '266px' }}><MultiDataGridWrapper rows={hook.ds_oDATA} columns={columns_gdList1} rowHeight={80} headerHeight={40} hideFooter={true} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6530MTotalDataConnectionReport;

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