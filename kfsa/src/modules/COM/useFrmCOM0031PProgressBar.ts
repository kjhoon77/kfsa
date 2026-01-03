// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0031PProgressBarData';

export const useFrmCOM0031PProgressBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_imgProgress, setIsVisible_imgProgress] = useState(true);
    const [isVisible_imgProgressBottom, setIsVisible_imgProgressBottom] = useState(true);
    const [isVisible_lbPassed, setIsVisible_lbPassed] = useState(true);

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
        isVisible_imgProgressBottom,
        setIsVisible_imgProgressBottom,
        isVisible_lbPassed,
        setIsVisible_lbPassed,
    };
};