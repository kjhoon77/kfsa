// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM1013PEstimateList } from './useFrmCOM1013PEstimateList';
import * as FrmCOM1013PEstimateListData from './FrmCOM1013PEstimateListData';

export const FrmCOM1013PEstimateList = () => {
    const hook = useFrmCOM1013PEstimateList();
    const columns_gdEstimateList = [
        { field: 'ppseq', headerName: '순번', width: 30 },
        { field: 'yearno', headerName: '발급번호', width: 107 },
        { field: 'vattype', headerName: '신고구분', width: 62 },
        { field: 'WRDATE', headerName: '작성일자', width: 83 },
        { field: 'PPMNY', headerName: '금액(원)', width: 70 },
        { field: 'VMBILLTYPE', headerName: '계산서구분', width: 73 },
        { field: 'sendstatus', headerName: '국세청전송여부', width: 106 },
        { field: 'col_7', headerName: '출력', width: 55, renderCell: () => "출력", sortable: false },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">계산서 발행 리스트</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "42px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdEstimateList ? undefined : 'none' }}><Paper sx={{ width: '590px', height: '227px', width: '100%', height: 'auto', minHeight: '227px' }}><DataGridWrapper rows={hook.ds_ioEstimateList} columns={columns_gdEstimateList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM1013PEstimateList;

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