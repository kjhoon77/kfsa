// @ts-nocheck
export const Frmitem0005PEduScheduleListData = {};

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oEduSchedule {
    CGROUPNM?: string;
    EDUTIME?: string;
    EPNM?: string;
    EPSAVENM?: string;
    ESACCESSCNT?: number;
    ESCOUSECD?: string;
    ESDATE?: string;
    ESENDTIME?: string;
    ESEPMGNO?: number;
    ESGTMGNO?: string;
    ESGUBUN?: string;
    ESINETCLOSEDATE?: string;
    ESINETJUBSUCNT?: number;
    ESMGNO?: number;
    ESNOTICE?: string;
    ESPREPARED?: string;
    ESSEATCNT?: number;
    ESSTARTTIME?: string;
    ESSTUDENT?: string;
    ESSUBJECTGUBUN?: string;
    ESYEAR?: string;
}

export interface Ids_oEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduGubun: Ids_oEduGubun[] = [
    { CD: '0', DATA: '평일 주간' },
    { CD: '1', DATA: '평일 야간' },
    { CD: '2', DATA: '휴일 주간' },
    { CD: '3', DATA: '휴일 야간' },
];

export interface Ids_oEduStudent {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduStudent: Ids_oEduStudent[] = [
    { CD: '0', DATA: '실무교육' },
    { CD: '1', DATA: '제연설비교육' },
];

export interface Ids_oEduSubject {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduSubject: Ids_oEduSubject[] = [
    { CD: '0', DATA: '정규교육' },
    { CD: '1', DATA: '미필자교육' },
];
