// @ts-nocheck
export const Frmtraining0690MSMSSendStatisticsData = {};

export interface Ids_ioSmsStat {
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
}

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

export interface Ids_SendYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_SendYN: Ids_SendYN[] = [
    { CD: '', DATA: '전체' },
    { CD: 'N', DATA: '위촉' },
    { CD: 'Y', DATA: '해촉' },
];

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: 'T', DATA: '강습접수' },
    { CD: 'E', DATA: '시험접수' },
    { CD: 'P', DATA: '초빙강사' },
    { CD: 'S', DATA: '시험감독관' },
    { CD: 'D', DATA: '업무대행DM' },
];

export interface Ids_ioSmsStatSpeaker {
}

export interface Ids_ioSmsStatSupervisor {
}

export interface Ids_ioSmsStatSpeakerReport {
}

export interface Ids_ioSmsStatSupervisorReport {
}

export interface Ids_ioSmsStatSpeaker_date {
}

export interface Ids_ioSmsStatSupervisor_date {
}

export interface Ids_ioSmsStatCAGDMData {
}
