// @ts-nocheck
export const Frmspcledu0580MExamPaperManagementData = {};

export interface Ids_ioExamPaper {
    EPALPHATYPE?: string;
    EPCOURSECD?: string;
    EPNUMTYPE?: string;
    EPQSTITEMCNT?: number;
    EPTOTALPOINT?: number;
    EPREMARK?: string;
    USE_YN?: string;
}

export interface Ids_oAlphaType {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAlphaType: Ids_oAlphaType[] = [
    { CD: 'A', DATA: 'A형' },
    { CD: 'B', DATA: 'B형' },
    { CD: 'C', DATA: 'C형' },
    { CD: 'D', DATA: 'D형' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oNumType {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oNumType: Ids_oNumType[] = [
    { CD: '', DATA: '전체' },
    { CD: '01', DATA: '1종' },
    { CD: '02', DATA: '2종' },
    { CD: '03', DATA: '3종' },
    { CD: '04', DATA: '4종' },
    { CD: '05', DATA: '5종' },
    { CD: '06', DATA: '6종' },
    { CD: '07', DATA: '7종' },
    { CD: '08', DATA: '8종' },
    { CD: '09', DATA: '9종' },
    { CD: '10', DATA: '10종' },
];

export interface Ids_ioExamPaperSearch {
    EPALPHATYPE?: string;
    EPCOURSECD?: string;
    EPNUMTYPE?: string;
    EPQSTITEMCNT?: number;
    EPTOTALPOINT?: number;
    EPREMARK?: string;
    USE_YN?: string;
}

export interface Ids_oModifyColumn {
    COLUMNCD?: string;
    COLUMNNM?: string;
}

export const ds_ds_oModifyColumn: Ids_oModifyColumn[] = [
    { COLUMNCD: 'EPQSTITEMCNT', COLUMNNM: '문항수' },
    { COLUMNCD: 'EPTOTALPOINT', COLUMNNM: '총점' },
    { COLUMNCD: 'EPREMARK', COLUMNNM: '비고' },
    { COLUMNCD: 'USE_YN', COLUMNNM: '사용유무' },
];
