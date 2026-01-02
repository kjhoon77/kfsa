// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oProfUser {
    INSACODE: string;
    USERNAME: string;
    DEPARTNM: string;
    JIKRYUL: string;
}

export const useFrmprofes0001P01ProfMgmt = () => {
    const [ds_oProfUser, setds_oProfUser] = useState<Ids_oProfUser[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oProfUser([]);
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
        ds_oProfUser,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};