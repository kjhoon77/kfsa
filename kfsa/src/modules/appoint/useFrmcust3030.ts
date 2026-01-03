// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oCourse, Ids_ioFireSurvey, Ids_ioCommonCode, Ids_ioFireSurveyAdministratorInfo, Ids_ioFireSurveyRelationInfo, Ids_ioFireSurveyLicenseInfo, Ids_ioFireSurveyDong, Ids_ioFireSurveyFloorStatus, Ids_ioFightFireCompany, Ids_ioFightFireCompanyPossessionHuman, Ids_ioFightFireCompanyFireLicenseInfo, Ids_ioDanMnfctretcInfo, Ids_ioDanTankInfo, Ids_ioDanStatusSuccession, Ids_ioDanManagerInfo, Ids_ioFireSurveySFloorStatus, Ids_ioFireSurveyFloorE, Ids_ioFireMapping, Ids_ioGubun, Ids_oFireCd, Ids_oFireCenterCd, Ids_oList, Ids_oFireHead, Ids_ioSearch, Ids_oSGubun, Ids_ioObjGubun, Ids_ioMNFCTRETCGubun, Ids_ioMNFCTRETCGubunD, Ids_ioCompanyGubun, Ids_ioPBLINSTT } from './Frmcust3030Data';

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
    const [rawVisible_tabTab1, setRawVisible_tabTab1] = useState(true);
    const [rawVisible_gdAdminList, setRawVisible_gdAdminList] = useState(true);
    const [rawVisible_gdLicense, setRawVisible_gdLicense] = useState(true);
    const [rawVisible_Static24, setRawVisible_Static24] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_gdRelation, setRawVisible_gdRelation] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_edMAIN_PRPOS_CODE, setRawVisible_edMAIN_PRPOS_CODE] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_edOBJ_NM, setRawVisible_edOBJ_NM] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_edOBJ_SE_CODE, setRawVisible_edOBJ_SE_CODE] = useState(true);
    const [rawVisible_edOBJ_STDR_CODE, setRawVisible_edOBJ_STDR_CODE] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_edPLOT_AR, setRawVisible_edPLOT_AR] = useState(true);
    const [rawVisible_edBOTTOM_AR, setRawVisible_edBOTTOM_AR] = useState(true);
    const [rawVisible_edTOTAR, setRawVisible_edTOTAR] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_edADDR, setRawVisible_edADDR] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_edDYTM_TLPHON, setRawVisible_edDYTM_TLPHON] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_edFIRE_INSRNC_CMPNY_NM, setRawVisible_edFIRE_INSRNC_CMPNY_NM] = useState(true);
    const [rawVisible_edCMPN119SC_ID, setRawVisible_edCMPN119SC_ID] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_edOBJ_REGIST_DE_8, setRawVisible_edOBJ_REGIST_DE_8] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_edMULTI_BARBR_AT, setRawVisible_edMULTI_BARBR_AT] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_edNW_MULTI_BARBR_AT, setRawVisible_edNW_MULTI_BARBR_AT] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_edPBLINSTT_AT, setRawVisible_edPBLINSTT_AT] = useState(true);
    const [rawVisible_edPBLINSTT_CL_CODE, setRawVisible_edPBLINSTT_CL_CODE] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_edDGST_TRGET_AT, setRawVisible_edDGST_TRGET_AT] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_edONSLFFBRD_AT, setRawVisible_edONSLFFBRD_AT] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_edLQTT_AT, setRawVisible_edLQTT_AT] = useState(true);
    const [rawVisible_edLQTT_SE_CODE, setRawVisible_edLQTT_SE_CODE] = useState(true);
    const [rawVisible_Static21, setRawVisible_Static21] = useState(true);
    const [rawVisible_edUSE_AT, setRawVisible_edUSE_AT] = useState(true);
    const [rawVisible_Static22, setRawVisible_Static22] = useState(true);
    const [rawVisible_edREGIST_DE_14, setRawVisible_edREGIST_DE_14] = useState(true);
    const [rawVisible_Static23, setRawVisible_Static23] = useState(true);
    const [rawVisible_edUPDT_DE_14, setRawVisible_edUPDT_DE_14] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_gdDongStatus, setRawVisible_gdDongStatus] = useState(true);
    const [rawVisible_edTRRPHNM_FLOOR_QT, setRawVisible_edTRRPHNM_FLOOR_QT] = useState(true);
    const [rawVisible_edBULDDONG_SEC_PRPOS_CODE, setRawVisible_edBULDDONG_SEC_PRPOS_CODE] = useState(true);
    const [rawVisible_edBULDDONG_MAIN_PRPOS_CODE, setRawVisible_edBULDDONG_MAIN_PRPOS_CODE] = useState(true);
    const [rawVisible_edREPRSNT_BULDDONG_AT, setRawVisible_edREPRSNT_BULDDONG_AT] = useState(true);
    const [rawVisible_edBULDDONG_NM, setRawVisible_edBULDDONG_NM] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_edENTRPS_QT, setRawVisible_edENTRPS_QT] = useState(true);
    const [rawVisible_edHSHLD_QT, setRawVisible_edHSHLD_QT] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_edPRMISN_DE_8, setRawVisible_edPRMISN_DE_8] = useState(true);
    const [rawVisible_edREMVL_DE_8, setRawVisible_edREMVL_DE_8] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_edSPECL_REFGE_STAIR_QT, setRawVisible_edSPECL_REFGE_STAIR_QT] = useState(true);
    const [rawVisible_edSTRWRK_DE_8, setRawVisible_edSTRWRK_DE_8] = useState(true);
    const [rawVisible_edUSE_CONFM_DE_8, setRawVisible_edUSE_CONFM_DE_8] = useState(true);
    const [rawVisible_REMVL_AT, setRawVisible_REMVL_AT] = useState(true);
    const [rawVisible_edSLOPE, setRawVisible_edSLOPE] = useState(true);
    const [rawVisible_edELVTR, setRawVisible_edELVTR] = useState(true);
    const [rawVisible_edENCY, setRawVisible_edENCY] = useState(true);
    const [rawVisible_edESCLTR, setRawVisible_edESCLTR] = useState(true);
    const [rawVisible_edEMGNC_ELVTR, setRawVisible_edEMGNC_ELVTR] = useState(true);
    const [rawVisible_Static25, setRawVisible_Static25] = useState(true);
    const [rawVisible_Static26, setRawVisible_Static26] = useState(true);
    const [rawVisible_Static27, setRawVisible_Static27] = useState(true);
    const [rawVisible_Static28, setRawVisible_Static28] = useState(true);
    const [rawVisible_Edit0, setRawVisible_Edit0] = useState(true);
    const [rawVisible_edUNDGRND_FLOOR_QT, setRawVisible_edUNDGRND_FLOOR_QT] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Static29, setRawVisible_Static29] = useState(true);
    const [rawVisible_Static30, setRawVisible_Static30] = useState(true);
    const [rawVisible_Static31, setRawVisible_Static31] = useState(true);
    const [rawVisible_Static32, setRawVisible_Static32] = useState(true);
    const [rawVisible_edBULDDONG_HG, setRawVisible_edBULDDONG_HG] = useState(true);
    const [rawVisible_Static33, setRawVisible_Static33] = useState(true);
    const [rawVisible_edREFGE_STAIR_QT, setRawVisible_edREFGE_STAIR_QT] = useState(true);
    const [rawVisible_edGNRL_STAIR_QT, setRawVisible_edGNRL_STAIR_QT] = useState(true);
    const [rawVisible_edOUTHOUS_STAIR_QT, setRawVisible_edOUTHOUS_STAIR_QT] = useState(true);
    const [rawVisible_Static34, setRawVisible_Static34] = useState(true);
    const [rawVisible_Static35, setRawVisible_Static35] = useState(true);
    const [rawVisible_Static36, setRawVisible_Static36] = useState(true);
    const [rawVisible_Static37, setRawVisible_Static37] = useState(true);
    const [rawVisible_lbEmailCnt, setRawVisible_lbEmailCnt] = useState(true);
    const [rawVisible_cbxDongList, setRawVisible_cbxDongList] = useState(true);
    const [rawVisible_gdSFloorStatus, setRawVisible_gdSFloorStatus] = useState(true);
    const [rawVisible_gdFloorStatus, setRawVisible_gdFloorStatus] = useState(true);
    const [rawVisible_radSGubun, setRawVisible_radSGubun] = useState(true);
    const [rawVisible_gdFloorE, setRawVisible_gdFloorE] = useState(true);
    const [rawVisible_tabTab2, setRawVisible_tabTab2] = useState(true);
    const [rawVisible_edVHCLE_NO, setRawVisible_edVHCLE_NO] = useState(true);
    const [rawVisible_edFOM, setRawVisible_edFOM] = useState(true);
    const [rawVisible_edVHCLE_YEAR, setRawVisible_edVHCLE_YEAR] = useState(true);
    const [rawVisible_edCARNM, setRawVisible_edCARNM] = useState(true);
    const [rawVisible_edOKND_CODE, setRawVisible_edOKND_CODE] = useState(true);
    const [rawVisible_edPRDNM_DETAIL, setRawVisible_edPRDNM_DETAIL] = useState(true);
    const [rawVisible_edPRDNM_CODE, setRawVisible_edPRDNM_CODE] = useState(true);
    const [rawVisible_edBEGIN_DE, setRawVisible_edBEGIN_DE] = useState(true);
    const [rawVisible_edTANK_MXMMCPCTY, setRawVisible_edTANK_MXMMCPCTY] = useState(true);
    const [rawVisible_edTNKROOM_CPCTY, setRawVisible_edTNKROOM_CPCTY] = useState(true);
    const [rawVisible_edTANK_INSPCT_NO, setRawVisible_edTANK_INSPCT_NO] = useState(true);
    const [rawVisible_gdStatusSucces, setRawVisible_gdStatusSucces] = useState(true);
    const [rawVisible_gdManagerInfo, setRawVisible_gdManagerInfo] = useState(true);
    const [rawVisible_edEQP_SUMRY, setRawVisible_edEQP_SUMRY] = useState(true);
    const [rawVisible_edEQP_STDR, setRawVisible_edEQP_STDR] = useState(true);
    const [rawVisible_gdTankInfo, setRawVisible_gdTankInfo] = useState(true);
    const [rawVisible_lbINSTLR_Name, setRawVisible_lbINSTLR_Name] = useState(true);
    const [rawVisible_edINSTLR_CPR_NM, setRawVisible_edINSTLR_CPR_NM] = useState(true);
    const [rawVisible_lbINSTLR_Number, setRawVisible_lbINSTLR_Number] = useState(true);
    const [rawVisible_edINSTLR_JURIRNO, setRawVisible_edINSTLR_JURIRNO] = useState(true);
    const [rawVisible_edINSTLR_IHIDNUM, setRawVisible_edINSTLR_IHIDNUM] = useState(true);
    const [rawVisible_edINSTLR_NM, setRawVisible_edINSTLR_NM] = useState(true);
    const [rawVisible_edINSTLR_TELNO, setRawVisible_edINSTLR_TELNO] = useState(true);
    const [rawVisible_edINSTLR_ADRES, setRawVisible_edINSTLR_ADRES] = useState(true);
    const [rawVisible_edCMPFRSTT_NM, setRawVisible_edCMPFRSTT_NM] = useState(true);
    const [rawVisible_esCM_ADRES_NM, setRawVisible_esCM_ADRES_NM] = useState(true);
    const [rawVisible_edANTY_MUL_SM, setRawVisible_edANTY_MUL_SM] = useState(true);
    const [rawVisible_edTRTMNT_SUMRY, setRawVisible_edTRTMNT_SUMRY] = useState(true);
    const [rawVisible_edPRMISN_NO, setRawVisible_edPRMISN_NO] = useState(true);
    const [rawVisible_edCNTANR_PRMISN_NO, setRawVisible_edCNTANR_PRMISN_NO] = useState(true);
    const [rawVisible_edFRST_STRWRK_DE, setRawVisible_edFRST_STRWRK_DE] = useState(true);
    const [rawVisible_edCOMPET_DE, setRawVisible_edCOMPET_DE] = useState(true);
    const [rawVisible_edPAUSE_ABL_SE, setRawVisible_edPAUSE_ABL_SE] = useState(true);
    const [rawVisible_edPAUSE_ABL_DE, setRawVisible_edPAUSE_ABL_DE] = useState(true);
    const [rawVisible_edPRPOS_ABL_RESN, setRawVisible_edPRPOS_ABL_RESN] = useState(true);
    const [rawVisible_edBULDDONG_FLOOR_SN, setRawVisible_edBULDDONG_FLOOR_SN] = useState(true);
    const [rawVisible_edITL_NO, setRawVisible_edITL_NO] = useState(true);
    const [rawVisible_edMNFCTRETC_SE_CODE, setRawVisible_edMNFCTRETC_SE_CODE] = useState(true);
    const [rawVisible_edMNFCTRETC_DETAIL_SE_CODE, setRawVisible_edMNFCTRETC_DETAIL_SE_CODE] = useState(true);
    const [rawVisible_edDGST_TMPRSTRE_AT, setRawVisible_edDGST_TMPRSTRE_AT] = useState(true);
    const [rawVisible_edPRMISN_DE, setRawVisible_edPRMISN_DE] = useState(true);
    const [rawVisible_edCPR_AT_NM, setRawVisible_edCPR_AT_NM] = useState(true);
    const [rawVisible_edARMY_DGST_AT, setRawVisible_edARMY_DGST_AT] = useState(true);
    const [rawVisible_edENTRPS_NM, setRawVisible_edENTRPS_NM] = useState(true);
    const [rawVisible_edENTRPS_SENM, setRawVisible_edENTRPS_SENM] = useState(true);
    const [rawVisible_edENTRPS_DETAIL_SENM, setRawVisible_edENTRPS_DETAIL_SENM] = useState(true);
    const [rawVisible_edBSNM_REGIST_NO, setRawVisible_edBSNM_REGIST_NO] = useState(true);
    const [rawVisible_edRPRSNTV, setRawVisible_edRPRSNTV] = useState(true);
    const [rawVisible_edCMPN119SC_NM, setRawVisible_edCMPN119SC_NM] = useState(true);
    const [rawVisible_edTLPHON_NO, setRawVisible_edTLPHON_NO] = useState(true);
    const [rawVisible_edFAX_NO, setRawVisible_edFAX_NO] = useState(true);
    const [rawVisible_edregdate, setRawVisible_edregdate] = useState(true);
    const [rawVisible_edmoddate, setRawVisible_edmoddate] = useState(true);
    const [rawVisible_gdPHuman, setRawVisible_gdPHuman] = useState(true);
    const [rawVisible_gdLicenscInfo, setRawVisible_gdLicenscInfo] = useState(true);
    const [rawVisible_gdList50, setRawVisible_gdList50] = useState(false);
    const [rawVisible_gdList80, setRawVisible_gdList80] = useState(false);
    const [rawVisible_gdList10, setRawVisible_gdList10] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbTitle, setRawVisible_lbTitle] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(false);
    const [rawVisible_radAgent, setRawVisible_radAgent] = useState(true);
    const [rawVisible_edKeyWord, setRawVisible_edKeyWord] = useState(true);
    const [rawVisible_cbxHead, setRawVisible_cbxHead] = useState(true);
    const [rawVisible_cbxStation, setRawVisible_cbxStation] = useState(true);
    const [rawVisible_edCount, setRawVisible_edCount] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_chkPerson, setRawVisible_chkPerson] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_cbxCenter, setRawVisible_cbxCenter] = useState(true);
    const [rawVisible_radGubun, setRawVisible_radGubun] = useState(true);
    const [rawVisible_lbCodeGubun, setRawVisible_lbCodeGubun] = useState(true);
    const [rawVisible_cbxCodeGubun, setRawVisible_cbxCodeGubun] = useState(true);
    const [rawVisible_cbxCodeGubunD, setRawVisible_cbxCodeGubunD] = useState(false);
    const [rawVisible_Static47, setRawVisible_Static47] = useState(false);
    const [rawVisible_cbxMFPBLINSTT, setRawVisible_cbxMFPBLINSTT] = useState(false);
    const [rawVisible_btnDataHistory, setRawVisible_btnDataHistory] = useState(false);
    const [rawVisible_gdList30, setRawVisible_gdList30] = useState(false);
    const [rawVisible_btnApply, setRawVisible_btnApply] = useState(true);
    const isVisible_tabTab1 = rawVisible_tabTab1;
    const setIsVisible_tabTab1 = setRawVisible_tabTab1;
    const isVisible_gdAdminList = rawVisible_gdAdminList;
    const setIsVisible_gdAdminList = setRawVisible_gdAdminList;
    const isVisible_gdLicense = rawVisible_gdLicense;
    const setIsVisible_gdLicense = setRawVisible_gdLicense;
    const isVisible_Static24 = rawVisible_Static24;
    const setIsVisible_Static24 = setRawVisible_Static24;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_gdRelation = rawVisible_gdRelation;
    const setIsVisible_gdRelation = setRawVisible_gdRelation;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_Static8 = rawVisible_Static8;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_edMAIN_PRPOS_CODE = rawVisible_edMAIN_PRPOS_CODE;
    const setIsVisible_edMAIN_PRPOS_CODE = setRawVisible_edMAIN_PRPOS_CODE;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_edOBJ_NM = rawVisible_edOBJ_NM;
    const setIsVisible_edOBJ_NM = setRawVisible_edOBJ_NM;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape1;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_edOBJ_SE_CODE = rawVisible_edOBJ_SE_CODE;
    const setIsVisible_edOBJ_SE_CODE = setRawVisible_edOBJ_SE_CODE;
    const isVisible_edOBJ_STDR_CODE = rawVisible_edOBJ_STDR_CODE;
    const setIsVisible_edOBJ_STDR_CODE = setRawVisible_edOBJ_STDR_CODE;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape1;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_edPLOT_AR = rawVisible_edPLOT_AR;
    const setIsVisible_edPLOT_AR = setRawVisible_edPLOT_AR;
    const isVisible_edBOTTOM_AR = rawVisible_edBOTTOM_AR;
    const setIsVisible_edBOTTOM_AR = setRawVisible_edBOTTOM_AR;
    const isVisible_edTOTAR = rawVisible_edTOTAR;
    const setIsVisible_edTOTAR = setRawVisible_edTOTAR;
    const isVisible_Static7 = rawVisible_Static7;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_edADDR = rawVisible_edADDR;
    const setIsVisible_edADDR = setRawVisible_edADDR;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape1;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_edDYTM_TLPHON = rawVisible_edDYTM_TLPHON;
    const setIsVisible_edDYTM_TLPHON = setRawVisible_edDYTM_TLPHON;
    const isVisible_Static10 = rawVisible_Static10;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_Static11 = rawVisible_Static11;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_edFIRE_INSRNC_CMPNY_NM = rawVisible_edFIRE_INSRNC_CMPNY_NM;
    const setIsVisible_edFIRE_INSRNC_CMPNY_NM = setRawVisible_edFIRE_INSRNC_CMPNY_NM;
    const isVisible_edCMPN119SC_ID = rawVisible_edCMPN119SC_ID;
    const setIsVisible_edCMPN119SC_ID = setRawVisible_edCMPN119SC_ID;
    const isVisible_Static12 = rawVisible_Static12;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_edOBJ_REGIST_DE_8 = rawVisible_edOBJ_REGIST_DE_8;
    const setIsVisible_edOBJ_REGIST_DE_8 = setRawVisible_edOBJ_REGIST_DE_8;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape1;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_edMULTI_BARBR_AT = rawVisible_edMULTI_BARBR_AT;
    const setIsVisible_edMULTI_BARBR_AT = setRawVisible_edMULTI_BARBR_AT;
    const isVisible_Static14 = rawVisible_Static14;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_edNW_MULTI_BARBR_AT = rawVisible_edNW_MULTI_BARBR_AT;
    const setIsVisible_edNW_MULTI_BARBR_AT = setRawVisible_edNW_MULTI_BARBR_AT;
    const isVisible_Static15 = rawVisible_Static15;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_edPBLINSTT_AT = rawVisible_edPBLINSTT_AT;
    const setIsVisible_edPBLINSTT_AT = setRawVisible_edPBLINSTT_AT;
    const isVisible_edPBLINSTT_CL_CODE = rawVisible_edPBLINSTT_CL_CODE;
    const setIsVisible_edPBLINSTT_CL_CODE = setRawVisible_edPBLINSTT_CL_CODE;
    const isVisible_Static17 = rawVisible_Static17;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_edDGST_TRGET_AT = rawVisible_edDGST_TRGET_AT;
    const setIsVisible_edDGST_TRGET_AT = setRawVisible_edDGST_TRGET_AT;
    const isVisible_Static18 = rawVisible_Static18;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_edONSLFFBRD_AT = rawVisible_edONSLFFBRD_AT;
    const setIsVisible_edONSLFFBRD_AT = setRawVisible_edONSLFFBRD_AT;
    const isVisible_Static19 = rawVisible_Static19;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_edLQTT_AT = rawVisible_edLQTT_AT;
    const setIsVisible_edLQTT_AT = setRawVisible_edLQTT_AT;
    const isVisible_edLQTT_SE_CODE = rawVisible_edLQTT_SE_CODE;
    const setIsVisible_edLQTT_SE_CODE = setRawVisible_edLQTT_SE_CODE;
    const isVisible_Static21 = rawVisible_Static21;
    const setIsVisible_Static21 = setRawVisible_Static21;
    const isVisible_edUSE_AT = rawVisible_edUSE_AT;
    const setIsVisible_edUSE_AT = setRawVisible_edUSE_AT;
    const isVisible_Static22 = rawVisible_Static22;
    const setIsVisible_Static22 = setRawVisible_Static22;
    const isVisible_edREGIST_DE_14 = rawVisible_edREGIST_DE_14;
    const setIsVisible_edREGIST_DE_14 = setRawVisible_edREGIST_DE_14;
    const isVisible_Static23 = rawVisible_Static23;
    const setIsVisible_Static23 = setRawVisible_Static23;
    const isVisible_edUPDT_DE_14 = rawVisible_edUPDT_DE_14;
    const setIsVisible_edUPDT_DE_14 = setRawVisible_edUPDT_DE_14;
    const isVisible_Static16 = rawVisible_Static16;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_Static5 = rawVisible_Static5;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_Static20 = rawVisible_Static20;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_gdDongStatus = rawVisible_gdDongStatus;
    const setIsVisible_gdDongStatus = setRawVisible_gdDongStatus;
    const isVisible_edTRRPHNM_FLOOR_QT = rawVisible_edTRRPHNM_FLOOR_QT;
    const setIsVisible_edTRRPHNM_FLOOR_QT = setRawVisible_edTRRPHNM_FLOOR_QT;
    const isVisible_edBULDDONG_SEC_PRPOS_CODE = rawVisible_edBULDDONG_SEC_PRPOS_CODE;
    const setIsVisible_edBULDDONG_SEC_PRPOS_CODE = setRawVisible_edBULDDONG_SEC_PRPOS_CODE;
    const isVisible_edBULDDONG_MAIN_PRPOS_CODE = rawVisible_edBULDDONG_MAIN_PRPOS_CODE;
    const setIsVisible_edBULDDONG_MAIN_PRPOS_CODE = setRawVisible_edBULDDONG_MAIN_PRPOS_CODE;
    const isVisible_edREPRSNT_BULDDONG_AT = rawVisible_edREPRSNT_BULDDONG_AT;
    const setIsVisible_edREPRSNT_BULDDONG_AT = setRawVisible_edREPRSNT_BULDDONG_AT;
    const isVisible_edBULDDONG_NM = rawVisible_edBULDDONG_NM;
    const setIsVisible_edBULDDONG_NM = setRawVisible_edBULDDONG_NM;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape1;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_edENTRPS_QT = rawVisible_edENTRPS_QT;
    const setIsVisible_edENTRPS_QT = setRawVisible_edENTRPS_QT;
    const isVisible_edHSHLD_QT = rawVisible_edHSHLD_QT;
    const setIsVisible_edHSHLD_QT = setRawVisible_edHSHLD_QT;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_edPRMISN_DE_8 = rawVisible_edPRMISN_DE_8;
    const setIsVisible_edPRMISN_DE_8 = setRawVisible_edPRMISN_DE_8;
    const isVisible_edREMVL_DE_8 = rawVisible_edREMVL_DE_8;
    const setIsVisible_edREMVL_DE_8 = setRawVisible_edREMVL_DE_8;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_edSPECL_REFGE_STAIR_QT = rawVisible_edSPECL_REFGE_STAIR_QT;
    const setIsVisible_edSPECL_REFGE_STAIR_QT = setRawVisible_edSPECL_REFGE_STAIR_QT;
    const isVisible_edSTRWRK_DE_8 = rawVisible_edSTRWRK_DE_8;
    const setIsVisible_edSTRWRK_DE_8 = setRawVisible_edSTRWRK_DE_8;
    const isVisible_edUSE_CONFM_DE_8 = rawVisible_edUSE_CONFM_DE_8;
    const setIsVisible_edUSE_CONFM_DE_8 = setRawVisible_edUSE_CONFM_DE_8;
    const isVisible_REMVL_AT = rawVisible_REMVL_AT;
    const setIsVisible_REMVL_AT = setRawVisible_REMVL_AT;
    const isVisible_edSLOPE = rawVisible_edSLOPE;
    const setIsVisible_edSLOPE = setRawVisible_edSLOPE;
    const isVisible_edELVTR = rawVisible_edELVTR;
    const setIsVisible_edELVTR = setRawVisible_edELVTR;
    const isVisible_edENCY = rawVisible_edENCY;
    const setIsVisible_edENCY = setRawVisible_edENCY;
    const isVisible_edESCLTR = rawVisible_edESCLTR;
    const setIsVisible_edESCLTR = setRawVisible_edESCLTR;
    const isVisible_edEMGNC_ELVTR = rawVisible_edEMGNC_ELVTR;
    const setIsVisible_edEMGNC_ELVTR = setRawVisible_edEMGNC_ELVTR;
    const isVisible_Static25 = rawVisible_Static25;
    const setIsVisible_Static25 = setRawVisible_Static25;
    const isVisible_Static26 = rawVisible_Static26;
    const setIsVisible_Static26 = setRawVisible_Static26;
    const isVisible_Static27 = rawVisible_Static27;
    const setIsVisible_Static27 = setRawVisible_Static27;
    const isVisible_Static28 = rawVisible_Static28;
    const setIsVisible_Static28 = setRawVisible_Static28;
    const isVisible_Edit0 = rawVisible_Edit0;
    const setIsVisible_Edit0 = setRawVisible_Edit0;
    const isVisible_edUNDGRND_FLOOR_QT = rawVisible_edUNDGRND_FLOOR_QT;
    const setIsVisible_edUNDGRND_FLOOR_QT = setRawVisible_edUNDGRND_FLOOR_QT;
    const isVisible_Static6 = rawVisible_Static6;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Static29 = rawVisible_Static29;
    const setIsVisible_Static29 = setRawVisible_Static29;
    const isVisible_Static30 = rawVisible_Static30;
    const setIsVisible_Static30 = setRawVisible_Static30;
    const isVisible_Static31 = rawVisible_Static31;
    const setIsVisible_Static31 = setRawVisible_Static31;
    const isVisible_Static32 = rawVisible_Static32;
    const setIsVisible_Static32 = setRawVisible_Static32;
    const isVisible_edBULDDONG_HG = rawVisible_edBULDDONG_HG;
    const setIsVisible_edBULDDONG_HG = setRawVisible_edBULDDONG_HG;
    const isVisible_Static33 = rawVisible_Static33;
    const setIsVisible_Static33 = setRawVisible_Static33;
    const isVisible_edREFGE_STAIR_QT = rawVisible_edREFGE_STAIR_QT;
    const setIsVisible_edREFGE_STAIR_QT = setRawVisible_edREFGE_STAIR_QT;
    const isVisible_edGNRL_STAIR_QT = rawVisible_edGNRL_STAIR_QT;
    const setIsVisible_edGNRL_STAIR_QT = setRawVisible_edGNRL_STAIR_QT;
    const isVisible_edOUTHOUS_STAIR_QT = rawVisible_edOUTHOUS_STAIR_QT;
    const setIsVisible_edOUTHOUS_STAIR_QT = setRawVisible_edOUTHOUS_STAIR_QT;
    const isVisible_Static34 = rawVisible_Static34;
    const setIsVisible_Static34 = setRawVisible_Static34;
    const isVisible_Static35 = rawVisible_Static35;
    const setIsVisible_Static35 = setRawVisible_Static35;
    const isVisible_Static36 = rawVisible_Static36;
    const setIsVisible_Static36 = setRawVisible_Static36;
    const isVisible_Static37 = rawVisible_Static37;
    const setIsVisible_Static37 = setRawVisible_Static37;
    const isVisible_lbEmailCnt = rawVisible_lbEmailCnt;
    const setIsVisible_lbEmailCnt = setRawVisible_lbEmailCnt;
    const isVisible_cbxDongList = rawVisible_cbxDongList;
    const setIsVisible_cbxDongList = setRawVisible_cbxDongList;
    const isVisible_gdSFloorStatus = rawVisible_gdSFloorStatus;
    const setIsVisible_gdSFloorStatus = setRawVisible_gdSFloorStatus;
    const isVisible_gdFloorStatus = rawVisible_gdFloorStatus;
    const setIsVisible_gdFloorStatus = setRawVisible_gdFloorStatus;
    const isVisible_radSGubun = rawVisible_radSGubun;
    const setIsVisible_radSGubun = setRawVisible_radSGubun;
    const isVisible_gdFloorE = rawVisible_gdFloorE;
    const setIsVisible_gdFloorE = setRawVisible_gdFloorE;
    const isVisible_tabTab2 = rawVisible_tabTab2;
    const setIsVisible_tabTab2 = setRawVisible_tabTab2;
    const isVisible_edVHCLE_NO = rawVisible_edVHCLE_NO;
    const setIsVisible_edVHCLE_NO = setRawVisible_edVHCLE_NO;
    const isVisible_edFOM = rawVisible_edFOM;
    const setIsVisible_edFOM = setRawVisible_edFOM;
    const isVisible_edVHCLE_YEAR = rawVisible_edVHCLE_YEAR;
    const setIsVisible_edVHCLE_YEAR = setRawVisible_edVHCLE_YEAR;
    const isVisible_edCARNM = rawVisible_edCARNM;
    const setIsVisible_edCARNM = setRawVisible_edCARNM;
    const isVisible_edOKND_CODE = rawVisible_edOKND_CODE;
    const setIsVisible_edOKND_CODE = setRawVisible_edOKND_CODE;
    const isVisible_edPRDNM_DETAIL = rawVisible_edPRDNM_DETAIL;
    const setIsVisible_edPRDNM_DETAIL = setRawVisible_edPRDNM_DETAIL;
    const isVisible_edPRDNM_CODE = rawVisible_edPRDNM_CODE;
    const setIsVisible_edPRDNM_CODE = setRawVisible_edPRDNM_CODE;
    const isVisible_edBEGIN_DE = rawVisible_edBEGIN_DE;
    const setIsVisible_edBEGIN_DE = setRawVisible_edBEGIN_DE;
    const isVisible_edTANK_MXMMCPCTY = rawVisible_edTANK_MXMMCPCTY;
    const setIsVisible_edTANK_MXMMCPCTY = setRawVisible_edTANK_MXMMCPCTY;
    const isVisible_edTNKROOM_CPCTY = rawVisible_edTNKROOM_CPCTY;
    const setIsVisible_edTNKROOM_CPCTY = setRawVisible_edTNKROOM_CPCTY;
    const isVisible_edTANK_INSPCT_NO = rawVisible_edTANK_INSPCT_NO;
    const setIsVisible_edTANK_INSPCT_NO = setRawVisible_edTANK_INSPCT_NO;
    const isVisible_gdStatusSucces = rawVisible_gdStatusSucces;
    const setIsVisible_gdStatusSucces = setRawVisible_gdStatusSucces;
    const isVisible_gdManagerInfo = rawVisible_gdManagerInfo;
    const setIsVisible_gdManagerInfo = setRawVisible_gdManagerInfo;
    const isVisible_edEQP_SUMRY = rawVisible_edEQP_SUMRY;
    const setIsVisible_edEQP_SUMRY = setRawVisible_edEQP_SUMRY;
    const isVisible_edEQP_STDR = rawVisible_edEQP_STDR;
    const setIsVisible_edEQP_STDR = setRawVisible_edEQP_STDR;
    const isVisible_gdTankInfo = rawVisible_gdTankInfo;
    const setIsVisible_gdTankInfo = setRawVisible_gdTankInfo;
    const isVisible_lbINSTLR_Name = rawVisible_lbINSTLR_Name;
    const setIsVisible_lbINSTLR_Name = setRawVisible_lbINSTLR_Name;
    const isVisible_edINSTLR_CPR_NM = rawVisible_edINSTLR_CPR_NM;
    const setIsVisible_edINSTLR_CPR_NM = setRawVisible_edINSTLR_CPR_NM;
    const isVisible_lbINSTLR_Number = rawVisible_lbINSTLR_Number;
    const setIsVisible_lbINSTLR_Number = setRawVisible_lbINSTLR_Number;
    const isVisible_edINSTLR_JURIRNO = rawVisible_edINSTLR_JURIRNO;
    const setIsVisible_edINSTLR_JURIRNO = setRawVisible_edINSTLR_JURIRNO;
    const isVisible_edINSTLR_IHIDNUM = rawVisible_edINSTLR_IHIDNUM;
    const setIsVisible_edINSTLR_IHIDNUM = setRawVisible_edINSTLR_IHIDNUM;
    const isVisible_edINSTLR_NM = rawVisible_edINSTLR_NM;
    const setIsVisible_edINSTLR_NM = setRawVisible_edINSTLR_NM;
    const isVisible_edINSTLR_TELNO = rawVisible_edINSTLR_TELNO;
    const setIsVisible_edINSTLR_TELNO = setRawVisible_edINSTLR_TELNO;
    const isVisible_edINSTLR_ADRES = rawVisible_edINSTLR_ADRES;
    const setIsVisible_edINSTLR_ADRES = setRawVisible_edINSTLR_ADRES;
    const isVisible_edCMPFRSTT_NM = rawVisible_edCMPFRSTT_NM;
    const setIsVisible_edCMPFRSTT_NM = setRawVisible_edCMPFRSTT_NM;
    const isVisible_esCM_ADRES_NM = rawVisible_esCM_ADRES_NM;
    const setIsVisible_esCM_ADRES_NM = setRawVisible_esCM_ADRES_NM;
    const isVisible_edANTY_MUL_SM = rawVisible_edANTY_MUL_SM;
    const setIsVisible_edANTY_MUL_SM = setRawVisible_edANTY_MUL_SM;
    const isVisible_edTRTMNT_SUMRY = rawVisible_edTRTMNT_SUMRY;
    const setIsVisible_edTRTMNT_SUMRY = setRawVisible_edTRTMNT_SUMRY;
    const isVisible_edPRMISN_NO = rawVisible_edPRMISN_NO;
    const setIsVisible_edPRMISN_NO = setRawVisible_edPRMISN_NO;
    const isVisible_edCNTANR_PRMISN_NO = rawVisible_edCNTANR_PRMISN_NO;
    const setIsVisible_edCNTANR_PRMISN_NO = setRawVisible_edCNTANR_PRMISN_NO;
    const isVisible_edFRST_STRWRK_DE = rawVisible_edFRST_STRWRK_DE;
    const setIsVisible_edFRST_STRWRK_DE = setRawVisible_edFRST_STRWRK_DE;
    const isVisible_edCOMPET_DE = rawVisible_edCOMPET_DE;
    const setIsVisible_edCOMPET_DE = setRawVisible_edCOMPET_DE;
    const isVisible_edPAUSE_ABL_SE = rawVisible_edPAUSE_ABL_SE;
    const setIsVisible_edPAUSE_ABL_SE = setRawVisible_edPAUSE_ABL_SE;
    const isVisible_edPAUSE_ABL_DE = rawVisible_edPAUSE_ABL_DE;
    const setIsVisible_edPAUSE_ABL_DE = setRawVisible_edPAUSE_ABL_DE;
    const isVisible_edPRPOS_ABL_RESN = rawVisible_edPRPOS_ABL_RESN;
    const setIsVisible_edPRPOS_ABL_RESN = setRawVisible_edPRPOS_ABL_RESN;
    const isVisible_edBULDDONG_FLOOR_SN = rawVisible_edBULDDONG_FLOOR_SN;
    const setIsVisible_edBULDDONG_FLOOR_SN = setRawVisible_edBULDDONG_FLOOR_SN;
    const isVisible_edITL_NO = rawVisible_edITL_NO;
    const setIsVisible_edITL_NO = setRawVisible_edITL_NO;
    const isVisible_edMNFCTRETC_SE_CODE = rawVisible_edMNFCTRETC_SE_CODE;
    const setIsVisible_edMNFCTRETC_SE_CODE = setRawVisible_edMNFCTRETC_SE_CODE;
    const isVisible_edMNFCTRETC_DETAIL_SE_CODE = rawVisible_edMNFCTRETC_DETAIL_SE_CODE;
    const setIsVisible_edMNFCTRETC_DETAIL_SE_CODE = setRawVisible_edMNFCTRETC_DETAIL_SE_CODE;
    const isVisible_edDGST_TMPRSTRE_AT = rawVisible_edDGST_TMPRSTRE_AT;
    const setIsVisible_edDGST_TMPRSTRE_AT = setRawVisible_edDGST_TMPRSTRE_AT;
    const isVisible_edPRMISN_DE = rawVisible_edPRMISN_DE;
    const setIsVisible_edPRMISN_DE = setRawVisible_edPRMISN_DE;
    const isVisible_edCPR_AT_NM = rawVisible_edCPR_AT_NM;
    const setIsVisible_edCPR_AT_NM = setRawVisible_edCPR_AT_NM;
    const isVisible_edARMY_DGST_AT = rawVisible_edARMY_DGST_AT;
    const setIsVisible_edARMY_DGST_AT = setRawVisible_edARMY_DGST_AT;
    const isVisible_edENTRPS_NM = rawVisible_edENTRPS_NM;
    const setIsVisible_edENTRPS_NM = setRawVisible_edENTRPS_NM;
    const isVisible_edENTRPS_SENM = rawVisible_edENTRPS_SENM;
    const setIsVisible_edENTRPS_SENM = setRawVisible_edENTRPS_SENM;
    const isVisible_edENTRPS_DETAIL_SENM = rawVisible_edENTRPS_DETAIL_SENM;
    const setIsVisible_edENTRPS_DETAIL_SENM = setRawVisible_edENTRPS_DETAIL_SENM;
    const isVisible_edBSNM_REGIST_NO = rawVisible_edBSNM_REGIST_NO;
    const setIsVisible_edBSNM_REGIST_NO = setRawVisible_edBSNM_REGIST_NO;
    const isVisible_edRPRSNTV = rawVisible_edRPRSNTV;
    const setIsVisible_edRPRSNTV = setRawVisible_edRPRSNTV;
    const isVisible_edCMPN119SC_NM = rawVisible_edCMPN119SC_NM;
    const setIsVisible_edCMPN119SC_NM = setRawVisible_edCMPN119SC_NM;
    const isVisible_edTLPHON_NO = rawVisible_edTLPHON_NO;
    const setIsVisible_edTLPHON_NO = setRawVisible_edTLPHON_NO;
    const isVisible_edFAX_NO = rawVisible_edFAX_NO;
    const setIsVisible_edFAX_NO = setRawVisible_edFAX_NO;
    const isVisible_edregdate = rawVisible_edregdate;
    const setIsVisible_edregdate = setRawVisible_edregdate;
    const isVisible_edmoddate = rawVisible_edmoddate;
    const setIsVisible_edmoddate = setRawVisible_edmoddate;
    const isVisible_gdPHuman = rawVisible_gdPHuman;
    const setIsVisible_gdPHuman = setRawVisible_gdPHuman;
    const isVisible_gdLicenscInfo = rawVisible_gdLicenscInfo;
    const setIsVisible_gdLicenscInfo = setRawVisible_gdLicenscInfo;
    const isVisible_gdList50 = rawVisible_gdList50;
    const setIsVisible_gdList50 = setRawVisible_gdList50;
    const isVisible_gdList80 = rawVisible_gdList80;
    const setIsVisible_gdList80 = setRawVisible_gdList80;
    const isVisible_gdList10 = rawVisible_gdList10;
    const setIsVisible_gdList10 = setRawVisible_gdList10;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbTitle = rawVisible_lbTitle;
    const setIsVisible_lbTitle = setRawVisible_lbTitle;
    const isVisible_btnToExcel = rawVisible_btnToExcel;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_radAgent = rawVisible_radAgent && rawVisible_Shape1;
    const setIsVisible_radAgent = setRawVisible_radAgent;
    const isVisible_edKeyWord = rawVisible_edKeyWord && rawVisible_Shape1;
    const setIsVisible_edKeyWord = setRawVisible_edKeyWord;
    const isVisible_cbxHead = rawVisible_cbxHead && rawVisible_Shape1;
    const setIsVisible_cbxHead = setRawVisible_cbxHead;
    const isVisible_cbxStation = rawVisible_cbxStation && rawVisible_Shape1;
    const setIsVisible_cbxStation = setRawVisible_cbxStation;
    const isVisible_edCount = rawVisible_edCount && rawVisible_Shape1;
    const setIsVisible_edCount = setRawVisible_edCount;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_chkPerson = rawVisible_chkPerson && rawVisible_Shape1;
    const setIsVisible_chkPerson = setRawVisible_chkPerson;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_cbxCenter = rawVisible_cbxCenter && rawVisible_Shape1;
    const setIsVisible_cbxCenter = setRawVisible_cbxCenter;
    const isVisible_radGubun = rawVisible_radGubun && rawVisible_Shape1;
    const setIsVisible_radGubun = setRawVisible_radGubun;
    const isVisible_lbCodeGubun = rawVisible_lbCodeGubun && rawVisible_Shape1;
    const setIsVisible_lbCodeGubun = setRawVisible_lbCodeGubun;
    const isVisible_cbxCodeGubun = rawVisible_cbxCodeGubun && rawVisible_Shape1;
    const setIsVisible_cbxCodeGubun = setRawVisible_cbxCodeGubun;
    const isVisible_cbxCodeGubunD = rawVisible_cbxCodeGubunD && rawVisible_Shape1;
    const setIsVisible_cbxCodeGubunD = setRawVisible_cbxCodeGubunD;
    const isVisible_Static47 = rawVisible_Static47 && rawVisible_Shape1;
    const setIsVisible_Static47 = setRawVisible_Static47;
    const isVisible_cbxMFPBLINSTT = rawVisible_cbxMFPBLINSTT && rawVisible_Shape1;
    const setIsVisible_cbxMFPBLINSTT = setRawVisible_cbxMFPBLINSTT;
    const isVisible_btnDataHistory = rawVisible_btnDataHistory;
    const setIsVisible_btnDataHistory = setRawVisible_btnDataHistory;
    const isVisible_gdList30 = rawVisible_gdList30;
    const setIsVisible_gdList30 = setRawVisible_gdList30;
    const isVisible_btnApply = rawVisible_btnApply;
    const setIsVisible_btnApply = setRawVisible_btnApply;
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
        isVisible_btnApply,
        setIsVisible_btnApply,
        tabValue_tabTab1,
        setTabValue_tabTab1,
        tabValue_tabTab2,
        setTabValue_tabTab2,
        btnApply_OnClick,
        btnDataHistory_OnClick,
        btnToExcel_OnClick,
        lfn_End,
        lfn_Search,
    };
};