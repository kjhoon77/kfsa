// @ts-nocheck
export const Frmcust0010MCustomerManagementOldData = {};

export interface Ids_oAddrGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddrGubun: Ids_oAddrGubun[] = [
    { CD: '0', DATA: '대상물' },
    { CD: '1', DATA: '선임자' },
    { CD: '2', DATA: '직접' },
];

export interface Ids_ioDelete {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioDelete: Ids_ioDelete[] = [
    { CD: '0', DATA: '정상' },
    { CD: '1', DATA: '삭제소멸' },
    { CD: '2', DATA: '삭제용폐' },
    { CD: '3', DATA: '삭제중복' },
    { CD: '4', DATA: '삭제기타' },
];

export interface Ids_ioLevel {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioLevel: Ids_ioLevel[] = [
    { CD: '1', DATA: '1급' },
    { CD: '2', DATA: '2급' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oAddr {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddr: Ids_oAddr[] = [
    { CD: '0', DATA: '구주소' },
    { CD: '1', DATA: '신주소' },
];

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oBusinessGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYn: Ids_ioYn[] = [
    { CD: '1', DATA: '아니오' },
    { CD: '0', DATA: '예' },
];

export interface Ids_oEmailDomain {
    CD?: string;
    DATA?: string;
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
    BETCADDR?: string;
    BFAX?: string;
    BFIREBONBUCD?: string;
    BFIREUPCD?: string;
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
}

export interface Ids_ioDangerInfo {
    DBMGNO?: number;
    DGATEWAYDAN?: string;
    DPERMISSIONNO?: string;
    DREMARK?: string;
    DSEQ?: number;
}

export interface Ids_ioTankInfo {
    TBMGNO?: string;
    TCARNO?: string;
    TCARYEAR?: string;
    TGATEWAYTANK1?: number;
    TGATEWAYTANK2?: number;
    TINSTLRADDR1?: string;
    TINSTLRADDR2?: string;
    TINSTLRZIPCD?: string;
    TPARKPLACEADDR1?: string;
    TPARKPLACEADDR2?: string;
    TPARKPLACEZIPCD?: string;
    TPERMISSIONNO?: string;
    TPOSTREQGUBUN?: string;
    TREMARK?: string;
    TSEQ?: string;
    POSTPLACE?: string;
}

export interface Ids_ioEducationPassInfo {
    BNM?: string;
    CNO?: string;
    EPPASSDATE?: string;
    EPPERSONNM?: string;
    EPPROCGTMGNO?: string;
    EPRESIDENTNO?: string;
    EPSUCCESSIONGUBUN?: string;
    EPYEAR?: string;
    ESGUBUN?: string;
    ESSTUDENT?: string;
    EPMGNO?: string;
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
    MMCNT?: string;
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
    FMRESIDENTNO?: string;
    IIDIRPATH?: string;
    IIREALNM?: string;
    IISAVENM?: string;
}

export interface Ids_ioLicenseInfo {
    OLFMMGNO?: number;
    OLDATE?: string;
    OLHCD?: string;
    OLHNM?: string;
    OLNO?: string;
    OLSEQ?: number;
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

export interface Ids_ioAdditionInfo {
    ADCMGNO?: number;
    ADCONTENT?: string;
    ADDELGUBUN?: string;
    ADCD?: string;
    ADSEQ?: number;
}

export interface Ids_ioOverBizInfo {
}

export interface Ids_ioCustomerFeeInfo {
}

export interface Ids_oAddPost {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddPost: Ids_oAddPost[] = [
    { CD: '0', DATA: '공통' },
    { CD: '1', DATA: '개별' },
];

export interface Ids_oDetailCourse {
    CD?: string;
    DATA?: string;
    GCD?: string;
}

export interface Ids_oCustomerStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCustomerStatus: Ids_oCustomerStatus[] = [
    { CD: '0', DATA: '회원' },
    { CD: '1', DATA: '비회원' },
];

export interface Ids_oAddition {
    CD?: string;
    DATA?: string;
}

export interface Ids_oOwnerGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oOwnerGubun: Ids_oOwnerGubun[] = [
    { CD: '0', DATA: '관계자' },
    { CD: '1', DATA: '소유자' },
    { CD: '2', DATA: '점유자' },
    { CD: '3', DATA: '대표자' },
];

export interface Ids_oLicenseGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oEduStudentGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduStudentGubun: Ids_oEduStudentGubun[] = [
    { CD: '0', DATA: '실무교육' },
    { CD: '1', DATA: '제연설비등' },
    { CD: '2', DATA: '사이버' },
];

export interface Ids_oEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduGubun: Ids_oEduGubun[] = [
    { CD: '0', DATA: '평일주간' },
    { CD: '1', DATA: '평일야간' },
    { CD: '2', DATA: '휴일주간' },
    { CD: '3', DATA: '휴일야간' },
    { CD: '4', DATA: '사이버' },
];

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

export interface Ids_oBizCd {
    CD?: string;
    DATA?: string;
}

export interface Ids_oObjectMgno {
    CMGNO?: string;
    CNO?: string;
    CREGCD?: string;
    CBMGNO?: string;
    CGTMGNO?: string;
    CCOURSECD?: string;
}

export interface Ids_oJibuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJibuGubun: Ids_oJibuGubun[] = [
    { CD: 'S', DATA: '소속지부' },
    { CD: 'T', DATA: '타지부' },
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

export interface Ids_oTest {
    BD?: string;
    CM?: string;
    FM?: string;
    BBO?: string;
    BBD?: string;
    BBT?: string;
    CMA?: string;
    FML?: string;
}

export interface Ids_oStatusReason {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCount {
    CNT?: string;
}

export interface Ids_oSunapGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oFireCd {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
}

export interface Ids_oFireCenterCd {
    CD?: string;
    DATA?: string;
    UPCD?: string;
}

export interface Ids_oAgencyYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAgencyYn: Ids_oAgencyYn[] = [
    { CD: '0', DATA: '대행' },
    { CD: '1', DATA: '미대행' },
];

export interface Ids_oManagerInfoTmp {
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

export interface Ids_oSPMain {
    O_NEWFMMGNO?: string;
    O_NEWFMHSEQ?: string;
    O_OBMGNO?: string;
    O_STATUS?: string;
}

export interface Ids_oEduSuccessGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduSuccessGubun: Ids_oEduSuccessGubun[] = [
    { CD: '0', DATA: '선임자교육' },
    { CD: '1', DATA: '교육승계' },
    { CD: '2', DATA: '사이버교육' },
];

export interface Ids_oSPMainIN {
    O_NEWFMMGNO?: string;
    O_NEWFMHSEQ?: string;
    O_OBMGNO?: string;
    O_STATUS?: string;
}

export interface Ids_oOverBizProc {
}

export interface Ids_iCustomerInfoTmp {
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

export interface Ids_iCustomerModifyHistory {
    CMHAFTERDATA?: string;
    CMHBEFOREDATA?: string;
    CMHCOLUMN?: string;
    CMHGUBUN?: string;
    CMHKEY?: string;
    CMHWORKGUBUN?: string;
}

export interface Ids_oModifyColumnList {
    TBLNM?: string;
    COLNM?: string;
    COLKORNM?: string;
    COMBOGUBUN?: string;
    INNERDSNM?: string;
}

export const ds_ds_oModifyColumnList: Ids_oModifyColumnList[] = [
    { COLKORNM: '고객정보관리번호', COLNM: 'CMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '지부', COLNM: 'CGTMGNO', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oJibu', TBLNM: 'CUSTOMER' },
    { COLKORNM: '고객번호', COLNM: 'CNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '지역', COLNM: 'CREGCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oRegion', TBLNM: 'CUSTOMER' },
    { COLKORNM: '직능', COLNM: 'CCOURSECD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oCourse', TBLNM: 'CUSTOMER' },
    { COLKORNM: '대상물관리번호', COLNM: 'CBMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '선임자관리번호', COLNM: 'CFMHMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '선임자이력순번', COLNM: 'CFMHSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '공공선임정보및인력구분', COLNM: 'CPERSONGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oPersonGubun', TBLNM: 'CUSTOMER' },
    { COLKORNM: '업체구분', COLNM: 'CCOCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oBusinessGubun', TBLNM: 'CUSTOMER' },
    { COLKORNM: '업무대행여부', COLNM: 'CAGGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAgencyYn', TBLNM: 'CUSTOMER' },
    { COLKORNM: '업무대행업체관리번호', COLNM: 'CAGMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '고객상태', COLNM: 'CSTATUSGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oCustomerStatus', TBLNM: 'CUSTOMER' },
    { COLKORNM: '고객상태변경사유코드', COLNM: 'CSTATUSREASONCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oStatusReason', TBLNM: 'CUSTOMER' },
    { COLKORNM: '고객상태처리일자', COLNM: 'CSTATUSDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '등록년월', COLNM: 'CREGISTERYYMM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '회비부과년월', COLNM: 'CFEEYYMM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '겸직관리번호', COLNM: 'COBMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '겸직회비면제여부', COLNM: 'COVERGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioYn', TBLNM: 'CUSTOMER' },
    { COLKORNM: '관리제외구분', COLNM: 'CEXCEPTGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioYn', TBLNM: 'CUSTOMER' },
    { COLKORNM: '관리제외처리일자', COLNM: 'CEXCEPTDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '상태구분', COLNM: 'CDELGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioDelete', TBLNM: 'CUSTOMER' },
    { COLKORNM: '삭제일자', COLNM: 'CDELDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '시도소방본부관리번호', COLNM: 'CFIREMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '소방민원정보시스템관리번호1', COLNM: 'CGATEWAYPK1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '소방민원정보시스템관리번호2', COLNM: 'CGATEWAYPK2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '소방민원정보시스템관리번호3', COLNM: 'CGATEWAYPK3', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '우편물청구구분', COLNM: 'CPOSTREQGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddPost', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소구분_회비', COLNM: 'CFEEPOSTGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddrGubun', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소우편번호_회비', COLNM: 'CFEEPOSTZIPCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소1_회비', COLNM: 'CFEEPOSTADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소2_회비', COLNM: 'CFEEPOSTADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망우편물투입장소_회비', COLNM: 'CFEEPOSTPLACE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소구분_교육', COLNM: 'CEDUPOSTGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddrGubun', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소우편번호_교육', COLNM: 'CEDUPOSTZIPCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소1_교육', COLNM: 'CEDUPOSTADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소2_교육', COLNM: 'CEDUPOSTADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망우편물투입장소_교육', COLNM: 'CEDUPOSTPLACE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '최종부가정보순번', COLNM: 'CLASTADDSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '최종우편반송이력순번', COLNM: 'CLASTPRSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '대상물관리번호', COLNM: 'BMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '대상물명', COLNM: 'BNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '용도', COLNM: 'BBIZCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oBizCd', TBLNM: 'BUILDING' },
    { COLKORNM: '관할소방서', COLNM: 'BFIREUPCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oFireCd', TBLNM: 'BUILDING' },
    { COLKORNM: '안전센터관리코드', COLNM: 'BFIRECD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oFireCenterCd', TBLNM: 'BUILDING' },
    { COLKORNM: '관서담당자', COLNM: 'BFIREMAN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '전화번호', COLNM: 'BTEL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '팩스', COLNM: 'BFAX', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '제연설비설치대상여부', COLNM: 'BSMOKEGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioYn', TBLNM: 'BUILDING' },
    { COLKORNM: '연면적', COLNM: 'BAREA', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '사업자등록번호', COLNM: 'BCONO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '우편번호', COLNM: 'BZIPCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '대표주소구분', COLNM: 'BADDRGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddr', TBLNM: 'BUILDING' },
    { COLKORNM: '구주소1', COLNM: 'BADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '구주소2', COLNM: 'BADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_시도', COLNM: 'BSIDO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_시군구', COLNM: 'BSIGUNGU', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_동', COLNM: 'BDONG', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_리', COLNM: 'BRI', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_산번지여부', COLNM: 'BSANGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioYn', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_본번지', COLNM: 'BBUNJI1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_부번지', COLNM: 'BBUNJI2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_기타주소', COLNM: 'BETCADDR', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_도로명', COLNM: 'BROADNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_건물명', COLNM: 'BBULDNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_건물기타주소', COLNM: 'BBULDADDR', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '선임자관리번호', COLNM: 'FMMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '성명', COLNM: 'FMNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '주민번호', COLNM: 'FMRESIDENTNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '주민번호오류여부', COLNM: 'FMRESIDENTERR', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oResidentNoErr', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '실명인증여부', COLNM: 'FMAUTHGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_AuthGubun', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '최종선임자이력순번', COLNM: 'FMLASTFMHSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '선임자관리번호', COLNM: 'FMHFMMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '순번', COLNM: 'FMHSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '고객정보관리번호', COLNM: 'FMCMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '직능', COLNM: 'FMCOURSECD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oCourse', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '대상물명', COLNM: 'FMBUILDINGNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '선임일자', COLNM: 'FMHSTARTDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '해임여부', COLNM: 'FMHENDGUBUN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '해임일자', COLNM: 'FMHENDDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '해임처리시스템일자', COLNM: 'FMHENDSYSDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '전화번호', COLNM: 'FMHTEL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '핸드폰번호', COLNM: 'FMHHPTEL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '이메일아이디', COLNM: 'FMHEMAILID', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '이메일도메인', COLNM: 'FMHEMAILDOMAIN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '대표주소구분', COLNM: 'FMHADDRGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddr', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '우편번호', COLNM: 'FMHZIPCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '구주소1', COLNM: 'FMHADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '구주소2', COLNM: 'FMHADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_시도', COLNM: 'FMHSIDO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_시군구', COLNM: 'FMHSIGUNGU', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_동', COLNM: 'FMHDONG', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_리', COLNM: 'FMHRI', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_산번지여부', COLNM: 'FMHSANGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioYn', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_본번지', COLNM: 'FMHBUNJI1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_부번지', COLNM: 'FMHBUNJI2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_기타주소', COLNM: 'FMHETCADDR', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_도로명', COLNM: 'FMHROADNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_건물명', COLNM: 'FMHBULDNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_건물기타주소', COLNM: 'FMHBULDADDR', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '과거회원정보', COLNM: 'FMHOLDINFO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '대상물관리번호', COLNM: 'OBMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OWNER' },
    { COLKORNM: '순번', COLNM: 'OSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OWNER' },
    { COLKORNM: '관계자구분', COLNM: 'OGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oOwnerGubun', TBLNM: 'OWNER' },
    { COLKORNM: '성명', COLNM: 'ONM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OWNER' },
    { COLKORNM: '전화번호', COLNM: 'OTEL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OWNER' },
    { COLKORNM: '휴대폰', COLNM: 'OHPTEL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OWNER' },
    { COLKORNM: '기타정보', COLNM: 'OREMARK', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OWNER' },
    { COLKORNM: '순번', COLNM: 'DSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'DANGER' },
    { COLKORNM: '허가번호', COLNM: 'DPERMISSIONNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'DANGER' },
    { COLKORNM: '기타정보', COLNM: 'DREMARK', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'DANGER' },
    { COLKORNM: '민원정보시스템제조소등PK', COLNM: 'DGATEWAYDAN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'DANGER' },
    { COLKORNM: '대상물관리번호', COLNM: 'DBMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'DANGER' },
    { COLKORNM: '대상물관리번호', COLNM: 'TBMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '순번', COLNM: 'TSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '차량번호', COLNM: 'TCARNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '차량년도', COLNM: 'TCARYEAR', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '허가번호', COLNM: 'TPERMISSIONNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '기타정보', COLNM: 'TREMARK', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '우편청구구분', COLNM: 'TPOSTREQGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oTankAddrGubun', TBLNM: 'TANK' },
    { COLKORNM: '상치장소우편번호', COLNM: 'TPARKPLACEZIPCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '상치장소주소1', COLNM: 'TPARKPLACEADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '상치장소주소2', COLNM: 'TPARKPLACEADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '설치자우편번호', COLNM: 'TINSTLRZIPCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '설치자주소1', COLNM: 'TINSTLRADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '설치자주소2', COLNM: 'TINSTLRADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '민원정보시스템제조소등탱크PK1', COLNM: 'TGATEWAYTANK1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '민원정보시스템제조소등탱크PK2', COLNM: 'TGATEWAYTANK2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '고객정보관리번호', COLNM: 'ADCMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'ADDITION' },
    { COLKORNM: '순번', COLNM: 'ADSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'ADDITION' },
    { COLKORNM: '부가정보코드', COLNM: 'ADCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddition', TBLNM: 'ADDITION' },
    { COLKORNM: '내용', COLNM: 'ADCONTENT', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'ADDITION' },
    { COLKORNM: '삭제여부', COLNM: 'ADDELGUBUN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'ADDITION' },
    { COLKORNM: '선임자관리번호', COLNM: 'OLFMMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OTHERLICENSE' },
    { COLKORNM: '순번', COLNM: 'OLSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OTHERLICENSE' },
    { COLKORNM: '자격증코드', COLNM: 'OLHCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oLicenseGubun', TBLNM: 'OTHERLICENSE' },
    { COLKORNM: '자격증등록번호', COLNM: 'OLNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OTHERLICENSE' },
    { COLKORNM: '자격증발급일자', COLNM: 'OLDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OTHERLICENSE' },
    { COLKORNM: '소방본부', COLNM: 'BFIREBONBUCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '우편청구지', COLNM: 'POSTPLACE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
];

export interface Ids_oLicenseInfo {
    LISSUEDATE?: string;
    LLCSNO?: string;
    TCCOURSENM?: string;
}

export interface Ids_oResidentNoErr {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oResidentNoErr: Ids_oResidentNoErr[] = [
    { CD: '0', DATA: '정상' },
    { CD: '1', DATA: '오류' },
];

export interface Ids_AuthGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_AuthGubun: Ids_AuthGubun[] = [
    { CD: '0', DATA: '인증' },
    { CD: '1', DATA: '미인증' },
];

export interface Ids_oTankAddrGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oTankAddrGubun: Ids_oTankAddrGubun[] = [
    { CD: '0', DATA: '상치주소' },
    { CD: '1', DATA: '설치자주소' },
];

export interface Ids_oCustomerCompare {
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

export interface Ids_oAllObject {
}

export interface Ids_oBuildingInfoTmp {
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
    BETCADDR?: string;
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
}

export interface Ids_ioNotOverBizFireManager {
}

export interface Ids_ioIsOverBizFireManager {
}

export interface Ids_oBnmCode {
}

export interface Ids_oFireBonbu {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
}

export interface Ids_oEduConfirmPrint {
    ECMGNO?: string;
    EDUNAME?: string;
    COMPANY?: string;
    NAME?: string;
    CGROUPNM?: string;
    EPRESIDENTNO?: string;
    EDUDATE?: string;
    BIRTH?: string;
    GTTEAMNM?: string;
    MGNO?: string;
    RULE?: string;
}
