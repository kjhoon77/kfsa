// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1220MEduMonthReproduction } from './useFrmcust1220MEduMonthReproduction';
import * as Frmcust1220MEduMonthReproductionData from './Frmcust1220MEduMonthReproductionData';

export const Frmcust1220MEduMonthReproduction = () => {
    const hook = useFrmcust1220MEduMonthReproduction();
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Save}>자료 재생성</Button>
<Button variant="contained"  onClick={hook.btnFinishProc_OnClick}>마감처리</Button>
<Button variant="contained"  onClick={hook.btnFinishCancel_OnClick}>마감취소</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={6}><Box>해당월의 마지막날 자료가 맞지 않을 경우 &quot;재생성&quot;을 실행하면
 
그룹웨어 [업무통계] - &quot;실무교육현황&quot;의 해당월 마지막 날 자료가 재생성됩니다.

매월 &quot;마감&quot; 처리를 하셔야 주무부서에서 확인 가능합니다.</Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1220MEduMonthReproduction;

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