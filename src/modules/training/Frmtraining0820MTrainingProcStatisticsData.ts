// @ts-nocheck
export const Frmtraining0820MTrainingProcStatisticsData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioCourseGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseGubun: Ids_ioCourseGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '3', DATA: '정규' },
    { CD: '4', DATA: '특별' },
];

export interface Ids_ioTrainingResult {
}

export interface Ids_ioMunjeGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMunjeGubun: Ids_ioMunjeGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'N', DATA: '일반' },
    { CD: 'Y', DATA: '면제' },
    { CD: 'C', DATA: '혼합' },
];

export interface Ids_oSearchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSearchGubun: Ids_oSearchGubun[] = [
    { CD: 'ORDER', DATA: '교육회차' },
    { CD: 'DATE', DATA: '교육일자' },
];
