// @ts-nocheck
export const Frmspcledu0015MTrainingOrderListData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTrainingOrder {
    EPMGNO?: number;
    TCCOURSECD?: string;
    TOCOURSEGUBUN?: string;
    TOEDUCONTENTS?: string;
    TOENDDATE?: string;
    TOENDTIME?: string;
    TOEXCEPTDATE?: string;
    TOINETJUBSUCNT?: number;
    TOINETJUBSUYN?: string;
    TOJUBSUMAXCNT?: number;
    TOJUBSUSTATUS?: string;
    TOLECTURENOTICE?: string;
    TOMAILNOTICE?: string;
    TOMGJIBUCD?: string;
    TOMGNO?: string;
    TOMUNJEGUBUN?: string;
    TOREMARK?: string;
    TOSEATCNT?: number;
    TOSEATLIMITYN?: string;
    TOSEATSELECTYN?: string;
    TOSEXLIMITYN?: string;
    TOSTARTDATE?: string;
    TOSTARTTIME?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    USE_YN?: string;
    EPNM?: string;
    PERSONCNT?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oSearchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSearchGubun: Ids_oSearchGubun[] = [
    { CD: 'ORDER', DATA: '회차조회' },
    { CD: 'DATE', DATA: '일자조회' },
];

export interface Ids_oCourseGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oMunjeGubun {
    CD?: string;
    DATA?: string;
}
