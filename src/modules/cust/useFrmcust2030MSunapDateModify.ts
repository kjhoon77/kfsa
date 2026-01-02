// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oSunapGubun {
    CD: string;
    DATA: string;
}

export interface Ids_FeeGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioPosPrintM {
    CCOURSECD: string;
    CCOURSENM: string;
    CGTMGNO: string;
    CNO: string;
    CREGCD: string;
    CREGNM: string;
    CSTATUSGUBUN: string;
    GTDEPTNM: string;
    PMAMT: string;
    PMBUYER: string;
    PMMGNO: string;
    PMPCGUBUN: string;
    PMPCORDERNO: string;
    PMPGMGUBUN: string;
    PMPGMGUBUNMN: string;
    PMPGMID: string;
    PMPROCDATE: string;
    PMYEAR: string;
    SEL: string;
}

export interface Ids_ioPosPrintM_Backup {
    CCOURSECD: string;
    CCOURSENM: string;
    CGTMGNO: string;
    CNO: string;
    CREGCD: string;
    CREGNM: string;
    CSTATUSGUBUN: string;
    GTDEPTNM: string;
    PMAMT: string;
    PMBUYER: string;
    PMMGNO: string;
    PMPCGUBUN: string;
    PMPCORDERNO: string;
    PMPGMGUBUN: string;
    PMPGMGUBUNMN: string;
    PMPGMID: string;
    PMPROCDATE: string;
    PMYEAR: string;
    SEL: string;
}

export const useFrmcust2030MSunapDateModify = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_FeeGubun, setds_FeeGubun] = useState<Ids_FeeGubun[]>([]);
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_ioPosPrintM_Backup, setds_ioPosPrintM_Backup] = useState<Ids_ioPosPrintM_Backup[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oSunapGubun([]);
            setds_FeeGubun([]);
            setds_ioPosPrintM([]);
            setds_ioPosPrintM_Backup([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oCourse,
        ds_oSunapGubun,
        ds_FeeGubun,
        ds_ioPosPrintM,
        ds_ioPosPrintM_Backup,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};