// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioCourse, Ids_ioJibu, Ids_oFireCd, Ids_oFireCenterCd, Ids_oFireHead, Ids_ioMNFCTRETCGubun, Ids_ioSelectGubun, Ids_ioMFFireObj, Ids_ioKFFireObj, Ids_ioMFKeyfield, Ids_oRegion, Ids_ioCourseD, Ids_ioFireManagerInfo, Ids_oFire, Ids_ioPBLINSTT, Ids_ioMFFireObjD, Ids_ioMNFCTRETCGubunD, Ids_ioObjGubun, Ids_ioDangerInfo, Ids_ioMFFireObj2, Ids_ioKFFireObj2, Ids_ioFireManagerInfo2, Ids_ioMFFireObjD2, Ids_ioDangerInfo2, Ids_ioGubun, Ids_ioUSEAT } from './Frmcust6100MDataConnectionDangerManageData';

export const useFrmcust6100MDataConnectionDangerManage = () => {
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oFireHead, setds_oFireHead] = useState<Ids_oFireHead[]>([]);
    const [ds_ioMNFCTRETCGubun, setds_ioMNFCTRETCGubun] = useState<Ids_ioMNFCTRETCGubun[]>([]);
    const [ds_ioSelectGubun, setds_ioSelectGubun] = useState<Ids_ioSelectGubun[]>([]);
    const [ds_ioMFFireObj, setds_ioMFFireObj] = useState<Ids_ioMFFireObj[]>([]);
    const [ds_ioKFFireObj, setds_ioKFFireObj] = useState<Ids_ioKFFireObj[]>([]);
    const [ds_ioMFKeyfield, setds_ioMFKeyfield] = useState<Ids_ioMFKeyfield[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_ioCourseD, setds_ioCourseD] = useState<Ids_ioCourseD[]>([]);
    const [ds_ioFireManagerInfo, setds_ioFireManagerInfo] = useState<Ids_ioFireManagerInfo[]>([]);
    const [ds_oFire, setds_oFire] = useState<Ids_oFire[]>([]);
    const [ds_ioPBLINSTT, setds_ioPBLINSTT] = useState<Ids_ioPBLINSTT[]>([]);
    const [ds_ioMFFireObjD, setds_ioMFFireObjD] = useState<Ids_ioMFFireObjD[]>([]);
    const [ds_ioMNFCTRETCGubunD, setds_ioMNFCTRETCGubunD] = useState<Ids_ioMNFCTRETCGubunD[]>([]);
    const [ds_ioObjGubun, setds_ioObjGubun] = useState<Ids_ioObjGubun[]>([]);
    const [ds_ioDangerInfo, setds_ioDangerInfo] = useState<Ids_ioDangerInfo[]>([]);
    const [ds_ioMFFireObj2, setds_ioMFFireObj2] = useState<Ids_ioMFFireObj2[]>([]);
    const [ds_ioKFFireObj2, setds_ioKFFireObj2] = useState<Ids_ioKFFireObj2[]>([]);
    const [ds_ioFireManagerInfo2, setds_ioFireManagerInfo2] = useState<Ids_ioFireManagerInfo2[]>([]);
    const [ds_ioMFFireObjD2, setds_ioMFFireObjD2] = useState<Ids_ioMFFireObjD2[]>([]);
    const [ds_ioDangerInfo2, setds_ioDangerInfo2] = useState<Ids_ioDangerInfo2[]>([]);
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_ioUSEAT, setds_ioUSEAT] = useState<Ids_ioUSEAT[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_tab, setRawVisible_tab] = useState(true);
    const [rawVisible_btnKFMatchCancel, setRawVisible_btnKFMatchCancel] = useState(false);
    const [rawVisible_btnMFMatchCancel, setRawVisible_btnMFMatchCancel] = useState(false);
    const [rawVisible_btnMFMatchExcept, setRawVisible_btnMFMatchExcept] = useState(false);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_lbJubsu, setRawVisible_lbJubsu] = useState(true);
    const [rawVisible_cbxMFHead, setRawVisible_cbxMFHead] = useState(true);
    const [rawVisible_cbxMFStation, setRawVisible_cbxMFStation] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_medMFModDate1, setRawVisible_medMFModDate1] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_medMFModDate2, setRawVisible_medMFModDate2] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_lbMFDate, setRawVisible_lbMFDate] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_cbxMFCenter, setRawVisible_cbxMFCenter] = useState(true);
    const [rawVisible_cbxMFMnfctretcGubun, setRawVisible_cbxMFMnfctretcGubun] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_radMFSelectGubun, setRawVisible_radMFSelectGubun] = useState(true);
    const [rawVisible_edMFKeyword, setRawVisible_edMFKeyword] = useState(true);
    const [rawVisible_cbxMFKeyfield, setRawVisible_cbxMFKeyfield] = useState(true);
    const [rawVisible_btnMFSearch, setRawVisible_btnMFSearch] = useState(true);
    const [rawVisible_gdKFOBJList, setRawVisible_gdKFOBJList] = useState(true);
    const [rawVisible_btnKFMatchExcept, setRawVisible_btnKFMatchExcept] = useState(false);
    const [rawVisible_btnKFExcel, setRawVisible_btnKFExcel] = useState(true);
    const [rawVisible_btnMFExcel, setRawVisible_btnMFExcel] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_cbxKFJibu, setRawVisible_cbxKFJibu] = useState(true);
    const [rawVisible_cbxKFRegion1, setRawVisible_cbxKFRegion1] = useState(true);
    const [rawVisible_cbxKFRegion2, setRawVisible_cbxKFRegion2] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_cbxKFCourseD, setRawVisible_cbxKFCourseD] = useState(true);
    const [rawVisible_radKFSelectGubun, setRawVisible_radKFSelectGubun] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_cbxKFKeyfield, setRawVisible_cbxKFKeyfield] = useState(true);
    const [rawVisible_edKFKeyword, setRawVisible_edKFKeyword] = useState(true);
    const [rawVisible_btnKFSearch, setRawVisible_btnKFSearch] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_Static21, setRawVisible_Static21] = useState(true);
    const [rawVisible_Static23, setRawVisible_Static23] = useState(true);
    const [rawVisible_edMFOBJ_NM, setRawVisible_edMFOBJ_NM] = useState(true);
    const [rawVisible_edMFADDR, setRawVisible_edMFADDR] = useState(true);
    const [rawVisible_edMFCOMPET_DE, setRawVisible_edMFCOMPET_DE] = useState(true);
    const [rawVisible_edMFCMPN119SC_ID, setRawVisible_edMFCMPN119SC_ID] = useState(true);
    const [rawVisible_edMFMNFCTRETCNM, setRawVisible_edMFMNFCTRETCNM] = useState(true);
    const [rawVisible_Static31, setRawVisible_Static31] = useState(true);
    const [rawVisible_edMFMNFCTRETCDETAILNM, setRawVisible_edMFMNFCTRETCDETAILNM] = useState(true);
    const [rawVisible_Static32, setRawVisible_Static32] = useState(true);
    const [rawVisible_edMFINSTLR_TELNO, setRawVisible_edMFINSTLR_TELNO] = useState(true);
    const [rawVisible_Static24, setRawVisible_Static24] = useState(true);
    const [rawVisible_gdMFManager, setRawVisible_gdMFManager] = useState(true);
    const [rawVisible_Static25, setRawVisible_Static25] = useState(true);
    const [rawVisible_Static26, setRawVisible_Static26] = useState(true);
    const [rawVisible_Static27, setRawVisible_Static27] = useState(true);
    const [rawVisible_Static28, setRawVisible_Static28] = useState(true);
    const [rawVisible_Static29, setRawVisible_Static29] = useState(true);
    const [rawVisible_Static30, setRawVisible_Static30] = useState(true);
    const [rawVisible_Static33, setRawVisible_Static33] = useState(true);
    const [rawVisible_edKFBADDR1, setRawVisible_edKFBADDR1] = useState(true);
    const [rawVisible_edKFBNM, setRawVisible_edKFBNM] = useState(true);
    const [rawVisible_edKFMatch, setRawVisible_edKFMatch] = useState(true);
    const [rawVisible_Static34, setRawVisible_Static34] = useState(true);
    const [rawVisible_edKFRCNM, setRawVisible_edKFRCNM] = useState(true);
    const [rawVisible_edKFCCCDNM, setRawVisible_edKFCCCDNM] = useState(true);
    const [rawVisible_edKFCGROUPNM, setRawVisible_edKFCGROUPNM] = useState(true);
    const [rawVisible_Static35, setRawVisible_Static35] = useState(true);
    const [rawVisible_edKFCNM, setRawVisible_edKFCNM] = useState(true);
    const [rawVisible_edKFBTEL, setRawVisible_edKFBTEL] = useState(true);
    const [rawVisible_Static36, setRawVisible_Static36] = useState(true);
    const [rawVisible_edKFCPERSONGUBUN, setRawVisible_edKFCPERSONGUBUN] = useState(true);
    const [rawVisible_edKFCAGGUBUN, setRawVisible_edKFCAGGUBUN] = useState(true);
    const [rawVisible_Static37, setRawVisible_Static37] = useState(true);
    const [rawVisible_edKFCREGISTERYYMM, setRawVisible_edKFCREGISTERYYMM] = useState(true);
    const [rawVisible_edKFCFEEYYMM, setRawVisible_edKFCFEEYYMM] = useState(true);
    const [rawVisible_Static38, setRawVisible_Static38] = useState(true);
    const [rawVisible_edKFDELGUBUN, setRawVisible_edKFDELGUBUN] = useState(true);
    const [rawVisible_Static39, setRawVisible_Static39] = useState(true);
    const [rawVisible_Static40, setRawVisible_Static40] = useState(true);
    const [rawVisible_Static41, setRawVisible_Static41] = useState(true);
    const [rawVisible_edKFFMNM, setRawVisible_edKFFMNM] = useState(true);
    const [rawVisible_Static43, setRawVisible_Static43] = useState(true);
    const [rawVisible_edKFFMHSTARTDATE, setRawVisible_edKFFMHSTARTDATE] = useState(true);
    const [rawVisible_Static44, setRawVisible_Static44] = useState(true);
    const [rawVisible_edKFFMHENDDATE, setRawVisible_edKFFMHENDDATE] = useState(true);
    const [rawVisible_btnFPISInfo, setRawVisible_btnFPISInfo] = useState(true);
    const [rawVisible_btnKFSunapEduInfo, setRawVisible_btnKFSunapEduInfo] = useState(true);
    const [rawVisible_chkMFPerson, setRawVisible_chkMFPerson] = useState(true);
    const [rawVisible_chkKFPerson, setRawVisible_chkKFPerson] = useState(true);
    const [rawVisible_edMFCount, setRawVisible_edMFCount] = useState(true);
    const [rawVisible_Static45, setRawVisible_Static45] = useState(true);
    const [rawVisible_Static46, setRawVisible_Static46] = useState(true);
    const [rawVisible_edKFCount, setRawVisible_edKFCount] = useState(true);
    const [rawVisible_btnMatch, setRawVisible_btnMatch] = useState(true);
    const [rawVisible_btnNewMatch, setRawVisible_btnNewMatch] = useState(true);
    const [rawVisible_btnModMatch, setRawVisible_btnModMatch] = useState(true);
    const [rawVisible_edMFINSTLR_NM, setRawVisible_edMFINSTLR_NM] = useState(true);
    const [rawVisible_Static47, setRawVisible_Static47] = useState(true);
    const [rawVisible_cbxMFMnfctretcGubunD, setRawVisible_cbxMFMnfctretcGubunD] = useState(true);
    const [rawVisible_Static48, setRawVisible_Static48] = useState(true);
    const [rawVisible_Static52, setRawVisible_Static52] = useState(true);
    const [rawVisible_edMFPRMISN_NO, setRawVisible_edMFPRMISN_NO] = useState(true);
    const [rawVisible_Static56, setRawVisible_Static56] = useState(true);
    const [rawVisible_Static57, setRawVisible_Static57] = useState(true);
    const [rawVisible_Edit0, setRawVisible_Edit0] = useState(true);
    const [rawVisible_Static58, setRawVisible_Static58] = useState(true);
    const [rawVisible_Edit1, setRawVisible_Edit1] = useState(true);
    const [rawVisible_Static59, setRawVisible_Static59] = useState(true);
    const [rawVisible_Edit2, setRawVisible_Edit2] = useState(true);
    const [rawVisible_btnMatchCancel, setRawVisible_btnMatchCancel] = useState(true);
    const [rawVisible_chkKFDelUser, setRawVisible_chkKFDelUser] = useState(true);
    const [rawVisible_Static60, setRawVisible_Static60] = useState(true);
    const [rawVisible_Static61, setRawVisible_Static61] = useState(true);
    const [rawVisible_edKFCSTATUSGUBUN, setRawVisible_edKFCSTATUSGUBUN] = useState(true);
    const [rawVisible_Static49, setRawVisible_Static49] = useState(true);
    const [rawVisible_edMFFDong, setRawVisible_edMFFDong] = useState(true);
    const [rawVisible_edMFDong, setRawVisible_edMFDong] = useState(true);
    const [rawVisible_Static50, setRawVisible_Static50] = useState(true);
    const [rawVisible_edMFMainAddr, setRawVisible_edMFMainAddr] = useState(true);
    const [rawVisible_Static51, setRawVisible_Static51] = useState(true);
    const [rawVisible_edMFSubAddr, setRawVisible_edMFSubAddr] = useState(true);
    const [rawVisible_Static62, setRawVisible_Static62] = useState(true);
    const [rawVisible_edMFINSTLR_CPR_NM, setRawVisible_edMFINSTLR_CPR_NM] = useState(true);
    const [rawVisible_Static53, setRawVisible_Static53] = useState(true);
    const [rawVisible_edKFFDong, setRawVisible_edKFFDong] = useState(true);
    const [rawVisible_edKFDong, setRawVisible_edKFDong] = useState(true);
    const [rawVisible_Static54, setRawVisible_Static54] = useState(true);
    const [rawVisible_edKFMainAddr, setRawVisible_edKFMainAddr] = useState(true);
    const [rawVisible_Static55, setRawVisible_Static55] = useState(true);
    const [rawVisible_edKFSubAddr, setRawVisible_edKFSubAddr] = useState(true);
    const [rawVisible_gdDangerInfo, setRawVisible_gdDangerInfo] = useState(true);
    const [rawVisible_btnDanger, setRawVisible_btnDanger] = useState(true);
    const [rawVisible_btnMFMatchExceptCancelM, setRawVisible_btnMFMatchExceptCancelM] = useState(false);
    const [rawVisible_btnMFMatchExceptM, setRawVisible_btnMFMatchExceptM] = useState(false);
    const [rawVisible_gdMFOBJList, setRawVisible_gdMFOBJList] = useState(true);
    const [rawVisible_Static63, setRawVisible_Static63] = useState(true);
    const [rawVisible_edMFMatch, setRawVisible_edMFMatch] = useState(true);
    const [rawVisible_Static22, setRawVisible_Static22] = useState(true);
    const [rawVisible_edCREGDATE, setRawVisible_edCREGDATE] = useState(true);
    const [rawVisible_Static64, setRawVisible_Static64] = useState(true);
    const [rawVisible_edCMODDATE, setRawVisible_edCMODDATE] = useState(true);
    const [rawVisible_spMFRowNum, setRawVisible_spMFRowNum] = useState(true);
    const [rawVisible_spKFRowNum, setRawVisible_spKFRowNum] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_edMFRoadNM, setRawVisible_edMFRoadNM] = useState(true);
    const [rawVisible_Static66, setRawVisible_Static66] = useState(true);
    const [rawVisible_edMFMainNO, setRawVisible_edMFMainNO] = useState(true);
    const [rawVisible_Static67, setRawVisible_Static67] = useState(true);
    const [rawVisible_edMFSubNO, setRawVisible_edMFSubNO] = useState(true);
    const [rawVisible_Static68, setRawVisible_Static68] = useState(true);
    const [rawVisible_edKFRoadNM, setRawVisible_edKFRoadNM] = useState(true);
    const [rawVisible_Static69, setRawVisible_Static69] = useState(true);
    const [rawVisible_edKFMainNO, setRawVisible_edKFMainNO] = useState(true);
    const [rawVisible_Static70, setRawVisible_Static70] = useState(true);
    const [rawVisible_edKFSubNO, setRawVisible_edKFSubNO] = useState(true);
    const [rawVisible_Static42, setRawVisible_Static42] = useState(true);
    const [rawVisible_edKFFMBIRTHDAY, setRawVisible_edKFFMBIRTHDAY] = useState(true);
    const [rawVisible_Static71, setRawVisible_Static71] = useState(true);
    const [rawVisible_edKFFMPersonKey, setRawVisible_edKFFMPersonKey] = useState(true);
    const [rawVisible_Static65, setRawVisible_Static65] = useState(true);
    const [rawVisible_radMFUseAt, setRawVisible_radMFUseAt] = useState(true);
    const [rawVisible_lbsearchNotice, setRawVisible_lbsearchNotice] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnDataHistory, setRawVisible_btnDataHistory] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_tab = rawVisible_tab;
    const setIsVisible_tab = setRawVisible_tab;
    const isVisible_btnKFMatchCancel = rawVisible_btnKFMatchCancel;
    const setIsVisible_btnKFMatchCancel = setRawVisible_btnKFMatchCancel;
    const isVisible_btnMFMatchCancel = rawVisible_btnMFMatchCancel;
    const setIsVisible_btnMFMatchCancel = setRawVisible_btnMFMatchCancel;
    const isVisible_btnMFMatchExcept = rawVisible_btnMFMatchExcept;
    const setIsVisible_btnMFMatchExcept = setRawVisible_btnMFMatchExcept;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_lbJubsu = rawVisible_lbJubsu;
    const setIsVisible_lbJubsu = setRawVisible_lbJubsu;
    const isVisible_cbxMFHead = rawVisible_cbxMFHead;
    const setIsVisible_cbxMFHead = setRawVisible_cbxMFHead;
    const isVisible_cbxMFStation = rawVisible_cbxMFStation;
    const setIsVisible_cbxMFStation = setRawVisible_cbxMFStation;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_medMFModDate1 = rawVisible_medMFModDate1;
    const setIsVisible_medMFModDate1 = setRawVisible_medMFModDate1;
    const isVisible_Static12 = rawVisible_Static12;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_medMFModDate2 = rawVisible_medMFModDate2;
    const setIsVisible_medMFModDate2 = setRawVisible_medMFModDate2;
    const isVisible_Static5 = rawVisible_Static5;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_Static6 = rawVisible_Static6;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_lbMFDate = rawVisible_lbMFDate;
    const setIsVisible_lbMFDate = setRawVisible_lbMFDate;
    const isVisible_Static8 = rawVisible_Static8;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_Static9 = rawVisible_Static9;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_cbxMFCenter = rawVisible_cbxMFCenter;
    const setIsVisible_cbxMFCenter = setRawVisible_cbxMFCenter;
    const isVisible_cbxMFMnfctretcGubun = rawVisible_cbxMFMnfctretcGubun;
    const setIsVisible_cbxMFMnfctretcGubun = setRawVisible_cbxMFMnfctretcGubun;
    const isVisible_Static10 = rawVisible_Static10;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_radMFSelectGubun = rawVisible_radMFSelectGubun;
    const setIsVisible_radMFSelectGubun = setRawVisible_radMFSelectGubun;
    const isVisible_edMFKeyword = rawVisible_edMFKeyword;
    const setIsVisible_edMFKeyword = setRawVisible_edMFKeyword;
    const isVisible_cbxMFKeyfield = rawVisible_cbxMFKeyfield;
    const setIsVisible_cbxMFKeyfield = setRawVisible_cbxMFKeyfield;
    const isVisible_btnMFSearch = rawVisible_btnMFSearch;
    const setIsVisible_btnMFSearch = setRawVisible_btnMFSearch;
    const isVisible_gdKFOBJList = rawVisible_gdKFOBJList;
    const setIsVisible_gdKFOBJList = setRawVisible_gdKFOBJList;
    const isVisible_btnKFMatchExcept = rawVisible_btnKFMatchExcept;
    const setIsVisible_btnKFMatchExcept = setRawVisible_btnKFMatchExcept;
    const isVisible_btnKFExcel = rawVisible_btnKFExcel;
    const setIsVisible_btnKFExcel = setRawVisible_btnKFExcel;
    const isVisible_btnMFExcel = rawVisible_btnMFExcel;
    const setIsVisible_btnMFExcel = setRawVisible_btnMFExcel;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_cbxKFJibu = rawVisible_cbxKFJibu;
    const setIsVisible_cbxKFJibu = setRawVisible_cbxKFJibu;
    const isVisible_cbxKFRegion1 = rawVisible_cbxKFRegion1;
    const setIsVisible_cbxKFRegion1 = setRawVisible_cbxKFRegion1;
    const isVisible_cbxKFRegion2 = rawVisible_cbxKFRegion2;
    const setIsVisible_cbxKFRegion2 = setRawVisible_cbxKFRegion2;
    const isVisible_Static14 = rawVisible_Static14;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_cbxKFCourseD = rawVisible_cbxKFCourseD;
    const setIsVisible_cbxKFCourseD = setRawVisible_cbxKFCourseD;
    const isVisible_radKFSelectGubun = rawVisible_radKFSelectGubun;
    const setIsVisible_radKFSelectGubun = setRawVisible_radKFSelectGubun;
    const isVisible_Static11 = rawVisible_Static11;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_cbxKFKeyfield = rawVisible_cbxKFKeyfield;
    const setIsVisible_cbxKFKeyfield = setRawVisible_cbxKFKeyfield;
    const isVisible_edKFKeyword = rawVisible_edKFKeyword;
    const setIsVisible_edKFKeyword = setRawVisible_edKFKeyword;
    const isVisible_btnKFSearch = rawVisible_btnKFSearch;
    const setIsVisible_btnKFSearch = setRawVisible_btnKFSearch;
    const isVisible_Static15 = rawVisible_Static15;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_Static16 = rawVisible_Static16;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_Static17 = rawVisible_Static17;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_Static18 = rawVisible_Static18;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_Static19 = rawVisible_Static19;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_Static20 = rawVisible_Static20;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_Static21 = rawVisible_Static21;
    const setIsVisible_Static21 = setRawVisible_Static21;
    const isVisible_Static23 = rawVisible_Static23;
    const setIsVisible_Static23 = setRawVisible_Static23;
    const isVisible_edMFOBJ_NM = rawVisible_edMFOBJ_NM;
    const setIsVisible_edMFOBJ_NM = setRawVisible_edMFOBJ_NM;
    const isVisible_edMFADDR = rawVisible_edMFADDR;
    const setIsVisible_edMFADDR = setRawVisible_edMFADDR;
    const isVisible_edMFCOMPET_DE = rawVisible_edMFCOMPET_DE;
    const setIsVisible_edMFCOMPET_DE = setRawVisible_edMFCOMPET_DE;
    const isVisible_edMFCMPN119SC_ID = rawVisible_edMFCMPN119SC_ID;
    const setIsVisible_edMFCMPN119SC_ID = setRawVisible_edMFCMPN119SC_ID;
    const isVisible_edMFMNFCTRETCNM = rawVisible_edMFMNFCTRETCNM;
    const setIsVisible_edMFMNFCTRETCNM = setRawVisible_edMFMNFCTRETCNM;
    const isVisible_Static31 = rawVisible_Static31;
    const setIsVisible_Static31 = setRawVisible_Static31;
    const isVisible_edMFMNFCTRETCDETAILNM = rawVisible_edMFMNFCTRETCDETAILNM;
    const setIsVisible_edMFMNFCTRETCDETAILNM = setRawVisible_edMFMNFCTRETCDETAILNM;
    const isVisible_Static32 = rawVisible_Static32;
    const setIsVisible_Static32 = setRawVisible_Static32;
    const isVisible_edMFINSTLR_TELNO = rawVisible_edMFINSTLR_TELNO;
    const setIsVisible_edMFINSTLR_TELNO = setRawVisible_edMFINSTLR_TELNO;
    const isVisible_Static24 = rawVisible_Static24;
    const setIsVisible_Static24 = setRawVisible_Static24;
    const isVisible_gdMFManager = rawVisible_gdMFManager;
    const setIsVisible_gdMFManager = setRawVisible_gdMFManager;
    const isVisible_Static25 = rawVisible_Static25;
    const setIsVisible_Static25 = setRawVisible_Static25;
    const isVisible_Static26 = rawVisible_Static26;
    const setIsVisible_Static26 = setRawVisible_Static26;
    const isVisible_Static27 = rawVisible_Static27;
    const setIsVisible_Static27 = setRawVisible_Static27;
    const isVisible_Static28 = rawVisible_Static28;
    const setIsVisible_Static28 = setRawVisible_Static28;
    const isVisible_Static29 = rawVisible_Static29;
    const setIsVisible_Static29 = setRawVisible_Static29;
    const isVisible_Static30 = rawVisible_Static30;
    const setIsVisible_Static30 = setRawVisible_Static30;
    const isVisible_Static33 = rawVisible_Static33;
    const setIsVisible_Static33 = setRawVisible_Static33;
    const isVisible_edKFBADDR1 = rawVisible_edKFBADDR1;
    const setIsVisible_edKFBADDR1 = setRawVisible_edKFBADDR1;
    const isVisible_edKFBNM = rawVisible_edKFBNM;
    const setIsVisible_edKFBNM = setRawVisible_edKFBNM;
    const isVisible_edKFMatch = rawVisible_edKFMatch;
    const setIsVisible_edKFMatch = setRawVisible_edKFMatch;
    const isVisible_Static34 = rawVisible_Static34;
    const setIsVisible_Static34 = setRawVisible_Static34;
    const isVisible_edKFRCNM = rawVisible_edKFRCNM;
    const setIsVisible_edKFRCNM = setRawVisible_edKFRCNM;
    const isVisible_edKFCCCDNM = rawVisible_edKFCCCDNM;
    const setIsVisible_edKFCCCDNM = setRawVisible_edKFCCCDNM;
    const isVisible_edKFCGROUPNM = rawVisible_edKFCGROUPNM;
    const setIsVisible_edKFCGROUPNM = setRawVisible_edKFCGROUPNM;
    const isVisible_Static35 = rawVisible_Static35;
    const setIsVisible_Static35 = setRawVisible_Static35;
    const isVisible_edKFCNM = rawVisible_edKFCNM;
    const setIsVisible_edKFCNM = setRawVisible_edKFCNM;
    const isVisible_edKFBTEL = rawVisible_edKFBTEL;
    const setIsVisible_edKFBTEL = setRawVisible_edKFBTEL;
    const isVisible_Static36 = rawVisible_Static36;
    const setIsVisible_Static36 = setRawVisible_Static36;
    const isVisible_edKFCPERSONGUBUN = rawVisible_edKFCPERSONGUBUN;
    const setIsVisible_edKFCPERSONGUBUN = setRawVisible_edKFCPERSONGUBUN;
    const isVisible_edKFCAGGUBUN = rawVisible_edKFCAGGUBUN;
    const setIsVisible_edKFCAGGUBUN = setRawVisible_edKFCAGGUBUN;
    const isVisible_Static37 = rawVisible_Static37;
    const setIsVisible_Static37 = setRawVisible_Static37;
    const isVisible_edKFCREGISTERYYMM = rawVisible_edKFCREGISTERYYMM;
    const setIsVisible_edKFCREGISTERYYMM = setRawVisible_edKFCREGISTERYYMM;
    const isVisible_edKFCFEEYYMM = rawVisible_edKFCFEEYYMM;
    const setIsVisible_edKFCFEEYYMM = setRawVisible_edKFCFEEYYMM;
    const isVisible_Static38 = rawVisible_Static38;
    const setIsVisible_Static38 = setRawVisible_Static38;
    const isVisible_edKFDELGUBUN = rawVisible_edKFDELGUBUN;
    const setIsVisible_edKFDELGUBUN = setRawVisible_edKFDELGUBUN;
    const isVisible_Static39 = rawVisible_Static39;
    const setIsVisible_Static39 = setRawVisible_Static39;
    const isVisible_Static40 = rawVisible_Static40;
    const setIsVisible_Static40 = setRawVisible_Static40;
    const isVisible_Static41 = rawVisible_Static41;
    const setIsVisible_Static41 = setRawVisible_Static41;
    const isVisible_edKFFMNM = rawVisible_edKFFMNM;
    const setIsVisible_edKFFMNM = setRawVisible_edKFFMNM;
    const isVisible_Static43 = rawVisible_Static43;
    const setIsVisible_Static43 = setRawVisible_Static43;
    const isVisible_edKFFMHSTARTDATE = rawVisible_edKFFMHSTARTDATE;
    const setIsVisible_edKFFMHSTARTDATE = setRawVisible_edKFFMHSTARTDATE;
    const isVisible_Static44 = rawVisible_Static44;
    const setIsVisible_Static44 = setRawVisible_Static44;
    const isVisible_edKFFMHENDDATE = rawVisible_edKFFMHENDDATE;
    const setIsVisible_edKFFMHENDDATE = setRawVisible_edKFFMHENDDATE;
    const isVisible_btnFPISInfo = rawVisible_btnFPISInfo;
    const setIsVisible_btnFPISInfo = setRawVisible_btnFPISInfo;
    const isVisible_btnKFSunapEduInfo = rawVisible_btnKFSunapEduInfo;
    const setIsVisible_btnKFSunapEduInfo = setRawVisible_btnKFSunapEduInfo;
    const isVisible_chkMFPerson = rawVisible_chkMFPerson;
    const setIsVisible_chkMFPerson = setRawVisible_chkMFPerson;
    const isVisible_chkKFPerson = rawVisible_chkKFPerson;
    const setIsVisible_chkKFPerson = setRawVisible_chkKFPerson;
    const isVisible_edMFCount = rawVisible_edMFCount;
    const setIsVisible_edMFCount = setRawVisible_edMFCount;
    const isVisible_Static45 = rawVisible_Static45;
    const setIsVisible_Static45 = setRawVisible_Static45;
    const isVisible_Static46 = rawVisible_Static46;
    const setIsVisible_Static46 = setRawVisible_Static46;
    const isVisible_edKFCount = rawVisible_edKFCount;
    const setIsVisible_edKFCount = setRawVisible_edKFCount;
    const isVisible_btnMatch = rawVisible_btnMatch;
    const setIsVisible_btnMatch = setRawVisible_btnMatch;
    const isVisible_btnNewMatch = rawVisible_btnNewMatch;
    const setIsVisible_btnNewMatch = setRawVisible_btnNewMatch;
    const isVisible_btnModMatch = rawVisible_btnModMatch;
    const setIsVisible_btnModMatch = setRawVisible_btnModMatch;
    const isVisible_edMFINSTLR_NM = rawVisible_edMFINSTLR_NM;
    const setIsVisible_edMFINSTLR_NM = setRawVisible_edMFINSTLR_NM;
    const isVisible_Static47 = rawVisible_Static47;
    const setIsVisible_Static47 = setRawVisible_Static47;
    const isVisible_cbxMFMnfctretcGubunD = rawVisible_cbxMFMnfctretcGubunD;
    const setIsVisible_cbxMFMnfctretcGubunD = setRawVisible_cbxMFMnfctretcGubunD;
    const isVisible_Static48 = rawVisible_Static48;
    const setIsVisible_Static48 = setRawVisible_Static48;
    const isVisible_Static52 = rawVisible_Static52;
    const setIsVisible_Static52 = setRawVisible_Static52;
    const isVisible_edMFPRMISN_NO = rawVisible_edMFPRMISN_NO;
    const setIsVisible_edMFPRMISN_NO = setRawVisible_edMFPRMISN_NO;
    const isVisible_Static56 = rawVisible_Static56;
    const setIsVisible_Static56 = setRawVisible_Static56;
    const isVisible_Static57 = rawVisible_Static57;
    const setIsVisible_Static57 = setRawVisible_Static57;
    const isVisible_Edit0 = rawVisible_Edit0;
    const setIsVisible_Edit0 = setRawVisible_Edit0;
    const isVisible_Static58 = rawVisible_Static58;
    const setIsVisible_Static58 = setRawVisible_Static58;
    const isVisible_Edit1 = rawVisible_Edit1;
    const setIsVisible_Edit1 = setRawVisible_Edit1;
    const isVisible_Static59 = rawVisible_Static59;
    const setIsVisible_Static59 = setRawVisible_Static59;
    const isVisible_Edit2 = rawVisible_Edit2;
    const setIsVisible_Edit2 = setRawVisible_Edit2;
    const isVisible_btnMatchCancel = rawVisible_btnMatchCancel;
    const setIsVisible_btnMatchCancel = setRawVisible_btnMatchCancel;
    const isVisible_chkKFDelUser = rawVisible_chkKFDelUser;
    const setIsVisible_chkKFDelUser = setRawVisible_chkKFDelUser;
    const isVisible_Static60 = rawVisible_Static60;
    const setIsVisible_Static60 = setRawVisible_Static60;
    const isVisible_Static61 = rawVisible_Static61;
    const setIsVisible_Static61 = setRawVisible_Static61;
    const isVisible_edKFCSTATUSGUBUN = rawVisible_edKFCSTATUSGUBUN;
    const setIsVisible_edKFCSTATUSGUBUN = setRawVisible_edKFCSTATUSGUBUN;
    const isVisible_Static49 = rawVisible_Static49;
    const setIsVisible_Static49 = setRawVisible_Static49;
    const isVisible_edMFFDong = rawVisible_edMFFDong;
    const setIsVisible_edMFFDong = setRawVisible_edMFFDong;
    const isVisible_edMFDong = rawVisible_edMFDong;
    const setIsVisible_edMFDong = setRawVisible_edMFDong;
    const isVisible_Static50 = rawVisible_Static50;
    const setIsVisible_Static50 = setRawVisible_Static50;
    const isVisible_edMFMainAddr = rawVisible_edMFMainAddr;
    const setIsVisible_edMFMainAddr = setRawVisible_edMFMainAddr;
    const isVisible_Static51 = rawVisible_Static51;
    const setIsVisible_Static51 = setRawVisible_Static51;
    const isVisible_edMFSubAddr = rawVisible_edMFSubAddr;
    const setIsVisible_edMFSubAddr = setRawVisible_edMFSubAddr;
    const isVisible_Static62 = rawVisible_Static62;
    const setIsVisible_Static62 = setRawVisible_Static62;
    const isVisible_edMFINSTLR_CPR_NM = rawVisible_edMFINSTLR_CPR_NM;
    const setIsVisible_edMFINSTLR_CPR_NM = setRawVisible_edMFINSTLR_CPR_NM;
    const isVisible_Static53 = rawVisible_Static53;
    const setIsVisible_Static53 = setRawVisible_Static53;
    const isVisible_edKFFDong = rawVisible_edKFFDong;
    const setIsVisible_edKFFDong = setRawVisible_edKFFDong;
    const isVisible_edKFDong = rawVisible_edKFDong;
    const setIsVisible_edKFDong = setRawVisible_edKFDong;
    const isVisible_Static54 = rawVisible_Static54;
    const setIsVisible_Static54 = setRawVisible_Static54;
    const isVisible_edKFMainAddr = rawVisible_edKFMainAddr;
    const setIsVisible_edKFMainAddr = setRawVisible_edKFMainAddr;
    const isVisible_Static55 = rawVisible_Static55;
    const setIsVisible_Static55 = setRawVisible_Static55;
    const isVisible_edKFSubAddr = rawVisible_edKFSubAddr;
    const setIsVisible_edKFSubAddr = setRawVisible_edKFSubAddr;
    const isVisible_gdDangerInfo = rawVisible_gdDangerInfo;
    const setIsVisible_gdDangerInfo = setRawVisible_gdDangerInfo;
    const isVisible_btnDanger = rawVisible_btnDanger;
    const setIsVisible_btnDanger = setRawVisible_btnDanger;
    const isVisible_btnMFMatchExceptCancelM = rawVisible_btnMFMatchExceptCancelM;
    const setIsVisible_btnMFMatchExceptCancelM = setRawVisible_btnMFMatchExceptCancelM;
    const isVisible_btnMFMatchExceptM = rawVisible_btnMFMatchExceptM;
    const setIsVisible_btnMFMatchExceptM = setRawVisible_btnMFMatchExceptM;
    const isVisible_gdMFOBJList = rawVisible_gdMFOBJList;
    const setIsVisible_gdMFOBJList = setRawVisible_gdMFOBJList;
    const isVisible_Static63 = rawVisible_Static63;
    const setIsVisible_Static63 = setRawVisible_Static63;
    const isVisible_edMFMatch = rawVisible_edMFMatch;
    const setIsVisible_edMFMatch = setRawVisible_edMFMatch;
    const isVisible_Static22 = rawVisible_Static22;
    const setIsVisible_Static22 = setRawVisible_Static22;
    const isVisible_edCREGDATE = rawVisible_edCREGDATE;
    const setIsVisible_edCREGDATE = setRawVisible_edCREGDATE;
    const isVisible_Static64 = rawVisible_Static64;
    const setIsVisible_Static64 = setRawVisible_Static64;
    const isVisible_edCMODDATE = rawVisible_edCMODDATE;
    const setIsVisible_edCMODDATE = setRawVisible_edCMODDATE;
    const isVisible_spMFRowNum = rawVisible_spMFRowNum;
    const setIsVisible_spMFRowNum = setRawVisible_spMFRowNum;
    const isVisible_spKFRowNum = rawVisible_spKFRowNum;
    const setIsVisible_spKFRowNum = setRawVisible_spKFRowNum;
    const isVisible_Static7 = rawVisible_Static7;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_edMFRoadNM = rawVisible_edMFRoadNM;
    const setIsVisible_edMFRoadNM = setRawVisible_edMFRoadNM;
    const isVisible_Static66 = rawVisible_Static66;
    const setIsVisible_Static66 = setRawVisible_Static66;
    const isVisible_edMFMainNO = rawVisible_edMFMainNO;
    const setIsVisible_edMFMainNO = setRawVisible_edMFMainNO;
    const isVisible_Static67 = rawVisible_Static67;
    const setIsVisible_Static67 = setRawVisible_Static67;
    const isVisible_edMFSubNO = rawVisible_edMFSubNO;
    const setIsVisible_edMFSubNO = setRawVisible_edMFSubNO;
    const isVisible_Static68 = rawVisible_Static68;
    const setIsVisible_Static68 = setRawVisible_Static68;
    const isVisible_edKFRoadNM = rawVisible_edKFRoadNM;
    const setIsVisible_edKFRoadNM = setRawVisible_edKFRoadNM;
    const isVisible_Static69 = rawVisible_Static69;
    const setIsVisible_Static69 = setRawVisible_Static69;
    const isVisible_edKFMainNO = rawVisible_edKFMainNO;
    const setIsVisible_edKFMainNO = setRawVisible_edKFMainNO;
    const isVisible_Static70 = rawVisible_Static70;
    const setIsVisible_Static70 = setRawVisible_Static70;
    const isVisible_edKFSubNO = rawVisible_edKFSubNO;
    const setIsVisible_edKFSubNO = setRawVisible_edKFSubNO;
    const isVisible_Static42 = rawVisible_Static42;
    const setIsVisible_Static42 = setRawVisible_Static42;
    const isVisible_edKFFMBIRTHDAY = rawVisible_edKFFMBIRTHDAY;
    const setIsVisible_edKFFMBIRTHDAY = setRawVisible_edKFFMBIRTHDAY;
    const isVisible_Static71 = rawVisible_Static71;
    const setIsVisible_Static71 = setRawVisible_Static71;
    const isVisible_edKFFMPersonKey = rawVisible_edKFFMPersonKey;
    const setIsVisible_edKFFMPersonKey = setRawVisible_edKFFMPersonKey;
    const isVisible_Static65 = rawVisible_Static65;
    const setIsVisible_Static65 = setRawVisible_Static65;
    const isVisible_radMFUseAt = rawVisible_radMFUseAt;
    const setIsVisible_radMFUseAt = setRawVisible_radMFUseAt;
    const isVisible_lbsearchNotice = rawVisible_lbsearchNotice;
    const setIsVisible_lbsearchNotice = setRawVisible_lbsearchNotice;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnDataHistory = rawVisible_btnDataHistory && rawVisible_shpBtnBox;
    const setIsVisible_btnDataHistory = setRawVisible_btnDataHistory;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const [tabValue_tab, setTabValue_tab] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioCourse([]);
            setds_ioJibu([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oFireHead([]);
            setds_ioMNFCTRETCGubun([]);
            setds_ioSelectGubun([]);
            setds_ioMFFireObj([]);
            setds_ioKFFireObj([]);
            setds_ioMFKeyfield([]);
            setds_oRegion([]);
            setds_ioCourseD([]);
            setds_ioFireManagerInfo([]);
            setds_oFire([]);
            setds_ioPBLINSTT([]);
            setds_ioMFFireObjD([]);
            setds_ioMNFCTRETCGubunD([]);
            setds_ioObjGubun([]);
            setds_ioDangerInfo([]);
            setds_ioMFFireObj2([]);
            setds_ioKFFireObj2([]);
            setds_ioFireManagerInfo2([]);
            setds_ioMFFireObjD2([]);
            setds_ioDangerInfo2([]);
            setds_ioGubun([]);
            setds_ioUSEAT([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnDataHistory_OnClick = () => {
        console.log('btnDataHistory_OnClick clicked');
    };
    const btnModMatch_OnClick = () => {
        console.log('btnModMatch_OnClick clicked');
    };
    const btnModMatch_OnClick2 = () => {
        console.log('btnModMatch_OnClick2 clicked');
    };
    const btnNewMatch_OnClick = () => {
        console.log('btnNewMatch_OnClick clicked');
    };
    const lfn_CancelMatch = () => {
        console.log('lfn_CancelMatch clicked');
    };
    const lfn_CancelMatch2 = () => {
        console.log('lfn_CancelMatch2 clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_KFMatchExcept = () => {
        console.log('lfn_KFMatchExcept clicked');
    };
    const lfn_KFMatchExcept2 = () => {
        console.log('lfn_KFMatchExcept2 clicked');
    };
    const lfn_KFMatchExceptCancel = () => {
        console.log('lfn_KFMatchExceptCancel clicked');
    };
    const lfn_KFMatchExceptCancel2 = () => {
        console.log('lfn_KFMatchExceptCancel2 clicked');
    };
    const lfn_KFSearch2 = () => {
        console.log('lfn_KFSearch2 clicked');
    };
    const lfn_MFMatchExcept = () => {
        console.log('lfn_MFMatchExcept clicked');
    };
    const lfn_MFMatchExcept2 = () => {
        console.log('lfn_MFMatchExcept2 clicked');
    };
    const lfn_MFMatchExceptCancel = () => {
        console.log('lfn_MFMatchExceptCancel clicked');
    };
    const lfn_MFMatchExceptCancel2 = () => {
        console.log('lfn_MFMatchExceptCancel2 clicked');
    };
    const lfn_MFMatchExceptCancelM = () => {
        console.log('lfn_MFMatchExceptCancelM clicked');
    };
    const lfn_MFMatchExceptCancelM2 = () => {
        console.log('lfn_MFMatchExceptCancelM2 clicked');
    };
    const lfn_MFMatchExceptM = () => {
        console.log('lfn_MFMatchExceptM clicked');
    };
    const lfn_MFMatchExceptM2 = () => {
        console.log('lfn_MFMatchExceptM2 clicked');
    };
    const lfn_MFSearch = () => {
        console.log('lfn_MFSearch clicked');
    };
    const lfn_NowMatch = () => {
        console.log('lfn_NowMatch clicked');
    };
    const lfn_NowMatch2 = () => {
        console.log('lfn_NowMatch2 clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_SunapEduInfo = () => {
        console.log('lfn_SunapEduInfo clicked');
    };
    const lfn_SunapEduInfo2 = () => {
        console.log('lfn_SunapEduInfo2 clicked');
    };
    const tab_page1_btnFPISInfo_OnClick = () => {
        console.log('tab_page1_btnFPISInfo_OnClick clicked');
    };
    const tab_page1_btnKFExcel_OnClick = () => {
        console.log('tab_page1_btnKFExcel_OnClick clicked');
    };
    const tab_page1_btnKFSearch_OnClick = () => {
        console.log('tab_page1_btnKFSearch_OnClick clicked');
    };
    const tab_page1_btnMFExcel_OnClick = () => {
        console.log('tab_page1_btnMFExcel_OnClick clicked');
    };
    const tab_page2_btnFPISInfo_OnClick = () => {
        console.log('tab_page2_btnFPISInfo_OnClick clicked');
    };
    const tab_page2_btnKFExcel_OnClick = () => {
        console.log('tab_page2_btnKFExcel_OnClick clicked');
    };
    const tab_page2_btnMFExcel_OnClick = () => {
        console.log('tab_page2_btnMFExcel_OnClick clicked');
    };
    const tab_page2_btnMFSearch_OnClick = () => {
        console.log('tab_page2_btnMFSearch_OnClick clicked');
    };

    return {
        isLoading,
        ds_ioCourse,
        ds_ioJibu,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oFireHead,
        ds_ioMNFCTRETCGubun,
        ds_ioSelectGubun,
        ds_ioMFFireObj,
        ds_ioKFFireObj,
        ds_ioMFKeyfield,
        ds_oRegion,
        ds_ioCourseD,
        ds_ioFireManagerInfo,
        ds_oFire,
        ds_ioPBLINSTT,
        ds_ioMFFireObjD,
        ds_ioMNFCTRETCGubunD,
        ds_ioObjGubun,
        ds_ioDangerInfo,
        ds_ioMFFireObj2,
        ds_ioKFFireObj2,
        ds_ioFireManagerInfo2,
        ds_ioMFFireObjD2,
        ds_ioDangerInfo2,
        ds_ioGubun,
        ds_ioUSEAT,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_tab,
        setIsVisible_tab,
        isVisible_btnKFMatchCancel,
        setIsVisible_btnKFMatchCancel,
        isVisible_btnMFMatchCancel,
        setIsVisible_btnMFMatchCancel,
        isVisible_btnMFMatchExcept,
        setIsVisible_btnMFMatchExcept,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_lbJubsu,
        setIsVisible_lbJubsu,
        isVisible_cbxMFHead,
        setIsVisible_cbxMFHead,
        isVisible_cbxMFStation,
        setIsVisible_cbxMFStation,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_medMFModDate1,
        setIsVisible_medMFModDate1,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_medMFModDate2,
        setIsVisible_medMFModDate2,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_lbMFDate,
        setIsVisible_lbMFDate,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_cbxMFCenter,
        setIsVisible_cbxMFCenter,
        isVisible_cbxMFMnfctretcGubun,
        setIsVisible_cbxMFMnfctretcGubun,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_radMFSelectGubun,
        setIsVisible_radMFSelectGubun,
        isVisible_edMFKeyword,
        setIsVisible_edMFKeyword,
        isVisible_cbxMFKeyfield,
        setIsVisible_cbxMFKeyfield,
        isVisible_btnMFSearch,
        setIsVisible_btnMFSearch,
        isVisible_gdKFOBJList,
        setIsVisible_gdKFOBJList,
        isVisible_btnKFMatchExcept,
        setIsVisible_btnKFMatchExcept,
        isVisible_btnKFExcel,
        setIsVisible_btnKFExcel,
        isVisible_btnMFExcel,
        setIsVisible_btnMFExcel,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_cbxKFJibu,
        setIsVisible_cbxKFJibu,
        isVisible_cbxKFRegion1,
        setIsVisible_cbxKFRegion1,
        isVisible_cbxKFRegion2,
        setIsVisible_cbxKFRegion2,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_cbxKFCourseD,
        setIsVisible_cbxKFCourseD,
        isVisible_radKFSelectGubun,
        setIsVisible_radKFSelectGubun,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_cbxKFKeyfield,
        setIsVisible_cbxKFKeyfield,
        isVisible_edKFKeyword,
        setIsVisible_edKFKeyword,
        isVisible_btnKFSearch,
        setIsVisible_btnKFSearch,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_Static21,
        setIsVisible_Static21,
        isVisible_Static23,
        setIsVisible_Static23,
        isVisible_edMFOBJ_NM,
        setIsVisible_edMFOBJ_NM,
        isVisible_edMFADDR,
        setIsVisible_edMFADDR,
        isVisible_edMFCOMPET_DE,
        setIsVisible_edMFCOMPET_DE,
        isVisible_edMFCMPN119SC_ID,
        setIsVisible_edMFCMPN119SC_ID,
        isVisible_edMFMNFCTRETCNM,
        setIsVisible_edMFMNFCTRETCNM,
        isVisible_Static31,
        setIsVisible_Static31,
        isVisible_edMFMNFCTRETCDETAILNM,
        setIsVisible_edMFMNFCTRETCDETAILNM,
        isVisible_Static32,
        setIsVisible_Static32,
        isVisible_edMFINSTLR_TELNO,
        setIsVisible_edMFINSTLR_TELNO,
        isVisible_Static24,
        setIsVisible_Static24,
        isVisible_gdMFManager,
        setIsVisible_gdMFManager,
        isVisible_Static25,
        setIsVisible_Static25,
        isVisible_Static26,
        setIsVisible_Static26,
        isVisible_Static27,
        setIsVisible_Static27,
        isVisible_Static28,
        setIsVisible_Static28,
        isVisible_Static29,
        setIsVisible_Static29,
        isVisible_Static30,
        setIsVisible_Static30,
        isVisible_Static33,
        setIsVisible_Static33,
        isVisible_edKFBADDR1,
        setIsVisible_edKFBADDR1,
        isVisible_edKFBNM,
        setIsVisible_edKFBNM,
        isVisible_edKFMatch,
        setIsVisible_edKFMatch,
        isVisible_Static34,
        setIsVisible_Static34,
        isVisible_edKFRCNM,
        setIsVisible_edKFRCNM,
        isVisible_edKFCCCDNM,
        setIsVisible_edKFCCCDNM,
        isVisible_edKFCGROUPNM,
        setIsVisible_edKFCGROUPNM,
        isVisible_Static35,
        setIsVisible_Static35,
        isVisible_edKFCNM,
        setIsVisible_edKFCNM,
        isVisible_edKFBTEL,
        setIsVisible_edKFBTEL,
        isVisible_Static36,
        setIsVisible_Static36,
        isVisible_edKFCPERSONGUBUN,
        setIsVisible_edKFCPERSONGUBUN,
        isVisible_edKFCAGGUBUN,
        setIsVisible_edKFCAGGUBUN,
        isVisible_Static37,
        setIsVisible_Static37,
        isVisible_edKFCREGISTERYYMM,
        setIsVisible_edKFCREGISTERYYMM,
        isVisible_edKFCFEEYYMM,
        setIsVisible_edKFCFEEYYMM,
        isVisible_Static38,
        setIsVisible_Static38,
        isVisible_edKFDELGUBUN,
        setIsVisible_edKFDELGUBUN,
        isVisible_Static39,
        setIsVisible_Static39,
        isVisible_Static40,
        setIsVisible_Static40,
        isVisible_Static41,
        setIsVisible_Static41,
        isVisible_edKFFMNM,
        setIsVisible_edKFFMNM,
        isVisible_Static43,
        setIsVisible_Static43,
        isVisible_edKFFMHSTARTDATE,
        setIsVisible_edKFFMHSTARTDATE,
        isVisible_Static44,
        setIsVisible_Static44,
        isVisible_edKFFMHENDDATE,
        setIsVisible_edKFFMHENDDATE,
        isVisible_btnFPISInfo,
        setIsVisible_btnFPISInfo,
        isVisible_btnKFSunapEduInfo,
        setIsVisible_btnKFSunapEduInfo,
        isVisible_chkMFPerson,
        setIsVisible_chkMFPerson,
        isVisible_chkKFPerson,
        setIsVisible_chkKFPerson,
        isVisible_edMFCount,
        setIsVisible_edMFCount,
        isVisible_Static45,
        setIsVisible_Static45,
        isVisible_Static46,
        setIsVisible_Static46,
        isVisible_edKFCount,
        setIsVisible_edKFCount,
        isVisible_btnMatch,
        setIsVisible_btnMatch,
        isVisible_btnNewMatch,
        setIsVisible_btnNewMatch,
        isVisible_btnModMatch,
        setIsVisible_btnModMatch,
        isVisible_edMFINSTLR_NM,
        setIsVisible_edMFINSTLR_NM,
        isVisible_Static47,
        setIsVisible_Static47,
        isVisible_cbxMFMnfctretcGubunD,
        setIsVisible_cbxMFMnfctretcGubunD,
        isVisible_Static48,
        setIsVisible_Static48,
        isVisible_Static52,
        setIsVisible_Static52,
        isVisible_edMFPRMISN_NO,
        setIsVisible_edMFPRMISN_NO,
        isVisible_Static56,
        setIsVisible_Static56,
        isVisible_Static57,
        setIsVisible_Static57,
        isVisible_Edit0,
        setIsVisible_Edit0,
        isVisible_Static58,
        setIsVisible_Static58,
        isVisible_Edit1,
        setIsVisible_Edit1,
        isVisible_Static59,
        setIsVisible_Static59,
        isVisible_Edit2,
        setIsVisible_Edit2,
        isVisible_btnMatchCancel,
        setIsVisible_btnMatchCancel,
        isVisible_chkKFDelUser,
        setIsVisible_chkKFDelUser,
        isVisible_Static60,
        setIsVisible_Static60,
        isVisible_Static61,
        setIsVisible_Static61,
        isVisible_edKFCSTATUSGUBUN,
        setIsVisible_edKFCSTATUSGUBUN,
        isVisible_Static49,
        setIsVisible_Static49,
        isVisible_edMFFDong,
        setIsVisible_edMFFDong,
        isVisible_edMFDong,
        setIsVisible_edMFDong,
        isVisible_Static50,
        setIsVisible_Static50,
        isVisible_edMFMainAddr,
        setIsVisible_edMFMainAddr,
        isVisible_Static51,
        setIsVisible_Static51,
        isVisible_edMFSubAddr,
        setIsVisible_edMFSubAddr,
        isVisible_Static62,
        setIsVisible_Static62,
        isVisible_edMFINSTLR_CPR_NM,
        setIsVisible_edMFINSTLR_CPR_NM,
        isVisible_Static53,
        setIsVisible_Static53,
        isVisible_edKFFDong,
        setIsVisible_edKFFDong,
        isVisible_edKFDong,
        setIsVisible_edKFDong,
        isVisible_Static54,
        setIsVisible_Static54,
        isVisible_edKFMainAddr,
        setIsVisible_edKFMainAddr,
        isVisible_Static55,
        setIsVisible_Static55,
        isVisible_edKFSubAddr,
        setIsVisible_edKFSubAddr,
        isVisible_gdDangerInfo,
        setIsVisible_gdDangerInfo,
        isVisible_btnDanger,
        setIsVisible_btnDanger,
        isVisible_btnMFMatchExceptCancelM,
        setIsVisible_btnMFMatchExceptCancelM,
        isVisible_btnMFMatchExceptM,
        setIsVisible_btnMFMatchExceptM,
        isVisible_gdMFOBJList,
        setIsVisible_gdMFOBJList,
        isVisible_Static63,
        setIsVisible_Static63,
        isVisible_edMFMatch,
        setIsVisible_edMFMatch,
        isVisible_Static22,
        setIsVisible_Static22,
        isVisible_edCREGDATE,
        setIsVisible_edCREGDATE,
        isVisible_Static64,
        setIsVisible_Static64,
        isVisible_edCMODDATE,
        setIsVisible_edCMODDATE,
        isVisible_spMFRowNum,
        setIsVisible_spMFRowNum,
        isVisible_spKFRowNum,
        setIsVisible_spKFRowNum,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edMFRoadNM,
        setIsVisible_edMFRoadNM,
        isVisible_Static66,
        setIsVisible_Static66,
        isVisible_edMFMainNO,
        setIsVisible_edMFMainNO,
        isVisible_Static67,
        setIsVisible_Static67,
        isVisible_edMFSubNO,
        setIsVisible_edMFSubNO,
        isVisible_Static68,
        setIsVisible_Static68,
        isVisible_edKFRoadNM,
        setIsVisible_edKFRoadNM,
        isVisible_Static69,
        setIsVisible_Static69,
        isVisible_edKFMainNO,
        setIsVisible_edKFMainNO,
        isVisible_Static70,
        setIsVisible_Static70,
        isVisible_edKFSubNO,
        setIsVisible_edKFSubNO,
        isVisible_Static42,
        setIsVisible_Static42,
        isVisible_edKFFMBIRTHDAY,
        setIsVisible_edKFFMBIRTHDAY,
        isVisible_Static71,
        setIsVisible_Static71,
        isVisible_edKFFMPersonKey,
        setIsVisible_edKFFMPersonKey,
        isVisible_Static65,
        setIsVisible_Static65,
        isVisible_radMFUseAt,
        setIsVisible_radMFUseAt,
        isVisible_lbsearchNotice,
        setIsVisible_lbsearchNotice,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnDataHistory,
        setIsVisible_btnDataHistory,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        tabValue_tab,
        setTabValue_tab,
        btnDataHistory_OnClick,
        btnModMatch_OnClick,
        btnModMatch_OnClick2,
        btnNewMatch_OnClick,
        lfn_CancelMatch,
        lfn_CancelMatch2,
        lfn_End,
        lfn_KFMatchExcept,
        lfn_KFMatchExcept2,
        lfn_KFMatchExceptCancel,
        lfn_KFMatchExceptCancel2,
        lfn_KFSearch2,
        lfn_MFMatchExcept,
        lfn_MFMatchExcept2,
        lfn_MFMatchExceptCancel,
        lfn_MFMatchExceptCancel2,
        lfn_MFMatchExceptCancelM,
        lfn_MFMatchExceptCancelM2,
        lfn_MFMatchExceptM,
        lfn_MFMatchExceptM2,
        lfn_MFSearch,
        lfn_NowMatch,
        lfn_NowMatch2,
        lfn_PrintScreen,
        lfn_SunapEduInfo,
        lfn_SunapEduInfo2,
        tab_page1_btnFPISInfo_OnClick,
        tab_page1_btnKFExcel_OnClick,
        tab_page1_btnKFSearch_OnClick,
        tab_page1_btnMFExcel_OnClick,
        tab_page2_btnFPISInfo_OnClick,
        tab_page2_btnKFExcel_OnClick,
        tab_page2_btnMFExcel_OnClick,
        tab_page2_btnMFSearch_OnClick,
    };
};