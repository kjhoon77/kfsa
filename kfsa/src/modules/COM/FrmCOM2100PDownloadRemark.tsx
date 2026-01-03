// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM2100PDownloadRemark } from './useFrmCOM2100PDownloadRemark';
import * as FrmCOM2100PDownloadRemarkData from './FrmCOM2100PDownloadRemarkData';

export const FrmCOM2100PDownloadRemark = () => {
    const hook = useFrmCOM2100PDownloadRemark();
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '118px', height: '22px' }}><Typography variant="body2">파일명(제목)</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbFileNM ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '470px', height: '22px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '590px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 118, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>다운로드 사유</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "12px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnConfirm ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnConfirm_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>확인</Button></Box><Box sx={{ display: hook.isVisible_btnCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnCancel_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>취소</Button></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM2100PDownloadRemark;

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