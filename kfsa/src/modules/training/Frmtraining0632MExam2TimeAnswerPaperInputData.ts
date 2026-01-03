// @ts-nocheck
export const Frmtraining0632MExam2TimeAnswerPaperInputData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioExamJubsu2Score {
    EOMGGTMGNO?: string;
    GTDEPTNM?: string;
    EOMGNO?: string;
    TCCOURSENM?: string;
    EOTCCOURSECD?: string;
    EOYEAR?: string;
    EOEXAMORDER?: string;
    EOHJUBSUNO?: string;
    EJMGNO?: string;
    EJPERSONNM?: string;
    EJBIRTHDAY?: string;
    EJJUBSUGUBUN?: string;
    EJJUBSUREASON?: string;
    EJREJUBSUYN?: string;
    EJCHASUGUBUN?: string;
    EISITEMSCORE?: string;
    ITEMCNT?: string;
    SUBJECT1SCORE?: string;
    SUBJECT2SCORE?: string;
    EISRESULT?: string;
    APLEXAMNO?: string;
    EJOLDPASSYN?: string;
    EOEXAMDATE?: string;
    EXAMDATE?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oSort {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSort: Ids_oSort[] = [
    { CD: 'EOHEXAMSEATNO', DATA: '좌석번호' },
    { CD: 'TPPERSONNM', DATA: '이름' },
    { CD: 'EOHJUBSUNO', DATA: '접수번호' },
];

export interface Ids_oSunab {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunab: Ids_oSunab[] = [
    { CD: 'Y', DATA: '환불' },
    { CD: 'N', DATA: '수납' },
];

export interface Ids_ioExcel {
    EISEOMGNO?: string;
    EISAPLEXAMNO?: string;
    EISPERSONNM?: string;
    EISSUBJECTGUBUN?: string;
    EISITEMSCORE?: string;
}

export interface Ids_ioExcelCopy {
    EISEOMGNO?: string;
    EISAPLEXAMNO?: string;
    EISPERSONNM?: string;
    EISSUBJECTGUBUN?: string;
    EISITEMSCORE?: string;
}

export interface Ids_ioExamResult {
    EREJMGNO?: string;
    ERSEQ?: string;
    ERREPEATNO?: string;
    ERAPLEXAMNO?: string;
    ERPASSYN?: string;
    ERPASSDATE?: string;
    ERSCORE1?: string;
    ERSCORE2?: string;
    ERRANK?: string;
    EJPASSYN?: string;
    ERSCORE?: string;
}
