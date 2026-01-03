// @ts-nocheck
export const Frmmem0020MMemberListReportData = {};

export interface Ids_ioGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGubun: Ids_ioGubun[] = [
    { CD: '', DATA: '전체회원' },
    { CD: '0', DATA: '주민번호 정상' },
    { CD: '1', DATA: '주민번호 오류' },
];

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_ioOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioOrder: Ids_ioOrder[] = [
    { CD: '1', DATA: '관리번호' },
    { CD: '2', DATA: '직능별, 지역별, 대상물(업체)별' },
    { CD: '3', DATA: '우편번호별, 대상물(업체)별' },
    { CD: '4', DATA: '지역별, 우편번호별, 대상물(업체)별' },
    { CD: '5', DATA: '겸직자' },
    { CD: '6', DATA: '선임일자별' },
    { CD: '7', DATA: '대상물(업체)별' },
];

export interface Ids_ioCourseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYn: Ids_ioCourseYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택                               ' },
    { CD: '1', DATA: '다중선택' },
];

export interface Ids_ioDataGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioDataGubun: Ids_ioDataGubun[] = [
    { CD: '', DATA: '전체회원' },
    { CD: '1', DATA: '정상자료' },
    { CD: '2', DATA: '삭제자료' },
];

export interface Ids_ioReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioReport: Ids_ioReport[] = [
    { CD: '1', DATA: '회원 대장' },
    { CD: '0', DATA: '겸직자 대장' },
];

export interface Ids_ioCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oAdditionInfo {
    CD?: string;
    DATA?: string;
}

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oCustomerList {
    CNO_BUNHO?: string;
    GTTEAMNM?: string;
    GTMGNO?: string;
    GTPRTSEQ?: string;
    CCOURSECD?: string;
    CREGCD?: string;
    RCNM?: string;
    CNO?: string;
    FMBUILDINGNM?: string;
    FMNM?: string;
    FMBIRTHDAY?: string;
    FMRESIDENTERR?: string;
    FMHADDR?: string;
    FMHSTARTDATE?: string;
    FMHTEL?: string;
    CSTUSGUBUN?: string;
    BIRTHDAY?: string;
    POCOUNT?: string;
    FMHHPTEL?: string;
    FMHMAIL?: string;
    EPPASSDATE?: string;
    ADCONTENT?: string;
    ADREGDATE?: string;
    MINAPFEE?: string;
    BZIPCD?: string;
    FSTNSMALL_NM?: string;
    FMPERSONKEY?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
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

export interface Ids_ioExceptGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioExceptGubun: Ids_ioExceptGubun[] = [
    { CD: '', DATA: '전체(관리제외대상 포함)' },
    { CD: '0', DATA: '정상(관리제외대상 제외)' },
    { CD: '1', DATA: '관리제외대상만' },
];

export interface Ids_ioMinapfee {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMinapfee: Ids_ioMinapfee[] = [
    { CD: '0', DATA: '미출력' },
    { CD: '1', DATA: '출력' },
];

export interface Ids_ioAgencyGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioAgencyGubun: Ids_ioAgencyGubun[] = [
    { CD: '', DATA: '전체회원' },
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
