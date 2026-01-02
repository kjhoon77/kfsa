// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oProgramId {
    CD: string;
    DATA: string;
}

export interface Ids_oWorkGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oDateGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSetlementGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSunapGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export const useFrmCOM3310POSStatistics = () => {
    const [ds_oProgramId, setds_oProgramId] = useState<Ids_oProgramId[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [ds_oDateGubun, setds_oDateGubun] = useState<Ids_oDateGubun[]>([]);
    const [ds_oSetlementGubun, setds_oSetlementGubun] = useState<Ids_oSetlementGubun[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oProgramId([]);
            setds_oWorkGubun([]);
            setds_oDateGubun([]);
            setds_oSetlementGubun([]);
            setds_oSunapGubun([]);
            setds_oJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
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

    return {
        isLoading,
        ds_oProgramId,
        ds_oWorkGubun,
        ds_oDateGubun,
        ds_oSetlementGubun,
        ds_oSunapGubun,
        ds_oJibu,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
    };
};