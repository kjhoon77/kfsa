// @ts-nocheck
export const Frmtraining0419MExamSeatNoPrintData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
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
    { CD: 'SEATNO', DATA: '좌석번호' },
    { CD: 'ORGJUPSU', DATA: '접수번호' },
];

export interface Ids_oExamSeatNoPrint {
    BIRTHDAY?: string;
    IMAGE?: string;
    NM?: string;
    ORDERJUBSUNO?: string;
    SEATNO?: number;
}

export interface Ids_oPoto {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPoto: Ids_oPoto[] = [
    { CD: 'Y', DATA: '출력' },
    { CD: 'N', DATA: '미출력' },
];
