// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
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
        { field: 'CNO_BUNHO', headerName: '고객번호', width: 81 },
        { field: 'GTTEAMNM', headerName: '지부', width: 76 },
        { field: 'BNM', headerName: '대상물', width: 192 },
        { field: 'ADDR12', headerName: '주소', width: 177 },
        { field: 'FMNM', headerName: '성명', width: 63 },
        { field: 'FSBNM_GUBUN', headerName: '대상물', width: 52 },
        { field: 'FSADDR_GUBUN', headerName: '주소비교', width: 53 },
        { field: 'FSFMNM_GUBUN', headerName: '성명비교', width: 59 },
    ];
    const columns_grdExport_9 = [
        { field: 'FSBNM', headerName: '대상물', width: 192 },
        { field: 'FSADDR', headerName: '주소', width: 177 },
        { field: 'FSFMNM', headerName: '성명', width: 63 },
        { field: 'BNM_GUBUN', headerName: '대상물', width: 52 },
        { field: 'ADDR12_GUBUN', headerName: '주소비교', width: 53 },
        { field: 'FMNM_GUBUN', headerName: '성명비교', width: 59 },
    ];
    const columns_grdExport_10 = [
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "58px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '164px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지부</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '196px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>직능</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '152px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지역</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edRegion3 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '65px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '151px', height: '22px', display: 'flex', alignItems: 'center', ml: '8px' }}>
                    <Typography variant="body2" sx={{ minWidth: 104, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>안전원자료 총건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static35 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '17px', height: '22px' }}><Typography variant="body2">건</Typography></Box></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '163px', height: '22px', display: 'flex', alignItems: 'center', ml: '82px' }}>
                    <Typography variant="body2" sx={{ minWidth: 84, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>선임일자</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '98px', height: '22px', display: 'flex', alignItems: 'center', ml: '6px' }}>
                    <Typography variant="body2" sx={{ minWidth: 17, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>~</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "15px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_tabTab1 ? undefined : 'none' }}><Box sx={{ width: '767px', height: '443px', width: "100%", height: "auto", minHeight: "443px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_tabTab1} onChange={(e, v) => setTabValue_tabTab1(v)} aria-label="tabTab1"><Tab label="통계(집계)" /><Tab label="전체" /><Tab label="3개일치" /><Tab label="2개 일치:1대상물+주소" /><Tab label="2개 일치:2대상물+성명" /><Tab label="2개 일치:3주소+성명" /><Tab label="1개 일치" /><Tab label="3개 불일치" /><Tab label="청에만 존재" /><Tab label="대상물 주소 성명 합쳐서 비교" /></Tabs></Box><CustomTabPanel value={tabValue_tabTab1} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "10px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static14 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '97px', height: '24px' }}><Typography variant="body2">조회별 각 건수</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '187px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>안전원 전체</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '186px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>3개 일치</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '186px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>1)대상물+주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '186px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>2)대상물+성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '187px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>3)주소+성명</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '186px', height: '22px', display: 'flex', alignItems: 'center', ml: '3px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>1개 일치</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '186px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>3개 불일치</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '186px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 96, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>청에만 존재</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '231px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 140, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>대상물 주소 성명 비교</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "272px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport ? undefined : 'none' }}><Paper sx={{ width: '24px', height: '132px', width: '100%', height: 'auto', minHeight: '132px' }}><DataGridWrapper rows={hook.ds_ioStatistics} columns={columns_grdExport} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport_2 ? undefined : 'none' }}><Paper sx={{ width: '765px', height: '459px', width: '100%', height: 'auto', minHeight: '459px' }}><DataGridWrapper rows={hook.ds_ioAssociationFireStation2_All} columns={columns_grdExport_2} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={2}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport_3 ? undefined : 'none' }}><Paper sx={{ width: '765px', height: '459px', width: '100%', height: 'auto', minHeight: '459px' }}><DataGridWrapper rows={hook.ds_ioAssociationFireStation2_3yes} columns={columns_grdExport_3} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={3}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport_4 ? undefined : 'none' }}><Paper sx={{ width: '765px', height: '459px', width: '100%', height: 'auto', minHeight: '459px' }}><DataGridWrapper rows={hook.ds_ioAssociationFireStation2_2yes1} columns={columns_grdExport_4} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={4}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport_5 ? undefined : 'none' }}><Paper sx={{ width: '765px', height: '459px', width: '100%', height: 'auto', minHeight: '459px' }}><DataGridWrapper rows={hook.ds_ioAssociationFireStation2_2yes2} columns={columns_grdExport_5} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={5}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport_6 ? undefined : 'none' }}><Paper sx={{ width: '765px', height: '459px', width: '100%', height: 'auto', minHeight: '459px' }}><DataGridWrapper rows={hook.ds_ioAssociationFireStation2_2yes3} columns={columns_grdExport_6} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={6}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport_7 ? undefined : 'none' }}><Paper sx={{ width: '765px', height: '459px', width: '100%', height: 'auto', minHeight: '459px' }}><DataGridWrapper rows={hook.ds_ioAssociationFireStation2_1onlyyes} columns={columns_grdExport_7} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={7}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport_8 ? undefined : 'none' }}><Paper sx={{ width: '765px', height: '459px', width: '100%', height: 'auto', minHeight: '459px' }}><DataGridWrapper rows={hook.ds_ioAssociationFireStation2_3no} columns={columns_grdExport_8} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={8}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport_9 ? undefined : 'none' }}><Paper sx={{ width: '765px', height: '459px', width: '100%', height: 'auto', minHeight: '459px' }}><DataGridWrapper rows={hook.ds_ioFireStationAssociation_second_1onlyno} columns={columns_grdExport_9} /></Paper></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_tabTab1} index={9}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdExport_10 ? undefined : 'none' }}><Paper sx={{ width: '765px', height: '459px', width: '100%', height: 'auto', minHeight: '459px' }}><DataGridWrapper rows={hook.ds_ioAssociationFireStationBnmaAddrFmnm_no} columns={columns_grdExport_10} /></Paper></Box></Stack>
</CustomTabPanel></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">교육일정 생성</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_fdImport ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fdImport</Button></Box><Box sx={{ display: hook.isVisible_fdExport ? undefined : 'none' }}><Button variant="contained" color="success" startIcon={<Description />} sx={{ width: '24px', height: '26px', whiteSpace: "nowrap" }}>fdExport</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "9px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '22px' }}><Typography variant="body2">교육대상자 리스트</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '111px', height: '22px', display: 'flex', alignItems: 'center', ml: '516px' }}>
                    <Typography variant="body2" sx={{ minWidth: 40, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건수</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static7 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '131px', height: '22px' }}><Typography variant="body2">(선임자명 출력안함)</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "28px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnMutilSort ? undefined : 'none' }}><Button variant="outlined"  onClick={hook.btnMutilSort_OnClick} size="small" sx={{ minWidth: 26, p: 0.2, width: '74px', height: '22px', whiteSpace: "nowrap" }}><Sort fontSize="small" /></Button></Box></Stack>

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