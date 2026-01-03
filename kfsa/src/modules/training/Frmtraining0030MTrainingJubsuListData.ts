// @ts-nocheck
export const Frmtraining0030MTrainingJubsuListData = {};

export interface Ids_oPassYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPassYn: Ids_oPassYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '수료' },
    { CD: 'N', DATA: '미수료' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oRepayYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRepayYn: Ids_oRepayYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'N', DATA: '수납' },
    { CD: 'M', DATA: '미납' },
    { CD: 'NM', DATA: '수납+미납' },
    { CD: 'Y', DATA: '환불' },
];

export interface Ids_oTrainingJubsu {
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
    PERSONKEY?: string;
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
    TJBOOKPRINTTOMGNO?: string;
    PMITEM1?: string;
    PMITEM2?: string;
    PMITEM3?: string;
    PMITEM4?: string;
    DTLTOTAMT?: string;
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

export interface Ids_oLicenseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oLicenseYn: Ids_oLicenseYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '선수납(강습+수첩)' },
    { CD: 'N', DATA: '일반(강습)' },
];

export interface Ids_oLastGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oLastGubun: Ids_oLastGubun[] = [
    { CD: '0', DATA: '회차변경자(入) 포함' },
    { CD: '1', DATA: '회차변경자(入) 미포함' },
];

export interface Ids_ioReport {
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
    PERSONKEY?: string;
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
    TJBOOKPRINTTOMGNO?: string;
    PMITEM1?: string;
    PMITEM2?: string;
    PMITEM3?: string;
    PMITEM4?: string;
    DTLTOTAMT?: string;
}

export interface Ids_ioReportFilter {
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
    PERSONKEY?: string;
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
    TJBOOKPRINTTOMGNO?: string;
    PMITEM1?: string;
    PMITEM2?: string;
    PMITEM3?: string;
    PMITEM4?: string;
    DTLTOTAMT?: string;
}

export interface Ids_oAmountGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAmountGubun: Ids_oAmountGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'B', DATA: '선불' },
    { CD: 'A', DATA: '후불' },
];

export interface Ids_ioEmail {
}

export interface Ids_ioEmailFilter {
}

export interface Ids_ioBook {
}

export interface Ids_ioBookFilter {
}

export interface Ids_oOnlineGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oOnlineGubun: Ids_oOnlineGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'N', DATA: '집합' },
    { CD: 'Y', DATA: '온라인' },
    { CD: 'X', DATA: '블라인드' },
    { CD: 'Z', DATA: '혼용' },
];

export interface Ids_oSearchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSearchGubun: Ids_oSearchGubun[] = [
    { CD: '0', DATA: '회차' },
    { CD: '1', DATA: '교육종료일자' },
];

export interface Ids_ioReport2 {
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
    PERSONKEY?: string;
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
    TJBOOKPRINTTOMGNO?: string;
    PMITEM1?: string;
    PMITEM2?: string;
    PMITEM3?: string;
    PMITEM4?: string;
    DTLTOTAMT?: string;
}

export interface Igds_oPrintReceiptMast {
    PMRESULT?: string;
}

export interface Ids_oTrainingJubsu_Filter {
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
    PERSONKEY?: string;
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
    TJBOOKPRINTTOMGNO?: string;
    PMITEM1?: string;
    PMITEM2?: string;
    PMITEM3?: string;
    PMITEM4?: string;
    DTLTOTAMT?: string;
}
