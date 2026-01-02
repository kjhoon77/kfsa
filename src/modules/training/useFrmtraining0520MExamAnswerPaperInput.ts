// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioExamAns {
    CCCD: string;
    CCCDNM: string;
    CCGROUPCD: string;
    CCORDERSEQ: string;
    CCREMARK: string;
    USE_YN: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oInternetJubsuStatus {
    CD: string;
    DATA: string;
}

export interface Ids_oSunapGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oType {
    CD: string;
    DATA: string;
}

export interface Ids_oUseYn {
    CD: string;
    DATA: string;
}

export interface Ids_oSearchGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oExamList {
    CD: string;
    DATA: string;
}

export interface Ids_oExamOrder {
    EOMGNO: string;
    JJIBUNICK: string;
    EOYEAR: string;
    EOTCCOURSENM: string;
    EOEXAMORDER: string;
    EOEXAMDATE: string;
    EXAMNM: string;
    TCCOURSECD: string;
}

export interface Ids_oExamRepeat {
    CD: string;
    DATA: string;
}

export const useFrmtraining0520MExamAnswerPaperInput = () => {
    const [ds_ioExamAns, setds_ioExamAns] = useState<Ids_ioExamAns[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oInternetJubsuStatus, setds_oInternetJubsuStatus] = useState<Ids_oInternetJubsuStatus[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oType, setds_oType] = useState<Ids_oType[]>([]);
    const [ds_oUseYn, setds_oUseYn] = useState<Ids_oUseYn[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oExamList, setds_oExamList] = useState<Ids_oExamList[]>([]);
    const [ds_oExamOrder, setds_oExamOrder] = useState<Ids_oExamOrder[]>([]);
    const [ds_oExamRepeat, setds_oExamRepeat] = useState<Ids_oExamRepeat[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamAns([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oInternetJubsuStatus([]);
            setds_oSunapGubun([]);
            setds_oType([]);
            setds_oUseYn([]);
            setds_oSearchGubun([]);
            setds_oExamList([]);
            setds_oExamOrder([]);
            setds_oExamRepeat([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnNext_OnClick = () => {
        console.log('btnNext_OnClick clicked');
    };
    const btnScan_OnClick = () => {
        console.log('btnScan_OnClick clicked');
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

    return {
        isLoading,
        ds_ioExamAns,
        ds_oCourse,
        ds_oJibu,
        ds_oInternetJubsuStatus,
        ds_oSunapGubun,
        ds_oType,
        ds_oUseYn,
        ds_oSearchGubun,
        ds_oExamList,
        ds_oExamOrder,
        ds_oExamRepeat,
        btnNext_OnClick,
        btnScan_OnClick,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
    };
};