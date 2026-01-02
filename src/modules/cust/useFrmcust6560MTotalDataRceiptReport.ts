// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioExcept {
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

export interface Ids_oBonbu {
    CD: string;
    DATA: string;
    JIBUCD: string;
}

export const useFrmcust6560MTotalDataRceiptReport = () => {
    const [ds_ioExcept, setds_ioExcept] = useState<Ids_ioExcept[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioStatus, setds_ioStatus] = useState<Ids_ioStatus[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_oFireStation, setds_oFireStation] = useState<Ids_oFireStation[]>([]);
    const [ds_oDATA, setds_oDATA] = useState<Ids_oDATA[]>([]);
    const [ds_ioFireStation, setds_ioFireStation] = useState<Ids_ioFireStation[]>([]);
    const [ds_oBonbu, setds_oBonbu] = useState<Ids_oBonbu[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExcept([]);
            setds_ioOrder([]);
            setds_ioChoiceYn([]);
            setds_ioStatus([]);
            setds_ioReport([]);
            setds_ioCourse([]);
            setds_oFireStation([]);
            setds_oDATA([]);
            setds_ioFireStation([]);
            setds_oBonbu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioExcept,
        ds_ioOrder,
        ds_ioChoiceYn,
        ds_ioStatus,
        ds_ioReport,
        ds_ioCourse,
        ds_oFireStation,
        ds_oDATA,
        ds_ioFireStation,
        ds_oBonbu,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_Print,
    };
};