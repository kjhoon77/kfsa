// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_SearchJogeon {
    JIBU: string;
    REGION_GUBUN: string;
    REGION1: string;
    REGION2: string;
    PRINT_GUBUN: string;
}

export interface Ids_oPrintGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_SendReport {
    BNM: string;
    ZIPCD: string;
    ADDR1: string;
    ADDR2: string;
}

export const useFrmcust1110MDangerTransDMData = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_SendReport, setds_SendReport] = useState<Ids_SendReport[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_oRegion([]);
            setds_SearchJogeon([]);
            setds_oPrintGubun([]);
            setds_ioChoiceYn([]);
            setds_SendReport([]);
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

    return {
        isLoading,
        ds_ioJibu,
        ds_oRegion,
        ds_SearchJogeon,
        ds_oPrintGubun,
        ds_ioChoiceYn,
        ds_SendReport,
        btnToExcel_OnClick,
        lfn_End,
        lfn_Print,
    };
};