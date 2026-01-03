// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioCourse, Ids_ioJibu, Ids_oFireCd, Ids_oFireCenterCd, Ids_oFireHead, Ids_ioMNFCTRETCGubun, Ids_ioSelectGubun, Ids_ioMFFireObj, Ids_ioKFFireObj, Ids_ioMFKeyfield, Ids_oRegion, Ids_ioCourseD, Ids_oFire, Ids_ioPBLINSTT, Ids_ioMFFireObjD, Ids_ioMNFCTRETCGubunD, Ids_ioDangerInfo, Ids_ioMFFireObj2, Ids_ioKFFireObj2, Ids_ioFireManagerInfo2, Ids_ioMFFireObjD2, Ids_ioDangerInfo2, Ids_ioGubun, Ids_ioJibu2, Ids_oRegion2, Ids_oFireCd2, Ids_oFireCenterCd2, Ids_oFireHead2, Ids_ioObjGubun2, Ids_ioSelectGubun2 } from './Frmcust6300MDataConnectionDangerTankManageData';

export const useFrmcust6300MDataConnectionDangerTankManage = () => {
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
    const [ds_oFire, setds_oFire] = useState<Ids_oFire[]>([]);
    const [ds_ioPBLINSTT, setds_ioPBLINSTT] = useState<Ids_ioPBLINSTT[]>([]);
    const [ds_ioMFFireObjD, setds_ioMFFireObjD] = useState<Ids_ioMFFireObjD[]>([]);
    const [ds_ioMNFCTRETCGubunD, setds_ioMNFCTRETCGubunD] = useState<Ids_ioMNFCTRETCGubunD[]>([]);
    const [ds_ioDangerInfo, setds_ioDangerInfo] = useState<Ids_ioDangerInfo[]>([]);
    const [ds_ioMFFireObj2, setds_ioMFFireObj2] = useState<Ids_ioMFFireObj2[]>([]);
    const [ds_ioKFFireObj2, setds_ioKFFireObj2] = useState<Ids_ioKFFireObj2[]>([]);
    const [ds_ioFireManagerInfo2, setds_ioFireManagerInfo2] = useState<Ids_ioFireManagerInfo2[]>([]);
    const [ds_ioMFFireObjD2, setds_ioMFFireObjD2] = useState<Ids_ioMFFireObjD2[]>([]);
    const [ds_ioDangerInfo2, setds_ioDangerInfo2] = useState<Ids_ioDangerInfo2[]>([]);
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_ioJibu2, setds_ioJibu2] = useState<Ids_ioJibu2[]>([]);
    const [ds_oRegion2, setds_oRegion2] = useState<Ids_oRegion2[]>([]);
    const [ds_oFireCd2, setds_oFireCd2] = useState<Ids_oFireCd2[]>([]);
    const [ds_oFireCenterCd2, setds_oFireCenterCd2] = useState<Ids_oFireCenterCd2[]>([]);
    const [ds_oFireHead2, setds_oFireHead2] = useState<Ids_oFireHead2[]>([]);
    const [ds_ioObjGubun2, setds_ioObjGubun2] = useState<Ids_ioObjGubun2[]>([]);
    const [ds_ioSelectGubun2, setds_ioSelectGubun2] = useState<Ids_ioSelectGubun2[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_tab, setIsVisible_tab] = useState(true);
    const [isVisible_Shape5, setIsVisible_Shape5] = useState(true);
    const [isVisible_btnKFMatchCancel, setIsVisible_btnKFMatchCancel] = useState(false);
    const [isVisible_btnMFMatchCancel, setIsVisible_btnMFMatchCancel] = useState(false);
    const [isVisible_btnMFMatchExcept, setIsVisible_btnMFMatchExcept] = useState(false);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_lbJubsu, setIsVisible_lbJubsu] = useState(true);
    const [isVisible_cbxMFHead, setIsVisible_cbxMFHead] = useState(true);
    const [isVisible_cbxMFStation, setIsVisible_cbxMFStation] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_medMFModDate1, setIsVisible_medMFModDate1] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_medMFModDate2, setIsVisible_medMFModDate2] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_lbMFDate, setIsVisible_lbMFDate] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_cbxMFCenter, setIsVisible_cbxMFCenter] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_radMFSelectGubun, setIsVisible_radMFSelectGubun] = useState(true);
    const [isVisible_edMFKeyword, setIsVisible_edMFKeyword] = useState(true);
    const [isVisible_cbxMFKeyfield, setIsVisible_cbxMFKeyfield] = useState(true);
    const [isVisible_btnMFSearch, setIsVisible_btnMFSearch] = useState(true);
    const [isVisible_gdKFOBJList, setIsVisible_gdKFOBJList] = useState(true);
    const [isVisible_btnKFMatchExcept, setIsVisible_btnKFMatchExcept] = useState(false);
    const [isVisible_btnKFExcel, setIsVisible_btnKFExcel] = useState(true);
    const [isVisible_btnMFExcel, setIsVisible_btnMFExcel] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_cbxKFJibu, setIsVisible_cbxKFJibu] = useState(true);
    const [isVisible_cbxKFRegion1, setIsVisible_cbxKFRegion1] = useState(true);
    const [isVisible_cbxKFRegion2, setIsVisible_cbxKFRegion2] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(true);
    const [isVisible_radKFSelectGubun, setIsVisible_radKFSelectGubun] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_cbxKFKeyfield, setIsVisible_cbxKFKeyfield] = useState(true);
    const [isVisible_edKFKeyword, setIsVisible_edKFKeyword] = useState(true);
    const [isVisible_btnKFSearch, setIsVisible_btnKFSearch] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_Static16, setIsVisible_Static16] = useState(true);
    const [isVisible_Static17, setIsVisible_Static17] = useState(true);
    const [isVisible_Static18, setIsVisible_Static18] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_Static20, setIsVisible_Static20] = useState(true);
    const [isVisible_Static23, setIsVisible_Static23] = useState(true);
    const [isVisible_edMFOBJ_NM, setIsVisible_edMFOBJ_NM] = useState(true);
    const [isVisible_edMFADDR1, setIsVisible_edMFADDR1] = useState(true);
    const [isVisible_edMFCOMPET_DE, setIsVisible_edMFCOMPET_DE] = useState(true);
    const [isVisible_edMFCMPN119SC_ID, setIsVisible_edMFCMPN119SC_ID] = useState(true);
    const [isVisible_Static32, setIsVisible_Static32] = useState(true);
    const [isVisible_edMFINSTLR_TELNO, setIsVisible_edMFINSTLR_TELNO] = useState(true);
    const [isVisible_Static25, setIsVisible_Static25] = useState(true);
    const [isVisible_Static29, setIsVisible_Static29] = useState(true);
    const [isVisible_Static30, setIsVisible_Static30] = useState(true);
    const [isVisible_Static33, setIsVisible_Static33] = useState(true);
    const [isVisible_edKFTPARKPLACEADDR, setIsVisible_edKFTPARKPLACEADDR] = useState(true);
    const [isVisible_edKFBNM, setIsVisible_edKFBNM] = useState(true);
    const [isVisible_edKFMatch, setIsVisible_edKFMatch] = useState(true);
    const [isVisible_Static34, setIsVisible_Static34] = useState(true);
    const [isVisible_edKFRCCDNM, setIsVisible_edKFRCCDNM] = useState(true);
    const [isVisible_edKFBTEL, setIsVisible_edKFBTEL] = useState(true);
    const [isVisible_edKFDELGUBUN, setIsVisible_edKFDELGUBUN] = useState(true);
    const [isVisible_Static39, setIsVisible_Static39] = useState(true);
    const [isVisible_Static40, setIsVisible_Static40] = useState(true);
    const [isVisible_Static41, setIsVisible_Static41] = useState(true);
    const [isVisible_edKFTCARNO, setIsVisible_edKFTCARNO] = useState(true);
    const [isVisible_Static42, setIsVisible_Static42] = useState(true);
    const [isVisible_edKFTCARYEAR, setIsVisible_edKFTCARYEAR] = useState(true);
    const [isVisible_Static43, setIsVisible_Static43] = useState(true);
    const [isVisible_edKFTPERMISSIONNO, setIsVisible_edKFTPERMISSIONNO] = useState(true);
    const [isVisible_Static44, setIsVisible_Static44] = useState(true);
    const [isVisible_edKFTREMARK, setIsVisible_edKFTREMARK] = useState(true);
    const [isVisible_btnFPISInfo, setIsVisible_btnFPISInfo] = useState(true);
    const [isVisible_chkMFPerson, setIsVisible_chkMFPerson] = useState(true);
    const [isVisible_chkKFPerson, setIsVisible_chkKFPerson] = useState(true);
    const [isVisible_edMFCount, setIsVisible_edMFCount] = useState(true);
    const [isVisible_Static45, setIsVisible_Static45] = useState(true);
    const [isVisible_Static46, setIsVisible_Static46] = useState(true);
    const [isVisible_edKFCount, setIsVisible_edKFCount] = useState(true);
    const [isVisible_btnMatch, setIsVisible_btnMatch] = useState(true);
    const [isVisible_btnNewMatch, setIsVisible_btnNewMatch] = useState(true);
    const [isVisible_btnModMatch, setIsVisible_btnModMatch] = useState(true);
    const [isVisible_edMFINSTLR_NM, setIsVisible_edMFINSTLR_NM] = useState(true);
    const [isVisible_Static48, setIsVisible_Static48] = useState(true);
    const [isVisible_Static56, setIsVisible_Static56] = useState(true);
    const [isVisible_btnMatchCancel, setIsVisible_btnMatchCancel] = useState(true);
    const [isVisible_chkKFDelUser, setIsVisible_chkKFDelUser] = useState(true);
    const [isVisible_Static60, setIsVisible_Static60] = useState(true);
    const [isVisible_Static61, setIsVisible_Static61] = useState(true);
    const [isVisible_edKFCOURSENM, setIsVisible_edKFCOURSENM] = useState(true);
    const [isVisible_Static49, setIsVisible_Static49] = useState(true);
    const [isVisible_edMFFDong, setIsVisible_edMFFDong] = useState(true);
    const [isVisible_edMFDong, setIsVisible_edMFDong] = useState(true);
    const [isVisible_Static50, setIsVisible_Static50] = useState(true);
    const [isVisible_edMFMainAddr, setIsVisible_edMFMainAddr] = useState(true);
    const [isVisible_Static51, setIsVisible_Static51] = useState(true);
    const [isVisible_edMFSubAddr, setIsVisible_edMFSubAddr] = useState(true);
    const [isVisible_Static62, setIsVisible_Static62] = useState(true);
    const [isVisible_edMFINSTLR_CPR_NM, setIsVisible_edMFINSTLR_CPR_NM] = useState(true);
    const [isVisible_Static53, setIsVisible_Static53] = useState(true);
    const [isVisible_edKFFDong, setIsVisible_edKFFDong] = useState(true);
    const [isVisible_edKFDong, setIsVisible_edKFDong] = useState(true);
    const [isVisible_Static54, setIsVisible_Static54] = useState(true);
    const [isVisible_edKFMainAddr, setIsVisible_edKFMainAddr] = useState(true);
    const [isVisible_Static55, setIsVisible_Static55] = useState(true);
    const [isVisible_edKFSubAddr, setIsVisible_edKFSubAddr] = useState(true);
    const [isVisible_gdMFOBJList, setIsVisible_gdMFOBJList] = useState(true);
    const [isVisible_Static63, setIsVisible_Static63] = useState(true);
    const [isVisible_edMFMatch, setIsVisible_edMFMatch] = useState(true);
    const [isVisible_Static65, setIsVisible_Static65] = useState(true);
    const [isVisible_radMFGubun, setIsVisible_radMFGubun] = useState(true);
    const [isVisible_spMFRowNum, setIsVisible_spMFRowNum] = useState(true);
    const [isVisible_spKFRowNum, setIsVisible_spKFRowNum] = useState(true);
    const [isVisible_edMFPRMISN_NO, setIsVisible_edMFPRMISN_NO] = useState(true);
    const [isVisible_Static52, setIsVisible_Static52] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_edMFADDR2, setIsVisible_edMFADDR2] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_edMFVHCLE_NO, setIsVisible_edMFVHCLE_NO] = useState(true);
    const [isVisible_Static21, setIsVisible_Static21] = useState(true);
    const [isVisible_edMFCARNM, setIsVisible_edMFCARNM] = useState(true);
    const [isVisible_Static31, setIsVisible_Static31] = useState(true);
    const [isVisible_Static47, setIsVisible_Static47] = useState(true);
    const [isVisible_Static57, setIsVisible_Static57] = useState(true);
    const [isVisible_edMFUPDT_DE_14, setIsVisible_edMFUPDT_DE_14] = useState(true);
    const [isVisible_edMFVHCLE_YEAR, setIsVisible_edMFVHCLE_YEAR] = useState(true);
    const [isVisible_edMFREGIST_DE_14, setIsVisible_edMFREGIST_DE_14] = useState(true);
    const [isVisible_Static28, setIsVisible_Static28] = useState(true);
    const [isVisible_edKFTINSTLRADDR, setIsVisible_edKFTINSTLRADDR] = useState(true);
    const [isVisible_Static66, setIsVisible_Static66] = useState(true);
    const [isVisible_edMFRoadNM, setIsVisible_edMFRoadNM] = useState(true);
    const [isVisible_Static67, setIsVisible_Static67] = useState(true);
    const [isVisible_edMFMainNO, setIsVisible_edMFMainNO] = useState(true);
    const [isVisible_Static68, setIsVisible_Static68] = useState(true);
    const [isVisible_edMFSubNO, setIsVisible_edMFSubNO] = useState(true);
    const [isVisible_Static69, setIsVisible_Static69] = useState(true);
    const [isVisible_edKFRoadNM, setIsVisible_edKFRoadNM] = useState(true);
    const [isVisible_Static70, setIsVisible_Static70] = useState(true);
    const [isVisible_edKFMainNO, setIsVisible_edKFMainNO] = useState(true);
    const [isVisible_Static71, setIsVisible_Static71] = useState(true);
    const [isVisible_edKFSubNO, setIsVisible_edKFSubNO] = useState(true);
    const [isVisible_lbsearchNotice, setIsVisible_lbsearchNotice] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_btnDataHistory, setIsVisible_btnDataHistory] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
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
            setds_oFire([]);
            setds_ioPBLINSTT([]);
            setds_ioMFFireObjD([]);
            setds_ioMNFCTRETCGubunD([]);
            setds_ioDangerInfo([]);
            setds_ioMFFireObj2([]);
            setds_ioKFFireObj2([]);
            setds_ioFireManagerInfo2([]);
            setds_ioMFFireObjD2([]);
            setds_ioDangerInfo2([]);
            setds_ioGubun([]);
            setds_ioJibu2([]);
            setds_oRegion2([]);
            setds_oFireCd2([]);
            setds_oFireCenterCd2([]);
            setds_oFireHead2([]);
            setds_ioObjGubun2([]);
            setds_ioSelectGubun2([]);
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
        ds_oFire,
        ds_ioPBLINSTT,
        ds_ioMFFireObjD,
        ds_ioMNFCTRETCGubunD,
        ds_ioDangerInfo,
        ds_ioMFFireObj2,
        ds_ioKFFireObj2,
        ds_ioFireManagerInfo2,
        ds_ioMFFireObjD2,
        ds_ioDangerInfo2,
        ds_ioGubun,
        ds_ioJibu2,
        ds_oRegion2,
        ds_oFireCd2,
        ds_oFireCenterCd2,
        ds_oFireHead2,
        ds_ioObjGubun2,
        ds_ioSelectGubun2,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_tab,
        setIsVisible_tab,
        isVisible_Shape5,
        setIsVisible_Shape5,
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
        isVisible_lbMFDate,
        setIsVisible_lbMFDate,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_cbxMFCenter,
        setIsVisible_cbxMFCenter,
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
        isVisible_Static23,
        setIsVisible_Static23,
        isVisible_edMFOBJ_NM,
        setIsVisible_edMFOBJ_NM,
        isVisible_edMFADDR1,
        setIsVisible_edMFADDR1,
        isVisible_edMFCOMPET_DE,
        setIsVisible_edMFCOMPET_DE,
        isVisible_edMFCMPN119SC_ID,
        setIsVisible_edMFCMPN119SC_ID,
        isVisible_Static32,
        setIsVisible_Static32,
        isVisible_edMFINSTLR_TELNO,
        setIsVisible_edMFINSTLR_TELNO,
        isVisible_Static25,
        setIsVisible_Static25,
        isVisible_Static29,
        setIsVisible_Static29,
        isVisible_Static30,
        setIsVisible_Static30,
        isVisible_Static33,
        setIsVisible_Static33,
        isVisible_edKFTPARKPLACEADDR,
        setIsVisible_edKFTPARKPLACEADDR,
        isVisible_edKFBNM,
        setIsVisible_edKFBNM,
        isVisible_edKFMatch,
        setIsVisible_edKFMatch,
        isVisible_Static34,
        setIsVisible_Static34,
        isVisible_edKFRCCDNM,
        setIsVisible_edKFRCCDNM,
        isVisible_edKFBTEL,
        setIsVisible_edKFBTEL,
        isVisible_edKFDELGUBUN,
        setIsVisible_edKFDELGUBUN,
        isVisible_Static39,
        setIsVisible_Static39,
        isVisible_Static40,
        setIsVisible_Static40,
        isVisible_Static41,
        setIsVisible_Static41,
        isVisible_edKFTCARNO,
        setIsVisible_edKFTCARNO,
        isVisible_Static42,
        setIsVisible_Static42,
        isVisible_edKFTCARYEAR,
        setIsVisible_edKFTCARYEAR,
        isVisible_Static43,
        setIsVisible_Static43,
        isVisible_edKFTPERMISSIONNO,
        setIsVisible_edKFTPERMISSIONNO,
        isVisible_Static44,
        setIsVisible_Static44,
        isVisible_edKFTREMARK,
        setIsVisible_edKFTREMARK,
        isVisible_btnFPISInfo,
        setIsVisible_btnFPISInfo,
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
        isVisible_Static48,
        setIsVisible_Static48,
        isVisible_Static56,
        setIsVisible_Static56,
        isVisible_btnMatchCancel,
        setIsVisible_btnMatchCancel,
        isVisible_chkKFDelUser,
        setIsVisible_chkKFDelUser,
        isVisible_Static60,
        setIsVisible_Static60,
        isVisible_Static61,
        setIsVisible_Static61,
        isVisible_edKFCOURSENM,
        setIsVisible_edKFCOURSENM,
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
        isVisible_gdMFOBJList,
        setIsVisible_gdMFOBJList,
        isVisible_Static63,
        setIsVisible_Static63,
        isVisible_edMFMatch,
        setIsVisible_edMFMatch,
        isVisible_Static65,
        setIsVisible_Static65,
        isVisible_radMFGubun,
        setIsVisible_radMFGubun,
        isVisible_spMFRowNum,
        setIsVisible_spMFRowNum,
        isVisible_spKFRowNum,
        setIsVisible_spKFRowNum,
        isVisible_edMFPRMISN_NO,
        setIsVisible_edMFPRMISN_NO,
        isVisible_Static52,
        setIsVisible_Static52,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edMFADDR2,
        setIsVisible_edMFADDR2,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edMFVHCLE_NO,
        setIsVisible_edMFVHCLE_NO,
        isVisible_Static21,
        setIsVisible_Static21,
        isVisible_edMFCARNM,
        setIsVisible_edMFCARNM,
        isVisible_Static31,
        setIsVisible_Static31,
        isVisible_Static47,
        setIsVisible_Static47,
        isVisible_Static57,
        setIsVisible_Static57,
        isVisible_edMFUPDT_DE_14,
        setIsVisible_edMFUPDT_DE_14,
        isVisible_edMFVHCLE_YEAR,
        setIsVisible_edMFVHCLE_YEAR,
        isVisible_edMFREGIST_DE_14,
        setIsVisible_edMFREGIST_DE_14,
        isVisible_Static28,
        setIsVisible_Static28,
        isVisible_edKFTINSTLRADDR,
        setIsVisible_edKFTINSTLRADDR,
        isVisible_Static66,
        setIsVisible_Static66,
        isVisible_edMFRoadNM,
        setIsVisible_edMFRoadNM,
        isVisible_Static67,
        setIsVisible_Static67,
        isVisible_edMFMainNO,
        setIsVisible_edMFMainNO,
        isVisible_Static68,
        setIsVisible_Static68,
        isVisible_edMFSubNO,
        setIsVisible_edMFSubNO,
        isVisible_Static69,
        setIsVisible_Static69,
        isVisible_edKFRoadNM,
        setIsVisible_edKFRoadNM,
        isVisible_Static70,
        setIsVisible_Static70,
        isVisible_edKFMainNO,
        setIsVisible_edKFMainNO,
        isVisible_Static71,
        setIsVisible_Static71,
        isVisible_edKFSubNO,
        setIsVisible_edKFSubNO,
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
        lfn_MFSearch,
        lfn_NowMatch,
        lfn_NowMatch2,
        lfn_PrintScreen,
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