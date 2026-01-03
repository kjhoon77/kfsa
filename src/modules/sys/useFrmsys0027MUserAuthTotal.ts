// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oSearchHistory, Ids_oBizGubun, Ids_ioUserList, Ids_ioDeptList, Ids_ioDeptAuthList, Ids_ioUserAuthTotal } from './Frmsys0027MUserAuthTotalData';

export const useFrmsys0027MUserAuthTotal = () => {
    const [ds_oSearchHistory, setds_oSearchHistory] = useState<Ids_oSearchHistory[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [ds_ioUserList, setds_ioUserList] = useState<Ids_ioUserList[]>([]);
    const [ds_ioDeptList, setds_ioDeptList] = useState<Ids_ioDeptList[]>([]);
    const [ds_ioDeptAuthList, setds_ioDeptAuthList] = useState<Ids_ioDeptAuthList[]>([]);
    const [ds_ioUserAuthTotal, setds_ioUserAuthTotal] = useState<Ids_ioUserAuthTotal[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_lbTitle, setIsVisible_lbTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSearchHistory([]);
            setds_oBizGubun([]);
            setds_ioUserList([]);
            setds_ioDeptList([]);
            setds_ioDeptAuthList([]);
            setds_ioUserAuthTotal([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
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
        ds_oBizGubun,
        ds_ioUserList,
        ds_ioDeptList,
        ds_ioDeptAuthList,
        ds_ioUserAuthTotal,
        isVisible_lbTitle,
        setIsVisible_lbTitle,
        lfn_End,
        lfn_Excel,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};