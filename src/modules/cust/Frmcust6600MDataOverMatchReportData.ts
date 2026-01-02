// @ts-nocheck
export const Frmcust6600MDataOverMatchReportData = {};

export const ds_ds_ioExcept = [
    { CD: 'Y', DATA: '포함' },
    { CD: 'N', DATA: '미포함' },
];

export const ds_ds_ioPrint = [
    { CD: 'ALL', DATA: '전체' },
    { CD: '1', DATA: '1:N 중복연계 (청:안전원)' },
    { CD: '2', DATA: 'N:1 중복연계 (청:안전원)' },
    { CD: '3', DATA: '안전원연계자료 누락(청연계자료 존재)' },
    { CD: '4', DATA: '청연계자료 누락(안전원연계자료 존재)' },
];

export const ds_ds_ioChoiceYn = [
    { CD: '1', DATA: '전체' },
    { CD: '2', DATA: '선택' },
];

export const ds_ds_ioReport = [
    { CD: '1', DATA: '중복/누락 현황' },
    { CD: '2', DATA: '중복/누락 리스트' },
];

export const ds_ds_ioCourse = [
    { CD: '1', DATA: '소방안전관리자' },
    { CD: '3', DATA: '위험물안전관리자' },
    { CD: '5', DATA: '소방기술자' },
    { CD: '8', DATA: '위험물운송자' },
];

export const ds_ds_ioStatus = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '기존대상일치화' },
    { CD: '1', DATA: '신규대상연계' },
];
