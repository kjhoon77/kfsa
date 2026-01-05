// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM9050MPersonFormUpload } from './useFrmCOM9050MPersonFormUpload';
import * as FrmCOM9050MPersonFormUploadData from './FrmCOM9050MPersonFormUploadData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const FrmCOM9050MPersonFormUpload = () => {
    const hook = useFrmCOM9050MPersonFormUpload();
    const columns_gdBizform = [
        { field: 'FCBIZ', headerName: '업무', width: 81 },
        { field: 'FCFULLNM', headerName: '서식', width: 379 },
        { field: 'col_2', headerName: '화면열기', width: 81, renderCell: () => "바로가기", sortable: false },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">(개인별)개인정보 민원서식 등록 바로가기</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnDataHistory_OnClick}>사용방법</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "67px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdBizform ? undefined : 'none' }}><Paper sx={{ width: '547px', height: '441px', width: '100%', height: 'auto', minHeight: '441px' }}><DataGridWrapper rows={hook.ds_ioBizformcode} columns={columns_gdBizform} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM9050MPersonFormUpload;

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