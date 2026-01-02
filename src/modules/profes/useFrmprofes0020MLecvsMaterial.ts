// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJikwi {
    CD: string;
    DATA: string;
}

export interface Ids_oGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ProfesList {
    LDPFMGNO: string;
    NAME: string;
    GUBUN: string;
    NAME1: string;
    JIKWI: string;
    GUBUNCD: string;
    TPCNT: string;
    TOT: string;
    TOT_1: string;
    TOT_2: string;
    YES: string;
    YES_1: string;
    YES_2: string;
    NO: string;
    NO_1: string;
    NO_2: string;
}

export interface Ids_SearchJogeon {
    STARTDATE: string;
    ENDDATE: string;
    JIBU: string;
    JIKWI: string;
    GUBUN: string;
    EDUGUBUN: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export const useFrmprofes0020MLecvsMaterial = () => {
    const [ds_oJikwi, setds_oJikwi] = useState<Ids_oJikwi[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJikwi([]);
            setds_oGubun([]);
            setds_ProfesList([]);
            setds_SearchJogeon([]);
            setds_oJibu([]);
            setds_oEduGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const btnPrintWarmun_OnClick = () => {
        console.log('btnPrintWarmun_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJikwi,
        ds_oGubun,
        ds_ProfesList,
        ds_SearchJogeon,
        ds_oJibu,
        ds_oEduGubun,
        btnExcell_OnClick,
        btnPrintWarmun_OnClick,
        lfn_End,
        lfn_Print,
        lfn_Search,
    };
};