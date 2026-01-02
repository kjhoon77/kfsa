// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioUser {
    ADMINGUBUN: string;
    PPOSITNCD: string;
    PPOSITNNM: string;
    PPERSONNM: string;
    PSABUN: string;
    PDEPTCD: string;
    PDEPTNM: string;
}

export const useFrmsys0026MUserManagement = () => {
    const [ds_ioUser, setds_ioUser] = useState<Ids_ioUser[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioUser([]);
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
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioUser,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Search,
    };
};