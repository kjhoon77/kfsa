import {
    Box, Grid, TextField, Typography, MenuItem, Checkbox, FormControlLabel, Paper
} from '@mui/material';

export default function BuildingInfoTab() {
    return (
        <Box>
            <Typography variant="h6" gutterBottom color="primary">
                소방대상물(건축물) 정보
            </Typography>

            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        label="대상물명"
                        fullWidth
                        size="small"
                        required
                        placeholder="건축물 대장상 명칭"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        select
                        label="용도"
                        fullWidth
                        size="small"
                        defaultValue=""
                    >
                        <MenuItem value="">선택</MenuItem>
                        <MenuItem value="01">근린생활시설</MenuItem>
                        <MenuItem value="02">공동주택</MenuItem>
                        <MenuItem value="03">업무시설</MenuItem>
                    </TextField>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        label="관할소방서"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        label="관할센터"
                        fullWidth
                        size="small"
                    />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                    <FormControlLabel control={<Checkbox />} label="제연설비 설치대상 여부" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        label="연면적(㎡)"
                        fullWidth
                        size="small"
                        type="number"
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>대상물 주소</Typography>
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
                    <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>건축물 대장 정보 연동</Typography>
                    <Paper variant="outlined" sx={{ p: 2, bgcolor: '#f0f4f8' }}>
                        <Typography variant="body2">
                            * 건축물대장 연계 시 아래 정보가 자동 갱신됩니다.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
