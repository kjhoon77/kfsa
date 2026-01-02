// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oAgreeList {
}

export interface Ids_oCompare {
    CD: string;
    DATA: string;
}

export interface Ids_oAgreeCnt {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_iAgreeList {
    SJIBU: string;
    SCOURSE: string;
    SFMNM: string;
    SISHP: string;
}

export const useFrmcust0210MAgreeManagement = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oAgreeList, setds_oAgreeList] = useState<Ids_oAgreeList[]>([]);
    const [ds_oCompare, setds_oCompare] = useState<Ids_oCompare[]>([]);
    const [ds_oAgreeCnt, setds_oAgreeCnt] = useState<Ids_oAgreeCnt[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_iAgreeList, setds_iAgreeList] = useState<Ids_iAgreeList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oAgreeList([]);
            setds_oCompare([]);
            setds_oAgreeCnt([]);
            setds_ioChoiceYn([]);
            setds_oRegion([]);
            setds_ioCourseYn([]);
            setds_ioCourse([]);
            setds_iAgreeList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_LocalCancel = () => {
        console.log('lfn_LocalCancel clicked');
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
        ds_oCourse,
        ds_oJibu,
        ds_oAgreeList,
        ds_oCompare,
        ds_oAgreeCnt,
        ds_ioChoiceYn,
        ds_oRegion,
        ds_ioCourseYn,
        ds_ioCourse,
        ds_iAgreeList,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_End,
        lfn_LocalCancel,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};