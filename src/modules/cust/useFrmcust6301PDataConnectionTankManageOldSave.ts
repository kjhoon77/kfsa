// @ts-nocheck
import { useState, useEffect } from 'react';

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

export interface Ids_oAddr {
    CD: string;
    DATA: string;
}

export interface Ids_oBuildingSeq {
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

export interface Ids_oFireBonbuCd {
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

export interface Ids_ioFPISDanTankInfo {
}

export interface Ids_oAddrGubun {
    CD: string;
    DATA: string;
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
    TRPARKPNUCD: string;
    TRPARKROADBUILDMGNO: string;
    TRPARKROADDETAIL: string;
    TRPARKROADREMAIN: string;
    TRPARKSANGUBUN: string;
    TRPARKMAINBUNJI: string;
    TRPARKSUBBUNJI: string;
    TRPARKBUILDNM: string;
    TRPARKADDRETC: string;
    TRCONVPGM: string;
    TRCONVPARKSTATUS: string;
    TRINSTLRPNUCD: string;
    TRINSTLRROADBUILDMGNO: string;
    TRINSTLRROADDETAIL: string;
    TRINSTLRROADREMAIN: string;
    TRINSTLRSANGUBUN: string;
    TRINSTLRMAINBUNJI: string;
    TRINSTLRSUBBUNJI: string;
    TRINSTLRBUILDNM: string;
    TRINSTLRADDRETC: string;
    TRCONVINSTLRSTATUS: string;
}

export interface Ids_ioOldTankInfo {
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
}

export const useFrmcust6301PDataConnectionTankManageOldSave = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_oAllObject, setds_oAllObject] = useState<Ids_oAllObject[]>([]);
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_ioCustomerInfo, setds_ioCustomerInfo] = useState<Ids_ioCustomerInfo[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oBuildingSeq, setds_oBuildingSeq] = useState<Ids_oBuildingSeq[]>([]);
    const [ds_ioCustomerInfoTmp, setds_ioCustomerInfoTmp] = useState<Ids_ioCustomerInfoTmp[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oFireBonbuCd, setds_oFireBonbuCd] = useState<Ids_oFireBonbuCd[]>([]);
    const [ds_ioNotOverBizFireManager, setds_ioNotOverBizFireManager] = useState<Ids_ioNotOverBizFireManager[]>([]);
    const [ds_ioIsOverBizFireManager, setds_ioIsOverBizFireManager] = useState<Ids_ioIsOverBizFireManager[]>([]);
    const [ds_ioOldBuildingInfo, setds_ioOldBuildingInfo] = useState<Ids_ioOldBuildingInfo[]>([]);
    const [ds_ioDanManagerInfo, setds_ioDanManagerInfo] = useState<Ids_ioDanManagerInfo[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_oModifyColumnList, setds_oModifyColumnList] = useState<Ids_oModifyColumnList[]>([]);
    const [ds_ioFPISDanTankInfo, setds_ioFPISDanTankInfo] = useState<Ids_ioFPISDanTankInfo[]>([]);
    const [ds_oAddrGubun, setds_oAddrGubun] = useState<Ids_oAddrGubun[]>([]);
    const [ds_ioOldCustomerInfo, setds_ioOldCustomerInfo] = useState<Ids_ioOldCustomerInfo[]>([]);
    const [ds_ioTankInfo, setds_ioTankInfo] = useState<Ids_ioTankInfo[]>([]);
    const [ds_ioOldTankInfo, setds_ioOldTankInfo] = useState<Ids_ioOldTankInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_oDetailCourse([]);
            setds_oAllObject([]);
            setds_ioBuildingInfo([]);
            setds_ioCustomerInfo([]);
            setds_oAddr([]);
            setds_oBuildingSeq([]);
            setds_ioCustomerInfoTmp([]);
            setds_oBnmCode([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oFireBonbuCd([]);
            setds_ioNotOverBizFireManager([]);
            setds_ioIsOverBizFireManager([]);
            setds_ioOldBuildingInfo([]);
            setds_ioDanManagerInfo([]);
            setds_iCustomerModifyHistory([]);
            setds_oModifyColumnList([]);
            setds_ioFPISDanTankInfo([]);
            setds_oAddrGubun([]);
            setds_ioOldCustomerInfo([]);
            setds_ioTankInfo([]);
            setds_ioOldTankInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnApply_OnClick = () => {
        console.log('btnApply_OnClick clicked');
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
    const chkCarYear_OnClick = () => {
        console.log('chkCarYear_OnClick clicked');
    };
    const chkFireCenter_OnClick = () => {
        console.log('chkFireCenter_OnClick clicked');
    };
    const chkInstlrAddr_OnClick = () => {
        console.log('chkInstlrAddr_OnClick clicked');
    };
    const chkParkPlace_OnClick = () => {
        console.log('chkParkPlace_OnClick clicked');
    };
    const chkPerMissionNo_OnClick = () => {
        console.log('chkPerMissionNo_OnClick clicked');
    };
    const chkRemark_OnClick = () => {
        console.log('chkRemark_OnClick clicked');
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
        ds_oCourse,
        ds_oRegion,
        ds_oJibu,
        ds_oDetailCourse,
        ds_oAllObject,
        ds_ioBuildingInfo,
        ds_ioCustomerInfo,
        ds_oAddr,
        ds_oBuildingSeq,
        ds_ioCustomerInfoTmp,
        ds_oBnmCode,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oFireBonbuCd,
        ds_ioNotOverBizFireManager,
        ds_ioIsOverBizFireManager,
        ds_ioOldBuildingInfo,
        ds_ioDanManagerInfo,
        ds_iCustomerModifyHistory,
        ds_oModifyColumnList,
        ds_ioFPISDanTankInfo,
        ds_oAddrGubun,
        ds_ioOldCustomerInfo,
        ds_ioTankInfo,
        ds_ioOldTankInfo,
        btnApply_OnClick,
        btnBuildingSearch_OnClick,
        btnFPISInfo_OnClick,
        btnSearchInstlrZipCode_OnClick,
        btnSearchParkZipCode_OnClick,
        btnSearchZipCode1_OnClick,
        chkAddr_OnClick,
        chkBNM_OnClick,
        chkBuilding_OnClick,
        chkCarYear_OnClick,
        chkFireCenter_OnClick,
        chkInstlrAddr_OnClick,
        chkParkPlace_OnClick,
        chkPerMissionNo_OnClick,
        chkRemark_OnClick,
        chkTel_OnClick,
        lfn_End,
        lfn_Save,
    };
};