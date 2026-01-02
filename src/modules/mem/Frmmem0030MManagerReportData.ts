// @ts-nocheck
export const Frmmem0030MManagerReportData = {};

export interface Ids_ioCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioMemberGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMemberGubun: Ids_ioMemberGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '회원' },
    { CD: '1', DATA: '비회원' },
];

export interface Ids_ioBusinessType {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioBusinessType: Ids_ioBusinessType[] = [
    { CD: '1', DATA: '가1' },
    { CD: '2', DATA: '나2' },
    { CD: '3', DATA: '다3' },
    { CD: '99', DATA: '라99' },
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

export interface Ids_ioJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioReport: Ids_ioReport[] = [
    { CD: '1', DATA: '직능지역별' },
    { CD: '2', DATA: '직능지부별' },
    { CD: '3', DATA: '용도지역별' },
    { CD: '4', DATA: '용도지부별' },
    { CD: '5', DATA: '고객지역별' },
    { CD: '6', DATA: '고객지부별' },
];

export interface Ids_SearchJogeon {
    REPORT_GUBUN?: string;
    JIBU?: string;
    MEMBER_GUBUN?: string;
    SELECT_COURSE?: string;
    COURSE_GUBUN?: string;
    COURSE_GUBUN_IN?: string;
    SELECT_BIZ?: string;
    BIZ_GUBUN1?: string;
    BIZ_GUBUN2?: string;
    BOOK1?: string;
    BOOK2?: string;
    SELECT_PERSON?: string;
    PERSON_GUBUN?: string;
    PERSON_GUBUN_IN?: string;
}

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_ManagerStatistics {
    GTDEPTNM?: string;
    RCNM?: string;
    TOT_CNT?: string;
    MEMBER_CNT?: string;
    NMEMBER_CNT?: string;
    COVER_CNT?: string;
}

export interface Ids_CourseStatistics {
    GTDEPTNM?: string;
    RCNM?: string;
    GONG1_CNT?: string;
    GONG2_CNT?: string;
    BANG1_CNT?: string;
    BANG2_CNT?: string;
    DANGER1_CNT?: string;
    DANGER2_CNT?: string;
    DANGER3_CNT?: string;
    DANGER4_CNT?: string;
    DANGER5_CNT?: string;
    DANGER6_CNT?: string;
    SOBANG1_CNT?: string;
    SOBANG2_CNT?: string;
    SOBANG3_CNT?: string;
    SOBANG4_CNT?: string;
    SOBANG5_CNT?: string;
    PERSON_CNT?: string;
    DANCHE_CNT?: string;
    COVER_CNT?: string;
    MEMBER_CNT?: string;
    TOT_CNT?: string;
    NMEMBER_CNT?: string;
    OONSONG_CNT?: string;
    EDU90_CNT?: string;
}

export interface Ids_BizStatistics {
    GTDEPTNM?: string;
    CNM?: string;
    CNICKNM?: string;
    RCNM?: string;
    BIZ_CNT1?: string;
    BIZ_CNT2?: string;
    BIZ_CNT3?: string;
    BIZ_CNT4?: string;
    BIZ_CNT5?: string;
    BIZ_CNT6?: string;
    BIZ_CNT7?: string;
    BIZ_CNT8?: string;
    BIZ_CNT9?: string;
    BIZ_CNT10?: string;
    BIZ_CNT11?: string;
    BIZ_CNT12?: string;
    BIZ_CNT13?: string;
    BIZ_CNT14?: string;
    BIZ_CNT15?: string;
    BIZ_CNT16?: string;
    BIZ_CNT17?: string;
    BIZ_CNT18?: string;
    BIZ_CNT19?: string;
    BIZ_CNT20?: string;
    BIZ_CNT21?: string;
    BIZ_CNT22?: string;
    BIZ_CNT23?: string;
    BIZ_CNT24?: string;
    BIZ_CNT25?: string;
    BIZ_CNT1_15?: string;
    BIZ_CNT15_29?: string;
    BIZ_CNT_TOT?: string;
    BIZ_MEMBER_CNT?: string;
    BIZ_COVER_CNT?: string;
    BIZ_NMEMBER_CNT?: string;
    BIZ_CNT26?: string;
    BIZ_CNT27?: string;
    BIZ_CNT28?: string;
    BIZ_CNT29?: string;
}

export interface Ids_CourseStatisticsNotMember1 {
    GTDEPTNM?: string;
    RCNM?: string;
    GONG1_CNT?: string;
    GONG2_CNT?: string;
    BANG1_CNT?: string;
    BANG2_CNT?: string;
    DANGER1_CNT?: string;
    DANGER2_CNT?: string;
    DANGER3_CNT?: string;
    DANGER4_CNT?: string;
    DANGER5_CNT?: string;
    DANGER6_CNT?: string;
    SOBANG1_CNT?: string;
    SOBANG2_CNT?: string;
    SOBANG3_CNT?: string;
    SOBANG4_CNT?: string;
    SOBANG5_CNT?: string;
    COVER_CNT?: string;
    NMEMBER_CNT?: string;
    OONSONG_CNT?: string;
    EDU90_CNT?: string;
}

export interface Ids_CourseStatisticsNotMember2 {
    GTDEPTNM?: string;
    RCNM?: string;
    GONG1_CNT?: string;
    GONG2_CNT?: string;
    BANG1_CNT?: string;
    BANG2_CNT?: string;
    DANGER1_CNT?: string;
    DANGER2_CNT?: string;
    DANGER3_CNT?: string;
    DANGER4_CNT?: string;
    DANGER5_CNT?: string;
    DANGER6_CNT?: string;
    SOBANG1_CNT?: string;
    SOBANG2_CNT?: string;
    SOBANG3_CNT?: string;
    SOBANG4_CNT?: string;
    SOBANG5_CNT?: string;
    COVER_CNT?: string;
    NMEMBER_CNT?: string;
    OONSONG_CNT?: string;
    EDU90_CNT?: string;
}

export interface Ids_oAdditionInfo {
    CD?: string;
    DATA?: string;
}

export interface Ids_CourseStatisticsTotal {
    GTDEPTNM?: string;
    RCNM?: string;
    GONG1_CNT?: string;
    GONG2_CNT?: string;
    BANG1_CNT?: string;
    BANG2_CNT?: string;
    DANGER1_CNT?: string;
    DANGER2_CNT?: string;
    DANGER3_CNT?: string;
    DANGER4_CNT?: string;
    DANGER5_CNT?: string;
    DANGER6_CNT?: string;
    SOBANG1_CNT?: string;
    SOBANG2_CNT?: string;
    SOBANG3_CNT?: string;
    SOBANG4_CNT?: string;
    SOBANG5_CNT?: string;
    PERSON_CNT?: string;
    DANCHE_CNT?: string;
    COVER_CNT?: string;
    MEMBER_CNT?: string;
    TOT_CNT?: string;
    NMEMBER_CNT?: string;
    OONSONG_CNT?: string;
    EDU90_CNT?: string;
}

export interface Ids_oBook1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oBook1: Ids_oBook1[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '수령' },
    { CD: '2', DATA: '미수령' },
];

export interface Ids_oBook2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oBook2: Ids_oBook2[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '수령' },
    { CD: '2', DATA: '미수령' },
];

export interface Ids_ioPersonYnD {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioPersonYnD: Ids_ioPersonYnD[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '선택                               ' },
    { CD: '2', DATA: '다중선택' },
];

export interface Ids_oPersonGubun {
    CD?: string;
    DATA?: string;
    PCD?: string;
}

export const ds_ds_oPersonGubun: Ids_oPersonGubun[] = [
    { CD: '', DATA: '선택', PCD: '' },
    { CD: '0', DATA: '기관장', PCD: '10' },
    { CD: '1', DATA: '감독적직위', PCD: '10' },
    { CD: '2', DATA: '기타', PCD: '10' },
    { CD: '0', DATA: '선임자', PCD: '30' },
    { CD: '1', DATA: '보조자', PCD: '30' },
    { CD: '0', DATA: '주인력(기계·전기)', PCD: '50' },
    { CD: '4', DATA: '주인력(기계)', PCD: '50' },
    { CD: '5', DATA: '주인력(전기)', PCD: '50' },
    { CD: '1', DATA: '소방기술사', PCD: '50' },
    { CD: '2', DATA: '소방시설관리사', PCD: '50' },
    { CD: '3', DATA: '보조인력', PCD: '50' },
    { CD: '0', DATA: '소방관련 석·박사', PCD: '60' },
    { CD: '1', DATA: '소방관련학과 졸업자', PCD: '60' },
    { CD: '2', DATA: '소방공무원(5년이상)', PCD: '60' },
    { CD: '3', DATA: '소방관련 국가기술자격자', PCD: '60' },
    { CD: '4', DATA: '소방시설관리사', PCD: '60' },
];
