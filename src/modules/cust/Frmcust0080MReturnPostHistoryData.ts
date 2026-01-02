// @ts-nocheck
export const Frmcust0080MReturnPostHistoryData = {};

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '회비고지서' },
    { CD: '2', DATA: '교육통지서' },
    { CD: '3', DATA: '기타' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oMemberGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oMemberGubun: Ids_oMemberGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '회원' },
    { CD: '1', DATA: '비회원' },
];

export interface Ids_oOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oOrder: Ids_oOrder[] = [
    { CD: '0', DATA: '반송일자, 관리번호' },
    { CD: '1', DATA: '관리번호, 반송일자' },
    { CD: '2', DATA: '지부, 반송일자, 관리번호' },
];

export interface Ids_oCourseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCourseYn: Ids_oCourseYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택                               ' },
    { CD: '1', DATA: '다중선택' },
];

export interface Ids_oInput {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oInput: Ids_oInput[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '직접입력' },
    { CD: '1', DATA: '연계(CPOST)' },
];

export interface Ids_oPostReturn {
    BMGNO?: number;
    BNM?: string;
    CBMGNO?: number;
    CCOURSECD?: string;
    CEDUPOSTADDR1?: string;
    CEDUPOSTADDR2?: string;
    CEDUPOSTGUBUN?: string;
    CEDUPOSTPLACE?: string;
    CEDUPOSTZIPCD?: string;
    CFEEPOSTADDR1?: string;
    CFEEPOSTADDR2?: string;
    CFEEPOSTGUBUN?: string;
    CFEEPOSTPLACE?: string;
    CFEEPOSTZIPCD?: string;
    CGTMGNO?: string;
    CMGNO?: number;
    CNO?: string;
    CPOSTREQGUBUN?: string;
    CREGCD?: string;
    CSTATUSGUBUN?: string;
    GTDEPTNM?: string;
    PRBIZGUBUN?: string;
    PRIMGAE?: string;
    PRPDDATE?: string;
    PRPDGUBUN?: string;
    PRPDMGNO?: number;
    PRPRINTNO?: number;
    PRSENDDATE?: string;
    PRCNT?: number;
    MINAPFEE?: string;
}

export interface Ids_oPrint {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPrint: Ids_oPrint[] = [
    { CD: '0', DATA: '관리번호별 이력' },
    { CD: '1', DATA: '전체 이력' },
];

export interface Ids_oMinap {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oMinap: Ids_oMinap[] = [
    { CD: '0', DATA: '미출력' },
    { CD: '1', DATA: '출력' },
];
