// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oManagerChange, Ids_oManagerList, Ids_oOverBiz, Ids_iOverBiz, Ids_oStatus, Ids_oJibu, Ids_oLicenseList } from './Frmcust0018PManagerListData';

export const useFrmcust0018PManagerList = () => {
    const [ds_oManagerChange, setds_oManagerChange] = useState<Ids_oManagerChange[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_oOverBiz, setds_oOverBiz] = useState<Ids_oOverBiz[]>([]);
    const [ds_iOverBiz, setds_iOverBiz] = useState<Ids_iOverBiz[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oLicenseList, setds_oLicenseList] = useState<Ids_oLicenseList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oManagerChange([]);
            setds_oManagerList([]);
            setds_oOverBiz([]);
            setds_iOverBiz([]);
            setds_oStatus([]);
            setds_oJibu([]);
            setds_oLicenseList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort2_OnClick = () => {
        console.log('btnMutilSort2_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnNew_OnClick = () => {
        console.log('btnNew_OnClick clicked');
    };
    const btnSaveManager_OnClick = () => {
        console.log('btnSaveManager_OnClick clicked');
    };
    const btnSelectLicense_OnClick = () => {
        console.log('btnSelectLicense_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oManagerChange,
        ds_oManagerList,
        ds_oOverBiz,
        ds_iOverBiz,
        ds_oStatus,
        ds_oJibu,
        ds_oLicenseList,
        btnMutilSort2_OnClick,
        btnMutilSort_OnClick,
        btnNew_OnClick,
        btnSaveManager_OnClick,
        btnSelectLicense_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};