import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        // 12pt is approximately 16px (1pt = 1.333px). 
        // Default MUI fontSize is 14px. We bump it to 16px to match 12pt.
        fontSize: 16,
        fontFamily: '"Pretendard", "Malgun Gothic", "Roboto", "Helvetica", "Arial", sans-serif',
        allVariants: {
            fontSize: '1rem', // 16px
        },
        body1: {
            fontSize: '1rem', // 16px
        },
        body2: {
            fontSize: '0.875rem', // 14px (slightly smaller for secondary text if needed, or keep 16px)
        },
        button: {
            textTransform: 'none',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontSize: '1rem',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                size: 'small',
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        fontSize: '1rem', // Ensure inputs are also 16px
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                }
            }
        },
    },
});

export default theme;
