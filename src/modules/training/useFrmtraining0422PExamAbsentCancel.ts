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

export interface Ids_oExamAbsentCancel {
    EAGUBUN: string;
    EOTCCOURSECD: string;
    EAEJMGNO: string;
}

export const useFrmtraining0422PExamAbsentCancel = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oExamAbsentCancel, setds_oExamAbsentCancel] = useState<Ids_oExamAbsentCancel[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oExamAbsentCancel([]);
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
        ds_oExamAbsentCancel,
        lfn_End,
        lfn_Save,
    };
};