// @ts-nocheck
export const Frmcust1170MSmsSendData = {};

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '선택' },
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

export interface Ids_ioCourseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYn: Ids_ioCourseYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택 ' },
    { CD: '1', DATA: '다중선택' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: 'T', DATA: '기관장' },
    { CD: 'E', DATA: '감독적직위' },
    { CD: '', DATA: '기타' },
];

export interface Ids_ioBusinessType {
}

export interface Ids_ioSmsExam {
}

export interface Ids_oIssueGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oIssueGubun: Ids_oIssueGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '이수자' },
    { CD: 'N', DATA: '미이수자' },
];

export interface Ids_ioEduDataHistoryResearchEduSms {
}

export interface Ids_oEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduGubun: Ids_oEduGubun[] = [
    { CD: '0', DATA: '평일 주간' },
    { CD: '1', DATA: '평일 야간' },
    { CD: '2', DATA: '휴일 주간' },
    { CD: '3', DATA: '휴일 야간' },
];

export interface Ids_oEduStudent {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduStudent: Ids_oEduStudent[] = [
    { CD: '0', DATA: '실무교육' },
    { CD: '1', DATA: '제연설비교육' },
];

export interface Ids_oStatus1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oStatus1: Ids_oStatus1[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '완납' },
    { CD: '2', DATA: '미납' },
    { CD: '3', DATA: '환불' },
];

export interface Ids_ioPracticeEduJubsu {
}

export interface Ids_ioSerchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioSerchGubun: Ids_ioSerchGubun[] = [
    { CD: '0', DATA: '회차' },
    { CD: '1', DATA: '교육일자' },
];

export interface Ids_oSMSMMS {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSMSMMS: Ids_oSMSMMS[] = [
    { CD: '0', DATA: '단문' },
    { CD: '1', DATA: '장문(MMS)' },
];

export interface Ids_oEduSubject {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduSubject: Ids_oEduSubject[] = [
    { CD: '0', DATA: '정규교육' },
    { CD: '1', DATA: '미필자교육' },
];

export interface Ids_ioEduIssue {
}

export interface Ids_iSms {
    MPK1?: string;
    MPK2?: string;
    MPK3?: string;
    MRECVTEL?: string;
    MRECVNM?: string;
}

export interface Ids_iSmsEduData {
    EMGNO?: string;
    ECUSTBARCODE?: string;
    EFMHHPTEL?: string;
    ECUSTFMNM?: string;
}

export interface Ids_iSmsEduIssue {
    EPMGNO?: string;
    CMGNO?: string;
    HPTEL?: string;
    EPPERSONNM?: string;
}

export interface Ids_oBatchSendSeq {
}
