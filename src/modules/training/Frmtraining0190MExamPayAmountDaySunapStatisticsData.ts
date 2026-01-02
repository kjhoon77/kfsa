// @ts-nocheck
export const Frmtraining0190MExamPayAmountDaySunapStatisticsData = {};

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

export interface Ids_ioExamJubsuCommissionDay {
    EJPERSONNM?: string;
    EOHJUBSUGUBUN?: string;
    EOHJUBSUNO?: string;
    EOMGGTMGNO?: string;
    EOTCCOURSECD?: string;
    EOYEAR?: string;
    ESGUBUN?: string;
    ESPROCAMOUNT?: number;
    ESPROCDATE?: string;
    ESREGSABUN?: string;
    REFUND_MONEY1?: number;
    BIRTHDAY?: string;
    EDU?: string;
    ESGUBUNCD?: string;
    ESMGGTMGNO?: string;
    EOEXAMORDER?: string;
}

export interface Ids_oSunabGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunabGubun: Ids_oSunabGubun[] = [
    { CD: '10', DATA: '방문현금' },
    { CD: '11', DATA: '방문카드건' },
    { CD: '12', DATA: '방문현금영수증' },
    { CD: '13', DATA: '방문가상계좌' },
    { CD: '14', DATA: '방문무통장' },
    { CD: '21', DATA: '인터넷카드' },
    { CD: '22', DATA: '인터넷현금영수증' },
    { CD: '23', DATA: '인터넷가상계좌' },
    { CD: '24', DATA: '인터넷무통장' },
    { CD: '15', DATA: '방문가상계좌 현금영수증' },
    { CD: '16', DATA: '방문무통장 현금영수증' },
];

export interface Ids_ioExamJubsuCommissionDaySum {
}

export interface Ids_internetOffline {
    CD?: string;
    DATA?: string;
}

export const ds_ds_internetOffline: Ids_internetOffline[] = [
    { CD: '1', DATA: '내방' },
    { CD: '2', DATA: '인터넷' },
];

export interface Ids_oSuNabGubun_A {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSuNabGubun_A: Ids_oSuNabGubun_A[] = [
    { CD: '01', DATA: '수납' },
    { CD: '02', DATA: '환불' },
    { CD: '11', DATA: '회계수납' },
    { CD: '12', DATA: '회계환불' },
];

export interface Ids_Gubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Gubun: Ids_Gubun[] = [
    { CD: '3', DATA: '전체' },
    { CD: '1', DATA: '수납환불' },
    { CD: '2', DATA: '회계수납환불' },
];
