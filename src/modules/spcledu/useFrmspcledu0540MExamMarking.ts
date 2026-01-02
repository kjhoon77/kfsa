// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oExamOrder {
    EOMGNO: string;
    JJIBUNICK: string;
    EOYEAR: string;
    TCCOURSENM: string;
    EOEXAMORDER: string;
    EOEXAMDATE: string;
    TCCOURSECD: string;
    EXAMNM: string;
}

export interface Ids_oCorrectAnswer {
    CATCCOURSECD: string;
    CAEPNUMTYPE: string;
    CAEPALPHATYPE: string;
    CAITEMNO: string;
    CACORRECTCNT: string;
    CAITEMSCORE: string;
    CACORRECTANSWER: string;
}

export interface Ids_oAnswerPaper {
    APSEQ: string;
    APREPEATNO: string;
    APEOMGNO: string;
    APAPLEXAMNO: string;
    APTCCOURSECD: string;
    APNUMTYPE: string;
    APALPHATYPE: string;
    APCAITEMNO: string;
    APANSWER: string;
    APANSWERYN: string;
    APITEMSCORE: string;
    APEXAMROOM: string;
}

export interface Ids_iAnswerPaper {
    APSEQ: string;
    APREPEATNO: string;
    APEOMGNO: string;
    APAPLEXAMNO: string;
    APTCCOURSECD: string;
    APNUMTYPE: string;
    APALPHATYPE: string;
    APCAITEMNO: string;
    APANSWER: string;
    APANSWERYN: string;
    APITEMSCORE: string;
    APEXAMROOM: string;
}

export interface Ids_iAnswerAnalysis {
    AAEOMGNO: string;
    AATCCOURSECD: string;
    AACAEPNUMTYPE: string;
    AACAEPALPHATYPE: string;
    AACAITEMNO: string;
    AAREPEATNO: string;
    AACORRECTCNT: string;
    AAMARKINGCNT: string;
    AACORRECTPERCENT: string;
    AA1CNT: string;
    AA2CNT: string;
    AA3CNT: string;
    AA4CNT: string;
    AAEMPTYCNT: string;
    AADOUBLECNT: string;
}

export interface Ids_ioExamResult {
    EREJMGNO: string;
    ERSEQ: string;
    ERREPEATNO: string;
    ERAPLEXAMNO: string;
    ERPASSYN: string;
    ERPASSDATE: string;
    ERSCORE: string;
    ERRANK: string;
    ERCORRECTCNT: string;
}

export interface Ids_ioServerSend {
    SSHEOMGNO: string;
    SSHREPEATNO: string;
    SSHSENDYN: string;
}

export interface Ids_oCorrectAnswerTmp {
    CATCCOURSECD: string;
    CAEPNUMTYPE: string;
    CAEPALPHATYPE: string;
    CAITEMNO: string;
    CACORRECTCNT: string;
    CAITEMSCORE: string;
    CACORRECTANSWER: string;
}

export const useFrmspcledu0540MExamMarking = () => {
    const [ds_oExamOrder, setds_oExamOrder] = useState<Ids_oExamOrder[]>([]);
    const [ds_oCorrectAnswer, setds_oCorrectAnswer] = useState<Ids_oCorrectAnswer[]>([]);
    const [ds_oAnswerPaper, setds_oAnswerPaper] = useState<Ids_oAnswerPaper[]>([]);
    const [ds_iAnswerPaper, setds_iAnswerPaper] = useState<Ids_iAnswerPaper[]>([]);
    const [ds_iAnswerAnalysis, setds_iAnswerAnalysis] = useState<Ids_iAnswerAnalysis[]>([]);
    const [ds_ioExamResult, setds_ioExamResult] = useState<Ids_ioExamResult[]>([]);
    const [ds_ioServerSend, setds_ioServerSend] = useState<Ids_ioServerSend[]>([]);
    const [ds_oCorrectAnswerTmp, setds_oCorrectAnswerTmp] = useState<Ids_oCorrectAnswerTmp[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oExamOrder([]);
            setds_oCorrectAnswer([]);
            setds_oAnswerPaper([]);
            setds_iAnswerPaper([]);
            setds_iAnswerAnalysis([]);
            setds_ioExamResult([]);
            setds_ioServerSend([]);
            setds_oCorrectAnswerTmp([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcuteMark_OnClick = () => {
        console.log('btnExcuteMark_OnClick clicked');
    };
    const btnNext_OnClick = () => {
        console.log('btnNext_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_oExamOrder,
        ds_oCorrectAnswer,
        ds_oAnswerPaper,
        ds_iAnswerPaper,
        ds_iAnswerAnalysis,
        ds_ioExamResult,
        ds_ioServerSend,
        ds_oCorrectAnswerTmp,
        btnExcuteMark_OnClick,
        btnNext_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};