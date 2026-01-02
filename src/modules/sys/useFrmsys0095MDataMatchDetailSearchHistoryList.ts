// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oSearchHistory {
}

export interface Ids_oGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioUserList {
    SHGUBUN: string;
    SHMGNO: string;
    SHPROCDATE: string;
    SHPROCIP: string;
    SHPROCSABUN: string;
    SHWHERE: string;
    SHWORKGUBUN: string;
    SHWORKGUBUNNM: string;
}

export interface Ids_ioDeptList {
    SHGUBUN: string;
    SHMGNO: string;
    SHPROCDATE: string;
    SHPROCIP: string;
    SHPROCSABUN: string;
    SHWHERE: string;
    SHWORKGUBUN: string;
    SHWORKGUBUNNM: string;
}

export interface Ids_oMenu {
    CD: string;
    DATA: string;
}

export const useFrmsys0095MDataMatchDetailSearchHistoryList = () => {
    const [ds_oSearchHistory, setds_oSearchHistory] = useState<Ids_oSearchHistory[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_ioUserList, setds_ioUserList] = useState<Ids_ioUserList[]>([]);
    const [ds_ioDeptList, setds_ioDeptList] = useState<Ids_ioDeptList[]>([]);
    const [ds_oMenu, setds_oMenu] = useState<Ids_oMenu[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSearchHistory([]);
            setds_oGubun([]);
            setds_ioUserList([]);
            setds_ioDeptList([]);
            setds_oMenu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
        ds_oMenu,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};