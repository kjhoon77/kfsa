import { useState, useEffect } from 'react';
import {
    Box, Paper, Typography, Button, IconButton, Grid, TextField,
    Divider, MenuItem, Select, FormControl, InputLabel, Chip
} from '@mui/material';
import {
    PhoneInTalk as PhoneInTalkIcon,
    PhoneDisabled as PhoneDisabledIcon,
    Pause as PauseIcon,
    PlayArrow as PlayArrowIcon,
    Headset as HeadsetIcon
} from '@mui/icons-material';
import { useCTIStore, type AgentState } from '../../../store/useCTIStore';

export default function Softphone() {
    const {
        isLoggedIn, agentState, currentCall,
        login, logout, setAgentState, makeCall, hangupCall, holdCall, resumeCall
    } = useCTIStore();

    const [dialNumber, setDialNumber] = useState('');
    const [timer, setTimer] = useState(0);

    // Timer logic for call duration
    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (currentCall?.status === 'CONNECTED') {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        } else {
            // Reset timer asynchronously to avoid "setState during render" or "synchronous effect" warning
            // although 'status' dependency change implies a new render cycle anyway.
            setTimeout(() => setTimer(0), 0);
        }
        return () => clearInterval(interval);
    }, [currentCall?.status]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleDial = (num: string) => {
        setDialNumber((prev) => prev + num);
    };

    if (!isLoggedIn) {
        return (
            <Box sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>CTI 연결</Typography>
                <Button variant="contained" fullWidth startIcon={<HeadsetIcon />} onClick={login}>
                    CTI 로그인
                </Button>
            </Box>
        );
    }

    return (
        <Paper elevation={3} sx={{ p: 2, borderRadius: 2, bgcolor: '#2c3e50', color: 'white', maxWidth: 320 }}>
            {/* Header / Status */}
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Typography variant="subtitle2" color="rgba(255,255,255,0.7)">상담원: 김종훈</Typography>
                    <Chip
                        label={agentState}
                        color={agentState === 'READY' ? 'success' : agentState === 'BUSY' ? 'error' : 'default'}
                        size="small"
                        sx={{ mt: 0.5 }}
                    />
                </Box>
                <Button size="small" variant="text" sx={{ color: 'rgba(255,255,255,0.5)' }} onClick={logout}>
                    로그아웃
                </Button>
            </Box>

            {/* State Control */}
            <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                <InputLabel sx={{ color: 'rgba(255,255,255,0.7)' }}>상태 변경</InputLabel>
                <Select
                    value={agentState}
                    label="상태 변경"
                    onChange={(e) => setAgentState(e.target.value as AgentState)}
                    sx={{
                        color: 'white',
                        '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                        '.MuiSvgIcon-root': { color: 'white' }
                    }}
                >
                    <MenuItem value="READY">수신 대기 (Ready)</MenuItem>
                    <MenuItem value="NOT_READY">이석 (Not Ready)</MenuItem>
                    <MenuItem value="AFTER_WORK">후처리 (After Work)</MenuItem>
                </Select>
            </FormControl>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 2 }} />

            {/* Active Call Info */}
            <Box sx={{
                height: 100,
                bgcolor: 'rgba(0,0,0,0.2)',
                borderRadius: 1,
                mb: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {currentCall ? (
                    <>
                        <Typography variant="h5" fontWeight="bold">{currentCall.callerNumber}</Typography>
                        <Typography variant="body2" color="rgba(255,255,255,0.7)">{currentCall.status}</Typography>
                        <Typography variant="h6" sx={{ mt: 1, color: '#4caf50' }}>{formatTime(timer)}</Typography>
                    </>
                ) : (
                    <Typography variant="h5" color="rgba(255,255,255,0.3)">대기중...</Typography>
                )}
            </Box>

            {/* Dial Input */}
            <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="전화번호 입력"
                value={dialNumber}
                onChange={(e) => setDialNumber(e.target.value)}
                sx={{
                    input: { color: 'white', textAlign: 'center', fontSize: '1.2rem' },
                    '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                    mb: 2
                }}
                InputProps={{
                    endAdornment: (
                        <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.5)' }} onClick={() => setDialNumber('')}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    )
                }}
            />

            {/* Call Controls */}
            <Grid container spacing={1} sx={{ mb: 2 }}>
                {currentCall ? (
                    <>
                        <Grid size={{ xs: 6 }}>
                            <Button
                                variant="contained"
                                color="error"
                                fullWidth
                                startIcon={<PhoneDisabledIcon />}
                                onClick={hangupCall}
                                sx={{ height: 48 }}
                            >
                                끊기
                            </Button>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            {currentCall.status === 'HOLD' ? (
                                <Button variant="contained" color="warning" fullWidth startIcon={<PlayArrowIcon />} onClick={resumeCall} sx={{ height: 48 }}>
                                    재개
                                </Button>
                            ) : (
                                <Button variant="contained" color="warning" fullWidth startIcon={<PauseIcon />} onClick={holdCall} sx={{ height: 48 }}>
                                    보류
                                </Button>
                            )}
                        </Grid>
                    </>
                ) : (
                    <Grid size={{ xs: 12 }}>
                        <Button
                            variant="contained"
                            color="success"
                            fullWidth
                            startIcon={<PhoneInTalkIcon />}
                            onClick={() => makeCall(dialNumber)}
                            disabled={!dialNumber}
                            sx={{ height: 48 }}
                        >
                            걸기
                        </Button>
                    </Grid>
                )}
            </Grid>

            {/* Keypad (Visual only for now) */}
            <Grid container spacing={1}>
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((key) => (
                    <Grid size={{ xs: 4 }} key={key}>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={() => handleDial(key)}
                            sx={{
                                color: 'white',
                                borderColor: 'rgba(255,255,255,0.1)',
                                fontSize: '1.2rem',
                                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                            }}
                        >
                            {key}
                        </Button>
                    </Grid>
                ))}
            </Grid>

        </Paper>
    );
}

// Helper icon
function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}
