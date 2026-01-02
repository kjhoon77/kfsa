// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ProfesListH {
    TOTCNT_1: string;
    TOTCNT_2: string;
    TOTCNT_3: string;
    TOTTIME_1: string;
    TOTTIME_2: string;
    TOTTIME_3: string;
    CNT120_1: string;
    CNT120_2: string;
    CNT120_3: string;
    TIME120_1: string;
    TIME120_2: string;
    TIME120_3: string;
    CNT124_1: string;
    CNT124_2: string;
    CNT124_3: string;
    TIME124_1: string;
    TIME124_2: string;
    TIME124_3: string;
    CNT126_1: string;
    CNT126_2: string;
    CNT126_3: string;
    TIME126_1: string;
    TIME126_2: string;
    TIME126_3: string;
    CNT128_1: string;
    CNT128_2: string;
    CNT128_3: string;
    TIME128_1: string;
    TIME128_2: string;
    TIME128_3: string;
}

export interface Ids_SearchJogeon {
    STARTDATE: string;
    ENDDATE: string;
    JIBU: string;
    JIKWI: string;
    GUBUN: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ProfesListD {
    LDPFMGNO: string;
    LDPFNAME: string;
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
}

export const useFrmprofes0018MPracEduRep = () => {
    const [ds_ProfesListH, setds_ProfesListH] = useState<Ids_ProfesListH[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ProfesListD, setds_ProfesListD] = useState<Ids_ProfesListD[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ProfesListH([]);
            setds_SearchJogeon([]);
            setds_oJibu([]);
            setds_ProfesListD([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
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
        ds_ProfesListH,
        ds_SearchJogeon,
        ds_oJibu,
        ds_ProfesListD,
        btnToExcel_OnClick,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};