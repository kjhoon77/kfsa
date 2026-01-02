// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oBizCd {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
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

export interface Ids_oDetailCourse {
    CD: string;
    DATA: string;
    GCD: string;
}

export interface Ids_oAllObject {
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
    BFIREBONBUCD: string;
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
    FMPERSONKEY: string;
    IIDIRPATH: string;
    IIREALNM: string;
    IISAVENM: string;
}

export interface Ids_ioAdditionInfo {
    ADCMGNO: string;
    ADCONTENT: string;
    ADDELGUBUN: string;
    ADCD: string;
    ADSEQ: string;
}

export interface Ids_oAddr {
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

export interface Ids_ioCustomerInfoTmp {
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

export interface Ids_ioManagerInfoTmp {
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
    FMPERSONKEY: string;
    IIDIRPATH: string;
    IIREALNM: string;
    IISAVENM: string;
}

export interface Ids_oBnmCode {
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

export interface Ids_oCustomerStatus {
    CD: string;
    DATA: string;
}

export interface Ids_ioMatchInfo {
    MKFSAPK: string;
    MFPIS1: string;
    MFPIS2: string;
    MFPIS3: string;
    MFPIS4: string;
    MFPIS5: string;
    MFPIS6: string;
}

export interface Ids_ioBizCdMatch {
    CCBIZCD: string;
    CCBIZCDNM: string;
}

export interface Ids_oFireBonbuCd {
}

export interface Ids_ioManager {
    MMGNO: string;
    MNM: string;
    MBIRTHDAY: string;
    MPERSONKEY: string;
    FMLASTFMHSEQ: string;
    FMRESIDENTERR: string;
}

export interface Ids_oMemberStat {
    MHMEMCHK: string;
    MHNAME: string;
    MHPERSONKEY: string;
    MHREGDATE: string;
}

export interface Ids_ioOldCustomerInfo {
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

export interface Ids_ioOldManagerInfo {
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
    FMPERSONKEY: string;
    IIDIRPATH: string;
    IIREALNM: string;
    IISAVENM: string;
}

export interface Ids_oManagerList {
    BADDR1: string;
    BADDR2: string;
    BNM: string;
    BTEL: string;
    BZIPCD: string;
    CCOCD: string;
    CCOURSECD: string;
    CFIREMGNO: string;
    CGTMGNO: string;
    CNO: string;
    COVERCMGNO: string;
    CREGCD: string;
    CSTATUSGUBUN: string;
    EPPASSDATE: string;
    FMHSTARTDATE: string;
    FMNM: string;
    FMBIRTHDAY: string;
    BIRTHDAY: string;
    FMPERSONKEY: string;
    OLHNM: string;
}

export interface Ids_MemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oStatus {
}

export interface Ids_ioOtherLicenseInfo {
    OLFMMGNO: string;
    OLSEQ: string;
    OLHCD: string;
    OLNO: string;
    OLDATE: string;
    OLINGUBUN: string;
    OLNUM: string;
    OLHFPISNO: string;
}

export interface Ids_oOverBizProc {
}

export interface Ids_ioNotOverBizFireManager {
}

export interface Ids_ioIsOverBizFireManager {
}

export interface Ids_ioOldBuildingInfo {
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
    BFIREBONBUCD: string;
}

export interface Ids_ioDanManagerInfo {
    NM: string;
    IHIDNUM: string;
    CRQFC_CODE_NM: string;
    CRQFC_CODE: string;
    AP_APNTRLSOFC_DE: string;
    AP_PROCESS_DE: string;
    APNTRLSOFC_DATE: string;
    PROCESS_DATE: string;
    CRQFC_ACQDT: string;
    CRQFC_NO: string;
    CRQFC_ACQDATE: string;
    SEL: string;
}

export interface Ids_ioDangerInfo {
    DBMGNO: string;
    DPERMISSIONNO: string;
    DREMARK: string;
    DSEQ: string;
    SEL: string;
}

export interface Ids_ioDangerInfoSave {
    DBMGNO: string;
    DPERMISSIONNO: string;
    DREMARK: string;
    DSEQ: string;
    SEL: string;
}

export interface Ids_iCustomerModifyHistory {
    CMHAFTERDATA: string;
    CMHBEFOREDATA: string;
    CMHCOLUMN: string;
    CMHGUBUN: string;
    CMHKEY: string;
    CMHWORKGUBUN: string;
}

export interface Ids_ioLicenseInfo {
    OLFMMGNO: string;
    OLDATE: string;
    OLHCD: string;
    OLHNM: string;
    OLNO: string;
    OLSEQ: string;
}

export interface Ids_oModifyColumnList {
    TBLNM: string;
    COLNM: string;
    COLKORNM: string;
    COMBOGUBUN: string;
    INNERDSNM: string;
}

export interface Ids_ioFPISDanTankInfo {
}

export interface Ids_ioTankInfo {
    TBMGNO: string;
    TCARNO: string;
    TCARYEAR: string;
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
    TPARKPLACEADDRGUBUN: string;
    TPARKPLACEROADZIPCD: string;
    TPARKPLACEROADADDR1: string;
    TPARKPLACEROADADDR2: string;
    TINSTLRADDRGUBUN: string;
    TINSTLRROADZIPCD: string;
    TINSTLRROADADDR1: string;
    TINSTLRROADADDR2: string;
}

export interface Ids_oAddrGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust6301PDataConnectionTankManageNewSave = () => {
    const [ds_oBizCd, setds_oBizCd] = useState<Ids_oBizCd[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_oAllObject, setds_oAllObject] = useState<Ids_oAllObject[]>([]);
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_ioCustomerInfo, setds_ioCustomerInfo] = useState<Ids_ioCustomerInfo[]>([]);
    const [ds_ioManagerInfo, setds_ioManagerInfo] = useState<Ids_ioManagerInfo[]>([]);
    const [ds_ioAdditionInfo, setds_ioAdditionInfo] = useState<Ids_ioAdditionInfo[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oBuildingSeq, setds_oBuildingSeq] = useState<Ids_oBuildingSeq[]>([]);
    const [ds_oCustomerSeq, setds_oCustomerSeq] = useState<Ids_oCustomerSeq[]>([]);
    const [ds_oFireManagerSeq, setds_oFireManagerSeq] = useState<Ids_oFireManagerSeq[]>([]);
    const [ds_ioCustomerInfoTmp, setds_ioCustomerInfoTmp] = useState<Ids_ioCustomerInfoTmp[]>([]);
    const [ds_ioManagerInfoTmp, setds_ioManagerInfoTmp] = useState<Ids_ioManagerInfoTmp[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oCustomerStatus, setds_oCustomerStatus] = useState<Ids_oCustomerStatus[]>([]);
    const [ds_ioMatchInfo, setds_ioMatchInfo] = useState<Ids_ioMatchInfo[]>([]);
    const [ds_ioBizCdMatch, setds_ioBizCdMatch] = useState<Ids_ioBizCdMatch[]>([]);
    const [ds_oFireBonbuCd, setds_oFireBonbuCd] = useState<Ids_oFireBonbuCd[]>([]);
    const [ds_ioManager, setds_ioManager] = useState<Ids_ioManager[]>([]);
    const [ds_oMemberStat, setds_oMemberStat] = useState<Ids_oMemberStat[]>([]);
    const [ds_ioOldCustomerInfo, setds_ioOldCustomerInfo] = useState<Ids_ioOldCustomerInfo[]>([]);
    const [ds_ioOldManagerInfo, setds_ioOldManagerInfo] = useState<Ids_ioOldManagerInfo[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_MemberGubun, setds_MemberGubun] = useState<Ids_MemberGubun[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_ioOtherLicenseInfo, setds_ioOtherLicenseInfo] = useState<Ids_ioOtherLicenseInfo[]>([]);
    const [ds_oOverBizProc, setds_oOverBizProc] = useState<Ids_oOverBizProc[]>([]);
    const [ds_ioNotOverBizFireManager, setds_ioNotOverBizFireManager] = useState<Ids_ioNotOverBizFireManager[]>([]);
    const [ds_ioIsOverBizFireManager, setds_ioIsOverBizFireManager] = useState<Ids_ioIsOverBizFireManager[]>([]);
    const [ds_ioOldBuildingInfo, setds_ioOldBuildingInfo] = useState<Ids_ioOldBuildingInfo[]>([]);
    const [ds_ioDanManagerInfo, setds_ioDanManagerInfo] = useState<Ids_ioDanManagerInfo[]>([]);
    const [ds_ioDangerInfo, setds_ioDangerInfo] = useState<Ids_ioDangerInfo[]>([]);
    const [ds_ioDangerInfoSave, setds_ioDangerInfoSave] = useState<Ids_ioDangerInfoSave[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_ioLicenseInfo, setds_ioLicenseInfo] = useState<Ids_ioLicenseInfo[]>([]);
    const [ds_oModifyColumnList, setds_oModifyColumnList] = useState<Ids_oModifyColumnList[]>([]);
    const [ds_ioFPISDanTankInfo, setds_ioFPISDanTankInfo] = useState<Ids_ioFPISDanTankInfo[]>([]);
    const [ds_ioTankInfo, setds_ioTankInfo] = useState<Ids_ioTankInfo[]>([]);
    const [ds_oAddrGubun, setds_oAddrGubun] = useState<Ids_oAddrGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBizCd([]);
            setds_oCourse([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_oDetailCourse([]);
            setds_oAllObject([]);
            setds_ioBuildingInfo([]);
            setds_ioCustomerInfo([]);
            setds_ioManagerInfo([]);
            setds_ioAdditionInfo([]);
            setds_oAddr([]);
            setds_oBuildingSeq([]);
            setds_oCustomerSeq([]);
            setds_oFireManagerSeq([]);
            setds_ioCustomerInfoTmp([]);
            setds_ioManagerInfoTmp([]);
            setds_oBnmCode([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oCustomerStatus([]);
            setds_ioMatchInfo([]);
            setds_ioBizCdMatch([]);
            setds_oFireBonbuCd([]);
            setds_ioManager([]);
            setds_oMemberStat([]);
            setds_ioOldCustomerInfo([]);
            setds_ioOldManagerInfo([]);
            setds_oManagerList([]);
            setds_MemberGubun([]);
            setds_oStatus([]);
            setds_ioOtherLicenseInfo([]);
            setds_oOverBizProc([]);
            setds_ioNotOverBizFireManager([]);
            setds_ioIsOverBizFireManager([]);
            setds_ioOldBuildingInfo([]);
            setds_ioDanManagerInfo([]);
            setds_ioDangerInfo([]);
            setds_ioDangerInfoSave([]);
            setds_iCustomerModifyHistory([]);
            setds_ioLicenseInfo([]);
            setds_oModifyColumnList([]);
            setds_ioFPISDanTankInfo([]);
            setds_ioTankInfo([]);
            setds_oAddrGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnApply_OnClick = () => {
        console.log('btnApply_OnClick clicked');
    };
    const btnAuthResidentNo_OnClick = () => {
        console.log('btnAuthResidentNo_OnClick clicked');
    };
    const btnBuildingSearch_OnClick = () => {
        console.log('btnBuildingSearch_OnClick clicked');
    };
    const btnFPISInfo_OnClick = () => {
        console.log('btnFPISInfo_OnClick clicked');
    };
    const btnSearchInstlrZipCode_OnClick = () => {
        console.log('btnSearchInstlrZipCode_OnClick clicked');
    };
    const btnSearchParkZipCode_OnClick = () => {
        console.log('btnSearchParkZipCode_OnClick clicked');
    };
    const btnSearchZipCode1_OnClick = () => {
        console.log('btnSearchZipCode1_OnClick clicked');
    };
    const chkAddr_OnClick = () => {
        console.log('chkAddr_OnClick clicked');
    };
    const chkBNM_OnClick = () => {
        console.log('chkBNM_OnClick clicked');
    };
    const chkBuilding_OnClick = () => {
        console.log('chkBuilding_OnClick clicked');
    };
    const chkCustomer_OnClick = () => {
        console.log('chkCustomer_OnClick clicked');
    };
    const chkFMNM_OnClick = () => {
        console.log('chkFMNM_OnClick clicked');
    };
    const chkFMResidentno_OnClick = () => {
        console.log('chkFMResidentno_OnClick clicked');
    };
    const chkFMStartDate_OnClick = () => {
        console.log('chkFMStartDate_OnClick clicked');
    };
    const chkFeeYYMM_OnClick = () => {
        console.log('chkFeeYYMM_OnClick clicked');
    };
    const chkFireCenter_OnClick = () => {
        console.log('chkFireCenter_OnClick clicked');
    };
    const chkFireManager_OnClick = () => {
        console.log('chkFireManager_OnClick clicked');
    };
    const chkRegYYMM_OnClick = () => {
        console.log('chkRegYYMM_OnClick clicked');
    };
    const chkTel_OnClick = () => {
        console.log('chkTel_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_oBizCd,
        ds_oCourse,
        ds_oRegion,
        ds_oJibu,
        ds_oDetailCourse,
        ds_oAllObject,
        ds_ioBuildingInfo,
        ds_ioCustomerInfo,
        ds_ioManagerInfo,
        ds_ioAdditionInfo,
        ds_oAddr,
        ds_oBuildingSeq,
        ds_oCustomerSeq,
        ds_oFireManagerSeq,
        ds_ioCustomerInfoTmp,
        ds_ioManagerInfoTmp,
        ds_oBnmCode,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oCustomerStatus,
        ds_ioMatchInfo,
        ds_ioBizCdMatch,
        ds_oFireBonbuCd,
        ds_ioManager,
        ds_oMemberStat,
        ds_ioOldCustomerInfo,
        ds_ioOldManagerInfo,
        ds_oManagerList,
        ds_MemberGubun,
        ds_oStatus,
        ds_ioOtherLicenseInfo,
        ds_oOverBizProc,
        ds_ioNotOverBizFireManager,
        ds_ioIsOverBizFireManager,
        ds_ioOldBuildingInfo,
        ds_ioDanManagerInfo,
        ds_ioDangerInfo,
        ds_ioDangerInfoSave,
        ds_iCustomerModifyHistory,
        ds_ioLicenseInfo,
        ds_oModifyColumnList,
        ds_ioFPISDanTankInfo,
        ds_ioTankInfo,
        ds_oAddrGubun,
        btnApply_OnClick,
        btnAuthResidentNo_OnClick,
        btnBuildingSearch_OnClick,
        btnFPISInfo_OnClick,
        btnSearchInstlrZipCode_OnClick,
        btnSearchParkZipCode_OnClick,
        btnSearchZipCode1_OnClick,
        chkAddr_OnClick,
        chkBNM_OnClick,
        chkBuilding_OnClick,
        chkCustomer_OnClick,
        chkFMNM_OnClick,
        chkFMResidentno_OnClick,
        chkFMStartDate_OnClick,
        chkFeeYYMM_OnClick,
        chkFireCenter_OnClick,
        chkFireManager_OnClick,
        chkRegYYMM_OnClick,
        chkTel_OnClick,
        lfn_End,
        lfn_Save,
    };
};