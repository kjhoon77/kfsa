// @ts-nocheck
export const Frmspcledu0418MExamAttendanceRegisterPrintData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioExamJubsuList {
    CREATE_ID?: string;
    EJADDR1?: string;
    EJHPROCDATE?: string;
    EJHSTATUSCD?: string;
    EJLASTEXAMSEQ?: string;
    EJMGNO?: string;
    EOEXAMORDER?: string;
    EOHEXAMSEATNO?: string;
    EOHJUBSUNO?: string;
    EOMGNO?: string;
    EOYEAR?: string;
    EOMGGTMGNO?: string;
    ESFEE?: string;
    JUBSUADDR?: string;
    EOTCCOURSECD?: string;
    TJRESIDENTNO_SANG?: string;
    TPMGNO?: string;
    TPPERSONNM?: string;
    sortEOHEXAMSEATNO?: string;
    sortTPPERSONNM?: string;
    sortEOHJUBSUNO?: string;
    PNM?: string;
    EOHPROCDATE_A?: string;
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
    { CD: 'EOHEXAMSEATNO', DATA: '좌석번호' },
    { CD: 'TPPERSONNM', DATA: '이름' },
    { CD: 'EOHJUBSUNO', DATA: '접수번호' },
];

export interface Ids_oSunab {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunab: Ids_oSunab[] = [
    { CD: 'Y', DATA: '환불' },
    { CD: 'N', DATA: '수납' },
];
