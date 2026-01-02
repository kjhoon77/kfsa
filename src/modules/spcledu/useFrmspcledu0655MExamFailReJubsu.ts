// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioTrainingExam {
    BIRTHDAY: string;
    EJADDR1: string;
    EJADDR2: string;
    EJEXPYN: string;
    EJIIIMGSEQ: string;
    EJMGNO: string;
    EJPERSONNM: string;
    EJRESIDENTNO: string;
    EJZZIPCD: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOHJUBSUNO: string;
    EOMGNO: string;
    EOTCCOURSECD: string;
    ESPROCAMOUNT: string;
    SEL: string;
    SEL2: string;
    TCCOURSENM: string;
    EJTPMGNO: string;
    TSPM: string;
    REEJMGNO: string;
    REJUBSUNO: string;
    EJHSTATUSCD: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioExamOrder {
    EOENDTIME: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOEXAMORDERGUBUN: string;
    EOINETJUBSUCNT: string;
    EOINETJUBSUYN: string;
    EOJUBSUCNT: string;
    EOJUBSUSTATUS: string;
    EOMGJIBUCD: string;
    EOMGNO: string;
    EOSEATCNT: string;
    EOSTARTTIME: string;
    EOYEAR: string;
    EPMGNO: string;
    MAXJUBSUNO: string;
    NEWJUBSUNO: string;
    TCCOURSECD: string;
    USE_YN: string;
}

export interface Ids_oSunapGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioTrainingExamSettle {
    BIRTHDAY: string;
    EJADDR1: string;
    EJADDR2: string;
    EJEXPYN: string;
    EJIIIMGSEQ: string;
    EJMGNO: string;
    EJPERSONNM: string;
    EJRESIDENTNO: string;
    EJZZIPCD: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOHJUBSUNO: string;
    EOMGNO: string;
    EOTCCOURSECD: string;
    ESPROCAMOUNT: string;
    SEL: string;
    SEL2: string;
    TCCOURSENM: string;
    EJTPMGNO: string;
}

export interface Ids_ioTrainingExamJubsu {
    BIRTHDAY: string;
    EJADDR1: string;
    EJADDR2: string;
    EJEXPYN: string;
    EJIIIMGSEQ: string;
    EJMGNO: string;
    EJPERSONNM: string;
    EJRESIDENTNO: string;
    EJZZIPCD: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOHJUBSUNO: string;
    EOMGNO: string;
    EOTCCOURSECD: string;
    ESPROCAMOUNT: string;
    SEL: string;
    SEL2: string;
    TCCOURSENM: string;
    EJTPMGNO: string;
}

export interface Ids_ioExamJubsuChk {
}

export interface Ids_ioTrainingExamAmt {
    BIRTHDAY: string;
    EJADDR1: string;
    EJADDR2: string;
    EJEXPYN: string;
    EJIIIMGSEQ: string;
    EJMGNO: string;
    EJPERSONNM: string;
    EJRESIDENTNO: string;
    EJZZIPCD: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOHJUBSUNO: string;
    EOMGNO: string;
    EOTCCOURSECD: string;
    ESPROCAMOUNT: string;
    SEL: string;
    SEL2: string;
    TCCOURSENM: string;
    EJTPMGNO: string;
}

export interface Ids_oPrintReceiptMast {
}

export interface Ids_oPrintReceiptDtl {
}

export interface Ids_ioExamPrint {
}

export interface Ids_ioExamOrderMgno {
}

export interface Ids_ioRepayReport {
}

export const useFrmspcledu0655MExamFailReJubsu = () => {
    const [ds_ioTrainingExam, setds_ioTrainingExam] = useState<Ids_ioTrainingExam[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioExamOrder, setds_ioExamOrder] = useState<Ids_ioExamOrder[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_ioTrainingExamSettle, setds_ioTrainingExamSettle] = useState<Ids_ioTrainingExamSettle[]>([]);
    const [ds_ioTrainingExamJubsu, setds_ioTrainingExamJubsu] = useState<Ids_ioTrainingExamJubsu[]>([]);
    const [ds_ioExamJubsuChk, setds_ioExamJubsuChk] = useState<Ids_ioExamJubsuChk[]>([]);
    const [ds_ioTrainingExamAmt, setds_ioTrainingExamAmt] = useState<Ids_ioTrainingExamAmt[]>([]);
    const [ds_oPrintReceiptMast, setds_oPrintReceiptMast] = useState<Ids_oPrintReceiptMast[]>([]);
    const [ds_oPrintReceiptDtl, setds_oPrintReceiptDtl] = useState<Ids_oPrintReceiptDtl[]>([]);
    const [ds_ioExamPrint, setds_ioExamPrint] = useState<Ids_ioExamPrint[]>([]);
    const [ds_ioExamOrderMgno, setds_ioExamOrderMgno] = useState<Ids_ioExamOrderMgno[]>([]);
    const [ds_ioRepayReport, setds_ioRepayReport] = useState<Ids_ioRepayReport[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingExam([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_ioExamOrder([]);
            setds_oSunapGubun([]);
            setds_ioTrainingExamSettle([]);
            setds_ioTrainingExamJubsu([]);
            setds_ioExamJubsuChk([]);
            setds_ioTrainingExamAmt([]);
            setds_oPrintReceiptMast([]);
            setds_oPrintReceiptDtl([]);
            setds_ioExamPrint([]);
            setds_ioExamOrderMgno([]);
            setds_ioRepayReport([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPrintRctTotal_OnClick = () => {
        console.log('btnPrintRctTotal_OnClick clicked');
    };
    const btnReportBatch_OnClick = () => {
        console.log('btnReportBatch_OnClick clicked');
    };
    const btnSearchExamOrder_OnClick = () => {
        console.log('btnSearchExamOrder_OnClick clicked');
    };
    const chkJubsuProcGubun_OnClick = () => {
        console.log('chkJubsuProcGubun_OnClick clicked');
    };
    const chkPonyDate_OnClick = () => {
        console.log('chkPonyDate_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioTrainingExam,
        ds_oCourse,
        ds_oJibu,
        ds_ioExamOrder,
        ds_oSunapGubun,
        ds_ioTrainingExamSettle,
        ds_ioTrainingExamJubsu,
        ds_ioExamJubsuChk,
        ds_ioTrainingExamAmt,
        ds_oPrintReceiptMast,
        ds_oPrintReceiptDtl,
        ds_ioExamPrint,
        ds_ioExamOrderMgno,
        ds_ioRepayReport,
        btnMutilSort_OnClick,
        btnPrintRctTotal_OnClick,
        btnReportBatch_OnClick,
        btnSearchExamOrder_OnClick,
        chkJubsuProcGubun_OnClick,
        chkPonyDate_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};