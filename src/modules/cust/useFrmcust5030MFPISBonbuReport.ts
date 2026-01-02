// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioOrder {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oFireStation {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_oBonbu {
    CD: string;
    DATA: string;
    JIBUCD: string;
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

export const useFrmcust5030MFPISBonbuReport = () => {
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_oFireStation, setds_oFireStation] = useState<Ids_oFireStation[]>([]);
    const [ds_oBonbu, setds_oBonbu] = useState<Ids_oBonbu[]>([]);
    const [ds_oDATA, setds_oDATA] = useState<Ids_oDATA[]>([]);
    const [ds_ioFireStation, setds_ioFireStation] = useState<Ids_ioFireStation[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioOrder([]);
            setds_ioChoiceYn([]);
            setds_ioReport([]);
            setds_ioCourse([]);
            setds_oFireStation([]);
            setds_oBonbu([]);
            setds_oDATA([]);
            setds_ioFireStation([]);
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
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioOrder,
        ds_ioChoiceYn,
        ds_ioReport,
        ds_ioCourse,
        ds_oFireStation,
        ds_oBonbu,
        ds_oDATA,
        ds_ioFireStation,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
    };
};