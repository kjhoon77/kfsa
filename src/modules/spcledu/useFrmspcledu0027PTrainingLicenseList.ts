// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oLicense {
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

export const useFrmspcledu0027PTrainingLicenseList = () => {
    const [ds_oLicense, setds_oLicense] = useState<Ids_oLicense[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oLicense([]);
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
        ds_oLicense,
        btnMutilSort_OnClick,
        lfn_End,
    };
};