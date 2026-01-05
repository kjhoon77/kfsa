// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0002P01SubjectListPopUp } from './useFrmprofes0002P01SubjectListPopUp';
import * as Frmprofes0002P01SubjectListPopUpData from './Frmprofes0002P01SubjectListPopUpData';

export const Frmprofes0002P01SubjectListPopUp = () => {
    const hook = useFrmprofes0002P01SubjectListPopUp();
    const columns_gdSubjectList = [
        { field: 'LEDUGUBUN', headerName: '교육과정구분', width: 90 },
        { field: 'PSTITLE', headerName: '과목명', width: 299 },
        { field: 'PSLOWTIME', headerName: '법정교육시간', width: 90 },
        { field: 'PSEDUTIME', headerName: '실제교육시간', width: 90 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">교육과목검색팝업</Typography>
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
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "60px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdSubjectList ? undefined : 'none' }}><Paper sx={{ width: '592px', height: '379px', width: '100%', height: 'auto', minHeight: '379px' }}><DataGridWrapper rows={hook.ds_oSubjectList} columns={columns_gdSubjectList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0002P01SubjectListPopUp;

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