// @ts-nocheck
export const Frmspcledu0620MExamFailPassDiplomaPrintData = {};

export interface Ids_ioExamList {
}

export interface Ids_oRepeatNo {
    SSHEOMGNO?: string;
    SSHREPEATNO?: string;
    SSHSENDYN?: string;
    DATA?: string;
}

export interface Ids_iPassGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_iPassGubun: Ids_iPassGubun[] = [
    { CD: 'N', DATA: '불합격' },
    { CD: 'X', DATA: '미응시' },
];

export interface Ids_ioReport {
}

export interface Ids_ioExamFailList {
    SEL?: string;
    EJMGNO?: string;
    EJTPMGNO?: string;
    EJPERSONNM?: string;
    BIRTHDAY?: string;
    EJLASTSUNAPGUBUN?: string;
    EJZZIPCD?: string;
    EJADDR1?: string;
    EJADDR2?: string;
    EJBULDNM?: string;
    EJBULDADDR?: string;
    EJEXPYN?: string;
    EJPASSYN?: string;
    EJCANCELREASON?: string;
    EJCANCELPSABUN?: string;
    EJIIIMGSEQ?: string;
    ERAPLEXAMNO?: string;
    EOTCCOURSECD?: string;
    TPPASSNO?: string;
    TPSTARTDATE?: string;
    TPENDDATE?: string;
    TCTERMTIME?: string;
}

export interface Ids_ioReportFilter {
}
