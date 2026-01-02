// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioUserAuth {
    UAAUTH: string;
    MMENUID: string;
    MMENUNM: string;
    MURL: string;
    USE_YN: string;
    PSABUN: string;
}

export interface Ids_oMenuTree {
    MORDERSEQ: string;
    MMENUID: string;
    MENULEVEL: string;
    MPARENTMENUID: string;
    MMENUNM: string;
    USE_YN: string;
    MURL: string;
    MENU_REMARK: string;
    MURLTYPE: string;
    MSYSGUBUN: string;
}

export interface Ids_ioDeptAuth {
    DAAGTMGNO: string;
    DAAGUBUN: string;
    DAAUSEYN: string;
}

export const useFrmsys0020MUserAuthManagementNew = () => {
    const [ds_ioUserAuth, setds_ioUserAuth] = useState<Ids_ioUserAuth[]>([]);
    const [ds_oMenuTree, setds_oMenuTree] = useState<Ids_oMenuTree[]>([]);
    const [ds_ioDeptAuth, setds_ioDeptAuth] = useState<Ids_ioDeptAuth[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioUserAuth([]);
            setds_oMenuTree([]);
            setds_ioDeptAuth([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnDeleteKemsAuth_OnClick = () => {
        console.log('btnDeleteKemsAuth_OnClick clicked');
    };
    const btnSearchUser_OnClick = () => {
        console.log('btnSearchUser_OnClick clicked');
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
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioUserAuth,
        ds_oMenuTree,
        ds_ioDeptAuth,
        btnDeleteKemsAuth_OnClick,
        btnSearchUser_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};