// @ts-nocheck
export const Frmtraining0130STrainingSeatNoPrintData = {};

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
    { CD: 'NAME', DATA: '성명' },
];

export interface Ids_oTrainingSeatNoPrint {
    BIRTHDAY?: string;
    IMAGE?: string;
    NM?: string;
    ORDERJUBSUNO?: string;
    SEATNO?: number;
    SORTNO?: string;
}

export interface Ids_oPoto {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPoto: Ids_oPoto[] = [
    { CD: 'Y', DATA: '출력' },
    { CD: 'N', DATA: '미출력' },
];
