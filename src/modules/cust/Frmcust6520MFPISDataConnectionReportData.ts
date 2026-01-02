// @ts-nocheck
export const Frmcust6520MFPISDataConnectionReportData = {};

export const ds_ds_ioExcept = [
    { CD: 'Y', DATA: '포함' },
    { CD: 'N', DATA: '미포함' },
    { CD: 'E', DATA: '연계제외 대상만' },
];

export const ds_ds_ioOrder = [
    { CD: '1', DATA: '소방서, 119센터, 대상물명' },
    { CD: '2', DATA: '대상물명, 소방서, 119센터' },
    { CD: '3', DATA: '구분(상세/세부구분), 소방서, 119센터' },
];

export const ds_ds_ioChoiceYn = [
    { CD: '1', DATA: '전체' },
    { CD: '2', DATA: '선택' },
];

export const ds_ds_ioReport = [
    { CD: '1', DATA: '소방서별 집계' },
    { CD: '2', DATA: '연계 리스트' },
];

export const ds_ds_ioCourse = [
    { CD: '1', DATA: '소방안전관리자' },
    { CD: '3', DATA: '위험물안전관리자' },
    { CD: '5', DATA: '소방기술자' },
    { CD: '8', DATA: '위험물운송자' },
];

export const ds_ds_ioMatch = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '일치자료' },
    { CD: '1', DATA: '미처리' },
    { CD: '2', DATA: '연계제외' },
];

export const ds_ds_ioExceptGubun = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '대상중복' },
    { CD: '1', DATA: '대상삭제' },
    { CD: '2', DATA: '기타' },
];
