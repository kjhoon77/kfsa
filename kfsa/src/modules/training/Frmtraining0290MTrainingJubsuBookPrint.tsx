// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0290MTrainingJubsuBookPrint } from './useFrmtraining0290MTrainingJubsuBookPrint';
import * as Frmtraining0290MTrainingJubsuBookPrintData from './Frmtraining0290MTrainingJubsuBookPrintData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining0290MTrainingJubsuBookPrint = () => {
    const hook = useFrmtraining0290MTrainingJubsuBookPrint();
    const columns_grdBook = [
        { field: 'SEL', headerName: 'SEL', width: 29 },
        { field: 'TBPSEQ', headerName: '순번', width: 32 },
        { field: 'TBPCOL1', headerName: '등기번호', width: 102 },
        { field: 'TBPCOL2', headerName: '상태', width: 33 },
        { field: 'TBPCOL3', headerName: '배달우체국', width: 80 },
        { field: 'TBPCOL4', headerName: '수취인명', width: 60 },
        { field: 'TBPCOL5', headerName: '우편번호', width: 0 },
        { field: 'TBPCOL6', headerName: '수취인주소', width: 0 },
        { field: 'TBPCOL7', headerName: '상세주소', width: 0 },
        { field: 'TBPCOL8', headerName: '전화번호', width: 100 },
        { field: 'TBPCOL9', headerName: '상품명', width: 112 },
        { field: 'TBPCOL10', headerName: '공급지', width: 120 },
        { field: 'REGYN', headerName: '접수여부', width: 60 },
        { field: 'TOTRAININGORDER', headerName: '접수회차', width: 60 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'TOMGNO', headerName: '강습회차관리번호', width: 0 },
        { field: 'TJBOOKREGNO', headerName: '등록된등기번호', width: 114 },
    ];
    const columns_Grid0 = [
        { field: 'id', headerName: 'No', width: 0, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'COL01', headerName: '등기번호', width: 104 },
        { field: 'COL02', headerName: '상태', width: 37 },
        { field: 'COL03', headerName: '배달우체국', width: 84 },
        { field: 'COL04', headerName: '수취인명', width: 60 },
        { field: 'COL05', headerName: '우편번호', width: 61 },
        { field: 'COL06', headerName: '수취인주소', width: 84 },
        { field: 'COL07', headerName: '상세주소', width: 78 },
        { field: 'COL08', headerName: '전화번호', width: 117 },
        { field: 'COL09', headerName: '상품명', width: 174 },
        { field: 'COL10', headerName: '공급지', width: 129 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "45px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnHistory ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnHistory_OnClick} sx={{ width: '145px', height: '24px' }}>이력 확인</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static14 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '240px', height: '22px' }}><Typography variant="body2">교재발송명단 등기정보 엑셀 업로드</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '228px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 135, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>엑셀 업로드 건수 :</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnExcelUpload ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnExcelUpload_OnClick} sx={{ width: '145px', height: '24px' }}>①엑셀 자료 불러오기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid0 ? undefined : 'none' }}><Paper sx={{ width: '984px', height: '242px', width: '100%', height: 'auto', minHeight: '242px' }}><DataGridWrapper rows={hook.ds_iExcelLoad} columns={columns_Grid0} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnDataCheck ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnDataCheck_OnClick} sx={{ width: '124px', height: '24px' }}>②자료 확인 하기</Button></Box><Box sx={{ display: hook.isVisible_btnResult ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnResult_OnClick} sx={{ width: '124px', height: '24px' }}>③등기정보 반영</Button></Box><Box sx={{ display: hook.isVisible_btnSmsSend ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSmsSend_OnClick} sx={{ width: '121px', height: '24px' }}>문자메시지발송</Button></Box><Box sx={{ display: hook.isVisible_lbTBPMGNO ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '87px', height: '22px' }}><Typography variant="body2">TBPMGNO</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '228px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 135, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>자료 확인 건수 :</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edTBPMGNO ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '86px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdBook ? undefined : 'none' }}><Paper sx={{ width: '984px', height: '402px', width: '100%', height: 'auto', minHeight: '402px' }}><DataGridWrapper rows={hook.ds_ioBook} columns={columns_grdBook} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnSearchMgno ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnSearchMgno_OnClick} sx={{ width: '104px', height: '23px' }}>btnSearchMgno</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "348px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_fdImport ? undefined : 'none' }}><Box sx={{ width: '24px', height: '26px', border: '1px dashed grey' }}>Unknown: FileDialog</Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0290MTrainingJubsuBookPrint;

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