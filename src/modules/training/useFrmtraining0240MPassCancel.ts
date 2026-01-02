// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioTrainingPassCancel {
    SEL: string;
    TOMGGTMGNO: string;
    TJADDR1: string;
    PCANCELREASON: string;
    SUMADAY: string;
    TOTCCOURSECD: string;
    TJADDR2: string;
    TJMGNO: string;
    TJPASSYN: string;
    TJPERSONNM: string;
    TJBIRTHDAY_SANG: string;
    TOENDDATE: string;
    TOHJUBSUNO: string;
    TOMGNO: string;
    TOSTARTDATE: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPMGNO: string;
}

export interface Ids_oExamDateGubun {
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

export interface Ids_ioTrainingPassCancel_Group {
    EPMGJIBUCD: string;
    PASSSUM: string;
    PPASSDATE_A: string;
    TCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
}

export interface Ids_TrainingPassYN {
    CD: string;
    DATA: string;
}

export const useFrmtraining0240MPassCancel = () => {
    const [ds_ioTrainingPassCancel, setds_ioTrainingPassCancel] = useState<Ids_ioTrainingPassCancel[]>([]);
    const [ds_oExamDateGubun, setds_oExamDateGubun] = useState<Ids_oExamDateGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioTrainingPassCancel_Group, setds_ioTrainingPassCancel_Group] = useState<Ids_ioTrainingPassCancel_Group[]>([]);
    const [ds_TrainingPassYN, setds_TrainingPassYN] = useState<Ids_TrainingPassYN[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingPassCancel([]);
            setds_oExamDateGubun([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_ioTrainingPassCancel_Group([]);
            setds_TrainingPassYN([]);
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
        ds_ioTrainingPassCancel,
        ds_oExamDateGubun,
        ds_oCourse,
        ds_oJibu,
        ds_ioTrainingPassCancel_Group,
        ds_TrainingPassYN,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        lfn_localExcel,
    };
};