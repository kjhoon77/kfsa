// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_Chk1, Ids_Chk2, Ids_oManagerList, Ids_oJibu, Ids_KwanYN, Ids_KRmanagement, Ids_oFireCd, Ids_oOwnerGubun, Ids_USEYN, Ids_chk3, Ids_PublicAT, Ids_List, Ids_iMaster, Ids_MANY_ARSON_AT, Ids_oCourse, Ids_oMaster, Ids_SiteGubun, Ids_RLSOFC_STTUS_CODE, Ids_ARSON_GUBUN, Ids_Ajbizgubun, Ids_DoubleAT, IdsI_LIC_GUBUN, Ids_iauthority, Ids_iMasterTab2, Ids_oMasterList, Ids_iGubun, Ids_RESUYN, Ids_oList, Ids_CNTRWK_EVNC, Ids_CNTRWK_SPRVISOR_SE, Ids_oAuthority, Ids_FireSaftAt, Ids_oAddr2, Ids_chk100, Ids_chk4, Ids_date, Ids_oJibu_Search, Ids_oFileList, Ids_oFileUpload, Ids_oFileList_2, Ids_oFileUpload_2, Ids_MNGT_SE, IDataset0, Ids_MNGTSEQ, Ids_SBList, Ids_SBBList, Ids_CNTRWK_EVNC_G, Ids_CNTRWK_SPRVISOR_SE_G, Ids_oBizCd } from './Frmcust3030MFireManagerJubsuManagementData';

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
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_lbOrderChange, setRawVisible_lbOrderChange] = useState(true);
    const [rawVisible_cbxJibu_Saerch, setRawVisible_cbxJibu_Saerch] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cbxStation, setRawVisible_cbxStation] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Combo1, setRawVisible_Combo1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_Combo2, setRawVisible_Combo2] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_cbxDate, setRawVisible_cbxDate] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_gdList, setRawVisible_gdList] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_cbxAjstatus, setRawVisible_cbxAjstatus] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_cbxAjmothod, setRawVisible_cbxAjmothod] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_edAJMGNO, setRawVisible_edAJMGNO] = useState(true);
    const [rawVisible_edBILD_NM, setRawVisible_edBILD_NM] = useState(true);
    const [rawVisible_calAjdate, setRawVisible_calAjdate] = useState(true);
    const [rawVisible_btnNewJubsu, setRawVisible_btnNewJubsu] = useState(true);
    const [rawVisible_btnSendSms, setRawVisible_btnSendSms] = useState(true);
    const [rawVisible_Button4, setRawVisible_Button4] = useState(true);
    const [rawVisible_Radio2, setRawVisible_Radio2] = useState(true);
    const [rawVisible_MaskEdit3, setRawVisible_MaskEdit3] = useState(true);
    const [rawVisible_edBILD_SN, setRawVisible_edBILD_SN] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(false);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_edAJNM, setRawVisible_edAJNM] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_edAJHP, setRawVisible_edAJHP] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_btnJubsuStart, setRawVisible_btnJubsuStart] = useState(true);
    const [rawVisible_btnJubsuEnd, setRawVisible_btnJubsuEnd] = useState(true);
    const [rawVisible_btnJubsuCancle, setRawVisible_btnJubsuCancle] = useState(true);
    const [rawVisible_fiAttachFile, setRawVisible_fiAttachFile] = useState(true);
    const [rawVisible_fdAttachFile, setRawVisible_fdAttachFile] = useState(true);
    const [rawVisible_hfAttachFile, setRawVisible_hfAttachFile] = useState(true);
    const [rawVisible_Static52, setRawVisible_Static52] = useState(true);
    const [rawVisible_edCancleMark, setRawVisible_edCancleMark] = useState(true);
    const [rawVisible_tabTab3, setRawVisible_tabTab3] = useState(true);
    const [rawVisible_Shape6, setRawVisible_Shape6] = useState(true);
    const [rawVisible_Shape7, setRawVisible_Shape7] = useState(true);
    const [rawVisible_medEduPostZipCode_ENTRPS, setRawVisible_medEduPostZipCode_ENTRPS] = useState(true);
    const [rawVisible_edEduPost2_ENTRPS, setRawVisible_edEduPost2_ENTRPS] = useState(true);
    const [rawVisible_edEduPost1_ENTRPS, setRawVisible_edEduPost1_ENTRPS] = useState(true);
    const [rawVisible_edEduRoadPost1_ENTRPS, setRawVisible_edEduRoadPost1_ENTRPS] = useState(true);
    const [rawVisible_edEduRoadPost2_ENTRPS, setRawVisible_edEduRoadPost2_ENTRPS] = useState(true);
    const [rawVisible_medEduRoadPostZipCode_ENTRPS, setRawVisible_medEduRoadPostZipCode_ENTRPS] = useState(true);
    const [rawVisible_medEduPostZipCode, setRawVisible_medEduPostZipCode] = useState(true);
    const [rawVisible_cbxPartGubun, setRawVisible_cbxPartGubun] = useState(true);
    const [rawVisible_cbxKwanYN, setRawVisible_cbxKwanYN] = useState(true);
    const [rawVisible_edPartNM, setRawVisible_edPartNM] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(false);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(false);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(false);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(false);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(false);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(false);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(false);
    const [rawVisible_edMGNT_TLPHON, setRawVisible_edMGNT_TLPHON] = useState(false);
    const [rawVisible_edMGNT_SEQ, setRawVisible_edMGNT_SEQ] = useState(false);
    const [rawVisible_edMGNT_NM, setRawVisible_edMGNT_NM] = useState(false);
    const [rawVisible_edMGNT_CEONM, setRawVisible_edMGNT_CEONM] = useState(false);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(false);
    const [rawVisible_Static21, setRawVisible_Static21] = useState(false);
    const [rawVisible_edUndernd_foor_qt, setRawVisible_edUndernd_foor_qt] = useState(false);
    const [rawVisible_edTorar, setRawVisible_edTorar] = useState(false);
    const [rawVisible_Static22, setRawVisible_Static22] = useState(false);
    const [rawVisible_Static23, setRawVisible_Static23] = useState(false);
    const [rawVisible_edTrrphnm_floor_qt, setRawVisible_edTrrphnm_floor_qt] = useState(false);
    const [rawVisible_edBOTTOM_AR, setRawVisible_edBOTTOM_AR] = useState(false);
    const [rawVisible_Static24, setRawVisible_Static24] = useState(false);
    const [rawVisible_edDONG_QT, setRawVisible_edDONG_QT] = useState(false);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(false);
    const [rawVisible_Static25, setRawVisible_Static25] = useState(false);
    const [rawVisible_gdAttachFileList, setRawVisible_gdAttachFileList] = useState(false);
    const [rawVisible_btnDownLoad_Tab3, setRawVisible_btnDownLoad_Tab3] = useState(false);
    const [rawVisible_btnUpLoad_Tab3, setRawVisible_btnUpLoad_Tab3] = useState(false);
    const [rawVisible_Static26, setRawVisible_Static26] = useState(true);
    const [rawVisible_Static27, setRawVisible_Static27] = useState(true);
    const [rawVisible_Static28, setRawVisible_Static28] = useState(true);
    const [rawVisible_cbxARSON_GUBUN, setRawVisible_cbxARSON_GUBUN] = useState(true);
    const [rawVisible_Static30, setRawVisible_Static30] = useState(true);
    const [rawVisible_Static31, setRawVisible_Static31] = useState(true);
    const [rawVisible_edO_NM, setRawVisible_edO_NM] = useState(true);
    const [rawVisible_Static32, setRawVisible_Static32] = useState(true);
    const [rawVisible_gdKwanList, setRawVisible_gdKwanList] = useState(false);
    const [rawVisible_cbxRLSOFC_STTUS_CODE, setRawVisible_cbxRLSOFC_STTUS_CODE] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_Calendar0, setRawVisible_Calendar0] = useState(true);
    const [rawVisible_Static29, setRawVisible_Static29] = useState(true);
    const [rawVisible_Combo5, setRawVisible_Combo5] = useState(true);
    const [rawVisible_Static33, setRawVisible_Static33] = useState(true);
    const [rawVisible_Combo6, setRawVisible_Combo6] = useState(true);
    const [rawVisible_Static34, setRawVisible_Static34] = useState(true);
    const [rawVisible_Static35, setRawVisible_Static35] = useState(true);
    const [rawVisible_Static36, setRawVisible_Static36] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_Static37, setRawVisible_Static37] = useState(true);
    const [rawVisible_Static38, setRawVisible_Static38] = useState(true);
    const [rawVisible_Static39, setRawVisible_Static39] = useState(true);
    const [rawVisible_cbxPUBLIC_AT, setRawVisible_cbxPUBLIC_AT] = useState(true);
    const [rawVisible_Static40, setRawVisible_Static40] = useState(true);
    const [rawVisible_edI_HPNO, setRawVisible_edI_HPNO] = useState(true);
    const [rawVisible_edI_NM, setRawVisible_edI_NM] = useState(true);
    const [rawVisible_edI_IHIDNUM, setRawVisible_edI_IHIDNUM] = useState(true);
    const [rawVisible_Static41, setRawVisible_Static41] = useState(true);
    const [rawVisible_Static42, setRawVisible_Static42] = useState(true);
    const [rawVisible_Static43, setRawVisible_Static43] = useState(true);
    const [rawVisible_Static44, setRawVisible_Static44] = useState(true);
    const [rawVisible_cbxI_LIC_GUBUN, setRawVisible_cbxI_LIC_GUBUN] = useState(true);
    const [rawVisible_carLAST_EDC_DE_08, setRawVisible_carLAST_EDC_DE_08] = useState(true);
    const [rawVisible_cbxDouble_AT, setRawVisible_cbxDouble_AT] = useState(true);
    const [rawVisible_cbxAddrGubun, setRawVisible_cbxAddrGubun] = useState(true);
    const [rawVisible_Static45, setRawVisible_Static45] = useState(true);
    const [rawVisible_Static46, setRawVisible_Static46] = useState(true);
    const [rawVisible_Static47, setRawVisible_Static47] = useState(true);
    const [rawVisible_edIRGRADE, setRawVisible_edIRGRADE] = useState(true);
    const [rawVisible_carI_APNT_DE_8, setRawVisible_carI_APNT_DE_8] = useState(true);
    const [rawVisible_edCareer, setRawVisible_edCareer] = useState(true);
    const [rawVisible_Static48, setRawVisible_Static48] = useState(true);
    const [rawVisible_Static49, setRawVisible_Static49] = useState(true);
    const [rawVisible_Static50, setRawVisible_Static50] = useState(true);
    const [rawVisible_edARSON_MANAGE_PKTBUK_NO, setRawVisible_edARSON_MANAGE_PKTBUK_NO] = useState(true);
    const [rawVisible_edI_TLPHON_NO, setRawVisible_edI_TLPHON_NO] = useState(true);
    const [rawVisible_edEmail, setRawVisible_edEmail] = useState(true);
    const [rawVisible_Static51, setRawVisible_Static51] = useState(true);
    const [rawVisible_cbxMANY_ARSON_AT, setRawVisible_cbxMANY_ARSON_AT] = useState(true);
    const [rawVisible_Button6, setRawVisible_Button6] = useState(true);
    const [rawVisible_Static53, setRawVisible_Static53] = useState(true);
    const [rawVisible_Static54, setRawVisible_Static54] = useState(true);
    const [rawVisible_Static55, setRawVisible_Static55] = useState(true);
    const [rawVisible_Static57, setRawVisible_Static57] = useState(true);
    const [rawVisible_Static58, setRawVisible_Static58] = useState(true);
    const [rawVisible_edEntrpsnm, setRawVisible_edEntrpsnm] = useState(true);
    const [rawVisible_edREGISTNO, setRawVisible_edREGISTNO] = useState(true);
    const [rawVisible_edBsnm_Regist_No, setRawVisible_edBsnm_Regist_No] = useState(true);
    const [rawVisible_Button7, setRawVisible_Button7] = useState(true);
    const [rawVisible_Button8, setRawVisible_Button8] = useState(true);
    const [rawVisible_edTelNo, setRawVisible_edTelNo] = useState(true);
    const [rawVisible_Static56, setRawVisible_Static56] = useState(true);
    const [rawVisible_edRPRSNTV, setRawVisible_edRPRSNTV] = useState(true);
    const [rawVisible_Static59, setRawVisible_Static59] = useState(true);
    const [rawVisible_edENG_NM, setRawVisible_edENG_NM] = useState(true);
    const [rawVisible_Static60, setRawVisible_Static60] = useState(true);
    const [rawVisible_edENG_GRADE, setRawVisible_edENG_GRADE] = useState(true);
    const [rawVisible_Static61, setRawVisible_Static61] = useState(true);
    const [rawVisible_Static62, setRawVisible_Static62] = useState(true);
    const [rawVisible_calCNCGNPD_BEGIN_DE_8, setRawVisible_calCNCGNPD_BEGIN_DE_8] = useState(true);
    const [rawVisible_Static63, setRawVisible_Static63] = useState(true);
    const [rawVisible_calCNSGNPD_END_DE_8, setRawVisible_calCNSGNPD_END_DE_8] = useState(true);
    const [rawVisible_Shape8, setRawVisible_Shape8] = useState(true);
    const [rawVisible_Static64, setRawVisible_Static64] = useState(true);
    const [rawVisible_Button13, setRawVisible_Button13] = useState(true);
    const [rawVisible_Button14, setRawVisible_Button14] = useState(true);
    const [rawVisible_Grid1, setRawVisible_Grid1] = useState(true);
    const [rawVisible_btn_KwanExcel, setRawVisible_btn_KwanExcel] = useState(false);
    const [rawVisible_cbxMGNT_USEYN, setRawVisible_cbxMGNT_USEYN] = useState(false);
    const [rawVisible_Static65, setRawVisible_Static65] = useState(true);
    const [rawVisible_cbxEVNC, setRawVisible_cbxEVNC] = useState(true);
    const [rawVisible_Static66, setRawVisible_Static66] = useState(true);
    const [rawVisible_edPARTCPNT_SN, setRawVisible_edPARTCPNT_SN] = useState(true);
    const [rawVisible_edTLPHON_NO, setRawVisible_edTLPHON_NO] = useState(true);
    const [rawVisible_edO_QUALFUSER_SN, setRawVisible_edO_QUALFUSER_SN] = useState(true);
    const [rawVisible_edO_PERSONKEY, setRawVisible_edO_PERSONKEY] = useState(true);
    const [rawVisible_calRLSOFC_DE_8, setRawVisible_calRLSOFC_DE_8] = useState(true);
    const [rawVisible_calO_APNT_DE_8, setRawVisible_calO_APNT_DE_8] = useState(true);
    const [rawVisible_calO_IHIDNUM, setRawVisible_calO_IHIDNUM] = useState(true);
    const [rawVisible_calIHIDNUM, setRawVisible_calIHIDNUM] = useState(true);
    const [rawVisible_edI_QUALFUSER_SN, setRawVisible_edI_QUALFUSER_SN] = useState(true);
    const [rawVisible_edI_PERSONKEY, setRawVisible_edI_PERSONKEY] = useState(true);
    const [rawVisible_Static67, setRawVisible_Static67] = useState(true);
    const [rawVisible_edO_HPNO, setRawVisible_edO_HPNO] = useState(true);
    const [rawVisible_edGNRL_FIRE_SAFT_AT, setRawVisible_edGNRL_FIRE_SAFT_AT] = useState(false);
    const [rawVisible_edTOT_MNGT_AUTH_NO, setRawVisible_edTOT_MNGT_AUTH_NO] = useState(false);
    const [rawVisible_edFIRE_SAFT_ASSI_NO, setRawVisible_edFIRE_SAFT_ASSI_NO] = useState(false);
    const [rawVisible_edCONST_SITE_AT, setRawVisible_edCONST_SITE_AT] = useState(false);
    const [rawVisible_cboAjbizgubun, setRawVisible_cboAjbizgubun] = useState(true);
    const [rawVisible_edENTRPS_SN, setRawVisible_edENTRPS_SN] = useState(true);
    const [rawVisible_cbxAddrGubun_ENTRPS, setRawVisible_cbxAddrGubun_ENTRPS] = useState(true);
    const [rawVisible_medEduRoadPostZipCode, setRawVisible_medEduRoadPostZipCode] = useState(true);
    const [rawVisible_edEduPost1, setRawVisible_edEduPost1] = useState(true);
    const [rawVisible_edEduRoadPost1, setRawVisible_edEduRoadPost1] = useState(true);
    const [rawVisible_edEduPost2, setRawVisible_edEduPost2] = useState(true);
    const [rawVisible_edEduRoadPost2, setRawVisible_edEduRoadPost2] = useState(true);
    const [rawVisible_stI_PERSONKEY, setRawVisible_stI_PERSONKEY] = useState(true);
    const [rawVisible_stQUALFUSER_SN, setRawVisible_stQUALFUSER_SN] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_Static68, setRawVisible_Static68] = useState(true);
    const [rawVisible_Static69, setRawVisible_Static69] = useState(true);
    const [rawVisible_Static70, setRawVisible_Static70] = useState(true);
    const [rawVisible_Static71, setRawVisible_Static71] = useState(true);
    const [rawVisible_edRLSOFC_RESN, setRawVisible_edRLSOFC_RESN] = useState(true);
    const [rawVisible_cbxMNGT_SE, setRawVisible_cbxMNGT_SE] = useState(false);
    const [rawVisible_btn_KwanNew, setRawVisible_btn_KwanNew] = useState(false);
    const [rawVisible_btn_KwanSave, setRawVisible_btn_KwanSave] = useState(false);
    const [rawVisible_Static72, setRawVisible_Static72] = useState(false);
    const [rawVisible_Static73, setRawVisible_Static73] = useState(true);
    const [rawVisible_cbxMNGT_SEQ, setRawVisible_cbxMNGT_SEQ] = useState(true);
    const [rawVisible_cbxTabPartGubun, setRawVisible_cbxTabPartGubun] = useState(true);
    const [rawVisible_calTab_IHIDNUM, setRawVisible_calTab_IHIDNUM] = useState(true);
    const [rawVisible_edTab_PARTCPNT, setRawVisible_edTab_PARTCPNT] = useState(true);
    const [rawVisible_edTab_TLPHON_NO, setRawVisible_edTab_TLPHON_NO] = useState(true);
    const [rawVisible_Button17, setRawVisible_Button17] = useState(true);
    const [rawVisible_gdList2, setRawVisible_gdList2] = useState(true);
    const [rawVisible_calTab_RLSOFC_DE_8, setRawVisible_calTab_RLSOFC_DE_8] = useState(true);
    const [rawVisible_btnCheck, setRawVisible_btnCheck] = useState(true);
    const [rawVisible_cbxTab_I_ARSON_TYPE, setRawVisible_cbxTab_I_ARSON_TYPE] = useState(true);
    const [rawVisible_Edit31, setRawVisible_Edit31] = useState(true);
    const [rawVisible_Grid2, setRawVisible_Grid2] = useState(true);
    const [rawVisible_edTab_Career, setRawVisible_edTab_Career] = useState(true);
    const [rawVisible_edTab_Email, setRawVisible_edTab_Email] = useState(true);
    const [rawVisible_calTab_LAST_EDC_DE_08, setRawVisible_calTab_LAST_EDC_DE_08] = useState(true);
    const [rawVisible_carTab_I_APNT_DE_8, setRawVisible_carTab_I_APNT_DE_8] = useState(true);
    const [rawVisible_edTabPARTCPNT_SN, setRawVisible_edTabPARTCPNT_SN] = useState(true);
    const [rawVisible_edTabGNRL_FIRE_SAFT_AT, setRawVisible_edTabGNRL_FIRE_SAFT_AT] = useState(false);
    const [rawVisible_edTabCONST_SITE_AT, setRawVisible_edTabCONST_SITE_AT] = useState(false);
    const [rawVisible_edTabTOT_MNGT_AUTH_NO, setRawVisible_edTabTOT_MNGT_AUTH_NO] = useState(false);
    const [rawVisible_edTabFIRE_SAFT_ASSI_NO, setRawVisible_edTabFIRE_SAFT_ASSI_NO] = useState(false);
    const [rawVisible_edTabI_QUALFUSER_SN, setRawVisible_edTabI_QUALFUSER_SN] = useState(true);
    const [rawVisible_edTabI_PERSONKEY, setRawVisible_edTabI_PERSONKEY] = useState(true);
    const [rawVisible_ed_I_TLPHON_NO, setRawVisible_ed_I_TLPHON_NO] = useState(true);
    const [rawVisible_edTabI_ARSON_MANAGE_PKTBUK_NO, setRawVisible_edTabI_ARSON_MANAGE_PKTBUK_NO] = useState(true);
    const [rawVisible_edTab_IRGRADE, setRawVisible_edTab_IRGRADE] = useState(true);
    const [rawVisible_grdOList, setRawVisible_grdOList] = useState(true);
    const [rawVisible_cbxCNTRWK_SPRVISOR_SE, setRawVisible_cbxCNTRWK_SPRVISOR_SE] = useState(true);
    const [rawVisible_edCNTRWK_NM1, setRawVisible_edCNTRWK_NM1] = useState(true);
    const [rawVisible_calUSE_CONFM_DE_8, setRawVisible_calUSE_CONFM_DE_8] = useState(true);
    const [rawVisible_cbxCNTRWK_EVNC, setRawVisible_cbxCNTRWK_EVNC] = useState(true);
    const [rawVisible_edCNTRWK_COMPANY, setRawVisible_edCNTRWK_COMPANY] = useState(true);
    const [rawVisible_edCNTRWK_TYPE, setRawVisible_edCNTRWK_TYPE] = useState(true);
    const [rawVisible_edCNTRWK_NM, setRawVisible_edCNTRWK_NM] = useState(true);
    const [rawVisible_edCNTRWK_JURIRNO, setRawVisible_edCNTRWK_JURIRNO] = useState(true);
    const [rawVisible_calRESOFC_DE_8, setRawVisible_calRESOFC_DE_8] = useState(true);
    const [rawVisible_edEMAIL, setRawVisible_edEMAIL] = useState(true);
    const [rawVisible_calLAST_EDC_DE_08, setRawVisible_calLAST_EDC_DE_08] = useState(true);
    const [rawVisible_calI_APNT_DE_8, setRawVisible_calI_APNT_DE_8] = useState(true);
    const [rawVisible_edCNTRWK_TELNO, setRawVisible_edCNTRWK_TELNO] = useState(true);
    const [rawVisible_calSTRWRK_DE_8, setRawVisible_calSTRWRK_DE_8] = useState(true);
    const [rawVisible_edMAIN_PRPOS_CODE, setRawVisible_edMAIN_PRPOS_CODE] = useState(true);
    const [rawVisible_chkCNTRWK_CPR_AT, setRawVisible_chkCNTRWK_CPR_AT] = useState(true);
    const [rawVisible_CalCNTRWK_BIRTH, setRawVisible_CalCNTRWK_BIRTH] = useState(true);
    const [rawVisible_edEduRoadPost1_Bass, setRawVisible_edEduRoadPost1_Bass] = useState(true);
    const [rawVisible_edEduPost1_Bass, setRawVisible_edEduPost1_Bass] = useState(true);
    const [rawVisible_edEduPost2_Bass, setRawVisible_edEduPost2_Bass] = useState(true);
    const [rawVisible_edEduRoadPost2_Bass, setRawVisible_edEduRoadPost2_Bass] = useState(true);
    const [rawVisible_medEduPostZipCode_Bass, setRawVisible_medEduPostZipCode_Bass] = useState(true);
    const [rawVisible_medEduRoadPostZipCode_Bass, setRawVisible_medEduRoadPostZipCode_Bass] = useState(true);
    const [rawVisible_cbxAddrGubun_Bass, setRawVisible_cbxAddrGubun_Bass] = useState(true);
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_Shape4;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_lbOrderChange = rawVisible_lbOrderChange && rawVisible_shpGubunBox1;
    const setIsVisible_lbOrderChange = setRawVisible_lbOrderChange;
    const isVisible_cbxJibu_Saerch = rawVisible_cbxJibu_Saerch && rawVisible_shpGubunBox1;
    const setIsVisible_cbxJibu_Saerch = setRawVisible_cbxJibu_Saerch;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox1;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cbxStation = rawVisible_cbxStation && rawVisible_shpGubunBox1;
    const setIsVisible_cbxStation = setRawVisible_cbxStation;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Combo1 = rawVisible_Combo1 && rawVisible_shpGubunBox1;
    const setIsVisible_Combo1 = setRawVisible_Combo1;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox1;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_Combo2 = rawVisible_Combo2 && rawVisible_shpGubunBox1;
    const setIsVisible_Combo2 = setRawVisible_Combo2;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_shpGubunBox1;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_cbxDate = rawVisible_cbxDate && rawVisible_shpGubunBox1;
    const setIsVisible_cbxDate = setRawVisible_cbxDate;
    const isVisible_btnSearch = rawVisible_btnSearch;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnToExcel = rawVisible_btnToExcel;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_gdList = rawVisible_gdList;
    const setIsVisible_gdList = setRawVisible_gdList;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape0;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape0;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape0;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_cbxAjstatus = rawVisible_cbxAjstatus && rawVisible_Shape0;
    const setIsVisible_cbxAjstatus = setRawVisible_cbxAjstatus;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape0;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_cbxAjmothod = rawVisible_cbxAjmothod && rawVisible_Shape0;
    const setIsVisible_cbxAjmothod = setRawVisible_cbxAjmothod;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape0;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_edAJMGNO = rawVisible_edAJMGNO && rawVisible_Shape0;
    const setIsVisible_edAJMGNO = setRawVisible_edAJMGNO;
    const isVisible_edBILD_NM = rawVisible_edBILD_NM && rawVisible_Shape0;
    const setIsVisible_edBILD_NM = setRawVisible_edBILD_NM;
    const isVisible_calAjdate = rawVisible_calAjdate && rawVisible_Shape0;
    const setIsVisible_calAjdate = setRawVisible_calAjdate;
    const isVisible_btnNewJubsu = rawVisible_btnNewJubsu && rawVisible_Shape4;
    const setIsVisible_btnNewJubsu = setRawVisible_btnNewJubsu;
    const isVisible_btnSendSms = rawVisible_btnSendSms && rawVisible_Shape0;
    const setIsVisible_btnSendSms = setRawVisible_btnSendSms;
    const isVisible_Button4 = rawVisible_Button4 && rawVisible_Shape0;
    const setIsVisible_Button4 = setRawVisible_Button4;
    const isVisible_Radio2 = rawVisible_Radio2;
    const setIsVisible_Radio2 = setRawVisible_Radio2;
    const isVisible_MaskEdit3 = rawVisible_MaskEdit3;
    const setIsVisible_MaskEdit3 = setRawVisible_MaskEdit3;
    const isVisible_edBILD_SN = rawVisible_edBILD_SN && rawVisible_Shape1;
    const setIsVisible_edBILD_SN = setRawVisible_edBILD_SN;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape1;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_btnCancel = rawVisible_btnCancel;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_Button0 = rawVisible_Button0;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape1;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_edAJNM = rawVisible_edAJNM && rawVisible_Shape1;
    const setIsVisible_edAJNM = setRawVisible_edAJNM;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape1;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_edAJHP = rawVisible_edAJHP && rawVisible_Shape1;
    const setIsVisible_edAJHP = setRawVisible_edAJHP;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape1;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_btnJubsuStart = rawVisible_btnJubsuStart && rawVisible_Shape4;
    const setIsVisible_btnJubsuStart = setRawVisible_btnJubsuStart;
    const isVisible_btnJubsuEnd = rawVisible_btnJubsuEnd;
    const setIsVisible_btnJubsuEnd = setRawVisible_btnJubsuEnd;
    const isVisible_btnJubsuCancle = rawVisible_btnJubsuCancle && rawVisible_Shape4;
    const setIsVisible_btnJubsuCancle = setRawVisible_btnJubsuCancle;
    const isVisible_fiAttachFile = rawVisible_fiAttachFile;
    const setIsVisible_fiAttachFile = setRawVisible_fiAttachFile;
    const isVisible_fdAttachFile = rawVisible_fdAttachFile;
    const setIsVisible_fdAttachFile = setRawVisible_fdAttachFile;
    const isVisible_hfAttachFile = rawVisible_hfAttachFile;
    const setIsVisible_hfAttachFile = setRawVisible_hfAttachFile;
    const isVisible_Static52 = rawVisible_Static52;
    const setIsVisible_Static52 = setRawVisible_Static52;
    const isVisible_edCancleMark = rawVisible_edCancleMark && rawVisible_Shape4;
    const setIsVisible_edCancleMark = setRawVisible_edCancleMark;
    const isVisible_tabTab3 = rawVisible_tabTab3;
    const setIsVisible_tabTab3 = setRawVisible_tabTab3;
    const isVisible_Shape6 = rawVisible_Shape6;
    const setIsVisible_Shape6 = setRawVisible_Shape6;
    const isVisible_Shape7 = rawVisible_Shape7;
    const setIsVisible_Shape7 = setRawVisible_Shape7;
    const isVisible_medEduPostZipCode_ENTRPS = rawVisible_medEduPostZipCode_ENTRPS;
    const setIsVisible_medEduPostZipCode_ENTRPS = setRawVisible_medEduPostZipCode_ENTRPS;
    const isVisible_edEduPost2_ENTRPS = rawVisible_edEduPost2_ENTRPS;
    const setIsVisible_edEduPost2_ENTRPS = setRawVisible_edEduPost2_ENTRPS;
    const isVisible_edEduPost1_ENTRPS = rawVisible_edEduPost1_ENTRPS;
    const setIsVisible_edEduPost1_ENTRPS = setRawVisible_edEduPost1_ENTRPS;
    const isVisible_edEduRoadPost1_ENTRPS = rawVisible_edEduRoadPost1_ENTRPS;
    const setIsVisible_edEduRoadPost1_ENTRPS = setRawVisible_edEduRoadPost1_ENTRPS;
    const isVisible_edEduRoadPost2_ENTRPS = rawVisible_edEduRoadPost2_ENTRPS;
    const setIsVisible_edEduRoadPost2_ENTRPS = setRawVisible_edEduRoadPost2_ENTRPS;
    const isVisible_medEduRoadPostZipCode_ENTRPS = rawVisible_medEduRoadPostZipCode_ENTRPS;
    const setIsVisible_medEduRoadPostZipCode_ENTRPS = setRawVisible_medEduRoadPostZipCode_ENTRPS;
    const isVisible_medEduPostZipCode = rawVisible_medEduPostZipCode;
    const setIsVisible_medEduPostZipCode = setRawVisible_medEduPostZipCode;
    const isVisible_cbxPartGubun = rawVisible_cbxPartGubun;
    const setIsVisible_cbxPartGubun = setRawVisible_cbxPartGubun;
    const isVisible_cbxKwanYN = rawVisible_cbxKwanYN;
    const setIsVisible_cbxKwanYN = setRawVisible_cbxKwanYN;
    const isVisible_edPartNM = rawVisible_edPartNM;
    const setIsVisible_edPartNM = setRawVisible_edPartNM;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_Static14 = rawVisible_Static14;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_Static15 = rawVisible_Static15;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_Static16 = rawVisible_Static16;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_Static17 = rawVisible_Static17;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_Static18 = rawVisible_Static18;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_edMGNT_TLPHON = rawVisible_edMGNT_TLPHON;
    const setIsVisible_edMGNT_TLPHON = setRawVisible_edMGNT_TLPHON;
    const isVisible_edMGNT_SEQ = rawVisible_edMGNT_SEQ;
    const setIsVisible_edMGNT_SEQ = setRawVisible_edMGNT_SEQ;
    const isVisible_edMGNT_NM = rawVisible_edMGNT_NM;
    const setIsVisible_edMGNT_NM = setRawVisible_edMGNT_NM;
    const isVisible_edMGNT_CEONM = rawVisible_edMGNT_CEONM;
    const setIsVisible_edMGNT_CEONM = setRawVisible_edMGNT_CEONM;
    const isVisible_Static20 = rawVisible_Static20;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_Static21 = rawVisible_Static21;
    const setIsVisible_Static21 = setRawVisible_Static21;
    const isVisible_edUndernd_foor_qt = rawVisible_edUndernd_foor_qt;
    const setIsVisible_edUndernd_foor_qt = setRawVisible_edUndernd_foor_qt;
    const isVisible_edTorar = rawVisible_edTorar;
    const setIsVisible_edTorar = setRawVisible_edTorar;
    const isVisible_Static22 = rawVisible_Static22;
    const setIsVisible_Static22 = setRawVisible_Static22;
    const isVisible_Static23 = rawVisible_Static23;
    const setIsVisible_Static23 = setRawVisible_Static23;
    const isVisible_edTrrphnm_floor_qt = rawVisible_edTrrphnm_floor_qt;
    const setIsVisible_edTrrphnm_floor_qt = setRawVisible_edTrrphnm_floor_qt;
    const isVisible_edBOTTOM_AR = rawVisible_edBOTTOM_AR;
    const setIsVisible_edBOTTOM_AR = setRawVisible_edBOTTOM_AR;
    const isVisible_Static24 = rawVisible_Static24;
    const setIsVisible_Static24 = setRawVisible_Static24;
    const isVisible_edDONG_QT = rawVisible_edDONG_QT;
    const setIsVisible_edDONG_QT = setRawVisible_edDONG_QT;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Static25 = rawVisible_Static25;
    const setIsVisible_Static25 = setRawVisible_Static25;
    const isVisible_gdAttachFileList = rawVisible_gdAttachFileList;
    const setIsVisible_gdAttachFileList = setRawVisible_gdAttachFileList;
    const isVisible_btnDownLoad_Tab3 = rawVisible_btnDownLoad_Tab3;
    const setIsVisible_btnDownLoad_Tab3 = setRawVisible_btnDownLoad_Tab3;
    const isVisible_btnUpLoad_Tab3 = rawVisible_btnUpLoad_Tab3;
    const setIsVisible_btnUpLoad_Tab3 = setRawVisible_btnUpLoad_Tab3;
    const isVisible_Static26 = rawVisible_Static26;
    const setIsVisible_Static26 = setRawVisible_Static26;
    const isVisible_Static27 = rawVisible_Static27;
    const setIsVisible_Static27 = setRawVisible_Static27;
    const isVisible_Static28 = rawVisible_Static28;
    const setIsVisible_Static28 = setRawVisible_Static28;
    const isVisible_cbxARSON_GUBUN = rawVisible_cbxARSON_GUBUN;
    const setIsVisible_cbxARSON_GUBUN = setRawVisible_cbxARSON_GUBUN;
    const isVisible_Static30 = rawVisible_Static30;
    const setIsVisible_Static30 = setRawVisible_Static30;
    const isVisible_Static31 = rawVisible_Static31;
    const setIsVisible_Static31 = setRawVisible_Static31;
    const isVisible_edO_NM = rawVisible_edO_NM;
    const setIsVisible_edO_NM = setRawVisible_edO_NM;
    const isVisible_Static32 = rawVisible_Static32;
    const setIsVisible_Static32 = setRawVisible_Static32;
    const isVisible_gdKwanList = rawVisible_gdKwanList;
    const setIsVisible_gdKwanList = setRawVisible_gdKwanList;
    const isVisible_cbxRLSOFC_STTUS_CODE = rawVisible_cbxRLSOFC_STTUS_CODE;
    const setIsVisible_cbxRLSOFC_STTUS_CODE = setRawVisible_cbxRLSOFC_STTUS_CODE;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_Calendar0 = rawVisible_Calendar0;
    const setIsVisible_Calendar0 = setRawVisible_Calendar0;
    const isVisible_Static29 = rawVisible_Static29;
    const setIsVisible_Static29 = setRawVisible_Static29;
    const isVisible_Combo5 = rawVisible_Combo5;
    const setIsVisible_Combo5 = setRawVisible_Combo5;
    const isVisible_Static33 = rawVisible_Static33;
    const setIsVisible_Static33 = setRawVisible_Static33;
    const isVisible_Combo6 = rawVisible_Combo6;
    const setIsVisible_Combo6 = setRawVisible_Combo6;
    const isVisible_Static34 = rawVisible_Static34;
    const setIsVisible_Static34 = setRawVisible_Static34;
    const isVisible_Static35 = rawVisible_Static35;
    const setIsVisible_Static35 = setRawVisible_Static35;
    const isVisible_Static36 = rawVisible_Static36;
    const setIsVisible_Static36 = setRawVisible_Static36;
    const isVisible_cbxCourse = rawVisible_cbxCourse;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_Static37 = rawVisible_Static37;
    const setIsVisible_Static37 = setRawVisible_Static37;
    const isVisible_Static38 = rawVisible_Static38;
    const setIsVisible_Static38 = setRawVisible_Static38;
    const isVisible_Static39 = rawVisible_Static39;
    const setIsVisible_Static39 = setRawVisible_Static39;
    const isVisible_cbxPUBLIC_AT = rawVisible_cbxPUBLIC_AT;
    const setIsVisible_cbxPUBLIC_AT = setRawVisible_cbxPUBLIC_AT;
    const isVisible_Static40 = rawVisible_Static40;
    const setIsVisible_Static40 = setRawVisible_Static40;
    const isVisible_edI_HPNO = rawVisible_edI_HPNO;
    const setIsVisible_edI_HPNO = setRawVisible_edI_HPNO;
    const isVisible_edI_NM = rawVisible_edI_NM;
    const setIsVisible_edI_NM = setRawVisible_edI_NM;
    const isVisible_edI_IHIDNUM = rawVisible_edI_IHIDNUM;
    const setIsVisible_edI_IHIDNUM = setRawVisible_edI_IHIDNUM;
    const isVisible_Static41 = rawVisible_Static41;
    const setIsVisible_Static41 = setRawVisible_Static41;
    const isVisible_Static42 = rawVisible_Static42;
    const setIsVisible_Static42 = setRawVisible_Static42;
    const isVisible_Static43 = rawVisible_Static43;
    const setIsVisible_Static43 = setRawVisible_Static43;
    const isVisible_Static44 = rawVisible_Static44;
    const setIsVisible_Static44 = setRawVisible_Static44;
    const isVisible_cbxI_LIC_GUBUN = rawVisible_cbxI_LIC_GUBUN;
    const setIsVisible_cbxI_LIC_GUBUN = setRawVisible_cbxI_LIC_GUBUN;
    const isVisible_carLAST_EDC_DE_08 = rawVisible_carLAST_EDC_DE_08;
    const setIsVisible_carLAST_EDC_DE_08 = setRawVisible_carLAST_EDC_DE_08;
    const isVisible_cbxDouble_AT = rawVisible_cbxDouble_AT;
    const setIsVisible_cbxDouble_AT = setRawVisible_cbxDouble_AT;
    const isVisible_cbxAddrGubun = rawVisible_cbxAddrGubun;
    const setIsVisible_cbxAddrGubun = setRawVisible_cbxAddrGubun;
    const isVisible_Static45 = rawVisible_Static45;
    const setIsVisible_Static45 = setRawVisible_Static45;
    const isVisible_Static46 = rawVisible_Static46;
    const setIsVisible_Static46 = setRawVisible_Static46;
    const isVisible_Static47 = rawVisible_Static47;
    const setIsVisible_Static47 = setRawVisible_Static47;
    const isVisible_edIRGRADE = rawVisible_edIRGRADE;
    const setIsVisible_edIRGRADE = setRawVisible_edIRGRADE;
    const isVisible_carI_APNT_DE_8 = rawVisible_carI_APNT_DE_8;
    const setIsVisible_carI_APNT_DE_8 = setRawVisible_carI_APNT_DE_8;
    const isVisible_edCareer = rawVisible_edCareer;
    const setIsVisible_edCareer = setRawVisible_edCareer;
    const isVisible_Static48 = rawVisible_Static48;
    const setIsVisible_Static48 = setRawVisible_Static48;
    const isVisible_Static49 = rawVisible_Static49;
    const setIsVisible_Static49 = setRawVisible_Static49;
    const isVisible_Static50 = rawVisible_Static50;
    const setIsVisible_Static50 = setRawVisible_Static50;
    const isVisible_edARSON_MANAGE_PKTBUK_NO = rawVisible_edARSON_MANAGE_PKTBUK_NO;
    const setIsVisible_edARSON_MANAGE_PKTBUK_NO = setRawVisible_edARSON_MANAGE_PKTBUK_NO;
    const isVisible_edI_TLPHON_NO = rawVisible_edI_TLPHON_NO;
    const setIsVisible_edI_TLPHON_NO = setRawVisible_edI_TLPHON_NO;
    const isVisible_edEmail = rawVisible_edEmail;
    const setIsVisible_edEmail = setRawVisible_edEmail;
    const isVisible_Static51 = rawVisible_Static51;
    const setIsVisible_Static51 = setRawVisible_Static51;
    const isVisible_cbxMANY_ARSON_AT = rawVisible_cbxMANY_ARSON_AT;
    const setIsVisible_cbxMANY_ARSON_AT = setRawVisible_cbxMANY_ARSON_AT;
    const isVisible_Button6 = rawVisible_Button6;
    const setIsVisible_Button6 = setRawVisible_Button6;
    const isVisible_Static53 = rawVisible_Static53;
    const setIsVisible_Static53 = setRawVisible_Static53;
    const isVisible_Static54 = rawVisible_Static54;
    const setIsVisible_Static54 = setRawVisible_Static54;
    const isVisible_Static55 = rawVisible_Static55;
    const setIsVisible_Static55 = setRawVisible_Static55;
    const isVisible_Static57 = rawVisible_Static57;
    const setIsVisible_Static57 = setRawVisible_Static57;
    const isVisible_Static58 = rawVisible_Static58;
    const setIsVisible_Static58 = setRawVisible_Static58;
    const isVisible_edEntrpsnm = rawVisible_edEntrpsnm;
    const setIsVisible_edEntrpsnm = setRawVisible_edEntrpsnm;
    const isVisible_edREGISTNO = rawVisible_edREGISTNO;
    const setIsVisible_edREGISTNO = setRawVisible_edREGISTNO;
    const isVisible_edBsnm_Regist_No = rawVisible_edBsnm_Regist_No;
    const setIsVisible_edBsnm_Regist_No = setRawVisible_edBsnm_Regist_No;
    const isVisible_Button7 = rawVisible_Button7;
    const setIsVisible_Button7 = setRawVisible_Button7;
    const isVisible_Button8 = rawVisible_Button8;
    const setIsVisible_Button8 = setRawVisible_Button8;
    const isVisible_edTelNo = rawVisible_edTelNo;
    const setIsVisible_edTelNo = setRawVisible_edTelNo;
    const isVisible_Static56 = rawVisible_Static56;
    const setIsVisible_Static56 = setRawVisible_Static56;
    const isVisible_edRPRSNTV = rawVisible_edRPRSNTV;
    const setIsVisible_edRPRSNTV = setRawVisible_edRPRSNTV;
    const isVisible_Static59 = rawVisible_Static59;
    const setIsVisible_Static59 = setRawVisible_Static59;
    const isVisible_edENG_NM = rawVisible_edENG_NM;
    const setIsVisible_edENG_NM = setRawVisible_edENG_NM;
    const isVisible_Static60 = rawVisible_Static60;
    const setIsVisible_Static60 = setRawVisible_Static60;
    const isVisible_edENG_GRADE = rawVisible_edENG_GRADE;
    const setIsVisible_edENG_GRADE = setRawVisible_edENG_GRADE;
    const isVisible_Static61 = rawVisible_Static61;
    const setIsVisible_Static61 = setRawVisible_Static61;
    const isVisible_Static62 = rawVisible_Static62;
    const setIsVisible_Static62 = setRawVisible_Static62;
    const isVisible_calCNCGNPD_BEGIN_DE_8 = rawVisible_calCNCGNPD_BEGIN_DE_8;
    const setIsVisible_calCNCGNPD_BEGIN_DE_8 = setRawVisible_calCNCGNPD_BEGIN_DE_8;
    const isVisible_Static63 = rawVisible_Static63;
    const setIsVisible_Static63 = setRawVisible_Static63;
    const isVisible_calCNSGNPD_END_DE_8 = rawVisible_calCNSGNPD_END_DE_8;
    const setIsVisible_calCNSGNPD_END_DE_8 = setRawVisible_calCNSGNPD_END_DE_8;
    const isVisible_Shape8 = rawVisible_Shape8;
    const setIsVisible_Shape8 = setRawVisible_Shape8;
    const isVisible_Static64 = rawVisible_Static64;
    const setIsVisible_Static64 = setRawVisible_Static64;
    const isVisible_Button13 = rawVisible_Button13;
    const setIsVisible_Button13 = setRawVisible_Button13;
    const isVisible_Button14 = rawVisible_Button14;
    const setIsVisible_Button14 = setRawVisible_Button14;
    const isVisible_Grid1 = rawVisible_Grid1;
    const setIsVisible_Grid1 = setRawVisible_Grid1;
    const isVisible_btn_KwanExcel = rawVisible_btn_KwanExcel;
    const setIsVisible_btn_KwanExcel = setRawVisible_btn_KwanExcel;
    const isVisible_cbxMGNT_USEYN = rawVisible_cbxMGNT_USEYN;
    const setIsVisible_cbxMGNT_USEYN = setRawVisible_cbxMGNT_USEYN;
    const isVisible_Static65 = rawVisible_Static65;
    const setIsVisible_Static65 = setRawVisible_Static65;
    const isVisible_cbxEVNC = rawVisible_cbxEVNC;
    const setIsVisible_cbxEVNC = setRawVisible_cbxEVNC;
    const isVisible_Static66 = rawVisible_Static66;
    const setIsVisible_Static66 = setRawVisible_Static66;
    const isVisible_edPARTCPNT_SN = rawVisible_edPARTCPNT_SN;
    const setIsVisible_edPARTCPNT_SN = setRawVisible_edPARTCPNT_SN;
    const isVisible_edTLPHON_NO = rawVisible_edTLPHON_NO;
    const setIsVisible_edTLPHON_NO = setRawVisible_edTLPHON_NO;
    const isVisible_edO_QUALFUSER_SN = rawVisible_edO_QUALFUSER_SN;
    const setIsVisible_edO_QUALFUSER_SN = setRawVisible_edO_QUALFUSER_SN;
    const isVisible_edO_PERSONKEY = rawVisible_edO_PERSONKEY;
    const setIsVisible_edO_PERSONKEY = setRawVisible_edO_PERSONKEY;
    const isVisible_calRLSOFC_DE_8 = rawVisible_calRLSOFC_DE_8;
    const setIsVisible_calRLSOFC_DE_8 = setRawVisible_calRLSOFC_DE_8;
    const isVisible_calO_APNT_DE_8 = rawVisible_calO_APNT_DE_8;
    const setIsVisible_calO_APNT_DE_8 = setRawVisible_calO_APNT_DE_8;
    const isVisible_calO_IHIDNUM = rawVisible_calO_IHIDNUM;
    const setIsVisible_calO_IHIDNUM = setRawVisible_calO_IHIDNUM;
    const isVisible_calIHIDNUM = rawVisible_calIHIDNUM;
    const setIsVisible_calIHIDNUM = setRawVisible_calIHIDNUM;
    const isVisible_edI_QUALFUSER_SN = rawVisible_edI_QUALFUSER_SN;
    const setIsVisible_edI_QUALFUSER_SN = setRawVisible_edI_QUALFUSER_SN;
    const isVisible_edI_PERSONKEY = rawVisible_edI_PERSONKEY;
    const setIsVisible_edI_PERSONKEY = setRawVisible_edI_PERSONKEY;
    const isVisible_Static67 = rawVisible_Static67;
    const setIsVisible_Static67 = setRawVisible_Static67;
    const isVisible_edO_HPNO = rawVisible_edO_HPNO;
    const setIsVisible_edO_HPNO = setRawVisible_edO_HPNO;
    const isVisible_edGNRL_FIRE_SAFT_AT = rawVisible_edGNRL_FIRE_SAFT_AT;
    const setIsVisible_edGNRL_FIRE_SAFT_AT = setRawVisible_edGNRL_FIRE_SAFT_AT;
    const isVisible_edTOT_MNGT_AUTH_NO = rawVisible_edTOT_MNGT_AUTH_NO;
    const setIsVisible_edTOT_MNGT_AUTH_NO = setRawVisible_edTOT_MNGT_AUTH_NO;
    const isVisible_edFIRE_SAFT_ASSI_NO = rawVisible_edFIRE_SAFT_ASSI_NO;
    const setIsVisible_edFIRE_SAFT_ASSI_NO = setRawVisible_edFIRE_SAFT_ASSI_NO;
    const isVisible_edCONST_SITE_AT = rawVisible_edCONST_SITE_AT;
    const setIsVisible_edCONST_SITE_AT = setRawVisible_edCONST_SITE_AT;
    const isVisible_cboAjbizgubun = rawVisible_cboAjbizgubun;
    const setIsVisible_cboAjbizgubun = setRawVisible_cboAjbizgubun;
    const isVisible_edENTRPS_SN = rawVisible_edENTRPS_SN;
    const setIsVisible_edENTRPS_SN = setRawVisible_edENTRPS_SN;
    const isVisible_cbxAddrGubun_ENTRPS = rawVisible_cbxAddrGubun_ENTRPS;
    const setIsVisible_cbxAddrGubun_ENTRPS = setRawVisible_cbxAddrGubun_ENTRPS;
    const isVisible_medEduRoadPostZipCode = rawVisible_medEduRoadPostZipCode;
    const setIsVisible_medEduRoadPostZipCode = setRawVisible_medEduRoadPostZipCode;
    const isVisible_edEduPost1 = rawVisible_edEduPost1;
    const setIsVisible_edEduPost1 = setRawVisible_edEduPost1;
    const isVisible_edEduRoadPost1 = rawVisible_edEduRoadPost1;
    const setIsVisible_edEduRoadPost1 = setRawVisible_edEduRoadPost1;
    const isVisible_edEduPost2 = rawVisible_edEduPost2;
    const setIsVisible_edEduPost2 = setRawVisible_edEduPost2;
    const isVisible_edEduRoadPost2 = rawVisible_edEduRoadPost2;
    const setIsVisible_edEduRoadPost2 = setRawVisible_edEduRoadPost2;
    const isVisible_stI_PERSONKEY = rawVisible_stI_PERSONKEY;
    const setIsVisible_stI_PERSONKEY = setRawVisible_stI_PERSONKEY;
    const isVisible_stQUALFUSER_SN = rawVisible_stQUALFUSER_SN;
    const setIsVisible_stQUALFUSER_SN = setRawVisible_stQUALFUSER_SN;
    const isVisible_Static19 = rawVisible_Static19;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_Static68 = rawVisible_Static68;
    const setIsVisible_Static68 = setRawVisible_Static68;
    const isVisible_Static69 = rawVisible_Static69;
    const setIsVisible_Static69 = setRawVisible_Static69;
    const isVisible_Static70 = rawVisible_Static70;
    const setIsVisible_Static70 = setRawVisible_Static70;
    const isVisible_Static71 = rawVisible_Static71;
    const setIsVisible_Static71 = setRawVisible_Static71;
    const isVisible_edRLSOFC_RESN = rawVisible_edRLSOFC_RESN;
    const setIsVisible_edRLSOFC_RESN = setRawVisible_edRLSOFC_RESN;
    const isVisible_cbxMNGT_SE = rawVisible_cbxMNGT_SE;
    const setIsVisible_cbxMNGT_SE = setRawVisible_cbxMNGT_SE;
    const isVisible_btn_KwanNew = rawVisible_btn_KwanNew;
    const setIsVisible_btn_KwanNew = setRawVisible_btn_KwanNew;
    const isVisible_btn_KwanSave = rawVisible_btn_KwanSave;
    const setIsVisible_btn_KwanSave = setRawVisible_btn_KwanSave;
    const isVisible_Static72 = rawVisible_Static72;
    const setIsVisible_Static72 = setRawVisible_Static72;
    const isVisible_Static73 = rawVisible_Static73;
    const setIsVisible_Static73 = setRawVisible_Static73;
    const isVisible_cbxMNGT_SEQ = rawVisible_cbxMNGT_SEQ;
    const setIsVisible_cbxMNGT_SEQ = setRawVisible_cbxMNGT_SEQ;
    const isVisible_cbxTabPartGubun = rawVisible_cbxTabPartGubun;
    const setIsVisible_cbxTabPartGubun = setRawVisible_cbxTabPartGubun;
    const isVisible_calTab_IHIDNUM = rawVisible_calTab_IHIDNUM;
    const setIsVisible_calTab_IHIDNUM = setRawVisible_calTab_IHIDNUM;
    const isVisible_edTab_PARTCPNT = rawVisible_edTab_PARTCPNT;
    const setIsVisible_edTab_PARTCPNT = setRawVisible_edTab_PARTCPNT;
    const isVisible_edTab_TLPHON_NO = rawVisible_edTab_TLPHON_NO;
    const setIsVisible_edTab_TLPHON_NO = setRawVisible_edTab_TLPHON_NO;
    const isVisible_Button17 = rawVisible_Button17;
    const setIsVisible_Button17 = setRawVisible_Button17;
    const isVisible_gdList2 = rawVisible_gdList2;
    const setIsVisible_gdList2 = setRawVisible_gdList2;
    const isVisible_calTab_RLSOFC_DE_8 = rawVisible_calTab_RLSOFC_DE_8;
    const setIsVisible_calTab_RLSOFC_DE_8 = setRawVisible_calTab_RLSOFC_DE_8;
    const isVisible_btnCheck = rawVisible_btnCheck;
    const setIsVisible_btnCheck = setRawVisible_btnCheck;
    const isVisible_cbxTab_I_ARSON_TYPE = rawVisible_cbxTab_I_ARSON_TYPE;
    const setIsVisible_cbxTab_I_ARSON_TYPE = setRawVisible_cbxTab_I_ARSON_TYPE;
    const isVisible_Edit31 = rawVisible_Edit31;
    const setIsVisible_Edit31 = setRawVisible_Edit31;
    const isVisible_Grid2 = rawVisible_Grid2;
    const setIsVisible_Grid2 = setRawVisible_Grid2;
    const isVisible_edTab_Career = rawVisible_edTab_Career;
    const setIsVisible_edTab_Career = setRawVisible_edTab_Career;
    const isVisible_edTab_Email = rawVisible_edTab_Email;
    const setIsVisible_edTab_Email = setRawVisible_edTab_Email;
    const isVisible_calTab_LAST_EDC_DE_08 = rawVisible_calTab_LAST_EDC_DE_08;
    const setIsVisible_calTab_LAST_EDC_DE_08 = setRawVisible_calTab_LAST_EDC_DE_08;
    const isVisible_carTab_I_APNT_DE_8 = rawVisible_carTab_I_APNT_DE_8;
    const setIsVisible_carTab_I_APNT_DE_8 = setRawVisible_carTab_I_APNT_DE_8;
    const isVisible_edTabPARTCPNT_SN = rawVisible_edTabPARTCPNT_SN;
    const setIsVisible_edTabPARTCPNT_SN = setRawVisible_edTabPARTCPNT_SN;
    const isVisible_edTabGNRL_FIRE_SAFT_AT = rawVisible_edTabGNRL_FIRE_SAFT_AT;
    const setIsVisible_edTabGNRL_FIRE_SAFT_AT = setRawVisible_edTabGNRL_FIRE_SAFT_AT;
    const isVisible_edTabCONST_SITE_AT = rawVisible_edTabCONST_SITE_AT;
    const setIsVisible_edTabCONST_SITE_AT = setRawVisible_edTabCONST_SITE_AT;
    const isVisible_edTabTOT_MNGT_AUTH_NO = rawVisible_edTabTOT_MNGT_AUTH_NO;
    const setIsVisible_edTabTOT_MNGT_AUTH_NO = setRawVisible_edTabTOT_MNGT_AUTH_NO;
    const isVisible_edTabFIRE_SAFT_ASSI_NO = rawVisible_edTabFIRE_SAFT_ASSI_NO;
    const setIsVisible_edTabFIRE_SAFT_ASSI_NO = setRawVisible_edTabFIRE_SAFT_ASSI_NO;
    const isVisible_edTabI_QUALFUSER_SN = rawVisible_edTabI_QUALFUSER_SN;
    const setIsVisible_edTabI_QUALFUSER_SN = setRawVisible_edTabI_QUALFUSER_SN;
    const isVisible_edTabI_PERSONKEY = rawVisible_edTabI_PERSONKEY;
    const setIsVisible_edTabI_PERSONKEY = setRawVisible_edTabI_PERSONKEY;
    const isVisible_ed_I_TLPHON_NO = rawVisible_ed_I_TLPHON_NO;
    const setIsVisible_ed_I_TLPHON_NO = setRawVisible_ed_I_TLPHON_NO;
    const isVisible_edTabI_ARSON_MANAGE_PKTBUK_NO = rawVisible_edTabI_ARSON_MANAGE_PKTBUK_NO;
    const setIsVisible_edTabI_ARSON_MANAGE_PKTBUK_NO = setRawVisible_edTabI_ARSON_MANAGE_PKTBUK_NO;
    const isVisible_edTab_IRGRADE = rawVisible_edTab_IRGRADE;
    const setIsVisible_edTab_IRGRADE = setRawVisible_edTab_IRGRADE;
    const isVisible_grdOList = rawVisible_grdOList;
    const setIsVisible_grdOList = setRawVisible_grdOList;
    const isVisible_cbxCNTRWK_SPRVISOR_SE = rawVisible_cbxCNTRWK_SPRVISOR_SE;
    const setIsVisible_cbxCNTRWK_SPRVISOR_SE = setRawVisible_cbxCNTRWK_SPRVISOR_SE;
    const isVisible_edCNTRWK_NM1 = rawVisible_edCNTRWK_NM1;
    const setIsVisible_edCNTRWK_NM1 = setRawVisible_edCNTRWK_NM1;
    const isVisible_calUSE_CONFM_DE_8 = rawVisible_calUSE_CONFM_DE_8;
    const setIsVisible_calUSE_CONFM_DE_8 = setRawVisible_calUSE_CONFM_DE_8;
    const isVisible_cbxCNTRWK_EVNC = rawVisible_cbxCNTRWK_EVNC;
    const setIsVisible_cbxCNTRWK_EVNC = setRawVisible_cbxCNTRWK_EVNC;
    const isVisible_edCNTRWK_COMPANY = rawVisible_edCNTRWK_COMPANY;
    const setIsVisible_edCNTRWK_COMPANY = setRawVisible_edCNTRWK_COMPANY;
    const isVisible_edCNTRWK_TYPE = rawVisible_edCNTRWK_TYPE;
    const setIsVisible_edCNTRWK_TYPE = setRawVisible_edCNTRWK_TYPE;
    const isVisible_edCNTRWK_NM = rawVisible_edCNTRWK_NM;
    const setIsVisible_edCNTRWK_NM = setRawVisible_edCNTRWK_NM;
    const isVisible_edCNTRWK_JURIRNO = rawVisible_edCNTRWK_JURIRNO;
    const setIsVisible_edCNTRWK_JURIRNO = setRawVisible_edCNTRWK_JURIRNO;
    const isVisible_calRESOFC_DE_8 = rawVisible_calRESOFC_DE_8;
    const setIsVisible_calRESOFC_DE_8 = setRawVisible_calRESOFC_DE_8;
    const isVisible_edEMAIL = rawVisible_edEMAIL;
    const setIsVisible_edEMAIL = setRawVisible_edEMAIL;
    const isVisible_calLAST_EDC_DE_08 = rawVisible_calLAST_EDC_DE_08;
    const setIsVisible_calLAST_EDC_DE_08 = setRawVisible_calLAST_EDC_DE_08;
    const isVisible_calI_APNT_DE_8 = rawVisible_calI_APNT_DE_8;
    const setIsVisible_calI_APNT_DE_8 = setRawVisible_calI_APNT_DE_8;
    const isVisible_edCNTRWK_TELNO = rawVisible_edCNTRWK_TELNO;
    const setIsVisible_edCNTRWK_TELNO = setRawVisible_edCNTRWK_TELNO;
    const isVisible_calSTRWRK_DE_8 = rawVisible_calSTRWRK_DE_8;
    const setIsVisible_calSTRWRK_DE_8 = setRawVisible_calSTRWRK_DE_8;
    const isVisible_edMAIN_PRPOS_CODE = rawVisible_edMAIN_PRPOS_CODE;
    const setIsVisible_edMAIN_PRPOS_CODE = setRawVisible_edMAIN_PRPOS_CODE;
    const isVisible_chkCNTRWK_CPR_AT = rawVisible_chkCNTRWK_CPR_AT;
    const setIsVisible_chkCNTRWK_CPR_AT = setRawVisible_chkCNTRWK_CPR_AT;
    const isVisible_CalCNTRWK_BIRTH = rawVisible_CalCNTRWK_BIRTH;
    const setIsVisible_CalCNTRWK_BIRTH = setRawVisible_CalCNTRWK_BIRTH;
    const isVisible_edEduRoadPost1_Bass = rawVisible_edEduRoadPost1_Bass;
    const setIsVisible_edEduRoadPost1_Bass = setRawVisible_edEduRoadPost1_Bass;
    const isVisible_edEduPost1_Bass = rawVisible_edEduPost1_Bass;
    const setIsVisible_edEduPost1_Bass = setRawVisible_edEduPost1_Bass;
    const isVisible_edEduPost2_Bass = rawVisible_edEduPost2_Bass;
    const setIsVisible_edEduPost2_Bass = setRawVisible_edEduPost2_Bass;
    const isVisible_edEduRoadPost2_Bass = rawVisible_edEduRoadPost2_Bass;
    const setIsVisible_edEduRoadPost2_Bass = setRawVisible_edEduRoadPost2_Bass;
    const isVisible_medEduPostZipCode_Bass = rawVisible_medEduPostZipCode_Bass;
    const setIsVisible_medEduPostZipCode_Bass = setRawVisible_medEduPostZipCode_Bass;
    const isVisible_medEduRoadPostZipCode_Bass = rawVisible_medEduRoadPostZipCode_Bass;
    const setIsVisible_medEduRoadPostZipCode_Bass = setRawVisible_medEduRoadPostZipCode_Bass;
    const isVisible_cbxAddrGubun_Bass = rawVisible_cbxAddrGubun_Bass;
    const setIsVisible_cbxAddrGubun_Bass = setRawVisible_cbxAddrGubun_Bass;
    const [tabValue_tabTab3, setTabValue_tabTab3] = useState(0);

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
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_lbOrderChange,
        setIsVisible_lbOrderChange,
        isVisible_cbxJibu_Saerch,
        setIsVisible_cbxJibu_Saerch,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cbxStation,
        setIsVisible_cbxStation,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Combo1,
        setIsVisible_Combo1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_Combo2,
        setIsVisible_Combo2,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_cbxDate,
        setIsVisible_cbxDate,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_cbxAjstatus,
        setIsVisible_cbxAjstatus,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_cbxAjmothod,
        setIsVisible_cbxAjmothod,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_edAJMGNO,
        setIsVisible_edAJMGNO,
        isVisible_edBILD_NM,
        setIsVisible_edBILD_NM,
        isVisible_calAjdate,
        setIsVisible_calAjdate,
        isVisible_btnNewJubsu,
        setIsVisible_btnNewJubsu,
        isVisible_btnSendSms,
        setIsVisible_btnSendSms,
        isVisible_Button4,
        setIsVisible_Button4,
        isVisible_Radio2,
        setIsVisible_Radio2,
        isVisible_MaskEdit3,
        setIsVisible_MaskEdit3,
        isVisible_edBILD_SN,
        setIsVisible_edBILD_SN,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_edAJNM,
        setIsVisible_edAJNM,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_edAJHP,
        setIsVisible_edAJHP,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_btnJubsuStart,
        setIsVisible_btnJubsuStart,
        isVisible_btnJubsuEnd,
        setIsVisible_btnJubsuEnd,
        isVisible_btnJubsuCancle,
        setIsVisible_btnJubsuCancle,
        isVisible_fiAttachFile,
        setIsVisible_fiAttachFile,
        isVisible_fdAttachFile,
        setIsVisible_fdAttachFile,
        isVisible_hfAttachFile,
        setIsVisible_hfAttachFile,
        isVisible_Static52,
        setIsVisible_Static52,
        isVisible_edCancleMark,
        setIsVisible_edCancleMark,
        isVisible_tabTab3,
        setIsVisible_tabTab3,
        isVisible_Shape6,
        setIsVisible_Shape6,
        isVisible_Shape7,
        setIsVisible_Shape7,
        isVisible_medEduPostZipCode_ENTRPS,
        setIsVisible_medEduPostZipCode_ENTRPS,
        isVisible_edEduPost2_ENTRPS,
        setIsVisible_edEduPost2_ENTRPS,
        isVisible_edEduPost1_ENTRPS,
        setIsVisible_edEduPost1_ENTRPS,
        isVisible_edEduRoadPost1_ENTRPS,
        setIsVisible_edEduRoadPost1_ENTRPS,
        isVisible_edEduRoadPost2_ENTRPS,
        setIsVisible_edEduRoadPost2_ENTRPS,
        isVisible_medEduRoadPostZipCode_ENTRPS,
        setIsVisible_medEduRoadPostZipCode_ENTRPS,
        isVisible_medEduPostZipCode,
        setIsVisible_medEduPostZipCode,
        isVisible_cbxPartGubun,
        setIsVisible_cbxPartGubun,
        isVisible_cbxKwanYN,
        setIsVisible_cbxKwanYN,
        isVisible_edPartNM,
        setIsVisible_edPartNM,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_edMGNT_TLPHON,
        setIsVisible_edMGNT_TLPHON,
        isVisible_edMGNT_SEQ,
        setIsVisible_edMGNT_SEQ,
        isVisible_edMGNT_NM,
        setIsVisible_edMGNT_NM,
        isVisible_edMGNT_CEONM,
        setIsVisible_edMGNT_CEONM,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_Static21,
        setIsVisible_Static21,
        isVisible_edUndernd_foor_qt,
        setIsVisible_edUndernd_foor_qt,
        isVisible_edTorar,
        setIsVisible_edTorar,
        isVisible_Static22,
        setIsVisible_Static22,
        isVisible_Static23,
        setIsVisible_Static23,
        isVisible_edTrrphnm_floor_qt,
        setIsVisible_edTrrphnm_floor_qt,
        isVisible_edBOTTOM_AR,
        setIsVisible_edBOTTOM_AR,
        isVisible_Static24,
        setIsVisible_Static24,
        isVisible_edDONG_QT,
        setIsVisible_edDONG_QT,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Static25,
        setIsVisible_Static25,
        isVisible_gdAttachFileList,
        setIsVisible_gdAttachFileList,
        isVisible_btnDownLoad_Tab3,
        setIsVisible_btnDownLoad_Tab3,
        isVisible_btnUpLoad_Tab3,
        setIsVisible_btnUpLoad_Tab3,
        isVisible_Static26,
        setIsVisible_Static26,
        isVisible_Static27,
        setIsVisible_Static27,
        isVisible_Static28,
        setIsVisible_Static28,
        isVisible_cbxARSON_GUBUN,
        setIsVisible_cbxARSON_GUBUN,
        isVisible_Static30,
        setIsVisible_Static30,
        isVisible_Static31,
        setIsVisible_Static31,
        isVisible_edO_NM,
        setIsVisible_edO_NM,
        isVisible_Static32,
        setIsVisible_Static32,
        isVisible_gdKwanList,
        setIsVisible_gdKwanList,
        isVisible_cbxRLSOFC_STTUS_CODE,
        setIsVisible_cbxRLSOFC_STTUS_CODE,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_Calendar0,
        setIsVisible_Calendar0,
        isVisible_Static29,
        setIsVisible_Static29,
        isVisible_Combo5,
        setIsVisible_Combo5,
        isVisible_Static33,
        setIsVisible_Static33,
        isVisible_Combo6,
        setIsVisible_Combo6,
        isVisible_Static34,
        setIsVisible_Static34,
        isVisible_Static35,
        setIsVisible_Static35,
        isVisible_Static36,
        setIsVisible_Static36,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_Static37,
        setIsVisible_Static37,
        isVisible_Static38,
        setIsVisible_Static38,
        isVisible_Static39,
        setIsVisible_Static39,
        isVisible_cbxPUBLIC_AT,
        setIsVisible_cbxPUBLIC_AT,
        isVisible_Static40,
        setIsVisible_Static40,
        isVisible_edI_HPNO,
        setIsVisible_edI_HPNO,
        isVisible_edI_NM,
        setIsVisible_edI_NM,
        isVisible_edI_IHIDNUM,
        setIsVisible_edI_IHIDNUM,
        isVisible_Static41,
        setIsVisible_Static41,
        isVisible_Static42,
        setIsVisible_Static42,
        isVisible_Static43,
        setIsVisible_Static43,
        isVisible_Static44,
        setIsVisible_Static44,
        isVisible_cbxI_LIC_GUBUN,
        setIsVisible_cbxI_LIC_GUBUN,
        isVisible_carLAST_EDC_DE_08,
        setIsVisible_carLAST_EDC_DE_08,
        isVisible_cbxDouble_AT,
        setIsVisible_cbxDouble_AT,
        isVisible_cbxAddrGubun,
        setIsVisible_cbxAddrGubun,
        isVisible_Static45,
        setIsVisible_Static45,
        isVisible_Static46,
        setIsVisible_Static46,
        isVisible_Static47,
        setIsVisible_Static47,
        isVisible_edIRGRADE,
        setIsVisible_edIRGRADE,
        isVisible_carI_APNT_DE_8,
        setIsVisible_carI_APNT_DE_8,
        isVisible_edCareer,
        setIsVisible_edCareer,
        isVisible_Static48,
        setIsVisible_Static48,
        isVisible_Static49,
        setIsVisible_Static49,
        isVisible_Static50,
        setIsVisible_Static50,
        isVisible_edARSON_MANAGE_PKTBUK_NO,
        setIsVisible_edARSON_MANAGE_PKTBUK_NO,
        isVisible_edI_TLPHON_NO,
        setIsVisible_edI_TLPHON_NO,
        isVisible_edEmail,
        setIsVisible_edEmail,
        isVisible_Static51,
        setIsVisible_Static51,
        isVisible_cbxMANY_ARSON_AT,
        setIsVisible_cbxMANY_ARSON_AT,
        isVisible_Button6,
        setIsVisible_Button6,
        isVisible_Static53,
        setIsVisible_Static53,
        isVisible_Static54,
        setIsVisible_Static54,
        isVisible_Static55,
        setIsVisible_Static55,
        isVisible_Static57,
        setIsVisible_Static57,
        isVisible_Static58,
        setIsVisible_Static58,
        isVisible_edEntrpsnm,
        setIsVisible_edEntrpsnm,
        isVisible_edREGISTNO,
        setIsVisible_edREGISTNO,
        isVisible_edBsnm_Regist_No,
        setIsVisible_edBsnm_Regist_No,
        isVisible_Button7,
        setIsVisible_Button7,
        isVisible_Button8,
        setIsVisible_Button8,
        isVisible_edTelNo,
        setIsVisible_edTelNo,
        isVisible_Static56,
        setIsVisible_Static56,
        isVisible_edRPRSNTV,
        setIsVisible_edRPRSNTV,
        isVisible_Static59,
        setIsVisible_Static59,
        isVisible_edENG_NM,
        setIsVisible_edENG_NM,
        isVisible_Static60,
        setIsVisible_Static60,
        isVisible_edENG_GRADE,
        setIsVisible_edENG_GRADE,
        isVisible_Static61,
        setIsVisible_Static61,
        isVisible_Static62,
        setIsVisible_Static62,
        isVisible_calCNCGNPD_BEGIN_DE_8,
        setIsVisible_calCNCGNPD_BEGIN_DE_8,
        isVisible_Static63,
        setIsVisible_Static63,
        isVisible_calCNSGNPD_END_DE_8,
        setIsVisible_calCNSGNPD_END_DE_8,
        isVisible_Shape8,
        setIsVisible_Shape8,
        isVisible_Static64,
        setIsVisible_Static64,
        isVisible_Button13,
        setIsVisible_Button13,
        isVisible_Button14,
        setIsVisible_Button14,
        isVisible_Grid1,
        setIsVisible_Grid1,
        isVisible_btn_KwanExcel,
        setIsVisible_btn_KwanExcel,
        isVisible_cbxMGNT_USEYN,
        setIsVisible_cbxMGNT_USEYN,
        isVisible_Static65,
        setIsVisible_Static65,
        isVisible_cbxEVNC,
        setIsVisible_cbxEVNC,
        isVisible_Static66,
        setIsVisible_Static66,
        isVisible_edPARTCPNT_SN,
        setIsVisible_edPARTCPNT_SN,
        isVisible_edTLPHON_NO,
        setIsVisible_edTLPHON_NO,
        isVisible_edO_QUALFUSER_SN,
        setIsVisible_edO_QUALFUSER_SN,
        isVisible_edO_PERSONKEY,
        setIsVisible_edO_PERSONKEY,
        isVisible_calRLSOFC_DE_8,
        setIsVisible_calRLSOFC_DE_8,
        isVisible_calO_APNT_DE_8,
        setIsVisible_calO_APNT_DE_8,
        isVisible_calO_IHIDNUM,
        setIsVisible_calO_IHIDNUM,
        isVisible_calIHIDNUM,
        setIsVisible_calIHIDNUM,
        isVisible_edI_QUALFUSER_SN,
        setIsVisible_edI_QUALFUSER_SN,
        isVisible_edI_PERSONKEY,
        setIsVisible_edI_PERSONKEY,
        isVisible_Static67,
        setIsVisible_Static67,
        isVisible_edO_HPNO,
        setIsVisible_edO_HPNO,
        isVisible_edGNRL_FIRE_SAFT_AT,
        setIsVisible_edGNRL_FIRE_SAFT_AT,
        isVisible_edTOT_MNGT_AUTH_NO,
        setIsVisible_edTOT_MNGT_AUTH_NO,
        isVisible_edFIRE_SAFT_ASSI_NO,
        setIsVisible_edFIRE_SAFT_ASSI_NO,
        isVisible_edCONST_SITE_AT,
        setIsVisible_edCONST_SITE_AT,
        isVisible_cboAjbizgubun,
        setIsVisible_cboAjbizgubun,
        isVisible_edENTRPS_SN,
        setIsVisible_edENTRPS_SN,
        isVisible_cbxAddrGubun_ENTRPS,
        setIsVisible_cbxAddrGubun_ENTRPS,
        isVisible_medEduRoadPostZipCode,
        setIsVisible_medEduRoadPostZipCode,
        isVisible_edEduPost1,
        setIsVisible_edEduPost1,
        isVisible_edEduRoadPost1,
        setIsVisible_edEduRoadPost1,
        isVisible_edEduPost2,
        setIsVisible_edEduPost2,
        isVisible_edEduRoadPost2,
        setIsVisible_edEduRoadPost2,
        isVisible_stI_PERSONKEY,
        setIsVisible_stI_PERSONKEY,
        isVisible_stQUALFUSER_SN,
        setIsVisible_stQUALFUSER_SN,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_Static68,
        setIsVisible_Static68,
        isVisible_Static69,
        setIsVisible_Static69,
        isVisible_Static70,
        setIsVisible_Static70,
        isVisible_Static71,
        setIsVisible_Static71,
        isVisible_edRLSOFC_RESN,
        setIsVisible_edRLSOFC_RESN,
        isVisible_cbxMNGT_SE,
        setIsVisible_cbxMNGT_SE,
        isVisible_btn_KwanNew,
        setIsVisible_btn_KwanNew,
        isVisible_btn_KwanSave,
        setIsVisible_btn_KwanSave,
        isVisible_Static72,
        setIsVisible_Static72,
        isVisible_Static73,
        setIsVisible_Static73,
        isVisible_cbxMNGT_SEQ,
        setIsVisible_cbxMNGT_SEQ,
        isVisible_cbxTabPartGubun,
        setIsVisible_cbxTabPartGubun,
        isVisible_calTab_IHIDNUM,
        setIsVisible_calTab_IHIDNUM,
        isVisible_edTab_PARTCPNT,
        setIsVisible_edTab_PARTCPNT,
        isVisible_edTab_TLPHON_NO,
        setIsVisible_edTab_TLPHON_NO,
        isVisible_Button17,
        setIsVisible_Button17,
        isVisible_gdList2,
        setIsVisible_gdList2,
        isVisible_calTab_RLSOFC_DE_8,
        setIsVisible_calTab_RLSOFC_DE_8,
        isVisible_btnCheck,
        setIsVisible_btnCheck,
        isVisible_cbxTab_I_ARSON_TYPE,
        setIsVisible_cbxTab_I_ARSON_TYPE,
        isVisible_Edit31,
        setIsVisible_Edit31,
        isVisible_Grid2,
        setIsVisible_Grid2,
        isVisible_edTab_Career,
        setIsVisible_edTab_Career,
        isVisible_edTab_Email,
        setIsVisible_edTab_Email,
        isVisible_calTab_LAST_EDC_DE_08,
        setIsVisible_calTab_LAST_EDC_DE_08,
        isVisible_carTab_I_APNT_DE_8,
        setIsVisible_carTab_I_APNT_DE_8,
        isVisible_edTabPARTCPNT_SN,
        setIsVisible_edTabPARTCPNT_SN,
        isVisible_edTabGNRL_FIRE_SAFT_AT,
        setIsVisible_edTabGNRL_FIRE_SAFT_AT,
        isVisible_edTabCONST_SITE_AT,
        setIsVisible_edTabCONST_SITE_AT,
        isVisible_edTabTOT_MNGT_AUTH_NO,
        setIsVisible_edTabTOT_MNGT_AUTH_NO,
        isVisible_edTabFIRE_SAFT_ASSI_NO,
        setIsVisible_edTabFIRE_SAFT_ASSI_NO,
        isVisible_edTabI_QUALFUSER_SN,
        setIsVisible_edTabI_QUALFUSER_SN,
        isVisible_edTabI_PERSONKEY,
        setIsVisible_edTabI_PERSONKEY,
        isVisible_ed_I_TLPHON_NO,
        setIsVisible_ed_I_TLPHON_NO,
        isVisible_edTabI_ARSON_MANAGE_PKTBUK_NO,
        setIsVisible_edTabI_ARSON_MANAGE_PKTBUK_NO,
        isVisible_edTab_IRGRADE,
        setIsVisible_edTab_IRGRADE,
        isVisible_grdOList,
        setIsVisible_grdOList,
        isVisible_cbxCNTRWK_SPRVISOR_SE,
        setIsVisible_cbxCNTRWK_SPRVISOR_SE,
        isVisible_edCNTRWK_NM1,
        setIsVisible_edCNTRWK_NM1,
        isVisible_calUSE_CONFM_DE_8,
        setIsVisible_calUSE_CONFM_DE_8,
        isVisible_cbxCNTRWK_EVNC,
        setIsVisible_cbxCNTRWK_EVNC,
        isVisible_edCNTRWK_COMPANY,
        setIsVisible_edCNTRWK_COMPANY,
        isVisible_edCNTRWK_TYPE,
        setIsVisible_edCNTRWK_TYPE,
        isVisible_edCNTRWK_NM,
        setIsVisible_edCNTRWK_NM,
        isVisible_edCNTRWK_JURIRNO,
        setIsVisible_edCNTRWK_JURIRNO,
        isVisible_calRESOFC_DE_8,
        setIsVisible_calRESOFC_DE_8,
        isVisible_edEMAIL,
        setIsVisible_edEMAIL,
        isVisible_calLAST_EDC_DE_08,
        setIsVisible_calLAST_EDC_DE_08,
        isVisible_calI_APNT_DE_8,
        setIsVisible_calI_APNT_DE_8,
        isVisible_edCNTRWK_TELNO,
        setIsVisible_edCNTRWK_TELNO,
        isVisible_calSTRWRK_DE_8,
        setIsVisible_calSTRWRK_DE_8,
        isVisible_edMAIN_PRPOS_CODE,
        setIsVisible_edMAIN_PRPOS_CODE,
        isVisible_chkCNTRWK_CPR_AT,
        setIsVisible_chkCNTRWK_CPR_AT,
        isVisible_CalCNTRWK_BIRTH,
        setIsVisible_CalCNTRWK_BIRTH,
        isVisible_edEduRoadPost1_Bass,
        setIsVisible_edEduRoadPost1_Bass,
        isVisible_edEduPost1_Bass,
        setIsVisible_edEduPost1_Bass,
        isVisible_edEduPost2_Bass,
        setIsVisible_edEduPost2_Bass,
        isVisible_edEduRoadPost2_Bass,
        setIsVisible_edEduRoadPost2_Bass,
        isVisible_medEduPostZipCode_Bass,
        setIsVisible_medEduPostZipCode_Bass,
        isVisible_medEduRoadPostZipCode_Bass,
        setIsVisible_medEduRoadPostZipCode_Bass,
        isVisible_cbxAddrGubun_Bass,
        setIsVisible_cbxAddrGubun_Bass,
        tabValue_tabTab3,
        setTabValue_tabTab3,
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