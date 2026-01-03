// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0005P02ProfessorList } from './useFrmprofes0005P02ProfessorList';
import * as Frmprofes0005P02ProfessorListData from './Frmprofes0005P02ProfessorListData';

export const Frmprofes0005P02ProfessorList = () => {
    const hook = useFrmprofes0005P02ProfessorList();
    const columns_gdProfessorList = [
        { field: 'GUBUN', headerName: '구분', width: 70 },
        { field: 'NAME', headerName: '교수명', width: 70 },
        { field: 'SBIRTHDAY', headerName: '생년월일', width: 90 },
        { field: 'JIKWI', headerName: '직위', width: 66 },
        { field: 'SOSOK', headerName: '소속', width: 60 },
        { field: 'GTDEPTNM', headerName: '지부', width: 60 },
        { field: 'LLIMITTIME', headerName: '년간강의 허용시간', width: 60 },
        { field: 'LTIME', headerName: '총강의 시간', width: 60 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnSelect_OnClick}>선택</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Refresh />} onClick={hook.btnCancel_OnClick}>선택취소</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdProfessorList ? undefined : 'none' }}><Paper sx={{ width: '640px', height: '382px', width: '100%', height: 'auto', minHeight: '382px' }}><DataGridWrapper rows={hook.ds_oProfessorList} columns={columns_gdProfessorList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0005P02ProfessorList;

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