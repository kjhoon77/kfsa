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

export interface Ids_oTrainingJubsu {
    BIRTHDAY: string;
    GTDEPTNM: string;
    GTTEAMNM: string;
    TCCOURSENM: string;
    TJADDR: string;
    TJADDR1: string;
    TJADDR2: string;
    TJAMOUNTGUBUN: string;
    TJBARCODE: string;
    TJIIIMGSEQ: string;
    TJJUBSUYN: string;
    TJLASTSUNAPGUBUN: string;
    TJLASTTJHSEQ: string;
    TJLASTTOHSEQ: string;
    TJLASTTSSEQ: string;
    TJMGNO: string;
    TJPASSYN: string;
    TJPERSONNM: string;
    TJREFUNDYN: string;
    TJREMARK: string;
    TJREMARKCD: string;
    PERSONKEY: string;
    TJTPMGNO: string;
    TJZIPCD: string;
    TOBOSUGUBUN: string;
    TOCOURSEGUBUN: string;
    TOEDUCONTENTS: string;
    TOEDUREMARK: string;
    TOENDDATE: string;
    TOENDTIME: string;
    TOEPMGNO: string;
    TOHAFTERJUBSUNO: string;
    TOHAFTERTOMGNO: string;
    TOHBOOKINGSEATNO: string;
    TOHDECISIONSEATNO: string;
    TOHJUBSUGUBUN: string;
    TOHJUBSUNO: string;
    TOHLASTGUBUN: string;
    TOHPROCDATE: string;
    TOHPSABUN: string;
    TOHSEATCHANGEYN: string;
    TOHSEQ: string;
    TOJUBSUSTATUS: string;
    TOMAILNOTICE: string;
    TOMGGTMGNO: string;
    TOMGNO: string;
    TOMUNJEGUBUN: string;
    TOREMARK: string;
    TOSTARTDATE: string;
    TOSTARTTIME: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPEMAIL: string;
    TPEMAILDOMAIN: string;
    TPEMAILID: string;
    TPHPTEL: string;
    TPTEL: string;
    EPNM: string;
    EPEDUPLACEINFO: string;
    EPPARKINGINFO: string;
    TJCOMPNM: string;
    SEL: string;
    TJBOOKPRINTTOMGNO: string;
    PMITEM1: string;
    PMITEM2: string;
    PMITEM3: string;
    PMITEM4: string;
    DTLTOTAMT: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oMunjeGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCourseMunje {
    CD: string;
    DATA: string;
}

export interface Ids_oLicenseYn {
    CD: string;
    DATA: string;
}

export interface Ids_oLastGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport {
    BIRTHDAY: string;
    GTDEPTNM: string;
    GTTEAMNM: string;
    TCCOURSENM: string;
    TJADDR: string;
    TJADDR1: string;
    TJADDR2: string;
    TJAMOUNTGUBUN: string;
    TJBARCODE: string;
    TJIIIMGSEQ: string;
    TJJUBSUYN: string;
    TJLASTSUNAPGUBUN: string;
    TJLASTTJHSEQ: string;
    TJLASTTOHSEQ: string;
    TJLASTTSSEQ: string;
    TJMGNO: string;
    TJPASSYN: string;
    TJPERSONNM: string;
    TJREFUNDYN: string;
    TJREMARK: string;
    TJREMARKCD: string;
    PERSONKEY: string;
    TJTPMGNO: string;
    TJZIPCD: string;
    TOBOSUGUBUN: string;
    TOCOURSEGUBUN: string;
    TOEDUCONTENTS: string;
    TOEDUREMARK: string;
    TOENDDATE: string;
    TOENDTIME: string;
    TOEPMGNO: string;
    TOHAFTERJUBSUNO: string;
    TOHAFTERTOMGNO: string;
    TOHBOOKINGSEATNO: string;
    TOHDECISIONSEATNO: string;
    TOHJUBSUGUBUN: string;
    TOHJUBSUNO: string;
    TOHLASTGUBUN: string;
    TOHPROCDATE: string;
    TOHPSABUN: string;
    TOHSEATCHANGEYN: string;
    TOHSEQ: string;
    TOJUBSUSTATUS: string;
    TOMAILNOTICE: string;
    TOMGGTMGNO: string;
    TOMGNO: string;
    TOMUNJEGUBUN: string;
    TOREMARK: string;
    TOSTARTDATE: string;
    TOSTARTTIME: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPEMAIL: string;
    TPEMAILDOMAIN: string;
    TPEMAILID: string;
    TPHPTEL: string;
    TPTEL: string;
    EPNM: string;
    EPEDUPLACEINFO: string;
    EPPARKINGINFO: string;
    TJCOMPNM: string;
    SEL: string;
    TJBOOKPRINTTOMGNO: string;
    PMITEM1: string;
    PMITEM2: string;
    PMITEM3: string;
    PMITEM4: string;
    DTLTOTAMT: string;
}

export interface Ids_ioReportFilter {
    BIRTHDAY: string;
    GTDEPTNM: string;
    GTTEAMNM: string;
    TCCOURSENM: string;
    TJADDR: string;
    TJADDR1: string;
    TJADDR2: string;
    TJAMOUNTGUBUN: string;
    TJBARCODE: string;
    TJIIIMGSEQ: string;
    TJJUBSUYN: string;
    TJLASTSUNAPGUBUN: string;
    TJLASTTJHSEQ: string;
    TJLASTTOHSEQ: string;
    TJLASTTSSEQ: string;
    TJMGNO: string;
    TJPASSYN: string;
    TJPERSONNM: string;
    TJREFUNDYN: string;
    TJREMARK: string;
    TJREMARKCD: string;
    PERSONKEY: string;
    TJTPMGNO: string;
    TJZIPCD: string;
    TOBOSUGUBUN: string;
    TOCOURSEGUBUN: string;
    TOEDUCONTENTS: string;
    TOEDUREMARK: string;
    TOENDDATE: string;
    TOENDTIME: string;
    TOEPMGNO: string;
    TOHAFTERJUBSUNO: string;
    TOHAFTERTOMGNO: string;
    TOHBOOKINGSEATNO: string;
    TOHDECISIONSEATNO: string;
    TOHJUBSUGUBUN: string;
    TOHJUBSUNO: string;
    TOHLASTGUBUN: string;
    TOHPROCDATE: string;
    TOHPSABUN: string;
    TOHSEATCHANGEYN: string;
    TOHSEQ: string;
    TOJUBSUSTATUS: string;
    TOMAILNOTICE: string;
    TOMGGTMGNO: string;
    TOMGNO: string;
    TOMUNJEGUBUN: string;
    TOREMARK: string;
    TOSTARTDATE: string;
    TOSTARTTIME: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPEMAIL: string;
    TPEMAILDOMAIN: string;
    TPEMAILID: string;
    TPHPTEL: string;
    TPTEL: string;
    EPNM: string;
    EPEDUPLACEINFO: string;
    EPPARKINGINFO: string;
    TJCOMPNM: string;
    SEL: string;
    TJBOOKPRINTTOMGNO: string;
    PMITEM1: string;
    PMITEM2: string;
    PMITEM3: string;
    PMITEM4: string;
    DTLTOTAMT: string;
}

export interface Ids_oAmountGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioEmail {
}

export interface Ids_ioEmailFilter {
}

export interface Ids_ioBook {
}

export interface Ids_ioBookFilter {
}

export interface Ids_oOnlineGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSearchGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport2 {
    BIRTHDAY: string;
    GTDEPTNM: string;
    GTTEAMNM: string;
    TCCOURSENM: string;
    TJADDR: string;
    TJADDR1: string;
    TJADDR2: string;
    TJAMOUNTGUBUN: string;
    TJBARCODE: string;
    TJIIIMGSEQ: string;
    TJJUBSUYN: string;
    TJLASTSUNAPGUBUN: string;
    TJLASTTJHSEQ: string;
    TJLASTTOHSEQ: string;
    TJLASTTSSEQ: string;
    TJMGNO: string;
    TJPASSYN: string;
    TJPERSONNM: string;
    TJREFUNDYN: string;
    TJREMARK: string;
    TJREMARKCD: string;
    PERSONKEY: string;
    TJTPMGNO: string;
    TJZIPCD: string;
    TOBOSUGUBUN: string;
    TOCOURSEGUBUN: string;
    TOEDUCONTENTS: string;
    TOEDUREMARK: string;
    TOENDDATE: string;
    TOENDTIME: string;
    TOEPMGNO: string;
    TOHAFTERJUBSUNO: string;
    TOHAFTERTOMGNO: string;
    TOHBOOKINGSEATNO: string;
    TOHDECISIONSEATNO: string;
    TOHJUBSUGUBUN: string;
    TOHJUBSUNO: string;
    TOHLASTGUBUN: string;
    TOHPROCDATE: string;
    TOHPSABUN: string;
    TOHSEATCHANGEYN: string;
    TOHSEQ: string;
    TOJUBSUSTATUS: string;
    TOMAILNOTICE: string;
    TOMGGTMGNO: string;
    TOMGNO: string;
    TOMUNJEGUBUN: string;
    TOREMARK: string;
    TOSTARTDATE: string;
    TOSTARTTIME: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPEMAIL: string;
    TPEMAILDOMAIN: string;
    TPEMAILID: string;
    TPHPTEL: string;
    TPTEL: string;
    EPNM: string;
    EPEDUPLACEINFO: string;
    EPPARKINGINFO: string;
    TJCOMPNM: string;
    SEL: string;
    TJBOOKPRINTTOMGNO: string;
    PMITEM1: string;
    PMITEM2: string;
    PMITEM3: string;
    PMITEM4: string;
    DTLTOTAMT: string;
}

export interface Igds_oPrintReceiptMast {
    PMRESULT: string;
}

export interface Ids_oTrainingJubsu_Filter {
    BIRTHDAY: string;
    GTDEPTNM: string;
    GTTEAMNM: string;
    TCCOURSENM: string;
    TJADDR: string;
    TJADDR1: string;
    TJADDR2: string;
    TJAMOUNTGUBUN: string;
    TJBARCODE: string;
    TJIIIMGSEQ: string;
    TJJUBSUYN: string;
    TJLASTSUNAPGUBUN: string;
    TJLASTTJHSEQ: string;
    TJLASTTOHSEQ: string;
    TJLASTTSSEQ: string;
    TJMGNO: string;
    TJPASSYN: string;
    TJPERSONNM: string;
    TJREFUNDYN: string;
    TJREMARK: string;
    TJREMARKCD: string;
    PERSONKEY: string;
    TJTPMGNO: string;
    TJZIPCD: string;
    TOBOSUGUBUN: string;
    TOCOURSEGUBUN: string;
    TOEDUCONTENTS: string;
    TOEDUREMARK: string;
    TOENDDATE: string;
    TOENDTIME: string;
    TOEPMGNO: string;
    TOHAFTERJUBSUNO: string;
    TOHAFTERTOMGNO: string;
    TOHBOOKINGSEATNO: string;
    TOHDECISIONSEATNO: string;
    TOHJUBSUGUBUN: string;
    TOHJUBSUNO: string;
    TOHLASTGUBUN: string;
    TOHPROCDATE: string;
    TOHPSABUN: string;
    TOHSEATCHANGEYN: string;
    TOHSEQ: string;
    TOJUBSUSTATUS: string;
    TOMAILNOTICE: string;
    TOMGGTMGNO: string;
    TOMGNO: string;
    TOMUNJEGUBUN: string;
    TOREMARK: string;
    TOSTARTDATE: string;
    TOSTARTTIME: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPEMAIL: string;
    TPEMAILDOMAIN: string;
    TPEMAILID: string;
    TPHPTEL: string;
    TPTEL: string;
    EPNM: string;
    EPEDUPLACEINFO: string;
    EPPARKINGINFO: string;
    TJCOMPNM: string;
    SEL: string;
    TJBOOKPRINTTOMGNO: string;
    PMITEM1: string;
    PMITEM2: string;
    PMITEM3: string;
    PMITEM4: string;
    DTLTOTAMT: string;
}

export const useFrmtraining0030MTrainingJubsuList = () => {
    const [ds_oPassYn, setds_oPassYn] = useState<Ids_oPassYn[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRepayYn, setds_oRepayYn] = useState<Ids_oRepayYn[]>([]);
    const [ds_oTrainingJubsu, setds_oTrainingJubsu] = useState<Ids_oTrainingJubsu[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oMunjeGubun, setds_oMunjeGubun] = useState<Ids_oMunjeGubun[]>([]);
    const [ds_oCourseMunje, setds_oCourseMunje] = useState<Ids_oCourseMunje[]>([]);
    const [ds_oLicenseYn, setds_oLicenseYn] = useState<Ids_oLicenseYn[]>([]);
    const [ds_oLastGubun, setds_oLastGubun] = useState<Ids_oLastGubun[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioReportFilter, setds_ioReportFilter] = useState<Ids_ioReportFilter[]>([]);
    const [ds_oAmountGubun, setds_oAmountGubun] = useState<Ids_oAmountGubun[]>([]);
    const [ds_ioEmail, setds_ioEmail] = useState<Ids_ioEmail[]>([]);
    const [ds_ioEmailFilter, setds_ioEmailFilter] = useState<Ids_ioEmailFilter[]>([]);
    const [ds_ioBook, setds_ioBook] = useState<Ids_ioBook[]>([]);
    const [ds_ioBookFilter, setds_ioBookFilter] = useState<Ids_ioBookFilter[]>([]);
    const [ds_oOnlineGubun, setds_oOnlineGubun] = useState<Ids_oOnlineGubun[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_ioReport2, setds_ioReport2] = useState<Ids_ioReport2[]>([]);
    const [gds_oPrintReceiptMast, setgds_oPrintReceiptMast] = useState<Igds_oPrintReceiptMast[]>([]);
    const [ds_oTrainingJubsu_Filter, setds_oTrainingJubsu_Filter] = useState<Ids_oTrainingJubsu_Filter[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPassYn([]);
            setds_oCourse([]);
            setds_oRepayYn([]);
            setds_oTrainingJubsu([]);
            setds_oJibu([]);
            setds_oMunjeGubun([]);
            setds_oCourseMunje([]);
            setds_oLicenseYn([]);
            setds_oLastGubun([]);
            setds_ioReport([]);
            setds_ioReportFilter([]);
            setds_oAmountGubun([]);
            setds_ioEmail([]);
            setds_ioEmailFilter([]);
            setds_ioBook([]);
            setds_ioBookFilter([]);
            setds_oOnlineGubun([]);
            setds_oSearchGubun([]);
            setds_ioReport2([]);
            setgds_oPrintReceiptMast([]);
            setds_oTrainingJubsu_Filter([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnFortec_OnClick = () => {
        console.log('btnFortec_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPrintEmail_OnClick = () => {
        console.log('btnPrintEmail_OnClick clicked');
    };
    const btnPrintReRct_OnClick = () => {
        console.log('btnPrintReRct_OnClick clicked');
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
    const lfn_PrintBookAddr = () => {
        console.log('lfn_PrintBookAddr clicked');
    };
    const lfn_PrintEvaluation = () => {
        console.log('lfn_PrintEvaluation clicked');
    };
    const lfn_PrintEvaluation53 = () => {
        console.log('lfn_PrintEvaluation53 clicked');
    };
    const lfn_PrintName = () => {
        console.log('lfn_PrintName clicked');
    };
    const lfn_PrintNameBoard = () => {
        console.log('lfn_PrintNameBoard clicked');
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
        ds_oRepayYn,
        ds_oTrainingJubsu,
        ds_oJibu,
        ds_oMunjeGubun,
        ds_oCourseMunje,
        ds_oLicenseYn,
        ds_oLastGubun,
        ds_ioReport,
        ds_ioReportFilter,
        ds_oAmountGubun,
        ds_ioEmail,
        ds_ioEmailFilter,
        ds_ioBook,
        ds_ioBookFilter,
        ds_oOnlineGubun,
        ds_oSearchGubun,
        ds_ioReport2,
        gds_oPrintReceiptMast,
        ds_oTrainingJubsu_Filter,
        btnFortec_OnClick,
        btnMutilSort_OnClick,
        btnPrintEmail_OnClick,
        btnPrintReRct_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintAll,
        lfn_PrintBookAddr,
        lfn_PrintEvaluation,
        lfn_PrintEvaluation53,
        lfn_PrintName,
        lfn_PrintNameBoard,
        lfn_PrintScreen,
        lfn_Search,
    };
};