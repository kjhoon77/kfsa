// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu0480MExamOrderSetting } from './useFrmspcledu0480MExamOrderSetting';
import * as Frmspcledu0480MExamOrderSettingData from './Frmspcledu0480MExamOrderSettingData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmspcledu0480MExamOrderSetting = () => {
    const hook = useFrmspcledu0480MExamOrderSetting();
    const columns_gdLocalExamOrder = [
        { field: 'GTTEAMNM', headerName: '지부', width: 120 },
        { field: 'TCCOURSENM', headerName: '직능', width: 220 },
        { field: 'EOYEAR', headerName: '년도', width: 80 },
        { field: 'EOEXAMORDER', headerName: '회차', width: 70 },
        { field: 'EOEXAMDATE', headerName: '시험일', width: 118 },
        { field: 'EREXAMROOM', headerName: '시험장소', width: 178 },
    ];
    const columns_gdExamOrder = [
        { field: 'GTTEAMNM', headerName: '지부', width: 120 },
        { field: 'TCCOURSENM', headerName: '직능', width: 220 },
        { field: 'EOYEAR', headerName: '년도', width: 80 },
        { field: 'EOEXAMORDER', headerName: '회차', width: 70 },
        { field: 'EOEXAMDATE', headerName: '시험일', width: 118 },
        { field: 'EREXAMROOM', headerName: '시험장소', width: 178 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained"  onClick={hook.btnNext_OnClick}>다음 ▶</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "66px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdExamOrder ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '294px', width: '100%', height: 'auto', minHeight: '294px' }}><DataGridWrapper rows={hook.ds_ioLocalExamOrder} columns={columns_gdExamOrder} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbExamDate ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">선택할 시험목록</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbTextBlue ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '408px', height: '22px' }}><Typography variant="body2">※ 추가 후 선택저장 버튼을 클릭하시기 바랍니다.</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnDel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnDel_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>▲ 삭제</Button></Box><Box sx={{ display: hook.isVisible_btnAdd ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnAdd_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>추가 ▼</Button></Box><Box sx={{ display: hook.isVisible_btnSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Save} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>선택저장(F4)</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdLocalExamOrder ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '274px', width: '100%', height: 'auto', minHeight: '274px' }}><DataGridWrapper rows={hook.ds_LocalExamOrder} columns={columns_gdLocalExamOrder} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu0480MExamOrderSetting;

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