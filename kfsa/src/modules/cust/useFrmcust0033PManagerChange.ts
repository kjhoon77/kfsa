// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioManager, Ids_ModifyGubun, Ids_oManagerList, Ids_oStatus, Ids_MemberGubun, Ids_oMemberStatus, Ids_iCustomerInfo, Ids_oOldInfo, Ids_oMemberStat, Ids_oLicenseList, Ids_iCustomerModifyHistory, Ids_oEduPass, Ids_oAccountInfo, Ids_oPersonInfoAll } from './Frmcust0033PManagerChangeData';

export const useFrmcust0033PManagerChange = () => {
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
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_oEduPass, setds_oEduPass] = useState<Ids_oEduPass[]>([]);
    const [ds_oAccountInfo, setds_oAccountInfo] = useState<Ids_oAccountInfo[]>([]);
    const [ds_oPersonInfoAll, setds_oPersonInfoAll] = useState<Ids_oPersonInfoAll[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbPersonNm1, setRawVisible_lbPersonNm1] = useState(true);
    const [rawVisible_edPersonNm1, setRawVisible_edPersonNm1] = useState(true);
    const [rawVisible_lbBirthday1, setRawVisible_lbBirthday1] = useState(true);
    const [rawVisible_medBirthday1, setRawVisible_medBirthday1] = useState(true);
    const [rawVisible_lbPersonNm2, setRawVisible_lbPersonNm2] = useState(true);
    const [rawVisible_edPersonNm2, setRawVisible_edPersonNm2] = useState(true);
    const [rawVisible_lbResidentNo2, setRawVisible_lbResidentNo2] = useState(true);
    const [rawVisible_medResidentNo2, setRawVisible_medResidentNo2] = useState(true);
    const [rawVisible_lbPersonInfo, setRawVisible_lbPersonInfo] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnSaveManager, setRawVisible_btnSaveManager] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_calCancelDate, setRawVisible_calCancelDate] = useState(true);
    const [rawVisible_lbCancelDate, setRawVisible_lbCancelDate] = useState(true);
    const [rawVisible_gdManagerList, setRawVisible_gdManagerList] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_lbMemberGubun, setRawVisible_lbMemberGubun] = useState(true);
    const [rawVisible_cbxMember, setRawVisible_cbxMember] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_edAgreeDate, setRawVisible_edAgreeDate] = useState(true);
    const [rawVisible_Div0, setRawVisible_Div0] = useState(true);
    const [rawVisible_lbPersonKey, setRawVisible_lbPersonKey] = useState(true);
    const [rawVisible_medPersonKey1, setRawVisible_medPersonKey1] = useState(true);
    const [rawVisible_lbPersonKey2, setRawVisible_lbPersonKey2] = useState(true);
    const [rawVisible_medPersonKey2, setRawVisible_medPersonKey2] = useState(true);
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
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
    const isVisible_medBirthday1 = rawVisible_medBirthday1 && rawVisible_shpGubunBox3;
    const setIsVisible_medBirthday1 = setRawVisible_medBirthday1;
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
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
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
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_lbMemberGubun = rawVisible_lbMemberGubun && rawVisible_Shape3;
    const setIsVisible_lbMemberGubun = setRawVisible_lbMemberGubun;
    const isVisible_cbxMember = rawVisible_cbxMember && rawVisible_Shape3;
    const setIsVisible_cbxMember = setRawVisible_cbxMember;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape3;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_edAgreeDate = rawVisible_edAgreeDate && rawVisible_Shape3;
    const setIsVisible_edAgreeDate = setRawVisible_edAgreeDate;
    const isVisible_Div0 = rawVisible_Div0 && rawVisible_Shape0;
    const setIsVisible_Div0 = setRawVisible_Div0;
    const isVisible_lbPersonKey = rawVisible_lbPersonKey && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonKey = setRawVisible_lbPersonKey;
    const isVisible_medPersonKey1 = rawVisible_medPersonKey1 && rawVisible_shpGubunBox3;
    const setIsVisible_medPersonKey1 = setRawVisible_medPersonKey1;
    const isVisible_lbPersonKey2 = rawVisible_lbPersonKey2 && rawVisible_Shape0;
    const setIsVisible_lbPersonKey2 = setRawVisible_lbPersonKey2;
    const isVisible_medPersonKey2 = rawVisible_medPersonKey2 && rawVisible_Shape0;
    const setIsVisible_medPersonKey2 = setRawVisible_medPersonKey2;

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
            setds_iCustomerModifyHistory([]);
            setds_oEduPass([]);
            setds_oAccountInfo([]);
            setds_oPersonInfoAll([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSaveManager_OnClick = () => {
        console.log('btnSaveManager_OnClick clicked');
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
        ds_iCustomerModifyHistory,
        ds_oEduPass,
        ds_oAccountInfo,
        ds_oPersonInfoAll,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
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
        isVisible_medBirthday1,
        setIsVisible_medBirthday1,
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
        isVisible_btnSave,
        setIsVisible_btnSave,
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
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_lbMemberGubun,
        setIsVisible_lbMemberGubun,
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
        isVisible_medPersonKey1,
        setIsVisible_medPersonKey1,
        isVisible_lbPersonKey2,
        setIsVisible_lbPersonKey2,
        isVisible_medPersonKey2,
        setIsVisible_medPersonKey2,
        btnMutilSort_OnClick,
        btnSaveManager_OnClick,
        lfn_End,
        lfn_Save,
    };
};