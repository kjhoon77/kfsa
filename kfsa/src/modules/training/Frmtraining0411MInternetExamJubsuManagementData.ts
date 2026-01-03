// @ts-nocheck
export const Frmtraining0411MInternetExamJubsuManagementData = {};

export interface Ids_oExamJusu {
    ENDJUBSUDATE?: string;
    GTDEPTNM?: string;
    STAREJUBSUDATE?: string;
    TCCOURSENM?: string;
    EJHSTATUSCD?: string;
    EJHSTATUSNM?: string;
    EJHTSSEQ?: number;
    EJMGNO?: number;
    EJPERSONNM?: string;
    EOHJUBSUGUBUN?: string;
    EOHJUBSUGUBUNNM?: string;
    EOHJUBSUNO?: string;
    EOMGGTMGNO?: string;
    EOMGNO?: number;
    EOTCCOURSECD?: string;
    EOEXAMORDER?: string;
    EOYEAR?: string;
}

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '내방' },
    { CD: '2', DATA: '인터넷' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJubsuStatus1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJubsuStatus1: Ids_oJubsuStatus1[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '신청(미입금)' },
    { CD: '2', DATA: '접수완료(입금)' },
    { CD: '3', DATA: '신청취소(미입금)' },
    { CD: '0', DATA: '신청실패' },
];

export interface Ids_oProcGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oProcGubun: Ids_oProcGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '10', DATA: '접수                                    ' },
    { CD: '20', DATA: '회차변경                              ' },
    { CD: '30', DATA: '환불                                    ' },
];

export interface Ids_oJubsuStatus2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJubsuStatus2: Ids_oJubsuStatus2[] = [
    { CD: '', DATA: '전체' },
    { CD: '41', DATA: '당지부->당지부' },
    { CD: '42', DATA: '당지부->타지부' },
    { CD: '43', DATA: '타지부->당지부' },
];

export interface Ids_oJubsuStatus3 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJubsuStatus3: Ids_oJubsuStatus3[] = [
    { CD: '', DATA: '전체' },
    { CD: '5', DATA: '환불신청(미입금)' },
    { CD: '6', DATA: '환불접수(신청확인)' },
    { CD: '7', DATA: '환불완료(입금)' },
    { CD: '8', DATA: '환불취소' },
];

export interface Ids_oInternetReport {
    EJPERSONNM?: string;
    EJBIRTHDAY?: string;
    TPTEL?: string;
    TPHPTEL?: string;
    EJZZIPCD?: string;
    EJADDR?: string;
    TCCOURSENM?: string;
    EOEXAMORDER?: string;
    EOHJUBSUNO?: string;
    ESPROCAMOUNT?: string;
    EJHPROCREASON?: string;
    EJHPROCDATE?: string;
    PPAOWNER?: string;
    PPABANKNM?: string;
    PPACCOUNT?: string;
}

export interface Ids_oInternetReportAll {
    EJPERSONNM?: string;
    EJBIRTHDAY?: string;
    TPTEL?: string;
    TPHPTEL?: string;
    EJZZIPCD?: string;
    EJADDR?: string;
    TCCOURSENM?: string;
    EOEXAMORDER?: string;
    EOHJUBSUNO?: string;
    ESPROCAMOUNT?: string;
    EJHPROCREASON?: string;
    EJHPROCDATE?: string;
    PPAOWNER?: string;
    PPABANKNM?: string;
    PPACCOUNT?: string;
}
