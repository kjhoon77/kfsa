// @ts-nocheck
export const Frmtraining0160MTrainingPayAmountSumOrderStatisticsData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTrainingJubsu {
    INCNT?: number;
    INOUTCNT?: number;
    JUBSUCNT?: number;
    MUNJE?: string;
    OUTCNT?: number;
    REPAYAMT?: number;
    REPAYCNT?: number;
    SUNABAMT?: number;
    SUNABCNT?: number;
    TOTALAMT?: number;
    TOTRAININGORDER?: string;
    GTTEAMNM?: string;
    TCCOURSENM?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourseGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCourseGubun: Ids_oCourseGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'N', DATA: '일반' },
    { CD: 'Y', DATA: '면제' },
];

export interface Ids_oTrainingJubsu_0 {
    TPMGNO?: number;
    TPEMAIL?: string;
    TPHPTEL?: string;
    IIIMGSEQ?: number;
    TCCOURSECD?: string;
    THLASTORDERSEQ?: number;
    TJADDR1?: string;
    TJADDR2?: string;
    TJAMOUNTGUBUN?: string;
    TJBULDADDR?: string;
    TJBULDNM?: string;
    TJBUNJI?: string;
    TJCOMPNM?: string;
    TJDONG?: string;
    TJFIREMANYN?: string;
    TJKU?: string;
    TJLASTHISTORYSEQ?: number;
    TJLASTREPAYYN?: string;
    TJLASTSETLMTSEQ?: number;
    TJMGNO?: number;
    TJPASSYN?: string;
    TJPERSONNM?: string;
    TJREFUNDYN?: string;
    TJREMARK?: string;
    TJREMARKCD?: string;
    PERSONKEY?: string;
    TJROADNM?: string;
    TJSIDO?: string;
    TJZIPCD?: string;
    TOENDDATE?: string;
    TOJUBSUNO?: number;
    TOMGNO?: number;
    TOSTARTDATE?: string;
    TOYEAR?: string;
}

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: '1', DATA: '교육일자' },
    { CD: '2', DATA: '수납일자' },
];
