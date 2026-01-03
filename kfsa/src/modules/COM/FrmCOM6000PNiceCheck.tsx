// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM6000PNiceCheck } from './useFrmCOM6000PNiceCheck';
import * as FrmCOM6000PNiceCheckData from './FrmCOM6000PNiceCheckData';

export const FrmCOM6000PNiceCheck = () => {
    const hook = useFrmCOM6000PNiceCheck();
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "48px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgBoxLeft1 ? undefined : 'none' }}><Box sx={{ width: '4px', height: '244px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgBoxLeft1</Box></Box><Box sx={{ ml: "0px", minWidth: "464px" }}><Box sx={{ display: hook.isVisible_imgBoxTop1 ? undefined : 'none' }}><Box sx={{ width: '464px', height: '6px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgBoxTop1</Box></Box><Box sx={{ display: hook.isVisible_webNiceCheck ? undefined : 'none' }}><Box sx={{ width: '464px', height: '246px', border: '1px dashed grey' }}>Unknown: MSIE</Box></Box><Box sx={{ display: hook.isVisible_imgBoxTop2 ? undefined : 'none' }}><Box sx={{ width: '461px', height: '3px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgBoxTop2</Box></Box><Box sx={{ display: hook.isVisible_imgBoxLeft2 ? undefined : 'none' }}><Box sx={{ width: '1px', height: '244px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgBoxLeft2</Box></Box></Box><Box sx={{ display: hook.isVisible_Image0 ? undefined : 'none' }}><Box sx={{ width: '1px', height: '243px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: Image0</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgBoxBottum ? undefined : 'none' }}><Box sx={{ width: '464px', height: '3px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgBoxBottum</Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM6000PNiceCheck;

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