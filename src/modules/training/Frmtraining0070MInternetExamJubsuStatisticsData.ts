// @ts-nocheck
export const Frmtraining0070MInternetExamJubsuStatisticsData = {};

export interface Ids_oInternetJusu {
    BIRTHDAY?: string;
    TCCOURSENM?: string;
    TJADDR?: string;
    TJPERSONNM?: string;
    TJZIPCD?: string;
    TOENDDATE?: string;
    TOHDECISIONSEATNO?: number;
    TOHJUBSUNO?: string;
    TOHLASTGUBUN?: string;
    TOSTARTDATE?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    TSGUBUN?: string;
    TSGUBUNCD?: string;
    TSPROCDATE?: string;
    TSTRAININGAMOUNT?: number;
    TSPMMGNO?: string;
    TSPMYEAR?: string;
}

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: 'ALL1', DATA: '전체(환불미포함)' },
    { CD: 'ALL2', DATA: '전체(환불포함)' },
    { CD: 'SUNAP', DATA: '수납만' },
    { CD: 'REPAY', DATA: '환불만' },
    { CD: 'ORDER', DATA: '회차변경만' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oInternetJubsuStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oInternetJubsuStatus: Ids_oInternetJubsuStatus[] = [
    { CD: '02', DATA: '접수완료' },
];

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oPrintReceiptMast {
}

export interface Ids_oPrintReceiptDtl {
}

export interface Ids_oJubsuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJubsuGubun: Ids_oJubsuGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '내방' },
    { CD: '2', DATA: '인터넷' },
];
