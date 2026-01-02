// @ts-nocheck
export const Frmspcledu0040MTrainingAbsentManagementData = {};

export interface Ids_ioTrainingAbsent {
    TJADDR1?: string;
    TJADDR2?: string;
    TJMGNO?: number;
    TJPERSONNM?: string;
    TJRESIDENTNO?: string;
    TOENDDATE?: string;
    TOHJUBSUNO?: number;
    TOSTARTDATE?: string;
    BIRTHDAY?: string;
    ADAY1?: string;
    ADAY2?: string;
    ADAY3?: string;
    ADAY4?: string;
    ADAY5?: string;
    TOMGJIBUCD?: string;
    TOYEAR?: string;
    TOTCCOURSECD?: string;
    TOTRAININGORDER?: string;
    SEL?: string;
    TOMUNJEGUBUN?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oAbsentDateGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAbsentDateGubun: Ids_oAbsentDateGubun[] = [
    { CD: '1', DATA: '1일차' },
    { CD: '2', DATA: '2일차' },
    { CD: '3', DATA: '3일차' },
    { CD: '4', DATA: '4일차' },
    { CD: '5', DATA: '5일차' },
];

export interface Ids_oTrainingJubsuCnt {
    TJMGNO?: string;
    TOTCCOURSECD?: string;
    TOMUNJEGUBUN?: string;
}

export interface Ids_oAbsentDateGubun1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAbsentDateGubun1: Ids_oAbsentDateGubun1[] = [
    { CD: '1', DATA: '1일차' },
];

export interface Ids_oAbsentDateGubun2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAbsentDateGubun2: Ids_oAbsentDateGubun2[] = [
    { CD: '1', DATA: '1일차' },
    { CD: '2', DATA: '2일차' },
];

export interface Ids_oAbsentDateGubun3 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAbsentDateGubun3: Ids_oAbsentDateGubun3[] = [
    { CD: '1', DATA: '1일차' },
    { CD: '2', DATA: '2일차' },
    { CD: '3', DATA: '3일차' },
];

export interface Ids_oAbsentDateGubun4 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAbsentDateGubun4: Ids_oAbsentDateGubun4[] = [
    { CD: '1', DATA: '1일차' },
    { CD: '2', DATA: '2일차' },
    { CD: '3', DATA: '3일차' },
    { CD: '4', DATA: '4일차' },
];
