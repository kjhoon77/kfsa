// @ts-nocheck
export const Frmtraining0386MLicenseSiGunGuListData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCourse: Ids_oCourse[] = [
    { CD: '0', DATA: '소방안전관리자' },
    { CD: '1', DATA: '위험물안전관리자' },
    { CD: '2', DATA: '위험물운송자' },
    { CD: '3', DATA: '위험물운반자' },
];

export interface Ids_ioLicenseList {
    ADDR?: string;
    CCCDNM?: string;
    GTTEAMNM?: string;
    LHISSUEREASON?: string;
    LHPERSONNM?: string;
    LHPROCGTMGNO?: string;
    LHBIRTHDAY_SANG?: string;
    LLCSNO?: string;
    LSPROCAMOUNT?: number;
    LTCCOURSECD?: string;
    PNM?: string;
    PRTDATE?: string;
    PRTDATE_1?: string;
    LHBIRTHDAY?: string;
    SEX?: string;
    TCCOURSENM?: string;
    USEGUBUN?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: 'M', DATA: '월 단위' },
    { CD: 'T', DATA: '기간 단위' },
];

export interface Ids_oPassGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '수첩발급' },
    { CD: '2', DATA: '수첩재발급' },
];
