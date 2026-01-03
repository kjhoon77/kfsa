// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM1400POneMAILSendList } from './useFrmCOM1400POneMAILSendList';
import * as FrmCOM1400POneMAILSendListData from './FrmCOM1400POneMAILSendListData';

export const FrmCOM1400POneMAILSendList = () => {
    const hook = useFrmCOM1400POneMAILSendList();
    const columns_gdEmailStat = [
        { field: 'GTDEPTNM', headerName: '지부', width: 0 },
        { field: 'TOYEAR', headerName: '년도', width: 0 },
        { field: 'TCCOURSENM', headerName: '직능', width: 0 },
        { field: 'TOTRAININGORDER', headerName: '회차', width: 0 },
        { field: 'TOHJUBSUNO', headerName: '접수번호', width: 0 },
        { field: 'TPNM', headerName: '수신자', width: 70 },
        { field: 'ESHEMAILADDR', headerName: '이메일', width: 140 },
        { field: 'ESHRECEIVEYN', headerName: '수신확인', width: 60 },
        { field: 'ESHSENDYN', headerName: '전송상태', width: 60 },
        { field: 'ESHSENDDATE', headerName: '발송시간', width: 130 },
        { field: 'ESHSABUN', headerName: '발송자', width: 70 },
        { field: 'ECTITLE', headerName: '메일제목', width: 360 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "56px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdEmailStat ? undefined : 'none' }}><Paper sx={{ width: '592px', height: '384px', width: '100%', height: 'auto', minHeight: '384px' }}><DataGridWrapper rows={hook.ds_oEmailStat} columns={columns_gdEmailStat} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM1400POneMAILSendList;

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