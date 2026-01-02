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

export interface Ids_ioMunjeGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioTrainingSettlementTotal {
    GTDEPTNM: string;
    TSTCCOURSECD: string;
    TCCOURSENICK: string;
    TSTCOURSEGUBUN: string;
    TSTMUNJEGUBUN: string;
    TSTINCOME: string;
    TSTBUBUNAMT: string;
    TSTAFBUBUNAMT: string;
    TSTSUNABAMT: string;
    TSTREPAYAMT: string;
    TSTBUBUNREPAYAMT: string;
    TSTAFBUBUNREPAYAMT: string;
    TSTDATE: string;
    TSTGTMGNO: string;
    GTPRTSEQ: string;
    COURSEGUBUN: string;
    MUNJEGUBUN: string;
}

export interface Ids_ioCourseFG {
    CD: string;
    DATA: string;
}

export const useFrmtraining0170MTrainingSettlementTotal = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oTrainingJubsu, setds_oTrainingJubsu] = useState<Ids_oTrainingJubsu[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioMunjeGubun, setds_ioMunjeGubun] = useState<Ids_ioMunjeGubun[]>([]);
    const [ds_ioCourseGubun, setds_ioCourseGubun] = useState<Ids_ioCourseGubun[]>([]);
    const [ds_ioTrainingSettlementTotal, setds_ioTrainingSettlementTotal] = useState<Ids_ioTrainingSettlementTotal[]>([]);
    const [ds_ioCourseFG, setds_ioCourseFG] = useState<Ids_ioCourseFG[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oTrainingJubsu([]);
            setds_oJibu([]);
            setds_ioMunjeGubun([]);
            setds_ioCourseGubun([]);
            setds_ioTrainingSettlementTotal([]);
            setds_ioCourseFG([]);
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
        ds_ioMunjeGubun,
        ds_ioCourseGubun,
        ds_ioTrainingSettlementTotal,
        ds_ioCourseFG,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};