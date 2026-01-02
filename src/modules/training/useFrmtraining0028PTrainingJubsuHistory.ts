// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJubsuHist {
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
}

export const useFrmtraining0028PTrainingJubsuHistory = () => {
    const [ds_oJubsuHist, setds_oJubsuHist] = useState<Ids_oJubsuHist[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJubsuHist([]);
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
        ds_oJubsuHist,
        btnMutilSort_OnClick,
        lfn_End,
    };
};