// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioExamRoom {
    EOEXAMORDER: string;
    EOEXAMORDERGUBUN: string;
    EOMGJIBUCD: string;
    EOMGNO: string;
    EOYEAR: string;
    EPMGNO: string;
    EREXAMROOM: string;
    ERNUMTYPE: string;
    EXAMNM: string;
    JJIBUNM: string;
    TCCOURSECD: string;
    TCCOURSENM: string;
    USE_YN: string;
    ERCHASUGUBUN: string;
}

export interface Ids_oNumType {
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

export interface Ids_oExamOrderMgno {
}

export interface Ids_ioExamRoomSearch {
    EOEXAMORDER: string;
    EOEXAMORDERGUBUN: string;
    EOMGJIBUCD: string;
    EOMGNO: string;
    EOYEAR: string;
    EPMGNO: string;
    EREXAMROOM: string;
    ERNUMTYPE: string;
    EXAMNM: string;
    JJIBUNM: string;
    TCCOURSECD: string;
    TCCOURSENM: string;
    USE_YN: string;
}

export interface Ids_oModifyColumn {
    COLUMNCD: string;
    COLUMNNM: string;
}

export interface Ids_oChasuGubun {
    CD: string;
    DATA: string;
}

export const useFrmtraining0590MExamRoomManagement = () => {
    const [ds_ioExamRoom, setds_ioExamRoom] = useState<Ids_ioExamRoom[]>([]);
    const [ds_oNumType, setds_oNumType] = useState<Ids_oNumType[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oExamOrderMgno, setds_oExamOrderMgno] = useState<Ids_oExamOrderMgno[]>([]);
    const [ds_ioExamRoomSearch, setds_ioExamRoomSearch] = useState<Ids_ioExamRoomSearch[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [ds_oChasuGubun, setds_oChasuGubun] = useState<Ids_oChasuGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamRoom([]);
            setds_oNumType([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oExamOrderMgno([]);
            setds_ioExamRoomSearch([]);
            setds_oModifyColumn([]);
            setds_oChasuGubun([]);
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
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
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

    return {
        isLoading,
        ds_ioExamRoom,
        ds_oNumType,
        ds_oCourse,
        ds_oJibu,
        ds_oExamOrderMgno,
        ds_ioExamRoomSearch,
        ds_oModifyColumn,
        ds_oChasuGubun,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};