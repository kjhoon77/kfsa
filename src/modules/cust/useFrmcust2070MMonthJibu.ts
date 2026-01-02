// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioMonth {
    CD: string;
    DATA: string;
}

export interface Ids_ioYear {
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

export interface Ids_iCusFeeChk {
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

export const useFrmcust2070MMonthJibu = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioMonth, setds_ioMonth] = useState<Ids_ioMonth[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_ioCusFeeChk, setds_ioCusFeeChk] = useState<Ids_ioCusFeeChk[]>([]);
    const [ds_iCusFeeChk, setds_iCusFeeChk] = useState<Ids_iCusFeeChk[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_ioMonth([]);
            setds_ioYear([]);
            setds_ioCusFeeChk([]);
            setds_iCusFeeChk([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnProcCancel_OnClick = () => {
        console.log('btnProcCancel_OnClick clicked');
    };
    const btnProc_OnClick = () => {
        console.log('btnProc_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioJibu,
        ds_ioMonth,
        ds_ioYear,
        ds_ioCusFeeChk,
        ds_iCusFeeChk,
        btnProcCancel_OnClick,
        btnProc_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_Print,
        lfn_Search,
    };
};