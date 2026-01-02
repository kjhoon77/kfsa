// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingOrder {
    EPMGNO: string;
    TCCOURSECD: string;
    TOCOURSEGUBUN: string;
    TOEDUCONTENTS: string;
    TOENDDATE: string;
    TOENDTIME: string;
    TOEXCEPTDATE: string;
    TOINETJUBSUCNT: string;
    TOINETJUBSUYN: string;
    TOJUBSUMAXCNT: string;
    TOJUBSUSTATUS: string;
    TOLECTURENOTICE: string;
    TOMAILNOTICE: string;
    TOMGJIBUCD: string;
    TOMGNO: string;
    TOMUNJEGUBUN: string;
    TOREMARK: string;
    TOSEATCNT: string;
    TOSEATLIMITYN: string;
    TOSEATSELECTYN: string;
    TOSEXLIMITYN: string;
    TOSTARTDATE: string;
    TOSTARTTIME: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    USE_YN: string;
    EPNM: string;
    PERSONCNT: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oSearchGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCourseGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oMunjeGubun {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0015MTrainingOrderList = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oTrainingOrder, setds_oTrainingOrder] = useState<Ids_oTrainingOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [ds_oMunjeGubun, setds_oMunjeGubun] = useState<Ids_oMunjeGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oTrainingOrder([]);
            setds_oJibu([]);
            setds_oSearchGubun([]);
            setds_oCourseGubun([]);
            setds_oMunjeGubun([]);
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
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_oTrainingOrder,
        ds_oJibu,
        ds_oSearchGubun,
        ds_oCourseGubun,
        ds_oMunjeGubun,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};