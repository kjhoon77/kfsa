// @ts-nocheck
export const FrmCOM3310POSStatisticsData = {};

export interface Ids_oProgramId {
    CD?: string;
    DATA?: string;
}

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: '01', DATA: '집계(통계)' },
    { CD: '02', DATA: '리스트(내역)       ' },
];

export interface Ids_oDateGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oDateGubun: Ids_oDateGubun[] = [
    { CD: '01', DATA: '적용(수납)일자' },
    { CD: '02', DATA: '입력(시스템)일자' },
];

export interface Ids_oSetlementGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSetlementGubun: Ids_oSetlementGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '현금' },
    { CD: '2', DATA: '카드' },
    { CD: '3', DATA: '현금영수증' },
];

export interface Ids_oSunapGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunapGubun: Ids_oSunapGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '은납' },
    { CD: '2', DATA: '타지부납(회원회비)' },
    { CD: '3', DATA: '직납' },
    { CD: '4', DATA: '지로납' },
    { CD: '5', DATA: '인터넷접수(강습)' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}
