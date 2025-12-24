import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontSize: 12,
        fontFamily: '"Pretendard", "Malgun Gothic", "Roboto", "Helvetica", "Arial", sans-serif',
        allVariants: {
            fontSize: '12px',
        },
        h1: { fontSize: '14px', fontWeight: 'bold' },
        h2: { fontSize: '14px', fontWeight: 'bold' },
        h3: { fontSize: '14px', fontWeight: 'bold' },
        h4: { fontSize: '14px', fontWeight: 'bold' },
        h5: { fontSize: '14px', fontWeight: 'bold' },
        h6: { fontSize: '14px', fontWeight: 'bold' },
        subtitle1: { fontSize: '14px', fontWeight: 'bold' },
        subtitle2: { fontSize: '12px', fontWeight: 'bold' },
        body1: { fontSize: '12px' },
        body2: { fontSize: '12px' },
        button: { textTransform: 'none', fontSize: '12px' },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontSize: '12px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                },
                input: {
                    fontSize: '12px',
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                size: 'small',
                variant: 'outlined',
            },
        },
    },
});

export default theme;
