// @ts-nocheck
export const FrmspcleduStat0040Data = {};

export interface Ids_LicenseList {
    GTTEAMNM?: string;
    GTPRTSEQ?: string;
    BF_LSCNT?: string;
    BF_LSCNT_1?: string;
    BF_LSCNT_2?: string;
    LSCNT?: string;
    LSCNT_1?: string;
    LSCNT_2?: string;
    BANG0?: string;
    BANG0_1?: string;
    BANG0_2?: string;
    BANG1?: string;
    BANG1_1?: string;
    BANG1_2?: string;
    BANG2?: string;
    BANG2_1?: string;
    BANG2_2?: string;
    DAN1?: string;
    DAN1_1?: string;
    DAN1_2?: string;
    DAN2?: string;
    DAN2_1?: string;
    DAN2_2?: string;
    GTMGNO?: string;
}

export interface Ids_exampascond {
    STARTDATE?: string;
    ENDDATE?: string;
    FLAG?: string;
    TODAYMONTH?: string;
}

export interface Ids_Bang {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Bang: Ids_Bang[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '방화관리자 공공' },
    { CD: '2', DATA: '방화관리자 1급' },
    { CD: '3', DATA: '방화관리자 2급' },
    { CD: '4', DATA: '위험물 안전관리자' },
    { CD: '5', DATA: '위험물 운송자' },
];

export interface Ids_Jibu {
    CD?: string;
    DATA?: string;
}
