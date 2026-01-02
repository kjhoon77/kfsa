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

export interface Ids_oTrainingPassSumOrderStatistics {
    INCNT: string;
    INOUTCNT: string;
    JUBSUCNT: string;
    MINABAMT: string;
    MUNJE: string;
    OUTCNT: string;
    PASSCNT: string;
    REPAYCNT: string;
    SUNABCNT: string;
    TCCOURSENM: string;
    TOTRAININGORDER: string;
    TPPASSDATE: string;
}

export interface Ids_oCourseGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oOnlineGubun {
    CD: string;
    DATA: string;
}

export const useFrmtraining0150MTrainingPassSumOrderStatistics = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oTrainingPassSumOrderStatistics, setds_oTrainingPassSumOrderStatistics] = useState<Ids_oTrainingPassSumOrderStatistics[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [ds_oOnlineGubun, setds_oOnlineGubun] = useState<Ids_oOnlineGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oTrainingPassSumOrderStatistics([]);
            setds_oCourseGubun([]);
            setds_oOnlineGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
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
        ds_oTrainingPassSumOrderStatistics,
        ds_oCourseGubun,
        ds_oOnlineGubun,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};