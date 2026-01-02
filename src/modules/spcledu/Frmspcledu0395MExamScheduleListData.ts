// @ts-nocheck
export const Frmspcledu0395MExamScheduleListData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oExamOrder {
    EOENDTIME?: string;
    EOEXAMDATE?: string;
    EOEXAMORDER?: string;
    EOEXAMORDERGUBUN?: string;
    EOINETJUBSUCNT?: number;
    EOINETJUBSUYN?: string;
    EOJUBSUMAXCNT?: number;
    EOMGJIBUCD?: string;
    EOMGNO?: string;
    EOSEATCNT?: number;
    EOSTARTTIME?: string;
    EOYEAR?: string;
    EPMGNO?: number;
    TCCOURSECD?: string;
    USE_YN?: string;
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
