// @ts-nocheck
export const Frmcust2170MEGiroSearchData = {};

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oEGiro {
    SEQ?: string;
    CMGNO?: number;
    CGTMGNO?: string;
    CGTNM?: string;
    CNO?: string;
    CREGCD?: string;
    CREGNM?: string;
    CCOURSECD?: string;
    CCOURSENM?: string;
    CSTATUSGUBUN?: string;
    FMNM?: string;
    BNM?: string;
    AMOUNT?: string;
    CHARGE?: string;
}

export interface Ids_oError {
    EGSEQ?: string;
    EGGTMGNO?: string;
    EGCNO?: string;
    EGAMOUNT?: string;
    EGCHARGE?: string;
    EGROWDATA?: string;
    EGREMARK?: string;
}

export interface Ids_oChange {
    EGSEQ?: string;
    EGGTMGNO?: string;
    EGCNO?: string;
    EGAMOUNT?: string;
    EGCHARGE?: string;
    EGROWDATA?: string;
    EGREMARK?: string;
}

export interface Ids_ioEGGROUPGUBUN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioEGGROUPGUBUN: Ids_ioEGGROUPGUBUN[] = [
    { CD: '0', DATA: '' },
    { CD: '', DATA: '그룹지로' },
];
