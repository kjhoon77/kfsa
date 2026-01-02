// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oExamOrder {
    CREATE_DATE: string;
    CREATE_GUBUN: string;
    CREATE_ID: string;
    CREATE_IP: string;
    JJIBUCD: string;
    MODIFY_DATE: string;
    MODIFY_ID: string;
    MODIFY_IP: string;
    ZBUNJI: string;
    SIKUDONG: string;
    ZHO: string;
    ZREGIONCD: string;
    ZSEQ: string;
    ZZIPCD: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
    DATA2: string;
}

export interface Ids_oExamOrderChange {
}

export interface Ids_ioExamChangeinfo {
}

export interface Ids_oStatus {
}

export interface Ids_oTrainingPassDate {
}

export interface Ids_oModifyTime {
}

export const useFrmtraining0402PExamOrderChange = () => {
    const [ds_oExamOrder, setds_oExamOrder] = useState<Ids_oExamOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oExamOrderChange, setds_oExamOrderChange] = useState<Ids_oExamOrderChange[]>([]);
    const [ds_ioExamChangeinfo, setds_ioExamChangeinfo] = useState<Ids_ioExamChangeinfo[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_oTrainingPassDate, setds_oTrainingPassDate] = useState<Ids_oTrainingPassDate[]>([]);
    const [ds_oModifyTime, setds_oModifyTime] = useState<Ids_oModifyTime[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oExamOrder([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oExamOrderChange([]);
            setds_ioExamChangeinfo([]);
            setds_oStatus([]);
            setds_oTrainingPassDate([]);
            setds_oModifyTime([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
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
        ds_oExamOrder,
        ds_oJibu,
        ds_oCourse,
        ds_oExamOrderChange,
        ds_ioExamChangeinfo,
        ds_oStatus,
        ds_oTrainingPassDate,
        ds_oModifyTime,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};