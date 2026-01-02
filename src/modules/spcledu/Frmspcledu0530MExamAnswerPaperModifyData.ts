// @ts-nocheck
export const Frmspcledu0530MExamAnswerPaperModifyData = {};

export interface Ids_ioExamAns {
    EJMGNO?: string;
    EOHJUBSUNO?: string;
    EOTCCOURSECD?: string;
    TCCOURSENM?: string;
    EOEXAMORDER?: string;
    EJPERSONNM?: string;
    APSEQ?: string;
    APAPLEXAMNO?: string;
    EREXAMROOM?: string;
    APALPHATYPE?: string;
    APNUMTYPE?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCourse: Ids_oCourse[] = [
    { CD: '', DATA: '없음' },
    { CD: '20', DATA: '공공방관' },
    { CD: '21', DATA: '1급방관' },
    { CD: '22', DATA: '2급방관' },
    { CD: '24', DATA: '위관' },
    { CD: '28', DATA: '운송자' },
    { CD: '29', DATA: '통합자' },
];

export interface Ids_oSearchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSearchGubun: Ids_oSearchGubun[] = [
    { CD: 'ANS', DATA: '답지기준' },
    { CD: 'JUBSU', DATA: '응시자목록기준' },
];

export interface Ids_oExamOrder {
    EOMGNO?: string;
    JJIBUNICK?: string;
    EOYEAR?: string;
    EOTCCOURSENM?: string;
    EOEXAMORDER?: string;
    EOEXAMDATE?: string;
    EXAMNM?: string;
}

export interface Ids_ioAnswerPaper {
    APCAITEMNO?: string;
    APEXAMROOM?: string;
    APAPLEXAMNO?: string;
    APTCCOURSECD?: string;
    APALPHATYPE?: string;
    APANSWER?: string;
}

export interface Ids_ioExamAnsCopy {
    APSEQ?: number;
    EPCOURSECD?: string;
    EPNUMTYPE?: string;
    EPALPHATYPE?: string;
    EJMGNO?: number;
    EOHJUBSUNO?: string;
    EREXAMROOM?: string;
    SEL?: string;
    TCCOURSENM?: string;
    TPPERSONNM?: string;
    CAITEMNO?: number;
    APANSWER?: string;
}

export interface Ids_oType {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oType: Ids_oType[] = [
    { CD: '', DATA: '없음' },
    { CD: 'A', DATA: 'A' },
    { CD: 'B', DATA: 'B' },
    { CD: 'C', DATA: 'C' },
    { CD: 'D', DATA: 'D' },
];

export interface Ids_oExamAnsCnt {
}

export interface Ids_oExamRepeat {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oExamRepeat: Ids_oExamRepeat[] = [
    { CD: '1', DATA: '1' },
    { CD: '2', DATA: '2' },
    { CD: '3', DATA: '3' },
    { CD: '4', DATA: '4' },
    { CD: '5', DATA: '5' },
];
