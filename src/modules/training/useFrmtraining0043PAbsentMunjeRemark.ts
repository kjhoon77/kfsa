// @ts-nocheck
import { useState, useEffect } from 'react';

export const useFrmtraining0043PAbsentMunjeRemark = () => {
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
    const btnConfirm_OnClick = () => {
        console.log('btnConfirm_OnClick clicked');
    };

    return {
        isLoading,
        btnCancel_OnClick,
        btnConfirm_OnClick,
    };
};