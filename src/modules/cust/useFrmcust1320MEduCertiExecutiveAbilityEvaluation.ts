// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oSort {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oEvaluation {
    EDUCNT: string;
    EPNM: string;
    INCNT: string;
    INOUTCNT: string;
    JUPSUCNT: string;
    KULGANGCNT: string;
    OUTCNT: string;
    PASSCNT: string;
    REPAYCNT: string;
    TCCOURSENM: string;
    TOENDDATE: string;
    TOSTARTDATE: string;
    TOTRAININGORDER: string;
    CGROUPNICKNM: string;
    ESEDUORDER: string;
    ESDATE: string;
    EJNM: string;
}

export interface Ids_oEvaluationPoto {
    ACTION: string;
    GTTEAMNM: string;
    ORGJUPSU: string;
    SEATNO: string;
    TCCOURSENM: string;
    TJPERSONNM: string;
    TOENDDATE: string;
    TOSTARTDATE: string;
    TOTRAININGORDER: string;
    CGROUPNICKNM: string;
    ESEDUORDER: string;
    ESDATE: string;
    EJNM: string;
}

export const useFrmcust1320MEduCertiExecutiveAbilityEvaluation = () => {
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oEvaluation, setds_oEvaluation] = useState<Ids_oEvaluation[]>([]);
    const [ds_oEvaluationPoto, setds_oEvaluationPoto] = useState<Ids_oEvaluationPoto[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSort([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oEvaluation([]);
            setds_oEvaluationPoto([]);
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
        ds_oSort,
        ds_oCourse,
        ds_oJibu,
        ds_oEvaluation,
        ds_oEvaluationPoto,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};