// @ts-nocheck
export const Frmprofes0007HistoryData = {};

export interface Ids_oClass {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oClass: Ids_oClass[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '1급' },
    { CD: '2', DATA: '2급' },
    { CD: '3', DATA: '3급' },
    { CD: '4', DATA: '4급' },
    { CD: '5', DATA: '5급' },
];

export interface Ids_oProGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oProGubun: Ids_oProGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '전임' },
    { CD: '2', DATA: '겸임' },
    { CD: '3', DATA: '초빙' },
];

export interface Ids_SearchJogeon {
    EDUDATEST?: string;
    EDUDATEED?: string;
    EDUCLASS?: string;
    PROGUBUN?: string;
}

export interface Ids_ProfesList {
    THMGNO?: string;
    THSTATUS?: string;
    THPROCDATE?: string;
    THNAME?: string;
    THJIKWI?: string;
    THREMARK?: string;
}

export interface Ids_Status {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Status: Ids_Status[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '작성중' },
    { CD: '2', DATA: '승인요청' },
    { CD: '3', DATA: '승인요청취소' },
    { CD: '4', DATA: '승인' },
    { CD: '5', DATA: '승인취소' },
    { CD: '6', DATA: '수정요청' },
    { CD: '7', DATA: '수정요청취소' },
    { CD: '8', DATA: '수정허가' },
    { CD: '9', DATA: '수정허가취소' },
];
