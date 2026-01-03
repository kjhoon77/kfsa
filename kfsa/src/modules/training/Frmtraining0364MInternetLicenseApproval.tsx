// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmtraining0364MInternetLicenseApproval } from './useFrmtraining0364MInternetLicenseApproval';
import * as Frmtraining0364MInternetLicenseApprovalData from './Frmtraining0364MInternetLicenseApprovalData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmtraining0364MInternetLicenseApproval = () => {
    const hook = useFrmtraining0364MInternetLicenseApproval();
    const columns_gdList = [
        { field: 'AJGTMGNO', headerName: '지부', width: 76 },
        { field: 'AJJUBSUDATE', headerName: '신청일', width: 79 },
        { field: 'TPNM', headerName: '성명', width: 66 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 95 },
        { field: 'TPHPTEL', headerName: '연락처', width: 104 },
        { field: 'AJTCCOURSENM', headerName: '등급', width: 152 },
        { field: 'AJGUBUNNM', headerName: '발급구분', width: 222 },
        { field: 'AJSTATUS', headerName: '신청상태', width: 63 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>신청서출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "74px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '908px', height: '258px', width: '100%', height: 'auto', minHeight: '258px' }}><DataGridWrapper rows={hook.ds_ioApproveList} columns={columns_gdList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_fiAttachFile ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fiAttachFile</Button></Box><Box sx={{ display: hook.isVisible_fdAttachFile ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fdAttachFile</Button></Box><Box sx={{ display: hook.isVisible_hfAttachFile ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>hfAttachFile</Button></Box><Box sx={{ display: hook.isVisible_btnPrint ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Print} sx={{ width: '81px', height: '24px', whiteSpace: "nowrap" }}>신청서출력</Button></Box><Box sx={{ display: hook.isVisible_btnImsiSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnImsiSave_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>임시저장</Button></Box><Box sx={{ display: hook.isVisible_btnCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnCancel_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>접수취소</Button></Box><Box sx={{ display: hook.isVisible_btnJubsu ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnJubsu_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>접수시작</Button></Box><Box sx={{ display: hook.isVisible_btnMod ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnMod_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>보완</Button></Box><Box sx={{ display: hook.isVisible_btnApprove ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnApprove_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>승인</Button></Box><Box sx={{ display: hook.isVisible_btnReject ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnReject_OnClick} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>반려</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "17px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSearch ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '142px' }}><Typography variant="body2">개인정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '219px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '203px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edAJMGNO ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '40px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnImageZoom ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnImageZoom_OnClick} sx={{ width: '79px', height: '24px', whiteSpace: "nowrap" }}>이미지확대</Button></Box><Box sx={{ display: hook.isVisible_imgLastestPicture ? undefined : 'none' }}><Box sx={{ width: '108px', height: '142px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgLastestPicture</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '219px', height: '22px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>연락처(휴대폰)</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '203px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>개인식별번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edAJTCCOURSECD ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '40px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edAJISSUEGUBUN ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '40px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "9px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '173px', height: '78px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edStatus ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '24px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edLastImgSeq ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '40px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '497px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '497px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "22px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '70px' }}><Typography variant="body2">신청정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '380px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>등급</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSaveXml ? undefined : 'none' }}><Button variant="contained"  startIcon={<Save />} onClick={hook.btnSaveXml_OnClick} sx={{ width: '104px', height: '23px', whiteSpace: "nowrap" }}>saveXml</Button></Box><Box sx={{ display: hook.isVisible_tx_xmlTest ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '201px', height: '42px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '380px', height: '22px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>발급구분</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmtraining0364MInternetLicenseApprovalData.ds_ds_oAjgubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_SMSSend} sx={{ width: '104px', height: '23px', whiteSpace: "nowrap" }}>sms</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '380px', height: '22px', display: 'flex', alignItems: 'center', ml: '36px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>첨부파일</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnDownload ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnDownload_OnClick} sx={{ width: '69px', height: '24px', whiteSpace: "nowrap" }}> 다운로드 </Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '282px', height: '22px', display: 'flex', alignItems: 'center', ml: '132px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>파일경로</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmtraining0364MInternetLicenseApproval;

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