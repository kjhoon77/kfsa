// @ts-nocheck
export const Frmspcledu0370MAualificationPassLicenseIssuePrintData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioLicenseList {
    ADDR?: string;
    CCCDNM?: string;
    GTTEAMNM?: string;
    LHISSUEREASON?: string;
    LHPERSONNM?: string;
    LHPROCGTMGNO?: string;
    LHRESIDENTNO_SANG?: string;
    LLCSNO?: string;
    LSPROCAMOUNT?: number;
    LTCCOURSECD?: string;
    PNM?: string;
    PRTDATE?: string;
    PRTDATE_1?: string;
    RESIDENT?: string;
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
