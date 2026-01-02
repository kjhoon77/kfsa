// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oSmsStat {
    TJHPROCDATE: string;
    TJHPROCJIBU: string;
    TJHPROCJIBUCD: string;
    TJHREASON: string;
    TJHSABUN: string;
    TJHSABUNNM: string;
    TJHSEQ: string;
    TJHSTATUS: string;
    TJHSTATUSCD: string;
    TJMGNO: string;
    TPPERSONNM: string;
    TPRESIDENTNO: string;
}

export const useFrmspcledu0031PSmsSendList = () => {
    const [ds_oSmsStat, setds_oSmsStat] = useState<Ids_oSmsStat[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSmsStat([]);
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
        ds_oSmsStat,
        btnMutilSort_OnClick,
        lfn_End,
    };
};