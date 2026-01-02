// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust3040MFireManagerPstponeManagement } from './useFrmcust3040MFireManagerPstponeManagement';
import * as Frmcust3040MFireManagerPstponeManagementData from './Frmcust3040MFireManagerPstponeManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust3040MFireManagerPstponeManagement = () => {
    const hook = useFrmcust3040MFireManagerPstponeManagement();
    const columns_gdList = [
        { field: 'AJMGNO_MASK', headerName: '접수번호', width: 67 },
        { field: 'AJDATE', headerName: '신청일자', width: 80 },
        { field: 'AJSTATUSNM', headerName: '상태', width: 100 },
        { field: 'AJMOTHODNM', headerName: '접수방법', width: 63 },
        { field: 'OBJ_NM', headerName: '소방대상물명', width: 140 },
        { field: 'ASAJCOURSECDNM', headerName: '직능', width: 126 },
        { field: 'AJBIZGUBUNNM', headerName: '신청구분', width: 66 },
        { field: 'AJSTRDATE', headerName: '접수일자', width: 91 },
        { field: 'I_NM', headerName: '선임자명', width: 66 },
        { field: 'I_IHIDNUM', headerName: '생년월일', width: 62 },
        { field: 'FSTNSMALL_NM', headerName: '소방관서', width: 126 },
    ];
    const columns_gdFile = [
        { field: 'id', headerName: '순번', width: 50, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'AJFREALFILENM', headerName: '첨부파일명', width: 313 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel_OnClick}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oJubsuList} columns={columns_gdList} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfnBtnClick}>신규접수</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" startIcon={<Save />} onClick={hook.lfnBtnClick}>수정 저장</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfnBtnClick}>접수시작</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfnBtnClick}>접수완료</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfnBtnClick}>반려</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>접수번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.AJMGNO_MASK || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>신청일</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상태</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioMaster?.AJSTATUS || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oStatus || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>접수방법</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioMaster?.AJMOTHOD || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oMethod || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소방대상물</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.OBJ_NM || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>신청인</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.AJNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>신청자연락처</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.AJHP || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>신청지부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioMaster?.AJGTMGNO || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.BILD_SN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>관계인정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관계인구분</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioMaster?.PARTCPNT_CODE || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oOwnerGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>성명   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.PARTCPNT || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>생년월일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.IHIDNUM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> 연락처   </Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.TLPHON_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관계자순번</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.PARTCPNT_SN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>선임자정보</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>식별번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.I_PERSONKEY || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>자격자일련번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.QUALFUSER_SN || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>성명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.I_NM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주민등록번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.I_IHIDNUM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>휴대폰</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.I_HPNO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>이메일</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.EMAIL || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주소</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.ZIP || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnSearchZipCode_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={5}><Box></Box></Grid><Grid item xs={12} md={5}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>선임분야</Typography>
                        <FormControl component="fieldset"><RadioGroup row value={hook.ds_ioMaster?.ETC_MATTER || ''}>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oEtcCourse || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={8}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>선임사유</Typography>
                        <FormControl component="fieldset"><RadioGroup row value={hook.ds_ioMaster?.APNT_PSTPONE_CODE || ''}>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oResn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={4}><Button variant="contained" onClick={hook.btnCheck_OnClick}> 안전원 보유정보 확인</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>구분</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oTEGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>접수지부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select value={hook.ds_ioMaster?.JUBSUJIBU || ''} displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust3040MFireManagerPstponeManagementData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>강습교육</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>접수일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.EDC_RCEPT_DE_8 || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>접수번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.EDC_RCEPT_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>교육기간</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.TNCRS_PD_BEGIN_DE_8 || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}> ~</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.TNCRS_TIME_END_DE_8 || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>시험접수</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>응시일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.APYEXM_RCEPT_DE_8 || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>응시번호</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.APYEXM_RCEPT_NO || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>시험일자</Typography>
                        <TextField size="small" fullWidth value={hook.ds_ioMaster?.APYEXM_DE_8 || ''} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_Button1 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>저장검증</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_btnSaveXml && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>saveXml</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>첨부관리</Box></Grid>{ hook.isVisible_tx_xmlTest && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oFileList} columns={columns_gdFile} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnDownload_OnClick}>다운로드</Button></Grid>{ hook.isVisible_btnUpload && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>업로드</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_Button2 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Button2</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust3040MFireManagerPstponeManagement;

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