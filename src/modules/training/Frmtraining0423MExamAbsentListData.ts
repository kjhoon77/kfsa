// @ts-nocheck
export const Frmtraining0423MExamAbsentListData = {};

export interface Ids_oExamAbsent {
    ADDR?: string;
    BIRTHDAY?: string;
    JJIBUNM?: string;
    TCCOURSECD?: string;
    TCCOURSENM?: string;
    EJADDR1?: string;
    EJADDR2?: string;
    EJPERSONNM?: string;
    EJBIRTHDAY?: string;
    EOEXAMDATE?: string;
    EOHJUBSUNO?: number;
    EOMGJIBUCD?: string;
    EOTRAININGORDER?: string;
    EOYEAR?: string;
    EAGUBUN?: string;
    EA1CHASU?: string;
    EA2CHASU?: string;
    ABSENTCHASUGUBUN?: string;
}

export interface Ids_oSearchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSearchGubun: Ids_oSearchGubun[] = [
    { CD: 'ORDER', DATA: '회차조회' },
    { CD: 'DATE', DATA: '일자조회' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oExamAbsentTemp {
    ADDR?: string;
    BIRTHDAY?: string;
    JJIBUNM?: string;
    TCCOURSECD?: string;
    TCCOURSENM?: string;
    EJADDR1?: string;
    EJADDR2?: string;
    EJPERSONNM?: string;
    EJBIRTHDAY?: string;
    EOEXAMDATE?: string;
    EOHJUBSUNO?: number;
    EOMGJIBUCD?: string;
    EOEXAMORDER?: string;
    EOYEAR?: string;
    EAGUBUN?: string;
    EA1CHASU?: string;
    EA2CHASU?: string;
    ABSENTCHASUGUBUN?: string;
}

export interface Ids_oJubsuChasuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJubsuChasuGubun: Ids_oJubsuChasuGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '1차시험' },
    { CD: '2', DATA: '2차시험' },
];
