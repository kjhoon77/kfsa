// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioJibu {
    CD: string;
    DATA: string;
}

export interface Ids_SearchJogeon {
    JIBU: string;
    YEAR: string;
    BIZ_GUBUN: string;
    BIZ1: string;
    BIZ2: string;
    SETLM_GUBUN: string;
}

export interface Ids_SunapList {
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_oSetlmGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oAdditionInfo {
    CD: string;
    DATA: string;
}

export const useFrmcust2110MBusinessSunapReport = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_SunapList, setds_SunapList] = useState<Ids_SunapList[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_oSetlmGubun, setds_oSetlmGubun] = useState<Ids_oSetlmGubun[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_SearchJogeon([]);
            setds_SunapList([]);
            setds_ioChoiceYn([]);
            setds_oSetlmGubun([]);
            setds_oAdditionInfo([]);
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
        ds_ioChoiceYn,
        ds_oSetlmGubun,
        ds_oAdditionInfo,
        btnExcell_OnClick,
        lfn_CancelL,
        lfn_End,
        lfn_Print,
    };
};