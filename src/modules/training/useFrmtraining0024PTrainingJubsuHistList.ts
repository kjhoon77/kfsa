// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJubsuAllInfo {
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
    TPBIRTHDAY: string;
    PERSONKEY: string;
    BIRTHDAY: string;
}

export const useFrmtraining0024PTrainingJubsuHistList = () => {
    const [ds_oJubsuAllInfo, setds_oJubsuAllInfo] = useState<Ids_oJubsuAllInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJubsuAllInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oJubsuAllInfo,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
    };
};