// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oServiceGubun, Ids_oUserLoginPossiblecheck, IDataset0, Ids_cond, Ids_oUserCheck, Ids_oPasswordCheck } from './FrmCOM0050MLoginData';

export const useFrmCOM0050MLogin = () => {
    const [ds_oServiceGubun, setds_oServiceGubun] = useState<Ids_oServiceGubun[]>([]);
    const [ds_oUserLoginPossiblecheck, setds_oUserLoginPossiblecheck] = useState<Ids_oUserLoginPossiblecheck[]>([]);
    const [Dataset0, setDataset0] = useState<IDataset0[]>([]);
    const [ds_cond, setds_cond] = useState<Ids_cond[]>([]);
    const [ds_oUserCheck, setds_oUserCheck] = useState<Ids_oUserCheck[]>([]);
    const [ds_oPasswordCheck, setds_oPasswordCheck] = useState<Ids_oPasswordCheck[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oServiceGubun([]);
            setds_oUserLoginPossiblecheck([]);
            setDataset0([]);
            setds_cond([]);
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
        Dataset0,
        ds_cond,
        ds_oUserCheck,
        ds_oPasswordCheck,
        imgCancel_OnClick,
        imgLogin_OnClick,
    };
};