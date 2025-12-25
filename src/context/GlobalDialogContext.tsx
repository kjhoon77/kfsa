import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText } from '@mui/material';

interface DialogOptions {
    title?: string;
    message: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    type: 'alert' | 'confirm';
}

interface GlobalDialogContextType {
    showAlert: (message: string, title?: string) => Promise<void>;
    showConfirm: (message: string, title?: string) => Promise<boolean>;
}

const GlobalDialogContext = createContext<GlobalDialogContextType | undefined>(undefined);

export const GlobalDialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<DialogOptions | null>(null);
    const [resolver, setResolver] = useState<((value: boolean) => void) | null>(null);

    const handleClose = useCallback((result: boolean) => {
        setOpen(false);
        if (options?.onConfirm && result) options.onConfirm();
        if (options?.onCancel && !result) options.onCancel();

        if (resolver) {
            resolver(result);
            setResolver(null);
        }
    }, [options, resolver]);

    const showAlert = useCallback((message: string, title?: string): Promise<void> => {
        return new Promise((resolve) => {
            setOptions({
                type: 'alert',
                message,
                title,
                onConfirm: () => resolve(),
            });
            setResolver(() => resolve as any); // Alert resolves to void/true, doesn' really matter
            setOpen(true);
        });
    }, []);

    const showConfirm = useCallback((message: string, title?: string): Promise<boolean> => {
        return new Promise((resolve) => {
            setOptions({
                type: 'confirm',
                message,
                title,
            });
            setResolver(() => resolve);
            setOpen(true);
        });
    }, []);

    return (
        <GlobalDialogContext.Provider value={{ showAlert, showConfirm }}>
            {children}
            {options && (
                <Dialog
                    open={open}
                    onClose={() => handleClose(false)} // Clicking outside treats as cancel
                    aria-labelledby="global-dialog-title"
                    aria-describedby="global-dialog-description"
                    maxWidth="xs"
                    fullWidth
                >
                    <DialogTitle id="global-dialog-title">
                        {options.title || (options.type === 'alert' ? '알림' : '확인')}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="global-dialog-description" sx={{ color: 'text.primary' }}>
                            {options.message.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {options.type === 'confirm' && (
                            <Button onClick={() => handleClose(false)} color="inherit">
                                취소
                            </Button>
                        )}
                        <Button onClick={() => handleClose(true)} variant="contained" autoFocus>
                            확인
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </GlobalDialogContext.Provider>
    );
};

export const useGlobalDialog = () => {
    const context = useContext(GlobalDialogContext);
    if (!context) {
        throw new Error('useGlobalDialog must be used within a GlobalDialogProvider');
    }
    return context;
};
