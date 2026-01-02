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

export interface Ids_ioTrainingPass {
    TOMGGTMGNO: string;
    ERPASSYN: string;
    JUBSUADDR: string;
    PPASSDATE_A: string;
    PPASSNO: string;
    TOTCCOURSECD: string;
    TJMGNO: string;
    TJPERSONNM: string;
    TJRESIDENTNO_SANG: string;
    TJRESIDENTNO: string;
    TJZIPCD: string;
    TOHJUBSUNO: string;
    TOMGNO: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPMGNO: string;
    TOEXAMORDER: string;
    EDUCATIONTIME: string;
    TCCOURSENM: string;
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

export interface Ids_oPassGubun {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0280MPassDiplomaPrint = () => {
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioTrainingPass, setds_ioTrainingPass] = useState<Ids_ioTrainingPass[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioExamCheatReport, setds_ioExamCheatReport] = useState<Ids_ioExamCheatReport[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioReport2, setds_ioReport2] = useState<Ids_ioReport2[]>([]);
    const [ds_oPassGubun, setds_oPassGubun] = useState<Ids_oPassGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSearchGubun([]);
            setds_oCourse([]);
            setds_ioTrainingPass([]);
            setds_oJibu([]);
            setds_ioExamCheatReport([]);
            setds_ioReport([]);
            setds_ioReport2([]);
            setds_oPassGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAttend_OnClick = () => {
        console.log('btnAttend_OnClick clicked');
    };
    const btnMolPass_OnClick = () => {
        console.log('btnMolPass_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPassList_OnClick = () => {
        console.log('btnPassList_OnClick clicked');
    };
    const btnPassPrint = () => {
        console.log('btnPassPrint clicked');
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
        ds_ioTrainingPass,
        ds_oJibu,
        ds_ioExamCheatReport,
        ds_ioReport,
        ds_ioReport2,
        ds_oPassGubun,
        btnAttend_OnClick,
        btnMolPass_OnClick,
        btnMutilSort_OnClick,
        btnPassList_OnClick,
        btnPassPrint,
        btnPass_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
        lfn_localExcel,
    };
};