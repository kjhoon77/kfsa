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
    const [isVisible_Shape6, setIsVisible_Shape6] = useState(true);
    const [isVisible_Shape5, setIsVisible_Shape5] = useState(true);
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbBuildingNmAfter, setIsVisible_lbBuildingNmAfter] = useState(true);
    const [isVisible_lbTelNoAfter, setIsVisible_lbTelNoAfter] = useState(true);
    const [isVisible_medOldZipCode, setIsVisible_medOldZipCode] = useState(true);
    const [isVisible_edOldAddr2, setIsVisible_edOldAddr2] = useState(true);
    const [isVisible_edOldAddr1, setIsVisible_edOldAddr1] = useState(true);
    const [isVisible_edBuildingNmAfter, setIsVisible_edBuildingNmAfter] = useState(true);
    const [isVisible_edTelNoAfter, setIsVisible_edTelNoAfter] = useState(true);
    const [isVisible_lbFaxNoAfter, setIsVisible_lbFaxNoAfter] = useState(true);
    const [isVisible_edFaxNoAfter, setIsVisible_edFaxNoAfter] = useState(true);
    const [isVisible_lbJubsuInfo, setIsVisible_lbJubsuInfo] = useState(true);
    const [isVisible_lbDelegateAddrAfter, setIsVisible_lbDelegateAddrAfter] = useState(true);
    const [isVisible_lbChangeInfo, setIsVisible_lbChangeInfo] = useState(true);
    const [isVisible_lbManagerInfo, setIsVisible_lbManagerInfo] = useState(true);
    const [isVisible_lbHopeAddrAfter, setIsVisible_lbHopeAddrAfter] = useState(true);
    const [isVisible_medHopeZipCodeAfter, setIsVisible_medHopeZipCodeAfter] = useState(true);
    const [isVisible_edHopeAddrAfter, setIsVisible_edHopeAddrAfter] = useState(true);
    const [isVisible_edHopeAddr2After, setIsVisible_edHopeAddr2After] = useState(true);
    const [isVisible_lbAreaAfter, setIsVisible_lbAreaAfter] = useState(true);
    const [isVisible_medAreaAfter, setIsVisible_medAreaAfter] = useState(true);
    const [isVisible_lbText, setIsVisible_lbText] = useState(true);
    const [isVisible_lbPTelAfter, setIsVisible_lbPTelAfter] = useState(true);
    const [isVisible_edPTelAfter, setIsVisible_edPTelAfter] = useState(true);
    const [isVisible_lbEMailAfter, setIsVisible_lbEMailAfter] = useState(true);
    const [isVisible_edEMailIDAfter, setIsVisible_edEMailIDAfter] = useState(true);
    const [isVisible_lbOwnerNmAfter, setIsVisible_lbOwnerNmAfter] = useState(false);
    const [isVisible_edOwnerNmAfter, setIsVisible_edOwnerNmAfter] = useState(false);
    const [isVisible_lbOwnerTelAfter, setIsVisible_lbOwnerTelAfter] = useState(false);
    const [isVisible_edOwnerTelAfter, setIsVisible_edOwnerTelAfter] = useState(false);
    const [isVisible_lbOwnerPTelAfter, setIsVisible_lbOwnerPTelAfter] = useState(false);
    const [isVisible_edOwnerPTelAfter, setIsVisible_edOwnerPTelAfter] = useState(false);
    const [isVisible_btnChangeInfo, setIsVisible_btnChangeInfo] = useState(true);
    const [isVisible_lbJubsuPersonkey, setIsVisible_lbJubsuPersonkey] = useState(true);
    const [isVisible_edJubsuPersonkey, setIsVisible_edJubsuPersonkey] = useState(true);
    const [isVisible_lbJubsuNm, setIsVisible_lbJubsuNm] = useState(true);
    const [isVisible_edJubsuNm, setIsVisible_edJubsuNm] = useState(true);
    const [isVisible_lbJubsuBirthday, setIsVisible_lbJubsuBirthday] = useState(true);
    const [isVisible_edJubsuBirthday, setIsVisible_edJubsuBirthday] = useState(true);
    const [isVisible_lbJubsuGubun, setIsVisible_lbJubsuGubun] = useState(true);
    const [isVisible_edJubsuGubun, setIsVisible_edJubsuGubun] = useState(true);
    const [isVisible_lbJubsuStat, setIsVisible_lbJubsuStat] = useState(true);
    const [isVisible_edJubsuStat, setIsVisible_edJubsuStat] = useState(true);
    const [isVisible_lbJubsuDate, setIsVisible_lbJubsuDate] = useState(true);
    const [isVisible_edJubsuDate, setIsVisible_edJubsuDate] = useState(true);
    const [isVisible_btnJubsu, setIsVisible_btnJubsu] = useState(true);
    const [isVisible_btnDefer, setIsVisible_btnDefer] = useState(true);
    const [isVisible_btnCancle, setIsVisible_btnCancle] = useState(true);
    const [isVisible_lbBuildingNm, setIsVisible_lbBuildingNm] = useState(true);
    const [isVisible_lbTelNo, setIsVisible_lbTelNo] = useState(true);
    const [isVisible_medNewZipCode, setIsVisible_medNewZipCode] = useState(true);
    const [isVisible_edNewAddr2, setIsVisible_edNewAddr2] = useState(true);
    const [isVisible_edNewAddr1, setIsVisible_edNewAddr1] = useState(true);
    const [isVisible_edBuildingNm, setIsVisible_edBuildingNm] = useState(true);
    const [isVisible_edTelNo, setIsVisible_edTelNo] = useState(true);
    const [isVisible_lbFaxNo, setIsVisible_lbFaxNo] = useState(true);
    const [isVisible_edFaxNo, setIsVisible_edFaxNo] = useState(true);
    const [isVisible_lbDelegateAddr, setIsVisible_lbDelegateAddr] = useState(true);
    const [isVisible_lbHopeAddr, setIsVisible_lbHopeAddr] = useState(true);
    const [isVisible_medHopeZipCode, setIsVisible_medHopeZipCode] = useState(true);
    const [isVisible_edHopeAddr, setIsVisible_edHopeAddr] = useState(true);
    const [isVisible_edHopeAddr2, setIsVisible_edHopeAddr2] = useState(true);
    const [isVisible_lbArea, setIsVisible_lbArea] = useState(true);
    const [isVisible_medArea, setIsVisible_medArea] = useState(true);
    const [isVisible_Static18, setIsVisible_Static18] = useState(true);
    const [isVisible_lbTitle, setIsVisible_lbTitle] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_lbLocal, setIsVisible_lbLocal] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_cbxRegion, setIsVisible_cbxRegion] = useState(true);
    const [isVisible_lbCustNo, setIsVisible_lbCustNo] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_medCustNo, setIsVisible_medCustNo] = useState(true);
    const [isVisible_cbxCourse, setIsVisible_cbxCourse] = useState(true);
    const [isVisible_lbBarCode, setIsVisible_lbBarCode] = useState(true);
    const [isVisible_medBarCode, setIsVisible_medBarCode] = useState(true);
    const [isVisible_lbDetailCourse, setIsVisible_lbDetailCourse] = useState(true);
    const [isVisible_cbxDetailCourse, setIsVisible_cbxDetailCourse] = useState(true);
    const [isVisible_shpBox1, setIsVisible_shpBox1] = useState(true);
    const [isVisible_lbBusiness, setIsVisible_lbBusiness] = useState(true);
    const [isVisible_cbxBusiness, setIsVisible_cbxBusiness] = useState(true);
    const [isVisible_btnSearchZipCode1, setIsVisible_btnSearchZipCode1] = useState(true);
    const [isVisible_cbxEduPostGubun3, setIsVisible_cbxEduPostGubun3] = useState(true);
    const [isVisible_cbxPostGubun2, setIsVisible_cbxPostGubun2] = useState(true);
    const [isVisible_btnSearchZipCode2, setIsVisible_btnSearchZipCode2] = useState(true);
    const [isVisible_lbJoinYear, setIsVisible_lbJoinYear] = useState(true);
    const [isVisible_meJoinYear, setIsVisible_meJoinYear] = useState(true);
    const [isVisible_lbFeeYear, setIsVisible_lbFeeYear] = useState(true);
    const [isVisible_meFeeYear, setIsVisible_meFeeYear] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_lbSection, setIsVisible_lbSection] = useState(true);
    const [isVisible_cbxPersonGubun, setIsVisible_cbxPersonGubun] = useState(true);
    const [isVisible_lbAddInfo, setIsVisible_lbAddInfo] = useState(true);
    const [isVisible_edAddContent, setIsVisible_edAddContent] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_lbAppointNm, setIsVisible_lbAppointNm] = useState(true);
    const [isVisible_edManagerNm, setIsVisible_edManagerNm] = useState(true);
    const [isVisible_lbResidentNo, setIsVisible_lbResidentNo] = useState(true);
    const [isVisible_medResidentNo, setIsVisible_medResidentNo] = useState(true);
    const [isVisible_lbAppointDate, setIsVisible_lbAppointDate] = useState(true);
    const [isVisible_calAppointDate, setIsVisible_calAppointDate] = useState(true);
    const [isVisible_lbEndStatus, setIsVisible_lbEndStatus] = useState(true);
    const [isVisible_lbEndStatusYn, setIsVisible_lbEndStatusYn] = useState(false);
    const [isVisible_calCancelDate, setIsVisible_calCancelDate] = useState(true);
    const [isVisible_lbEndDate, setIsVisible_lbEndDate] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_edManagerPTel, setIsVisible_edManagerPTel] = useState(true);
    const [isVisible_lbTel, setIsVisible_lbTel] = useState(true);
    const [isVisible_edTel, setIsVisible_edTel] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_edManagerEmail, setIsVisible_edManagerEmail] = useState(true);
    const [isVisible_lbTextEMail, setIsVisible_lbTextEMail] = useState(true);
    const [isVisible_edEmailDomain, setIsVisible_edEmailDomain] = useState(true);
    const [isVisible_cbxEMailDomain, setIsVisible_cbxEMailDomain] = useState(true);
    const [isVisible_lbOldPostAddr, setIsVisible_lbOldPostAddr] = useState(true);
    const [isVisible_edOldPostAddr1, setIsVisible_edOldPostAddr1] = useState(true);
    const [isVisible_medOldPostZipCode, setIsVisible_medOldPostZipCode] = useState(true);
    const [isVisible_btnSearchZipCode3, setIsVisible_btnSearchZipCode3] = useState(true);
    const [isVisible_edOldPostAddr2, setIsVisible_edOldPostAddr2] = useState(true);
    const [isVisible_lbCancelDate, setIsVisible_lbCancelDate] = useState(true);
    const [isVisible_btnBuildingSearch, setIsVisible_btnBuildingSearch] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_cbxPostGubun1, setIsVisible_cbxPostGubun1] = useState(true);
    const [isVisible_lbManagerAddrAfter, setIsVisible_lbManagerAddrAfter] = useState(true);
    const [isVisible_edManagerAddrAfter, setIsVisible_edManagerAddrAfter] = useState(true);
    const [isVisible_medManagerZipCodeAfter, setIsVisible_medManagerZipCodeAfter] = useState(true);
    const [isVisible_edManagerAddr2After, setIsVisible_edManagerAddr2After] = useState(true);
    const [isVisible_lbOwnerGubunAfter, setIsVisible_lbOwnerGubunAfter] = useState(false);
    const [isVisible_edOwnerGubunAfter, setIsVisible_edOwnerGubunAfter] = useState(false);
    const [isVisible_lbComment, setIsVisible_lbComment] = useState(false);
    const [isVisible_Static4, setIsVisible_Static4] = useState(false);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_edCNO, setIsVisible_edCNO] = useState(true);
    const [isVisible_edOldBNM, setIsVisible_edOldBNM] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_edFCCourse, setIsVisible_edFCCourse] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_edOldCourse, setIsVisible_edOldCourse] = useState(true);
    const [isVisible_btnComplete, setIsVisible_btnComplete] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_lbElectQualify, setIsVisible_lbElectQualify] = useState(true);
    const [isVisible_cbxElectQualify, setIsVisible_cbxElectQualify] = useState(true);
    const [isVisible_btnElectEnd, setIsVisible_btnElectEnd] = useState(true);
    const [isVisible_lbEnterDate, setIsVisible_lbEnterDate] = useState(true);
    const [isVisible_edEnterDate, setIsVisible_edEnterDate] = useState(true);
    const [isVisible_lbCar, setIsVisible_lbCar] = useState(false);
    const [isVisible_lbCarNo, setIsVisible_lbCarNo] = useState(false);
    const [isVisible_lbCarPermissionNo, setIsVisible_lbCarPermissionNo] = useState(false);
    const [isVisible_edCarNo, setIsVisible_edCarNo] = useState(false);
    const [isVisible_lbCarYear, setIsVisible_lbCarYear] = useState(false);
    const [isVisible_edCarYear, setIsVisible_edCarYear] = useState(false);
    const [isVisible_edCarPermissionNo, setIsVisible_edCarPermissionNo] = useState(false);
    const [isVisible_Shape7, setIsVisible_Shape7] = useState(false);
    const [isVisible_lbNewCar, setIsVisible_lbNewCar] = useState(false);
    const [isVisible_lbNewCarNo, setIsVisible_lbNewCarNo] = useState(false);
    const [isVisible_edNewCarNo, setIsVisible_edNewCarNo] = useState(false);
    const [isVisible_edNewCarYear, setIsVisible_edNewCarYear] = useState(false);
    const [isVisible_edNewCarPermissionNo, setIsVisible_edNewCarPermissionNo] = useState(false);
    const [isVisible_lbNewCarYear, setIsVisible_lbNewCarYear] = useState(false);
    const [isVisible_lbNewCarPermissionNo, setIsVisible_lbNewCarPermissionNo] = useState(false);
    const [isVisible_lbEnterQualify, setIsVisible_lbEnterQualify] = useState(true);
    const [isVisible_edEnterQualify, setIsVisible_edEnterQualify] = useState(true);
    const [isVisible_cbxFCGTNM, setIsVisible_cbxFCGTNM] = useState(true);
    const [isVisible_btnChange, setIsVisible_btnChange] = useState(true);
    const [isVisible_btnCustomerLink, setIsVisible_btnCustomerLink] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_medPersonKey, setIsVisible_medPersonKey] = useState(true);

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