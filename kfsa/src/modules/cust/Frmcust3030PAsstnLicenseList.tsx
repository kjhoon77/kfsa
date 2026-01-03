// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust3030PAsstnLicenseList } from './useFrmcust3030PAsstnLicenseList';
import * as Frmcust3030PAsstnLicenseListData from './Frmcust3030PAsstnLicenseListData';

export const Frmcust3030PAsstnLicenseList = () => {
    const hook = useFrmcust3030PAsstnLicenseList();
    const columns_gdFireManager = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'OBJ_NM', headerName: '대상물명', width: 152 },
        { field: 'CRQFC_NM', headerName: '등급', width: 120 },
        { field: 'APNT_DE', headerName: '선임일자', width: 87 },
        { field: 'BUILDADRES', headerName: '소재지', width: 242 },
    ];
    const columns_gdLicense = [
        { field: 'SEL', headerName: 'SEL', width: 28 },
        { field: 'LTCCOURSENM', headerName: '자격등급', width: 151 },
        { field: 'LLCSNO', headerName: '자격번호', width: 143 },
        { field: 'LISSUEDATE', headerName: '취득일자', width: 79 },
        { field: 'LORGGUBUNNMM', headerName: '발급기관', width: 96 },
    ];
    const columns_gdEdupass = [
        { field: 'SEL', headerName: 'SEL', width: 28 },
        { field: 'GUBUN', headerName: '구분', width: 45 },
        { field: 'TCCOURSENM', headerName: '등급', width: 189 },
        { field: 'TOENDDATE', headerName: '교육일자', width: 90 },
        { field: 'GTTEAMNM', headerName: '지부', width: 143 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnSelect_OnClick}>확인</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdFireManager ? undefined : 'none' }}><Paper sx={{ width: '664px', height: '150px', width: '100%', height: 'auto', minHeight: '150px' }}><DataGridWrapper rows={hook.ds_oFireManagerList} columns={columns_gdFireManager} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_rdGubun ? undefined : 'none' }}><FormControl component="fieldset" sx={{ width: '88px', height: '294px', width: "max-content", whiteSpace: "nowrap", pr: 2 }}><RadioGroup row sx={{ flexWrap: "nowrap" }} >{ (Frmcust3030PAsstnLicenseListData.ds_ds_iGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} sx={{ whiteSpace: 'nowrap', flexShrink: 0, mr: 2 }} />) }</RadioGroup></FormControl></Box><Box sx={{ display: hook.isVisible_gdLicense ? undefined : 'none' }}><Paper sx={{ width: '560px', height: '142px', width: '100%', height: 'auto', minHeight: '142px' }}><DataGridWrapper rows={hook.ds_oLicenseList} columns={columns_gdLicense} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdEdupass ? undefined : 'none' }}><Paper sx={{ width: '560px', height: '150px', width: '100%', height: 'auto', minHeight: '150px' }}><DataGridWrapper rows={hook.ds_oEdupassList} columns={columns_gdEdupass} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '198px', height: '22px', display: 'flex', alignItems: 'center', ml: '107px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>경력기간</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust3030PAsstnLicenseList;

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