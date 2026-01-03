// @ts-nocheck
export const Frmspcledu0280MPassDiplomaPrintData = {};

export interface Ids_oSearchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSearchGubun: Ids_oSearchGubun[] = [
    { CD: '01', DATA: '회차+접수번호' },
    { CD: '02', DATA: '수료연번' },
    { CD: '03', DATA: '수료일자' },
    { CD: '04', DATA: '주민번호' },
    { CD: '05', DATA: '회차+합격여부' },
    { CD: '06', DATA: '성명' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioTrainingPass {
    TOMGGTMGNO?: string;
    ERPASSYN?: string;
    JUBSUADDR?: string;
    PPASSDATE_A?: string;
    PPASSNO?: number;
    TOTCCOURSECD?: string;
    TJMGNO?: number;
    TJPERSONNM?: string;
    TJRESIDENTNO_SANG?: string;
    TJRESIDENTNO?: string;
    TJZIPCD?: string;
    TOHJUBSUNO?: number;
    TOMGNO?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    TPMGNO?: number;
    TOEXAMORDER?: string;
    EDUCATIONTIME?: string;
    TCCOURSENM?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioExamCheatReport {
}

export interface Ids_ioReport {
}

export interface Ids_ioReport2 {
}

export interface Ids_oPassGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPassGubun: Ids_oPassGubun[] = [
    { CD: 'Y', DATA: '합격' },
    { CD: 'N', DATA: '불합격' },
    { CD: 'X', DATA: '미응시' },
];
