// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmotherincome0010MOtherincomeManagementweb } from './useFrmotherincome0010MOtherincomeManagementweb';
import * as Frmotherincome0010MOtherincomeManagementwebData from './Frmotherincome0010MOtherincomeManagementwebData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmotherincome0010MOtherincomeManagementweb = () => {
    const hook = useFrmotherincome0010MOtherincomeManagementweb();
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const columns_gdOtherIncome = [
        { field: 'OIMGNO', headerName: '관리번호', width: 65 },
        { field: 'BIZGUBUN', headerName: '소득구분', width: 65 },
        { field: 'STATUS', headerName: '상태', width: 45 },
        { field: 'JIBU', headerName: '등록지부', width: 85 },
        { field: 'OIPRTNO', headerName: '발급번호', width: 65 },
        { field: 'OIINCOMECD', headerName: '소득코드', width: 105 },
        { field: 'PAYMENTDATE', headerName: '지급일자', width: 85 },
        { field: 'REVERTMONTH', headerName: '귀속년월', width: 85 },
        { field: 'OIPAYMENT', headerName: '지급총액', width: 85 },
        { field: 'OIINCOME', headerName: '소득금액', width: 85 },
        { field: 'OIOINCOME', headerName: '원천소득세', width: 85 },
        { field: 'OIOJUMIN', headerName: '원천주민세', width: 85 },
        { field: 'OIOTOTAL', headerName: '원천세총계', width: 85 },
        { field: 'OIREFKEY', headerName: '관리키', width: 110 },
    ];
    const columns_gdOtherExcel1 = [
        { field: 'OIJIBU', headerName: '지부코드', width: 70 },
        { field: 'JIBU_NAME', headerName: '지부명', width: 70 },
        { field: 'OIPAYMENTYEAR', headerName: '발급년도', width: 70 },
        { field: 'OIPRTNO', headerName: '발급번호', width: 70 },
        { field: 'OPNM', headerName: '발급자명', width: 70 },
        { field: 'OIRESIDENT', headerName: '주민등록번호', width: 120 },
        { field: 'OIPAYMENTDATE', headerName: '지급일자', width: 80 },
        { field: 'OIPAYMENT', headerName: '지급총액', width: 80 },
        { field: 'OINEEDCOST', headerName: '필요경비', width: 80 },
        { field: 'OIINCOME', headerName: '소득금액', width: 80 },
        { field: 'OIOINCOME', headerName: '원천소득세', width: 80 },
        { field: 'OIOJUMIN', headerName: '원천주민세', width: 80 },
        { field: 'TOTAL', headerName: '원천세총계', width: 80 },
        { field: 'OIREMARK', headerName: '비고', width: 200 },
    ];
    const columns_gdOtherExcel2 = [
        { field: 'OIJIBU', headerName: '지부코드', width: 70 },
        { field: 'JIBU_NAME', headerName: '지부명', width: 70 },
        { field: 'OIPAYMENTYEAR', headerName: '발급년도', width: 70 },
        { field: 'OIPRTNO', headerName: '발급번호', width: 70 },
        { field: 'OPNM', headerName: '발급자명', width: 70 },
        { field: 'OIRESIDENT', headerName: '주민등록번호', width: 120 },
        { field: 'OIPAYMENTDATE', headerName: '지급일자', width: 80 },
        { field: 'OIPAYMENT', headerName: '지급총액', width: 80 },
        { field: 'OIOINCOME', headerName: '원천소득세', width: 80 },
        { field: 'OIOJUMIN', headerName: '원천주민세', width: 80 },
        { field: 'TOTAL', headerName: '원천세총계', width: 80 },
        { field: 'OIREMARK', headerName: '비고', width: 200 },
    ];
    const columns_gdOtherbiz = [
        { field: 'OPNM', headerName: '이름', width: 125 },
        { field: 'JUMIN', headerName: '생년월일', width: 175 },
        { field: 'ODATE', headerName: '변경일자', width: 175 },
    ];
    const columns_gdOtherbizExcel = [
        { field: 'OPNM', headerName: '성명', width: 75 },
        { field: 'JUMIN', headerName: '생년월일', width: 100 },
        { field: 'TOTPAYMENT', headerName: '지급총액', width: 90 },
        { field: 'OTHERINCOME', headerName: 'OTHERINCOME', width: 95 },
        { field: 'OTHERJUMIN', headerName: 'OTHERJUMIN', width: 120 },
        { field: 'BIZINCOME', headerName: 'BIZINCOME', width: 95 },
        { field: 'BIZJUMIN', headerName: 'BIZJUMIN', width: 120 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="   지급조서 관리   " /><Tab label="   지급조서 발급현황   " /><Tab label="   사업소득자 관리   " /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}><Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>소득자 검색</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_CUST_신규"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab1_btnPersonNew_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_CUST_변경"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab1_btnPersonChg_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_CUST_삭제"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab1_btnPersonDel_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_CUST_저장"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab1_btnPersonSave_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>이 름</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주민등록번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>-</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab1_tab1_btnJuminchk_OnClick}>실명확인</Button></Grid>{ hook.isVisible_lbResidentNoError && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>주민번호등록됨</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>국 적</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmotherincome0010MOtherincomeManagementwebData.ds_ds_ioOtherCode || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>거 주</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmotherincome0010MOtherincomeManagementwebData.ds_ds_ioGujuGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>내/외국인</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmotherincome0010MOtherincomeManagementwebData.ds_ds_ioLocalGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={8}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주 소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>지급조서 정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_CUST_신규"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab1_btnIncomepaymentNew_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_CUST_저장"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab1_btnIncomepaymentSave_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_CUST_출력"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab1_btnIncomepaymentPrint_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_CUST_폐기"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab1_btnIncomepaymentFall_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_CUST_삭제"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab1_btnIncomepaymentDel_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid>{ hook.isVisible_edOiyear && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소득구분</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmotherincome0010MOtherincomeManagementwebData.ds_ds_ioBizGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>발급번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상태</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지급일자</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab1_tab1_btnOipaymentdate_OnClick}>일자조회</Button></Grid>{ hook.isVisible_edOijibu && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>귀속년월</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>소득코드</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmotherincome0010MOtherincomeManagementwebData.ds_ds_ioIncomecdG || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지급액</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>원천세액</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>비고</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>산출             내역</Box></Grid><Grid item xs={12} md={7}><Box>[지급총액안분] 지급총액(0000000 원,100%), 필요경비(0000000 원,80%), 소득금액(0000000 원,20%)
[원천징수세액] 소득세율(000 %), 원천세액 000000 원[소득세(000000 원) + 지방소득세(000000 원)]</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>지급조서 발급이력</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmotherincome0010MOtherincomeManagementwebData.ds_ds_ioJibuGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>자료구분</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmotherincome0010MOtherincomeManagementwebData.ds_ds_ioDataGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_CUST_엑셀"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab1_btnToExcel_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioOtherIncomePayment} columns={columns_gdOtherIncome} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}><Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>출력구분</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>출력구분</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmotherincome0010MOtherincomeManagementwebData.ds_ds_inPrtGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>출력기준</Box></Grid>{ hook.isVisible_edsRange1 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>출력기준</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmotherincome0010MOtherincomeManagementwebData.ds_ds_inPrtStandard || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid>{ hook.isVisible_edsRange2 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>적용년도</Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid>{ hook.isVisible_medsRange1 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>~</Box></Grid>{ hook.isVisible_medsRange2 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>지부선택</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부선택</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmotherincome0010MOtherincomeManagementwebData.ds_ds_inJibu || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Tooltip title="BTN_출력"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab3_btnpaymentprint_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_엑셀"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab3_btnpaymentexcel_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdOtherExcel1 && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdOtherExcel2 && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={2}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>변경기간</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_CUST_조회2"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab2_btnErrorPerson_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Tooltip title="BTN_CUST_엑셀"><Button variant="outlined" size="small" color="primary" onClick={hook.tabTab1_tab2_btnToExcel_OnClick} sx={{ minWidth: 30, p: 0.5 }}><TouchApp fontSize="small" /></Button></Tooltip></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={7}><Box>소득자 조회</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oOtherbiz} columns={columns_gdOtherbiz} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>전체 사업소득자</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab1_tab2_btnOtherbizTrans_OnClick}>사업소득 ⇒ 기타소득 전환</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.tabTab1_tab2_btnOtherbizTotal_OnClick}>소득자 집계현황</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_gdOtherbizExcel && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }{ hook.isVisible_edObopmgno && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_edObkey && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_edObdate && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
</CustomTabPanel></Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmotherincome0010MOtherincomeManagementweb;

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