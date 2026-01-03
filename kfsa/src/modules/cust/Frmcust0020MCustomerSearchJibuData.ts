// @ts-nocheck
export const Frmcust0020MCustomerSearchJibuData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '선택' },
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

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_SearchJogeon {
    JIBU?: string;
    CUST_NM?: string;
    PERSON_NM?: string;
    PERSONKEY?: string;
    COURSE_GUBUN?: string;
    CUST_GUBUN?: string;
    PERSON_GUBUN?: string;
    BIRTHDAY?: string;
}

export interface Ids_CustomerList {
    GTDEPTNM?: string;
    CNO?: string;
    BNM?: string;
    FMNM?: string;
    BIRTHDAY?: string;
    MADDR?: string;
    CGROUPNM?: string;
    TEL?: string;
    CREGISTERYY?: string;
    CFEEYY?: string;
    COVERYN?: string;
    COVERCNO?: string;
    CMGNO?: string;
    CMINAP?: string;
    CGTMGNO?: string;
    SCNO?: string;
    FMPERSONKEY?: string;
    FMBIRTHDAY?: string;
}

export interface Ids_oEduStudentGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduStudentGubun: Ids_oEduStudentGubun[] = [
    { CD: '0', DATA: '실무' },
    { CD: '1', DATA: '제연설비등' },
];

export interface Ids_oEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduGubun: Ids_oEduGubun[] = [
    { CD: '0', DATA: '평일' },
    { CD: '1', DATA: '휴일' },
    { CD: '2', DATA: '주간' },
    { CD: '3', DATA: '야간' },
];

export interface Ids_ioCustomerFeeInfo {
}

export interface Ids_oFee {
    CFCCGUBUN?: string;
    CFCCGUBUNCD?: string;
    CFGYEAR?: string;
    MINAPFEE?: string;
    SUNAPFEE?: string;
}

export interface Ids_oAdditionInfo {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioEducationPassInfo {
    BNM?: string;
    CNO?: string;
    EPPASSDATE?: string;
    EPPERSONNM?: string;
    EPPROCGTMGNO?: string;
    EPBIRTHDAY?: string;
    EPSUCCESSIONGUBUN?: string;
    EPYEAR?: string;
    ESGUBUN?: string;
    ESSTUDENT?: string;
    BIRTHDAY?: string;
    EPPERSONKEY?: string;
}

export interface Ids_oEduSuccessGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduSuccessGubun: Ids_oEduSuccessGubun[] = [
    { CD: '0', DATA: '선임자교육' },
    { CD: '1', DATA: '교육승계' },
];
