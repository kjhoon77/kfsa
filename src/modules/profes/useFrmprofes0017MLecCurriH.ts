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

export interface Ids_Cours {
    CD: string;
    DATA: string;
}

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
    GUBUN2: string;
    CNT_TOT: string;
    CNT1: string;
    CNT2: string;
    CNT3: string;
    CNT4: string;
    CNT5: string;
    CNT6: string;
    CNT7: string;
    CNT8: string;
    CNT9: string;
    CNT10: string;
    CNT11: string;
    CNT12: string;
    CNT13: string;
    CNT14: string;
    CNT15: string;
    CNT16: string;
    CNT17: string;
    CNT18: string;
    CNT19: string;
    CNT20: string;
    CNT21: string;
    CNT22: string;
    CNT23: string;
    CNT24: string;
    CNT25: string;
    CNT26: string;
    CNT27: string;
    CNT28: string;
    CNT29: string;
    CNT30: string;
    CNT31: string;
    CNT32: string;
    CNT33: string;
    CNT34: string;
    CNT35: string;
    CNT36: string;
    CNT37: string;
    TIME_TOT: string;
    TIME1: string;
    TIME2: string;
    TIME3: string;
    TIME4: string;
    TIME5: string;
    TIME6: string;
    TIME7: string;
    TIME8: string;
    TIME9: string;
    TIME10: string;
    TIME11: string;
    TIME12: string;
    TIME13: string;
    TIME14: string;
    TIME15: string;
    TIME16: string;
    TIME17: string;
    TIME18: string;
    TIME19: string;
    TIME20: string;
    TIME21: string;
    TIME22: string;
    TIME23: string;
    TIME24: string;
    TIME25: string;
    TIME26: string;
    TIME27: string;
    TIME28: string;
    TIME29: string;
    TIME30: string;
    TIME31: string;
    TIME32: string;
    TIME33: string;
    TIME34: string;
    TIME35: string;
    TIME36: string;
    TIME37: string;
}

export interface Ids_SearchJogeon {
    STARTDATE: string;
    ENDDATE: string;
    JIBU: string;
    JIKWI: string;
    GUBUN: string;
    NAME: string;
    COURS: string;
    COURS_GN: string;
    EDUGUBUN: string;
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export interface Ids_EduSubject {
}

export interface Ids_ProfesList2 {
    MGNO: string;
    NAME: string;
    JIKWI: string;
    GTDEPTNM: string;
    GUBUN: string;
    GUBUN2: string;
    CNT_TOT: string;
}

export interface Ids_ProfesList3 {
    MGNO: string;
    NAME: string;
    JIKWI: string;
    GTDEPTNM: string;
    GUBUN: string;
    GUBUN2: string;
    CNT_TOT: string;
}

export const useFrmprofes0017MLecCurriH = () => {
    const [ds_oJikwi, setds_oJikwi] = useState<Ids_oJikwi[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_Cours, setds_Cours] = useState<Ids_Cours[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_EduSubject, setds_EduSubject] = useState<Ids_EduSubject[]>([]);
    const [ds_ProfesList2, setds_ProfesList2] = useState<Ids_ProfesList2[]>([]);
    const [ds_ProfesList3, setds_ProfesList3] = useState<Ids_ProfesList3[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJikwi([]);
            setds_oGubun([]);
            setds_Cours([]);
            setds_oJibu([]);
            setds_ProfesList([]);
            setds_SearchJogeon([]);
            setds_oEduGubun([]);
            setds_EduSubject([]);
            setds_ProfesList2([]);
            setds_ProfesList3([]);
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
        ds_oJikwi,
        ds_oGubun,
        ds_Cours,
        ds_oJibu,
        ds_ProfesList,
        ds_SearchJogeon,
        ds_oEduGubun,
        ds_EduSubject,
        ds_ProfesList2,
        ds_ProfesList3,
        btnToExcel_OnClick,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};