// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioManager, Ids_ModifyGubun, Ids_oManagerList, Ids_oStatus, Ids_MemberGubun, Ids_oMemberStatus, Ids_iCustomerInfo, Ids_oOldInfo, Ids_oMemberStat, Ids_oLicenseList, Ids_oMemberAgree, Ids_iCustomerModifyHistory, Ids_oEduPass, Ids_oFPISSubManager, Ids_oPersonInfoAll, Ids_oCallKeyIn } from './Frmcust0018PManagerChangeData';

export const useFrmcust0018PManagerChange = () => {
    const [ds_ioManager, setds_ioManager] = useState<Ids_ioManager[]>([]);
    const [ds_ModifyGubun, setds_ModifyGubun] = useState<Ids_ModifyGubun[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_MemberGubun, setds_MemberGubun] = useState<Ids_MemberGubun[]>([]);
    const [ds_oMemberStatus, setds_oMemberStatus] = useState<Ids_oMemberStatus[]>([]);
    const [ds_iCustomerInfo, setds_iCustomerInfo] = useState<Ids_iCustomerInfo[]>([]);
    const [ds_oOldInfo, setds_oOldInfo] = useState<Ids_oOldInfo[]>([]);
    const [ds_oMemberStat, setds_oMemberStat] = useState<Ids_oMemberStat[]>([]);
    const [ds_oLicenseList, setds_oLicenseList] = useState<Ids_oLicenseList[]>([]);
    const [ds_oMemberAgree, setds_oMemberAgree] = useState<Ids_oMemberAgree[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_oEduPass, setds_oEduPass] = useState<Ids_oEduPass[]>([]);
    const [ds_oFPISSubManager, setds_oFPISSubManager] = useState<Ids_oFPISSubManager[]>([]);
    const [ds_oPersonInfoAll, setds_oPersonInfoAll] = useState<Ids_oPersonInfoAll[]>([]);
    const [ds_oCallKeyIn, setds_oCallKeyIn] = useState<Ids_oCallKeyIn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_lbText02, setIsVisible_lbText02] = useState(false);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_shpGubunBox3, setIsVisible_shpGubunBox3] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbPersonNm1, setIsVisible_lbPersonNm1] = useState(true);
    const [isVisible_edPersonNm1, setIsVisible_edPersonNm1] = useState(true);
    const [isVisible_lbBirthday1, setIsVisible_lbBirthday1] = useState(true);
    const [isVisible_medBirthday, setIsVisible_medBirthday] = useState(true);
    const [isVisible_lbPersonNm2, setIsVisible_lbPersonNm2] = useState(true);
    const [isVisible_edPersonNm2, setIsVisible_edPersonNm2] = useState(true);
    const [isVisible_lbResidentNo2, setIsVisible_lbResidentNo2] = useState(true);
    const [isVisible_medResidentNo2, setIsVisible_medResidentNo2] = useState(true);
    const [isVisible_lbPersonInfo, setIsVisible_lbPersonInfo] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_radModifyGubun, setIsVisible_radModifyGubun] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_btnAuthResidentNo, setIsVisible_btnAuthResidentNo] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnSaveManager, setIsVisible_btnSaveManager] = useState(true);
    const [isVisible_btnMutilSort, setIsVisible_btnMutilSort] = useState(true);
    const [isVisible_calCancelDate, setIsVisible_calCancelDate] = useState(true);
    const [isVisible_lbCancelDate, setIsVisible_lbCancelDate] = useState(true);
    const [isVisible_gdManagerList, setIsVisible_gdManagerList] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_lbAppointDate, setIsVisible_lbAppointDate] = useState(true);
    const [isVisible_calAppointDate, setIsVisible_calAppointDate] = useState(true);
    const [isVisible_lbText01, setIsVisible_lbText01] = useState(true);
    const [isVisible_lbResidentNoError, setIsVisible_lbResidentNoError] = useState(false);
    const [isVisible_lbMemberGubun, setIsVisible_lbMemberGubun] = useState(true);
    const [isVisible_radMember, setIsVisible_radMember] = useState(true);
    const [isVisible_btnMemberSave, setIsVisible_btnMemberSave] = useState(false);
    const [isVisible_Grid0, setIsVisible_Grid0] = useState(true);
    const [isVisible_btnLicenseList, setIsVisible_btnLicenseList] = useState(true);
    const [isVisible_medLcsNo, setIsVisible_medLcsNo] = useState(true);
    const [isVisible_lbPTel, setIsVisible_lbPTel] = useState(true);
    const [isVisible_edPTel, setIsVisible_edPTel] = useState(true);
    const [isVisible_cbxMember, setIsVisible_cbxMember] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_edAgreeDate, setIsVisible_edAgreeDate] = useState(true);
    const [isVisible_Div0, setIsVisible_Div0] = useState(true);
    const [isVisible_lbPersonKey, setIsVisible_lbPersonKey] = useState(true);
    const [isVisible_medPersonKey, setIsVisible_medPersonKey] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_medPersonKey2, setIsVisible_medPersonKey2] = useState(true);
    const [isVisible_lbLcsNo, setIsVisible_lbLcsNo] = useState(true);
    const [isVisible_lbModifyGubun, setIsVisible_lbModifyGubun] = useState(true);
    const [isVisible_btnKeyinJumin, setIsVisible_btnKeyinJumin] = useState(true);
    const [isVisible_btnKeyinHP, setIsVisible_btnKeyinHP] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioManager([]);
            setds_ModifyGubun([]);
            setds_oManagerList([]);
            setds_oStatus([]);
            setds_MemberGubun([]);
            setds_oMemberStatus([]);
            setds_iCustomerInfo([]);
            setds_oOldInfo([]);
            setds_oMemberStat([]);
            setds_oLicenseList([]);
            setds_oMemberAgree([]);
            setds_iCustomerModifyHistory([]);
            setds_oEduPass([]);
            setds_oFPISSubManager([]);
            setds_oPersonInfoAll([]);
            setds_oCallKeyIn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAuthResidentNo_OnClick = () => {
        console.log('btnAuthResidentNo_OnClick clicked');
    };
    const btnKeyinHP_OnClick = () => {
        console.log('btnKeyinHP_OnClick clicked');
    };
    const btnKeyinJumin_OnClick = () => {
        console.log('btnKeyinJumin_OnClick clicked');
    };
    const btnLicenseList_OnClick = () => {
        console.log('btnLicenseList_OnClick clicked');
    };
    const btnMemberSave_OnClick = () => {
        console.log('btnMemberSave_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSaveManager_OnClick = () => {
        console.log('btnSaveManager_OnClick clicked');
    };
    const btnSearch_OnClick = () => {
        console.log('btnSearch_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioManager,
        ds_ModifyGubun,
        ds_oManagerList,
        ds_oStatus,
        ds_MemberGubun,
        ds_oMemberStatus,
        ds_iCustomerInfo,
        ds_oOldInfo,
        ds_oMemberStat,
        ds_oLicenseList,
        ds_oMemberAgree,
        ds_iCustomerModifyHistory,
        ds_oEduPass,
        ds_oFPISSubManager,
        ds_oPersonInfoAll,
        ds_oCallKeyIn,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_lbText02,
        setIsVisible_lbText02,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbPersonNm1,
        setIsVisible_lbPersonNm1,
        isVisible_edPersonNm1,
        setIsVisible_edPersonNm1,
        isVisible_lbBirthday1,
        setIsVisible_lbBirthday1,
        isVisible_medBirthday,
        setIsVisible_medBirthday,
        isVisible_lbPersonNm2,
        setIsVisible_lbPersonNm2,
        isVisible_edPersonNm2,
        setIsVisible_edPersonNm2,
        isVisible_lbResidentNo2,
        setIsVisible_lbResidentNo2,
        isVisible_medResidentNo2,
        setIsVisible_medResidentNo2,
        isVisible_lbPersonInfo,
        setIsVisible_lbPersonInfo,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radModifyGubun,
        setIsVisible_radModifyGubun,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_btnAuthResidentNo,
        setIsVisible_btnAuthResidentNo,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnSaveManager,
        setIsVisible_btnSaveManager,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_calCancelDate,
        setIsVisible_calCancelDate,
        isVisible_lbCancelDate,
        setIsVisible_lbCancelDate,
        isVisible_gdManagerList,
        setIsVisible_gdManagerList,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_lbAppointDate,
        setIsVisible_lbAppointDate,
        isVisible_calAppointDate,
        setIsVisible_calAppointDate,
        isVisible_lbText01,
        setIsVisible_lbText01,
        isVisible_lbResidentNoError,
        setIsVisible_lbResidentNoError,
        isVisible_lbMemberGubun,
        setIsVisible_lbMemberGubun,
        isVisible_radMember,
        setIsVisible_radMember,
        isVisible_btnMemberSave,
        setIsVisible_btnMemberSave,
        isVisible_Grid0,
        setIsVisible_Grid0,
        isVisible_btnLicenseList,
        setIsVisible_btnLicenseList,
        isVisible_medLcsNo,
        setIsVisible_medLcsNo,
        isVisible_lbPTel,
        setIsVisible_lbPTel,
        isVisible_edPTel,
        setIsVisible_edPTel,
        isVisible_cbxMember,
        setIsVisible_cbxMember,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_edAgreeDate,
        setIsVisible_edAgreeDate,
        isVisible_Div0,
        setIsVisible_Div0,
        isVisible_lbPersonKey,
        setIsVisible_lbPersonKey,
        isVisible_medPersonKey,
        setIsVisible_medPersonKey,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_medPersonKey2,
        setIsVisible_medPersonKey2,
        isVisible_lbLcsNo,
        setIsVisible_lbLcsNo,
        isVisible_lbModifyGubun,
        setIsVisible_lbModifyGubun,
        isVisible_btnKeyinJumin,
        setIsVisible_btnKeyinJumin,
        isVisible_btnKeyinHP,
        setIsVisible_btnKeyinHP,
        btnAuthResidentNo_OnClick,
        btnKeyinHP_OnClick,
        btnKeyinJumin_OnClick,
        btnLicenseList_OnClick,
        btnMemberSave_OnClick,
        btnMutilSort_OnClick,
        btnSaveManager_OnClick,
        btnSearch_OnClick,
        lfn_End,
        lfn_Save,
    };
};