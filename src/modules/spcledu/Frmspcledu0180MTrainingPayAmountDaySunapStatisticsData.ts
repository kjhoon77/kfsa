// @ts-nocheck
export const Frmspcledu0180MTrainingPayAmountDaySunapStatisticsData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oSort {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSort: Ids_oSort[] = [
    { CD: 'INPUT', DATA: '입력순' },
    { CD: 'WORKGUBUN', DATA: '처리구분' },
    { CD: 'JUBSUNO', DATA: '접수번호' },
    { CD: 'JUBSUGUBUN', DATA: '접수방법' },
];

export interface Ids_oTrainingPayAmount {
    BIRTHDAY?: string;
    MUNJEGUBUN?: string;
    PNM?: string;
    SUNAPGUBUN?: string;
    TCCOURSENM?: string;
    TJPERSONNM?: string;
    TJRESIDENTNO?: string;
    TOHJUBSUNO?: string;
    TOTCCOURSECD?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    TSPROCDATE?: string;
    TSREPAYAMOUNT?: number;
    TSSUNAPAMOUNT?: number;
    GTTEAMNM?: string;
    SUNAPMETHOD?: string;
}

export interface Ids_Gubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Gubun: Ids_Gubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '수납환불' },
    { CD: '2', DATA: '회계수납환불' },
];
