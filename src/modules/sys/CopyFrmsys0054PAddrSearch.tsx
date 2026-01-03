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
                        <Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_TabAddr} onChange={(e, v) => setTabValue_TabAddr(v)} aria-label="TabAddr"><Tab label="지번주소 조회" /><Tab label="도로명주소 조회" /></Tabs></Box><CustomTabPanel value={tabValue_TabAddr} index={0}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oPostCode} columns={columns_gdPost} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>주소1</Typography>
                        <TextField size="small" fullWidth value={hook.ds_oPostCode?.PADDR1 || ''} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.TabAddr_tabPost_btnPostApply_OnClick}>적용</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>주소2</Box></Grid><Grid item xs={12} md={2}><Box>산</Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>-</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>건물명</Typography>
                        <TextField size="small" fullWidth value={hook.ds_oPostCode?.PBUILDNM || ''} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상세주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.TabAddr_tabPost_btnPostApplyCancel_OnClick}>적용취소</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>적용 주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>(아파트, 건물명 등)</Box></Grid><Grid item xs={12} md={2}><Box>(동/호수, 블럭, 통/반 등)</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={6}><Box></Box></Grid><Grid item xs={12} md={2}><Box>직접입력</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>도로명 주소</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.TabAddr_tabPost_btnRoadSearch_OnClick}>▼▼ 도로명주소 검색 ▼▼</Button></Grid><Grid item xs={12} md={3}><Box>※ 입력한 지번주소로 도로명주소 검색</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oRoadAddr} columns={columns_gdRoad1} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상세주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>[건물/아파트, 동/호수, 층 등]</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.TabAddr_tabPost_btnRoadApply_OnClick}>적용</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>부가주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>[기타정보]</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.TabAddr_tabPost_btnRoadApplyCancel_OnClick}>적용 취소</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>적용 주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>직접입력</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={6}><Box></Box></Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_TabAddr} index={1}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_oRoadList} columns={columns_gdRoad2} />
                    </Paper>
                </Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>상세주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>[건물/아파트, 동/호수, 층 등]</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.TabAddr_tabRoad_btnRoadApply_OnClick}>적용</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={5}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>부가주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>[기타정보]</Box></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.TabAddr_tabRoad_btnRoadApplyCancel_OnClick}>적용 취소</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box>적용 주소</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={7}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>적용 주소</Typography>
                        <TextField size="small" fullWidth  />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Box>직접입력</Box></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={6}><Box></Box></Grid></Grid>
</CustomTabPanel></Box></Grid></Grid>

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