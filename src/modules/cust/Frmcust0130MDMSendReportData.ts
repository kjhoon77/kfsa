// @ts-nocheck
export const Frmcust0130MDMSendReportData = {};

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_ioMemberGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMemberGubun: Ids_ioMemberGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '회원' },
    { CD: '1', DATA: '비회원' },
];

export interface Ids_ioCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioCourseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYn: Ids_ioCourseYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '선택                               ' },
    { CD: '2', DATA: '다중선택' },
];

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPrintGubun: Ids_oPrintGubun[] = [
    { CD: '1', DATA: '두줄 출력' },
    { CD: '2', DATA: '세줄 출력' },
];

export interface Ids_oAdditionInfo {
    CD?: string;
    DATA?: string;
}

export interface Ids_oAddrGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddrGubun: Ids_oAddrGubun[] = [
    { CD: '1', DATA: '회비' },
    { CD: '2', DATA: '교육' },
];

export interface Ids_SearchJogeon {
    ADDR_GUBUN?: string;
    JIBU?: string;
    REGION_GUBUN?: string;
    REGION1?: string;
    REGION2?: string;
    MEMBER_GUBUN?: string;
    COURSE_GUBUN?: string;
    COURSE?: string;
    COURSE1_6IN?: string;
    BIZ_GUBUN?: string;
    BIZ1?: string;
    BIZ2?: string;
    MGNO_GUBUN?: string;
    MGNO1?: string;
    MGNO2?: string;
    BNM?: string;
    column0?: string;
    COURSE_GUBUN_D?: string;
    COURSE_D?: string;
    COURSE1_6IN_D?: string;
}

export interface Ids_SendReport {
    ADDR1?: string;
    ADDR2?: string;
    BNM?: string;
    CNO?: string;
    ZIPCD?: string;
}

export interface Ids_ioCourseYnD {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYnD: Ids_ioCourseYnD[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택                               ' },
    { CD: '1', DATA: '다중선택' },
];

export interface Ids_ioCourseD {
    CD?: string;
    DATA?: string;
}
