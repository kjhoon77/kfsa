// @ts-nocheck
export const Frmtraining0150MTrainingPassSumOrderStatisticsData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTrainingPassSumOrderStatistics {
    INCNT?: number;
    INOUTCNT?: number;
    JUBSUCNT?: number;
    MINABAMT?: number;
    MUNJE?: string;
    OUTCNT?: number;
    PASSCNT?: number;
    REPAYCNT?: number;
    SUNABCNT?: number;
    TCCOURSENM?: string;
    TOTRAININGORDER?: string;
    TPPASSDATE?: number;
}

export interface Ids_oCourseGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCourseGubun: Ids_oCourseGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'N', DATA: '일반' },
    { CD: 'Y', DATA: '면제' },
    { CD: 'C', DATA: '혼합(사이버+소집)' },
];

export interface Ids_oOnlineGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oOnlineGubun: Ids_oOnlineGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'N', DATA: '소집' },
    { CD: 'Y', DATA: '온라인' },
    { CD: 'X', DATA: '블라인드' },
    { CD: 'Z', DATA: '혼용' },
];
