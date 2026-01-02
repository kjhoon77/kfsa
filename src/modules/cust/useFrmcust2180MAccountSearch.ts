// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oAccount {
    SEQ: string;
    CMGNO: string;
    CGTMGNO: string;
    CGTNM: string;
    CNO: string;
    CCOURSECD: string;
    CNICKNM: string;
    CSTATUSGUBUN: string;
    FMNM: string;
    BNM: string;
    TR_AMT: string;
    BANK_NM: string;
    IACCT_NO: string;
    INP_ST: string;
    TR_IL: string;
}

export interface Ids_oBank {
    CD: string;
    DATA: string;
}

export interface Ids_oError {
    SEQ: string;
    CMGNO: string;
    CGTMGNO: string;
    CGTNM: string;
    CNO: string;
    CCOURSECD: string;
    CNICKNM: string;
    CSTATUSGUBUN: string;
    FMNM: string;
    BNM: string;
    TR_AMT: string;
    BANK_NM: string;
    IACCT_NO: string;
    INP_ST: string;
    ER_GUBUN: string;
    ER_MSG: string;
    TR_IL: string;
}

export interface Ids_oChange {
    SEQ: string;
    CMGNO: string;
    CGTMGNO: string;
    CGTNM: string;
    CNO: string;
    CCOURSECD: string;
    CNICKNM: string;
    CSTATUSGUBUN: string;
    FMNM: string;
    BNM: string;
    TR_AMT: string;
    BANK_NM: string;
    IACCT_NO: string;
    INP_ST: string;
    CHANGEYN: string;
}

export interface Ids_oMemberFee {
    CD: string;
    DATA: string;
}

export interface Ids_oSort {
    CD: string;
    DATA: string;
}

export interface Ids_oAccountCnt {
    SEQ: string;
    CMGNO: string;
    CGTMGNO: string;
    CGTNM: string;
    CNO: string;
    CCOURSECD: string;
    CNICKNM: string;
    CSTATUSGUBUN: string;
    FMNM: string;
    BNM: string;
    TR_AMT: string;
    BANK_NM: string;
    IACCT_NO: string;
    INP_ST: string;
    TR_IL: string;
}

export const useFrmcust2180MAccountSearch = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oAccount, setds_oAccount] = useState<Ids_oAccount[]>([]);
    const [ds_oBank, setds_oBank] = useState<Ids_oBank[]>([]);
    const [ds_oError, setds_oError] = useState<Ids_oError[]>([]);
    const [ds_oChange, setds_oChange] = useState<Ids_oChange[]>([]);
    const [ds_oMemberFee, setds_oMemberFee] = useState<Ids_oMemberFee[]>([]);
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oAccountCnt, setds_oAccountCnt] = useState<Ids_oAccountCnt[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oAccount([]);
            setds_oBank([]);
            setds_oError([]);
            setds_oChange([]);
            setds_oMemberFee([]);
            setds_oSort([]);
            setds_oAccountCnt([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oAccount,
        ds_oBank,
        ds_oError,
        ds_oChange,
        ds_oMemberFee,
        ds_oSort,
        ds_oAccountCnt,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};