// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingRepay {
    BIRTHDAY: string;
    GTTEAMNM: string;
    PNM: string;
    SUNAPGUBUN: string;
    TJPERSONNM: string;
    TJRESIDENTNO: string;
    TOHJUBSUNO: string;
    TOMUNJEGUBUN: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TSPROCAMOUNT: string;
    TSPROCDATE: string;
    EDU: string;
    TCCOURSENM: string;
    GUBUN: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oSort {
    CD: string;
    DATA: string;
}

export interface Ids_oSunapGubun {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0210MTrainingRepayList = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oTrainingRepay, setds_oTrainingRepay] = useState<Ids_oTrainingRepay[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oTrainingRepay([]);
            setds_oJibu([]);
            setds_oSort([]);
            setds_oSunapGubun([]);
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
        ds_oTrainingRepay,
        ds_oJibu,
        ds_oSort,
        ds_oSunapGubun,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};