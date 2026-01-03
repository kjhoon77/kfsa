// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust2040MCustomerFeeGoji } from './useFrmcust2040MCustomerFeeGoji';
import * as Frmcust2040MCustomerFeeGojiData from './Frmcust2040MCustomerFeeGojiData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust2040MCustomerFeeGoji = () => {
    const hook = useFrmcust2040MCustomerFeeGoji();
    const columns_grdExport = [
        { field: 'FJBZIPNO', headerName: '우편번호', width: 80 },
        { field: 'FJBADDR', headerName: '지부주소', width: 360 },
        { field: 'FJBFULLNM', headerName: '지부명', width: 158 },
        { field: 'FJBTEL', headerName: '지부전화번호', width: 209 },
        { field: 'FJBFAX', headerName: '지부팩스번호', width: 189 },
        { field: 'FICNO', headerName: '관리번호', width: 80 },
        { field: 'FBARCODE', headerName: '바코드', width: 243 },
        { field: 'FCUSTADDR1', headerName: '받는이주소1', width: 450 },
        { field: 'FCUSTADDR2', headerName: '받는이주소2', width: 329 },
        { field: 'FCUSTNM', headerName: '받는이성명', width: 377 },
        { field: 'FETC', headerName: '관계인', width: 508 },
        { field: 'FCUSTZIPNO', headerName: '우편번호', width: 80 },
        { field: 'FCMGNO', headerName: '바코드번호', width: 80 },
        { field: 'FJBJIRO', headerName: '지로번호', width: 80 },
        { field: 'FTOTAL', headerName: '금액', width: 80 },
        { field: 'FGROUPNM', headerName: '구분직능', width: 176 },
        { field: 'FBNM', headerName: '업체명', width: 365 },
        { field: 'FICNO', headerName: '관리번호', width: 80 },
        { field: 'FGIJUN1YY', headerName: '년도1', width: 80 },
        { field: 'FGIJUN1', headerName: '년도1고지금액', width: 139 },
        { field: 'FGIJUN2YY', headerName: '년도2', width: 80 },
        { field: 'FGIJUN2', headerName: '년도2고지금액', width: 156 },
        { field: 'FGIJUN3YY', headerName: '년도3', width: 80 },
        { field: 'FGIJUN3', headerName: '년도3고지금액', width: 132 },
        { field: 'FGIJUN4YY', headerName: '년도4', width: 80 },
        { field: 'FGIJUN4', headerName: '년도4고지금액', width: 143 },
        { field: 'FTOTAL', headerName: '합계금액', width: 80 },
        { field: 'FJBFULLNM', headerName: '지부명', width: 114 },
        { field: 'FJBNMTEL', headerName: '지부명+전화번호', width: 363 },
        { field: 'FJBJIRO', headerName: '지로번호', width: 80 },
        { field: 'FTOTAL', headerName: '총 고지금액', width: 80 },
        { field: 'FGROUPNM', headerName: '구분직능', width: 103 },
        { field: 'FBNM', headerName: '업체명', width: 331 },
        { field: 'FICNO', headerName: '관리번호', width: 103 },
        { field: 'FTOTAL', headerName: '납부총액', width: 103 },
        { field: 'FJBFULLNM', headerName: '지부명', width: 103 },
        { field: 'FJBJIROARVNO', headerName: '지로승인번호', width: 103 },
        { field: 'FJBJIRO', headerName: '지로번호', width: 80 },
        { field: 'FTOTAL', headerName: '총 고지금액', width: 80 },
        { field: 'FJIRONOINFO1', headerName: '지로코드1', width: 268 },
        { field: 'FJIRONOINFO2', headerName: '지로코드2', width: 295 },
        { field: 'FJIRONOINFO3', headerName: '지로코드3', width: 289 },
        { field: 'FJIRONOINFO4', headerName: '지로코드4', width: 226 },
        { field: 'FGROUPNM', headerName: '구분직능', width: 150 },
        { field: 'FICNO', headerName: '관리번호', width: 80 },
        { field: 'FBNM', headerName: '업체명', width: 449 },
        { field: 'FTOTAL', headerName: '납부총액원표시', width: 108 },
        { field: 'FJBFULLNM', headerName: '지부명', width: 146 },
        { field: 'FVIRTUALACCOUNT1', headerName: '국민은행 가상계좌', width: 146 },
        { field: 'FVIRTUALACCOUNT2', headerName: '신한은행 가상계좌', width: 146 },
        { field: 'FVIRTUALACCOUNT3', headerName: '우리은행 가상계좌', width: 146 },
        { field: 'FVIRTUALACCOUNT4', headerName: '농협은행 가상계좌', width: 146 },
        { field: 'FOWNERNM', headerName: '예금주', width: 146 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfn_localExcel}>엑셀로 저장</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>조회 조건</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>년도</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioYear || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_oJibu || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지역</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioChoiceYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <FormControl size="small" sx={{ width: 150 }}><Select  displayEmpty><MenuItem value=""><em>선택</em></MenuItem>{ (Frmcust2040MCustomerFeeGojiData.ds_ds_oRegion || []).map(opt => <MenuItem key={opt.CD} value={opt.CD}>{opt.DATA}</MenuItem>) }</Select></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>회원구분</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioCourseYn || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>납부범위</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관리번호</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioChoiceYn_Num || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>동일 대상물명 발행여부</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioApply || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={3}><Box>비회원 회비부과 상하반기 선택</Box></Grid>{ hook.isVisible_Div0 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>Div0</Typography>
                        <Grid container spacing={2}>
                            <Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Button variant="contained" onClick={hook.Div0_Button4Yes_OnClick}>확인</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.Div0_Button4_OnClick}>취소</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>

                        </Grid>
                    </Paper>
                </Grid>
                ) }<Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>탈퇴신청한 비회원 회비고지 여부</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>관리제외 대상 회비고지 여부</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>공공기관 기관장 선임자료 회비고지 여부</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>출력 조건</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부주소, 지로번호, 지부명 출력여부</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>통지서 출력 범위조건</Typography>
                        <FormControl component="fieldset"><RadioGroup row >{ (Frmcust2040MCustomerFeeGojiData.ds_ds_ioMemberGubun_1_0 || []).map(opt => <FormControlLabel key={opt.CD} value={opt.CD} control={<Radio />} label={opt.DATA} />) }</RadioGroup></FormControl>
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>납부일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>통지서 여백조정</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상단여백</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>mm</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>출력갯수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>왼쪽여백</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>mm</Box></Grid><Grid item xs={12} md={2}><Box>상단, 왼쪽 여백 50은 기본값입니다.</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>정렬순서</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={5}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>발행일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
{ hook.isVisible_grdExport && (
                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
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
export default Frmcust2040MCustomerFeeGoji;

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