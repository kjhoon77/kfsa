// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oEduAbsent {
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

export interface Ids_oEduAbsentTemp {
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

export const useFrmcust1096MEduAbsentList = () => {
    const [ds_oEduAbsent, setds_oEduAbsent] = useState<Ids_oEduAbsent[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oEduAbsentTemp, setds_oEduAbsentTemp] = useState<Ids_oEduAbsentTemp[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oEduAbsent([]);
            setds_oSearchGubun([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oEduAbsentTemp([]);
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
        ds_oEduAbsent,
        ds_oSearchGubun,
        ds_oCourse,
        ds_oJibu,
        ds_oEduAbsentTemp,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintJubsuList,
        lfn_PrintJubsuListBoard,
        lfn_PrintScreen,
        lfn_Search,
    };
};