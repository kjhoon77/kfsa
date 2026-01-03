// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0014POverHistory } from './useFrmcust0014POverHistory';
import * as Frmcust0014POverHistoryData from './Frmcust0014POverHistoryData';

export const Frmcust0014POverHistory = () => {
    const hook = useFrmcust0014POverHistory();
    const columns_gdOverBiz = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CNO', headerName: '겸직그룹', width: 80 },
        { field: 'GUBUN', headerName: '겸직상태', width: 80 },
        { field: 'OBSTARTDATE', headerName: '겸직시작일', width: 100 },
        { field: 'OBENDDATE', headerName: '겸직종료일', width: 100 },
        { field: 'CNICKFULLNM', headerName: '직능', width: 100 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 114 },
        { field: 'BBIZCD', headerName: '용도', width: 120 },
        { field: 'CGTMGNO', headerName: '지부', width: 60 },
        { field: 'CREGCD', headerName: '지역', width: 80 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 57 },
        { field: 'FMNM', headerName: '성명', width: 60 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 100 },
        { field: 'FMHADDR', headerName: '주소', width: 250 },
        { field: 'CREGISTERYYMM', headerName: '등록일자', width: 73 },
    ];
    const columns_Grid0 = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CNO', headerName: '겸직그룹', width: 80 },
        { field: 'GUBUN', headerName: '겸직상태', width: 80 },
        { field: 'OBSTARTDATE', headerName: '겸직시작일', width: 100 },
        { field: 'OBENDDATE', headerName: '겸직종료일', width: 100 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 114 },
        { field: 'BBIZCD', headerName: '용도', width: 120 },
        { field: 'CGTMGNO', headerName: '지부', width: 60 },
        { field: 'CREGCD', headerName: '지역', width: 80 },
        { field: 'CCOURSECD', headerName: '직능', width: 100 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 57 },
        { field: 'FMNM', headerName: '성명', width: 60 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 100 },
        { field: 'FMHADDR', headerName: '주소', width: 250 },
        { field: 'CREGISTERYYMM', headerName: '등록일자', width: 73 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "34px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdOverBiz ? undefined : 'none' }}><Paper sx={{ width: '716px', height: '242px', width: '100%', height: 'auto', minHeight: '242px' }}><DataGridWrapper rows={hook.ds_oOverBizList} columns={columns_gdOverBiz} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid0 ? undefined : 'none' }}><Paper sx={{ width: '716px', height: '242px', width: '100%', height: 'auto', minHeight: '242px' }}><DataGridWrapper rows={hook.ds_oOverBizList} columns={columns_Grid0} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0014POverHistory;

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