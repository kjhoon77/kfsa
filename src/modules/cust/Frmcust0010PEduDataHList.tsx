// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0010PEduDataHList } from './useFrmcust0010PEduDataHList';
import * as Frmcust0010PEduDataHListData from './Frmcust0010PEduDataHListData';

export const Frmcust0010PEduDataHList = () => {
    const hook = useFrmcust0010PEduDataHList();
    const columns_gdEduDataHList = [
        { field: 'id', headerName: '순번', width: 41, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'EHPROCDATE', headerName: '발행일', width: 93 },
        { field: 'CTOTALFEE', headerName: '미납회비', width: 100 },
        { field: 'EHCUSTADDR1', headerName: '주소1', width: 239 },
        { field: 'EHCUSTADDR2', headerName: '주소2', width: 220 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
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
export default Frmcust0010PEduDataHList;

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