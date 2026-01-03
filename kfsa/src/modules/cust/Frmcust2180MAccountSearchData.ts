// @ts-nocheck
export const Frmcust2180MAccountSearchData = {};

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oAccount {
    SEQ?: string;
    CMGNO?: number;
    CGTMGNO?: string;
    CGTNM?: string;
    CNO?: string;
    CCOURSECD?: string;
    CNICKNM?: string;
    CSTATUSGUBUN?: string;
    FMNM?: string;
    BNM?: string;
    TR_AMT?: string;
    BANK_NM?: string;
    IACCT_NO?: string;
    INP_ST?: string;
    TR_IL?: string;
}

export interface Ids_oBank {
    CD?: string;
    DATA?: string;
}

export interface Ids_oError {
    SEQ?: string;
    CMGNO?: number;
    CGTMGNO?: string;
    CGTNM?: string;
    CNO?: string;
    CCOURSECD?: string;
    CNICKNM?: string;
    CSTATUSGUBUN?: string;
    FMNM?: string;
    BNM?: string;
    TR_AMT?: string;
    BANK_NM?: string;
    IACCT_NO?: string;
    INP_ST?: string;
    ER_GUBUN?: string;
    ER_MSG?: string;
    TR_IL?: string;
}

export interface Ids_oChange {
    SEQ?: string;
    CMGNO?: number;
    CGTMGNO?: string;
    CGTNM?: string;
    CNO?: string;
    CCOURSECD?: string;
    CNICKNM?: string;
    CSTATUSGUBUN?: string;
    FMNM?: string;
    BNM?: string;
    TR_AMT?: string;
    BANK_NM?: string;
    IACCT_NO?: string;
    INP_ST?: string;
    CHANGEYN?: string;
}

export interface Ids_oMemberFee {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oMemberFee: Ids_oMemberFee[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '회비' },
    { CD: '3', DATA: '교육비' },
];

export interface Ids_oSort {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSort: Ids_oSort[] = [
    { CD: '1', DATA: '입금일자,지부 순' },
    { CD: '2', DATA: '지부,입금일자 순' },
];

export interface Ids_oAccountCnt {
    SEQ?: string;
    CMGNO?: number;
    CGTMGNO?: string;
    CGTNM?: string;
    CNO?: string;
    CCOURSECD?: string;
    CNICKNM?: string;
    CSTATUSGUBUN?: string;
    FMNM?: string;
    BNM?: string;
    TR_AMT?: string;
    BANK_NM?: string;
    IACCT_NO?: string;
    INP_ST?: string;
    TR_IL?: string;
}
