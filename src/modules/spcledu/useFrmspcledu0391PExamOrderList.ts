// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oExamOrder {
    EOENDTIME: string;
    EOEPMGNO: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOEXAMORDERGUBUN: string;
    EOINETJUBSUCNT: string;
    EOINETJUBSUYN: string;
    EOJUBSUCNT: string;
    EOJUBSUSTATUS: string;
    EOMGGTMGNO: string;
    EOMGNO: string;
    EOSEATCNT: string;
    EOSTARTTIME: string;
    EOTCCOURSECD: string;
    EOTCCOURSENM: string;
    EOUSEYN: string;
    EOYEAR: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0391PExamOrderList = () => {
    const [ds_oExamOrder, setds_oExamOrder] = useState<Ids_oExamOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oExamOrder([]);
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
        ds_oExamOrder,
        ds_oJibu,
        ds_oCourse,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};