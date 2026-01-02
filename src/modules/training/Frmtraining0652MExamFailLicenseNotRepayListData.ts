// @ts-nocheck
export const Frmtraining0652MExamFailLicenseNotRepayListData = {};

export interface Ids_ioExamJubsu {
    EJADDR1?: string;
    EJADDR2?: string;
    EJMGNO?: number;
    EJPASSYN?: string;
    EJPERSONNM?: string;
    EJBIRTHDAY?: string;
    EOEXAMDATE?: string;
    EOHJUBSUNO?: string;
    LADDR1?: string;
    LADDR2?: string;
    LCOMPNM?: string;
    LDATAAPPROVAL?: string;
    LHIIIMGSEQ?: number;
    LHISSUEREASON?: string;
    LHPROCGTMGNO?: string;
    LHPRTDATE?: string;
    LHPTEL?: string;
    LISSUEDATE?: string;
    LISSUEGUBUN?: string;
    LLCSNO?: string;
    LPERSONNM?: string;
    LBIRTHDAY?: string;
    LTCCOURSECD?: string;
    LTEL?: string;
    LTPMGNO?: number;
    LTRAININGENDDATE?: string;
    LTRAININGSTARTDATE?: string;
    LZIPCD?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCourse: Ids_oCourse[] = [
    { CD: '', DATA: '전체' },
    { CD: '10', DATA: '특급소방안전관리자' },
    { CD: '21', DATA: '1급소방안전관리자' },
    { CD: '22', DATA: '2급소방안전관리자' },
    { CD: '23', DATA: '3급소방안전관리자' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioExamInfo {
    PASS?: number;
    NOEXAM?: number;
    EOEXAMDATE?: string;
}

export interface Ids_ioJubsuList {
    EJPASSYN?: string;
    EJMGNO?: string;
    EJPERSONNM?: string;
    EJBIRTHDAY?: string;
    EJADDR1?: string;
    EJADDR2?: string;
    EOHJUBSUNO?: string;
}

export interface Ids_ioEjpassLicenseNotYetSunab {
}

export interface Ids_ioWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioWorkGubun: Ids_ioWorkGubun[] = [
    { CD: 'Y', DATA: '선수납' },
];

export interface Ids_ioReport {
}

export interface Ids_ioReport2 {
}

export interface Ids_ioEjpassLicenseAlreadySunab {
}

export interface Ids_ioLicenseAlreadySunabNotRepay {
}

export interface Ids_ioExamPrint {
}

export interface Ids_ioRepayReport {
}

export interface Ids_oPrintReceiptMast {
}

export interface Ids_oPrintReceiptDtl {
}

export interface Ids_ioTrainingOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioTrainingOrder: Ids_ioTrainingOrder[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];
