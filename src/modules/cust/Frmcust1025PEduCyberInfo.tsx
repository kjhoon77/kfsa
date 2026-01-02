// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1025PEduCyberInfo } from './useFrmcust1025PEduCyberInfo';
import * as Frmcust1025PEduCyberInfoData from './Frmcust1025PEduCyberInfoData';

export const Frmcust1025PEduCyberInfo = () => {
    const hook = useFrmcust1025PEduCyberInfo();
    const columns_gdEduJubsu = [
        { field: 'ESGTMGNO', headerName: '차시', width: 60 },
        { field: 'LESSON_NM', headerName: '과정명', width: 113 },
        { field: 'CONTENTS_NM', headerName: '강좌명', width: 117 },
        { field: 'EJHJUBSUNO', headerName: '접수번호', width: 60 },
        { field: 'PAYGUBUN', headerName: '접수상태', width: 55 },
        { field: 'MFEE', headerName: '미납', width: 51 },
        { field: 'EJISUGUBUN', headerName: '이수', width: 40 },
        { field: 'CGROUPNICKNM', headerName: '직능', width: 63 },
        { field: 'EJNM', headerName: '성명', width: 64 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 107 },
        { field: 'ESDATE', headerName: '교육일자', width: 90 },
        { field: 'EJBUILDING', headerName: '대상물(업체)', width: 150 },
        { field: 'JIBUCNO', headerName: '고객관리번호', width: 108 },
        { field: 'RCNM', headerName: '지역', width: 61 },
        { field: 'EJZIP', headerName: '우편번호', width: 70 },
        { field: 'EJADDR', headerName: '주소', width: 230 },
        { field: 'EJPHONE', headerName: '휴대폰', width: 100 },
        { field: 'EJEMAIL', headerName: '이메일', width: 150 },
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
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>수료상태</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>수료점수</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>점</Box></Grid><Grid item xs={12} md={2}><Box>진도율</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>%</Box></Grid><Grid item xs={12} md={2}><Box>진도점수</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>점</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>과제점수</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>점</Box></Grid><Grid item xs={12} md={2}><Box>토론점수</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>점</Box></Grid><Grid item xs={12} md={2}><Box>평가점수</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>점</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdEduJubsu && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1025PEduCyberInfo;

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