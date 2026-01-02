// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oServiceGubun } from './FrmCOM0051MLocalLoginData';

export const useFrmCOM0051MLocalLogin = () => {
    const [ds_oServiceGubun, setds_oServiceGubun] = useState<Ids_oServiceGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oServiceGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const imgCancel_OnClick = () => {
        console.log('imgCancel_OnClick clicked');
    };
    const imgLogin_OnClick = () => {
        console.log('imgLogin_OnClick clicked');
    };

    return {
        isLoading,
        ds_oServiceGubun,
        imgCancel_OnClick,
        imgLogin_OnClick,
    };
};