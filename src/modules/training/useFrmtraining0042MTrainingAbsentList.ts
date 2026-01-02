// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oTrainingAbsent {
    ABSENTDATE: string;
    ABSENTDAY: string;
    ADAY1: string;
    ADAY2: string;
    ADAY3: string;
    ADAY4: string;
    ADAY5: string;
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

export interface Ids_oTrainingAbsentTemp {
    ABSENTDATE: string;
    ABSENTDAY: string;
    ADAY1: string;
    ADAY2: string;
    ADAY3: string;
    ADAY4: string;
    ADAY5: string;
    ADDR: string;
    BIRTHDAY: string;
    JJIBUNM: string;
    TCCOURSECD: string;
    TCCOURSENM: string;
    TJADDR1: string;
    TJADDR2: string;
    TJPERSONNM: string;
    TJPERSONKEY: string;
    TOENDDATE: string;
    TOHJUBSUNO: string;
    TOMGJIBUCD: string;
    TOSTARTDATE: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
}

export const useFrmtraining0042MTrainingAbsentList = () => {
    const [ds_oTrainingAbsent, setds_oTrainingAbsent] = useState<Ids_oTrainingAbsent[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oTrainingAbsentTemp, setds_oTrainingAbsentTemp] = useState<Ids_oTrainingAbsentTemp[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingAbsent([]);
            setds_oSearchGubun([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oTrainingAbsentTemp([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMunjeSave_OnClick = () => {
        console.log('btnMunjeSave_OnClick clicked');
    };
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
    const lfn_PrintJubsuList = () => {
        console.log('lfn_PrintJubsuList clicked');
    };
    const lfn_PrintJubsuListBoard = () => {
        console.log('lfn_PrintJubsuListBoard clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oTrainingAbsent,
        ds_oSearchGubun,
        ds_oCourse,
        ds_oJibu,
        ds_oTrainingAbsentTemp,
        btnMunjeSave_OnClick,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintJubsuList,
        lfn_PrintJubsuListBoard,
        lfn_Search,
    };
};