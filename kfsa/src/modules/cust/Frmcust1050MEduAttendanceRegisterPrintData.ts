// @ts-nocheck
export const Frmcust1050MEduAttendanceRegisterPrintData = {};

export interface Ids_oSort {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSort: Ids_oSort[] = [
    { CD: 'ORGJUPSU', DATA: '접수번호' },
    { CD: 'NAME', DATA: '이름' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oEduAttendence {
    EDUCNT?: number;
    EPNM?: string;
    INCNT?: number;
    INOUTCNT?: number;
    JUPSUCNT?: number;
    KULGANGCNT?: number;
    OUTCNT?: number;
    PASSCNT?: number;
    REPAYCNT?: number;
    TCCOURSENM?: string;
    TOENDDATE?: string;
    TOSTARTDATE?: string;
    TOEDUORDER?: string;
    COURSENM?: string;
    CYBERGUBUN?: string;
    ESCYBERGUBUN?: string;
}

export interface Ids_oEduAttendencePoto {
    ACTION?: string;
    GTTEAMNM?: string;
    ORGJUPSU?: string;
    SEATNO?: number;
    TCCOURSENM?: string;
    TJPERSONNM?: string;
    TOENDDATE?: string;
    TOSTARTDATE?: string;
    TOEDUORDER?: string;
}
