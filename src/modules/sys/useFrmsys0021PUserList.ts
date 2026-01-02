// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oUser, Ids_oUserGubun } from './Frmsys0021PUserListData';

export const useFrmsys0021PUserList = () => {
    const [ds_oUser, setds_oUser] = useState<Ids_oUser[]>([]);
    const [ds_oUserGubun, setds_oUserGubun] = useState<Ids_oUserGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};