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
    const [isVisible_Div0, setIsVisible_Div0] = useState(true);

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
        isVisible_Div0,
        setIsVisible_Div0,
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