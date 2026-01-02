// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioExamJubsuList {
    CREATE_ID: string;
    EJADDR1: string;
    EJHPROCDATE: string;
    EJHSTATUSCD: string;
    EJLASTEXAMSEQ: string;
    EJMGNO: string;
    EOEXAMORDER: string;
    EOHEXAMSEATNO: string;
    EOHJUBSUNO: string;
    EOMGNO: string;
    EOYEAR: string;
    EOMGGTMGNO: string;
    ESFEE: string;
    JUBSUADDR: string;
    EOTCCOURSECD: string;
    TJRESIDENTNO_SANG: string;
    TPMGNO: string;
    TPPERSONNM: string;
    sortEOHEXAMSEATNO: string;
    sortTPPERSONNM: string;
    sortEOHJUBSUNO: string;
    PNM: string;
    EOHPROCDATE_A: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oSort {
    CD: string;
    DATA: string;
}

export interface Ids_oSunab {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0418MExamAttendanceRegisterPrint = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioExamJubsuList, setds_ioExamJubsuList] = useState<Ids_ioExamJubsuList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oSunab, setds_oSunab] = useState<Ids_oSunab[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_ioExamJubsuList([]);
            setds_oJibu([]);
            setds_oSort([]);
            setds_oSunab([]);
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
        ds_ioExamJubsuList,
        ds_oJibu,
        ds_oSort,
        ds_oSunab,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
        lfn_localExcel,
    };
};