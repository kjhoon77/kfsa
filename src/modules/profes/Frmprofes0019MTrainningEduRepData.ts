// @ts-nocheck
export const Frmprofes0019MTrainningEduRepData = {};

export interface Ids_ProfesListH {
    TOTCNT_1?: string;
    TOTCNT_2?: string;
    TOTCNT_3?: string;
    TOTTIME_1?: string;
    TOTTIME_2?: string;
    TOTTIME_3?: string;
    CNT220_1?: string;
    CNT220_2?: string;
    CNT220_3?: string;
    TIME220_1?: string;
    TIME220_2?: string;
    TIME220_3?: string;
    CNT221_1?: string;
    CNT221_2?: string;
    CNT221_3?: string;
    TIME221_1?: string;
    TIME221_2?: string;
    TIME221_3?: string;
    CNT222N_1?: string;
    CNT222N_2?: string;
    CNT222N_3?: string;
    TIME222N_1?: string;
    TIME222N_2?: string;
    TIME222N_3?: string;
    CNT222Y_1?: string;
    CNT222Y_2?: string;
    CNT222Y_3?: string;
    TIME222Y_1?: string;
    TIME222Y_2?: string;
    TIME222Y_3?: string;
    CNT224_1?: string;
    CNT224_2?: string;
    CNT224_3?: string;
    TIME224_1?: string;
    TIME224_2?: string;
    TIME224_3?: string;
    CNT228_1?: string;
    CNT228_2?: string;
    CNT228_3?: string;
    TIME228_1?: string;
    TIME228_2?: string;
    TIME228_3?: string;
    CNT229_1?: string;
    CNT229_2?: string;
    CNT229_3?: string;
    TIME229_1?: string;
    TIME229_2?: string;
    TIME229_3?: string;
}

export interface Ids_SearchJogeon {
    STARTDATE?: string;
    ENDDATE?: string;
    JIBU?: string;
    JIKWI?: string;
    GUBUN?: string;
    COURSEGUBUN?: string;
    ORDERSTART?: string;
    ORDEREND?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ProfesListD {
    LDPFMGNO?: string;
    LDPFNAME?: string;
    JIKWI?: string;
    SUMCNT?: string;
    SUMTIME?: string;
    CNT220?: string;
    CNT221?: string;
    CNT222N?: string;
    CNT222Y?: string;
    CNT224?: string;
    CNT228?: string;
    CNT229?: string;
    TIME220?: string;
    TIME221?: string;
    TIME222N?: string;
    TIME222Y?: string;
    TIME224?: string;
    TIME228?: string;
    TIME229?: string;
    TP?: string;
    TOT?: string;
    SUMCNT_M?: string;
    SUMCNT_S?: string;
    SEQ?: string;
    CNT_SABUN?: string;
}

export interface Ids_ioCourseGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseGubun: Ids_ioCourseGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '3', DATA: '정규' },
    { CD: '4', DATA: '특별' },
];

export interface Ids_position {
    TP?: string;
    DATA?: string;
}

export const ds_ds_position: Ids_position[] = [
    { TP: 'M', DATA: '정교수' },
    { TP: 'S', DATA: '보조교수' },
];
