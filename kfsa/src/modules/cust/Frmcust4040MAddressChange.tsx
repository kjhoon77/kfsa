// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmcust4040MAddressChange } from './useFrmcust4040MAddressChange';
import * as Frmcust4040MAddressChangeData from './Frmcust4040MAddressChangeData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust4040MAddressChange = () => {
    const hook = useFrmcust4040MAddressChange();
    const [chk_chkAll, setChk_chkAll] = useState('0');
    const [chk_chkManager, setChk_chkManager] = useState('0');
    const [chk_chkMemberFee, setChk_chkMemberFee] = useState('0');
    const [chk_chkBuilding, setChk_chkBuilding] = useState('0');
    const [chk_chkEduFee, setChk_chkEduFee] = useState('0');
    const [chk_chkTank1, setChk_chkTank1] = useState('0');
    const [chk_chkTank2, setChk_chkTank2] = useState('0');
    const [chk_chkAgency, setChk_chkAgency] = useState('0');
    const [chk_chkEdu, setChk_chkEdu] = useState('0');
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">주소변경</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.lfn_Save}>주소변경</Button>
<Button variant="contained"  onClick={hook.btnSelectModify_OnClick}>해당자료변경</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '167px', height: '22px', display: 'flex', alignItems: 'center', ml: '7px' }}>
                    <Typography variant="body2" sx={{ minWidth: 104, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>변 경 전</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '163px', height: '22px', display: 'flex', alignItems: 'center', ml: '78px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>변 경 후</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '104px', height: '22px' }}><Typography variant="body2">주소</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '70px' }}><Typography variant="body2">변
경

전</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '210px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>시 / 도</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static8 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '70px' }}><Typography variant="body2">변
경

후</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '210px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>시 / 도</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '210px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구 / 군</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '210px', height: '22px', display: 'flex', alignItems: 'center', ml: '34px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구 / 군</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '210px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동 / 읍</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '210px', height: '22px', display: 'flex', alignItems: 'center', ml: '34px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>동 / 읍</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "12px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static9 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '104px', height: '22px' }}><Typography variant="body2">해당자료변경</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkAll === '1'} onChange={(e) => setChk_chkAll(e.target.checked ? '1' : '0')} />} label="전체선택" /><Box sx={{ display: hook.isVisible_lbNotice ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '304px', height: '30px' }}><Typography variant="body2">※ 해당자료변경시 체크된 항목의 모든 주소정보가
    변경후 정보로 변경됩니다.</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkManager === '1'} onChange={(e) => setChk_chkManager(e.target.checked ? '1' : '0')} />} label="선임자주소" /><FormControlLabel control={<Checkbox checked={chk_chkBuilding === '1'} onChange={(e) => setChk_chkBuilding(e.target.checked ? '1' : '0')} />} label="대상물(업체)주소" /><FormControlLabel control={<Checkbox checked={chk_chkMemberFee === '1'} onChange={(e) => setChk_chkMemberFee(e.target.checked ? '1' : '0')} />} label="회비희망주소" /><FormControlLabel control={<Checkbox checked={chk_chkEduFee === '1'} onChange={(e) => setChk_chkEduFee(e.target.checked ? '1' : '0')} />} label="교육비희망주소" /><FormControlLabel control={<Checkbox checked={chk_chkEdu === '1'} onChange={(e) => setChk_chkEdu(e.target.checked ? '1' : '0')} />} label="교육통지서주소" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><FormControlLabel control={<Checkbox checked={chk_chkAgency === '1'} onChange={(e) => setChk_chkAgency(e.target.checked ? '1' : '0')} />} label="업무대행업체주소" /><FormControlLabel control={<Checkbox checked={chk_chkTank1 === '1'} onChange={(e) => setChk_chkTank1(e.target.checked ? '1' : '0')} />} label="이동탱크설치주소" /><FormControlLabel control={<Checkbox checked={chk_chkTank2 === '1'} onChange={(e) => setChk_chkTank2(e.target.checked ? '1' : '0')} />} label="이동탱크상치주소" /></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust4040MAddressChange;

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