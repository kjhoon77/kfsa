// @ts-nocheck
export const Frmcust1020MEduScheduleReportData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioTrainingOrder {
    ESMGNO?: string;
    ESGTMGNO?: string;
    ESYEAR?: string;
    ESCOUSECD?: string;
    CNM?: string;
    ESDATE?: string;
    MESTARTTIME?: string;
    ESENDTIME?: string;
    ESEPMGNO?: string;
    EPNM?: string;
    ESPREPARED?: string;
    edudate?: string;
    edutime?: string;
    ESGUBUN?: string;
    ESINETOPENYN?: string;
    ESINETCLOSEDATE?: string;
    ESSTUDENT?: string;
    EPSAVENM?: string;
    ESSUBJECTGUBUN?: string;
    ESSEATCNT?: string;
    ESACCESSCNT?: string;
    ESINETJUBSUCNT?: string;
    ESORDERNOYN?: string;
    ESNOTICE?: string;
}

export interface Ids_METARGET {
    CD?: string;
    DATA?: string;
}

export const ds_ds_METARGET: Ids_METARGET[] = [
    { CD: '0', DATA: '실무교육' },
    { CD: '1', DATA: '제연설비교육' },
];

export interface Ids_MECOURSE {
    CD?: string;
    DATA?: string;
}

export const ds_ds_MECOURSE: Ids_MECOURSE[] = [
    { CD: '0', DATA: '정규교육' },
    { CD: '1', DATA: '미필자교육' },
    { CD: '2', DATA: '특별교육' },
];

export interface Ids_MEDAYGUBUNCD {
    CD?: string;
    DATA?: string;
}

export const ds_ds_MEDAYGUBUNCD: Ids_MEDAYGUBUNCD[] = [
    { CD: '0', DATA: '평일 주간' },
    { CD: '1', DATA: '평일 야간' },
    { CD: '2', DATA: '휴일 주간' },
    { CD: '3', DATA: '휴일 야간' },
];

export interface Ids_oEduType1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduType1: Ids_oEduType1[] = [
    { CD: '0', DATA: '입문반' },
    { CD: '1', DATA: '일반반' },
    { CD: '2', DATA: '중급반' },
    { CD: '3', DATA: '고급반' },
    { CD: '4', DATA: '업무대행자반' },
];

export interface Ids_oUseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oUseYn: Ids_oUseYn[] = [
    { CD: '0', DATA: '사용' },
    { CD: '1', DATA: '폐기' },
];
