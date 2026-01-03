// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM0053MCTILogin } from './useFrmCOM0053MCTILogin';
import * as FrmCOM0053MCTILoginData from './FrmCOM0053MCTILoginData';

export const FrmCOM0053MCTILogin = () => {
    const hook = useFrmCOM0053MCTILogin();
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "0px", minWidth: "606px" }}><Box sx={{ display: hook.isVisible_imgImage ? undefined : 'none' }}><Box sx={{ width: '606px', height: '408px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgImage</Box></Box><Box sx={{ display: hook.isVisible_imgProgress ? undefined : 'none' }}><Box sx={{ width: '300px', height: '126px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgProgress</Box></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '278px', height: '22px', display: 'flex', alignItems: 'center', ml: '263px' }}>
                    <Typography variant="body2" sx={{ minWidth: 58, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선택</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmCOM0053MCTILoginData.ds_gds_oSameUserInfo || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "20px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edUserId ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '120px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_chkSaveUser ? undefined : 'none' }}><Box sx={{ width: '88px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edPassword ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '120px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_cbxAutoLogin ? undefined : 'none' }}><Box sx={{ width: '88px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "12px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgLogin ? undefined : 'none' }}><Box sx={{ width: '72px', height: '30px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgLogin</Box></Box><Box sx={{ display: hook.isVisible_imgCancel ? undefined : 'none' }}><Box sx={{ width: '72px', height: '30px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgCancel</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "20px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxGubun ? undefined : 'none' }}><Box sx={{ width: '88px', height: '22px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "32px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radServiceGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '120px', height: '22px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (FrmCOM0053MCTILoginData.ds_ds_oServiceGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM0053MCTILogin;

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