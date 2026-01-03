// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioChangeApplyGubun, Ids_ioChangeMList, Ids_ioBangChangeHList, Ids_ioCourse, Ids_oRegion, Ids_ioJibu, Ids_ioKFSAInfo, Ids_ioBuildingInfo, Ids_ioCustomerInfo, Ids_ioManagerInfo, Ids_ioAdditionInfo, Ids_ioRegionCdMatch, Ids_ioBizCdMatch, Ids_ioAllCode, Ids_ioCustomerInfoTmp, Ids_oBnmCode, Ids_oMemberStat, Ids_oManagerList, Ids_MemberGubun, Ids_ioManager, Ids_oOverBizProc, Ids_iStatus, Ids_oFPISBangManager, Ids_ioNotOverBizFireManager, Ids_ioIsOverBizFireManager, Ids_iCustomerModifyHistory, Ids_oMatchChangeAddr, Ids_ioDangerChangeHList, Ids_oFPISDangerManager, Ids_ioDangerInfo, Ids_oFireManagerInfo, Ids_ioApplyGubun, Ids_ioSokiChangeHList, Ids_ioTankChangeHList, Ids_oFPISSokiManager, Ids_ioKFSATankInfo, Ids_ioTankChangeMList, Ids_oModifyColumnList, Ids_ioOldBuildingInfo, Ids_ioOldCustomerInfo, Ids_ioOldManagerInfo, Ids_ioFPISLicenseInfo, Ids_oSearchChoice, Ids_oPersonInfo, Ids_oPersonInfoAll, Ids_oAgencyYn, Ids_update, Ids_updateFilter } from './Frmcust6400MDataConnectionChangeManageData';

export const useFrmcust6400MDataConnectionChangeManage = () => {
    const [ds_ioChangeApplyGubun, setds_ioChangeApplyGubun] = useState<Ids_ioChangeApplyGubun[]>([]);
    const [ds_ioChangeMList, setds_ioChangeMList] = useState<Ids_ioChangeMList[]>([]);
    const [ds_ioBangChangeHList, setds_ioBangChangeHList] = useState<Ids_ioBangChangeHList[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioKFSAInfo, setds_ioKFSAInfo] = useState<Ids_ioKFSAInfo[]>([]);
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_ioCustomerInfo, setds_ioCustomerInfo] = useState<Ids_ioCustomerInfo[]>([]);
    const [ds_ioManagerInfo, setds_ioManagerInfo] = useState<Ids_ioManagerInfo[]>([]);
    const [ds_ioAdditionInfo, setds_ioAdditionInfo] = useState<Ids_ioAdditionInfo[]>([]);
    const [ds_ioRegionCdMatch, setds_ioRegionCdMatch] = useState<Ids_ioRegionCdMatch[]>([]);
    const [ds_ioBizCdMatch, setds_ioBizCdMatch] = useState<Ids_ioBizCdMatch[]>([]);
    const [ds_ioAllCode, setds_ioAllCode] = useState<Ids_ioAllCode[]>([]);
    const [ds_ioCustomerInfoTmp, setds_ioCustomerInfoTmp] = useState<Ids_ioCustomerInfoTmp[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oMemberStat, setds_oMemberStat] = useState<Ids_oMemberStat[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_MemberGubun, setds_MemberGubun] = useState<Ids_MemberGubun[]>([]);
    const [ds_ioManager, setds_ioManager] = useState<Ids_ioManager[]>([]);
    const [ds_oOverBizProc, setds_oOverBizProc] = useState<Ids_oOverBizProc[]>([]);
    const [ds_iStatus, setds_iStatus] = useState<Ids_iStatus[]>([]);
    const [ds_oFPISBangManager, setds_oFPISBangManager] = useState<Ids_oFPISBangManager[]>([]);
    const [ds_ioNotOverBizFireManager, setds_ioNotOverBizFireManager] = useState<Ids_ioNotOverBizFireManager[]>([]);
    const [ds_ioIsOverBizFireManager, setds_ioIsOverBizFireManager] = useState<Ids_ioIsOverBizFireManager[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_oMatchChangeAddr, setds_oMatchChangeAddr] = useState<Ids_oMatchChangeAddr[]>([]);
    const [ds_ioDangerChangeHList, setds_ioDangerChangeHList] = useState<Ids_ioDangerChangeHList[]>([]);
    const [ds_oFPISDangerManager, setds_oFPISDangerManager] = useState<Ids_oFPISDangerManager[]>([]);
    const [ds_ioDangerInfo, setds_ioDangerInfo] = useState<Ids_ioDangerInfo[]>([]);
    const [ds_oFireManagerInfo, setds_oFireManagerInfo] = useState<Ids_oFireManagerInfo[]>([]);
    const [ds_ioApplyGubun, setds_ioApplyGubun] = useState<Ids_ioApplyGubun[]>([]);
    const [ds_ioSokiChangeHList, setds_ioSokiChangeHList] = useState<Ids_ioSokiChangeHList[]>([]);
    const [ds_ioTankChangeHList, setds_ioTankChangeHList] = useState<Ids_ioTankChangeHList[]>([]);
    const [ds_oFPISSokiManager, setds_oFPISSokiManager] = useState<Ids_oFPISSokiManager[]>([]);
    const [ds_ioKFSATankInfo, setds_ioKFSATankInfo] = useState<Ids_ioKFSATankInfo[]>([]);
    const [ds_ioTankChangeMList, setds_ioTankChangeMList] = useState<Ids_ioTankChangeMList[]>([]);
    const [ds_oModifyColumnList, setds_oModifyColumnList] = useState<Ids_oModifyColumnList[]>([]);
    const [ds_ioOldBuildingInfo, setds_ioOldBuildingInfo] = useState<Ids_ioOldBuildingInfo[]>([]);
    const [ds_ioOldCustomerInfo, setds_ioOldCustomerInfo] = useState<Ids_ioOldCustomerInfo[]>([]);
    const [ds_ioOldManagerInfo, setds_ioOldManagerInfo] = useState<Ids_ioOldManagerInfo[]>([]);
    const [ds_ioFPISLicenseInfo, setds_ioFPISLicenseInfo] = useState<Ids_ioFPISLicenseInfo[]>([]);
    const [ds_oSearchChoice, setds_oSearchChoice] = useState<Ids_oSearchChoice[]>([]);
    const [ds_oPersonInfo, setds_oPersonInfo] = useState<Ids_oPersonInfo[]>([]);
    const [ds_oPersonInfoAll, setds_oPersonInfoAll] = useState<Ids_oPersonInfoAll[]>([]);
    const [ds_oAgencyYn, setds_oAgencyYn] = useState<Ids_oAgencyYn[]>([]);
    const [ds_update, setds_update] = useState<Ids_update[]>([]);
    const [ds_updateFilter, setds_updateFilter] = useState<Ids_updateFilter[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_gdTankChangeHList, setIsVisible_gdTankChangeHList] = useState(true);
    const [isVisible_DivTankChangeM, setIsVisible_DivTankChangeM] = useState(true);
    const [isVisible_btnMFExcel, setIsVisible_btnMFExcel] = useState(false);
    const [isVisible_btnMutilSort, setIsVisible_btnMutilSort] = useState(false);
    const [isVisible_Shape9, setIsVisible_Shape9] = useState(true);
    const [isVisible_lbKFOBJNM, setIsVisible_lbKFOBJNM] = useState(true);
    const [isVisible_edKFBNM, setIsVisible_edKFBNM] = useState(true);
    const [isVisible_Static33, setIsVisible_Static33] = useState(true);
    const [isVisible_edKFBADDR1, setIsVisible_edKFBADDR1] = useState(true);
    const [isVisible_Static27, setIsVisible_Static27] = useState(true);
    const [isVisible_edKFBTEL, setIsVisible_edKFBTEL] = useState(true);
    const [isVisible_edKFBADDR2, setIsVisible_edKFBADDR2] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(false);
    const [isVisible_edCNO, setIsVisible_edCNO] = useState(false);
    const [isVisible_lbFMEndStatus, setIsVisible_lbFMEndStatus] = useState(true);
    const [isVisible_gdTankChangeMList, setIsVisible_gdTankChangeMList] = useState(true);
    const [isVisible_Static45, setIsVisible_Static45] = useState(true);
    const [isVisible_edChangeMCount, setIsVisible_edChangeMCount] = useState(true);
    const [isVisible_lbCourseNM, setIsVisible_lbCourseNM] = useState(true);
    const [isVisible_lbOrgInfo, setIsVisible_lbOrgInfo] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_Static24, setIsVisible_Static24] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_edRegNM, setIsVisible_edRegNM] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_Edit0, setIsVisible_Edit0] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_Edit1, setIsVisible_Edit1] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_Edit2, setIsVisible_Edit2] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_Edit3, setIsVisible_Edit3] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_Edit4, setIsVisible_Edit4] = useState(true);
    const [isVisible_gdSokiChangeHList, setIsVisible_gdSokiChangeHList] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_cbxRegion1, setIsVisible_cbxRegion1] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(true);
    const [isVisible_cbxRegion2, setIsVisible_cbxRegion2] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_cbxCourse, setIsVisible_cbxCourse] = useState(true);
    const [isVisible_medDBProcDate1, setIsVisible_medDBProcDate1] = useState(true);
    const [isVisible_medDBProcDate2, setIsVisible_medDBProcDate2] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_radChangeApplyGubun, setIsVisible_radChangeApplyGubun] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_Static16, setIsVisible_Static16] = useState(true);
    const [isVisible_edChangeHCount, setIsVisible_edChangeHCount] = useState(true);
    const [isVisible_Button0, setIsVisible_Button0] = useState(false);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_lbFPISLicense1, setIsVisible_lbFPISLicense1] = useState(true);
    const [isVisible_lbFPISLicense2, setIsVisible_lbFPISLicense2] = useState(true);
    const [isVisible_edOBJ, setIsVisible_edOBJ] = useState(true);
    const [isVisible_DivChangeM, setIsVisible_DivChangeM] = useState(true);
    const [isVisible_Static35, setIsVisible_Static35] = useState(true);
    const [isVisible_edKFCNM, setIsVisible_edKFCNM] = useState(true);
    const [isVisible_lbKFCCCDNM, setIsVisible_lbKFCCCDNM] = useState(true);
    const [isVisible_edKFCCCDNM, setIsVisible_edKFCCCDNM] = useState(true);
    const [isVisible_Static39, setIsVisible_Static39] = useState(true);
    const [isVisible_edKFDELGUBUN, setIsVisible_edKFDELGUBUN] = useState(true);
    const [isVisible_Static41, setIsVisible_Static41] = useState(true);
    const [isVisible_edKFFMNM, setIsVisible_edKFFMNM] = useState(true);
    const [isVisible_Static43, setIsVisible_Static43] = useState(true);
    const [isVisible_calFMStartDate, setIsVisible_calFMStartDate] = useState(true);
    const [isVisible_calFMEndDate, setIsVisible_calFMEndDate] = useState(true);
    const [isVisible_gdChangeMList, setIsVisible_gdChangeMList] = useState(true);
    const [isVisible_StFireManagerTitle, setIsVisible_StFireManagerTitle] = useState(true);
    const [isVisible_lbBirthday, setIsVisible_lbBirthday] = useState(true);
    const [isVisible_lbHpTel, setIsVisible_lbHpTel] = useState(true);
    const [isVisible_edKFHpTel, setIsVisible_edKFHpTel] = useState(true);
    const [isVisible_gdFPISLicense, setIsVisible_gdFPISLicense] = useState(true);
    const [isVisible_btnCustomerLink, setIsVisible_btnCustomerLink] = useState(true);
    const [isVisible_lbPERSONKEY, setIsVisible_lbPERSONKEY] = useState(true);
    const [isVisible_medKFPERSONKEY, setIsVisible_medKFPERSONKEY] = useState(true);
    const [isVisible_edKFBirthday, setIsVisible_edKFBirthday] = useState(true);
    const [isVisible_lbCaggubun, setIsVisible_lbCaggubun] = useState(true);
    const [isVisible_cbxAgencyYn, setIsVisible_cbxAgencyYn] = useState(true);
    const [isVisible_edAgencyNm, setIsVisible_edAgencyNm] = useState(true);
    const [isVisible_StbtnUpdate1, setIsVisible_StbtnUpdate1] = useState(true);
    const [isVisible_btnUpdate1, setIsVisible_btnUpdate1] = useState(true);
    const [isVisible_btn_Apply, setIsVisible_btn_Apply] = useState(true);
    const [isVisible_btnSize, setIsVisible_btnSize] = useState(true);
    const [isVisible_gdManager, setIsVisible_gdManager] = useState(true);
    const [isVisible_gdDangerChangeHList, setIsVisible_gdDangerChangeHList] = useState(false);
    const [isVisible_gdBangChangeHList, setIsVisible_gdBangChangeHList] = useState(true);
    const [isVisible_spSearchNum, setIsVisible_spSearchNum] = useState(true);
    const [isVisible_cbxSearch, setIsVisible_cbxSearch] = useState(true);
    const [isVisible_edAddSearch, setIsVisible_edAddSearch] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioChangeApplyGubun([]);
            setds_ioChangeMList([]);
            setds_ioBangChangeHList([]);
            setds_ioCourse([]);
            setds_oRegion([]);
            setds_ioJibu([]);
            setds_ioKFSAInfo([]);
            setds_ioBuildingInfo([]);
            setds_ioCustomerInfo([]);
            setds_ioManagerInfo([]);
            setds_ioAdditionInfo([]);
            setds_ioRegionCdMatch([]);
            setds_ioBizCdMatch([]);
            setds_ioAllCode([]);
            setds_ioCustomerInfoTmp([]);
            setds_oBnmCode([]);
            setds_oMemberStat([]);
            setds_oManagerList([]);
            setds_MemberGubun([]);
            setds_ioManager([]);
            setds_oOverBizProc([]);
            setds_iStatus([]);
            setds_oFPISBangManager([]);
            setds_ioNotOverBizFireManager([]);
            setds_ioIsOverBizFireManager([]);
            setds_iCustomerModifyHistory([]);
            setds_oMatchChangeAddr([]);
            setds_ioDangerChangeHList([]);
            setds_oFPISDangerManager([]);
            setds_ioDangerInfo([]);
            setds_oFireManagerInfo([]);
            setds_ioApplyGubun([]);
            setds_ioSokiChangeHList([]);
            setds_ioTankChangeHList([]);
            setds_oFPISSokiManager([]);
            setds_ioKFSATankInfo([]);
            setds_ioTankChangeMList([]);
            setds_oModifyColumnList([]);
            setds_ioOldBuildingInfo([]);
            setds_ioOldCustomerInfo([]);
            setds_ioOldManagerInfo([]);
            setds_ioFPISLicenseInfo([]);
            setds_oSearchChoice([]);
            setds_oPersonInfo([]);
            setds_oPersonInfoAll([]);
            setds_oAgencyYn([]);
            setds_update([]);
            setds_updateFilter([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const DivChangeM_btnCustomerLink_OnClick = () => {
        console.log('DivChangeM_btnCustomerLink_OnClick clicked');
    };
    const DivChangeM_btnSize_OnClick = () => {
        console.log('DivChangeM_btnSize_OnClick clicked');
    };
    const DivChangeM_btn_Apply_OnClick = () => {
        console.log('DivChangeM_btn_Apply_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const fn_Excel = () => {
        console.log('fn_Excel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_UpdateCaggubun = () => {
        console.log('lfn_UpdateCaggubun clicked');
    };
    const tab_page1_btnMFExcel_OnClick = () => {
        console.log('tab_page1_btnMFExcel_OnClick clicked');
    };

    return {
        isLoading,
        ds_ioChangeApplyGubun,
        ds_ioChangeMList,
        ds_ioBangChangeHList,
        ds_ioCourse,
        ds_oRegion,
        ds_ioJibu,
        ds_ioKFSAInfo,
        ds_ioBuildingInfo,
        ds_ioCustomerInfo,
        ds_ioManagerInfo,
        ds_ioAdditionInfo,
        ds_ioRegionCdMatch,
        ds_ioBizCdMatch,
        ds_ioAllCode,
        ds_ioCustomerInfoTmp,
        ds_oBnmCode,
        ds_oMemberStat,
        ds_oManagerList,
        ds_MemberGubun,
        ds_ioManager,
        ds_oOverBizProc,
        ds_iStatus,
        ds_oFPISBangManager,
        ds_ioNotOverBizFireManager,
        ds_ioIsOverBizFireManager,
        ds_iCustomerModifyHistory,
        ds_oMatchChangeAddr,
        ds_ioDangerChangeHList,
        ds_oFPISDangerManager,
        ds_ioDangerInfo,
        ds_oFireManagerInfo,
        ds_ioApplyGubun,
        ds_ioSokiChangeHList,
        ds_ioTankChangeHList,
        ds_oFPISSokiManager,
        ds_ioKFSATankInfo,
        ds_ioTankChangeMList,
        ds_oModifyColumnList,
        ds_ioOldBuildingInfo,
        ds_ioOldCustomerInfo,
        ds_ioOldManagerInfo,
        ds_ioFPISLicenseInfo,
        ds_oSearchChoice,
        ds_oPersonInfo,
        ds_oPersonInfoAll,
        ds_oAgencyYn,
        ds_update,
        ds_updateFilter,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_gdTankChangeHList,
        setIsVisible_gdTankChangeHList,
        isVisible_DivTankChangeM,
        setIsVisible_DivTankChangeM,
        isVisible_btnMFExcel,
        setIsVisible_btnMFExcel,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_Shape9,
        setIsVisible_Shape9,
        isVisible_lbKFOBJNM,
        setIsVisible_lbKFOBJNM,
        isVisible_edKFBNM,
        setIsVisible_edKFBNM,
        isVisible_Static33,
        setIsVisible_Static33,
        isVisible_edKFBADDR1,
        setIsVisible_edKFBADDR1,
        isVisible_Static27,
        setIsVisible_Static27,
        isVisible_edKFBTEL,
        setIsVisible_edKFBTEL,
        isVisible_edKFBADDR2,
        setIsVisible_edKFBADDR2,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_edCNO,
        setIsVisible_edCNO,
        isVisible_lbFMEndStatus,
        setIsVisible_lbFMEndStatus,
        isVisible_gdTankChangeMList,
        setIsVisible_gdTankChangeMList,
        isVisible_Static45,
        setIsVisible_Static45,
        isVisible_edChangeMCount,
        setIsVisible_edChangeMCount,
        isVisible_lbCourseNM,
        setIsVisible_lbCourseNM,
        isVisible_lbOrgInfo,
        setIsVisible_lbOrgInfo,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static24,
        setIsVisible_Static24,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_edRegNM,
        setIsVisible_edRegNM,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_Edit0,
        setIsVisible_Edit0,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Edit1,
        setIsVisible_Edit1,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Edit2,
        setIsVisible_Edit2,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_Edit3,
        setIsVisible_Edit3,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_Edit4,
        setIsVisible_Edit4,
        isVisible_gdSokiChangeHList,
        setIsVisible_gdSokiChangeHList,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_cbxRegion1,
        setIsVisible_cbxRegion1,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_cbxRegion2,
        setIsVisible_cbxRegion2,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_medDBProcDate1,
        setIsVisible_medDBProcDate1,
        isVisible_medDBProcDate2,
        setIsVisible_medDBProcDate2,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_radChangeApplyGubun,
        setIsVisible_radChangeApplyGubun,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_edChangeHCount,
        setIsVisible_edChangeHCount,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_lbFPISLicense1,
        setIsVisible_lbFPISLicense1,
        isVisible_lbFPISLicense2,
        setIsVisible_lbFPISLicense2,
        isVisible_edOBJ,
        setIsVisible_edOBJ,
        isVisible_DivChangeM,
        setIsVisible_DivChangeM,
        isVisible_Static35,
        setIsVisible_Static35,
        isVisible_edKFCNM,
        setIsVisible_edKFCNM,
        isVisible_lbKFCCCDNM,
        setIsVisible_lbKFCCCDNM,
        isVisible_edKFCCCDNM,
        setIsVisible_edKFCCCDNM,
        isVisible_Static39,
        setIsVisible_Static39,
        isVisible_edKFDELGUBUN,
        setIsVisible_edKFDELGUBUN,
        isVisible_Static41,
        setIsVisible_Static41,
        isVisible_edKFFMNM,
        setIsVisible_edKFFMNM,
        isVisible_Static43,
        setIsVisible_Static43,
        isVisible_calFMStartDate,
        setIsVisible_calFMStartDate,
        isVisible_calFMEndDate,
        setIsVisible_calFMEndDate,
        isVisible_gdChangeMList,
        setIsVisible_gdChangeMList,
        isVisible_StFireManagerTitle,
        setIsVisible_StFireManagerTitle,
        isVisible_lbBirthday,
        setIsVisible_lbBirthday,
        isVisible_lbHpTel,
        setIsVisible_lbHpTel,
        isVisible_edKFHpTel,
        setIsVisible_edKFHpTel,
        isVisible_gdFPISLicense,
        setIsVisible_gdFPISLicense,
        isVisible_btnCustomerLink,
        setIsVisible_btnCustomerLink,
        isVisible_lbPERSONKEY,
        setIsVisible_lbPERSONKEY,
        isVisible_medKFPERSONKEY,
        setIsVisible_medKFPERSONKEY,
        isVisible_edKFBirthday,
        setIsVisible_edKFBirthday,
        isVisible_lbCaggubun,
        setIsVisible_lbCaggubun,
        isVisible_cbxAgencyYn,
        setIsVisible_cbxAgencyYn,
        isVisible_edAgencyNm,
        setIsVisible_edAgencyNm,
        isVisible_StbtnUpdate1,
        setIsVisible_StbtnUpdate1,
        isVisible_btnUpdate1,
        setIsVisible_btnUpdate1,
        isVisible_btn_Apply,
        setIsVisible_btn_Apply,
        isVisible_btnSize,
        setIsVisible_btnSize,
        isVisible_gdManager,
        setIsVisible_gdManager,
        isVisible_gdDangerChangeHList,
        setIsVisible_gdDangerChangeHList,
        isVisible_gdBangChangeHList,
        setIsVisible_gdBangChangeHList,
        isVisible_spSearchNum,
        setIsVisible_spSearchNum,
        isVisible_cbxSearch,
        setIsVisible_cbxSearch,
        isVisible_edAddSearch,
        setIsVisible_edAddSearch,
        DivChangeM_btnCustomerLink_OnClick,
        DivChangeM_btnSize_OnClick,
        DivChangeM_btn_Apply_OnClick,
        btnMutilSort_OnClick,
        fn_Excel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        lfn_UpdateCaggubun,
        tab_page1_btnMFExcel_OnClick,
    };
};