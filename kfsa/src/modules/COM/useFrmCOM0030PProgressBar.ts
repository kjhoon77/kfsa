// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0030PProgressBarData';

export const useFrmCOM0030PProgressBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_imgProgress, setIsVisible_imgProgress] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_imgProgress,
        setIsVisible_imgProgress,
    };
};