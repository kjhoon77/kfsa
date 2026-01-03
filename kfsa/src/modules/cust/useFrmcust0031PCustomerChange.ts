// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBizCd, Ids_oCourse, Ids_oRegion, Ids_oJibu, Ids_oEmailDomain, Ids_oDetailCourse, Ids_oPersonGubun, Ids_oAddrGubun, Ids_oJubsuInfo, Ids_oAllObject, Ids_ioBuildingInfo, Ids_ioCustomerInfo, Ids_ioManagerInfo, Ids_ioAdditionInfo, Ids_ioOwnerInfo, Ids_oAddr, Ids_oOwnerGubun, Ids_oBuildingSeq, Ids_oCustomerSeq, Ids_oFireManagerSeq, Ids_ioCustomerInfoTmp, Ids_ioManagerInfoTmp, Ids_oBnmCode, Ids_oElectQualify, Ids_oStatus, Ids_ioTankInfo, Ids_oAccountInfo } from './Frmcust0031PCustomerChangeData';

export const useFrmcust0031PCustomerChange = () => {
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
    const [ds_oElectQualify, setds_oElectQualify] = useState<Ids_oElectQualify[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_ioTankInfo, setds_ioTankInfo] = useState<Ids_ioTankInfo[]>([]);
    const [ds_oAccountInfo, setds_oAccountInfo] = useState<Ids_oAccountInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape6, setRawVisible_Shape6] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbBuildingNmAfter, setRawVisible_lbBuildingNmAfter] = useState(true);
    const [rawVisible_lbTelNoAfter, setRawVisible_lbTelNoAfter] = useState(true);
    const [rawVisible_medOldZipCode, setRawVisible_medOldZipCode] = useState(true);
    const [rawVisible_edOldAddr2, setRawVisible_edOldAddr2] = useState(true);
    const [rawVisible_edOldAddr1, setRawVisible_edOldAddr1] = useState(true);
    const [rawVisible_edBuildingNmAfter, setRawVisible_edBuildingNmAfter] = useState(true);
    const [rawVisible_edTelNoAfter, setRawVisible_edTelNoAfter] = useState(true);
    const [rawVisible_lbFaxNoAfter, setRawVisible_lbFaxNoAfter] = useState(true);
    const [rawVisible_edFaxNoAfter, setRawVisible_edFaxNoAfter] = useState(true);
    const [rawVisible_lbJubsuInfo, setRawVisible_lbJubsuInfo] = useState(true);
    const [rawVisible_lbDelegateAddrAfter, setRawVisible_lbDelegateAddrAfter] = useState(true);
    const [rawVisible_lbChangeInfo, setRawVisible_lbChangeInfo] = useState(true);
    const [rawVisible_lbManagerInfo, setRawVisible_lbManagerInfo] = useState(true);
    const [rawVisible_lbHopeAddrAfter, setRawVisible_lbHopeAddrAfter] = useState(true);
    const [rawVisible_medHopeZipCodeAfter, setRawVisible_medHopeZipCodeAfter] = useState(true);
    const [rawVisible_edHopeAddrAfter, setRawVisible_edHopeAddrAfter] = useState(true);
    const [rawVisible_edHopeAddr2After, setRawVisible_edHopeAddr2After] = useState(true);
    const [rawVisible_lbAreaAfter, setRawVisible_lbAreaAfter] = useState(true);
    const [rawVisible_medAreaAfter, setRawVisible_medAreaAfter] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_lbPTelAfter, setRawVisible_lbPTelAfter] = useState(true);
    const [rawVisible_edPTelAfter, setRawVisible_edPTelAfter] = useState(true);
    const [rawVisible_lbEMailAfter, setRawVisible_lbEMailAfter] = useState(true);
    const [rawVisible_edEMailIDAfter, setRawVisible_edEMailIDAfter] = useState(true);
    const [rawVisible_lbOwnerNmAfter, setRawVisible_lbOwnerNmAfter] = useState(false);
    const [rawVisible_edOwnerNmAfter, setRawVisible_edOwnerNmAfter] = useState(false);
    const [rawVisible_lbOwnerTelAfter, setRawVisible_lbOwnerTelAfter] = useState(false);
    const [rawVisible_edOwnerTelAfter, setRawVisible_edOwnerTelAfter] = useState(false);
    const [rawVisible_lbOwnerPTelAfter, setRawVisible_lbOwnerPTelAfter] = useState(false);
    const [rawVisible_edOwnerPTelAfter, setRawVisible_edOwnerPTelAfter] = useState(false);
    const [rawVisible_btnChangeInfo, setRawVisible_btnChangeInfo] = useState(true);
    const [rawVisible_lbJubsuPersonkey, setRawVisible_lbJubsuPersonkey] = useState(true);
    const [rawVisible_edJubsuPersonkey, setRawVisible_edJubsuPersonkey] = useState(true);
    const [rawVisible_lbJubsuNm, setRawVisible_lbJubsuNm] = useState(true);
    const [rawVisible_edJubsuNm, setRawVisible_edJubsuNm] = useState(true);
    const [rawVisible_lbJubsuBirthday, setRawVisible_lbJubsuBirthday] = useState(true);
    const [rawVisible_edJubsuBirthday, setRawVisible_edJubsuBirthday] = useState(true);
    const [rawVisible_lbJubsuGubun, setRawVisible_lbJubsuGubun] = useState(true);
    const [rawVisible_edJubsuGubun, setRawVisible_edJubsuGubun] = useState(true);
    const [rawVisible_lbJubsuStat, setRawVisible_lbJubsuStat] = useState(true);
    const [rawVisible_edJubsuStat, setRawVisible_edJubsuStat] = useState(true);
    const [rawVisible_lbJubsuDate, setRawVisible_lbJubsuDate] = useState(true);
    const [rawVisible_edJubsuDate, setRawVisible_edJubsuDate] = useState(true);
    const [rawVisible_btnJubsu, setRawVisible_btnJubsu] = useState(true);
    const [rawVisible_btnDefer, setRawVisible_btnDefer] = useState(true);
    const [rawVisible_btnCancle, setRawVisible_btnCancle] = useState(true);
    const [rawVisible_lbBuildingNm, setRawVisible_lbBuildingNm] = useState(true);
    const [rawVisible_lbTelNo, setRawVisible_lbTelNo] = useState(true);
    const [rawVisible_medNewZipCode, setRawVisible_medNewZipCode] = useState(true);
    const [rawVisible_edNewAddr2, setRawVisible_edNewAddr2] = useState(true);
    const [rawVisible_edNewAddr1, setRawVisible_edNewAddr1] = useState(true);
    const [rawVisible_edBuildingNm, setRawVisible_edBuildingNm] = useState(true);
    const [rawVisible_edTelNo, setRawVisible_edTelNo] = useState(true);
    const [rawVisible_lbFaxNo, setRawVisible_lbFaxNo] = useState(true);
    const [rawVisible_edFaxNo, setRawVisible_edFaxNo] = useState(true);
    const [rawVisible_lbDelegateAddr, setRawVisible_lbDelegateAddr] = useState(true);
    const [rawVisible_lbHopeAddr, setRawVisible_lbHopeAddr] = useState(true);
    const [rawVisible_medHopeZipCode, setRawVisible_medHopeZipCode] = useState(true);
    const [rawVisible_edHopeAddr, setRawVisible_edHopeAddr] = useState(true);
    const [rawVisible_edHopeAddr2, setRawVisible_edHopeAddr2] = useState(true);
    const [rawVisible_lbArea, setRawVisible_lbArea] = useState(true);
    const [rawVisible_medArea, setRawVisible_medArea] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_lbTitle, setRawVisible_lbTitle] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_lbLocal, setRawVisible_lbLocal] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_cbxRegion, setRawVisible_cbxRegion] = useState(true);
    const [rawVisible_lbCustNo, setRawVisible_lbCustNo] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_medCustNo, setRawVisible_medCustNo] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbBarCode, setRawVisible_lbBarCode] = useState(true);
    const [rawVisible_medBarCode, setRawVisible_medBarCode] = useState(true);
    const [rawVisible_lbDetailCourse, setRawVisible_lbDetailCourse] = useState(true);
    const [rawVisible_cbxDetailCourse, setRawVisible_cbxDetailCourse] = useState(true);
    const [rawVisible_shpBox1, setRawVisible_shpBox1] = useState(true);
    const [rawVisible_lbBusiness, setRawVisible_lbBusiness] = useState(true);
    const [rawVisible_cbxBusiness, setRawVisible_cbxBusiness] = useState(true);
    const [rawVisible_btnSearchZipCode1, setRawVisible_btnSearchZipCode1] = useState(true);
    const [rawVisible_cbxEduPostGubun3, setRawVisible_cbxEduPostGubun3] = useState(true);
    const [rawVisible_cbxPostGubun2, setRawVisible_cbxPostGubun2] = useState(true);
    const [rawVisible_btnSearchZipCode2, setRawVisible_btnSearchZipCode2] = useState(true);
    const [rawVisible_lbJoinYear, setRawVisible_lbJoinYear] = useState(true);
    const [rawVisible_meJoinYear, setRawVisible_meJoinYear] = useState(true);
    const [rawVisible_lbFeeYear, setRawVisible_lbFeeYear] = useState(true);
    const [rawVisible_meFeeYear, setRawVisible_meFeeYear] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_lbSection, setRawVisible_lbSection] = useState(true);
    const [rawVisible_cbxPersonGubun, setRawVisible_cbxPersonGubun] = useState(true);
    const [rawVisible_lbAddInfo, setRawVisible_lbAddInfo] = useState(true);
    const [rawVisible_edAddContent, setRawVisible_edAddContent] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_lbAppointNm, setRawVisible_lbAppointNm] = useState(true);
    const [rawVisible_edManagerNm, setRawVisible_edManagerNm] = useState(true);
    const [rawVisible_lbResidentNo, setRawVisible_lbResidentNo] = useState(true);
    const [rawVisible_medResidentNo, setRawVisible_medResidentNo] = useState(true);
    const [rawVisible_lbAppointDate, setRawVisible_lbAppointDate] = useState(true);
    const [rawVisible_calAppointDate, setRawVisible_calAppointDate] = useState(true);
    const [rawVisible_lbEndStatus, setRawVisible_lbEndStatus] = useState(true);
    const [rawVisible_lbEndStatusYn, setRawVisible_lbEndStatusYn] = useState(false);
    const [rawVisible_calCancelDate, setRawVisible_calCancelDate] = useState(true);
    const [rawVisible_lbEndDate, setRawVisible_lbEndDate] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_edManagerPTel, setRawVisible_edManagerPTel] = useState(true);
    const [rawVisible_lbTel, setRawVisible_lbTel] = useState(true);
    const [rawVisible_edTel, setRawVisible_edTel] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_edManagerEmail, setRawVisible_edManagerEmail] = useState(true);
    const [rawVisible_lbTextEMail, setRawVisible_lbTextEMail] = useState(true);
    const [rawVisible_edEmailDomain, setRawVisible_edEmailDomain] = useState(true);
    const [rawVisible_cbxEMailDomain, setRawVisible_cbxEMailDomain] = useState(true);
    const [rawVisible_lbOldPostAddr, setRawVisible_lbOldPostAddr] = useState(true);
    const [rawVisible_edOldPostAddr1, setRawVisible_edOldPostAddr1] = useState(true);
    const [rawVisible_medOldPostZipCode, setRawVisible_medOldPostZipCode] = useState(true);
    const [rawVisible_btnSearchZipCode3, setRawVisible_btnSearchZipCode3] = useState(true);
    const [rawVisible_edOldPostAddr2, setRawVisible_edOldPostAddr2] = useState(true);
    const [rawVisible_lbCancelDate, setRawVisible_lbCancelDate] = useState(true);
    const [rawVisible_btnBuildingSearch, setRawVisible_btnBuildingSearch] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_cbxPostGubun1, setRawVisible_cbxPostGubun1] = useState(true);
    const [rawVisible_lbManagerAddrAfter, setRawVisible_lbManagerAddrAfter] = useState(true);
    const [rawVisible_edManagerAddrAfter, setRawVisible_edManagerAddrAfter] = useState(true);
    const [rawVisible_medManagerZipCodeAfter, setRawVisible_medManagerZipCodeAfter] = useState(true);
    const [rawVisible_edManagerAddr2After, setRawVisible_edManagerAddr2After] = useState(true);
    const [rawVisible_lbOwnerGubunAfter, setRawVisible_lbOwnerGubunAfter] = useState(false);
    const [rawVisible_edOwnerGubunAfter, setRawVisible_edOwnerGubunAfter] = useState(false);
    const [rawVisible_lbComment, setRawVisible_lbComment] = useState(false);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(false);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_edCNO, setRawVisible_edCNO] = useState(true);
    const [rawVisible_edOldBNM, setRawVisible_edOldBNM] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_edFCCourse, setRawVisible_edFCCourse] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_edOldCourse, setRawVisible_edOldCourse] = useState(true);
    const [rawVisible_btnComplete, setRawVisible_btnComplete] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_lbElectQualify, setRawVisible_lbElectQualify] = useState(true);
    const [rawVisible_cbxElectQualify, setRawVisible_cbxElectQualify] = useState(true);
    const [rawVisible_btnElectEnd, setRawVisible_btnElectEnd] = useState(true);
    const [rawVisible_lbEnterDate, setRawVisible_lbEnterDate] = useState(true);
    const [rawVisible_edEnterDate, setRawVisible_edEnterDate] = useState(true);
    const [rawVisible_lbCar, setRawVisible_lbCar] = useState(false);
    const [rawVisible_lbCarNo, setRawVisible_lbCarNo] = useState(false);
    const [rawVisible_lbCarPermissionNo, setRawVisible_lbCarPermissionNo] = useState(false);
    const [rawVisible_edCarNo, setRawVisible_edCarNo] = useState(false);
    const [rawVisible_lbCarYear, setRawVisible_lbCarYear] = useState(false);
    const [rawVisible_edCarYear, setRawVisible_edCarYear] = useState(false);
    const [rawVisible_edCarPermissionNo, setRawVisible_edCarPermissionNo] = useState(false);
    const [rawVisible_Shape7, setRawVisible_Shape7] = useState(false);
    const [rawVisible_lbNewCar, setRawVisible_lbNewCar] = useState(false);
    const [rawVisible_lbNewCarNo, setRawVisible_lbNewCarNo] = useState(false);
    const [rawVisible_edNewCarNo, setRawVisible_edNewCarNo] = useState(false);
    const [rawVisible_edNewCarYear, setRawVisible_edNewCarYear] = useState(false);
    const [rawVisible_edNewCarPermissionNo, setRawVisible_edNewCarPermissionNo] = useState(false);
    const [rawVisible_lbNewCarYear, setRawVisible_lbNewCarYear] = useState(false);
    const [rawVisible_lbNewCarPermissionNo, setRawVisible_lbNewCarPermissionNo] = useState(false);
    const [rawVisible_lbEnterQualify, setRawVisible_lbEnterQualify] = useState(true);
    const [rawVisible_edEnterQualify, setRawVisible_edEnterQualify] = useState(true);
    const [rawVisible_cbxFCGTNM, setRawVisible_cbxFCGTNM] = useState(true);
    const [rawVisible_btnChange, setRawVisible_btnChange] = useState(true);
    const [rawVisible_btnCustomerLink, setRawVisible_btnCustomerLink] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_medPersonKey, setRawVisible_medPersonKey] = useState(true);
    const isVisible_Shape6 = rawVisible_Shape6;
    const setIsVisible_Shape6 = setRawVisible_Shape6;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbBuildingNmAfter = rawVisible_lbBuildingNmAfter && rawVisible_Shape1;
    const setIsVisible_lbBuildingNmAfter = setRawVisible_lbBuildingNmAfter;
    const isVisible_lbTelNoAfter = rawVisible_lbTelNoAfter && rawVisible_Shape1;
    const setIsVisible_lbTelNoAfter = setRawVisible_lbTelNoAfter;
    const isVisible_medOldZipCode = rawVisible_medOldZipCode && rawVisible_Shape1;
    const setIsVisible_medOldZipCode = setRawVisible_medOldZipCode;
    const isVisible_edOldAddr2 = rawVisible_edOldAddr2 && rawVisible_Shape1;
    const setIsVisible_edOldAddr2 = setRawVisible_edOldAddr2;
    const isVisible_edOldAddr1 = rawVisible_edOldAddr1 && rawVisible_Shape1;
    const setIsVisible_edOldAddr1 = setRawVisible_edOldAddr1;
    const isVisible_edBuildingNmAfter = rawVisible_edBuildingNmAfter && rawVisible_Shape1;
    const setIsVisible_edBuildingNmAfter = setRawVisible_edBuildingNmAfter;
    const isVisible_edTelNoAfter = rawVisible_edTelNoAfter && rawVisible_Shape1;
    const setIsVisible_edTelNoAfter = setRawVisible_edTelNoAfter;
    const isVisible_lbFaxNoAfter = rawVisible_lbFaxNoAfter && rawVisible_Shape1;
    const setIsVisible_lbFaxNoAfter = setRawVisible_lbFaxNoAfter;
    const isVisible_edFaxNoAfter = rawVisible_edFaxNoAfter && rawVisible_Shape1;
    const setIsVisible_edFaxNoAfter = setRawVisible_edFaxNoAfter;
    const isVisible_lbJubsuInfo = rawVisible_lbJubsuInfo;
    const setIsVisible_lbJubsuInfo = setRawVisible_lbJubsuInfo;
    const isVisible_lbDelegateAddrAfter = rawVisible_lbDelegateAddrAfter && rawVisible_Shape1;
    const setIsVisible_lbDelegateAddrAfter = setRawVisible_lbDelegateAddrAfter;
    const isVisible_lbChangeInfo = rawVisible_lbChangeInfo;
    const setIsVisible_lbChangeInfo = setRawVisible_lbChangeInfo;
    const isVisible_lbManagerInfo = rawVisible_lbManagerInfo;
    const setIsVisible_lbManagerInfo = setRawVisible_lbManagerInfo;
    const isVisible_lbHopeAddrAfter = rawVisible_lbHopeAddrAfter && rawVisible_Shape1;
    const setIsVisible_lbHopeAddrAfter = setRawVisible_lbHopeAddrAfter;
    const isVisible_medHopeZipCodeAfter = rawVisible_medHopeZipCodeAfter && rawVisible_Shape1;
    const setIsVisible_medHopeZipCodeAfter = setRawVisible_medHopeZipCodeAfter;
    const isVisible_edHopeAddrAfter = rawVisible_edHopeAddrAfter && rawVisible_Shape1;
    const setIsVisible_edHopeAddrAfter = setRawVisible_edHopeAddrAfter;
    const isVisible_edHopeAddr2After = rawVisible_edHopeAddr2After && rawVisible_Shape1;
    const setIsVisible_edHopeAddr2After = setRawVisible_edHopeAddr2After;
    const isVisible_lbAreaAfter = rawVisible_lbAreaAfter && rawVisible_Shape1;
    const setIsVisible_lbAreaAfter = setRawVisible_lbAreaAfter;
    const isVisible_medAreaAfter = rawVisible_medAreaAfter && rawVisible_Shape1;
    const setIsVisible_medAreaAfter = setRawVisible_medAreaAfter;
    const isVisible_lbText = rawVisible_lbText && rawVisible_Shape1;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_lbPTelAfter = rawVisible_lbPTelAfter && rawVisible_Shape1;
    const setIsVisible_lbPTelAfter = setRawVisible_lbPTelAfter;
    const isVisible_edPTelAfter = rawVisible_edPTelAfter && rawVisible_Shape1;
    const setIsVisible_edPTelAfter = setRawVisible_edPTelAfter;
    const isVisible_lbEMailAfter = rawVisible_lbEMailAfter;
    const setIsVisible_lbEMailAfter = setRawVisible_lbEMailAfter;
    const isVisible_edEMailIDAfter = rawVisible_edEMailIDAfter;
    const setIsVisible_edEMailIDAfter = setRawVisible_edEMailIDAfter;
    const isVisible_lbOwnerNmAfter = rawVisible_lbOwnerNmAfter;
    const setIsVisible_lbOwnerNmAfter = setRawVisible_lbOwnerNmAfter;
    const isVisible_edOwnerNmAfter = rawVisible_edOwnerNmAfter;
    const setIsVisible_edOwnerNmAfter = setRawVisible_edOwnerNmAfter;
    const isVisible_lbOwnerTelAfter = rawVisible_lbOwnerTelAfter;
    const setIsVisible_lbOwnerTelAfter = setRawVisible_lbOwnerTelAfter;
    const isVisible_edOwnerTelAfter = rawVisible_edOwnerTelAfter;
    const setIsVisible_edOwnerTelAfter = setRawVisible_edOwnerTelAfter;
    const isVisible_lbOwnerPTelAfter = rawVisible_lbOwnerPTelAfter;
    const setIsVisible_lbOwnerPTelAfter = setRawVisible_lbOwnerPTelAfter;
    const isVisible_edOwnerPTelAfter = rawVisible_edOwnerPTelAfter;
    const setIsVisible_edOwnerPTelAfter = setRawVisible_edOwnerPTelAfter;
    const isVisible_btnChangeInfo = rawVisible_btnChangeInfo;
    const setIsVisible_btnChangeInfo = setRawVisible_btnChangeInfo;
    const isVisible_lbJubsuPersonkey = rawVisible_lbJubsuPersonkey && rawVisible_Shape0;
    const setIsVisible_lbJubsuPersonkey = setRawVisible_lbJubsuPersonkey;
    const isVisible_edJubsuPersonkey = rawVisible_edJubsuPersonkey && rawVisible_Shape0;
    const setIsVisible_edJubsuPersonkey = setRawVisible_edJubsuPersonkey;
    const isVisible_lbJubsuNm = rawVisible_lbJubsuNm && rawVisible_Shape0;
    const setIsVisible_lbJubsuNm = setRawVisible_lbJubsuNm;
    const isVisible_edJubsuNm = rawVisible_edJubsuNm && rawVisible_Shape0;
    const setIsVisible_edJubsuNm = setRawVisible_edJubsuNm;
    const isVisible_lbJubsuBirthday = rawVisible_lbJubsuBirthday && rawVisible_Shape0;
    const setIsVisible_lbJubsuBirthday = setRawVisible_lbJubsuBirthday;
    const isVisible_edJubsuBirthday = rawVisible_edJubsuBirthday && rawVisible_Shape0;
    const setIsVisible_edJubsuBirthday = setRawVisible_edJubsuBirthday;
    const isVisible_lbJubsuGubun = rawVisible_lbJubsuGubun && rawVisible_Shape0;
    const setIsVisible_lbJubsuGubun = setRawVisible_lbJubsuGubun;
    const isVisible_edJubsuGubun = rawVisible_edJubsuGubun && rawVisible_Shape0;
    const setIsVisible_edJubsuGubun = setRawVisible_edJubsuGubun;
    const isVisible_lbJubsuStat = rawVisible_lbJubsuStat && rawVisible_Shape0;
    const setIsVisible_lbJubsuStat = setRawVisible_lbJubsuStat;
    const isVisible_edJubsuStat = rawVisible_edJubsuStat && rawVisible_Shape0;
    const setIsVisible_edJubsuStat = setRawVisible_edJubsuStat;
    const isVisible_lbJubsuDate = rawVisible_lbJubsuDate && rawVisible_Shape0;
    const setIsVisible_lbJubsuDate = setRawVisible_lbJubsuDate;
    const isVisible_edJubsuDate = rawVisible_edJubsuDate && rawVisible_Shape0;
    const setIsVisible_edJubsuDate = setRawVisible_edJubsuDate;
    const isVisible_btnJubsu = rawVisible_btnJubsu && rawVisible_Shape0;
    const setIsVisible_btnJubsu = setRawVisible_btnJubsu;
    const isVisible_btnDefer = rawVisible_btnDefer && rawVisible_Shape0;
    const setIsVisible_btnDefer = setRawVisible_btnDefer;
    const isVisible_btnCancle = rawVisible_btnCancle && rawVisible_Shape0;
    const setIsVisible_btnCancle = setRawVisible_btnCancle;
    const isVisible_lbBuildingNm = rawVisible_lbBuildingNm && rawVisible_Shape2;
    const setIsVisible_lbBuildingNm = setRawVisible_lbBuildingNm;
    const isVisible_lbTelNo = rawVisible_lbTelNo && rawVisible_Shape2;
    const setIsVisible_lbTelNo = setRawVisible_lbTelNo;
    const isVisible_medNewZipCode = rawVisible_medNewZipCode && rawVisible_Shape2;
    const setIsVisible_medNewZipCode = setRawVisible_medNewZipCode;
    const isVisible_edNewAddr2 = rawVisible_edNewAddr2 && rawVisible_Shape2;
    const setIsVisible_edNewAddr2 = setRawVisible_edNewAddr2;
    const isVisible_edNewAddr1 = rawVisible_edNewAddr1 && rawVisible_Shape2;
    const setIsVisible_edNewAddr1 = setRawVisible_edNewAddr1;
    const isVisible_edBuildingNm = rawVisible_edBuildingNm && rawVisible_Shape2;
    const setIsVisible_edBuildingNm = setRawVisible_edBuildingNm;
    const isVisible_edTelNo = rawVisible_edTelNo && rawVisible_Shape2;
    const setIsVisible_edTelNo = setRawVisible_edTelNo;
    const isVisible_lbFaxNo = rawVisible_lbFaxNo && rawVisible_Shape2;
    const setIsVisible_lbFaxNo = setRawVisible_lbFaxNo;
    const isVisible_edFaxNo = rawVisible_edFaxNo && rawVisible_Shape2;
    const setIsVisible_edFaxNo = setRawVisible_edFaxNo;
    const isVisible_lbDelegateAddr = rawVisible_lbDelegateAddr && rawVisible_Shape2;
    const setIsVisible_lbDelegateAddr = setRawVisible_lbDelegateAddr;
    const isVisible_lbHopeAddr = rawVisible_lbHopeAddr && rawVisible_Shape4;
    const setIsVisible_lbHopeAddr = setRawVisible_lbHopeAddr;
    const isVisible_medHopeZipCode = rawVisible_medHopeZipCode && rawVisible_Shape4;
    const setIsVisible_medHopeZipCode = setRawVisible_medHopeZipCode;
    const isVisible_edHopeAddr = rawVisible_edHopeAddr && rawVisible_Shape4;
    const setIsVisible_edHopeAddr = setRawVisible_edHopeAddr;
    const isVisible_edHopeAddr2 = rawVisible_edHopeAddr2 && rawVisible_Shape4;
    const setIsVisible_edHopeAddr2 = setRawVisible_edHopeAddr2;
    const isVisible_lbArea = rawVisible_lbArea && rawVisible_Shape2;
    const setIsVisible_lbArea = setRawVisible_lbArea;
    const isVisible_medArea = rawVisible_medArea && rawVisible_Shape2;
    const setIsVisible_medArea = setRawVisible_medArea;
    const isVisible_Static18 = rawVisible_Static18 && rawVisible_Shape2;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_lbTitle = rawVisible_lbTitle;
    const setIsVisible_lbTitle = setRawVisible_lbTitle;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape3;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_lbLocal = rawVisible_lbLocal && rawVisible_Shape3;
    const setIsVisible_lbLocal = setRawVisible_lbLocal;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape3;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_cbxRegion = rawVisible_cbxRegion && rawVisible_Shape3;
    const setIsVisible_cbxRegion = setRawVisible_cbxRegion;
    const isVisible_lbCustNo = rawVisible_lbCustNo && rawVisible_Shape3;
    const setIsVisible_lbCustNo = setRawVisible_lbCustNo;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape3;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_medCustNo = rawVisible_medCustNo && rawVisible_Shape3;
    const setIsVisible_medCustNo = setRawVisible_medCustNo;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape3;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbBarCode = rawVisible_lbBarCode && rawVisible_Shape3;
    const setIsVisible_lbBarCode = setRawVisible_lbBarCode;
    const isVisible_medBarCode = rawVisible_medBarCode && rawVisible_Shape3;
    const setIsVisible_medBarCode = setRawVisible_medBarCode;
    const isVisible_lbDetailCourse = rawVisible_lbDetailCourse && rawVisible_Shape3;
    const setIsVisible_lbDetailCourse = setRawVisible_lbDetailCourse;
    const isVisible_cbxDetailCourse = rawVisible_cbxDetailCourse && rawVisible_Shape3;
    const setIsVisible_cbxDetailCourse = setRawVisible_cbxDetailCourse;
    const isVisible_shpBox1 = rawVisible_shpBox1;
    const setIsVisible_shpBox1 = setRawVisible_shpBox1;
    const isVisible_lbBusiness = rawVisible_lbBusiness && rawVisible_Shape2;
    const setIsVisible_lbBusiness = setRawVisible_lbBusiness;
    const isVisible_cbxBusiness = rawVisible_cbxBusiness && rawVisible_Shape2;
    const setIsVisible_cbxBusiness = setRawVisible_cbxBusiness;
    const isVisible_btnSearchZipCode1 = rawVisible_btnSearchZipCode1 && rawVisible_Shape2;
    const setIsVisible_btnSearchZipCode1 = setRawVisible_btnSearchZipCode1;
    const isVisible_cbxEduPostGubun3 = rawVisible_cbxEduPostGubun3;
    const setIsVisible_cbxEduPostGubun3 = setRawVisible_cbxEduPostGubun3;
    const isVisible_cbxPostGubun2 = rawVisible_cbxPostGubun2 && rawVisible_Shape4;
    const setIsVisible_cbxPostGubun2 = setRawVisible_cbxPostGubun2;
    const isVisible_btnSearchZipCode2 = rawVisible_btnSearchZipCode2 && rawVisible_Shape4;
    const setIsVisible_btnSearchZipCode2 = setRawVisible_btnSearchZipCode2;
    const isVisible_lbJoinYear = rawVisible_lbJoinYear && rawVisible_Shape4;
    const setIsVisible_lbJoinYear = setRawVisible_lbJoinYear;
    const isVisible_meJoinYear = rawVisible_meJoinYear && rawVisible_Shape4;
    const setIsVisible_meJoinYear = setRawVisible_meJoinYear;
    const isVisible_lbFeeYear = rawVisible_lbFeeYear && rawVisible_Shape4;
    const setIsVisible_lbFeeYear = setRawVisible_lbFeeYear;
    const isVisible_meFeeYear = rawVisible_meFeeYear && rawVisible_Shape4;
    const setIsVisible_meFeeYear = setRawVisible_meFeeYear;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_lbSection = rawVisible_lbSection && rawVisible_Shape4;
    const setIsVisible_lbSection = setRawVisible_lbSection;
    const isVisible_cbxPersonGubun = rawVisible_cbxPersonGubun && rawVisible_Shape4;
    const setIsVisible_cbxPersonGubun = setRawVisible_cbxPersonGubun;
    const isVisible_lbAddInfo = rawVisible_lbAddInfo && rawVisible_Shape4;
    const setIsVisible_lbAddInfo = setRawVisible_lbAddInfo;
    const isVisible_edAddContent = rawVisible_edAddContent && rawVisible_Shape4;
    const setIsVisible_edAddContent = setRawVisible_edAddContent;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_lbAppointNm = rawVisible_lbAppointNm && rawVisible_Shape5;
    const setIsVisible_lbAppointNm = setRawVisible_lbAppointNm;
    const isVisible_edManagerNm = rawVisible_edManagerNm && rawVisible_Shape5;
    const setIsVisible_edManagerNm = setRawVisible_edManagerNm;
    const isVisible_lbResidentNo = rawVisible_lbResidentNo && rawVisible_Shape5;
    const setIsVisible_lbResidentNo = setRawVisible_lbResidentNo;
    const isVisible_medResidentNo = rawVisible_medResidentNo && rawVisible_Shape5;
    const setIsVisible_medResidentNo = setRawVisible_medResidentNo;
    const isVisible_lbAppointDate = rawVisible_lbAppointDate && rawVisible_Shape5;
    const setIsVisible_lbAppointDate = setRawVisible_lbAppointDate;
    const isVisible_calAppointDate = rawVisible_calAppointDate && rawVisible_Shape5;
    const setIsVisible_calAppointDate = setRawVisible_calAppointDate;
    const isVisible_lbEndStatus = rawVisible_lbEndStatus && rawVisible_Shape5;
    const setIsVisible_lbEndStatus = setRawVisible_lbEndStatus;
    const isVisible_lbEndStatusYn = rawVisible_lbEndStatusYn && rawVisible_Shape5;
    const setIsVisible_lbEndStatusYn = setRawVisible_lbEndStatusYn;
    const isVisible_calCancelDate = rawVisible_calCancelDate && rawVisible_Shape5;
    const setIsVisible_calCancelDate = setRawVisible_calCancelDate;
    const isVisible_lbEndDate = rawVisible_lbEndDate && rawVisible_Shape5;
    const setIsVisible_lbEndDate = setRawVisible_lbEndDate;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape5;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_edManagerPTel = rawVisible_edManagerPTel && rawVisible_Shape5;
    const setIsVisible_edManagerPTel = setRawVisible_edManagerPTel;
    const isVisible_lbTel = rawVisible_lbTel;
    const setIsVisible_lbTel = setRawVisible_lbTel;
    const isVisible_edTel = rawVisible_edTel;
    const setIsVisible_edTel = setRawVisible_edTel;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_edManagerEmail = rawVisible_edManagerEmail;
    const setIsVisible_edManagerEmail = setRawVisible_edManagerEmail;
    const isVisible_lbTextEMail = rawVisible_lbTextEMail;
    const setIsVisible_lbTextEMail = setRawVisible_lbTextEMail;
    const isVisible_edEmailDomain = rawVisible_edEmailDomain;
    const setIsVisible_edEmailDomain = setRawVisible_edEmailDomain;
    const isVisible_cbxEMailDomain = rawVisible_cbxEMailDomain;
    const setIsVisible_cbxEMailDomain = setRawVisible_cbxEMailDomain;
    const isVisible_lbOldPostAddr = rawVisible_lbOldPostAddr;
    const setIsVisible_lbOldPostAddr = setRawVisible_lbOldPostAddr;
    const isVisible_edOldPostAddr1 = rawVisible_edOldPostAddr1;
    const setIsVisible_edOldPostAddr1 = setRawVisible_edOldPostAddr1;
    const isVisible_medOldPostZipCode = rawVisible_medOldPostZipCode;
    const setIsVisible_medOldPostZipCode = setRawVisible_medOldPostZipCode;
    const isVisible_btnSearchZipCode3 = rawVisible_btnSearchZipCode3;
    const setIsVisible_btnSearchZipCode3 = setRawVisible_btnSearchZipCode3;
    const isVisible_edOldPostAddr2 = rawVisible_edOldPostAddr2;
    const setIsVisible_edOldPostAddr2 = setRawVisible_edOldPostAddr2;
    const isVisible_lbCancelDate = rawVisible_lbCancelDate && rawVisible_Shape5;
    const setIsVisible_lbCancelDate = setRawVisible_lbCancelDate;
    const isVisible_btnBuildingSearch = rawVisible_btnBuildingSearch;
    const setIsVisible_btnBuildingSearch = setRawVisible_btnBuildingSearch;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_cbxPostGubun1 = rawVisible_cbxPostGubun1 && rawVisible_Shape2;
    const setIsVisible_cbxPostGubun1 = setRawVisible_cbxPostGubun1;
    const isVisible_lbManagerAddrAfter = rawVisible_lbManagerAddrAfter;
    const setIsVisible_lbManagerAddrAfter = setRawVisible_lbManagerAddrAfter;
    const isVisible_edManagerAddrAfter = rawVisible_edManagerAddrAfter;
    const setIsVisible_edManagerAddrAfter = setRawVisible_edManagerAddrAfter;
    const isVisible_medManagerZipCodeAfter = rawVisible_medManagerZipCodeAfter;
    const setIsVisible_medManagerZipCodeAfter = setRawVisible_medManagerZipCodeAfter;
    const isVisible_edManagerAddr2After = rawVisible_edManagerAddr2After;
    const setIsVisible_edManagerAddr2After = setRawVisible_edManagerAddr2After;
    const isVisible_lbOwnerGubunAfter = rawVisible_lbOwnerGubunAfter;
    const setIsVisible_lbOwnerGubunAfter = setRawVisible_lbOwnerGubunAfter;
    const isVisible_edOwnerGubunAfter = rawVisible_edOwnerGubunAfter;
    const setIsVisible_edOwnerGubunAfter = setRawVisible_edOwnerGubunAfter;
    const isVisible_lbComment = rawVisible_lbComment;
    const setIsVisible_lbComment = setRawVisible_lbComment;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static6 = rawVisible_Static6;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape6;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape6;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_edCNO = rawVisible_edCNO && rawVisible_Shape6;
    const setIsVisible_edCNO = setRawVisible_edCNO;
    const isVisible_edOldBNM = rawVisible_edOldBNM && rawVisible_Shape6;
    const setIsVisible_edOldBNM = setRawVisible_edOldBNM;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape1;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_edFCCourse = rawVisible_edFCCourse && rawVisible_Shape1;
    const setIsVisible_edFCCourse = setRawVisible_edFCCourse;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape6;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_edOldCourse = rawVisible_edOldCourse && rawVisible_Shape6;
    const setIsVisible_edOldCourse = setRawVisible_edOldCourse;
    const isVisible_btnComplete = rawVisible_btnComplete && rawVisible_Shape0;
    const setIsVisible_btnComplete = setRawVisible_btnComplete;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape1;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_lbElectQualify = rawVisible_lbElectQualify && rawVisible_Shape5;
    const setIsVisible_lbElectQualify = setRawVisible_lbElectQualify;
    const isVisible_cbxElectQualify = rawVisible_cbxElectQualify && rawVisible_Shape5;
    const setIsVisible_cbxElectQualify = setRawVisible_cbxElectQualify;
    const isVisible_btnElectEnd = rawVisible_btnElectEnd;
    const setIsVisible_btnElectEnd = setRawVisible_btnElectEnd;
    const isVisible_lbEnterDate = rawVisible_lbEnterDate && rawVisible_Shape1;
    const setIsVisible_lbEnterDate = setRawVisible_lbEnterDate;
    const isVisible_edEnterDate = rawVisible_edEnterDate && rawVisible_Shape1;
    const setIsVisible_edEnterDate = setRawVisible_edEnterDate;
    const isVisible_lbCar = rawVisible_lbCar;
    const setIsVisible_lbCar = setRawVisible_lbCar;
    const isVisible_lbCarNo = rawVisible_lbCarNo;
    const setIsVisible_lbCarNo = setRawVisible_lbCarNo;
    const isVisible_lbCarPermissionNo = rawVisible_lbCarPermissionNo;
    const setIsVisible_lbCarPermissionNo = setRawVisible_lbCarPermissionNo;
    const isVisible_edCarNo = rawVisible_edCarNo;
    const setIsVisible_edCarNo = setRawVisible_edCarNo;
    const isVisible_lbCarYear = rawVisible_lbCarYear;
    const setIsVisible_lbCarYear = setRawVisible_lbCarYear;
    const isVisible_edCarYear = rawVisible_edCarYear;
    const setIsVisible_edCarYear = setRawVisible_edCarYear;
    const isVisible_edCarPermissionNo = rawVisible_edCarPermissionNo;
    const setIsVisible_edCarPermissionNo = setRawVisible_edCarPermissionNo;
    const isVisible_Shape7 = rawVisible_Shape7;
    const setIsVisible_Shape7 = setRawVisible_Shape7;
    const isVisible_lbNewCar = rawVisible_lbNewCar;
    const setIsVisible_lbNewCar = setRawVisible_lbNewCar;
    const isVisible_lbNewCarNo = rawVisible_lbNewCarNo && rawVisible_Shape7;
    const setIsVisible_lbNewCarNo = setRawVisible_lbNewCarNo;
    const isVisible_edNewCarNo = rawVisible_edNewCarNo && rawVisible_Shape7;
    const setIsVisible_edNewCarNo = setRawVisible_edNewCarNo;
    const isVisible_edNewCarYear = rawVisible_edNewCarYear && rawVisible_Shape7;
    const setIsVisible_edNewCarYear = setRawVisible_edNewCarYear;
    const isVisible_edNewCarPermissionNo = rawVisible_edNewCarPermissionNo && rawVisible_Shape7;
    const setIsVisible_edNewCarPermissionNo = setRawVisible_edNewCarPermissionNo;
    const isVisible_lbNewCarYear = rawVisible_lbNewCarYear && rawVisible_Shape7;
    const setIsVisible_lbNewCarYear = setRawVisible_lbNewCarYear;
    const isVisible_lbNewCarPermissionNo = rawVisible_lbNewCarPermissionNo && rawVisible_Shape7;
    const setIsVisible_lbNewCarPermissionNo = setRawVisible_lbNewCarPermissionNo;
    const isVisible_lbEnterQualify = rawVisible_lbEnterQualify && rawVisible_Shape1;
    const setIsVisible_lbEnterQualify = setRawVisible_lbEnterQualify;
    const isVisible_edEnterQualify = rawVisible_edEnterQualify && rawVisible_Shape1;
    const setIsVisible_edEnterQualify = setRawVisible_edEnterQualify;
    const isVisible_cbxFCGTNM = rawVisible_cbxFCGTNM && rawVisible_Shape1;
    const setIsVisible_cbxFCGTNM = setRawVisible_cbxFCGTNM;
    const isVisible_btnChange = rawVisible_btnChange && rawVisible_Shape1;
    const setIsVisible_btnChange = setRawVisible_btnChange;
    const isVisible_btnCustomerLink = rawVisible_btnCustomerLink;
    const setIsVisible_btnCustomerLink = setRawVisible_btnCustomerLink;
    const isVisible_Static5 = rawVisible_Static5;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_medPersonKey = rawVisible_medPersonKey;
    const setIsVisible_medPersonKey = setRawVisible_medPersonKey;

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
            setds_oElectQualify([]);
            setds_oStatus([]);
            setds_ioTankInfo([]);
            setds_oAccountInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnBuildingSearch_OnClick = () => {
        console.log('btnBuildingSearch_OnClick clicked');
    };
    const btnCancle_OnClick = () => {
        console.log('btnCancle_OnClick clicked');
    };
    const btnChangeInfo_OnClick = () => {
        console.log('btnChangeInfo_OnClick clicked');
    };
    const btnChange_OnClick = () => {
        console.log('btnChange_OnClick clicked');
    };
    const btnComplete_OnClick = () => {
        console.log('btnComplete_OnClick clicked');
    };
    const btnCustomerLink_OnClick = () => {
        console.log('btnCustomerLink_OnClick clicked');
    };
    const btnDefer_OnClick = () => {
        console.log('btnDefer_OnClick clicked');
    };
    const btnElectEnd_OnClick = () => {
        console.log('btnElectEnd_OnClick clicked');
    };
    const btnJubsu_OnClick = () => {
        console.log('btnJubsu_OnClick clicked');
    };
    const btnSearchZipCode1_OnClick = () => {
        console.log('btnSearchZipCode1_OnClick clicked');
    };
    const btnSearchZipCode2_OnClick = () => {
        console.log('btnSearchZipCode2_OnClick clicked');
    };
    const btnSearchZipCode3_OnClick = () => {
        console.log('btnSearchZipCode3_OnClick clicked');
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
        ds_oElectQualify,
        ds_oStatus,
        ds_ioTankInfo,
        ds_oAccountInfo,
        isVisible_Shape6,
        setIsVisible_Shape6,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbBuildingNmAfter,
        setIsVisible_lbBuildingNmAfter,
        isVisible_lbTelNoAfter,
        setIsVisible_lbTelNoAfter,
        isVisible_medOldZipCode,
        setIsVisible_medOldZipCode,
        isVisible_edOldAddr2,
        setIsVisible_edOldAddr2,
        isVisible_edOldAddr1,
        setIsVisible_edOldAddr1,
        isVisible_edBuildingNmAfter,
        setIsVisible_edBuildingNmAfter,
        isVisible_edTelNoAfter,
        setIsVisible_edTelNoAfter,
        isVisible_lbFaxNoAfter,
        setIsVisible_lbFaxNoAfter,
        isVisible_edFaxNoAfter,
        setIsVisible_edFaxNoAfter,
        isVisible_lbJubsuInfo,
        setIsVisible_lbJubsuInfo,
        isVisible_lbDelegateAddrAfter,
        setIsVisible_lbDelegateAddrAfter,
        isVisible_lbChangeInfo,
        setIsVisible_lbChangeInfo,
        isVisible_lbManagerInfo,
        setIsVisible_lbManagerInfo,
        isVisible_lbHopeAddrAfter,
        setIsVisible_lbHopeAddrAfter,
        isVisible_medHopeZipCodeAfter,
        setIsVisible_medHopeZipCodeAfter,
        isVisible_edHopeAddrAfter,
        setIsVisible_edHopeAddrAfter,
        isVisible_edHopeAddr2After,
        setIsVisible_edHopeAddr2After,
        isVisible_lbAreaAfter,
        setIsVisible_lbAreaAfter,
        isVisible_medAreaAfter,
        setIsVisible_medAreaAfter,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_lbPTelAfter,
        setIsVisible_lbPTelAfter,
        isVisible_edPTelAfter,
        setIsVisible_edPTelAfter,
        isVisible_lbEMailAfter,
        setIsVisible_lbEMailAfter,
        isVisible_edEMailIDAfter,
        setIsVisible_edEMailIDAfter,
        isVisible_lbOwnerNmAfter,
        setIsVisible_lbOwnerNmAfter,
        isVisible_edOwnerNmAfter,
        setIsVisible_edOwnerNmAfter,
        isVisible_lbOwnerTelAfter,
        setIsVisible_lbOwnerTelAfter,
        isVisible_edOwnerTelAfter,
        setIsVisible_edOwnerTelAfter,
        isVisible_lbOwnerPTelAfter,
        setIsVisible_lbOwnerPTelAfter,
        isVisible_edOwnerPTelAfter,
        setIsVisible_edOwnerPTelAfter,
        isVisible_btnChangeInfo,
        setIsVisible_btnChangeInfo,
        isVisible_lbJubsuPersonkey,
        setIsVisible_lbJubsuPersonkey,
        isVisible_edJubsuPersonkey,
        setIsVisible_edJubsuPersonkey,
        isVisible_lbJubsuNm,
        setIsVisible_lbJubsuNm,
        isVisible_edJubsuNm,
        setIsVisible_edJubsuNm,
        isVisible_lbJubsuBirthday,
        setIsVisible_lbJubsuBirthday,
        isVisible_edJubsuBirthday,
        setIsVisible_edJubsuBirthday,
        isVisible_lbJubsuGubun,
        setIsVisible_lbJubsuGubun,
        isVisible_edJubsuGubun,
        setIsVisible_edJubsuGubun,
        isVisible_lbJubsuStat,
        setIsVisible_lbJubsuStat,
        isVisible_edJubsuStat,
        setIsVisible_edJubsuStat,
        isVisible_lbJubsuDate,
        setIsVisible_lbJubsuDate,
        isVisible_edJubsuDate,
        setIsVisible_edJubsuDate,
        isVisible_btnJubsu,
        setIsVisible_btnJubsu,
        isVisible_btnDefer,
        setIsVisible_btnDefer,
        isVisible_btnCancle,
        setIsVisible_btnCancle,
        isVisible_lbBuildingNm,
        setIsVisible_lbBuildingNm,
        isVisible_lbTelNo,
        setIsVisible_lbTelNo,
        isVisible_medNewZipCode,
        setIsVisible_medNewZipCode,
        isVisible_edNewAddr2,
        setIsVisible_edNewAddr2,
        isVisible_edNewAddr1,
        setIsVisible_edNewAddr1,
        isVisible_edBuildingNm,
        setIsVisible_edBuildingNm,
        isVisible_edTelNo,
        setIsVisible_edTelNo,
        isVisible_lbFaxNo,
        setIsVisible_lbFaxNo,
        isVisible_edFaxNo,
        setIsVisible_edFaxNo,
        isVisible_lbDelegateAddr,
        setIsVisible_lbDelegateAddr,
        isVisible_lbHopeAddr,
        setIsVisible_lbHopeAddr,
        isVisible_medHopeZipCode,
        setIsVisible_medHopeZipCode,
        isVisible_edHopeAddr,
        setIsVisible_edHopeAddr,
        isVisible_edHopeAddr2,
        setIsVisible_edHopeAddr2,
        isVisible_lbArea,
        setIsVisible_lbArea,
        isVisible_medArea,
        setIsVisible_medArea,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_lbTitle,
        setIsVisible_lbTitle,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_lbLocal,
        setIsVisible_lbLocal,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_cbxRegion,
        setIsVisible_cbxRegion,
        isVisible_lbCustNo,
        setIsVisible_lbCustNo,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_medCustNo,
        setIsVisible_medCustNo,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbBarCode,
        setIsVisible_lbBarCode,
        isVisible_medBarCode,
        setIsVisible_medBarCode,
        isVisible_lbDetailCourse,
        setIsVisible_lbDetailCourse,
        isVisible_cbxDetailCourse,
        setIsVisible_cbxDetailCourse,
        isVisible_shpBox1,
        setIsVisible_shpBox1,
        isVisible_lbBusiness,
        setIsVisible_lbBusiness,
        isVisible_cbxBusiness,
        setIsVisible_cbxBusiness,
        isVisible_btnSearchZipCode1,
        setIsVisible_btnSearchZipCode1,
        isVisible_cbxEduPostGubun3,
        setIsVisible_cbxEduPostGubun3,
        isVisible_cbxPostGubun2,
        setIsVisible_cbxPostGubun2,
        isVisible_btnSearchZipCode2,
        setIsVisible_btnSearchZipCode2,
        isVisible_lbJoinYear,
        setIsVisible_lbJoinYear,
        isVisible_meJoinYear,
        setIsVisible_meJoinYear,
        isVisible_lbFeeYear,
        setIsVisible_lbFeeYear,
        isVisible_meFeeYear,
        setIsVisible_meFeeYear,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_lbSection,
        setIsVisible_lbSection,
        isVisible_cbxPersonGubun,
        setIsVisible_cbxPersonGubun,
        isVisible_lbAddInfo,
        setIsVisible_lbAddInfo,
        isVisible_edAddContent,
        setIsVisible_edAddContent,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_lbAppointNm,
        setIsVisible_lbAppointNm,
        isVisible_edManagerNm,
        setIsVisible_edManagerNm,
        isVisible_lbResidentNo,
        setIsVisible_lbResidentNo,
        isVisible_medResidentNo,
        setIsVisible_medResidentNo,
        isVisible_lbAppointDate,
        setIsVisible_lbAppointDate,
        isVisible_calAppointDate,
        setIsVisible_calAppointDate,
        isVisible_lbEndStatus,
        setIsVisible_lbEndStatus,
        isVisible_lbEndStatusYn,
        setIsVisible_lbEndStatusYn,
        isVisible_calCancelDate,
        setIsVisible_calCancelDate,
        isVisible_lbEndDate,
        setIsVisible_lbEndDate,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edManagerPTel,
        setIsVisible_edManagerPTel,
        isVisible_lbTel,
        setIsVisible_lbTel,
        isVisible_edTel,
        setIsVisible_edTel,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_edManagerEmail,
        setIsVisible_edManagerEmail,
        isVisible_lbTextEMail,
        setIsVisible_lbTextEMail,
        isVisible_edEmailDomain,
        setIsVisible_edEmailDomain,
        isVisible_cbxEMailDomain,
        setIsVisible_cbxEMailDomain,
        isVisible_lbOldPostAddr,
        setIsVisible_lbOldPostAddr,
        isVisible_edOldPostAddr1,
        setIsVisible_edOldPostAddr1,
        isVisible_medOldPostZipCode,
        setIsVisible_medOldPostZipCode,
        isVisible_btnSearchZipCode3,
        setIsVisible_btnSearchZipCode3,
        isVisible_edOldPostAddr2,
        setIsVisible_edOldPostAddr2,
        isVisible_lbCancelDate,
        setIsVisible_lbCancelDate,
        isVisible_btnBuildingSearch,
        setIsVisible_btnBuildingSearch,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_cbxPostGubun1,
        setIsVisible_cbxPostGubun1,
        isVisible_lbManagerAddrAfter,
        setIsVisible_lbManagerAddrAfter,
        isVisible_edManagerAddrAfter,
        setIsVisible_edManagerAddrAfter,
        isVisible_medManagerZipCodeAfter,
        setIsVisible_medManagerZipCodeAfter,
        isVisible_edManagerAddr2After,
        setIsVisible_edManagerAddr2After,
        isVisible_lbOwnerGubunAfter,
        setIsVisible_lbOwnerGubunAfter,
        isVisible_edOwnerGubunAfter,
        setIsVisible_edOwnerGubunAfter,
        isVisible_lbComment,
        setIsVisible_lbComment,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_edCNO,
        setIsVisible_edCNO,
        isVisible_edOldBNM,
        setIsVisible_edOldBNM,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_edFCCourse,
        setIsVisible_edFCCourse,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_edOldCourse,
        setIsVisible_edOldCourse,
        isVisible_btnComplete,
        setIsVisible_btnComplete,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_lbElectQualify,
        setIsVisible_lbElectQualify,
        isVisible_cbxElectQualify,
        setIsVisible_cbxElectQualify,
        isVisible_btnElectEnd,
        setIsVisible_btnElectEnd,
        isVisible_lbEnterDate,
        setIsVisible_lbEnterDate,
        isVisible_edEnterDate,
        setIsVisible_edEnterDate,
        isVisible_lbCar,
        setIsVisible_lbCar,
        isVisible_lbCarNo,
        setIsVisible_lbCarNo,
        isVisible_lbCarPermissionNo,
        setIsVisible_lbCarPermissionNo,
        isVisible_edCarNo,
        setIsVisible_edCarNo,
        isVisible_lbCarYear,
        setIsVisible_lbCarYear,
        isVisible_edCarYear,
        setIsVisible_edCarYear,
        isVisible_edCarPermissionNo,
        setIsVisible_edCarPermissionNo,
        isVisible_Shape7,
        setIsVisible_Shape7,
        isVisible_lbNewCar,
        setIsVisible_lbNewCar,
        isVisible_lbNewCarNo,
        setIsVisible_lbNewCarNo,
        isVisible_edNewCarNo,
        setIsVisible_edNewCarNo,
        isVisible_edNewCarYear,
        setIsVisible_edNewCarYear,
        isVisible_edNewCarPermissionNo,
        setIsVisible_edNewCarPermissionNo,
        isVisible_lbNewCarYear,
        setIsVisible_lbNewCarYear,
        isVisible_lbNewCarPermissionNo,
        setIsVisible_lbNewCarPermissionNo,
        isVisible_lbEnterQualify,
        setIsVisible_lbEnterQualify,
        isVisible_edEnterQualify,
        setIsVisible_edEnterQualify,
        isVisible_cbxFCGTNM,
        setIsVisible_cbxFCGTNM,
        isVisible_btnChange,
        setIsVisible_btnChange,
        isVisible_btnCustomerLink,
        setIsVisible_btnCustomerLink,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_medPersonKey,
        setIsVisible_medPersonKey,
        btnBuildingSearch_OnClick,
        btnCancle_OnClick,
        btnChangeInfo_OnClick,
        btnChange_OnClick,
        btnComplete_OnClick,
        btnCustomerLink_OnClick,
        btnDefer_OnClick,
        btnElectEnd_OnClick,
        btnJubsu_OnClick,
        btnSearchZipCode1_OnClick,
        btnSearchZipCode2_OnClick,
        btnSearchZipCode3_OnClick,
        lfn_End,
        lfn_Save,
    };
};