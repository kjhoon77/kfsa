// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBizCd, Ids_oCourse, Ids_oRegion, Ids_oJibu, Ids_oEmailDomain, Ids_oDetailCourse, Ids_oPersonGubun, Ids_oAddrGubun, Ids_oJubsuInfo, Ids_oAllObject, Ids_ioBuildingInfo, Ids_ioCustomerInfo, Ids_ioManagerInfo, Ids_ioAdditionInfo, Ids_ioOwnerInfo, Ids_oAddr, Ids_oOwnerGubun, Ids_oBuildingSeq, Ids_oCustomerSeq, Ids_oFireManagerSeq, Ids_ioCustomerInfoTmp, Ids_ioManagerInfoTmp, Ids_oBnmCode, Ids_oFireCd, Ids_oFireCenterCd, Ids_oAgencyYn, Ids_oCustomerStatus, Ids_oFPISAllObject, Ids_ioFPISArsonMngrInfo, Ids_ioFPISPartcpntInfo, Ids_ioFPISLicenseInfo, Ids_ioFPISBuldstaInfo, Ids_ioAgencyInfo, Ids_ioMatchInfo, Ids_ioBizCdMatch, Ids_oFireBonbuCd, Ids_ioManager, Ids_oMemberStat, Ids_ioOldBuildingInfo, Ids_ioOldCustomerInfo, Ids_ioOldManagerInfo, Ids_ioOwnerInfoSave, Ids_oManagerList, Ids_MemberGubun, Ids_oStatus, Ids_ioAgencyInfoSave, Ids_oOwnerSeq, Ids_ioOtherLicenseInfo, Ids_oOverBizProc, Ids_ioNotOverBizFireManager, Ids_ioIsOverBizFireManager, Ids_iCustomerModifyHistory, Ids_oModifyColumnList, Ids_ioLicenseInfo, Ids_oAddr2, Ids_iRoadConv, Ids_oRoadConv, Ids_oElectQualify, Ids_ioPersoninfoHP, Ids_oPersonInfoAll } from './Frmcust6011PDataConnectionBuildingSubManageSaveData';

export const useFrmcust6011PDataConnectionBuildingSubManageSave = () => {
    const [ds_oBizCd, setds_oBizCd] = useState<Ids_oBizCd[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oEmailDomain, setds_oEmailDomain] = useState<Ids_oEmailDomain[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_oPersonGubun, setds_oPersonGubun] = useState<Ids_oPersonGubun[]>([]);
    const [ds_oAddrGubun, setds_oAddrGubun] = useState<Ids_oAddrGubun[]>([]);
    const [ds_oJubsuInfo, setds_oJubsuInfo] = useState<Ids_oJubsuInfo[]>([]);
    const [ds_oAllObject, setds_oAllObject] = useState<Ids_oAllObject[]>([]);
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_ioCustomerInfo, setds_ioCustomerInfo] = useState<Ids_ioCustomerInfo[]>([]);
    const [ds_ioManagerInfo, setds_ioManagerInfo] = useState<Ids_ioManagerInfo[]>([]);
    const [ds_ioAdditionInfo, setds_ioAdditionInfo] = useState<Ids_ioAdditionInfo[]>([]);
    const [ds_ioOwnerInfo, setds_ioOwnerInfo] = useState<Ids_ioOwnerInfo[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oOwnerGubun, setds_oOwnerGubun] = useState<Ids_oOwnerGubun[]>([]);
    const [ds_oBuildingSeq, setds_oBuildingSeq] = useState<Ids_oBuildingSeq[]>([]);
    const [ds_oCustomerSeq, setds_oCustomerSeq] = useState<Ids_oCustomerSeq[]>([]);
    const [ds_oFireManagerSeq, setds_oFireManagerSeq] = useState<Ids_oFireManagerSeq[]>([]);
    const [ds_ioCustomerInfoTmp, setds_ioCustomerInfoTmp] = useState<Ids_ioCustomerInfoTmp[]>([]);
    const [ds_ioManagerInfoTmp, setds_ioManagerInfoTmp] = useState<Ids_ioManagerInfoTmp[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oAgencyYn, setds_oAgencyYn] = useState<Ids_oAgencyYn[]>([]);
    const [ds_oCustomerStatus, setds_oCustomerStatus] = useState<Ids_oCustomerStatus[]>([]);
    const [ds_oFPISAllObject, setds_oFPISAllObject] = useState<Ids_oFPISAllObject[]>([]);
    const [ds_ioFPISArsonMngrInfo, setds_ioFPISArsonMngrInfo] = useState<Ids_ioFPISArsonMngrInfo[]>([]);
    const [ds_ioFPISPartcpntInfo, setds_ioFPISPartcpntInfo] = useState<Ids_ioFPISPartcpntInfo[]>([]);
    const [ds_ioFPISLicenseInfo, setds_ioFPISLicenseInfo] = useState<Ids_ioFPISLicenseInfo[]>([]);
    const [ds_ioFPISBuldstaInfo, setds_ioFPISBuldstaInfo] = useState<Ids_ioFPISBuldstaInfo[]>([]);
    const [ds_ioAgencyInfo, setds_ioAgencyInfo] = useState<Ids_ioAgencyInfo[]>([]);
    const [ds_ioMatchInfo, setds_ioMatchInfo] = useState<Ids_ioMatchInfo[]>([]);
    const [ds_ioBizCdMatch, setds_ioBizCdMatch] = useState<Ids_ioBizCdMatch[]>([]);
    const [ds_oFireBonbuCd, setds_oFireBonbuCd] = useState<Ids_oFireBonbuCd[]>([]);
    const [ds_ioManager, setds_ioManager] = useState<Ids_ioManager[]>([]);
    const [ds_oMemberStat, setds_oMemberStat] = useState<Ids_oMemberStat[]>([]);
    const [ds_ioOldBuildingInfo, setds_ioOldBuildingInfo] = useState<Ids_ioOldBuildingInfo[]>([]);
    const [ds_ioOldCustomerInfo, setds_ioOldCustomerInfo] = useState<Ids_ioOldCustomerInfo[]>([]);
    const [ds_ioOldManagerInfo, setds_ioOldManagerInfo] = useState<Ids_ioOldManagerInfo[]>([]);
    const [ds_ioOwnerInfoSave, setds_ioOwnerInfoSave] = useState<Ids_ioOwnerInfoSave[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_MemberGubun, setds_MemberGubun] = useState<Ids_MemberGubun[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_ioAgencyInfoSave, setds_ioAgencyInfoSave] = useState<Ids_ioAgencyInfoSave[]>([]);
    const [ds_oOwnerSeq, setds_oOwnerSeq] = useState<Ids_oOwnerSeq[]>([]);
    const [ds_ioOtherLicenseInfo, setds_ioOtherLicenseInfo] = useState<Ids_ioOtherLicenseInfo[]>([]);
    const [ds_oOverBizProc, setds_oOverBizProc] = useState<Ids_oOverBizProc[]>([]);
    const [ds_ioNotOverBizFireManager, setds_ioNotOverBizFireManager] = useState<Ids_ioNotOverBizFireManager[]>([]);
    const [ds_ioIsOverBizFireManager, setds_ioIsOverBizFireManager] = useState<Ids_ioIsOverBizFireManager[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_oModifyColumnList, setds_oModifyColumnList] = useState<Ids_oModifyColumnList[]>([]);
    const [ds_ioLicenseInfo, setds_ioLicenseInfo] = useState<Ids_ioLicenseInfo[]>([]);
    const [ds_oAddr2, setds_oAddr2] = useState<Ids_oAddr2[]>([]);
    const [ds_iRoadConv, setds_iRoadConv] = useState<Ids_iRoadConv[]>([]);
    const [ds_oRoadConv, setds_oRoadConv] = useState<Ids_oRoadConv[]>([]);
    const [ds_oElectQualify, setds_oElectQualify] = useState<Ids_oElectQualify[]>([]);
    const [ds_ioPersoninfoHP, setds_ioPersoninfoHP] = useState<Ids_ioPersoninfoHP[]>([]);
    const [ds_oPersonInfoAll, setds_oPersonInfoAll] = useState<Ids_oPersonInfoAll[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_medHopeRoadZipCode, setIsVisible_medHopeRoadZipCode] = useState(true);
    const [isVisible_edHopeRoadAddr1, setIsVisible_edHopeRoadAddr1] = useState(true);
    const [isVisible_edHopeRoadAddr2, setIsVisible_edHopeRoadAddr2] = useState(true);
    const [isVisible_Shape9, setIsVisible_Shape9] = useState(true);
    const [isVisible_edRoadAddr1, setIsVisible_edRoadAddr1] = useState(true);
    const [isVisible_edRoadAddr2, setIsVisible_edRoadAddr2] = useState(true);
    const [isVisible_medRoadZipCode, setIsVisible_medRoadZipCode] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbFPISBuildingNm, setIsVisible_lbFPISBuildingNm] = useState(true);
    const [isVisible_medFPISZipCode, setIsVisible_medFPISZipCode] = useState(true);
    const [isVisible_edFPISAddr2, setIsVisible_edFPISAddr2] = useState(true);
    const [isVisible_edFPISAddr1, setIsVisible_edFPISAddr1] = useState(true);
    const [isVisible_edFPISBuildingNm, setIsVisible_edFPISBuildingNm] = useState(true);
    const [isVisible_lbSystemInfo, setIsVisible_lbSystemInfo] = useState(true);
    const [isVisible_lbFPISAddr1, setIsVisible_lbFPISAddr1] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_lbFPISFireCenter, setIsVisible_lbFPISFireCenter] = useState(true);
    const [isVisible_EdFPISFireCenter, setIsVisible_EdFPISFireCenter] = useState(true);
    const [isVisible_lbFPISCourse, setIsVisible_lbFPISCourse] = useState(true);
    const [isVisible_EdFPISCourse, setIsVisible_EdFPISCourse] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_edFPISBiz, setIsVisible_edFPISBiz] = useState(true);
    const [isVisible_edFPISTel, setIsVisible_edFPISTel] = useState(true);
    const [isVisible_lbFPISTel, setIsVisible_lbFPISTel] = useState(true);
    const [isVisible_Shape6, setIsVisible_Shape6] = useState(true);
    const [isVisible_lbFPISFireManager, setIsVisible_lbFPISFireManager] = useState(true);
    const [isVisible_gdFPISFireManager, setIsVisible_gdFPISFireManager] = useState(true);
    const [isVisible_lbFPISLicense1, setIsVisible_lbFPISLicense1] = useState(true);
    const [isVisible_gdFPISLicense, setIsVisible_gdFPISLicense] = useState(true);
    const [isVisible_lbFPISLicense2, setIsVisible_lbFPISLicense2] = useState(true);
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
    const [isVisible_cbxBiz, setIsVisible_cbxBiz] = useState(true);
    const [isVisible_chkBiz, setIsVisible_chkBiz] = useState(true);
    const [isVisible_edTel, setIsVisible_edTel] = useState(true);
    const [isVisible_medHopeZipCode, setIsVisible_medHopeZipCode] = useState(true);
    const [isVisible_edHopeAddr1, setIsVisible_edHopeAddr1] = useState(true);
    const [isVisible_edHopeAddr2, setIsVisible_edHopeAddr2] = useState(true);
    const [isVisible_cbxPostGubun2, setIsVisible_cbxPostGubun2] = useState(true);
    const [isVisible_btnSearchZipCode2, setIsVisible_btnSearchZipCode2] = useState(true);
    const [isVisible_medRegYYMM, setIsVisible_medRegYYMM] = useState(true);
    const [isVisible_medFeeYYMM, setIsVisible_medFeeYYMM] = useState(true);
    const [isVisible_cbxPersonGubun, setIsVisible_cbxPersonGubun] = useState(true);
    const [isVisible_chkCustomer, setIsVisible_chkCustomer] = useState(true);
    const [isVisible_chkRegYYMM, setIsVisible_chkRegYYMM] = useState(true);
    const [isVisible_chkFeeYYMM, setIsVisible_chkFeeYYMM] = useState(true);
    const [isVisible_chkHopeAddr, setIsVisible_chkHopeAddr] = useState(true);
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
    const [isVisible_chkFireManager, setIsVisible_chkFireManager] = useState(true);
    const [isVisible_chkPersonGubun, setIsVisible_chkPersonGubun] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnApply, setIsVisible_btnApply] = useState(true);
    const [isVisible_btnBuildingSearch, setIsVisible_btnBuildingSearch] = useState(false);
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
    const [isVisible_btnFPISInfo, setIsVisible_btnFPISInfo] = useState(false);
    const [isVisible_lbInStatus, setIsVisible_lbInStatus] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_chkoldBuildingEndProc, setIsVisible_chkoldBuildingEndProc] = useState(true);
    const [isVisible_btnAllChk, setIsVisible_btnAllChk] = useState(true);
    const [isVisible_lbFMEndStatustitle, setIsVisible_lbFMEndStatustitle] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_edPostPlace, setIsVisible_edPostPlace] = useState(true);
    const [isVisible_chkPostPlace, setIsVisible_chkPostPlace] = useState(true);
    const [isVisible_cbxAddrGubun, setIsVisible_cbxAddrGubun] = useState(true);
    const [isVisible_cbxHopeAddrGubun, setIsVisible_cbxHopeAddrGubun] = useState(true);
    const [isVisible_btnMainBuildingSearch, setIsVisible_btnMainBuildingSearch] = useState(true);
    const [isVisible_edMainCMgno, setIsVisible_edMainCMgno] = useState(true);
    const [isVisible_lbMainCMgno, setIsVisible_lbMainCMgno] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_edBMgno, setIsVisible_edBMgno] = useState(true);
    const [isVisible_cbxElectQualify, setIsVisible_cbxElectQualify] = useState(true);
    const [isVisible_chkHPTEL, setIsVisible_chkHPTEL] = useState(true);
    const [isVisible_edPTel, setIsVisible_edPTel] = useState(true);
    const [isVisible_lbFMElectQualify, setIsVisible_lbFMElectQualify] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_medPersonKey, setIsVisible_medPersonKey] = useState(true);
    const [isVisible_btnLicenseList, setIsVisible_btnLicenseList] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBizCd([]);
            setds_oCourse([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_oEmailDomain([]);
            setds_oDetailCourse([]);
            setds_oPersonGubun([]);
            setds_oAddrGubun([]);
            setds_oJubsuInfo([]);
            setds_oAllObject([]);
            setds_ioBuildingInfo([]);
            setds_ioCustomerInfo([]);
            setds_ioManagerInfo([]);
            setds_ioAdditionInfo([]);
            setds_ioOwnerInfo([]);
            setds_oAddr([]);
            setds_oOwnerGubun([]);
            setds_oBuildingSeq([]);
            setds_oCustomerSeq([]);
            setds_oFireManagerSeq([]);
            setds_ioCustomerInfoTmp([]);
            setds_ioManagerInfoTmp([]);
            setds_oBnmCode([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oAgencyYn([]);
            setds_oCustomerStatus([]);
            setds_oFPISAllObject([]);
            setds_ioFPISArsonMngrInfo([]);
            setds_ioFPISPartcpntInfo([]);
            setds_ioFPISLicenseInfo([]);
            setds_ioFPISBuldstaInfo([]);
            setds_ioAgencyInfo([]);
            setds_ioMatchInfo([]);
            setds_ioBizCdMatch([]);
            setds_oFireBonbuCd([]);
            setds_ioManager([]);
            setds_oMemberStat([]);
            setds_ioOldBuildingInfo([]);
            setds_ioOldCustomerInfo([]);
            setds_ioOldManagerInfo([]);
            setds_ioOwnerInfoSave([]);
            setds_oManagerList([]);
            setds_MemberGubun([]);
            setds_oStatus([]);
            setds_ioAgencyInfoSave([]);
            setds_oOwnerSeq([]);
            setds_ioOtherLicenseInfo([]);
            setds_oOverBizProc([]);
            setds_ioNotOverBizFireManager([]);
            setds_ioIsOverBizFireManager([]);
            setds_iCustomerModifyHistory([]);
            setds_oModifyColumnList([]);
            setds_ioLicenseInfo([]);
            setds_oAddr2([]);
            setds_iRoadConv([]);
            setds_oRoadConv([]);
            setds_oElectQualify([]);
            setds_ioPersoninfoHP([]);
            setds_oPersonInfoAll([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAllChk_OnClick = () => {
        console.log('btnAllChk_OnClick clicked');
    };
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
    const btnMainBuildingSearch_OnClick = () => {
        console.log('btnMainBuildingSearch_OnClick clicked');
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
    const chkBiz_OnClick = () => {
        console.log('chkBiz_OnClick clicked');
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
        ds_oEmailDomain,
        ds_oDetailCourse,
        ds_oPersonGubun,
        ds_oAddrGubun,
        ds_oJubsuInfo,
        ds_oAllObject,
        ds_ioBuildingInfo,
        ds_ioCustomerInfo,
        ds_ioManagerInfo,
        ds_ioAdditionInfo,
        ds_ioOwnerInfo,
        ds_oAddr,
        ds_oOwnerGubun,
        ds_oBuildingSeq,
        ds_oCustomerSeq,
        ds_oFireManagerSeq,
        ds_ioCustomerInfoTmp,
        ds_ioManagerInfoTmp,
        ds_oBnmCode,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oAgencyYn,
        ds_oCustomerStatus,
        ds_oFPISAllObject,
        ds_ioFPISArsonMngrInfo,
        ds_ioFPISPartcpntInfo,
        ds_ioFPISLicenseInfo,
        ds_ioFPISBuldstaInfo,
        ds_ioAgencyInfo,
        ds_ioMatchInfo,
        ds_ioBizCdMatch,
        ds_oFireBonbuCd,
        ds_ioManager,
        ds_oMemberStat,
        ds_ioOldBuildingInfo,
        ds_ioOldCustomerInfo,
        ds_ioOldManagerInfo,
        ds_ioOwnerInfoSave,
        ds_oManagerList,
        ds_MemberGubun,
        ds_oStatus,
        ds_ioAgencyInfoSave,
        ds_oOwnerSeq,
        ds_ioOtherLicenseInfo,
        ds_oOverBizProc,
        ds_ioNotOverBizFireManager,
        ds_ioIsOverBizFireManager,
        ds_iCustomerModifyHistory,
        ds_oModifyColumnList,
        ds_ioLicenseInfo,
        ds_oAddr2,
        ds_iRoadConv,
        ds_oRoadConv,
        ds_oElectQualify,
        ds_ioPersoninfoHP,
        ds_oPersonInfoAll,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_medHopeRoadZipCode,
        setIsVisible_medHopeRoadZipCode,
        isVisible_edHopeRoadAddr1,
        setIsVisible_edHopeRoadAddr1,
        isVisible_edHopeRoadAddr2,
        setIsVisible_edHopeRoadAddr2,
        isVisible_Shape9,
        setIsVisible_Shape9,
        isVisible_edRoadAddr1,
        setIsVisible_edRoadAddr1,
        isVisible_edRoadAddr2,
        setIsVisible_edRoadAddr2,
        isVisible_medRoadZipCode,
        setIsVisible_medRoadZipCode,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbFPISBuildingNm,
        setIsVisible_lbFPISBuildingNm,
        isVisible_medFPISZipCode,
        setIsVisible_medFPISZipCode,
        isVisible_edFPISAddr2,
        setIsVisible_edFPISAddr2,
        isVisible_edFPISAddr1,
        setIsVisible_edFPISAddr1,
        isVisible_edFPISBuildingNm,
        setIsVisible_edFPISBuildingNm,
        isVisible_lbSystemInfo,
        setIsVisible_lbSystemInfo,
        isVisible_lbFPISAddr1,
        setIsVisible_lbFPISAddr1,
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
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_edFPISBiz,
        setIsVisible_edFPISBiz,
        isVisible_edFPISTel,
        setIsVisible_edFPISTel,
        isVisible_lbFPISTel,
        setIsVisible_lbFPISTel,
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
        isVisible_cbxBiz,
        setIsVisible_cbxBiz,
        isVisible_chkBiz,
        setIsVisible_chkBiz,
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
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_chkoldBuildingEndProc,
        setIsVisible_chkoldBuildingEndProc,
        isVisible_btnAllChk,
        setIsVisible_btnAllChk,
        isVisible_lbFMEndStatustitle,
        setIsVisible_lbFMEndStatustitle,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edPostPlace,
        setIsVisible_edPostPlace,
        isVisible_chkPostPlace,
        setIsVisible_chkPostPlace,
        isVisible_cbxAddrGubun,
        setIsVisible_cbxAddrGubun,
        isVisible_cbxHopeAddrGubun,
        setIsVisible_cbxHopeAddrGubun,
        isVisible_btnMainBuildingSearch,
        setIsVisible_btnMainBuildingSearch,
        isVisible_edMainCMgno,
        setIsVisible_edMainCMgno,
        isVisible_lbMainCMgno,
        setIsVisible_lbMainCMgno,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_edBMgno,
        setIsVisible_edBMgno,
        isVisible_cbxElectQualify,
        setIsVisible_cbxElectQualify,
        isVisible_chkHPTEL,
        setIsVisible_chkHPTEL,
        isVisible_edPTel,
        setIsVisible_edPTel,
        isVisible_lbFMElectQualify,
        setIsVisible_lbFMElectQualify,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_medPersonKey,
        setIsVisible_medPersonKey,
        isVisible_btnLicenseList,
        setIsVisible_btnLicenseList,
        btnAllChk_OnClick,
        btnApply_OnClick,
        btnAuthResidentNo_OnClick,
        btnBuildingSearch_OnClick,
        btnFPISInfo_OnClick,
        btnLicenseList_OnClick,
        btnMainBuildingSearch_OnClick,
        btnSearchZipCode1_OnClick,
        btnSearchZipCode2_OnClick,
        chkAddr_OnClick,
        chkBNM_OnClick,
        chkBiz_OnClick,
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