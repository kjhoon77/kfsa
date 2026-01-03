// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1106MEduNoticeH } from './useFrmcust1106MEduNoticeH';
import * as Frmcust1106MEduNoticeHData from './Frmcust1106MEduNoticeHData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust1106MEduNoticeH = () => {
    const hook = useFrmcust1106MEduNoticeH();
    const columns_gdCommonCode = [
        { field: 'sel', headerName: '순번', width: 41 },
        { field: 'EPROCDATE_A', headerName: '발행 일자', width: 137 },
        { field: 'TOTALCOUNT', headerName: '추출대상자수', width: 109 },
        { field: 'EDUCOUNT', headerName: '교육대상자수', width: 102 },
        { field: 'DAYS', headerName: '예정교육일수', width: 101 },
        { field: 'CREATCOUNT', headerName: '교육통지서발행수', width: 130 },
        { field: 'PNM', headerName: '생성자', width: 77 },
    ];
    const columns_gdHistory = [
        { field: 'sel', headerName: '순번', width: 37 },
        { field: 'EYEAR', headerName: '년도', width: 44 },
        { field: 'CUSTFMNM', headerName: '통지자성명', width: 76 },
        { field: 'EPPASSDATE', headerName: '이수일자', width: 74 },
        { field: 'EPPERSONNM', headerName: '이수자성명', width: 75 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 86 },
        { field: 'EJBFULLNNM', headerName: '지부', width: 88 },
        { field: 'ECUSTNO33', headerName: '고객번호', width: 125 },
        { field: 'RCNM', headerName: '지역', width: 68 },
        { field: 'FSTNSMALL_NM', headerName: '119안전센터', width: 112 },
        { field: 'ECUSTNM4', headerName: '직능', width: 115 },
        { field: 'STATUSGUBUN', headerName: '고객구분', width: 76 },
        { field: 'ESGUBUN', headerName: '교육구분', width: 81 },
        { field: 'ESSTUDENT', headerName: '교육대상', width: 81 },
        { field: 'ESCHEULE', headerName: '교육일자', width: 76 },
        { field: 'ECUSTBNM4', headerName: '업체명', width: 188 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_EduNoticeHistorySearch}>이력조회</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "42px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbJibu ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '84px', height: '22px' }}><Typography variant="body2">지부</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '191px', height: '22px', display: 'flex', alignItems: 'center', ml: '224px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>일    자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '127px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "17px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '131px', height: '22px' }}><Typography variant="body2">교육통지서 발행 이력</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdCommonCode ? undefined : 'none' }}><Paper sx={{ width: '776px', height: '186px', width: '100%', height: 'auto', minHeight: '186px' }}><DataGridWrapper rows={hook.ds_ioHistorySearch} columns={columns_gdCommonCode} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '177px', height: '22px' }}><Typography variant="body2">발행 이력별 교육통지대상자</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnToExcel ? undefined : 'none' }}><Button variant="contained"  onClick={hook.lfn_Excel} sx={{ width: '105px', height: '24px' }}>엑셀자료생성</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdHistory ? undefined : 'none' }}><Paper sx={{ width: '776px', height: '314px', width: '100%', height: 'auto', minHeight: '314px' }}><DataGridWrapper rows={hook.ds_ioEduNoticeHistoryResearchEduList1} columns={columns_gdHistory} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1106MEduNoticeH;

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