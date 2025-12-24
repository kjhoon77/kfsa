import {
    Box, Grid, TextField, Typography, MenuItem, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel
} from '@mui/material';

export default function FeeInfoTab() {
    return (
        <Box>
            <Typography variant="h6" gutterBottom color="primary">
                회비 정보
            </Typography>

            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        label="회비부과년월"
                        fullWidth
                        size="small"
                        placeholder="YYYY-MM"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                        select
                        label="납부상태"
                        fullWidth
                        size="small"
                        defaultValue="0"
                    >
                        <MenuItem value="0">미납</MenuItem>
                        <MenuItem value="1">완납</MenuItem>
                        <MenuItem value="2">부분납</MenuItem>
                    </TextField>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">청구서 수령 방법</FormLabel>
                        <RadioGroup row defaultValue="email">
                            <FormControlLabel value="email" control={<Radio />} label="이메일" />
                            <FormControlLabel value="post" control={<Radio />} label="우편" />
                            <FormControlLabel value="push" control={<Radio />} label="앱푸시" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>청구 주소</Typography>
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
                    <TextField
                        label="비고"
                        multiline
                        rows={3}
                        fullWidth
                        size="small"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
