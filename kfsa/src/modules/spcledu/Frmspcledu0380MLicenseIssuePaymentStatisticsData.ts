// @ts-nocheck
export const Frmspcledu0380MLicenseIssuePaymentStatisticsData = {};

export interface Ids_oTrainingJubsu {
    TPMGNO?: number;
    TPEMAIL?: string;
    TPHPTEL?: string;
    IIIMGSEQ?: number;
    TCCOURSECD?: string;
    THLASTORDERSEQ?: number;
    TJADDR1?: string;
    TJADDR2?: string;
    TJAMOUNTGUBUN?: string;
    TJBULDADDR?: string;
    TJBULDNM?: string;
    TJBUNJI?: string;
    TJCOMPNM?: string;
    TJDONG?: string;
    TJFIREMANYN?: string;
    TJKU?: string;
    TJLASTHISTORYSEQ?: number;
    TJLASTREPAYYN?: string;
    TJLASTSETLMTSEQ?: number;
    TJMGNO?: number;
    TJPASSYN?: string;
    TJPERSONNM?: string;
    TJREFUNDYN?: string;
    TJREMARK?: string;
    TJREMARKCD?: string;
    TJRESIDENTNO?: string;
    TJROADNM?: string;
    TJSIDO?: string;
    TJZIPCD?: string;
    TOENDDATE?: string;
    TOJUBSUNO?: number;
    TOMGNO?: number;
    TOSTARTDATE?: string;
    TOYEAR?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '수첩발급수수료' },
    { CD: '2', DATA: '수첩재발급수수료' },
];

export interface Ids_oPassGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioLicenseSusuList {
    TCCOURSENM?: string;
    LLCSNO?: string;
    LHPERSONNM?: string;
    LHPRTDATE1?: string;
    LHPRTDATE2?: string;
    LHPROCGTMGNO1?: string;
    BIRTHDAY?: string;
    PROCDATE?: string;
    PAYAMT?: string;
    REPAYAMT?: string;
    NAPBUGUBUN?: string;
    LHISSUEREASON?: string;
    LHISSUEGUBUN?: string;
    PNM?: string;
    LHPROCGTMGNO?: string;
}

export interface Ids_ioLicenseSusuStatistics {
    PROCDATE?: string;
    LHISSUEGUBUN?: string;
    TCCOURSENM?: string;
    LHPRTDATE1?: string;
    LHPRTDATE2?: string;
    LHPROCGTMGNO1?: string;
    TOTCNT?: string;
    TOTSUM?: string;
    PAYCNT?: string;
    PAYSUM?: string;
    REPAYCNT?: string;
    REPAYSUM?: string;
    LHPROCGTMGNO?: string;
}

export interface Ids_ioLicenseSusuDecision {
    PROCDATE?: string;
    LHISSUEGUBUN?: string;
    LHPRTDATE1?: string;
    LHPRTDATE2?: string;
    LHPROCGTMGNO1?: string;
    TCCOURSENM?: string;
    TOTMNY?: string;
    NO11?: string;
    NO12?: string;
    NO13?: string;
    NO21?: string;
    NO22?: string;
    NO23?: string;
}

export interface Ids_oPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPrintGubun: Ids_oPrintGubun[] = [
    { CD: '1', DATA: '일자별리스트' },
    { CD: '2', DATA: '일별집계현황' },
    { CD: '3', DATA: '일별집계현황(결재구분)' },
];

export interface Ids_oSerchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSerchGubun: Ids_oSerchGubun[] = [
    { CD: '1', DATA: '전체' },
    { CD: '2', DATA: '지정' },
    { CD: '', DATA: '' },
];

export interface Ids_LicenseGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_LicenseGubun: Ids_LicenseGubun[] = [
    { CD: '1', DATA: '교부' },
    { CD: '2', DATA: '재교부' },
];
