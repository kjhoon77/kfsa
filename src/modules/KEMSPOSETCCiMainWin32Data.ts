// @ts-nocheck
export const KEMSPOSETCCiMainWin32Data = {};

export interface Igds_oUserInfo {
    PSABUN?: string;
    PPERSONNM?: string;
    PRESIDENTNO?: string;
    PDEPTCD?: string;
    PDEPTNM?: string;
    PPOSITNCD?: string;
    PPOSITNNM?: string;
}

export interface Igds_oPosResult {
}

export interface Igds_oPrintReceiptMast {
}

export interface Igds_oPrintReceiptDtl {
}

export interface Igds_oPrintReceiptHistory {
}

export interface Igds_ioPrinter {
    NO?: string;
    NM?: string;
    PATH?: string;
    PORT?: string;
}

export const ds_gds_ioPrinter: Igds_ioPrinter[] = [
    { NM: '1번 프린터', NO: '01', PATH: '', PORT: '' },
    { NM: '2번 프린터', NO: '02', PATH: '', PORT: '' },
    { NM: '3번 프린터', NO: '03', PATH: '', PORT: '' },
    { NM: '4번 프린터', NO: '04', PATH: '', PORT: '' },
    { NM: '5번 프린터', NO: '05', PATH: '', PORT: '' },
    { NM: '6번 프린터', NO: '06', PATH: '', PORT: '' },
    { NM: '기본 프린터', NO: '00', PATH: '', PORT: '' },
];

export interface Igds_ioPrintConfig {
    PCCD?: string;
    PCNM?: string;
    USE_YN?: string;
    PCLEFTMARGIN?: number;
    PCTOPMARGIN?: number;
    PCPRINTERNO?: string;
}

export const ds_gds_ioPrintConfig: Igds_ioPrintConfig[] = [
    { PCCD: '수첩', PCLEFTMARGIN: '0', PCNM: '수첩', PCPRINTERNO: '00', PCTOPMARGIN: '0', USE_YN: 'Y' },
    { PCCD: '영수증', PCLEFTMARGIN: '0', PCNM: '영수증', PCPRINTERNO: '00', PCTOPMARGIN: '0', USE_YN: 'Y' },
    { PCCD: '수강증', PCLEFTMARGIN: '0', PCNM: '수강증', PCPRINTERNO: '00', PCTOPMARGIN: '0', USE_YN: 'Y' },
    { PCCD: '교육통지서', PCLEFTMARGIN: '0', PCNM: '교육통지서', PCPRINTERNO: '00', PCTOPMARGIN: '0', USE_YN: 'Y' },
];

export interface Igds_oLocalPrinter {
    NM?: string;
    PATH?: string;
}
