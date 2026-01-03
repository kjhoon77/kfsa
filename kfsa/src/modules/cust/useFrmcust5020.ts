// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oCourse, Ids_ioFireSurvey, Ids_ioCommonCode, Ids_ioFireSurveyAdministratorInfo, Ids_ioFireSurveyRelationInfo, Ids_ioFireSurveyLicenseInfo, Ids_ioFireSurveyDong, Ids_ioFireSurveyFloorStatus, Ids_ioFightFireCompany, Ids_ioFightFireCompanyPossessionHuman, Ids_ioFightFireCompanyFireLicenseInfo, Ids_ioDanMnfctretcInfo, Ids_ioDanTankInfo, Ids_ioDanStatusSuccession, Ids_ioDanManagerInfo, Ids_ioFireSurveySFloorStatus, Ids_ioFireSurveyFloorE, Ids_ioFireMapping, Ids_ioGubun, Ids_oFireCd, Ids_oFireCenterCd, Ids_oList, Ids_oFireHead, Ids_ioSearch, Ids_oSGubun, Ids_ioObjGubun, Ids_ioMNFCTRETCGubun, Ids_ioMNFCTRETCGubunD, Ids_ioCompanyGubun, Ids_ioPBLINSTT } from './Frmcust5020Data';

export const useFrmcust5020 = () => {
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
    const [isVisible_tabTab1, setIsVisible_tabTab1] = useState(true);
    const [isVisible_gdAdminList, setIsVisible_gdAdminList] = useState(true);
    const [isVisible_gdLicense, setIsVisible_gdLicense] = useState(true);
    const [isVisible_Static24, setIsVisible_Static24] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_gdRelation, setIsVisible_gdRelation] = useState(true);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_edMAIN_PRPOS_CODE, setIsVisible_edMAIN_PRPOS_CODE] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_edOBJ_NM, setIsVisible_edOBJ_NM] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_edOBJ_SE_CODE, setIsVisible_edOBJ_SE_CODE] = useState(true);
    const [isVisible_edOBJ_STDR_CODE, setIsVisible_edOBJ_STDR_CODE] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_edPLOT_AR, setIsVisible_edPLOT_AR] = useState(true);
    const [isVisible_edBOTTOM_AR, setIsVisible_edBOTTOM_AR] = useState(true);
    const [isVisible_edTOTAR, setIsVisible_edTOTAR] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_edADDR, setIsVisible_edADDR] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_edDYTM_TLPHON, setIsVisible_edDYTM_TLPHON] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_edFIRE_INSRNC_CMPNY_NM, setIsVisible_edFIRE_INSRNC_CMPNY_NM] = useState(true);
    const [isVisible_edCMPN119SC_ID, setIsVisible_edCMPN119SC_ID] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_edOBJ_REGIST_DE_8, setIsVisible_edOBJ_REGIST_DE_8] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_edMULTI_BARBR_AT, setIsVisible_edMULTI_BARBR_AT] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(true);
    const [isVisible_edNW_MULTI_BARBR_AT, setIsVisible_edNW_MULTI_BARBR_AT] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_edPBLINSTT_AT, setIsVisible_edPBLINSTT_AT] = useState(true);
    const [isVisible_edPBLINSTT_CL_CODE, setIsVisible_edPBLINSTT_CL_CODE] = useState(true);
    const [isVisible_Static17, setIsVisible_Static17] = useState(true);
    const [isVisible_edDGST_TRGET_AT, setIsVisible_edDGST_TRGET_AT] = useState(true);
    const [isVisible_Static18, setIsVisible_Static18] = useState(true);
    const [isVisible_edONSLFFBRD_AT, setIsVisible_edONSLFFBRD_AT] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_edLQTT_AT, setIsVisible_edLQTT_AT] = useState(true);
    const [isVisible_edLQTT_SE_CODE, setIsVisible_edLQTT_SE_CODE] = useState(true);
    const [isVisible_Static21, setIsVisible_Static21] = useState(true);
    const [isVisible_edUSE_AT, setIsVisible_edUSE_AT] = useState(true);
    const [isVisible_Static22, setIsVisible_Static22] = useState(true);
    const [isVisible_edREGIST_DE_14, setIsVisible_edREGIST_DE_14] = useState(true);
    const [isVisible_Static23, setIsVisible_Static23] = useState(true);
    const [isVisible_edUPDT_DE_14, setIsVisible_edUPDT_DE_14] = useState(true);
    const [isVisible_Static16, setIsVisible_Static16] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_Static20, setIsVisible_Static20] = useState(true);
    const [isVisible_gdDongStatus, setIsVisible_gdDongStatus] = useState(true);
    const [isVisible_edTRRPHNM_FLOOR_QT, setIsVisible_edTRRPHNM_FLOOR_QT] = useState(true);
    const [isVisible_edBULDDONG_SEC_PRPOS_CODE, setIsVisible_edBULDDONG_SEC_PRPOS_CODE] = useState(true);
    const [isVisible_edBULDDONG_MAIN_PRPOS_CODE, setIsVisible_edBULDDONG_MAIN_PRPOS_CODE] = useState(true);
    const [isVisible_edREPRSNT_BULDDONG_AT, setIsVisible_edREPRSNT_BULDDONG_AT] = useState(true);
    const [isVisible_edBULDDONG_NM, setIsVisible_edBULDDONG_NM] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_edENTRPS_QT, setIsVisible_edENTRPS_QT] = useState(true);
    const [isVisible_edHSHLD_QT, setIsVisible_edHSHLD_QT] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_edPRMISN_DE_8, setIsVisible_edPRMISN_DE_8] = useState(true);
    const [isVisible_edREMVL_DE_8, setIsVisible_edREMVL_DE_8] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_edSPECL_REFGE_STAIR_QT, setIsVisible_edSPECL_REFGE_STAIR_QT] = useState(true);
    const [isVisible_edSTRWRK_DE_8, setIsVisible_edSTRWRK_DE_8] = useState(true);
    const [isVisible_edUSE_CONFM_DE_8, setIsVisible_edUSE_CONFM_DE_8] = useState(true);
    const [isVisible_REMVL_AT, setIsVisible_REMVL_AT] = useState(true);
    const [isVisible_edSLOPE, setIsVisible_edSLOPE] = useState(true);
    const [isVisible_edELVTR, setIsVisible_edELVTR] = useState(true);
    const [isVisible_edENCY, setIsVisible_edENCY] = useState(true);
    const [isVisible_edESCLTR, setIsVisible_edESCLTR] = useState(true);
    const [isVisible_edEMGNC_ELVTR, setIsVisible_edEMGNC_ELVTR] = useState(true);
    const [isVisible_Static25, setIsVisible_Static25] = useState(true);
    const [isVisible_Static26, setIsVisible_Static26] = useState(true);
    const [isVisible_Static27, setIsVisible_Static27] = useState(true);
    const [isVisible_Static28, setIsVisible_Static28] = useState(true);
    const [isVisible_Edit0, setIsVisible_Edit0] = useState(true);
    const [isVisible_edUNDGRND_FLOOR_QT, setIsVisible_edUNDGRND_FLOOR_QT] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_Static29, setIsVisible_Static29] = useState(true);
    const [isVisible_Static30, setIsVisible_Static30] = useState(true);
    const [isVisible_Static31, setIsVisible_Static31] = useState(true);
    const [isVisible_Static32, setIsVisible_Static32] = useState(true);
    const [isVisible_edBULDDONG_HG, setIsVisible_edBULDDONG_HG] = useState(true);
    const [isVisible_Static33, setIsVisible_Static33] = useState(true);
    const [isVisible_edREFGE_STAIR_QT, setIsVisible_edREFGE_STAIR_QT] = useState(true);
    const [isVisible_edGNRL_STAIR_QT, setIsVisible_edGNRL_STAIR_QT] = useState(true);
    const [isVisible_edOUTHOUS_STAIR_QT, setIsVisible_edOUTHOUS_STAIR_QT] = useState(true);
    const [isVisible_Static34, setIsVisible_Static34] = useState(true);
    const [isVisible_Static35, setIsVisible_Static35] = useState(true);
    const [isVisible_Static36, setIsVisible_Static36] = useState(true);
    const [isVisible_Static37, setIsVisible_Static37] = useState(true);
    const [isVisible_lbEmailCnt, setIsVisible_lbEmailCnt] = useState(true);
    const [isVisible_cbxDongList, setIsVisible_cbxDongList] = useState(true);
    const [isVisible_gdSFloorStatus, setIsVisible_gdSFloorStatus] = useState(true);
    const [isVisible_gdFloorStatus, setIsVisible_gdFloorStatus] = useState(true);
    const [isVisible_radSGubun, setIsVisible_radSGubun] = useState(true);
    const [isVisible_gdFloorE, setIsVisible_gdFloorE] = useState(true);
    const [isVisible_tabTab2, setIsVisible_tabTab2] = useState(true);
    const [isVisible_edVHCLE_NO, setIsVisible_edVHCLE_NO] = useState(true);
    const [isVisible_edFOM, setIsVisible_edFOM] = useState(true);
    const [isVisible_edVHCLE_YEAR, setIsVisible_edVHCLE_YEAR] = useState(true);
    const [isVisible_edCARNM, setIsVisible_edCARNM] = useState(true);
    const [isVisible_edOKND_CODE, setIsVisible_edOKND_CODE] = useState(true);
    const [isVisible_edPRDNM_DETAIL, setIsVisible_edPRDNM_DETAIL] = useState(true);
    const [isVisible_edPRDNM_CODE, setIsVisible_edPRDNM_CODE] = useState(true);
    const [isVisible_edBEGIN_DE, setIsVisible_edBEGIN_DE] = useState(true);
    const [isVisible_edTANK_MXMMCPCTY, setIsVisible_edTANK_MXMMCPCTY] = useState(true);
    const [isVisible_edTNKROOM_CPCTY, setIsVisible_edTNKROOM_CPCTY] = useState(true);
    const [isVisible_edTANK_INSPCT_NO, setIsVisible_edTANK_INSPCT_NO] = useState(true);
    const [isVisible_gdStatusSucces, setIsVisible_gdStatusSucces] = useState(true);
    const [isVisible_gdManagerInfo, setIsVisible_gdManagerInfo] = useState(true);
    const [isVisible_edEQP_SUMRY, setIsVisible_edEQP_SUMRY] = useState(true);
    const [isVisible_edEQP_STDR, setIsVisible_edEQP_STDR] = useState(true);
    const [isVisible_gdTankInfo, setIsVisible_gdTankInfo] = useState(true);
    const [isVisible_lbINSTLR_Name, setIsVisible_lbINSTLR_Name] = useState(true);
    const [isVisible_edINSTLR_CPR_NM, setIsVisible_edINSTLR_CPR_NM] = useState(true);
    const [isVisible_lbINSTLR_Number, setIsVisible_lbINSTLR_Number] = useState(true);
    const [isVisible_edINSTLR_JURIRNO, setIsVisible_edINSTLR_JURIRNO] = useState(true);
    const [isVisible_edINSTLR_IHIDNUM, setIsVisible_edINSTLR_IHIDNUM] = useState(true);
    const [isVisible_edINSTLR_NM, setIsVisible_edINSTLR_NM] = useState(true);
    const [isVisible_edINSTLR_TELNO, setIsVisible_edINSTLR_TELNO] = useState(true);
    const [isVisible_edINSTLR_ADRES, setIsVisible_edINSTLR_ADRES] = useState(true);
    const [isVisible_edCMPFRSTT_NM, setIsVisible_edCMPFRSTT_NM] = useState(true);
    const [isVisible_esCM_ADRES_NM, setIsVisible_esCM_ADRES_NM] = useState(true);
    const [isVisible_edANTY_MUL_SM, setIsVisible_edANTY_MUL_SM] = useState(true);
    const [isVisible_edTRTMNT_SUMRY, setIsVisible_edTRTMNT_SUMRY] = useState(true);
    const [isVisible_edPRMISN_NO, setIsVisible_edPRMISN_NO] = useState(true);
    const [isVisible_edCNTANR_PRMISN_NO, setIsVisible_edCNTANR_PRMISN_NO] = useState(true);
    const [isVisible_edFRST_STRWRK_DE, setIsVisible_edFRST_STRWRK_DE] = useState(true);
    const [isVisible_edCOMPET_DE, setIsVisible_edCOMPET_DE] = useState(true);
    const [isVisible_edPAUSE_ABL_SE, setIsVisible_edPAUSE_ABL_SE] = useState(true);
    const [isVisible_edPAUSE_ABL_DE, setIsVisible_edPAUSE_ABL_DE] = useState(true);
    const [isVisible_edPRPOS_ABL_RESN, setIsVisible_edPRPOS_ABL_RESN] = useState(true);
    const [isVisible_edBULDDONG_FLOOR_SN, setIsVisible_edBULDDONG_FLOOR_SN] = useState(true);
    const [isVisible_edITL_NO, setIsVisible_edITL_NO] = useState(true);
    const [isVisible_edMNFCTRETC_SE_CODE, setIsVisible_edMNFCTRETC_SE_CODE] = useState(true);
    const [isVisible_edMNFCTRETC_DETAIL_SE_CODE, setIsVisible_edMNFCTRETC_DETAIL_SE_CODE] = useState(true);
    const [isVisible_edDGST_TMPRSTRE_AT, setIsVisible_edDGST_TMPRSTRE_AT] = useState(true);
    const [isVisible_edPRMISN_DE, setIsVisible_edPRMISN_DE] = useState(true);
    const [isVisible_edCPR_AT_NM, setIsVisible_edCPR_AT_NM] = useState(true);
    const [isVisible_edARMY_DGST_AT, setIsVisible_edARMY_DGST_AT] = useState(true);
    const [isVisible_edENTRPS_NM, setIsVisible_edENTRPS_NM] = useState(true);
    const [isVisible_edENTRPS_SENM, setIsVisible_edENTRPS_SENM] = useState(true);
    const [isVisible_edENTRPS_DETAIL_SENM, setIsVisible_edENTRPS_DETAIL_SENM] = useState(true);
    const [isVisible_edBSNM_REGIST_NO, setIsVisible_edBSNM_REGIST_NO] = useState(true);
    const [isVisible_edRPRSNTV, setIsVisible_edRPRSNTV] = useState(true);
    const [isVisible_edCMPN119SC_NM, setIsVisible_edCMPN119SC_NM] = useState(true);
    const [isVisible_edTLPHON_NO, setIsVisible_edTLPHON_NO] = useState(true);
    const [isVisible_edFAX_NO, setIsVisible_edFAX_NO] = useState(true);
    const [isVisible_edregdate, setIsVisible_edregdate] = useState(true);
    const [isVisible_edmoddate, setIsVisible_edmoddate] = useState(true);
    const [isVisible_gdPHuman, setIsVisible_gdPHuman] = useState(true);
    const [isVisible_gdLicenscInfo, setIsVisible_gdLicenscInfo] = useState(true);
    const [isVisible_gdList50, setIsVisible_gdList50] = useState(false);
    const [isVisible_gdList80, setIsVisible_gdList80] = useState(false);
    const [isVisible_gdList10, setIsVisible_gdList10] = useState(false);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbTitle, setIsVisible_lbTitle] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(false);
    const [isVisible_radAgent, setIsVisible_radAgent] = useState(true);
    const [isVisible_edKeyWord, setIsVisible_edKeyWord] = useState(true);
    const [isVisible_cbxHead, setIsVisible_cbxHead] = useState(true);
    const [isVisible_cbxStation, setIsVisible_cbxStation] = useState(true);
    const [isVisible_edCount, setIsVisible_edCount] = useState(true);
    const [isVisible_lbTotalCnt, setIsVisible_lbTotalCnt] = useState(true);
    const [isVisible_medTotalCnt, setIsVisible_medTotalCnt] = useState(true);
    const [isVisible_chkPerson, setIsVisible_chkPerson] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_cbxCenter, setIsVisible_cbxCenter] = useState(true);
    const [isVisible_radGubun, setIsVisible_radGubun] = useState(true);
    const [isVisible_lbCodeGubun, setIsVisible_lbCodeGubun] = useState(true);
    const [isVisible_cbxCodeGubun, setIsVisible_cbxCodeGubun] = useState(true);
    const [isVisible_cbxCodeGubunD, setIsVisible_cbxCodeGubunD] = useState(false);
    const [isVisible_Static47, setIsVisible_Static47] = useState(false);
    const [isVisible_cbxMFPBLINSTT, setIsVisible_cbxMFPBLINSTT] = useState(false);
    const [isVisible_btnDataHistory, setIsVisible_btnDataHistory] = useState(true);
    const [isVisible_gdList30, setIsVisible_gdList30] = useState(false);
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);
    const [tabValue_tabTab2, setTabValue_tabTab2] = useState(0);

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
        isVisible_tabTab1,
        setIsVisible_tabTab1,
        isVisible_gdAdminList,
        setIsVisible_gdAdminList,
        isVisible_gdLicense,
        setIsVisible_gdLicense,
        isVisible_Static24,
        setIsVisible_Static24,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_gdRelation,
        setIsVisible_gdRelation,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_edMAIN_PRPOS_CODE,
        setIsVisible_edMAIN_PRPOS_CODE,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edOBJ_NM,
        setIsVisible_edOBJ_NM,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edOBJ_SE_CODE,
        setIsVisible_edOBJ_SE_CODE,
        isVisible_edOBJ_STDR_CODE,
        setIsVisible_edOBJ_STDR_CODE,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_edPLOT_AR,
        setIsVisible_edPLOT_AR,
        isVisible_edBOTTOM_AR,
        setIsVisible_edBOTTOM_AR,
        isVisible_edTOTAR,
        setIsVisible_edTOTAR,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edADDR,
        setIsVisible_edADDR,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_edDYTM_TLPHON,
        setIsVisible_edDYTM_TLPHON,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_edFIRE_INSRNC_CMPNY_NM,
        setIsVisible_edFIRE_INSRNC_CMPNY_NM,
        isVisible_edCMPN119SC_ID,
        setIsVisible_edCMPN119SC_ID,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_edOBJ_REGIST_DE_8,
        setIsVisible_edOBJ_REGIST_DE_8,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_edMULTI_BARBR_AT,
        setIsVisible_edMULTI_BARBR_AT,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_edNW_MULTI_BARBR_AT,
        setIsVisible_edNW_MULTI_BARBR_AT,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_edPBLINSTT_AT,
        setIsVisible_edPBLINSTT_AT,
        isVisible_edPBLINSTT_CL_CODE,
        setIsVisible_edPBLINSTT_CL_CODE,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_edDGST_TRGET_AT,
        setIsVisible_edDGST_TRGET_AT,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_edONSLFFBRD_AT,
        setIsVisible_edONSLFFBRD_AT,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_edLQTT_AT,
        setIsVisible_edLQTT_AT,
        isVisible_edLQTT_SE_CODE,
        setIsVisible_edLQTT_SE_CODE,
        isVisible_Static21,
        setIsVisible_Static21,
        isVisible_edUSE_AT,
        setIsVisible_edUSE_AT,
        isVisible_Static22,
        setIsVisible_Static22,
        isVisible_edREGIST_DE_14,
        setIsVisible_edREGIST_DE_14,
        isVisible_Static23,
        setIsVisible_Static23,
        isVisible_edUPDT_DE_14,
        setIsVisible_edUPDT_DE_14,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_gdDongStatus,
        setIsVisible_gdDongStatus,
        isVisible_edTRRPHNM_FLOOR_QT,
        setIsVisible_edTRRPHNM_FLOOR_QT,
        isVisible_edBULDDONG_SEC_PRPOS_CODE,
        setIsVisible_edBULDDONG_SEC_PRPOS_CODE,
        isVisible_edBULDDONG_MAIN_PRPOS_CODE,
        setIsVisible_edBULDDONG_MAIN_PRPOS_CODE,
        isVisible_edREPRSNT_BULDDONG_AT,
        setIsVisible_edREPRSNT_BULDDONG_AT,
        isVisible_edBULDDONG_NM,
        setIsVisible_edBULDDONG_NM,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_edENTRPS_QT,
        setIsVisible_edENTRPS_QT,
        isVisible_edHSHLD_QT,
        setIsVisible_edHSHLD_QT,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_edPRMISN_DE_8,
        setIsVisible_edPRMISN_DE_8,
        isVisible_edREMVL_DE_8,
        setIsVisible_edREMVL_DE_8,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_edSPECL_REFGE_STAIR_QT,
        setIsVisible_edSPECL_REFGE_STAIR_QT,
        isVisible_edSTRWRK_DE_8,
        setIsVisible_edSTRWRK_DE_8,
        isVisible_edUSE_CONFM_DE_8,
        setIsVisible_edUSE_CONFM_DE_8,
        isVisible_REMVL_AT,
        setIsVisible_REMVL_AT,
        isVisible_edSLOPE,
        setIsVisible_edSLOPE,
        isVisible_edELVTR,
        setIsVisible_edELVTR,
        isVisible_edENCY,
        setIsVisible_edENCY,
        isVisible_edESCLTR,
        setIsVisible_edESCLTR,
        isVisible_edEMGNC_ELVTR,
        setIsVisible_edEMGNC_ELVTR,
        isVisible_Static25,
        setIsVisible_Static25,
        isVisible_Static26,
        setIsVisible_Static26,
        isVisible_Static27,
        setIsVisible_Static27,
        isVisible_Static28,
        setIsVisible_Static28,
        isVisible_Edit0,
        setIsVisible_Edit0,
        isVisible_edUNDGRND_FLOOR_QT,
        setIsVisible_edUNDGRND_FLOOR_QT,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Static29,
        setIsVisible_Static29,
        isVisible_Static30,
        setIsVisible_Static30,
        isVisible_Static31,
        setIsVisible_Static31,
        isVisible_Static32,
        setIsVisible_Static32,
        isVisible_edBULDDONG_HG,
        setIsVisible_edBULDDONG_HG,
        isVisible_Static33,
        setIsVisible_Static33,
        isVisible_edREFGE_STAIR_QT,
        setIsVisible_edREFGE_STAIR_QT,
        isVisible_edGNRL_STAIR_QT,
        setIsVisible_edGNRL_STAIR_QT,
        isVisible_edOUTHOUS_STAIR_QT,
        setIsVisible_edOUTHOUS_STAIR_QT,
        isVisible_Static34,
        setIsVisible_Static34,
        isVisible_Static35,
        setIsVisible_Static35,
        isVisible_Static36,
        setIsVisible_Static36,
        isVisible_Static37,
        setIsVisible_Static37,
        isVisible_lbEmailCnt,
        setIsVisible_lbEmailCnt,
        isVisible_cbxDongList,
        setIsVisible_cbxDongList,
        isVisible_gdSFloorStatus,
        setIsVisible_gdSFloorStatus,
        isVisible_gdFloorStatus,
        setIsVisible_gdFloorStatus,
        isVisible_radSGubun,
        setIsVisible_radSGubun,
        isVisible_gdFloorE,
        setIsVisible_gdFloorE,
        isVisible_tabTab2,
        setIsVisible_tabTab2,
        isVisible_edVHCLE_NO,
        setIsVisible_edVHCLE_NO,
        isVisible_edFOM,
        setIsVisible_edFOM,
        isVisible_edVHCLE_YEAR,
        setIsVisible_edVHCLE_YEAR,
        isVisible_edCARNM,
        setIsVisible_edCARNM,
        isVisible_edOKND_CODE,
        setIsVisible_edOKND_CODE,
        isVisible_edPRDNM_DETAIL,
        setIsVisible_edPRDNM_DETAIL,
        isVisible_edPRDNM_CODE,
        setIsVisible_edPRDNM_CODE,
        isVisible_edBEGIN_DE,
        setIsVisible_edBEGIN_DE,
        isVisible_edTANK_MXMMCPCTY,
        setIsVisible_edTANK_MXMMCPCTY,
        isVisible_edTNKROOM_CPCTY,
        setIsVisible_edTNKROOM_CPCTY,
        isVisible_edTANK_INSPCT_NO,
        setIsVisible_edTANK_INSPCT_NO,
        isVisible_gdStatusSucces,
        setIsVisible_gdStatusSucces,
        isVisible_gdManagerInfo,
        setIsVisible_gdManagerInfo,
        isVisible_edEQP_SUMRY,
        setIsVisible_edEQP_SUMRY,
        isVisible_edEQP_STDR,
        setIsVisible_edEQP_STDR,
        isVisible_gdTankInfo,
        setIsVisible_gdTankInfo,
        isVisible_lbINSTLR_Name,
        setIsVisible_lbINSTLR_Name,
        isVisible_edINSTLR_CPR_NM,
        setIsVisible_edINSTLR_CPR_NM,
        isVisible_lbINSTLR_Number,
        setIsVisible_lbINSTLR_Number,
        isVisible_edINSTLR_JURIRNO,
        setIsVisible_edINSTLR_JURIRNO,
        isVisible_edINSTLR_IHIDNUM,
        setIsVisible_edINSTLR_IHIDNUM,
        isVisible_edINSTLR_NM,
        setIsVisible_edINSTLR_NM,
        isVisible_edINSTLR_TELNO,
        setIsVisible_edINSTLR_TELNO,
        isVisible_edINSTLR_ADRES,
        setIsVisible_edINSTLR_ADRES,
        isVisible_edCMPFRSTT_NM,
        setIsVisible_edCMPFRSTT_NM,
        isVisible_esCM_ADRES_NM,
        setIsVisible_esCM_ADRES_NM,
        isVisible_edANTY_MUL_SM,
        setIsVisible_edANTY_MUL_SM,
        isVisible_edTRTMNT_SUMRY,
        setIsVisible_edTRTMNT_SUMRY,
        isVisible_edPRMISN_NO,
        setIsVisible_edPRMISN_NO,
        isVisible_edCNTANR_PRMISN_NO,
        setIsVisible_edCNTANR_PRMISN_NO,
        isVisible_edFRST_STRWRK_DE,
        setIsVisible_edFRST_STRWRK_DE,
        isVisible_edCOMPET_DE,
        setIsVisible_edCOMPET_DE,
        isVisible_edPAUSE_ABL_SE,
        setIsVisible_edPAUSE_ABL_SE,
        isVisible_edPAUSE_ABL_DE,
        setIsVisible_edPAUSE_ABL_DE,
        isVisible_edPRPOS_ABL_RESN,
        setIsVisible_edPRPOS_ABL_RESN,
        isVisible_edBULDDONG_FLOOR_SN,
        setIsVisible_edBULDDONG_FLOOR_SN,
        isVisible_edITL_NO,
        setIsVisible_edITL_NO,
        isVisible_edMNFCTRETC_SE_CODE,
        setIsVisible_edMNFCTRETC_SE_CODE,
        isVisible_edMNFCTRETC_DETAIL_SE_CODE,
        setIsVisible_edMNFCTRETC_DETAIL_SE_CODE,
        isVisible_edDGST_TMPRSTRE_AT,
        setIsVisible_edDGST_TMPRSTRE_AT,
        isVisible_edPRMISN_DE,
        setIsVisible_edPRMISN_DE,
        isVisible_edCPR_AT_NM,
        setIsVisible_edCPR_AT_NM,
        isVisible_edARMY_DGST_AT,
        setIsVisible_edARMY_DGST_AT,
        isVisible_edENTRPS_NM,
        setIsVisible_edENTRPS_NM,
        isVisible_edENTRPS_SENM,
        setIsVisible_edENTRPS_SENM,
        isVisible_edENTRPS_DETAIL_SENM,
        setIsVisible_edENTRPS_DETAIL_SENM,
        isVisible_edBSNM_REGIST_NO,
        setIsVisible_edBSNM_REGIST_NO,
        isVisible_edRPRSNTV,
        setIsVisible_edRPRSNTV,
        isVisible_edCMPN119SC_NM,
        setIsVisible_edCMPN119SC_NM,
        isVisible_edTLPHON_NO,
        setIsVisible_edTLPHON_NO,
        isVisible_edFAX_NO,
        setIsVisible_edFAX_NO,
        isVisible_edregdate,
        setIsVisible_edregdate,
        isVisible_edmoddate,
        setIsVisible_edmoddate,
        isVisible_gdPHuman,
        setIsVisible_gdPHuman,
        isVisible_gdLicenscInfo,
        setIsVisible_gdLicenscInfo,
        isVisible_gdList50,
        setIsVisible_gdList50,
        isVisible_gdList80,
        setIsVisible_gdList80,
        isVisible_gdList10,
        setIsVisible_gdList10,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbTitle,
        setIsVisible_lbTitle,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_radAgent,
        setIsVisible_radAgent,
        isVisible_edKeyWord,
        setIsVisible_edKeyWord,
        isVisible_cbxHead,
        setIsVisible_cbxHead,
        isVisible_cbxStation,
        setIsVisible_cbxStation,
        isVisible_edCount,
        setIsVisible_edCount,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_chkPerson,
        setIsVisible_chkPerson,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_cbxCenter,
        setIsVisible_cbxCenter,
        isVisible_radGubun,
        setIsVisible_radGubun,
        isVisible_lbCodeGubun,
        setIsVisible_lbCodeGubun,
        isVisible_cbxCodeGubun,
        setIsVisible_cbxCodeGubun,
        isVisible_cbxCodeGubunD,
        setIsVisible_cbxCodeGubunD,
        isVisible_Static47,
        setIsVisible_Static47,
        isVisible_cbxMFPBLINSTT,
        setIsVisible_cbxMFPBLINSTT,
        isVisible_btnDataHistory,
        setIsVisible_btnDataHistory,
        isVisible_gdList30,
        setIsVisible_gdList30,
        tabValue_tabTab1,
        setTabValue_tabTab1,
        tabValue_tabTab2,
        setTabValue_tabTab2,
        btnDataHistory_OnClick,
        btnToExcel_OnClick,
        lfn_End,
        lfn_Search,
    };
};