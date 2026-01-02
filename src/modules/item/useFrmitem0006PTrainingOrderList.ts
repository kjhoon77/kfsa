// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oTrainingOrder {
    COURSEMUNJECD: string;
    JUBSUCNT: string;
    TOCOURSEGUBUN: string;
    TOCOURSEGUBUNNM: string;
    TOEDUCONTENTS: string;
    TOEDUREMARK: string;
    TOENDDATE: string;
    TOENDTIME: string;
    TOEPMGNO: string;
    TOINETJUBSUCNT: string;
    TOINETJUBSUYN: string;
    TOJUBSUMAXCNT: string;
    TOJUBSUSTATUS: string;
    TOMAILNOTICE: string;
    TOMGGTMGNO: string;
    TOMGNO: string;
    TOMODDATE: string;
    TOMODSABUN: string;
    TOMUNJEGUBUN: string;
    TOREGDATE: string;
    TOREGSABUN: string;
    TOREMARK: string;
    TOSEATCNT: string;
    TOSEATLIMITYN: string;
    TOSEATSELECTYN: string;
    TOSEXLIMITYN: string;
    TOSTARTDATE: string;
    TOSTARTTIME: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOUSEYN: string;
    TOYEAR: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export const useFrmitem0006PTrainingOrderList = () => {
    const [ds_oTrainingOrder, setds_oTrainingOrder] = useState<Ids_oTrainingOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingOrder([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oTrainingOrder,
        ds_oJibu,
        ds_oCourse,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};