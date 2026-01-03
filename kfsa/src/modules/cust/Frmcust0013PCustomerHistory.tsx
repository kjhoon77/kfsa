// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust0013PCustomerHistory } from './useFrmcust0013PCustomerHistory';
import * as Frmcust0013PCustomerHistoryData from './Frmcust0013PCustomerHistoryData';

export const Frmcust0013PCustomerHistory = () => {
    const hook = useFrmcust0013PCustomerHistory();
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const columns_gdManagerList = [
        { field: 'id', headerName: '순번', width: 40, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'FMHENDGUBUN', headerName: '선임상태', width: 60 },
        { field: 'FMNM', headerName: '성명', width: 60 },
        { field: 'BIRTHDAY', headerName: '생년월일', width: 98 },
        { field: 'FMPERSONKEY', headerName: '개인식별번호', width: 94 },
        { field: 'FMHTEL', headerName: '전화번호', width: 110 },
        { field: 'FMHADDR', headerName: '주소', width: 220 },
        { field: 'FMHSTARTDATE', headerName: '선임일자', width: 90 },
        { field: 'ENDSYSDATE', headerName: '해임일자', width: 90 },
    ];
    const columns_gdChangeHistory = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'CCPROCDATE', headerName: '처리일자', width: 110 },
        { field: 'PNM', headerName: '처리자', width: 70 },
        { field: 'CCCDNM', headerName: '변경항목', width: 160 },
        { field: 'CCOLDVAL', headerName: '변경 전', width: 120 },
        { field: 'CCNEWVAL', headerName: '변경 후', width: 120 },
    ];
    const columns_gdModifyHistory = [
        { field: 'id', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'MHGUBUNNM', headerName: '구분', width: 40 },
        { field: 'MHPROCDATE', headerName: '처리일시', width: 137 },
        { field: 'PDEPTNM', headerName: '처리지부', width: 60 },
        { field: 'PPERSONNM', headerName: '처리자', width: 50 },
        { field: 'MHWORKGUBUN', headerName: '변경대상', width: 90 },
        { field: 'MHCOLUMN', headerName: '변경항목', width: 80 },
        { field: 'MHBEFOREDATA', headerName: '변경 전', width: 145 },
        { field: 'MHAFTERDATA', headerName: '변경 후', width: 145 },
        { field: 'MHPROCIP', headerName: '처리자IP', width: 95 },
    ];
    const columns_gdMemberH = [
        { field: 'id', headerName: '순번', width: 47, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1 },
        { field: 'MHREGDATE', headerName: '처리일시', width: 145 },
        { field: 'MHMEMCHK', headerName: '회원가입동의여부', width: 163 },
        { field: 'MHREGCD', headerName: '등록프로그램', width: 120 },
        { field: 'MEMNO', headerName: '고객관리번호', width: 127 },
        { field: 'MHMEMGUBUN', headerName: '직능', width: 165 },
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "14px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab1 ? undefined : 'none' }}><Box sx={{ width: '796px', height: '426px', width: "100%", height: "auto", minHeight: "426px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="  선임이력  " /><Tab label="  고객상태변경이력  " /><Tab label="  변경이력  " /><Tab label="  선임자 회원가입동의이력  " /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdManagerList ? undefined : 'none' }}><Paper sx={{ width: '796px', height: '448px', width: '100%', height: 'auto', minHeight: '448px' }}><DataGridWrapper rows={hook.ds_oManagerList} columns={columns_gdManagerList} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdChangeHistory ? undefined : 'none' }}><Paper sx={{ width: '796px', height: '448px', width: '100%', height: 'auto', minHeight: '448px' }}><DataGridWrapper rows={hook.ds_oChangeHistory} columns={columns_gdChangeHistory} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={2}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdModifyHistory ? undefined : 'none' }}><Paper sx={{ width: '796px', height: '448px', width: '100%', height: 'auto', minHeight: '448px' }}><DataGridWrapper rows={hook.ds_oModifyHistory} columns={columns_gdModifyHistory} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={3}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdMemberH ? undefined : 'none' }}><Paper sx={{ width: '796px', height: '448px', width: '100%', height: 'auto', minHeight: '448px' }}><DataGridWrapper rows={hook.ds_oMemberH} columns={columns_gdMemberH} /></Paper></Box></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust0013PCustomerHistory;

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