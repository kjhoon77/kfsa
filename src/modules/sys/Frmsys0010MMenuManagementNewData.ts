// @ts-nocheck
export const Frmsys0010MMenuManagementNewData = {};

export interface Ids_ioMenuTree {
    MENULEVEL?: number;
    MIMGFLAG?: number;
    MMENUID?: string;
    MMENUNM?: string;
    MORDERSEQ?: number;
    MPARENTMENUID?: string;
    MREMARK?: string;
    MSYSGUBUN?: string;
    MURL?: string;
    MURLTYPE?: string;
    MUSEYN?: string;
}

export interface Ids_oSysGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oUrlType {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioMenuTreeBackup {
    MENULEVEL?: number;
    MIMGFLAG?: number;
    MMENUID?: string;
    MMENUNM?: string;
    MORDERSEQ?: number;
    MPARENTMENUID?: string;
    MREMARK?: string;
    MSYSGUBUN?: string;
    MURL?: string;
    MURLTYPE?: string;
    MUSEYN?: string;
    MDEPTADMINGUBUN?: string;
}

export interface Ids_iMenuDelete {
    MENULEVEL?: number;
    MIMGFLAG?: number;
    MMENUID?: string;
    MMENUNM?: string;
    MORDERSEQ?: number;
    MPARENTMENUID?: string;
    MREMARK?: string;
    MSYSGUBUN?: string;
    MURL?: string;
    MURLTYPE?: string;
    MUSEYN?: string;
}

export interface Ids_oDeptAdminGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oDeptAdminGubun: Ids_oDeptAdminGubun[] = [
    { CD: 'CO', DATA: '공통관리' },
    { CD: 'SD', DATA: '관리자' },
    { CD: 'CD', DATA: '고객관리과' },
    { CD: 'TD', DATA: '교육운영과' },
    { CD: 'ED', DATA: '평가관리과' },
    { CD: 'BD', DATA: '교재개발과' },
];
