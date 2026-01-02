// @ts-nocheck
export const Frmspcledu0680MSMSSendManagementData = {};

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

export interface Ids_oRepayYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRepayYn: Ids_oRepayYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '환불자' },
    { CD: 'N', DATA: '미환불자' },
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
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}
