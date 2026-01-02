// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioGubun, Ids_oCustList, Ids_oManagerList, Ids_oCustomerStatus, Ids_oBizGubun, Ids_oBnmCode } from './Frmcust0011PSearchbuildingData';

export const useFrmcust0011PSearchbuilding = () => {
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_oCustList, setds_oCustList] = useState<Ids_oCustList[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_oCustomerStatus, setds_oCustomerStatus] = useState<Ids_oCustomerStatus[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun([]);
            setds_oCustList([]);
            setds_oManagerList([]);
            setds_oCustomerStatus([]);
            setds_oBizGubun([]);
            setds_oBnmCode([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const chkCust_OnClick = () => {
        console.log('chkCust_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioGubun,
        ds_oCustList,
        ds_oManagerList,
        ds_oCustomerStatus,
        ds_oBizGubun,
        ds_oBnmCode,
        btnSelect_OnClick,
        chkCust_OnClick,
        lfn_End,
        lfn_Search,
    };
};