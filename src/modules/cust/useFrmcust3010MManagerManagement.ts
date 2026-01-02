// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oManagerList {
    CGTMGNO: string;
    CNO: string;
    CREGCD: string;
    CCOURSECD: string;
    CSTATUSGUBUN: string;
    FMNM: string;
    FMRESIDENTNO: string;
    BBIZCD: string;
    BNM: string;
    FMHSTARTDATE: string;
    FMHENDDATE: string;
    FMHMODSABUN: string;
    FMHREGSABUN: string;
    FMHREGDATE: string;
    FMHMODDATE: string;
    FMHADDR: string;
    FMHHPTEL: string;
    EMAILID: string;
    RCNM: string;
}

export interface Ids_oBizGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oManagerPassList {
    BBIZCD: string;
    BNM: string;
    CCOURSECD: string;
    CGTMGNO: string;
    CNO: string;
    CREGCD: string;
    CSTATUSGUBUN: string;
    EPPASSDATE: string;
    EPPERSONNM: string;
    EPPROCGTMGNO: string;
    EPREGSABUN: string;
    EPYEAR: string;
    ESGUBUN: string;
    ESSTUDENT: string;
    ESTIME: string;
    EPRESIDENTNO: string;
    RCNM: string;
}

export const useFrmcust3010MManagerManagement = () => {
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [ds_oManagerPassList, setds_oManagerPassList] = useState<Ids_oManagerPassList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oManagerList([]);
            setds_oBizGubun([]);
            setds_oManagerPassList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const btn_Cancel = () => {
        console.log('btn_Cancel clicked');
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
        ds_oManagerList,
        ds_oBizGubun,
        ds_oManagerPassList,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        btn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};