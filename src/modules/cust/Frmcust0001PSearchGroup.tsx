// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0001PSearchGroup } from './useFrmcust0001PSearchGroup';
import * as Frmcust0001PSearchGroupData from './Frmcust0001PSearchGroupData';

export const Frmcust0001PSearchGroup = () => {
    const hook = useFrmcust0001PSearchGroup();
    const columns_gdGroupList = [
        { field: 'id', headerName: '순번', width: 30, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CGTMGNO', headerName: '지부', width: 55 },
        { field: 'RCNM', headerName: '지역', width: 70 },
        { field: 'CDELGUBUN', headerName: '상태', width: 60 },
        { field: 'CNO', headerName: '관리번호', width: 60 },
        { field: 'CCOURSECD', headerName: '직능', width: 70 },
        { field: 'BCONO', headerName: '사업자번호', width: 91 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 116 },
        { field: 'MADDR', headerName: '주소', width: 203 },
        { field: 'FMNM', headerName: '성명', width: 60 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 92 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 56 },
        { field: 'FMHHPTEL', headerName: '연락처(휴대폰)', width: 121 },
        { field: 'FMHTEL', headerName: '전화번호', width: 0 },
        { field: 'BBIZCD', headerName: '용도', width: 106 },
        { field: 'BMGNO', headerName: '대상물No.', width: 68 },
        { field: 'CREGISTERYYMM', headerName: '등록년월', width: 77 },
        { field: 'CDELDATE', headerName: '삭제일자', width: 77 },
        { field: 'CFEEYYMM', headerName: '회비부과년월', width: 90 },
        { field: 'MINAP', headerName: '미납회비', width: 70 },
        { field: 'EDU', headerName: '최종교육일자', width: 89 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnSelect_OnClick}>선택</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회(F6)</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={10}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>검색항목선택</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust0001PSearchGroupData.ds_ds_ioGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>Div0</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_Static1 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>운송자항목선택</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>(                      ,        )</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>조회건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>검색어</Box></Grid>{ hook.isVisible_lbAddr1 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>주소(동)</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }
                <Grid item xs={12} md={7}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주소(도로명)</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>{ hook.isVisible_edAddr1 && (
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_edRoadKeyWord && (
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>번지</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>해당 문자열 포함</Box></Grid><Grid item xs={12} md={2}><Box>전체(취소포함)</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oGroupList} columns={columns_gdGroupList} />
                    </Paper>
                </Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0001PSearchGroup;

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