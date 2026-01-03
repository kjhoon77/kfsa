// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcti0010MBoardMain } from './useFrmcti0010MBoardMain';
import * as Frmcti0010MBoardMainData from './Frmcti0010MBoardMainData';
import { Frmcti0010SMinwonCallJubsu } from '../cti/Frmcti0010SMinwonCallJubsu';

export const Frmcti0010MBoardMain = () => {
    const hook = useFrmcti0010MBoardMain();
    const columns_gdList = [
        { field: 'DN', headerName: 'DN', width: 74 },
        { field: 'AgentID', headerName: 'AgentID', width: 87 },
        { field: 'AgentState', headerName: '로그인후상태', width: 30 },
        { field: 'AgentState', headerName: 'AgentState', width: 78 },
        { field: 'AgentStateAfter', headerName: '통화후상태', width: 30 },
        { field: 'AgentStateAfter', headerName: 'AgentStateAfter', width: 76 },
        { field: 'Queue', headerName: 'Queue', width: 65 },
        { field: 'UEIDestDn', headerName: 'UEIDestDn', width: 81 },
        { field: 'GTGUBUNCD', headerName: '본부(0),지부(1)', width: 117 },
        { field: 'GTMGNO', headerName: '지부코드', width: 72 },
        { field: 'GTDEPTNM', headerName: '지부명', width: 83 },
        { field: 'IPCALLYN', headerName: '콜센타', width: 57 },
        { field: 'IPSAVEYN', headerName: '저장권한', width: 69 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained"  onClick={hook.fnDivCtiVisible}>API</Button>
<Button variant="contained"  onClick={hook.fnDivTestVisible}>TEST</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "49px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edVersion ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '85px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_btnCallReady ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnClickBtn} sx={{ width: '68px', height: '24px' }}>수신대기</Button></Box><Box sx={{ display: hook.isVisible_cbxStop ? undefined : 'none' }}><FormControl size="small" fullWidth sx={{ width: '90px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" }, bgcolor: "#fff" }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010MBoardMainData.ds_ds_Statesubcode || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl></Box><Box sx={{ display: hook.isVisible_btnCallStop ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnClickBtn} sx={{ width: '68px', height: '24px' }}>자리비움</Button></Box><Box sx={{ display: hook.isVisible_btnCallHold ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiHoldCall} sx={{ width: '68px', height: '24px' }}>보류</Button></Box><Box sx={{ display: hook.isVisible_btnCallHoldCancel ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiRetrieveCall} sx={{ width: '68px', height: '24px' }}>보류해제</Button></Box><Box sx={{ display: hook.isVisible_btnCallTransfer ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnClickBtn} sx={{ width: '68px', height: '24px' }}>호전환</Button></Box><Box sx={{ display: hook.isVisible_btnCallInTransfer ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnClickBtn} sx={{ width: '68px', height: '24px' }}>내선전환</Button></Box><Box sx={{ display: hook.isVisible_btnCallHangup ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiClearCall} sx={{ width: '68px', height: '24px' }}>끊기</Button></Box><Box sx={{ display: hook.isVisible_btnExtension51 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnClickBtn} sx={{ width: '68px', height: '24px' }}>비속어</Button></Box><Box sx={{ display: hook.isVisible_btnExtension52 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnClickBtn} sx={{ width: '68px', height: '24px' }}>성희롱</Button></Box><Box sx={{ display: hook.isVisible_btnExtension53 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnClickBtn} sx={{ width: '68px', height: '24px' }}>상담불가</Button></Box><Box sx={{ display: hook.isVisible_Static19 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '56px', height: '26px' }}><Typography variant="body2">KEY-IN</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnExtension61 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnClickBtn} sx={{ width: '68px', height: '24px' }}>주민번호</Button></Box><Box sx={{ display: hook.isVisible_btnExtension62 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnClickBtn} sx={{ width: '68px', height: '24px' }}>전화번호</Button></Box><Box sx={{ display: hook.isVisible_btnExtension63 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnClickBtn} sx={{ width: '80px', height: '24px' }}>사업자번호</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_fileSaveFile ? undefined : 'none' }}><Box sx={{ width: '24px', height: '26px', border: '1px dashed grey' }}>Unknown: File</Box></Box><Box sx={{ display: hook.isVisible_fileDialogFile ? undefined : 'none' }}><Box sx={{ width: '24px', height: '26px', border: '1px dashed grey' }}>Unknown: FileDialog</Box></Box><Box sx={{ display: hook.isVisible_imgCallInbound ? undefined : 'none' }}><Box sx={{ width: '280px', height: '50px', border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image: imgCallInbound</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbInfomsg ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '444px', height: '18px' }}><Typography variant="body2">※ 전화수신 알림창 오류발생시 해당 버튼을 눌러 전화를 받으시면 됩니다.</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_divJubsu ? undefined : 'none' }}><Paper sx={{ p: 2, width: '100px', height: '812px', width: '100%', height: 'auto', minHeight: '812px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Frmcti0010SMinwonCallJubsu /></Stack></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_divApi ? undefined : 'none' }}><Paper sx={{ p: 2, width: '1512px', height: '794px', width: '100%', height: 'auto', minHeight: '794px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "46px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtHandle</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnOpenServer ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiOpenServer} sx={{ width: '95px', height: '30px' }}>OpenServer</Button></Box><Box sx={{ display: hook.isVisible_Button6 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.divApi_Button6_OnClick} sx={{ width: '104px', height: '29px' }}>사용자변경</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtGExHandle</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnMonitorStart ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiMonitorStart} sx={{ width: '95px', height: '30px' }}>Monitor Start</Button></Box><Box sx={{ display: hook.isVisible_Static14 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '104px', height: '21px' }}><Typography variant="body2">txtDN, txtAgentID</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtDN - 대상 DN</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '262px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtGThisDN</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>Agent의 ID</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnAgentLogin ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiAgentLogin} sx={{ width: '95px', height: '30px' }}>AgentLogin</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>Agent 상태</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010MBoardMainData.ds_ds_AgentState || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_btnSetAgentState ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiSetAgentState} sx={{ width: '111px', height: '30px' }}>SetAgentState</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnGetAgentState ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiGetAgentState} sx={{ width: '111px', height: '30px' }}>Get Agent State</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상태 부가 정보</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010MBoardMainData.ds_ds_Statesubcode || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_btnGetStateSubcode ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiGetStateSubcode} sx={{ width: '119px', height: '30px' }}>Get State Subcode</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>Agent 상태(통화후)</Typography>
                    <FormControl size="small" fullWidth sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiSelect-select": { padding: "4px 6px !important" } }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcti0010MBoardMainData.ds_ds_AgentState || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                 </Stack><Box sx={{ display: hook.isVisible_btnSetAfterCallState ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiSetAfterCallState} sx={{ width: '111px', height: '30px' }}>SetAfterCallState</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.api_Ringing} sx={{ width: '95px', height: '30px' }}>Ringing</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button1 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.api_Initiated} sx={{ width: '95px', height: '30px' }}>Initiated</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button8 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.api_Dialing} sx={{ width: '95px', height: '30px' }}>Dialing</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtGConnID</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Button2 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.api_Established} sx={{ width: '95px', height: '30px' }}>Established</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtCallDn - 수신 전화번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnAnswerCall ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiAnswerCall} sx={{ width: '95px', height: '30px' }}>Answer Call</Button></Box><Box sx={{ display: hook.isVisible_Button3 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.api_Released} sx={{ width: '95px', height: '30px' }}>Released</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtCallType - 수신 통화구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnClearCall ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiClearCall} sx={{ width: '95px', height: '30px' }}>Clear Call</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button9 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.api_PartyChanged} sx={{ width: '95px', height: '30px' }}>PartyChanged</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtDestDN - 상대방의 DN</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnMakeCall ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiMakeCall} sx={{ width: '95px', height: '30px' }}>Make Call</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button10 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.api_PartyAdded} sx={{ width: '95px', height: '30px' }}>PartyAdded</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtDestDNPre</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnHoldCall ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiHoldCall} sx={{ width: '95px', height: '30px' }}>Hold Call</Button></Box><Box sx={{ display: hook.isVisible_Button11 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.api_PartyDeleted} sx={{ width: '95px', height: '30px' }}>PartyDeleted</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtLastDn</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnRetrieveCall ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiRetrieveCall} sx={{ width: '95px', height: '30px' }}>Retrieve Call</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>(1: 즉시, 2: 3자후) </Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnTransferCall ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiSinglestepTransfer} sx={{ width: '143px', height: '30px' }}>Singlestep Transfer</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtGConnID2</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnMuteTransfer ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiMuteTransfer} sx={{ width: '95px', height: '30px' }}>Mute Transfer</Button></Box><Box sx={{ display: hook.isVisible_Button7 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiGetValue} sx={{ width: '95px', height: '30px' }}>fnApiGetValue</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtExHandle</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Button5 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiSinglestepConference} sx={{ width: '95px', height: '30px' }}>Singlestep Conference</Button></Box><Box sx={{ display: hook.isVisible_btnKeyinHP ? undefined : 'none' }}><Button variant="contained"  onClick={hook.btnKeyinHP_OnClick} sx={{ width: '26px', height: '30px' }}>KEY
IN</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtExKey</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_edKeyInValue ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '101px', height: '28px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>txtExValue</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_txtFieldValue ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '101px', height: '28px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '14px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>체크 Agent의 ID</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Button4 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiChkGetAgentState} sx={{ width: '111px', height: '30px' }}>Get Agent State</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_txtChkAgentState ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '101px', height: '28px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>Subscribe ID</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnAgentSubscribe ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiAgentSubscribe} sx={{ width: '127px', height: '30px' }}>ICAgentSubscribe</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnCloseSubscribe ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiCloseSubscribe} sx={{ width: '127px', height: '30px' }}>ICCloseSubscribe</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '263px', height: '22px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 160, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>Subscribe ID(Queue)</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ ml: "0px", minWidth: "209px" }}><Box sx={{ display: hook.isVisible_btnQueueSubscribe ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiQueueSubscribe} sx={{ width: '127px', height: '30px' }}>ICQueueSubscribe</Button></Box><Box sx={{ display: hook.isVisible_Button12 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.divApi_Button12_OnClick} sx={{ width: '104px', height: '29px' }}>Queue변경</Button></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ ml: "280px", minWidth: "205px" }}><Box sx={{ display: hook.isVisible_btnCloseQueueSubscribe ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiQueueCloseSubscribe} sx={{ width: '127px', height: '30px' }}>ICCloseSubscribe</Button></Box><Box sx={{ display: hook.isVisible_edQueue ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '101px', height: '28px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "40px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_txtResponse ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '936px', height: '656px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '928px', height: '219px', width: '100%', height: 'auto', minHeight: '219px' }}><DataGridWrapper rows={hook.gds_CtiInfo} columns={columns_gdList} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnGetAgentList ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiGetAgentList} sx={{ width: '135px', height: '30px' }}>Agent List 가져오기</Button></Box><Box sx={{ display: hook.isVisible_btnAgentReport ? undefined : 'none' }}><Button variant="contained"  onClick={hook.fnApiAgentReport} sx={{ width: '95px', height: '30px' }}>ICAgentReport</Button></Box></Stack>
</Stack></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_DivTest ? undefined : 'none' }}><Paper sx={{ p: 2, width: '352px', height: '642px', width: '100%', height: 'auto', minHeight: '642px', overflow: 'auto' }}><Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography><Stack direction="column" spacing={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnDsXml ? undefined : 'none' }}><Button variant="contained"  onClick={hook.DivTest_btnDsXml_OnClick} sx={{ width: '95px', height: '30px' }}>dsXml</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btntxtResponse ? undefined : 'none' }}><Button variant="contained"  onClick={hook.DivTest_btntxtResponse_OnClick} sx={{ width: '40px', height: '29px' }}>clear</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_txtArea ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '329px', height: '499px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
</Stack></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcti0010MBoardMain;

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