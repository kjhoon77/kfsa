// @ts-nocheck
export const Frmcust1040MInetEduStatisticsData = {};

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oIsuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oIsuGubun: Ids_oIsuGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '이수      ' },
    { CD: 'N', DATA: '미이수' },
];

export interface Ids_oJubsuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJubsuGubun: Ids_oJubsuGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '2', DATA: '접수완료' },
    { CD: '1', DATA: '미입금' },
];

export interface Ids_oInetJubsu {
    CNO?: string;
    CREGCD?: string;
    CREGNM?: string;
    CSTATUSGUBUN?: string;
    EDPROCDATE?: string;
    EMBUILDING?: string;
    EMCMGNO?: number;
    EMEMAIL?: string;
    EMISUYN?: string;
    EMMGNO?: number;
    EMPHONE?: string;
    EMSEQ?: number;
    ESCOURSENM?: string;
    ESCOUSECD?: string;
    ESDATE?: string;
    ESGTMGNO?: string;
    ESGTNM?: string;
    ESTIME?: string;
    ESYEAR?: string;
    FMNM?: string;
}
