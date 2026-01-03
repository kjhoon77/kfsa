// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0020PErrorMessageData';

export const useFrmCOM0020PErrorMessage = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const btnOK_OnClick = () => {
        console.log('btnOK_OnClick clicked');
    };

    return {
        isLoading,
        btnOK_OnClick,
    };
};