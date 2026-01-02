// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oEGiro {
    SEQ: string;
    CMGNO: string;
    CGTMGNO: string;
    CGTNM: string;
    CNO: string;
    CREGCD: string;
    CREGNM: string;
    CCOURSECD: string;
    CCOURSENM: string;
    CSTATUSGUBUN: string;
    FMNM: string;
    BNM: string;
    AMOUNT: string;
    CHARGE: string;
}

export interface Ids_oError {
    EGSEQ: string;
    EGGTMGNO: string;
    EGCNO: string;
    EGAMOUNT: string;
    EGCHARGE: string;
    EGROWDATA: string;
    EGREMARK: string;
}

export interface Ids_oChange {
    EGSEQ: string;
    EGGTMGNO: string;
    EGCNO: string;
    EGAMOUNT: string;
    EGCHARGE: string;
    EGROWDATA: string;
    EGREMARK: string;
}

export interface Ids_ioEGGROUPGUBUN {
    CD: string;
    DATA: string;
}

export const useFrmcust2170MEGiroSearch = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oEGiro, setds_oEGiro] = useState<Ids_oEGiro[]>([]);
    const [ds_oError, setds_oError] = useState<Ids_oError[]>([]);
    const [ds_oChange, setds_oChange] = useState<Ids_oChange[]>([]);
    const [ds_ioEGGROUPGUBUN, setds_ioEGGROUPGUBUN] = useState<Ids_ioEGGROUPGUBUN[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oEGiro([]);
            setds_oError([]);
            setds_oChange([]);
            setds_ioEGGROUPGUBUN([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnFeeReport_OnClick = () => {
        console.log('btnFeeReport_OnClick clicked');
    };
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
        ds_oJibu,
        ds_oEGiro,
        ds_oError,
        ds_oChange,
        ds_ioEGGROUPGUBUN,
        btnFeeReport_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};