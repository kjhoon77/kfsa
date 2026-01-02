// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioExamJubsu2Score {
    EOMGGTMGNO: string;
    GTDEPTNM: string;
    EOMGNO: string;
    TCCOURSENM: string;
    EOTCCOURSECD: string;
    EOYEAR: string;
    EOEXAMORDER: string;
    EOHJUBSUNO: string;
    EJMGNO: string;
    EJPERSONNM: string;
    EJBIRTHDAY: string;
    EJJUBSUGUBUN: string;
    EJJUBSUREASON: string;
    EJREJUBSUYN: string;
    EJCHASUGUBUN: string;
    EISITEMSCORE: string;
    ITEMCNT: string;
    SUBJECT1SCORE: string;
    SUBJECT2SCORE: string;
    EISRESULT: string;
    APLEXAMNO: string;
    EJOLDPASSYN: string;
    EOEXAMDATE: string;
    EXAMDATE: string;
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

export interface Ids_ioExcel {
    EISEOMGNO: string;
    EISAPLEXAMNO: string;
    EISPERSONNM: string;
    EISSUBJECTGUBUN: string;
    EISITEMSCORE: string;
}

export interface Ids_ioExcelCopy {
    EISEOMGNO: string;
    EISAPLEXAMNO: string;
    EISPERSONNM: string;
    EISSUBJECTGUBUN: string;
    EISITEMSCORE: string;
}

export interface Ids_ioExamResult {
    EREJMGNO: string;
    ERSEQ: string;
    ERREPEATNO: string;
    ERAPLEXAMNO: string;
    ERPASSYN: string;
    ERPASSDATE: string;
    ERSCORE1: string;
    ERSCORE2: string;
    ERRANK: string;
    EJPASSYN: string;
    ERSCORE: string;
}

export const useFrmtraining0632MExam2TimeAnswerPaperInput = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioExamJubsu2Score, setds_ioExamJubsu2Score] = useState<Ids_ioExamJubsu2Score[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oSunab, setds_oSunab] = useState<Ids_oSunab[]>([]);
    const [ds_ioExcel, setds_ioExcel] = useState<Ids_ioExcel[]>([]);
    const [ds_ioExcelCopy, setds_ioExcelCopy] = useState<Ids_ioExcelCopy[]>([]);
    const [ds_ioExamResult, setds_ioExamResult] = useState<Ids_ioExamResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_ioExamJubsu2Score([]);
            setds_oJibu([]);
            setds_oSort([]);
            setds_oSunab([]);
            setds_ioExcel([]);
            setds_ioExcelCopy([]);
            setds_ioExamResult([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
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
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_ioExamJubsu2Score,
        ds_oJibu,
        ds_oSort,
        ds_oSunab,
        ds_ioExcel,
        ds_ioExcelCopy,
        ds_ioExamResult,
        btnMutilSort_OnClick,
        lfn_Delete,
        lfn_End,
        lfn_Init,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        lfn_localExcel,
    };
};