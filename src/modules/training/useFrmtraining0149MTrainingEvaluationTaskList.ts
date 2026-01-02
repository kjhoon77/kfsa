// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oTrainingEvaluation {
    ADDR: string;
    BIRTHDAY: string;
    JJIBUNM: string;
    TCCOURSECD: string;
    TCCOURSENM: string;
    TJADDR1: string;
    TJADDR2: string;
    TJPERSONNM: string;
    PERSONKEY: string;
    TOENDDATE: string;
    TOHJUBSUNO: string;
    TOMGJIBUCD: string;
    TOSTARTDATE: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    ETFILENM1: string;
    ETFILENM2: string;
    ETPATH: string;
    TJMGNO: string;
    ABSENT: string;
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

export interface Ids_oTrainingEvaluationTemp {
    ABSENTDATE: string;
    ABSENTDAY: string;
    ADDR: string;
    BIRTHDAY: string;
    JJIBUNM: string;
    TCCOURSECD: string;
    TCCOURSENM: string;
    TJADDR1: string;
    TJADDR2: string;
    TJPERSONNM: string;
    PERSONKEY: string;
    TOENDDATE: string;
    TOHJUBSUNO: string;
    TOMGJIBUCD: string;
    TOSTARTDATE: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
}

export interface Ids_oPassGubun {
    CD: string;
    DATA: string;
}

export const useFrmtraining0149MTrainingEvaluationTaskList = () => {
    const [ds_oTrainingEvaluation, setds_oTrainingEvaluation] = useState<Ids_oTrainingEvaluation[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oTrainingEvaluationTemp, setds_oTrainingEvaluationTemp] = useState<Ids_oTrainingEvaluationTemp[]>([]);
    const [ds_oPassGubun, setds_oPassGubun] = useState<Ids_oPassGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingEvaluation([]);
            setds_oSearchGubun([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oTrainingEvaluationTemp([]);
            setds_oPassGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnDownload_OnClick = () => {
        console.log('btnDownload_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPass_OnClick = () => {
        console.log('btnPass_OnClick clicked');
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
        ds_oTrainingEvaluation,
        ds_oSearchGubun,
        ds_oCourse,
        ds_oJibu,
        ds_oTrainingEvaluationTemp,
        ds_oPassGubun,
        btnDownload_OnClick,
        btnMutilSort_OnClick,
        btnPass_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};