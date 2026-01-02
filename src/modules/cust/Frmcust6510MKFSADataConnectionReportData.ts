// @ts-nocheck
export const Frmcust6510MKFSADataConnectionReportData = {};

export interface Ids_ioGijun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGijun: Ids_ioGijun[] = [
    { CD: '1', DATA: '지부' },
    { CD: '2', DATA: '소방본부' },
];

export interface Ids_ioOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioOrder: Ids_ioOrder[] = [
    { CD: '1', DATA: '지부관리번호' },
    { CD: '2', DATA: '지부, 지역, 대상물명' },
    { CD: '3', DATA: '지부, 직능, 지역, 대상물명' },
];

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '1', DATA: '전체' },
    { CD: '2', DATA: '선택' },
];

export interface Ids_ioMatch {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMatch: Ids_ioMatch[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '일치자료' },
    { CD: '1', DATA: '미처리' },
    { CD: '2', DATA: '연계제외' },
];

export interface Ids_ioReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioReport: Ids_ioReport[] = [
    { CD: '1', DATA: '지역별 집계' },
    { CD: '2', DATA: '연계 리스트' },
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

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
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

export interface Ids_ioExceptGubun {
    CD?: string;
    DATA?: string;
}
