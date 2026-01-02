// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oZipCode {
    NZMGNO: string;
    NZBULDNO: string;
    NZLEGALCD: string;
    NZZIPCDE: string;
    NZSIDO: string;
    NZKU: string;
    NZDONG: string;
    NZRI: string;
    NZSAN: string;
    NZJIBUNBON: string;
    NZJIBUNBU: string;
    NZROADNM: string;
    NZNEWBONBEN: string;
    NZNEWBUBEN: string;
    NZBULDNM: string;
    NZSANGSEBULDNM: string;
}

export interface Ids_oAddr {
    CD: string;
    DATA: string;
}

export interface Ids_oKu {
    CD: string;
    DATA: string;
}

export const useFrmsys0053PNewZipCodeList = () => {
    const [ds_oZipCode, setds_oZipCode] = useState<Ids_oZipCode[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oKu, setds_oKu] = useState<Ids_oKu[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oZipCode([]);
            setds_oAddr([]);
            setds_oKu([]);
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
        ds_oAddr,
        ds_oKu,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};