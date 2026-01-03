// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0010PInfoMessageData';

export const useFrmCOM0010PInfoMessage = () => {
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