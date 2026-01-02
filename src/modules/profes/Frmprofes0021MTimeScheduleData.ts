// @ts-nocheck
export const Frmprofes0021MTimeScheduleData = {};

export interface Ids_oTimeSchedule {
    LUNCHTIME?: string;
    TOTALHOUR?: string;
    TSENDTIME?: string;
    TSGEMGNO?: string;
    TSHOUR?: string;
    TSREMARK?: string;
    TSSTARTTIME?: string;
    TSTYPE?: string;
    TSTYPESEQ?: string;
    LUNCHTIMEYN?: string;
    TSTYPENM?: string;
    TSGUBUN?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTimeType {
    CD?: string;
    DATA?: string;
    TSTYPESEQ?: string;
    TSGEMGNO?: string;
}

export interface Ids_oLunchYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oLunchYn: Ids_oLunchYn[] = [
    { CD: '0', DATA: '미사용' },
    { CD: '1', DATA: '사용' },
];

export interface Ids_iJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTotalTime {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oTotalTime: Ids_oTotalTime[] = [
    { CD: '1', DATA: '1교시' },
    { CD: '2', DATA: '2교시' },
    { CD: '3', DATA: '3교시' },
    { CD: '4', DATA: '4교시' },
    { CD: '5', DATA: '5교시' },
    { CD: '6', DATA: '6교시' },
    { CD: '7', DATA: '7교시' },
    { CD: '8', DATA: '8교시' },
    { CD: '9', DATA: '9교시' },
    { CD: '10', DATA: '10교시' },
    { CD: '11', DATA: '11교시' },
    { CD: '12', DATA: '12교시' },
    { CD: '13', DATA: '13교시' },
    { CD: '14', DATA: '14교시' },
    { CD: '15', DATA: '15교시' },
];

export interface Ids_oLunchTime {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oLunchTime: Ids_oLunchTime[] = [
    { CD: '1', DATA: '1교시' },
    { CD: '2', DATA: '2교시' },
    { CD: '3', DATA: '3교시' },
    { CD: '4', DATA: '4교시' },
    { CD: '5', DATA: '5교시' },
    { CD: '6', DATA: '6교시' },
    { CD: '7', DATA: '7교시' },
    { CD: '8', DATA: '8교시' },
    { CD: '9', DATA: '9교시' },
    { CD: '10', DATA: '10교시' },
];

export interface Ids_iTimeScheduleDetailList {
    TSGEMGNO?: string;
    TSTYPE?: string;
    TSSEQ?: string;
    TSTYPESEQ?: string;
    TSTIME?: string;
    TSSTARTTIME?: string;
    TSENDTIME?: string;
    TSREMARK?: string;
    TSHOUR?: string;
    TSTYPENM?: string;
    TSGUBUN?: string;
}

export interface Ids_oEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduGubun: Ids_oEduGubun[] = [
    { CD: 'T', DATA: '강습교육' },
    { CD: 'B', DATA: '실무교육' },
];
