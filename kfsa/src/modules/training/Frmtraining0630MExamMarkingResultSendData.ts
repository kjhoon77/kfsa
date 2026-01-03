// @ts-nocheck
export const Frmtraining0630MExamMarkingResultSendData = {};

export interface Ids_ioExamResult {
    EREJMGNO?: string;
    ERSEQ?: string;
    ERREPEATNO?: string;
    ERAPLEXAMNO?: string;
    ERPASSYN?: string;
    ERPASSDATE?: string;
    ERSCORE?: string;
    ERRANK?: string;
    ERCORRECTCNT?: string;
    ERREGDATE?: string;
    ERREGSABUN?: string;
    ERMODDATE?: string;
    ERMODSABUN?: string;
    ERSCORE2?: string;
    ERSCOREAVG?: string;
    EJPASSYN?: string;
}

export interface Ids_ioAnswerAnalysis {
    AATCCOURSECD?: string;
    AACAEPNUMTYPE?: string;
    AACAEPALPHATYPE?: string;
    AACAITEMNO?: string;
    AAREPEATNO?: string;
    AAEOMGNO?: string;
    AACORRECTCNT?: string;
    AAMARKINGCNT?: string;
    AACORRECTPERCENT?: string;
    AA1CNT?: string;
    AA2CNT?: string;
    AA3CNT?: string;
    AA4CNT?: string;
    AAEMPTYCNT?: string;
    AADOUBLECNT?: string;
    AAREGDATE?: string;
    AAREGSABUN?: string;
    AAMODDATE?: string;
    AAMODSABUN?: string;
}

export interface Ids_ioExamList {
    EOMGNO?: string;
    EOYEAR?: string;
    EOEXAMORDER?: string;
    EOEXAMDATE?: string;
    TCCOURSECD?: string;
    EOTCCOURSENM?: string;
    JJIBUNICK?: string;
    EXAMNM?: string;
}

export interface Ids_oAnswerPaper {
    APSEQ?: string;
    APREPEATNO?: string;
    APEOMGNO?: string;
    APAPLEXAMNO?: string;
    APTCCOURSECD?: string;
    APNUMTYPE?: string;
    APALPHATYPE?: string;
    APCAITEMNO?: string;
    APANSWER?: string;
    APANSWERYN?: string;
    APITEMSCORE?: string;
    APEXAMROOM?: string;
}

export interface Ids_iAnswerPaper {
    APSEQ?: string;
    APREPEATNO?: string;
    APEOMGNO?: string;
    APAPLEXAMNO?: string;
    APTCCOURSECD?: string;
    APNUMTYPE?: string;
    APALPHATYPE?: string;
    APCAITEMNO?: string;
    APANSWER?: string;
    APANSWERYN?: string;
    APITEMSCORE?: string;
    APEXAMROOM?: string;
}

export interface Ids_oExamResultCnt {
}

export interface Ids_ioServerSendH {
    SEL?: string;
    SSHEOMGNO?: string;
    SSHREPEATNO?: string;
    SSHSENDYN?: string;
    JUBSUCNT?: string;
    EXAMCNT?: string;
    MARKCNT?: string;
    SENDCNT?: string;
}

export interface Ids_ioTrainingPassH {
    TPHTPTJMGNO?: string;
    TPHSEQ?: string;
    TPHDATE?: string;
    TPHTRUTHCD?: string;
    TPHREGDATE?: string;
    TPHREGSABUN?: string;
    TPHMODDATE?: string;
    TPHMODSABUN?: string;
}

export interface Ids_ioInsertOmrFile {
    AFEJMGNO?: string;
    AFSEQ?: string;
    AFPATH?: string;
    AFFILENM?: string;
    AFREGDATE?: string;
    AFREGSABUN?: string;
    EOYEAR?: string;
    EOTCCOURSECD?: string;
    EOEXAMORDER?: string;
    AFTRANS?: string;
    AFORDER?: string;
    AFSUBJECTGUBUN?: string;
}

export interface Ids_ioSelectOmrFile {
    AFEJMGNO?: string;
    EOYEAR?: string;
    EOTCCOURSECD?: string;
    EOEXAMORDER?: string;
    AFSUBJECTGUBUN?: string;
}

export interface Ids_oAlphaTypeAvg {
}
