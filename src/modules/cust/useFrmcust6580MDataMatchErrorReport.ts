// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioOrder {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioStatus {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oDATA {
}

export interface Ids_ioFireStation {
    BID: string;
    SID: string;
    CID: string;
    GMGNO: string;
    RCD: string;
    SNM : string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export const useFrmcust6580MDataMatchErrorReport = () => {
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioStatus, setds_ioStatus] = useState<Ids_ioStatus[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_oDATA, setds_oDATA] = useState<Ids_oDATA[]>([]);
    const [ds_ioFireStation, setds_ioFireStation] = useState<Ids_ioFireStation[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun([]);
            setds_ioOrder([]);
            setds_ioChoiceYn([]);
            setds_ioStatus([]);
            setds_ioCourse([]);
            setds_oDATA([]);
            setds_ioFireStation([]);
            setds_oJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_ChkValueCheck = () => {
        console.log('lfn_ChkValueCheck clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioGubun,
        ds_ioOrder,
        ds_ioChoiceYn,
        ds_ioStatus,
        ds_ioCourse,
        ds_oDATA,
        ds_ioFireStation,
        ds_oJibu,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_ChkValueCheck,
        lfn_End,
        lfn_Print,
    };
};