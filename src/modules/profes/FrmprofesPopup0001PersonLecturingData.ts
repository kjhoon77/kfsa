// @ts-nocheck
export const FrmprofesPopup0001PersonLecturingData = {};

export interface Ids_ProfesList {
    LMGNO?: string;
    LGUBUN?: string;
    K90102NAME?: string;
    ORD?: string;
    EDUDATE?: string;
    SJTITLE?: string;
    LDEDUTIME?: string;
    LTEDUDAYS?: string;
}

export interface Ids_SearchJogeon {
    STARTDATE?: string;
    ENDDATE?: string;
    SABUN?: string;
    EDUGUBUN?: string;
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
