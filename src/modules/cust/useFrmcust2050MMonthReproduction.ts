// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_iCusFeeChk {
    CD: string;
    DATA: string;
}

export interface Ids_iReprodection {
    STARTDATE: string;
    PROCDATE: string;
    GTMGNO: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCusFeeChk {
    CFCCHKGUBUN: string;
    CFCCLOSEGUBUN: string;
    CFCGTMGNO: string;
    CFCYEAR: string;
    CFCMONTH: string;
}

export const useFrmcust2050MMonthReproduction = () => {
    const [ds_iCusFeeChk, setds_iCusFeeChk] = useState<Ids_iCusFeeChk[]>([]);
    const [ds_iReprodection, setds_iReprodection] = useState<Ids_iReprodection[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCusFeeChk, setds_oCusFeeChk] = useState<Ids_oCusFeeChk[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_iCusFeeChk([]);
            setds_iReprodection([]);
            setds_oJibu([]);
            setds_oCusFeeChk([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_iCusFeeChk,
        ds_iReprodection,
        ds_oJibu,
        ds_oCusFeeChk,
        lfn_End,
        lfn_Save,
    };
};