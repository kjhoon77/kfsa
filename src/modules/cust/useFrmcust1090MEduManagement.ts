// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioEduPass {
    SEL: string;
    BNM: string;
    CAGGUBUN: string;
    CCOURSECD: string;
    CGTMGNO: string;
    CMGNO: string;
    CNO: string;
    COVERCMGNO: string;
    CSTATUSGUBUN: string;
    EPPASSDATE: string;
    FMEMAIL: string;
    FMHHPTEL: string;
    FMHSTARTDATE: string;
    FMNM: string;
    FMBIRTHDAY: string;
    FMPERSONKEY: string;
    NOPAYFEE: string;
    EPMGNO: string;
    EPPERSONNM: string;
    EPBIRTHDAY: string;
    EPPERSONKEY: string;
    CEDUEXPIREDATE: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oEduStudent {
    CD: string;
    DATA: string;
}

export interface Ids_oEduSubject {
    CD: string;
    DATA: string;
}

export interface Ids_oEmailDomain {
    CD: string;
    DATA: string;
}

export interface Ids_oCustomerInfo {
    CFEEYYMM: string;
    COVERCMGNO: string;
    ESDATE: string;
    EPPASSDATE: string;
    NOPAYFEE: string;
    CRECEIVEEXCEPTGUBUN: string;
    CEDUEXPIREDATE: string;
}

export interface Ids_oFireManagerInfo {
    FMAUTHGUBUN: string;
    FMCMGNO: string;
    FMHEMAILID: string;
    FMHEMAILDOMAIN: string;
    FMHHPTEL: string;
    FMHSTARTDATE: string;
    FMLASTFMHSEQ: string;
    FMMGNO: string;
    FMNM: string;
    FMRESIDENTERR: string;
    FMBIRTHDAY: string;
    FSSTATUS: string;
    CMGNO: string;
    CCOURSECD: string;
    CGATEWAYCD: string;
    CFMHSEQ: string;
    EDUCNT: string;
    FMPERSONKEY: string;
}

export interface Ids_oBuildingInfo {
    AGNM: string;
    BADDR1: string;
    BADDR2: string;
    BADDRGUBUN: string;
    BMGNO: string;
    BNM: string;
    BTEL: string;
    BZIPCD: string;
    CAGGUBUN: string;
    CBMGNO: string;
    AGMGNO: string;
    CMGNO: string;
    CRECEIVEEXCEPTGUBUN: string;
}

export interface Ids_ioEduPassSingle {
    EPCGATEWAYCD: string;
    EPCMGNO: string;
    EPCOURSECD: string;
    EPESMGNO: string;
    EPMGNO: string;
    EPPASSDATE: string;
    EPPERSONNM: string;
    EPPROCGTMGNO: string;
    EPBIRTHDAY: string;
    EPPERSONKEY: string;
    EPSUCCESSIONGUBUN: string;
    EPYEAR: string;
    FMMGNO: string;
    EPPASSREMARK: string;
    CYBERISUGUBUN: string;
    EDUEXPIREDATE: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oDetailCourse {
    CD: string;
    DATA: string;
    PCD: string;
}

export interface Ids_ioEduPassModify {
    SEL: string;
    BNM: string;
    CAGGUBUN: string;
    CCOURSECD: string;
    CGTMGNO: string;
    CMGNO: string;
    CNO: string;
    COVERCMGNO: string;
    CSTATUSGUBUN: string;
    EPPASSDATE: string;
    FMEMAIL: string;
    FMHHPTEL: string;
    FMHSTARTDATE: string;
    FMNM: string;
    FMBIRTHDAY: string;
    NOPAYFEE: string;
    EPMGNO: string;
    FMPERSONKEY: string;
}

export interface Ids_ioEduPassCheck {
    CNT: string;
}

export interface Ids_oAgGubun {
    CD: string;
    DATA: string;
}

export interface Ids_iOnlyKey {
    ONLYKEY: string;
    ACTION: string;
}

export interface Ids_oCBarCodeInfo {
    CGTMGNO: string;
    CNO: string;
}

export interface Ids_oLBarCodeInfo {
    LPERSONNM: string;
    LBIRTHDAY: string;
    LPERSONKEY: string;
}

export interface Ids_ioEduPassMulti {
    EPCGATEWAYCD: string;
    EPCMGNO: string;
    EPCOURSECD: string;
    EPESMGNO: string;
    EPMGNO: string;
    EPPASSDATE: string;
    EPPERSONNM: string;
    EPPROCGTMGNO: string;
    EPBIRTHDAY: string;
    EPPERSONKEY: string;
    EPSUCCESSIONGUBUN: string;
    EPYEAR: string;
    FMMGNO: string;
    EPPASSREMARK: string;
    EDUEXPIREDATE: string;
}

export interface Ids_ioEduPassMultiCheck {
    CNT: string;
}

export interface Ids_ioEduPassMultiSingle {
    EPCGATEWAYCD: string;
    EPCMGNO: string;
    EPCOURSECD: string;
    EPESMGNO: string;
    EPMGNO: string;
    EPPASSDATE: string;
    EPPERSONNM: string;
    EPPROCGTMGNO: string;
    EPBIRTHDAY: string;
    EPPERSONKEY: string;
    EPSUCCESSIONGUBUN: string;
    EPYEAR: string;
    FMMGNO: string;
    EPPASSREMARK: string;
    EDUEXPIREDATE: string;
}

export interface Ids_oBasicInfo {
    CGTMGNO: string;
    CNO: string;
}

export interface Ids_oJibuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioLBarCodeInfoCust {
}

export interface Ids_ioYn {
    CD: string;
    DATA: string;
}

export interface Ids_oBnmCode {
}

export interface Ids_oEduJubsuInfo {
    EJMGNO: string;
}

export const useFrmcust1090MEduManagement = () => {
    const [ds_ioEduPass, setds_ioEduPass] = useState<Ids_ioEduPass[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_oEduStudent, setds_oEduStudent] = useState<Ids_oEduStudent[]>([]);
    const [ds_oEduSubject, setds_oEduSubject] = useState<Ids_oEduSubject[]>([]);
    const [ds_oEmailDomain, setds_oEmailDomain] = useState<Ids_oEmailDomain[]>([]);
    const [ds_oCustomerInfo, setds_oCustomerInfo] = useState<Ids_oCustomerInfo[]>([]);
    const [ds_oFireManagerInfo, setds_oFireManagerInfo] = useState<Ids_oFireManagerInfo[]>([]);
    const [ds_oBuildingInfo, setds_oBuildingInfo] = useState<Ids_oBuildingInfo[]>([]);
    const [ds_ioEduPassSingle, setds_ioEduPassSingle] = useState<Ids_ioEduPassSingle[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_ioEduPassModify, setds_ioEduPassModify] = useState<Ids_ioEduPassModify[]>([]);
    const [ds_ioEduPassCheck, setds_ioEduPassCheck] = useState<Ids_ioEduPassCheck[]>([]);
    const [ds_oAgGubun, setds_oAgGubun] = useState<Ids_oAgGubun[]>([]);
    const [ds_iOnlyKey, setds_iOnlyKey] = useState<Ids_iOnlyKey[]>([]);
    const [ds_oCBarCodeInfo, setds_oCBarCodeInfo] = useState<Ids_oCBarCodeInfo[]>([]);
    const [ds_oLBarCodeInfo, setds_oLBarCodeInfo] = useState<Ids_oLBarCodeInfo[]>([]);
    const [ds_ioEduPassMulti, setds_ioEduPassMulti] = useState<Ids_ioEduPassMulti[]>([]);
    const [ds_ioEduPassMultiCheck, setds_ioEduPassMultiCheck] = useState<Ids_ioEduPassMultiCheck[]>([]);
    const [ds_ioEduPassMultiSingle, setds_ioEduPassMultiSingle] = useState<Ids_ioEduPassMultiSingle[]>([]);
    const [ds_oBasicInfo, setds_oBasicInfo] = useState<Ids_oBasicInfo[]>([]);
    const [ds_oJibuGubun, setds_oJibuGubun] = useState<Ids_oJibuGubun[]>([]);
    const [ds_ioLBarCodeInfoCust, setds_ioLBarCodeInfoCust] = useState<Ids_ioLBarCodeInfoCust[]>([]);
    const [ds_ioYn, setds_ioYn] = useState<Ids_ioYn[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oEduJubsuInfo, setds_oEduJubsuInfo] = useState<Ids_oEduJubsuInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioEduPass([]);
            setds_oJibu([]);
            setds_oEduGubun([]);
            setds_oEduStudent([]);
            setds_oEduSubject([]);
            setds_oEmailDomain([]);
            setds_oCustomerInfo([]);
            setds_oFireManagerInfo([]);
            setds_oBuildingInfo([]);
            setds_ioEduPassSingle([]);
            setds_oCourse([]);
            setds_oDetailCourse([]);
            setds_ioEduPassModify([]);
            setds_ioEduPassCheck([]);
            setds_oAgGubun([]);
            setds_iOnlyKey([]);
            setds_oCBarCodeInfo([]);
            setds_oLBarCodeInfo([]);
            setds_ioEduPassMulti([]);
            setds_ioEduPassMultiCheck([]);
            setds_ioEduPassMultiSingle([]);
            setds_oBasicInfo([]);
            setds_oJibuGubun([]);
            setds_ioLBarCodeInfoCust([]);
            setds_ioYn([]);
            setds_oBnmCode([]);
            setds_oEduJubsuInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSearchAgency_OnClick = () => {
        console.log('btnSearchAgency_OnClick clicked');
    };
    const btnSearchCustMgno_OnClick = () => {
        console.log('btnSearchCustMgno_OnClick clicked');
    };
    const btnSearchEduSchedule_OnClick = () => {
        console.log('btnSearchEduSchedule_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const btnUpdateManagerInfo_OnClick = () => {
        console.log('btnUpdateManagerInfo_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
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

    return {
        isLoading,
        ds_ioEduPass,
        ds_oJibu,
        ds_oEduGubun,
        ds_oEduStudent,
        ds_oEduSubject,
        ds_oEmailDomain,
        ds_oCustomerInfo,
        ds_oFireManagerInfo,
        ds_oBuildingInfo,
        ds_ioEduPassSingle,
        ds_oCourse,
        ds_oDetailCourse,
        ds_ioEduPassModify,
        ds_ioEduPassCheck,
        ds_oAgGubun,
        ds_iOnlyKey,
        ds_oCBarCodeInfo,
        ds_oLBarCodeInfo,
        ds_ioEduPassMulti,
        ds_ioEduPassMultiCheck,
        ds_ioEduPassMultiSingle,
        ds_oBasicInfo,
        ds_oJibuGubun,
        ds_ioLBarCodeInfoCust,
        ds_ioYn,
        ds_oBnmCode,
        ds_oEduJubsuInfo,
        btnMutilSort_OnClick,
        btnSearchAgency_OnClick,
        btnSearchCustMgno_OnClick,
        btnSearchEduSchedule_OnClick,
        btnToExcel_OnClick,
        btnUpdateManagerInfo_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};