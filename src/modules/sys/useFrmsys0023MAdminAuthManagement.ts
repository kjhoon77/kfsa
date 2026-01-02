// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioAdminAuth {
    AAGUBUN: string;
    PDEPTCD: string;
    PDEPTNM: string;
    PPERSONNM: string;
    PPOSITNNM: string;
    PSABUN: string;
    USE_YN: string;
}

export interface Ids_oAdminGubun {
    CD: string;
    DATA: string;
}

export const useFrmsys0023MAdminAuthManagement = () => {
    const [ds_ioAdminAuth, setds_ioAdminAuth] = useState<Ids_ioAdminAuth[]>([]);
    const [ds_oAdminGubun, setds_oAdminGubun] = useState<Ids_oAdminGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioAdminAuth([]);
            setds_oAdminGubun([]);
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
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
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
        ds_ioAdminAuth,
        ds_oAdminGubun,
        btnMutilSort_OnClick,
        btnSearchUser_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Excel,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};