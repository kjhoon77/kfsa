// @ts-nocheck
export const Frmcust0031PCustomerChangeData = {};

export interface Ids_oBizCd {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oEmailDomain {
    CD?: string;
    DATA?: string;
}

export interface Ids_oDetailCourse {
    CD?: string;
    DATA?: string;
    GCD?: string;
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

export interface Ids_oAddrGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddrGubun: Ids_oAddrGubun[] = [
    { CD: '0', DATA: '대상물' },
    { CD: '1', DATA: '선임자' },
    { CD: '2', DATA: '직접' },
];

export interface Ids_oJubsuInfo {
    FCMGNO?: string;
    FCSEQ?: string;
    FCCMGNO?: string;
    FMPERSONKEY?: string;
    BIRTHDAY?: string;
    FCSTATUS?: string;
    FCSTATUS2?: string;
    FCGUBUN?: string;
    FCGUBUN2?: string;
    FCBULDNAME?: string;
    FCPOST?: string;
    FCADDR1?: string;
    FCADDR2?: string;
    FCHOPEADDRGUBUN?: string;
    FCCPOST?: string;
    FCCADDR1?: string;
    FCCADDR2?: string;
    FCTELEPHONE?: string;
    FCFAX?: string;
    FCHANDPHONE?: string;
    FCEMAIL?: string;
    FCSIZE?: string;
    FCOWNERNAME?: string;
    FCOWNERTEL?: string;
    FCOWNERHP?: string;
    FCREGDATE?: string;
    FCREGDATE2?: string;
    FCPOSTGUBUN?: string;
    FCFMHZIPCD?: string;
    FCFMHADDR1?: string;
    FCFMHADDR2?: string;
    FCOWNERGUBUN?: string;
    CGTMGNO?: string;
    MID?: string;
    MNM?: string;
    MMGNO?: string;
    CNO?: string;
    FCBADDRGUBUN?: string;
    FCFMHADDRGUBUN?: string;
    FCCADDRGUBUN?: string;
    CNICKNM?: string;
    NEWCNM?: string;
    BNM?: string;
    OLDCNM?: string;
    FCCOURSECD?: string;
    FMHFMMGNO?: string;
    FMHSEQ?: string;
    FCENTERDATE?: string;
    FCENTERQUALIFY?: string;
    FCCARNO?: string;
    FCCARYEAR?: string;
    FCPERMISSIONNO?: string;
    ENTERQUALIFY?: string;
    FCEDUYN?: string;
    FMBIRTHDAY?: string;
}

export interface Ids_oAllObject {
}

export interface Ids_ioBuildingInfo {
    BADDR1?: string;
    BADDR2?: string;
    BADDRGUBUN?: string;
    BAREA?: number;
    BBIZCD?: string;
    BBULDADDR?: string;
    BBULDNM?: string;
    BBUNJI1?: string;
    BBUNJI2?: string;
    BCONO?: string;
    BDONG?: string;
    BFAX?: string;
    BFIRECD?: string;
    BFIREMAN?: string;
    BMGNO?: number;
    BNM?: string;
    BRI?: string;
    BROADNM?: string;
    BSANGUBUN?: string;
    BSIDO?: string;
    BSIGUNGU?: string;
    BSMOKEGUBUN?: string;
    BTEL?: string;
    BZIPCD?: string;
    BFIREUPCD?: string;
    BROADADDR1?: string;
    BROADADDR2?: string;
}

export interface Ids_ioCustomerInfo {
    AGNM?: string;
    CAGGUBUN?: string;
    CAGMGNO?: number;
    CBMGNO?: number;
    CCOCD?: string;
    CCOURSECD?: string;
    CDELDATE?: string;
    CDELGUBUN?: string;
    CEDUPOSTADDR1?: string;
    CEDUPOSTADDR2?: string;
    CEDUPOSTGUBUN?: string;
    CEDUPOSTPLACE?: string;
    CEDUPOSTZIPCD?: string;
    CEXCEPTDATE?: string;
    CEXCEPTGUBUN?: string;
    CFEEPOSTADDR1?: string;
    CFEEPOSTADDR2?: string;
    CFEEPOSTGUBUN?: string;
    CFEEPOSTPLACE?: string;
    CFEEPOSTZIPCD?: string;
    CFEEYYMM?: string;
    CFIREMGNO?: string;
    CFMHMGNO?: number;
    CFMHSEQ?: number;
    CGATEWAYPK1?: string;
    CGATEWAYPK2?: string;
    CGATEWAYPK3?: string;
    CGCOURSECD?: string;
    CGTMGNO?: string;
    CLASTADDSEQ?: number;
    CLASTPRSEQ?: number;
    CMGNO?: number;
    CNO?: string;
    COBMGNO?: number;
    COLDMGNO?: string;
    COVERGUBUN?: string;
    CPERSONGUBUN?: string;
    CPOSTREQGUBUN?: string;
    CREGCD?: string;
    CREGISTERYYMM?: string;
    CSTATUSDATE?: string;
    CSTATUSGUBUN?: string;
    CSTATUSREASONCD?: string;
    CMAINCMGNO?: string;
    CELECTQUALIFY?: string;
    CFEEADDRGUBUN?: string;
    CEDUADDRGUBUN?: string;
    CFEEROADADDR1?: string;
    CFEEROADADDR2?: string;
    CEDUROADADDR1?: string;
    CEDUROADADDR2?: string;
}

export interface Ids_ioManagerInfo {
    FMAUTHGUBUN?: string;
    FMBUILDINGNM?: string;
    FMCMGNO?: number;
    FMCOURSECD?: string;
    FMHADDR1?: string;
    FMHADDR2?: string;
    FMHADDRGUBUN?: string;
    FMHBULDADDR?: string;
    FMHBULDNM?: string;
    FMHBUNJI1?: string;
    FMHBUNJI2?: string;
    FMHDONG?: string;
    FMHEMAILDOMAIN?: string;
    FMHEMAILID?: string;
    FMHENDDATE?: string;
    FMHENDGUBUN?: string;
    FMHENDSYSDATE?: string;
    FMHETCADDR?: string;
    FMHFMMGNO?: number;
    FMHHPTEL?: string;
    FMHOLDINFO?: string;
    FMHRI?: string;
    FMHROADNM?: string;
    FMHSANGUBUN?: string;
    FMHSEQ?: number;
    FMHSIDO?: string;
    FMHSIGUNGU?: string;
    FMHSTARTDATE?: string;
    FMHTEL?: string;
    FMHZIPCD?: string;
    FMLASTFMHSEQ?: number;
    FMMGNO?: number;
    FMNM?: string;
    FMRESIDENTERR?: string;
    FMBIRTHDAY?: string;
    IIDIRPATH?: string;
    IIREALNM?: string;
    IISAVENM?: string;
    FMHROADADDR1?: string;
    FMHROADADDR2?: string;
    BIRTHDAY?: string;
    FMPERSONKEY?: string;
}

export interface Ids_ioAdditionInfo {
    ADCMGNO?: number;
    ADCONTENT?: string;
    ADDELGUBUN?: string;
    ADCD?: string;
    ADSEQ?: number;
}

export interface Ids_ioOwnerInfo {
    OBMGNO?: number;
    OGUBUN?: string;
    OHPTEL?: string;
    ONM?: string;
    OREMARK?: string;
    OSEQ?: number;
    OTEL?: string;
}

export interface Ids_oAddr {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddr: Ids_oAddr[] = [
    { CD: '0', DATA: '지번주소' },
    { CD: '1', DATA: '도로명주소' },
];

export interface Ids_oOwnerGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oOwnerGubun: Ids_oOwnerGubun[] = [
    { CD: '', DATA: '' },
    { CD: '0', DATA: '관계자' },
    { CD: '1', DATA: '소유자' },
    { CD: '2', DATA: '점유자' },
    { CD: '3', DATA: '대표자' },
];

export interface Ids_oBuildingSeq {
    SEQ?: string;
}

export interface Ids_oCustomerSeq {
    SEQ?: string;
}

export interface Ids_oFireManagerSeq {
    SEQ?: string;
}

export interface Ids_ioCustomerInfoTmp {
    AGNM?: string;
    CAGGUBUN?: string;
    CAGMGNO?: number;
    CBMGNO?: number;
    CCOCD?: string;
    CCOURSECD?: string;
    CDELDATE?: string;
    CDELGUBUN?: string;
    CEDUPOSTADDR1?: string;
    CEDUPOSTADDR2?: string;
    CEDUPOSTGUBUN?: string;
    CEDUPOSTPLACE?: string;
    CEDUPOSTZIPCD?: string;
    CEXCEPTDATE?: string;
    CEXCEPTGUBUN?: string;
    CFEEPOSTADDR1?: string;
    CFEEPOSTADDR2?: string;
    CFEEPOSTGUBUN?: string;
    CFEEPOSTPLACE?: string;
    CFEEPOSTZIPCD?: string;
    CFEEYYMM?: string;
    CFIREMGNO?: string;
    CFMHMGNO?: number;
    CFMHSEQ?: number;
    CGATEWAYPK1?: string;
    CGATEWAYPK2?: string;
    CGATEWAYPK3?: string;
    CGCOURSECD?: string;
    CGTMGNO?: string;
    CLASTADDSEQ?: number;
    CLASTPRSEQ?: number;
    CMGNO?: number;
    CNO?: string;
    COBMGNO?: number;
    COLDMGNO?: string;
    COVERGUBUN?: string;
    CPERSONGUBUN?: string;
    CPOSTREQGUBUN?: string;
    CREGCD?: string;
    CREGISTERYYMM?: string;
    CSTATUSDATE?: string;
    CSTATUSGUBUN?: string;
    CSTATUSREASONCD?: string;
}

export interface Ids_ioManagerInfoTmp {
    FMAUTHGUBUN?: string;
    FMBUILDINGNM?: string;
    FMCMGNO?: number;
    FMCOURSECD?: string;
    FMHADDR1?: string;
    FMHADDR2?: string;
    FMHADDRGUBUN?: string;
    FMHBULDADDR?: string;
    FMHBULDNM?: string;
    FMHBUNJI1?: string;
    FMHBUNJI2?: string;
    FMHDONG?: string;
    FMHEMAILDOMAIN?: string;
    FMHEMAILID?: string;
    FMHENDDATE?: string;
    FMHENDGUBUN?: string;
    FMHENDSYSDATE?: string;
    FMHETCADDR?: string;
    FMHFMMGNO?: number;
    FMHHPTEL?: string;
    FMHOLDINFO?: string;
    FMHRI?: string;
    FMHROADNM?: string;
    FMHSANGUBUN?: string;
    FMHSEQ?: number;
    FMHSIDO?: string;
    FMHSIGUNGU?: string;
    FMHSTARTDATE?: string;
    FMHTEL?: string;
    FMHZIPCD?: string;
    FMLASTFMHSEQ?: number;
    FMMGNO?: number;
    FMNM?: string;
    FMRESIDENTERR?: string;
    FMRESIDENTNO?: string;
    IIDIRPATH?: string;
    IIREALNM?: string;
    IISAVENM?: string;
}

export interface Ids_oBnmCode {
}

export interface Ids_oElectQualify {
    PCD?: string;
    CD?: string;
    DATA?: string;
}

export const ds_ds_oElectQualify: Ids_oElectQualify[] = [
    { CD: '', DATA: '선택', PCD: '20' },
    { CD: '0', DATA: '소방안전관리자 자격', PCD: '20' },
    { CD: '1', DATA: '국가기술자격', PCD: '20' },
    { CD: '2', DATA: '강습교육 수료', PCD: '20' },
    { CD: '3', DATA: '소방업무경력(5년이상)', PCD: '20' },
    { CD: '4', DATA: '소방관련업무종사자', PCD: '20' },
    { CD: '', DATA: '선택', PCD: '10' },
    { CD: '0', DATA: '소방안전관리자 자격', PCD: '10' },
    { CD: '1', DATA: '국가기술자격', PCD: '10' },
    { CD: '5', DATA: '업무대행 감독자', PCD: '10' },
    { CD: '6', DATA: '위험물·전기·가스 안전관리자 자격', PCD: '10' },
];

export interface Ids_oStatus {
}

export interface Ids_ioTankInfo {
    TBMGNO?: number;
    TCARNO?: string;
    TCARYEAR?: string;
    TINSTLRADDR1?: string;
    TINSTLRADDR2?: string;
    TINSTLRZIPCD?: string;
    TPARKPLACEADDR1?: string;
    TPARKPLACEADDR2?: string;
    TPARKPLACEZIPCD?: string;
    TPERMISSIONNO?: string;
    TPOSTREQGUBUN?: string;
    TREMARK?: string;
    TSEQ?: number;
}

export interface Ids_oAccountInfo {
}
