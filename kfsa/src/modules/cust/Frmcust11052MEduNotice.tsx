// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust11052MEduNotice } from './useFrmcust11052MEduNotice';
import * as Frmcust11052MEduNoticeData from './Frmcust11052MEduNoticeData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust11052MEduNotice = () => {
    const hook = useFrmcust11052MEduNotice();
    const columns_gdConnections = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'ESCHEULE', headerName: '교육일자', width: 134 },
        { field: 'ESCHEULETIME', headerName: '교육시간', width: 167 },
        { field: 'ESEATCOUNT', headerName: '좌석수', width: 117 },
        { field: 'EDUCOUNT', headerName: '예정인원수', width: 112 },
    ];
    const columns_gdCommonCode = [
        { field: 'EPRINTGUBUN', headerName: 'EPRINTGUBUN', width: 44 },
        { field: 'sel', headerName: '순번', width: 44 },
        { field: 'EYEAR', headerName: '년도', width: 44 },
        { field: 'CUSTFMNM', headerName: '성명', width: 59 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 97 },
        { field: 'EJBFULLNNM', headerName: '지부', width: 102 },
        { field: 'ECUSTNO33', headerName: '고객번호', width: 125 },
        { field: 'RCNM', headerName: '지역', width: 79 },
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
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_EduPrint}>교육통지서 출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀자료생성</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '140px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>고객구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '208px', height: '22px', display: 'flex', alignItems: 'center', ml: '23px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육대상</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '140px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>추출 대상자수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static27 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '17px', height: '22px' }}><Typography variant="body2">명</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '140px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육 대상자수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '17px', height: '22px' }}><Typography variant="body2">명</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '112px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>예정교육일수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static35 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '17px', height: '22px' }}><Typography variant="body2">일</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">교육일정 생성</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdConnections ? undefined : 'none' }}><Paper sx={{ width: '576px', height: '154px', width: '100%', height: 'auto', minHeight: '154px' }}><DataGridWrapper rows={hook.ds_ioEduNoticeHistoryResearchEdu} columns={columns_gdConnections} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">교육대상자 리스트</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '111px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 40, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdCommonCode ? undefined : 'none' }}><Paper sx={{ width: '576px', height: '282px', width: '100%', height: 'auto', minHeight: '282px' }}><DataGridWrapper rows={hook.ds_ioEduNoticeHistoryResearchEduList1} columns={columns_gdCommonCode} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust11052MEduNotice;

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