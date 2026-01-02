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

export interface Ids_oSort {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingPayAmount {
    BIRTHDAY: string;
    MUNJEGUBUN: string;
    PNM: string;
    SUNAPGUBUN: string;
    TCCOURSENM: string;
    TJPERSONNM: string;
    TJRESIDENTNO: string;
    TOHJUBSUNO: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TSPROCDATE: string;
    TSREPAYAMOUNT: string;
    TSSUNAPAMOUNT: string;
    GTTEAMNM: string;
    SUNAPMETHOD: string;
}

export interface Ids_Gubun {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0180MTrainingPayAmountDaySunapStatistics = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oTrainingPayAmount, setds_oTrainingPayAmount] = useState<Ids_oTrainingPayAmount[]>([]);
    const [ds_Gubun, setds_Gubun] = useState<Ids_Gubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oSort([]);
            setds_oTrainingPayAmount([]);
            setds_Gubun([]);
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
        ds_oJibu,
        ds_oSort,
        ds_oTrainingPayAmount,
        ds_Gubun,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};