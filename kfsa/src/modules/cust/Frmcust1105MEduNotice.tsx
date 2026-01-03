// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust1105MEduNotice } from './useFrmcust1105MEduNotice';
import * as Frmcust1105MEduNoticeData from './Frmcust1105MEduNoticeData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust1105MEduNotice = () => {
    const hook = useFrmcust1105MEduNotice();
    const columns_gdConnections = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CD', headerName: '교육일정조회', width: 94 },
        { field: 'DATE', headerName: '교육일자', width: 85 },
        { field: 'TIME', headerName: '교육시간', width: 98 },
        { field: 'EDUNO', headerName: '좌석수', width: 58 },
        { field: 'TARGETNO', headerName: '예정인원수', width: 76 },
    ];
    const columns_gdCommonCode = [
        { field: 'SELA', headerName: 'SELA', width: 44 },
        { field: 'sel', headerName: '순번', width: 44 },
        { field: 'edCustYear_A', headerName: '년도', width: 44 },
        { field: 'ECUSTFMNM', headerName: '성명', width: 59 },
        { field: 'EFMHHPTEL', headerName: '핸드폰 번호', width: 118 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 99 },
        { field: 'EJBFULLNNM', headerName: '지부', width: 102 },
        { field: 'ECUSTNO33', headerName: '고객번호', width: 125 },
        { field: 'CREGCD', headerName: '지역', width: 79 },
        { field: 'ECUSTNM4', headerName: '직능', width: 115 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 76 },
        { field: 'EDUGUBUN', headerName: '교육구분', width: 81 },
        { field: 'EDUPERSON', headerName: '교육대상', width: 81 },
        { field: 'EDUDATE', headerName: '교육일자', width: 76 },
        { field: 'ECUSTBNM4', headerName: '업체명', width: 188 },
    ];
    const columns_Grid0 = [
        { field: 'SELA', headerName: 'SELA', width: 44 },
        { field: 'sel', headerName: '순번', width: 44 },
        { field: 'edCustYear_A', headerName: '년도', width: 44 },
        { field: 'ECUSTFMNM', headerName: '성명', width: 59 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 95 },
        { field: 'EJBFULLNNM', headerName: '지부', width: 102 },
        { field: 'ECUSTNO33', headerName: '고객번호', width: 125 },
        { field: 'CREGCD', headerName: '지역', width: 79 },
        { field: 'ECUSTNM4', headerName: '직능', width: 115 },
        { field: 'CSTATUSGUBUN', headerName: '회원구분', width: 76 },
        { field: 'EDUGUBUN', headerName: '교육구분', width: 81 },
        { field: 'EDUPERSON', headerName: '교육대상', width: 81 },
        { field: 'EDUDATE', headerName: '교육일자', width: 76 },
        { field: 'ECUSTBNM4', headerName: '업체명', width: 188 },
    ];
    const columns_Grid1 = [
        { field: 'SEL', headerName: 'SEL', width: 80 },
    ];
    const columns_grdExport = [
        { field: 'EJBFULLNNM', headerName: '지부', width: 88 },
        { field: 'EJBZIPCD', headerName: '발송자우편번호', width: 133 },
        { field: 'EJBJADDR', headerName: '발송자주소', width: 394 },
        { field: 'EJBTEL', headerName: '발송자전화번호', width: 123 },
        { field: 'EJGFAX', headerName: '발송자팩스번호', width: 136 },
        { field: 'EJRTNPLCE', headerName: '반송처', width: 358 },
        { field: 'EACCNT1', headerName: '송금계좌1', width: 392 },
        { field: 'EACCNT2', headerName: '송금계좌2', width: 388 },
        { field: 'EACCNT3', headerName: '송금계좌3', width: 367 },
        { field: 'EACCNT4', headerName: '송금계좌4', width: 316 },
        { field: 'ECUSTNO1', headerName: '관리번호', width: 246 },
        { field: 'ECPOSTBARCODE', headerName: 'CPOST바코드', width: 519 },
        { field: 'ECUSTADDR1', headerName: '받는주소1', width: 188 },
        { field: 'ECUSTADDR2', headerName: '받는주소2', width: 188 },
        { field: 'ECUSTFMNM', headerName: '성명', width: 192 },
        { field: 'ECUSTBNM', headerName: '받는사람', width: 309 },
        { field: 'ECUSTZIPNO', headerName: '우편번호', width: 131 },
        { field: 'ENOTICE1', headerName: '안내1', width: 1235 },
        { field: 'EPRTYY', headerName: '발행년', width: 111 },
        { field: 'EPRTMM', headerName: '발행월', width: 81 },
        { field: 'EPRTDD', headerName: '발행일', width: 81 },
        { field: 'ECHIEF1', headerName: '지부장1', width: 131 },
        { field: 'ECUSTNM2', headerName: '업체명', width: 197 },
        { field: 'ECUSTNO2', headerName: '관리번호', width: 147 },
        { field: 'EPNM', headerName: '교육장소', width: 447 },
        { field: 'ESNOTICE', headerName: '안내사항', width: 873 },
        { field: 'ENOTICE2', headerName: '안내2', width: 1010 },
        { field: 'ECUSTBARCODE', headerName: '고객바코드', width: 221 },
        { field: 'ECHIEF2', headerName: '지부장2', width: 258 },
        { field: 'ECUSTBNM2', headerName: '업체명', width: 300 },
        { field: 'ECOURSECD', headerName: '직능1', width: 359 },
        { field: 'ECUSTNO3', headerName: '관리번호', width: 188 },
        { field: 'ECOMTEL', headerName: '직장전화번호', width: 158 },
        { field: 'ECOMADDR', headerName: '직장주소', width: 297 },
        { field: 'EFMELECTDATE', headerName: '선임신고일', width: 94 },
        { field: 'EFEETITLE', headerName: '납부회비/교육수수료', width: 131 },
        { field: 'ENOTICE3', headerName: '안내3', width: 1060 },
        { field: 'ECUSTBNM3', headerName: '업체명', width: 194 },
        { field: 'ECUSTNO33', headerName: '관리번호', width: 160 },
        { field: 'ECUSTNM', headerName: '직능2', width: 204 },
        { field: 'EFEETITLE2', headerName: '회비/교육수수료', width: 131 },
        { field: 'EFEEYEAR1', headerName: '년도1', width: 188 },
        { field: 'EFEE1', headerName: '회비1', width: 76 },
        { field: 'EFEEYEAR2', headerName: '년도2', width: 81 },
        { field: 'EFEE2', headerName: '회비2', width: 81 },
        { field: 'EFEEYEAR3', headerName: '년도3', width: 131 },
        { field: 'EFEE3', headerName: '회비3', width: 188 },
        { field: 'EFEEYEAR4', headerName: '년도4', width: 76 },
        { field: 'EFEE4', headerName: '회비4', width: 81 },
        { field: 'CTOTALFEE1', headerName: '회비합계1', width: 81 },
        { field: 'ECUSTBNM4', headerName: '업체명', width: 259 },
        { field: 'ECUSTNO4', headerName: '관리번호', width: 188 },
        { field: 'ECUSTNM4', headerName: '직능3', width: 76 },
        { field: 'ENOTICE4', headerName: '안내4', width: 1224 },
        { field: 'EEDUHOUR', headerName: '교육시간', width: 131 },
        { field: 'ECHIEF4', headerName: '지부장3', width: 201 },
        { field: 'CTOTALFEE2', headerName: '총금액', width: 131 },
        { field: 'ECYBEREDU', headerName: '사이버교육동의', width: 398 },
        { field: 'EACCOUNT1', headerName: '국민가상계좌', width: 120 },
        { field: 'EACCOUNT2', headerName: '신한가상계좌', width: 120 },
        { field: 'EACCOUNT3', headerName: '우리가상계좌', width: 120 },
        { field: 'ESUNAPNOTICE', headerName: '사전납부안내', width: 574 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Print />} onClick={hook.lfn_EduPrint}>교육통지서 출력</Button>
<Button variant="contained"  onClick={hook.lfn_EduPrintSave}>교육자료생성</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '140px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>고객구분</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '208px', height: '22px', display: 'flex', alignItems: 'center', ml: '23px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육대상</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '140px', height: '22px', display: 'flex', alignItems: 'center', ml: '4px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>추출 대상자수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static27 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '17px', height: '22px' }}><Typography variant="body2">명</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '140px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>교육 대상자수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static3 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '17px', height: '22px' }}><Typography variant="body2">명</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '112px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>예정교육일수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static35 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '17px', height: '22px' }}><Typography variant="body2">일</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "6px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">교육일정 생성</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdConnections ? undefined : 'none' }}><Paper sx={{ width: '576px', height: '154px', width: '100%', height: 'auto', minHeight: '154px' }}><DataGridWrapper rows={hook.ds_ioEduCreate} columns={columns_gdConnections} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid0 ? undefined : 'none' }}><Paper sx={{ width: '416px', height: '218px', width: '100%', height: 'auto', minHeight: '218px' }}><DataGridWrapper rows={hook.ds_ioEduDay1} columns={columns_Grid0} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Button1 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.Button1_OnClick} sx={{ width: '8px', height: '7px' }}>Button1</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">교육대상자 리스트</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static7 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '131px', height: '22px' }}><Typography variant="body2">(선임자명 출력안함)</Typography></Box></Box><Box sx={{ display: hook.isVisible_Button0 ? undefined : 'none' }}><Button variant="contained"  onClick={hook.lfn_EduCustSMSSend} sx={{ width: '105px', height: '24px' }}>문자메시지발송</Button></Box><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined" onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px' }}><Sort fontSize="small" /></Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '111px', height: '22px', display: 'flex', alignItems: 'center', ml: '11px' }}>
                    <Typography variant="body2" sx={{ minWidth: 40, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdCommonCode ? undefined : 'none' }}><Paper sx={{ width: '576px', height: '282px', width: '100%', height: 'auto', minHeight: '282px' }}><DataGridWrapper rows={hook.ds_ioEduDay2} columns={columns_gdCommonCode} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Grid1 ? undefined : 'none' }}><Paper sx={{ width: '223px', height: '240px', width: '100%', height: 'auto', minHeight: '240px' }}><DataGridWrapper rows={hook.ds_ioEduDay2} columns={columns_Grid1} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport ? undefined : 'none' }}><Paper sx={{ width: '424px', height: '98px', width: '100%', height: 'auto', minHeight: '98px' }}><DataGridWrapper rows={hook.ds_ioEduDay4} columns={columns_grdExport} /></Paper></Box><Box sx={{ display: hook.isVisible_fdImport ? undefined : 'none' }}><Box sx={{ width: '24px', height: '26px', border: '1px dashed grey' }}>Unknown: FileDialog</Box></Box><Box sx={{ display: hook.isVisible_fdExport ? undefined : 'none' }}><Box sx={{ width: '24px', height: '26px', border: '1px dashed grey' }}>Unknown: FileDialog</Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust1105MEduNotice;

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