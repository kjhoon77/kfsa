// @ts-nocheck
export const Frmcust0015PSobangInfoData = {};

export interface Ids_ioMemberGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMemberGubun: Ids_ioMemberGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '정상 자료' },
    { CD: '1', DATA: '취소된 자료' },
];

export interface Ids_ioOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioOrder: Ids_ioOrder[] = [
    { CD: '1', DATA: '고객번호' },
    { CD: '2', DATA: '대상물(업체)명, 고객번호' },
    { CD: '3', DATA: '지역, 주소, 대상물(업체)명' },
    { CD: '4', DATA: '소방본부 연계관리번호' },
    { CD: '5', DATA: '주소, 대상물(업체)명' },
];

export interface Ids_ioCourseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYn: Ids_ioCourseYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '선택                               ' },
    { CD: '2', DATA: '다중선택' },
];

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_ioYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYn: Ids_ioYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '입력된 자료' },
    { CD: '1', DATA: '입력안된 자료' },
];

export interface Ids_ioCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oList {
    MGNO?: string;
    BNM?: string;
    CFIREMGNO?: string;
    FMNM?: string;
    FMBIRTHDAY?: string;
    CREGISTERYYMM?: string;
    CFEEYYMM?: string;
    FMHSTARTDATE?: string;
    FMHENDDATE?: string;
    FMHADDR?: string;
    FMHHPTEL?: string;
    EMAIL?: string;
    FMHTEL?: string;
    BIRTHDAY?: string;
    FMPERSONKEY?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oState {
    CREGCD?: string;
    RCNM?: string;
    CNT?: string;
    CFIREMGNO1?: string;
    CFIREMGNO2?: string;
}
