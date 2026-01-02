// @ts-nocheck
export const Frmcust6590MNewDataMatchReportData = {};

export interface Ids_ioExcept {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioExcept: Ids_ioExcept[] = [
    { CD: 'Y', DATA: '포함' },
    { CD: 'N', DATA: '미포함' },
];

export interface Ids_ioOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioOrder: Ids_ioOrder[] = [
    { CD: '1', DATA: '대상물명(청), 소방관서(청)' },
    { CD: '2', DATA: '소방관서(청), 대상물명(청)' },
    { CD: '3', DATA: '대상물명(안전원), 지역(안전원)' },
    { CD: '4', DATA: '지역(안전원), 대상물명(안전원)' },
];

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '1', DATA: '전체' },
    { CD: '2', DATA: '선택' },
];

export interface Ids_ioReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioReport: Ids_ioReport[] = [
    { CD: '1', DATA: '일별 집계' },
    { CD: '2', DATA: '일별 리스트' },
];

export interface Ids_oFireStation {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oDATA {
}

export interface Ids_ioFireStation {
    BID?: string;
    SID?: string;
    CID?: string;
    GMGNO?: string;
    RCD?: string;
    SNM ?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioStatus: Ids_ioStatus[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '기존대상일치화' },
    { CD: '1', DATA: '신규대상연계' },
];

export interface Ids_ioYear {
    CD?: string;
}

export interface Ids_ioCourse {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourse: Ids_ioCourse[] = [
    { CD: '1', DATA: '소방안전관리자' },
    { CD: '3', DATA: '위험물안전관리자' },
    { CD: '5', DATA: '소방기술자' },
    { CD: '8', DATA: '위험물운송자' },
];
