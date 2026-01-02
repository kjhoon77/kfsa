// @ts-nocheck
export const Frmcust0210MAgreeManagementData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oAgreeList {
}

export interface Ids_oCompare {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCompare: Ids_oCompare[] = [
    { CD: '0', DATA: '=' },
    { CD: '1', DATA: '<=' },
];

export interface Ids_oAgreeCnt {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAgreeCnt: Ids_oAgreeCnt[] = [
    { CD: '', DATA: '전체' },
    { CD: '2', DATA: '2' },
    { CD: '3', DATA: '3' },
    { CD: '4', DATA: '4' },
    { CD: '5', DATA: '5' },
    { CD: '6', DATA: '6' },
    { CD: '7', DATA: '7' },
    { CD: '8', DATA: '8' },
    { CD: '9', DATA: '9' },
    { CD: '10', DATA: '10' },
    { CD: '11', DATA: '11' },
    { CD: '12', DATA: '12' },
    { CD: '13', DATA: '13' },
    { CD: '14', DATA: '14' },
    { CD: '15', DATA: '15' },
    { CD: '16', DATA: '16' },
    { CD: '17', DATA: '17' },
    { CD: '18', DATA: '18' },
    { CD: '19', DATA: '19' },
    { CD: '20', DATA: '20' },
];

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_ioCourseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYn: Ids_ioCourseYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '선택                               ' },
    { CD: '2', DATA: '다중선택' },
];

export interface Ids_ioCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_iAgreeList {
    SJIBU?: string;
    SCOURSE?: string;
    SFMNM?: string;
    SISHP?: string;
}
