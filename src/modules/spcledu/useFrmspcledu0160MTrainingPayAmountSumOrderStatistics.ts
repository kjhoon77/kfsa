// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingJubsu {
    INCNT: string;
    INOUTCNT: string;
    JUBSUCNT: string;
    MUNJE: string;
    OUTCNT: string;
    REPAYAMT: string;
    REPAYCNT: string;
    SUNABAMT: string;
    SUNABCNT: string;
    TOTALAMT: string;
    TOTRAININGORDER: string;
    GTTEAMNM: string;
    TCCOURSENM: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourseGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingJubsu_0 {
    TPMGNO: string;
    TPEMAIL: string;
    TPHPTEL: string;
    IIIMGSEQ: string;
    TCCOURSECD: string;
    THLASTORDERSEQ: string;
    TJADDR1: string;
    TJADDR2: string;
    TJAMOUNTGUBUN: string;
    TJBULDADDR: string;
    TJBULDNM: string;
    TJBUNJI: string;
    TJCOMPNM: string;
    TJDONG: string;
    TJFIREMANYN: string;
    TJKU: string;
    TJLASTHISTORYSEQ: string;
    TJLASTREPAYYN: string;
    TJLASTSETLMTSEQ: string;
    TJMGNO: string;
    TJPASSYN: string;
    TJPERSONNM: string;
    TJREFUNDYN: string;
    TJREMARK: string;
    TJREMARKCD: string;
    TJRESIDENTNO: string;
    TJROADNM: string;
    TJSIDO: string;
    TJZIPCD: string;
    TOENDDATE: string;
    TOJUBSUNO: string;
    TOMGNO: string;
    TOSTARTDATE: string;
    TOYEAR: string;
}

export interface Ids_oGubun {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0160MTrainingPayAmountSumOrderStatistics = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oTrainingJubsu, setds_oTrainingJubsu] = useState<Ids_oTrainingJubsu[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [ds_oTrainingJubsu_0, setds_oTrainingJubsu_0] = useState<Ids_oTrainingJubsu_0[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oTrainingJubsu([]);
            setds_oJibu([]);
            setds_oCourseGubun([]);
            setds_oTrainingJubsu_0([]);
            setds_oGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_oTrainingJubsu,
        ds_oJibu,
        ds_oCourseGubun,
        ds_oTrainingJubsu_0,
        ds_oGubun,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};