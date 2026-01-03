// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_oTrainingOrder, Ids_oJibu, Ids_oSearchGubun, Ids_oCourseGubun, Ids_oMunjeGubun, Ids_ioCourseGubun, Ids_ioMunjeGubun, Ids_oOnlineGubun } from './Frmtraining0015MTrainingOrderListData';

export const useFrmtraining0015MTrainingOrderList = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oTrainingOrder, setds_oTrainingOrder] = useState<Ids_oTrainingOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [ds_oMunjeGubun, setds_oMunjeGubun] = useState<Ids_oMunjeGubun[]>([]);
    const [ds_ioCourseGubun, setds_ioCourseGubun] = useState<Ids_ioCourseGubun[]>([]);
    const [ds_ioMunjeGubun, setds_ioMunjeGubun] = useState<Ids_ioMunjeGubun[]>([]);
    const [ds_oOnlineGubun, setds_oOnlineGubun] = useState<Ids_oOnlineGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oTrainingOrder([]);
            setds_oJibu([]);
            setds_oSearchGubun([]);
            setds_oCourseGubun([]);
            setds_oMunjeGubun([]);
            setds_ioCourseGubun([]);
            setds_ioMunjeGubun([]);
            setds_oOnlineGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_oTrainingOrder,
        ds_oJibu,
        ds_oSearchGubun,
        ds_oCourseGubun,
        ds_oMunjeGubun,
        ds_ioCourseGubun,
        ds_ioMunjeGubun,
        ds_oOnlineGubun,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};