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
        isVisible_Div0,
        setIsVisible_Div0,
        btnMutilSort_OnClick,
        btnSaveManager_OnClick,
        lfn_End,
        lfn_Save,
    };
};