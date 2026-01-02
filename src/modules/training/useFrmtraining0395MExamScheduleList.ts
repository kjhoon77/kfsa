// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
    DATA2: string;
}

export interface Ids_oExamOrder {
    EOENDTIME: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOEXAMORDERGUBUN: string;
    EOINETJUBSUCNT: string;
    EOINETJUBSUYN: string;
    EOJUBSUMAXCNT: string;
    EOMGJIBUCD: string;
    EOMGNO: string;
    EOSEATCNT: string;
    EOSTARTTIME: string;
    EOYEAR: string;
    EPMGNO: string;
    TCCOURSECD: string;
    USE_YN: string;
    EOINJUBSUCNT: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oSearchGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCourseGubun {
    CD: string;
    DATA: string;
}

export const useFrmtraining0395MExamScheduleList = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oExamOrder, setds_oExamOrder] = useState<Ids_oExamOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oExamOrder([]);
            setds_oJibu([]);
            setds_oSearchGubun([]);
            setds_oCourseGubun([]);
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
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_oExamOrder,
        ds_oJibu,
        ds_oSearchGubun,
        ds_oCourseGubun,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};