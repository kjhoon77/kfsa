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

export interface Ids_oTrainingEvaluationCancel {
    ERPASSYN: string;
    TOTCCOURSECD: string;
    TOMUNJEGUBUN: string;
    ERTJMGNO: string;
}

export const useFrmtraining0147PTrainingEvaluationCancel = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oTrainingEvaluationCancel, setds_oTrainingEvaluationCancel] = useState<Ids_oTrainingEvaluationCancel[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oTrainingEvaluationCancel([]);
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
        ds_oTrainingEvaluationCancel,
        lfn_End,
        lfn_Save,
    };
};