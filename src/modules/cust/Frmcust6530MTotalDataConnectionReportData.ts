// @ts-nocheck
export const Frmcust6530MTotalDataConnectionReportData = {};

export interface Ids_ioReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioReport: Ids_ioReport[] = [
    { CD: '1', DATA: '지부별 집계' },
    { CD: '2', DATA: '소방본부별 집계' },
];

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

export interface Ids_oDATA {
}

export interface Ids_ioStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioStatus: Ids_ioStatus[] = [
    { CD: '', DATA: '포함' },
    { CD: '0', DATA: '미포함' },
];
