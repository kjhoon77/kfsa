// @ts-nocheck
export const Frmcust0090MReturnPostReportData = {};

export interface Ids_oReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oReport: Ids_oReport[] = [
    { CD: '0', DATA: '현황출력' },
    { CD: '1', DATA: '집계출력' },
];

export interface Ids_oChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oChoiceYn: Ids_oChoiceYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '선택' },
];

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: '1', DATA: '회비고지서' },
    { CD: '2', DATA: '교육통지서' },
    { CD: '3', DATA: '기타' },
];

export interface Ids_oBusinessType {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCourseYn: Ids_oCourseYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택                               ' },
    { CD: '1', DATA: '다중선택' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCheckList {
    ADDRESS?: string;
    BNM?: string;
    BTEL?: string;
    CNO?: string;
    COVER1COUNT?: number;
    DELCOUNT?: number;
    FMNM?: string;
    NOCOVERCOUNT?: number;
    PMGNO?: string;
    PRBIZGUBUN?: string;
    PRBIZGUBUNNM?: string;
    PRPDREASON?: string;
}

export interface Ids_oListSum {
}

export interface Ids_oSumList {
    CGTMGNO?: string;
    CNT?: number;
    CREGCD?: string;
    GTTEAMNM?: string;
    RCNM?: string;
    RCORDERNO?: number;
}

export interface Ids_oRegionForm {
    CD?: string;
    DATA?: string;
}
