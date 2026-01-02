// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioLicenseList {
    ADDR: string;
    CCCDNM: string;
    GTTEAMNM: string;
    LHISSUEREASON: string;
    LHPERSONNM: string;
    LHPROCGTMGNO: string;
    LHBIRTHDAY_SANG: string;
    LLCSNO: string;
    LSPROCAMOUNT: string;
    LTCCOURSECD: string;
    PNM: string;
    PRTDATE: string;
    PRTDATE_1: string;
    LHBIRTHDAY: string;
    SEX: string;
    TCCOURSENM: string;
    USEGUBUN: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oPassGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oWorkGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oApplyGubun {
    CD: string;
    DATA: string;
}

export const useFrmtraining0362MILicAddrPrint = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioLicenseList, setds_ioLicenseList] = useState<Ids_ioLicenseList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oPassGubun, setds_oPassGubun] = useState<Ids_oPassGubun[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [ds_oApplyGubun, setds_oApplyGubun] = useState<Ids_oApplyGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_ioLicenseList([]);
            setds_oJibu([]);
            setds_oGubun([]);
            setds_oPassGubun([]);
            setds_oWorkGubun([]);
            setds_oApplyGubun([]);
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
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_ioLicenseList,
        ds_oJibu,
        ds_oGubun,
        ds_oPassGubun,
        ds_oWorkGubun,
        ds_oApplyGubun,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
        lfn_localExcel,
    };
};