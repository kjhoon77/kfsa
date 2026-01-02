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

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ProfesList {
    LDPFMGNO: string;
    LDPFNAME: string;
    NAME: string;
    GUBUN: string;
    GUBUNCD: string;
    JIKWI: string;
    SUMCNT: string;
    SUMTIME: string;
    CNT120: string;
    CNT124: string;
    CNT126: string;
    CNT128: string;
    TIME120: string;
    TIME124: string;
    TIME126: string;
    TIME128: string;
    CNT220: string;
    CNT221: string;
    CNT222N: string;
    CNT222Y: string;
    CNT224: string;
    CNT228: string;
    CNT229: string;
    TIME220: string;
    TIME221: string;
    TIME222N: string;
    TIME222Y: string;
    TIME224: string;
    TIME228: string;
    TIME229: string;
    CNT253: string;
    CNT254: string;
    TIME253: string;
    TIME254: string;
    TP: string;
    TOT: string;
    NM_GUBUN: string;
    SEQ: string;
    CNT_SABUN: string;
}

export interface Ids_SearchJogeon {
    STARTDATE: string;
    ENDDATE: string;
    JIBU: string;
    JIKWI: string;
    GUBUN: string;
}

export interface Ids_ProfesList_Chart {
    LDPFMGNO: string;
    LDPFNAME: string;
    NAME: string;
    GUBUN: string;
    GUBUNCD: string;
    JIKWI: string;
    SUMCNT: string;
    SUMTIME: string;
    CNT120: string;
    CNT124: string;
    CNT126: string;
    CNT128: string;
    TIME120: string;
    TIME124: string;
    TIME126: string;
    TIME128: string;
    CNT220: string;
    CNT221: string;
    CNT222N: string;
    CNT222Y: string;
    CNT224: string;
    CNT228: string;
    CNT229: string;
    TIME220: string;
    TIME221: string;
    TIME222N: string;
    TIME222Y: string;
    TIME224: string;
    TIME228: string;
    TIME229: string;
    CNT253: string;
    CNT254: string;
}

export interface Ids_position {
    TP: string;
    DATA: string;
}

export const useFrmprofes0014MPerDetailLecH = () => {
    const [ds_oJikwi, setds_oJikwi] = useState<Ids_oJikwi[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_ProfesList_Chart, setds_ProfesList_Chart] = useState<Ids_ProfesList_Chart[]>([]);
    const [ds_position, setds_position] = useState<Ids_position[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJikwi([]);
            setds_oGubun([]);
            setds_oJibu([]);
            setds_ProfesList([]);
            setds_SearchJogeon([]);
            setds_ProfesList_Chart([]);
            setds_position([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel = () => {
        console.log('btnToExcel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJikwi,
        ds_oGubun,
        ds_oJibu,
        ds_ProfesList,
        ds_SearchJogeon,
        ds_ProfesList_Chart,
        ds_position,
        btnToExcel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};