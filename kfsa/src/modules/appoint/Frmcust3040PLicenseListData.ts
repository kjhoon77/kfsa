// @ts-nocheck
export const Frmcust3040PLicenseListData = {};

export interface Ids_oTrainingList {
    SEL?: string;
    GTTEAMNM?: string;
    TOMGGTMGNO?: string;
    TCCOURSENM?: string;
    TOHJUBSUNO?: number;
    TJREGDATE?: string;
    TOSTARTDATE?: string;
    TOENDDATE?: string;
}

export interface Ids_oExamList {
    SEL?: string;
    GTTEAMNM?: string;
    EOMGGTMGNO?: string;
    TCCOURSENM?: string;
    EOHJUBSUNO?: number;
    EJREGDATE?: string;
    EOEXAMDATE?: string;
}

export interface Ids_iGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_iGubun: Ids_iGubun[] = [
    { CD: 'T', DATA: '강습교육' },
    { CD: 'E', DATA: '시험접수' },
];
