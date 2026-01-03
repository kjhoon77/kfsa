// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0034PSearchMainbuilding } from './useFrmcust0034PSearchMainbuilding';
import * as Frmcust0034PSearchMainbuildingData from './Frmcust0034PSearchMainbuildingData';

export const Frmcust0034PSearchMainbuilding = () => {
    const hook = useFrmcust0034PSearchMainbuilding();
    const [chk_chkCust, setChk_chkCust] = useState('0');
    const columns_gdSubCustList = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CGTMGNO', headerName: '지부', width: 70 },
        { field: 'CNO', headerName: '관리번호', width: 67 },
        { field: 'GUBUN', headerName: '상태', width: 20 },
        { field: 'CDELGUBUN', headerName: 'CDELGUBUN', width: 60 },
        { field: 'RCNM', headerName: '지역', width: 60 },
        { field: 'CCOURSECD', headerName: '직능', width: 80 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 60 },
        { field: 'FMNM', headerName: '성명', width: 60 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 100 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 0 },
        { field: 'MINAP', headerName: '미납회비', width: 0 },
        { field: 'COVERCMGNO', headerName: '겸직구분', width: 65 },
        { field: 'OLHNM', headerName: '자격구분', width: 0 },
        { field: 'CFIREMGNO', headerName: '소방관리번호', width: 88 },
    ];
    const columns_gdMainCustList = [
        { field: 'id', headerName: '순번', width: 32, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CGTMGNO', headerName: '지부', width: 53 },
        { field: 'CNO', headerName: '관리번호', width: 59 },
        { field: 'BNM', headerName: '대상물명', width: 148 },
        { field: 'RCNM', headerName: '지역', width: 60 },
        { field: 'CCOURSECD', headerName: '직능', width: 80 },
        { field: 'BADDR', headerName: '주소', width: 287 },
        { field: 'FMNM', headerName: '성명', width: 60 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 100 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 100 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 80 },
        { field: 'EPPASSDATE', headerName: '교육일자', width: 0 },
        { field: 'MINAP', headerName: '미납회비', width: 0 },
        { field: 'OLHNM', headerName: '자격구분', width: 0 },
    ];
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "47px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static1 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '212px', height: '22px' }}><Typography variant="body2"> ① 메인 소방안전관리자 선택</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnMainSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_MainSearch} sx={{ width: '79px', height: '24px', whiteSpace: "nowrap" }}>조  회</Button></Box><Box sx={{ display: hook.isVisible_btnMainSelect ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnMainSelect_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>선택</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_radSearchGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '90px', height: '48px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust0034PSearchMainbuildingData.ds_ds_oSearchGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box><Box sx={{ display: hook.isVisible_edMainBnm ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '667px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '331px', height: '22px', display: 'flex', alignItems: 'center', ml: '99px' }}>
                    <Typography variant="body2" sx={{ minWidth: 107, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>도로명 or 읍면동</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '331px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 107, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물번호 or 번지</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMainCustList ? undefined : 'none' }}><Paper sx={{ width: '766px', height: '226px', width: '100%', height: 'auto', minHeight: '226px' }}><DataGridWrapper rows={hook.ds_oMainCustList} columns={columns_gdMainCustList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '428px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 172, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>메인 소방안전관리 대상물명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '260px', height: '22px', display: 'flex', alignItems: 'center', ml: '20px' }}>
                    <Typography variant="body2" sx={{ minWidth: 92, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>관리번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '284px', height: '22px' }}><Typography variant="body2"> ② 소방안전관리보조자 선택 또는 신규등록</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static7 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '408px', height: '22px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '388px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSubsearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.lfn_SubSearch} sx={{ width: '79px', height: '24px', whiteSpace: "nowrap" }}>조  회</Button></Box><Box sx={{ display: hook.isVisible_btnSubSelect ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSubSelect_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>선택</Button></Box><Box sx={{ display: hook.isVisible_btnNewAdd ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnNewAdd_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>신규추가</Button></Box><FormControlLabel control={<Checkbox checked={chk_chkCust === '1'} onChange={(e) => setChk_chkCust(e.target.checked ? '1' : '0')} />} label="삭제자료포함" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "9px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdSubCustList ? undefined : 'none' }}><Paper sx={{ width: '766px', height: '212px', width: '100%', height: 'auto', minHeight: '212px' }}><DataGridWrapper rows={hook.ds_oSubCustList} columns={columns_gdSubCustList} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0034PSearchMainbuilding;

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