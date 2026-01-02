// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_EduPassList {
    EPPERSONNM: string;
    EPBIRTHDAY: string;
    BIRTHDAY: string;
    CGTMGNO: string;
    GTTEAMNM: string;
    GTPRTSEQ: string;
    CNO: string;
    CREGCD: string;
    RCNM: string;
    RCORDERNO: string;
    CCOURSECD: string;
    CNM: string;
    CSTATUSGUBUN: string;
    CSTATUSGUBUNNM: string;
    EPYEAR: string;
    ESGUBUN: string;
    ESSTUDENT: string;
    ESSTUDENTNM: string;
    BNM: string;
    EPPASSDATE: string;
    CNO_BUNHO: string;
    EPPERSONKEY: string;
}

export const useFrmcust1150MEduPassList = () => {
    const [ds_EduPassList, setds_EduPassList] = useState<Ids_EduPassList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_EduPassList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
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
        ds_EduPassList,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};