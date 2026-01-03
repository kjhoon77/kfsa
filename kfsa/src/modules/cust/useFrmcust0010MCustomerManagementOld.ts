// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oAddrGubun, Ids_ioDelete, Ids_ioLevel, Ids_oCourse, Ids_oAddr, Ids_oRegion, Ids_oJibu, Ids_oBusinessGubun, Ids_ioYn, Ids_oEmailDomain, Ids_ioBuildingInfo, Ids_ioDangerInfo, Ids_ioTankInfo, Ids_ioEducationPassInfo, Ids_ioCustomerInfo, Ids_ioManagerInfo, Ids_ioLicenseInfo, Ids_ioOwnerInfo, Ids_ioAdditionInfo, Ids_ioOverBizInfo, Ids_ioCustomerFeeInfo, Ids_oAddPost, Ids_oDetailCourse, Ids_oCustomerStatus, Ids_oAddition, Ids_oOwnerGubun, Ids_oLicenseGubun, Ids_oEduStudentGubun, Ids_oEduGubun, Ids_oPersonGubun, Ids_oBizCd, Ids_oObjectMgno, Ids_oJibuGubun, Ids_oBuildingSeq, Ids_oCustomerSeq, Ids_oFireManagerSeq, Ids_oTest, Ids_oStatusReason, Ids_oCount, Ids_oSunapGubun, Ids_oFireCd, Ids_oFireCenterCd, Ids_oAgencyYn, Ids_oManagerInfoTmp, Ids_oSPMain, Ids_oEduSuccessGubun, Ids_oSPMainIN, Ids_oOverBizProc, Ids_iCustomerInfoTmp, Ids_iCustomerModifyHistory, Ids_oModifyColumnList, Ids_oLicenseInfo, Ids_oResidentNoErr, Ids_AuthGubun, Ids_oTankAddrGubun, Ids_oCustomerCompare, Ids_oAllObject, Ids_oBuildingInfoTmp, Ids_ioNotOverBizFireManager, Ids_ioIsOverBizFireManager, Ids_oBnmCode, Ids_oFireBonbu, Ids_oEduConfirmPrint } from './Frmcust0010MCustomerManagementOldData';

export const useFrmcust0010MCustomerManagementOld = () => {
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
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_tabTab3, setRawVisible_tabTab3] = useState(true);
    const [rawVisible_lbEMail, setRawVisible_lbEMail] = useState(true);
    const [rawVisible_edEMailID, setRawVisible_edEMailID] = useState(true);
    const [rawVisible_lbTextEMail, setRawVisible_lbTextEMail] = useState(true);
    const [rawVisible_cbxEMailDomain, setRawVisible_cbxEMailDomain] = useState(true);
    const [rawVisible_lbPostAddr, setRawVisible_lbPostAddr] = useState(true);
    const [rawVisible_radPostAddrGubun, setRawVisible_radPostAddrGubun] = useState(true);
    const [rawVisible_lbOldPostAddr, setRawVisible_lbOldPostAddr] = useState(true);
    const [rawVisible_edOldPostAddr1, setRawVisible_edOldPostAddr1] = useState(true);
    const [rawVisible_medOldPostZipCode, setRawVisible_medOldPostZipCode] = useState(true);
    const [rawVisible_edOldPostAddr2, setRawVisible_edOldPostAddr2] = useState(true);
    const [rawVisible_btnSearchOldPostZipCode, setRawVisible_btnSearchOldPostZipCode] = useState(true);
    const [rawVisible_lbNewPostAddr, setRawVisible_lbNewPostAddr] = useState(true);
    const [rawVisible_edNewPostAddr1, setRawVisible_edNewPostAddr1] = useState(true);
    const [rawVisible_medNewPostZipCode, setRawVisible_medNewPostZipCode] = useState(true);
    const [rawVisible_btnSearchNewPostZipCode, setRawVisible_btnSearchNewPostZipCode] = useState(true);
    const [rawVisible_edNewPostAddr2, setRawVisible_edNewPostAddr2] = useState(true);
    const [rawVisible_lbPTel, setRawVisible_lbPTel] = useState(true);
    const [rawVisible_edPTel, setRawVisible_edPTel] = useState(true);
    const [rawVisible_lbTel, setRawVisible_lbTel] = useState(true);
    const [rawVisible_edTel, setRawVisible_edTel] = useState(true);
    const [rawVisible_edEmailDomain, setRawVisible_edEmailDomain] = useState(true);
    const [rawVisible_imgPicture, setRawVisible_imgPicture] = useState(true);
    const [rawVisible_gdOverBizInfo, setRawVisible_gdOverBizInfo] = useState(true);
    const [rawVisible_gdLicenseInfo, setRawVisible_gdLicenseInfo] = useState(true);
    const [rawVisible_Grid0, setRawVisible_Grid0] = useState(true);
    const [rawVisible_lbLicense1, setRawVisible_lbLicense1] = useState(true);
    const [rawVisible_lbLicense2, setRawVisible_lbLicense2] = useState(true);
    const [rawVisible_btnAddRow, setRawVisible_btnAddRow] = useState(true);
    const [rawVisible_btnDelRow, setRawVisible_btnDelRow] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_tabTab2, setRawVisible_tabTab2] = useState(true);
    const [rawVisible_gdMemFee, setRawVisible_gdMemFee] = useState(true);
    const [rawVisible_gdEduInfo, setRawVisible_gdEduInfo] = useState(true);
    const [rawVisible_btnEduPrtH, setRawVisible_btnEduPrtH] = useState(false);
    const [rawVisible_Shape6, setRawVisible_Shape6] = useState(true);
    const [rawVisible_div2, setRawVisible_div2] = useState(true);
    const [rawVisible_lbCompanyNo, setRawVisible_lbCompanyNo] = useState(true);
    const [rawVisible_lbBizGubun, setRawVisible_lbBizGubun] = useState(true);
    const [rawVisible_cbxBizGubun, setRawVisible_cbxBizGubun] = useState(true);
    const [rawVisible_medCompanyNo, setRawVisible_medCompanyNo] = useState(true);
    const [rawVisible_div1, setRawVisible_div1] = useState(true);
    const [rawVisible_lbArea, setRawVisible_lbArea] = useState(true);
    const [rawVisible_lbEquipment, setRawVisible_lbEquipment] = useState(true);
    const [rawVisible_cbxEquipmentYn, setRawVisible_cbxEquipmentYn] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_medArea, setRawVisible_medArea] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnGroupSearch, setRawVisible_btnGroupSearch] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_medCustNo, setRawVisible_medCustNo] = useState(true);
    const [rawVisible_lbOldAddr, setRawVisible_lbOldAddr] = useState(true);
    const [rawVisible_lbBuildingNm, setRawVisible_lbBuildingNm] = useState(true);
    const [rawVisible_lbTelNo, setRawVisible_lbTelNo] = useState(true);
    const [rawVisible_lbJoinYear, setRawVisible_lbJoinYear] = useState(true);
    const [rawVisible_medOldZipCode, setRawVisible_medOldZipCode] = useState(true);
    const [rawVisible_btnSearchOldZipCode, setRawVisible_btnSearchOldZipCode] = useState(true);
    const [rawVisible_edOldAddr2, setRawVisible_edOldAddr2] = useState(true);
    const [rawVisible_edOldAddr1, setRawVisible_edOldAddr1] = useState(true);
    const [rawVisible_edBuildingNm, setRawVisible_edBuildingNm] = useState(true);
    const [rawVisible_edTelNo, setRawVisible_edTelNo] = useState(true);
    const [rawVisible_lbFeeYear, setRawVisible_lbFeeYear] = useState(true);
    const [rawVisible_lbFaxNo, setRawVisible_lbFaxNo] = useState(true);
    const [rawVisible_edFaxNo, setRawVisible_edFaxNo] = useState(true);
    const [rawVisible_lbExclusion, setRawVisible_lbExclusion] = useState(true);
    const [rawVisible_lbResidentNo, setRawVisible_lbResidentNo] = useState(true);
    const [rawVisible_lbAppointDate, setRawVisible_lbAppointDate] = useState(true);
    const [rawVisible_edFireDept, setRawVisible_edFireDept] = useState(true);
    const [rawVisible_lbBuildingInfo, setRawVisible_lbBuildingInfo] = useState(true);
    const [rawVisible_lbAppointNm, setRawVisible_lbAppointNm] = useState(true);
    const [rawVisible_edManagerNm, setRawVisible_edManagerNm] = useState(true);
    const [rawVisible_lbCustomerInfo, setRawVisible_lbCustomerInfo] = useState(true);
    const [rawVisible_lbMemStatus, setRawVisible_lbMemStatus] = useState(true);
    const [rawVisible_medMemStatusDate, setRawVisible_medMemStatusDate] = useState(true);
    const [rawVisible_btnUpdateManagerInfo, setRawVisible_btnUpdateManagerInfo] = useState(true);
    const [rawVisible_edCivilAppeal_old, setRawVisible_edCivilAppeal_old] = useState(true);
    const [rawVisible_lbCustNo, setRawVisible_lbCustNo] = useState(true);
    const [rawVisible_lbStation, setRawVisible_lbStation] = useState(true);
    const [rawVisible_lbNewAddr, setRawVisible_lbNewAddr] = useState(true);
    const [rawVisible_edNewAddr1, setRawVisible_edNewAddr1] = useState(true);
    const [rawVisible_medNewZipCode, setRawVisible_medNewZipCode] = useState(true);
    const [rawVisible_btnSearchNewZipCode, setRawVisible_btnSearchNewZipCode] = useState(true);
    const [rawVisible_edNewAddr2, setRawVisible_edNewAddr2] = useState(true);
    const [rawVisible_lbSection, setRawVisible_lbSection] = useState(true);
    const [rawVisible_lbAppointInfo, setRawVisible_lbAppointInfo] = useState(true);
    const [rawVisible_lbEndStatus, setRawVisible_lbEndStatus] = useState(true);
    const [rawVisible_btnAuthResidentNo, setRawVisible_btnAuthResidentNo] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_medResidentNo, setRawVisible_medResidentNo] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_calCancelDate, setRawVisible_calCancelDate] = useState(true);
    const [rawVisible_calAppointDate, setRawVisible_calAppointDate] = useState(true);
    const [rawVisible_calExclusionDate, setRawVisible_calExclusionDate] = useState(true);
    const [rawVisible_lbDelegateAddr, setRawVisible_lbDelegateAddr] = useState(true);
    const [rawVisible_radAddrGubun, setRawVisible_radAddrGubun] = useState(true);
    const [rawVisible_lbResidentNoError, setRawVisible_lbResidentNoError] = useState(false);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_cbxRegion, setRawVisible_cbxRegion] = useState(true);
    const [rawVisible_lbFireDept, setRawVisible_lbFireDept] = useState(true);
    const [rawVisible_lbCivilAppeal, setRawVisible_lbCivilAppeal] = useState(true);
    const [rawVisible_lbAddContent, setRawVisible_lbAddContent] = useState(true);
    const [rawVisible_btnSearchAddInfoH, setRawVisible_btnSearchAddInfoH] = useState(true);
    const [rawVisible_btnSaveAddInfo, setRawVisible_btnSaveAddInfo] = useState(true);
    const [rawVisible_cbxAddGubun, setRawVisible_cbxAddGubun] = useState(true);
    const [rawVisible_edAddContent, setRawVisible_edAddContent] = useState(true);
    const [rawVisible_lbBusiness, setRawVisible_lbBusiness] = useState(true);
    const [rawVisible_lbFeeMunje, setRawVisible_lbFeeMunje] = useState(true);
    const [rawVisible_lbBarCode, setRawVisible_lbBarCode] = useState(true);
    const [rawVisible_cbxBusiness, setRawVisible_cbxBusiness] = useState(true);
    const [rawVisible_btnSearchBuilding, setRawVisible_btnSearchBuilding] = useState(true);
    const [rawVisible_lbAddGubun, setRawVisible_lbAddGubun] = useState(true);
    const [rawVisible_btnConcurrentH, setRawVisible_btnConcurrentH] = useState(true);
    const [rawVisible_btnSearchFireDept, setRawVisible_btnSearchFireDept] = useState(true);
    const [rawVisible_btnEduDetailInfo1, setRawVisible_btnEduDetailInfo1] = useState(true);
    const [rawVisible_btnEducationInfo, setRawVisible_btnEducationInfo] = useState(true);
    const [rawVisible_lbAddInfo, setRawVisible_lbAddInfo] = useState(true);
    const [rawVisible_lbDelGubun, setRawVisible_lbDelGubun] = useState(true);
    const [rawVisible_cbxDelYN, setRawVisible_cbxDelYN] = useState(true);
    const [rawVisible_calDelDate, setRawVisible_calDelDate] = useState(true);
    const [rawVisible_meJoinYear, setRawVisible_meJoinYear] = useState(true);
    const [rawVisible_meFeeYear, setRawVisible_meFeeYear] = useState(true);
    const [rawVisible_edChargeNm, setRawVisible_edChargeNm] = useState(true);
    const [rawVisible_lbBuildingName, setRawVisible_lbBuildingName] = useState(true);
    const [rawVisible_cbxExclusionYN, setRawVisible_cbxExclusionYN] = useState(true);
    const [rawVisible_btnSearchChangeH, setRawVisible_btnSearchChangeH] = useState(true);
    const [rawVisible_Div3, setRawVisible_Div3] = useState(false);
    const [rawVisible_lbEducationInfo, setRawVisible_lbEducationInfo] = useState(true);
    const [rawVisible_btnEduDetailInfo2, setRawVisible_btnEduDetailInfo2] = useState(true);
    const [rawVisible_btnEduNoticeList, setRawVisible_btnEduNoticeList] = useState(true);
    const [rawVisible_btn_EduDetailClose, setRawVisible_btn_EduDetailClose] = useState(true);
    const [rawVisible_lbAgency, setRawVisible_lbAgency] = useState(true);
    const [rawVisible_cbxAgencyYn, setRawVisible_cbxAgencyYn] = useState(true);
    const [rawVisible_edAgencyNm, setRawVisible_edAgencyNm] = useState(true);
    const [rawVisible_btnSearchAgency, setRawVisible_btnSearchAgency] = useState(true);
    const [rawVisible_medBarCode, setRawVisible_medBarCode] = useState(true);
    const [rawVisible_cbxAddPost, setRawVisible_cbxAddPost] = useState(true);
    const [rawVisible_Div0, setRawVisible_Div0] = useState(true);
    const [rawVisible_lbPostPlace, setRawVisible_lbPostPlace] = useState(true);
    const [rawVisible_edPostPlace, setRawVisible_edPostPlace] = useState(true);
    const [rawVisible_lbPost, setRawVisible_lbPost] = useState(true);
    const [rawVisible_medPostZipCode, setRawVisible_medPostZipCode] = useState(true);
    const [rawVisible_btnSearchPostZipCode, setRawVisible_btnSearchPostZipCode] = useState(true);
    const [rawVisible_edPost1, setRawVisible_edPost1] = useState(true);
    const [rawVisible_edPost2, setRawVisible_edPost2] = useState(true);
    const [rawVisible_cbxPostGubun, setRawVisible_cbxPostGubun] = useState(true);
    const [rawVisible_btnSearchReturnPostH, setRawVisible_btnSearchReturnPostH] = useState(true);
    const [rawVisible_Div4, setRawVisible_Div4] = useState(false);
    const [rawVisible_edEduPostPlace, setRawVisible_edEduPostPlace] = useState(true);
    const [rawVisible_medEduPostZipCode, setRawVisible_medEduPostZipCode] = useState(true);
    const [rawVisible_btnSearchEduPostZipCode, setRawVisible_btnSearchEduPostZipCode] = useState(true);
    const [rawVisible_edEduPost1, setRawVisible_edEduPost1] = useState(true);
    const [rawVisible_edEduPost2, setRawVisible_edEduPost2] = useState(true);
    const [rawVisible_cbxEduPostGubun, setRawVisible_cbxEduPostGubun] = useState(true);
    const [rawVisible_btnSearchEduReturnPostH, setRawVisible_btnSearchEduReturnPostH] = useState(true);
    const [rawVisible_lbLocal, setRawVisible_lbLocal] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_lbDetailCourse, setRawVisible_lbDetailCourse] = useState(true);
    const [rawVisible_cbxDetailCourse, setRawVisible_cbxDetailCourse] = useState(true);
    const [rawVisible_btnEduNoti, setRawVisible_btnEduNoti] = useState(false);
    const [rawVisible_btnCustFee, setRawVisible_btnCustFee] = useState(false);
    const [rawVisible_cbxStatus, setRawVisible_cbxStatus] = useState(true);
    const [rawVisible_lbEmailCnt, setRawVisible_lbEmailCnt] = useState(true);
    const [rawVisible_medEmailCnt, setRawVisible_medEmailCnt] = useState(true);
    const [rawVisible_cbxPersonGubun, setRawVisible_cbxPersonGubun] = useState(true);
    const [rawVisible_btnSearchManagerList, setRawVisible_btnSearchManagerList] = useState(true);
    const [rawVisible_cbxFeeMunje, setRawVisible_cbxFeeMunje] = useState(true);
    const [rawVisible_lbStatusReason, setRawVisible_lbStatusReason] = useState(true);
    const [rawVisible_cbxStatusReason, setRawVisible_cbxStatusReason] = useState(true);
    const [rawVisible_radJibuGubun, setRawVisible_radJibuGubun] = useState(true);
    const [rawVisible_Div6, setRawVisible_Div6] = useState(false);
    const [rawVisible_tabTab1, setRawVisible_tabTab1] = useState(true);
    const [rawVisible_gdConnections, setRawVisible_gdConnections] = useState(true);
    const [rawVisible_gdDangerInfo, setRawVisible_gdDangerInfo] = useState(true);
    const [rawVisible_btnAddRow1, setRawVisible_btnAddRow1] = useState(true);
    const [rawVisible_btnDelRow1, setRawVisible_btnDelRow1] = useState(true);
    const [rawVisible_Div7, setRawVisible_Div7] = useState(false);
    const [rawVisible_gdTankInfo, setRawVisible_gdTankInfo] = useState(true);
    const [rawVisible_Div8, setRawVisible_Div8] = useState(false);
    const [rawVisible_cbxStation, setRawVisible_cbxStation] = useState(true);
    const [rawVisible_cbxCenter, setRawVisible_cbxCenter] = useState(true);
    const [rawVisible_lbChargeNm, setRawVisible_lbChargeNm] = useState(true);
    const [rawVisible_btnCustomerFee, setRawVisible_btnCustomerFee] = useState(true);
    const [rawVisible_btn_SearchFireManager, setRawVisible_btn_SearchFireManager] = useState(true);
    const [rawVisible_btnFireDeptList, setRawVisible_btnFireDeptList] = useState(true);
    const [rawVisible_lbOldCustNo, setRawVisible_lbOldCustNo] = useState(true);
    const [rawVisible_meOldCustNO, setRawVisible_meOldCustNO] = useState(true);
    const [rawVisible_lbEndStatusYn, setRawVisible_lbEndStatusYn] = useState(false);
    const [rawVisible_lbEndProcDate, setRawVisible_lbEndProcDate] = useState(false);
    const [rawVisible_calProcCancelDate, setRawVisible_calProcCancelDate] = useState(false);
    const [rawVisible_lbNewFMGubun, setRawVisible_lbNewFMGubun] = useState(true);
    const [rawVisible_chkSameBuilding, setRawVisible_chkSameBuilding] = useState(true);
    const [rawVisible_lbEndDate, setRawVisible_lbEndDate] = useState(true);
    const [rawVisible_btn_NextOldCNo, setRawVisible_btn_NextOldCNo] = useState(true);
    const [rawVisible_btnChangeBuilding, setRawVisible_btnChangeBuilding] = useState(true);
    const [rawVisible_lbPersonCustomer, setRawVisible_lbPersonCustomer] = useState(false);
    const [rawVisible_medCancelDate, setRawVisible_medCancelDate] = useState(true);
    const [rawVisible_btn_NextCNo, setRawVisible_btn_NextCNo] = useState(true);
    const [rawVisible_btn_BeforeCNo, setRawVisible_btn_BeforeCNo] = useState(true);
    const [rawVisible_btnFireSearch, setRawVisible_btnFireSearch] = useState(false);
    const [rawVisible_btnSearchCivilAppeal, setRawVisible_btnSearchCivilAppeal] = useState(true);
    const [rawVisible_cbxBonbu, setRawVisible_cbxBonbu] = useState(true);
    const [rawVisible_edCivilAppeal, setRawVisible_edCivilAppeal] = useState(true);
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_tabTab3 = rawVisible_tabTab3 && rawVisible_Shape4;
    const setIsVisible_tabTab3 = setRawVisible_tabTab3;
    const isVisible_lbEMail = rawVisible_lbEMail;
    const setIsVisible_lbEMail = setRawVisible_lbEMail;
    const isVisible_edEMailID = rawVisible_edEMailID;
    const setIsVisible_edEMailID = setRawVisible_edEMailID;
    const isVisible_lbTextEMail = rawVisible_lbTextEMail;
    const setIsVisible_lbTextEMail = setRawVisible_lbTextEMail;
    const isVisible_cbxEMailDomain = rawVisible_cbxEMailDomain;
    const setIsVisible_cbxEMailDomain = setRawVisible_cbxEMailDomain;
    const isVisible_lbPostAddr = rawVisible_lbPostAddr;
    const setIsVisible_lbPostAddr = setRawVisible_lbPostAddr;
    const isVisible_radPostAddrGubun = rawVisible_radPostAddrGubun;
    const setIsVisible_radPostAddrGubun = setRawVisible_radPostAddrGubun;
    const isVisible_lbOldPostAddr = rawVisible_lbOldPostAddr;
    const setIsVisible_lbOldPostAddr = setRawVisible_lbOldPostAddr;
    const isVisible_edOldPostAddr1 = rawVisible_edOldPostAddr1;
    const setIsVisible_edOldPostAddr1 = setRawVisible_edOldPostAddr1;
    const isVisible_medOldPostZipCode = rawVisible_medOldPostZipCode;
    const setIsVisible_medOldPostZipCode = setRawVisible_medOldPostZipCode;
    const isVisible_edOldPostAddr2 = rawVisible_edOldPostAddr2;
    const setIsVisible_edOldPostAddr2 = setRawVisible_edOldPostAddr2;
    const isVisible_btnSearchOldPostZipCode = rawVisible_btnSearchOldPostZipCode;
    const setIsVisible_btnSearchOldPostZipCode = setRawVisible_btnSearchOldPostZipCode;
    const isVisible_lbNewPostAddr = rawVisible_lbNewPostAddr;
    const setIsVisible_lbNewPostAddr = setRawVisible_lbNewPostAddr;
    const isVisible_edNewPostAddr1 = rawVisible_edNewPostAddr1;
    const setIsVisible_edNewPostAddr1 = setRawVisible_edNewPostAddr1;
    const isVisible_medNewPostZipCode = rawVisible_medNewPostZipCode;
    const setIsVisible_medNewPostZipCode = setRawVisible_medNewPostZipCode;
    const isVisible_btnSearchNewPostZipCode = rawVisible_btnSearchNewPostZipCode;
    const setIsVisible_btnSearchNewPostZipCode = setRawVisible_btnSearchNewPostZipCode;
    const isVisible_edNewPostAddr2 = rawVisible_edNewPostAddr2;
    const setIsVisible_edNewPostAddr2 = setRawVisible_edNewPostAddr2;
    const isVisible_lbPTel = rawVisible_lbPTel;
    const setIsVisible_lbPTel = setRawVisible_lbPTel;
    const isVisible_edPTel = rawVisible_edPTel;
    const setIsVisible_edPTel = setRawVisible_edPTel;
    const isVisible_lbTel = rawVisible_lbTel;
    const setIsVisible_lbTel = setRawVisible_lbTel;
    const isVisible_edTel = rawVisible_edTel;
    const setIsVisible_edTel = setRawVisible_edTel;
    const isVisible_edEmailDomain = rawVisible_edEmailDomain;
    const setIsVisible_edEmailDomain = setRawVisible_edEmailDomain;
    const isVisible_imgPicture = rawVisible_imgPicture;
    const setIsVisible_imgPicture = setRawVisible_imgPicture;
    const isVisible_gdOverBizInfo = rawVisible_gdOverBizInfo;
    const setIsVisible_gdOverBizInfo = setRawVisible_gdOverBizInfo;
    const isVisible_gdLicenseInfo = rawVisible_gdLicenseInfo;
    const setIsVisible_gdLicenseInfo = setRawVisible_gdLicenseInfo;
    const isVisible_Grid0 = rawVisible_Grid0;
    const setIsVisible_Grid0 = setRawVisible_Grid0;
    const isVisible_lbLicense1 = rawVisible_lbLicense1;
    const setIsVisible_lbLicense1 = setRawVisible_lbLicense1;
    const isVisible_lbLicense2 = rawVisible_lbLicense2;
    const setIsVisible_lbLicense2 = setRawVisible_lbLicense2;
    const isVisible_btnAddRow = rawVisible_btnAddRow;
    const setIsVisible_btnAddRow = setRawVisible_btnAddRow;
    const isVisible_btnDelRow = rawVisible_btnDelRow;
    const setIsVisible_btnDelRow = setRawVisible_btnDelRow;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_tabTab2 = rawVisible_tabTab2 && rawVisible_Shape5;
    const setIsVisible_tabTab2 = setRawVisible_tabTab2;
    const isVisible_gdMemFee = rawVisible_gdMemFee;
    const setIsVisible_gdMemFee = setRawVisible_gdMemFee;
    const isVisible_gdEduInfo = rawVisible_gdEduInfo;
    const setIsVisible_gdEduInfo = setRawVisible_gdEduInfo;
    const isVisible_btnEduPrtH = rawVisible_btnEduPrtH && rawVisible_Shape5;
    const setIsVisible_btnEduPrtH = setRawVisible_btnEduPrtH;
    const isVisible_Shape6 = rawVisible_Shape6 && rawVisible_Shape2;
    const setIsVisible_Shape6 = setRawVisible_Shape6;
    const isVisible_div2 = rawVisible_div2 && rawVisible_div1;
    const setIsVisible_div2 = setRawVisible_div2;
    const isVisible_lbCompanyNo = rawVisible_lbCompanyNo && rawVisible_divWorkFormTitle;
    const setIsVisible_lbCompanyNo = setRawVisible_lbCompanyNo;
    const isVisible_lbBizGubun = rawVisible_lbBizGubun;
    const setIsVisible_lbBizGubun = setRawVisible_lbBizGubun;
    const isVisible_cbxBizGubun = rawVisible_cbxBizGubun;
    const setIsVisible_cbxBizGubun = setRawVisible_cbxBizGubun;
    const isVisible_medCompanyNo = rawVisible_medCompanyNo && rawVisible_divWorkFormTitle;
    const setIsVisible_medCompanyNo = setRawVisible_medCompanyNo;
    const isVisible_div1 = rawVisible_div1 && rawVisible_div2;
    const setIsVisible_div1 = setRawVisible_div1;
    const isVisible_lbArea = rawVisible_lbArea && rawVisible_divWorkFormTitle;
    const setIsVisible_lbArea = setRawVisible_lbArea;
    const isVisible_lbEquipment = rawVisible_lbEquipment && rawVisible_divWorkFormTitle;
    const setIsVisible_lbEquipment = setRawVisible_lbEquipment;
    const isVisible_cbxEquipmentYn = rawVisible_cbxEquipmentYn && rawVisible_divWorkFormTitle;
    const setIsVisible_cbxEquipmentYn = setRawVisible_cbxEquipmentYn;
    const isVisible_lbText = rawVisible_lbText;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_medArea = rawVisible_medArea;
    const setIsVisible_medArea = setRawVisible_medArea;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnInput = rawVisible_btnInput && rawVisible_shpBtnBox;
    const setIsVisible_btnInput = setRawVisible_btnInput;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnGroupSearch = rawVisible_btnGroupSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnGroupSearch = setRawVisible_btnGroupSearch;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_medCustNo = rawVisible_medCustNo && rawVisible_Shape3;
    const setIsVisible_medCustNo = setRawVisible_medCustNo;
    const isVisible_lbOldAddr = rawVisible_lbOldAddr && rawVisible_Shape0;
    const setIsVisible_lbOldAddr = setRawVisible_lbOldAddr;
    const isVisible_lbBuildingNm = rawVisible_lbBuildingNm && rawVisible_Shape0;
    const setIsVisible_lbBuildingNm = setRawVisible_lbBuildingNm;
    const isVisible_lbTelNo = rawVisible_lbTelNo && rawVisible_Shape0;
    const setIsVisible_lbTelNo = setRawVisible_lbTelNo;
    const isVisible_lbJoinYear = rawVisible_lbJoinYear && rawVisible_Shape2;
    const setIsVisible_lbJoinYear = setRawVisible_lbJoinYear;
    const isVisible_medOldZipCode = rawVisible_medOldZipCode && rawVisible_Shape0;
    const setIsVisible_medOldZipCode = setRawVisible_medOldZipCode;
    const isVisible_btnSearchOldZipCode = rawVisible_btnSearchOldZipCode && rawVisible_Shape0;
    const setIsVisible_btnSearchOldZipCode = setRawVisible_btnSearchOldZipCode;
    const isVisible_edOldAddr2 = rawVisible_edOldAddr2 && rawVisible_Shape0;
    const setIsVisible_edOldAddr2 = setRawVisible_edOldAddr2;
    const isVisible_edOldAddr1 = rawVisible_edOldAddr1 && rawVisible_Shape0;
    const setIsVisible_edOldAddr1 = setRawVisible_edOldAddr1;
    const isVisible_edBuildingNm = rawVisible_edBuildingNm && rawVisible_Shape0;
    const setIsVisible_edBuildingNm = setRawVisible_edBuildingNm;
    const isVisible_edTelNo = rawVisible_edTelNo && rawVisible_Shape0;
    const setIsVisible_edTelNo = setRawVisible_edTelNo;
    const isVisible_lbFeeYear = rawVisible_lbFeeYear && rawVisible_Shape2;
    const setIsVisible_lbFeeYear = setRawVisible_lbFeeYear;
    const isVisible_lbFaxNo = rawVisible_lbFaxNo && rawVisible_Shape0;
    const setIsVisible_lbFaxNo = setRawVisible_lbFaxNo;
    const isVisible_edFaxNo = rawVisible_edFaxNo && rawVisible_Shape0;
    const setIsVisible_edFaxNo = setRawVisible_edFaxNo;
    const isVisible_lbExclusion = rawVisible_lbExclusion && rawVisible_Shape2;
    const setIsVisible_lbExclusion = setRawVisible_lbExclusion;
    const isVisible_lbResidentNo = rawVisible_lbResidentNo && rawVisible_Shape4;
    const setIsVisible_lbResidentNo = setRawVisible_lbResidentNo;
    const isVisible_lbAppointDate = rawVisible_lbAppointDate && rawVisible_Shape4;
    const setIsVisible_lbAppointDate = setRawVisible_lbAppointDate;
    const isVisible_edFireDept = rawVisible_edFireDept && rawVisible_Shape2;
    const setIsVisible_edFireDept = setRawVisible_edFireDept;
    const isVisible_lbBuildingInfo = rawVisible_lbBuildingInfo;
    const setIsVisible_lbBuildingInfo = setRawVisible_lbBuildingInfo;
    const isVisible_lbAppointNm = rawVisible_lbAppointNm && rawVisible_Shape4;
    const setIsVisible_lbAppointNm = setRawVisible_lbAppointNm;
    const isVisible_edManagerNm = rawVisible_edManagerNm && rawVisible_Shape4;
    const setIsVisible_edManagerNm = setRawVisible_edManagerNm;
    const isVisible_lbCustomerInfo = rawVisible_lbCustomerInfo;
    const setIsVisible_lbCustomerInfo = setRawVisible_lbCustomerInfo;
    const isVisible_lbMemStatus = rawVisible_lbMemStatus && rawVisible_Shape2;
    const setIsVisible_lbMemStatus = setRawVisible_lbMemStatus;
    const isVisible_medMemStatusDate = rawVisible_medMemStatusDate && rawVisible_Shape2;
    const setIsVisible_medMemStatusDate = setRawVisible_medMemStatusDate;
    const isVisible_btnUpdateManagerInfo = rawVisible_btnUpdateManagerInfo && rawVisible_Shape4;
    const setIsVisible_btnUpdateManagerInfo = setRawVisible_btnUpdateManagerInfo;
    const isVisible_edCivilAppeal_old = rawVisible_edCivilAppeal_old && rawVisible_Shape2;
    const setIsVisible_edCivilAppeal_old = setRawVisible_edCivilAppeal_old;
    const isVisible_lbCustNo = rawVisible_lbCustNo && rawVisible_Shape3;
    const setIsVisible_lbCustNo = setRawVisible_lbCustNo;
    const isVisible_lbStation = rawVisible_lbStation && rawVisible_Shape0;
    const setIsVisible_lbStation = setRawVisible_lbStation;
    const isVisible_lbNewAddr = rawVisible_lbNewAddr && rawVisible_Shape0;
    const setIsVisible_lbNewAddr = setRawVisible_lbNewAddr;
    const isVisible_edNewAddr1 = rawVisible_edNewAddr1 && rawVisible_Shape0;
    const setIsVisible_edNewAddr1 = setRawVisible_edNewAddr1;
    const isVisible_medNewZipCode = rawVisible_medNewZipCode && rawVisible_Shape0;
    const setIsVisible_medNewZipCode = setRawVisible_medNewZipCode;
    const isVisible_btnSearchNewZipCode = rawVisible_btnSearchNewZipCode && rawVisible_Shape0;
    const setIsVisible_btnSearchNewZipCode = setRawVisible_btnSearchNewZipCode;
    const isVisible_edNewAddr2 = rawVisible_edNewAddr2 && rawVisible_Shape0;
    const setIsVisible_edNewAddr2 = setRawVisible_edNewAddr2;
    const isVisible_lbSection = rawVisible_lbSection && rawVisible_Shape2;
    const setIsVisible_lbSection = setRawVisible_lbSection;
    const isVisible_lbAppointInfo = rawVisible_lbAppointInfo;
    const setIsVisible_lbAppointInfo = setRawVisible_lbAppointInfo;
    const isVisible_lbEndStatus = rawVisible_lbEndStatus && rawVisible_Shape4;
    const setIsVisible_lbEndStatus = setRawVisible_lbEndStatus;
    const isVisible_btnAuthResidentNo = rawVisible_btnAuthResidentNo && rawVisible_Shape4;
    const setIsVisible_btnAuthResidentNo = setRawVisible_btnAuthResidentNo;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape3;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_medResidentNo = rawVisible_medResidentNo && rawVisible_Shape4;
    const setIsVisible_medResidentNo = setRawVisible_medResidentNo;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape3;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_calCancelDate = rawVisible_calCancelDate && rawVisible_Shape4;
    const setIsVisible_calCancelDate = setRawVisible_calCancelDate;
    const isVisible_calAppointDate = rawVisible_calAppointDate && rawVisible_Shape4;
    const setIsVisible_calAppointDate = setRawVisible_calAppointDate;
    const isVisible_calExclusionDate = rawVisible_calExclusionDate && rawVisible_Shape2;
    const setIsVisible_calExclusionDate = setRawVisible_calExclusionDate;
    const isVisible_lbDelegateAddr = rawVisible_lbDelegateAddr && rawVisible_Shape0;
    const setIsVisible_lbDelegateAddr = setRawVisible_lbDelegateAddr;
    const isVisible_radAddrGubun = rawVisible_radAddrGubun && rawVisible_Shape0;
    const setIsVisible_radAddrGubun = setRawVisible_radAddrGubun;
    const isVisible_lbResidentNoError = rawVisible_lbResidentNoError && rawVisible_Shape4;
    const setIsVisible_lbResidentNoError = setRawVisible_lbResidentNoError;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape3;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_cbxRegion = rawVisible_cbxRegion && rawVisible_Shape3;
    const setIsVisible_cbxRegion = setRawVisible_cbxRegion;
    const isVisible_lbFireDept = rawVisible_lbFireDept && rawVisible_Shape2;
    const setIsVisible_lbFireDept = setRawVisible_lbFireDept;
    const isVisible_lbCivilAppeal = rawVisible_lbCivilAppeal && rawVisible_Shape2;
    const setIsVisible_lbCivilAppeal = setRawVisible_lbCivilAppeal;
    const isVisible_lbAddContent = rawVisible_lbAddContent && rawVisible_Shape6;
    const setIsVisible_lbAddContent = setRawVisible_lbAddContent;
    const isVisible_btnSearchAddInfoH = rawVisible_btnSearchAddInfoH && rawVisible_Shape6;
    const setIsVisible_btnSearchAddInfoH = setRawVisible_btnSearchAddInfoH;
    const isVisible_btnSaveAddInfo = rawVisible_btnSaveAddInfo && rawVisible_Shape6;
    const setIsVisible_btnSaveAddInfo = setRawVisible_btnSaveAddInfo;
    const isVisible_cbxAddGubun = rawVisible_cbxAddGubun && rawVisible_Shape6;
    const setIsVisible_cbxAddGubun = setRawVisible_cbxAddGubun;
    const isVisible_edAddContent = rawVisible_edAddContent && rawVisible_Shape6;
    const setIsVisible_edAddContent = setRawVisible_edAddContent;
    const isVisible_lbBusiness = rawVisible_lbBusiness && rawVisible_Shape0;
    const setIsVisible_lbBusiness = setRawVisible_lbBusiness;
    const isVisible_lbFeeMunje = rawVisible_lbFeeMunje && rawVisible_Shape2;
    const setIsVisible_lbFeeMunje = setRawVisible_lbFeeMunje;
    const isVisible_lbBarCode = rawVisible_lbBarCode && rawVisible_Shape3;
    const setIsVisible_lbBarCode = setRawVisible_lbBarCode;
    const isVisible_cbxBusiness = rawVisible_cbxBusiness && rawVisible_Shape0;
    const setIsVisible_cbxBusiness = setRawVisible_cbxBusiness;
    const isVisible_btnSearchBuilding = rawVisible_btnSearchBuilding && rawVisible_Shape0;
    const setIsVisible_btnSearchBuilding = setRawVisible_btnSearchBuilding;
    const isVisible_lbAddGubun = rawVisible_lbAddGubun && rawVisible_Shape6;
    const setIsVisible_lbAddGubun = setRawVisible_lbAddGubun;
    const isVisible_btnConcurrentH = rawVisible_btnConcurrentH && rawVisible_Shape2;
    const setIsVisible_btnConcurrentH = setRawVisible_btnConcurrentH;
    const isVisible_btnSearchFireDept = rawVisible_btnSearchFireDept && rawVisible_Shape2;
    const setIsVisible_btnSearchFireDept = setRawVisible_btnSearchFireDept;
    const isVisible_btnEduDetailInfo1 = rawVisible_btnEduDetailInfo1 && rawVisible_Shape5;
    const setIsVisible_btnEduDetailInfo1 = setRawVisible_btnEduDetailInfo1;
    const isVisible_btnEducationInfo = rawVisible_btnEducationInfo && rawVisible_Shape5;
    const setIsVisible_btnEducationInfo = setRawVisible_btnEducationInfo;
    const isVisible_lbAddInfo = rawVisible_lbAddInfo && rawVisible_Shape6;
    const setIsVisible_lbAddInfo = setRawVisible_lbAddInfo;
    const isVisible_lbDelGubun = rawVisible_lbDelGubun && rawVisible_Shape2;
    const setIsVisible_lbDelGubun = setRawVisible_lbDelGubun;
    const isVisible_cbxDelYN = rawVisible_cbxDelYN && rawVisible_Shape2;
    const setIsVisible_cbxDelYN = setRawVisible_cbxDelYN;
    const isVisible_calDelDate = rawVisible_calDelDate && rawVisible_Shape2;
    const setIsVisible_calDelDate = setRawVisible_calDelDate;
    const isVisible_meJoinYear = rawVisible_meJoinYear && rawVisible_Shape2;
    const setIsVisible_meJoinYear = setRawVisible_meJoinYear;
    const isVisible_meFeeYear = rawVisible_meFeeYear && rawVisible_Shape2;
    const setIsVisible_meFeeYear = setRawVisible_meFeeYear;
    const isVisible_edChargeNm = rawVisible_edChargeNm && rawVisible_Shape0;
    const setIsVisible_edChargeNm = setRawVisible_edChargeNm;
    const isVisible_lbBuildingName = rawVisible_lbBuildingName && rawVisible_Shape0;
    const setIsVisible_lbBuildingName = setRawVisible_lbBuildingName;
    const isVisible_cbxExclusionYN = rawVisible_cbxExclusionYN && rawVisible_Shape2;
    const setIsVisible_cbxExclusionYN = setRawVisible_cbxExclusionYN;
    const isVisible_btnSearchChangeH = rawVisible_btnSearchChangeH && rawVisible_Shape2;
    const setIsVisible_btnSearchChangeH = setRawVisible_btnSearchChangeH;
    const isVisible_Div3 = rawVisible_Div3;
    const setIsVisible_Div3 = setRawVisible_Div3;
    const isVisible_lbEducationInfo = rawVisible_lbEducationInfo && rawVisible_divWorkFormTitle;
    const setIsVisible_lbEducationInfo = setRawVisible_lbEducationInfo;
    const isVisible_btnEduDetailInfo2 = rawVisible_btnEduDetailInfo2;
    const setIsVisible_btnEduDetailInfo2 = setRawVisible_btnEduDetailInfo2;
    const isVisible_btnEduNoticeList = rawVisible_btnEduNoticeList;
    const setIsVisible_btnEduNoticeList = setRawVisible_btnEduNoticeList;
    const isVisible_btn_EduDetailClose = rawVisible_btn_EduDetailClose && rawVisible_shpBtnBox;
    const setIsVisible_btn_EduDetailClose = setRawVisible_btn_EduDetailClose;
    const isVisible_lbAgency = rawVisible_lbAgency && rawVisible_Shape2;
    const setIsVisible_lbAgency = setRawVisible_lbAgency;
    const isVisible_cbxAgencyYn = rawVisible_cbxAgencyYn && rawVisible_Shape2;
    const setIsVisible_cbxAgencyYn = setRawVisible_cbxAgencyYn;
    const isVisible_edAgencyNm = rawVisible_edAgencyNm && rawVisible_Shape2;
    const setIsVisible_edAgencyNm = setRawVisible_edAgencyNm;
    const isVisible_btnSearchAgency = rawVisible_btnSearchAgency && rawVisible_Shape2;
    const setIsVisible_btnSearchAgency = setRawVisible_btnSearchAgency;
    const isVisible_medBarCode = rawVisible_medBarCode && rawVisible_Shape3;
    const setIsVisible_medBarCode = setRawVisible_medBarCode;
    const isVisible_cbxAddPost = rawVisible_cbxAddPost && rawVisible_Shape2;
    const setIsVisible_cbxAddPost = setRawVisible_cbxAddPost;
    const isVisible_Div0 = rawVisible_Div0 && rawVisible_Div4;
    const setIsVisible_Div0 = setRawVisible_Div0;
    const isVisible_lbPostPlace = rawVisible_lbPostPlace;
    const setIsVisible_lbPostPlace = setRawVisible_lbPostPlace;
    const isVisible_edPostPlace = rawVisible_edPostPlace && rawVisible_Shape3;
    const setIsVisible_edPostPlace = setRawVisible_edPostPlace;
    const isVisible_lbPost = rawVisible_lbPost && rawVisible_divWorkFormTitle;
    const setIsVisible_lbPost = setRawVisible_lbPost;
    const isVisible_medPostZipCode = rawVisible_medPostZipCode;
    const setIsVisible_medPostZipCode = setRawVisible_medPostZipCode;
    const isVisible_btnSearchPostZipCode = rawVisible_btnSearchPostZipCode;
    const setIsVisible_btnSearchPostZipCode = setRawVisible_btnSearchPostZipCode;
    const isVisible_edPost1 = rawVisible_edPost1;
    const setIsVisible_edPost1 = setRawVisible_edPost1;
    const isVisible_edPost2 = rawVisible_edPost2;
    const setIsVisible_edPost2 = setRawVisible_edPost2;
    const isVisible_cbxPostGubun = rawVisible_cbxPostGubun;
    const setIsVisible_cbxPostGubun = setRawVisible_cbxPostGubun;
    const isVisible_btnSearchReturnPostH = rawVisible_btnSearchReturnPostH && rawVisible_Shape3;
    const setIsVisible_btnSearchReturnPostH = setRawVisible_btnSearchReturnPostH;
    const isVisible_Div4 = rawVisible_Div4 && rawVisible_Div0;
    const setIsVisible_Div4 = setRawVisible_Div4;
    const isVisible_edEduPostPlace = rawVisible_edEduPostPlace && rawVisible_Shape3;
    const setIsVisible_edEduPostPlace = setRawVisible_edEduPostPlace;
    const isVisible_medEduPostZipCode = rawVisible_medEduPostZipCode;
    const setIsVisible_medEduPostZipCode = setRawVisible_medEduPostZipCode;
    const isVisible_btnSearchEduPostZipCode = rawVisible_btnSearchEduPostZipCode;
    const setIsVisible_btnSearchEduPostZipCode = setRawVisible_btnSearchEduPostZipCode;
    const isVisible_edEduPost1 = rawVisible_edEduPost1;
    const setIsVisible_edEduPost1 = setRawVisible_edEduPost1;
    const isVisible_edEduPost2 = rawVisible_edEduPost2;
    const setIsVisible_edEduPost2 = setRawVisible_edEduPost2;
    const isVisible_cbxEduPostGubun = rawVisible_cbxEduPostGubun;
    const setIsVisible_cbxEduPostGubun = setRawVisible_cbxEduPostGubun;
    const isVisible_btnSearchEduReturnPostH = rawVisible_btnSearchEduReturnPostH && rawVisible_Shape3;
    const setIsVisible_btnSearchEduReturnPostH = setRawVisible_btnSearchEduReturnPostH;
    const isVisible_lbLocal = rawVisible_lbLocal && rawVisible_Shape3;
    const setIsVisible_lbLocal = setRawVisible_lbLocal;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape3;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_lbDetailCourse = rawVisible_lbDetailCourse && rawVisible_Shape3;
    const setIsVisible_lbDetailCourse = setRawVisible_lbDetailCourse;
    const isVisible_cbxDetailCourse = rawVisible_cbxDetailCourse && rawVisible_Shape3;
    const setIsVisible_cbxDetailCourse = setRawVisible_cbxDetailCourse;
    const isVisible_btnEduNoti = rawVisible_btnEduNoti && rawVisible_Shape2;
    const setIsVisible_btnEduNoti = setRawVisible_btnEduNoti;
    const isVisible_btnCustFee = rawVisible_btnCustFee && rawVisible_Shape2;
    const setIsVisible_btnCustFee = setRawVisible_btnCustFee;
    const isVisible_cbxStatus = rawVisible_cbxStatus && rawVisible_Shape2;
    const setIsVisible_cbxStatus = setRawVisible_cbxStatus;
    const isVisible_lbEmailCnt = rawVisible_lbEmailCnt && rawVisible_Shape5;
    const setIsVisible_lbEmailCnt = setRawVisible_lbEmailCnt;
    const isVisible_medEmailCnt = rawVisible_medEmailCnt && rawVisible_Shape5;
    const setIsVisible_medEmailCnt = setRawVisible_medEmailCnt;
    const isVisible_cbxPersonGubun = rawVisible_cbxPersonGubun && rawVisible_Shape2;
    const setIsVisible_cbxPersonGubun = setRawVisible_cbxPersonGubun;
    const isVisible_btnSearchManagerList = rawVisible_btnSearchManagerList;
    const setIsVisible_btnSearchManagerList = setRawVisible_btnSearchManagerList;
    const isVisible_cbxFeeMunje = rawVisible_cbxFeeMunje && rawVisible_Shape2;
    const setIsVisible_cbxFeeMunje = setRawVisible_cbxFeeMunje;
    const isVisible_lbStatusReason = rawVisible_lbStatusReason && rawVisible_Shape2;
    const setIsVisible_lbStatusReason = setRawVisible_lbStatusReason;
    const isVisible_cbxStatusReason = rawVisible_cbxStatusReason && rawVisible_Shape2;
    const setIsVisible_cbxStatusReason = setRawVisible_cbxStatusReason;
    const isVisible_radJibuGubun = rawVisible_radJibuGubun;
    const setIsVisible_radJibuGubun = setRawVisible_radJibuGubun;
    const isVisible_Div6 = rawVisible_Div6 && rawVisible_Shape0;
    const setIsVisible_Div6 = setRawVisible_Div6;
    const isVisible_tabTab1 = rawVisible_tabTab1;
    const setIsVisible_tabTab1 = setRawVisible_tabTab1;
    const isVisible_gdConnections = rawVisible_gdConnections;
    const setIsVisible_gdConnections = setRawVisible_gdConnections;
    const isVisible_gdDangerInfo = rawVisible_gdDangerInfo;
    const setIsVisible_gdDangerInfo = setRawVisible_gdDangerInfo;
    const isVisible_btnAddRow1 = rawVisible_btnAddRow1;
    const setIsVisible_btnAddRow1 = setRawVisible_btnAddRow1;
    const isVisible_btnDelRow1 = rawVisible_btnDelRow1 && rawVisible_shpBtnBox;
    const setIsVisible_btnDelRow1 = setRawVisible_btnDelRow1;
    const isVisible_Div7 = rawVisible_Div7;
    const setIsVisible_Div7 = setRawVisible_Div7;
    const isVisible_gdTankInfo = rawVisible_gdTankInfo;
    const setIsVisible_gdTankInfo = setRawVisible_gdTankInfo;
    const isVisible_Div8 = rawVisible_Div8;
    const setIsVisible_Div8 = setRawVisible_Div8;
    const isVisible_cbxStation = rawVisible_cbxStation && rawVisible_Shape0;
    const setIsVisible_cbxStation = setRawVisible_cbxStation;
    const isVisible_cbxCenter = rawVisible_cbxCenter && rawVisible_Shape0;
    const setIsVisible_cbxCenter = setRawVisible_cbxCenter;
    const isVisible_lbChargeNm = rawVisible_lbChargeNm && rawVisible_Shape0;
    const setIsVisible_lbChargeNm = setRawVisible_lbChargeNm;
    const isVisible_btnCustomerFee = rawVisible_btnCustomerFee && rawVisible_Shape5;
    const setIsVisible_btnCustomerFee = setRawVisible_btnCustomerFee;
    const isVisible_btn_SearchFireManager = rawVisible_btn_SearchFireManager && rawVisible_Shape4;
    const setIsVisible_btn_SearchFireManager = setRawVisible_btn_SearchFireManager;
    const isVisible_btnFireDeptList = rawVisible_btnFireDeptList && rawVisible_Shape2;
    const setIsVisible_btnFireDeptList = setRawVisible_btnFireDeptList;
    const isVisible_lbOldCustNo = rawVisible_lbOldCustNo && rawVisible_Shape2;
    const setIsVisible_lbOldCustNo = setRawVisible_lbOldCustNo;
    const isVisible_meOldCustNO = rawVisible_meOldCustNO && rawVisible_Shape2;
    const setIsVisible_meOldCustNO = setRawVisible_meOldCustNO;
    const isVisible_lbEndStatusYn = rawVisible_lbEndStatusYn && rawVisible_Shape4;
    const setIsVisible_lbEndStatusYn = setRawVisible_lbEndStatusYn;
    const isVisible_lbEndProcDate = rawVisible_lbEndProcDate;
    const setIsVisible_lbEndProcDate = setRawVisible_lbEndProcDate;
    const isVisible_calProcCancelDate = rawVisible_calProcCancelDate;
    const setIsVisible_calProcCancelDate = setRawVisible_calProcCancelDate;
    const isVisible_lbNewFMGubun = rawVisible_lbNewFMGubun;
    const setIsVisible_lbNewFMGubun = setRawVisible_lbNewFMGubun;
    const isVisible_chkSameBuilding = rawVisible_chkSameBuilding && rawVisible_Shape0;
    const setIsVisible_chkSameBuilding = setRawVisible_chkSameBuilding;
    const isVisible_lbEndDate = rawVisible_lbEndDate && rawVisible_Shape4;
    const setIsVisible_lbEndDate = setRawVisible_lbEndDate;
    const isVisible_btn_NextOldCNo = rawVisible_btn_NextOldCNo && rawVisible_Shape2;
    const setIsVisible_btn_NextOldCNo = setRawVisible_btn_NextOldCNo;
    const isVisible_btnChangeBuilding = rawVisible_btnChangeBuilding;
    const setIsVisible_btnChangeBuilding = setRawVisible_btnChangeBuilding;
    const isVisible_lbPersonCustomer = rawVisible_lbPersonCustomer && rawVisible_Shape0;
    const setIsVisible_lbPersonCustomer = setRawVisible_lbPersonCustomer;
    const isVisible_medCancelDate = rawVisible_medCancelDate && rawVisible_Shape4;
    const setIsVisible_medCancelDate = setRawVisible_medCancelDate;
    const isVisible_btn_NextCNo = rawVisible_btn_NextCNo && rawVisible_Shape3;
    const setIsVisible_btn_NextCNo = setRawVisible_btn_NextCNo;
    const isVisible_btn_BeforeCNo = rawVisible_btn_BeforeCNo && rawVisible_Shape3;
    const setIsVisible_btn_BeforeCNo = setRawVisible_btn_BeforeCNo;
    const isVisible_btnFireSearch = rawVisible_btnFireSearch;
    const setIsVisible_btnFireSearch = setRawVisible_btnFireSearch;
    const isVisible_btnSearchCivilAppeal = rawVisible_btnSearchCivilAppeal && rawVisible_Shape2;
    const setIsVisible_btnSearchCivilAppeal = setRawVisible_btnSearchCivilAppeal;
    const isVisible_cbxBonbu = rawVisible_cbxBonbu && rawVisible_Shape0;
    const setIsVisible_cbxBonbu = setRawVisible_cbxBonbu;
    const isVisible_edCivilAppeal = rawVisible_edCivilAppeal && rawVisible_Shape2;
    const setIsVisible_edCivilAppeal = setRawVisible_edCivilAppeal;
    const [tabValue_tabTab3, setTabValue_tabTab3] = useState(0);
    const [tabValue_tabTab2, setTabValue_tabTab2] = useState(0);
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);

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
            setIsLoading(false);
        }, 500);
    }, []);

    const Div0_btnSearchPostZipCode_OnClick = () => {
        console.log('Div0_btnSearchPostZipCode_OnClick clicked');
    };
    const Div0_btnSearchReturnPostH_OnClick = () => {
        console.log('Div0_btnSearchReturnPostH_OnClick clicked');
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
    const btnEduDetailInfo1_OnClick = () => {
        console.log('btnEduDetailInfo1_OnClick clicked');
    };
    const btnEduNoti_OnClick = () => {
        console.log('btnEduNoti_OnClick clicked');
    };
    const btnEduPrtH_OnClick = () => {
        console.log('btnEduPrtH_OnClick clicked');
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
    const btnSearchNewZipCode_OnClick = () => {
        console.log('btnSearchNewZipCode_OnClick clicked');
    };
    const btnSearchOldZipCode_OnClick = () => {
        console.log('btnSearchOldZipCode_OnClick clicked');
    };
    const btnUpdateManagerInfo_OnClick = () => {
        console.log('btnUpdateManagerInfo_OnClick clicked');
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
    const tabTab3_tabpgTab3Page1_btnSearchNewPostZipCode_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnSearchNewPostZipCode_OnClick clicked');
    };
    const tabTab3_tabpgTab3Page1_btnSearchOldPostZipCode_OnClick = () => {
        console.log('tabTab3_tabpgTab3Page1_btnSearchOldPostZipCode_OnClick clicked');
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
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_tabTab3,
        setIsVisible_tabTab3,
        isVisible_lbEMail,
        setIsVisible_lbEMail,
        isVisible_edEMailID,
        setIsVisible_edEMailID,
        isVisible_lbTextEMail,
        setIsVisible_lbTextEMail,
        isVisible_cbxEMailDomain,
        setIsVisible_cbxEMailDomain,
        isVisible_lbPostAddr,
        setIsVisible_lbPostAddr,
        isVisible_radPostAddrGubun,
        setIsVisible_radPostAddrGubun,
        isVisible_lbOldPostAddr,
        setIsVisible_lbOldPostAddr,
        isVisible_edOldPostAddr1,
        setIsVisible_edOldPostAddr1,
        isVisible_medOldPostZipCode,
        setIsVisible_medOldPostZipCode,
        isVisible_edOldPostAddr2,
        setIsVisible_edOldPostAddr2,
        isVisible_btnSearchOldPostZipCode,
        setIsVisible_btnSearchOldPostZipCode,
        isVisible_lbNewPostAddr,
        setIsVisible_lbNewPostAddr,
        isVisible_edNewPostAddr1,
        setIsVisible_edNewPostAddr1,
        isVisible_medNewPostZipCode,
        setIsVisible_medNewPostZipCode,
        isVisible_btnSearchNewPostZipCode,
        setIsVisible_btnSearchNewPostZipCode,
        isVisible_edNewPostAddr2,
        setIsVisible_edNewPostAddr2,
        isVisible_lbPTel,
        setIsVisible_lbPTel,
        isVisible_edPTel,
        setIsVisible_edPTel,
        isVisible_lbTel,
        setIsVisible_lbTel,
        isVisible_edTel,
        setIsVisible_edTel,
        isVisible_edEmailDomain,
        setIsVisible_edEmailDomain,
        isVisible_imgPicture,
        setIsVisible_imgPicture,
        isVisible_gdOverBizInfo,
        setIsVisible_gdOverBizInfo,
        isVisible_gdLicenseInfo,
        setIsVisible_gdLicenseInfo,
        isVisible_Grid0,
        setIsVisible_Grid0,
        isVisible_lbLicense1,
        setIsVisible_lbLicense1,
        isVisible_lbLicense2,
        setIsVisible_lbLicense2,
        isVisible_btnAddRow,
        setIsVisible_btnAddRow,
        isVisible_btnDelRow,
        setIsVisible_btnDelRow,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_tabTab2,
        setIsVisible_tabTab2,
        isVisible_gdMemFee,
        setIsVisible_gdMemFee,
        isVisible_gdEduInfo,
        setIsVisible_gdEduInfo,
        isVisible_btnEduPrtH,
        setIsVisible_btnEduPrtH,
        isVisible_Shape6,
        setIsVisible_Shape6,
        isVisible_div2,
        setIsVisible_div2,
        isVisible_lbCompanyNo,
        setIsVisible_lbCompanyNo,
        isVisible_lbBizGubun,
        setIsVisible_lbBizGubun,
        isVisible_cbxBizGubun,
        setIsVisible_cbxBizGubun,
        isVisible_medCompanyNo,
        setIsVisible_medCompanyNo,
        isVisible_div1,
        setIsVisible_div1,
        isVisible_lbArea,
        setIsVisible_lbArea,
        isVisible_lbEquipment,
        setIsVisible_lbEquipment,
        isVisible_cbxEquipmentYn,
        setIsVisible_cbxEquipmentYn,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_medArea,
        setIsVisible_medArea,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnInput,
        setIsVisible_btnInput,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnGroupSearch,
        setIsVisible_btnGroupSearch,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_medCustNo,
        setIsVisible_medCustNo,
        isVisible_lbOldAddr,
        setIsVisible_lbOldAddr,
        isVisible_lbBuildingNm,
        setIsVisible_lbBuildingNm,
        isVisible_lbTelNo,
        setIsVisible_lbTelNo,
        isVisible_lbJoinYear,
        setIsVisible_lbJoinYear,
        isVisible_medOldZipCode,
        setIsVisible_medOldZipCode,
        isVisible_btnSearchOldZipCode,
        setIsVisible_btnSearchOldZipCode,
        isVisible_edOldAddr2,
        setIsVisible_edOldAddr2,
        isVisible_edOldAddr1,
        setIsVisible_edOldAddr1,
        isVisible_edBuildingNm,
        setIsVisible_edBuildingNm,
        isVisible_edTelNo,
        setIsVisible_edTelNo,
        isVisible_lbFeeYear,
        setIsVisible_lbFeeYear,
        isVisible_lbFaxNo,
        setIsVisible_lbFaxNo,
        isVisible_edFaxNo,
        setIsVisible_edFaxNo,
        isVisible_lbExclusion,
        setIsVisible_lbExclusion,
        isVisible_lbResidentNo,
        setIsVisible_lbResidentNo,
        isVisible_lbAppointDate,
        setIsVisible_lbAppointDate,
        isVisible_edFireDept,
        setIsVisible_edFireDept,
        isVisible_lbBuildingInfo,
        setIsVisible_lbBuildingInfo,
        isVisible_lbAppointNm,
        setIsVisible_lbAppointNm,
        isVisible_edManagerNm,
        setIsVisible_edManagerNm,
        isVisible_lbCustomerInfo,
        setIsVisible_lbCustomerInfo,
        isVisible_lbMemStatus,
        setIsVisible_lbMemStatus,
        isVisible_medMemStatusDate,
        setIsVisible_medMemStatusDate,
        isVisible_btnUpdateManagerInfo,
        setIsVisible_btnUpdateManagerInfo,
        isVisible_edCivilAppeal_old,
        setIsVisible_edCivilAppeal_old,
        isVisible_lbCustNo,
        setIsVisible_lbCustNo,
        isVisible_lbStation,
        setIsVisible_lbStation,
        isVisible_lbNewAddr,
        setIsVisible_lbNewAddr,
        isVisible_edNewAddr1,
        setIsVisible_edNewAddr1,
        isVisible_medNewZipCode,
        setIsVisible_medNewZipCode,
        isVisible_btnSearchNewZipCode,
        setIsVisible_btnSearchNewZipCode,
        isVisible_edNewAddr2,
        setIsVisible_edNewAddr2,
        isVisible_lbSection,
        setIsVisible_lbSection,
        isVisible_lbAppointInfo,
        setIsVisible_lbAppointInfo,
        isVisible_lbEndStatus,
        setIsVisible_lbEndStatus,
        isVisible_btnAuthResidentNo,
        setIsVisible_btnAuthResidentNo,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_medResidentNo,
        setIsVisible_medResidentNo,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_calCancelDate,
        setIsVisible_calCancelDate,
        isVisible_calAppointDate,
        setIsVisible_calAppointDate,
        isVisible_calExclusionDate,
        setIsVisible_calExclusionDate,
        isVisible_lbDelegateAddr,
        setIsVisible_lbDelegateAddr,
        isVisible_radAddrGubun,
        setIsVisible_radAddrGubun,
        isVisible_lbResidentNoError,
        setIsVisible_lbResidentNoError,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_cbxRegion,
        setIsVisible_cbxRegion,
        isVisible_lbFireDept,
        setIsVisible_lbFireDept,
        isVisible_lbCivilAppeal,
        setIsVisible_lbCivilAppeal,
        isVisible_lbAddContent,
        setIsVisible_lbAddContent,
        isVisible_btnSearchAddInfoH,
        setIsVisible_btnSearchAddInfoH,
        isVisible_btnSaveAddInfo,
        setIsVisible_btnSaveAddInfo,
        isVisible_cbxAddGubun,
        setIsVisible_cbxAddGubun,
        isVisible_edAddContent,
        setIsVisible_edAddContent,
        isVisible_lbBusiness,
        setIsVisible_lbBusiness,
        isVisible_lbFeeMunje,
        setIsVisible_lbFeeMunje,
        isVisible_lbBarCode,
        setIsVisible_lbBarCode,
        isVisible_cbxBusiness,
        setIsVisible_cbxBusiness,
        isVisible_btnSearchBuilding,
        setIsVisible_btnSearchBuilding,
        isVisible_lbAddGubun,
        setIsVisible_lbAddGubun,
        isVisible_btnConcurrentH,
        setIsVisible_btnConcurrentH,
        isVisible_btnSearchFireDept,
        setIsVisible_btnSearchFireDept,
        isVisible_btnEduDetailInfo1,
        setIsVisible_btnEduDetailInfo1,
        isVisible_btnEducationInfo,
        setIsVisible_btnEducationInfo,
        isVisible_lbAddInfo,
        setIsVisible_lbAddInfo,
        isVisible_lbDelGubun,
        setIsVisible_lbDelGubun,
        isVisible_cbxDelYN,
        setIsVisible_cbxDelYN,
        isVisible_calDelDate,
        setIsVisible_calDelDate,
        isVisible_meJoinYear,
        setIsVisible_meJoinYear,
        isVisible_meFeeYear,
        setIsVisible_meFeeYear,
        isVisible_edChargeNm,
        setIsVisible_edChargeNm,
        isVisible_lbBuildingName,
        setIsVisible_lbBuildingName,
        isVisible_cbxExclusionYN,
        setIsVisible_cbxExclusionYN,
        isVisible_btnSearchChangeH,
        setIsVisible_btnSearchChangeH,
        isVisible_Div3,
        setIsVisible_Div3,
        isVisible_lbEducationInfo,
        setIsVisible_lbEducationInfo,
        isVisible_btnEduDetailInfo2,
        setIsVisible_btnEduDetailInfo2,
        isVisible_btnEduNoticeList,
        setIsVisible_btnEduNoticeList,
        isVisible_btn_EduDetailClose,
        setIsVisible_btn_EduDetailClose,
        isVisible_lbAgency,
        setIsVisible_lbAgency,
        isVisible_cbxAgencyYn,
        setIsVisible_cbxAgencyYn,
        isVisible_edAgencyNm,
        setIsVisible_edAgencyNm,
        isVisible_btnSearchAgency,
        setIsVisible_btnSearchAgency,
        isVisible_medBarCode,
        setIsVisible_medBarCode,
        isVisible_cbxAddPost,
        setIsVisible_cbxAddPost,
        isVisible_Div0,
        setIsVisible_Div0,
        isVisible_lbPostPlace,
        setIsVisible_lbPostPlace,
        isVisible_edPostPlace,
        setIsVisible_edPostPlace,
        isVisible_lbPost,
        setIsVisible_lbPost,
        isVisible_medPostZipCode,
        setIsVisible_medPostZipCode,
        isVisible_btnSearchPostZipCode,
        setIsVisible_btnSearchPostZipCode,
        isVisible_edPost1,
        setIsVisible_edPost1,
        isVisible_edPost2,
        setIsVisible_edPost2,
        isVisible_cbxPostGubun,
        setIsVisible_cbxPostGubun,
        isVisible_btnSearchReturnPostH,
        setIsVisible_btnSearchReturnPostH,
        isVisible_Div4,
        setIsVisible_Div4,
        isVisible_edEduPostPlace,
        setIsVisible_edEduPostPlace,
        isVisible_medEduPostZipCode,
        setIsVisible_medEduPostZipCode,
        isVisible_btnSearchEduPostZipCode,
        setIsVisible_btnSearchEduPostZipCode,
        isVisible_edEduPost1,
        setIsVisible_edEduPost1,
        isVisible_edEduPost2,
        setIsVisible_edEduPost2,
        isVisible_cbxEduPostGubun,
        setIsVisible_cbxEduPostGubun,
        isVisible_btnSearchEduReturnPostH,
        setIsVisible_btnSearchEduReturnPostH,
        isVisible_lbLocal,
        setIsVisible_lbLocal,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_lbDetailCourse,
        setIsVisible_lbDetailCourse,
        isVisible_cbxDetailCourse,
        setIsVisible_cbxDetailCourse,
        isVisible_btnEduNoti,
        setIsVisible_btnEduNoti,
        isVisible_btnCustFee,
        setIsVisible_btnCustFee,
        isVisible_cbxStatus,
        setIsVisible_cbxStatus,
        isVisible_lbEmailCnt,
        setIsVisible_lbEmailCnt,
        isVisible_medEmailCnt,
        setIsVisible_medEmailCnt,
        isVisible_cbxPersonGubun,
        setIsVisible_cbxPersonGubun,
        isVisible_btnSearchManagerList,
        setIsVisible_btnSearchManagerList,
        isVisible_cbxFeeMunje,
        setIsVisible_cbxFeeMunje,
        isVisible_lbStatusReason,
        setIsVisible_lbStatusReason,
        isVisible_cbxStatusReason,
        setIsVisible_cbxStatusReason,
        isVisible_radJibuGubun,
        setIsVisible_radJibuGubun,
        isVisible_Div6,
        setIsVisible_Div6,
        isVisible_tabTab1,
        setIsVisible_tabTab1,
        isVisible_gdConnections,
        setIsVisible_gdConnections,
        isVisible_gdDangerInfo,
        setIsVisible_gdDangerInfo,
        isVisible_btnAddRow1,
        setIsVisible_btnAddRow1,
        isVisible_btnDelRow1,
        setIsVisible_btnDelRow1,
        isVisible_Div7,
        setIsVisible_Div7,
        isVisible_gdTankInfo,
        setIsVisible_gdTankInfo,
        isVisible_Div8,
        setIsVisible_Div8,
        isVisible_cbxStation,
        setIsVisible_cbxStation,
        isVisible_cbxCenter,
        setIsVisible_cbxCenter,
        isVisible_lbChargeNm,
        setIsVisible_lbChargeNm,
        isVisible_btnCustomerFee,
        setIsVisible_btnCustomerFee,
        isVisible_btn_SearchFireManager,
        setIsVisible_btn_SearchFireManager,
        isVisible_btnFireDeptList,
        setIsVisible_btnFireDeptList,
        isVisible_lbOldCustNo,
        setIsVisible_lbOldCustNo,
        isVisible_meOldCustNO,
        setIsVisible_meOldCustNO,
        isVisible_lbEndStatusYn,
        setIsVisible_lbEndStatusYn,
        isVisible_lbEndProcDate,
        setIsVisible_lbEndProcDate,
        isVisible_calProcCancelDate,
        setIsVisible_calProcCancelDate,
        isVisible_lbNewFMGubun,
        setIsVisible_lbNewFMGubun,
        isVisible_chkSameBuilding,
        setIsVisible_chkSameBuilding,
        isVisible_lbEndDate,
        setIsVisible_lbEndDate,
        isVisible_btn_NextOldCNo,
        setIsVisible_btn_NextOldCNo,
        isVisible_btnChangeBuilding,
        setIsVisible_btnChangeBuilding,
        isVisible_lbPersonCustomer,
        setIsVisible_lbPersonCustomer,
        isVisible_medCancelDate,
        setIsVisible_medCancelDate,
        isVisible_btn_NextCNo,
        setIsVisible_btn_NextCNo,
        isVisible_btn_BeforeCNo,
        setIsVisible_btn_BeforeCNo,
        isVisible_btnFireSearch,
        setIsVisible_btnFireSearch,
        isVisible_btnSearchCivilAppeal,
        setIsVisible_btnSearchCivilAppeal,
        isVisible_cbxBonbu,
        setIsVisible_cbxBonbu,
        isVisible_edCivilAppeal,
        setIsVisible_edCivilAppeal,
        tabValue_tabTab3,
        setTabValue_tabTab3,
        tabValue_tabTab2,
        setTabValue_tabTab2,
        tabValue_tabTab1,
        setTabValue_tabTab1,
        Div0_btnSearchPostZipCode_OnClick,
        Div0_btnSearchReturnPostH_OnClick,
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
        btnEduDetailInfo1_OnClick,
        btnEduNoti_OnClick,
        btnEduPrtH_OnClick,
        btnEducationInfo_OnClick,
        btnFireDeptList_OnClick,
        btnFireSearch_OnClick,
        btnSaveAddInfo_OnClick,
        btnSearchAddInfoH_OnClick,
        btnSearchAgency_OnClick,
        btnSearchBuilding_OnClick,
        btnSearchChangeH_OnClick,
        btnSearchCivilAppeal_OnClick,
        btnSearchFireDept_OnClick,
        btnSearchManagerList_OnClick,
        btnSearchNewZipCode_OnClick,
        btnSearchOldZipCode_OnClick,
        btnUpdateManagerInfo_OnClick,
        btn_BeforeCNo_OnClick,
        btn_NextCNo_OnClick,
        btn_NextOldCNo_OnClick,
        btn_SearchFireManager_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_GroupSearch,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        tabTab3_tabpgTab3Page1_btnSearchNewPostZipCode_OnClick,
        tabTab3_tabpgTab3Page1_btnSearchOldPostZipCode_OnClick,
        tabTab3_tabpgTab3Page1_imgPicture_OnClick,
    };
};