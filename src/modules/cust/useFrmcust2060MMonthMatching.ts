// @ts-nocheck
import { useState, useEffect } from 'react';

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

export interface Ids_iCusFeeChk {
    CFCCHKGUBUN: string;
    CFCCLOSEGUBUN: string;
    CFCGTMGNO: string;
    CFCYEAR: string;
    CFCMONTH: string;
}

export interface Ids_ioYear {
    CD: string;
    DATA: string;
}

export interface Ids_ioMonth {
    CD: string;
    DATA: string;
}

export interface Ids_ioCusFeeChk {
    CFCCHKGUBUN: string;
    CFCCLOSEGUBUN: string;
    CFCDATE: string;
    CFCGTMGNO: string;
    CFCMONTH: string;
    CFCSABUN: string;
    CFCYEAR: string;
    GTDEPTNM: string;
    SEL: string;
}

export const useFrmcust2060MMonthMatching = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCusFeeChk, setds_oCusFeeChk] = useState<Ids_oCusFeeChk[]>([]);
    const [ds_iCusFeeChk, setds_iCusFeeChk] = useState<Ids_iCusFeeChk[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_ioMonth, setds_ioMonth] = useState<Ids_ioMonth[]>([]);
    const [ds_ioCusFeeChk, setds_ioCusFeeChk] = useState<Ids_ioCusFeeChk[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCusFeeChk([]);
            setds_iCusFeeChk([]);
            setds_ioYear([]);
            setds_ioMonth([]);
            setds_ioCusFeeChk([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMatched_OnClick = () => {
        console.log('btnMatched_OnClick clicked');
    };
    const btnUnmatched_OnClick = () => {
        console.log('btnUnmatched_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oCusFeeChk,
        ds_iCusFeeChk,
        ds_ioYear,
        ds_ioMonth,
        ds_ioCusFeeChk,
        btnMatched_OnClick,
        btnUnmatched_OnClick,
        lfn_End,
        lfn_Search,
    };
};