// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmcust6590MNewDataMatchReport } from './useFrmcust6590MNewDataMatchReport';
import * as Frmcust6590MNewDataMatchReportData from './Frmcust6590MNewDataMatchReportData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust6590MNewDataMatchReport = () => {
    const hook = useFrmcust6590MNewDataMatchReport();
    const columns_gdList1 = [
        { field: 'NM', headerName: '', width: 91 },
        { field: 'col_1', headerName: '구  분', width: 65, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>계</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>일치완료</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>연계제외</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>미처리</Box></Stack>, sortable: false },
        { field: 'col_2', headerName: '', width: 43, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>기존</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>신규</Box></Stack>, sortable: false },
        { field: 'SUM_TOT', headerName: '총 계', width: 100, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.SUM_TOT}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.OM_TOT}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_TOT}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.EX_TOT}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NOT_TOT}</Box></Stack>, sortable: false },
        { field: 'SUM_1', headerName: '1급소관', width: 100, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.SUM_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.OM_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.EX_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NOT_1}</Box></Stack>, sortable: false },
        { field: 'SUM_2', headerName: '2급소관', width: 100, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.SUM_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.OM_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.EX_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NOT_2}</Box></Stack>, sortable: false },
        { field: 'SUM_3', headerName: '공공1급', width: 100, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.SUM_3}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.OM_3}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_3}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.EX_3}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NOT_3}</Box></Stack>, sortable: false },
        { field: 'SUM_4', headerName: '공공2급', width: 100, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.SUM_4}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.OM_4}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_4}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.EX_4}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NOT_4}</Box></Stack>, sortable: false },
        { field: 'SUM_5', headerName: '일반대상', width: 100, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.SUM_5}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.OM_5}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.NM_5}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>0</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>0</Box></Stack>, sortable: false },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">신규대상연계현황</Typography>
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
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "66px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '112px', height: '22px' }}><Typography variant="body2">조회 조건</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "11px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '249px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지 부</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6590MNewDataMatchReportData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "12px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '249px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직 능</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust6590MNewDataMatchReportData.ds_ds_ioCourse || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '228px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 122, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>신규등록일자</Typography>
                    <DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '121px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DoubleClickDatePicker sx={{ width: "102px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 0px", fontSize: "12px", marginLeft: "-2px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "87px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList1 ? undefined : 'none' }}><Paper sx={{ width: '759px', height: '322px', width: '100%', height: 'auto', minHeight: '322px' }}><MultiDataGridWrapper rows={hook.ds_oDATA} columns={columns_gdList1} rowHeight={100} headerHeight={40} hideFooter={true} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust6590MNewDataMatchReport;

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