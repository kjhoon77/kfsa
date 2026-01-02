// @ts-nocheck
export const Frmspcledu0670MExamPayAmountSumStatisticsData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioExamJubsuCommissionStatistics {
    EJEXAMDATE?: string;
    EJEXAMDATE2?: string;
    EOMGGTMGNO?: string;
    EOTCCOURSECD?: string;
    EOYEAR?: string;
    ESPROCDATE?: string;
    ESPROCDATE2?: string;
    RECEIVE_COUNT1?: number;
    RECEIVE_COUNT2?: number;
    RECEIVE_COUNT3?: number;
    RECEIVE_COUNT4?: number;
    RECEIVE_COUNT5?: number;
    RECEIVE_COUNT6?: number;
    RECEIVE_COUNT7?: number;
    RECEIVE_COUNT8?: number;
    RECEIVE_COUNT9?: number;
    RECEIVE_MONEY1?: number;
    RECEIVE_MONEY2?: number;
    RECEIVE_MONEY3?: number;
    RECEIVE_MONEY4?: number;
    RECEIVE_MONEY5?: number;
    RECEIVE_MONEY6?: number;
    RECEIVE_MONEY7?: number;
    RECEIVE_MONEY8?: number;
    RECEIVE_MONEY9?: number;
    RECEIVE_MONEYSUM?: number;
    RECEIVESUM?: number;
    REFUND_COUNT1?: number;
    REFUND_COUNT2?: number;
    REFUND_COUNT3?: number;
    REFUND_COUNT4?: number;
    REFUND_COUNT5?: number;
    REFUND_COUNT6?: number;
    REFUND_COUNT7?: number;
    REFUND_COUNT8?: number;
    REFUND_COUNT9?: number;
    REFUND_MONEY1?: number;
    REFUND_MONEY2?: number;
    REFUND_MONEY3?: number;
    REFUND_MONEY4?: number;
    REFUND_MONEY5?: number;
    REFUND_MONEY6?: number;
    REFUND_MONEY7?: number;
    REFUND_MONEY8?: number;
    REFUND_MONEY9?: number;
    REFUND_MONEYSUM?: number;
    REFUND_SUM?: number;
    SUMCOUNT?: number;
    SUMMONEY?: number;
    ESMGGTMGNO?: string;
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
    { CD: 'N', DATA: '정규' },
    { CD: 'M', DATA: '면제' },
];

export interface Ids_oWork_Gubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWork_Gubun: Ids_oWork_Gubun[] = [
    { CD: '1', DATA: '시험일자' },
    { CD: '2', DATA: '수납일자' },
];

export interface Ids_oSuNabGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSuNabGubun: Ids_oSuNabGubun[] = [
    { CD: '01', DATA: '수납' },
    { CD: '02', DATA: '환불' },
    { CD: '11', DATA: '회계수납' },
    { CD: '12', DATA: '회계환불' },
];
