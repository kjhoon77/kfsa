// @ts-nocheck
export const FrmspcleduStat0010Data = {};

export interface Ids_exampass {
    GTTEAMNM?: string;
    GTPRTSEQ?: string;
    BF_TSJUBSUCNT?: string;
    BF_TSENTERCNT?: string;
    BF_TSNOTENTERCNT?: string;
    BF_TSPASSCNT?: string;
    BF_TSNOTPASSCNT?: string;
    TSJUBSUCNT?: string;
    TSJUBSUCNT_BANG1?: string;
    TSJUBSUCNT_BANG2?: string;
    TSENTERCNT?: string;
    TSENTERCNT_BANG1?: string;
    TSENTERCNT_BANG2?: string;
    TSNOTENTERCNT?: string;
    TSNOTENTERCNT_BANG1?: string;
    TSNOTENTERCNT_BANG2?: string;
    TSPASSCNT?: string;
    TSPASSCNT_BANG1?: string;
    TSPASSCNT_BANG2?: string;
    TSNOTPASSCNT?: string;
    TSNOTPASSCNT_BANG1?: string;
    TSNOTPASSCNT_BANG2?: string;
    GTMGNO?: string;
}

export interface Ids_exampascond {
    STARTDATE?: string;
    ENDDATE?: string;
    FLAG?: string;
    TODAYMONTH?: string;
}

export interface Ids_Bang {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Bang: Ids_Bang[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '1급' },
    { CD: '2', DATA: '2급' },
];

export interface Ids_Jibu {
    CD?: string;
    DATA?: string;
}
