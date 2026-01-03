// @ts-nocheck
export const Frmtraining0540MExamMarkingData = {};

export interface Ids_oExamOrder {
    EOMGNO?: string;
    JJIBUNICK?: string;
    EOYEAR?: string;
    TCCOURSENM?: string;
    EOEXAMORDER?: string;
    EOEXAMDATE?: string;
    TCCOURSECD?: string;
    EXAMNM?: string;
}

export interface Ids_oCorrectAnswer {
    CATCCOURSECD?: string;
    CAEPNUMTYPE?: string;
    CAEPALPHATYPE?: string;
    CAITEMNO?: number;
    CACORRECTCNT?: string;
    CAITEMSCORE?: string;
    CACORRECTANSWER?: string;
}

export interface Ids_oAnswerPaper {
    APSEQ?: string;
    APREPEATNO?: string;
    APEOMGNO?: string;
    APAPLEXAMNO?: string;
    APTCCOURSECD?: string;
    APNUMTYPE?: string;
    APALPHATYPE?: string;
    APCAITEMNO?: number;
    APANSWER?: string;
    APANSWERYN?: string;
    APITEMSCORE?: number;
    APEXAMROOM?: string;
    APCHASUGUBUN?: string;
    APSUBJECTGUBUN?: string;
}

export interface Ids_iAnswerPaper {
    APSEQ?: string;
    APREPEATNO?: string;
    APEOMGNO?: string;
    APAPLEXAMNO?: string;
    APTCCOURSECD?: string;
    APNUMTYPE?: string;
    APALPHATYPE?: string;
    APCAITEMNO?: number;
    APANSWER?: string;
    APANSWERYN?: string;
    APITEMSCORE?: number;
    APEXAMROOM?: string;
    APCHASUGUBUN?: string;
    APSUBJECTGUBUN?: string;
}

export interface Ids_iAnswerAnalysis {
    AAEOMGNO?: string;
    AATCCOURSECD?: string;
    AACAEPNUMTYPE?: string;
    AACAEPALPHATYPE?: string;
    AACAITEMNO?: number;
    AAREPEATNO?: string;
    AACORRECTCNT?: number;
    AAMARKINGCNT?: number;
    AACORRECTPERCENT?: number;
    AA1CNT?: number;
    AA2CNT?: number;
    AA3CNT?: number;
    AA4CNT?: number;
    AAEMPTYCNT?: number;
    AADOUBLECNT?: number;
}

export interface Ids_ioExamResult {
    EREJMGNO?: string;
    ERSEQ?: string;
    ERREPEATNO?: string;
    ERAPLEXAMNO?: string;
    ERPASSYN?: string;
    ERPASSDATE?: string;
    ERSCORE?: number;
    ERRANK?: string;
    ERCORRECTCNT?: number;
    ERSCORE2?: number;
    ERSORTSCORE?: number;
    ERSCORE3?: number;
}

export interface Ids_ioServerSend {
    SSHEOMGNO?: string;
    SSHREPEATNO?: string;
    SSHSENDYN?: string;
}

export interface Ids_oCorrectAnswerTmp {
    CATCCOURSECD?: string;
    CAEPNUMTYPE?: string;
    CAEPALPHATYPE?: string;
    CAITEMNO?: number;
    CACORRECTCNT?: string;
    CAITEMSCORE?: string;
    CACORRECTANSWER?: string;
}

export interface Ids_oErrorCount {
    ECERRCNT?: string;
}
