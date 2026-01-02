// @ts-nocheck
export const Frmcust1100MEduNoticeData = {};

export interface Ids_ioMemberGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMemberGubun: Ids_ioMemberGubun[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '회원' },
    { CD: '2', DATA: '비회원' },
];

export interface Ids_ioTarget {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioTarget: Ids_ioTarget[] = [
    { CD: '0', DATA: '소방안전관리자' },
    { CD: '1', DATA: '위험물안전관리자' },
    { CD: '2', DATA: '소방기술자' },
    { CD: '3', DATA: '위험물운송자' },
    { CD: '4', DATA: '교육희망자(위험물)' },
];

export interface Ids_ioTemp {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioTemp: Ids_ioTemp[] = [
    { CD: '1', DATA: '2005년 신규양식' },
    { CD: '2', DATA: '대구경북 양식' },
    { CD: '3', DATA: '2004년 이전양식' },
];

export interface Ids_ioFeeGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioFeeGubun: Ids_ioFeeGubun[] = [
    { CD: '1', DATA: '회비에 상관없음' },
    { CD: '2', DATA: '당해년도 완납자' },
];

export interface Ids_ioYear {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYear: Ids_ioYear[] = [
    { CD: '', DATA: '전체' },
    { CD: '2009', DATA: '2009' },
    { CD: '2008', DATA: '2008' },
    { CD: '2007', DATA: '2007' },
    { CD: '2006', DATA: '2006' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioYearHalf {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYearHalf: Ids_ioYearHalf[] = [
    { CD: '1', DATA: '상반기' },
    { CD: '2', DATA: '하반기' },
];

export interface Ids_ioPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioPrintGubun: Ids_ioPrintGubun[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '개인' },
    { CD: '2', DATA: '추가교육' },
    { CD: '3', DATA: '재추가교육' },
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

export interface Ids_a {
    CD?: string;
}

export const ds_ds_a: Ids_a[] = [
    { CD: '' },
];

export interface Ids_ioBusinessType {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioBusinessType: Ids_ioBusinessType[] = [
    { CD: '01', DATA: '공공시설' },
    { CD: '02', DATA: '공장' },
    { CD: '03', DATA: '창고시설' },
    { CD: '04', DATA: '기타' },
];

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

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
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

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_ioCourseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYn: Ids_ioCourseYn[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_oBizCd {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioChoiceYnReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYnReport: Ids_ioChoiceYnReport[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_ioZipNum {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioZipNum: Ids_ioZipNum[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_ioMEduNotice {
    fkeyA?: string;
}

export interface Ids_ioApply {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioApply: Ids_ioApply[] = [
    { CD: '0', DATA: '미적용' },
    { CD: '1', DATA: '적용' },
];

export interface Ids_oDetailCourse {
    CD?: string;
    DATA?: string;
    GCD?: string;
}

export interface Ids_ioMEduNoticeDetail {
}

export interface Ids_oPersonGubun {
    CD?: string;
    DATA?: string;
    PCD?: string;
}

export const ds_ds_oPersonGubun: Ids_oPersonGubun[] = [
    { CD: '0', DATA: '기관장', PCD: '10' },
    { CD: '1', DATA: '감독적직위', PCD: '10' },
    { CD: '2', DATA: '기타', PCD: '10' },
    { CD: '0', DATA: '선임자', PCD: '30' },
    { CD: '1', DATA: '보조자', PCD: '30' },
    { CD: '0', DATA: '주인력', PCD: '50' },
    { CD: '1', DATA: '소방기술사', PCD: '50' },
    { CD: '2', DATA: '소방시설관리사', PCD: '50' },
    { CD: '3', DATA: '보조인력', PCD: '50' },
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

export interface Ids_oMinap {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oMinap: Ids_oMinap[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '납부자' },
    { CD: '1', DATA: '미납자' },
];

export interface Ids_ioYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYN: Ids_ioYN[] = [
    { CD: '0', DATA: '예' },
    { CD: '1', DATA: '아니오' },
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

export interface Ids_ioChoiceYn_1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn_1: Ids_ioChoiceYn_1[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택' },
    { CD: '1', DATA: '다중선택' },
];
