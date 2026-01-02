// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oBankSunapGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSunapGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oRepaySunapGubun {
    CD: string;
    DATA: string;
}

export const useFrmCOM8100SSettlementPOSSunap = () => {
    const [ds_oBankSunapGubun, setds_oBankSunapGubun] = useState<Ids_oBankSunapGubun[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oRepaySunapGubun, setds_oRepaySunapGubun] = useState<Ids_oRepaySunapGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBankSunapGubun([]);
            setds_oSunapGubun([]);
            setds_oRepaySunapGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oBankSunapGubun,
        ds_oSunapGubun,
        ds_oRepaySunapGubun,
    };
};