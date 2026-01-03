// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0511MExamCorrectAnswerPaperPassword } from './useFrmtraining0511MExamCorrectAnswerPaperPassword';
import * as Frmtraining0511MExamCorrectAnswerPaperPasswordData from './Frmtraining0511MExamCorrectAnswerPaperPasswordData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining0511MExamCorrectAnswerPaperPassword = () => {
    const hook = useFrmtraining0511MExamCorrectAnswerPaperPassword();
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "50px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '252px', height: '22px', display: 'flex', alignItems: 'center', ml: '24px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>확인용 암호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "14px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"  startIcon={<Search />} onClick={hook.lfn_Search} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box><Box sx={{ display: hook.isVisible_btnEnd ? undefined : 'none' }}><Button variant="contained"  startIcon={<Close />} onClick={hook.lfn_End} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>닫기</Button></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0511MExamCorrectAnswerPaperPassword;

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