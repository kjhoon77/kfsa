// @ts-nocheck
export const Frmcust1210MRegionEduReportData = {};

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
    { CD: '1', DATA: '고객집계현황' },
    { CD: '2', DATA: '교육이수자현황' },
    { CD: '3', DATA: '교육이수 후 삭제현황' },
    { CD: '4', DATA: '교육미이수자현황' },
];

export interface Ids_oEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduGubun: Ids_oEduGubun[] = [
    { CD: '0', DATA: '실무교육' },
    { CD: '1', DATA: '제연설비 설치대상' },
];

export interface Ids_SearchJogeon {
    REPORT_GUBUN?: string;
    YEAR?: string;
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
    MEMBERYMD_GUBUN?: string;
    MEMBER_YMD_FR?: string;
    MEMBER_YMD_TO?: string;
    EDUYMD_GUBUN?: string;
    EDU_YMD_FR?: string;
    EDU_YMD_TO?: string;
    EDU_GUBUN?: string;
    EDU_ORDER?: string;
    EDU_ORDERGUBUN?: string;
}

export interface Ids_EduList {
}

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oAdditionInfo {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioGijun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGijun: Ids_ioGijun[] = [
    { CD: '1', DATA: '지부' },
    { CD: '2', DATA: '소방본부' },
];

export interface Ids_oFireCd {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
    CTCD?: string;
}

export interface Ids_oBonbu {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
    CTCD?: string;
}

export interface Ids_ioExceptGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioExceptGubun: Ids_ioExceptGubun[] = [
    { CD: '0', DATA: '관리제외대상 포함' },
    { CD: '1', DATA: '관리제외대상 제외' },
];

export interface Ids_ioSuccessionGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioSuccessionGubun: Ids_ioSuccessionGubun[] = [
    { CD: 'T1', DATA: '전체(1 + 2 + 3)' },
    { CD: 'T2', DATA: '전체(1 + 2 + 4)' },
    { CD: '0', DATA: '1.선임자교육' },
    { CD: '1', DATA: '2.교육승계' },
    { CD: '3', DATA: '3.퇴직' },
    { CD: '4', DATA: '4.교육이관' },
];
