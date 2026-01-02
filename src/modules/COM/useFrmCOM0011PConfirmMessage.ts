// @ts-nocheck
import { useState, useEffect } from 'react';

export const useFrmCOM0011PConfirmMessage = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCancel_OnClick = () => {
        console.log('btnCancel_OnClick clicked');
    };
    const btnNO_OnClick = () => {
        console.log('btnNO_OnClick clicked');
    };
    const btnOK_OnClick = () => {
        console.log('btnOK_OnClick clicked');
    };

    return {
        isLoading,
        btnCancel_OnClick,
        btnNO_OnClick,
        btnOK_OnClick,
    };
};