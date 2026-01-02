// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1180MSmsSendList } from './useFrmcust1180MSmsSendList';
import * as Frmcust1180MSmsSendListData from './Frmcust1180MSmsSendListData';

export const Frmcust1180MSmsSendList = () => {
    const hook = useFrmcust1180MSmsSendList();
    const columns_gdSmsStat = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'ESYEAR', headerName: '년도', width: 40 },
        { field: 'ESDATE', headerName: '교육일자', width: 79 },
        { field: 'ESTIME', headerName: '교육시간', width: 87 },
        { field: 'ESGTMGNO', headerName: '지부', width: 52 },
        { field: 'JIBUCNO', headerName: '고객번호', width: 96 },
        { field: 'CGROUPNICKNM', headerName: '직능', width: 58 },
        { field: 'EMMEMBERYN_A', headerName: '회원구분', width: 60 },
        { field: 'MRECVNM', headerName: '수신자', width: 71 },
        { field: 'MRECVTEL', headerName: '휴대폰', width: 104 },
        { field: 'MRECVRESULT', headerName: '전송상태', width: 61 },
        { field: 'SENDGUBUN', headerName: '발송구분', width: 68 },
        { field: 'MSENDDATE_A', headerName: '발송시간', width: 146 },
        { field: 'PNM', headerName: '발송자', width: 62 },
        { field: 'MMSG', headerName: '전문내용', width: 513 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained"  onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnPrintDate}>발송현황(발송일자별) 출력</Button>
<Button variant="contained"  onClick={hook.btnPrintList}>발송리스트 출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>업무구분</Box></Grid><Grid item xs={12} md={6}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={9}><Box>Div0</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>단문 건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>장문 건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>※ 더블클릭시 전체 문자내용을 
    볼 수 있습니다.</Box></Grid><Grid item xs={12} md={2}><Button variant="contained"></Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioSmsPracticeEduJubsu} columns={columns_gdSmsStat} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1180MSmsSendList;

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