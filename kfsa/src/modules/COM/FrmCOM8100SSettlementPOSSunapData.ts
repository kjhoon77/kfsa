// @ts-nocheck
export const FrmCOM8100SSettlementPOSSunapData = {};

export interface Ids_oBankSunapGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oBankSunapGubun: Ids_oBankSunapGubun[] = [
    { CD: '0', DATA: '방문(직납)' },
    { CD: '4', DATA: '방문(은납)' },
];

export interface Ids_oSunapGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunapGubun: Ids_oSunapGubun[] = [
    { CD: '0', DATA: '현금' },
    { CD: '1', DATA: '카드' },
    { CD: '2', DATA: '현금영수증' },
    { CD: '3', DATA: '가상계좌(LG U+)' },
];

export interface Ids_oRepaySunapGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRepaySunapGubun: Ids_oRepaySunapGubun[] = [
    { CD: '0', DATA: '현금' },
    { CD: '1', DATA: '카드' },
    { CD: '2', DATA: '현금영수증' },
];
