// @ts-nocheck
export const FrmspcleduStat0100Data = {};

export interface Ids_exampascond {
    STARTDATE?: string;
    ENDDATE?: string;
    FLAG?: string;
    TODAYMONTH?: string;
}

export interface Ids_TrainingList {
    BF_LSDSCNT?: number;
    BF_LSOUTCNT?: number;
    BF_LSPASSCNT?: number;
    BF_LSRCNT?: number;
    GTPRTSEQ?: string;
    GTTEAMNM?: string;
    GUBN?: string;
    LSDSCNT?: number;
    LSDSCNT_T60?: number;
    LSDSCNT_T61?: number;
    LSOUTCNT?: number;
    LSOUTCNT_T60?: number;
    LSOUTCNT_T61?: number;
    LSPASSCNT?: number;
    LSPASSCNT_T60?: number;
    LSPASSCNT_T61?: number;
    LSRCNT?: number;
    LSRCNT_T60?: number;
    LSRCNT_T61?: number;
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
