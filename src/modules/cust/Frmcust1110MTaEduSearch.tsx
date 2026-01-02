// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1110MTaEduSearch } from './useFrmcust1110MTaEduSearch';
import * as Frmcust1110MTaEduSearchData from './Frmcust1110MTaEduSearchData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust1110MTaEduSearch = () => {
    const hook = useFrmcust1110MTaEduSearch();
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
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={6}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>지부에서 입력한 타지부 교육내역</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>타지부에서 입력한 </Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>지부 교육내역 </Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>출력 선택</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>직능 선택</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={4}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>교육대상</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>처리일자</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust1110MTaEduSearchData.ds_ds_ioChoiceYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>정렬순서</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Button variant="contained" onClick={hook.btnListPrint_OnClick}>리스트출력</Button></Grid><Grid item xs={12} md={3}><Button variant="contained" onClick={hook.btnListPrint2_OnClick}>현황통계 출력</Button></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1110MTaEduSearch;

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