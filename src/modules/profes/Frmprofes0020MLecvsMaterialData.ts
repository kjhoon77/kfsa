// @ts-nocheck
export const Frmprofes0020MLecvsMaterialData = {};

export interface Ids_oJikwi {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJikwi: Ids_oJikwi[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '1급' },
    { CD: '2', DATA: '2급' },
    { CD: '3', DATA: '3급' },
    { CD: '4', DATA: '4급' },
    { CD: '5', DATA: '5급' },
];

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '전임' },
    { CD: '2', DATA: '겸임' },
];

export interface Ids_ProfesList {
    LDPFMGNO?: string;
    NAME?: string;
    GUBUN?: string;
    NAME1?: string;
    JIKWI?: string;
    GUBUNCD?: string;
    TPCNT?: string;
    TOT?: string;
    TOT_1?: string;
    TOT_2?: string;
    YES?: string;
    YES_1?: string;
    YES_2?: string;
    NO?: string;
    NO_1?: string;
    NO_2?: string;
}

export interface Ids_SearchJogeon {
    STARTDATE?: string;
    ENDDATE?: string;
    JIBU?: string;
    JIKWI?: string;
    GUBUN?: string;
    EDUGUBUN?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduGubun: Ids_oEduGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'B', DATA: '실무' },
    { CD: 'T', DATA: '강습' },
];
