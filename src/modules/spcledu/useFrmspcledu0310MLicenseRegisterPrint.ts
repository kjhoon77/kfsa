// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oSearchGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioLicenseRsendSend {
    ADDR: string;
    CCCDNM: string;
    FILEFULLPATH: string;
    LHPERSONNM: string;
    LLCSNO: string;
    PRTDATE: string;
    PRTDATE1: string;
    RESIDENT: string;
    SEX: string;
    USEGUBUN: string;
    RsendSend: string;
    LicenseNo: string;
    LRESIDENTNO: string;
    LPERSONNM: string;
    LHPRTDATE1: string;
    LICENSEDATE2: string;
    TJRESIDENTNO_SANG: string;
    ImagePath: string;
    ListGubun: string;
    LicenseNo_DEFAULT: string;
    LICENSENO_A: string;
    LLCSNO2: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioExamCheatReport {
}

export interface Ids_ioReport {
}

export interface Ids_ioReport2 {
}

export interface Ids_oWorkGubun {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0310MLicenseRegisterPrint = () => {
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioLicenseRsendSend, setds_ioLicenseRsendSend] = useState<Ids_ioLicenseRsendSend[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioExamCheatReport, setds_ioExamCheatReport] = useState<Ids_ioExamCheatReport[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioReport2, setds_ioReport2] = useState<Ids_ioReport2[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSearchGubun([]);
            setds_oCourse([]);
            setds_ioLicenseRsendSend([]);
            setds_oJibu([]);
            setds_ioExamCheatReport([]);
            setds_ioReport([]);
            setds_ioReport2([]);
            setds_oWorkGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPass_OnClick = () => {
        console.log('btnPass_OnClick clicked');
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
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_oSearchGubun,
        ds_oCourse,
        ds_ioLicenseRsendSend,
        ds_oJibu,
        ds_ioExamCheatReport,
        ds_ioReport,
        ds_ioReport2,
        ds_oWorkGubun,
        btnMutilSort_OnClick,
        btnPass_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
        lfn_localExcel,
    };
};