// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oServiceGubun } from './FrmCOM0051MLocalLoginData';

export const useFrmCOM0051MLocalLogin = () => {
    const [ds_oServiceGubun, setds_oServiceGubun] = useState<Ids_oServiceGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_imgImage, setIsVisible_imgImage] = useState(true);
    const [isVisible_imgLogin, setIsVisible_imgLogin] = useState(true);
    const [isVisible_imgCancel, setIsVisible_imgCancel] = useState(true);
    const [isVisible_edPassword, setIsVisible_edPassword] = useState(true);

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
        isVisible_imgImage,
        setIsVisible_imgImage,
        isVisible_imgLogin,
        setIsVisible_imgLogin,
        isVisible_imgCancel,
        setIsVisible_imgCancel,
        isVisible_edPassword,
        setIsVisible_edPassword,
        imgCancel_OnClick,
        imgLogin_OnClick,
    };
};