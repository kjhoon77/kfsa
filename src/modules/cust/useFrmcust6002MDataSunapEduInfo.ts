// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oEduPassList {
    BBIZCD: string;
    BNM: string;
    CCOURSECD: string;
    CGTMGNO: string;
    CNO: string;
    CREGCD: string;
    CSTATUSGUBUN: string;
    EPNM: string;
    EPPASSDATE: string;
    EPPROCGTMGNO: string;
    EPREGSABUN: string;
    EPYEAR: string;
    ESGUBUN: string;
    ESSTUDENT: string;
    ESTIME: string;
    FMNM: string;
}

export interface Ids_oBizGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oEduList {
    BBIZCD: string;
    BNM: string;
    CCOURSECD: string;
    CGTMGNO: string;
    CNO: string;
    CREGCD: string;
    CSTATUSGUBUN: string;
    EPNM: string;
    EPPASSDATE: string;
    EPPERSONNM: string;
    EPPROCGTMGNO: string;
    EPREGSABUN: string;
    EPBIRTHDAY: string;
    EPYEAR: string;
    ESGUBUN: string;
    ESSTUDENT: string;
    ESTIME: string;
    BIRTHDAY: string;
    EPPERSONKEY: string;
}

export interface Ids_oMonthGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSunap {
    CANCELDATE: string;
    CFCMGNO: string;
    CFGROUPMGNO: string;
    CFGUBUN: string;
    CFGUBUNCD: string;
    CFGUBUNCDNM: string;
    CFREGNM: string;
    CFREMARK: string;
    CFREPAYREF: string;
    FEESEQ: string;
    MEMBERGUBUN: string;
    MEMBERGUBUNNM: string;
    MGGTMGNO: string;
    MGGTNM: string;
    PMMGNO: string;
    PMPCORDERNO: string;
    PMYEAR: string;
    PONYDATE: string;
    POSGTMGNO: string;
    POSGTNM: string;
    PROCDATE: string;
    PROCGTMGNO: string;
    PROCGTNM: string;
    PVINFO: string;
    REGDATE: string;
    SETLMGUBUN: string;
    SETLMGUBUNNM: string;
    SUNAPFEE: string;
    SUNAPYEAR: string;
}

export const useFrmcust6002MDataSunapEduInfo = () => {
    const [ds_oEduPassList, setds_oEduPassList] = useState<Ids_oEduPassList[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [ds_oEduList, setds_oEduList] = useState<Ids_oEduList[]>([]);
    const [ds_oMonthGubun, setds_oMonthGubun] = useState<Ids_oMonthGubun[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oEduPassList([]);
            setds_oBizGubun([]);
            setds_oEduList([]);
            setds_oMonthGubun([]);
            setds_oSunap([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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

    return {
        isLoading,
        ds_oEduPassList,
        ds_oBizGubun,
        ds_oEduList,
        ds_oMonthGubun,
        ds_oSunap,
        btnMutilSort_OnClick,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
    };
};