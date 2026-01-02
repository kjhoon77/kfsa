// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oMenuAuthUser {
    SYSGUBUNNM: string;
    CCORDERSEQ: string;
    JORDERSEQ: string;
    ADMINGUBUN: string;
    PPOSITNCD: string;
    PPOSITNNM: string;
    PPERSONNM: string;
    PSABUN: string;
    PDEPTCD: string;
    PDEPTNM: string;
}

export interface Ids_oSysGubun {
    CD: string;
    DATA: string;
}

export const useFrmsys0024MMenuAuthUserList = () => {
    const [ds_oMenuAuthUser, setds_oMenuAuthUser] = useState<Ids_oMenuAuthUser[]>([]);
    const [ds_oSysGubun, setds_oSysGubun] = useState<Ids_oSysGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oMenuAuthUser([]);
            setds_oSysGubun([]);
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
        ds_oMenuAuthUser,
        ds_oSysGubun,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};