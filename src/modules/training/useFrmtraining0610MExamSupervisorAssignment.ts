// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioExamSupervisor {
    EOEXAMORDER: string;
    EOMGJIBUCD: string;
    EOYEAR: string;
    EREXAMROOM: string;
    EXAMNM: string;
    SAGUBUN: string;
    SIBDAY: string;
    SICOMPNM: string;
    SIPERSONNM: string;
    TCCOURSECD: string;
    EOMGNO: string;
    SIMGNO: string;
    EOEXAMDATE: string;
}

export interface Ids_oSupervisorGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oExamOrderMgno {
}

export interface Ids_oExamSupervisorChk {
    SAEREOMGNO: string;
    SAEREXAMROOM: string;
    SAGUBUN: string;
    SASIMGNO: string;
}

export interface Ids_oModifyColumn {
    COLUMNCD: string;
    COLUMNNM: string;
}

export const useFrmtraining0610MExamSupervisorAssignment = () => {
    const [ds_ioExamSupervisor, setds_ioExamSupervisor] = useState<Ids_ioExamSupervisor[]>([]);
    const [ds_oSupervisorGubun, setds_oSupervisorGubun] = useState<Ids_oSupervisorGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oExamOrderMgno, setds_oExamOrderMgno] = useState<Ids_oExamOrderMgno[]>([]);
    const [ds_oExamSupervisorChk, setds_oExamSupervisorChk] = useState<Ids_oExamSupervisorChk[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamSupervisor([]);
            setds_oSupervisorGubun([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oExamOrderMgno([]);
            setds_oExamSupervisorChk([]);
            setds_oModifyColumn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSearchExamRoom_OnClick = () => {
        console.log('btnSearchExamRoom_OnClick clicked');
    };
    const btnSearchExamSupervisor_OnClick = () => {
        console.log('btnSearchExamSupervisor_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
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
    const lfn_Reset = () => {
        console.log('lfn_Reset clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioExamSupervisor,
        ds_oSupervisorGubun,
        ds_oJibu,
        ds_oCourse,
        ds_oExamOrderMgno,
        ds_oExamSupervisorChk,
        ds_oModifyColumn,
        btnMutilSort_OnClick,
        btnSearchExamRoom_OnClick,
        btnSearchExamSupervisor_OnClick,
        btnToExcel_OnClick,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Reset,
        lfn_Save,
        lfn_Search,
    };
};