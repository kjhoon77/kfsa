// @ts-nocheck
import { useState, useEffect } from 'react';

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
    ERREGDATE: string;
    ERREGSABUN: string;
    ERMODDATE: string;
    ERMODSABUN: string;
}

export interface Ids_ioAnswerAnalysis {
    AATCCOURSECD: string;
    AACAEPNUMTYPE: string;
    AACAEPALPHATYPE: string;
    AACAITEMNO: string;
    AAREPEATNO: string;
    AAEOMGNO: string;
    AACORRECTCNT: string;
    AAMARKINGCNT: string;
    AACORRECTPERCENT: string;
    AA1CNT: string;
    AA2CNT: string;
    AA3CNT: string;
    AA4CNT: string;
    AAEMPTYCNT: string;
    AADOUBLECNT: string;
    AAREGDATE: string;
    AAREGSABUN: string;
    AAMODDATE: string;
    AAMODSABUN: string;
}

export interface Ids_ioExamList {
    EOMGNO: string;
    EOYEAR: string;
    EOEXAMORDER: string;
    EOEXAMDATE: string;
    TCCOURSECD: string;
    EOTCCOURSENM: string;
    JJIBUNICK: string;
    EXAMNM: string;
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

export interface Ids_oExamResultCnt {
}

export interface Ids_ioServerSendH {
    SEL: string;
    SSHEOMGNO: string;
    SSHREPEATNO: string;
    SSHSENDYN: string;
    JUBSUCNT: string;
    EXAMCNT: string;
    MARKCNT: string;
    SENDCNT: string;
}

export interface Ids_ioTrainingPassH {
    TPHTPTJMGNO: string;
    TPHSEQ: string;
    TPHDATE: string;
    TPHTRUTHCD: string;
    TPHREGDATE: string;
    TPHREGSABUN: string;
    TPHMODDATE: string;
    TPHMODSABUN: string;
}

export const useFrmspcledu0630MExamMarkingResultSend = () => {
    const [ds_ioExamResult, setds_ioExamResult] = useState<Ids_ioExamResult[]>([]);
    const [ds_ioAnswerAnalysis, setds_ioAnswerAnalysis] = useState<Ids_ioAnswerAnalysis[]>([]);
    const [ds_ioExamList, setds_ioExamList] = useState<Ids_ioExamList[]>([]);
    const [ds_oAnswerPaper, setds_oAnswerPaper] = useState<Ids_oAnswerPaper[]>([]);
    const [ds_iAnswerPaper, setds_iAnswerPaper] = useState<Ids_iAnswerPaper[]>([]);
    const [ds_oExamResultCnt, setds_oExamResultCnt] = useState<Ids_oExamResultCnt[]>([]);
    const [ds_ioServerSendH, setds_ioServerSendH] = useState<Ids_ioServerSendH[]>([]);
    const [ds_ioTrainingPassH, setds_ioTrainingPassH] = useState<Ids_ioTrainingPassH[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamResult([]);
            setds_ioAnswerAnalysis([]);
            setds_ioExamList([]);
            setds_oAnswerPaper([]);
            setds_iAnswerPaper([]);
            setds_oExamResultCnt([]);
            setds_ioServerSendH([]);
            setds_ioTrainingPassH([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioExamResult,
        ds_ioAnswerAnalysis,
        ds_ioExamList,
        ds_oAnswerPaper,
        ds_iAnswerPaper,
        ds_oExamResultCnt,
        ds_ioServerSendH,
        ds_ioTrainingPassH,
        lfn_End,
        lfn_Save,
    };
};