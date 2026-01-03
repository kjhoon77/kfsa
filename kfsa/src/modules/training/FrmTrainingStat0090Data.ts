// @ts-nocheck
export const FrmTrainingStat0090Data = {};

export interface Ids_exampass {
    GTTEAMNM?: string;
    GTPRTSEQ?: string;
    BF_LSRCNT?: string;
    BF_LSDSAMT?: string;
    LSRCNT?: string;
    LSRCNT_T60?: string;
    LSRCNT_T61?: string;
    LSDSAMT?: string;
    LSDSAMT_T60?: string;
    LSDSAMT_T61?: string;
}

export interface Ids_exampascond {
    STARTDATE?: string;
    ENDDATE?: string;
    FLAG?: string;
    TODAYMONTH?: string;
}

export interface Ids_Jibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_Bang {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Bang: Ids_Bang[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '전문교육' },
    { CD: '2', DATA: '세미나' },
];
