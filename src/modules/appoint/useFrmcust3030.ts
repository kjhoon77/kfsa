// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioFireSurvey {
}

export interface Ids_ioCommonCode {
}

export interface Ids_ioFireSurveyAdministratorInfo {
}

export interface Ids_ioFireSurveyRelationInfo {
}

export interface Ids_ioFireSurveyLicenseInfo {
}

export interface Ids_ioFireSurveyDong {
}

export interface Ids_ioFireSurveyFloorStatus {
}

export interface Ids_ioFightFireCompany {
}

export interface Ids_ioFightFireCompanyPossessionHuman {
}

export interface Ids_ioFightFireCompanyFireLicenseInfo {
}

export interface Ids_ioDanMnfctretcInfo {
    MNFCTRETC_SN: string;
    ITL_NO: string;
    FRST_PRMISN_DE: string;
    PRMISN_DE: string;
    MNFCTRETC_SE_CODE_NM: string;
    MNFCTRETC_DETAIL_SE_CODE_NM: string;
    DGST_TMPRSTRE_AT: string;
    PRMISN_NO: string;
    CNTANR_PRMISN_NO: string;
    FRST_STRWRK_DE: string;
    COMPET_DE: string;
    PAUSE_ABL_SE: string;
    PAUSE_ABL_DE: string;
    PRPOS_ABL_RESN: string;
    CPR_AT: string;
    CPR_AT_NM: string;
    INSTLR_CPR_NM: string;
    INSTLR_JURIRNO: string;
    BIRTHDAY: string;
    INSTLR_NM: string;
    INSTLR_TELNO: string;
    INSTLR_ADRES: string;
    CMPFRSTT_CMPN119SC_NM: string;
    OBJ_NM: string;
    BULDDONG_SN: string;
    FLOOR_SN: string;
    ITLPC_ADRES: string;
    ANTY_MUL_SM: string;
    ONSLFFBRD_AT: string;
    ARMY_DGST_AT: string;
    TRTMNT_SUMRY: string;
    REGIST_DE_14: string;
    UPDT_DE_14: string;
    EQP_STDR: string;
    EQP_SUMRY: string;
}

export interface Ids_ioDanTankInfo {
    OKND_CODE_NM: string;
    PRDNM_CODE_NM: string;
    PRDNM_DETAIL: string;
    APPN_QT: string;
    MXMM_QT: string;
    ANTY_MUL: string;
    VHCLE_NO: string;
    VHCLE_YEAR: string;
    FOM: string;
    CARNM: string;
    BEGIN_DE: string;
    TANK_INSPCT_NO: string;
    TANK_MXMMCPCTY: string;
    TNKROOM_CPCTY: string;
    REGIST_DE_14: string;
    UPDT_DE_14: string;
}

export interface Ids_ioDanStatusSuccession {
    FC_NM: string;
    POSIT_SUCCS_DE: string;
    PROCESS_DE: string;
    BEFINSTLR_CPR_NM: string;
    BEFINSTLR_NM: string;
    BEFINSTLR_TELNO: string;
    REGIST_DE_14: string;
    UPDT_DE_14: string;
}

export interface Ids_ioDanManagerInfo {
    NM: string;
    BIRTHDAY: string;
    CRQFC_CODE_NM: string;
    CRQFC_CODE: string;
    AP_APNTRLSOFC_DE: string;
    AP_PROCESS_DE: string;
    RL_APNTRLSOFC_DE: string;
    RL_PROCESS_DE: string;
}

export interface Ids_ioFireSurveySFloorStatus {
}

export interface Ids_ioFireSurveyFloorE {
}

export interface Ids_ioFireMapping {
}

export interface Ids_ioGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oFireCd {
    CD: string;
    DATA: string;
    JIBUCD: string;
    CTCD: string;
}

export interface Ids_oFireCenterCd {
    CD: string;
    DATA: string;
    UPCD: string;
}

export interface Ids_oList {
}

export interface Ids_oFireHead {
    CD: string;
    DATA: string;
    JIBUCD: string;
}

export interface Ids_ioSearch {
    CD: string;
    DATA: string;
}

export interface Ids_oSGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioObjGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioMNFCTRETCGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioMNFCTRETCGubunD {
    CD: string;
    DATA: string;
}

export interface Ids_ioCompanyGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioPBLINSTT {
    CD: string;
    DATA: string;
}

export const useFrmcust3030 = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioFireSurvey, setds_ioFireSurvey] = useState<Ids_ioFireSurvey[]>([]);
    const [ds_ioCommonCode, setds_ioCommonCode] = useState<Ids_ioCommonCode[]>([]);
    const [ds_ioFireSurveyAdministratorInfo, setds_ioFireSurveyAdministratorInfo] = useState<Ids_ioFireSurveyAdministratorInfo[]>([]);
    const [ds_ioFireSurveyRelationInfo, setds_ioFireSurveyRelationInfo] = useState<Ids_ioFireSurveyRelationInfo[]>([]);
    const [ds_ioFireSurveyLicenseInfo, setds_ioFireSurveyLicenseInfo] = useState<Ids_ioFireSurveyLicenseInfo[]>([]);
    const [ds_ioFireSurveyDong, setds_ioFireSurveyDong] = useState<Ids_ioFireSurveyDong[]>([]);
    const [ds_ioFireSurveyFloorStatus, setds_ioFireSurveyFloorStatus] = useState<Ids_ioFireSurveyFloorStatus[]>([]);
    const [ds_ioFightFireCompany, setds_ioFightFireCompany] = useState<Ids_ioFightFireCompany[]>([]);
    const [ds_ioFightFireCompanyPossessionHuman, setds_ioFightFireCompanyPossessionHuman] = useState<Ids_ioFightFireCompanyPossessionHuman[]>([]);
    const [ds_ioFightFireCompanyFireLicenseInfo, setds_ioFightFireCompanyFireLicenseInfo] = useState<Ids_ioFightFireCompanyFireLicenseInfo[]>([]);
    const [ds_ioDanMnfctretcInfo, setds_ioDanMnfctretcInfo] = useState<Ids_ioDanMnfctretcInfo[]>([]);
    const [ds_ioDanTankInfo, setds_ioDanTankInfo] = useState<Ids_ioDanTankInfo[]>([]);
    const [ds_ioDanStatusSuccession, setds_ioDanStatusSuccession] = useState<Ids_ioDanStatusSuccession[]>([]);
    const [ds_ioDanManagerInfo, setds_ioDanManagerInfo] = useState<Ids_ioDanManagerInfo[]>([]);
    const [ds_ioFireSurveySFloorStatus, setds_ioFireSurveySFloorStatus] = useState<Ids_ioFireSurveySFloorStatus[]>([]);
    const [ds_ioFireSurveyFloorE, setds_ioFireSurveyFloorE] = useState<Ids_ioFireSurveyFloorE[]>([]);
    const [ds_ioFireMapping, setds_ioFireMapping] = useState<Ids_ioFireMapping[]>([]);
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oList, setds_oList] = useState<Ids_oList[]>([]);
    const [ds_oFireHead, setds_oFireHead] = useState<Ids_oFireHead[]>([]);
    const [ds_ioSearch, setds_ioSearch] = useState<Ids_ioSearch[]>([]);
    const [ds_oSGubun, setds_oSGubun] = useState<Ids_oSGubun[]>([]);
    const [ds_ioObjGubun, setds_ioObjGubun] = useState<Ids_ioObjGubun[]>([]);
    const [ds_ioMNFCTRETCGubun, setds_ioMNFCTRETCGubun] = useState<Ids_ioMNFCTRETCGubun[]>([]);
    const [ds_ioMNFCTRETCGubunD, setds_ioMNFCTRETCGubunD] = useState<Ids_ioMNFCTRETCGubunD[]>([]);
    const [ds_ioCompanyGubun, setds_ioCompanyGubun] = useState<Ids_ioCompanyGubun[]>([]);
    const [ds_ioPBLINSTT, setds_ioPBLINSTT] = useState<Ids_ioPBLINSTT[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCourse([]);
            setds_ioFireSurvey([]);
            setds_ioCommonCode([]);
            setds_ioFireSurveyAdministratorInfo([]);
            setds_ioFireSurveyRelationInfo([]);
            setds_ioFireSurveyLicenseInfo([]);
            setds_ioFireSurveyDong([]);
            setds_ioFireSurveyFloorStatus([]);
            setds_ioFightFireCompany([]);
            setds_ioFightFireCompanyPossessionHuman([]);
            setds_ioFightFireCompanyFireLicenseInfo([]);
            setds_ioDanMnfctretcInfo([]);
            setds_ioDanTankInfo([]);
            setds_ioDanStatusSuccession([]);
            setds_ioDanManagerInfo([]);
            setds_ioFireSurveySFloorStatus([]);
            setds_ioFireSurveyFloorE([]);
            setds_ioFireMapping([]);
            setds_ioGubun([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oList([]);
            setds_oFireHead([]);
            setds_ioSearch([]);
            setds_oSGubun([]);
            setds_ioObjGubun([]);
            setds_ioMNFCTRETCGubun([]);
            setds_ioMNFCTRETCGubunD([]);
            setds_ioCompanyGubun([]);
            setds_ioPBLINSTT([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnApply_OnClick = () => {
        console.log('btnApply_OnClick clicked');
    };
    const btnDataHistory_OnClick = () => {
        console.log('btnDataHistory_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oCourse,
        ds_ioFireSurvey,
        ds_ioCommonCode,
        ds_ioFireSurveyAdministratorInfo,
        ds_ioFireSurveyRelationInfo,
        ds_ioFireSurveyLicenseInfo,
        ds_ioFireSurveyDong,
        ds_ioFireSurveyFloorStatus,
        ds_ioFightFireCompany,
        ds_ioFightFireCompanyPossessionHuman,
        ds_ioFightFireCompanyFireLicenseInfo,
        ds_ioDanMnfctretcInfo,
        ds_ioDanTankInfo,
        ds_ioDanStatusSuccession,
        ds_ioDanManagerInfo,
        ds_ioFireSurveySFloorStatus,
        ds_ioFireSurveyFloorE,
        ds_ioFireMapping,
        ds_ioGubun,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oList,
        ds_oFireHead,
        ds_ioSearch,
        ds_oSGubun,
        ds_ioObjGubun,
        ds_ioMNFCTRETCGubun,
        ds_ioMNFCTRETCGubunD,
        ds_ioCompanyGubun,
        ds_ioPBLINSTT,
        btnApply_OnClick,
        btnDataHistory_OnClick,
        btnToExcel_OnClick,
        lfn_End,
        lfn_Search,
    };
};