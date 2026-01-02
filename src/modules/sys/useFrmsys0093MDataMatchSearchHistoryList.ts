// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oSearchHistory, Ids_oGubun, Ids_ioUserList, Ids_ioDeptList } from './Frmsys0093MDataMatchSearchHistoryListData';

export const useFrmsys0093MDataMatchSearchHistoryList = () => {
    const [ds_oSearchHistory, setds_oSearchHistory] = useState<Ids_oSearchHistory[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_ioUserList, setds_ioUserList] = useState<Ids_ioUserList[]>([]);
    const [ds_ioDeptList, setds_ioDeptList] = useState<Ids_ioDeptList[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSearchHistory([]);
            setds_oGubun([]);
            setds_ioUserList([]);
            setds_ioDeptList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSearchWork_OnClick = () => {
        console.log('btnSearchWork_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oSearchHistory,
        ds_oGubun,
        ds_ioUserList,
        ds_ioDeptList,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnMutilSort_OnClick,
        btnSearchWork_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};