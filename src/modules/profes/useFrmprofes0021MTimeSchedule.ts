// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oTimeSchedule {
    LUNCHTIME: string;
    TOTALHOUR: string;
    TSENDTIME: string;
    TSGEMGNO: string;
    TSHOUR: string;
    TSREMARK: string;
    TSSTARTTIME: string;
    TSTYPE: string;
    TSTYPESEQ: string;
    LUNCHTIMEYN: string;
    TSTYPENM: string;
    TSGUBUN: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oTimeType {
    CD: string;
    DATA: string;
    TSTYPESEQ: string;
    TSGEMGNO: string;
}

export interface Ids_oLunchYn {
    CD: string;
    DATA: string;
}

export interface Ids_iJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oTotalTime {
    CD: string;
    DATA: string;
}

export interface Ids_oLunchTime {
    CD: string;
    DATA: string;
}

export interface Ids_iTimeScheduleDetailList {
    TSGEMGNO: string;
    TSTYPE: string;
    TSSEQ: string;
    TSTYPESEQ: string;
    TSTIME: string;
    TSSTARTTIME: string;
    TSENDTIME: string;
    TSREMARK: string;
    TSHOUR: string;
    TSTYPENM: string;
    TSGUBUN: string;
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export const useFrmprofes0021MTimeSchedule = () => {
    const [ds_oTimeSchedule, setds_oTimeSchedule] = useState<Ids_oTimeSchedule[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oTimeType, setds_oTimeType] = useState<Ids_oTimeType[]>([]);
    const [ds_oLunchYn, setds_oLunchYn] = useState<Ids_oLunchYn[]>([]);
    const [ds_iJibu, setds_iJibu] = useState<Ids_iJibu[]>([]);
    const [ds_oTotalTime, setds_oTotalTime] = useState<Ids_oTotalTime[]>([]);
    const [ds_oLunchTime, setds_oLunchTime] = useState<Ids_oLunchTime[]>([]);
    const [ds_iTimeScheduleDetailList, setds_iTimeScheduleDetailList] = useState<Ids_iTimeScheduleDetailList[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTimeSchedule([]);
            setds_oJibu([]);
            setds_oTimeType([]);
            setds_oLunchYn([]);
            setds_iJibu([]);
            setds_oTotalTime([]);
            setds_oLunchTime([]);
            setds_iTimeScheduleDetailList([]);
            setds_oEduGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
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
        ds_oTimeSchedule,
        ds_oJibu,
        ds_oTimeType,
        ds_oLunchYn,
        ds_iJibu,
        ds_oTotalTime,
        ds_oLunchTime,
        ds_iTimeScheduleDetailList,
        ds_oEduGubun,
        btnMutilSort_OnClick,
        lfn_End,
        lfn_Excel,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};