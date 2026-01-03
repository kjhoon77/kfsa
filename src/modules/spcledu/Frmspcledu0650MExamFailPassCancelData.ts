// @ts-nocheck
export const Frmspcledu0650MExamFailPassCancelData = {};

export interface Ids_ioExamFail__ {
    CCCD?: string;
    CCCDNM?: string;
    CCGROUPCD?: string;
    CCORDERSEQ?: number;
    CCREMARK?: string;
    USE_YN?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oExamFail {
    EJMGNO?: string;
    EJPERSONNM?: string;
    EJRESIDENTNO?: string;
    EJPASSYN?: string;
    ERSCORE?: number;
    TPYN?: string;
}

export interface Ids_ioExamFailCountList {
    EJPERSONNM?: string;
    EJRESIDENTNO?: string;
    EOHJUBSUNO?: string;
    ERPASSYN?: string;
    ERSCORE?: number;
    PASSYN?: string;
}

export interface Ids_oExamLicense {
    LLCSNO?: string;
    LPERSONNM?: string;
    EJCANCELREASON?: string;
    LSTATUSGUBUN?: string;
}

export interface Ids_oPass {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPass: Ids_oPass[] = [
    { CD: '1', DATA: '미발급' },
    { CD: '2', DATA: '발급' },
];

export interface Ids_ioExamSeatTotalCount {
}

export interface Ids_ioExamSeat_YN_Count {
}

export interface Ids_ioExamPassCancelList {
}

export interface Ids_oResultYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oResultYN: Ids_oResultYN[] = [
    { CD: 'Y', DATA: '합격' },
    { CD: 'N', DATA: '불합격' },
];
