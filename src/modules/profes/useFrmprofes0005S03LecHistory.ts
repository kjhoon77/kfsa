// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_code {
    code: string;
    name: string;
}

export interface Ids_oEdutype {
    EDUTYPE: string;
}

export const useFrmprofes0005S03LecHistory = () => {
    const [ds_code, setds_code] = useState<Ids_code[]>([]);
    const [ds_oEdutype, setds_oEdutype] = useState<Ids_oEdutype[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_code([]);
            setds_oEdutype([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSave_OnClick = () => {
        console.log('btnSave_OnClick clicked');
    };

    return {
        isLoading,
        ds_code,
        ds_oEdutype,
        btnSave_OnClick,
    };
};