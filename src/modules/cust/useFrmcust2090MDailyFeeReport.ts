// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioMemberFee {
    CD: string;
    DATA: string;
}

export interface Ids_ioGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioSunap {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oMemberfee1_1 {
    SEL: string;
    CFGUBUNCD_NAME: string;
    COURSENM: string;
    CNM: string;
    CFMEMBERGUBUN_CD: string;
    CFMEMBERGUBUN: string;
    COURSECD: string;
    CGTMGNO: string;
    SUNAB_CNT: string;
    SUNAB_AMT: string;
    SUNAB1_CNT: string;
    SUNAB1_AMT: string;
    HWANBUL_CNT: string;
    HWANBUL_AMT: string;
    HWANBUL2_CNT: string;
    HWANBUL2_AMT: string;
}

export interface Ids_oMemberfee2_1 {
    CFGUBUNCD_NAME: string;
    CFPROCDATE: string;
    CNM: string;
    CFMEMBERGUBUN: string;
    COURSECD: string;
    CGTMGNO: string;
    SUNAB_CNT: string;
    SUNAB_AMT: string;
    SUNAB1_CNT: string;
    SUNAB1_AMT: string;
    HWANBUL_CNT: string;
    HWANBUL_AMT: string;
    HWANBUL2_CNT: string;
    HWANBUL2_AMT: string;
}

export interface Ids_oMemberfee1 {
    CNM: string;
    CFMEMBERGUBUN: string;
    CCOURSECD: string;
    SUNAB_CNT: string;
    SUNAB_AMT: string;
    SUNAB1_CNT: string;
    SUNAB1_AMT: string;
    HWANBUL_CNT: string;
    HWANBUL_AMT: string;
    HWANBUL2_CNT: string;
    HWANBUL2_AMT: string;
}

export interface Ids_oMemberfee2 {
}

export interface Ids_oMemberfee3 {
    CFPROCDATE: string;
    CGTMGNO: string;
    GTDEPTNM: string;
    CREGCD: string;
    CCOURSECD: string;
    CMGNO: string;
    BNM: string;
    CFGUBUN: string;
    CFGROUPMGNO: string;
    CFSUNAPYEAR: string;
    CNM: string;
    SUNAB_MONEY: string;
    REPAY_MONEY: string;
    CFSUNAPHALF: string;
    CFCANCELDATE: string;
    CFREMARK: string;
    CNO_BUNHO: string;
}

export interface Ids_PrintGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust2090MDailyFeeReport = () => {
    const [ds_ioMemberFee, setds_ioMemberFee] = useState<Ids_ioMemberFee[]>([]);
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_ioSunap, setds_ioSunap] = useState<Ids_ioSunap[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oMemberfee1_1, setds_oMemberfee1_1] = useState<Ids_oMemberfee1_1[]>([]);
    const [ds_oMemberfee2_1, setds_oMemberfee2_1] = useState<Ids_oMemberfee2_1[]>([]);
    const [ds_oMemberfee1, setds_oMemberfee1] = useState<Ids_oMemberfee1[]>([]);
    const [ds_oMemberfee2, setds_oMemberfee2] = useState<Ids_oMemberfee2[]>([]);
    const [ds_oMemberfee3, setds_oMemberfee3] = useState<Ids_oMemberfee3[]>([]);
    const [ds_PrintGubun, setds_PrintGubun] = useState<Ids_PrintGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioMemberFee([]);
            setds_ioGubun([]);
            setds_ioSunap([]);
            setds_oJibu([]);
            setds_oMemberfee1_1([]);
            setds_oMemberfee2_1([]);
            setds_oMemberfee1([]);
            setds_oMemberfee2([]);
            setds_oMemberfee3([]);
            setds_PrintGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_ioMemberFee,
        ds_ioGubun,
        ds_ioSunap,
        ds_oJibu,
        ds_oMemberfee1_1,
        ds_oMemberfee2_1,
        ds_oMemberfee1,
        ds_oMemberfee2,
        ds_oMemberfee3,
        ds_PrintGubun,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_localExcel,
    };
};