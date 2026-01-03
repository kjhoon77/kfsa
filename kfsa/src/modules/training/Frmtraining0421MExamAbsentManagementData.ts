// @ts-nocheck
export const Frmtraining0421MExamAbsentManagementData = {};

export interface Ids_ioExamAbsent {
    EJADDR1?: string;
    EJADDR2?: string;
    EJMGNO?: number;
    EJPERSONNM?: string;
    EJBIRTHDAY?: string;
    EOEXAMDATE?: string;
    EOHJUBSUNO?: number;
    BIRTHDAY?: string;
    EOMGJIBUCD?: string;
    EOYEAR?: string;
    EOTCCOURSECD?: string;
    EOEXAMORDER?: string;
    SEL?: string;
    EAGUBUN?: string;
    EA1CHASU?: string;
    EA2CHASU?: string;
    EJCHASUGUBUN?: string;
    CHASUGUBUN?: string;
    EAOLDGUBUN?: string;
    EAOLD1CHASU?: string;
    EAOLD2CHASU?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oAbsentChasuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAbsentChasuGubun: Ids_oAbsentChasuGubun[] = [
    { CD: '1', DATA: '1차시험' },
    { CD: '2', DATA: '2차시험' },
];

export interface Ids_oExamJubsuCnt {
    TJMGNO?: string;
    TOTCCOURSECD?: string;
    TOMUNJEGUBUN?: string;
}
