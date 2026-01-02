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

export interface Ids_oJubsuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oExamJubsu {
    BIRTHDAY: string;
    EJADDR1: string;
    EJADDR2: string;
    EJEXAMDATE: string;
    EJEXPYN: string;
    EJLASTEJHSEQ: string;
    EJLASTEOHSEQ: string;
    EJLASTESSEQ: string;
    EJLASTSUNAPGUBUN: string;
    EJMGNO: string;
    EJPASSYN: string;
    EJPERSONNM: string;
    EJPROCGTMGNO: string;
    EJBIRTHDAY: string;
    EJTPMGNO: string;
    EJZZIPCD: string;
    EOENDTIME: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOEXAMORDERGUBUN: string;
    EOHAFTEREOMGNO: string;
    EOHAFTERJUBSUNO: string;
    EOHPROCDATE: string;
    EOHEOMGNO: string;
    EOHJUBSUGUBUN: string;
    EOHJUBSUNO: string;
    EOHLASTGUBUN: string;
    EOHPROCGTMGNO: string;
    EOHPSABUN: string;
    EOHSEQ: string;
    EOMGGTMGNO: string;
    EOMGNO: string;
    EOSTARTTIME: string;
    EOTCCOURSECD: string;
    EOYEAR: string;
    TFCFEE: string;
    GTDEPTNM: string;
    GTTEAMNM: string;
    IIDIRPATH: string;
    IIREALNM: string;
    TCCOURSENM: string;
    TPHPTEL: string;
    TPTEL: string;
    TPEMAILID: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oExamJubsuTotal {
    EOMGGTMGNO: string;
    GTTEAMNM: string;
    EOYEAR: string;
    EOTCCOURSECD: string;
    TCCOURSENICK: string;
    EJPASSYN: string;
    TOTALCNT: string;
    JUBGUBUN20: string;
    JUBGUBUN00: string;
    JUBGUBUN01: string;
    JUBGUBUN02: string;
    JUBGUBUN05: string;
    JUBGUBUN06: string;
}

export const useFrmtraining0407MExamJubsuGubunList = () => {
    const [ds_oPassYn, setds_oPassYn] = useState<Ids_oPassYn[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJubsuGubun, setds_oJubsuGubun] = useState<Ids_oJubsuGubun[]>([]);
    const [ds_oExamJubsu, setds_oExamJubsu] = useState<Ids_oExamJubsu[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oExamJubsuTotal, setds_oExamJubsuTotal] = useState<Ids_oExamJubsuTotal[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPassYn([]);
            setds_oCourse([]);
            setds_oJubsuGubun([]);
            setds_oExamJubsu([]);
            setds_oJibu([]);
            setds_oExamJubsuTotal([]);
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
    const lfn_PrintAll = () => {
        console.log('lfn_PrintAll clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oPassYn,
        ds_oCourse,
        ds_oJubsuGubun,
        ds_oExamJubsu,
        ds_oJibu,
        ds_oExamJubsuTotal,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintAll,
        lfn_PrintScreen,
        lfn_Search,
    };
};