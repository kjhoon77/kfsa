// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioChangeApplyGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioChangeMList {
}

export interface Ids_ioBangChangeHList {
    SEL: string;
    MMMGNO: string;
    MHSEQ: string;
    MMDBPROCDATE: string;
    MMBIZGUBUN: string;
    MHPROCGUBUN: string;
    MCPROCNM: string;
    MMCMGNO: string;
    MHBEFORE: string;
    MHAFTER: string;
    MHVALUE1: string;
    MHVALUE2: string;
    MHVALUE3: string;
    MMAPPLYGUBUN: string;
    APPLYGUBUN: string;
    MMREGDATE: string;
    PROCVALUE: string;
    PROCVALUECD: string;
    MHAPPLYGUBUN: string;
    RNUM: string;
}

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_ioJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioKFSAInfo {
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
    BINGUBUN: string;
    BSEARCHNM: string;
    BROADADDR1: string;
    BROADADDR2: string;
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
    FMNM: string;
    FMRESIDENTERR: string;
    FMBIRTHDAY: string;
    BIRTHDAY: string;
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

export interface Ids_ioRegionCdMatch {
    MRGTMGNO: string;
    MRREGCD: string;
}

export interface Ids_ioBizCdMatch {
    CCBIZCD: string;
    CCBIZCDNM: string;
}

export interface Ids_ioAllCode {
    GUBUN: string;
    CD: string;
    DATA: string;
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

export interface Ids_oBnmCode {
}

export interface Ids_oMemberStat {
    MHMEMCHK: string;
    MHNAME: string;
    MHPERSONKEY: string;
    MHREGDATE: string;
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

export interface Ids_ioManager {
    MMGNO: string;
    MNM: string;
    MBIRTHDAY: string;
    MPERSONKEY: string;
    FMLASTFMHSEQ: string;
    FMRESIDENTERR: string;
}

export interface Ids_oOverBizProc {
}

export interface Ids_iStatus {
    FMHSEQ: string;
    FMHENDGUBUN: string;
    FMHENDDATE: string;
}

export interface Ids_oFPISBangManager {
    NM: string;
    IHIDNUM: string;
    APNT_DE_8: string;
    BIRTHDAY: string;
    MOBLPHON: string;
}

export interface Ids_ioNotOverBizFireManager {
}

export interface Ids_ioIsOverBizFireManager {
}

export interface Ids_iCustomerModifyHistory {
    CMHAFTERDATA: string;
    CMHBEFOREDATA: string;
    CMHCOLUMN: string;
    CMHGUBUN: string;
    CMHKEY: string;
    CMHWORKGUBUN: string;
}

export interface Ids_oMatchChangeAddr {
    LEGALDONG_ADRES_NM: string;
    ADRES_LNBR: string;
}

export interface Ids_ioDangerChangeHList {
    SEL: string;
    MMMGNO: string;
    MHSEQ: string;
    MMDBPROCDATE: string;
    MMBIZGUBUN: string;
    MHPROCGUBUN: string;
    MCPROCNM: string;
    MMCMGNO: string;
    MHBEFORE: string;
    MHAFTER: string;
    MHVALUE1: string;
    MHVALUE2: string;
    MHVALUE3: string;
    MMAPPLYGUBUN: string;
    APPLYGUBUN: string;
    MMREGDATE: string;
    PROCVALUE: string;
    PROCVALUECD: string;
    MHAPPLYGUBUN: string;
    RNUM: string;
}

export interface Ids_oFPISDangerManager {
    NM: string;
    IHIDNUM: string;
    DMINDATE: string;
    BIRTHDAY: string;
    MOBLPHON: string;
}

export interface Ids_ioDangerInfo {
    DBMGNO: string;
    OLDDPERMISSIONNO: string;
    NEWDPERMISSIONNO: string;
    DREMARK: string;
}

export interface Ids_oFireManagerInfo {
}

export interface Ids_ioApplyGubun {
    APPLYCD: string;
    APPLYNM: string;
}

export interface Ids_ioSokiChangeHList {
    SEL: string;
    MMMGNO: string;
    MHSEQ: string;
    MMDBPROCDATE: string;
    MMBIZGUBUN: string;
    MHPROCGUBUN: string;
    MCPROCNM: string;
    MMCMGNO: string;
    MHBEFORE: string;
    MHAFTER: string;
    MHVALUE1: string;
    MHVALUE2: string;
    MHVALUE3: string;
    MMAPPLYGUBUN: string;
    APPLYGUBUN: string;
    MMREGDATE: string;
    PROCVALUE: string;
    PROCVALUECD: string;
    MHAPPLYGUBUN: string;
    RNUM: string;
}

export interface Ids_ioTankChangeHList {
    SEL: string;
    MMMGNO: string;
    MHSEQ: string;
    MMDBPROCDATE: string;
    MMBIZGUBUN: string;
    MHPROCGUBUN: string;
    MCPROCNM: string;
    MMCMGNO: string;
    MHBEFORE: string;
    MHAFTER: string;
    MHVALUE1: string;
    MHVALUE2: string;
    MHVALUE3: string;
    MMAPPLYGUBUN: string;
    APPLYGUBUN: string;
    MMREGDATE: string;
    PROCVALUE: string;
    PROCVALUECD: string;
    MHAPPLYGUBUN: string;
    RNUM: string;
}

export interface Ids_oFPISSokiManager {
    NM: string;
    IHIDNUM: string;
    APNT_DE_8: string;
    BIRTHDAY: string;
    MOBLPHON: string;
}

export interface Ids_ioKFSATankInfo {
}

export interface Ids_ioTankChangeMList {
}

export interface Ids_oModifyColumnList {
    TBLNM: string;
    COLNM: string;
    COLKORNM: string;
    COMBOGUBUN: string;
    INNERDSNM: string;
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
    BINGUBUN: string;
    BSEARCHNM: string;
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
    FMNM: string;
    FMRESIDENTERR: string;
    FMBIRTHDAY: string;
    BIRTHDAY: string;
    FMPERSONKEY: string;
    IIDIRPATH: string;
    IIREALNM: string;
    IISAVENM: string;
}

export interface Ids_ioFPISLicenseInfo {
}

export interface Ids_oSearchChoice {
    CD: string;
    DATA: string;
}

export interface Ids_oPersonInfo {
}

export interface Ids_oPersonInfoAll {
}

export interface Ids_oAgencyYn {
    CD: string;
    DATA: string;
}

export interface Ids_update {
}

export interface Ids_updateFilter {
}

export const useFrmcust6400MDataConnectionChangeManage = () => {
    const [ds_ioChangeApplyGubun, setds_ioChangeApplyGubun] = useState<Ids_ioChangeApplyGubun[]>([]);
    const [ds_ioChangeMList, setds_ioChangeMList] = useState<Ids_ioChangeMList[]>([]);
    const [ds_ioBangChangeHList, setds_ioBangChangeHList] = useState<Ids_ioBangChangeHList[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioKFSAInfo, setds_ioKFSAInfo] = useState<Ids_ioKFSAInfo[]>([]);
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_ioCustomerInfo, setds_ioCustomerInfo] = useState<Ids_ioCustomerInfo[]>([]);
    const [ds_ioManagerInfo, setds_ioManagerInfo] = useState<Ids_ioManagerInfo[]>([]);
    const [ds_ioAdditionInfo, setds_ioAdditionInfo] = useState<Ids_ioAdditionInfo[]>([]);
    const [ds_ioRegionCdMatch, setds_ioRegionCdMatch] = useState<Ids_ioRegionCdMatch[]>([]);
    const [ds_ioBizCdMatch, setds_ioBizCdMatch] = useState<Ids_ioBizCdMatch[]>([]);
    const [ds_ioAllCode, setds_ioAllCode] = useState<Ids_ioAllCode[]>([]);
    const [ds_ioCustomerInfoTmp, setds_ioCustomerInfoTmp] = useState<Ids_ioCustomerInfoTmp[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oMemberStat, setds_oMemberStat] = useState<Ids_oMemberStat[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_MemberGubun, setds_MemberGubun] = useState<Ids_MemberGubun[]>([]);
    const [ds_ioManager, setds_ioManager] = useState<Ids_ioManager[]>([]);
    const [ds_oOverBizProc, setds_oOverBizProc] = useState<Ids_oOverBizProc[]>([]);
    const [ds_iStatus, setds_iStatus] = useState<Ids_iStatus[]>([]);
    const [ds_oFPISBangManager, setds_oFPISBangManager] = useState<Ids_oFPISBangManager[]>([]);
    const [ds_ioNotOverBizFireManager, setds_ioNotOverBizFireManager] = useState<Ids_ioNotOverBizFireManager[]>([]);
    const [ds_ioIsOverBizFireManager, setds_ioIsOverBizFireManager] = useState<Ids_ioIsOverBizFireManager[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_oMatchChangeAddr, setds_oMatchChangeAddr] = useState<Ids_oMatchChangeAddr[]>([]);
    const [ds_ioDangerChangeHList, setds_ioDangerChangeHList] = useState<Ids_ioDangerChangeHList[]>([]);
    const [ds_oFPISDangerManager, setds_oFPISDangerManager] = useState<Ids_oFPISDangerManager[]>([]);
    const [ds_ioDangerInfo, setds_ioDangerInfo] = useState<Ids_ioDangerInfo[]>([]);
    const [ds_oFireManagerInfo, setds_oFireManagerInfo] = useState<Ids_oFireManagerInfo[]>([]);
    const [ds_ioApplyGubun, setds_ioApplyGubun] = useState<Ids_ioApplyGubun[]>([]);
    const [ds_ioSokiChangeHList, setds_ioSokiChangeHList] = useState<Ids_ioSokiChangeHList[]>([]);
    const [ds_ioTankChangeHList, setds_ioTankChangeHList] = useState<Ids_ioTankChangeHList[]>([]);
    const [ds_oFPISSokiManager, setds_oFPISSokiManager] = useState<Ids_oFPISSokiManager[]>([]);
    const [ds_ioKFSATankInfo, setds_ioKFSATankInfo] = useState<Ids_ioKFSATankInfo[]>([]);
    const [ds_ioTankChangeMList, setds_ioTankChangeMList] = useState<Ids_ioTankChangeMList[]>([]);
    const [ds_oModifyColumnList, setds_oModifyColumnList] = useState<Ids_oModifyColumnList[]>([]);
    const [ds_ioOldBuildingInfo, setds_ioOldBuildingInfo] = useState<Ids_ioOldBuildingInfo[]>([]);
    const [ds_ioOldCustomerInfo, setds_ioOldCustomerInfo] = useState<Ids_ioOldCustomerInfo[]>([]);
    const [ds_ioOldManagerInfo, setds_ioOldManagerInfo] = useState<Ids_ioOldManagerInfo[]>([]);
    const [ds_ioFPISLicenseInfo, setds_ioFPISLicenseInfo] = useState<Ids_ioFPISLicenseInfo[]>([]);
    const [ds_oSearchChoice, setds_oSearchChoice] = useState<Ids_oSearchChoice[]>([]);
    const [ds_oPersonInfo, setds_oPersonInfo] = useState<Ids_oPersonInfo[]>([]);
    const [ds_oPersonInfoAll, setds_oPersonInfoAll] = useState<Ids_oPersonInfoAll[]>([]);
    const [ds_oAgencyYn, setds_oAgencyYn] = useState<Ids_oAgencyYn[]>([]);
    const [ds_update, setds_update] = useState<Ids_update[]>([]);
    const [ds_updateFilter, setds_updateFilter] = useState<Ids_updateFilter[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioChangeApplyGubun([]);
            setds_ioChangeMList([]);
            setds_ioBangChangeHList([]);
            setds_ioCourse([]);
            setds_oRegion([]);
            setds_ioJibu([]);
            setds_ioKFSAInfo([]);
            setds_ioBuildingInfo([]);
            setds_ioCustomerInfo([]);
            setds_ioManagerInfo([]);
            setds_ioAdditionInfo([]);
            setds_ioRegionCdMatch([]);
            setds_ioBizCdMatch([]);
            setds_ioAllCode([]);
            setds_ioCustomerInfoTmp([]);
            setds_oBnmCode([]);
            setds_oMemberStat([]);
            setds_oManagerList([]);
            setds_MemberGubun([]);
            setds_ioManager([]);
            setds_oOverBizProc([]);
            setds_iStatus([]);
            setds_oFPISBangManager([]);
            setds_ioNotOverBizFireManager([]);
            setds_ioIsOverBizFireManager([]);
            setds_iCustomerModifyHistory([]);
            setds_oMatchChangeAddr([]);
            setds_ioDangerChangeHList([]);
            setds_oFPISDangerManager([]);
            setds_ioDangerInfo([]);
            setds_oFireManagerInfo([]);
            setds_ioApplyGubun([]);
            setds_ioSokiChangeHList([]);
            setds_ioTankChangeHList([]);
            setds_oFPISSokiManager([]);
            setds_ioKFSATankInfo([]);
            setds_ioTankChangeMList([]);
            setds_oModifyColumnList([]);
            setds_ioOldBuildingInfo([]);
            setds_ioOldCustomerInfo([]);
            setds_ioOldManagerInfo([]);
            setds_ioFPISLicenseInfo([]);
            setds_oSearchChoice([]);
            setds_oPersonInfo([]);
            setds_oPersonInfoAll([]);
            setds_oAgencyYn([]);
            setds_update([]);
            setds_updateFilter([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const fn_Excel = () => {
        console.log('fn_Excel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
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
    const tab_page1_btnMFExcel_OnClick = () => {
        console.log('tab_page1_btnMFExcel_OnClick clicked');
    };

    return {
        isLoading,
        ds_ioChangeApplyGubun,
        ds_ioChangeMList,
        ds_ioBangChangeHList,
        ds_ioCourse,
        ds_oRegion,
        ds_ioJibu,
        ds_ioKFSAInfo,
        ds_ioBuildingInfo,
        ds_ioCustomerInfo,
        ds_ioManagerInfo,
        ds_ioAdditionInfo,
        ds_ioRegionCdMatch,
        ds_ioBizCdMatch,
        ds_ioAllCode,
        ds_ioCustomerInfoTmp,
        ds_oBnmCode,
        ds_oMemberStat,
        ds_oManagerList,
        ds_MemberGubun,
        ds_ioManager,
        ds_oOverBizProc,
        ds_iStatus,
        ds_oFPISBangManager,
        ds_ioNotOverBizFireManager,
        ds_ioIsOverBizFireManager,
        ds_iCustomerModifyHistory,
        ds_oMatchChangeAddr,
        ds_ioDangerChangeHList,
        ds_oFPISDangerManager,
        ds_ioDangerInfo,
        ds_oFireManagerInfo,
        ds_ioApplyGubun,
        ds_ioSokiChangeHList,
        ds_ioTankChangeHList,
        ds_oFPISSokiManager,
        ds_ioKFSATankInfo,
        ds_ioTankChangeMList,
        ds_oModifyColumnList,
        ds_ioOldBuildingInfo,
        ds_ioOldCustomerInfo,
        ds_ioOldManagerInfo,
        ds_ioFPISLicenseInfo,
        ds_oSearchChoice,
        ds_oPersonInfo,
        ds_oPersonInfoAll,
        ds_oAgencyYn,
        ds_update,
        ds_updateFilter,
        fn_Excel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        tab_page1_btnMFExcel_OnClick,
    };
};