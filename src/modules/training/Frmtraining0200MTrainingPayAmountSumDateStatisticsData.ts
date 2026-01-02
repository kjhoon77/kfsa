// @ts-nocheck
export const Frmtraining0200MTrainingPayAmountSumDateStatisticsData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTrainingPayAmountSumDate {
    INCNT?: number;
    INOUTCNT?: number;
    JUBSUCNT?: number;
    OUTCNT?: number;
    REPAYAMT?: number;
    REPAYCNT?: number;
    SUNABAMT?: number;
    SUNABCNT?: number;
    TCCOURSENM?: string;
    TOTALAMT?: number;
    TSPROCDATE?: string;
    REMARK?: string;
    TOYEAR?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: 'M', DATA: '월 단위' },
    { CD: 'T', DATA: '기간 단위' },
];

export interface Ids_oMunjeGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oMunjeGubun: Ids_oMunjeGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'N', DATA: '일반' },
    { CD: 'Y', DATA: '면제' },
];
