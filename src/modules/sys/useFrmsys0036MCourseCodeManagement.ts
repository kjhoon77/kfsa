// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioCourseCode {
    CREATE_DATE: string;
    CREATE_ID: string;
    MODIFY_DATE: string;
    MODIFY_ID: string;
    TCCOURSECD: string;
    TCCOURSEGUBUN: string;
    TCCOURSENICK: string;
    TCCOURSENM: string;
    TCMUNJEGUBUN: string;
    TCORDERSEQ: string;
    TCREQUIREDDOCS: string;
    USE_YN: string;
    TCSEARCHGUBUN: string;
    TCTERMTIME: string;
}

export interface Ids_oCourseGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oMunjeGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSearchGubun {
    CD: string;
    DATA: string;
}

export const useFrmsys0036MCourseCodeManagement = () => {
    const [ds_ioCourseCode, setds_ioCourseCode] = useState<Ids_ioCourseCode[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [ds_oMunjeGubun, setds_oMunjeGubun] = useState<Ids_oMunjeGubun[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioCourseCode([]);
            setds_oCourseGubun([]);
            setds_oMunjeGubun([]);
            setds_oSearchGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
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
        ds_ioCourseCode,
        ds_oCourseGubun,
        ds_oMunjeGubun,
        ds_oSearchGubun,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Excel,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};