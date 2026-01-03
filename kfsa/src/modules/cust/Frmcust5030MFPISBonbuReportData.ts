// @ts-nocheck
export const Frmcust5030MFPISBonbuReportData = {};

export interface Ids_ioOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioOrder: Ids_ioOrder[] = [
    { CD: '1', DATA: '소방서, 119센터, 대상물명' },
    { CD: '2', DATA: '대상물명, 소방서, 119센터' },
    { CD: '3', DATA: '구분(상세/세부구분), 소방서, 119센터' },
];

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '1', DATA: '전체' },
    { CD: '2', DATA: '선택' },
];

export interface Ids_ioReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioReport: Ids_ioReport[] = [
    { CD: '1', DATA: '소방서별 집계' },
    { CD: '2', DATA: '대상 리스트' },
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

export interface Ids_oFireStation {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oBonbu {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
}

export interface Ids_oDATA {
}

export interface Ids_ioFireStation {
    BID?: string;
    SID?: string;
    CID?: string;
    GMGNO?: string;
    RCD?: string;
    SNM ?: string;
}
