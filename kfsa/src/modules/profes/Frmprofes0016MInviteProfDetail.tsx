// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import MultiDataGridWrapper from '../../components/MultiDataGridWrapper';
import DoubleClickDatePicker from '../../components/DoubleClickDatePicker';
import PageContainer from '../../components/PageContainer';
import { useFrmprofes0016MInviteProfDetail } from './useFrmprofes0016MInviteProfDetail';
import * as Frmprofes0016MInviteProfDetailData from './Frmprofes0016MInviteProfDetailData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmprofes0016MInviteProfDetail = () => {
    const hook = useFrmprofes0016MInviteProfDetail();
    const columns_gdList = [
        { field: 'id_seq', headerName: '순번', width: 35, renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1, sortable: false },
        { field: 'NAME', headerName: '교수', width: 50 },
        { field: 'SBIRTHDAY', headerName: '생년월일', width: 66 },
        { field: 'SUMCNT', headerName: '합계', width: 75 },
        { field: 'CNT120', headerName: '실무 소방안전관리자', width: 75 },
        { field: 'CNT121', headerName: '소방안전관리보조자', width: 75 },
        { field: 'CNT124', headerName: '', width: 75 },
        { field: 'CNT126', headerName: '소방기술자', width: 75 },
        { field: 'CNT128', headerName: '', width: 75 },
        { field: 'CNT129', headerName: '', width: 75 },
        { field: 'CNT220', headerName: '강습 공공기관', width: 75 },
        { field: 'CNT210', headerName: '특급소관', width: 75 },
        { field: 'CNT221', headerName: '1급소관', width: 75 },
        { field: 'CNT222N', headerName: '', width: 75 },
        { field: 'CNT222Y', headerName: '', width: 75 },
        { field: 'CNT223', headerName: '3급소관', width: 75 },
        { field: 'CNT224', headerName: '', width: 75 },
        { field: 'CNT228', headerName: '', width: 75 },
        { field: 'CNT229', headerName: '', width: 75 },
        { field: 'CNT227', headerName: '', width: 75 },
        { field: 'CNT253', headerName: '', width: 75 },
        { field: 'CNT254', headerName: '', width: 75 },
        { field: 'CNT250', headerName: '전문교육', width: 75 },
        { field: 'CNT251', headerName: '', width: 75 },
        { field: 'CNT252', headerName: '', width: 75 },
        { field: 'CNT255', headerName: '', width: 75 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">초빙강사 교육현황(상세)</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.btnToExcel}>엑셀로 저장</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Search />} onClick={hook.lfn_Search}>조회</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_Print}>출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "66px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdList ? undefined : 'none' }}><Paper sx={{ width: '785px', height: '562px', width: '100%', height: 'auto', minHeight: '562px' }}><MultiDataGridWrapper rows={hook.ds_ProfesList} columns={columns_gdList} rowHeight={20} headerHeight={40} hideFooter={true} /></Paper></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmprofes0016MInviteProfDetail;

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