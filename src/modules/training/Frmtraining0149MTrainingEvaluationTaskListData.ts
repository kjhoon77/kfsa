// @ts-nocheck
export const Frmtraining0149MTrainingEvaluationTaskListData = {};

export interface Ids_oTrainingEvaluation {
    ADDR?: string;
    BIRTHDAY?: string;
    JJIBUNM?: string;
    TCCOURSECD?: string;
    TCCOURSENM?: string;
    TJADDR1?: string;
    TJADDR2?: string;
    TJPERSONNM?: string;
    PERSONKEY?: string;
    TOENDDATE?: string;
    TOHJUBSUNO?: number;
    TOMGJIBUCD?: string;
    TOSTARTDATE?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    ETFILENM1?: string;
    ETFILENM2?: string;
    ETPATH?: string;
    TJMGNO?: string;
    ABSENT?: string;
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

export interface Ids_oTrainingEvaluationTemp {
    ABSENTDATE?: string;
    ABSENTDAY?: string;
    ADDR?: string;
    BIRTHDAY?: string;
    JJIBUNM?: string;
    TCCOURSECD?: string;
    TCCOURSENM?: string;
    TJADDR1?: string;
    TJADDR2?: string;
    TJPERSONNM?: string;
    PERSONKEY?: string;
    TOENDDATE?: string;
    TOHJUBSUNO?: number;
    TOMGJIBUCD?: string;
    TOSTARTDATE?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
}

export interface Ids_oPassGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPassGubun: Ids_oPassGubun[] = [
    { CD: '1', DATA: '1차과제' },
    { CD: '2', DATA: '2차과제' },
];
