// @ts-nocheck
export const Frmprofes0007MaterialMgmtData = {};

export interface Ids_Year {
    CD?: string;
    DATA?: string;
}

export interface Ids_Status {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Status: Ids_Status[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '작성중' },
    { CD: '2', DATA: '승인요청' },
    { CD: '3', DATA: '승인요청취소' },
    { CD: '4', DATA: '승인' },
    { CD: '5', DATA: '승인취소' },
    { CD: '6', DATA: '수정요청' },
    { CD: '7', DATA: '수정요청취소' },
    { CD: '8', DATA: '수정허가' },
    { CD: '9', DATA: '수정허가취소' },
];

export interface Ids_TpEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_TpEduGubun: Ids_TpEduGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'B', DATA: '실무교육' },
    { CD: 'T', DATA: '강습교육' },
    { CD: '3', DATA: '기타' },
];

export interface Ids_TecProg {
    TPMGNO?: string;
    TPEDUGUBUN?: string;
    TPYEAR?: string;
    TPREQUSERNM?: string;
    TPSEQ?: string;
    TPCOURSNM?: string;
    TPSUBJECTNM?: string;
    TPSTATUS?: string;
    STATUS?: string;
    TPREGDATE?: string;
    TPREGDATE2?: string;
    TPUSEDATE?: string;
    TPOKDATE?: string;
    INSNUM?: string;
    TPSTATUS_NM?: string;
    SATUS_OKDATE?: string;
    TPREGSABUN?: string;
    PNM?: string;
    PGTMGNO?: string;
    PGTMGNO_NM?: string;
}

export interface Ids_Search {
    TCCOURSECDYN?: string;
    TCCOURSECD?: string;
    TCCOURSENM?: string;
    TCSEARCHGUBUN?: string;
    TCMUNJEGUBUN?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
    PCMGNO?: number;
    PCTCMUNJEGUBUN?: string;
    PCTCSEARCHGUBUN?: string;
}

export interface Ids_oAllCourse {
    CD?: string;
    DATA?: string;
    PCMGNO?: number;
    PCTCMUNJEGUBUN?: string;
    PCTCSEARCHGUBUN?: string;
}

export interface Ids_oAllSubject {
    CD?: number;
    DATA?: string;
    PSPCMGNO?: number;
}

export interface Ids_oSubject {
    CD?: number;
    DATA?: string;
    PSPCMGNO?: number;
}
