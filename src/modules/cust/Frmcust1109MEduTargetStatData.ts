// @ts-nocheck
export const Frmcust1109MEduTargetStatData = {};

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_SearchJogeon {
    JIBU?: string;
    REGION_GUBUN?: string;
    REGION1?: string;
    REGION2?: string;
    PRINT_GUBUN?: string;
}

export interface Ids_oPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPrintGubun: Ids_oPrintGubun[] = [
    { CD: '0', DATA: '표기' },
    { CD: '1', DATA: '미표기' },
];

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_SendReport {
    BNM?: string;
    ZIPCD?: string;
    ADDR1?: string;
    ADDR2?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCourse: Ids_oCourse[] = [
    { CD: '10', DATA: '소방안전관리자' },
    { CD: '20', DATA: '소방안전관리보조자' },
    { CD: '30', DATA: '위험물안전관리자' },
    { CD: '80', DATA: '위험물운송자' },
    { CD: '40', DATA: '위험물운반자' },
    { CD: '50', DATA: '소방기술자' },
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

export interface Ids_ioCourseYn_0 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYn_0: Ids_ioCourseYn_0[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택                               ' },
    { CD: '1', DATA: '다중선택' },
];

export interface Ids_ioCourseYn_1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYn_1: Ids_ioCourseYn_1[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택                               ' },
    { CD: '1', DATA: '다중선택' },
];

export interface Ids_ioChoiceYn_0 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn_0: Ids_ioChoiceYn_0[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_ioCourseYn_2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYn_2: Ids_ioCourseYn_2[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택' },
    { CD: '1', DATA: '다중선택' },
];

export interface Ids_oBizCd {
    CD?: string;
    DATA?: string;
}

export interface Ids_oDetailCourse {
    CD?: string;
    DATA?: string;
    GCD?: string;
}

export interface Ids_ioChoiceYn_1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn_1: Ids_ioChoiceYn_1[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택' },
    { CD: '1', DATA: '다중선택' },
];

export interface Ids_ioMemberGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMemberGubun: Ids_ioMemberGubun[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '회원' },
    { CD: '2', DATA: '비회원' },
];

export interface Ids_ioChoiceYnReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYnReport: Ids_ioChoiceYnReport[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_ioMEduData {
    fkeyA?: string;
}

export interface Ids_oMinap {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oMinap: Ids_oMinap[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '납부자' },
    { CD: '1', DATA: '미납자' },
];

export interface Ids_oAgency {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAgency: Ids_oAgency[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '업무대행만' },
    { CD: '2', DATA: '업무대행제외' },
];

export interface Ids_ioMEduDataDetail {
    fkeyA?: string;
}

export interface Ids_ioMEduExcel {
}

export interface Ids_oEduJubsu {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduJubsu: Ids_oEduJubsu[] = [
    { CD: '0', DATA: '포함' },
    { CD: '1', DATA: '미포함' },
];

export interface Ids_ioOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioOrder: Ids_ioOrder[] = [
    { CD: '0', DATA: '우편번호, 주소, 대상물순' },
    { CD: '1', DATA: '지역, 관리번호순' },
    { CD: '2', DATA: '주민번호순(소방기술자)' },
];

export interface Ids_ioYearHalf {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYearHalf: Ids_ioYearHalf[] = [
    { CD: '1', DATA: '상반기' },
    { CD: '2', DATA: '하반기' },
];
