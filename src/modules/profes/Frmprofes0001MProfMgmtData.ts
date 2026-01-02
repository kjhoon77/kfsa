// @ts-nocheck
export const Frmprofes0001MProfMgmtData = {};

export interface Ids_ioProfUser {
    SEL?: string;
    GTPRTSEQ?: string;
    PFGUBUN?: string;
    PFNM?: string;
    PFREMARK?: string;
    INSACODE?: string;
    JIKRYUL?: string;
    PFTEAM?: string;
    REGINO?: string;
    PFEDATE?: string;
}

export interface Ids_oJibuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJibuGubun: Ids_oJibuGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '본부' },
    { CD: '1', DATA: '지부' },
];

export interface Ids_oProfGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oProfGubun: Ids_oProfGubun[] = [
    { CD: '1', DATA: '전임' },
    { CD: '2', DATA: '겸임' },
];

export interface Ids_iProfUserCnt {
    CNT?: number;
    GUBUN?: string;
}

export interface Ids_oProfGubunAll {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oProfGubunAll: Ids_oProfGubunAll[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '전임' },
    { CD: '2', DATA: '겸임' },
];

export interface Ids_iOnlyKey {
    ONLYKEY?: string;
    ACTION?: string;
    TABINDEX?: string;
}

export const ds_ds_iOnlyKey: Ids_iOnlyKey[] = [
    { ACTION: 'X', ONLYKEY: '00000000', TABINDEX: '0' },
];

export interface Ids_oProfUserReport {
    SEL?: string;
    GTPRTSEQ?: string;
    PFGUBUN?: string;
    PFNM?: string;
    PFREMARK?: string;
    INSACODE?: string;
    JIKRYUL?: string;
    PFTEAM?: string;
    REGINO?: string;
}

export interface Ids_oProfTeachingPlanReport {
    CNT?: number;
    TPYEAR?: string;
}

export interface Ids_oProfPersonSchoolReport {
    HCNM?: string;
    PSNAME?: string;
    PSSABUN?: string;
    PSSUBJECT?: string;
}

export interface Ids_oProfPersonLisenceReport {
    PLDATE?: string;
    PLNAME?: string;
    PLOFFICE?: string;
    INSACODE?: string;
    PLSEQ?: number;
    PLUSEPROFESSOR?: string;
}

export interface Ids_oProfSeminarReport {
    INSACODE?: string;
    PSCONTENT?: string;
    PSINDATE?: string;
    PSOFFICE?: string;
    PSSEQ?: number;
}

export interface Ids_oProfPaperReport {
    INSACODE?: string;
    PPAUTHOR?: string;
    PPFIELD?: string;
    PPOFFICE?: string;
    PPPAGE?: number;
    PPPROFESSOR?: string;
    PPPUBDATE?: string;
    PPSEQ?: number;
    PPTITLE?: string;
    PPVOLUME?: number;
}

export interface Ids_oProfPersonEduReport {
    INSACODE?: string;
    PECONTENT?: string;
    PEENDDATE?: string;
    PEOFFICE?: string;
    PESEQ?: number;
    PESTARTDATE?: string;
    PEUSEPROFESSOR?: string;
}

export interface Ids_oProfLectureReport {
    LYEAR?: string;
    TIME1?: number;
    TIME2?: number;
    TIME3?: number;
    TOT_TIME?: number;
}

export interface Ids_oProfExpertReport {
    INSACODE?: string;
    PECONTENT?: string;
    PEEDATE?: string;
    PESDATE?: string;
    PESEQ?: number;
}

export interface Ids_oProfPrizeReport {
    INSACODE?: string;
    PPCONTENT?: string;
    PPSEQ?: number;
    PPTITLE?: string;
    PPYEAR?: string;
}
