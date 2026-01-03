// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_oRegion, Ids_oJibu, Ids_oDetailCourse, Ids_oAllObject, Ids_ioBuildingInfo, Ids_ioCustomerInfo, Ids_oAddr, Ids_oBuildingSeq, Ids_ioCustomerInfoTmp, Ids_oBnmCode, Ids_oFireCd, Ids_oFireCenterCd, Ids_oFireBonbuCd, Ids_ioNotOverBizFireManager, Ids_ioIsOverBizFireManager, Ids_ioOldBuildingInfo, Ids_ioDanManagerInfo, Ids_iCustomerModifyHistory, Ids_oModifyColumnList, Ids_ioFPISDanTankInfo, Ids_oAddrGubun, Ids_ioOldCustomerInfo, Ids_ioTankInfo, Ids_ioOldTankInfo } from './Frmcust6301PDataConnectionTankManageOldSaveData';

export const useFrmcust6301PDataConnectionTankManageOldSave = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_oAllObject, setds_oAllObject] = useState<Ids_oAllObject[]>([]);
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_ioCustomerInfo, setds_ioCustomerInfo] = useState<Ids_ioCustomerInfo[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oBuildingSeq, setds_oBuildingSeq] = useState<Ids_oBuildingSeq[]>([]);
    const [ds_ioCustomerInfoTmp, setds_ioCustomerInfoTmp] = useState<Ids_ioCustomerInfoTmp[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oFireBonbuCd, setds_oFireBonbuCd] = useState<Ids_oFireBonbuCd[]>([]);
    const [ds_ioNotOverBizFireManager, setds_ioNotOverBizFireManager] = useState<Ids_ioNotOverBizFireManager[]>([]);
    const [ds_ioIsOverBizFireManager, setds_ioIsOverBizFireManager] = useState<Ids_ioIsOverBizFireManager[]>([]);
    const [ds_ioOldBuildingInfo, setds_ioOldBuildingInfo] = useState<Ids_ioOldBuildingInfo[]>([]);
    const [ds_ioDanManagerInfo, setds_ioDanManagerInfo] = useState<Ids_ioDanManagerInfo[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_oModifyColumnList, setds_oModifyColumnList] = useState<Ids_oModifyColumnList[]>([]);
    const [ds_ioFPISDanTankInfo, setds_ioFPISDanTankInfo] = useState<Ids_ioFPISDanTankInfo[]>([]);
    const [ds_oAddrGubun, setds_oAddrGubun] = useState<Ids_oAddrGubun[]>([]);
    const [ds_ioOldCustomerInfo, setds_ioOldCustomerInfo] = useState<Ids_ioOldCustomerInfo[]>([]);
    const [ds_ioTankInfo, setds_ioTankInfo] = useState<Ids_ioTankInfo[]>([]);
    const [ds_ioOldTankInfo, setds_ioOldTankInfo] = useState<Ids_ioOldTankInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape9, setRawVisible_Shape9] = useState(true);
    const [rawVisible_Shape11, setRawVisible_Shape11] = useState(true);
    const [rawVisible_medParkRoadZipCode, setRawVisible_medParkRoadZipCode] = useState(true);
    const [rawVisible_medInstlrRoadZipCode, setRawVisible_medInstlrRoadZipCode] = useState(true);
    const [rawVisible_edInstlrRoadAddr2, setRawVisible_edInstlrRoadAddr2] = useState(true);
    const [rawVisible_edInstlrRoadAddr1, setRawVisible_edInstlrRoadAddr1] = useState(true);
    const [rawVisible_edParkRoadAddr2, setRawVisible_edParkRoadAddr2] = useState(true);
    const [rawVisible_edParkRoadAddr1, setRawVisible_edParkRoadAddr1] = useState(true);
    const [rawVisible_medRoadZipCode, setRawVisible_medRoadZipCode] = useState(true);
    const [rawVisible_edRoadAddr1, setRawVisible_edRoadAddr1] = useState(true);
    const [rawVisible_edRoadAddr2, setRawVisible_edRoadAddr2] = useState(true);
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
    const [rawVisible_btnFPISInfo, setRawVisible_btnFPISInfo] = useState(true);
    const [rawVisible_lbInStatus, setRawVisible_lbInStatus] = useState(true);
    const [rawVisible_lbFPISAddr, setRawVisible_lbFPISAddr] = useState(true);
    const [rawVisible_edFPISAddr1, setRawVisible_edFPISAddr1] = useState(true);
    const [rawVisible_medFPISZipCode, setRawVisible_medFPISZipCode] = useState(true);
    const [rawVisible_edFPISAddr2, setRawVisible_edFPISAddr2] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_lbITLNO, setRawVisible_lbITLNO] = useState(true);
    const [rawVisible_edITL_NO, setRawVisible_edITL_NO] = useState(true);
    const [rawVisible_lbPRMISNNO, setRawVisible_lbPRMISNNO] = useState(true);
    const [rawVisible_edFPISPrmisn_No, setRawVisible_edFPISPrmisn_No] = useState(true);
    const [rawVisible_edFPISCarYear, setRawVisible_edFPISCarYear] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_edFPISCarNo, setRawVisible_edFPISCarNo] = useState(true);
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
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_edFPISTANK_KND, setRawVisible_edFPISTANK_KND] = useState(true);
    const [rawVisible_edCarNo, setRawVisible_edCarNo] = useState(true);
    const [rawVisible_edCarYear, setRawVisible_edCarYear] = useState(true);
    const [rawVisible_edPerMissionNo, setRawVisible_edPerMissionNo] = useState(true);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const [rawVisible_radPostGubun, setRawVisible_radPostGubun] = useState(true);
    const [rawVisible_medParkZipCode, setRawVisible_medParkZipCode] = useState(true);
    const [rawVisible_btnSearchParkZipCode, setRawVisible_btnSearchParkZipCode] = useState(true);
    const [rawVisible_edParkAddr1, setRawVisible_edParkAddr1] = useState(true);
    const [rawVisible_edParkAddr2, setRawVisible_edParkAddr2] = useState(true);
    const [rawVisible_medInstlrZipCode, setRawVisible_medInstlrZipCode] = useState(true);
    const [rawVisible_btnSearchInstlrZipCode, setRawVisible_btnSearchInstlrZipCode] = useState(true);
    const [rawVisible_edInstlrAddr1, setRawVisible_edInstlrAddr1] = useState(true);
    const [rawVisible_edInstlrAddr2, setRawVisible_edInstlrAddr2] = useState(true);
    const [rawVisible_chkCarNo, setRawVisible_chkCarNo] = useState(true);
    const [rawVisible_chkCarYear, setRawVisible_chkCarYear] = useState(true);
    const [rawVisible_chkPerMissionNo, setRawVisible_chkPerMissionNo] = useState(true);
    const [rawVisible_chkRemark, setRawVisible_chkRemark] = useState(true);
    const [rawVisible_chkParkPlace, setRawVisible_chkParkPlace] = useState(true);
    const [rawVisible_chkInstlrAddr, setRawVisible_chkInstlrAddr] = useState(true);
    const [rawVisible_chkTank, setRawVisible_chkTank] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cbxAddrGubun, setRawVisible_cbxAddrGubun] = useState(true);
    const [rawVisible_cbxHopeParkAddrGubun, setRawVisible_cbxHopeParkAddrGubun] = useState(true);
    const [rawVisible_cbxHopeInstlrAddrGubun, setRawVisible_cbxHopeInstlrAddrGubun] = useState(true);
    const isVisible_Shape9 = rawVisible_Shape9;
    const setIsVisible_Shape9 = setRawVisible_Shape9;
    const isVisible_Shape11 = rawVisible_Shape11;
    const setIsVisible_Shape11 = setRawVisible_Shape11;
    const isVisible_medParkRoadZipCode = rawVisible_medParkRoadZipCode && rawVisible_Shape11;
    const setIsVisible_medParkRoadZipCode = setRawVisible_medParkRoadZipCode;
    const isVisible_medInstlrRoadZipCode = rawVisible_medInstlrRoadZipCode && rawVisible_Shape11;
    const setIsVisible_medInstlrRoadZipCode = setRawVisible_medInstlrRoadZipCode;
    const isVisible_edInstlrRoadAddr2 = rawVisible_edInstlrRoadAddr2 && rawVisible_Shape11;
    const setIsVisible_edInstlrRoadAddr2 = setRawVisible_edInstlrRoadAddr2;
    const isVisible_edInstlrRoadAddr1 = rawVisible_edInstlrRoadAddr1 && rawVisible_Shape11;
    const setIsVisible_edInstlrRoadAddr1 = setRawVisible_edInstlrRoadAddr1;
    const isVisible_edParkRoadAddr2 = rawVisible_edParkRoadAddr2 && rawVisible_Shape11;
    const setIsVisible_edParkRoadAddr2 = setRawVisible_edParkRoadAddr2;
    const isVisible_edParkRoadAddr1 = rawVisible_edParkRoadAddr1 && rawVisible_Shape11;
    const setIsVisible_edParkRoadAddr1 = setRawVisible_edParkRoadAddr1;
    const isVisible_medRoadZipCode = rawVisible_medRoadZipCode && rawVisible_Shape9;
    const setIsVisible_medRoadZipCode = setRawVisible_medRoadZipCode;
    const isVisible_edRoadAddr1 = rawVisible_edRoadAddr1 && rawVisible_Shape9;
    const setIsVisible_edRoadAddr1 = setRawVisible_edRoadAddr1;
    const isVisible_edRoadAddr2 = rawVisible_edRoadAddr2 && rawVisible_Shape9;
    const setIsVisible_edRoadAddr2 = setRawVisible_edRoadAddr2;
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
    const isVisible_btnFPISInfo = rawVisible_btnFPISInfo;
    const setIsVisible_btnFPISInfo = setRawVisible_btnFPISInfo;
    const isVisible_lbInStatus = rawVisible_lbInStatus;
    const setIsVisible_lbInStatus = setRawVisible_lbInStatus;
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
    const isVisible_edFPISPrmisn_No = rawVisible_edFPISPrmisn_No && rawVisible_Shape3;
    const setIsVisible_edFPISPrmisn_No = setRawVisible_edFPISPrmisn_No;
    const isVisible_edFPISCarYear = rawVisible_edFPISCarYear && rawVisible_Shape3;
    const setIsVisible_edFPISCarYear = setRawVisible_edFPISCarYear;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape3;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape3;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_edFPISCarNo = rawVisible_edFPISCarNo && rawVisible_Shape3;
    const setIsVisible_edFPISCarNo = setRawVisible_edFPISCarNo;
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
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape3;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_edFPISTANK_KND = rawVisible_edFPISTANK_KND && rawVisible_Shape3;
    const setIsVisible_edFPISTANK_KND = setRawVisible_edFPISTANK_KND;
    const isVisible_edCarNo = rawVisible_edCarNo && rawVisible_Shape11;
    const setIsVisible_edCarNo = setRawVisible_edCarNo;
    const isVisible_edCarYear = rawVisible_edCarYear && rawVisible_Shape11;
    const setIsVisible_edCarYear = setRawVisible_edCarYear;
    const isVisible_edPerMissionNo = rawVisible_edPerMissionNo && rawVisible_Shape11;
    const setIsVisible_edPerMissionNo = setRawVisible_edPerMissionNo;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_Shape11;
    const setIsVisible_edRemark = setRawVisible_edRemark;
    const isVisible_radPostGubun = rawVisible_radPostGubun && rawVisible_Shape11;
    const setIsVisible_radPostGubun = setRawVisible_radPostGubun;
    const isVisible_medParkZipCode = rawVisible_medParkZipCode && rawVisible_Shape11;
    const setIsVisible_medParkZipCode = setRawVisible_medParkZipCode;
    const isVisible_btnSearchParkZipCode = rawVisible_btnSearchParkZipCode && rawVisible_Shape11;
    const setIsVisible_btnSearchParkZipCode = setRawVisible_btnSearchParkZipCode;
    const isVisible_edParkAddr1 = rawVisible_edParkAddr1 && rawVisible_Shape11;
    const setIsVisible_edParkAddr1 = setRawVisible_edParkAddr1;
    const isVisible_edParkAddr2 = rawVisible_edParkAddr2 && rawVisible_Shape11;
    const setIsVisible_edParkAddr2 = setRawVisible_edParkAddr2;
    const isVisible_medInstlrZipCode = rawVisible_medInstlrZipCode;
    const setIsVisible_medInstlrZipCode = setRawVisible_medInstlrZipCode;
    const isVisible_btnSearchInstlrZipCode = rawVisible_btnSearchInstlrZipCode && rawVisible_Shape11;
    const setIsVisible_btnSearchInstlrZipCode = setRawVisible_btnSearchInstlrZipCode;
    const isVisible_edInstlrAddr1 = rawVisible_edInstlrAddr1 && rawVisible_Shape11;
    const setIsVisible_edInstlrAddr1 = setRawVisible_edInstlrAddr1;
    const isVisible_edInstlrAddr2 = rawVisible_edInstlrAddr2 && rawVisible_Shape11;
    const setIsVisible_edInstlrAddr2 = setRawVisible_edInstlrAddr2;
    const isVisible_chkCarNo = rawVisible_chkCarNo && rawVisible_Shape11;
    const setIsVisible_chkCarNo = setRawVisible_chkCarNo;
    const isVisible_chkCarYear = rawVisible_chkCarYear && rawVisible_Shape11;
    const setIsVisible_chkCarYear = setRawVisible_chkCarYear;
    const isVisible_chkPerMissionNo = rawVisible_chkPerMissionNo && rawVisible_Shape11;
    const setIsVisible_chkPerMissionNo = setRawVisible_chkPerMissionNo;
    const isVisible_chkRemark = rawVisible_chkRemark && rawVisible_Shape11;
    const setIsVisible_chkRemark = setRawVisible_chkRemark;
    const isVisible_chkParkPlace = rawVisible_chkParkPlace && rawVisible_Shape11;
    const setIsVisible_chkParkPlace = setRawVisible_chkParkPlace;
    const isVisible_chkInstlrAddr = rawVisible_chkInstlrAddr && rawVisible_Shape11;
    const setIsVisible_chkInstlrAddr = setRawVisible_chkInstlrAddr;
    const isVisible_chkTank = rawVisible_chkTank;
    const setIsVisible_chkTank = setRawVisible_chkTank;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape11;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cbxAddrGubun = rawVisible_cbxAddrGubun && rawVisible_Shape9;
    const setIsVisible_cbxAddrGubun = setRawVisible_cbxAddrGubun;
    const isVisible_cbxHopeParkAddrGubun = rawVisible_cbxHopeParkAddrGubun && rawVisible_Shape11;
    const setIsVisible_cbxHopeParkAddrGubun = setRawVisible_cbxHopeParkAddrGubun;
    const isVisible_cbxHopeInstlrAddrGubun = rawVisible_cbxHopeInstlrAddrGubun && rawVisible_Shape11;
    const setIsVisible_cbxHopeInstlrAddrGubun = setRawVisible_cbxHopeInstlrAddrGubun;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_oDetailCourse([]);
            setds_oAllObject([]);
            setds_ioBuildingInfo([]);
            setds_ioCustomerInfo([]);
            setds_oAddr([]);
            setds_oBuildingSeq([]);
            setds_ioCustomerInfoTmp([]);
            setds_oBnmCode([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oFireBonbuCd([]);
            setds_ioNotOverBizFireManager([]);
            setds_ioIsOverBizFireManager([]);
            setds_ioOldBuildingInfo([]);
            setds_ioDanManagerInfo([]);
            setds_iCustomerModifyHistory([]);
            setds_oModifyColumnList([]);
            setds_ioFPISDanTankInfo([]);
            setds_oAddrGubun([]);
            setds_ioOldCustomerInfo([]);
            setds_ioTankInfo([]);
            setds_ioOldTankInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnApply_OnClick = () => {
        console.log('btnApply_OnClick clicked');
    };
    const btnBuildingSearch_OnClick = () => {
        console.log('btnBuildingSearch_OnClick clicked');
    };
    const btnFPISInfo_OnClick = () => {
        console.log('btnFPISInfo_OnClick clicked');
    };
    const btnSearchInstlrZipCode_OnClick = () => {
        console.log('btnSearchInstlrZipCode_OnClick clicked');
    };
    const btnSearchParkZipCode_OnClick = () => {
        console.log('btnSearchParkZipCode_OnClick clicked');
    };
    const btnSearchZipCode1_OnClick = () => {
        console.log('btnSearchZipCode1_OnClick clicked');
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
    const chkCarYear_OnClick = () => {
        console.log('chkCarYear_OnClick clicked');
    };
    const chkFireCenter_OnClick = () => {
        console.log('chkFireCenter_OnClick clicked');
    };
    const chkInstlrAddr_OnClick = () => {
        console.log('chkInstlrAddr_OnClick clicked');
    };
    const chkParkPlace_OnClick = () => {
        console.log('chkParkPlace_OnClick clicked');
    };
    const chkPerMissionNo_OnClick = () => {
        console.log('chkPerMissionNo_OnClick clicked');
    };
    const chkRemark_OnClick = () => {
        console.log('chkRemark_OnClick clicked');
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
        ds_oCourse,
        ds_oRegion,
        ds_oJibu,
        ds_oDetailCourse,
        ds_oAllObject,
        ds_ioBuildingInfo,
        ds_ioCustomerInfo,
        ds_oAddr,
        ds_oBuildingSeq,
        ds_ioCustomerInfoTmp,
        ds_oBnmCode,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oFireBonbuCd,
        ds_ioNotOverBizFireManager,
        ds_ioIsOverBizFireManager,
        ds_ioOldBuildingInfo,
        ds_ioDanManagerInfo,
        ds_iCustomerModifyHistory,
        ds_oModifyColumnList,
        ds_ioFPISDanTankInfo,
        ds_oAddrGubun,
        ds_ioOldCustomerInfo,
        ds_ioTankInfo,
        ds_ioOldTankInfo,
        isVisible_Shape9,
        setIsVisible_Shape9,
        isVisible_Shape11,
        setIsVisible_Shape11,
        isVisible_medParkRoadZipCode,
        setIsVisible_medParkRoadZipCode,
        isVisible_medInstlrRoadZipCode,
        setIsVisible_medInstlrRoadZipCode,
        isVisible_edInstlrRoadAddr2,
        setIsVisible_edInstlrRoadAddr2,
        isVisible_edInstlrRoadAddr1,
        setIsVisible_edInstlrRoadAddr1,
        isVisible_edParkRoadAddr2,
        setIsVisible_edParkRoadAddr2,
        isVisible_edParkRoadAddr1,
        setIsVisible_edParkRoadAddr1,
        isVisible_medRoadZipCode,
        setIsVisible_medRoadZipCode,
        isVisible_edRoadAddr1,
        setIsVisible_edRoadAddr1,
        isVisible_edRoadAddr2,
        setIsVisible_edRoadAddr2,
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
        isVisible_btnFPISInfo,
        setIsVisible_btnFPISInfo,
        isVisible_lbInStatus,
        setIsVisible_lbInStatus,
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
        isVisible_edFPISPrmisn_No,
        setIsVisible_edFPISPrmisn_No,
        isVisible_edFPISCarYear,
        setIsVisible_edFPISCarYear,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edFPISCarNo,
        setIsVisible_edFPISCarNo,
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
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edFPISTANK_KND,
        setIsVisible_edFPISTANK_KND,
        isVisible_edCarNo,
        setIsVisible_edCarNo,
        isVisible_edCarYear,
        setIsVisible_edCarYear,
        isVisible_edPerMissionNo,
        setIsVisible_edPerMissionNo,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_radPostGubun,
        setIsVisible_radPostGubun,
        isVisible_medParkZipCode,
        setIsVisible_medParkZipCode,
        isVisible_btnSearchParkZipCode,
        setIsVisible_btnSearchParkZipCode,
        isVisible_edParkAddr1,
        setIsVisible_edParkAddr1,
        isVisible_edParkAddr2,
        setIsVisible_edParkAddr2,
        isVisible_medInstlrZipCode,
        setIsVisible_medInstlrZipCode,
        isVisible_btnSearchInstlrZipCode,
        setIsVisible_btnSearchInstlrZipCode,
        isVisible_edInstlrAddr1,
        setIsVisible_edInstlrAddr1,
        isVisible_edInstlrAddr2,
        setIsVisible_edInstlrAddr2,
        isVisible_chkCarNo,
        setIsVisible_chkCarNo,
        isVisible_chkCarYear,
        setIsVisible_chkCarYear,
        isVisible_chkPerMissionNo,
        setIsVisible_chkPerMissionNo,
        isVisible_chkRemark,
        setIsVisible_chkRemark,
        isVisible_chkParkPlace,
        setIsVisible_chkParkPlace,
        isVisible_chkInstlrAddr,
        setIsVisible_chkInstlrAddr,
        isVisible_chkTank,
        setIsVisible_chkTank,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cbxAddrGubun,
        setIsVisible_cbxAddrGubun,
        isVisible_cbxHopeParkAddrGubun,
        setIsVisible_cbxHopeParkAddrGubun,
        isVisible_cbxHopeInstlrAddrGubun,
        setIsVisible_cbxHopeInstlrAddrGubun,
        btnApply_OnClick,
        btnBuildingSearch_OnClick,
        btnFPISInfo_OnClick,
        btnSearchInstlrZipCode_OnClick,
        btnSearchParkZipCode_OnClick,
        btnSearchZipCode1_OnClick,
        chkAddr_OnClick,
        chkBNM_OnClick,
        chkBuilding_OnClick,
        chkCarYear_OnClick,
        chkFireCenter_OnClick,
        chkInstlrAddr_OnClick,
        chkParkPlace_OnClick,
        chkPerMissionNo_OnClick,
        chkRemark_OnClick,
        chkTel_OnClick,
        lfn_End,
        lfn_Save,
    };
};