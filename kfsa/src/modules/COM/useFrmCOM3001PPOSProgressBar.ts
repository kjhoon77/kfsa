// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioPosOutput } from './FrmCOM3001PPOSProgressBarData';

export const useFrmCOM3001PPOSProgressBar = () => {
    const [ds_ioPosOutput, setds_ioPosOutput] = useState<Ids_ioPosOutput[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_imgProgress, setIsVisible_imgProgress] = useState(true);
    const [isVisible_imgProgressBottom, setIsVisible_imgProgressBottom] = useState(true);
    const [isVisible_lbPassed, setIsVisible_lbPassed] = useState(true);

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