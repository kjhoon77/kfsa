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
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_lbOrderChange, setIsVisible_lbOrderChange] = useState(true);
    const [isVisible_cbxJibu_Saerch, setIsVisible_cbxJibu_Saerch] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_cbxStation, setIsVisible_cbxStation] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_Combo1, setIsVisible_Combo1] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_Combo2, setIsVisible_Combo2] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_cbxDate, setIsVisible_cbxDate] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_gdList, setIsVisible_gdList] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_cbxAjstatus, setIsVisible_cbxAjstatus] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_cbxAjmothod, setIsVisible_cbxAjmothod] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_edAJMGNO, setIsVisible_edAJMGNO] = useState(true);
    const [isVisible_edBILD_NM, setIsVisible_edBILD_NM] = useState(true);
    const [isVisible_calAjdate, setIsVisible_calAjdate] = useState(true);
    const [isVisible_btnNewJubsu, setIsVisible_btnNewJubsu] = useState(true);
    const [isVisible_btnSendSms, setIsVisible_btnSendSms] = useState(true);
    const [isVisible_Button4, setIsVisible_Button4] = useState(true);
    const [isVisible_Radio2, setIsVisible_Radio2] = useState(true);
    const [isVisible_MaskEdit3, setIsVisible_MaskEdit3] = useState(true);
    const [isVisible_edBILD_SN, setIsVisible_edBILD_SN] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_Button0, setIsVisible_Button0] = useState(false);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_edAJNM, setIsVisible_edAJNM] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_edAJHP, setIsVisible_edAJHP] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_btnJubsuStart, setIsVisible_btnJubsuStart] = useState(true);
    const [isVisible_btnJubsuEnd, setIsVisible_btnJubsuEnd] = useState(true);
    const [isVisible_btnJubsuCancle, setIsVisible_btnJubsuCancle] = useState(true);
    const [isVisible_fiAttachFile, setIsVisible_fiAttachFile] = useState(true);
    const [isVisible_fdAttachFile, setIsVisible_fdAttachFile] = useState(true);
    const [isVisible_hfAttachFile, setIsVisible_hfAttachFile] = useState(true);
    const [isVisible_Static52, setIsVisible_Static52] = useState(true);
    const [isVisible_edCancleMark, setIsVisible_edCancleMark] = useState(true);
    const [isVisible_tabTab3, setIsVisible_tabTab3] = useState(true);
    const [isVisible_Shape6, setIsVisible_Shape6] = useState(true);
    const [isVisible_Shape7, setIsVisible_Shape7] = useState(true);
    const [isVisible_medEduPostZipCode_ENTRPS, setIsVisible_medEduPostZipCode_ENTRPS] = useState(true);
    const [isVisible_edEduPost2_ENTRPS, setIsVisible_edEduPost2_ENTRPS] = useState(true);
    const [isVisible_edEduPost1_ENTRPS, setIsVisible_edEduPost1_ENTRPS] = useState(true);
    const [isVisible_edEduRoadPost1_ENTRPS, setIsVisible_edEduRoadPost1_ENTRPS] = useState(true);
    const [isVisible_edEduRoadPost2_ENTRPS, setIsVisible_edEduRoadPost2_ENTRPS] = useState(true);
    const [isVisible_medEduRoadPostZipCode_ENTRPS, setIsVisible_medEduRoadPostZipCode_ENTRPS] = useState(true);
    const [isVisible_medEduPostZipCode, setIsVisible_medEduPostZipCode] = useState(true);
    const [isVisible_cbxPartGubun, setIsVisible_cbxPartGubun] = useState(true);
    const [isVisible_cbxKwanYN, setIsVisible_cbxKwanYN] = useState(true);
    const [isVisible_edPartNM, setIsVisible_edPartNM] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(false);
    const [isVisible_Static13, setIsVisible_Static13] = useState(false);
    const [isVisible_Static14, setIsVisible_Static14] = useState(false);
    const [isVisible_Static15, setIsVisible_Static15] = useState(false);
    const [isVisible_Static16, setIsVisible_Static16] = useState(false);
    const [isVisible_Static17, setIsVisible_Static17] = useState(false);
    const [isVisible_Static18, setIsVisible_Static18] = useState(false);
    const [isVisible_edMGNT_TLPHON, setIsVisible_edMGNT_TLPHON] = useState(false);
    const [isVisible_edMGNT_SEQ, setIsVisible_edMGNT_SEQ] = useState(false);
    const [isVisible_edMGNT_NM, setIsVisible_edMGNT_NM] = useState(false);
    const [isVisible_edMGNT_CEONM, setIsVisible_edMGNT_CEONM] = useState(false);
    const [isVisible_Static20, setIsVisible_Static20] = useState(false);
    const [isVisible_Static21, setIsVisible_Static21] = useState(false);
    const [isVisible_edUndernd_foor_qt, setIsVisible_edUndernd_foor_qt] = useState(false);
    const [isVisible_edTorar, setIsVisible_edTorar] = useState(false);
    const [isVisible_Static22, setIsVisible_Static22] = useState(false);
    const [isVisible_Static23, setIsVisible_Static23] = useState(false);
    const [isVisible_edTrrphnm_floor_qt, setIsVisible_edTrrphnm_floor_qt] = useState(false);
    const [isVisible_edBOTTOM_AR, setIsVisible_edBOTTOM_AR] = useState(false);
    const [isVisible_Static24, setIsVisible_Static24] = useState(false);
    const [isVisible_edDONG_QT, setIsVisible_edDONG_QT] = useState(false);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(false);
    const [isVisible_Static25, setIsVisible_Static25] = useState(false);
    const [isVisible_gdAttachFileList, setIsVisible_gdAttachFileList] = useState(false);
    const [isVisible_btnDownLoad_Tab3, setIsVisible_btnDownLoad_Tab3] = useState(false);
    const [isVisible_btnUpLoad_Tab3, setIsVisible_btnUpLoad_Tab3] = useState(false);
    const [isVisible_Static26, setIsVisible_Static26] = useState(true);
    const [isVisible_Static27, setIsVisible_Static27] = useState(true);
    const [isVisible_Static28, setIsVisible_Static28] = useState(true);
    const [isVisible_cbxARSON_GUBUN, setIsVisible_cbxARSON_GUBUN] = useState(true);
    const [isVisible_Static30, setIsVisible_Static30] = useState(true);
    const [isVisible_Static31, setIsVisible_Static31] = useState(true);
    const [isVisible_edO_NM, setIsVisible_edO_NM] = useState(true);
    const [isVisible_Static32, setIsVisible_Static32] = useState(true);
    const [isVisible_gdKwanList, setIsVisible_gdKwanList] = useState(false);
    const [isVisible_cbxRLSOFC_STTUS_CODE, setIsVisible_cbxRLSOFC_STTUS_CODE] = useState(true);
    const [isVisible_Shape5, setIsVisible_Shape5] = useState(true);
    const [isVisible_Calendar0, setIsVisible_Calendar0] = useState(true);
    const [isVisible_Static29, setIsVisible_Static29] = useState(true);
    const [isVisible_Combo5, setIsVisible_Combo5] = useState(true);
    const [isVisible_Static33, setIsVisible_Static33] = useState(true);
    const [isVisible_Combo6, setIsVisible_Combo6] = useState(true);
    const [isVisible_Static34, setIsVisible_Static34] = useState(true);
    const [isVisible_Static35, setIsVisible_Static35] = useState(true);
    const [isVisible_Static36, setIsVisible_Static36] = useState(true);
    const [isVisible_cbxCourse, setIsVisible_cbxCourse] = useState(true);
    const [isVisible_Static37, setIsVisible_Static37] = useState(true);
    const [isVisible_Static38, setIsVisible_Static38] = useState(true);
    const [isVisible_Static39, setIsVisible_Static39] = useState(true);
    const [isVisible_cbxPUBLIC_AT, setIsVisible_cbxPUBLIC_AT] = useState(true);
    const [isVisible_Static40, setIsVisible_Static40] = useState(true);
    const [isVisible_edI_HPNO, setIsVisible_edI_HPNO] = useState(true);
    const [isVisible_edI_NM, setIsVisible_edI_NM] = useState(true);
    const [isVisible_edI_IHIDNUM, setIsVisible_edI_IHIDNUM] = useState(true);
    const [isVisible_Static41, setIsVisible_Static41] = useState(true);
    const [isVisible_Static42, setIsVisible_Static42] = useState(true);
    const [isVisible_Static43, setIsVisible_Static43] = useState(true);
    const [isVisible_Static44, setIsVisible_Static44] = useState(true);
    const [isVisible_cbxI_LIC_GUBUN, setIsVisible_cbxI_LIC_GUBUN] = useState(true);
    const [isVisible_carLAST_EDC_DE_08, setIsVisible_carLAST_EDC_DE_08] = useState(true);
    const [isVisible_cbxDouble_AT, setIsVisible_cbxDouble_AT] = useState(true);
    const [isVisible_cbxAddrGubun, setIsVisible_cbxAddrGubun] = useState(true);
    const [isVisible_Static45, setIsVisible_Static45] = useState(true);
    const [isVisible_Static46, setIsVisible_Static46] = useState(true);
    const [isVisible_Static47, setIsVisible_Static47] = useState(true);
    const [isVisible_edIRGRADE, setIsVisible_edIRGRADE] = useState(true);
    const [isVisible_carI_APNT_DE_8, setIsVisible_carI_APNT_DE_8] = useState(true);
    const [isVisible_edCareer, setIsVisible_edCareer] = useState(true);
    const [isVisible_Static48, setIsVisible_Static48] = useState(true);
    const [isVisible_Static49, setIsVisible_Static49] = useState(true);
    const [isVisible_Static50, setIsVisible_Static50] = useState(true);
    const [isVisible_edARSON_MANAGE_PKTBUK_NO, setIsVisible_edARSON_MANAGE_PKTBUK_NO] = useState(true);
    const [isVisible_edI_TLPHON_NO, setIsVisible_edI_TLPHON_NO] = useState(true);
    const [isVisible_edEmail, setIsVisible_edEmail] = useState(true);
    const [isVisible_Static51, setIsVisible_Static51] = useState(true);
    const [isVisible_cbxMANY_ARSON_AT, setIsVisible_cbxMANY_ARSON_AT] = useState(true);
    const [isVisible_Button6, setIsVisible_Button6] = useState(true);
    const [isVisible_Static53, setIsVisible_Static53] = useState(true);
    const [isVisible_Static54, setIsVisible_Static54] = useState(true);
    const [isVisible_Static55, setIsVisible_Static55] = useState(true);
    const [isVisible_Static57, setIsVisible_Static57] = useState(true);
    const [isVisible_Static58, setIsVisible_Static58] = useState(true);
    const [isVisible_edEntrpsnm, setIsVisible_edEntrpsnm] = useState(true);
    const [isVisible_edREGISTNO, setIsVisible_edREGISTNO] = useState(true);
    const [isVisible_edBsnm_Regist_No, setIsVisible_edBsnm_Regist_No] = useState(true);
    const [isVisible_Button7, setIsVisible_Button7] = useState(true);
    const [isVisible_Button8, setIsVisible_Button8] = useState(true);
    const [isVisible_edTelNo, setIsVisible_edTelNo] = useState(true);
    const [isVisible_Static56, setIsVisible_Static56] = useState(true);
    const [isVisible_edRPRSNTV, setIsVisible_edRPRSNTV] = useState(true);
    const [isVisible_Static59, setIsVisible_Static59] = useState(true);
    const [isVisible_edENG_NM, setIsVisible_edENG_NM] = useState(true);
    const [isVisible_Static60, setIsVisible_Static60] = useState(true);
    const [isVisible_edENG_GRADE, setIsVisible_edENG_GRADE] = useState(true);
    const [isVisible_Static61, setIsVisible_Static61] = useState(true);
    const [isVisible_Static62, setIsVisible_Static62] = useState(true);
    const [isVisible_calCNCGNPD_BEGIN_DE_8, setIsVisible_calCNCGNPD_BEGIN_DE_8] = useState(true);
    const [isVisible_Static63, setIsVisible_Static63] = useState(true);
    const [isVisible_calCNSGNPD_END_DE_8, setIsVisible_calCNSGNPD_END_DE_8] = useState(true);
    const [isVisible_Shape8, setIsVisible_Shape8] = useState(true);
    const [isVisible_Static64, setIsVisible_Static64] = useState(true);
    const [isVisible_Button13, setIsVisible_Button13] = useState(true);
    const [isVisible_Button14, setIsVisible_Button14] = useState(true);
    const [isVisible_Grid1, setIsVisible_Grid1] = useState(true);
    const [isVisible_btn_KwanExcel, setIsVisible_btn_KwanExcel] = useState(false);
    const [isVisible_cbxMGNT_USEYN, setIsVisible_cbxMGNT_USEYN] = useState(false);
    const [isVisible_Static65, setIsVisible_Static65] = useState(true);
    const [isVisible_cbxEVNC, setIsVisible_cbxEVNC] = useState(true);
    const [isVisible_Static66, setIsVisible_Static66] = useState(true);
    const [isVisible_edPARTCPNT_SN, setIsVisible_edPARTCPNT_SN] = useState(true);
    const [isVisible_edTLPHON_NO, setIsVisible_edTLPHON_NO] = useState(true);
    const [isVisible_edO_QUALFUSER_SN, setIsVisible_edO_QUALFUSER_SN] = useState(true);
    const [isVisible_edO_PERSONKEY, setIsVisible_edO_PERSONKEY] = useState(true);
    const [isVisible_calRLSOFC_DE_8, setIsVisible_calRLSOFC_DE_8] = useState(true);
    const [isVisible_calO_APNT_DE_8, setIsVisible_calO_APNT_DE_8] = useState(true);
    const [isVisible_calO_IHIDNUM, setIsVisible_calO_IHIDNUM] = useState(true);
    const [isVisible_calIHIDNUM, setIsVisible_calIHIDNUM] = useState(true);
    const [isVisible_edI_QUALFUSER_SN, setIsVisible_edI_QUALFUSER_SN] = useState(true);
    const [isVisible_edI_PERSONKEY, setIsVisible_edI_PERSONKEY] = useState(true);
    const [isVisible_Static67, setIsVisible_Static67] = useState(true);
    const [isVisible_edO_HPNO, setIsVisible_edO_HPNO] = useState(true);
    const [isVisible_edGNRL_FIRE_SAFT_AT, setIsVisible_edGNRL_FIRE_SAFT_AT] = useState(false);
    const [isVisible_edTOT_MNGT_AUTH_NO, setIsVisible_edTOT_MNGT_AUTH_NO] = useState(false);
    const [isVisible_edFIRE_SAFT_ASSI_NO, setIsVisible_edFIRE_SAFT_ASSI_NO] = useState(false);
    const [isVisible_edCONST_SITE_AT, setIsVisible_edCONST_SITE_AT] = useState(false);
    const [isVisible_cboAjbizgubun, setIsVisible_cboAjbizgubun] = useState(true);
    const [isVisible_edENTRPS_SN, setIsVisible_edENTRPS_SN] = useState(true);
    const [isVisible_cbxAddrGubun_ENTRPS, setIsVisible_cbxAddrGubun_ENTRPS] = useState(true);
    const [isVisible_medEduRoadPostZipCode, setIsVisible_medEduRoadPostZipCode] = useState(true);
    const [isVisible_edEduPost1, setIsVisible_edEduPost1] = useState(true);
    const [isVisible_edEduRoadPost1, setIsVisible_edEduRoadPost1] = useState(true);
    const [isVisible_edEduPost2, setIsVisible_edEduPost2] = useState(true);
    const [isVisible_edEduRoadPost2, setIsVisible_edEduRoadPost2] = useState(true);
    const [isVisible_stI_PERSONKEY, setIsVisible_stI_PERSONKEY] = useState(true);
    const [isVisible_stQUALFUSER_SN, setIsVisible_stQUALFUSER_SN] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_Static68, setIsVisible_Static68] = useState(true);
    const [isVisible_Static69, setIsVisible_Static69] = useState(true);
    const [isVisible_Static70, setIsVisible_Static70] = useState(true);
    const [isVisible_Static71, setIsVisible_Static71] = useState(true);
    const [isVisible_edRLSOFC_RESN, setIsVisible_edRLSOFC_RESN] = useState(true);
    const [isVisible_cbxMNGT_SE, setIsVisible_cbxMNGT_SE] = useState(false);
    const [isVisible_btn_KwanNew, setIsVisible_btn_KwanNew] = useState(false);
    const [isVisible_btn_KwanSave, setIsVisible_btn_KwanSave] = useState(false);
    const [isVisible_Static72, setIsVisible_Static72] = useState(false);
    const [isVisible_Static73, setIsVisible_Static73] = useState(true);
    const [isVisible_cbxMNGT_SEQ, setIsVisible_cbxMNGT_SEQ] = useState(true);
    const [isVisible_cbxTabPartGubun, setIsVisible_cbxTabPartGubun] = useState(true);
    const [isVisible_calTab_IHIDNUM, setIsVisible_calTab_IHIDNUM] = useState(true);
    const [isVisible_edTab_PARTCPNT, setIsVisible_edTab_PARTCPNT] = useState(true);
    const [isVisible_edTab_TLPHON_NO, setIsVisible_edTab_TLPHON_NO] = useState(true);
    const [isVisible_Button17, setIsVisible_Button17] = useState(true);
    const [isVisible_gdList2, setIsVisible_gdList2] = useState(true);
    const [isVisible_calTab_RLSOFC_DE_8, setIsVisible_calTab_RLSOFC_DE_8] = useState(true);
    const [isVisible_btnCheck, setIsVisible_btnCheck] = useState(true);
    const [isVisible_cbxTab_I_ARSON_TYPE, setIsVisible_cbxTab_I_ARSON_TYPE] = useState(true);
    const [isVisible_Edit31, setIsVisible_Edit31] = useState(true);
    const [isVisible_Grid2, setIsVisible_Grid2] = useState(true);
    const [isVisible_edTab_Career, setIsVisible_edTab_Career] = useState(true);
    const [isVisible_edTab_Email, setIsVisible_edTab_Email] = useState(true);
    const [isVisible_calTab_LAST_EDC_DE_08, setIsVisible_calTab_LAST_EDC_DE_08] = useState(true);
    const [isVisible_carTab_I_APNT_DE_8, setIsVisible_carTab_I_APNT_DE_8] = useState(true);
    const [isVisible_edTabPARTCPNT_SN, setIsVisible_edTabPARTCPNT_SN] = useState(true);
    const [isVisible_edTabGNRL_FIRE_SAFT_AT, setIsVisible_edTabGNRL_FIRE_SAFT_AT] = useState(false);
    const [isVisible_edTabCONST_SITE_AT, setIsVisible_edTabCONST_SITE_AT] = useState(false);
    const [isVisible_edTabTOT_MNGT_AUTH_NO, setIsVisible_edTabTOT_MNGT_AUTH_NO] = useState(false);
    const [isVisible_edTabFIRE_SAFT_ASSI_NO, setIsVisible_edTabFIRE_SAFT_ASSI_NO] = useState(false);
    const [isVisible_edTabI_QUALFUSER_SN, setIsVisible_edTabI_QUALFUSER_SN] = useState(true);
    const [isVisible_edTabI_PERSONKEY, setIsVisible_edTabI_PERSONKEY] = useState(true);
    const [isVisible_ed_I_TLPHON_NO, setIsVisible_ed_I_TLPHON_NO] = useState(true);
    const [isVisible_edTabI_ARSON_MANAGE_PKTBUK_NO, setIsVisible_edTabI_ARSON_MANAGE_PKTBUK_NO] = useState(true);
    const [isVisible_edTab_IRGRADE, setIsVisible_edTab_IRGRADE] = useState(true);
    const [isVisible_grdOList, setIsVisible_grdOList] = useState(true);
    const [isVisible_cbxCNTRWK_SPRVISOR_SE, setIsVisible_cbxCNTRWK_SPRVISOR_SE] = useState(true);
    const [isVisible_edCNTRWK_NM1, setIsVisible_edCNTRWK_NM1] = useState(true);
    const [isVisible_calUSE_CONFM_DE_8, setIsVisible_calUSE_CONFM_DE_8] = useState(true);
    const [isVisible_cbxCNTRWK_EVNC, setIsVisible_cbxCNTRWK_EVNC] = useState(true);
    const [isVisible_edCNTRWK_COMPANY, setIsVisible_edCNTRWK_COMPANY] = useState(true);
    const [isVisible_edCNTRWK_TYPE, setIsVisible_edCNTRWK_TYPE] = useState(true);
    const [isVisible_edCNTRWK_NM, setIsVisible_edCNTRWK_NM] = useState(true);
    const [isVisible_edCNTRWK_JURIRNO, setIsVisible_edCNTRWK_JURIRNO] = useState(true);
    const [isVisible_calRESOFC_DE_8, setIsVisible_calRESOFC_DE_8] = useState(true);
    const [isVisible_edEMAIL, setIsVisible_edEMAIL] = useState(true);
    const [isVisible_calLAST_EDC_DE_08, setIsVisible_calLAST_EDC_DE_08] = useState(true);
    const [isVisible_calI_APNT_DE_8, setIsVisible_calI_APNT_DE_8] = useState(true);
    const [isVisible_edCNTRWK_TELNO, setIsVisible_edCNTRWK_TELNO] = useState(true);
    const [isVisible_calSTRWRK_DE_8, setIsVisible_calSTRWRK_DE_8] = useState(true);
    const [isVisible_edMAIN_PRPOS_CODE, setIsVisible_edMAIN_PRPOS_CODE] = useState(true);
    const [isVisible_chkCNTRWK_CPR_AT, setIsVisible_chkCNTRWK_CPR_AT] = useState(true);
    const [isVisible_CalCNTRWK_BIRTH, setIsVisible_CalCNTRWK_BIRTH] = useState(true);
    const [isVisible_edEduRoadPost1_Bass, setIsVisible_edEduRoadPost1_Bass] = useState(true);
    const [isVisible_edEduPost1_Bass, setIsVisible_edEduPost1_Bass] = useState(true);
    const [isVisible_edEduPost2_Bass, setIsVisible_edEduPost2_Bass] = useState(true);
    const [isVisible_edEduRoadPost2_Bass, setIsVisible_edEduRoadPost2_Bass] = useState(true);
    const [isVisible_medEduPostZipCode_Bass, setIsVisible_medEduPostZipCode_Bass] = useState(true);
    const [isVisible_medEduRoadPostZipCode_Bass, setIsVisible_medEduRoadPostZipCode_Bass] = useState(true);
    const [isVisible_cbxAddrGubun_Bass, setIsVisible_cbxAddrGubun_Bass] = useState(true);
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