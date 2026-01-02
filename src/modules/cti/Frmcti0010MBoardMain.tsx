// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Close, ContentCopy, Delete, Description, Print, Refresh, Save, Search } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcti0010MBoardMain } from './useFrmcti0010MBoardMain';
import * as Frmcti0010MBoardMainData from './Frmcti0010MBoardMainData';

export const Frmcti0010MBoardMain = () => {
    const hook = useFrmcti0010MBoardMain();
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
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>ver</Box></Grid><Grid item xs={12} md={2}><Button variant="contained">수신대기</Button></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Button variant="contained">자리비움</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">보류</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">보류해제</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">호전환</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">내선전환</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">끊기</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">비속어</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">성희롱</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">상담불가</Button></Grid><Grid item xs={12} md={2}><Box>KEY-IN</Box></Grid><Grid item xs={12} md={2}><Button variant="contained">주민번호</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">전화번호</Button></Grid><Grid item xs={12} md={2}><Button variant="contained">사업자번호</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>Div0</Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcti0010MBoardMain;

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