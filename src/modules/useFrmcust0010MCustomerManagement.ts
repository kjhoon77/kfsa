// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oAddrGubun, Ids_ioDelete, Ids_ioLevel, Ids_oCourse, Ids_oAddr, Ids_oRegion, Ids_oJibu, Ids_oBusinessGubun, Ids_ioYn, Ids_oEmailDomain, Ids_ioBuildingInfo, Ids_ioDangerInfo, Ids_ioTankInfo, Ids_ioEducationPassInfo, Ids_ioCustomerInfo, Ids_ioManagerInfo, Ids_ioLicenseInfo, Ids_ioOwnerInfo, Ids_ioAdditionInfo, Ids_ioOverBizInfo, Ids_ioCustomerFeeInfo, Ids_oAddPost, Ids_oDetailCourse, Ids_oCustomerStatus, Ids_oAddition, Ids_oOwnerGubun, Ids_oLicenseGubun, Ids_oEduStudentGubun, Ids_oEduGubun, Ids_oPersonGubun, Ids_oBizCd, Ids_oObjectMgno, Ids_oJibuGubun, Ids_oBuildingSeq, Ids_oCustomerSeq, Ids_oFireManagerSeq, Ids_oTest, Ids_oStatusReason, Ids_oCount, Ids_oSunapGubun, Ids_oFireCd, Ids_oFireCenterCd, Ids_oAgencyYn, Ids_oManagerInfoTmp, Ids_oSPMain, Ids_oEduSuccessGubun, Ids_oSPMainIN, Ids_oOverBizProc, Ids_iCustomerInfoTmp, Ids_iCustomerModifyHistory, Ids_oModifyColumnList, Ids_oLicenseInfo, Ids_oResidentNoErr, Ids_AuthGubun, Ids_oTankAddrGubun, Ids_oCustomerCompare, Ids_oAllObject, Ids_oBuildingInfoTmp, Ids_ioNotOverBizFireManager, Ids_ioIsOverBizFireManager, Ids_oBnmCode, Ids_oFireBonbu, Ids_oEduConfirmPrint, Ids_oAddr2, Ids_oReceiveExcept, Ids_oTrainingPass, Ids_oMemberAgree, Ids_oVirtualAccoutAllocation, Ids_oVirtualAccoutOwnerNM, Ids_oElectQualify, Ids_oTechReceiveExcept, Ids_ioImageInfo, Ids_oINetChangeInfo, Ids_oRestoreStatus, Ids_oPostPlace, Ids_oVirtualAccoutDelete, Ids_oTrainingPassList, Ids_ioMEduData, Ids_ioMEduDataDetail, Ids_ioEduNoticeHistoryGetSysdate, Ids_oCallKeyIn, Ids_oExpireGubun, Ids_oEduType50 } from './Frmcust0010MCustomerManagementData';

export const useFrmcust0010MCustomerManagement = () => {
    const [ds_oAddrGubun, setds_oAddrGubun] = useState<Ids_oAddrGubun[]>([]);
    const [ds_ioDelete, setds_ioDelete] = useState<Ids_ioDelete[]>([]);
    const [ds_ioLevel, setds_ioLevel] = useState<Ids_ioLevel[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oBusinessGubun, setds_oBusinessGubun] = useState<Ids_oBusinessGubun[]>([]);
    const [ds_ioYn, setds_ioYn] = useState<Ids_ioYn[]>([]);
    const [ds_oEmailDomain, setds_oEmailDomain] = useState<Ids_oEmailDomain[]>([]);
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_ioDangerInfo, setds_ioDangerInfo] = useState<Ids_ioDangerInfo[]>([]);
    const [ds_ioTankInfo, setds_ioTankInfo] = useState<Ids_ioTankInfo[]>([]);
    const [ds_ioEducationPassInfo, setds_ioEducationPassInfo] = useState<Ids_ioEducationPassInfo[]>([]);
    const [ds_ioCustomerInfo, setds_ioCustomerInfo] = useState<Ids_ioCustomerInfo[]>([]);
    const [ds_ioManagerInfo, setds_ioManagerInfo] = useState<Ids_ioManagerInfo[]>([]);
    const [ds_ioLicenseInfo, setds_ioLicenseInfo] = useState<Ids_ioLicenseInfo[]>([]);
    const [ds_ioOwnerInfo, setds_ioOwnerInfo] = useState<Ids_ioOwnerInfo[]>([]);
    const [ds_ioAdditionInfo, setds_ioAdditionInfo] = useState<Ids_ioAdditionInfo[]>([]);
    const [ds_ioOverBizInfo, setds_ioOverBizInfo] = useState<Ids_ioOverBizInfo[]>([]);
    const [ds_ioCustomerFeeInfo, setds_ioCustomerFeeInfo] = useState<Ids_ioCustomerFeeInfo[]>([]);
    const [ds_oAddPost, setds_oAddPost] = useState<Ids_oAddPost[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_oCustomerStatus, setds_oCustomerStatus] = useState<Ids_oCustomerStatus[]>([]);
    const [ds_oAddition, setds_oAddition] = useState<Ids_oAddition[]>([]);
    const [ds_oOwnerGubun, setds_oOwnerGubun] = useState<Ids_oOwnerGubun[]>([]);
    const [ds_oLicenseGubun, setds_oLicenseGubun] = useState<Ids_oLicenseGubun[]>([]);
    const [ds_oEduStudentGubun, setds_oEduStudentGubun] = useState<Ids_oEduStudentGubun[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_oPersonGubun, setds_oPersonGubun] = useState<Ids_oPersonGubun[]>([]);
    const [ds_oBizCd, setds_oBizCd] = useState<Ids_oBizCd[]>([]);
    const [ds_oObjectMgno, setds_oObjectMgno] = useState<Ids_oObjectMgno[]>([]);
    const [ds_oJibuGubun, setds_oJibuGubun] = useState<Ids_oJibuGubun[]>([]);
    const [ds_oBuildingSeq, setds_oBuildingSeq] = useState<Ids_oBuildingSeq[]>([]);
    const [ds_oCustomerSeq, setds_oCustomerSeq] = useState<Ids_oCustomerSeq[]>([]);
    const [ds_oFireManagerSeq, setds_oFireManagerSeq] = useState<Ids_oFireManagerSeq[]>([]);
    const [ds_oTest, setds_oTest] = useState<Ids_oTest[]>([]);
    const [ds_oStatusReason, setds_oStatusReason] = useState<Ids_oStatusReason[]>([]);
    const [ds_oCount, setds_oCount] = useState<Ids_oCount[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oAgencyYn, setds_oAgencyYn] = useState<Ids_oAgencyYn[]>([]);
    const [ds_oManagerInfoTmp, setds_oManagerInfoTmp] = useState<Ids_oManagerInfoTmp[]>([]);
    const [ds_oSPMain, setds_oSPMain] = useState<Ids_oSPMain[]>([]);
    const [ds_oEduSuccessGubun, setds_oEduSuccessGubun] = useState<Ids_oEduSuccessGubun[]>([]);
    const [ds_oSPMainIN, setds_oSPMainIN] = useState<Ids_oSPMainIN[]>([]);
    const [ds_oOverBizProc, setds_oOverBizProc] = useState<Ids_oOverBizProc[]>([]);
    const [ds_iCustomerInfoTmp, setds_iCustomerInfoTmp] = useState<Ids_iCustomerInfoTmp[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_oModifyColumnList, setds_oModifyColumnList] = useState<Ids_oModifyColumnList[]>([]);
    const [ds_oLicenseInfo, setds_oLicenseInfo] = useState<Ids_oLicenseInfo[]>([]);
    const [ds_oResidentNoErr, setds_oResidentNoErr] = useState<Ids_oResidentNoErr[]>([]);
    const [ds_AuthGubun, setds_AuthGubun] = useState<Ids_AuthGubun[]>([]);
    const [ds_oTankAddrGubun, setds_oTankAddrGubun] = useState<Ids_oTankAddrGubun[]>([]);
    const [ds_oCustomerCompare, setds_oCustomerCompare] = useState<Ids_oCustomerCompare[]>([]);
    const [ds_oAllObject, setds_oAllObject] = useState<Ids_oAllObject[]>([]);
    const [ds_oBuildingInfoTmp, setds_oBuildingInfoTmp] = useState<Ids_oBuildingInfoTmp[]>([]);
    const [ds_ioNotOverBizFireManager, setds_ioNotOverBizFireManager] = useState<Ids_ioNotOverBizFireManager[]>([]);
    const [ds_ioIsOverBizFireManager, setds_ioIsOverBizFireManager] = useState<Ids_ioIsOverBizFireManager[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oFireBonbu, setds_oFireBonbu] = useState<Ids_oFireBonbu[]>([]);
    const [ds_oEduConfirmPrint, setds_oEduConfirmPrint] = useState<Ids_oEduConfirmPrint[]>([]);
    const [ds_oAddr2, setds_oAddr2] = useState<Ids_oAddr2[]>([]);
    const [ds_oReceiveExcept, setds_oReceiveExcept] = useState<Ids_oReceiveExcept[]>([]);
    const [ds_oTrainingPass, setds_oTrainingPass] = useState<Ids_oTrainingPass[]>([]);
    const [ds_oMemberAgree, setds_oMemberAgree] = useState<Ids_oMemberAgree[]>([]);
    const [ds_oVirtualAccoutAllocation, setds_oVirtualAccoutAllocation] = useState<Ids_oVirtualAccoutAllocation[]>([]);
    const [ds_oVirtualAccoutOwnerNM, setds_oVirtualAccoutOwnerNM] = useState<Ids_oVirtualAccoutOwnerNM[]>([]);
    const [ds_oElectQualify, setds_oElectQualify] = useState<Ids_oElectQualify[]>([]);
    const [ds_oTechReceiveExcept, setds_oTechReceiveExcept] = useState<Ids_oTechReceiveExcept[]>([]);
    const [ds_ioImageInfo, setds_ioImageInfo] = useState<Ids_ioImageInfo[]>([]);
    const [ds_oINetChangeInfo, setds_oINetChangeInfo] = useState<Ids_oINetChangeInfo[]>([]);
    const [ds_oRestoreStatus, setds_oRestoreStatus] = useState<Ids_oRestoreStatus[]>([]);
    const [ds_oPostPlace, setds_oPostPlace] = useState<Ids_oPostPlace[]>([]);
    const [ds_oVirtualAccoutDelete, setds_oVirtualAccoutDelete] = useState<Ids_oVirtualAccoutDelete[]>([]);
    const [ds_oTrainingPassList, setds_oTrainingPassList] = useState<Ids_oTrainingPassList[]>([]);
    const [ds_ioMEduData, setds_ioMEduData] = useState<Ids_ioMEduData[]>([]);
    const [ds_ioMEduDataDetail, setds_ioMEduDataDetail] = useState<Ids_ioMEduDataDetail[]>([]);
    const [ds_ioEduNoticeHistoryGetSysdate, setds_ioEduNoticeHistoryGetSysdate] = useState<Ids_ioEduNoticeHistoryGetSysdate[]>([]);
    const [ds_oCallKeyIn, setds_oCallKeyIn] = useState<Ids_oCallKeyIn[]>([]);
    const [ds_oExpireGubun, setds_oExpireGubun] = useState<Ids_oExpireGubun[]>([]);
    const [ds_oEduType50, setds_oEduType50] = useState<Ids_oEduType50[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_div2, setIsVisible_div2] = useState(true);
    const [isVisible_div1, setIsVisible_div1] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_Div3, setIsVisible_Div3] = useState(false);
    const [isVisible_Div0, setIsVisible_Div0] = useState(true);
    const [isVisible_Div4, setIsVisible_Div4] = useState(false);
    const [isVisible_Div6, setIsVisible_Div6] = useState(false);
    const [isVisible_Div7, setIsVisible_Div7] = useState(false);
    const [isVisible_Div8, setIsVisible_Div8] = useState(false);
    const [tabValue_tabTab3, setTabValue_tabTab3] = useState(0);
    const [tabValue_tabTab2, setTabValue_tabTab2] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oAddrGubun([]);
            setds_ioDelete([]);
            setds_ioLevel([]);
            setds_oCourse([]);
            setds_oAddr([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_oBusinessGubun([]);
            setds_ioYn([]);
            setds_oEmailDomain([]);
            setds_ioBuildingInfo([]);
            setds_ioDangerInfo([]);
            setds_ioTankInfo([]);
            setds_ioEducationPassInfo([]);
            setds_ioCustomerInfo([]);
            setds_ioManagerInfo([]);
            setds_ioLicenseInfo([]);
            setds_ioOwnerInfo([]);
            setds_ioAdditionInfo([]);
            setds_ioOverBizInfo([]);
            setds_ioCustomerFeeInfo([]);
            setds_oAddPost([]);
            setds_oDetailCourse([]);
            setds_oCustomerStatus([]);
            setds_oAddition([]);
            setds_oOwnerGubun([]);
            setds_oLicenseGubun([]);
            setds_oEduStudentGubun([]);
            setds_oEduGubun([]);
            setds_oPersonGubun([]);
            setds_oBizCd([]);
            setds_oObjectMgno([]);
            setds_oJibuGubun([]);
            setds_oBuildingSeq([]);
            setds_oCustomerSeq([]);
            setds_oFireManagerSeq([]);
            setds_oTest([]);
            setds_oStatusReason([]);
            setds_oCount([]);
            setds_oSunapGubun([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oAgencyYn([]);
            setds_oManagerInfoTmp([]);
            setds_oSPMain([]);
            setds_oEduSuccessGubun([]);
            setds_oSPMainIN([]);
            setds_oOverBizProc([]);
            setds_iCustomerInfoTmp([]);
            setds_iCustomerModifyHistory([]);
            setds_oModifyColumnList([]);
            setds_oLicenseInfo([]);
            setds_oResidentNoErr([]);
            setds_AuthGubun([]);
            setds_oTankAddrGubun([]);
            setds_oCustomerCompare([]);
            setds_oAllObject([]);
            setds_oBuildingInfoTmp([]);
            setds_ioNotOverBizFireManager([]);
            setds_ioIsOverBizFireManager([]);
            setds_oBnmCode([]);
            setds_oFireBonbu([]);
            setds_oEduConfirmPrint([]);
            setds_oAddr2([]);
            setds_oReceiveExcept([]);
            setds_oTrainingPass([]);
            setds_oMemberAgree([]);
            setds_oVirtualAccoutAllocation([]);
            setds_oVirtualAccoutOwnerNM([]);
            setds_oElectQualify([]);
            setds_oTechReceiveExcept([]);
            setds_ioImageInfo([]);
            setds_oINetChangeInfo([]);
            setds_oRestoreStatus([]);
            setds_oPostPlace([]);
            setds_oVirtualAccoutDelete([]);
            setds_oTrainingPassList([]);
            setds_ioMEduData([]);
            setds_ioMEduDataDetail([]);
            setds_ioEduNoticeHistoryGetSysdate([]);
            setds_oCallKeyIn([]);
            setds_oExpireGubun([]);
            setds_oEduType50([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Div0_btnSearchPostZipCode_OnClick = () => {
        console.log('Div0_btnSearchPostZipCode_OnClick clicked');
    };
    const Div0_btnSearchReturnPostH_OnClick = () => {
        console.log('Div0_btnSearchReturnPostH_OnClick clicked');
    };
    const Div3_btnEduChange_OnClick = () => {
        console.log('Div3_btnEduChange_OnClick clicked');
    };
    const Div3_btnEduDetailInfo2_OnClick = () => {
        console.log('Div3_btnEduDetailInfo2_OnClick clicked');
    };
    const Div3_btn_EduDetailClose_OnClick = () => {
        console.log('Div3_btn_EduDetailClose_OnClick clicked');
    };
    const Div4_btnSearchEduPostZipCode_OnClick = () => {
        console.log('Div4_btnSearchEduPostZipCode_OnClick clicked');
    };
    const Div4_btnSearchEduReturnPostH_OnClick = () => {
        console.log('Div4_btnSearchEduReturnPostH_OnClick clicked');
    };
    const Div6_btnAddRow1_OnClick = () => {
        console.log('Div6_btnAddRow1_OnClick clicked');
    };
    const Div6_btnDelRow1_OnClick = () => {
        console.log('Div6_btnDelRow1_OnClick clicked');
    };
    const Div7_btnAddRow1_OnClick = () => {
        console.log('Div7_btnAddRow1_OnClick clicked');
    };
    const Div7_btnDelRow1_OnClick = () => {
        console.log('Div7_btnDelRow1_OnClick clicked');
    };
    const Div8_btnAddRow1_OnClick = () => {
        console.log('Div8_btnAddRow1_OnClick clicked');
    };
    const Div8_btnDelRow1_OnClick = () => {
        console.log('Div8_btnDelRow1_OnClick clicked');
    };
    const btnAddRow2_OnClick = () => {
        console.log('btnAddRow2_OnClick clicked');
    };
    const btnAuthResidentNo_OnClick = () => {
        console.log('btnAuthResidentNo_OnClick clicked');
    };
    const btnChangeBuilding_OnClick = () => {
        console.log('btnChangeBuilding_OnClick clicked');
    };
    const btnConcurrentH_OnClick = () => {
        console.log('btnConcurrentH_OnClick clicked');
    };
    const btnCustFee_OnClick = () => {
        console.log('btnCustFee_OnClick clicked');
    };
    const btnCustomerFee_OnClick = () => {
        console.log('btnCustomerFee_OnClick clicked');
    };
    const btnDelRow2_OnClick = () => {
        console.log('btnDelRow2_OnClick clicked');
    };
    const btnEduDataHList_OnClick = () => {
        console.log('btnEduDataHList_OnClick clicked');
    };
    const btnEduDetailInfo1_OnClick = () => {
        console.log('btnEduDetailInfo1_OnClick clicked');
    };
    const btnEduJubsu_OnClick = () => {
        console.log('btnEduJubsu_OnClick clicked');
    };
    const btnEduNoti_OnClick = () => {
        console.log('btnEduNoti_OnClick clicked');
    };
    const btnEducationInfo_OnClick = () => {
        console.log('btnEducationInfo_OnClick clicked');
    };
    const btnFireDeptList_OnClick = () => {
        console.log('btnFireDeptList_OnClick clicked');
    };
    const btnFireSearch_OnClick = () => {
        console.log('btnFireSearch_OnClick clicked');
    };
    const btnKeyinHP_OnClick = () => {
        console.log('btnKeyinHP_OnClick clicked');
    };
    const btnPostGo_OnClick = () => {
        console.log('btnPostGo_OnClick clicked');
    };
    const btnRestore_OnClick = () => {
        console.log('btnRestore_OnClick clicked');
    };
    const btnSaveAddInfo_OnClick = () => {
        console.log('btnSaveAddInfo_OnClick clicked');
    };
    const btnSearchAddInfoH_OnClick = () => {
        console.log('btnSearchAddInfoH_OnClick clicked');
    };
    const btnSearchAgency_OnClick = () => {
        console.log('btnSearchAgency_OnClick clicked');
    };
    const btnSearchBuilding_OnClick = () => {
        console.log('btnSearchBuilding_OnClick clicked');
    };
    const btnSearchChangeH_OnClick = () => {
        console.log('btnSearchChangeH_OnClick clicked');
    };
    const btnSearchCivilAppeal_OnClick = () => {
        console.log('btnSearchCivilAppeal_OnClick clicked');
    };
    const btnSearchFireDept_OnClick = () => {
        console.log('btnSearchFireDept_OnClick clicked');
    };
    const btnSearchManagerList_OnClick = () => {
        console.log('btnSearchManagerList_OnClick clicked');
    };
    const btnSearchOldZipCode_OnClick = () => {
        console.log('btnSearchOldZipCode_OnClick clicked');
    };
    const btnShowVirtualAccount_OnClick = () => {
        console.log('btnShowVirtualAccount_OnClick clicked');
    };
    const btnSuppoterView_OnClick = () => {
        console.log('btnSuppoterView_OnClick clicked');
    };
    const btnUpdateManagerInfo_OnClick = () => {
        console.log('btnUpdateManagerInfo_OnClick clicked');
    };
    const btnUpdateSameManagerInfo_OnClick = () => {
        console.log('btnUpdateSameManagerInfo_OnClick clicked');
    };
    const btnVAccountCno_OnClick = () => {
        console.log('btnVAccountCno_OnClick clicked');
    };
    const btn_BeforeCNo_OnClick = () => {
        console.log('btn_BeforeCNo_OnClick clicked');
    };
    const btn_NextCNo_OnClick = () => {
        console.log('btn_NextCNo_OnClick clicked');
    };
    const btn_NextOldCNo_OnClick = () => {
        console.log('btn_NextOldCNo_OnClick clicked');
    };
    const btn_SearchFireManager_OnClick = () => {
        console.log('btn_SearchFireManager_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_EduDataPrint = () => {
        console.log('lfn_EduDataPrint clicked');
    };
    const lfn_EduPrint = () => {
        console.log('lfn_EduPrint clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_GroupSearch = () => {
        console.log('lfn_GroupSearch clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
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
    const lfn_SupporterInput = () => {
        console.log('lfn_SupporterInput clicked');
    };
    const tabTab3_tabpgTab3Page1_btnImageZoom_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnImageZoom_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_btnSMSHist_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnSMSHist_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_btnSearchOldPostZipCode_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnSearchOldPostZipCode_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_btnSendSms_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnSendSms_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_imgPicture_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_imgPicture_OnClick clicked');
    };

    return {
        isLoading,
        ds_oAddrGubun,
        ds_ioDelete,
        ds_ioLevel,
        ds_oCourse,
        ds_oAddr,
        ds_oRegion,
        ds_oJibu,
        ds_oBusinessGubun,
        ds_ioYn,
        ds_oEmailDomain,
        ds_ioBuildingInfo,
        ds_ioDangerInfo,
        ds_ioTankInfo,
        ds_ioEducationPassInfo,
        ds_ioCustomerInfo,
        ds_ioManagerInfo,
        ds_ioLicenseInfo,
        ds_ioOwnerInfo,
        ds_ioAdditionInfo,
        ds_ioOverBizInfo,
        ds_ioCustomerFeeInfo,
        ds_oAddPost,
        ds_oDetailCourse,
        ds_oCustomerStatus,
        ds_oAddition,
        ds_oOwnerGubun,
        ds_oLicenseGubun,
        ds_oEduStudentGubun,
        ds_oEduGubun,
        ds_oPersonGubun,
        ds_oBizCd,
        ds_oObjectMgno,
        ds_oJibuGubun,
        ds_oBuildingSeq,
        ds_oCustomerSeq,
        ds_oFireManagerSeq,
        ds_oTest,
        ds_oStatusReason,
        ds_oCount,
        ds_oSunapGubun,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oAgencyYn,
        ds_oManagerInfoTmp,
        ds_oSPMain,
        ds_oEduSuccessGubun,
        ds_oSPMainIN,
        ds_oOverBizProc,
        ds_iCustomerInfoTmp,
        ds_iCustomerModifyHistory,
        ds_oModifyColumnList,
        ds_oLicenseInfo,
        ds_oResidentNoErr,
        ds_AuthGubun,
        ds_oTankAddrGubun,
        ds_oCustomerCompare,
        ds_oAllObject,
        ds_oBuildingInfoTmp,
        ds_ioNotOverBizFireManager,
        ds_ioIsOverBizFireManager,
        ds_oBnmCode,
        ds_oFireBonbu,
        ds_oEduConfirmPrint,
        ds_oAddr2,
        ds_oReceiveExcept,
        ds_oTrainingPass,
        ds_oMemberAgree,
        ds_oVirtualAccoutAllocation,
        ds_oVirtualAccoutOwnerNM,
        ds_oElectQualify,
        ds_oTechReceiveExcept,
        ds_ioImageInfo,
        ds_oINetChangeInfo,
        ds_oRestoreStatus,
        ds_oPostPlace,
        ds_oVirtualAccoutDelete,
        ds_oTrainingPassList,
        ds_ioMEduData,
        ds_ioMEduDataDetail,
        ds_ioEduNoticeHistoryGetSysdate,
        ds_oCallKeyIn,
        ds_oExpireGubun,
        ds_oEduType50,
        isVisible_div2,
        setIsVisible_div2,
        isVisible_div1,
        setIsVisible_div1,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_Div3,
        setIsVisible_Div3,
        isVisible_Div0,
        setIsVisible_Div0,
        isVisible_Div4,
        setIsVisible_Div4,
        isVisible_Div6,
        setIsVisible_Div6,
        isVisible_Div7,
        setIsVisible_Div7,
        isVisible_Div8,
        setIsVisible_Div8,
        tabValue_tabTab3,
        setTabValue_tabTab3,
        tabValue_tabTab2,
        setTabValue_tabTab2,
        Div0_btnSearchPostZipCode_OnClick,
        Div0_btnSearchReturnPostH_OnClick,
        Div3_btnEduChange_OnClick,
        Div3_btnEduDetailInfo2_OnClick,
        Div3_btn_EduDetailClose_OnClick,
        Div4_btnSearchEduPostZipCode_OnClick,
        Div4_btnSearchEduReturnPostH_OnClick,
        Div6_btnAddRow1_OnClick,
        Div6_btnDelRow1_OnClick,
        Div7_btnAddRow1_OnClick,
        Div7_btnDelRow1_OnClick,
        Div8_btnAddRow1_OnClick,
        Div8_btnDelRow1_OnClick,
        btnAddRow2_OnClick,
        btnAuthResidentNo_OnClick,
        btnChangeBuilding_OnClick,
        btnConcurrentH_OnClick,
        btnCustFee_OnClick,
        btnCustomerFee_OnClick,
        btnDelRow2_OnClick,
        btnEduDataHList_OnClick,
        btnEduDetailInfo1_OnClick,
        btnEduJubsu_OnClick,
        btnEduNoti_OnClick,
        btnEducationInfo_OnClick,
        btnFireDeptList_OnClick,
        btnFireSearch_OnClick,
        btnKeyinHP_OnClick,
        btnPostGo_OnClick,
        btnRestore_OnClick,
        btnSaveAddInfo_OnClick,
        btnSearchAddInfoH_OnClick,
        btnSearchAgency_OnClick,
        btnSearchBuilding_OnClick,
        btnSearchChangeH_OnClick,
        btnSearchCivilAppeal_OnClick,
        btnSearchFireDept_OnClick,
        btnSearchManagerList_OnClick,
        btnSearchOldZipCode_OnClick,
        btnShowVirtualAccount_OnClick,
        btnSuppoterView_OnClick,
        btnUpdateManagerInfo_OnClick,
        btnUpdateSameManagerInfo_OnClick,
        btnVAccountCno_OnClick,
        btn_BeforeCNo_OnClick,
        btn_NextCNo_OnClick,
        btn_NextOldCNo_OnClick,
        btn_SearchFireManager_OnClick,
        lfn_Cancel,
        lfn_EduDataPrint,
        lfn_EduPrint,
        lfn_End,
        lfn_GroupSearch,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        lfn_SupporterInput,
        tabTab3_tabpgTab3Page1_btnImageZoom_OnClick,
        tabTab3_tabpgTab3Page1_btnSMSHist_OnClick,
        tabTab3_tabpgTab3Page1_btnSearchOldPostZipCode_OnClick,
        tabTab3_tabpgTab3Page1_btnSendSms_OnClick,
        tabTab3_tabpgTab3Page1_imgPicture_OnClick,
    };
};