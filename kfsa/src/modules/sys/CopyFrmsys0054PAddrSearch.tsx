// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useCopyFrmsys0054PAddrSearch } from './useCopyFrmsys0054PAddrSearch';
import * as CopyFrmsys0054PAddrSearchData from './CopyFrmsys0054PAddrSearchData';

export const CopyFrmsys0054PAddrSearch = () => {
    const hook = useCopyFrmsys0054PAddrSearch();
    const [tabValue_TabAddr, setTabValue_TabAddr] = useState(0);
    const columns_gdPost = [
        { field: 'PPOSTCD', headerName: '우편번호', width: 97 },
        { field: 'PFULLADDR', headerName: '지번주소', width: 555 },
    ];
    const columns_gdRoad1 = [
        { field: 'RMZIPCD', headerName: '우편번호', width: 60 },
        { field: 'RMDONGRI', headerName: '읍면동/리 (법정동)', width: 143 },
        { field: 'RMROADNM', headerName: '도로명', width: 112 },
        { field: 'RMBUILDNO', headerName: '건물번호', width: 80 },
        { field: 'RMBUILDNM', headerName: '건물명', width: 176 },
        { field: 'RMBUNJI', headerName: '번지(지번주소)', width: 103 },
        { field: 'RMLARGEDELIVERY', headerName: '다량배달처', width: 85 },
    ];
    const columns_gdRoad2 = [
        { field: 'RMZIPCD', headerName: '우편번호', width: 60 },
        { field: 'RMSIDOKUDONG', headerName: '시도 / 시군구 / 읍면동', width: 196 },
        { field: 'RMROADNM', headerName: '도로명', width: 102 },
        { field: 'RMBUILDNO', headerName: '건물번호', width: 74 },
        { field: 'RMBUILDNM', headerName: '건물명', width: 169 },
        { field: 'RMBUNJI', headerName: '번지(지번주소)', width: 103 },
        { field: 'RMLARGEDELIVERY', headerName: '다량배달처', width: 118 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" startIcon={<Close />} onClick={hook.lfn_End}>닫기</Button>
<Button variant="contained"  onClick={hook.btnSave_OnClick}>적용주소 반영(F4)</Button>
<Button variant="contained" startIcon={<Add />} onClick={hook.lfn_Cancel}>입력 초기화</Button>
<Button variant="contained" startIcon={<Print />} onClick={hook.lfn_PrintScreen}>화면 출력</Button>

                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "33px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_TabAddr ? undefined : 'none' }}><Box sx={{ width: '696px', height: '659px', width: "100%", height: "auto", minHeight: "659px" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_TabAddr} onChange={(e, v) => setTabValue_TabAddr(v)} aria-label="TabAddr"><Tab label="지번주소 조회" /><Tab label="도로명주소 조회" /></Tabs></Box><CustomTabPanel value={tabValue_TabAddr} index={0}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "50px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdPost ? undefined : 'none' }}><Paper sx={{ width: '678px', height: '226px', width: '100%', height: 'auto', minHeight: '226px' }}><DataGridWrapper rows={hook.ds_oPostCode} columns={columns_gdPost} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '562px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>주소1</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oPostCode?.PADDR1 || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnPostApply ? undefined : 'none' }}><Button variant="contained"   onClick={hook.TabAddr_tabPost_btnPostApply_OnClick} sx={{ width: '80px', height: '26px', whiteSpace: "nowrap" }}>적용</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static0 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '60px', height: '24px' }}><Typography variant="body2">주소2</Typography></Box></Box><Box sx={{ display: hook.isVisible_ChkPostMountain ? undefined : 'none' }}><Box sx={{ width: '32px', height: '25px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box><Box sx={{ display: hook.isVisible_edPostMainBunji ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '32px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '42px', height: '22px', display: 'flex', alignItems: 'center', ml: '2px' }}>
                    <Typography variant="body2" sx={{ minWidth: 8, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>-</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '220px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>건물명</Typography>
                    <TextField size="small" fullWidth value={hook.ds_oPostCode?.PBUILDNM || ''} sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '191px', height: '22px', display: 'flex', alignItems: 'center', ml: '5px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상세주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnPostApplyCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.TabAddr_tabPost_btnPostApplyCancel_OnClick} sx={{ width: '80px', height: '26px', whiteSpace: "nowrap" }}>적용취소</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static4 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '140px', height: '17px' }}><Typography variant="body2">(아파트, 건물명 등)</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '150px', height: '17px' }}><Typography variant="body2">(동/호수, 블럭, 통/반 등)</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '563px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>적용 주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_chkPostInput ? undefined : 'none' }}><Box sx={{ width: '80px', height: '25px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medPostCode11 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '56px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edPostApplyAddr2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '480px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "7px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_btnRoadSearch ? undefined : 'none' }}><Button variant="contained"   onClick={hook.TabAddr_tabPost_btnRoadSearch_OnClick} sx={{ width: '196px', height: '26px', whiteSpace: "nowrap" }}>▼▼ 도로명주소 검색 ▼▼</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static8 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '120px', height: '30px' }}><Typography variant="body2">도로명 주소</Typography></Box></Box><Box sx={{ display: hook.isVisible_Static15 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '219px', height: '20px' }}><Typography variant="body2">※ 입력한 지번주소로 도로명주소 검색</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdRoad1 ? undefined : 'none' }}><Paper sx={{ width: '678px', height: '226px', width: '100%', height: 'auto', minHeight: '226px' }}><DataGridWrapper rows={hook.ds_oRoadAddr} columns={columns_gdRoad1} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '424px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상세주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static13 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '170px', height: '21px' }}><Typography variant="body2">[건물/아파트, 동/호수, 층 등]</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnRoadApply ? undefined : 'none' }}><Button variant="contained"   onClick={hook.TabAddr_tabPost_btnRoadApply_OnClick} sx={{ width: '80px', height: '26px', whiteSpace: "nowrap" }}>적용</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '424px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부가주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_btnRoadApplyCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.TabAddr_tabPost_btnRoadApplyCancel_OnClick} sx={{ width: '80px', height: '26px', whiteSpace: "nowrap" }}>적용 취소</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_Static14 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '140px', height: '21px' }}><Typography variant="body2">[기타정보]</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '563px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>적용 주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_chkRoadInput ? undefined : 'none' }}><Box sx={{ width: '80px', height: '25px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medPostCode12 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '56px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edRoadApplyAddr12 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '480px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
</CustomTabPanel><CustomTabPanel value={tabValue_TabAddr} index={1}><Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "54px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_gdRoad2 ? undefined : 'none' }}><Paper sx={{ width: '676px', height: '462px', width: '100%', height: 'auto', minHeight: '462px' }}><DataGridWrapper rows={hook.ds_oRoadList} columns={columns_gdRoad2} /></Paper></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '424px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>상세주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static5 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '170px', height: '21px' }}><Typography variant="body2">[건물/아파트, 동/호수, 층 등]</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnRoadApply ? undefined : 'none' }}><Button variant="contained"   onClick={hook.TabAddr_tabRoad_btnRoadApply_OnClick} sx={{ width: '80px', height: '26px', whiteSpace: "nowrap" }}>적용</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '424px', height: '22px', display: 'flex', alignItems: 'center', ml: '10px' }}>
                    <Typography variant="body2" sx={{ minWidth: 60, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>부가주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack><Box sx={{ display: hook.isVisible_Static2 ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '140px', height: '21px' }}><Typography variant="body2">[기타정보]</Typography></Box></Box><Box sx={{ display: hook.isVisible_btnRoadApplyCancel ? undefined : 'none' }}><Button variant="contained"   onClick={hook.TabAddr_tabRoad_btnRoadApplyCancel_OnClick} sx={{ width: '80px', height: '26px', whiteSpace: "nowrap" }}>적용 취소</Button></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "12px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_lbBuildingInfo ? undefined : 'none' }}><Box sx={{ display: "flex", alignItems: "center", width: '96px', height: '24px' }}><Typography variant="body2">적용 주소</Typography></Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "8px", py: 0.5, width: "100%" }}><Stack direction="row" alignItems="center" spacing={0.5} sx={{ width: '565px', height: '22px', display: 'flex', alignItems: 'center', ml: '9px' }}>
                    <Typography variant="body2" sx={{ minWidth: 80, bgcolor: '#f5f5f5', p: 0.3, borderRadius: 1 }}>적용 주소</Typography>
                    <TextField size="small" fullWidth  sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" } }} />
                 </Stack></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_chkRoadInput ? undefined : 'none' }}><Box sx={{ width: '85px', height: '24px', border: '1px dashed grey' }}>Unknown: Checkbox</Box></Box></Stack>
<Stack direction="row" alignItems="center" spacing={0} sx={{ mt: "2px", py: 0.5, width: "100%" }}><Box sx={{ display: hook.isVisible_medPostCode2 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '56px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box><Box sx={{ display: hook.isVisible_edRoadApplyAddr22 ? undefined : 'none' }}><TextField size="small" fullWidth  sx={{ width: '480px', height: '24px', "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.4)" }, "& .MuiInputBase-input": { padding: "4px 6px" }, bgcolor: "#fff" }} /></Box></Stack>
</CustomTabPanel></Box></Box></Stack>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default CopyFrmsys0054PAddrSearch;

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