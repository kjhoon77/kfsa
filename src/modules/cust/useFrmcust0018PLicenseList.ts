// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oLicenseList {
    ADDR: string;
    LHPTEL: string;
    LLCSNO: string;
    LPERSONNM: string;
    LBIRTHDAY: string;
    LTEL: string;
    TPNM: string;
    PERSONKEY: string;
    BIRTHDAY: string;
}

export const useFrmcust0018PLicenseList = () => {
    const [ds_oLicenseList, setds_oLicenseList] = useState<Ids_oLicenseList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oLicenseList([]);
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
        ds_oLicenseList,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};