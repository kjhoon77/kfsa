// @ts-nocheck
export const Frmcust6580MDataMatchErrorReportData = {};

export interface Ids_ioGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGubun: Ids_ioGubun[] = [
    { CD: '0', DATA: '비교조건 선택항목 중 하나라도 틀린 경우 ' },
    { CD: '1', DATA: '비교조건 선택항목이 전부 틀린 경우' },
];

export interface Ids_ioOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioOrder: Ids_ioOrder[] = [
    { CD: '1', DATA: '연계일자' },
    { CD: '2', DATA: '대상물(청), 지역(청)' },
    { CD: '3', DATA: '지역(청), 대상물(청)' },
    { CD: '4', DATA: '대상물(안전원), 지역(안전원)' },
    { CD: '5', DATA: '지역(안전원), 대상물(안전원)' },
];

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_ioStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioStatus: Ids_ioStatus[] = [
    { CD: '0', DATA: '신규 연계' },
    { CD: '1', DATA: '연계 삭제' },
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

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}
