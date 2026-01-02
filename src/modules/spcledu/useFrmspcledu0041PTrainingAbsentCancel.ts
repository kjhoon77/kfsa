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

export interface Ids_oTrainingAbsentCancel {
    ABSENT: string;
    TOTCCOURSECD: string;
    TOMUNJEGUBUN: string;
    ATJMGNO: string;
}

export const useFrmspcledu0041PTrainingAbsentCancel = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oTrainingAbsentCancel, setds_oTrainingAbsentCancel] = useState<Ids_oTrainingAbsentCancel[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oTrainingAbsentCancel([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oCourse,
        ds_oTrainingAbsentCancel,
        lfn_End,
        lfn_Save,
    };
};