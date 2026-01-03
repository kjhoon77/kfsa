// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM0071MFrameLeft } from './useFrmCOM0071MFrameLeft';
import * as FrmCOM0071MFrameLeftData from './FrmCOM0071MFrameLeftData';

export const FrmCOM0071MFrameLeft = () => {
    const hook = useFrmCOM0071MFrameLeft();
    const [tabValue_tabMenu, setTabValue_tabMenu] = useState(0);
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "57px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnUID ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnUID_OnClick} sx={{ width: '135px', height: '24px' }}>Call ID 가져오기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbCallID ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '55px', height: '19px' }}><Typography variant="body2">Call ID :</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbUniqueID ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '128px', height: '22px' }}><Typography variant="body2">UniqueID</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '82px', height: '22px' }}><Typography variant="body2">연동데이터 :</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbData1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '104px', height: '22px' }}><Typography variant="body2">UniqueID</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbOpenForm ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '64px', height: '22px' }}><Typography variant="body2">열린 화면 :</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbOpenFormCnt ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '36px', height: '22px' }}><Typography variant="body2">10 개</Typography></Box></Box><Box sx={{ display: hook.isVisible_imgCloseAllForm ? undefined : 'none' }}><Box sx={{ width: '64px', height: '19px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgCloseAllForm</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgLeftBull ? undefined : 'none' }}><Box sx={{ width: '3px', height: '7px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgLeftBull</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_cbxOpenForm ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '192px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select value={hook.gds_SelectedForm?.SELECTEDFORM || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (FrmCOM0071MFrameLeftData.ds_gds_OpenedForm || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ ml: "0px", minWidth: "198px" }}><Box sx={{ display: hook.isVisible_tabMenu ? undefined : 'none' }}><Box sx={{ width: '198px', height: '525px', width: "100%", height: "auto", minHeight: "525px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabMenu} onChange={(e, v) => setTabValue_tabMenu(v)} aria-label="tabMenu"><Tab label="시스템구분" /><Tab label="즐겨찾기" /></Tabs></Box><CustomTabPanel value={tabValue_tabMenu} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tvLeftMenu ? undefined : 'none' }}><Box sx={{ width: '196px', height: '458px', border: '1px dashed grey' }}>Unknown: TreeView</Box></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabMenu} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tvLeftFavorite ? undefined : 'none' }}><Box sx={{ width: '196px', height: '503px', border: '1px dashed grey' }}>Unknown: TreeView</Box></Box></Stack>
</CustomTabPanel></Box></Box><Box sx={{ display: hook.isVisible_fileCallCenterConnect ? undefined : 'none' }}><Box sx={{ width: '24px', height: '26px', border: '1px dashed grey' }}>Unknown: File</Box></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM0071MFrameLeft;

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