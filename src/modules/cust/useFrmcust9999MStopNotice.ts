// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioYear {
    CD: string;
    DATA: string;
}

export interface Ids_MinapGubun {
    CD: string;
    DATA: string;
}

export interface Ids_MinapList {
    CGTMGNO: string;
    JIFULLNM: string;
    RCREGCD: string;
    RCNM: string;
    BANG_CNT: string;
    BANG_MINAP: string;
    DANGER_CNT: string;
    DANGER_MINAP: string;
    SOBANG_CNT: string;
    SOBANG_MINAP: string;
    PERSON_CNT: string;
    PERSON_MINAP: string;
    DANCHE_CNT: string;
    DANCHE_MINAP: string;
}

export interface Ids_MinapListExcel {
    JIFULLNM: string;
    RCNM: string;
    CNO: string;
    BNM: string;
    FMNM: string;
    FMRESIDENTNO: string;
    FMHSTARTDATE: string;
    ZIPCD: string;
    BADDR: string;
    COVER_GUBUN: string;
    CREGISTERYYMM: string;
    CFEEYYMM: string;
    FMHTEL: string;
    FMHHPTEL: string;
    EMAIL: string;
    YEAR3: string;
    YEAR2: string;
    YEAR1: string;
    YEAR0: string;
    CNT3: string;
    CNT2: string;
    CNT1: string;
    CNT0: string;
    AMT: string;
    BTEL: string;
}

export interface Ids_SearchJogeon {
    JIBU: string;
    MINAP_GUBUN: string;
    LONGMINAP: string;
    MINAP1: string;
    MINAP2: string;
    MINAP3: string;
    MINAP4: string;
}

export const useFrmcust9999MStopNotice = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_MinapGubun, setds_MinapGubun] = useState<Ids_MinapGubun[]>([]);
    const [ds_MinapList, setds_MinapList] = useState<Ids_MinapList[]>([]);
    const [ds_MinapListExcel, setds_MinapListExcel] = useState<Ids_MinapListExcel[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_ioYear([]);
            setds_MinapGubun([]);
            setds_MinapList([]);
            setds_MinapListExcel([]);
            setds_SearchJogeon([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioJibu,
        ds_ioYear,
        ds_MinapGubun,
        ds_MinapList,
        ds_MinapListExcel,
        ds_SearchJogeon,
        lfn_End,
    };
};