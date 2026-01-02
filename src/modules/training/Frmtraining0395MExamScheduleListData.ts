// @ts-nocheck
export const Frmtraining0395MExamScheduleListData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
    DATA2?: string;
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
    EOINJUBSUCNT?: string;
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

export const ds_ds_oCourseGubun: Ids_oCourseGubun[] = [
    { CD: '0', DATA: '교육종료일 회차' },
    { CD: '1', DATA: '특급 회차' },
    { CD: '5', DATA: '재시험 회차' },
    { CD: '7', DATA: '학·경력자 회차' },
    { CD: '8', DATA: '공공기관 회차' },
];
