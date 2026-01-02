// @ts-nocheck
export const Frmtraining0691MSMSNationalSendStatisticsData = {};

export interface Ids_ioSmsStat {
    GTDEPTNM?: string;
    TRAINING21?: string;
    TRAINING22?: string;
    CUST11?: string;
    CUST12?: string;
    CUST13?: string;
    TOTALCNT?: string;
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

export interface Ids_ioSmsStatExam {
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
}

export interface Ids_ioSmsStatReport {
}

export interface Ids_ioSmsStatExamReport {
}

export interface Ids_ioSmsStat_order {
}

export interface Ids_ioSmsStatExam_order {
}

export interface Ids_ioSmsStatExam_date {
}

export interface Ids_ioSmsStat_date {
}

export interface Ids_ioSmsStat_jibu {
}

export interface Ids_ioSmsStatExam_jibu {
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
