// @ts-nocheck
export const Frmspcledu0220MTrainingOrderChangeListData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTrainingJubsu {
    AFTERJIBUCD?: string;
    AFTERJIBUNICK?: string;
    AFTERJIBUNM?: string;
    AFTERTRAININGORDER?: string;
    BIRTHDAY?: string;
    EPMGNO?: number;
    JJIBUNICK?: string;
    JJIBUNM?: string;
    PPERSONNM?: string;
    PSABUN?: string;
    TCCOURSECD?: string;
    TCCOURSENM?: string;
    TJPERSONNM?: string;
    TJRESIDENTNO?: string;
    TOCOURSEGUBUN?: string;
    TOENDDATE?: string;
    TOHAFTERJUBSUNO?: string;
    TOHAFTERMGNO?: number;
    TOHJUBSUGUBUN?: string;
    TOHJUBSUNO?: string;
    TOHLASTGUBUN?: string;
    TOHPROCDATE?: string;
    TOHSEQ?: number;
    TOMGJIBUCD?: string;
    TOMGNO?: string;
    TOMUNJEGUBUN?: string;
    TOSTARTDATE?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    TPMGNO?: number;
    JUBSUNO?: string;
    AFTERJUBSUNO?: string;
    EDU?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oSort {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSort: Ids_oSort[] = [
    { CD: 'DATE', DATA: '회차변경일' },
    { CD: 'JUBSUNO', DATA: '접수번호' },
    { CD: 'JUBSUGUBUN', DATA: '접수방법' },
];
