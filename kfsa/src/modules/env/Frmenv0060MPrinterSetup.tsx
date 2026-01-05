// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmenv0060MPrinterSetup } from './useFrmenv0060MPrinterSetup';
import * as Frmenv0060MPrinterSetupData from './Frmenv0060MPrinterSetupData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmenv0060MPrinterSetup = () => {
    const hook = useFrmenv0060MPrinterSetup();
    const columns_gdPrintConfig = [
        { field: 'PCNM', headerName: '출력물명', width: 280 },
        { field: 'PCLEFTMARGIN', headerName: '좌측여백', width: 80 },
        { field: 'PCTOPMARGIN', headerName: '상단여백', width: 80 },
        { field: 'PCPRINTERNO', headerName: '프린터번호', width: 120 },
    ];
    const columns_gdPrinter = [
        { field: 'NM', headerName: '프린터 번호', width: 120 },
        { field: 'PATH', headerName: '프린터 종류 선택', width: 467 },
        { field: 'PORT', headerName: 'DOT 프린터 포트', width: 0 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">출력환경설정</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdPrintConfig ? undefined : 'none' }}><Paper sx={{ width: '592px', height: '263px', width: '100%', height: 'auto', minHeight: '263px' }}><DataGridWrapper rows={hook.gds_ioPrintConfig} columns={columns_gdPrintConfig} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '88px', height: '22px' }}><Typography variant="body2">프린터</Typography></Box></Box><Box sx={{ display: hook.isVisible_filePrintConfigFile ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>filePrintConfigFile</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdPrinter ? undefined : 'none' }}><Paper sx={{ width: '592px', height: '183px', width: '100%', height: 'auto', minHeight: '183px' }}><DataGridWrapper rows={hook.gds_ioPrinter} columns={columns_gdPrinter} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmenv0060MPrinterSetup;

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