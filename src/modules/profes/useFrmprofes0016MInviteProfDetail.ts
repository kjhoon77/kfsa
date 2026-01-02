// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ProfesList {
    MGNO: string;
    NAME: string;
    JIKWI: string;
    GTDEPTNM: string;
    GUBUN: string;
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
    SBIRTHDAY: string;
}

export interface Ids_SearchJogeon {
    STARTDATE: string;
    ENDDATE: string;
    JIBU: string;
    JIKWI: string;
    GUBUN: string;
}

export interface Ids_ProfesList_Chart {
    MGNO: string;
    NAME: string;
    JIKWI: string;
    GTDEPTNM: string;
    GUBUN: string;
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
    SBIRTHDAY: string;
}

export const useFrmprofes0016MInviteProfDetail = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_ProfesList_Chart, setds_ProfesList_Chart] = useState<Ids_ProfesList_Chart[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_ProfesList([]);
            setds_SearchJogeon([]);
            setds_ProfesList_Chart([]);
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
        ds_oJibu,
        ds_ProfesList,
        ds_SearchJogeon,
        ds_ProfesList_Chart,
        btnToExcel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};