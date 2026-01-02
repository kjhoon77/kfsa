// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioManager {
    MMGNO: string;
    MNM: string;
    MPERSONKEY: string;
    FMLASTFMHSEQ: string;
    FMRESIDENTERR: string;
    FMHLICENSENO: string;
    MBIRTHDAY: string;
    PDI: string;
}

export interface Ids_ModifyGubun {
    CD: string;
    DATA: string;
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
    OLHNM: string;
    BIRTHDAY: string;
    FMPERSONKEY: string;
}

export interface Ids_oStatus {
}

export interface Ids_MemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oMemberStatus {
    O_STATUS: string;
}

export interface Ids_iCustomerInfo {
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
    CRECEIVEEXCEPTGUBUN: string;
}

export interface Ids_oOldInfo {
    FMRESIDENTERR: string;
    CCOURSECD: string;
    BNM: string;
    BADDR1: string;
    CSTATUSGUBUNYN: string;
    CSTATUSGUBUN: string;
    COVERGUBUN: string;
    CMGNO: string;
    COBMGNO: string;
    CREGCD: string;
    CDELGUBUN: string;
    CRECEIVEEXCEPTGUBUN: string;
    CSTATUSREASONCD: string;
    CMATCHCNT: string;
}

export interface Ids_oMemberStat {
    MHMEMCHK: string;
    MHNAME: string;
    MHPERSONKEY: string;
    MHREGDATE: string;
}

export interface Ids_oLicenseList {
    ADDR: string;
    LHPTEL: string;
    LLCSNO: string;
    LPERSONNM: string;
    LPERSONKEY: string;
    LTEL: string;
    TPNM: string;
    TPPERSONKEY: string;
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

export interface Ids_iCustomerModifyHistory {
    CMHAFTERDATA: string;
    CMHBEFOREDATA: string;
    CMHCOLUMN: string;
    CMHGUBUN: string;
    CMHKEY: string;
    CMHWORKGUBUN: string;
}

export interface Ids_oEduPass {
    EPMGNO1: string;
    EPMGNO2: string;
}

export interface Ids_oFPISSubManager {
}

export interface Ids_oPersonInfoAll {
}

export interface Ids_oCallKeyIn {
}

export const useFrmcust0018PManagerChange = () => {
    const [ds_ioManager, setds_ioManager] = useState<Ids_ioManager[]>([]);
    const [ds_ModifyGubun, setds_ModifyGubun] = useState<Ids_ModifyGubun[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_MemberGubun, setds_MemberGubun] = useState<Ids_MemberGubun[]>([]);
    const [ds_oMemberStatus, setds_oMemberStatus] = useState<Ids_oMemberStatus[]>([]);
    const [ds_iCustomerInfo, setds_iCustomerInfo] = useState<Ids_iCustomerInfo[]>([]);
    const [ds_oOldInfo, setds_oOldInfo] = useState<Ids_oOldInfo[]>([]);
    const [ds_oMemberStat, setds_oMemberStat] = useState<Ids_oMemberStat[]>([]);
    const [ds_oLicenseList, setds_oLicenseList] = useState<Ids_oLicenseList[]>([]);
    const [ds_oMemberAgree, setds_oMemberAgree] = useState<Ids_oMemberAgree[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_oEduPass, setds_oEduPass] = useState<Ids_oEduPass[]>([]);
    const [ds_oFPISSubManager, setds_oFPISSubManager] = useState<Ids_oFPISSubManager[]>([]);
    const [ds_oPersonInfoAll, setds_oPersonInfoAll] = useState<Ids_oPersonInfoAll[]>([]);
    const [ds_oCallKeyIn, setds_oCallKeyIn] = useState<Ids_oCallKeyIn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioManager([]);
            setds_ModifyGubun([]);
            setds_oManagerList([]);
            setds_oStatus([]);
            setds_MemberGubun([]);
            setds_oMemberStatus([]);
            setds_iCustomerInfo([]);
            setds_oOldInfo([]);
            setds_oMemberStat([]);
            setds_oLicenseList([]);
            setds_oMemberAgree([]);
            setds_iCustomerModifyHistory([]);
            setds_oEduPass([]);
            setds_oFPISSubManager([]);
            setds_oPersonInfoAll([]);
            setds_oCallKeyIn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAuthResidentNo_OnClick = () => {
        console.log('btnAuthResidentNo_OnClick clicked');
    };
    const btnKeyinHP_OnClick = () => {
        console.log('btnKeyinHP_OnClick clicked');
    };
    const btnKeyinJumin_OnClick = () => {
        console.log('btnKeyinJumin_OnClick clicked');
    };
    const btnLicenseList_OnClick = () => {
        console.log('btnLicenseList_OnClick clicked');
    };
    const btnMemberSave_OnClick = () => {
        console.log('btnMemberSave_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSaveManager_OnClick = () => {
        console.log('btnSaveManager_OnClick clicked');
    };
    const btnSearch_OnClick = () => {
        console.log('btnSearch_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioManager,
        ds_ModifyGubun,
        ds_oManagerList,
        ds_oStatus,
        ds_MemberGubun,
        ds_oMemberStatus,
        ds_iCustomerInfo,
        ds_oOldInfo,
        ds_oMemberStat,
        ds_oLicenseList,
        ds_oMemberAgree,
        ds_iCustomerModifyHistory,
        ds_oEduPass,
        ds_oFPISSubManager,
        ds_oPersonInfoAll,
        ds_oCallKeyIn,
        btnAuthResidentNo_OnClick,
        btnKeyinHP_OnClick,
        btnKeyinJumin_OnClick,
        btnLicenseList_OnClick,
        btnMemberSave_OnClick,
        btnMutilSort_OnClick,
        btnSaveManager_OnClick,
        btnSearch_OnClick,
        lfn_End,
        lfn_Save,
    };
};