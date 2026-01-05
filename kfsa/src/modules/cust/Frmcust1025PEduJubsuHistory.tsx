// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1025PEduJubsuHistory } from './useFrmcust1025PEduJubsuHistory';
import * as Frmcust1025PEduJubsuHistoryData from './Frmcust1025PEduJubsuHistoryData';

export const Frmcust1025PEduJubsuHistory = () => {
    const hook = useFrmcust1025PEduJubsuHistory();
    const columns_gdJubsuHist = [
        { field: 'EJHSEQ', headerName: '순번', width: 32 },
        { field: 'EJNM', headerName: '성명', width: 70 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 96 },
        { field: 'EJPERSONKEY', headerName: '개인식별번호', width: 91 },
        { field: 'EJHSTATUS', headerName: '상태', width: 97 },
        { field: 'EJHPROCDATE', headerName: '처리일자', width: 82 },
        { field: 'EJHSABUNNM', headerName: '처리자', width: 61 },
        { field: 'TJHREASON', headerName: '처리사유', width: 0 },
        { field: 'EJHREASON', headerName: '사유', width: 154 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">실무교육접수이력팝업</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdJubsuHist ? undefined : 'none' }}><Paper sx={{ width: '684px', height: '382px', width: '100%', height: 'auto', minHeight: '382px' }}><DataGridWrapper rows={hook.ds_oJubsuHist} columns={columns_gdJubsuHist} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1025PEduJubsuHistory;

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