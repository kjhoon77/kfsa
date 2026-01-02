// @ts-nocheck
export const Frmtraining0230MPassManagementData = {};

export interface Ids_ioTrainingPassY {
    SEL?: string;
    TJADDR1?: string;
    TJADDR2?: string;
    TJBUNJI?: string;
    TJCOMPNM?: string;
    TJDONG?: string;
    TJKU?: string;
    TJMGNO?: number;
    TJPASSYN?: string;
    TJPERSONNM?: string;
    TJBIRTHDAY?: string;
    TJBIRTHDAY_SANG?: string;
    TJSIDO?: string;
    TJTPMGNO?: number;
    TJZIPCD?: string;
    TOENDDATE?: string;
    TOHJUBSUNO?: string;
    TOMGGTMGNO?: string;
    TOMGNO?: number;
    TOSTARTDATE?: string;
    TOTCCOURSECD?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    TPHPTEL?: string;
    TPLASTIMGSEQ?: number;
    TPPASSDATE?: string;
    TPTEL?: string;
    TPSABUN?: string;
    TPLASTIMGSEQ_A?: string;
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
    ITEMINPUTCNT?: string;
    TJPERSONKEY?: string;
    PERSONKEY?: string;
    CMGNO?: string;
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

export interface Ids_ioTrainingPassY_Group {
    EPMGJIBUCD?: string;
    PASSSUM?: number;
    PPASSDATE_A?: string;
    TCCOURSECD?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
}

export interface Ids_ioTrainingPassN {
    SEL?: string;
    TOMGGTMGNO?: string;
    TPPASSDATE?: string;
    SUMADAY?: number;
    TOTCCOURSECD?: string;
    TJADDR1?: string;
    TJMGNO?: number;
    TJPASSYN?: string;
    TJPERSONNM?: string;
    TJBIRTHDAY_SANG?: string;
    TOENDDATE_A?: string;
    TOHJUBSUNO?: number;
    TOMGNO?: string;
    TOSTARTDATE_A?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    TJTPMGNO?: number;
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
    TJPERSONKEY?: string;
    PERSONKEY?: string;
}

export interface Ids_TraiingPassYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_TraiingPassYN: Ids_TraiingPassYN[] = [
    { CD: 'Y', DATA: '수료' },
    { CD: 'N', DATA: '미수료' },
];

export interface Ids_ioTrainingPassYlicense1 {
    SEL?: string;
    TOMGGTMGNO?: string;
    TJADDR1?: string;
    TPPASSDATE?: string;
    SUMADAY?: number;
    TOTCCOURSECD?: string;
    TJADDR2?: string;
    TJMGNO?: number;
    TJPASSYN?: string;
    TJPERSONNM?: string;
    TJBIRTHDAY_SANG?: string;
    TOENDDATE?: string;
    TOHJUBSUNO?: number;
    TOMGNO?: string;
    TOSTARTDATE?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    TJTPMGNO?: number;
    TJPERSONKEY?: string;
    PERSONKEY?: string;
}

export interface Ids_ioTrainingPassYlicense2_2 {
    SEL?: string;
    TOMGGTMGNO?: string;
    TJADDR1?: string;
    TPPASSDATE?: string;
    SUMADAY?: number;
    TOTCCOURSECD?: string;
    TJADDR2?: string;
    TJMGNO?: number;
    TJPASSYN?: string;
    TJPERSONNM?: string;
    TJBIRTHDAY_SANG?: string;
    TOENDDATE?: string;
    TOHJUBSUNO?: number;
    TOMGNO?: string;
    TOSTARTDATE?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    TJTPMGNO?: number;
    TJPERSONKEY?: string;
    PERSONKEY?: string;
}

export interface Ids_ioTrainingPassBak {
}

export interface Ids_ioTrainingPassBak2 {
}

export interface Ids_ioImageYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioImageYN: Ids_ioImageYN[] = [
    { CD: 'Y', DATA: '사진있음' },
    { CD: 'N', DATA: '사진없음' },
];

export interface Ids_oTrainingPassYCmgno {
}
