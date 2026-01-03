// @ts-nocheck
export const Frmsys0095MDataMatchDetailSearchHistoryListData = {};

export interface Ids_oSearchHistory {
}

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: '', DATA: ' 전체' },
    { CD: '0', DATA: '소방안전관리자' },
    { CD: '1', DATA: '위험물안전관리자' },
    { CD: '2', DATA: '위험물운송자' },
    { CD: '3', DATA: '소방기술자' },
];

export interface Ids_ioUserList {
    SHGUBUN?: string;
    SHMGNO?: number;
    SHPROCDATE?: string;
    SHPROCIP?: string;
    SHPROCSABUN?: string;
    SHWHERE?: string;
    SHWORKGUBUN?: string;
    SHWORKGUBUNNM?: string;
}

export interface Ids_ioDeptList {
    SHGUBUN?: string;
    SHMGNO?: number;
    SHPROCDATE?: string;
    SHPROCIP?: string;
    SHPROCSABUN?: string;
    SHWHERE?: string;
    SHWORKGUBUN?: string;
    SHWORKGUBUNNM?: string;
}

export interface Ids_oMenu {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oMenu: Ids_oMenu[] = [
    { CD: '', DATA: '전체' },
    { CD: '0000000371', DATA: '소방민원정보시스템' },
    { CD: '0000000383', DATA: '청정보상세 팝업' },
    { CD: '0000000362', DATA: '일치화관리(소방안전관리)' },
    { CD: '0000000369', DATA: '일치화관리(위험물)' },
];
