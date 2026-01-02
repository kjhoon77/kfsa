// @ts-nocheck
export const Frmspcledu0120MTrainingAttendanceRegisterPrintData = {};

export interface Ids_oSort {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSort: Ids_oSort[] = [
    { CD: 'SEATNO', DATA: '좌석번호' },
    { CD: 'TJPERSONNM', DATA: '이름' },
    { CD: 'ORGJUPSU', DATA: '접수번호' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTrainingAttendence {
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
    TOTRAININGORDER?: string;
}

export interface Ids_oTrainingAttendencePoto {
    ACTION?: string;
    GTTEAMNM?: string;
    ORGJUPSU?: string;
    SEATNO?: number;
    TCCOURSENM?: string;
    TJPERSONNM?: string;
    TOENDDATE?: string;
    TOSTARTDATE?: string;
    TOTRAININGORDER?: string;
}

export interface Ids_oTrainingAttendenceJechul {
    GTTEAMNM?: string;
    JUBSUNO?: string;
    TCCOURSENM?: string;
    TJPERSONNM?: string;
    TOENDDATE?: string;
}
