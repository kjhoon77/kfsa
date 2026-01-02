// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioExamAbsent {
    EJADDR1: string;
    EJADDR2: string;
    EJMGNO: string;
    EJPERSONNM: string;
    EJBIRTHDAY: string;
    EOEXAMDATE: string;
    EOHJUBSUNO: string;
    BIRTHDAY: string;
    EOMGJIBUCD: string;
    EOYEAR: string;
    EOTCCOURSECD: string;
    EOEXAMORDER: string;
    SEL: string;
    EAGUBUN: string;
    EA1CHASU: string;
    EA2CHASU: string;
    EJCHASUGUBUN: string;
    CHASUGUBUN: string;
    EAOLDGUBUN: string;
    EAOLD1CHASU: string;
    EAOLD2CHASU: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oAbsentChasuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oExamJubsuCnt {
    TJMGNO: string;
    TOTCCOURSECD: string;
    TOMUNJEGUBUN: string;
}

export const useFrmtraining0421MExamAbsentManagement = () => {
    const [ds_ioExamAbsent, setds_ioExamAbsent] = useState<Ids_ioExamAbsent[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oAbsentChasuGubun, setds_oAbsentChasuGubun] = useState<Ids_oAbsentChasuGubun[]>([]);
    const [ds_oExamJubsuCnt, setds_oExamJubsuCnt] = useState<Ids_oExamJubsuCnt[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamAbsent([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oAbsentChasuGubun([]);
            setds_oExamJubsuCnt([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCancelAbsent_OnClick = () => {
        console.log('btnCancelAbsent_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Init = () => {
        console.log('lfn_Init clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_SaveAttendance = () => {
        console.log('lfn_SaveAttendance clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioExamAbsent,
        ds_oCourse,
        ds_oJibu,
        ds_oAbsentChasuGubun,
        ds_oExamJubsuCnt,
        btnCancelAbsent_OnClick,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_End,
        lfn_Init,
        lfn_PrintScreen,
        lfn_Save,
        lfn_SaveAttendance,
        lfn_Search,
    };
};