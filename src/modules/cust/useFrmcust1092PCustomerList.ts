// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oCustStatus {
    CD: string;
    DATA: string;
}

export interface Ids_oCustUser {
    CCOURSECD: string;
    CGTMGNO: string;
    CMGNO: string;
    CNO: string;
    COVERCMGNO: string;
    CREGCD: string;
    CSTATUSGUBUN: string;
    FMNM: string;
    FMBIRTHDAY: string;
    BNM: string;
    BIRTHDAY: string;
    FMPERSONKEY: string;
}

export interface Ids_oDetailCourse {
    CD: string;
    DATA: string;
    PCD: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export const useFrmcust1092PCustomerList = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oCustStatus, setds_oCustStatus] = useState<Ids_oCustStatus[]>([]);
    const [ds_oCustUser, setds_oCustUser] = useState<Ids_oCustUser[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oCustStatus([]);
            setds_oCustUser([]);
            setds_oDetailCourse([]);
            setds_oRegion([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oCourse,
        ds_oCustStatus,
        ds_oCustUser,
        ds_oDetailCourse,
        ds_oRegion,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};