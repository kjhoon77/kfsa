// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oPassYn {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oRepayYn {
    CD: string;
    DATA: string;
}

export interface Ids_oExamSpecialPassList {
    BIRTHDAY: string;
    EJMGNO: string;
    PASSYN: string;
    EJPERSONNM: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOHJUBSUNO: string;
    EOMGNO: string;
    EOTCCOURSECD: string;
    EOYEAR: string;
    GTDEPTNM: string;
    TCCOURSENM: string;
    JUBSUGUBUN: string;
    ERSEQ: string;
    ER1CHASU1SUBJECTSCORE: string;
    ER1CHASU2SUBJECTSCORE: string;
    ER1CHASURANK: string;
    ER2CHASU1SUBJECTSCORE: string;
    ER2CHASU2SUBJECTSCORE: string;
    ER2CHASURANK: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioJubsuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oJubsuYn {
    CD: string;
    DATA: string;
}

export interface Ids_oAbsentGubun {
    CD: string;
    DATA: string;
}

export const useFrmtraining0631MExamSpecialPassList = () => {
    const [ds_oPassYn, setds_oPassYn] = useState<Ids_oPassYn[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRepayYn, setds_oRepayYn] = useState<Ids_oRepayYn[]>([]);
    const [ds_oExamSpecialPassList, setds_oExamSpecialPassList] = useState<Ids_oExamSpecialPassList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioJubsuGubun, setds_ioJubsuGubun] = useState<Ids_ioJubsuGubun[]>([]);
    const [ds_oJubsuYn, setds_oJubsuYn] = useState<Ids_oJubsuYn[]>([]);
    const [ds_oAbsentGubun, setds_oAbsentGubun] = useState<Ids_oAbsentGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPassYn([]);
            setds_oCourse([]);
            setds_oRepayYn([]);
            setds_oExamSpecialPassList([]);
            setds_oJibu([]);
            setds_ioJubsuGubun([]);
            setds_oJubsuYn([]);
            setds_oAbsentGubun([]);
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
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oPassYn,
        ds_oCourse,
        ds_oRepayYn,
        ds_oExamSpecialPassList,
        ds_oJibu,
        ds_ioJubsuGubun,
        ds_oJubsuYn,
        ds_oAbsentGubun,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};