// @ts-nocheck
export const Frmtraining0520MExamAnswerPaperInputData = {};

export interface Ids_ioExamAns {
    CCCD?: string;
    CCCDNM?: string;
    CCGROUPCD?: string;
    CCORDERSEQ?: number;
    CCREMARK?: string;
    USE_YN?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCourse: Ids_oCourse[] = [
    { CD: '', DATA: '없음' },
    { CD: '01', DATA: '공공기관' },
    { CD: '02', DATA: '1급소관' },
    { CD: '03', DATA: '2급소관' },
    { CD: '04', DATA: '위과' },
    { CD: '05', DATA: '운송자' },
    { CD: '06', DATA: '통합자' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oInternetJubsuStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oInternetJubsuStatus: Ids_oInternetJubsuStatus[] = [
    { CD: '02', DATA: '접수완료' },
];

export interface Ids_oSunapGubun {
    CD?: string;
    DATA?: string;
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

export interface Ids_oUseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oUseYn: Ids_oUseYn[] = [
    { CD: 'Y', DATA: 'Yes' },
    { CD: 'N', DATA: 'No' },
];

export interface Ids_oSearchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSearchGubun: Ids_oSearchGubun[] = [
    { CD: 'ANS', DATA: '답지기준' },
    { CD: 'JUBSU', DATA: '응시자목록기준' },
];

export interface Ids_oExamList {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oExamList: Ids_oExamList[] = [
    { CD: '1', DATA: '1일차' },
    { CD: '2', DATA: '2일차' },
    { CD: '3', DATA: '3일차' },
    { CD: '4', DATA: '4일차' },
    { CD: '5', DATA: '5일차' },
];

export interface Ids_oExamOrder {
    EOMGNO?: string;
    JJIBUNICK?: string;
    EOYEAR?: string;
    EOTCCOURSENM?: string;
    EOEXAMORDER?: string;
    EOEXAMDATE?: string;
    EXAMNM?: string;
    TCCOURSECD?: string;
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
