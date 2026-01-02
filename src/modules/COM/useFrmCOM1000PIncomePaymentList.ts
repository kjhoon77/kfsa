// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioSearchGubun, Ids_iSearchotherincome, Ids_oSearchotherincome, Ids_oJIBU } from './FrmCOM1000PIncomePaymentListData';

export const useFrmCOM1000PIncomePaymentList = () => {
    const [ds_ioSearchGubun, setds_ioSearchGubun] = useState<Ids_ioSearchGubun[]>([]);
    const [ds_iSearchotherincome, setds_iSearchotherincome] = useState<Ids_iSearchotherincome[]>([]);
    const [ds_oSearchotherincome, setds_oSearchotherincome] = useState<Ids_oSearchotherincome[]>([]);
    const [ds_oJIBU, setds_oJIBU] = useState<Ids_oJIBU[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioSearchGubun([]);
            setds_iSearchotherincome([]);
            setds_oSearchotherincome([]);
            setds_oJIBU([]);
            setIsLoading(false);
        }, 500);
    }, []);

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
        ds_ioSearchGubun,
        ds_iSearchotherincome,
        ds_oSearchotherincome,
        ds_oJIBU,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};