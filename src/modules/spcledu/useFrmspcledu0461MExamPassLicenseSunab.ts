// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioExamJubsu {
    EJADDR1: string;
    EJADDR2: string;
    EJMGNO: string;
    EJPASSYN: string;
    EJPERSONNM: string;
    EJRESIDENTNO: string;
    EOEXAMDATE: string;
    EOHJUBSUNO: string;
    LADDR1: string;
    LADDR2: string;
    LCOMPNM: string;
    LDATAAPPROVAL: string;
    LHIIIMGSEQ: string;
    LHISSUEREASON: string;
    LHPROCGTMGNO: string;
    LHPRTDATE: string;
    LHPTEL: string;
    LISSUEDATE: string;
    LISSUEGUBUN: string;
    LLCSNO: string;
    LPERSONNM: string;
    LRESIDENTNO: string;
    LTCCOURSECD: string;
    LTEL: string;
    LTPMGNO: string;
    LTRAININGENDDATE: string;
    LTRAININGSTARTDATE: string;
    LZIPCD: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioExamInfo {
    PASS: string;
    NOEXAM: string;
    EOEXAMDATE: string;
}

export interface Ids_ioJubsuList {
    EJPASSYN: string;
    EJMGNO: string;
    EJPERSONNM: string;
    EJRESIDENTNO: string;
    EJADDR1: string;
    EJADDR2: string;
    EOHJUBSUNO: string;
}

export interface Ids_ioEjpassLicenseNotYetSunab {
}

export interface Ids_ioWorkGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport {
}

export interface Ids_ioReport2 {
}

export interface Ids_ioEarlyCnt {
}

export interface Ids_ioDateGet {
}

export const useFrmspcledu0461MExamPassLicenseSunab = () => {
    const [ds_ioExamJubsu, setds_ioExamJubsu] = useState<Ids_ioExamJubsu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioExamInfo, setds_ioExamInfo] = useState<Ids_ioExamInfo[]>([]);
    const [ds_ioJubsuList, setds_ioJubsuList] = useState<Ids_ioJubsuList[]>([]);
    const [ds_ioEjpassLicenseNotYetSunab, setds_ioEjpassLicenseNotYetSunab] = useState<Ids_ioEjpassLicenseNotYetSunab[]>([]);
    const [ds_ioWorkGubun, setds_ioWorkGubun] = useState<Ids_ioWorkGubun[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioReport2, setds_ioReport2] = useState<Ids_ioReport2[]>([]);
    const [ds_ioEarlyCnt, setds_ioEarlyCnt] = useState<Ids_ioEarlyCnt[]>([]);
    const [ds_ioDateGet, setds_ioDateGet] = useState<Ids_ioDateGet[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamJubsu([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_ioExamInfo([]);
            setds_ioJubsuList([]);
            setds_ioEjpassLicenseNotYetSunab([]);
            setds_ioWorkGubun([]);
            setds_ioReport([]);
            setds_ioReport2([]);
            setds_ioEarlyCnt([]);
            setds_ioDateGet([]);
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
        ds_ioExamJubsu,
        ds_oCourse,
        ds_oJibu,
        ds_ioExamInfo,
        ds_ioJubsuList,
        ds_ioEjpassLicenseNotYetSunab,
        ds_ioWorkGubun,
        ds_ioReport,
        ds_ioReport2,
        ds_ioEarlyCnt,
        ds_ioDateGet,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};