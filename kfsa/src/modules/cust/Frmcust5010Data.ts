// @ts-nocheck
export const Frmcust5010Data = {};

export interface Ids_ioTrainingOrder {
    CREATE_DATE?: string;
    CREATE_ID?: string;
    EPMGNO?: number;
    MODIFY_DATE?: string;
    MODIFY_ID?: string;
    RREGIONCD?: string;
    TCCOURSECD?: string;
    TOCOURSEGUBUN?: string;
    TOENDDATE?: string;
    TOENDTIME?: string;
    TOEXCEPTDATE?: string;
    TOINETJUBSUCNT?: number;
    TOINETJUBSUYN?: string;
    TOJUBSUMAXCNT?: number;
    TOJUBSUSTATUS?: string;
    TOLECTURENOTICE?: string;
    TOMAILNOTICE?: string;
    TOMGJIBUCD?: string;
    TOMGNO?: string;
    TOMUNJEGUBUN?: string;
    TOSEATCNT?: number;
    TOSEATLIMITYN?: string;
    TOSEATSELECTYN?: string;
    TOSEXLIMITYN?: string;
    TOSTARTDATE?: string;
    TOSTARTTIME?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    USE_YN?: string;
    TOEDUCONTENTS?: string;
    TOREMARK?: string;
    EPNM?: string;
    EPPARKINGINFO?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
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
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCprAt: Ids_oCprAt[] = [
    { CD: '1', DATA: '법인' },
    { CD: '2', DATA: '개인' },
    { CD: '3', DATA: '사업자' },
];

export interface Ids_ioDanMnfctretcInfo {
    MNFCTRETC_SN?: string;
    ITL_NO?: string;
    FRST_PRMISN_DE?: string;
    PRMISN_DE?: string;
    MNFCTRETC_SE_CODE_NM?: string;
    MNFCTRETC_DETAIL_SE_CODE_NM?: string;
    DGST_TMPRSTRE_AT?: string;
    PRMISN_NO?: string;
    CNTANR_PRMISN_NO?: string;
    FRST_STRWRK_DE?: string;
    COMPET_DE?: string;
    PAUSE_ABL_SE?: string;
    PAUSE_ABL_DE?: string;
    PRPOS_ABL_RESN?: string;
    CPR_AT?: string;
    CPR_AT_NM?: string;
    INSTLR_CPR_NM?: string;
    INSTLR_JURIRNO?: string;
    BIRTHDAY?: string;
    INSTLR_NM?: string;
    INSTLR_TELNO?: string;
    INSTLR_ADRES?: string;
    CMPFRSTT_CMPN119SC_NM?: string;
    OBJ_NM?: string;
    BULDDONG_SN?: string;
    FLOOR_SN?: string;
    ITLPC_ADRES?: string;
    ANTY_MUL_SM?: string;
    ONSLFFBRD_AT?: string;
    ARMY_DGST_AT?: string;
    TRTMNT_SUMRY?: string;
    REGIST_DE_14?: string;
    UPDT_DE_14?: string;
    EQP_STDR?: string;
    EQP_SUMRY?: string;
}

export interface Ids_ioDanTankInfo {
    OKND_CODE_NM?: string;
    PRDNM_CODE_NM?: string;
    PRDNM_DETAIL?: string;
    APPN_QT?: string;
    MXMM_QT?: string;
    ANTY_MUL?: string;
    VHCLE_NO?: string;
    VHCLE_YEAR?: string;
    FOM?: string;
    CARNM?: string;
    BEGIN_DE?: string;
    TANK_INSPCT_NO?: string;
    TANK_MXMMCPCTY?: string;
    TNKROOM_CPCTY?: string;
    REGIST_DE_14?: string;
    UPDT_DE_14?: string;
}

export interface Ids_ioDanStatusSuccession {
    FC_NM?: string;
    POSIT_SUCCS_DE?: string;
    PROCESS_DE?: string;
    BEFINSTLR_CPR_NM?: string;
    BEFINSTLR_NM?: string;
    BEFINSTLR_TELNO?: string;
    REGIST_DE_14?: string;
    UPDT_DE_14?: string;
}

export interface Ids_ioDanManagerInfo {
    NM?: string;
    BIRTHDAY?: string;
    CRQFC_CODE_NM?: string;
    CRQFC_CODE?: string;
    AP_APNTRLSOFC_DE?: string;
    AP_PROCESS_DE?: string;
    RL_APNTRLSOFC_DE?: string;
    RL_PROCESS_DE?: string;
    TELNO?: string;
}

export interface Ids_ioFireSurveySFloorStatus {
}

export interface Ids_ioFireSurveyFloorE {
}

export interface Ids_ioFireMapping {
}

export interface Ids_oSGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSGubun: Ids_oSGubun[] = [
    { CD: '1', DATA: '해당층' },
    { CD: '2', DATA: '전체층' },
];

export interface Ids_ioFireSurveySubAdministratorInfo {
}

export interface Ids_ioFireSurveyLicenseInfo2 {
}
