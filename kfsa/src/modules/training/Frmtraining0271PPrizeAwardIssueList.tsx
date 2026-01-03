// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0271PPrizeAwardIssueList } from './useFrmtraining0271PPrizeAwardIssueList';
import * as Frmtraining0271PPrizeAwardIssueListData from './Frmtraining0271PPrizeAwardIssueListData';

export const Frmtraining0271PPrizeAwardIssueList = () => {
    const hook = useFrmtraining0271PPrizeAwardIssueList();
    const columns_gdPrizeIssue = [
        { field: 'PGUBUN', headerName: '상장구분', width: 92 },
        { field: 'TJPERSONNM', headerName: '성명', width: 94 },
        { field: 'TPBIRTHDAY_SANG', headerName: '생년월일', width: 134 },
        { field: 'PREGDATE', headerName: '발급일', width: 94 },
        { field: 'GTDEPTNM', headerName: '발급지부', width: 65 },
        { field: 'PNM', headerName: '발급자', width: 73 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Sort />} onClick={hook.btnMutilSort_OnClick}></Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdPrizeIssue ? undefined : 'none' }}><Paper sx={{ width: '592px', height: '378px', width: '100%', height: 'auto', minHeight: '378px' }}><DataGridWrapper rows={hook.ds_ioPrizePop2} columns={columns_gdPrizeIssue} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0271PPrizeAwardIssueList;

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