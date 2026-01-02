// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oUserAuth {
    UAAUTH: string;
    MMENUID: string;
    MMENUNM: string;
    MURL: string;
    USE_YN: string;
    PSABUN: string;
}

export interface Ids_ioUser {
    ADMINGUBUN: string;
    PPOSITNCD: string;
    PPOSITNNM: string;
    PPERSONNM: string;
    PSABUN: string;
    PDEPTCD: string;
    PDEPTNM: string;
    SEL: string;
}

export interface Ids_ioDeptAuth {
    DAAGTMGNO: string;
    DAAGUBUN: string;
    DAAUSEYN: string;
}

export const useFrmsys0022MUserAuthCopy = () => {
    const [ds_oUserAuth, setds_oUserAuth] = useState<Ids_oUserAuth[]>([]);
    const [ds_ioUser, setds_ioUser] = useState<Ids_ioUser[]>([]);
    const [ds_ioDeptAuth, setds_ioDeptAuth] = useState<Ids_ioDeptAuth[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oUserAuth([]);
            setds_ioUser([]);
            setds_ioDeptAuth([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
        ds_oUserAuth,
        ds_ioUser,
        ds_ioDeptAuth,
        btnMutilSort_OnClick,
        btnSearchUser_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};