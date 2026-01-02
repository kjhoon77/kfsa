// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1145PEduPassList } from './useFrmcust1145PEduPassList';
import * as Frmcust1145PEduPassListData from './Frmcust1145PEduPassListData';

export const Frmcust1145PEduPassList = () => {
    const hook = useFrmcust1145PEduPassList();
    const columns_gdCommonCode = [
        { field: 'ESSTUDENTNM', headerName: '교육대상', width: 62 },
        { field: 'ESGUBUN', headerName: '교육구분', width: 62 },
        { field: 'EPYEAR', headerName: '년도', width: 44 },
        { field: 'EPPERSONNM', headerName: '성명', width: 59 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 91 },
        { field: 'EPPERSONKEY', headerName: '개인식별번호', width: 90 },
        { field: 'GTDEPTNM', headerName: '지부', width: 51 },
        { field: 'CNO_BUNHO', headerName: '관리번호', width: 139 },
        { field: 'RCNM', headerName: '지역', width: 53 },
        { field: 'CNM', headerName: '직능', width: 106 },
        { field: 'CSTATUSGUBUNNM', headerName: '회원구분', width: 62 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 85 },
        { field: 'BNM', headerName: '업체명', width: 210 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oEduPassList} columns={columns_gdCommonCode} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1145PEduPassList;

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