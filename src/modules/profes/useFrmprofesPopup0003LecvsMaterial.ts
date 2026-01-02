// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ProfesList {
    CMGNO: string;
    CGUBUN2: string;
    SJSEQ: string;
    CNM: string;
    SJTITLE: string;
    TP_CNT: string;
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
    SABUN: string;
    EDUGUBUN: string;
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export const useFrmprofesPopup0003LecvsMaterial = () => {
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ProfesList([]);
            setds_SearchJogeon([]);
            setds_oEduGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const btnPrint_OnClick = () => {
        console.log('btnPrint_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ProfesList,
        ds_SearchJogeon,
        ds_oEduGubun,
        btnExcell_OnClick,
        btnPrint_OnClick,
        lfn_End,
    };
};