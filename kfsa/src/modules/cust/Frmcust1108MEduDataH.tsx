// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1108MEduDataH } from './useFrmcust1108MEduDataH';
import * as Frmcust1108MEduDataHData from './Frmcust1108MEduDataHData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust1108MEduDataH = () => {
    const hook = useFrmcust1108MEduDataH();
    const columns_gdCommonCode = [
        { field: 'sel', headerName: '순번', width: 41 },
        { field: 'EHCOURSENM', headerName: '직능', width: 130 },
        { field: 'EHPROCDATE_A', headerName: '발행 일자', width: 196 },
        { field: 'TOTALCOUNT', headerName: '추출대상자수', width: 136 },
        { field: 'CREATCOUNT', headerName: '교육안내문발행수', width: 137 },
        { field: 'GPNAME', headerName: '생성자', width: 114 },
    ];
    const columns_gdHistory = [
        { field: 'sel', headerName: '순번', width: 37 },
        { field: 'EHYEAR', headerName: '년도', width: 44 },
        { field: 'CUSTFMNM', headerName: '안내자성명', width: 76 },
        { field: 'EPPASSDATE', headerName: '이수일자', width: 74 },
        { field: 'EPPERSONNM', headerName: '이수자성명', width: 75 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 86 },
        { field: 'EHJBFULLNNM', headerName: '지부', width: 88 },
        { field: 'EHCUSTNO', headerName: '고객번호', width: 105 },
        { field: 'RCNM', headerName: '지역', width: 68 },
        { field: 'FSTNSMALL_NM', headerName: '119안전센터', width: 112 },
        { field: 'EHCOURSENM', headerName: '직능', width: 115 },
        { field: 'STATUSGUBUN', headerName: '고객구분', width: 76 },
        { field: 'EHCUSTBNM', headerName: '업체명', width: 188 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_EduDataHistorySearch}>이력조회</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "42px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbJibu ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '84px', height: '22px' }}><Typography variant="body2">지부</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '191px', height: '22px', display: 'flex', alignItems: 'center', ml: '130px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>발행일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '127px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "19px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '131px', height: '22px' }}><Typography variant="body2">교육안내문 발행 이력</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdCommonCode ? undefined : 'none' }}><Paper sx={{ width: '776px', height: '210px', width: '100%', height: 'auto', minHeight: '210px' }}><DataGridWrapper rows={hook.ds_ioHistorySearch} columns={columns_gdCommonCode} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '177px', height: '22px' }}><Typography variant="body2">발행 이력별 교육안내대상자</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnToExcel ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnToExcel_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>엑셀자료생성</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdHistory ? undefined : 'none' }}><Paper sx={{ width: '776px', height: '314px', width: '100%', height: 'auto', minHeight: '314px' }}><DataGridWrapper rows={hook.ds_ioEduDataHistoryResearchEduList1} columns={columns_gdHistory} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1108MEduDataH;

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