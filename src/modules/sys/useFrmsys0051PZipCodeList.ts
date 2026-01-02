// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oZipCode {
    CREATE_DATE: string;
    CREATE_ID: string;
    JJIBUCD: string;
    MODIFY_DATE: string;
    MODIFY_ID: string;
    ZBUNJI: string;
    SIKUDONG: string;
    ZHO: string;
    ZREGIONCD: string;
    ZSEQ: string;
    ZZIPCD: string;
}

export const useFrmsys0051PZipCodeList = () => {
    const [ds_oZipCode, setds_oZipCode] = useState<Ids_oZipCode[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oZipCode([]);
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
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oZipCode,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};