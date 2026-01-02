// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioJibu {
    CD: string;
    DATA: string;
}

export interface Ids_SearchJogeon {
    JIBU: string;
    REGION_GUBUN: string;
    REGION1: string;
    REGION2: string;
    SETLM_GUBUN: string;
}

export interface Ids_SunapList {
    GTTEAMNM: string;
    RCNM: string;
    TOTALFEE: string;
    SUNAPFEE: string;
    MINAPFEE: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_oSetlmGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYnD {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseD {
    CD: string;
    DATA: string;
}

export const useFrmcust2100MRegionSunapReport = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_SunapList, setds_SunapList] = useState<Ids_SunapList[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_oSetlmGubun, setds_oSetlmGubun] = useState<Ids_oSetlmGubun[]>([]);
    const [ds_ioCourseYnD, setds_ioCourseYnD] = useState<Ids_ioCourseYnD[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioCourseD, setds_ioCourseD] = useState<Ids_ioCourseD[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_SearchJogeon([]);
            setds_SunapList([]);
            setds_oRegion([]);
            setds_ioChoiceYn([]);
            setds_oSetlmGubun([]);
            setds_ioCourseYnD([]);
            setds_ioCourseYn([]);
            setds_ioCourse([]);
            setds_ioCourseD([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const lfn_CancelL = () => {
        console.log('lfn_CancelL clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioJibu,
        ds_SearchJogeon,
        ds_SunapList,
        ds_oRegion,
        ds_ioChoiceYn,
        ds_oSetlmGubun,
        ds_ioCourseYnD,
        ds_ioCourseYn,
        ds_ioCourse,
        ds_ioCourseD,
        btnExcell_OnClick,
        lfn_CancelL,
        lfn_End,
        lfn_Print,
    };
};