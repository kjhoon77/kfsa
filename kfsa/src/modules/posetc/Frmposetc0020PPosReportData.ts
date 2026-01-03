// @ts-nocheck
export const Frmposetc0020PPosReportData = {};

export interface Ids_oJibu {
    JJIBUCD?: string;
    JJIBUNM?: string;
}

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '수납' },
    { CD: '1', DATA: '환불' },
    { CD: '2', DATA: '폐기' },
];

export interface Ids_oSunap {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunap: Ids_oSunap[] = [
    { CD: '', DATA: '전체' },
    { CD: '10', DATA: '현금직납' },
    { CD: '14', DATA: '현금은납' },
    { CD: '17', DATA: '지로' },
    { CD: '11', DATA: '카드' },
    { CD: '12', DATA: '현금영수증' },
    { CD: '13', DATA: '가상계좌' },
];

export interface Ids_oDateGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oDateGubun: Ids_oDateGubun[] = [
    { CD: '1', DATA: '수납 일자' },
    { CD: '2', DATA: '시스템 입력 일자' },
];

export interface Ids_oOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oOrder: Ids_oOrder[] = [
    { CD: '1', DATA: '수납 일자' },
    { CD: '2', DATA: '수납구분' },
    { CD: '3', DATA: '결제구분' },
];

export interface Ids_oPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPrintGubun: Ids_oPrintGubun[] = [
    { CD: '1', DATA: '집계(통계)' },
    { CD: '2', DATA: '리스트(내역)' },
];

export interface Ids_ioResult {
    PMPGMGUBUN?: string;
    PMPROCDATE?: string;
    PMPCORDERNO?: string;
    PGMID?: string;
    PGMNM?: string;
    PMPCGUBUN?: string;
    PMPGMGUBUNNM?: string;
    PMPAYMENTFLAG?: string;
    PMPAYMENTFLAGNM?: string;
    PMITEM2?: string;
    PMCLAS?: string;
    PMAMT?: string;
    PMCLASNM?: string;
    TOT_CNT1?: string;
    TOT_CNT2?: string;
    TOT_AMT1?: string;
    TOT_AMT2?: string;
    CASH1_CNT1?: string;
    CASH1_CNT2?: string;
    CARD_CNT1?: string;
    CARD_CNT2?: string;
    CASH2_CNT1?: string;
    CASH2_CNT2?: string;
    CASH1_AMT1?: string;
    CASH1_AMT2?: string;
    CARD_AMT1?: string;
    CARD_AMT2?: string;
    CASH2_AMT1?: string;
    CASH2_AMT2?: string;
    PNM?: string;
}

export interface Ids_oPosProgramId {
    PGMID?: string;
    PGMNM?: string;
    PGMGUBUN?: string;
    PGMGUBUNNM?: string;
}

export interface Ids_oPosJibu {
}
