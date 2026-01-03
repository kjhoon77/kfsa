// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioPosOutput, Ids_LguplusOut } from './FrmCOM3003PPOSCardProgressBarData';

export const useFrmCOM3003PPOSCardProgressBar = () => {
    const [ds_ioPosOutput, setds_ioPosOutput] = useState<Ids_ioPosOutput[]>([]);
    const [ds_LguplusOut, setds_LguplusOut] = useState<Ids_LguplusOut[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_MSIE, setRawVisible_MSIE] = useState(true);
    const [rawVisible_imgProgress, setRawVisible_imgProgress] = useState(true);
    const isVisible_MSIE = rawVisible_MSIE;
    const setIsVisible_MSIE = setRawVisible_MSIE;
    const isVisible_imgProgress = rawVisible_imgProgress;
    const setIsVisible_imgProgress = setRawVisible_imgProgress;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioPosOutput([]);
            setds_LguplusOut([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_ioPosOutput,
        ds_LguplusOut,
        isVisible_MSIE,
        setIsVisible_MSIE,
        isVisible_imgProgress,
        setIsVisible_imgProgress,
    };
};