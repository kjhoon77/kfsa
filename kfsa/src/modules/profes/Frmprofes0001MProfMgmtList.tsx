// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0001MProfMgmtList } from './useFrmprofes0001MProfMgmtList';
import * as Frmprofes0001MProfMgmtListData from './Frmprofes0001MProfMgmtListData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0001MProfMgmtList = () => {
    const hook = useFrmprofes0001MProfMgmtList();
    const columns_gdList = [
        { field: 'GTDEPTNM', headerName: '구분', width: 100 },
        { field: 'PFNM', headerName: '본부 교수요원(명단)', width: 100 },
    ];
    const columns_gdList3 = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'GTDEPTNM', headerName: '구분', width: 120 },
        { field: 'APFGUBUNNM', headerName: '지부 교수요원(명단)', width: 156 },
        { field: 'BPFGUBUNNM', headerName: '강의전담 부교수', width: 156 },
        { field: 'CPFGUBUNNM', headerName: '기타 교수요원', width: 156 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.Button0_OnClick}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Detailed Info</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '195px', height: '24px', display: 'flex', alignItems: 'center', ml: '13px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>조회일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"  startIcon={<Search />} onClick={hook.lfn_Search} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbTrainingPersonInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '188px', height: '22px' }}><Typography variant="body2">본부 교수요원</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '388px', height: '677px', width: '100%', height: 'auto', minHeight: '677px' }}><DataGridWrapper rows={hook.ds_ioList} columns={columns_gdList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>List</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '306px', height: '22px', display: 'flex', alignItems: 'center', ml: '674px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선택</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmprofes0001MProfMgmtListData.ds_ds_Check || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '188px', height: '22px' }}><Typography variant="body2">지부 강의전담 교수·부교수 등</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "5px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList3 ? undefined : 'none' }}><Paper sx={{ width: '547px', height: '677px', width: '100%', height: 'auto', minHeight: '677px' }}><DataGridWrapper rows={hook.ds_ioList3} columns={columns_gdList3} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0001MProfMgmtList;

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