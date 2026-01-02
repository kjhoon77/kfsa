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

export interface Ids_oEmailDomain {
    CD: string;
    DATA: string;
}

export interface Ids_oDetailCourse {
    CD: string;
    DATA: string;
    GCD: string;
}

export interface Ids_oPersonGubun {
    CD: string;
    DATA: string;
    PCD: string;
}

export interface Ids_oAddrGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oJubsuInfo {
    FCMGNO: string;
    FCSEQ: string;
    FCCMGNO: string;
    FMPERSONKEY: string;
    BIRTHDAY: string;
    FCSTATUS: string;
    FCSTATUS2: string;
    FCGUBUN: string;
    FCGUBUN2: string;
    FCBULDNAME: string;
    FCPOST: string;
    FCADDR1: string;
    FCADDR2: string;
    FCHOPEADDRGUBUN: string;
    FCCPOST: string;
    FCCADDR1: string;
    FCCADDR2: string;
    FCTELEPHONE: string;
    FCFAX: string;
    FCHANDPHONE: string;
    FCEMAIL: string;
    FCSIZE: string;
    FCOWNERNAME: string;
    FCOWNERTEL: string;
    FCOWNERHP: string;
    FCREGDATE: string;
    FCREGDATE2: string;
    FCPOSTGUBUN: string;
    FCFMHZIPCD: string;
    FCFMHADDR1: string;
    FCFMHADDR2: string;
    FCOWNERGUBUN: string;
    CGTMGNO: string;
    MID: string;
    MNM: string;
    MMGNO: string;
    CNO: string;
    FCBADDRGUBUN: string;
    FCFMHADDRGUBUN: string;
    FCCADDRGUBUN: string;
    CNICKNM: string;
    NEWCNM: string;
    BNM: string;
    OLDCNM: string;
    FCCOURSECD: string;
    FMHFMMGNO: string;
    FMHSEQ: string;
    FCENTERDATE: string;
    FCENTERQUALIFY: string;
    FCCARNO: string;
    FCCARYEAR: string;
    FCPERMISSIONNO: string;
    ENTERQUALIFY: string;
    FCEDUYN: string;
    FMBIRTHDAY: string;
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
    CMAINCMGNO: string;
    CELECTQUALIFY: string;
    CFEEADDRGUBUN: string;
    CEDUADDRGUBUN: string;
    CFEEROADADDR1: string;
    CFEEROADADDR2: string;
    CEDUROADADDR1: string;
    CEDUROADADDR2: string;
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
    IIDIRPATH: string;
    IIREALNM: string;
    IISAVENM: string;
    FMHROADADDR1: string;
    FMHROADADDR2: string;
    BIRTHDAY: string;
    FMPERSONKEY: string;
}

export interface Ids_ioAdditionInfo {
    ADCMGNO: string;
    ADCONTENT: string;
    ADDELGUBUN: string;
    ADCD: string;
    ADSEQ: string;
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

export interface Ids_oAddr {
    CD: string;
    DATA: string;
}

export interface Ids_oOwnerGubun {
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
    FMRESIDENTNO: string;
    IIDIRPATH: string;
    IIREALNM: string;
    IISAVENM: string;
}

export interface Ids_oBnmCode {
}

export interface Ids_oElectQualify {
    PCD: string;
    CD: string;
    DATA: string;
}

export interface Ids_oStatus {
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
}

export interface Ids_oAccountInfo {
}

export const useFrmcust0031PCustomerChange = () => {
    const [ds_oBizCd, setds_oBizCd] = useState<Ids_oBizCd[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oEmailDomain, setds_oEmailDomain] = useState<Ids_oEmailDomain[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_oPersonGubun, setds_oPersonGubun] = useState<Ids_oPersonGubun[]>([]);
    const [ds_oAddrGubun, setds_oAddrGubun] = useState<Ids_oAddrGubun[]>([]);
    const [ds_oJubsuInfo, setds_oJubsuInfo] = useState<Ids_oJubsuInfo[]>([]);
    const [ds_oAllObject, setds_oAllObject] = useState<Ids_oAllObject[]>([]);
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_ioCustomerInfo, setds_ioCustomerInfo] = useState<Ids_ioCustomerInfo[]>([]);
    const [ds_ioManagerInfo, setds_ioManagerInfo] = useState<Ids_ioManagerInfo[]>([]);
    const [ds_ioAdditionInfo, setds_ioAdditionInfo] = useState<Ids_ioAdditionInfo[]>([]);
    const [ds_ioOwnerInfo, setds_ioOwnerInfo] = useState<Ids_ioOwnerInfo[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oOwnerGubun, setds_oOwnerGubun] = useState<Ids_oOwnerGubun[]>([]);
    const [ds_oBuildingSeq, setds_oBuildingSeq] = useState<Ids_oBuildingSeq[]>([]);
    const [ds_oCustomerSeq, setds_oCustomerSeq] = useState<Ids_oCustomerSeq[]>([]);
    const [ds_oFireManagerSeq, setds_oFireManagerSeq] = useState<Ids_oFireManagerSeq[]>([]);
    const [ds_ioCustomerInfoTmp, setds_ioCustomerInfoTmp] = useState<Ids_ioCustomerInfoTmp[]>([]);
    const [ds_ioManagerInfoTmp, setds_ioManagerInfoTmp] = useState<Ids_ioManagerInfoTmp[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oElectQualify, setds_oElectQualify] = useState<Ids_oElectQualify[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_ioTankInfo, setds_ioTankInfo] = useState<Ids_ioTankInfo[]>([]);
    const [ds_oAccountInfo, setds_oAccountInfo] = useState<Ids_oAccountInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBizCd([]);
            setds_oCourse([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_oEmailDomain([]);
            setds_oDetailCourse([]);
            setds_oPersonGubun([]);
            setds_oAddrGubun([]);
            setds_oJubsuInfo([]);
            setds_oAllObject([]);
            setds_ioBuildingInfo([]);
            setds_ioCustomerInfo([]);
            setds_ioManagerInfo([]);
            setds_ioAdditionInfo([]);
            setds_ioOwnerInfo([]);
            setds_oAddr([]);
            setds_oOwnerGubun([]);
            setds_oBuildingSeq([]);
            setds_oCustomerSeq([]);
            setds_oFireManagerSeq([]);
            setds_ioCustomerInfoTmp([]);
            setds_ioManagerInfoTmp([]);
            setds_oBnmCode([]);
            setds_oElectQualify([]);
            setds_oStatus([]);
            setds_ioTankInfo([]);
            setds_oAccountInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnBuildingSearch_OnClick = () => {
        console.log('btnBuildingSearch_OnClick clicked');
    };
    const btnCancle_OnClick = () => {
        console.log('btnCancle_OnClick clicked');
    };
    const btnChangeInfo_OnClick = () => {
        console.log('btnChangeInfo_OnClick clicked');
    };
    const btnChange_OnClick = () => {
        console.log('btnChange_OnClick clicked');
    };
    const btnComplete_OnClick = () => {
        console.log('btnComplete_OnClick clicked');
    };
    const btnCustomerLink_OnClick = () => {
        console.log('btnCustomerLink_OnClick clicked');
    };
    const btnDefer_OnClick = () => {
        console.log('btnDefer_OnClick clicked');
    };
    const btnElectEnd_OnClick = () => {
        console.log('btnElectEnd_OnClick clicked');
    };
    const btnJubsu_OnClick = () => {
        console.log('btnJubsu_OnClick clicked');
    };
    const btnSearchZipCode1_OnClick = () => {
        console.log('btnSearchZipCode1_OnClick clicked');
    };
    const btnSearchZipCode2_OnClick = () => {
        console.log('btnSearchZipCode2_OnClick clicked');
    };
    const btnSearchZipCode3_OnClick = () => {
        console.log('btnSearchZipCode3_OnClick clicked');
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
        ds_oEmailDomain,
        ds_oDetailCourse,
        ds_oPersonGubun,
        ds_oAddrGubun,
        ds_oJubsuInfo,
        ds_oAllObject,
        ds_ioBuildingInfo,
        ds_ioCustomerInfo,
        ds_ioManagerInfo,
        ds_ioAdditionInfo,
        ds_ioOwnerInfo,
        ds_oAddr,
        ds_oOwnerGubun,
        ds_oBuildingSeq,
        ds_oCustomerSeq,
        ds_oFireManagerSeq,
        ds_ioCustomerInfoTmp,
        ds_ioManagerInfoTmp,
        ds_oBnmCode,
        ds_oElectQualify,
        ds_oStatus,
        ds_ioTankInfo,
        ds_oAccountInfo,
        btnBuildingSearch_OnClick,
        btnCancle_OnClick,
        btnChangeInfo_OnClick,
        btnChange_OnClick,
        btnComplete_OnClick,
        btnCustomerLink_OnClick,
        btnDefer_OnClick,
        btnElectEnd_OnClick,
        btnJubsu_OnClick,
        btnSearchZipCode1_OnClick,
        btnSearchZipCode2_OnClick,
        btnSearchZipCode3_OnClick,
        lfn_End,
        lfn_Save,
    };
};