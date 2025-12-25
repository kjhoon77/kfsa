import { Box, Grid, TextField, FormControl, Select, MenuItem, Button, Stack } from '@mui/material';
import type { ManagerInfo } from '../types';

interface Props {
    managerInfo: ManagerInfo | null;
}

export default function ManagerBasicInfoTab({ managerInfo }: Props) {
    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <TextField
                            label="이메일"
                            size="small"
                            fullWidth
                            value={managerInfo?.FMHEMAILID || ''}
                        />
                        <Box>@</Box>
                        <FormControl size="small" fullWidth>
                            <Select value={managerInfo?.FMHEMAILDOMAIN || 'naver.com'}>
                                <MenuItem value="naver.com">naver.com</MenuItem>
                                <MenuItem value="gmail.com">gmail.com</MenuItem>
                                <MenuItem value="daum.net">daum.net</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Stack direction="row" spacing={1}>
                        <TextField label="휴대폰" size="small" fullWidth value={managerInfo?.FMHHPTEL || ''} />
                        <Button variant="outlined" size="small">문자발송</Button>
                        <Button variant="outlined" size="small">문자이력</Button>
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="연락처" size="small" fullWidth value={managerInfo?.FMHTEL || ''} />
                </Grid>
                <Grid size={{ xs: 12, sm: 12 }}>
                    <Stack direction="row" spacing={1}>
                        <TextField label="우편번호" size="small" sx={{ width: 100 }} value={managerInfo?.FMHZIPCD || ''} disabled />
                        <Button variant="outlined" size="small">주소검색</Button>
                        <FormControl size="small" sx={{ width: 120 }}>
                            <Select value={managerInfo?.FMHADDRGUBUN || '0'}>
                                <MenuItem value="0">지번</MenuItem>
                                <MenuItem value="1">도로명</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextField label="주소1" size="small" fullWidth value={managerInfo?.FMHROADADDR1 || managerInfo?.FMHADDR1 || ''} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextField label="주소2" size="small" fullWidth value={managerInfo?.FMHROADADDR2 || managerInfo?.FMHADDR2 || ''} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="수첩번호" size="small" fullWidth value={managerInfo?.FMHLICENSENO || ''} />
                </Grid>
            </Grid>
        </Box>
    );
}
