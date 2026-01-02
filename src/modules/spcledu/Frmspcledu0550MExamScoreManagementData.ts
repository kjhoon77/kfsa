// @ts-nocheck
export const Frmspcledu0550MExamScoreManagementData = {};

export interface Ids_oPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPrintGubun: Ids_oPrintGubun[] = [
    { CD: '10', DATA: '성적일람표(응시번호순)' },
    { CD: '20', DATA: '성적일람표(석차순)' },
    { CD: '30', DATA: '합격자명단' },
    { CD: '40', DATA: '불합격자명단' },
    { CD: '50', DATA: '합격자명단(게시용)' },
    { CD: '60', DATA: '불합격자명단(게시용)' },
    { CD: '80', DATA: '점수대별 인원분포' },
    { CD: '90', DATA: '문항분석' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oExamScoreOrderNo {
    BIRTHDAY?: string;
    EJPERSONNM?: string;
    EOEXAMDATE?: string;
    EOEXAMORDER?: string;
    EOYEAR?: string;
    ERAPLEXAMNO?: string;
    ERPASSYN?: string;
    ERRANK?: number;
    ERSCORE?: number;
    GTTEAMNM?: string;
    TCCOURSENM?: string;
    CNT?: string;
}

export interface Ids_oExamPassName {
    BIRTHDAY?: string;
    EJPERSONNM?: string;
    EOEXAMDATE?: string;
    EOEXAMORDER?: string;
    EOYEAR?: string;
    ERAPLEXAMNO?: string;
    ERPASSYN?: string;
    ERRANK?: number;
    ERSCORE?: number;
    GTTEAMNM?: string;
    TCCOURSENM?: string;
    GTPRTSEQ?: string;
}

export interface Ids_oExamNoPassName {
    BIRTHDAY?: string;
    EJPERSONNM?: string;
    EOEXAMDATE?: string;
    EOEXAMORDER?: string;
    EOYEAR?: string;
    ERAPLEXAMNO?: string;
    ERPASSYN?: string;
    ERRANK?: number;
    ERSCORE?: number;
    GTTEAMNM?: string;
    TCCOURSENM?: string;
    GTPRTSEQ?: string;
}

export interface Ids_oSearchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSearchGubun: Ids_oSearchGubun[] = [
    { CD: 'ORDER', DATA: '회차조회' },
    { CD: 'DATE', DATA: '일자조회' },
];

export interface Ids_oExamOrderScoreStat {
}

export interface Ids_oExamJumsuPersonDistribution {
}

export interface Ids_oExamQuestionItemAnalysis {
}

export interface Ids_oExamJubsuCnt {
    JUPSUCNT?: string;
}

export interface Ids_oExamOrder {
    EOMGNO?: string;
    JJIBUNICK?: string;
    EOYEAR?: string;
    EOTCCOURSENM?: string;
    EOEXAMORDER?: string;
    EOEXAMDATE?: string;
    EXAMNM?: string;
}

export interface Ids_oExamRepeat {
    SSHEOMGNO?: string;
    SSHREPEATNO?: string;
    SSHSENDYN?: string;
    DATA?: string;
}
