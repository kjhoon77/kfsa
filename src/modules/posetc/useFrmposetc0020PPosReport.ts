// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    JJIBUCD: string;
    JJIBUNM: string;
}

export interface Ids_oGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSunap {
    CD: string;
    DATA: string;
}

export interface Ids_oDateGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oOrder {
    CD: string;
    DATA: string;
}

export interface Ids_oPrintGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioResult {
    PMPGMGUBUN: string;
    PMPROCDATE: string;
    PMPCORDERNO: string;
    PGMID: string;
    PGMNM: string;
    PMPCGUBUN: string;
    PMPGMGUBUNNM: string;
    PMPAYMENTFLAG: string;
    PMPAYMENTFLAGNM: string;
    PMITEM2: string;
    PMCLAS: string;
    PMAMT: string;
    PMCLASNM: string;
    TOT_CNT1: string;
    TOT_CNT2: string;
    TOT_AMT1: string;
    TOT_AMT2: string;
    CASH1_CNT1: string;
    CASH1_CNT2: string;
    CARD_CNT1: string;
    CARD_CNT2: string;
    CASH2_CNT1: string;
    CASH2_CNT2: string;
    CASH1_AMT1: string;
    CASH1_AMT2: string;
    CARD_AMT1: string;
    CARD_AMT2: string;
    CASH2_AMT1: string;
    CASH2_AMT2: string;
    PNM: string;
}

export interface Ids_oPosProgramId {
    PGMID: string;
    PGMNM: string;
    PGMGUBUN: string;
    PGMGUBUNNM: string;
}

export interface Ids_oPosJibu {
}

export const useFrmposetc0020PPosReport = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [ds_oDateGubun, setds_oDateGubun] = useState<Ids_oDateGubun[]>([]);
    const [ds_oOrder, setds_oOrder] = useState<Ids_oOrder[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_ioResult, setds_ioResult] = useState<Ids_ioResult[]>([]);
    const [ds_oPosProgramId, setds_oPosProgramId] = useState<Ids_oPosProgramId[]>([]);
    const [ds_oPosJibu, setds_oPosJibu] = useState<Ids_oPosJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oGubun([]);
            setds_oSunap([]);
            setds_oDateGubun([]);
            setds_oOrder([]);
            setds_oPrintGubun([]);
            setds_ioResult([]);
            setds_oPosProgramId([]);
            setds_oPosJibu([]);
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
        ds_oJibu,
        ds_oGubun,
        ds_oSunap,
        ds_oDateGubun,
        ds_oOrder,
        ds_oPrintGubun,
        ds_ioResult,
        ds_oPosProgramId,
        ds_oPosJibu,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_Print,
    };
};