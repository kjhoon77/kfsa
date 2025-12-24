import React from 'react';
import { Box, Paper, Typography, Breadcrumbs, Link } from '@mui/material';
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';

interface PageContainerProps {
    title?: string;
    breadcrumbs?: Array<{ label: string; href?: string }>;
    children: React.ReactNode;
    fullHeight?: boolean;
}

export default function PageContainer({
    title,
    breadcrumbs,
    children,
    fullHeight = true
}: PageContainerProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: fullHeight ? '100%' : 'auto',
                maxHeight: '100%',
                overflow: 'hidden', // Prevent outer scroll 
                p: 2,
                gap: 1
            }}
        >
            {(title || breadcrumbs) && (
                <Box sx={{ mb: 1, flexShrink: 0 }}>
                    {breadcrumbs && (
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                            sx={{ mb: 0.5, fontSize: '0.875rem' }}
                        >
                            {breadcrumbs.map((crumb, index) => (
                                <Link
                                    key={index}
                                    underline="hover"
                                    color="inherit"
                                    href={crumb.href || "#"}
                                    sx={{ cursor: crumb.href ? 'pointer' : 'default' }}
                                >
                                    {crumb.label}
                                </Link>
                            ))}
                        </Breadcrumbs>
                    )}
                    {title && (
                        <Typography variant="h5" component="h1" fontWeight="bold" color="primary">
                            {title}
                        </Typography>
                    )}
                </Box>
            )}

            <Paper
                elevation={0}
                variant="outlined"
                sx={{
                    flex: 1,
                    overflow: 'auto', // Inner scroll
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#fff'
                }}
            >
                {children}
            </Paper>
        </Box>
    );
}
