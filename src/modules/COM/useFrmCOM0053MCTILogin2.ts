// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oServiceGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oUserLoginPossiblecheck {
}

export interface Ids_oUserCheck {
}

export interface Ids_oPasswordCheck {
}

export const useFrmCOM0053MCTILogin2 = () => {
    const [ds_oServiceGubun, setds_oServiceGubun] = useState<Ids_oServiceGubun[]>([]);
    const [ds_oUserLoginPossiblecheck, setds_oUserLoginPossiblecheck] = useState<Ids_oUserLoginPossiblecheck[]>([]);
    const [ds_oUserCheck, setds_oUserCheck] = useState<Ids_oUserCheck[]>([]);
    const [ds_oPasswordCheck, setds_oPasswordCheck] = useState<Ids_oPasswordCheck[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oServiceGubun([]);
            setds_oUserLoginPossiblecheck([]);
            setds_oUserCheck([]);
            setds_oPasswordCheck([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnReg_OnClick = () => {
        console.log('btnReg_OnClick clicked');
    };
    const imgCancel_OnClick = () => {
        console.log('imgCancel_OnClick clicked');
    };
    const imgLogin_OnClick = () => {
        console.log('imgLogin_OnClick clicked');
    };

    return {
        isLoading,
        ds_oServiceGubun,
        ds_oUserLoginPossiblecheck,
        ds_oUserCheck,
        ds_oPasswordCheck,
        btnReg_OnClick,
        imgCancel_OnClick,
        imgLogin_OnClick,
    };
};