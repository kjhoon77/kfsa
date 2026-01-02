// @ts-nocheck
export const Frmtraining3000PSettlementPOSData = {};

export interface Ids_oRecieptYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRecieptYn: Ids_oRecieptYn[] = [
    { CD: 'Y', DATA: '출력' },
    { CD: 'N', DATA: '미출력' },
];

export interface Ids_oPosProgramId {
}

export interface Ids_ioSetlm {
    LSLLCSNO?: string;
    LSLHSEQ?: number;
    LSSEQ?: number;
    LSSETLMTYN?: string;
    LSGUBUNCD?: string;
    LSGUBUN?: string;
    LSPROCAMOUNT?: number;
    LSPROCDATE?: string;
    LSPONYGUBUN?: string;
    LSPONYDATE?: string;
    LSPROCGTMGNO?: string;
    LSPMYEAR?: string;
    LSPMMGNO?: number;
    LSREPAYREF?: number;
    LSACTIVEYN?: string;
    LSREGDATE?: string;
    LSREGSABUN?: string;
    LSMODDATE?: string;
    LSMODSABUN?: string;
}

export interface Ids_oSunapGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunapGubun: Ids_oSunapGubun[] = [
    { CD: '0', DATA: '현금' },
    { CD: '1', DATA: '카드' },
    { CD: '2', DATA: '현금영수증' },
    { CD: '3', DATA: '가상계좌' },
];

export interface Ids_oBankSunapGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oBankSunapGubun: Ids_oBankSunapGubun[] = [
    { CD: '0', DATA: '방문(직납)' },
    { CD: '4', DATA: '방문(은납)' },
];

export interface Ids_oProcGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oProcGubun: Ids_oProcGubun[] = [
    { CD: '01', DATA: '수납' },
    { CD: '02', DATA: '환불' },
];
