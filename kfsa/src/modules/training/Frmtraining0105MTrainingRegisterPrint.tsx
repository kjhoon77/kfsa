// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0105MTrainingRegisterPrint } from './useFrmtraining0105MTrainingRegisterPrint';
import * as Frmtraining0105MTrainingRegisterPrintData from './Frmtraining0105MTrainingRegisterPrintData';
import { Frmtraining0110STrainingJubsurRegisterPrint } from './Frmtraining0110STrainingJubsurRegisterPrint';
import { Frmtraining0130STrainingSeatNoPrint } from './Frmtraining0130STrainingSeatNoPrint';
import { Frmtraining0135STrainingExamSeatPrint } from './Frmtraining0135STrainingExamSeatPrint';

export const Frmtraining0105MTrainingRegisterPrint = () => {
    const hook = useFrmtraining0105MTrainingRegisterPrint();
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab ? undefined : 'none' }}><Box sx={{ width: '500px', height: '242px', width: "100%", height: "auto", minHeight: "242px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab} onChange={(e, v) => setTabValue_tabTab(v)} aria-label="tabTab"><Tab label="접수부" /><Tab label="좌석번호표" /><Tab label="시험좌석표" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab} index={0}><Frmtraining0110STrainingJubsurRegisterPrint /></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={1}><Frmtraining0130STrainingSeatNoPrint /></CustomTabPanel><CustomTabPanel value={tabValue_tabTab} index={2}><Frmtraining0135STrainingExamSeatPrint /></CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0105MTrainingRegisterPrint;

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