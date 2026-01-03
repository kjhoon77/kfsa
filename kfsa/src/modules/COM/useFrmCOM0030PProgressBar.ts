// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0030PProgressBarData';

export const useFrmCOM0030PProgressBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_imgProgress, setRawVisible_imgProgress] = useState(true);
    const isVisible_imgProgress = rawVisible_imgProgress;
    const setIsVisible_imgProgress = setRawVisible_imgProgress;

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