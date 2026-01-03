// @ts-nocheck
export const Frmtraining0240MPassCancelData = {};

export interface Ids_ioTrainingPassCancel {
    SEL?: string;
    TOMGGTMGNO?: string;
    TJADDR1?: string;
    PCANCELREASON?: string;
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
    TPMGNO?: number;
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

export interface Ids_ioTrainingPassCancel_Group {
    EPMGJIBUCD?: string;
    PASSSUM?: number;
    PPASSDATE_A?: string;
    TCCOURSECD?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
}

export interface Ids_TrainingPassYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_TrainingPassYN: Ids_TrainingPassYN[] = [
    { CD: 'Y', DATA: '수료' },
    { CD: 'N', DATA: '미수료' },
];
