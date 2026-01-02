// @ts-nocheck
export const Frmcust1180MSmsSendListData = {};

export interface Ids_ioSmsSendList {
    EPMGJIBUCD?: string;
    PSABUN?: string;
    SHRCVRNAME?: string;
    SHSENDDATE_B?: string;
    SHSENDDATE_C?: string;
    SHSENDSTATE?: string;
    SHSENDTIME?: string;
    SHSYSGUBUN?: string;
    SHTEL?: string;
    SMMSG?: string;
    TCCOURSECD?: string;
    TJMGNO?: number;
    TOHJUBSUNO?: string;
    TOMGNO?: string;
    TOTRAININGORDER?: string;
    TOTRAININGORDER2?: string;
    TOYEAR?: string;
    TPMGNO?: number;
    SENDGUBUN?: string;
    RCNM?: string;
}

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: '21', DATA: '강습접수' },
    { CD: '22', DATA: '시험접수' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioSmsPracticeEduJubsu {
    EPMGJIBUCD?: string;
    PSABUN?: string;
    SHRCVRNAME?: string;
    SHSENDDATE_B?: string;
    SHSENDDATE_C?: string;
    SHSENDSTATE?: string;
    SHSENDTIME?: string;
    SHSYSGUBUN?: string;
    SHTEL?: string;
    SMMSG?: string;
    TCCOURSECD?: string;
    TJMGNO?: number;
    TOHJUBSUNO?: string;
    TOMGNO?: string;
    TOTRAININGORDER?: string;
    TOTRAININGORDER2?: string;
    TOYEAR?: string;
    TPMGNO?: number;
    SENDGUBUN?: string;
    RCNM?: string;
}

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: '1', DATA: '실무교육 접수자' },
    { CD: '2', DATA: '실무교육안내문발행 이력' },
    { CD: '3', DATA: '실무교육 이수자' },
];

export interface Ids_ioSmsStat_date {
}

export interface Ids_ioSmsStatEduJubsu_date {
}

export interface Ids_ioSmsStatInternet_jibu {
}

export interface Ids_ioSmsStat_jibu {
}

export interface Ids_ioSerchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioSerchGubun: Ids_ioSerchGubun[] = [
    { CD: '1', DATA: '전체' },
    { CD: '2', DATA: '발송일자' },
    { CD: '3', DATA: '교육일자' },
];

export interface Ids_ioSmsStatInternet_order {
}

export interface Ids_ioSmsStat_order {
}

export interface Ids_oSendGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSendGubun: Ids_oSendGubun[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '단문(SMS)' },
    { CD: '2', DATA: '장문(MMS)' },
];

export interface Ids_ioSmsEduData {
}

export interface Ids_ioSmsEduIssue {
}

export interface Ids_ioSerchGubun2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioSerchGubun2: Ids_ioSerchGubun2[] = [
    { CD: '1', DATA: '전체' },
    { CD: '2', DATA: '발송일자' },
    { CD: '3', DATA: '안내문발행일자' },
];

export interface Ids_ioSmsStatEduData_date {
}

export interface Ids_ioSmsStatEduIssue_date {
}

export interface Ids_ioSerchGubun3 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioSerchGubun3: Ids_ioSerchGubun3[] = [
    { CD: '1', DATA: '전체' },
    { CD: '2', DATA: '발송일자' },
    { CD: '3', DATA: '교육이수일자' },
];
