// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oPassYn {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oRepayYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioPrize {
    PGUBUN: string;
    TJMGNO: string;
    TJPERSONNM: string;
    TPBIRTHDAY_SANG: string;
    TJTPMGNO: string;
    TOMGGTMGNO: string;
    TOTARTENDDATE: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPPASSDATE: string;
    TPPASSNO: string;
    TOHJUBSUNO: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oPrizeGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oPrizeImageGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport {
    LLCSNO: string;
    PGUBUN: string;
    TJMGNO: string;
    TJPERSONNM: string;
    TJBIRTHDAY: string;
    TJTPMGNO: string;
    TOMGGTMGNO: string;
    TOTARTENDDATE: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPPASSDATE: string;
    TPPASSNO: string;
}

export interface Ids_ioReport2 {
    LLCSNO: string;
    PGUBUN: string;
    TJMGNO: string;
    TJPERSONNM: string;
    TJBIRTHDAY: string;
    TJTPMGNO: string;
    TOMGGTMGNO: string;
    TOTARTENDDATE: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPPASSDATE: string;
    TPPASSNO: string;
}

export interface Ids_ioPrizeList {
    PGUBUN: string;
    TJMGNO: string;
    TJPERSONNM: string;
    TPBIRTHDAY_SANG: string;
    TJTPMGNO: string;
    TOMGGTMGNO: string;
    TOTARTENDDATE: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPPASSDATE: string;
    TPPASSNO: string;
}

export interface Ids_ioPrizePop {
    PGUBUN: string;
    TJMGNO: string;
    TJPERSONNM: string;
    TPBIRTHDAY_SANG: string;
    TJTPMGNO: string;
    TOMGGTMGNO: string;
    TOTARTENDDATE: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPPASSDATE: string;
    TPPASSNO: string;
    TOHJUBSUNO: string;
}

export interface Ids_ioPrizePop2 {
    PGUBUN: string;
    TJMGNO: string;
    TJPERSONNM: string;
    TPBIRTHDAY_SANG: string;
    TJTPMGNO: string;
    TOMGGTMGNO: string;
    TOTARTENDDATE: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPPASSDATE: string;
    TPPASSNO: string;
    TOHJUBSUNO: string;
}

export const useFrmtraining0270MPrizeAwardList = () => {
    const [ds_oPassYn, setds_oPassYn] = useState<Ids_oPassYn[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRepayYn, setds_oRepayYn] = useState<Ids_oRepayYn[]>([]);
    const [ds_ioPrize, setds_ioPrize] = useState<Ids_ioPrize[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oPrizeGubun, setds_oPrizeGubun] = useState<Ids_oPrizeGubun[]>([]);
    const [ds_oPrizeImageGubun, setds_oPrizeImageGubun] = useState<Ids_oPrizeImageGubun[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioReport2, setds_ioReport2] = useState<Ids_ioReport2[]>([]);
    const [ds_ioPrizeList, setds_ioPrizeList] = useState<Ids_ioPrizeList[]>([]);
    const [ds_ioPrizePop, setds_ioPrizePop] = useState<Ids_ioPrizePop[]>([]);
    const [ds_ioPrizePop2, setds_ioPrizePop2] = useState<Ids_ioPrizePop2[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPassYn([]);
            setds_oCourse([]);
            setds_oRepayYn([]);
            setds_ioPrize([]);
            setds_oJibu([]);
            setds_oPrizeGubun([]);
            setds_oPrizeImageGubun([]);
            setds_ioReport([]);
            setds_ioReport2([]);
            setds_ioPrizeList([]);
            setds_ioPrizePop([]);
            setds_ioPrizePop2([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPrintPrizeIssue_OnClick = () => {
        console.log('btnPrintPrizeIssue_OnClick clicked');
    };
    const btnPrintPrize_OnClick = () => {
        console.log('btnPrintPrize_OnClick clicked');
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
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_oPassYn,
        ds_oCourse,
        ds_oRepayYn,
        ds_ioPrize,
        ds_oJibu,
        ds_oPrizeGubun,
        ds_oPrizeImageGubun,
        ds_ioReport,
        ds_ioReport2,
        ds_ioPrizeList,
        ds_ioPrizePop,
        ds_ioPrizePop2,
        btnMutilSort_OnClick,
        btnPrintPrizeIssue_OnClick,
        btnPrintPrize_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
        lfn_localExcel,
    };
};