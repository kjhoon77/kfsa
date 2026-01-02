// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingJubsu {
    AFTERJIBUCD: string;
    AFTERJIBUNICK: string;
    AFTERJIBUNM: string;
    AFTERTRAININGORDER: string;
    BIRTHDAY: string;
    EPMGNO: string;
    JJIBUNICK: string;
    JJIBUNM: string;
    PPERSONNM: string;
    PSABUN: string;
    TCCOURSECD: string;
    TCCOURSENM: string;
    TJPERSONNM: string;
    TJBIRTHDAY: string;
    TOCOURSEGUBUN: string;
    TOENDDATE: string;
    TOHAFTERJUBSUNO: string;
    TOHAFTERMGNO: string;
    TOHJUBSUGUBUN: string;
    TOHJUBSUNO: string;
    TOHLASTGUBUN: string;
    TOHPROCDATE: string;
    TOHSEQ: string;
    TOMGJIBUCD: string;
    TOMGNO: string;
    TOMUNJEGUBUN: string;
    TOSTARTDATE: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPMGNO: string;
    JUBSUNO: string;
    AFTERJUBSUNO: string;
    EDU: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oSort {
    CD: string;
    DATA: string;
}

export const useFrmtraining0220MTrainingOrderChangeList = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oTrainingJubsu, setds_oTrainingJubsu] = useState<Ids_oTrainingJubsu[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oTrainingJubsu([]);
            setds_oJibu([]);
            setds_oSort([]);
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
        ds_oTrainingJubsu,
        ds_oJibu,
        ds_oSort,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};