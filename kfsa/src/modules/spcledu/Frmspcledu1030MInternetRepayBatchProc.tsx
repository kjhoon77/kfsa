// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu1030MInternetRepayBatchProc } from './useFrmspcledu1030MInternetRepayBatchProc';
import * as Frmspcledu1030MInternetRepayBatchProcData from './Frmspcledu1030MInternetRepayBatchProcData';
import { Frmspcledu1040SInternetTrainingRepayBatchProc } from './Frmspcledu1040SInternetTrainingRepayBatchProc';
import { Frmspcledu1050SInternetExamRepayBatchProc } from './Frmspcledu1050SInternetExamRepayBatchProc';
import { Frmspcledu1060SInternetLcsRepayBatchProc } from './Frmspcledu1060SInternetLcsRepayBatchProc';

export const Frmspcledu1030MInternetRepayBatchProc = () => {
    const hook = useFrmspcledu1030MInternetRepayBatchProc();
    const [tabValue_tabTab, setTabValue_tabTab] = useState(0);
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    
                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab ? undefined : 'none' }}><Box sx={{ width: '792px', height: '622px', width: "100%", height: "auto", minHeight: "622px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab} onChange={(e, v) => setTabValue_tabTab(v)} aria-label="tabTab"><Tab label="강습" /><Tab label="시험" /><Tab label="수첩" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab} index={0}><Frmspcledu1040SInternetTrainingRepayBatchProc /></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={1}><Frmspcledu1050SInternetExamRepayBatchProc /></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={2}><Frmspcledu1060SInternetLcsRepayBatchProc /></CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu1030MInternetRepayBatchProc;

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