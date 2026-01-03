// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0021P01TimeScheduleList } from './useFrmprofes0021P01TimeScheduleList';
import * as Frmprofes0021P01TimeScheduleListData from './Frmprofes0021P01TimeScheduleListData';

export const Frmprofes0021P01TimeScheduleList = () => {
    const hook = useFrmprofes0021P01TimeScheduleList();
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
                    <Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "65px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbAddLabel ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '400px', height: '22px' }}><Typography variant="body2">※ 저장버튼을 선택하시면 아래와 같은 시간표가 신규로 생성됩니다.</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnAddLunch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnAddLunch_OnClick} sx={{ width: '65px', height: '24px', whiteSpace: "nowrap" }}>점심시간</Button></Box><Box sx={{ display: hook.isVisible_btnAdd ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnAdd_OnClick} sx={{ width: '52px', height: '24px', whiteSpace: "nowrap" }}>행 추가</Button></Box><Box sx={{ display: hook.isVisible_btnDel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnDel_OnClick} sx={{ width: '52px', height: '24px', whiteSpace: "nowrap" }}>행 삭제</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdTimeSchedule ? undefined : 'none' }}><Paper sx={{ width: '584px', height: '346px', width: '100%', height: 'auto', minHeight: '346px' }}><DataGridWrapper rows={hook.ds_ioTimeSchedule} columns={columns_gdTimeSchedule} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0021P01TimeScheduleList;

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