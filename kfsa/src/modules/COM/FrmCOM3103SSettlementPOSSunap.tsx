// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM3103SSettlementPOSSunap } from './useFrmCOM3103SSettlementPOSSunap';
import * as FrmCOM3103SSettlementPOSSunapData from './FrmCOM3103SSettlementPOSSunapData';

export const FrmCOM3103SSettlementPOSSunap = () => {
    const hook = useFrmCOM3103SSettlementPOSSunap();
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.btnInitInput_OnClick}>초기화</Button>
<Button variant="contained"  onClick={hook.btnKeyinHP_OnClick}>휴대폰번호 KEY-IN</Button>
<Button variant="contained"  onClick={hook.btnKeyinCompanyNo_OnClick}>사업자번호 KEY-IN</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "55px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbText2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '294px', height: '22px' }}><Typography variant="body2">(&apos;-&apos;제외.국세청 등록된 주민번호나 카드번호 입력)</Typography></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM3103SSettlementPOSSunap;

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