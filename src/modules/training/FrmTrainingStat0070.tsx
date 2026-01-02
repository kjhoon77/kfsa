// @ts-nocheck
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Add, Check, Close, ContentCopy, Delete, Description, FilterList, Help, Print, Refresh, Save, Search, Sort, TouchApp, Visibility, ZoomIn } from '@mui/icons-material';
import DataGridWrapper from '../../components/DataGridWrapper';
import PageContainer from '../../components/PageContainer';
import { useFrmTrainingStat0070 } from './useFrmTrainingStat0070';
import * as FrmTrainingStat0070Data from './FrmTrainingStat0070Data';

export const FrmTrainingStat0070 = () => {
    const hook = useFrmTrainingStat0070();
    const [tabValue_TAB_Training, setTabValue_TAB_Training] = useState(0);
    const columns_gdList = [
        { field: 'GTDEPTNM', headerName: '지부', width: 60 },
        { field: 'BCTHSLATSUM', headerName: '총계', width: 81 },
        { field: 'PCFENTHSLAT', headerName: '소방안전관리자', width: 65 },
        { field: 'PCFECTHSLAT', headerName: '공공(혼합)', width: 65 },
        { field: 'SGFETHSLAT', headerName: '특급', width: 65 },
        { field: 'FTFETHSLAT', headerName: '1급', width: 65 },
        { field: 'SDFETHSLAT', headerName: '2급정규', width: 65 },
        { field: 'SDFEMUNJETHSLAT', headerName: '2급면제', width: 65 },
        { field: 'TDFETHSLAT', headerName: '3급', width: 65 },
        { field: 'DSSETHSLAT', headerName: '위험물', width: 65 },
        { field: 'DSCRTHSLAT', headerName: '운송자', width: 65 },
        { field: 'DSUYTHSLAT', headerName: '통합자', width: 65 },
        { field: 'DSTPTHSLAT', headerName: '운반자', width: 65 },
    ];
    return (
        <PageContainer>

            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="h5">기본정보</Typography>
                <Stack direction="row" spacing={1}>
                    
                </Stack>
            </Stack>
<Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold' }}>Main Config</Typography>
                        <Grid container spacing={2} alignItems="center">

                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>조회일자</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{  }}>
                        <Typography variant="body2" sx={{ minWidth: 80, display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', p: 0.5, borderRadius: 1 }}>~</Typography>
                        <DatePicker format="yyyy/MM/dd" slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                    </Stack>
                </Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnSearch_OnClick}>검색</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnExcell_OnClick}>엑셀</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPrint_OnClick}>출력</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPrintChart_OnClick}>화면인쇄</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.btnPrintWarmun_OnClick}>화면인쇄</Button></Grid><Grid item xs={12} md={2}><Button variant="contained" onClick={hook.lfn_End}>화면인쇄</Button></Grid></Grid>
<Grid container spacing={2} alignItems="center">
<Grid item xs={12}><Box sx={{ width: "100%" }}><Box sx={{ borderBottom: 1, borderColor: "divider" }}><Tabs value={tabValue_TAB_Training} onChange={(e, v) => setTabValue_TAB_Training(v)} aria-label="TAB_Training"><Tab label="    현    황    " /><Tab label="    Chart    " /></Tabs></Box><CustomTabPanel value={tabValue_TAB_Training} index={0}><Grid container spacing={2} alignItems="center">

                <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGridWrapper rows={hook.ds_exampass} columns={columns_gdList} />
                    </Paper>
                </Grid></Grid>
</CustomTabPanel><CustomTabPanel value={tabValue_TAB_Training} index={1}></CustomTabPanel></Box></Grid><Grid item xs={12} md={2}><Box></Box></Grid><Grid item xs={12} md={2}><Box>[단위 : 천원]</Box></Grid></Grid>

                    </Paper>
                </Grid>
</Grid>

        </PageContainer>
    );
};
export default FrmTrainingStat0070;

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