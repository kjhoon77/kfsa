// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2000MCardTest } from './useFrmcust2000MCardTest';
import * as Frmcust2000MCardTestData from './Frmcust2000MCardTestData';

export const Frmcust2000MCardTest = () => {
    const hook = useFrmcust2000MCardTest();
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "18px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.Button0_OnClick} sx={{ width: '100px', height: '74px', whiteSpace: "nowrap" }}>승인</Button></Box><Box sx={{ display: hook.isVisible_Button1 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.Button1_OnClick} sx={{ width: '100px', height: '74px', whiteSpace: "nowrap" }}>취소</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_UPlusPGPOS_ClientOCX1 ? undefined : 'none' }}><Box sx={{ width: '63px', height: '60px', border: '1px dashed grey' }}>Unknown: UPlusPGPOS_ClientOCX</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_MSIE ? undefined : 'none' }}><Box sx={{ width: '912px', height: '290px', border: '1px dashed grey' }}>Unknown: MSIE</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_WebBrowser ? undefined : 'none' }}><Box sx={{ width: '936px', height: '266px', border: '1px dashed grey' }}>Unknown: WebBrowser</Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust2000MCardTest;

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