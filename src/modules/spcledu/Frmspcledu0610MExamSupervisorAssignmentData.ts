// @ts-nocheck
export const Frmspcledu0610MExamSupervisorAssignmentData = {};

export interface Ids_ioExamSupervisor {
    EOEXAMORDER?: string;
    EOMGJIBUCD?: string;
    EOYEAR?: string;
    EREXAMROOM?: string;
    EXAMNM?: string;
    SAGUBUN?: string;
    SIBDAY?: string;
    SICOMPNM?: string;
    SIPERSONNM?: string;
    TCCOURSECD?: string;
    EOMGNO?: string;
    SIMGNO?: string;
}

export interface Ids_oSupervisorGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oExamOrderMgno {
}

export interface Ids_oExamSupervisorChk {
    SAEREOMGNO?: number;
    SAEREXAMROOM?: string;
    SAGUBUN?: string;
    SASIMGNO?: string;
}

export interface Ids_oModifyColumn {
    COLUMNCD?: string;
    COLUMNNM?: string;
}

export const ds_ds_oModifyColumn: Ids_oModifyColumn[] = [
    { COLUMNCD: 'SAGUBUN', COLUMNNM: '감독관구분' },
];
