// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0005P03TimeSchedule } from './useFrmprofes0005P03TimeSchedule';
import * as Frmprofes0005P03TimeScheduleData from './Frmprofes0005P03TimeScheduleData';

export const Frmprofes0005P03TimeSchedule = () => {
    const hook = useFrmprofes0005P03TimeSchedule();
    const columns_gdTimeSchedule = [
        { field: 'TSGEMGNO', headerName: '지부', width: 80 },
        { field: 'TSTYPE', headerName: '시간표유형', width: 90 },
        { field: 'TSTIME', headerName: '강의교시', width: 100 },
        { field: 'TSSTARTTIME', headerName: '강의시작시간', width: 97 },
        { field: 'TSENDTIME', headerName: '강의종료시간', width: 97 },
        { field: 'TSREMARK', headerName: '비고', width: 97 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Input}>추가 저장</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Delete}>삭제 저장</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "65px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnAdd ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnAdd_OnClick} sx={{ width: '52px', height: '24px' }}>행 추가</Button></Box><Box sx={{ display: hook.isVisible_btnDel ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnDel_OnClick} sx={{ width: '52px', height: '24px' }}>행 삭제</Button></Box><Box sx={{ display: hook.isVisible_Button1 ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px' }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdTimeSchedule ? undefined : 'none' }}><Paper sx={{ width: '584px', height: '346px', width: '100%', height: 'auto', minHeight: '346px' }}><DataGridWrapper rows={hook.ds_oTimeSchedule} columns={columns_gdTimeSchedule} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0005P03TimeSchedule;

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