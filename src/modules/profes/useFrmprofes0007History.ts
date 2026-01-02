// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oClass {
    CD: string;
    DATA: string;
}

export interface Ids_oProGubun {
    CD: string;
    DATA: string;
}

export interface Ids_SearchJogeon {
    EDUDATEST: string;
    EDUDATEED: string;
    EDUCLASS: string;
    PROGUBUN: string;
}

export interface Ids_ProfesList {
    THMGNO: string;
    THSTATUS: string;
    THPROCDATE: string;
    THNAME: string;
    THJIKWI: string;
    THREMARK: string;
}

export interface Ids_Status {
    CD: string;
    DATA: string;
}

export const useFrmprofes0007History = () => {
    const [ds_oClass, setds_oClass] = useState<Ids_oClass[]>([]);
    const [ds_oProGubun, setds_oProGubun] = useState<Ids_oProGubun[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_Status, setds_Status] = useState<Ids_Status[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oClass([]);
            setds_oProGubun([]);
            setds_SearchJogeon([]);
            setds_ProfesList([]);
            setds_Status([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_oClass,
        ds_oProGubun,
        ds_SearchJogeon,
        ds_ProfesList,
        ds_Status,
        btnExcell_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};