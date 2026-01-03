// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oAddrGubun, Ids_ioDelete, Ids_ioLevel, Ids_oCourse, Ids_oAddr, Ids_oRegion, Ids_oJibu, Ids_oBusinessGubun, Ids_ioYn, Ids_oEmailDomain, Ids_ioBuildingInfo, Ids_ioDangerInfo, Ids_ioTankInfo, Ids_ioEducationPassInfo, Ids_ioCustomerInfo, Ids_ioManagerInfo, Ids_ioLicenseInfo, Ids_ioOwnerInfo, Ids_ioAdditionInfo, Ids_ioOverBizInfo, Ids_ioCustomerFeeInfo, Ids_oAddPost, Ids_oDetailCourse, Ids_oCustomerStatus, Ids_oAddition, Ids_oOwnerGubun, Ids_oLicenseGubun, Ids_oEduStudentGubun, Ids_oEduGubun, Ids_oPersonGubun, Ids_oBizCd, Ids_oObjectMgno, Ids_oJibuGubun, Ids_oBuildingSeq, Ids_oCustomerSeq, Ids_oFireManagerSeq, Ids_oTest, Ids_oStatusReason, Ids_oCount, Ids_oSunapGubun, Ids_oFireCd, Ids_oFireCenterCd, Ids_oAgencyYn, Ids_oManagerInfoTmp, Ids_oSPMain, Ids_oEduSuccessGubun, Ids_oSPMainIN, Ids_oOverBizProc, Ids_iCustomerInfoTmp, Ids_iCustomerModifyHistory, Ids_oModifyColumnList, Ids_oLicenseInfo, Ids_oResidentNoErr, Ids_AuthGubun, Ids_oTankAddrGubun, Ids_oCustomerCompare, Ids_oAllObject, Ids_oBuildingInfoTmp, Ids_ioNotOverBizFireManager, Ids_ioIsOverBizFireManager, Ids_oBnmCode } from './Frmcust6666MCustomerManagementData';

export const useFrmcust6666MCustomerManagement = () => {
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
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_tabTab3, setIsVisible_tabTab3] = useState(true);
    const [isVisible_lbEMail, setIsVisible_lbEMail] = useState(true);
    const [isVisible_edEMailID, setIsVisible_edEMailID] = useState(true);
    const [isVisible_lbTextEMail, setIsVisible_lbTextEMail] = useState(true);
    const [isVisible_cbxEMailDomain, setIsVisible_cbxEMailDomain] = useState(true);
    const [isVisible_lbPostAddr, setIsVisible_lbPostAddr] = useState(true);
    const [isVisible_radPostAddrGubun, setIsVisible_radPostAddrGubun] = useState(true);
    const [isVisible_lbOldPostAddr, setIsVisible_lbOldPostAddr] = useState(true);
    const [isVisible_edOldPostAddr1, setIsVisible_edOldPostAddr1] = useState(true);
    const [isVisible_medOldPostZipCode, setIsVisible_medOldPostZipCode] = useState(true);
    const [isVisible_edOldPostAddr2, setIsVisible_edOldPostAddr2] = useState(true);
    const [isVisible_btnSearchOldPostZipCode, setIsVisible_btnSearchOldPostZipCode] = useState(true);
    const [isVisible_lbNewPostAddr, setIsVisible_lbNewPostAddr] = useState(true);
    const [isVisible_edNewPostAddr1, setIsVisible_edNewPostAddr1] = useState(true);
    const [isVisible_medNewPostZipCode, setIsVisible_medNewPostZipCode] = useState(true);
    const [isVisible_btnSearchNewPostZipCode, setIsVisible_btnSearchNewPostZipCode] = useState(true);
    const [isVisible_edNewPostAddr2, setIsVisible_edNewPostAddr2] = useState(true);
    const [isVisible_lbPTel, setIsVisible_lbPTel] = useState(true);
    const [isVisible_edPTel, setIsVisible_edPTel] = useState(true);
    const [isVisible_lbTel, setIsVisible_lbTel] = useState(true);
    const [isVisible_edTel, setIsVisible_edTel] = useState(true);
    const [isVisible_edEmailDomain, setIsVisible_edEmailDomain] = useState(true);
    const [isVisible_imgPicture, setIsVisible_imgPicture] = useState(true);
    const [isVisible_gdOverBizInfo, setIsVisible_gdOverBizInfo] = useState(true);
    const [isVisible_gdLicenseInfo, setIsVisible_gdLicenseInfo] = useState(true);
    const [isVisible_Grid0, setIsVisible_Grid0] = useState(true);
    const [isVisible_lbLicense1, setIsVisible_lbLicense1] = useState(true);
    const [isVisible_lbLicense2, setIsVisible_lbLicense2] = useState(true);
    const [isVisible_btnAddRow, setIsVisible_btnAddRow] = useState(true);
    const [isVisible_btnDelRow, setIsVisible_btnDelRow] = useState(true);
    const [isVisible_Shape5, setIsVisible_Shape5] = useState(true);
    const [isVisible_tabTab2, setIsVisible_tabTab2] = useState(true);
    const [isVisible_gdMemFee, setIsVisible_gdMemFee] = useState(true);
    const [isVisible_gdEduInfo, setIsVisible_gdEduInfo] = useState(true);
    const [isVisible_btnEduPrtH, setIsVisible_btnEduPrtH] = useState(false);
    const [isVisible_Shape6, setIsVisible_Shape6] = useState(true);
    const [isVisible_div2, setIsVisible_div2] = useState(true);
    const [isVisible_lbCompanyNo, setIsVisible_lbCompanyNo] = useState(true);
    const [isVisible_lbBizGubun, setIsVisible_lbBizGubun] = useState(true);
    const [isVisible_cbxBizGubun, setIsVisible_cbxBizGubun] = useState(true);
    const [isVisible_medCompanyNo, setIsVisible_medCompanyNo] = useState(true);
    const [isVisible_div1, setIsVisible_div1] = useState(true);
    const [isVisible_lbArea, setIsVisible_lbArea] = useState(true);
    const [isVisible_lbEquipment, setIsVisible_lbEquipment] = useState(true);
    const [isVisible_cbxEquipmentYn, setIsVisible_cbxEquipmentYn] = useState(true);
    const [isVisible_lbText, setIsVisible_lbText] = useState(true);
    const [isVisible_medArea, setIsVisible_medArea] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnInput, setIsVisible_btnInput] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnGroupSearch, setIsVisible_btnGroupSearch] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_medCustNo, setIsVisible_medCustNo] = useState(true);
    const [isVisible_lbOldAddr, setIsVisible_lbOldAddr] = useState(true);
    const [isVisible_lbBuildingNm, setIsVisible_lbBuildingNm] = useState(true);
    const [isVisible_lbTelNo, setIsVisible_lbTelNo] = useState(true);
    const [isVisible_lbJoinYear, setIsVisible_lbJoinYear] = useState(true);
    const [isVisible_medOldZipCode, setIsVisible_medOldZipCode] = useState(true);
    const [isVisible_btnSearchOldZipCode, setIsVisible_btnSearchOldZipCode] = useState(true);
    const [isVisible_edOldAddr2, setIsVisible_edOldAddr2] = useState(true);
    const [isVisible_edOldAddr1, setIsVisible_edOldAddr1] = useState(true);
    const [isVisible_edBuildingNm, setIsVisible_edBuildingNm] = useState(true);
    const [isVisible_edTelNo, setIsVisible_edTelNo] = useState(true);
    const [isVisible_lbFeeYear, setIsVisible_lbFeeYear] = useState(true);
    const [isVisible_lbFaxNo, setIsVisible_lbFaxNo] = useState(true);
    const [isVisible_edFaxNo, setIsVisible_edFaxNo] = useState(true);
    const [isVisible_lbExclusion, setIsVisible_lbExclusion] = useState(true);
    const [isVisible_lbResidentNo, setIsVisible_lbResidentNo] = useState(true);
    const [isVisible_lbAppointDate, setIsVisible_lbAppointDate] = useState(true);
    const [isVisible_edFireDept, setIsVisible_edFireDept] = useState(true);
    const [isVisible_lbBuildingInfo, setIsVisible_lbBuildingInfo] = useState(true);
    const [isVisible_lbAppointNm, setIsVisible_lbAppointNm] = useState(true);
    const [isVisible_edManagerNm, setIsVisible_edManagerNm] = useState(true);
    const [isVisible_lbCustomerInfo, setIsVisible_lbCustomerInfo] = useState(true);
    const [isVisible_lbMemStatus, setIsVisible_lbMemStatus] = useState(true);
    const [isVisible_medMemStatusDate, setIsVisible_medMemStatusDate] = useState(true);
    const [isVisible_btnUpdateManagerInfo, setIsVisible_btnUpdateManagerInfo] = useState(true);
    const [isVisible_edCivilAppeal, setIsVisible_edCivilAppeal] = useState(true);
    const [isVisible_lbCustNo, setIsVisible_lbCustNo] = useState(true);
    const [isVisible_lbStation, setIsVisible_lbStation] = useState(true);
    const [isVisible_lbNewAddr, setIsVisible_lbNewAddr] = useState(true);
    const [isVisible_edNewAddr1, setIsVisible_edNewAddr1] = useState(true);
    const [isVisible_medNewZipCode, setIsVisible_medNewZipCode] = useState(true);
    const [isVisible_btnSearchNewZipCode, setIsVisible_btnSearchNewZipCode] = useState(true);
    const [isVisible_edNewAddr2, setIsVisible_edNewAddr2] = useState(true);
    const [isVisible_lbSection, setIsVisible_lbSection] = useState(true);
    const [isVisible_lbAppointInfo, setIsVisible_lbAppointInfo] = useState(true);
    const [isVisible_lbEndStatus, setIsVisible_lbEndStatus] = useState(true);
    const [isVisible_btnAuthResidentNo, setIsVisible_btnAuthResidentNo] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_medResidentNo, setIsVisible_medResidentNo] = useState(true);
    const [isVisible_cbxCourse, setIsVisible_cbxCourse] = useState(true);
    const [isVisible_calCancelDate, setIsVisible_calCancelDate] = useState(true);
    const [isVisible_calAppointDate, setIsVisible_calAppointDate] = useState(true);
    const [isVisible_calExclusionDate, setIsVisible_calExclusionDate] = useState(true);
    const [isVisible_lbDelegateAddr, setIsVisible_lbDelegateAddr] = useState(true);
    const [isVisible_radAddrGubun, setIsVisible_radAddrGubun] = useState(true);
    const [isVisible_lbResidentNoError, setIsVisible_lbResidentNoError] = useState(false);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_cbxRegion, setIsVisible_cbxRegion] = useState(true);
    const [isVisible_lbFireDept, setIsVisible_lbFireDept] = useState(true);
    const [isVisible_lbCivilAppeal, setIsVisible_lbCivilAppeal] = useState(true);
    const [isVisible_lbAddContent, setIsVisible_lbAddContent] = useState(true);
    const [isVisible_btnSearchAddInfoH, setIsVisible_btnSearchAddInfoH] = useState(true);
    const [isVisible_btnSaveAddInfo, setIsVisible_btnSaveAddInfo] = useState(true);
    const [isVisible_cbxAddGubun, setIsVisible_cbxAddGubun] = useState(true);
    const [isVisible_edAddContent, setIsVisible_edAddContent] = useState(true);
    const [isVisible_lbBusiness, setIsVisible_lbBusiness] = useState(true);
    const [isVisible_lbFeeMunje, setIsVisible_lbFeeMunje] = useState(true);
    const [isVisible_lbBarCode, setIsVisible_lbBarCode] = useState(true);
    const [isVisible_cbxBusiness, setIsVisible_cbxBusiness] = useState(true);
    const [isVisible_btnSearchBuilding, setIsVisible_btnSearchBuilding] = useState(true);
    const [isVisible_lbAddGubun, setIsVisible_lbAddGubun] = useState(true);
    const [isVisible_btnConcurrentH, setIsVisible_btnConcurrentH] = useState(true);
    const [isVisible_btnSearchFireDept, setIsVisible_btnSearchFireDept] = useState(true);
    const [isVisible_btnEduDetailInfo1, setIsVisible_btnEduDetailInfo1] = useState(true);
    const [isVisible_btnEducationInfo, setIsVisible_btnEducationInfo] = useState(true);
    const [isVisible_lbAddInfo, setIsVisible_lbAddInfo] = useState(true);
    const [isVisible_lbDelGubun, setIsVisible_lbDelGubun] = useState(true);
    const [isVisible_cbxDelYN, setIsVisible_cbxDelYN] = useState(true);
    const [isVisible_calDelDate, setIsVisible_calDelDate] = useState(true);
    const [isVisible_meJoinYear, setIsVisible_meJoinYear] = useState(true);
    const [isVisible_meFeeYear, setIsVisible_meFeeYear] = useState(true);
    const [isVisible_edChargeNm, setIsVisible_edChargeNm] = useState(true);
    const [isVisible_lbBuildingName, setIsVisible_lbBuildingName] = useState(true);
    const [isVisible_cbxExclusionYN, setIsVisible_cbxExclusionYN] = useState(true);
    const [isVisible_btnSearchChangeH, setIsVisible_btnSearchChangeH] = useState(true);
    const [isVisible_Div3, setIsVisible_Div3] = useState(false);
    const [isVisible_lbEducationInfo, setIsVisible_lbEducationInfo] = useState(true);
    const [isVisible_btnEduDetailInfo2, setIsVisible_btnEduDetailInfo2] = useState(true);
    const [isVisible_btnEduNoticeList, setIsVisible_btnEduNoticeList] = useState(true);
    const [isVisible_btn_EduDetailClose, setIsVisible_btn_EduDetailClose] = useState(true);
    const [isVisible_lbAgency, setIsVisible_lbAgency] = useState(true);
    const [isVisible_cbxAgencyYn, setIsVisible_cbxAgencyYn] = useState(true);
    const [isVisible_edAgencyNm, setIsVisible_edAgencyNm] = useState(true);
    const [isVisible_btnSearchAgency, setIsVisible_btnSearchAgency] = useState(true);
    const [isVisible_medBarCode, setIsVisible_medBarCode] = useState(true);
    const [isVisible_cbxAddPost, setIsVisible_cbxAddPost] = useState(true);
    const [isVisible_Div0, setIsVisible_Div0] = useState(true);
    const [isVisible_lbPostPlace, setIsVisible_lbPostPlace] = useState(true);
    const [isVisible_edPostPlace, setIsVisible_edPostPlace] = useState(true);
    const [isVisible_lbPost, setIsVisible_lbPost] = useState(true);
    const [isVisible_medPostZipCode, setIsVisible_medPostZipCode] = useState(true);
    const [isVisible_btnSearchPostZipCode, setIsVisible_btnSearchPostZipCode] = useState(true);
    const [isVisible_edPost1, setIsVisible_edPost1] = useState(true);
    const [isVisible_edPost2, setIsVisible_edPost2] = useState(true);
    const [isVisible_cbxPostGubun, setIsVisible_cbxPostGubun] = useState(true);
    const [isVisible_btnSearchReturnPostH, setIsVisible_btnSearchReturnPostH] = useState(true);
    const [isVisible_Div4, setIsVisible_Div4] = useState(false);
    const [isVisible_edEduPostPlace, setIsVisible_edEduPostPlace] = useState(true);
    const [isVisible_medEduPostZipCode, setIsVisible_medEduPostZipCode] = useState(true);
    const [isVisible_btnSearchEduPostZipCode, setIsVisible_btnSearchEduPostZipCode] = useState(true);
    const [isVisible_edEduPost1, setIsVisible_edEduPost1] = useState(true);
    const [isVisible_edEduPost2, setIsVisible_edEduPost2] = useState(true);
    const [isVisible_cbxEduPostGubun, setIsVisible_cbxEduPostGubun] = useState(true);
    const [isVisible_btnSearchEduReturnPostH, setIsVisible_btnSearchEduReturnPostH] = useState(true);
    const [isVisible_lbLocal, setIsVisible_lbLocal] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_lbDetailCourse, setIsVisible_lbDetailCourse] = useState(true);
    const [isVisible_cbxDetailCourse, setIsVisible_cbxDetailCourse] = useState(true);
    const [isVisible_btnEduNoti, setIsVisible_btnEduNoti] = useState(false);
    const [isVisible_btnCustFee, setIsVisible_btnCustFee] = useState(false);
    const [isVisible_cbxStatus, setIsVisible_cbxStatus] = useState(true);
    const [isVisible_lbEmailCnt, setIsVisible_lbEmailCnt] = useState(true);
    const [isVisible_medEmailCnt, setIsVisible_medEmailCnt] = useState(true);
    const [isVisible_cbxPersonGubun, setIsVisible_cbxPersonGubun] = useState(true);
    const [isVisible_btnSearchManagerList, setIsVisible_btnSearchManagerList] = useState(true);
    const [isVisible_cbxFeeMunje, setIsVisible_cbxFeeMunje] = useState(true);
    const [isVisible_lbStatusReason, setIsVisible_lbStatusReason] = useState(true);
    const [isVisible_cbxStatusReason, setIsVisible_cbxStatusReason] = useState(true);
    const [isVisible_radJibuGubun, setIsVisible_radJibuGubun] = useState(true);
    const [isVisible_Div6, setIsVisible_Div6] = useState(false);
    const [isVisible_tabTab1, setIsVisible_tabTab1] = useState(true);
    const [isVisible_gdConnections, setIsVisible_gdConnections] = useState(true);
    const [isVisible_gdDangerInfo, setIsVisible_gdDangerInfo] = useState(true);
    const [isVisible_btnAddRow1, setIsVisible_btnAddRow1] = useState(true);
    const [isVisible_btnDelRow1, setIsVisible_btnDelRow1] = useState(true);
    const [isVisible_Div7, setIsVisible_Div7] = useState(false);
    const [isVisible_gdTankInfo, setIsVisible_gdTankInfo] = useState(true);
    const [isVisible_Div8, setIsVisible_Div8] = useState(false);
    const [isVisible_cbxStation, setIsVisible_cbxStation] = useState(true);
    const [isVisible_cbxCenter, setIsVisible_cbxCenter] = useState(true);
    const [isVisible_lbChargeNm, setIsVisible_lbChargeNm] = useState(true);
    const [isVisible_btnCustomerFee, setIsVisible_btnCustomerFee] = useState(true);
    const [isVisible_btn_SearchFireManager, setIsVisible_btn_SearchFireManager] = useState(true);
    const [isVisible_btnFireDeptList, setIsVisible_btnFireDeptList] = useState(true);
    const [isVisible_lbOldCustNo, setIsVisible_lbOldCustNo] = useState(true);
    const [isVisible_meOldCustNO, setIsVisible_meOldCustNO] = useState(true);
    const [isVisible_lbEndStatusYn, setIsVisible_lbEndStatusYn] = useState(false);
    const [isVisible_lbEndProcDate, setIsVisible_lbEndProcDate] = useState(false);
    const [isVisible_calProcCancelDate, setIsVisible_calProcCancelDate] = useState(false);
    const [isVisible_lbNewFMGubun, setIsVisible_lbNewFMGubun] = useState(true);
    const [isVisible_chkSameBuilding, setIsVisible_chkSameBuilding] = useState(true);
    const [isVisible_lbEndDate, setIsVisible_lbEndDate] = useState(true);
    const [isVisible_btn_NextOldCNo, setIsVisible_btn_NextOldCNo] = useState(true);
    const [isVisible_btnChangeBuilding, setIsVisible_btnChangeBuilding] = useState(true);
    const [isVisible_lbPersonCustomer, setIsVisible_lbPersonCustomer] = useState(false);
    const [isVisible_medCancelDate, setIsVisible_medCancelDate] = useState(true);
    const [isVisible_btn_NextCNo, setIsVisible_btn_NextCNo] = useState(true);
    const [isVisible_btn_BeforeCNo, setIsVisible_btn_BeforeCNo] = useState(true);
    const [isVisible_btnFireSearch, setIsVisible_btnFireSearch] = useState(true);
    const [isVisible_btnSearchCivilAppeal, setIsVisible_btnSearchCivilAppeal] = useState(true);
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
        isVisible_edCivilAppeal,
        setIsVisible_edCivilAppeal,
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