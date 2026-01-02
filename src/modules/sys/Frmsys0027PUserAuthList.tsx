// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmsys0027PUserAuthList } from './useFrmsys0027PUserAuthList';
import * as Frmsys0027PUserAuthListData from './Frmsys0027PUserAuthListData';

export const Frmsys0027PUserAuthList = () => {
    const hook = useFrmsys0027PUserAuthList();
    const columns_gdUserAuth = [
        { field: 'MENULEVEL1', headerName: '메뉴명', width: 95 },
        { field: 'MENULEVEL2', headerName: '2단계', width: 101 },
        { field: 'MENULEVEL3', headerName: '프로그램명', width: 212 },
        { field: 'USE_YN', headerName: '사용유무', width: 84 },
        { field: 'UAREADWRITE', headerName: '읽기쓰기권한', width: 90 },
        { field: 'UAREAD', headerName: '읽기권한', width: 90 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        
                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmsys0027PUserAuthList;

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