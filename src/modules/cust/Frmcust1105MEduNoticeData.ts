// @ts-nocheck
export const Frmcust1105MEduNoticeData = {};

export interface Ids_ioEduCreate {
    CD?: string;
    DATE?: string;
    TIME?: string;
    EDUNO?: string;
    TARGETNO?: string;
    EDUPERSON?: string;
    EDUGUBUN?: string;
    ESMGNO?: string;
    EPNM?: string;
    ESNOTICE?: string;
}

export interface Ids_ioEduDay1 {
}

export interface Ids_ioEduDay2 {
}

export interface Ids_ioEduDay3 {
}

export interface Ids_ioEduDay4 {
}

export interface Ids_oEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduGubun: Ids_oEduGubun[] = [
    { CD: '0', DATA: '평일 주간' },
    { CD: '1', DATA: '평일 야간' },
    { CD: '2', DATA: '휴일 주간' },
    { CD: '3', DATA: '휴일 야간' },
];

export interface Ids_oEduStudent {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduStudent: Ids_oEduStudent[] = [
    { CD: '0', DATA: '실무교육' },
    { CD: '1', DATA: '제연설비교육' },
];

export interface Ids_ioMemberGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMemberGubun: Ids_ioMemberGubun[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '회원' },
    { CD: '2', DATA: '비회원' },
];

export interface Ids_ioEduNoticeHistoryDay {
}

export interface Ids_ioEduNoticeHistoryGetSysdate {
}
