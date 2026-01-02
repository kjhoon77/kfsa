// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioExamList {
}

export interface Ids_oRepeatNo {
    SSHEOMGNO: string;
    SSHREPEATNO: string;
    SSHSENDYN: string;
    DATA: string;
}

export interface Ids_iPassGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport {
}

export interface Ids_ioExamFailList {
    SEL: string;
    EJMGNO: string;
    EJTPMGNO: string;
    EJPERSONNM: string;
    BIRTHDAY: string;
    EJLASTSUNAPGUBUN: string;
    EJZZIPCD: string;
    EJADDR1: string;
    EJADDR2: string;
    EJBULDNM: string;
    EJBULDADDR: string;
    EJEXPYN: string;
    EJPASSYN: string;
    EJCANCELREASON: string;
    EJCANCELPSABUN: string;
    EJIIIMGSEQ: string;
    ERAPLEXAMNO: string;
    EOTCCOURSECD: string;
    TPPASSNO: string;
    TPSTARTDATE: string;
    TPENDDATE: string;
    TCTERMTIME: string;
}

export interface Ids_ioReportFilter {
}

export const useFrmtraining0620MExamFailPassDiplomaPrint = () => {
    const [ds_ioExamList, setds_ioExamList] = useState<Ids_ioExamList[]>([]);
    const [ds_oRepeatNo, setds_oRepeatNo] = useState<Ids_oRepeatNo[]>([]);
    const [ds_iPassGubun, setds_iPassGubun] = useState<Ids_iPassGubun[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioExamFailList, setds_ioExamFailList] = useState<Ids_ioExamFailList[]>([]);
    const [ds_ioReportFilter, setds_ioReportFilter] = useState<Ids_ioReportFilter[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamList([]);
            setds_oRepeatNo([]);
            setds_iPassGubun([]);
            setds_ioReport([]);
            setds_ioExamFailList([]);
            setds_ioReportFilter([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnNext_OnClick = () => {
        console.log('btnNext_OnClick clicked');
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
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioExamList,
        ds_oRepeatNo,
        ds_iPassGubun,
        ds_ioReport,
        ds_ioExamFailList,
        ds_ioReportFilter,
        btnMutilSort_OnClick,
        btnNext_OnClick,
        lfn_End,
        lfn_Excel,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};