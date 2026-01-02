// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oTrainingSeatNo, Ids_oPassYn } from './Frmspcledu0115PTrainingSeatNoListData';

export const useFrmspcledu0115PTrainingSeatNoList = () => {
    const [ds_oTrainingSeatNo, setds_oTrainingSeatNo] = useState<Ids_oTrainingSeatNo[]>([]);
    const [ds_oPassYn, setds_oPassYn] = useState<Ids_oPassYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingSeatNo([]);
            setds_oPassYn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oTrainingSeatNo,
        ds_oPassYn,
        btnMutilSort_OnClick,
        lfn_End,
    };
};