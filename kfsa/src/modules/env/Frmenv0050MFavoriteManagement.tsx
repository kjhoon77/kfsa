// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmenv0050MFavoriteManagement } from './useFrmenv0050MFavoriteManagement';
import * as Frmenv0050MFavoriteManagementData from './Frmenv0050MFavoriteManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmenv0050MFavoriteManagement = () => {
    const hook = useFrmenv0050MFavoriteManagement();
    const columns_gdFavorites = [
        { field: 'CCCD', headerName: '정렬순서', width: 60 },
        { field: 'MMENUNM', headerName: '메뉴명', width: 287 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">즐겨찾기관리</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Save}>수정 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnMoveUp_OnClick}>▲</Button>
<Button variant="contained"  onClick={hook.btnMoveDown_OnClick}>▼</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "34px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tvMenu ? undefined : 'none' }}><Box sx={{ width: '350px', height: '554px', border: '1px dashed grey' }}>Unknown: TreeView</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnAdd ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnAdd_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>추가 ▶</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "22px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnDel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnDel_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>◀ 삭제</Button></Box></Stack>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdFavorites ? undefined : 'none' }}><Paper sx={{ width: '350px', height: '570px', width: '100%', height: 'auto', minHeight: '570px' }}><DataGridWrapper rows={hook.ds_ioFavorites} columns={columns_gdFavorites} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmenv0050MFavoriteManagement;

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