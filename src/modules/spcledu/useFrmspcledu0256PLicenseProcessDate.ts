// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioSunapGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioProc {
    LSGUBUN: string;
    LSLHSEQ: string;
    LSLLCSNO: string;
    LSPONYDATE: string;
    LSPROCDATE: string;
    LSSEQ: string;
    LSPMMGNO: string;
    LSPMYEAR: string;
    LSPONYGUBUN: string;
}

export const useFrmspcledu0256PLicenseProcessDate = () => {
    const [ds_ioSunapGubun, setds_ioSunapGubun] = useState<Ids_ioSunapGubun[]>([]);
    const [ds_ioProc, setds_ioProc] = useState<Ids_ioProc[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioSunapGubun([]);
            setds_ioProc([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const chkPonyDate_OnClick = () => {
        console.log('chkPonyDate_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioSunapGubun,
        ds_ioProc,
        chkPonyDate_OnClick,
        lfn_End,
        lfn_Save,
    };
};