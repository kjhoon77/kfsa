import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import type { GridColDef } from '@mui/x-data-grid';

import DataGridWrapper from '../../components/DataGridWrapper';
import { callService } from '../../lib/api';
import { showAlert } from '../../lib/utils';
// import MainLayout from '../../layouts/MainLayout'; // Removed
import PageContainer from '../../components/PageContainer';

interface Agent {
    id?: number;
    AGMGNO?: string; // guessed unique ID from console log
    AGNM: string;
    AGOWNER: string;
    AGCONO: string;
    AGTEL: string;
    AGADDR: string;
    [key: string]: unknown; // Allow loose typing for other properties from backend
}

export default function AgentInfoList() {
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);
    const [agents, setAgents] = useState<Agent[]>([]);

    // Columns definition based on `frmcust0010PAgentInfoList.xml`
    const columns: GridColDef<Agent>[] = [
        { field: 'id', headerName: '순번', width: 70, valueGetter: (_value, row) => row.id || 'N/A' }, // Row index simulation needed if no ID
        { field: 'AGNM', headerName: '대행업체명', width: 150 },
        { field: 'AGOWNER', headerName: '대표자', width: 100, align: 'center', headerAlign: 'center' },
        { field: 'AGCONO', headerName: '사업자등록번호', width: 120, align: 'center', headerAlign: 'center' },
        { field: 'AGTEL', headerName: '전화번호', width: 120, align: 'center', headerAlign: 'center' },
        { field: 'AGADDR', headerName: '주소', width: 250 },
    ];

    const handleSearch = async () => {
        setLoading(true);
        try {
            // Mapping to tit_callService("cust:searchCust0040AgentList", ...)
            const response = await callService(
                'cust:searchCust0040AgentList',
                '',
                {},
                'ds_oAgentList=ds_oAgentList',
                `AGNM='${keyword}'`
            ) as { ds_oAgentList: Agent[] };

            if (response && response.ds_oAgentList) {
                // Add unique ID for DataGrid if not present
                const rowsWithId = response.ds_oAgentList.map((item: Agent, index: number) => ({
                    id: index + 1,
                    ...item
                }));
                setAgents(rowsWithId);
            }
        } catch (error) {
            console.error(error);
            showAlert('조회 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    const handleSelect = (row: Agent) => {
        // Mimics logic in `btnSelect_OnClick`
        console.log('Selected:', row);
        showAlert(`선택됨: ${row.AGNM} (${row.AGMGNO})`);
        // In a real modal, this would close the modal and return data.
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <PageContainer title="업무대행업체 검색 (Pilot)" breadcrumbs={[{ label: '고객관리' }, { label: '업무대행업체 검색' }]}>
            {/* Search Area */}
            <Paper variant="outlined" sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, mb: 2, backgroundColor: '#f9f9f9' }}>
                <TextField
                    variant="outlined"
                    size="small"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="업체명 입력"
                    sx={{ width: 200, backgroundColor: 'white' }}
                />

                <Box sx={{ flexGrow: 1 }} /> {/* Spacer */}

                <Stack direction="row" spacing={1}>
                    <Button
                        variant="contained"
                        startIcon={<SearchIcon />}
                        onClick={handleSearch}
                        disabled={loading}
                    >
                        조회
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<CheckIcon />}
                        onClick={() => {
                            showAlert('그리드에서 행을 더블클릭하거나 선택해주세요.');
                        }}
                    >
                        선택
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        startIcon={<CloseIcon />}
                        onClick={() => showAlert('닫기 버튼 클릭됨')}
                    >
                        닫기
                    </Button>
                </Stack>
            </Paper>

            <Box sx={{ flex: 1, minHeight: 0 }}>
                <DataGridWrapper
                    rows={agents}
                    columns={columns}
                    loading={loading}
                    onRowDoubleClick={(params) => handleSelect(params.row)}
                />
            </Box>
        </PageContainer>
    );
}
