// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmenv0010MLatestUpdateManual } from './useFrmenv0010MLatestUpdateManual';
import * as Frmenv0010MLatestUpdateManualData from './Frmenv0010MLatestUpdateManualData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmenv0010MLatestUpdateManual = () => {
    const hook = useFrmenv0010MLatestUpdateManual();
    const columns_gdUpdate = [
        { field: 'BREGDATE', headerName: 'BREGDATE', width: 85 },
        { field: 'BTITLE', headerName: 'BTITLE', width: 182 },
    ];
    const columns_gdManual = [
        { field: 'BREGDATE', headerName: 'BREGDATE', width: 85 },
        { field: 'BTITLE', headerName: 'BTITLE', width: 181 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgMenuSearch ? undefined : 'none' }}><Box sx={{ width: '800px', height: '592px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgMenuSearch</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgUpdateMore ? undefined : 'none' }}><Box sx={{ width: '31px', height: '9px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgUpdateMore</Box></Box><Box sx={{ display: hook.isVisible_imgManualMore ? undefined : 'none' }}><Box sx={{ width: '31px', height: '9px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgManualMore</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "21px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdUpdate ? undefined : 'none' }}><Paper sx={{ width: '310px', height: '202px', width: '100%', height: 'auto', minHeight: '202px' }}><DataGridWrapper rows={hook.ds_oUpdate} columns={columns_gdUpdate} /></Paper></Box><Box sx={{ display: hook.isVisible_gdManual ? undefined : 'none' }}><Paper sx={{ width: '310px', height: '202px', width: '100%', height: 'auto', minHeight: '202px' }}><DataGridWrapper rows={hook.ds_oManual} columns={columns_gdManual} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmenv0010MLatestUpdateManual;

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