// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2010MCustomerFeeManagement } from './useFrmcust2010MCustomerFeeManagement';
import * as Frmcust2010MCustomerFeeManagementData from './Frmcust2010MCustomerFeeManagementData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust2010MCustomerFeeManagement = () => {
    const hook = useFrmcust2010MCustomerFeeManagement();
    const columns_gdReady = [
        { field: 'SEL', headerName: 'SEL', width: 20 },
        { field: 'CFMGGTNM', headerName: '지부', width: 70 },
        { field: 'CNO', headerName: '관리번호', width: 69 },
        { field: 'CREGCD', headerName: '지역', width: 57 },
        { field: 'CCOURSENM', headerName: '직능', width: 96 },
        { field: 'CFMEMBERNM', headerName: '고객구분', width: 58 },
        { field: 'BNM', headerName: '대상물(업체)명', width: 154 },
        { field: 'FMNM', headerName: '선임자명', width: 65 },
        { field: 'CFPROCAMOUNT', headerName: '금액', width: 80 },
        { field: 'CFREMARK', headerName: '사유(비고)', width: 233 },
    ];
    const columns_gdFee = [
        { field: 'SEL', headerName: 'SEL', width: 20 },
        { field: 'CFGYEAR', headerName: '년도', width: 93 },
        { field: 'CFCCGUBUN', headerName: '구분', width: 63 },
        { field: 'MINAPFEE', headerName: '미납', width: 90 },
    ];
    const columns_gdSunap = [
        { field: 'id', headerName: '순번', width: 30, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'SUNAPYEAR', headerName: '년월', width: 106 },
        { field: 'MEMBERGUBUNNM', headerName: '구분', width: 46 },
        { field: 'SETLMGUBUNNM', headerName: '결제', width: 44 },
        { field: 'PMRESULT', headerName: 'POS', width: 44 },
        { field: 'CFGUBUN', headerName: '결제구분', width: 76 },
        { field: 'CFGUBUNCDNM', headerName: '결제방법', width: 116 },
        { field: 'SUNAPFEE', headerName: '금액', width: 54 },
        { field: 'PROCDATE', headerName: '처리일자', width: 76 },
        { field: 'PONYDATE', headerName: '정산일자', width: 78 },
        { field: 'PVINFO', headerName: '계산서', width: 55 },
        { field: 'PROCGTNM', headerName: '처리지부', width: 65 },
        { field: 'CFREGNM', headerName: '처리자', width: 65 },
        { field: 'MGGTNM', headerName: '관리지부', width: 65 },
        { field: 'POSGTNM', headerName: 'POS지부', width: 65 },
        { field: 'PMPCORDERNO', headerName: '주문번호', width: 102 },
        { field: 'CFREMARK', headerName: '비고', width: 296 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_CancelConfirm}>입력 초기화</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnCustomerLink_OnClick}>고객 정보 관리</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_Excel}>엑셀로 저장</Button>
<Button variant="contained"  onClick={hook.btnAllReady_OnClick}>대상물(업체) 일괄 수납</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "66px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static26 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '22px' }}><Typography variant="body2">조회 정보</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static28 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '22px' }}><Typography variant="body2">고객 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '336px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnBuildingNm ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnBuildingNm_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '208px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대표직능</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '232px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>세부직능</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '136px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임자명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnManagerNm ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnManagerNm_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Box sx={{ ml: "3px", minWidth: "172px" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '172px', height: '22px', display: 'flex', alignItems: 'center', ml: '0px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>생년월일</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edManagerNo ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '108px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Box><Box sx={{ display: hook.isVisible_btnManagerNo ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnManagerNo_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '22px', height: '24px', whiteSpace: "nowrap" }}><Search fontSize="small" /></Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>고객구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '48px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>등록년월</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '148px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 88, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>회비부과년월</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbSunap ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '104px', height: '22px' }}><Typography variant="body2">결제 정보</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '114px', height: '22px', display: 'flex', alignItems: 'center', ml: '256px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edAddr1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '256px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '228px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '360px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>비고</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '12px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>겸직여부</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnOverBiz ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnOverBiz_OnClick} sx={{ width: '79px', height: '24px', whiteSpace: "nowrap" }}>겸직현황</Button></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '120px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>삭제구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_medDelDate ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '80px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '144px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>결제금액</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSunapReady ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSunapReady_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>수납결제 대기</Button></Box><Box sx={{ display: hook.isVisible_btnMunje ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnMunje_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>승계면제 저장</Button></Box><Box sx={{ display: hook.isVisible_Static12 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '104px', height: '22px' }}><Typography variant="body2">결제 정보(POS)</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnDel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnDel_OnClick} sx={{ width: '79px', height: '24px', whiteSpace: "nowrap" }}>결제삭제</Button></Box><Box sx={{ display: hook.isVisible_btnPosResultList ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPosResultList_OnClick} sx={{ width: '118px', height: '24px', whiteSpace: "nowrap" }}>결제처리결과조회</Button></Box><Box sx={{ display: hook.isVisible_btnRepay ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnRepay_OnClick} sx={{ width: '105px', height: '24px', whiteSpace: "nowrap" }}>환불결제 대기</Button></Box><Box sx={{ display: hook.isVisible_btnSunapPosInfo ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSunapPosInfo_OnClick} sx={{ width: '79px', height: '24px', whiteSpace: "nowrap" }}>상세정보</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '104px', height: '22px' }}><Typography variant="body2">수납/미납 정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbOverSunap ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '60px', height: '22px' }}><Typography variant="body2">과오납</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnOverSunapAdd ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnOverSunapAdd_OnClick} sx={{ width: '31px', height: '24px', whiteSpace: "nowrap" }}>+</Button></Box><Box sx={{ display: hook.isVisible_btnOverSunapDel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnOverSunapDel_OnClick} sx={{ width: '31px', height: '24px', whiteSpace: "nowrap" }}>-</Button></Box><Box sx={{ display: hook.isVisible_cbxMonthGubun ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '78px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2010MCustomerFeeManagementData.ds_ds_oMonthGubun || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_gdSunap ? undefined : 'none' }}><Paper sx={{ width: '612px', height: '270px', width: '100%', height: 'auto', minHeight: '270px' }}><DataGridWrapper rows={hook.ds_oSunap} columns={columns_gdSunap} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdFee ? undefined : 'none' }}><Paper sx={{ width: '360px', height: '210px', width: '100%', height: 'auto', minHeight: '210px' }}><DataGridWrapper rows={hook.ds_oFee} columns={columns_gdFee} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '95px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 30, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>기준</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2010MCustomerFeeManagementData.ds_ds_ioYear || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '141px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 45, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>마감일</Typography>
                    <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: "small", fullWidth: true, sx: { "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } } } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '116px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>미납금액</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnPrintGoji ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintGoji_OnClick} sx={{ width: '106px', height: '24px', whiteSpace: "nowrap" }}>고지서(신 양식)</Button></Box><Box sx={{ ml: "1px", minWidth: "252px" }}><Box sx={{ display: hook.isVisible_btnOldPrintGoji ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnOldPrintGoji_OnClick} sx={{ width: '106px', height: '24px', whiteSpace: "nowrap" }}>고지서(구 양식)</Button></Box><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintAllReadyGoji_OnClick} sx={{ width: '158px', height: '24px', whiteSpace: "nowrap" }}>수납대기 일괄 회비고지</Button></Box><Box sx={{ display: hook.isVisible_btnPrintGojiImage ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintGojiImage_OnClick} sx={{ width: '145px', height: '24px', whiteSpace: "nowrap" }}>회비고지서(PDF용)</Button></Box></Box><Box sx={{ display: hook.isVisible_btnShowVirtualAccount ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnShowVirtualAccount_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>가상계좌보기</Button></Box><Box sx={{ display: hook.isVisible_btnChangeProcDate ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnChangeSunapInfo_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>수납정보변경</Button></Box><Box sx={{ display: hook.isVisible_btnProcRct ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnProcRct_OnClick} sx={{ width: '118px', height: '24px', whiteSpace: "nowrap" }}>현금영수증 처리</Button></Box><Box sx={{ display: hook.isVisible_btnPrintReRct ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintReRct_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>영수증재발행</Button></Box><Box sx={{ display: hook.isVisible_btnPrintReRctPDF ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintReRctPDF_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>영수증PDF</Button></Box><Box sx={{ display: hook.isVisible_btnPosvath ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPrintEstimate_OnClick} sx={{ width: '92px', height: '24px', whiteSpace: "nowrap" }}>부가세정보</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "11px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbReady ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '20px', height: '94px' }}><Typography variant="body2">결
제
대
기</Typography></Box></Box><Box sx={{ display: hook.isVisible_lbTotalCnt ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '80px', height: '22px' }}><Typography variant="body2">전체건수</Typography></Box></Box><Box sx={{ display: hook.isVisible_gdReady ? undefined : 'none' }}><Paper sx={{ width: '792px', height: '134px', width: '100%', height: 'auto', minHeight: '134px' }}><DataGridWrapper rows={hook.ds_iReady} columns={columns_gdReady} /></Paper></Box><Box sx={{ display: hook.isVisible_btnPosDel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPosDel_OnClick} sx={{ width: '80px', height: '26px', whiteSpace: "nowrap" }}>선택 삭제</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medTotalCnt ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '60px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_Static15 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '16px', height: '22px' }}><Typography variant="body2">건</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnPos ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnPos_OnClick} sx={{ width: '80px', height: '66px', whiteSpace: "nowrap" }}>결제
(POS)</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbTotalAmount ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '80px', height: '22px' }}><Typography variant="body2">전체금액</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medTotalAmount ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '80px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust2010MCustomerFeeManagement;

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