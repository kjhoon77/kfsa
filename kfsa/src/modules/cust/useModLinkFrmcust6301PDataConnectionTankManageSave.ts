// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBizCd, Ids_oCourse, Ids_oRegion, Ids_oJibu, Ids_oDetailCourse, Ids_oAddrGubun, Ids_oAllObject, Ids_ioBuildingInfo, Ids_ioCustomerInfo, Ids_ioManagerInfo, Ids_ioAdditionInfo, Ids_oAddr, Ids_oBuildingSeq, Ids_oCustomerSeq, Ids_oFireManagerSeq, Ids_ioCustomerInfoTmp, Ids_ioManagerInfoTmp, Ids_oBnmCode, Ids_oFireCd, Ids_oFireCenterCd, Ids_oCustomerStatus, Ids_ioMatchInfo, Ids_ioBizCdMatch, Ids_oFireBonbuCd, Ids_ioManager, Ids_oMemberStat, Ids_ioOldCustomerInfo, Ids_ioOldManagerInfo, Ids_oManagerList, Ids_MemberGubun, Ids_oStatus, Ids_ioOtherLicenseInfo, Ids_oOverBizProc, Ids_ioNotOverBizFireManager, Ids_ioIsOverBizFireManager, Ids_ioOldBuildingInfo, Ids_ioDanManagerInfo, Ids_ioDangerInfo, Ids_ioDangerInfoSave, Ids_iCustomerModifyHistory, Ids_ioLicenseInfo, Ids_oModifyColumnList, Ids_ioFPISDanTankInfo } from './ModLinkFrmcust6301PDataConnectionTankManageSaveData';

export const useModLinkFrmcust6301PDataConnectionTankManageSave = () => {
    const [ds_oBizCd, setds_oBizCd] = useState<Ids_oBizCd[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
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
    const [ds_ioDanManagerInfo, setds_ioDanManagerInfo] = useState<Ids_ioDanManagerInfo[]>([]);
    const [ds_ioDangerInfo, setds_ioDangerInfo] = useState<Ids_ioDangerInfo[]>([]);
    const [ds_ioDangerInfoSave, setds_ioDangerInfoSave] = useState<Ids_ioDangerInfoSave[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_ioLicenseInfo, setds_ioLicenseInfo] = useState<Ids_ioLicenseInfo[]>([]);
    const [ds_oModifyColumnList, setds_oModifyColumnList] = useState<Ids_oModifyColumnList[]>([]);
    const [ds_ioFPISDanTankInfo, setds_ioFPISDanTankInfo] = useState<Ids_ioFPISDanTankInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbFPISDanNm, setIsVisible_lbFPISDanNm] = useState(true);
    const [isVisible_edFPISBuildingNm, setIsVisible_edFPISBuildingNm] = useState(true);
    const [isVisible_lbJubsuInfo, setIsVisible_lbJubsuInfo] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_lbFPISFireCenter, setIsVisible_lbFPISFireCenter] = useState(true);
    const [isVisible_EdFPISFireCenter, setIsVisible_EdFPISFireCenter] = useState(true);
    const [isVisible_lbFPISCourse, setIsVisible_lbFPISCourse] = useState(true);
    const [isVisible_EdFPISCourse, setIsVisible_EdFPISCourse] = useState(true);
    const [isVisible_lbFPISDetailCourse, setIsVisible_lbFPISDetailCourse] = useState(true);
    const [isVisible_EdFPISDetailCourse, setIsVisible_EdFPISDetailCourse] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_Shape9, setIsVisible_Shape9] = useState(true);
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
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_medRegYYMM, setIsVisible_medRegYYMM] = useState(true);
    const [isVisible_medFeeYYMM, setIsVisible_medFeeYYMM] = useState(true);
    const [isVisible_chkCustomer, setIsVisible_chkCustomer] = useState(true);
    const [isVisible_chkRegYYMM, setIsVisible_chkRegYYMM] = useState(true);
    const [isVisible_chkFeeYYMM, setIsVisible_chkFeeYYMM] = useState(true);
    const [isVisible_cbxCustomerStatus, setIsVisible_cbxCustomerStatus] = useState(true);
    const [isVisible_Shape10, setIsVisible_Shape10] = useState(true);
    const [isVisible_edFMNM, setIsVisible_edFMNM] = useState(true);
    const [isVisible_medFMResidentno, setIsVisible_medFMResidentno] = useState(true);
    const [isVisible_calFMStartDate, setIsVisible_calFMStartDate] = useState(true);
    const [isVisible_lbFMEndStatus, setIsVisible_lbFMEndStatus] = useState(false);
    const [isVisible_calFMEndDate, setIsVisible_calFMEndDate] = useState(true);
    const [isVisible_chkFMNM, setIsVisible_chkFMNM] = useState(true);
    const [isVisible_chkFMResidentno, setIsVisible_chkFMResidentno] = useState(true);
    const [isVisible_chkFMStartDate, setIsVisible_chkFMStartDate] = useState(true);
    const [isVisible_Shape11, setIsVisible_Shape11] = useState(true);
    const [isVisible_chkFireManager, setIsVisible_chkFireManager] = useState(true);
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
    const [isVisible_btnAuthResidentNo, setIsVisible_btnAuthResidentNo] = useState(true);
    const [isVisible_btnFPISInfo, setIsVisible_btnFPISInfo] = useState(true);
    const [isVisible_lbInStatus, setIsVisible_lbInStatus] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_chkoldBuildingEndProc, setIsVisible_chkoldBuildingEndProc] = useState(true);
    const [isVisible_lbFMEndStatustitle, setIsVisible_lbFMEndStatustitle] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_lbFPISAddr, setIsVisible_lbFPISAddr] = useState(true);
    const [isVisible_edFPISAddr1, setIsVisible_edFPISAddr1] = useState(true);
    const [isVisible_medFPISZipCode, setIsVisible_medFPISZipCode] = useState(true);
    const [isVisible_edFPISAddr2, setIsVisible_edFPISAddr2] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_Static17, setIsVisible_Static17] = useState(true);
    const [isVisible_lbITLNO, setIsVisible_lbITLNO] = useState(true);
    const [isVisible_edITL_NO, setIsVisible_edITL_NO] = useState(true);
    const [isVisible_lbPRMISNNO, setIsVisible_lbPRMISNNO] = useState(true);
    const [isVisible_Edit1, setIsVisible_Edit1] = useState(true);
    const [isVisible_Edit2, setIsVisible_Edit2] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_Edit3, setIsVisible_Edit3] = useState(true);
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
    const [isVisible_gdDanger, setIsVisible_gdDanger] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_Edit0, setIsVisible_Edit0] = useState(true);
    const [isVisible_lbCarNo, setIsVisible_lbCarNo] = useState(true);
    const [isVisible_edCarNo, setIsVisible_edCarNo] = useState(true);
    const [isVisible_lbCarYear, setIsVisible_lbCarYear] = useState(true);
    const [isVisible_edCarYear, setIsVisible_edCarYear] = useState(true);
    const [isVisible_lbPerMissionNo, setIsVisible_lbPerMissionNo] = useState(true);
    const [isVisible_edPerMissionNo, setIsVisible_edPerMissionNo] = useState(true);
    const [isVisible_lbRemark, setIsVisible_lbRemark] = useState(true);
    const [isVisible_edRemark, setIsVisible_edRemark] = useState(true);
    const [isVisible_lbPostGubun, setIsVisible_lbPostGubun] = useState(true);
    const [isVisible_radPostGubun, setIsVisible_radPostGubun] = useState(true);
    const [isVisible_lbParkPlace, setIsVisible_lbParkPlace] = useState(true);
    const [isVisible_medParkZipCode, setIsVisible_medParkZipCode] = useState(true);
    const [isVisible_btnSearchParkZipCode, setIsVisible_btnSearchParkZipCode] = useState(true);
    const [isVisible_edParkAddr1, setIsVisible_edParkAddr1] = useState(true);
    const [isVisible_edParkAddr2, setIsVisible_edParkAddr2] = useState(true);
    const [isVisible_lbInstlrAddr, setIsVisible_lbInstlrAddr] = useState(true);
    const [isVisible_medInstlrZipCode, setIsVisible_medInstlrZipCode] = useState(true);
    const [isVisible_btnSearchInstlrZipCode, setIsVisible_btnSearchInstlrZipCode] = useState(true);
    const [isVisible_edInstlrAddr1, setIsVisible_edInstlrAddr1] = useState(true);
    const [isVisible_edInstlrAddr2, setIsVisible_edInstlrAddr2] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBizCd([]);
            setds_oCourse([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_oDetailCourse([]);
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
            setds_ioDanManagerInfo([]);
            setds_ioDangerInfo([]);
            setds_ioDangerInfoSave([]);
            setds_iCustomerModifyHistory([]);
            setds_ioLicenseInfo([]);
            setds_oModifyColumnList([]);
            setds_ioFPISDanTankInfo([]);
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
        ds_ioDanManagerInfo,
        ds_ioDangerInfo,
        ds_ioDangerInfoSave,
        ds_iCustomerModifyHistory,
        ds_ioLicenseInfo,
        ds_oModifyColumnList,
        ds_ioFPISDanTankInfo,
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
        isVisible_lbJubsuInfo,
        setIsVisible_lbJubsuInfo,
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
        isVisible_Shape9,
        setIsVisible_Shape9,
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
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_medRegYYMM,
        setIsVisible_medRegYYMM,
        isVisible_medFeeYYMM,
        setIsVisible_medFeeYYMM,
        isVisible_chkCustomer,
        setIsVisible_chkCustomer,
        isVisible_chkRegYYMM,
        setIsVisible_chkRegYYMM,
        isVisible_chkFeeYYMM,
        setIsVisible_chkFeeYYMM,
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
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Edit0,
        setIsVisible_Edit0,
        isVisible_lbCarNo,
        setIsVisible_lbCarNo,
        isVisible_edCarNo,
        setIsVisible_edCarNo,
        isVisible_lbCarYear,
        setIsVisible_lbCarYear,
        isVisible_edCarYear,
        setIsVisible_edCarYear,
        isVisible_lbPerMissionNo,
        setIsVisible_lbPerMissionNo,
        isVisible_edPerMissionNo,
        setIsVisible_edPerMissionNo,
        isVisible_lbRemark,
        setIsVisible_lbRemark,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_lbPostGubun,
        setIsVisible_lbPostGubun,
        isVisible_radPostGubun,
        setIsVisible_radPostGubun,
        isVisible_lbParkPlace,
        setIsVisible_lbParkPlace,
        isVisible_medParkZipCode,
        setIsVisible_medParkZipCode,
        isVisible_btnSearchParkZipCode,
        setIsVisible_btnSearchParkZipCode,
        isVisible_edParkAddr1,
        setIsVisible_edParkAddr1,
        isVisible_edParkAddr2,
        setIsVisible_edParkAddr2,
        isVisible_lbInstlrAddr,
        setIsVisible_lbInstlrAddr,
        isVisible_medInstlrZipCode,
        setIsVisible_medInstlrZipCode,
        isVisible_btnSearchInstlrZipCode,
        setIsVisible_btnSearchInstlrZipCode,
        isVisible_edInstlrAddr1,
        setIsVisible_edInstlrAddr1,
        isVisible_edInstlrAddr2,
        setIsVisible_edInstlrAddr2,
        btnApply_OnClick,
        btnAuthResidentNo_OnClick,
        btnBuildingSearch_OnClick,
        btnFPISInfo_OnClick,
        btnSearchInstlrZipCode_OnClick,
        btnSearchParkZipCode_OnClick,
        btnSearchZipCode1_OnClick,
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
        chkRegYYMM_OnClick,
        chkTel_OnClick,
        lfn_End,
        lfn_Save,
    };
};