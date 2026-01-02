// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCustList {
    ADDR: string;
    BBIZCD: string;
    BMGNO: string;
    BNM: string;
    BTEL: string;
    DPERMISSIONNO: string;
}

export interface Ids_oBizGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust0010PSearchbuildingCheck = () => {
    const [ds_oCustList, setds_oCustList] = useState<Ids_oCustList[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCustList([]);
            setds_oBizGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oCustList,
        ds_oBizGubun,
        btnSelect_OnClick,
        lfn_End,
    };
};