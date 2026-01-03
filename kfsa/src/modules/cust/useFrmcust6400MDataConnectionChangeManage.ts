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
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_gdTankChangeHList, setRawVisible_gdTankChangeHList] = useState(true);
    const [rawVisible_DivTankChangeM, setRawVisible_DivTankChangeM] = useState(true);
    const [rawVisible_btnMFExcel, setRawVisible_btnMFExcel] = useState(false);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(false);
    const [rawVisible_Shape9, setRawVisible_Shape9] = useState(true);
    const [rawVisible_lbKFOBJNM, setRawVisible_lbKFOBJNM] = useState(true);
    const [rawVisible_edKFBNM, setRawVisible_edKFBNM] = useState(true);
    const [rawVisible_Static33, setRawVisible_Static33] = useState(true);
    const [rawVisible_edKFBADDR1, setRawVisible_edKFBADDR1] = useState(true);
    const [rawVisible_Static27, setRawVisible_Static27] = useState(true);
    const [rawVisible_edKFBTEL, setRawVisible_edKFBTEL] = useState(true);
    const [rawVisible_edKFBADDR2, setRawVisible_edKFBADDR2] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(false);
    const [rawVisible_edCNO, setRawVisible_edCNO] = useState(false);
    const [rawVisible_lbFMEndStatus, setRawVisible_lbFMEndStatus] = useState(true);
    const [rawVisible_gdTankChangeMList, setRawVisible_gdTankChangeMList] = useState(true);
    const [rawVisible_Static45, setRawVisible_Static45] = useState(true);
    const [rawVisible_edChangeMCount, setRawVisible_edChangeMCount] = useState(true);
    const [rawVisible_lbCourseNM, setRawVisible_lbCourseNM] = useState(true);
    const [rawVisible_lbOrgInfo, setRawVisible_lbOrgInfo] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static24, setRawVisible_Static24] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_edRegNM, setRawVisible_edRegNM] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_Edit0, setRawVisible_Edit0] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Edit1, setRawVisible_Edit1] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Edit2, setRawVisible_Edit2] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_Edit3, setRawVisible_Edit3] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_Edit4, setRawVisible_Edit4] = useState(true);
    const [rawVisible_gdSokiChangeHList, setRawVisible_gdSokiChangeHList] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_cbxRegion1, setRawVisible_cbxRegion1] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_cbxRegion2, setRawVisible_cbxRegion2] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_medDBProcDate1, setRawVisible_medDBProcDate1] = useState(true);
    const [rawVisible_medDBProcDate2, setRawVisible_medDBProcDate2] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_radChangeApplyGubun, setRawVisible_radChangeApplyGubun] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_edChangeHCount, setRawVisible_edChangeHCount] = useState(true);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(false);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_lbFPISLicense1, setRawVisible_lbFPISLicense1] = useState(true);
    const [rawVisible_lbFPISLicense2, setRawVisible_lbFPISLicense2] = useState(true);
    const [rawVisible_edOBJ, setRawVisible_edOBJ] = useState(true);
    const [rawVisible_DivChangeM, setRawVisible_DivChangeM] = useState(true);
    const [rawVisible_Static35, setRawVisible_Static35] = useState(true);
    const [rawVisible_edKFCNM, setRawVisible_edKFCNM] = useState(true);
    const [rawVisible_lbKFCCCDNM, setRawVisible_lbKFCCCDNM] = useState(true);
    const [rawVisible_edKFCCCDNM, setRawVisible_edKFCCCDNM] = useState(true);
    const [rawVisible_Static39, setRawVisible_Static39] = useState(true);
    const [rawVisible_edKFDELGUBUN, setRawVisible_edKFDELGUBUN] = useState(true);
    const [rawVisible_Static41, setRawVisible_Static41] = useState(true);
    const [rawVisible_edKFFMNM, setRawVisible_edKFFMNM] = useState(true);
    const [rawVisible_Static43, setRawVisible_Static43] = useState(true);
    const [rawVisible_calFMStartDate, setRawVisible_calFMStartDate] = useState(true);
    const [rawVisible_calFMEndDate, setRawVisible_calFMEndDate] = useState(true);
    const [rawVisible_gdChangeMList, setRawVisible_gdChangeMList] = useState(true);
    const [rawVisible_StFireManagerTitle, setRawVisible_StFireManagerTitle] = useState(true);
    const [rawVisible_lbBirthday, setRawVisible_lbBirthday] = useState(true);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_edKFHpTel, setRawVisible_edKFHpTel] = useState(true);
    const [rawVisible_gdFPISLicense, setRawVisible_gdFPISLicense] = useState(true);
    const [rawVisible_btnCustomerLink, setRawVisible_btnCustomerLink] = useState(true);
    const [rawVisible_lbPERSONKEY, setRawVisible_lbPERSONKEY] = useState(true);
    const [rawVisible_medKFPERSONKEY, setRawVisible_medKFPERSONKEY] = useState(true);
    const [rawVisible_edKFBirthday, setRawVisible_edKFBirthday] = useState(true);
    const [rawVisible_lbCaggubun, setRawVisible_lbCaggubun] = useState(true);
    const [rawVisible_cbxAgencyYn, setRawVisible_cbxAgencyYn] = useState(true);
    const [rawVisible_edAgencyNm, setRawVisible_edAgencyNm] = useState(true);
    const [rawVisible_StbtnUpdate1, setRawVisible_StbtnUpdate1] = useState(true);
    const [rawVisible_btnUpdate1, setRawVisible_btnUpdate1] = useState(true);
    const [rawVisible_btn_Apply, setRawVisible_btn_Apply] = useState(true);
    const [rawVisible_btnSize, setRawVisible_btnSize] = useState(true);
    const [rawVisible_gdManager, setRawVisible_gdManager] = useState(true);
    const [rawVisible_gdDangerChangeHList, setRawVisible_gdDangerChangeHList] = useState(false);
    const [rawVisible_gdBangChangeHList, setRawVisible_gdBangChangeHList] = useState(true);
    const [rawVisible_spSearchNum, setRawVisible_spSearchNum] = useState(true);
    const [rawVisible_cbxSearch, setRawVisible_cbxSearch] = useState(true);
    const [rawVisible_edAddSearch, setRawVisible_edAddSearch] = useState(true);
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_gdTankChangeHList = rawVisible_gdTankChangeHList && rawVisible_Shape2;
    const setIsVisible_gdTankChangeHList = setRawVisible_gdTankChangeHList;
    const isVisible_DivTankChangeM = rawVisible_DivTankChangeM && rawVisible_DivChangeM;
    const setIsVisible_DivTankChangeM = setRawVisible_DivTankChangeM;
    const isVisible_btnMFExcel = rawVisible_btnMFExcel;
    const setIsVisible_btnMFExcel = setRawVisible_btnMFExcel;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_Shape9 = rawVisible_Shape9 && rawVisible_Shape9;
    const setIsVisible_Shape9 = setRawVisible_Shape9;
    const isVisible_lbKFOBJNM = rawVisible_lbKFOBJNM && rawVisible_Shape9;
    const setIsVisible_lbKFOBJNM = setRawVisible_lbKFOBJNM;
    const isVisible_edKFBNM = rawVisible_edKFBNM && rawVisible_Shape9;
    const setIsVisible_edKFBNM = setRawVisible_edKFBNM;
    const isVisible_Static33 = rawVisible_Static33 && rawVisible_Shape9;
    const setIsVisible_Static33 = setRawVisible_Static33;
    const isVisible_edKFBADDR1 = rawVisible_edKFBADDR1 && rawVisible_Shape9;
    const setIsVisible_edKFBADDR1 = setRawVisible_edKFBADDR1;
    const isVisible_Static27 = rawVisible_Static27 && rawVisible_Shape9;
    const setIsVisible_Static27 = setRawVisible_Static27;
    const isVisible_edKFBTEL = rawVisible_edKFBTEL && rawVisible_Shape9;
    const setIsVisible_edKFBTEL = setRawVisible_edKFBTEL;
    const isVisible_edKFBADDR2 = rawVisible_edKFBADDR2 && rawVisible_Shape9;
    const setIsVisible_edKFBADDR2 = setRawVisible_edKFBADDR2;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape9;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_edCNO = rawVisible_edCNO && rawVisible_Shape9;
    const setIsVisible_edCNO = setRawVisible_edCNO;
    const isVisible_lbFMEndStatus = rawVisible_lbFMEndStatus && rawVisible_Shape9;
    const setIsVisible_lbFMEndStatus = setRawVisible_lbFMEndStatus;
    const isVisible_gdTankChangeMList = rawVisible_gdTankChangeMList;
    const setIsVisible_gdTankChangeMList = setRawVisible_gdTankChangeMList;
    const isVisible_Static45 = rawVisible_Static45;
    const setIsVisible_Static45 = setRawVisible_Static45;
    const isVisible_edChangeMCount = rawVisible_edChangeMCount;
    const setIsVisible_edChangeMCount = setRawVisible_edChangeMCount;
    const isVisible_lbCourseNM = rawVisible_lbCourseNM;
    const setIsVisible_lbCourseNM = setRawVisible_lbCourseNM;
    const isVisible_lbOrgInfo = rawVisible_lbOrgInfo;
    const setIsVisible_lbOrgInfo = setRawVisible_lbOrgInfo;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static24 = rawVisible_Static24 && rawVisible_Shape2;
    const setIsVisible_Static24 = setRawVisible_Static24;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape9;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_edRegNM = rawVisible_edRegNM && rawVisible_Shape9;
    const setIsVisible_edRegNM = setRawVisible_edRegNM;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape9;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_Edit0 = rawVisible_Edit0 && rawVisible_Shape9;
    const setIsVisible_Edit0 = setRawVisible_Edit0;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape9;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Edit1 = rawVisible_Edit1 && rawVisible_Shape9;
    const setIsVisible_Edit1 = setRawVisible_Edit1;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape9;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Edit2 = rawVisible_Edit2 && rawVisible_Shape9;
    const setIsVisible_Edit2 = setRawVisible_Edit2;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape9;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_Edit3 = rawVisible_Edit3 && rawVisible_Shape9;
    const setIsVisible_Edit3 = setRawVisible_Edit3;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape9;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_Edit4 = rawVisible_Edit4 && rawVisible_Shape9;
    const setIsVisible_Edit4 = setRawVisible_Edit4;
    const isVisible_gdSokiChangeHList = rawVisible_gdSokiChangeHList && rawVisible_Shape2;
    const setIsVisible_gdSokiChangeHList = setRawVisible_gdSokiChangeHList;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape1;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape1;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_cbxRegion1 = rawVisible_cbxRegion1 && rawVisible_Shape1;
    const setIsVisible_cbxRegion1 = setRawVisible_cbxRegion1;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape1;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_cbxRegion2 = rawVisible_cbxRegion2 && rawVisible_Shape1;
    const setIsVisible_cbxRegion2 = setRawVisible_cbxRegion2;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape1;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape1;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_medDBProcDate1 = rawVisible_medDBProcDate1 && rawVisible_Shape1;
    const setIsVisible_medDBProcDate1 = setRawVisible_medDBProcDate1;
    const isVisible_medDBProcDate2 = rawVisible_medDBProcDate2 && rawVisible_Shape1;
    const setIsVisible_medDBProcDate2 = setRawVisible_medDBProcDate2;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape1;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_radChangeApplyGubun = rawVisible_radChangeApplyGubun && rawVisible_Shape1;
    const setIsVisible_radChangeApplyGubun = setRawVisible_radChangeApplyGubun;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_Static16 = rawVisible_Static16;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_edChangeHCount = rawVisible_edChangeHCount && rawVisible_Shape2;
    const setIsVisible_edChangeHCount = setRawVisible_edChangeHCount;
    const isVisible_Button0 = rawVisible_Button0 && rawVisible_Shape2;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_Shape2;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_lbFPISLicense1 = rawVisible_lbFPISLicense1 && rawVisible_Shape1;
    const setIsVisible_lbFPISLicense1 = setRawVisible_lbFPISLicense1;
    const isVisible_lbFPISLicense2 = rawVisible_lbFPISLicense2 && rawVisible_Shape1;
    const setIsVisible_lbFPISLicense2 = setRawVisible_lbFPISLicense2;
    const isVisible_edOBJ = rawVisible_edOBJ && rawVisible_Shape2;
    const setIsVisible_edOBJ = setRawVisible_edOBJ;
    const isVisible_DivChangeM = rawVisible_DivChangeM;
    const setIsVisible_DivChangeM = setRawVisible_DivChangeM;
    const isVisible_Static35 = rawVisible_Static35 && rawVisible_Shape9;
    const setIsVisible_Static35 = setRawVisible_Static35;
    const isVisible_edKFCNM = rawVisible_edKFCNM && rawVisible_Shape9;
    const setIsVisible_edKFCNM = setRawVisible_edKFCNM;
    const isVisible_lbKFCCCDNM = rawVisible_lbKFCCCDNM && rawVisible_Shape9;
    const setIsVisible_lbKFCCCDNM = setRawVisible_lbKFCCCDNM;
    const isVisible_edKFCCCDNM = rawVisible_edKFCCCDNM && rawVisible_Shape9;
    const setIsVisible_edKFCCCDNM = setRawVisible_edKFCCCDNM;
    const isVisible_Static39 = rawVisible_Static39 && rawVisible_Shape9;
    const setIsVisible_Static39 = setRawVisible_Static39;
    const isVisible_edKFDELGUBUN = rawVisible_edKFDELGUBUN && rawVisible_Shape9;
    const setIsVisible_edKFDELGUBUN = setRawVisible_edKFDELGUBUN;
    const isVisible_Static41 = rawVisible_Static41 && rawVisible_Shape9;
    const setIsVisible_Static41 = setRawVisible_Static41;
    const isVisible_edKFFMNM = rawVisible_edKFFMNM && rawVisible_Shape9;
    const setIsVisible_edKFFMNM = setRawVisible_edKFFMNM;
    const isVisible_Static43 = rawVisible_Static43 && rawVisible_Shape9;
    const setIsVisible_Static43 = setRawVisible_Static43;
    const isVisible_calFMStartDate = rawVisible_calFMStartDate && rawVisible_Shape9;
    const setIsVisible_calFMStartDate = setRawVisible_calFMStartDate;
    const isVisible_calFMEndDate = rawVisible_calFMEndDate && rawVisible_Shape9;
    const setIsVisible_calFMEndDate = setRawVisible_calFMEndDate;
    const isVisible_gdChangeMList = rawVisible_gdChangeMList;
    const setIsVisible_gdChangeMList = setRawVisible_gdChangeMList;
    const isVisible_StFireManagerTitle = rawVisible_StFireManagerTitle && rawVisible_DivTankChangeM;
    const setIsVisible_StFireManagerTitle = setRawVisible_StFireManagerTitle;
    const isVisible_lbBirthday = rawVisible_lbBirthday && rawVisible_Shape9;
    const setIsVisible_lbBirthday = setRawVisible_lbBirthday;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_Shape9;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_edKFHpTel = rawVisible_edKFHpTel && rawVisible_Shape9;
    const setIsVisible_edKFHpTel = setRawVisible_edKFHpTel;
    const isVisible_gdFPISLicense = rawVisible_gdFPISLicense && rawVisible_DivTankChangeM;
    const setIsVisible_gdFPISLicense = setRawVisible_gdFPISLicense;
    const isVisible_btnCustomerLink = rawVisible_btnCustomerLink && rawVisible_Shape9;
    const setIsVisible_btnCustomerLink = setRawVisible_btnCustomerLink;
    const isVisible_lbPERSONKEY = rawVisible_lbPERSONKEY && rawVisible_Shape9;
    const setIsVisible_lbPERSONKEY = setRawVisible_lbPERSONKEY;
    const isVisible_medKFPERSONKEY = rawVisible_medKFPERSONKEY && rawVisible_Shape9;
    const setIsVisible_medKFPERSONKEY = setRawVisible_medKFPERSONKEY;
    const isVisible_edKFBirthday = rawVisible_edKFBirthday && rawVisible_Shape9;
    const setIsVisible_edKFBirthday = setRawVisible_edKFBirthday;
    const isVisible_lbCaggubun = rawVisible_lbCaggubun && rawVisible_Shape9;
    const setIsVisible_lbCaggubun = setRawVisible_lbCaggubun;
    const isVisible_cbxAgencyYn = rawVisible_cbxAgencyYn && rawVisible_Shape9;
    const setIsVisible_cbxAgencyYn = setRawVisible_cbxAgencyYn;
    const isVisible_edAgencyNm = rawVisible_edAgencyNm && rawVisible_Shape9;
    const setIsVisible_edAgencyNm = setRawVisible_edAgencyNm;
    const isVisible_StbtnUpdate1 = rawVisible_StbtnUpdate1 && rawVisible_DivTankChangeM;
    const setIsVisible_StbtnUpdate1 = setRawVisible_StbtnUpdate1;
    const isVisible_btnUpdate1 = rawVisible_btnUpdate1 && rawVisible_DivTankChangeM;
    const setIsVisible_btnUpdate1 = setRawVisible_btnUpdate1;
    const isVisible_btn_Apply = rawVisible_btn_Apply;
    const setIsVisible_btn_Apply = setRawVisible_btn_Apply;
    const isVisible_btnSize = rawVisible_btnSize && rawVisible_DivTankChangeM;
    const setIsVisible_btnSize = setRawVisible_btnSize;
    const isVisible_gdManager = rawVisible_gdManager && rawVisible_DivTankChangeM;
    const setIsVisible_gdManager = setRawVisible_gdManager;
    const isVisible_gdDangerChangeHList = rawVisible_gdDangerChangeHList && rawVisible_Shape2;
    const setIsVisible_gdDangerChangeHList = setRawVisible_gdDangerChangeHList;
    const isVisible_gdBangChangeHList = rawVisible_gdBangChangeHList && rawVisible_Shape2;
    const setIsVisible_gdBangChangeHList = setRawVisible_gdBangChangeHList;
    const isVisible_spSearchNum = rawVisible_spSearchNum && rawVisible_Shape9;
    const setIsVisible_spSearchNum = setRawVisible_spSearchNum;
    const isVisible_cbxSearch = rawVisible_cbxSearch && rawVisible_Shape1;
    const setIsVisible_cbxSearch = setRawVisible_cbxSearch;
    const isVisible_edAddSearch = rawVisible_edAddSearch && rawVisible_Shape1;
    const setIsVisible_edAddSearch = setRawVisible_edAddSearch;

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