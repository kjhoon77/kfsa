// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioList {
    YEARQ: string;
}

export interface Ids_oList {
}

export interface Ids_ioList3 {
}

export interface Ids_pfgubun {
    CODE: string;
    CODENM: string;
}

export interface Ids_oRepayYn {
    CD: string;
    DATA: string;
}

export interface Ids_TimeChage {
    CD: string;
    DATA: string;
}

export interface Ids_PFJIBU {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export const useFrmprofes0001MProfMgmtList3 = () => {
    const [ds_ioList, setds_ioList] = useState<Ids_ioList[]>([]);
    const [ds_oList, setds_oList] = useState<Ids_oList[]>([]);
    const [ds_ioList3, setds_ioList3] = useState<Ids_ioList3[]>([]);
    const [ds_pfgubun, setds_pfgubun] = useState<Ids_pfgubun[]>([]);
    const [ds_oRepayYn, setds_oRepayYn] = useState<Ids_oRepayYn[]>([]);
    const [ds_TimeChage, setds_TimeChage] = useState<Ids_TimeChage[]>([]);
    const [ds_PFJIBU, setds_PFJIBU] = useState<Ids_PFJIBU[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioList([]);
            setds_oList([]);
            setds_ioList3([]);
            setds_pfgubun([]);
            setds_oRepayYn([]);
            setds_TimeChage([]);
            setds_PFJIBU([]);
            setds_oJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
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
        ds_ioList,
        ds_oList,
        ds_ioList3,
        ds_pfgubun,
        ds_oRepayYn,
        ds_TimeChage,
        ds_PFJIBU,
        ds_oJibu,
        btnToExcel_OnClick,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};