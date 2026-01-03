// @ts-nocheck
export const Frmprofes0021P01TimeScheduleListData = {};

export interface Ids_ioTimeSchedule {
    TSENDTIME?: string;
    TSGEMGNO?: string;
    TSHOUR?: string;
    TSREMARK?: string;
    TSSEQ?: string;
    TSSTARTTIME?: string;
    TSTIME?: string;
    TSTYPE?: string;
    TSTYPESEQ?: string;
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

export interface Ids_oEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduGubun: Ids_oEduGubun[] = [
    { CD: 'T', DATA: '강습교육' },
    { CD: 'B', DATA: '실무교육' },
];
