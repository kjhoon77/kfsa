// @ts-nocheck
export const Frmtraining0680MSMSSendManagementData = {};

export interface Ids_ioSmsTraining {
    SEL?: string;
    PGUBUN?: string;
    TCCOURSECD?: string;
    TJMGNO?: number;
    TJMGNO2?: number;
    TJPERSONNM?: string;
    TOENDDATE?: string;
    TOMGNO?: string;
    TOSTARTDATE?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    TPHPTEL?: string;
    TPMGNO?: number;
    GTDEPTCD?: number;
    TSREPAYCD?: string;
    RECVTEL?: number;
    SMMSG?: string;
    SHSENDRESVTIME1?: string;
    SHSENDRESVTIME2?: string;
    PDEPTCD?: string;
    PSABUN?: string;
    TOHJUBSUNO?: number;
    TOHJUBSUNO2?: number;
    JUBSUNO2?: number;
    JUBSUNO?: number;
    TJLASTSUNAPGUBUN?: string;
    TJPASSYN?: string;
    TRAN_SUBJECT?: string;
}

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTrainingPassYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oTrainingPassYn: Ids_oTrainingPassYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '수료' },
    { CD: 'N', DATA: '결강' },
];

export interface Ids_oSunapYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunapYn: Ids_oSunapYn[] = [
    { CD: '0', DATA: '전체(미수납 포함)' },
    { CD: 'N', DATA: '수납자' },
    { CD: 'Y', DATA: '환불자' },
    { CD: '', DATA: '미수납자' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: 'T', DATA: '강습접수' },
    { CD: 'E', DATA: '시험접수' },
    { CD: 'P', DATA: '초빙강사' },
    { CD: 'S', DATA: '시험감독관' },
];

export interface Ids_oExamPassYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oExamPassYn: Ids_oExamPassYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '합격' },
    { CD: 'N', DATA: '불합격' },
    { CD: 'S', DATA: '미응시' },
];

export interface Ids_ioSmsExam {
    SEL?: string;
    ESPASSYN?: string;
    GTDEPTCD?: number;
    EOCOURSECD?: string;
    EJMGNO?: number;
    EJMGNO2?: number;
    TPPERSONNM?: string;
    EOMGNO?: string;
    EOEXAMDATE?: string;
    EOEXAMORDER?: string;
    EOYEAR?: string;
    TPHPTEL?: string;
    TPMGNO?: number;
    ESREPAYCD?: string;
    RECVTEL?: number;
    SMMSG?: string;
    SHSENDRESVTIME1?: string;
    SHSENDRESVTIME2?: string;
    PDEPTCD?: string;
    PSABUN?: string;
    EOHEJMGNO?: string;
    EOMGGTMGNO?: string;
    TOTCCOURSECD?: string;
    TOYEAR?: string;
    TOTRAININGORDER?: string;
    TRAN_SUBJECT?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oSMSMMS {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSMSMMS: Ids_oSMSMMS[] = [
    { CD: '0', DATA: '단문' },
    { CD: '1', DATA: '장문(MMS)' },
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

export interface Ids_ioSmsSpeaker {
}

export interface Ids_ioSmsSupervisor {
}

export interface Ids_ioSms {
}

export interface Ids_oBatchSendSeq {
    O_BSMGNO?: string;
}

export interface Ids_oEvaluationPassYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEvaluationPassYn: Ids_oEvaluationPassYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '합격' },
    { CD: 'N', DATA: '불합격' },
    { CD: 'X', DATA: '미응시' },
];
