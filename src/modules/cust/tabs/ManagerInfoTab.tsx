import {
    Box, Grid, TextField, Typography, MenuItem, Paper
} from '@mui/material';

export default function ManagerInfoTab() {
    return (
        <Box>
            <Typography variant="h6" gutterBottom color="primary">
                관리자(선임자) 정보
            </Typography>

            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                        label="성명"
                        fullWidth
                        size="small"
                        placeholder="관리자 성명"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                        label="생년월일"
                        fullWidth
                        size="small"
                        placeholder="YYYYMMDD"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                        label="휴대전화"
                        fullWidth
                        size="small"
                        placeholder="010-0000-0000"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <TextField
                        select
                        label="자격구분"
                        fullWidth
                        size="small"
                        defaultValue=""
                    >
                        <MenuItem value="1">특급</MenuItem>
                        <MenuItem value="2">1급</MenuItem>
                        <MenuItem value="3">2급</MenuItem>
                        <MenuItem value="4">3급</MenuItem>
                    </TextField>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>주소 정보</Typography>
                </Grid>

                <Grid size={{ xs: 12, sm: 8 }}>
                    <TextField
                        label="주소"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                        label="우편번호"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextField
                        label="상세주소"
                        fullWidth
                        size="small"
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>선임 이력</Typography>
                    <Paper variant="outlined" sx={{ p: 2, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#fafafa' }}>
                        <Typography variant="body2" color="textSecondary">
                            [그리드 영역: 선임 이력 목록 표시]
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
