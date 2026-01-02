// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioMemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioOrder {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_oList {
    MGNO: string;
    BNM: string;
    CFIREMGNO: string;
    FMNM: string;
    FMBIRTHDAY: string;
    CREGISTERYYMM: string;
    CFEEYYMM: string;
    FMHSTARTDATE: string;
    FMHENDDATE: string;
    FMHADDR: string;
    FMHHPTEL: string;
    EMAIL: string;
    FMHTEL: string;
    BIRTHDAY: string;
    FMPERSONKEY: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oState {
    CREGCD: string;
    RCNM: string;
    CNT: string;
    CFIREMGNO1: string;
    CFIREMGNO2: string;
}

export const useFrmcust0015PSobangInfo = () => {
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioYn, setds_ioYn] = useState<Ids_ioYn[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oList, setds_oList] = useState<Ids_oList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oState, setds_oState] = useState<Ids_oState[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioMemberGubun([]);
            setds_ioOrder([]);
            setds_ioCourseYn([]);
            setds_ioChoiceYn([]);
            setds_ioYn([]);
            setds_ioCourse([]);
            setds_oRegion([]);
            setds_oList([]);
            setds_oJibu([]);
            setds_oState([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintList = () => {
        console.log('lfn_PrintList clicked');
    };
    const lfn_PrintState = () => {
        console.log('lfn_PrintState clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_ToExcel = () => {
        console.log('lfn_ToExcel clicked');
    };

    return {
        isLoading,
        ds_ioMemberGubun,
        ds_ioOrder,
        ds_ioCourseYn,
        ds_ioChoiceYn,
        ds_ioYn,
        ds_ioCourse,
        ds_oRegion,
        ds_oList,
        ds_oJibu,
        ds_oState,
        lfn_End,
        lfn_Print,
        lfn_PrintList,
        lfn_PrintState,
        lfn_Search,
        lfn_ToExcel,
    };
};