// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oManagerList {
    BBIZCD: string;
    BNM: string;
    CCOURSECD: string;
    CGTMGNO: string;
    CNO: string;
    CREGCD: string;
    CSTATUSGUBUN: string;
    FMHENDDATE: string;
    FMHMODSABUN: string;
    FMHREGDATE: string;
    FMHREGSABUN: string;
    FMHSTARTDATE: string;
    FMNM: string;
    FMBIRTHDAY: string;
    FMPERSONKEY: string;
    BIRTHDAY: string;
}

export interface Ids_oBizGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust3020MManagerHistory = () => {
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oManagerList([]);
            setds_oBizGubun([]);
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
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        btn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};