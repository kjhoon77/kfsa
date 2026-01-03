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
    const [isVisible_Shape9, setIsVisible_Shape9] = useState(true);
    const [isVisible_Shape11, setIsVisible_Shape11] = useState(true);
    const [isVisible_medParkRoadZipCode, setIsVisible_medParkRoadZipCode] = useState(true);
    const [isVisible_medInstlrRoadZipCode, setIsVisible_medInstlrRoadZipCode] = useState(true);
    const [isVisible_edInstlrRoadAddr2, setIsVisible_edInstlrRoadAddr2] = useState(true);
    const [isVisible_edInstlrRoadAddr1, setIsVisible_edInstlrRoadAddr1] = useState(true);
    const [isVisible_edParkRoadAddr2, setIsVisible_edParkRoadAddr2] = useState(true);
    const [isVisible_edParkRoadAddr1, setIsVisible_edParkRoadAddr1] = useState(true);
    const [isVisible_medRoadZipCode, setIsVisible_medRoadZipCode] = useState(true);
    const [isVisible_edRoadAddr1, setIsVisible_edRoadAddr1] = useState(true);
    const [isVisible_edRoadAddr2, setIsVisible_edRoadAddr2] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbFPISDanNm, setIsVisible_lbFPISDanNm] = useState(true);
    const [isVisible_edFPISBuildingNm, setIsVisible_edFPISBuildingNm] = useState(true);
    const [isVisible_lbSystemInfo, setIsVisible_lbSystemInfo] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_lbFPISFireCenter, setIsVisible_lbFPISFireCenter] = useState(true);
    const [isVisible_EdFPISFireCenter, setIsVisible_EdFPISFireCenter] = useState(true);
    const [isVisible_lbFPISCourse, setIsVisible_lbFPISCourse] = useState(true);
    const [isVisible_EdFPISCourse, setIsVisible_EdFPISCourse] = useState(true);
    const [isVisible_lbFPISDetailCourse, setIsVisible_lbFPISDetailCourse] = useState(true);
    const [isVisible_EdFPISDetailCourse, setIsVisible_EdFPISDetailCourse] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_chkBuilding, setIsVisible_chkBuilding] = useState(true);
    const [isVisible_chkBNM, setIsVisible_chkBNM] = useState(true);
    const [isVisible_chkAddr, setIsVisible_chkAddr] = useState(true);
    const [isVisible_chkFireCenter, setIsVisible_chkFireCenter] = useState(true);
    const [isVisible_chkTel, setIsVisible_chkTel] = useState(true);
    const [isVisible_edBNM, setIsVisible_edBNM] = useState(true);
    const [isVisible_edAddr1, setIsVisible_edAddr1] = useState(true);
    const [isVisible_medZipCode, setIsVisible_medZipCode] = useState(true);
    const [isVisible_edAddr2, setIsVisible_edAddr2] = useState(true);
    const [isVisible_btnSearchZipCode1, setIsVisible_btnSearchZipCode1] = useState(true);
    const [isVisible_cbxStation, setIsVisible_cbxStation] = useState(true);
    const [isVisible_cbxCenter, setIsVisible_cbxCenter] = useState(true);
    const [isVisible_cbxBonbu, setIsVisible_cbxBonbu] = useState(true);
    const [isVisible_edTel, setIsVisible_edTel] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnApply, setIsVisible_btnApply] = useState(true);
    const [isVisible_btnBuildingSearch, setIsVisible_btnBuildingSearch] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_chkRegion, setIsVisible_chkRegion] = useState(true);
    const [isVisible_cbxRegion, setIsVisible_cbxRegion] = useState(true);
    const [isVisible_chkDetailCourse, setIsVisible_chkDetailCourse] = useState(true);
    const [isVisible_cbxDetailCourse, setIsVisible_cbxDetailCourse] = useState(true);
    const [isVisible_chkCourse, setIsVisible_chkCourse] = useState(true);
    const [isVisible_cbxCourse, setIsVisible_cbxCourse] = useState(true);
    const [isVisible_lbCNO, setIsVisible_lbCNO] = useState(true);
    const [isVisible_medCNO, setIsVisible_medCNO] = useState(true);
    const [isVisible_btnFPISInfo, setIsVisible_btnFPISInfo] = useState(true);
    const [isVisible_lbInStatus, setIsVisible_lbInStatus] = useState(true);
    const [isVisible_lbFPISAddr, setIsVisible_lbFPISAddr] = useState(true);
    const [isVisible_edFPISAddr1, setIsVisible_edFPISAddr1] = useState(true);
    const [isVisible_medFPISZipCode, setIsVisible_medFPISZipCode] = useState(true);
    const [isVisible_edFPISAddr2, setIsVisible_edFPISAddr2] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_Static17, setIsVisible_Static17] = useState(true);
    const [isVisible_lbITLNO, setIsVisible_lbITLNO] = useState(true);
    const [isVisible_edITL_NO, setIsVisible_edITL_NO] = useState(true);
    const [isVisible_lbPRMISNNO, setIsVisible_lbPRMISNNO] = useState(true);
    const [isVisible_edFPISPrmisn_No, setIsVisible_edFPISPrmisn_No] = useState(true);
    const [isVisible_edFPISCarYear, setIsVisible_edFPISCarYear] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_edFPISCarNo, setIsVisible_edFPISCarNo] = useState(true);
    const [isVisible_Shape5, setIsVisible_Shape5] = useState(true);
    const [isVisible_lbINSTLR_CPR_NM, setIsVisible_lbINSTLR_CPR_NM] = useState(true);
    const [isVisible_edINSTLR_CPR_NM, setIsVisible_edINSTLR_CPR_NM] = useState(true);
    const [isVisible_lbINSTLR_NM, setIsVisible_lbINSTLR_NM] = useState(true);
    const [isVisible_edINSTLR_NM, setIsVisible_edINSTLR_NM] = useState(true);
    const [isVisible_lbFPISTel, setIsVisible_lbFPISTel] = useState(true);
    const [isVisible_edFPISTel, setIsVisible_edFPISTel] = useState(true);
    const [isVisible_lbFPISINSTLRAddr, setIsVisible_lbFPISINSTLRAddr] = useState(true);
    const [isVisible_edFPISINSTLRAddr1, setIsVisible_edFPISINSTLRAddr1] = useState(true);
    const [isVisible_medFPISINSTLRZipCode, setIsVisible_medFPISINSTLRZipCode] = useState(true);
    const [isVisible_edFPISINSTLRAddr2, setIsVisible_edFPISINSTLRAddr2] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_edFPISTANK_KND, setIsVisible_edFPISTANK_KND] = useState(true);
    const [isVisible_edCarNo, setIsVisible_edCarNo] = useState(true);
    const [isVisible_edCarYear, setIsVisible_edCarYear] = useState(true);
    const [isVisible_edPerMissionNo, setIsVisible_edPerMissionNo] = useState(true);
    const [isVisible_edRemark, setIsVisible_edRemark] = useState(true);
    const [isVisible_radPostGubun, setIsVisible_radPostGubun] = useState(true);
    const [isVisible_medParkZipCode, setIsVisible_medParkZipCode] = useState(true);
    const [isVisible_btnSearchParkZipCode, setIsVisible_btnSearchParkZipCode] = useState(true);
    const [isVisible_edParkAddr1, setIsVisible_edParkAddr1] = useState(true);
    const [isVisible_edParkAddr2, setIsVisible_edParkAddr2] = useState(true);
    const [isVisible_medInstlrZipCode, setIsVisible_medInstlrZipCode] = useState(true);
    const [isVisible_btnSearchInstlrZipCode, setIsVisible_btnSearchInstlrZipCode] = useState(true);
    const [isVisible_edInstlrAddr1, setIsVisible_edInstlrAddr1] = useState(true);
    const [isVisible_edInstlrAddr2, setIsVisible_edInstlrAddr2] = useState(true);
    const [isVisible_chkCarNo, setIsVisible_chkCarNo] = useState(true);
    const [isVisible_chkCarYear, setIsVisible_chkCarYear] = useState(true);
    const [isVisible_chkPerMissionNo, setIsVisible_chkPerMissionNo] = useState(true);
    const [isVisible_chkRemark, setIsVisible_chkRemark] = useState(true);
    const [isVisible_chkParkPlace, setIsVisible_chkParkPlace] = useState(true);
    const [isVisible_chkInstlrAddr, setIsVisible_chkInstlrAddr] = useState(true);
    const [isVisible_chkTank, setIsVisible_chkTank] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_cbxAddrGubun, setIsVisible_cbxAddrGubun] = useState(true);
    const [isVisible_cbxHopeParkAddrGubun, setIsVisible_cbxHopeParkAddrGubun] = useState(true);
    const [isVisible_cbxHopeInstlrAddrGubun, setIsVisible_cbxHopeInstlrAddrGubun] = useState(true);

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