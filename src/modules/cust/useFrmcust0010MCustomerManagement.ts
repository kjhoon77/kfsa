// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oAddrGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioDelete {
    CD: string;
    DATA: string;
}

export interface Ids_ioLevel {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oAddr {
    CD: string;
    DATA: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oBusinessGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioYn {
    CD: string;
    DATA: string;
}

export interface Ids_oEmailDomain {
    CD: string;
    DATA: string;
}

export interface Ids_ioBuildingInfo {
    BADDR1: string;
    BADDR2: string;
    BADDRGUBUN: string;
    BAREA: string;
    BBIZCD: string;
    BBULDADDR: string;
    BBULDNM: string;
    BBUNJI1: string;
    BBUNJI2: string;
    BCONO: string;
    BDONG: string;
    BETCADDR: string;
    BFAX: string;
    BFIREBONBUCD: string;
    BFIREUPCD: string;
    BFIRECD: string;
    BFIREMAN: string;
    BMGNO: string;
    BNM: string;
    BRI: string;
    BROADNM: string;
    BSANGUBUN: string;
    BSIDO: string;
    BSIGUNGU: string;
    BSMOKEGUBUN: string;
    BTEL: string;
    BZIPCD: string;
    BRPNUCD: string;
    BRROADBUILDMGNO: string;
    BRROADDETAIL: string;
    BRROADREMAIN: string;
    BRSANGUBUN: string;
    BRMAINBUNJI: string;
    BRSUBBUNJI: string;
    BRBUILDNM: string;
    BRADDRETC: string;
    BRCONVPGM: string;
    BRCONVSTATUS: string;
    BRCONVDATE: string;
    BRCONVSABUN: string;
    BROADADDR1: string;
    BROADADDR2: string;
}

export interface Ids_ioDangerInfo {
    DBMGNO: string;
    DGATEWAYDAN: string;
    DPERMISSIONNO: string;
    DREMARK: string;
    DSEQ: string;
}

export interface Ids_ioTankInfo {
    TBMGNO: string;
    TCARNO: string;
    TCARYEAR: string;
    TGATEWAYTANK1: string;
    TGATEWAYTANK2: string;
    TINSTLRADDR1: string;
    TINSTLRADDR2: string;
    TINSTLRZIPCD: string;
    TPARKPLACEADDR1: string;
    TPARKPLACEADDR2: string;
    TPARKPLACEZIPCD: string;
    TPERMISSIONNO: string;
    TPOSTREQGUBUN: string;
    TREMARK: string;
    TSEQ: string;
    POSTPLACE: string;
    TPARKPLACEADDRGUBUN: string;
    TPARKPLACEROADZIPCD: string;
    TPARKPLACEROADADDR1: string;
    TPARKPLACEROADADDR2: string;
    TINSTLRADDRGUBUN: string;
    TINSTLRROADZIPCD: string;
    TINSTLRROADADDR1: string;
    TINSTLRROADADDR2: string;
    TRPARKPNUCD: string;
    TRPARKROADBUILDMGNO: string;
    TRPARKROADDETAIL: string;
    TRPARKROADREMAIN: string;
    TRPARKSANGUBUN: string;
    TRPARKMAINBUNJI: string;
    TRPARKSUBBUNJI: string;
    TRPARKBUILDNM: string;
    TRPARKADDRETC: string;
    TRINSTLRPNUCD: string;
    TRINSTLRROADBUILDMGNO: string;
    TRINSTLRROADDETAIL: string;
    TRINSTLRROADREMAIN: string;
    TRINSTLRSANGUBUN: string;
    TRINSTLRMAINBUNJI: string;
    TRINSTLRSUBBUNJI: string;
    TRINSTLRBUILDNM: string;
    TRINSTLRADDRETC: string;
    TRCONVPGM: string;
    TRCONVPARKSTATUS: string;
    TRCONVINSTLRSTATUS: string;
}

export interface Ids_ioEducationPassInfo {
    BNM: string;
    CNO: string;
    EPPASSDATE: string;
    EPPERSONNM: string;
    EPPROCGTMGNO: string;
    EPBIRTHDAY: string;
    BIRTHDAY: string;
    EPSUCCESSIONGUBUN: string;
    EPYEAR: string;
    ESGUBUN: string;
    ESSTUDENT: string;
    EPMGNO: string;
}

export interface Ids_ioCustomerInfo {
    AGNM: string;
    CAGGUBUN: string;
    CAGMGNO: string;
    CBMGNO: string;
    CCOCD: string;
    CCOURSECD: string;
    CDELDATE: string;
    CDELGUBUN: string;
    CEDUPOSTADDR1: string;
    CEDUPOSTADDR2: string;
    CEDUPOSTGUBUN: string;
    CEDUPOSTPLACE: string;
    CEDUPOSTZIPCD: string;
    CEXCEPTDATE: string;
    CEXCEPTGUBUN: string;
    CFEEPOSTADDR1: string;
    CFEEPOSTADDR2: string;
    CFEEPOSTGUBUN: string;
    CFEEPOSTPLACE: string;
    CFEEPOSTZIPCD: string;
    CFEEYYMM: string;
    CFIREMGNO: string;
    CFMHMGNO: string;
    CFMHSEQ: string;
    CGATEWAYPK1: string;
    CGATEWAYPK2: string;
    CGATEWAYPK3: string;
    CGCOURSECD: string;
    CGTMGNO: string;
    CLASTADDSEQ: string;
    CLASTPRSEQ: string;
    CMGNO: string;
    CNO: string;
    COBMGNO: string;
    COLDMGNO: string;
    COVERGUBUN: string;
    CPERSONGUBUN: string;
    CPOSTREQGUBUN: string;
    CREGCD: string;
    CREGISTERYYMM: string;
    CSTATUSDATE: string;
    CSTATUSGUBUN: string;
    CSTATUSREASONCD: string;
    MMCNT: string;
    CFEEADDRGUBUN: string;
    CFEEROADADDR1: string;
    CFEEROADADDR2: string;
    CEDUADDRGUBUN: string;
    CEDUROADADDR1: string;
    CEDUROADADDR2: string;
    CRFEEPNUCD: string;
    CRFEEROADBUILDMGNO: string;
    CRFEEROADDETAIL: string;
    CRFEEROADREMAIN: string;
    CRFEESANGUBUN: string;
    CRFEEMAINBUNJI: string;
    CRFEESUBBUNJI: string;
    CRFEEBUILDNM: string;
    CRFEEADDRETC: string;
    CREDUPNUCD: string;
    CREDUROADBUILDMGNO: string;
    CREDUROADDETAIL: string;
    CREDUROADREMAIN: string;
    CREDUSANGUBUN: string;
    CREDUMAINBUNJI: string;
    CREDUSUBBUNJI: string;
    CREDUBUILDNM: string;
    CREDUADDRETC: string;
    CRCONVPGM: string;
    CRCONVFEESTATUS: string;
    CRCONVEDUSTATUS: string;
    CRECEIVEEXCEPTGUBUN: string;
    CEDUEXPIREDATE: string;
    CMAINCMGNO: string;
    CELECTQUALIFY: string;
    CTECHBOOKEXCEPTGUBUN: string;
    CTECHBOOKEXCEPTDATE: string;
    MFPIS1: string;
    CSUPPOTERCNT: string;
    OVERMINAPFEE: string;
    DUPLCNT: string;
    CEDUEXPIREGUBUN: string;
    TJEDUEXPIREDATE: string;
}

export interface Ids_ioManagerInfo {
    FMAUTHGUBUN: string;
    FMBUILDINGNM: string;
    FMCMGNO: string;
    FMCOURSECD: string;
    FMHADDR1: string;
    FMHADDR2: string;
    FMHADDRGUBUN: string;
    FMHBULDADDR: string;
    FMHBULDNM: string;
    FMHBUNJI1: string;
    FMHBUNJI2: string;
    FMHDONG: string;
    FMHEMAILDOMAIN: string;
    FMHEMAILID: string;
    FMHENDDATE: string;
    FMHENDGUBUN: string;
    FMHENDSYSDATE: string;
    FMHETCADDR: string;
    FMHFMMGNO: string;
    FMHHPTEL: string;
    FMHOLDINFO: string;
    FMHSEQ: string;
    FMHSTARTDATE: string;
    FMHTEL: string;
    FMHZIPCD: string;
    FMLASTFMHSEQ: string;
    FMMGNO: string;
    FMNM: string;
    FMRESIDENTERR: string;
    FMBIRTHDAY: string;
    IIDIRPATH: string;
    IIREALNM: string;
    IISAVENM: string;
    FMHROADADDR1: string;
    FMHROADADDR2: string;
    FMHRPNUCD: string;
    FMHRROADBUILDMGNO: string;
    FMHRROADDETAIL: string;
    FMHRROADREMAIN: string;
    FMHRSANGUBUN: string;
    FMHRMAINBUNJI: string;
    FMHRSUBBUNJI: string;
    FMHRBUILDNM: string;
    FMHRADDRETC: string;
    FMHRCONVPGM: string;
    FMHRCONVSTATUS: string;
    FMHLICENSENO: string;
    FMPERSONKEY: string;
    PDI: string;
}

export interface Ids_ioLicenseInfo {
    OLFMMGNO: string;
    OLDATE: string;
    OLHCD: string;
    OLHNM: string;
    OLNO: string;
    OLSEQ: string;
}

export interface Ids_ioOwnerInfo {
    OBMGNO: string;
    OGUBUN: string;
    OHPTEL: string;
    ONM: string;
    OREMARK: string;
    OSEQ: string;
    OTEL: string;
}

export interface Ids_ioAdditionInfo {
    ADCMGNO: string;
    ADCONTENT: string;
    ADDELGUBUN: string;
    ADCD: string;
    ADSEQ: string;
}

export interface Ids_ioOverBizInfo {
}

export interface Ids_ioCustomerFeeInfo {
}

export interface Ids_oAddPost {
    CD: string;
    DATA: string;
}

export interface Ids_oDetailCourse {
    CD: string;
    DATA: string;
    GCD: string;
}

export interface Ids_oCustomerStatus {
    CD: string;
    DATA: string;
}

export interface Ids_oAddition {
    CD: string;
    DATA: string;
}

export interface Ids_oOwnerGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oLicenseGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oEduStudentGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oPersonGubun {
    CD: string;
    DATA: string;
    PCD: string;
}

export interface Ids_oBizCd {
    CD: string;
    DATA: string;
}

export interface Ids_oObjectMgno {
    CMGNO: string;
    CNO: string;
    CREGCD: string;
    CBMGNO: string;
    CGTMGNO: string;
    CCOURSECD: string;
}

export interface Ids_oJibuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oBuildingSeq {
    SEQ: string;
}

export interface Ids_oCustomerSeq {
    SEQ: string;
}

export interface Ids_oFireManagerSeq {
    SEQ: string;
}

export interface Ids_oTest {
    BD: string;
    CM: string;
    FM: string;
    BBO: string;
    BBD: string;
    BBT: string;
    CMA: string;
    FML: string;
}

export interface Ids_oStatusReason {
    CD: string;
    DATA: string;
}

export interface Ids_oCount {
    CNT: string;
}

export interface Ids_oSunapGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oFireCd {
    CD: string;
    DATA: string;
    JIBUCD: string;
}

export interface Ids_oFireCenterCd {
    CD: string;
    DATA: string;
    UPCD: string;
}

export interface Ids_oAgencyYn {
    CD: string;
    DATA: string;
}

export interface Ids_oManagerInfoTmp {
    FMAUTHGUBUN: string;
    FMBUILDINGNM: string;
    FMCMGNO: string;
    FMCOURSECD: string;
    FMHADDR1: string;
    FMHADDR2: string;
    FMHADDRGUBUN: string;
    FMHBULDADDR: string;
    FMHBULDNM: string;
    FMHBUNJI1: string;
    FMHBUNJI2: string;
    FMHDONG: string;
    FMHEMAILDOMAIN: string;
    FMHEMAILID: string;
    FMHENDDATE: string;
    FMHENDGUBUN: string;
    FMHENDSYSDATE: string;
    FMHETCADDR: string;
    FMHFMMGNO: string;
    FMHHPTEL: string;
    FMHOLDINFO: string;
    FMHRI: string;
    FMHROADNM: string;
    FMHSANGUBUN: string;
    FMHSEQ: string;
    FMHSIDO: string;
    FMHSIGUNGU: string;
    FMHSTARTDATE: string;
    FMHTEL: string;
    FMHZIPCD: string;
    FMLASTFMHSEQ: string;
    FMMGNO: string;
    FMNM: string;
    FMRESIDENTERR: string;
    FMBIRTHDAY: string;
    BIRTHDAY: string;
    IIDIRPATH: string;
    IIREALNM: string;
    IISAVENM: string;
}

export interface Ids_oSPMain {
    O_NEWFMMGNO: string;
    O_NEWFMHSEQ: string;
    O_OBMGNO: string;
    O_STATUS: string;
}

export interface Ids_oEduSuccessGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSPMainIN {
    O_NEWFMMGNO: string;
    O_NEWFMHSEQ: string;
    O_OBMGNO: string;
    O_STATUS: string;
}

export interface Ids_oOverBizProc {
}

export interface Ids_iCustomerInfoTmp {
    AGNM: string;
    CAGGUBUN: string;
    CAGMGNO: string;
    CBMGNO: string;
    CCOCD: string;
    CCOURSECD: string;
    CDELDATE: string;
    CDELGUBUN: string;
    CEDUPOSTADDR1: string;
    CEDUPOSTADDR2: string;
    CEDUPOSTGUBUN: string;
    CEDUPOSTPLACE: string;
    CEDUPOSTZIPCD: string;
    CEXCEPTDATE: string;
    CEXCEPTGUBUN: string;
    CFEEPOSTADDR1: string;
    CFEEPOSTADDR2: string;
    CFEEPOSTGUBUN: string;
    CFEEPOSTPLACE: string;
    CFEEPOSTZIPCD: string;
    CFEEYYMM: string;
    CFIREMGNO: string;
    CFMHMGNO: string;
    CFMHSEQ: string;
    CGATEWAYPK1: string;
    CGATEWAYPK2: string;
    CGATEWAYPK3: string;
    CGCOURSECD: string;
    CGTMGNO: string;
    CLASTADDSEQ: string;
    CLASTPRSEQ: string;
    CMGNO: string;
    CNO: string;
    COBMGNO: string;
    COLDMGNO: string;
    COVERGUBUN: string;
    CPERSONGUBUN: string;
    CPOSTREQGUBUN: string;
    CREGCD: string;
    CREGISTERYYMM: string;
    CSTATUSDATE: string;
    CSTATUSGUBUN: string;
    CSTATUSREASONCD: string;
    CFEEADDRGUBUN: string;
    CFEEROADADDR1: string;
    CFEEROADADDR2: string;
    CEDUADDRGUBUN: string;
    CEDUROADADDR1: string;
    CEDUROADADDR2: string;
    CRFEEPNUCD: string;
    CRFEEROADBUILDMGNO: string;
    CRFEEROADDETAIL: string;
    CRFEEROADREMAIN: string;
    CRFEESANGUBUN: string;
    CRFEEMAINBUNJI: string;
    CRFEESUBBUNJI: string;
    CRFEEBUILDNM: string;
    CRFEEADDRETC: string;
    CREDUPNUCD: string;
    CREDUROADBUILDMGNO: string;
    CREDUROADDETAIL: string;
    CREDUROADREMAIN: string;
    CREDUSANGUBUN: string;
    CREDUMAINBUNJI: string;
    CREDUSUBBUNJI: string;
    CREDUBUILDNM: string;
    CREDUADDRETC: string;
    CRCONVPGM: string;
    CRCONVFEESTATUS: string;
    CRCONVEDUSTATUS: string;
    CRECEIVEEXCEPTGUBUN: string;
    CEDUEXPIREDATE: string;
    CMAINCMGNO: string;
    CELECTQUALIFY: string;
    CTECHBOOKEXCEPTGUBUN: string;
    CTECHBOOKEXCEPTDATE: string;
    MFPIS1: string;
    CSUPPOTERCNT: string;
}

export interface Ids_iCustomerModifyHistory {
    CMHAFTERDATA: string;
    CMHBEFOREDATA: string;
    CMHCOLUMN: string;
    CMHGUBUN: string;
    CMHKEY: string;
    CMHWORKGUBUN: string;
}

export interface Ids_oModifyColumnList {
    TBLNM: string;
    COLNM: string;
    COLKORNM: string;
    COMBOGUBUN: string;
    INNERDSNM: string;
}

export interface Ids_oLicenseInfo {
    LISSUEDATE: string;
    LLCSNO: string;
    TCCOURSENM: string;
}

export interface Ids_oResidentNoErr {
    CD: string;
    DATA: string;
}

export interface Ids_AuthGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oTankAddrGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCustomerCompare {
    AGNM: string;
    CAGGUBUN: string;
    CAGMGNO: string;
    CBMGNO: string;
    CCOCD: string;
    CCOURSECD: string;
    CDELDATE: string;
    CDELGUBUN: string;
    CEDUPOSTADDR1: string;
    CEDUPOSTADDR2: string;
    CEDUPOSTGUBUN: string;
    CEDUPOSTPLACE: string;
    CEDUPOSTZIPCD: string;
    CEXCEPTDATE: string;
    CEXCEPTGUBUN: string;
    CFEEPOSTADDR1: string;
    CFEEPOSTADDR2: string;
    CFEEPOSTGUBUN: string;
    CFEEPOSTPLACE: string;
    CFEEPOSTZIPCD: string;
    CFEEYYMM: string;
    CFIREMGNO: string;
    CFMHMGNO: string;
    CFMHSEQ: string;
    CGATEWAYPK1: string;
    CGATEWAYPK2: string;
    CGATEWAYPK3: string;
    CGCOURSECD: string;
    CGTMGNO: string;
    CLASTADDSEQ: string;
    CLASTPRSEQ: string;
    CMGNO: string;
    CNO: string;
    COBMGNO: string;
    COLDMGNO: string;
    COVERGUBUN: string;
    CPERSONGUBUN: string;
    CPOSTREQGUBUN: string;
    CREGCD: string;
    CREGISTERYYMM: string;
    CSTATUSDATE: string;
    CSTATUSGUBUN: string;
    CSTATUSREASONCD: string;
}

export interface Ids_oAllObject {
}

export interface Ids_oBuildingInfoTmp {
    BADDR1: string;
    BADDR2: string;
    BADDRGUBUN: string;
    BAREA: string;
    BBIZCD: string;
    BBULDADDR: string;
    BBULDNM: string;
    BBUNJI1: string;
    BBUNJI2: string;
    BCONO: string;
    BDONG: string;
    BETCADDR: string;
    BFAX: string;
    BFIRECD: string;
    BFIREMAN: string;
    BMGNO: string;
    BNM: string;
    BRI: string;
    BROADNM: string;
    BSANGUBUN: string;
    BSIDO: string;
    BSIGUNGU: string;
    BSMOKEGUBUN: string;
    BTEL: string;
    BZIPCD: string;
    BFIREUPCD: string;
}

export interface Ids_ioNotOverBizFireManager {
}

export interface Ids_ioIsOverBizFireManager {
}

export interface Ids_oBnmCode {
}

export interface Ids_oFireBonbu {
    CD: string;
    DATA: string;
    JIBUCD: string;
}

export interface Ids_oEduConfirmPrint {
    ECMGNO: string;
    EDUNAME: string;
    COMPANY: string;
    NAME: string;
    CGROUPNM: string;
    EPBIRTHDAY: string;
    BIRTHDAY: string;
    EDUDATE: string;
    BIRTH: string;
    GTTEAMNM: string;
    MGNO: string;
    RULE: string;
}

export interface Ids_oAddr2 {
    CD: string;
    DATA: string;
}

export interface Ids_oReceiveExcept {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingPass {
}

export interface Ids_oMemberAgree {
    MHNAME: string;
    MHMEMCHK: string;
    MHMEMNO: string;
    MHCOMPANYNM: string;
    MHREGCD: string;
    MHSTATUS: string;
    MHREGDATE: string;
}

export interface Ids_oVirtualAccoutAllocation {
    Rtn_status: string;
}

export interface Ids_oVirtualAccoutOwnerNM {
}

export interface Ids_oElectQualify {
    PCD: string;
    CD: string;
    DATA: string;
}

export interface Ids_oTechReceiveExcept {
    CD: string;
    DATA: string;
}

export interface Ids_ioImageInfo {
}

export interface Ids_oINetChangeInfo {
}

export interface Ids_oRestoreStatus {
}

export interface Ids_oPostPlace {
    CD: string;
    DATA: string;
}

export interface Ids_oVirtualAccoutDelete {
    RTN_STATUS: string;
}

export interface Ids_oTrainingPassList {
}

export interface Ids_ioMEduData {
}

export interface Ids_ioMEduDataDetail {
}

export interface Ids_ioEduNoticeHistoryGetSysdate {
}

export interface Ids_oCallKeyIn {
}

export interface Ids_oExpireGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oEduType50 {
    CD: string;
    DATA: string;
}

export const useFrmcust0010MCustomerManagement = () => {
    const [ds_oAddrGubun, setds_oAddrGubun] = useState<Ids_oAddrGubun[]>([]);
    const [ds_ioDelete, setds_ioDelete] = useState<Ids_ioDelete[]>([]);
    const [ds_ioLevel, setds_ioLevel] = useState<Ids_ioLevel[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oBusinessGubun, setds_oBusinessGubun] = useState<Ids_oBusinessGubun[]>([]);
    const [ds_ioYn, setds_ioYn] = useState<Ids_ioYn[]>([]);
    const [ds_oEmailDomain, setds_oEmailDomain] = useState<Ids_oEmailDomain[]>([]);
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_ioDangerInfo, setds_ioDangerInfo] = useState<Ids_ioDangerInfo[]>([]);
    const [ds_ioTankInfo, setds_ioTankInfo] = useState<Ids_ioTankInfo[]>([]);
    const [ds_ioEducationPassInfo, setds_ioEducationPassInfo] = useState<Ids_ioEducationPassInfo[]>([]);
    const [ds_ioCustomerInfo, setds_ioCustomerInfo] = useState<Ids_ioCustomerInfo[]>([]);
    const [ds_ioManagerInfo, setds_ioManagerInfo] = useState<Ids_ioManagerInfo[]>([]);
    const [ds_ioLicenseInfo, setds_ioLicenseInfo] = useState<Ids_ioLicenseInfo[]>([]);
    const [ds_ioOwnerInfo, setds_ioOwnerInfo] = useState<Ids_ioOwnerInfo[]>([]);
    const [ds_ioAdditionInfo, setds_ioAdditionInfo] = useState<Ids_ioAdditionInfo[]>([]);
    const [ds_ioOverBizInfo, setds_ioOverBizInfo] = useState<Ids_ioOverBizInfo[]>([]);
    const [ds_ioCustomerFeeInfo, setds_ioCustomerFeeInfo] = useState<Ids_ioCustomerFeeInfo[]>([]);
    const [ds_oAddPost, setds_oAddPost] = useState<Ids_oAddPost[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_oCustomerStatus, setds_oCustomerStatus] = useState<Ids_oCustomerStatus[]>([]);
    const [ds_oAddition, setds_oAddition] = useState<Ids_oAddition[]>([]);
    const [ds_oOwnerGubun, setds_oOwnerGubun] = useState<Ids_oOwnerGubun[]>([]);
    const [ds_oLicenseGubun, setds_oLicenseGubun] = useState<Ids_oLicenseGubun[]>([]);
    const [ds_oEduStudentGubun, setds_oEduStudentGubun] = useState<Ids_oEduStudentGubun[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_oPersonGubun, setds_oPersonGubun] = useState<Ids_oPersonGubun[]>([]);
    const [ds_oBizCd, setds_oBizCd] = useState<Ids_oBizCd[]>([]);
    const [ds_oObjectMgno, setds_oObjectMgno] = useState<Ids_oObjectMgno[]>([]);
    const [ds_oJibuGubun, setds_oJibuGubun] = useState<Ids_oJibuGubun[]>([]);
    const [ds_oBuildingSeq, setds_oBuildingSeq] = useState<Ids_oBuildingSeq[]>([]);
    const [ds_oCustomerSeq, setds_oCustomerSeq] = useState<Ids_oCustomerSeq[]>([]);
    const [ds_oFireManagerSeq, setds_oFireManagerSeq] = useState<Ids_oFireManagerSeq[]>([]);
    const [ds_oTest, setds_oTest] = useState<Ids_oTest[]>([]);
    const [ds_oStatusReason, setds_oStatusReason] = useState<Ids_oStatusReason[]>([]);
    const [ds_oCount, setds_oCount] = useState<Ids_oCount[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oAgencyYn, setds_oAgencyYn] = useState<Ids_oAgencyYn[]>([]);
    const [ds_oManagerInfoTmp, setds_oManagerInfoTmp] = useState<Ids_oManagerInfoTmp[]>([]);
    const [ds_oSPMain, setds_oSPMain] = useState<Ids_oSPMain[]>([]);
    const [ds_oEduSuccessGubun, setds_oEduSuccessGubun] = useState<Ids_oEduSuccessGubun[]>([]);
    const [ds_oSPMainIN, setds_oSPMainIN] = useState<Ids_oSPMainIN[]>([]);
    const [ds_oOverBizProc, setds_oOverBizProc] = useState<Ids_oOverBizProc[]>([]);
    const [ds_iCustomerInfoTmp, setds_iCustomerInfoTmp] = useState<Ids_iCustomerInfoTmp[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_oModifyColumnList, setds_oModifyColumnList] = useState<Ids_oModifyColumnList[]>([]);
    const [ds_oLicenseInfo, setds_oLicenseInfo] = useState<Ids_oLicenseInfo[]>([]);
    const [ds_oResidentNoErr, setds_oResidentNoErr] = useState<Ids_oResidentNoErr[]>([]);
    const [ds_AuthGubun, setds_AuthGubun] = useState<Ids_AuthGubun[]>([]);
    const [ds_oTankAddrGubun, setds_oTankAddrGubun] = useState<Ids_oTankAddrGubun[]>([]);
    const [ds_oCustomerCompare, setds_oCustomerCompare] = useState<Ids_oCustomerCompare[]>([]);
    const [ds_oAllObject, setds_oAllObject] = useState<Ids_oAllObject[]>([]);
    const [ds_oBuildingInfoTmp, setds_oBuildingInfoTmp] = useState<Ids_oBuildingInfoTmp[]>([]);
    const [ds_ioNotOverBizFireManager, setds_ioNotOverBizFireManager] = useState<Ids_ioNotOverBizFireManager[]>([]);
    const [ds_ioIsOverBizFireManager, setds_ioIsOverBizFireManager] = useState<Ids_ioIsOverBizFireManager[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oFireBonbu, setds_oFireBonbu] = useState<Ids_oFireBonbu[]>([]);
    const [ds_oEduConfirmPrint, setds_oEduConfirmPrint] = useState<Ids_oEduConfirmPrint[]>([]);
    const [ds_oAddr2, setds_oAddr2] = useState<Ids_oAddr2[]>([]);
    const [ds_oReceiveExcept, setds_oReceiveExcept] = useState<Ids_oReceiveExcept[]>([]);
    const [ds_oTrainingPass, setds_oTrainingPass] = useState<Ids_oTrainingPass[]>([]);
    const [ds_oMemberAgree, setds_oMemberAgree] = useState<Ids_oMemberAgree[]>([]);
    const [ds_oVirtualAccoutAllocation, setds_oVirtualAccoutAllocation] = useState<Ids_oVirtualAccoutAllocation[]>([]);
    const [ds_oVirtualAccoutOwnerNM, setds_oVirtualAccoutOwnerNM] = useState<Ids_oVirtualAccoutOwnerNM[]>([]);
    const [ds_oElectQualify, setds_oElectQualify] = useState<Ids_oElectQualify[]>([]);
    const [ds_oTechReceiveExcept, setds_oTechReceiveExcept] = useState<Ids_oTechReceiveExcept[]>([]);
    const [ds_ioImageInfo, setds_ioImageInfo] = useState<Ids_ioImageInfo[]>([]);
    const [ds_oINetChangeInfo, setds_oINetChangeInfo] = useState<Ids_oINetChangeInfo[]>([]);
    const [ds_oRestoreStatus, setds_oRestoreStatus] = useState<Ids_oRestoreStatus[]>([]);
    const [ds_oPostPlace, setds_oPostPlace] = useState<Ids_oPostPlace[]>([]);
    const [ds_oVirtualAccoutDelete, setds_oVirtualAccoutDelete] = useState<Ids_oVirtualAccoutDelete[]>([]);
    const [ds_oTrainingPassList, setds_oTrainingPassList] = useState<Ids_oTrainingPassList[]>([]);
    const [ds_ioMEduData, setds_ioMEduData] = useState<Ids_ioMEduData[]>([]);
    const [ds_ioMEduDataDetail, setds_ioMEduDataDetail] = useState<Ids_ioMEduDataDetail[]>([]);
    const [ds_ioEduNoticeHistoryGetSysdate, setds_ioEduNoticeHistoryGetSysdate] = useState<Ids_ioEduNoticeHistoryGetSysdate[]>([]);
    const [ds_oCallKeyIn, setds_oCallKeyIn] = useState<Ids_oCallKeyIn[]>([]);
    const [ds_oExpireGubun, setds_oExpireGubun] = useState<Ids_oExpireGubun[]>([]);
    const [ds_oEduType50, setds_oEduType50] = useState<Ids_oEduType50[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oAddrGubun([]);
            setds_ioDelete([]);
            setds_ioLevel([]);
            setds_oCourse([]);
            setds_oAddr([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_oBusinessGubun([]);
            setds_ioYn([]);
            setds_oEmailDomain([]);
            setds_ioBuildingInfo([]);
            setds_ioDangerInfo([]);
            setds_ioTankInfo([]);
            setds_ioEducationPassInfo([]);
            setds_ioCustomerInfo([]);
            setds_ioManagerInfo([]);
            setds_ioLicenseInfo([]);
            setds_ioOwnerInfo([]);
            setds_ioAdditionInfo([]);
            setds_ioOverBizInfo([]);
            setds_ioCustomerFeeInfo([]);
            setds_oAddPost([]);
            setds_oDetailCourse([]);
            setds_oCustomerStatus([]);
            setds_oAddition([]);
            setds_oOwnerGubun([]);
            setds_oLicenseGubun([]);
            setds_oEduStudentGubun([]);
            setds_oEduGubun([]);
            setds_oPersonGubun([]);
            setds_oBizCd([]);
            setds_oObjectMgno([]);
            setds_oJibuGubun([]);
            setds_oBuildingSeq([]);
            setds_oCustomerSeq([]);
            setds_oFireManagerSeq([]);
            setds_oTest([]);
            setds_oStatusReason([]);
            setds_oCount([]);
            setds_oSunapGubun([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oAgencyYn([]);
            setds_oManagerInfoTmp([]);
            setds_oSPMain([]);
            setds_oEduSuccessGubun([]);
            setds_oSPMainIN([]);
            setds_oOverBizProc([]);
            setds_iCustomerInfoTmp([]);
            setds_iCustomerModifyHistory([]);
            setds_oModifyColumnList([]);
            setds_oLicenseInfo([]);
            setds_oResidentNoErr([]);
            setds_AuthGubun([]);
            setds_oTankAddrGubun([]);
            setds_oCustomerCompare([]);
            setds_oAllObject([]);
            setds_oBuildingInfoTmp([]);
            setds_ioNotOverBizFireManager([]);
            setds_ioIsOverBizFireManager([]);
            setds_oBnmCode([]);
            setds_oFireBonbu([]);
            setds_oEduConfirmPrint([]);
            setds_oAddr2([]);
            setds_oReceiveExcept([]);
            setds_oTrainingPass([]);
            setds_oMemberAgree([]);
            setds_oVirtualAccoutAllocation([]);
            setds_oVirtualAccoutOwnerNM([]);
            setds_oElectQualify([]);
            setds_oTechReceiveExcept([]);
            setds_ioImageInfo([]);
            setds_oINetChangeInfo([]);
            setds_oRestoreStatus([]);
            setds_oPostPlace([]);
            setds_oVirtualAccoutDelete([]);
            setds_oTrainingPassList([]);
            setds_ioMEduData([]);
            setds_ioMEduDataDetail([]);
            setds_ioEduNoticeHistoryGetSysdate([]);
            setds_oCallKeyIn([]);
            setds_oExpireGubun([]);
            setds_oEduType50([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAddRow2_OnClick = () => {
        console.log('btnAddRow2_OnClick clicked');
    };
    const btnAuthResidentNo_OnClick = () => {
        console.log('btnAuthResidentNo_OnClick clicked');
    };
    const btnChangeBuilding_OnClick = () => {
        console.log('btnChangeBuilding_OnClick clicked');
    };
    const btnConcurrentH_OnClick = () => {
        console.log('btnConcurrentH_OnClick clicked');
    };
    const btnCustFee_OnClick = () => {
        console.log('btnCustFee_OnClick clicked');
    };
    const btnCustomerFee_OnClick = () => {
        console.log('btnCustomerFee_OnClick clicked');
    };
    const btnDelRow2_OnClick = () => {
        console.log('btnDelRow2_OnClick clicked');
    };
    const btnEduDataHList_OnClick = () => {
        console.log('btnEduDataHList_OnClick clicked');
    };
    const btnEduDetailInfo1_OnClick = () => {
        console.log('btnEduDetailInfo1_OnClick clicked');
    };
    const btnEduJubsu_OnClick = () => {
        console.log('btnEduJubsu_OnClick clicked');
    };
    const btnEduNoti_OnClick = () => {
        console.log('btnEduNoti_OnClick clicked');
    };
    const btnEducationInfo_OnClick = () => {
        console.log('btnEducationInfo_OnClick clicked');
    };
    const btnFireDeptList_OnClick = () => {
        console.log('btnFireDeptList_OnClick clicked');
    };
    const btnFireSearch_OnClick = () => {
        console.log('btnFireSearch_OnClick clicked');
    };
    const btnKeyinHP_OnClick = () => {
        console.log('btnKeyinHP_OnClick clicked');
    };
    const btnPostGo_OnClick = () => {
        console.log('btnPostGo_OnClick clicked');
    };
    const btnRestore_OnClick = () => {
        console.log('btnRestore_OnClick clicked');
    };
    const btnSaveAddInfo_OnClick = () => {
        console.log('btnSaveAddInfo_OnClick clicked');
    };
    const btnSearchAddInfoH_OnClick = () => {
        console.log('btnSearchAddInfoH_OnClick clicked');
    };
    const btnSearchAgency_OnClick = () => {
        console.log('btnSearchAgency_OnClick clicked');
    };
    const btnSearchBuilding_OnClick = () => {
        console.log('btnSearchBuilding_OnClick clicked');
    };
    const btnSearchChangeH_OnClick = () => {
        console.log('btnSearchChangeH_OnClick clicked');
    };
    const btnSearchCivilAppeal_OnClick = () => {
        console.log('btnSearchCivilAppeal_OnClick clicked');
    };
    const btnSearchFireDept_OnClick = () => {
        console.log('btnSearchFireDept_OnClick clicked');
    };
    const btnSearchManagerList_OnClick = () => {
        console.log('btnSearchManagerList_OnClick clicked');
    };
    const btnSearchOldZipCode_OnClick = () => {
        console.log('btnSearchOldZipCode_OnClick clicked');
    };
    const btnShowVirtualAccount_OnClick = () => {
        console.log('btnShowVirtualAccount_OnClick clicked');
    };
    const btnSuppoterView_OnClick = () => {
        console.log('btnSuppoterView_OnClick clicked');
    };
    const btnUpdateManagerInfo_OnClick = () => {
        console.log('btnUpdateManagerInfo_OnClick clicked');
    };
    const btnUpdateSameManagerInfo_OnClick = () => {
        console.log('btnUpdateSameManagerInfo_OnClick clicked');
    };
    const btnVAccountCno_OnClick = () => {
        console.log('btnVAccountCno_OnClick clicked');
    };
    const btn_BeforeCNo_OnClick = () => {
        console.log('btn_BeforeCNo_OnClick clicked');
    };
    const btn_NextCNo_OnClick = () => {
        console.log('btn_NextCNo_OnClick clicked');
    };
    const btn_NextOldCNo_OnClick = () => {
        console.log('btn_NextOldCNo_OnClick clicked');
    };
    const btn_SearchFireManager_OnClick = () => {
        console.log('btn_SearchFireManager_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_GroupSearch = () => {
        console.log('lfn_GroupSearch clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_SupporterInput = () => {
        console.log('lfn_SupporterInput clicked');
    };
    const tabTab3_tabpgTab3Page1_btnImageZoom_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnImageZoom_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_btnSMSHist_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnSMSHist_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_btnSearchOldPostZipCode_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnSearchOldPostZipCode_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_btnSendSms_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnSendSms_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_imgPicture_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_imgPicture_OnClick clicked');
    };

    return {
        isLoading,
        ds_oAddrGubun,
        ds_ioDelete,
        ds_ioLevel,
        ds_oCourse,
        ds_oAddr,
        ds_oRegion,
        ds_oJibu,
        ds_oBusinessGubun,
        ds_ioYn,
        ds_oEmailDomain,
        ds_ioBuildingInfo,
        ds_ioDangerInfo,
        ds_ioTankInfo,
        ds_ioEducationPassInfo,
        ds_ioCustomerInfo,
        ds_ioManagerInfo,
        ds_ioLicenseInfo,
        ds_ioOwnerInfo,
        ds_ioAdditionInfo,
        ds_ioOverBizInfo,
        ds_ioCustomerFeeInfo,
        ds_oAddPost,
        ds_oDetailCourse,
        ds_oCustomerStatus,
        ds_oAddition,
        ds_oOwnerGubun,
        ds_oLicenseGubun,
        ds_oEduStudentGubun,
        ds_oEduGubun,
        ds_oPersonGubun,
        ds_oBizCd,
        ds_oObjectMgno,
        ds_oJibuGubun,
        ds_oBuildingSeq,
        ds_oCustomerSeq,
        ds_oFireManagerSeq,
        ds_oTest,
        ds_oStatusReason,
        ds_oCount,
        ds_oSunapGubun,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oAgencyYn,
        ds_oManagerInfoTmp,
        ds_oSPMain,
        ds_oEduSuccessGubun,
        ds_oSPMainIN,
        ds_oOverBizProc,
        ds_iCustomerInfoTmp,
        ds_iCustomerModifyHistory,
        ds_oModifyColumnList,
        ds_oLicenseInfo,
        ds_oResidentNoErr,
        ds_AuthGubun,
        ds_oTankAddrGubun,
        ds_oCustomerCompare,
        ds_oAllObject,
        ds_oBuildingInfoTmp,
        ds_ioNotOverBizFireManager,
        ds_ioIsOverBizFireManager,
        ds_oBnmCode,
        ds_oFireBonbu,
        ds_oEduConfirmPrint,
        ds_oAddr2,
        ds_oReceiveExcept,
        ds_oTrainingPass,
        ds_oMemberAgree,
        ds_oVirtualAccoutAllocation,
        ds_oVirtualAccoutOwnerNM,
        ds_oElectQualify,
        ds_oTechReceiveExcept,
        ds_ioImageInfo,
        ds_oINetChangeInfo,
        ds_oRestoreStatus,
        ds_oPostPlace,
        ds_oVirtualAccoutDelete,
        ds_oTrainingPassList,
        ds_ioMEduData,
        ds_ioMEduDataDetail,
        ds_ioEduNoticeHistoryGetSysdate,
        ds_oCallKeyIn,
        ds_oExpireGubun,
        ds_oEduType50,
        btnAddRow2_OnClick,
        btnAuthResidentNo_OnClick,
        btnChangeBuilding_OnClick,
        btnConcurrentH_OnClick,
        btnCustFee_OnClick,
        btnCustomerFee_OnClick,
        btnDelRow2_OnClick,
        btnEduDataHList_OnClick,
        btnEduDetailInfo1_OnClick,
        btnEduJubsu_OnClick,
        btnEduNoti_OnClick,
        btnEducationInfo_OnClick,
        btnFireDeptList_OnClick,
        btnFireSearch_OnClick,
        btnKeyinHP_OnClick,
        btnPostGo_OnClick,
        btnRestore_OnClick,
        btnSaveAddInfo_OnClick,
        btnSearchAddInfoH_OnClick,
        btnSearchAgency_OnClick,
        btnSearchBuilding_OnClick,
        btnSearchChangeH_OnClick,
        btnSearchCivilAppeal_OnClick,
        btnSearchFireDept_OnClick,
        btnSearchManagerList_OnClick,
        btnSearchOldZipCode_OnClick,
        btnShowVirtualAccount_OnClick,
        btnSuppoterView_OnClick,
        btnUpdateManagerInfo_OnClick,
        btnUpdateSameManagerInfo_OnClick,
        btnVAccountCno_OnClick,
        btn_BeforeCNo_OnClick,
        btn_NextCNo_OnClick,
        btn_NextOldCNo_OnClick,
        btn_SearchFireManager_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_GroupSearch,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        lfn_SupporterInput,
        tabTab3_tabpgTab3Page1_btnImageZoom_OnClick,
        tabTab3_tabpgTab3Page1_btnSMSHist_OnClick,
        tabTab3_tabpgTab3Page1_btnSearchOldPostZipCode_OnClick,
        tabTab3_tabpgTab3Page1_btnSendSms_OnClick,
        tabTab3_tabpgTab3Page1_imgPicture_OnClick,
    };
};