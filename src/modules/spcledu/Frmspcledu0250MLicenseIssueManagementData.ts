// @ts-nocheck
export const Frmspcledu0250MLicenseIssueManagementData = {};

export interface Ids_iLicense {
    IIDIRPATH?: string;
    IIREALNM?: string;
    IISAVENM?: string;
    LADDR1?: string;
    LADDR2?: string;
    LBARCODE?: string;
    LCANCELDATE?: string;
    LCANCELPSABUN?: string;
    LCANCELREASON?: string;
    LCOMPNM?: string;
    LDATAAPPROVAL?: string;
    LHIIIMGSEQ?: string;
    LHISSUEREASON?: string;
    LHPROCGTMGNO?: string;
    LHPRTDATE?: string;
    LHPTEL?: string;
    LISSUEDATE?: string;
    LISSUEGUBUN?: string;
    LISSUEGUBUNNM?: string;
    LLASTHISTORYSEQ?: number;
    LHLLCSNO?: string;
    LLCSNO?: string;
    LPERSONNM?: string;
    LRESIDENTNO?: string;
    LSTATUSGUBUN?: string;
    LTCCOURSECD?: string;
    LTEL?: string;
    LTPMGNO?: number;
    LTRAININGENDDATE?: string;
    LTRAININGSTARTDATE?: string;
    LZIPCD?: string;
    TCCOURSENM?: string;
    TPAUTHYN?: string;
    TPCHECK?: string;
}

export interface Ids_oPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPrintGubun: Ids_oPrintGubun[] = [
    { CD: '01', DATA: '신규발급' },
    { CD: '02', DATA: '재발급(조회/수정/환불)' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oIssueGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oLicenseReport {
    BIRTHDAY?: string;
    IIFILENM?: string;
    LADDR1?: string;
    LADDR2?: string;
    LBARCODE?: string;
    LHPRTDATE?: string;
    LISSUEDATE?: string;
    LISSUEGUBUNNM?: string;
    LLCSNO?: string;
    LPERSONNM?: string;
    LTCCOURSENM?: string;
    LLASTHISTORYSEQ?: number;
}

export interface Ids_ioImageInfo {
    BIRTHDAY?: string;
    IIAPPROVAL?: string;
    IIDIRPATH?: string;
    IIIMGBINARY?: string;
    IIIMGSEQ?: string;
    IIREALNM?: string;
    IIREGDATE?: string;
    IIREGGUBUN?: string;
    IIREGGUBUNNM?: string;
    IIREGSABUN?: string;
    IISAVENM?: string;
    TPLASTIMGSEQ?: number;
    TPMGNO?: number;
    TPNM?: string;
    TPRESIDENTNO?: string;
    TPAUTHYN?: string;
    TPZIPCD?: string;
    TPADDR1?: string;
    TPADDR2?: string;
    TPBULDNM?: string;
    TPTEL?: string;
    TPHPTEL?: string;
}

export interface Ids_oSetlmentHist {
    LSACTIVEYN?: string;
    LSGUBUN?: string;
    LSGUBUNCD?: string;
    LSGUBUNCDNM?: string;
    LSGUBUNNM?: string;
    LSLHSEQ?: number;
    LSLLCSNO?: string;
    LSPMMGNO?: number;
    LSPMYEAR?: string;
    LSPONYDATE?: string;
    LSPONYGUBUN?: string;
    LSPROCAMOUNT?: number;
    LSPROCDATE?: string;
    LSPROCGTMGNO?: string;
    LSREGSABUN?: string;
    LSREGSABUNNM?: string;
    LSREPAYREF?: number;
    LSSEQ?: number;
    LSSETLMTYN?: string;
    PMPAYMENTFLAG?: string;
    TSJUMUNNO?: string;
    LSSUNAPGUBUN?: string;
}

export interface Ids_oLicense {
    IIDIRPATH?: string;
    IIREALNM?: string;
    IISAVENM?: string;
    LADDR1?: string;
    LADDR2?: string;
    LBARCODE?: string;
    LCANCELDATE?: string;
    LCANCELPSABUN?: string;
    LCANCELREASON?: string;
    LCOMPNM?: string;
    LDATAAPPROVAL?: string;
    LHIIIMGSEQ?: string;
    LHISSUEREASON?: string;
    LHPROCGTMGNO?: string;
    LHPRTDATE?: string;
    LHPTEL?: string;
    LISSUEDATE?: string;
    LISSUEGUBUN?: string;
    LISSUEGUBUNNM?: string;
    LLASTHISTORYSEQ?: number;
    LHLLCSNO?: string;
    LLCSNO?: string;
    LPERSONNM?: string;
    LRESIDENTNO?: string;
    LSTATUSGUBUN?: string;
    LTCCOURSECD?: string;
    LTEL?: string;
    LTPMGNO?: number;
    LTRAININGENDDATE?: string;
    LTRAININGSTARTDATE?: string;
    LZIPCD?: string;
    TCCOURSENM?: string;
    TPAUTHYN?: string;
    TPCHECK?: string;
}

export interface Ids_iTrainingPerson {
    TPAUTHYN?: string;
    TPNM?: string;
    TPRESIDENTNO?: string;
    TPMGNO?: number;
}

export interface Ids_iLicenseImage {
    LILLCSNO?: string;
    LISEQ?: number;
    LIDIRPATH?: string;
    LIREALNM?: string;
}

export interface Ids_ioModifyHistory {
}

export interface Ids_oLicenseReportEdu {
    EDUDATE?: string;
    GTDEPTNM?: string;
    TARGET?: string;
    TCCOURSENM?: string;
}

export interface Ids_oTrainingPerson {
    IIDIRPATH?: string;
    IIREALNM?: string;
    TPAUTHYN?: string;
    TPCUSTGUBUN?: string;
    TPEMAILDOMAIN?: string;
    TPEMAILID?: string;
    TPHPTEL?: string;
    TPLASTIMGSEQ?: number;
    TPMGNO?: number;
    TPNM?: string;
    TPRESIDENTNO?: string;
    TPTEL?: string;
}

export interface Ids_oLicenseH {
    BIRTHDAY?: string;
    LHADDR1?: string;
    LHADDR2?: string;
    LHISSUEREASON?: string;
    LHLLCSNO?: string;
    LHPERSONNM?: string;
    LHPRTDATE?: string;
    LHTEL?: string;
    LIDIRPATH?: string;
    LIREALNM?: string;
    LHSEQ?: number;
    LHTJMGNO?: string;
    LHISSUEMGNO?: number;
}

export interface Ids_oYearbizlink {
}
