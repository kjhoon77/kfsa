// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioTrainingEvaluation {
    TJADDR1: string;
    TJADDR2: string;
    TJMGNO: string;
    TJPERSONNM: string;
    PERSONKEY: string;
    TOENDDATE: string;
    TOHJUBSUNO: string;
    TOSTARTDATE: string;
    BIRTHDAY: string;
    TOMGJIBUCD: string;
    TOYEAR: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    SEL: string;
    TOMUNJEGUBUN: string;
    RESULT: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingJubsuCnt {
    TJMGNO: string;
    TOTCCOURSECD: string;
    TOMUNJEGUBUN: string;
}

export const useFrmtraining0146MTrainingEvaluationManagement = () => {
    const [ds_ioTrainingEvaluation, setds_ioTrainingEvaluation] = useState<Ids_ioTrainingEvaluation[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oTrainingJubsuCnt, setds_oTrainingJubsuCnt] = useState<Ids_oTrainingJubsuCnt[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingEvaluation([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oTrainingJubsuCnt([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPassCancel_OnClick = () => {
        console.log('btnPassCancel_OnClick clicked');
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
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_SaveEvaluation = () => {
        console.log('lfn_SaveEvaluation clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioTrainingEvaluation,
        ds_oCourse,
        ds_oJibu,
        ds_oTrainingJubsuCnt,
        btnMutilSort_OnClick,
        btnPassCancel_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_SaveEvaluation,
        lfn_Search,
    };
};