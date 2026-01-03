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
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_gdManagerList, setRawVisible_gdManagerList] = useState(true);
    const [rawVisible_lbUseYn, setRawVisible_lbUseYn] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbGroupCode, setRawVisible_lbGroupCode] = useState(true);
    const [rawVisible_edManagerNM, setRawVisible_edManagerNM] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_medResidentNo, setRawVisible_medResidentNo] = useState(true);
    const [rawVisible_btnSelect, setRawVisible_btnSelect] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_btnSaveManager, setRawVisible_btnSaveManager] = useState(true);
    const [rawVisible_btnMutilSort2, setRawVisible_btnMutilSort2] = useState(true);
    const [rawVisible_calCancelDate, setRawVisible_calCancelDate] = useState(true);
    const [rawVisible_lbCancelDate, setRawVisible_lbCancelDate] = useState(true);
    const [rawVisible_gdManagerInfo, setRawVisible_gdManagerInfo] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_btnNew, setRawVisible_btnNew] = useState(true);
    const [rawVisible_lbNotice, setRawVisible_lbNotice] = useState(false);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_radJibu, setRawVisible_radJibu] = useState(true);
    const [rawVisible_lbPTel, setRawVisible_lbPTel] = useState(true);
    const [rawVisible_edHPTel, setRawVisible_edHPTel] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_gdLicenseList, setRawVisible_gdLicenseList] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(true);
    const [rawVisible_btnSelectLicense, setRawVisible_btnSelectLicense] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_gdManagerList = rawVisible_gdManagerList && rawVisible_Shape1;
    const setIsVisible_gdManagerList = setRawVisible_gdManagerList;
    const isVisible_lbUseYn = rawVisible_lbUseYn && rawVisible_shpGubunBox;
    const setIsVisible_lbUseYn = setRawVisible_lbUseYn;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort && rawVisible_Shape1;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbGroupCode = rawVisible_lbGroupCode && rawVisible_shpGubunBox;
    const setIsVisible_lbGroupCode = setRawVisible_lbGroupCode;
    const isVisible_edManagerNM = rawVisible_edManagerNM && rawVisible_shpGubunBox;
    const setIsVisible_edManagerNM = setRawVisible_edManagerNM;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_medResidentNo = rawVisible_medResidentNo && rawVisible_shpGubunBox;
    const setIsVisible_medResidentNo = setRawVisible_medResidentNo;
    const isVisible_btnSelect = rawVisible_btnSelect && rawVisible_Shape1;
    const setIsVisible_btnSelect = setRawVisible_btnSelect;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_btnSaveManager = rawVisible_btnSaveManager && rawVisible_Shape2;
    const setIsVisible_btnSaveManager = setRawVisible_btnSaveManager;
    const isVisible_btnMutilSort2 = rawVisible_btnMutilSort2 && rawVisible_Shape2;
    const setIsVisible_btnMutilSort2 = setRawVisible_btnMutilSort2;
    const isVisible_calCancelDate = rawVisible_calCancelDate && rawVisible_Shape2;
    const setIsVisible_calCancelDate = setRawVisible_calCancelDate;
    const isVisible_lbCancelDate = rawVisible_lbCancelDate && rawVisible_Shape2;
    const setIsVisible_lbCancelDate = setRawVisible_lbCancelDate;
    const isVisible_gdManagerInfo = rawVisible_gdManagerInfo && rawVisible_Shape2;
    const setIsVisible_gdManagerInfo = setRawVisible_gdManagerInfo;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_btnNew = rawVisible_btnNew && rawVisible_shpGubunBox;
    const setIsVisible_btnNew = setRawVisible_btnNew;
    const isVisible_lbNotice = rawVisible_lbNotice;
    const setIsVisible_lbNotice = setRawVisible_lbNotice;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_radJibu = rawVisible_radJibu && rawVisible_shpGubunBox;
    const setIsVisible_radJibu = setRawVisible_radJibu;
    const isVisible_lbPTel = rawVisible_lbPTel && rawVisible_shpGubunBox;
    const setIsVisible_lbPTel = setRawVisible_lbPTel;
    const isVisible_edHPTel = rawVisible_edHPTel && rawVisible_shpGubunBox;
    const setIsVisible_edHPTel = setRawVisible_edHPTel;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_gdLicenseList = rawVisible_gdLicenseList && rawVisible_Shape0;
    const setIsVisible_gdLicenseList = setRawVisible_gdLicenseList;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_Button0 = rawVisible_Button0 && rawVisible_Shape0;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_btnSelectLicense = rawVisible_btnSelectLicense && rawVisible_Shape0;
    const setIsVisible_btnSelectLicense = setRawVisible_btnSelectLicense;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;

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
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_gdManagerList,
        setIsVisible_gdManagerList,
        isVisible_lbUseYn,
        setIsVisible_lbUseYn,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_lbGroupCode,
        setIsVisible_lbGroupCode,
        isVisible_edManagerNM,
        setIsVisible_edManagerNM,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_medResidentNo,
        setIsVisible_medResidentNo,
        isVisible_btnSelect,
        setIsVisible_btnSelect,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_btnSaveManager,
        setIsVisible_btnSaveManager,
        isVisible_btnMutilSort2,
        setIsVisible_btnMutilSort2,
        isVisible_calCancelDate,
        setIsVisible_calCancelDate,
        isVisible_lbCancelDate,
        setIsVisible_lbCancelDate,
        isVisible_gdManagerInfo,
        setIsVisible_gdManagerInfo,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_btnNew,
        setIsVisible_btnNew,
        isVisible_lbNotice,
        setIsVisible_lbNotice,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_radJibu,
        setIsVisible_radJibu,
        isVisible_lbPTel,
        setIsVisible_lbPTel,
        isVisible_edHPTel,
        setIsVisible_edHPTel,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_gdLicenseList,
        setIsVisible_gdLicenseList,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_btnSelectLicense,
        setIsVisible_btnSelectLicense,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
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