// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmcust4051PFiremanagerDataCheck } from './useFrmcust4051PFiremanagerDataCheck';
import * as Frmcust4051PFiremanagerDataCheckData from './Frmcust4051PFiremanagerDataCheckData';
import { FrmCOM0100SWorkFormTitle } from '../COM/FrmCOM0100SWorkFormTitle';

export const Frmcust4051PFiremanagerDataCheck = () => {
    const hook = useFrmcust4051PFiremanagerDataCheck();
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const columns_grdExport = [
        { field: 'colNum1', headerName: '전체 건수', width: 76 },
        { field: 'BNM', headerName: '2개 일치 1 대상물 + 주소 건수', width: 198 },
        { field: 'ADDR12', headerName: '2개 일치:2대상물+성명', width: 155 },
        { field: 'FMNM', headerName: '2개일치:3주소+성명', width: 129 },
        { field: 'FSBNM_GUBUN', headerName: '1개 일치', width: 63 },
        { field: 'FSADDR_GUBUN', headerName: '3개 일치', width: 64 },
        { field: 'FSFMNM_GUBUN', headerName: '청에만 존재', width: 83 },
    ];
    const columns_grdExport_1 = [
        { field: 'CNO_BUNHO', headerName: '고객번호', width: 81 },
        { field: 'GTTEAMNM', headerName: '지부', width: 76 },
        { field: 'BNM', headerName: '대상물', width: 192 },
        { field: 'ADDR12', headerName: '주소', width: 177 },
        { field: 'FMNM', headerName: '성명', width: 63 },
        { field: 'FSBNM_GUBUN', headerName: '대상물', width: 52 },
        { field: 'FSADDR_GUBUN', headerName: '주소비교', width: 53 },
        { field: 'FSFMNM_GUBUN', headerName: '성명비교', width: 59 },
    ];
    const columns_grdExport_2 = [
        { field: 'CNO_BUNHO', headerName: '고객번호', width: 81 },
        { field: 'GTTEAMNM', headerName: '지부', width: 76 },
        { field: 'BNM', headerName: '대상물', width: 192 },
        { field: 'ADDR12', headerName: '주소', width: 177 },
        { field: 'FMNM', headerName: '성명', width: 63 },
        { field: 'FSBNM_GUBUN', headerName: '대상물', width: 52 },
        { field: 'FSADDR_GUBUN', headerName: '주소비교', width: 53 },
        { field: 'FSFMNM_GUBUN', headerName: '성명비교', width: 59 },
    ];
    const columns_grdExport_3 = [
        { field: 'CNO_BUNHO', headerName: '고객번호', width: 81 },
        { field: 'GTTEAMNM', headerName: '지부', width: 76 },
        { field: 'BNM', headerName: '대상물', width: 192 },
        { field: 'ADDR12', headerName: '주소', width: 177 },
        { field: 'FMNM', headerName: '성명', width: 63 },
        { field: 'FSBNM_GUBUN', headerName: '대상물', width: 52 },
        { field: 'FSADDR_GUBUN', headerName: '주소비교', width: 53 },
        { field: 'FSFMNM_GUBUN', headerName: '성명비교', width: 59 },
    ];
    const columns_grdExport_4 = [
        { field: 'CNO_BUNHO', headerName: '고객번호', width: 81 },
        { field: 'GTTEAMNM', headerName: '지부', width: 76 },
        { field: 'BNM', headerName: '대상물', width: 192 },
        { field: 'ADDR12', headerName: '주소', width: 177 },
        { field: 'FMNM', headerName: '성명', width: 63 },
        { field: 'FSBNM_GUBUN', headerName: '대상물', width: 52 },
        { field: 'FSADDR_GUBUN', headerName: '주소비교', width: 53 },
        { field: 'FSFMNM_GUBUN', headerName: '성명비교', width: 59 },
    ];
    const columns_grdExport_5 = [
        { field: 'CNO_BUNHO', headerName: '고객번호', width: 81 },
        { field: 'GTTEAMNM', headerName: '지부', width: 76 },
        { field: 'BNM', headerName: '대상물', width: 192 },
        { field: 'ADDR12', headerName: '주소', width: 177 },
        { field: 'FMNM', headerName: '성명', width: 63 },
        { field: 'FSBNM_GUBUN', headerName: '대상물', width: 52 },
        { field: 'FSADDR_GUBUN', headerName: '주소비교', width: 53 },
        { field: 'FSFMNM_GUBUN', headerName: '성명비교', width: 59 },
    ];
    const columns_grdExport_6 = [
        { field: 'CNO_BUNHO', headerName: '고객번호', width: 81 },
        { field: 'GTTEAMNM', headerName: '지부', width: 76 },
        { field: 'BNM', headerName: '대상물', width: 192 },
        { field: 'ADDR12', headerName: '주소', width: 177 },
        { field: 'FMNM', headerName: '성명', width: 63 },
        { field: 'FSBNM_GUBUN', headerName: '대상물', width: 52 },
        { field: 'FSADDR_GUBUN', headerName: '주소비교', width: 53 },
        { field: 'FSFMNM_GUBUN', headerName: '성명비교', width: 59 },
    ];
    const columns_grdExport_7 = [
        { field: 'CNO_BUNHO', headerName: '고객번호', width: 81 },
        { field: 'GTTEAMNM', headerName: '지부', width: 76 },
        { field: 'BNM', headerName: '대상물', width: 192 },
        { field: 'ADDR12', headerName: '주소', width: 177 },
        { field: 'FMNM', headerName: '성명', width: 63 },
        { field: 'FSBNM_GUBUN', headerName: '대상물', width: 52 },
        { field: 'FSADDR_GUBUN', headerName: '주소비교', width: 53 },
        { field: 'FSFMNM_GUBUN', headerName: '성명비교', width: 59 },
    ];
    const columns_grdExport_8 = [
        { field: 'FSBNM', headerName: '대상물', width: 192 },
        { field: 'FSADDR', headerName: '주소', width: 177 },
        { field: 'FSFMNM', headerName: '성명', width: 63 },
        { field: 'BNM_GUBUN', headerName: '대상물', width: 52 },
        { field: 'ADDR12_GUBUN', headerName: '주소비교', width: 53 },
        { field: 'FMNM_GUBUN', headerName: '성명비교', width: 59 },
    ];
    const columns_grdExport_9 = [
        { field: 'CNO_BUNHO', headerName: '고객번호', width: 81 },
        { field: 'GTTEAMNM', headerName: '지부', width: 76 },
        { field: 'BNM', headerName: '대상물', width: 192 },
        { field: 'ADDR12', headerName: '주소', width: 177 },
        { field: 'FMNM', headerName: '성명', width: 63 },
        { field: 'FSBNM_GUBUN', headerName: '대상물 주소 성명 비교', width: 161 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Save />} onClick={hook.lfn_ViewExcel}>엑셀보기</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>
<Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained" startIcon={<Save />} onClick={hook.lfnAllviewExcel}>일괄엑셀보기</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지부</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>직능</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>지역</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>안전원자료 총건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>건</Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>선임일자</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="통계(집계)" /><Tab label="전체" /><Tab label="3개일치" /><Tab label="2개 일치:1대상물+주소" /><Tab label="2개 일치:2대상물+성명" /><Tab label="2개 일치:3주소+성명" /><Tab label="1개 일치" /><Tab label="3개 불일치" /><Tab label="청에만 존재" /><Tab label="대상물 주소 성명 합쳐서 비교" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>3)주소+성명</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>1개 일치</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>3개 불일치</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>청에만 존재</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>대상물 주소 성명 비교</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioAssociationFireStation2_All} columns={columns_grdExport_1} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={2}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioAssociationFireStation2_3yes} columns={columns_grdExport_2} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={3}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioAssociationFireStation2_2yes1} columns={columns_grdExport_3} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={4}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioAssociationFireStation2_2yes2} columns={columns_grdExport_4} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={5}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioAssociationFireStation2_2yes3} columns={columns_grdExport_5} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={6}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioAssociationFireStation2_1onlyyes} columns={columns_grdExport_6} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={7}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioAssociationFireStation2_3no} columns={columns_grdExport_7} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={8}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioFireStationAssociation_second_1onlyno} columns={columns_grdExport_8} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={9}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_ioAssociationFireStationBnmaAddrFmnm_no} columns={columns_grdExport_9} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel></Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>교육일정 생성</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>교육대상자 리스트</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>건수</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>{ hook.isVisible_Static7 && (
                <Grid item xs={12} md={2}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>(선임자명 출력안함)</Typography>
                        <Grid container spacing={2}>
                            
                        </Grid>
                    </Paper>
                </Grid>
                ) }</Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Tooltip title="BTN_MULTI_SORT"><Button variant="outlined" size="small" color="primary" onClick={hook.btnMutilSort_OnClick} sx={{ minWidth: 30, p: 0.5 }}><Sort fontSize="small" /></Button></Tooltip></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default Frmcust4051PFiremanagerDataCheck;

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