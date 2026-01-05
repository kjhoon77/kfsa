// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0018MPracEduRep } from './useFrmprofes0018MPracEduRep';
import * as Frmprofes0018MPracEduRepData from './Frmprofes0018MPracEduRepData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0018MPracEduRep = () => {
    const hook = useFrmprofes0018MPracEduRep();
    const columns_gdListH = [
        { field: 'col_0', headerName: '구분', width: 110, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>전임</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>겸임</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>초빙</Box></Stack>, sortable: false },
        { field: 'TOTCNT_1', headerName: '합계', width: 100, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.TOTCNT_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.TOTCNT_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.TOTCNT_3}</Box></Stack>, sortable: false },
        { field: 'CNT120_1', headerName: '소방안전관리자', width: 110, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT120_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT120_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT120_3}</Box></Stack>, sortable: false },
        { field: 'CNT121_1', headerName: '소방안전관리보조자', width: 130, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT121_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT121_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT121_3}</Box></Stack>, sortable: false },
        { field: 'CNT124_1', headerName: '', width: 100, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT124_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT124_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT124_3}</Box></Stack>, sortable: false },
        { field: 'CNT126_1', headerName: '소방기술자', width: 100, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT126_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT126_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT126_3}</Box></Stack>, sortable: false },
        { field: 'CNT128_1', headerName: '위험물운송자', width: 100, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT128_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT128_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT128_3}</Box></Stack>, sortable: false },
        { field: 'CNT129_1', headerName: '위험물운반자', width: 100, renderCell: (params) => <Stack spacing={0} sx={{ height: "100%", justifyContent: "center" }}><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT129_1}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT129_2}</Box><Box sx={{ height: "20px", display: "flex", alignItems: "center" }}>{params.row.CNT129_3}</Box></Stack>, sortable: false },
    ];
    const columns_gdListD = [
        { field: 'id_seq', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1, sortable: false },
        { field: 'LDPFNAME', headerName: '교수', width: 100 },
        { field: 'SUMCNT', headerName: '합계', width: 100 },
        { field: 'CNT120', headerName: '소방안전관리자', width: 110 },
        { field: 'CNT121', headerName: '소방안전관리보조자', width: 130 },
        { field: 'CNT124', headerName: '', width: 90 },
        { field: 'CNT126', headerName: '소방기술자', width: 90 },
        { field: 'CNT128', headerName: '위험물운송자', width: 90 },
        { field: 'CNT129', headerName: '위험물운반자', width: 90 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">업무보고용(실무교육)</Typography>
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
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "66px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbTrainingPersonInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '188px', height: '22px' }}><Typography variant="body2">실무교육 실시 전체 현황</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdListH ? undefined : 'none' }}><Paper sx={{ width: '784px', height: '184px', width: '100%', height: 'auto', minHeight: '184px' }}><MultiDataGridWrapper rows={hook.ds_ProfesListH} columns={columns_gdListH} rowHeight={60} headerHeight={40} hideFooter={true} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '188px', height: '22px' }}><Typography variant="body2">실무교육 실시 개인별 현황</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdListD ? undefined : 'none' }}><Paper sx={{ width: '784px', height: '349px', width: '100%', height: 'auto', minHeight: '349px' }}><MultiDataGridWrapper rows={hook.ds_ProfesListD} columns={columns_gdListD} rowHeight={20} headerHeight={40} hideFooter={true} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0018MPracEduRep;

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