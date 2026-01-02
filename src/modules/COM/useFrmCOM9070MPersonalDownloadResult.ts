// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioJibu {
    DEPTCD: string;
    DEPTNM: string;
}

export interface Ids_ioMonth {
    CD: string;
    DATA: string;
}

export interface Ids_ioYear {
    CD: string;
    DATA: string;
}

export interface Ids_oDownloadChk {
    PDCCHKGUBUN: string;
    PDCCLOSEGUBUN: string;
    PDCREGDATE: string;
    PDCGTMGNO: string;
    PDCMONTH: string;
    PDCREGSABUN: string;
    PDCYEAR: string;
    SEL: string;
    PDCCHKREMARK: string;
    PNM: string;
    GTDEPTNM: string;
}

export interface Ids_iDownloadChk {
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

export const useFrmCOM9070MPersonalDownloadResult = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioMonth, setds_ioMonth] = useState<Ids_ioMonth[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_oDownloadChk, setds_oDownloadChk] = useState<Ids_oDownloadChk[]>([]);
    const [ds_iDownloadChk, setds_iDownloadChk] = useState<Ids_iDownloadChk[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_ioMonth([]);
            setds_ioYear([]);
            setds_oDownloadChk([]);
            setds_iDownloadChk([]);
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
        ds_oDownloadChk,
        ds_iDownloadChk,
        btnProcCancel_OnClick,
        btnProc_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_Search,
    };
};