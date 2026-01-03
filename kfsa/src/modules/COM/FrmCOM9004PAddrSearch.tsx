// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmCOM9004PAddrSearch } from './useFrmCOM9004PAddrSearch';
import * as FrmCOM9004PAddrSearchData from './FrmCOM9004PAddrSearchData';

export const FrmCOM9004PAddrSearch = () => {
    const hook = useFrmCOM9004PAddrSearch();
    const [chk_chkRoadInput, setChk_chkRoadInput] = useState('0');
    const columns_grdRoadAddr = [
        { field: 'ZIPNO', headerName: '우편번호', width: 80 },
        { field: 'JIBUNADDR', headerName: '주소', width: 625 },
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
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "35px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '80px', height: '64px' }}><Typography variant="body2"></Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static14 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '152px', height: '16px' }}><Typography variant="body2">읍/면/동/가 + 지번 입력            </Typography></Box></Box><Box sx={{ display: hook.isVisible_Static17 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '343px', height: '17px' }}><Typography variant="body2"> * 영등포동8가 87-4 </Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static15 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '199px', height: '17px' }}><Typography variant="body2">건물명 입력                           </Typography></Box></Box><Box sx={{ display: hook.isVisible_Static18 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '343px', height: '17px' }}><Typography variant="body2"> * 한국소방안전원 / 국회의사당</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "11px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '600px', height: '25px', display: 'flex', alignItems: 'center', ml: '15px' }}>
                    <Typography variant="body2" sx={{ minWidth: 82, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnSearch ? undefined : 'none' }}><Button variant="contained"  startIcon={<Search />} onClick={hook.lfn_Search} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>조회</Button></Box><Box sx={{ display: hook.isVisible_btnSelect ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSelect_OnClick} sx={{ width: '85px', height: '24px', whiteSpace: "nowrap" }}>선택</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static11 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '784px', height: '20px' }}><Typography variant="body2">※ 도로명주소검색 팝업창이 변경됨에 따라,  재 검색이 필요할 수 있습니다.   ex) 대방동 44-0의 경우 → 대방동 44로 재검색</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "9px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbAppointInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '80px', height: '22px' }}><Typography variant="body2">주소목록</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_grdRoadAddr ? undefined : 'none' }}><Paper sx={{ width: '770px', height: '275px', width: '100%', height: 'auto', minHeight: '275px' }}><DataGridWrapper rows={hook.ds_oJuso} columns={columns_grdRoadAddr} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static8 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '80px', height: '22px' }}><Typography variant="body2">상세정보</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '488px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소전체</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJuso?.roadAddr || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '275px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>읍면동명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJuso?.emdNm || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '488px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>영문주소</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJuso?.ENGADDR || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '275px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>도로명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJuso?.rn || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '275px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상세건물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJuso?.detBdNmList || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '275px', height: '22px', display: 'flex', alignItems: 'center', ml: '218px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>법정리명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJuso?.liNm || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '275px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJuso?.bdNm || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '275px', height: '22px', display: 'flex', alignItems: 'center', ml: '218px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>시도명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJuso?.SINM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "4px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '275px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>지하여부</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJuso?.UDRTYN || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '275px', height: '22px', display: 'flex', alignItems: 'center', ml: '218px' }}>
                    <Typography variant="body2" sx={{ minWidth: 100, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>시군구명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oJuso?.sggNm || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "13px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '80px', height: '22px' }}><Typography variant="body2">적용내역</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "3px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '103px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 61, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>우편번호</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_edRoadAddrPart1 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '208px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edRoadAddrPart2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '376px', height: '22px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><FormControlLabel control={<Checkbox checked={chk_chkRoadInput === '1'} onChange={(e) => setChk_chkRoadInput(e.target.checked ? '1' : '0')} />} label="직접입력" /></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '425px', height: '22px', display: 'flex', alignItems: 'center', ml: '16px' }}>
                    <Typography variant="body2" sx={{ minWidth: 103, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>나머지 주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static19 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '130px', height: '22px' }}><Typography variant="body2">[검색된 주소가 없는 경우]</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbRoadDetailAddr2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '170px', height: '19px' }}><Typography variant="body2">[동/호수, 층 등 입력]</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnSave ? undefined : 'none' }}><Button variant="contained"   onClick={hook.btnSave_OnClick} sx={{ width: '122px', height: '24px', whiteSpace: "nowrap" }}>적용주소 반영(F4)</Button></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmCOM9004PAddrSearch;

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