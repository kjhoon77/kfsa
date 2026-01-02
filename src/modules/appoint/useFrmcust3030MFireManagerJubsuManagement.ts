// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_Chk1 {
    CD: string;
    DATA: string;
}

export interface Ids_Chk2 {
    CD: string;
    DATA: string;
}

export interface Ids_oManagerList {
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_KwanYN {
    CD: string;
    DATA: string;
}

export interface Ids_KRmanagement {
    MGNT_SEQ: string;
    USE_AT: string;
    MGNT_NM: string;
    MGNT_SE: string;
    MGNT_CEONM: string;
    TLPHON: string;
    UNDERND_FOOR_QT: string;
    TRRPHNM_FLOOR_QT: string;
    TORAR: string;
    BOTTOM_AR: string;
    DONG_QT: string;
}

export interface Ids_oFireCd {
    CD: string;
    DATA: string;
    JIBUCD: string;
    CTCD: string;
}

export interface Ids_oOwnerGubun {
    CD: string;
    DATA: string;
}

export interface Ids_USEYN {
    CD: string;
    DATA: string;
}

export interface Ids_chk3 {
    CD: string;
    DATA: string;
}

export interface Ids_PublicAT {
    CD: string;
    DATA: string;
}

export interface Ids_List {
}

export interface Ids_iMaster {
    AJDATE: string;
    AJSTATUS: string;
    AJMGNO: string;
    AJMOTHOD: string;
    BILD_SN: string;
    BILD_NM: string;
    PARTCPNT_SN: string;
    PARTCPNT_CODE: string;
    PARTCPNT: string;
    IHIDNUM: string;
    TLPHON_NO: string;
    USE_AT: string;
    MNGT_AUTH_EVNC: string;
    RLSOFC_RESN: string;
    O_NM: string;
    O_IHIDNUM: string;
    RLSOFC_DE_8: string;
    AJBIZGUBUN: string;
    O_QUALFUSER_SN: string;
    O_PERSONKEY: string;
    O_APNT_DE_8: string;
    ARSON_GUBUN: string;
    ARSON_COURSECD: string;
    PUBLIC_AT: string;
    O_HPNO: string;
    I_NM: string;
    I_IHIDNUM: string;
    I_QUALFUSER_SN: string;
    I_PERSONKEY: string;
    I_HPNO: string;
    LAST_EDC_DE_08: string;
    DOUBLE_AT: string;
    I_APNT_DE_8: string;
    EMAIL: string;
    ARSON_MANAGE_PKTBUK_NO: string;
    CAREER: string;
    ZIP: string;
    MANY_ARSON_AT: string;
    I_TLPHON_NO: string;
    IRUSEYN: string;
    IRGRADE: string;
    ENTRPSNM: string;
    REGISTNO: string;
    ENTRPS_SN: string;
    TELNO: string;
    RPRSNTV: string;
    CNSGNPD_BEGIN_DE_8: string;
    CNSGNPD_END_DE_8: string;
    MNGT_SEQ: string;
    MNGT_USE_AT: string;
    MNGT_NM: string;
    MNGT_SE: string;
    MNGT_CEONM: string;
    MNGT_TEPHON: string;
    UNDERND_FOOR_QT: string;
    TRRPHNM_FLOOR_QT: string;
    TORAR: string;
    BOTTOM_AR: string;
    DONG_QT: string;
    GNRL_FIRE_SAFT_AT: string;
    TOT_MNGT_AUTH_NO: string;
    FIRE_SAFT_ASSI_NO: string;
    CONST_SITE_AT: string;
    BSNM_REIST_NO: string;
    ENG_NM: string;
    ENG_GRADE: string;
    BASS_ADRES: string;
    ETC_ADRES: string;
    CTRD_CODE: string;
    SIGNGU_CODE: string;
    DONG_CODE: string;
    LI_CODE: string;
    MNTN_LNBR_AT: string;
    MAIN_LNBR: string;
    SEC_LNBR: string;
    ROAD_NM: string;
    MAIN_BDNBR: string;
    SEC_BDNBR: string;
    BULD_NM: string;
    BULD_NM_ETC: string;
    I_ARSON_TYPE: string;
    CNTRWK_COMPANY: string;
    CNTRWK_TYPE: string;
    CNTRWK_NM: string;
    CNTRWK_JURIRNO: string;
    CNTRWK_TELNO: string;
    CNTRWK_BIRTH: string;
    CONST_NO: string;
    ENTRPS_ZIP: string;
    ENTRPS_BASS_ADRES: string;
    ENTRPS_ETC_ADRES: string;
    AJNM: string;
    AJHP: string;
    AJGTMGNO: string;
    STATUS_FLAG: string;
    I_LIC_GUBUN: string;
    RLSOFC_STTUS_CODE: string;
    MNGT_SEQNO: string;
    CTRD_CODE_BASS: string;
    SIGNGU_CODE_BASS: string;
    DONG_CODE_BASS: string;
    LI_CODE_BASS: string;
    MNTN_LNBR_AT_BASS: string;
    MAIN_LNBR_BASS: string;
    SEC_LNBR_BASS: string;
    ROAD_NM_BASS: string;
    MAIN_BDNBR_BASS: string;
    SEC_BDNBR_BASS: string;
    BULD_NM_BASS: string;
    BULD_NM_ETC_BASS: string;
    CTRD_CODE_ENTRPS: string;
    SIGNGU_CODE_ENTRPS: string;
    DONG_CODE_ENTRPS: string;
    LI_CODE_ENTRPS: string;
    MNTN_LNBR_AT_ENTRPS: string;
    MAIN_LNBR_ENTRPS: string;
    SEC_LNBR_ENTRPS: string;
    ROAD_NM_ENTRPS: string;
    MAIN_BDNBR_ENTRPS: string;
    SEC_BDNBR_ENTRPS: string;
    BULD_NM_ENTRPS: string;
    BULD_NM_ETC_ENTRPS: string;
    AJRTNREASON: string;
    CNTRWK_CPR_AT: string;
    RCEPT_SIDO: string;
    RCEPT_SIGNGU: string;
    RCEPT_DONG: string;
    RCEPT_RI: string;
    RCEPT_MNTN_LNBR_AT: string;
    RCEPT_MAIN_LNBR: string;
    RCEPT_SEC_LNBR: string;
    RCEPT_ROAD_NM: string;
    RCEPT_MAIN_BDNBR: string;
    RCEPTSEC_BDNBR: string;
    RCEPT_BULD_NM: string;
    RCEPT_BULD_NM_ETC: string;
    RCEPT_BASS_ADRES: string;
    RCEPT_ETC_ADRES: string;
}

export interface Ids_MANY_ARSON_AT {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oMaster {
}

export interface Ids_SiteGubun {
    CD: string;
    DATA: string;
}

export interface Ids_RLSOFC_STTUS_CODE {
    CD: string;
    DATA: string;
}

export interface Ids_ARSON_GUBUN {
    CD: string;
    DATA: string;
}

export interface Ids_Ajbizgubun {
    CD: string;
    DATA: string;
}

export interface Ids_DoubleAT {
    CD: string;
    DATA: string;
}

export interface IdsI_LIC_GUBUN {
    CD: string;
    DATA: string;
}

export interface Ids_iauthority {
    AJMGNO: string;
    BILD_SN: string;
    MNGT_SEQ: string;
    MNGT_USE_AT: string;
    MNGT_NM: string;
    MNGT_SE: string;
    MNGT_CEONM: string;
    MNGT_TEPHON: string;
    UNDERND_FOOR_QT: string;
    TRRPHNM_FLOOR_QT: string;
    TORAR: string;
    BOTTOM_AR: string;
    DONG_QT: string;
}

export interface Ids_iMasterTab2 {
    AJDATE: string;
    AJSTATUS: string;
    AJMGNO: string;
    AJMOTHOD: string;
    BILD_SN: string;
    PARTCPNT_SN_2: string;
    PARTCPNT_CODE_2: string;
    PARTCPNT_2: string;
    IHIDNUM_2: string;
    TLPHON_NO_2: string;
    RLSOFC_RESN_2: string;
    O_NM_2: string;
    O_IHIDNUM_2: string;
    RLSOFC_DE_8_2: string;
    AJBIZGUBUN_2: string;
    O_QUALFUSER_SN_2: string;
    O_PERSONKEY_2: string;
    O_APNT_DE_8_2: string;
    ARSON_GUBUN: string;
    ARSON_COURSECD_2: string;
    PUBLIC_AT: string;
    O_HPNO_2: string;
    I_NM_2: string;
    I_IHIDNUM_2: string;
    I_QUALFUSER_SN_2: string;
    I_PERSONKEY_2: string;
    I_HPNO_2: string;
    LAST_EDC_DE_08_2: string;
    I_APNT_DE_8_2: string;
    EMAIL_2: string;
    ARSON_MANAGE_PKTBUK_NO_2: string;
    CAREER_2: string;
    I_TLPHON_NO_2: string;
}

export interface Ids_oMasterList {
}

export interface Ids_iGubun {
    CD: string;
    DATA: string;
}

export interface Ids_RESUYN {
    CD: string;
    DATA: string;
}

export interface Ids_oList {
}

export interface Ids_CNTRWK_EVNC {
    CD: string;
    DATA: string;
}

export interface Ids_CNTRWK_SPRVISOR_SE {
    CD: string;
    DATA: string;
}

export interface Ids_oAuthority {
}

export interface Ids_FireSaftAt {
    CD: string;
    DATA: string;
}

export interface Ids_oAddr2 {
    CD: string;
    DATA: string;
}

export interface Ids_chk100 {
    CD: string;
    DATA: string;
}

export interface Ids_chk4 {
    CD: string;
    DATA: string;
}

export interface Ids_date {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu_Search {
    CD: string;
    DATA: string;
    JIBUCD: string;
}

export interface Ids_oFileList {
    AJMGNO: string;
    AJFSEQ: string;
    AJFGUBUN: string;
    AJFPATH: string;
    AJIFFILENM: string;
    AJFREALFILENM: string;
}

export interface Ids_oFileUpload {
    AJMGNO: string;
    AJFSEQ: string;
    AJFGUBUN: string;
    AJFPATH: string;
    AJIFFILENM: string;
    AJFREALFILENM: string;
}

export interface Ids_oFileList_2 {
    AJMGNO: string;
    AJFSEQ: string;
    AJFGUBUN: string;
    AJFPATH: string;
    AJIFFILENM: string;
    AJFREALFILENM: string;
}

export interface Ids_oFileUpload_2 {
    AJMGNO: string;
    AJFSEQ: string;
    AJFGUBUN: string;
    AJFPATH: string;
    AJIFFILENM: string;
    AJFREALFILENM: string;
}

export interface Ids_MNGT_SE {
    CD: string;
    DATA: string;
}

export interface IDataset0 {
    CD: string;
    DATA: string;
}

export interface Ids_MNGTSEQ {
    CD: string;
    DATA: string;
}

export interface Ids_SBList {
}

export interface Ids_SBBList {
    O_APNT_DE_8: string;
    O_QUALFUSER_SN: string;
    O_PERSONKEY: string;
    O_NM: string;
    O_IHIDNUM: string;
    CHK: string;
}

export interface Ids_CNTRWK_EVNC_G {
    CD: string;
    DATA: string;
}

export interface Ids_CNTRWK_SPRVISOR_SE_G {
    CD: string;
    DATA: string;
}

export interface Ids_oBizCd {
    CD: string;
    DATA: string;
}

export const useFrmcust3030MFireManagerJubsuManagement = () => {
    const [ds_Chk1, setds_Chk1] = useState<Ids_Chk1[]>([]);
    const [ds_Chk2, setds_Chk2] = useState<Ids_Chk2[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_KwanYN, setds_KwanYN] = useState<Ids_KwanYN[]>([]);
    const [ds_KRmanagement, setds_KRmanagement] = useState<Ids_KRmanagement[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oOwnerGubun, setds_oOwnerGubun] = useState<Ids_oOwnerGubun[]>([]);
    const [ds_USEYN, setds_USEYN] = useState<Ids_USEYN[]>([]);
    const [ds_chk3, setds_chk3] = useState<Ids_chk3[]>([]);
    const [ds_PublicAT, setds_PublicAT] = useState<Ids_PublicAT[]>([]);
    const [ds_List, setds_List] = useState<Ids_List[]>([]);
    const [ds_iMaster, setds_iMaster] = useState<Ids_iMaster[]>([]);
    const [ds_MANY_ARSON_AT, setds_MANY_ARSON_AT] = useState<Ids_MANY_ARSON_AT[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oMaster, setds_oMaster] = useState<Ids_oMaster[]>([]);
    const [ds_SiteGubun, setds_SiteGubun] = useState<Ids_SiteGubun[]>([]);
    const [ds_RLSOFC_STTUS_CODE, setds_RLSOFC_STTUS_CODE] = useState<Ids_RLSOFC_STTUS_CODE[]>([]);
    const [ds_ARSON_GUBUN, setds_ARSON_GUBUN] = useState<Ids_ARSON_GUBUN[]>([]);
    const [ds_Ajbizgubun, setds_Ajbizgubun] = useState<Ids_Ajbizgubun[]>([]);
    const [ds_DoubleAT, setds_DoubleAT] = useState<Ids_DoubleAT[]>([]);
    const [dsI_LIC_GUBUN, setdsI_LIC_GUBUN] = useState<IdsI_LIC_GUBUN[]>([]);
    const [ds_iauthority, setds_iauthority] = useState<Ids_iauthority[]>([]);
    const [ds_iMasterTab2, setds_iMasterTab2] = useState<Ids_iMasterTab2[]>([]);
    const [ds_oMasterList, setds_oMasterList] = useState<Ids_oMasterList[]>([]);
    const [ds_iGubun, setds_iGubun] = useState<Ids_iGubun[]>([]);
    const [ds_RESUYN, setds_RESUYN] = useState<Ids_RESUYN[]>([]);
    const [ds_oList, setds_oList] = useState<Ids_oList[]>([]);
    const [ds_CNTRWK_EVNC, setds_CNTRWK_EVNC] = useState<Ids_CNTRWK_EVNC[]>([]);
    const [ds_CNTRWK_SPRVISOR_SE, setds_CNTRWK_SPRVISOR_SE] = useState<Ids_CNTRWK_SPRVISOR_SE[]>([]);
    const [ds_oAuthority, setds_oAuthority] = useState<Ids_oAuthority[]>([]);
    const [ds_FireSaftAt, setds_FireSaftAt] = useState<Ids_FireSaftAt[]>([]);
    const [ds_oAddr2, setds_oAddr2] = useState<Ids_oAddr2[]>([]);
    const [ds_chk100, setds_chk100] = useState<Ids_chk100[]>([]);
    const [ds_chk4, setds_chk4] = useState<Ids_chk4[]>([]);
    const [ds_date, setds_date] = useState<Ids_date[]>([]);
    const [ds_oJibu_Search, setds_oJibu_Search] = useState<Ids_oJibu_Search[]>([]);
    const [ds_oFileList, setds_oFileList] = useState<Ids_oFileList[]>([]);
    const [ds_oFileUpload, setds_oFileUpload] = useState<Ids_oFileUpload[]>([]);
    const [ds_oFileList_2, setds_oFileList_2] = useState<Ids_oFileList_2[]>([]);
    const [ds_oFileUpload_2, setds_oFileUpload_2] = useState<Ids_oFileUpload_2[]>([]);
    const [ds_MNGT_SE, setds_MNGT_SE] = useState<Ids_MNGT_SE[]>([]);
    const [Dataset0, setDataset0] = useState<IDataset0[]>([]);
    const [ds_MNGTSEQ, setds_MNGTSEQ] = useState<Ids_MNGTSEQ[]>([]);
    const [ds_SBList, setds_SBList] = useState<Ids_SBList[]>([]);
    const [ds_SBBList, setds_SBBList] = useState<Ids_SBBList[]>([]);
    const [ds_CNTRWK_EVNC_G, setds_CNTRWK_EVNC_G] = useState<Ids_CNTRWK_EVNC_G[]>([]);
    const [ds_CNTRWK_SPRVISOR_SE_G, setds_CNTRWK_SPRVISOR_SE_G] = useState<Ids_CNTRWK_SPRVISOR_SE_G[]>([]);
    const [ds_oBizCd, setds_oBizCd] = useState<Ids_oBizCd[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_Chk1([]);
            setds_Chk2([]);
            setds_oManagerList([]);
            setds_oJibu([]);
            setds_KwanYN([]);
            setds_KRmanagement([]);
            setds_oFireCd([]);
            setds_oOwnerGubun([]);
            setds_USEYN([]);
            setds_chk3([]);
            setds_PublicAT([]);
            setds_List([]);
            setds_iMaster([]);
            setds_MANY_ARSON_AT([]);
            setds_oCourse([]);
            setds_oMaster([]);
            setds_SiteGubun([]);
            setds_RLSOFC_STTUS_CODE([]);
            setds_ARSON_GUBUN([]);
            setds_Ajbizgubun([]);
            setds_DoubleAT([]);
            setdsI_LIC_GUBUN([]);
            setds_iauthority([]);
            setds_iMasterTab2([]);
            setds_oMasterList([]);
            setds_iGubun([]);
            setds_RESUYN([]);
            setds_oList([]);
            setds_CNTRWK_EVNC([]);
            setds_CNTRWK_SPRVISOR_SE([]);
            setds_oAuthority([]);
            setds_FireSaftAt([]);
            setds_oAddr2([]);
            setds_chk100([]);
            setds_chk4([]);
            setds_date([]);
            setds_oJibu_Search([]);
            setds_oFileList([]);
            setds_oFileUpload([]);
            setds_oFileList_2([]);
            setds_oFileUpload_2([]);
            setds_MNGT_SE([]);
            setDataset0([]);
            setds_MNGTSEQ([]);
            setds_SBList([]);
            setds_SBBList([]);
            setds_CNTRWK_EVNC_G([]);
            setds_CNTRWK_SPRVISOR_SE_G([]);
            setds_oBizCd([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Button0_OnClick = () => {
        console.log('Button0_OnClick clicked');
    };
    const btnNewJubsu_OnClick = () => {
        console.log('btnNewJubsu_OnClick clicked');
    };
    const btnSendSms_OnClick = () => {
        console.log('btnSendSms_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfnBtnClick = () => {
        console.log('lfnBtnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search_main = () => {
        console.log('lfn_Search_main clicked');
    };
    const tabTab3_tabpgTab3Page1_Button0_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_Button0_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_Button13_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_Button13_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_Button14_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_Button14_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_Button4_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_Button4_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_Button6_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_Button6_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_Button7_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_Button7_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_btnDownLoad_Tab3_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnDownLoad_Tab3_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_btnSendSms_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnSendSms_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_btnUpLoad_Tab3_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnUpLoad_Tab3_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_btn_KwanNew_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btn_KwanNew_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_btn_KwanSave_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btn_KwanSave_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page2_Button6_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page2_Button6_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page2_btnCheck_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page2_btnCheck_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page3_Button0_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page3_Button0_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page3_Button6_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page3_Button6_OnClick clicked');
    };

    return {
        isLoading,
        ds_Chk1,
        ds_Chk2,
        ds_oManagerList,
        ds_oJibu,
        ds_KwanYN,
        ds_KRmanagement,
        ds_oFireCd,
        ds_oOwnerGubun,
        ds_USEYN,
        ds_chk3,
        ds_PublicAT,
        ds_List,
        ds_iMaster,
        ds_MANY_ARSON_AT,
        ds_oCourse,
        ds_oMaster,
        ds_SiteGubun,
        ds_RLSOFC_STTUS_CODE,
        ds_ARSON_GUBUN,
        ds_Ajbizgubun,
        ds_DoubleAT,
        dsI_LIC_GUBUN,
        ds_iauthority,
        ds_iMasterTab2,
        ds_oMasterList,
        ds_iGubun,
        ds_RESUYN,
        ds_oList,
        ds_CNTRWK_EVNC,
        ds_CNTRWK_SPRVISOR_SE,
        ds_oAuthority,
        ds_FireSaftAt,
        ds_oAddr2,
        ds_chk100,
        ds_chk4,
        ds_date,
        ds_oJibu_Search,
        ds_oFileList,
        ds_oFileUpload,
        ds_oFileList_2,
        ds_oFileUpload_2,
        ds_MNGT_SE,
        Dataset0,
        ds_MNGTSEQ,
        ds_SBList,
        ds_SBBList,
        ds_CNTRWK_EVNC_G,
        ds_CNTRWK_SPRVISOR_SE_G,
        ds_oBizCd,
        Button0_OnClick,
        btnNewJubsu_OnClick,
        btnSendSms_OnClick,
        btnToExcel_OnClick,
        lfnBtnClick,
        lfn_Cancel,
        lfn_Save,
        lfn_Search_main,
        tabTab3_tabpgTab3Page1_Button0_OnClick,
        tabTab3_tabpgTab3Page1_Button13_OnClick,
        tabTab3_tabpgTab3Page1_Button14_OnClick,
        tabTab3_tabpgTab3Page1_Button4_OnClick,
        tabTab3_tabpgTab3Page1_Button6_OnClick,
        tabTab3_tabpgTab3Page1_Button7_OnClick,
        tabTab3_tabpgTab3Page1_btnDownLoad_Tab3_OnClick,
        tabTab3_tabpgTab3Page1_btnSendSms_OnClick,
        tabTab3_tabpgTab3Page1_btnUpLoad_Tab3_OnClick,
        tabTab3_tabpgTab3Page1_btn_KwanNew_OnClick,
        tabTab3_tabpgTab3Page1_btn_KwanSave_OnClick,
        tabTab3_tabpgTab3Page2_Button6_OnClick,
        tabTab3_tabpgTab3Page2_btnCheck_OnClick,
        tabTab3_tabpgTab3Page3_Button0_OnClick,
        tabTab3_tabpgTab3Page3_Button6_OnClick,
    };
};