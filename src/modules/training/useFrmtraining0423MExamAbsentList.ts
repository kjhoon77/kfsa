// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oExamAbsent {
    ADDR: string;
    BIRTHDAY: string;
    JJIBUNM: string;
    TCCOURSECD: string;
    TCCOURSENM: string;
    EJADDR1: string;
    EJADDR2: string;
    EJPERSONNM: string;
    EJBIRTHDAY: string;
    EOEXAMDATE: string;
    EOHJUBSUNO: string;
    EOMGJIBUCD: string;
    EOTRAININGORDER: string;
    EOYEAR: string;
    EAGUBUN: string;
    EA1CHASU: string;
    EA2CHASU: string;
    ABSENTCHASUGUBUN: string;
}

export interface Ids_oSearchGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oExamAbsentTemp {
    ADDR: string;
    BIRTHDAY: string;
    JJIBUNM: string;
    TCCOURSECD: string;
    TCCOURSENM: string;
    EJADDR1: string;
    EJADDR2: string;
    EJPERSONNM: string;
    EJBIRTHDAY: string;
    EOEXAMDATE: string;
    EOHJUBSUNO: string;
    EOMGJIBUCD: string;
    EOEXAMORDER: string;
    EOYEAR: string;
    EAGUBUN: string;
    EA1CHASU: string;
    EA2CHASU: string;
    ABSENTCHASUGUBUN: string;
}

export interface Ids_oJubsuChasuGubun {
    CD: string;
    DATA: string;
}

export const useFrmtraining0423MExamAbsentList = () => {
    const [ds_oExamAbsent, setds_oExamAbsent] = useState<Ids_oExamAbsent[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oExamAbsentTemp, setds_oExamAbsentTemp] = useState<Ids_oExamAbsentTemp[]>([]);
    const [ds_oJubsuChasuGubun, setds_oJubsuChasuGubun] = useState<Ids_oJubsuChasuGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oExamAbsent([]);
            setds_oSearchGubun([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oExamAbsentTemp([]);
            setds_oJubsuChasuGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

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
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintJubsuList = () => {
        console.log('lfn_PrintJubsuList clicked');
    };
    const lfn_PrintJubsuListBoard = () => {
        console.log('lfn_PrintJubsuListBoard clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oExamAbsent,
        ds_oSearchGubun,
        ds_oCourse,
        ds_oJibu,
        ds_oExamAbsentTemp,
        ds_oJubsuChasuGubun,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_End,
        lfn_Init,
        lfn_Print,
        lfn_PrintJubsuList,
        lfn_PrintJubsuListBoard,
        lfn_PrintScreen,
        lfn_Search,
    };
};