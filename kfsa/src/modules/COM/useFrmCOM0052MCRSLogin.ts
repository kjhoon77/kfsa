// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oServiceGubun, Ids_oUserLoginPossiblecheck, Ids_oUserCheck, Ids_oPasswordCheck } from './FrmCOM0052MCRSLoginData';

export const useFrmCOM0052MCRSLogin = () => {
    const [ds_oServiceGubun, setds_oServiceGubun] = useState<Ids_oServiceGubun[]>([]);
    const [ds_oUserLoginPossiblecheck, setds_oUserLoginPossiblecheck] = useState<Ids_oUserLoginPossiblecheck[]>([]);
    const [ds_oUserCheck, setds_oUserCheck] = useState<Ids_oUserCheck[]>([]);
    const [ds_oPasswordCheck, setds_oPasswordCheck] = useState<Ids_oPasswordCheck[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_imgImage, setRawVisible_imgImage] = useState(true);
    const [rawVisible_edUserId, setRawVisible_edUserId] = useState(true);
    const [rawVisible_edPassword, setRawVisible_edPassword] = useState(true);
    const [rawVisible_chkSaveUser, setRawVisible_chkSaveUser] = useState(true);
    const [rawVisible_cbxDept, setRawVisible_cbxDept] = useState(false);
    const [rawVisible_imgLogin, setRawVisible_imgLogin] = useState(true);
    const [rawVisible_imgCancel, setRawVisible_imgCancel] = useState(true);
    const [rawVisible_lbDept, setRawVisible_lbDept] = useState(false);
    const [rawVisible_radServiceGubun, setRawVisible_radServiceGubun] = useState(false);
    const isVisible_imgImage = rawVisible_imgImage;
    const setIsVisible_imgImage = setRawVisible_imgImage;
    const isVisible_edUserId = rawVisible_edUserId;
    const setIsVisible_edUserId = setRawVisible_edUserId;
    const isVisible_edPassword = rawVisible_edPassword;
    const setIsVisible_edPassword = setRawVisible_edPassword;
    const isVisible_chkSaveUser = rawVisible_chkSaveUser;
    const setIsVisible_chkSaveUser = setRawVisible_chkSaveUser;
    const isVisible_cbxDept = rawVisible_cbxDept;
    const setIsVisible_cbxDept = setRawVisible_cbxDept;
    const isVisible_imgLogin = rawVisible_imgLogin;
    const setIsVisible_imgLogin = setRawVisible_imgLogin;
    const isVisible_imgCancel = rawVisible_imgCancel;
    const setIsVisible_imgCancel = setRawVisible_imgCancel;
    const isVisible_lbDept = rawVisible_lbDept;
    const setIsVisible_lbDept = setRawVisible_lbDept;
    const isVisible_radServiceGubun = rawVisible_radServiceGubun;
    const setIsVisible_radServiceGubun = setRawVisible_radServiceGubun;

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
        isVisible_imgImage,
        setIsVisible_imgImage,
        isVisible_edUserId,
        setIsVisible_edUserId,
        isVisible_edPassword,
        setIsVisible_edPassword,
        isVisible_chkSaveUser,
        setIsVisible_chkSaveUser,
        isVisible_cbxDept,
        setIsVisible_cbxDept,
        isVisible_imgLogin,
        setIsVisible_imgLogin,
        isVisible_imgCancel,
        setIsVisible_imgCancel,
        isVisible_lbDept,
        setIsVisible_lbDept,
        isVisible_radServiceGubun,
        setIsVisible_radServiceGubun,
        imgCancel_OnClick,
        imgLogin_OnClick,
    };
};