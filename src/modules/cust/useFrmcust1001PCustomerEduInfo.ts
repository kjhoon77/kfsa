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

export const useFrmcust1001PCustomerEduInfo = () => {
    const [ds_oEduPassList, setds_oEduPassList] = useState<Ids_oEduPassList[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [ds_oEduList, setds_oEduList] = useState<Ids_oEduList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oEduPassList([]);
            setds_oBizGubun([]);
            setds_oEduList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort2_OnClick = () => {
        console.log('btnMutilSort2_OnClick clicked');
    };
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
        btnMutilSort2_OnClick,
        btnMutilSort_OnClick,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
    };
};