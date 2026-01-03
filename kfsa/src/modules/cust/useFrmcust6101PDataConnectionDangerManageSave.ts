// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBizCd, Ids_oCourse, Ids_oRegion, Ids_oJibu, Ids_oDetailCourse, Ids_oPersonGubun, Ids_oAddrGubun, Ids_oAllObject, Ids_ioBuildingInfo, Ids_ioCustomerInfo, Ids_ioManagerInfo, Ids_ioAdditionInfo, Ids_oAddr, Ids_oBuildingSeq, Ids_oCustomerSeq, Ids_oFireManagerSeq, Ids_ioCustomerInfoTmp, Ids_ioManagerInfoTmp, Ids_oBnmCode, Ids_oFireCd, Ids_oFireCenterCd, Ids_oCustomerStatus, Ids_ioMatchInfo, Ids_ioBizCdMatch, Ids_oFireBonbuCd, Ids_ioManager, Ids_oMemberStat, Ids_ioOldCustomerInfo, Ids_ioOldManagerInfo, Ids_oManagerList, Ids_MemberGubun, Ids_oStatus, Ids_ioOtherLicenseInfo, Ids_oOverBizProc, Ids_ioNotOverBizFireManager, Ids_ioIsOverBizFireManager, Ids_ioOldBuildingInfo, Ids_ioDanMnfctretcInfo, Ids_ioDanManagerInfo, Ids_ioDangerInfo, Ids_ioDangerInfoSave, Ids_iCustomerModifyHistory, Ids_ioLicenseInfo, Ids_oModifyColumnList, Ids_oAddr2, Ids_iRoadConv, Ids_oRoadConv, Ids_ioPersoninfoHP, Ids_oPersonInfoAll } from './Frmcust6101PDataConnectionDangerManageSaveData';

export const useFrmcust6101PDataConnectionDangerManageSave = () => {
    const [ds_oBizCd, setds_oBizCd] = useState<Ids_oBizCd[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_oPersonGubun, setds_oPersonGubun] = useState<Ids_oPersonGubun[]>([]);
    const [ds_oAddrGubun, setds_oAddrGubun] = useState<Ids_oAddrGubun[]>([]);
    const [ds_oAllObject, setds_oAllObject] = useState<Ids_oAllObject[]>([]);
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_ioCustomerInfo, setds_ioCustomerInfo] = useState<Ids_ioCustomerInfo[]>([]);
    const [ds_ioManagerInfo, setds_ioManagerInfo] = useState<Ids_ioManagerInfo[]>([]);
    const [ds_ioAdditionInfo, setds_ioAdditionInfo] = useState<Ids_ioAdditionInfo[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oBuildingSeq, setds_oBuildingSeq] = useState<Ids_oBuildingSeq[]>([]);
    const [ds_oCustomerSeq, setds_oCustomerSeq] = useState<Ids_oCustomerSeq[]>([]);
    const [ds_oFireManagerSeq, setds_oFireManagerSeq] = useState<Ids_oFireManagerSeq[]>([]);
    const [ds_ioCustomerInfoTmp, setds_ioCustomerInfoTmp] = useState<Ids_ioCustomerInfoTmp[]>([]);
    const [ds_ioManagerInfoTmp, setds_ioManagerInfoTmp] = useState<Ids_ioManagerInfoTmp[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oCustomerStatus, setds_oCustomerStatus] = useState<Ids_oCustomerStatus[]>([]);
    const [ds_ioMatchInfo, setds_ioMatchInfo] = useState<Ids_ioMatchInfo[]>([]);
    const [ds_ioBizCdMatch, setds_ioBizCdMatch] = useState<Ids_ioBizCdMatch[]>([]);
    const [ds_oFireBonbuCd, setds_oFireBonbuCd] = useState<Ids_oFireBonbuCd[]>([]);
    const [ds_ioManager, setds_ioManager] = useState<Ids_ioManager[]>([]);
    const [ds_oMemberStat, setds_oMemberStat] = useState<Ids_oMemberStat[]>([]);
    const [ds_ioOldCustomerInfo, setds_ioOldCustomerInfo] = useState<Ids_ioOldCustomerInfo[]>([]);
    const [ds_ioOldManagerInfo, setds_ioOldManagerInfo] = useState<Ids_ioOldManagerInfo[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_MemberGubun, setds_MemberGubun] = useState<Ids_MemberGubun[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_ioOtherLicenseInfo, setds_ioOtherLicenseInfo] = useState<Ids_ioOtherLicenseInfo[]>([]);
    const [ds_oOverBizProc, setds_oOverBizProc] = useState<Ids_oOverBizProc[]>([]);
    const [ds_ioNotOverBizFireManager, setds_ioNotOverBizFireManager] = useState<Ids_ioNotOverBizFireManager[]>([]);
    const [ds_ioIsOverBizFireManager, setds_ioIsOverBizFireManager] = useState<Ids_ioIsOverBizFireManager[]>([]);
    const [ds_ioOldBuildingInfo, setds_ioOldBuildingInfo] = useState<Ids_ioOldBuildingInfo[]>([]);
    const [ds_ioDanMnfctretcInfo, setds_ioDanMnfctretcInfo] = useState<Ids_ioDanMnfctretcInfo[]>([]);
    const [ds_ioDanManagerInfo, setds_ioDanManagerInfo] = useState<Ids_ioDanManagerInfo[]>([]);
    const [ds_ioDangerInfo, setds_ioDangerInfo] = useState<Ids_ioDangerInfo[]>([]);
    const [ds_ioDangerInfoSave, setds_ioDangerInfoSave] = useState<Ids_ioDangerInfoSave[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_ioLicenseInfo, setds_ioLicenseInfo] = useState<Ids_ioLicenseInfo[]>([]);
    const [ds_oModifyColumnList, setds_oModifyColumnList] = useState<Ids_oModifyColumnList[]>([]);
    const [ds_oAddr2, setds_oAddr2] = useState<Ids_oAddr2[]>([]);
    const [ds_iRoadConv, setds_iRoadConv] = useState<Ids_iRoadConv[]>([]);
    const [ds_oRoadConv, setds_oRoadConv] = useState<Ids_oRoadConv[]>([]);
    const [ds_ioPersoninfoHP, setds_ioPersoninfoHP] = useState<Ids_ioPersoninfoHP[]>([]);
    const [ds_oPersonInfoAll, setds_oPersonInfoAll] = useState<Ids_oPersonInfoAll[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_medHopeRoadZipCode, setRawVisible_medHopeRoadZipCode] = useState(true);
    const [rawVisible_edHopeRoadAddr2, setRawVisible_edHopeRoadAddr2] = useState(true);
    const [rawVisible_edHopeRoadAddr1, setRawVisible_edHopeRoadAddr1] = useState(true);
    const [rawVisible_Shape9, setRawVisible_Shape9] = useState(true);
    const [rawVisible_medRoadZipCode, setRawVisible_medRoadZipCode] = useState(true);
    const [rawVisible_edRoadAddr2, setRawVisible_edRoadAddr2] = useState(true);
    const [rawVisible_edRoadAddr1, setRawVisible_edRoadAddr1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbFPISDanNm, setRawVisible_lbFPISDanNm] = useState(true);
    const [rawVisible_edFPISBuildingNm, setRawVisible_edFPISBuildingNm] = useState(true);
    const [rawVisible_lbSystemInfo, setRawVisible_lbSystemInfo] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_lbFPISFireCenter, setRawVisible_lbFPISFireCenter] = useState(true);
    const [rawVisible_EdFPISFireCenter, setRawVisible_EdFPISFireCenter] = useState(true);
    const [rawVisible_lbFPISCourse, setRawVisible_lbFPISCourse] = useState(true);
    const [rawVisible_EdFPISCourse, setRawVisible_EdFPISCourse] = useState(true);
    const [rawVisible_lbFPISDetailCourse, setRawVisible_lbFPISDetailCourse] = useState(true);
    const [rawVisible_EdFPISDetailCourse, setRawVisible_EdFPISDetailCourse] = useState(true);
    const [rawVisible_Shape6, setRawVisible_Shape6] = useState(true);
    const [rawVisible_lbFPISFireManager, setRawVisible_lbFPISFireManager] = useState(true);
    const [rawVisible_gdFPISFireManager, setRawVisible_gdFPISFireManager] = useState(true);
    const [rawVisible_lbFPISLicense1, setRawVisible_lbFPISLicense1] = useState(true);
    const [rawVisible_gdFPISLicense, setRawVisible_gdFPISLicense] = useState(true);
    const [rawVisible_lbFPISLicense2, setRawVisible_lbFPISLicense2] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_chkBuilding, setRawVisible_chkBuilding] = useState(true);
    const [rawVisible_chkBNM, setRawVisible_chkBNM] = useState(true);
    const [rawVisible_chkAddr, setRawVisible_chkAddr] = useState(true);
    const [rawVisible_chkFireCenter, setRawVisible_chkFireCenter] = useState(true);
    const [rawVisible_chkTel, setRawVisible_chkTel] = useState(true);
    const [rawVisible_edBNM, setRawVisible_edBNM] = useState(true);
    const [rawVisible_edAddr1, setRawVisible_edAddr1] = useState(true);
    const [rawVisible_medZipCode, setRawVisible_medZipCode] = useState(true);
    const [rawVisible_edAddr2, setRawVisible_edAddr2] = useState(true);
    const [rawVisible_btnSearchZipCode1, setRawVisible_btnSearchZipCode1] = useState(true);
    const [rawVisible_cbxStation, setRawVisible_cbxStation] = useState(true);
    const [rawVisible_cbxCenter, setRawVisible_cbxCenter] = useState(true);
    const [rawVisible_cbxBonbu, setRawVisible_cbxBonbu] = useState(true);
    const [rawVisible_edTel, setRawVisible_edTel] = useState(true);
    const [rawVisible_medHopeZipCode, setRawVisible_medHopeZipCode] = useState(true);
    const [rawVisible_edHopeAddr1, setRawVisible_edHopeAddr1] = useState(true);
    const [rawVisible_edHopeAddr2, setRawVisible_edHopeAddr2] = useState(true);
    const [rawVisible_cbxPostGubun2, setRawVisible_cbxPostGubun2] = useState(true);
    const [rawVisible_btnSearchZipCode2, setRawVisible_btnSearchZipCode2] = useState(true);
    const [rawVisible_medRegYYMM, setRawVisible_medRegYYMM] = useState(true);
    const [rawVisible_medFeeYYMM, setRawVisible_medFeeYYMM] = useState(true);
    const [rawVisible_cbxPersonGubun, setRawVisible_cbxPersonGubun] = useState(true);
    const [rawVisible_chkCustomer, setRawVisible_chkCustomer] = useState(true);
    const [rawVisible_chkRegYYMM, setRawVisible_chkRegYYMM] = useState(true);
    const [rawVisible_chkFeeYYMM, setRawVisible_chkFeeYYMM] = useState(true);
    const [rawVisible_chkHopeAddr, setRawVisible_chkHopeAddr] = useState(true);
    const [rawVisible_cbxCustomerStatus, setRawVisible_cbxCustomerStatus] = useState(true);
    const [rawVisible_Shape10, setRawVisible_Shape10] = useState(true);
    const [rawVisible_edFMNM, setRawVisible_edFMNM] = useState(true);
    const [rawVisible_medFMResidentno, setRawVisible_medFMResidentno] = useState(true);
    const [rawVisible_calFMStartDate, setRawVisible_calFMStartDate] = useState(true);
    const [rawVisible_lbFMEndStatus, setRawVisible_lbFMEndStatus] = useState(false);
    const [rawVisible_calFMEndDate, setRawVisible_calFMEndDate] = useState(true);
    const [rawVisible_chkFMNM, setRawVisible_chkFMNM] = useState(true);
    const [rawVisible_chkFMResidentno, setRawVisible_chkFMResidentno] = useState(true);
    const [rawVisible_chkFMStartDate, setRawVisible_chkFMStartDate] = useState(true);
    const [rawVisible_Shape11, setRawVisible_Shape11] = useState(true);
    const [rawVisible_chkFireManager, setRawVisible_chkFireManager] = useState(true);
    const [rawVisible_chkPersonGubun, setRawVisible_chkPersonGubun] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnApply, setRawVisible_btnApply] = useState(true);
    const [rawVisible_btnBuildingSearch, setRawVisible_btnBuildingSearch] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_chkRegion, setRawVisible_chkRegion] = useState(true);
    const [rawVisible_cbxRegion, setRawVisible_cbxRegion] = useState(true);
    const [rawVisible_chkDetailCourse, setRawVisible_chkDetailCourse] = useState(true);
    const [rawVisible_cbxDetailCourse, setRawVisible_cbxDetailCourse] = useState(true);
    const [rawVisible_chkCourse, setRawVisible_chkCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbCNO, setRawVisible_lbCNO] = useState(true);
    const [rawVisible_medCNO, setRawVisible_medCNO] = useState(true);
    const [rawVisible_btnAuthResidentNo, setRawVisible_btnAuthResidentNo] = useState(true);
    const [rawVisible_btnFPISInfo, setRawVisible_btnFPISInfo] = useState(true);
    const [rawVisible_lbInStatus, setRawVisible_lbInStatus] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_chkoldBuildingEndProc, setRawVisible_chkoldBuildingEndProc] = useState(true);
    const [rawVisible_lbFMEndStatustitle, setRawVisible_lbFMEndStatustitle] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_lbFPISAddr, setRawVisible_lbFPISAddr] = useState(true);
    const [rawVisible_edFPISAddr1, setRawVisible_edFPISAddr1] = useState(true);
    const [rawVisible_medFPISZipCode, setRawVisible_medFPISZipCode] = useState(true);
    const [rawVisible_edFPISAddr2, setRawVisible_edFPISAddr2] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_lbITLNO, setRawVisible_lbITLNO] = useState(true);
    const [rawVisible_edITL_NO, setRawVisible_edITL_NO] = useState(true);
    const [rawVisible_lbPRMISNNO, setRawVisible_lbPRMISNNO] = useState(true);
    const [rawVisible_Edit1, setRawVisible_Edit1] = useState(true);
    const [rawVisible_Edit2, setRawVisible_Edit2] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_Edit3, setRawVisible_Edit3] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_lbINSTLR_CPR_NM, setRawVisible_lbINSTLR_CPR_NM] = useState(true);
    const [rawVisible_edINSTLR_CPR_NM, setRawVisible_edINSTLR_CPR_NM] = useState(true);
    const [rawVisible_lbINSTLR_NM, setRawVisible_lbINSTLR_NM] = useState(true);
    const [rawVisible_edINSTLR_NM, setRawVisible_edINSTLR_NM] = useState(true);
    const [rawVisible_lbFPISTel, setRawVisible_lbFPISTel] = useState(true);
    const [rawVisible_edFPISTel, setRawVisible_edFPISTel] = useState(true);
    const [rawVisible_lbFPISINSTLRAddr, setRawVisible_lbFPISINSTLRAddr] = useState(true);
    const [rawVisible_edFPISINSTLRAddr1, setRawVisible_edFPISINSTLRAddr1] = useState(true);
    const [rawVisible_medFPISINSTLRZipCode, setRawVisible_medFPISINSTLRZipCode] = useState(true);
    const [rawVisible_edFPISINSTLRAddr2, setRawVisible_edFPISINSTLRAddr2] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_gdDanger, setRawVisible_gdDanger] = useState(true);
    const [rawVisible_chkPostPlace, setRawVisible_chkPostPlace] = useState(true);
    const [rawVisible_edPostPlace, setRawVisible_edPostPlace] = useState(true);
    const [rawVisible_cbxAddrGubun, setRawVisible_cbxAddrGubun] = useState(true);
    const [rawVisible_cbxHopeAddrGubun, setRawVisible_cbxHopeAddrGubun] = useState(true);
    const [rawVisible_chkHPTEL, setRawVisible_chkHPTEL] = useState(true);
    const [rawVisible_edPTel, setRawVisible_edPTel] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_medPersonKey, setRawVisible_medPersonKey] = useState(true);
    const [rawVisible_btnLicenseList, setRawVisible_btnLicenseList] = useState(true);
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_medHopeRoadZipCode = rawVisible_medHopeRoadZipCode && rawVisible_Shape4;
    const setIsVisible_medHopeRoadZipCode = setRawVisible_medHopeRoadZipCode;
    const isVisible_edHopeRoadAddr2 = rawVisible_edHopeRoadAddr2 && rawVisible_Shape4;
    const setIsVisible_edHopeRoadAddr2 = setRawVisible_edHopeRoadAddr2;
    const isVisible_edHopeRoadAddr1 = rawVisible_edHopeRoadAddr1 && rawVisible_Shape4;
    const setIsVisible_edHopeRoadAddr1 = setRawVisible_edHopeRoadAddr1;
    const isVisible_Shape9 = rawVisible_Shape9;
    const setIsVisible_Shape9 = setRawVisible_Shape9;
    const isVisible_medRoadZipCode = rawVisible_medRoadZipCode && rawVisible_Shape9;
    const setIsVisible_medRoadZipCode = setRawVisible_medRoadZipCode;
    const isVisible_edRoadAddr2 = rawVisible_edRoadAddr2 && rawVisible_Shape9;
    const setIsVisible_edRoadAddr2 = setRawVisible_edRoadAddr2;
    const isVisible_edRoadAddr1 = rawVisible_edRoadAddr1 && rawVisible_Shape9;
    const setIsVisible_edRoadAddr1 = setRawVisible_edRoadAddr1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbFPISDanNm = rawVisible_lbFPISDanNm && rawVisible_Shape0;
    const setIsVisible_lbFPISDanNm = setRawVisible_lbFPISDanNm;
    const isVisible_edFPISBuildingNm = rawVisible_edFPISBuildingNm && rawVisible_Shape0;
    const setIsVisible_edFPISBuildingNm = setRawVisible_edFPISBuildingNm;
    const isVisible_lbSystemInfo = rawVisible_lbSystemInfo;
    const setIsVisible_lbSystemInfo = setRawVisible_lbSystemInfo;
    const isVisible_Static6 = rawVisible_Static6;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_lbFPISFireCenter = rawVisible_lbFPISFireCenter && rawVisible_Shape0;
    const setIsVisible_lbFPISFireCenter = setRawVisible_lbFPISFireCenter;
    const isVisible_EdFPISFireCenter = rawVisible_EdFPISFireCenter && rawVisible_Shape0;
    const setIsVisible_EdFPISFireCenter = setRawVisible_EdFPISFireCenter;
    const isVisible_lbFPISCourse = rawVisible_lbFPISCourse && rawVisible_Shape0;
    const setIsVisible_lbFPISCourse = setRawVisible_lbFPISCourse;
    const isVisible_EdFPISCourse = rawVisible_EdFPISCourse && rawVisible_Shape0;
    const setIsVisible_EdFPISCourse = setRawVisible_EdFPISCourse;
    const isVisible_lbFPISDetailCourse = rawVisible_lbFPISDetailCourse && rawVisible_Shape0;
    const setIsVisible_lbFPISDetailCourse = setRawVisible_lbFPISDetailCourse;
    const isVisible_EdFPISDetailCourse = rawVisible_EdFPISDetailCourse && rawVisible_Shape0;
    const setIsVisible_EdFPISDetailCourse = setRawVisible_EdFPISDetailCourse;
    const isVisible_Shape6 = rawVisible_Shape6;
    const setIsVisible_Shape6 = setRawVisible_Shape6;
    const isVisible_lbFPISFireManager = rawVisible_lbFPISFireManager;
    const setIsVisible_lbFPISFireManager = setRawVisible_lbFPISFireManager;
    const isVisible_gdFPISFireManager = rawVisible_gdFPISFireManager && rawVisible_Shape6;
    const setIsVisible_gdFPISFireManager = setRawVisible_gdFPISFireManager;
    const isVisible_lbFPISLicense1 = rawVisible_lbFPISLicense1 && rawVisible_Shape6;
    const setIsVisible_lbFPISLicense1 = setRawVisible_lbFPISLicense1;
    const isVisible_gdFPISLicense = rawVisible_gdFPISLicense && rawVisible_Shape6;
    const setIsVisible_gdFPISLicense = setRawVisible_gdFPISLicense;
    const isVisible_lbFPISLicense2 = rawVisible_lbFPISLicense2 && rawVisible_Shape6;
    const setIsVisible_lbFPISLicense2 = setRawVisible_lbFPISLicense2;
    const isVisible_Static19 = rawVisible_Static19;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_chkBuilding = rawVisible_chkBuilding;
    const setIsVisible_chkBuilding = setRawVisible_chkBuilding;
    const isVisible_chkBNM = rawVisible_chkBNM && rawVisible_Shape9;
    const setIsVisible_chkBNM = setRawVisible_chkBNM;
    const isVisible_chkAddr = rawVisible_chkAddr && rawVisible_Shape9;
    const setIsVisible_chkAddr = setRawVisible_chkAddr;
    const isVisible_chkFireCenter = rawVisible_chkFireCenter && rawVisible_Shape9;
    const setIsVisible_chkFireCenter = setRawVisible_chkFireCenter;
    const isVisible_chkTel = rawVisible_chkTel && rawVisible_Shape9;
    const setIsVisible_chkTel = setRawVisible_chkTel;
    const isVisible_edBNM = rawVisible_edBNM && rawVisible_Shape9;
    const setIsVisible_edBNM = setRawVisible_edBNM;
    const isVisible_edAddr1 = rawVisible_edAddr1 && rawVisible_Shape9;
    const setIsVisible_edAddr1 = setRawVisible_edAddr1;
    const isVisible_medZipCode = rawVisible_medZipCode && rawVisible_Shape9;
    const setIsVisible_medZipCode = setRawVisible_medZipCode;
    const isVisible_edAddr2 = rawVisible_edAddr2 && rawVisible_Shape9;
    const setIsVisible_edAddr2 = setRawVisible_edAddr2;
    const isVisible_btnSearchZipCode1 = rawVisible_btnSearchZipCode1 && rawVisible_Shape9;
    const setIsVisible_btnSearchZipCode1 = setRawVisible_btnSearchZipCode1;
    const isVisible_cbxStation = rawVisible_cbxStation && rawVisible_Shape9;
    const setIsVisible_cbxStation = setRawVisible_cbxStation;
    const isVisible_cbxCenter = rawVisible_cbxCenter && rawVisible_Shape9;
    const setIsVisible_cbxCenter = setRawVisible_cbxCenter;
    const isVisible_cbxBonbu = rawVisible_cbxBonbu && rawVisible_Shape9;
    const setIsVisible_cbxBonbu = setRawVisible_cbxBonbu;
    const isVisible_edTel = rawVisible_edTel && rawVisible_Shape9;
    const setIsVisible_edTel = setRawVisible_edTel;
    const isVisible_medHopeZipCode = rawVisible_medHopeZipCode && rawVisible_Shape4;
    const setIsVisible_medHopeZipCode = setRawVisible_medHopeZipCode;
    const isVisible_edHopeAddr1 = rawVisible_edHopeAddr1 && rawVisible_Shape4;
    const setIsVisible_edHopeAddr1 = setRawVisible_edHopeAddr1;
    const isVisible_edHopeAddr2 = rawVisible_edHopeAddr2 && rawVisible_Shape4;
    const setIsVisible_edHopeAddr2 = setRawVisible_edHopeAddr2;
    const isVisible_cbxPostGubun2 = rawVisible_cbxPostGubun2 && rawVisible_Shape4;
    const setIsVisible_cbxPostGubun2 = setRawVisible_cbxPostGubun2;
    const isVisible_btnSearchZipCode2 = rawVisible_btnSearchZipCode2 && rawVisible_Shape4;
    const setIsVisible_btnSearchZipCode2 = setRawVisible_btnSearchZipCode2;
    const isVisible_medRegYYMM = rawVisible_medRegYYMM && rawVisible_Shape4;
    const setIsVisible_medRegYYMM = setRawVisible_medRegYYMM;
    const isVisible_medFeeYYMM = rawVisible_medFeeYYMM && rawVisible_Shape4;
    const setIsVisible_medFeeYYMM = setRawVisible_medFeeYYMM;
    const isVisible_cbxPersonGubun = rawVisible_cbxPersonGubun && rawVisible_Shape4;
    const setIsVisible_cbxPersonGubun = setRawVisible_cbxPersonGubun;
    const isVisible_chkCustomer = rawVisible_chkCustomer;
    const setIsVisible_chkCustomer = setRawVisible_chkCustomer;
    const isVisible_chkRegYYMM = rawVisible_chkRegYYMM && rawVisible_Shape4;
    const setIsVisible_chkRegYYMM = setRawVisible_chkRegYYMM;
    const isVisible_chkFeeYYMM = rawVisible_chkFeeYYMM && rawVisible_Shape4;
    const setIsVisible_chkFeeYYMM = setRawVisible_chkFeeYYMM;
    const isVisible_chkHopeAddr = rawVisible_chkHopeAddr && rawVisible_Shape4;
    const setIsVisible_chkHopeAddr = setRawVisible_chkHopeAddr;
    const isVisible_cbxCustomerStatus = rawVisible_cbxCustomerStatus && rawVisible_Shape4;
    const setIsVisible_cbxCustomerStatus = setRawVisible_cbxCustomerStatus;
    const isVisible_Shape10 = rawVisible_Shape10;
    const setIsVisible_Shape10 = setRawVisible_Shape10;
    const isVisible_edFMNM = rawVisible_edFMNM && rawVisible_Shape10;
    const setIsVisible_edFMNM = setRawVisible_edFMNM;
    const isVisible_medFMResidentno = rawVisible_medFMResidentno && rawVisible_Shape10;
    const setIsVisible_medFMResidentno = setRawVisible_medFMResidentno;
    const isVisible_calFMStartDate = rawVisible_calFMStartDate && rawVisible_Shape10;
    const setIsVisible_calFMStartDate = setRawVisible_calFMStartDate;
    const isVisible_lbFMEndStatus = rawVisible_lbFMEndStatus && rawVisible_Shape10;
    const setIsVisible_lbFMEndStatus = setRawVisible_lbFMEndStatus;
    const isVisible_calFMEndDate = rawVisible_calFMEndDate && rawVisible_Shape10;
    const setIsVisible_calFMEndDate = setRawVisible_calFMEndDate;
    const isVisible_chkFMNM = rawVisible_chkFMNM && rawVisible_Shape10;
    const setIsVisible_chkFMNM = setRawVisible_chkFMNM;
    const isVisible_chkFMResidentno = rawVisible_chkFMResidentno && rawVisible_Shape10;
    const setIsVisible_chkFMResidentno = setRawVisible_chkFMResidentno;
    const isVisible_chkFMStartDate = rawVisible_chkFMStartDate && rawVisible_Shape10;
    const setIsVisible_chkFMStartDate = setRawVisible_chkFMStartDate;
    const isVisible_Shape11 = rawVisible_Shape11;
    const setIsVisible_Shape11 = setRawVisible_Shape11;
    const isVisible_chkFireManager = rawVisible_chkFireManager;
    const setIsVisible_chkFireManager = setRawVisible_chkFireManager;
    const isVisible_chkPersonGubun = rawVisible_chkPersonGubun && rawVisible_Shape4;
    const setIsVisible_chkPersonGubun = setRawVisible_chkPersonGubun;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnApply = rawVisible_btnApply;
    const setIsVisible_btnApply = setRawVisible_btnApply;
    const isVisible_btnBuildingSearch = rawVisible_btnBuildingSearch && rawVisible_Shape9;
    const setIsVisible_btnBuildingSearch = setRawVisible_btnBuildingSearch;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape1;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_chkRegion = rawVisible_chkRegion && rawVisible_Shape1;
    const setIsVisible_chkRegion = setRawVisible_chkRegion;
    const isVisible_cbxRegion = rawVisible_cbxRegion && rawVisible_Shape1;
    const setIsVisible_cbxRegion = setRawVisible_cbxRegion;
    const isVisible_chkDetailCourse = rawVisible_chkDetailCourse && rawVisible_Shape1;
    const setIsVisible_chkDetailCourse = setRawVisible_chkDetailCourse;
    const isVisible_cbxDetailCourse = rawVisible_cbxDetailCourse && rawVisible_Shape1;
    const setIsVisible_cbxDetailCourse = setRawVisible_cbxDetailCourse;
    const isVisible_chkCourse = rawVisible_chkCourse && rawVisible_Shape1;
    const setIsVisible_chkCourse = setRawVisible_chkCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape1;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbCNO = rawVisible_lbCNO && rawVisible_Shape1;
    const setIsVisible_lbCNO = setRawVisible_lbCNO;
    const isVisible_medCNO = rawVisible_medCNO && rawVisible_Shape1;
    const setIsVisible_medCNO = setRawVisible_medCNO;
    const isVisible_btnAuthResidentNo = rawVisible_btnAuthResidentNo && rawVisible_Shape10;
    const setIsVisible_btnAuthResidentNo = setRawVisible_btnAuthResidentNo;
    const isVisible_btnFPISInfo = rawVisible_btnFPISInfo;
    const setIsVisible_btnFPISInfo = setRawVisible_btnFPISInfo;
    const isVisible_lbInStatus = rawVisible_lbInStatus;
    const setIsVisible_lbInStatus = setRawVisible_lbInStatus;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_chkoldBuildingEndProc = rawVisible_chkoldBuildingEndProc && rawVisible_Shape2;
    const setIsVisible_chkoldBuildingEndProc = setRawVisible_chkoldBuildingEndProc;
    const isVisible_lbFMEndStatustitle = rawVisible_lbFMEndStatustitle && rawVisible_Shape10;
    const setIsVisible_lbFMEndStatustitle = setRawVisible_lbFMEndStatustitle;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape4;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_lbFPISAddr = rawVisible_lbFPISAddr && rawVisible_Shape0;
    const setIsVisible_lbFPISAddr = setRawVisible_lbFPISAddr;
    const isVisible_edFPISAddr1 = rawVisible_edFPISAddr1 && rawVisible_Shape0;
    const setIsVisible_edFPISAddr1 = setRawVisible_edFPISAddr1;
    const isVisible_medFPISZipCode = rawVisible_medFPISZipCode && rawVisible_Shape0;
    const setIsVisible_medFPISZipCode = setRawVisible_medFPISZipCode;
    const isVisible_edFPISAddr2 = rawVisible_edFPISAddr2 && rawVisible_Shape0;
    const setIsVisible_edFPISAddr2 = setRawVisible_edFPISAddr2;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Static17 = rawVisible_Static17;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_lbITLNO = rawVisible_lbITLNO && rawVisible_Shape3;
    const setIsVisible_lbITLNO = setRawVisible_lbITLNO;
    const isVisible_edITL_NO = rawVisible_edITL_NO && rawVisible_Shape3;
    const setIsVisible_edITL_NO = setRawVisible_edITL_NO;
    const isVisible_lbPRMISNNO = rawVisible_lbPRMISNNO && rawVisible_Shape3;
    const setIsVisible_lbPRMISNNO = setRawVisible_lbPRMISNNO;
    const isVisible_Edit1 = rawVisible_Edit1 && rawVisible_Shape3;
    const setIsVisible_Edit1 = setRawVisible_Edit1;
    const isVisible_Edit2 = rawVisible_Edit2 && rawVisible_Shape3;
    const setIsVisible_Edit2 = setRawVisible_Edit2;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape3;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape3;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_Edit3 = rawVisible_Edit3 && rawVisible_Shape3;
    const setIsVisible_Edit3 = setRawVisible_Edit3;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_lbINSTLR_CPR_NM = rawVisible_lbINSTLR_CPR_NM && rawVisible_Shape5;
    const setIsVisible_lbINSTLR_CPR_NM = setRawVisible_lbINSTLR_CPR_NM;
    const isVisible_edINSTLR_CPR_NM = rawVisible_edINSTLR_CPR_NM && rawVisible_Shape5;
    const setIsVisible_edINSTLR_CPR_NM = setRawVisible_edINSTLR_CPR_NM;
    const isVisible_lbINSTLR_NM = rawVisible_lbINSTLR_NM && rawVisible_Shape5;
    const setIsVisible_lbINSTLR_NM = setRawVisible_lbINSTLR_NM;
    const isVisible_edINSTLR_NM = rawVisible_edINSTLR_NM && rawVisible_Shape5;
    const setIsVisible_edINSTLR_NM = setRawVisible_edINSTLR_NM;
    const isVisible_lbFPISTel = rawVisible_lbFPISTel && rawVisible_Shape5;
    const setIsVisible_lbFPISTel = setRawVisible_lbFPISTel;
    const isVisible_edFPISTel = rawVisible_edFPISTel && rawVisible_Shape5;
    const setIsVisible_edFPISTel = setRawVisible_edFPISTel;
    const isVisible_lbFPISINSTLRAddr = rawVisible_lbFPISINSTLRAddr && rawVisible_Shape5;
    const setIsVisible_lbFPISINSTLRAddr = setRawVisible_lbFPISINSTLRAddr;
    const isVisible_edFPISINSTLRAddr1 = rawVisible_edFPISINSTLRAddr1 && rawVisible_Shape5;
    const setIsVisible_edFPISINSTLRAddr1 = setRawVisible_edFPISINSTLRAddr1;
    const isVisible_medFPISINSTLRZipCode = rawVisible_medFPISINSTLRZipCode && rawVisible_Shape5;
    const setIsVisible_medFPISINSTLRZipCode = setRawVisible_medFPISINSTLRZipCode;
    const isVisible_edFPISINSTLRAddr2 = rawVisible_edFPISINSTLRAddr2 && rawVisible_Shape5;
    const setIsVisible_edFPISINSTLRAddr2 = setRawVisible_edFPISINSTLRAddr2;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_gdDanger = rawVisible_gdDanger && rawVisible_Shape11;
    const setIsVisible_gdDanger = setRawVisible_gdDanger;
    const isVisible_chkPostPlace = rawVisible_chkPostPlace && rawVisible_Shape4;
    const setIsVisible_chkPostPlace = setRawVisible_chkPostPlace;
    const isVisible_edPostPlace = rawVisible_edPostPlace && rawVisible_Shape4;
    const setIsVisible_edPostPlace = setRawVisible_edPostPlace;
    const isVisible_cbxAddrGubun = rawVisible_cbxAddrGubun && rawVisible_Shape9;
    const setIsVisible_cbxAddrGubun = setRawVisible_cbxAddrGubun;
    const isVisible_cbxHopeAddrGubun = rawVisible_cbxHopeAddrGubun && rawVisible_Shape4;
    const setIsVisible_cbxHopeAddrGubun = setRawVisible_cbxHopeAddrGubun;
    const isVisible_chkHPTEL = rawVisible_chkHPTEL && rawVisible_Shape10;
    const setIsVisible_chkHPTEL = setRawVisible_chkHPTEL;
    const isVisible_edPTel = rawVisible_edPTel && rawVisible_Shape10;
    const setIsVisible_edPTel = setRawVisible_edPTel;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_medPersonKey = rawVisible_medPersonKey;
    const setIsVisible_medPersonKey = setRawVisible_medPersonKey;
    const isVisible_btnLicenseList = rawVisible_btnLicenseList && rawVisible_Shape10;
    const setIsVisible_btnLicenseList = setRawVisible_btnLicenseList;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBizCd([]);
            setds_oCourse([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_oDetailCourse([]);
            setds_oPersonGubun([]);
            setds_oAddrGubun([]);
            setds_oAllObject([]);
            setds_ioBuildingInfo([]);
            setds_ioCustomerInfo([]);
            setds_ioManagerInfo([]);
            setds_ioAdditionInfo([]);
            setds_oAddr([]);
            setds_oBuildingSeq([]);
            setds_oCustomerSeq([]);
            setds_oFireManagerSeq([]);
            setds_ioCustomerInfoTmp([]);
            setds_ioManagerInfoTmp([]);
            setds_oBnmCode([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oCustomerStatus([]);
            setds_ioMatchInfo([]);
            setds_ioBizCdMatch([]);
            setds_oFireBonbuCd([]);
            setds_ioManager([]);
            setds_oMemberStat([]);
            setds_ioOldCustomerInfo([]);
            setds_ioOldManagerInfo([]);
            setds_oManagerList([]);
            setds_MemberGubun([]);
            setds_oStatus([]);
            setds_ioOtherLicenseInfo([]);
            setds_oOverBizProc([]);
            setds_ioNotOverBizFireManager([]);
            setds_ioIsOverBizFireManager([]);
            setds_ioOldBuildingInfo([]);
            setds_ioDanMnfctretcInfo([]);
            setds_ioDanManagerInfo([]);
            setds_ioDangerInfo([]);
            setds_ioDangerInfoSave([]);
            setds_iCustomerModifyHistory([]);
            setds_ioLicenseInfo([]);
            setds_oModifyColumnList([]);
            setds_oAddr2([]);
            setds_iRoadConv([]);
            setds_oRoadConv([]);
            setds_ioPersoninfoHP([]);
            setds_oPersonInfoAll([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnApply_OnClick = () => {
        console.log('btnApply_OnClick clicked');
    };
    const btnAuthResidentNo_OnClick = () => {
        console.log('btnAuthResidentNo_OnClick clicked');
    };
    const btnBuildingSearch_OnClick = () => {
        console.log('btnBuildingSearch_OnClick clicked');
    };
    const btnFPISInfo_OnClick = () => {
        console.log('btnFPISInfo_OnClick clicked');
    };
    const btnLicenseList_OnClick = () => {
        console.log('btnLicenseList_OnClick clicked');
    };
    const btnSearchZipCode1_OnClick = () => {
        console.log('btnSearchZipCode1_OnClick clicked');
    };
    const btnSearchZipCode2_OnClick = () => {
        console.log('btnSearchZipCode2_OnClick clicked');
    };
    const chkAddr_OnClick = () => {
        console.log('chkAddr_OnClick clicked');
    };
    const chkBNM_OnClick = () => {
        console.log('chkBNM_OnClick clicked');
    };
    const chkBuilding_OnClick = () => {
        console.log('chkBuilding_OnClick clicked');
    };
    const chkCustomer_OnClick = () => {
        console.log('chkCustomer_OnClick clicked');
    };
    const chkFMNM_OnClick = () => {
        console.log('chkFMNM_OnClick clicked');
    };
    const chkFMResidentno_OnClick = () => {
        console.log('chkFMResidentno_OnClick clicked');
    };
    const chkFMStartDate_OnClick = () => {
        console.log('chkFMStartDate_OnClick clicked');
    };
    const chkFeeYYMM_OnClick = () => {
        console.log('chkFeeYYMM_OnClick clicked');
    };
    const chkFireCenter_OnClick = () => {
        console.log('chkFireCenter_OnClick clicked');
    };
    const chkFireManager_OnClick = () => {
        console.log('chkFireManager_OnClick clicked');
    };
    const chkHPTEL_OnClick = () => {
        console.log('chkHPTEL_OnClick clicked');
    };
    const chkHopeAddr_OnClick = () => {
        console.log('chkHopeAddr_OnClick clicked');
    };
    const chkPersonGubun_OnClick = () => {
        console.log('chkPersonGubun_OnClick clicked');
    };
    const chkPostPlace_OnClick = () => {
        console.log('chkPostPlace_OnClick clicked');
    };
    const chkRegYYMM_OnClick = () => {
        console.log('chkRegYYMM_OnClick clicked');
    };
    const chkTel_OnClick = () => {
        console.log('chkTel_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_oBizCd,
        ds_oCourse,
        ds_oRegion,
        ds_oJibu,
        ds_oDetailCourse,
        ds_oPersonGubun,
        ds_oAddrGubun,
        ds_oAllObject,
        ds_ioBuildingInfo,
        ds_ioCustomerInfo,
        ds_ioManagerInfo,
        ds_ioAdditionInfo,
        ds_oAddr,
        ds_oBuildingSeq,
        ds_oCustomerSeq,
        ds_oFireManagerSeq,
        ds_ioCustomerInfoTmp,
        ds_ioManagerInfoTmp,
        ds_oBnmCode,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oCustomerStatus,
        ds_ioMatchInfo,
        ds_ioBizCdMatch,
        ds_oFireBonbuCd,
        ds_ioManager,
        ds_oMemberStat,
        ds_ioOldCustomerInfo,
        ds_ioOldManagerInfo,
        ds_oManagerList,
        ds_MemberGubun,
        ds_oStatus,
        ds_ioOtherLicenseInfo,
        ds_oOverBizProc,
        ds_ioNotOverBizFireManager,
        ds_ioIsOverBizFireManager,
        ds_ioOldBuildingInfo,
        ds_ioDanMnfctretcInfo,
        ds_ioDanManagerInfo,
        ds_ioDangerInfo,
        ds_ioDangerInfoSave,
        ds_iCustomerModifyHistory,
        ds_ioLicenseInfo,
        ds_oModifyColumnList,
        ds_oAddr2,
        ds_iRoadConv,
        ds_oRoadConv,
        ds_ioPersoninfoHP,
        ds_oPersonInfoAll,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_medHopeRoadZipCode,
        setIsVisible_medHopeRoadZipCode,
        isVisible_edHopeRoadAddr2,
        setIsVisible_edHopeRoadAddr2,
        isVisible_edHopeRoadAddr1,
        setIsVisible_edHopeRoadAddr1,
        isVisible_Shape9,
        setIsVisible_Shape9,
        isVisible_medRoadZipCode,
        setIsVisible_medRoadZipCode,
        isVisible_edRoadAddr2,
        setIsVisible_edRoadAddr2,
        isVisible_edRoadAddr1,
        setIsVisible_edRoadAddr1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbFPISDanNm,
        setIsVisible_lbFPISDanNm,
        isVisible_edFPISBuildingNm,
        setIsVisible_edFPISBuildingNm,
        isVisible_lbSystemInfo,
        setIsVisible_lbSystemInfo,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_lbFPISFireCenter,
        setIsVisible_lbFPISFireCenter,
        isVisible_EdFPISFireCenter,
        setIsVisible_EdFPISFireCenter,
        isVisible_lbFPISCourse,
        setIsVisible_lbFPISCourse,
        isVisible_EdFPISCourse,
        setIsVisible_EdFPISCourse,
        isVisible_lbFPISDetailCourse,
        setIsVisible_lbFPISDetailCourse,
        isVisible_EdFPISDetailCourse,
        setIsVisible_EdFPISDetailCourse,
        isVisible_Shape6,
        setIsVisible_Shape6,
        isVisible_lbFPISFireManager,
        setIsVisible_lbFPISFireManager,
        isVisible_gdFPISFireManager,
        setIsVisible_gdFPISFireManager,
        isVisible_lbFPISLicense1,
        setIsVisible_lbFPISLicense1,
        isVisible_gdFPISLicense,
        setIsVisible_gdFPISLicense,
        isVisible_lbFPISLicense2,
        setIsVisible_lbFPISLicense2,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_chkBuilding,
        setIsVisible_chkBuilding,
        isVisible_chkBNM,
        setIsVisible_chkBNM,
        isVisible_chkAddr,
        setIsVisible_chkAddr,
        isVisible_chkFireCenter,
        setIsVisible_chkFireCenter,
        isVisible_chkTel,
        setIsVisible_chkTel,
        isVisible_edBNM,
        setIsVisible_edBNM,
        isVisible_edAddr1,
        setIsVisible_edAddr1,
        isVisible_medZipCode,
        setIsVisible_medZipCode,
        isVisible_edAddr2,
        setIsVisible_edAddr2,
        isVisible_btnSearchZipCode1,
        setIsVisible_btnSearchZipCode1,
        isVisible_cbxStation,
        setIsVisible_cbxStation,
        isVisible_cbxCenter,
        setIsVisible_cbxCenter,
        isVisible_cbxBonbu,
        setIsVisible_cbxBonbu,
        isVisible_edTel,
        setIsVisible_edTel,
        isVisible_medHopeZipCode,
        setIsVisible_medHopeZipCode,
        isVisible_edHopeAddr1,
        setIsVisible_edHopeAddr1,
        isVisible_edHopeAddr2,
        setIsVisible_edHopeAddr2,
        isVisible_cbxPostGubun2,
        setIsVisible_cbxPostGubun2,
        isVisible_btnSearchZipCode2,
        setIsVisible_btnSearchZipCode2,
        isVisible_medRegYYMM,
        setIsVisible_medRegYYMM,
        isVisible_medFeeYYMM,
        setIsVisible_medFeeYYMM,
        isVisible_cbxPersonGubun,
        setIsVisible_cbxPersonGubun,
        isVisible_chkCustomer,
        setIsVisible_chkCustomer,
        isVisible_chkRegYYMM,
        setIsVisible_chkRegYYMM,
        isVisible_chkFeeYYMM,
        setIsVisible_chkFeeYYMM,
        isVisible_chkHopeAddr,
        setIsVisible_chkHopeAddr,
        isVisible_cbxCustomerStatus,
        setIsVisible_cbxCustomerStatus,
        isVisible_Shape10,
        setIsVisible_Shape10,
        isVisible_edFMNM,
        setIsVisible_edFMNM,
        isVisible_medFMResidentno,
        setIsVisible_medFMResidentno,
        isVisible_calFMStartDate,
        setIsVisible_calFMStartDate,
        isVisible_lbFMEndStatus,
        setIsVisible_lbFMEndStatus,
        isVisible_calFMEndDate,
        setIsVisible_calFMEndDate,
        isVisible_chkFMNM,
        setIsVisible_chkFMNM,
        isVisible_chkFMResidentno,
        setIsVisible_chkFMResidentno,
        isVisible_chkFMStartDate,
        setIsVisible_chkFMStartDate,
        isVisible_Shape11,
        setIsVisible_Shape11,
        isVisible_chkFireManager,
        setIsVisible_chkFireManager,
        isVisible_chkPersonGubun,
        setIsVisible_chkPersonGubun,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnApply,
        setIsVisible_btnApply,
        isVisible_btnBuildingSearch,
        setIsVisible_btnBuildingSearch,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_chkRegion,
        setIsVisible_chkRegion,
        isVisible_cbxRegion,
        setIsVisible_cbxRegion,
        isVisible_chkDetailCourse,
        setIsVisible_chkDetailCourse,
        isVisible_cbxDetailCourse,
        setIsVisible_cbxDetailCourse,
        isVisible_chkCourse,
        setIsVisible_chkCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbCNO,
        setIsVisible_lbCNO,
        isVisible_medCNO,
        setIsVisible_medCNO,
        isVisible_btnAuthResidentNo,
        setIsVisible_btnAuthResidentNo,
        isVisible_btnFPISInfo,
        setIsVisible_btnFPISInfo,
        isVisible_lbInStatus,
        setIsVisible_lbInStatus,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_chkoldBuildingEndProc,
        setIsVisible_chkoldBuildingEndProc,
        isVisible_lbFMEndStatustitle,
        setIsVisible_lbFMEndStatustitle,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_lbFPISAddr,
        setIsVisible_lbFPISAddr,
        isVisible_edFPISAddr1,
        setIsVisible_edFPISAddr1,
        isVisible_medFPISZipCode,
        setIsVisible_medFPISZipCode,
        isVisible_edFPISAddr2,
        setIsVisible_edFPISAddr2,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_lbITLNO,
        setIsVisible_lbITLNO,
        isVisible_edITL_NO,
        setIsVisible_edITL_NO,
        isVisible_lbPRMISNNO,
        setIsVisible_lbPRMISNNO,
        isVisible_Edit1,
        setIsVisible_Edit1,
        isVisible_Edit2,
        setIsVisible_Edit2,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_Edit3,
        setIsVisible_Edit3,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_lbINSTLR_CPR_NM,
        setIsVisible_lbINSTLR_CPR_NM,
        isVisible_edINSTLR_CPR_NM,
        setIsVisible_edINSTLR_CPR_NM,
        isVisible_lbINSTLR_NM,
        setIsVisible_lbINSTLR_NM,
        isVisible_edINSTLR_NM,
        setIsVisible_edINSTLR_NM,
        isVisible_lbFPISTel,
        setIsVisible_lbFPISTel,
        isVisible_edFPISTel,
        setIsVisible_edFPISTel,
        isVisible_lbFPISINSTLRAddr,
        setIsVisible_lbFPISINSTLRAddr,
        isVisible_edFPISINSTLRAddr1,
        setIsVisible_edFPISINSTLRAddr1,
        isVisible_medFPISINSTLRZipCode,
        setIsVisible_medFPISINSTLRZipCode,
        isVisible_edFPISINSTLRAddr2,
        setIsVisible_edFPISINSTLRAddr2,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_gdDanger,
        setIsVisible_gdDanger,
        isVisible_chkPostPlace,
        setIsVisible_chkPostPlace,
        isVisible_edPostPlace,
        setIsVisible_edPostPlace,
        isVisible_cbxAddrGubun,
        setIsVisible_cbxAddrGubun,
        isVisible_cbxHopeAddrGubun,
        setIsVisible_cbxHopeAddrGubun,
        isVisible_chkHPTEL,
        setIsVisible_chkHPTEL,
        isVisible_edPTel,
        setIsVisible_edPTel,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_medPersonKey,
        setIsVisible_medPersonKey,
        isVisible_btnLicenseList,
        setIsVisible_btnLicenseList,
        btnApply_OnClick,
        btnAuthResidentNo_OnClick,
        btnBuildingSearch_OnClick,
        btnFPISInfo_OnClick,
        btnLicenseList_OnClick,
        btnSearchZipCode1_OnClick,
        btnSearchZipCode2_OnClick,
        chkAddr_OnClick,
        chkBNM_OnClick,
        chkBuilding_OnClick,
        chkCustomer_OnClick,
        chkFMNM_OnClick,
        chkFMResidentno_OnClick,
        chkFMStartDate_OnClick,
        chkFeeYYMM_OnClick,
        chkFireCenter_OnClick,
        chkFireManager_OnClick,
        chkHPTEL_OnClick,
        chkHopeAddr_OnClick,
        chkPersonGubun_OnClick,
        chkPostPlace_OnClick,
        chkRegYYMM_OnClick,
        chkTel_OnClick,
        lfn_End,
        lfn_Save,
    };
};