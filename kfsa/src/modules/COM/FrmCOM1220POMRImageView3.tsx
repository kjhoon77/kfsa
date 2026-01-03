// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM1220POMRImageView3 } from './useFrmCOM1220POMRImageView3';
import * as FrmCOM1220POMRImageView3Data from './FrmCOM1220POMRImageView3Data';

export const FrmCOM1220POMRImageView3 = () => {
    const hook = useFrmCOM1220POMRImageView3();
    const [tabValue_OMRTab, setTabValue_OMRTab] = useState(0);
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "19px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_OMRTab ? undefined : 'none' }}><Box sx={{ width: '1034px', height: '665px', width: "100%", height: "auto", minHeight: "665px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_OMRTab} onChange={(e, v) => setTabValue_OMRTab(v)} aria-label="OMRTab"><Tab label="1과목" /><Tab label="2과목" /><Tab label="3과목" /></Tabs></Box><CustomTabPanel value={tabValue_OMRTab} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_MSIE1 ? undefined : 'none' }}><Box sx={{ width: '1019px', height: '587px', border: '1px dashed grey' }}>Unknown: MSIE</Box></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_OMRTab} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "11px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_MSIE2 ? undefined : 'none' }}><Box sx={{ width: '1018px', height: '583px', border: '1px dashed grey' }}>Unknown: MSIE</Box></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_OMRTab} index={2}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_MSIE3 ? undefined : 'none' }}><Box sx={{ width: '1019px', height: '587px', border: '1px dashed grey' }}>Unknown: MSIE</Box></Box></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM1220POMRImageView3;

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