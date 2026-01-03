// @ts-nocheck
export const Frmcust1141MCyberEduReportData = {};

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

export interface Ids_ioReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioReport: Ids_ioReport[] = [
    { CD: '1', DATA: '일자별 교육이수 리스트' },
    { CD: '2', DATA: '일자별 교육이수 현황' },
    { CD: '3', DATA: '월별 교육이수 현황' },
];

export interface Ids_SearchJogeon {
    REPROT_GUBUN?: string;
    REPROT_GUBUN_GROUP?: string;
    YEAR?: string;
    JIBU?: string;
    MEMBER_GUBUN?: string;
    COURSE_GUBUN?: string;
    COURSE?: string;
    COURSE1_6IN?: string;
    EDUYMD_GUBUN?: string;
    EDU_YMD_FR?: string;
    EDU_YMD_TO?: string;
    EDU_GUBUN?: string;
    PRINT_GUBUN1?: string;
    PRINT_GUBUN2?: string;
    EDUYMDFR?: string;
    EDUYMDTO?: string;
    EDUGUBUN?: string;
    EDU_ORDER?: string;
    EDU_ORDERGUBUN?: string;
    MINAPGUBUN?: string;
    SUCCESSIONGUBUN?: string;
    PROCJIBUGUBUN?: string;
}

export interface Ids_EduList {
    GTTEAMNM?: string;
    MGNO?: string;
    EPPERSONNM?: string;
    BIRTHDAY?: string;
    ADDR?: string;
    BNM?: string;
    PASSDATE?: string;
    MINAPAMT?: string;
    TAJIBU?: string;
}

export interface Ids_ioPrintGubun1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioPrintGubun1: Ids_ioPrintGubun1[] = [
    { CD: '1', DATA: '직능별' },
    { CD: '2', DATA: '일자별' },
];

export interface Ids_ioPrintGubun2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioPrintGubun2: Ids_ioPrintGubun2[] = [
    { CD: '1', DATA: '대표직능' },
    { CD: '2', DATA: '세부직능' },
];

export interface Ids_EduStatistics {
    RCGTMGNO?: string;
    RCREGCD?: string;
    RCNM?: string;
    RCORDERNO?: string;
    RCUSEGUBUN?: string;
    GTTEAMNM?: string;
    CGTMGNO?: string;
    GTPRTSEQ?: string;
    CGROUPCD?: string;
    CGROUPNM?: string;
    CREGCD?: string;
    EPPASSDATE?: string;
    CNT?: string;
}

export interface Ids_DayEduStatistics {
    GTPRTSEQ?: string;
    GTTEAMNM?: string;
    CGROUPCD?: string;
    CGROUPNM?: string;
    PASSDATE?: string;
    NM1?: string;
    NM2?: string;
    NM3?: string;
    NM4?: string;
    NM5?: string;
    NM6?: string;
    NM7?: string;
    NM8?: string;
    NM9?: string;
    NM10?: string;
    NM11?: string;
    NM12?: string;
    NM13?: string;
    NM14?: string;
    NM15?: string;
    NM16?: string;
    NM17?: string;
    NM18?: string;
    NM19?: string;
    NM20?: string;
    NM21?: string;
    NM22?: string;
    NM23?: string;
    NM24?: string;
    NM25?: string;
    NM26?: string;
    NM27?: string;
    NM28?: string;
    NM29?: string;
    NM30?: string;
    NM31?: string;
    NM32?: string;
    NM33?: string;
    NM34?: string;
    NM35?: string;
    CNT1?: number;
    CNT2?: number;
    CNT3?: number;
    CNT4?: number;
    CNT5?: number;
    CNT6?: number;
    CNT7?: number;
    CNT8?: number;
    CNT9?: number;
    CNT10?: number;
    CNT11?: number;
    CNT12?: number;
    CNT13?: number;
    CNT14?: number;
    CNT15?: number;
    CNT16?: number;
    CNT17?: number;
    CNT18?: number;
    CNT19?: number;
    CNT20?: number;
    CNT21?: number;
    CNT22?: number;
    CNT23?: number;
    CNT24?: number;
    CNT25?: number;
    CNT26?: number;
    CNT27?: number;
    CNT28?: number;
    CNT29?: number;
    CNT30?: number;
    CNT31?: number;
    CNT32?: number;
    CNT33?: number;
    CNT34?: number;
    CNT35?: number;
    CNTSUM?: number;
}
