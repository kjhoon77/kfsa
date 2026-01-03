// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0010PEduNoticePrint } from './useFrmcust0010PEduNoticePrint';
import * as Frmcust0010PEduNoticePrintData from './Frmcust0010PEduNoticePrintData';

export const Frmcust0010PEduNoticePrint = () => {
    const hook = useFrmcust0010PEduNoticePrint();
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "55px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnSearchEduSchedule ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearchEduSchedule_OnClick} sx={{ width: '144px', height: '24px', whiteSpace: "nowrap" }}>실무교육일정 선택</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '108px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육년도</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduSchecule?.ESYEAR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '184px', height: '22px', display: 'flex', alignItems: 'center', ml: '55px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육대상</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduSchecule?.CGROUPNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '148px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육일자</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduSchecule?.ESDATE || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '113px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>좌석수</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduSchecule?.ESSEATCNT || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '156px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육시간</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduSchecule?.TIME || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '368px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육장소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_ioEduSchecule?.EPNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "18px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static26 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '100px', height: '22px' }}><Typography variant="body2">통지서 여백조정</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '100px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상단여백</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static32 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '28px', height: '22px' }}><Typography variant="body2">mm</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '100px', height: '22px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 56, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>왼쪽여백</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static33 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '28px', height: '22px' }}><Typography variant="body2">mm</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static36 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '160px', height: '20px' }}><Typography variant="body2">상단, 왼쪽 여백 50은 기본값임</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnPrint ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Print} sx={{ width: '120px', height: '24px', whiteSpace: "nowrap" }}>교육통지서 출력</Button></Box><Box sx={{ display: hook.isVisible_btnPDFPrint ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_PDFPrint} sx={{ width: '120px', height: '24px', whiteSpace: "nowrap" }}>PDF 출력</Button></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0010PEduNoticePrint;

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