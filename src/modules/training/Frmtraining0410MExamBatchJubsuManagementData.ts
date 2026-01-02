// @ts-nocheck
export const Frmtraining0410MExamBatchJubsuManagementData = {};

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
    TJBIRTHDAY?: string;
    TJBIRTHDAY_SANG?: string;
    EJLICENSEAMTTJMGNO?: string;
    TJADDRGUBUN?: string;
    TJRPNUCD?: string;
    TJRROADBUILDMGNO?: string;
    TJRROADDETAIL?: string;
    TJRROADREMAIN?: string;
    TJRSANGUBUN?: string;
    TJRMAINBUNJI?: string;
    TJRSUBBUNJI?: string;
    TJRBUILDNM?: string;
    TJRADDRETC?: string;
    TJRCONVPGM?: string;
    TJRCONVSTATUS?: string;
    PRIVACYYN?: string;
    PAMGNO?: string;
    PPMGNO?: string;
    PABIZCD?: string;
    PACOURSECD?: string;
    EXAMBIZCD?: string;
    EXAMCOURSECD?: string;
    PHSEQ?: string;
    PHPROCSTATUS?: string;
    PHPROCDATE?: string;
    PHPROCMETHOD?: string;
    RUMGNO?: string;
    RUPATH?: string;
    RUFILENM?: string;
    PERSONKEY?: string;
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
    { CD: '20', DATA: '공공기관소방안전관리자' },
    { CD: '21', DATA: '1급소방안전관리자' },
    { CD: '23', DATA: '3급소방안전관리자' },
];

export interface Ids_ioTrainingPassExamBatchJubsuCount {
    EXAMJUBSUCOUNT?: string;
}

export interface Ids_ioSqence {
}

export interface Ids_oLicenseCheck {
}

export interface Ids_ioTrainingTjPassYnCount {
    TJPASSYNCNT?: string;
}
