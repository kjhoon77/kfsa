// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM0040PMulitSort } from './useFrmCOM0040PMulitSort';
import * as FrmCOM0040PMulitSortData from './FrmCOM0040PMulitSortData';

export const FrmCOM0040PMulitSort = () => {
    const hook = useFrmCOM0040PMulitSort();
    const columns_gdSort = [
        { field: 'id', headerName: '정렬순서', width: 60, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'COL_ID', headerName: '컬럼명', width: 243 },
        { field: 'COL_SORT', headerName: '정렬방식', width: 77 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnMoveUp_OnClick}>▲</Button>
<Button variant="contained"  onClick={hook.btnMoveDown_OnClick}>▼</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained">정렬</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">취소</Button></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM0040PMulitSort;

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