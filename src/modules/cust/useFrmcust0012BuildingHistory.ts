// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioAddrGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioDelete {
    CD: string;
    DATA: string;
}

export interface Ids_ioYear1 {
    CD: string;
    DATA: string;
}

export interface Ids_ioYear2 {
    CD: string;
    DATA: string;
}

export interface Ids_ioBusiness {
    CD: string;
    DATA: string;
}

export interface Ids_ioYear {
    CD: string;
}

export interface Ids_ioAccount {
    YEAR: string;
    GUBUN: string;
    AMT: string;
}

export interface Ids_oRepayYn {
    CD: string;
    DATA: string;
}

export const useFrmcust0012BuildingHistory = () => {
    const [ds_ioAddrGubun, setds_ioAddrGubun] = useState<Ids_ioAddrGubun[]>([]);
    const [ds_ioDelete, setds_ioDelete] = useState<Ids_ioDelete[]>([]);
    const [ds_ioYear1, setds_ioYear1] = useState<Ids_ioYear1[]>([]);
    const [ds_ioYear2, setds_ioYear2] = useState<Ids_ioYear2[]>([]);
    const [ds_ioBusiness, setds_ioBusiness] = useState<Ids_ioBusiness[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_ioAccount, setds_ioAccount] = useState<Ids_ioAccount[]>([]);
    const [ds_oRepayYn, setds_oRepayYn] = useState<Ids_oRepayYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioAddrGubun([]);
            setds_ioDelete([]);
            setds_ioYear1([]);
            setds_ioYear2([]);
            setds_ioBusiness([]);
            setds_ioYear([]);
            setds_ioAccount([]);
            setds_oRepayYn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioAddrGubun,
        ds_ioDelete,
        ds_ioYear1,
        ds_ioYear2,
        ds_ioBusiness,
        ds_ioYear,
        ds_ioAccount,
        ds_oRepayYn,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};