// @ts-nocheck
export const Frmcust1130MEduListReportData = {};

export interface Ids_ioReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioReport: Ids_ioReport[] = [
    { CD: '1N', DATA: '교육 미이수자 명단(1회)' },
    { CD: '1Y', DATA: '교육 이수자 명단(1회)' },
    { CD: '2N', DATA: '교육 미이수자 명단(2회)' },
    { CD: '2Y', DATA: '교육 이수자 명단(2회)' },
    { CD: '3N', DATA: '교육 미이수자 명단(3회)' },
    { CD: '3Y', DATA: '교육 이수자 명단(3회)' },
    { CD: '4N', DATA: ' ' },
    { CD: '4Y', DATA: '교육자 명단(3회 이력)' },
];

export interface Ids_ioYear {
    YEAR?: string;
}

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

export interface Ids_ioOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioOrder: Ids_ioOrder[] = [
    { CD: '1', DATA: '지역' },
    { CD: '2', DATA: '지역, 직능(CODE순서)' },
    { CD: '3', DATA: '직능, 지역, 업종' },
    { CD: '4', DATA: '지역, 우편번호, 상호' },
];

export interface Ids_ioJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioEduGubun: Ids_ioEduGubun[] = [
    { CD: '0', DATA: '실무교육 대상' },
    { CD: '1', DATA: '제연설비 설치대상' },
];

export interface Ids_ioOrder_0 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioOrder_0: Ids_ioOrder_0[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '겸직자' },
    { CD: '2', DATA: '겸직자 제외' },
];

export interface Ids_ioChoiceYn_0 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn_0: Ids_ioChoiceYn_0[] = [
    { CD: '', DATA: '생성함' },
    { CD: '1', DATA: '생성안함' },
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

export interface Ids_ioEduYear {
    EDUYEAR?: string;
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

export interface Ids_ioOrder3 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioOrder3: Ids_ioOrder3[] = [
    { CD: '1', DATA: '1회' },
    { CD: '2', DATA: '2회' },
    { CD: '3', DATA: '3회' },
];

export interface Ids_SearchJogeon {
    REPORT?: string;
    YEAR?: string;
    JIBU?: string;
    REGION_GUBUN?: string;
    REGION1?: string;
    REGION2?: string;
    MEMBER_GUBUN?: string;
    COURSECD?: string;
    BIZ_GUBUN?: string;
    BIZ1?: string;
    BIZ2?: string;
    MGNO_GUBUN?: string;
    MGNO1?: string;
    MGNO2?: string;
    DATE_GUBUN?: string;
    YMD_FR?: string;
    YMD_TO?: string;
    YEARMONTH?: string;
    SORT_GUBUN?: string;
    PRINT_GUBUN?: string;
    NOTPASSCNT?: string;
    EDU_GUBUN?: string;
    EXCEPT_GUBUN?: string;
    BF_YEAR?: string;
    BF_YMD_FR?: string;
    BF_YMD_TO?: string;
    PERSON_GUBUN_IN?: string;
    EDU_YMD_FR?: string;
    EDU_YMD_TO?: string;
    DEL_GUBUN?: string;
    CNO_GUBUN?: string;
    ISSUE?: string;
    SUCCESSIONGUBUN?: string;
    AGENCY_GUBUN?: string;
    JIBUGIJUN?: string;
    BONBU?: string;
    REGION?: string;
    CENTER_GUBUN?: string;
    CENTER?: string;
    CENTER1?: string;
    CENTER2?: string;
    TRAININGEXCEPT?: string;
    TRAININGSTART?: string;
    TRAININGEND?: string;
    TRAININGCOURSECD?: string;
}

export interface Ids_EduList1 {
    GTTEAMNM?: string;
    CNM?: string;
    RCNM?: string;
    CNO?: string;
    BNM?: string;
    EPPERSONNM?: string;
    ADDR?: string;
    EPYEARNM?: string;
    EPYEAR?: string;
    BTEL?: string;
    CCCDNM?: string;
    FMHSTARTDATE?: string;
    BIRTHDAY?: string;
    FMHHPTEL?: string;
    FMHMAIL?: string;
    FSTNSMALL_NM?: string;
    SUCCESSIONGUBUN?: string;
}

export interface Ids_EduList3 {
    GTTEAMNM?: string;
    GTPRTSEQ?: string;
    CCOURSECD?: string;
    CNM?: string;
    CREGCD?: string;
    RCNM?: string;
    CMGNO?: string;
    CNO?: string;
    BNM?: string;
    EPPERSONNM?: string;
    ADDR?: string;
    YEARNM1?: string;
    YEARNM2?: string;
    YEARNM3?: string;
    YEAR1?: string;
    YEAR2?: string;
    YEAR3?: string;
    BTEL?: string;
    CCCDNM?: string;
    FMHSTARTDATE?: string;
    FMHENDDATE?: string;
    CREGISTERYYMM?: string;
    BIRTHDAY?: string;
    FMHHPTEL?: string;
    FMHMAIL?: string;
    FSTNSMALL_NM?: string;
}

export interface Ids_EduList2 {
    GTTEAMNM?: string;
    GTPRTSEQ?: string;
    CCOURSECD?: string;
    CNM?: string;
    CREGCD?: string;
    RCNM?: string;
    CMGNO?: string;
    CNO?: string;
    BNM?: string;
    EPPERSONNM?: string;
    ADDR?: string;
    YEARNM1?: string;
    YEARNM2?: string;
    YEARNM3?: string;
    YEAR1?: string;
    YEAR2?: string;
    YEAR3?: string;
    BTEL?: string;
    CCCDNM?: string;
    FMHSTARTDATE?: string;
    FMHENDDATE?: string;
    CREGISTERYYMM?: string;
    BIRTHDAY?: string;
    FMHHPTEL?: string;
    FMHMAIL?: string;
    FSTNSMALL_NM?: string;
}

export interface Ids_ioPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioPrintGubun: Ids_ioPrintGubun[] = [
    { CD: '1', DATA: '포함' },
    { CD: '2', DATA: '미포함' },
];

export interface Ids_ioIssue {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioIssue: Ids_ioIssue[] = [
    { CD: '1', DATA: '고객번호' },
    { CD: '2', DATA: '교육이수자' },
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

export interface Ids_ioAgencyGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioAgencyGubun: Ids_ioAgencyGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '업무대행자료만' },
    { CD: '1', DATA: '업무대행 제외' },
];

export interface Ids_ioGijun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGijun: Ids_ioGijun[] = [
    { CD: '1', DATA: '지부' },
    { CD: '2', DATA: '소방본부' },
];

export interface Ids_ioChoice {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoice: Ids_ioChoice[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '선택' },
    { CD: '2', DATA: '범위선택' },
];

export interface Ids_oBonbu {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
    CTCD?: string;
}

export interface Ids_oFireCd {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
    CTCD?: string;
}

export interface Ids_oFireCenterCd {
    CD?: string;
    DATA?: string;
    UPCD?: string;
}

export interface Ids_oFireCenterCd2 {
    CD?: string;
    DATA?: string;
    UPCD?: string;
}
