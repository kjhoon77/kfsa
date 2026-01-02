// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oAdditionList {
    ADCD: string;
    ADCMGNO: string;
    ADCONTENT: string;
    ADDELGUBUN: string;
    ADMODDATE: string;
    ADMODSABUN: string;
    ADREGDATE: string;
    ADREGSABUN: string;
    ADSEQ: string;
    ADDELGUBUN1: string;
}

export interface Ids_oAdditionInfo {
    CD: string;
    DATA: string;
}

export interface Ids_oStatus {
    CD: string;
    DATA: string;
}

export interface Ids_oSeq {
}

export const useFrmcust0017PAdditionHistory = () => {
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_oAdditionList, setds_oAdditionList] = useState<Ids_oAdditionList[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_oSeq, setds_oSeq] = useState<Ids_oSeq[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun([]);
            setds_oAdditionList([]);
            setds_oAdditionInfo([]);
            setds_oStatus([]);
            setds_oSeq([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Form_OnUnloadCompleted = () => {
        console.log('Form_OnUnloadCompleted clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioGubun,
        ds_oAdditionList,
        ds_oAdditionInfo,
        ds_oStatus,
        ds_oSeq,
        Form_OnUnloadCompleted,
        lfn_Save,
    };
};