// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmspcledu0250MLicenseIssueManagement } from './useFrmspcledu0250MLicenseIssueManagement';
import * as Frmspcledu0250MLicenseIssueManagementData from './Frmspcledu0250MLicenseIssueManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmspcledu0250MLicenseIssueManagement = () => {
    const hook = useFrmspcledu0250MLicenseIssueManagement();
    const columns_gdLcsInfo = [
        { field: 'id', headerName: '순번', width: 34, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'TCCOURSENM', headerName: '직능', width: 112 },
        { field: 'LLCSNO', headerName: '수첩번호', width: 139 },
        { field: 'LISSUEDATE', headerName: '취득일', width: 72 },
        { field: 'LCANCELDATE', headerName: '폐기일', width: 72 },
        { field: 'LISSUEGUBUNNM', headerName: '취득구분', width: 95 },
        { field: 'LCANCELREASON', headerName: '폐기사유', width: 207 },
    ];
    const columns_gdSetlmt = [
        { field: 'id', headerName: '순번', width: 41, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LSLHSEQ', headerName: '발급구분', width: 65 },
        { field: 'LSPROCDATE', headerName: '처리일자', width: 82 },
        { field: 'LSSUNAPGUBUN', headerName: '선수납', width: 55 },
        { field: 'LSGUBUNCDNM', headerName: '결제구분', width: 96 },
        { field: 'LSGUBUNNM', headerName: '결제방법', width: 158 },
        { field: 'LSPROCAMOUNT', headerName: '금액(원)', width: 64 },
        { field: 'LSREPAYREF', headerName: '환불No', width: 58 },
        { field: 'LSREGSABUNNM', headerName: '처리자', width: 73 },
        { field: 'TSJUMUNNO', headerName: '주문번호', width: 106 },
    ];
    const columns_gdLcsHistory = [
        { field: 'id', headerName: '순번', width: 32, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'LHISSUEREASON', headerName: '발급구분', width: 68 },
        { field: 'LHPRTDATE', headerName: '발급일자', width: 76 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_InfoSave}>수첩정보 및 바코드 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "34px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_imgLastestPicture ? undefined : 'none' }}><Box sx={{ width: '94px', height: '122px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgLastestPicture</Box></Box><Box sx={{ display: hook.isVisible_imgPicture ? undefined : 'none' }}><Box sx={{ width: '108px', height: '142px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgPicture</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSearch ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '70px' }}><Typography variant="body2">조회</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchPersonInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearchPersonInfo_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>기본정보조회</Button></Box><Box sx={{ display: hook.isVisible_btnTPModify ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnTPModify_OnClick} sx={{ width: '131px', height: '24px', whiteSpace: "nowrap" }}>접수자 정보 변경</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주민번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnAuthResidentNo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnAuthResidentNo_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>실명인증</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '234px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>수첩번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Search} sx={{ width: '66px', height: '24px', whiteSpace: "nowrap" }}>번호조회</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '149px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 46, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>바코드</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnBarCodeSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnBarCodeSearch_OnClick} sx={{ width: '80px', height: '24px', whiteSpace: "nowrap" }}>바코드조회</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "11px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbPersonInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '94px' }}><Typography variant="body2">개인정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '150px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchZipCode ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnSearchZipCode_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ display: hook.isVisible_edAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '358px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_lbImgDate ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '91px', height: '22px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '442px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnApplyPicture ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnApplyPicture_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>최근사진반영</Button></Box><Box sx={{ display: hook.isVisible_btnScanPicture ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnScanPicture_OnClick} sx={{ width: '119px', height: '24px', whiteSpace: "nowrap" }}>사진스캔실행</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '220px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>전화번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '220px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>휴대폰</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearchRegPicture ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSearchRegPicture_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>등록사진조회</Button></Box><Box sx={{ display: hook.isVisible_btnLoadScanPicture ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnLoadScanPicture_OnClick} sx={{ width: '119px', height: '24px', whiteSpace: "nowrap" }}>스캔사진불러오기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '534px', height: '22px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>근무처</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnPictureManagement ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPictureManagement_OnClick} sx={{ width: '93px', height: '24px', whiteSpace: "nowrap" }}>사진관리</Button></Box><Box sx={{ display: hook.isVisible_btnLoadPicture ? undefined : 'none' }}><Button variant="contained" color="success"  onClick={hook.btnLoadPicture_OnClick} sx={{ width: '119px', height: '24px', whiteSpace: "nowrap" }}>사진찾기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbLcsInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '70px' }}><Typography variant="body2">수첩정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '190px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>최초취득일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '174px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육기간</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '112px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 10, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '174px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 72, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>발급일자</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Save} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>수첩 재발급</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '380px', height: '46px', display: 'flex', alignItems: 'center', ml: '35px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmspcledu0250MLicenseIssueManagementData.ds_ds_oCourse || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '276px', height: '46px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 20, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>구분</Typography>
                    <FormControl component="fieldset" sx={{ width: "max-content", whiteSpace: "nowrap" }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmspcledu0250MLicenseIssueManagementData.ds_ds_oIssueGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_btnPrint ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Print} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>수첩 출력</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnDelete ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_Delete} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>수첩 폐기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbLcsHistInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '114px' }}><Typography variant="body2">수첩보유현황</Typography></Box></Box><Box sx={{ display: hook.isVisible_gdLcsInfo ? undefined : 'none' }}><Paper sx={{ width: '528px', height: '154px', width: '100%', height: 'auto', minHeight: '154px' }}><DataGridWrapper rows={hook.ds_oLicense} columns={columns_gdLcsInfo} /></Paper></Box><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '113px' }}><Typography variant="body2">수첩발급이력</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSearchLcsIssueHist ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnLcsImage_OnClick} sx={{ width: '94px', height: '24px', whiteSpace: "nowrap" }}>이미지보기</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdLcsHistory ? undefined : 'none' }}><Paper sx={{ width: '190px', height: '130px', width: '100%', height: 'auto', minHeight: '130px' }}><DataGridWrapper rows={hook.ds_oLicenseH} columns={columns_gdLcsHistory} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSetlmt ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '24px', height: '126px' }}><Typography variant="body2">결제내역</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSetlmt ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSetlmt_OnClick} sx={{ width: '92px', height: '126px', whiteSpace: "nowrap" }}>결제(POS)</Button></Box><Box sx={{ display: hook.isVisible_btnPosReport ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPosReport_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>통합영수증조회</Button></Box><Box sx={{ display: hook.isVisible_btnPosResultList ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPosResultList_OnClick} sx={{ width: '118px', height: '24px', whiteSpace: "nowrap" }}>결제처리결과조회</Button></Box><Box sx={{ display: hook.isVisible_btnChangeProcDate ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSeqList_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>처리일자변경</Button></Box><Box sx={{ display: hook.isVisible_btnProcRct ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnProcRct_OnClick} sx={{ width: '131px', height: '24px', whiteSpace: "nowrap" }}>현금영수증처리/취소</Button></Box><Box sx={{ display: hook.isVisible_btnPrintReRct ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintReRct_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>영수증재발행</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdSetlmt ? undefined : 'none' }}><Paper sx={{ width: '660px', height: '140px', width: '100%', height: 'auto', minHeight: '140px' }}><DataGridWrapper rows={hook.ds_oSetlmentHist} columns={columns_gdSetlmt} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmspcledu0250MLicenseIssueManagement;

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