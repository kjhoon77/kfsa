// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioTrainingOrder {
    CREATE_DATE: string;
    CREATE_ID: string;
    EPMGNO: string;
    MODIFY_DATE: string;
    MODIFY_ID: string;
    RREGIONCD: string;
    TCCOURSECD: string;
    TOCOURSEGUBUN: string;
    TOENDDATE: string;
    TOENDTIME: string;
    TOEXCEPTDATE: string;
    TOINETJUBSUCNT: string;
    TOINETJUBSUYN: string;
    TOJUBSUMAXCNT: string;
    TOJUBSUSTATUS: string;
    TOLECTURENOTICE: string;
    TOMAILNOTICE: string;
    TOMGJIBUCD: string;
    TOMGNO: string;
    TOMUNJEGUBUN: string;
    TOSEATCNT: string;
    TOSEATLIMITYN: string;
    TOSEATSELECTYN: string;
    TOSEXLIMITYN: string;
    TOSTARTDATE: string;
    TOSTARTTIME: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    USE_YN: string;
    TOEDUCONTENTS: string;
    TOREMARK: string;
    EPNM: string;
    EPPARKINGINFO: string;
}

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

export interface Ids_oCprAt {
    CD: string;
    DATA: string;
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
    TELNO: string;
}

export interface Ids_ioFireSurveySFloorStatus {
}

export interface Ids_ioFireSurveyFloorE {
}

export interface Ids_ioFireMapping {
}

export interface Ids_oSGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioFireSurveySubAdministratorInfo {
}

export interface Ids_ioFireSurveyLicenseInfo2 {
}

export const useFrmcust5010 = () => {
    const [ds_ioTrainingOrder, setds_ioTrainingOrder] = useState<Ids_ioTrainingOrder[]>([]);
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
    const [ds_oCprAt, setds_oCprAt] = useState<Ids_oCprAt[]>([]);
    const [ds_ioDanMnfctretcInfo, setds_ioDanMnfctretcInfo] = useState<Ids_ioDanMnfctretcInfo[]>([]);
    const [ds_ioDanTankInfo, setds_ioDanTankInfo] = useState<Ids_ioDanTankInfo[]>([]);
    const [ds_ioDanStatusSuccession, setds_ioDanStatusSuccession] = useState<Ids_ioDanStatusSuccession[]>([]);
    const [ds_ioDanManagerInfo, setds_ioDanManagerInfo] = useState<Ids_ioDanManagerInfo[]>([]);
    const [ds_ioFireSurveySFloorStatus, setds_ioFireSurveySFloorStatus] = useState<Ids_ioFireSurveySFloorStatus[]>([]);
    const [ds_ioFireSurveyFloorE, setds_ioFireSurveyFloorE] = useState<Ids_ioFireSurveyFloorE[]>([]);
    const [ds_ioFireMapping, setds_ioFireMapping] = useState<Ids_ioFireMapping[]>([]);
    const [ds_oSGubun, setds_oSGubun] = useState<Ids_oSGubun[]>([]);
    const [ds_ioFireSurveySubAdministratorInfo, setds_ioFireSurveySubAdministratorInfo] = useState<Ids_ioFireSurveySubAdministratorInfo[]>([]);
    const [ds_ioFireSurveyLicenseInfo2, setds_ioFireSurveyLicenseInfo2] = useState<Ids_ioFireSurveyLicenseInfo2[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingOrder([]);
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
            setds_oCprAt([]);
            setds_ioDanMnfctretcInfo([]);
            setds_ioDanTankInfo([]);
            setds_ioDanStatusSuccession([]);
            setds_ioDanManagerInfo([]);
            setds_ioFireSurveySFloorStatus([]);
            setds_ioFireSurveyFloorE([]);
            setds_ioFireMapping([]);
            setds_oSGubun([]);
            setds_ioFireSurveySubAdministratorInfo([]);
            setds_ioFireSurveyLicenseInfo2([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMatchCancel_OnClick = () => {
        console.log('btnMatchCancel_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioTrainingOrder,
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
        ds_oCprAt,
        ds_ioDanMnfctretcInfo,
        ds_ioDanTankInfo,
        ds_ioDanStatusSuccession,
        ds_ioDanManagerInfo,
        ds_ioFireSurveySFloorStatus,
        ds_ioFireSurveyFloorE,
        ds_ioFireMapping,
        ds_oSGubun,
        ds_ioFireSurveySubAdministratorInfo,
        ds_ioFireSurveyLicenseInfo2,
        btnMatchCancel_OnClick,
        btnToExcel_OnClick,
        lfn_End,
    };
};