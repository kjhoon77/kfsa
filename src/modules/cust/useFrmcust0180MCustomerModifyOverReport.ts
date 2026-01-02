// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioJibu, Ids_SearchJogeon, Ids_CustomerList, Ids_iCustomerInsert, Ids_Customer } from './Frmcust0180MCustomerModifyOverReportData';

export const useFrmcust0180MCustomerModifyOverReport = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_CustomerList, setds_CustomerList] = useState<Ids_CustomerList[]>([]);
    const [ds_iCustomerInsert, setds_iCustomerInsert] = useState<Ids_iCustomerInsert[]>([]);
    const [ds_Customer, setds_Customer] = useState<Ids_Customer[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_SearchJogeon([]);
            setds_CustomerList([]);
            setds_iCustomerInsert([]);
            setds_Customer([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioJibu,
        ds_SearchJogeon,
        ds_CustomerList,
        ds_iCustomerInsert,
        ds_Customer,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnExcell_OnClick,
        lfn_End,
        lfn_Print,
        lfn_Save,
    };
};