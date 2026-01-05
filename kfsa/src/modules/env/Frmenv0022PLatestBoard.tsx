// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmenv0022PLatestBoard } from './useFrmenv0022PLatestBoard';
import * as Frmenv0022PLatestBoardData from './Frmenv0022PLatestBoardData';

export const Frmenv0022PLatestBoard = () => {
    const hook = useFrmenv0022PLatestBoard();
    const [chk_chkDispYn, setChk_chkDispYn] = useState('0');
    const columns_gdBoard = [
        { field: 'BREGDATE', headerName: '', width: 100 },
        { field: 'BTITLE', headerName: '', width: 386 },
        { field: 'col_2', headerName: '', width: 40 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">공지사항팝업</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgMenuSearch ? undefined : 'none' }}><Box sx={{ width: '600px', height: '402px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgMenuSearch</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgUpdateMore ? undefined : 'none' }}><Box sx={{ width: '31px', height: '9px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgUpdateMore</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "17px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdBoard ? undefined : 'none' }}><Paper sx={{ width: '530px', height: '326px', width: '100%', height: 'auto', minHeight: '326px' }}><DataGridWrapper rows={hook.ds_oBoard} columns={columns_gdBoard} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkDispYn === '1'} onChange={(e) => setChk_chkDispYn(e.target.checked ? '1' : '0')} />} label="오늘 하루동안 최근 공지사항을 열지 않음." /></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmenv0022PLatestBoard;

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