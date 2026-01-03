// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioPosOutput } from './FrmCOM3001PPOSProgressBarData';

export const useFrmCOM3001PPOSProgressBar = () => {
    const [ds_ioPosOutput, setds_ioPosOutput] = useState<Ids_ioPosOutput[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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
    };
};