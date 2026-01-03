// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0031PProgressBarData';

export const useFrmCOM0031PProgressBar = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
    };
};