// @ts-nocheck
export const Frmtraining0015MTrainingOrderListData = {};

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
    TODAYGUBUN?: string;
    TOMUNJEGUBUNNM?: string;
    TOINJUBSUCNT?: string;
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

export interface Ids_ioCourseGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseGubun: Ids_ioCourseGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '3', DATA: '정규' },
    { CD: '4', DATA: '특별' },
];

export interface Ids_ioMunjeGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMunjeGubun: Ids_ioMunjeGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'N', DATA: '일반' },
    { CD: 'Y', DATA: '면제' },
    { CD: 'C', DATA: '혼합(사이버+소집)' },
];

export interface Ids_oOnlineGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oOnlineGubun: Ids_oOnlineGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'N', DATA: '집합교육' },
    { CD: 'Y', DATA: '온라인' },
    { CD: 'X', DATA: '블라인드' },
    { CD: 'Z', DATA: '혼용교육' },
];
