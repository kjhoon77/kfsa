// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0005P03OldLectureList } from './useFrmprofes0005P03OldLectureList';
import * as Frmprofes0005P03OldLectureListData from './Frmprofes0005P03OldLectureListData';

export const Frmprofes0005P03OldLectureList = () => {
    const hook = useFrmprofes0005P03OldLectureList();
    const columns_gdOldLecture = [
        { field: 'LGTMGNO', headerName: '지부', width: 60 },
        { field: 'LYEAR', headerName: '년도', width: 44 },
        { field: 'LEDUGUBUN', headerName: '구분', width: 70 },
        { field: 'CLASNM', headerName: '교육과정', width: 100 },
        { field: 'ORDERNO', headerName: '교육회차', width: 60 },
        { field: 'EDUDATE', headerName: '교육일자', width: 170 },
        { field: 'LSTATUS', headerName: '상태', width: 60 },
        { field: 'PCTIME', headerName: '법정시간', width: 60 },
        { field: 'PNM', headerName: '작성자', width: 60 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기존강의실적자료</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnSelect_OnClick}>선택</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "65px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '148px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육회차</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '267px', height: '23px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육일자</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '148px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 68, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>법정시간</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "12px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbOldLecture ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '68px', height: '22px' }}><Typography variant="body2">기존자료</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdOldLecture ? undefined : 'none' }}><Paper sx={{ width: '684px', height: '374px', width: '100%', height: 'auto', minHeight: '374px' }}><DataGridWrapper rows={hook.ds_oOldLectrue} columns={columns_gdOldLecture} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0005P03OldLectureList;

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