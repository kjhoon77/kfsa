// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0001S09ProfMgmt } from './useFrmprofes0001S09ProfMgmt';
import * as Frmprofes0001S09ProfMgmtData from './Frmprofes0001S09ProfMgmtData';

export const Frmprofes0001S09ProfMgmt = () => {
    const hook = useFrmprofes0001S09ProfMgmt();
    const columns_gdProfTeachingPlan = [
        { field: 'id', headerName: '연도', width: 80, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'YEAR1', headerName: 'YEAR1', width: 80 },
        { field: 'YEAR2', headerName: 'YEAR2', width: 80 },
        { field: 'YEAR3', headerName: 'YEAR3', width: 80 },
        { field: 'YEAR5', headerName: 'YEAR5', width: 80 },
        { field: 'YEAR5', headerName: 'YEAR5', width: 80 },
        { field: 'YEAR6', headerName: 'YEAR6', width: 80 },
        { field: 'YEAR7', headerName: 'YEAR7', width: 80 },
        { field: 'YEAR8', headerName: 'YEAR8', width: 80 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">교안실적</Typography>
                <Stack direction="row" spacing={1}>
                    
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
export default Frmprofes0001S09ProfMgmt;

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