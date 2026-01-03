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
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_lbText02, setRawVisible_lbText02] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbPersonNm1, setRawVisible_lbPersonNm1] = useState(true);
    const [rawVisible_edPersonNm1, setRawVisible_edPersonNm1] = useState(true);
    const [rawVisible_lbBirthday1, setRawVisible_lbBirthday1] = useState(true);
    const [rawVisible_medBirthday, setRawVisible_medBirthday] = useState(true);
    const [rawVisible_lbPersonNm2, setRawVisible_lbPersonNm2] = useState(true);
    const [rawVisible_edPersonNm2, setRawVisible_edPersonNm2] = useState(true);
    const [rawVisible_lbResidentNo2, setRawVisible_lbResidentNo2] = useState(true);
    const [rawVisible_medResidentNo2, setRawVisible_medResidentNo2] = useState(true);
    const [rawVisible_lbPersonInfo, setRawVisible_lbPersonInfo] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_radModifyGubun, setRawVisible_radModifyGubun] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_btnAuthResidentNo, setRawVisible_btnAuthResidentNo] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnSaveManager, setRawVisible_btnSaveManager] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_calCancelDate, setRawVisible_calCancelDate] = useState(true);
    const [rawVisible_lbCancelDate, setRawVisible_lbCancelDate] = useState(true);
    const [rawVisible_gdManagerList, setRawVisible_gdManagerList] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_lbAppointDate, setRawVisible_lbAppointDate] = useState(true);
    const [rawVisible_calAppointDate, setRawVisible_calAppointDate] = useState(true);
    const [rawVisible_lbText01, setRawVisible_lbText01] = useState(true);
    const [rawVisible_lbResidentNoError, setRawVisible_lbResidentNoError] = useState(false);
    const [rawVisible_lbMemberGubun, setRawVisible_lbMemberGubun] = useState(true);
    const [rawVisible_radMember, setRawVisible_radMember] = useState(true);
    const [rawVisible_btnMemberSave, setRawVisible_btnMemberSave] = useState(false);
    const [rawVisible_Grid0, setRawVisible_Grid0] = useState(true);
    const [rawVisible_btnLicenseList, setRawVisible_btnLicenseList] = useState(true);
    const [rawVisible_medLcsNo, setRawVisible_medLcsNo] = useState(true);
    const [rawVisible_lbPTel, setRawVisible_lbPTel] = useState(true);
    const [rawVisible_edPTel, setRawVisible_edPTel] = useState(true);
    const [rawVisible_cbxMember, setRawVisible_cbxMember] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_edAgreeDate, setRawVisible_edAgreeDate] = useState(true);
    const [rawVisible_Div0, setRawVisible_Div0] = useState(true);
    const [rawVisible_lbPersonKey, setRawVisible_lbPersonKey] = useState(true);
    const [rawVisible_medPersonKey, setRawVisible_medPersonKey] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_medPersonKey2, setRawVisible_medPersonKey2] = useState(true);
    const [rawVisible_lbLcsNo, setRawVisible_lbLcsNo] = useState(true);
    const [rawVisible_lbModifyGubun, setRawVisible_lbModifyGubun] = useState(true);
    const [rawVisible_btnKeyinJumin, setRawVisible_btnKeyinJumin] = useState(true);
    const [rawVisible_btnKeyinHP, setRawVisible_btnKeyinHP] = useState(true);
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_lbText02 = rawVisible_lbText02 && rawVisible_Shape1;
    const setIsVisible_lbText02 = setRawVisible_lbText02;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbPersonNm1 = rawVisible_lbPersonNm1 && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonNm1 = setRawVisible_lbPersonNm1;
    const isVisible_edPersonNm1 = rawVisible_edPersonNm1 && rawVisible_shpGubunBox3;
    const setIsVisible_edPersonNm1 = setRawVisible_edPersonNm1;
    const isVisible_lbBirthday1 = rawVisible_lbBirthday1 && rawVisible_shpGubunBox3;
    const setIsVisible_lbBirthday1 = setRawVisible_lbBirthday1;
    const isVisible_medBirthday = rawVisible_medBirthday && rawVisible_shpGubunBox3;
    const setIsVisible_medBirthday = setRawVisible_medBirthday;
    const isVisible_lbPersonNm2 = rawVisible_lbPersonNm2 && rawVisible_Shape0;
    const setIsVisible_lbPersonNm2 = setRawVisible_lbPersonNm2;
    const isVisible_edPersonNm2 = rawVisible_edPersonNm2 && rawVisible_Shape0;
    const setIsVisible_edPersonNm2 = setRawVisible_edPersonNm2;
    const isVisible_lbResidentNo2 = rawVisible_lbResidentNo2 && rawVisible_Shape0;
    const setIsVisible_lbResidentNo2 = setRawVisible_lbResidentNo2;
    const isVisible_medResidentNo2 = rawVisible_medResidentNo2 && rawVisible_Shape0;
    const setIsVisible_medResidentNo2 = setRawVisible_medResidentNo2;
    const isVisible_lbPersonInfo = rawVisible_lbPersonInfo;
    const setIsVisible_lbPersonInfo = setRawVisible_lbPersonInfo;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_radModifyGubun = rawVisible_radModifyGubun;
    const setIsVisible_radModifyGubun = setRawVisible_radModifyGubun;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_btnAuthResidentNo = rawVisible_btnAuthResidentNo && rawVisible_Shape0;
    const setIsVisible_btnAuthResidentNo = setRawVisible_btnAuthResidentNo;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_Shape0;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnSaveManager = rawVisible_btnSaveManager && rawVisible_Shape2;
    const setIsVisible_btnSaveManager = setRawVisible_btnSaveManager;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort && rawVisible_Shape2;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_calCancelDate = rawVisible_calCancelDate && rawVisible_Shape2;
    const setIsVisible_calCancelDate = setRawVisible_calCancelDate;
    const isVisible_lbCancelDate = rawVisible_lbCancelDate && rawVisible_Shape2;
    const setIsVisible_lbCancelDate = setRawVisible_lbCancelDate;
    const isVisible_gdManagerList = rawVisible_gdManagerList && rawVisible_Shape2;
    const setIsVisible_gdManagerList = setRawVisible_gdManagerList;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape2;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_lbAppointDate = rawVisible_lbAppointDate && rawVisible_Shape0;
    const setIsVisible_lbAppointDate = setRawVisible_lbAppointDate;
    const isVisible_calAppointDate = rawVisible_calAppointDate && rawVisible_Shape0;
    const setIsVisible_calAppointDate = setRawVisible_calAppointDate;
    const isVisible_lbText01 = rawVisible_lbText01 && rawVisible_Shape1;
    const setIsVisible_lbText01 = setRawVisible_lbText01;
    const isVisible_lbResidentNoError = rawVisible_lbResidentNoError && rawVisible_Shape0;
    const setIsVisible_lbResidentNoError = setRawVisible_lbResidentNoError;
    const isVisible_lbMemberGubun = rawVisible_lbMemberGubun && rawVisible_Shape3;
    const setIsVisible_lbMemberGubun = setRawVisible_lbMemberGubun;
    const isVisible_radMember = rawVisible_radMember;
    const setIsVisible_radMember = setRawVisible_radMember;
    const isVisible_btnMemberSave = rawVisible_btnMemberSave;
    const setIsVisible_btnMemberSave = setRawVisible_btnMemberSave;
    const isVisible_Grid0 = rawVisible_Grid0;
    const setIsVisible_Grid0 = setRawVisible_Grid0;
    const isVisible_btnLicenseList = rawVisible_btnLicenseList && rawVisible_Shape0;
    const setIsVisible_btnLicenseList = setRawVisible_btnLicenseList;
    const isVisible_medLcsNo = rawVisible_medLcsNo;
    const setIsVisible_medLcsNo = setRawVisible_medLcsNo;
    const isVisible_lbPTel = rawVisible_lbPTel && rawVisible_Shape0;
    const setIsVisible_lbPTel = setRawVisible_lbPTel;
    const isVisible_edPTel = rawVisible_edPTel && rawVisible_Shape0;
    const setIsVisible_edPTel = setRawVisible_edPTel;
    const isVisible_cbxMember = rawVisible_cbxMember && rawVisible_Shape3;
    const setIsVisible_cbxMember = setRawVisible_cbxMember;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape3;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_edAgreeDate = rawVisible_edAgreeDate && rawVisible_Shape3;
    const setIsVisible_edAgreeDate = setRawVisible_edAgreeDate;
    const isVisible_Div0 = rawVisible_Div0;
    const setIsVisible_Div0 = setRawVisible_Div0;
    const isVisible_lbPersonKey = rawVisible_lbPersonKey && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonKey = setRawVisible_lbPersonKey;
    const isVisible_medPersonKey = rawVisible_medPersonKey && rawVisible_shpGubunBox3;
    const setIsVisible_medPersonKey = setRawVisible_medPersonKey;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape0;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_medPersonKey2 = rawVisible_medPersonKey2 && rawVisible_Shape0;
    const setIsVisible_medPersonKey2 = setRawVisible_medPersonKey2;
    const isVisible_lbLcsNo = rawVisible_lbLcsNo;
    const setIsVisible_lbLcsNo = setRawVisible_lbLcsNo;
    const isVisible_lbModifyGubun = rawVisible_lbModifyGubun && rawVisible_Shape1;
    const setIsVisible_lbModifyGubun = setRawVisible_lbModifyGubun;
    const isVisible_btnKeyinJumin = rawVisible_btnKeyinJumin && rawVisible_Shape0;
    const setIsVisible_btnKeyinJumin = setRawVisible_btnKeyinJumin;
    const isVisible_btnKeyinHP = rawVisible_btnKeyinHP && rawVisible_Shape0;
    const setIsVisible_btnKeyinHP = setRawVisible_btnKeyinHP;

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