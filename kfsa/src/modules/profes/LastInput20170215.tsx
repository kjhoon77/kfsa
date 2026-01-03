// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useLastInput20170215 } from './useLastInput20170215';
import * as LastInput20170215Data from './LastInput20170215Data';

export const LastInput20170215 = () => {
    const hook = useLastInput20170215();
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "82px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.Button0_OnClick} sx={{ width: '104px', height: '23px', whiteSpace: "nowrap" }}>스크린세이버</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "59px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button3 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.Button3_OnClick} sx={{ width: '104px', height: '23px', whiteSpace: "nowrap" }}>지연시간 10</Button></Box><Box sx={{ display: hook.isVisible_Button1 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.Button1_OnClick} sx={{ width: '104px', height: '23px', whiteSpace: "nowrap" }}>지연시간 5</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button2 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.Button2_OnClick} sx={{ width: '104px', height: '23px', whiteSpace: "nowrap" }}>이벤트발생 TRUE</Button></Box><Box sx={{ display: hook.isVisible_Button4 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.Button4_OnClick} sx={{ width: '104px', height: '23px', whiteSpace: "nowrap" }}>이벤트발생 FALSE</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "35px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button5 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.Button5_OnClick} sx={{ width: '104px', height: '23px', whiteSpace: "nowrap" }}>현재지연시간(초)</Button></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default LastInput20170215;

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