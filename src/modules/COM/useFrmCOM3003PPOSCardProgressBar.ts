// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioPosOutput, Ids_LguplusOut } from './FrmCOM3003PPOSCardProgressBarData';

export const useFrmCOM3003PPOSCardProgressBar = () => {
    const [ds_ioPosOutput, setds_ioPosOutput] = useState<Ids_ioPosOutput[]>([]);
    const [ds_LguplusOut, setds_LguplusOut] = useState<Ids_LguplusOut[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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
    };
};