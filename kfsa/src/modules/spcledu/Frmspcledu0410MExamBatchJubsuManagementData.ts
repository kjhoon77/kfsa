// @ts-nocheck
export const Frmspcledu0410MExamBatchJubsuManagementData = {};

export interface Ids_ioTrainingPassExamBatchJubsu {
    SEL?: string;
    TJADDR1?: string;
    TJADDR2?: string;
    TOENDDATE?: string;
    TOHJUBSUNO?: number;
    TOMGGTMGNO?: string;
    TOSTARTDATE?: string;
    TOTCCOURSECD?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    TPNM?: string;
    TPRESIDENTNO?: string;
    TPRESIDENTNO_SANG?: string;
    EJLICENSEAMTTJMGNO?: string;
}

export interface Ids_oExamDateGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oExamDateGubun: Ids_oExamDateGubun[] = [
    { CD: '1', DATA: '1일차' },
    { CD: '2', DATA: '2일차' },
    { CD: '3', DATA: '3일차' },
    { CD: '4', DATA: '4일차' },
    { CD: '5', DATA: '5일차' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioTrainingPassExamBatchJubsuOrder {
    EOMGNO?: number;
    EomgNo_A?: string;
}

export interface Ids_ioTrainingPassExamBatchJubsuReal {
    EomgNo_A?: string;
    CCCDNM?: string;
}

export interface Ids_oJibu_Filter {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu_FilterBak {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJibu_FilterBak: Ids_oJibu_FilterBak[] = [
    { CD: '20', DATA: '공공기관방화관리자' },
    { CD: '21', DATA: '1급방화관리자' },
    { CD: '22', DATA: '2급방화관리자' },
];

export interface Ids_ioTrainingPassExamBatchJubsuCount {
    EXAMJUBSUCOUNT?: string;
}

export interface Ids_ioSqence {
}
