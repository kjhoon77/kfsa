// @ts-nocheck
export const Frmcust6301PDataConnectionTankManageNewSaveData = {};

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

export interface Ids_oDetailCourse {
    CD?: string;
    DATA?: string;
    GCD?: string;
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
    BFIREBONBUCD?: string;
    BRPNUCD?: string;
    BRROADBUILDMGNO?: string;
    BRROADDETAIL?: string;
    BRROADREMAIN?: string;
    BRSANGUBUN?: string;
    BRMAINBUNJI?: string;
    BRSUBBUNJI?: string;
    BRBUILDNM?: string;
    BRADDRETC?: string;
    BRCONVPGM?: string;
    BRCONVSTATUS?: string;
    BRCONVDATE?: string;
    BRCONVSABUN?: string;
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
    FMPERSONKEY?: string;
    IIDIRPATH?: string;
    IIREALNM?: string;
    IISAVENM?: string;
}

export interface Ids_ioAdditionInfo {
    ADCMGNO?: number;
    ADCONTENT?: string;
    ADDELGUBUN?: string;
    ADCD?: string;
    ADSEQ?: number;
}

export interface Ids_oAddr {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddr: Ids_oAddr[] = [
    { CD: '0', DATA: '지번주소' },
    { CD: '1', DATA: '도로명주소' },
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
    FMBIRTHDAY?: string;
    FMPERSONKEY?: string;
    IIDIRPATH?: string;
    IIREALNM?: string;
    IISAVENM?: string;
}

export interface Ids_oBnmCode {
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

export interface Ids_oCustomerStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCustomerStatus: Ids_oCustomerStatus[] = [
    { CD: '0', DATA: '회원' },
    { CD: '1', DATA: '비회원' },
];

export interface Ids_ioMatchInfo {
    MKFSAPK?: string;
    MFPIS1?: string;
    MFPIS2?: string;
    MFPIS3?: string;
    MFPIS4?: string;
    MFPIS5?: string;
    MFPIS6?: string;
}

export interface Ids_ioBizCdMatch {
    CCBIZCD?: string;
    CCBIZCDNM?: string;
}

export interface Ids_oFireBonbuCd {
}

export interface Ids_ioManager {
    MMGNO?: string;
    MNM?: string;
    MBIRTHDAY?: string;
    MPERSONKEY?: string;
    FMLASTFMHSEQ?: string;
    FMRESIDENTERR?: string;
}

export interface Ids_oMemberStat {
    MHMEMCHK?: string;
    MHNAME?: string;
    MHPERSONKEY?: string;
    MHREGDATE?: string;
}

export interface Ids_ioOldCustomerInfo {
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

export interface Ids_ioOldManagerInfo {
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
    BIRTHDAY?: string;
    FMPERSONKEY?: string;
    IIDIRPATH?: string;
    IIREALNM?: string;
    IISAVENM?: string;
}

export interface Ids_oManagerList {
    BADDR1?: string;
    BADDR2?: string;
    BNM?: string;
    BTEL?: string;
    BZIPCD?: string;
    CCOCD?: string;
    CCOURSECD?: string;
    CFIREMGNO?: string;
    CGTMGNO?: string;
    CNO?: string;
    COVERCMGNO?: string;
    CREGCD?: string;
    CSTATUSGUBUN?: string;
    EPPASSDATE?: string;
    FMHSTARTDATE?: string;
    FMNM?: string;
    FMBIRTHDAY?: string;
    BIRTHDAY?: string;
    FMPERSONKEY?: string;
    OLHNM?: string;
}

export interface Ids_MemberGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_MemberGubun: Ids_MemberGubun[] = [
    { CD: 'Y', DATA: '회원' },
    { CD: 'N', DATA: '비회원' },
    { CD: '', DATA: '비회원(미지정)' },
];

export interface Ids_oStatus {
}

export interface Ids_ioOtherLicenseInfo {
    OLFMMGNO?: string;
    OLSEQ?: string;
    OLHCD?: string;
    OLNO?: string;
    OLDATE?: string;
    OLINGUBUN?: string;
    OLNUM?: string;
    OLHFPISNO?: string;
}

export interface Ids_oOverBizProc {
}

export interface Ids_ioNotOverBizFireManager {
}

export interface Ids_ioIsOverBizFireManager {
}

export interface Ids_ioOldBuildingInfo {
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
    BFIREBONBUCD?: string;
}

export interface Ids_ioDanManagerInfo {
    NM?: string;
    IHIDNUM?: string;
    CRQFC_CODE_NM?: string;
    CRQFC_CODE?: string;
    AP_APNTRLSOFC_DE?: string;
    AP_PROCESS_DE?: string;
    APNTRLSOFC_DATE?: string;
    PROCESS_DATE?: string;
    CRQFC_ACQDT?: string;
    CRQFC_NO?: string;
    CRQFC_ACQDATE?: string;
    SEL?: string;
}

export interface Ids_ioDangerInfo {
    DBMGNO?: number;
    DPERMISSIONNO?: string;
    DREMARK?: string;
    DSEQ?: number;
    SEL?: string;
}

export interface Ids_ioDangerInfoSave {
    DBMGNO?: number;
    DPERMISSIONNO?: string;
    DREMARK?: string;
    DSEQ?: number;
    SEL?: string;
}

export interface Ids_iCustomerModifyHistory {
    CMHAFTERDATA?: string;
    CMHBEFOREDATA?: string;
    CMHCOLUMN?: string;
    CMHGUBUN?: string;
    CMHKEY?: string;
    CMHWORKGUBUN?: string;
}

export interface Ids_ioLicenseInfo {
    OLFMMGNO?: number;
    OLDATE?: string;
    OLHCD?: string;
    OLHNM?: string;
    OLNO?: string;
    OLSEQ?: number;
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
    { COLKORNM: '생년월일', COLNM: 'FMBIRTHDAY', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '개인식별번호', COLNM: 'FMPERSONKEY', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGER' },
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
    { COLKORNM: '소방본부코드', COLNM: 'BFIREBONBUCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oFireBonbuCd', TBLNM: 'BUILDING' },
    { COLKORNM: '우편청구지', COLNM: 'POSTPLACE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '청구지회비_구/새주소구분', COLNM: 'CFEEADDRGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddr2', TBLNM: 'CUSTOMER' },
    { COLKORNM: '청구지회비_도로명주소1', COLNM: 'CFEEROADADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '청구지회비_도로명주소2', COLNM: 'CFEEROADADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '청구지교육_구/새주소구분', COLNM: 'CEDUADDRGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddr2', TBLNM: 'CUSTOMER' },
    { COLKORNM: '청구지교육_도로명주소1', COLNM: 'CEDUROADADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '청구지교육_도로명주소2', COLNM: 'CEDUROADADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '회비PNU코드', COLNM: 'CRFEEPNUCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '회비건물관리번호', COLNM: 'CRFEEROADBUILDMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '회비도로명상세', COLNM: 'CRFEEROADDETAIL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '회비도로명부가', COLNM: 'CRFEEROADREMAIN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '회비산여부', COLNM: 'CRFEESANGUBUN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '회비주번지', COLNM: 'CRFEEMAINBUNJI', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '회비부번지', COLNM: 'CRFEESUBBUNJI', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '회비지번건물명', COLNM: 'CRFEEBUILDNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '회비지번기타', COLNM: 'CRFEEADDRETC', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '교육PNU코드', COLNM: 'CREDUPNUCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '교육건물관리번호', COLNM: 'CREDUROADBUILDMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '교육도로명상세', COLNM: 'CREDUROADDETAIL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '교육도로명부가', COLNM: 'CREDUROADREMAIN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '교육산여부', COLNM: 'CREDUSANGUBUN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '교육주번지', COLNM: 'CREDUMAINBUNJI', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '교육부번지', COLNM: 'CREDUSUBBUNJI', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '교육지번건물명', COLNM: 'CREDUBUILDNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '교육지번기타', COLNM: 'CREDUADDRETC', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '도로명주소1', COLNM: 'BROADADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '도로명주소2', COLNM: 'BROADADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: 'PNU코드', COLNM: 'BRPNUCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '건물관리번호', COLNM: 'BRROADBUILDMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '도로명상세', COLNM: 'BRROADDETAIL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '도로명부가', COLNM: 'BRROADREMAIN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '산여부', COLNM: 'BRSANGUBUN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '주번지', COLNM: 'BRMAINBUNJI', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '부번지', COLNM: 'BRSUBBUNJI', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '지번건물명', COLNM: 'BRBUILDNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '지번기타', COLNM: 'BRADDRETC', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '도로명주소1', COLNM: 'FMHROADADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '도로명주소2', COLNM: 'FMHROADADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: 'PNU코드', COLNM: 'FMHRPNUCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '건물관리번호', COLNM: 'FMHRROADBUILDMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '도로명상세', COLNM: 'FMHRROADDETAIL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '도로명부가', COLNM: 'FMHRROADREMAIN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '산여부', COLNM: 'FMHRSANGUBUN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '주번지', COLNM: 'FMHRMAINBUNJI', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '부번지', COLNM: 'FMHRSUBBUNJI', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '지번건물명', COLNM: 'FMHRBUILDNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '지번기타', COLNM: 'FMHRADDRETC', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '변환프로그램', COLNM: 'BRCONVPGM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '변환상태', COLNM: 'BRCONVSTATUS', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '변환상태_회비', COLNM: 'CRCONVFEESTATUS', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '변환상태_교육', COLNM: 'CRCONVEDUSTATUS', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '변환프로그램', COLNM: 'CRCONVPGM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '변환프로그램', COLNM: 'FMHRCONVPGM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '변환상태', COLNM: 'FMHRCONVSTATUS', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '변환상태_상치장소', COLNM: 'TRCONVPARKSTATUS', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '변환상태_설치자주소', COLNM: 'TRCONVINSTLRSTATUS', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '변환프로그램', COLNM: 'TRCONVPGM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '소방안전지 수령 제외', COLNM: 'CRECEIVEEXCEPTGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioYn', TBLNM: 'CUSTOMER' },
    { COLKORNM: '수첩번호1', COLNM: 'FMLICENSENO1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '소방안전지 수령 제외일자', COLNM: 'CRECEIVEEXCEPTDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '실무교육유효기간', COLNM: 'CEDUEXPIREDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '소방안전관리자관리번호', COLNM: 'CMAINCMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '선임자격(보조자)', COLNM: 'CELECTQUALIFY', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
];

export interface Ids_ioFPISDanTankInfo {
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
    TPARKPLACEADDRGUBUN?: string;
    TPARKPLACEROADZIPCD?: string;
    TPARKPLACEROADADDR1?: string;
    TPARKPLACEROADADDR2?: string;
    TINSTLRADDRGUBUN?: string;
    TINSTLRROADZIPCD?: string;
    TINSTLRROADADDR1?: string;
    TINSTLRROADADDR2?: string;
}

export interface Ids_oAddrGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddrGubun: Ids_oAddrGubun[] = [
    { CD: '0', DATA: '상치장소' },
    { CD: '1', DATA: '설치자주소' },
];
