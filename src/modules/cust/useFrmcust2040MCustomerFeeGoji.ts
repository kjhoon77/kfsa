// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioReport {
    CD: string;
    DATA: string;
}

export interface Ids_ioYear {
    CD: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioMemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioOrder {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioMemberGubun_0 {
    CD: string;
    DATA: string;
}

export interface Ids_ioMemberGubun_1 {
    CD: string;
    DATA: string;
}

export interface Ids_ioMemberGubun_1_0 {
    CD: string;
    DATA: string;
}

export interface Ids_ioJibu_0 {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_ioUpDown {
    CD: string;
    DATA: string;
}

export interface Ids_ioMCustomerFeeGoji {
}

export interface Ids_ioApply {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn_Num {
    CD: string;
    DATA: string;
}

export const useFrmcust2040MCustomerFeeGoji = () => {
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioMemberGubun_0, setds_ioMemberGubun_0] = useState<Ids_ioMemberGubun_0[]>([]);
    const [ds_ioMemberGubun_1, setds_ioMemberGubun_1] = useState<Ids_ioMemberGubun_1[]>([]);
    const [ds_ioMemberGubun_1_0, setds_ioMemberGubun_1_0] = useState<Ids_ioMemberGubun_1_0[]>([]);
    const [ds_ioJibu_0, setds_ioJibu_0] = useState<Ids_ioJibu_0[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_ioUpDown, setds_ioUpDown] = useState<Ids_ioUpDown[]>([]);
    const [ds_ioMCustomerFeeGoji, setds_ioMCustomerFeeGoji] = useState<Ids_ioMCustomerFeeGoji[]>([]);
    const [ds_ioApply, setds_ioApply] = useState<Ids_ioApply[]>([]);
    const [ds_ioChoiceYn_Num, setds_ioChoiceYn_Num] = useState<Ids_ioChoiceYn_Num[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioReport([]);
            setds_ioYear([]);
            setds_ioChoiceYn([]);
            setds_ioMemberGubun([]);
            setds_oCourse([]);
            setds_ioOrder([]);
            setds_oJibu([]);
            setds_ioMemberGubun_0([]);
            setds_ioMemberGubun_1([]);
            setds_ioMemberGubun_1_0([]);
            setds_ioJibu_0([]);
            setds_ioCourseYn([]);
            setds_oRegion([]);
            setds_ioUpDown([]);
            setds_ioMCustomerFeeGoji([]);
            setds_ioApply([]);
            setds_ioChoiceYn_Num([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_ioReport,
        ds_ioYear,
        ds_ioChoiceYn,
        ds_ioMemberGubun,
        ds_oCourse,
        ds_ioOrder,
        ds_oJibu,
        ds_ioMemberGubun_0,
        ds_ioMemberGubun_1,
        ds_ioMemberGubun_1_0,
        ds_ioJibu_0,
        ds_ioCourseYn,
        ds_oRegion,
        ds_ioUpDown,
        ds_ioMCustomerFeeGoji,
        ds_ioApply,
        ds_ioChoiceYn_Num,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_localExcel,
    };
};