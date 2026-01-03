// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioPosOutput } from './FrmCOM8001PPOSProgressBarData';

export const useFrmCOM8001PPOSProgressBar = () => {
    const [ds_ioPosOutput, setds_ioPosOutput] = useState<Ids_ioPosOutput[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_imgProgress, setRawVisible_imgProgress] = useState(true);
    const [rawVisible_imgProgressBottom, setRawVisible_imgProgressBottom] = useState(true);
    const [rawVisible_lbPassed, setRawVisible_lbPassed] = useState(true);
    const isVisible_imgProgress = rawVisible_imgProgress;
    const setIsVisible_imgProgress = setRawVisible_imgProgress;
    const isVisible_imgProgressBottom = rawVisible_imgProgressBottom;
    const setIsVisible_imgProgressBottom = setRawVisible_imgProgressBottom;
    const isVisible_lbPassed = rawVisible_lbPassed;
    const setIsVisible_lbPassed = setRawVisible_lbPassed;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioPosOutput([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_ioPosOutput,
        isVisible_imgProgress,
        setIsVisible_imgProgress,
        isVisible_imgProgressBottom,
        setIsVisible_imgProgressBottom,
        isVisible_lbPassed,
        setIsVisible_lbPassed,
    };
};