// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oUser, Ids_oUserGubun } from './Frmsys0021PUserListData';

export const useFrmsys0021PUserList = () => {
    const [ds_oUser, setds_oUser] = useState<Ids_oUser[]>([]);
    const [ds_oUserGubun, setds_oUserGubun] = useState<Ids_oUserGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnSelect, setIsVisible_btnSelect] = useState(true);
    const [isVisible_gdUser, setIsVisible_gdUser] = useState(true);
    const [isVisible_Button1, setIsVisible_Button1] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbUser, setIsVisible_lbUser] = useState(true);
    const [isVisible_edUser, setIsVisible_edUser] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_radUserGubun, setIsVisible_radUserGubun] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oUser([]);
            setds_oUserGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
        ds_oUser,
        ds_oUserGubun,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnSelect,
        setIsVisible_btnSelect,
        isVisible_gdUser,
        setIsVisible_gdUser,
        isVisible_Button1,
        setIsVisible_Button1,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbUser,
        setIsVisible_lbUser,
        isVisible_edUser,
        setIsVisible_edUser,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radUserGubun,
        setIsVisible_radUserGubun,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};