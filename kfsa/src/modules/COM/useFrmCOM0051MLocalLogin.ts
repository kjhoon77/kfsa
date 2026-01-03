// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oServiceGubun } from './FrmCOM0051MLocalLoginData';

export const useFrmCOM0051MLocalLogin = () => {
    const [ds_oServiceGubun, setds_oServiceGubun] = useState<Ids_oServiceGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_imgImage, setRawVisible_imgImage] = useState(true);
    const [rawVisible_imgLogin, setRawVisible_imgLogin] = useState(true);
    const [rawVisible_imgCancel, setRawVisible_imgCancel] = useState(true);
    const [rawVisible_edPassword, setRawVisible_edPassword] = useState(true);
    const isVisible_imgImage = rawVisible_imgImage;
    const setIsVisible_imgImage = setRawVisible_imgImage;
    const isVisible_imgLogin = rawVisible_imgLogin;
    const setIsVisible_imgLogin = setRawVisible_imgLogin;
    const isVisible_imgCancel = rawVisible_imgCancel;
    const setIsVisible_imgCancel = setRawVisible_imgCancel;
    const isVisible_edPassword = rawVisible_edPassword;
    const setIsVisible_edPassword = setRawVisible_edPassword;

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