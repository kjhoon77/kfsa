// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2010MCustomerFeeManagement201005131 } from './useFrmcust2010MCustomerFeeManagement201005131';
import * as Frmcust2010MCustomerFeeManagement201005131Data from './Frmcust2010MCustomerFeeManagement201005131Data';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust2010MCustomerFeeManagement201005131 = () => {
    const hook = useFrmcust2010MCustomerFeeManagement201005131();
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
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회 정보</Box></Grid><Grid item xs={12} md={2}><Box>고객 정보</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물명</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnBuildingNm_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지역</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대표직능</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>세부직능</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>선임자명</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnManagerNo_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주민번호</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Tooltip title="BTN_SEARCH"><Button variant="outlined" size="small" color="primary" onClick={hook.btnManagerNm_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Search fontSize="small" /></Button></Tooltip></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>고객구분</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>등록년월</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회비부과년월</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>결제 정보</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={3}><Box></Box></Grid><Grid item xs={12} md={3}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>비고</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>겸직여부</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnOverBiz_OnClick}>겸직현황</Button></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>삭제구분</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>결제금액</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSunapReady_OnClick}>수납결제 대기</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnMunje_OnClick}>승계면제 저장</Button></Grid><Grid item xs={12} md={2}><Box>결제 정보(POS)</Box></Grid>{ hook.isVisible_btnDel && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>결제삭제</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnRepay_OnClick}>환불결제 대기</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSunapPosInfo_OnClick}>상세정보</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>수납/미납 정보</Box></Grid><Grid item xs={12} md={2}><Box>과오납</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnOverSunapAdd_OnClick}>+</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnOverSunapDel_OnClick}>-</Button></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oSunap} columns={columns_gdSunap} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oFee} columns={columns_gdFee} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>마감일</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>미납금액</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPrintGoji_OnClick}>조회건 회비고지</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPrintAllReadyGoji_OnClick}>수납대기 일괄 회비고지</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPosResultList_OnClick}>결제처리결과조회</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnShowVirtualAccount_OnClick}>가상계좌보기</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnChangeSunapInfo_OnClick}>수납정보변경</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnProcRct_OnClick}>현금영수증 처리</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPrintReRct_OnClick}>영수증재발행</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPrintEstimate_OnClick}>부가세정보</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>결
제
대
기</Box></Grid><Grid item xs={12} md={2}><Box>전체건수</Box></Grid>
                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_iReady} columns={columns_gdReady} />
                    </Paper>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPosDel_OnClick}>선택 삭제</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>건</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPos_OnClick}>결제
(POS)</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>전체금액</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust2010MCustomerFeeManagement201005131;

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