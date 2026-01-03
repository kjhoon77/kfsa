// @ts-nocheck
export const Frmcust1026MEduJubsuListData = {};

export interface Ids_oPassYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPassYn: Ids_oPassYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '이수' },
    { CD: 'N', DATA: '미이수' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oEduJubsu {
    BIRTHDAY?: string;
    GTDEPTNM?: string;
    GTTEAMNM?: string;
    TCCOURSENM?: string;
    TJADDR?: string;
    TJADDR1?: string;
    TJADDR2?: string;
    TJAMOUNTGUBUN?: string;
    TJBARCODE?: string;
    TJIIIMGSEQ?: number;
    TJJUBSUYN?: string;
    TJLASTSUNAPGUBUN?: string;
    TJLASTTJHSEQ?: number;
    TJLASTTOHSEQ?: number;
    TJLASTTSSEQ?: number;
    TJMGNO?: number;
    TJPASSYN?: string;
    TJPERSONNM?: string;
    TJREFUNDYN?: string;
    TJREMARK?: string;
    TJREMARKCD?: string;
    TJTPMGNO?: number;
    TJZIPCD?: string;
    TOBOSUGUBUN?: string;
    TOCOURSEGUBUN?: string;
    TOEDUCONTENTS?: string;
    TOEDUREMARK?: string;
    TOENDDATE?: string;
    TOENDTIME?: string;
    TOEPMGNO?: number;
    TOHAFTERJUBSUNO?: string;
    TOHAFTERTOMGNO?: number;
    TOHBOOKINGSEATNO?: number;
    TOHDECISIONSEATNO?: number;
    TOHJUBSUGUBUN?: string;
    TOHJUBSUNO?: string;
    TOHLASTGUBUN?: string;
    TOHPROCDATE?: string;
    TOHPSABUN?: string;
    TOHSEATCHANGEYN?: string;
    TOHSEQ?: number;
    TOJUBSUSTATUS?: string;
    TOMAILNOTICE?: string;
    TOMGGTMGNO?: string;
    TOMGNO?: number;
    TOMUNJEGUBUN?: string;
    TOREMARK?: string;
    TOSTARTDATE?: string;
    TOSTARTTIME?: string;
    TOTCCOURSECD?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    TPEMAIL?: string;
    TPEMAILDOMAIN?: string;
    TPEMAILID?: string;
    TPHPTEL?: string;
    TPTEL?: string;
    EPNM?: string;
    EPEDUPLACEINFO?: string;
    EPPARKINGINFO?: string;
    TJCOMPNM?: string;
    SEL?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oMunjeGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourseMunje {
    CD?: string;
    DATA?: string;
}

export interface Ids_oSunapYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunapYn: Ids_oSunapYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '접수완료' },
    { CD: 'N', DATA: '신청' },
    { CD: 'YN', DATA: '신청+접수완료' },
    { CD: 'R', DATA: '환불' },
];

export interface Ids_oLastGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oLastGubun: Ids_oLastGubun[] = [
    { CD: '', DATA: '회차변경자(入) 포함' },
    { CD: '0', DATA: '회차변경자(入) 미포함' },
];

export interface Ids_ioReport {
}

export interface Ids_ioReportFilter {
}

export interface Ids_ioBook {
}

export interface Ids_ioBookFilter {
}

export interface Ids_oSearchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSearchGubun: Ids_oSearchGubun[] = [
    { CD: '0', DATA: '회차' },
    { CD: '1', DATA: '이수일자' },
];

export interface Ids_oDetailCourse {
    CD?: string;
    DATA?: string;
    GCD?: string;
}

export interface Ids_ioEmail {
}

export interface Ids_ioEmailFilter {
}
