// @ts-nocheck
export const Frmcust0012BuildingHistoryData = {};

export interface Ids_ioAddrGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioAddrGubun: Ids_ioAddrGubun[] = [
    { CD: '0', DATA: '청구지선택' },
    { CD: '1', DATA: '대상물주소' },
    { CD: '2', DATA: '선임자주소' },
    { CD: '3', DATA: '직접입력' },
];

export interface Ids_ioDelete {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioDelete: Ids_ioDelete[] = [
    { CD: '00', DATA: '' },
    { CD: '01', DATA: '소멸' },
    { CD: '02', DATA: '용폐' },
    { CD: '03', DATA: '중복' },
    { CD: '04', DATA: '기타' },
    { CD: '99', DATA: '관리대상제외' },
];

export interface Ids_ioYear1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYear1: Ids_ioYear1[] = [
    { CD: 'B', DATA: '상반기' },
    { CD: 'A', DATA: '하반기' },
];

export interface Ids_ioYear2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYear2: Ids_ioYear2[] = [
    { CD: 'B', DATA: '상반기' },
    { CD: 'A', DATA: '하반기' },
];

export interface Ids_ioBusiness {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioBusiness: Ids_ioBusiness[] = [
    { CD: '01', DATA: '기관장' },
    { CD: '02', DATA: '감독적직위' },
    { CD: '03', DATA: '기타' },
];

export interface Ids_ioYear {
    CD?: string;
}

export const ds_ds_ioYear: Ids_ioYear[] = [
    { CD: '2009' },
    { CD: '2008' },
    { CD: '2007' },
    { CD: '2006' },
    { CD: '2005' },
    { CD: '2004' },
    { CD: '2003' },
    { CD: '2002' },
    { CD: '2001' },
];

export interface Ids_ioAccount {
    YEAR?: string;
    GUBUN?: string;
    AMT?: string;
}

export const ds_ds_ioAccount: Ids_ioAccount[] = [
    { AMT: '', GUBUN: '수납', YEAR: '2010' },
    { AMT: '48000', GUBUN: '', YEAR: '2009' },
    { AMT: '', GUBUN: '수납', YEAR: '2008' },
    { AMT: '48000', GUBUN: '', YEAR: '2007' },
    { AMT: '', GUBUN: '', YEAR: '2006' },
];

export interface Ids_oRepayYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRepayYn: Ids_oRepayYn[] = [
    { CD: '', DATA: '대상물명' },
    { CD: 'Y', DATA: '주소' },
    { CD: 'N', DATA: '전화번호' },
];
